---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: winter-cms-with-laravel
url: "https://www.linkedin.com/learning/winter-cms-with-laravel"
duration_minutes: 79
duration: 1h 19m
level: Intermediate
updated: 2/28/2022
learners: 10281
skills:
  - Content Management Systems (CMS)
  - Laravel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHUs_xfbKqISA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1645736076311?e=2147483647&amp;v=beta&amp;t=7OPdhJ74i4bBhkLQQ85KoBPFfT-2Juw9FVmzRND_4xU"
linkedin_topic: Web Development
learning_paths:
  - '[Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)'
prev_courses:
  - '[Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md)'
path_nav: '[{"path":"Build Your Laravel Skills","position":7,"total":7,"prev":"Essential Statamic for PHP and Laravel Developers","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/content-management-systems-cms
  - skill/laravel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Winter%20CMS%20with%20Laravel.md)

![Winter CMS with Laravel](https://media.licdn.com/dms/image/v2/C4E0DAQHUs_xfbKqISA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1645736076311?e=2147483647&amp;v=beta&amp;t=7OPdhJ74i4bBhkLQQ85KoBPFfT-2Juw9FVmzRND_4xU)

# Winter CMS with Laravel

> If you’re looking for a way to move a static website onto a content management system (CMS), Winter—the free, open-source CMS based on the Laravel PHP framework—is one of the best available tools that you can use to achieve your goal. In this course, full-stack developer Ana Lisboa covers the essential aspects of moving a static website to Winter CMS.Get an overview of how Winter works, including 

> [LinkedIn Learning](https://www.linkedin.com/learning/winter-cms-with-laravel) | 1h 19m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [How to turn a static website into a content-managed one](#how-to-turn-a-static-website-into-a-content-managed-one)
  - [What you should know](#what-you-should-know)
  - [Course project: The sample website](#course-project-the-sample-website)
  - [Access the course files](#access-the-course-files)
  - [Local development configurations](#local-development-configurations)
- [**1. Introduction to Winter CMS**](#1-introduction-to-winter-cms) (3 videos)
  - [Winter CMS overview and installation](#winter-cms-overview-and-installation)
  - [Admin section overview: Dashboard, media, and settings pages](#admin-section-overview-dashboard-media-and-settings-pages)
  - [The CMS page](#the-cms-page)
- [**2. Moving to Winter**](#2-moving-to-winter) (6 videos)
  - [Exploring the default theme and creating your own](#exploring-the-default-theme-and-creating-your-own)
  - [Moving your website to Winter](#moving-your-website-to-winter)
  - [Extracting the layout](#extracting-the-layout)
  - [Home and error pages](#home-and-error-pages)
  - [Turning the main sections modular with partials](#turning-the-main-sections-modular-with-partials)
  - [Extracting text into content](#extracting-text-into-content)
- [**3. Using Winter Features**](#3-using-winter-features) (5 videos)
  - [Using a plug-in to set the navbar](#using-a-plug-in-to-set-the-navbar)
  - [Winter asset compilation](#winter-asset-compilation)
  - [Winter theme variables and asset customization](#winter-theme-variables-and-asset-customization)
  - [Challenge: Customizing the 404 page](#challenge-customizing-the-404-page)
  - [Solution: Customizing the 404 page](#solution-customizing-the-404-page)
- [**4. Winter Plug-Ins and Prepping for Production**](#4-winter-plug-ins-and-prepping-for-production) (4 videos)
  - [Magic Forms plug-in](#magic-forms-plug-in)
  - [Clear cache widget](#clear-cache-widget)
  - [Google Analytics plug-in](#google-analytics-plug-in)
  - [Prepping your website for production](#prepping-your-website-for-production)
- [**Conclusion**](#conclusion) (1 videos)
  - [Further your knowledge and connect to the community](#further-your-knowledge-and-connect-to-the-community)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How to turn a static website into a content-managed one](https://www.linkedin.com/learning/winter-cms-with-laravel/how-to-turn-a-static-website-into-a-content-managed-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/how-to-turn-a-static-website-into-a-content-managed-one?u=76281980&t=0)** - [Ana] Are you aware that 69% of North American marketeers say dynamic content is important for their website? If you've built a website or you regularly build websites, you know the difficulty of maintaining and refreshing their contents over time. In this course, you'll learn how to use Winter, a [Laravel](../../Skills/Web%20Development/Laravel.md) [Content Management](../../Skills/Web%20Development/Content%20Management.md) system, so that all base CMS requirements are taken care of for you, while at the same time, making it easy to manage its contents. With my guidance, you'll get to take a static website and turn it into a CMS-managed one. You'll also be invited to explore and improve on your own throughout the course and will have the chance to practice what you've learned in a challenge. Hi, I'm Ana, and I'll be joining you in this course. I am a full stack web developer with a background in information systems, and I have been developing for the web for six years now. Join me now in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning to turn your website from static to dynamic ones that any user can edit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cms (2)
> **Speakers:** - [ana] (1)

#### [What you should know](https://www.linkedin.com/learning/winter-cms-with-laravel/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, we are focusing on moving a static website into a [Content Management](../../Skills/Web%20Development/Content%20Management.md) system, or a CMS managed one. More specifically, you'll learn how to take the already existent static website for Wisdom Pet Medicine and allow it to be managed in a CMS. So to follow this course, you are expected to have some basic website development knowledge. In particular, you should be familiar with [HTML](../../Skills/Web%20Development/HTML.md), CSS, and programming basic concepts, like the use of variables, loops, and control structures. If you do have any previous experience with Twig templating, it is a plus, since this is the templating language used in Winter CMS. I invite you to take a look at the Twig website if you'd like to get more familiar with that syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** cms (3), html (1), css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Course project: The sample website](https://www.linkedin.com/learning/winter-cms-with-laravel/course-project-the-sample-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/course-project-the-sample-website?u=76281980&t=0)** - [Instructor] To show you how to use Winter CMS, we'll be using a demo one-page website. This website has all that is needed to get you started with using Winter and to know its features. Its main sections are hero section, company mission, services, staff, testimonials, contact form and the website folder with contact information. There is also a 404 page to better show the user they've encountered a non-existent page that is as well designed as the remainder of the website and the custom error page, so that if there's an error, the user is still immersed in the website look and feel.

> [!info]- Semantic Content
>
> **Env Vars:** cms (1)
> **Speakers:** - [instructor] (1)

#### [Access the course files](https://www.linkedin.com/learning/winter-cms-with-laravel/access-the-course-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/access-the-course-files?u=76281980&t=0)** - [Instructor] To follow along with the course, it is recommended that you follow the course on your own computer as we go. For this, in each lesson where website files are modified, you can download the exercise files under the Related to This Course section. I'll be sharing two sets of files, the demo websites and the winter website starter files needed for each lesson. The demo website shared in this video's exercise files can be saved anywhere on your computer. To open it, extract the contents of the zip file and open the [HTML](../../Skills/Web%20Development/HTML.md) files on your browser. To set up the CMS website files on your computer you need to extract the Zip files on a directory in your web root. Set up a database, import the database file, and define the database credentials on the config/database.[PHP](../../Skills/Software%20Development/PHP.md) file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Exercise Files:** exercise files (2), download the (1), starter files (1), zip file (1)
> **Env Vars:** html (1), cms (1)
> **Prerequisites:** set up (2)
> **File Paths:** config/database.php (1)
> **CLI Commands:** php (1)
> **UI Navigation:** open the (1)
> **Best Practices:** recommended (1)

#### [Local development configurations](https://www.linkedin.com/learning/winter-cms-with-laravel/local-development-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/local-development-configurations?u=76281980&t=0)** - [Instructor] For the development of your project you will need to have a [PHP](../../Skills/Software%20Development/PHP.md) server running on your local machine since Winter CMS runs in PHP. The software that I use to do this in my PC is called Laragon and you can freely download it in [laragon.org](https://laragon.org). It comes with PHP in database server we need to run winter. You can also go with XAMPP with versions for [Windows](../../Glossary/Service/Windows.md) micro X, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), as well as other PHP server solutions. In the remainder of this video I'll give you a quick overview on how to install Laragon so you can skip the section if you won't be using it, let's go ahead and download the executable for the full version of Laragon. You should save the file on your local machine and after it has downloaded, simply run it. You should choose now the language for the installation. Let's go with English, press okay. And let's leave the default configurations clicking on next. And now let's go ahead and install.
>
> **[1:14](https://www.linkedin.com/learning/winter-cms-with-laravel/local-development-configurations?u=76281980&t=74)** After opening Laragon, press the start all button to put the servers. You might be prompted to allow Laragon through the firewall on your first run. You should check with your operating system on how to do that. To check if the server is running, you can press the web button. This will open a browser window, just like the one you are seeing on the video as a database IDE Laragon comes with Heidi [SQL](../../Skills/Data%20Science/SQL.md). For this course, though, we'll be using phpmyadmin. To install it, let's make sure we are going to install phpmyadmin latest version. We can do this by going to the phpmyadmin website and checking the version that it shows us to download. Now, let's see what version Laragon would install. We can check this by opening Laragon. Right click on tools, quick ad configuration. And we should locate the URL for phpmyadmin install which is in line eight. And as we can see, we will be installing version 4.8.5. Let's go ahead and click the URL for the download for version we want and paste it right in this configuration file. You should simply save it. Restart Laragon.
>
> **[2:50](https://www.linkedin.com/learning/winter-cms-with-laravel/local-development-configurations?u=76281980&t=170)** And after Laragon has restarted let's go on again to tools, quick add and click on phpmyadmin. The right version should now be installed. As you can see, Laragon has finished installing phpmyadmin and it opened its automatically. So we now are running with the current ID for our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** php (4), url (2), cms (1), xampp (1), ide (1)
> **Prerequisites:** install (6)
> **CLI Commands:** php (4), make (1)
> **Versions:** version 4 (1), 8.5 (1)
> **UI Navigation:** click on (2)
> **URLs:** [laragon.org](https://laragon.org) (1)
> **Exercise Files:** download the (1)


### 1. Introduction to Winter CMS

[↑ Back to Table of Contents](#table-of-contents)

#### [Winter CMS overview and installation](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980&t=0)** - [Narrator] Let's start with an overview of winter CMS. Winter is a [Content Management](../../Skills/Web%20Development/Content%20Management.md) system that allows you to develop websites that are managed by an admin section. This interns allows you to focus on the development of set websites and forgo to development of commonly requested features like logins, permissions, and content editing. I find the templating system, the ability to reuse components, usage and development of custom plugins and ease of contents edits by the client, one of its most useful features. I suggest you take a look at winter CMS website features to make yourself more familiar with them. It is important at this moment to mention a bit of winter CMSs history. It evolved from October CMS and its main developers after some changes were introduced in October. This is the reason why you'll find that many October CMS plugins and themes are still compatible with winter, and the reason why winter marketplace is still under development. Having said this, I still find winter CMS is the best option between both CMSs hence my recommendation for it. Now, to install winter CMS let's head to the winter download page. Go ahead and click the download install.zip file link. While this file is downloading,
>
> **[1:35](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980&t=95)** let's create a folder on our web server route called winter. If you are using Laragon, let's open it, start it if you haven't done so already, and click on the root folder button. We now need to create our folder here.
>
> **[1:58](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980&t=118)** Next, we need to set up a database for winter to use. For this, let's go back to Laragon, Click the database button, and this should take you to the phpMyAdmin local websites. The default logging username is roots, and the default password is empty. Remember, these credentials are not safe for use in production. Let's click on the [Databases](../../Skills/Software%20Development/Databases.md) button and create a new database. We simply need to write the database name. Let's call it winter again, and click in the create button. Meanwhile, the install.zip file should have finished being downloaded. So, let's grab that and then zip it to the folder we created in the web route. Now we need to access our website. For that, let's go back to Laragon. Right click on a blank area. A menu pops up, let's head to www winter. And we should see the files from the winter directory in our default browser. To install, click the install.[HTML](../../Skills/Web%20Development/HTML.md) link. We should now begin the compatibility checks. All checks are green,
>
> **[3:30](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980&t=210)** let's continue the installation. You should read the license and accept it if you agree. For the site name, let's go with Wisdom Pet Medicine. We'll leave the site URL as suggested for now, as well as the backend path. Click the enter database configuration button next. In the screen, we just need to input the username which is root, the password which blank, and the database name which is winter, to connect to our database. Next, let's enter administrator details. You should fill your first name, surname, the username for login, and the login password, as well as your email address. Now we should begin the final checks. All checks are cleared. Let's go ahead and begin the installation. After the installation has finished, we can access the website by clicking the view your installed button, and the administration with view your backend. When you first look at your website, you can see winter comes with a quick reference guide built in.
>
> **[5:05](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-cms-overview-and-installation?u=76281980&t=305)** I encourage you to explore it, if you'd like to be familiar with the basics. Next up, let's explore the admin section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** cms (6), html (1), url (1)
> **Prerequisites:** install (5), set up (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (2)
> **Exercise Files:** zip file (2)
> **File Paths:** install.html (1)

#### [Admin section overview: Dashboard, media, and settings pages](https://www.linkedin.com/learning/winter-cms-with-laravel/admin-section-overview-dashboard-media-and-settings-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/admin-section-overview-dashboard-media-and-settings-pages?u=76281980&t=0)** - [Instructor] When we first enter the Admin section, we are directed to the Dashboard. Here, we can get an overview of our installation in the form of widgets, and we can even add more widgets that come from plugins like what we'll see later on in this course. The CMS page is where we'll be mostly working on our website's look and content. As this is such an important page, we'll go over it in the next video. In the Media manager page, we can manage the images, videos, and audio to be made available on the website. It also gives you resizing and cropping abilities. Finally, the Settings page gives you control over many features of the website. These go from managing the front end theme where you can activate or install new themes from the marketplace, setting the website on maintenance mode and choosing the page to show while in maintenance, install updates, themes, and plugins, manage website administrators, roles, and permissions, customize the backend look, manage code editor settings like its style sheet, markup classes, text, and select toolbar options, manage email templates, configurations, and branding, and finally, set log settings and read the logs. I do want to add that many plugins also
>
> **[1:35](https://www.linkedin.com/learning/winter-cms-with-laravel/admin-section-overview-dashboard-media-and-settings-pages?u=76281980&t=95)** make their settings available through the Settings page, so this list might have more items depending on the plugins you have installed. For example, the [Google](../../Glossary/Service/Google.md) Analytics plugin we'll be installing later in the course has its configurations accessible through this Settings page. This is now the perfect time for you to take your time exploring the pages we just went over and tinker with the settings we just saw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **Cross-References:** in the next (1), later in (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Env Vars:** cms (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The CMS page](https://www.linkedin.com/learning/winter-cms-with-laravel/the-cms-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/the-cms-page?u=76281980&t=0)** - [Instructor] Now let's explore the CMS page. As we can see, we have tabs for pages, partials, layouts, content, assets, and components. In the page view, we can manage website pages. Think of pages as one unique URL in your website. At the moment, looking at the pages available, we can access the 404 page in the forward slash 404. The EdgeX framework page in the forward slash demo, forward slash EdgeX. The error page in the forward slash error, demonstration page in the forward slash, and the plugin components page in the forward slash demo forward slash plugins. For any given page that we select to work on, we can define its settings like the URL and the title, the actual physical name of the page, what layout it uses and its description. There is also this co-configuration, the hidden check box. When this box is checked, only users with administration login can see this page. In the meta tab, we can define the page meta title and set the meta description. These fields are usually used for searching engine optimization practices. Then we can see the template editor.
>
> **[1:35](https://www.linkedin.com/learning/winter-cms-with-laravel/the-cms-page?u=76281980&t=95)** The editor is divided between the markup and code tabs. In the markup tab, we place the tweak markup template code for our page. The code tab allows us to run [PHP](../../Skills/Software%20Development/PHP.md) code in our template. As it executes every time before the template is rendered, it might be helpful if we need to work on variables, get records, or perform calculations for example. Moving on to the partial section, partials are smaller parts of a website that make it possible to be reused throughout the code without having to rewrite it in different places. For partials, we can set its physical file name, and like the page template editor, we can see the markup and the code tabs. In the layouts tab, we can manage different layouts for our websites. Again, we can define the physical file name, a description for our layout, and have access to its markup and code tabs. Layouts allow us to define the scaffolding. There our pages will follow and we can have multiple layouts on our website. The content tab is where we define [HTML](../../Skills/Web%20Development/HTML.md) or text that can be edited separately from the page or layout. These are useful for clients to edit. After we have coded the website, as they can edit the texts
>
> **[3:09](https://www.linkedin.com/learning/winter-cms-with-laravel/the-cms-page?u=76281980&t=189)** without having to know how to code. We can also define placeholders in the section. Placeholders are sometimes used when we need a page to insert specific links to style sheets or [JavaScript](../../Skills/Software%20Development/JavaScript.md) files into a layout. So we don't have to insert those files in all pages, thus usually improving page loading speed. In the assets tab, we can manage theme specific assets like style sheets, JavaScript, and image files. These are separated from the media manager page because they can and do change from theme to theme. A good way you can think about theme assets versus media assets is this. If an asset can change with a website design, it should be placed in the section. Like style sheets, image icons, et cetera. If, on the other hand, the asset is to be the same regardless of the website design, it should go to the media manager page. Example, product brochure, company video, et cetera. Finally, the component section lists all components available. As you go and use plugins, you'll see this list growing. Each component gives you extra functionalities for the website. They can output HTML, handle [AJAX](../../Skills/Web%20Development/AJAX.md) requests, [Forms](../../Skills/Web%20Development/Forms.md), or inject variables and responses. Think of components
>
> **[4:43](https://www.linkedin.com/learning/winter-cms-with-laravel/the-cms-page?u=76281980&t=283)** as configurable building elements that can be attached to your pages, partials or layouts. I now invite you to explore the CMH page on your own so you can get more familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** url (2), html (2), cms (1), php (1), cmh (1)
> **Exercise Files:** template (5)
> **CLI Commands:** php (1), make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Moving to Winter

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring the default theme and creating your own](https://www.linkedin.com/learning/winter-cms-with-laravel/exploring-the-default-theme-and-creating-your-own?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/exploring-the-default-theme-and-creating-your-own?u=76281980&t=0)** - [Narrator] Let's start by exploring winter default theme. If we open our project on their code editor 2 and take a look in the team's directory, we'll see the demo directory. This directory holds all the files for the demo theme. When taking a closer look at the directories from that theme, we can see that assets, contents, layouts, pages and partials directories. These are mapped in the CMS admin page and can be edited through the admin section. We can see that there is a meta directory. This is to be used with the static page's plugin, which we won't be covering for this course. The composer.[JSON](../../Skills/Web%20Development/JSON.md) file contains themes informations that are important when publishing your theme for other users to install, discover infos, from theme name, description, author, required packages and more. In the README.md file, you can leave details and instructions for the users of your team especially if you are going to publish it. This can vary wildly from instructions on how to delete extra files to properly set up the theme, ways to extend it, and more. Lastly, there's the theme.yaml file. This is a really important file for our theme. It allows us to set theme information, for winter to process and show in the admin section, like the name, description,
>
> **[1:37](https://www.linkedin.com/learning/winter-cms-with-laravel/exploring-the-default-theme-and-creating-your-own?u=76281980&t=97)** author, homepage, code, which is needed if the theme is to be published in the marketplace, form, which will be used for later in the course on theme customization in the admin panel, and require, which is used to define a set of required plugins for theme dependencies. To create your own theme, I suggest that you copy this demo theme. This way, we are assured that all needed files are present and in the correct folders. For this, in the admin panel, let's go to settings, front-end theme. We can see the demo theme here. Let's go ahead and click and manage, duplicate. We'll call this theme, winter. Hit duplicate again. We can now see that we have two themes, with a new one called, Demo - Copy, and being deactivated. Let's run a quick test. Go to CMS pages, demonstration, and write a test, H1 tag, right after line seven. Hit save, and then, preview. As you can see, here we have the H1 we've just inserted. Now, let's leave that call there, and activate the newly created theme. Just go back to the Admin section, and click on activate. After we refresh the homepage, we can see that the H tag we wrote is no longer seen. Remember a page belongs to a theme.
>
> **[3:12](https://www.linkedin.com/learning/winter-cms-with-laravel/exploring-the-default-theme-and-creating-your-own?u=76281980&t=192)** We wrote the H1 tag in the homepage for the original demo theme after calling it. Then, we changed the website theme to the newly created one, which we didn't edit. Congratulations. You've just created your first winter to theme. I know suggest you take some time and read the documentation for themes and theme development, if you'd like to get more familiar with themes, and dive into some more in depth knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **File Paths:** composer.json (1), readme.md (1), theme.yaml (1)
> **Env Vars:** cms (2), readme (1)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** later in (1), go back to (1)
> **Documentation:** the readme (1), the documentation (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)

#### [Moving your website to Winter](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980&t=0)** - [Instructor] We can now move our demo websites to winter. To make sure we don't have breaking changes, we should do this in incremental steps. Let's start with importing the website as is and then adapt it to use the CMS features. Let's copy all the [HTML](../../Skills/Web%20Development/HTML.md) from the NX page and paste it in our winter homepage. Open the original index page in a code editor and copy its contents. Then, enter the admin panel and go to CMS, pages, demonstration, and paste in the markup section, replacing what was previously there. Select the layout, no layout, go ahead and save and then let's preview our website. From the way our page is looking, we are surely missing the style sheet. If you look at the demo website HTML, in line seven, we need to add the css/style.css file. Let's grab that file in the original website and add it to winter. We can do this in the admin panel, in the assets section of our theme. However, to show you that you can also work on your website via File Explorer and a code editor, let's do it that way. Head to Laragon and click in the root button, then navigate to winter,
>
> **[1:36](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980&t=96)** teams, winter, assets, CSS, and paste the styles.css file right in there. Now let's link those files to our HTML. To edit the homepage, open the themes, winter, pages home.HTML file in the code editor of your choice and take a look at the link tags in the head section, namely in line 11. Now we need to reference the location of our assets. To do this, winter has the theme filter. As you can see in the documentation, all we need to do is follow this syntax and winter will give an absolute URL to our resources. Let's base the reference in our href and write the relative paths to the theme's folder. Don't forget to save your file and let's refresh the website. Starting to look good now. We just need to do the same for the [JavaScript](../../Skills/Software%20Development/JavaScript.md) files. If you take a look at line 12, we are importing the prefixfree.min.js file. Let's also jump to the end of our code editor and we can see there are three scripts linked. Given the first two are outside sources, we'll just need to get the myscript.js file. Let's copy the original JS folder from the demo websites
>
> **[3:17](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980&t=197)** and paste it in our assets directory. Then as we did before for the CSS file, we need to reference those files in our HTML. Now we're just missing the prefix free imports. Let's save this and refresh our website.
>
> **[3:43](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980&t=223)** Great. I know you are looking at a white screen but this means the JavaScript as well as the CSS files have loaded. Now we are just missing the images. Go ahead and copy the images in the images directory from our demo website, and let's paste it in the images folder for our themes directory. Like we did for the CSS and the JavaScript files, we need to use the theme filter for our images. I'll show you what to do for these first two images then I challenge you to do the same on your own. I've just replaced the URL for the first two images in the website. Let's go save, refresh and see how we're doing. And here you go. Here's the first image, and now the second one. Now, after we save, let's jump into our websites. To open the inspector, right click anywhere on the page, then go to inspect. Now, refresh your page and check the network tab. You can see if there has been any 404 and we do have one for the favicon. Since we are not supplying it in our index file for the page, this should be okay. This step helps us make sure we are not forgetting to import any files.
>
> **[5:16](https://www.linkedin.com/learning/winter-cms-with-laravel/moving-your-website-to-winter?u=76281980&t=316)** Congratulations. Our demo website is now being served by winter CMS. If you'd like to keep practicing, I suggest you take a closer look at the assets folder and move the original assets we pasted there into the directories listed, such as CSS, fonts, images, JavaScript, less and vendor. This is a good practice to keep your files nice and organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4)
> **Env Vars:** html (5), css (5), cms (3), url (2)
> **UI Navigation:** open the (3), go to (2), select the (1), navigate to (1)
> **File Paths:** css/style.css (1), styles.css (1), home.html (1), prefixfree.min.js (1), myscript.js (1)
> **CLI Commands:** make (2)
> **Best Practices:** don't forget (1), good practice (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Extracting the layout](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-the-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-the-layout?u=76281980&t=0)** - [Instructor] If we take a look at the index in 404 page we can see that there is a common structure. A menu, followed by content and a footer. And by looking at [HTML](../../Skills/Web%20Development/HTML.md) in both pages, on the demo website, we can see that there is code application. As you know, we should avoid this repetition. One way to do this while we make sure we follow the same structure, is to define a common layout for a website that will be used in the pages. This way when creating a new page, the best scaffolding is already done and written in just one place. To create one in the CMS admin page, have two layouts and let's add a new one with a file name, oneColumn and the description, A one column layout.
>
> **[1:01](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-the-layout?u=76281980&t=61)** Let's take a moment to view the default layout that comes with winter. It starts with the HTML declaration, has the head tag, the website header, first scripts, and closes the HTML tag. If you take a look at lines 24 to 26 this is where the page content for the pages that extend this layout will rendered. To replicate this, let's start with coping the markup of our homepage into the new layout. Now, we need to identify the markup that repeats in all pages from the markup that it's specific to a page. Take a look at line 49, it is the end of the header. The header as we've identified is in all pages so it should remain in the layouts. In lines 50 to 278, we have the main section. So this is where we want the page content to render. And in lines 279 to 309, it is the footer and the end of our HTML so this should stay in the layout. Let's go ahead and delete lines 50 to 278 and replace them with a snippet we saw in the default layout to get the page content.
>
> **[2:39](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-the-layout?u=76281980&t=159)** Now, let's save the layout. Right now, we need to set the layout for the demonstration page. Go to the Demonstration page in the CMS, set the layout to oneColumn and save it. The next step is to remove all the markup from our page that is repeated in the layout. So remove all the markup starting in top of the file until the header, and starting in the end of the file, until the footer. Go ahead and save and let's preview our homepage. And it's looking great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** html (4), cms (2)
> **Code Identifiers:** onecolumn (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Home and error pages](https://www.linkedin.com/learning/winter-cms-with-laravel/home-and-error-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/winter-cms-with-laravel/home-and-error-pages?u=76281980&t=1)** - [Instructor] Now is the time to improve on what we already did. If you take a closer look at our layout, you can see on line five that the page title is fixed and looking at the head tag, there is no description set. To improve this, let's take a look at default layout. We can see in lines five to seven, that the title and description come from page variables. Let's replicate that. Copy those lines from the default layout and let's paste them on our layout below the title markup. In line six, let's keep out the website branding keeping the brand name in the beginning of the title. And let's use the meta title not the page title for this tag. Now we can delete line six. This allows us to have the page title to use as a reference in the CMS and the meta title for SEO. Now let's go back to our homepage after saving our layout and set the meta title as 'Traditional and alternative medicine in the diagnosis and treatment of companion animals' and the meta description as 'Grooming, General Health, Nutrition, Pest Control, Vaccinations for mammal
>
> **[1:36](https://www.linkedin.com/learning/winter-cms-with-laravel/home-and-error-pages?u=76281980&t=96)** and exotic companion animals Certified to apply traditional and alternative medicine.' Go ahead and save the page. If we now see it and inspect the head, we should be able to see the text we just defined. And here they are. Next, let's take a quick introduction on a how to customize error pages. This makes for a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) as they can see the error while being kept in the same look and feel of our website. To create a custom error page, we simply need to create a new page with a error code. However, if you take a look at the pages in our theme, there already is such a page. We seem we need to make it match our website design and test it. Let's take a look on how it is now. If you click the preview button, it's not looking quite like our website, right? Let's start by changing the layout for this page choosing the one we created. If you go ahead, save and refresh the page, it's looking a bit better. Now, we can further improve this by going to our demo website and use the page content for the error.[HTML](../../Skills/Web%20Development/HTML.md) page. Go ahead and copy lines 49 to 65
>
> **[3:12](https://www.linkedin.com/learning/winter-cms-with-laravel/home-and-error-pages?u=76281980&t=192)** and replace the markup in the CMS error page. One final save and refresh and we can now see our custom error page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** cms (2), seo (1)
> **File Paths:** error.html (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Turning the main sections modular with partials](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980&t=0)** - [Instructor] Another nice feature from winter that allows us to reduce code duplication is the use of partials. As discussed before, partials are snippets of markup that we can call in multiple places on the website. Let's see how we can use partials in the staff section. If you look at the staff section, it has the same structure for all staff members, an image, title, and text. We can extract that to a partial that has the same structure. Let's start by creating the partial. In the CMS admin section, go to partial and click add. We'll call the partial staff.htm and the description staff markup block. Go ahead and save it. Let's see the markup on the homepage. Firstly, let's increase the markup section so we can better see the code. If you prefer, you can also full screen it by clicking the screen icon button. If you take a closer look at line 93, this is where the staff section starts and we can see that the block in lines 97 to 113 is repeated for all doctors. This is the block we need to extract for the partial. Let's copy that block and paste it in our partial. Then we need to call that partial in the demonstration page. For this, winter has the tag partial.
>
> **[1:37](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980&t=97)** We write the keyword partial followed by the partial name. Let's insert that on line 97. If we save now and preview our website, you can see that Dr. Winthrop is repeated. The next step is to send each doctor's information to the partial. We'll do this in two stages by sending a variable in the partial to replace the image, name and text. We'll also take that variable to [Fetch](../../Skills/Web%20Development/Fetch.md) the content for the staff member, which we'll cover in the next video. First off, let's take a look at the name of the image file used for the staff on line four. It has the format of assets/images/ the doctor name.png.
>
> **[2:35](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980&t=155)** This means we can send a variable to the partial with the doctor's name and use that variable to get the photo. To send variables in the partial tag, we simply need to add the variable name equals value. Let's do that for Dr. Winthrop on line 97. Now that we have that variable set, let's fetch it in the partial. We can make a quick test to check the variable. To do this, let's use the function dump. We'll call it and pass our name variable on the start of the partial markup. After we save and refresh the website, we can see a variable dump from winter. Go ahead and click in the zero and we can see the value for that variable. We can now go on and delete this dump. Moving on. We need to replace the image name to make it dynamic. The way to do this inside a theme tag is to join the file name with a variable. To do this, we'll need to use the tilde sign for the concatenation and the hashtag to output the variable name inside a tag. So, let's break the file name, starting with the beginning of the file name, closing off the string, calling a tilde. Here is where we'll be calling our name variable.
>
> **[4:09](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980&t=249)** We'll get to that in a second. Continuing with a tilde and closing off the end of our file name with the extension. Now to call a variable inside a tag, we need to use the double quotes, hashtag, curly brackets and close it off in the same way with curly brackets and the double hashtag. And since we are performing an operation and passing that result to the tag, we need to wrap this in parenthesis. Let's go in and save and preview our website. And we can still see Dr. Winthrop's image. Now, looking at the partial, we can also print the doctor's name in the alt tag. To do this, just remove the text with the doctor's name and let's print out the name variable. Let's save, and preview and inspect what the alt tag is and Dr. Winthrop. Now we can go one step further and capitalize his name. To do this, we'll use a twig filter called capitalize.
>
> **[5:30](https://www.linkedin.com/learning/winter-cms-with-laravel/turning-the-main-sections-modular-with-partials?u=76281980&t=330)** Let's save, refresh and inspect to see if there's any change. And Dr. Winthrop's name is now capitalized. Looking at the partial, we can also print the doctor's name in the image alt tag on line four and on the H3 tag on line eight. To do this, we'll simply print out the variable name using double curly brackets in the alt tag and again, in the H3 tag. Let's take a quick look to see how we're doing. And the W in Dr. Winthrop, it's lowercase. We can fix that using the capitalize tag, both in the alt tag and the H3 tag. Let's save and now preview. And the doctor's name is capitalized. This concludes the first part of the partial usage. In the next section, we'll keep improving our partial while allowing for easy content editing by website admins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Env Vars:** cms (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Extracting text into content](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-text-into-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-text-into-content?u=76281980&t=0)** - Continuing on with the development of our partial. Let's take a look at how we can extract content from the websites to make it easy for website admins to change it while not having to delve into the markup. October has the contents tag that will display a CMS content block on the page. Then, when an admin needs to add content. they need to head to CMS, content, and choose the file to edit. Content files can be in [HTML](../../Skills/Web%20Development/HTML.md) markup or simple text. For this example, we'll go with simple text. I do suggest you name content files in an easy way that allows your admin to identify the file that needs to be changed. Let's start with a quick test by creating a new content. Let's call it Winthrop description dot TXT and write some text. We'll call it, in the staff partial after the H three tag inside a P tag. To call it, write down the contents tag with a file name. If we check the website now, we can see the same text is repeated for all doctors. As you are probably guessing, we will now create one description file for each doctor, and the file name will follow the convention: name, description, and the file extension, TXT. To fill each doctor's content block, just copy
>
> **[1:38](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-text-into-content?u=76281980&t=98)** and paste the description from the doctor's original markup and paste it in its content. I'll do this off screen for all the other doctors. Finally, let's go back to the staff partial and edit the contents tag to print the name variable and concatenate it with the description dot TXT string, much like we did for the doctor's image. If you remember correctly, we used the tilde for concatenation, double quotes to print the variable name that is called with a hashtag and curly brackets. As you can see, online, nine. We can go ahead and remove this text that is hard written and let's see how we are doing. Great! Our partial is no longer repeating the text. Let's remove the staff markup from our homepage. We should do so by removing lines 98 to 150, and it looks like I removed one extra dip. So, no worries there. Just add this div to close that row. And we'll duplicate this code for Doctors Chase and Dr. Sanders. Let's check this out, refresh the page. And now we are left with the section's original content, while having taken down a lot of repetition and making it easy for updates. As a way to further your knowledge
>
> **[3:15](https://www.linkedin.com/learning/winter-cms-with-laravel/extracting-text-into-content?u=76281980&t=195)** and content editing usability. I suggest you take a look at the content's editor plugin which allows a logged-in user to edit contents directly in the website's front end. Also, at this time, I suggest you try and use the media manager for staff images. As discussed earlier, assets that only concern the team should stay in the team assets directory. Assets that relate to the website should go to the media manager. Take this moment to try and do this on your own. You'll first need to upload the doctor images to the media manager. Then use the media tech in the markup to access them, instead of the theme tag. Have fun!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** txt (3), cms (2), html (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - continuing (1)


### 3. Using Winter Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a plug-in to set the navbar](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=0)** - [Instructor] Winter also allows you to add plugins to your projects. Let's see how you can start adding plugins while also learning how to use a plugin to manage the website menu. This specific plugin allows for admins to easily edit the menu in the admin section of the website. We'll be using the Ben Freke MenuManager plugin. This is an October CMS plugin, but as we discussed earlier, October plugins are compatible with winter. To install a plugin, go to settings, updates and plugins, then click on the install plugins button. We'll search for MenuManager with no spaces and then click on the listing that is presented to you. Now, there is a new menu item in the admin menu called menus. Let's explore it. We create menu items in the edit menu section. Let's go ahead and create a new menu item. Looking at our website, we have the home, mission, services, staff and testimonials menu items. We'll start with creating the home menu item. The title is the item text, in this case, home. The menu type is internal as we are linking to the website page and the file to link to is demonstration as this is our homepage.
>
> **[1:33](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=93)** Now to add the ID for the section we are linking to, let's take a look at the menu item in our website and we are linking to the featured ID which corresponds to this banner. If you take a look at the extra non October CMS query string parameters, this is where we need to add our ID. Simply paste it there and hit create and close. I'm going to create all other items now, using the same process off screen. The last item we will create is an item that acts as a parent to all items we created. This will be important when adding the components to the page. To create a new item, go ahead and click in the new menu button. We'll call this parent, set the type as external, click save and close. In this case, create and close. Now we need to reorder the menus. You should click on the reorder menus button and we need to put the parent item on top and then set all the other items in their order as children of that same menu item, parents. This could be a bit fiddly. Don't worry. Now for the services one, the staff and testimonials.
>
> **[3:10](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=190)** Next up, we need to go to CMS and layouts to add our menu components to the layouts we've created. If you take a look at the component section, there is now a new component group called menu manager. If you expand it, you can see the menus components. Click the components to add it to the layout and it will be added just above the markup editor. We now need to call that component within our markup. To do so, we'll be using the components tag. In line 28, right below the ID with the name collapse, we'll write down our components tag, calling the menu keyword. This keyword is the components alias, as you can see in the component block. Let's save and see how we are doing in the front end. Let's start by inspecting the menu we've just added and comparing that to the one we previously have. You can see that the UL markup classes are different from the new to the old menu. So we'll need to take the classes from the old menu and apply it to the new one. We'll go back to our manager and if you click on the component, you can see that the primary classes are the same used in the UL for the new menu. We'll replace those with the original menu classes, save and see what it looks like. And as you can see, the menu is now styled
>
> **[4:48](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=288)** but we've lost the scrolling effect that changes the menu as you scroll down the page. This happened because the script we are using to do that, Bootstrap's Scrollspy, requires the href of the menu item to be the same as the element we are scrolling by. If we inspect an item from the new menu, we'll see that this plugin inserts the whole URL in the href plus the element ID. To fix this, I've made a script that ignores Bootstrap Scrollspy and adds this functionality. You can find the script in the exercise files for this video as a standalone file and a complete [JavaScript](../../Skills/Software%20Development/JavaScript.md) file in the website zip, also in the exercise files. To quickly fix this, let's go back to our admin and then you should go to the JS folder and open the myscript.js file. We'll comment lines 32 to 35.
>
> **[5:56](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=356)** In line 39, we'll replace this condition with hash.includes(featured),
>
> **[6:09](https://www.linkedin.com/learning/winter-cms-with-laravel/using-a-plug-in-to-set-the-navbar?u=76281980&t=369)** comment lines 47 to 54 and then you should paste the script before those lines we've just commented. Let's save and preview the website. Let's just go to the top first. And as you can see, everything is working now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** go to (4), click on (4), scroll down (1), open the (1)
> **Env Vars:** cms (3), url (1)
> **Cross-References:** go back to (2), we discussed (1)
> **Definitions:** is an  (2), is a  (1)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** install (2)
> **File Paths:** myscript.js (1)

#### [Winter asset compilation](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-asset-compilation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-asset-compilation?u=76281980&t=0)** - [Instructor] One way to improve your website performance and [search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md) tools core is to compile your assets. This usually means joining all your CSS files into one and doing the same for the [JavaScript](../../Skills/Software%20Development/JavaScript.md) files while also minifying them. When files are minified, the compiled files size is smaller. And instead of serving multiple files to the browser, you only serve the file that was minified, reducing the number of requests needed to render the page. Winter makes this easy when we are using the theme tag for calling the assets, we simply need to send an array with file paths instead of passing each file path on its own. For minification while combining the files in Winter. This happens when you set the enable asset minify option in the config/cms.[PHP](../../Skills/Software%20Development/PHP.md) file, or when debug option is set to true in the config/app.CSS file. The debug option should be set to true when launching the website for production. So minification is activated for you by default since we are still developing the website let's open the config/CMS file on an IDE and set the enable asset and minify and set it to true.
>
> **[1:36](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-asset-compilation?u=76281980&t=96)** And we should save this file. Let's see how we can compile the website, CSS. Going back to the admin CMS section, looking at one column layout. We are calling an external script with bootstrap in line nine, and the website file in line 10. The first step to compile these two files is save the bootstrap CSS external file within the website files. Since Winter can't compile external files. So we'll create a file called bootstrap.main.CSS in the themes/winter/assets/vendor/bootstrap directory.
>
> **[2:29](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-asset-compilation?u=76281980&t=149)** Then we'll place the content of the external file. We need to copy the external file URL, open it on our browser, copy the content and place in our file. Then let's modify the theme tag from using one single file per tag, to using an array. And we can clear out the old links. Let's save and preview the websites. Not really looking the way we expected, right? As you can see, we are importing the bootstrap file after we load our custom style and we need to do this the other way around since our style modifies bootstrap, we've saved the layout and let's take a look at our website and now we can see that it looks the way we want it. If we inspect it, let's take a look at our head and write here in the style.
>
> **[3:43](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-asset-compilation?u=76281980&t=223)** We can see that the CSS files are not present. They were replaced with this combined file. If we open this file in the browser you can see that it has the bootstrap unified CSS. And in the end of the file is our style.CSS file also minified. I'll leave you with a small challenge for now taking the steps we've done for combining the CSS files. Do the same for the JavaScript files. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** css (9), cms (2), ide (1), url (1)
> **File Paths:** config/cms.php (1), config/app.css (1), bootstrap.main.css (1), style.css (1)
> **CLI Commands:** php (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Winter theme variables and asset customization](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-theme-variables-and-asset-customization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-theme-variables-and-asset-customization?u=76281980&t=0)** - [Instructor] For some projects, or even if you are developing themes to sell, you might come across the need to let the admins customize some aspects of the theme, like showing or hiding sections, or even defining website colors. Let's first address asset compiler variables. While compiling your assets, Winter also accepts and compiles less files. Doing this, you can access some variables that are defined in the Admin section, too, and use them in the less file. Let's explore this by allowing the admins to set the background color for the nav menu. Open on your IDE the theme.yaml from the themes/winter directory. And let's define a form field to hold the menu background color. You need to define the variable name in the backend, the label, the type of input, and the var name to be called in the less file. We need to add a form field for the color to be chosen. For going into more detail about form fields, you can go and refer to Winter documentation. Then create a file called custom.less in the themes/winter/assets/less directory.
>
> **[1:35](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-theme-variables-and-asset-customization?u=76281980&t=95)** In this file, we need to set the background color using the class header .navbar.inbody so that the user can change the menu_background color. Don't forget to save the theme and the custom files. And now we'll go and define the color for the menu. In the Admin section, we need to go to Settings, Front End Theme, and now for our demo theme that we are using, we need to click on the Customize button. You can see the menu_background_color label and an array of colors to choose from. Let's select a reddish color and hit Save. Finally, we need to go to CMS, Our Layout and add to the array of CSS files - in this case, less files - the new one to be mixed in. And let's hit the Refresh again. And there you go, our menu is now red. Now for theme customization, we'll see how to define theme variables and use them in our markup. Let's first look at how to allow the user
>
> **[3:08](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-theme-variables-and-asset-customization?u=76281980&t=188)** to define Our Staff section title, and whether the section is shown or not. We'll again be going back to the theme.yaml file and define two new variables: the our_staff_title and the show_staff_section. Do be aware that these variables need to be properly enclosed in this space. To use these variables in the markup, go to the Demonstration page and let's locate the Our Staff section title. It is in line 95, and we'll replace the title with this markup. Then let's add a new statement to only show the Staff section if the show_staff_section variable is true. The if starts on line 93, and it should end on line 106.
>
> **[4:15](https://www.linkedin.com/learning/winter-cms-with-laravel/winter-theme-variables-and-asset-customization?u=76281980&t=255)** Go on and save the page. Now if we go back to our Front-End Customization section of the admin, you can see now the two fields we've created. Let's change this section name for The Staff and do not show Our Staff section. Hit Save, let's preview the website. And where is Our Staff section? It is hidden. To see that you have changed the title, let's activate that section again, save, refresh the website, and let's go back to our Theme file and check to see if we are using the correct variable name. So it should be show_staff_section, and we have Our Staff section. So that was our problem. Let's refresh the website now, okay. There we have it, now it's working.

> [!info]- Semantic Content
>
> **Code Identifiers:** show_staff_section (3), menu_background (1), menu_background_color (1), our_staff_title (1)
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** ide (1), cms (1), css (1)
> **File Paths:** theme.yaml (2)
> **Cross-References:** go back to (2)
> **Best Practices:** don't forget (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Customizing the 404 page](https://www.linkedin.com/learning/winter-cms-with-laravel/challenge-customizing-the-404-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/challenge-customizing-the-404-page?u=76281980&t=0)** - [Instructor] Now is your time to shine. In this challenge, I'm asking you to create the 404 error page in Winter. Take the 404 page existing in our theme, and make it look the same as the markup in the demo files much like we did for the error page. If you need a refresher, go back earlier in the course to review how we did the error page. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Customizing the 404 page](https://www.linkedin.com/learning/winter-cms-with-laravel/solution-customizing-the-404-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/solution-customizing-the-404-page?u=76281980&t=0)** - [Instructor] So, how did you do with the challenge? I'm sure you did great. Let's go over it together now. Let's start with opening the 404 page on RCMS. Instead it to use the one column layout. Now we just need to base the markup specific to the page. Let's make a refresher of what the layout has and what we need to include in the page markup. Open the one column layout and let's find the page tag. It should be right around line 36, looking at the markup immediately before we can find the end of the header on line 34 and looking at the markup immediate after the beginning of the fooder on lines 39. So for the 4 0 4 page markup we need to add everything in between those texts. Open the 404 [HTML](../../Skills/Web%20Development/HTML.md) file from the demo website on your code editor and let's copy the markup in lines 49 to 70 and paste them in the 404 page.
>
> **[1:08](https://www.linkedin.com/learning/winter-cms-with-laravel/solution-customizing-the-404-page?u=76281980&t=68)** Let's see how it looks clicking the preview button and that's it. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** rcms (1), html (1)
> **UI Navigation:** open the (2)
> **Speakers:** - [instructor] (1)


### 4. Winter Plug-Ins and Prepping for Production

[↑ Back to Table of Contents](#table-of-contents)

#### [Magic Forms plug-in](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=0)** - [Instructor] Looking at our contact form, it is not doing much at the moment. It is lacking the code to treat the form submission. To do this with WinterCMS we can use a plugin by Martin M. called Magic [Forms](../../Skills/Web%20Development/Forms.md). Let's install it in the admin sections, Updates and Plugins.
>
> **[0:28](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=28)** After it has been installed we can now see a new site menu item called Magic Forms. There you can set some configurations like to use over reCAPTCHA and GDPR compliance settings. I strongly advise you to take a look at the settings when using this plugin in a production environment. In the top menu there is also a Magic Forms new item. Here, you can see all the records for form submissions as you get them. To add the form functionality to the contacts form, head back to the demonstration page in the CMS section. Let's add the Magic Forms components to it. We'll go with a Generic [AJAX](../../Skills/Web%20Development/AJAX.md) Form and call that component on line 150, right after the dev with the columns classes. Use the component tag and the generic form is the components alias. Taking a quick look at the plugin documentation, we also need to include the framework and framework extras tag. We'll include those in our layout right before the end of our body. There we go. Let's save this and see what the components added to the website. And it's actually pretty close to the original form. Let's make it look the same. We'll need to make some changes to the form [HTML](../../Skills/Web%20Development/HTML.md).
>
> **[2:04](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=124)** For that, let's override the component view by inserting it in our page. To do this, double click the components text while pressing Ctrl. The components view is now pasted into the page. Let's make this markup editor big. Now, if we compare the components markup with the original form, there are some extra bits of code like the data request in the form tag on line 150, the form token in line 152, reCAPTCHA in line 176, among others. We'll be taking a closer look at the inputs. For instance, comparing the email inputs on line 158. With the email input in line 186, we can see that the original form is lacking the name attribute. Also one small note, the generic form has the name input on line 158 which we are lacking in our original form. And if we think about it, it makes sense for the contact form to ask for the username which we weren't doing before. So let's go on and make the name input resemble the original form markup for an input. Grab for instances, the email input from the original form. Let's redo the indentation.
>
> **[3:45](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=225)** We'll add the name attributes, change the placeholder with your name, change the ID from email to name, and the label for name also, we need to change the four attributes in the label and we'll also need to change the label text from email to name. Now for the email and subject inputs, we'll do the same thing. We'll grab the input from the original form. In this case, we simply need to add the email name attributes, and we can delete the original markup. Continuing on, let's do the same thing for the subject.
>
> **[4:51](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=291)** Grab the name and use that attribute, remove the original markup, fix the indentation. This is super important for you to know what if is open and close when and where. Also, if we take a look at the form element, there's one class that we need to have. Let's just indent this a bit more and we need to add the text area for message.
>
> **[5:29](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=329)** But as you can see in the generic form, it expects to get a comments variable not a message variable. So we'll keep the label name message and changing the name attribute for the text area. Let's remove the generic form comments and we also need to grab the button, and comparing these two, we'll need to add the ID for the button and also change the type from 'submit'. And it looks like we are just about done. Now, looking at the reCAPTCHA, we need to change this a bit. We are calling the partial for the reCAPTCHA with a @ sign. This won't work now, as we are in the demonstration page not in the component view. To fix this, we'll need to call the generic form which is our component attributes followed by two double dots and then to reCAPTCHA. Let's collapse this, save our page and check it on the website. And our form is looking like the original one. Let's make a quick test. Jane,
>
> **[7:02](https://www.linkedin.com/learning/winter-cms-with-laravel/magic-forms-plug-in?u=76281980&t=422)** My subject, jane@[email.com](https://email.com), my message. And will this work? We have a message that the form was successfully submitted. Now we can check in the admin section if we have a record and we do, perfect. Here is our form submission. Finally, I encourage you to further explore this plugin by going back to the demonstration page in the CMS section. Click in the Component and experiment with the component properties available. Using them, you can among other properties write the form validation rules and set the form to send emails when a new response is submitted. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (4), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** recaptcha (5)
> **Env Vars:** cms (2), gdpr (1), ajax (1), html (1)
> **URLs:** [email.com](https://email.com) (1)
> **Analogies:** for instance (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Clear cache widget](https://www.linkedin.com/learning/winter-cms-with-laravel/clear-cache-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/clear-cache-widget?u=76281980&t=0)** - [Narrator] Sometimes you'll find that the changes you'll make in Winter aren't showing on your website. Often this is due to Winter caching system. We can easily clear it by using a dashboard widget made by Alexander Romanov that comes with a clear file cache plugin. To install it, go to settings, updates and plugins, click the install plugins button and let's search for clear file cache. And we'll go with the first and let Winter install the plugin for you. Now simply head to the dashboard. We'll manage widgets, add new widgets, select the file cache. Let's go with a six for width and edit. We now have a cool widget that shows us the total cache size and the cache size by folder. Whenever you need to clear the website cache, simply click on the clear button and the widget will take care of that for you.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1), click on (1)
> **Prerequisites:** install (3)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [narrator] (1)

#### [Google Analytics plug-in](https://www.linkedin.com/learning/winter-cms-with-laravel/google-analytics-plug-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/winter-cms-with-laravel/google-analytics-plug-in?u=76281980&t=1)** - [Instructor] Quite often, you'll find you need to install some type of analytics to track website users' [Statistics](../../Skills/Data%20Science/Statistics.md) like page views. The most common tool for this is [Google](../../Glossary/Service/Google.md) analytics. Winter has many plugins to deal with Google analytics. For this lesson, we'll be going with one made by Rain Lab, compatible with version three of Google analytics. I do warn you that this configuration probably best when done when the website is live on a server, especially the tracking option of this plugin. To install the plugin, go to settings updates and plugins and type Google analytics. We'll go with the first result.
>
> **[0:56](https://www.linkedin.com/learning/winter-cms-with-laravel/google-analytics-plug-in?u=76281980&t=56)** And Winter has finally installed the Google analytics plugin. To configure it, we will need a Google analytics API key in the Google analytics profile ID. For this video, as we'll be focusing on plugin configuration, you may need a guide on how to activate the Google analytics API key and to get the profile ID. You can refer to the documentation of the plugin in the [GitHub](../../Skills/Software%20Development/GitHub.md) repository, as it provides you with step by step instructions. After setting up the API and Google analytics, you'll need the account ID, the [JSON](../../Skills/Web%20Development/JSON.md) file with the API key and the tracking ID. Let's go on with the configuration. Head to settings, Google analytics, in the private key input select a Jason file with API key. In the analytics view slash profile ID number, write your ID number. Use your tracking ID in the correspondent input. We'll leave the domain name in auto, anonymize IP and we'll force SSL . After saving, let's add the Google tracker component to the layout. We'll open our one column layout And add the component Google tracker. There it is.
>
> **[2:29](https://www.linkedin.com/learning/winter-cms-with-laravel/google-analytics-plug-in?u=76281980&t=149)** Right before our head closes. Do note that you should only add or activate the tracker when the website goes live, so that you are not tracking visits while in development and also to allow analytics to track the visits when you want to. Finally the coolest part, let's add the widgets to the dashboard. Go to CMS layouts one column, and let's add the Google analytics tracking components to our layouts and call it with a components tag, right after the page tag. Do note that you should only add or activate the tracker when the website goes live so that you are not tracking visits while in development and to allow analytics to track the visits when in production. Finally, for the coolest part, let's add the widgets in the dashboard. Go to the dashboard, click on manage widgets, then add widgets. You now have access to five widgets for Google analytics. Let's add one. The process is the same if you want to add others. Let's go with 12 full width and click on add. You can now see analytics data right in your website dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (14), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (5), json (1), ssl (1), cms (1)
> **UI Navigation:** go to (3), click on (2)
> **Prerequisites:** install (2), configure (1), you'll need (1)
> **Warnings:** note that (2)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)

#### [Prepping your website for production](https://www.linkedin.com/learning/winter-cms-with-laravel/prepping-your-website-for-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/prepping-your-website-for-production?u=76281980&t=0)** - [Narrator] Now that our website is ready for production, there are some steps you need to take to get ready. You can start with removing unneeded code like the Winter Demo plugin and other plugins you are not using. Also as a basic clean up measure, remove unused themes, pages and partials. Remember the clean rule. Don't leave trash behind. Next to move the website onto your server in a traditional upload, zip the project files, upload the zip to the public folder on the server. While you are doing this, go ahead and export your database and migrate it to the server as well. You can set server database configurations on the config/database.[PHP](../../Skills/Software%20Development/PHP.md) file. You can also use [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), continuous deployment to deploy your website. I recommend you check out the guide written by Luke Towers on how to do that. Next, make sure you set debug to false and you write down the website URL in the config/app.php file. Setting debug to false hides detailed hacker messages and stack traces from the user and setting restrictBaseDir and database templates to true in the config/cms.php file. The restrictBaseDir configuration restricts loading backend templates and config files to within the base directory of the application
>
> **[1:37](https://www.linkedin.com/learning/winter-cms-with-laravel/prepping-your-website-for-production?u=76281980&t=97)** and the database templates stores all modified CMS files in the database instead of in the file system. Finally, don't forget to test your website on the production server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **CLI Commands:** php (3), make (1)
> **File Paths:** config/database.php (1), config/app.php (1), config/cms.php (1)
> **Code Identifiers:** restrictbasedir (2)
> **Env Vars:** url (1), cms (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Further your knowledge and connect to the community](https://www.linkedin.com/learning/winter-cms-with-laravel/further-your-knowledge-and-connect-to-the-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/winter-cms-with-laravel/further-your-knowledge-and-connect-to-the-community?u=76281980&t=0)** - [Ana] Now that you've completed your first website using Winter CMS, let's take some time to view what I'd suggest to be your next steps. First, I suggest you take a look at the builder plugin. It allows you to build your own plugins for winter. I find it useful in cases where I need to build filters like a team plugin. This makes it easier for the website admins to insert content in the administration. Next, I suggest you take a look at all the plugins available for Winter CMS and October CMS marketplace, since, at the moment, they are compatible, and try them out to evaluate if they are useful to you. Finally, I invite you to join the Winter CMS community by joining the Discord server. You'll find a bunch of people that use the CMS professionally where you can bounce ideas off and have some community help. Just remember to give as much as you take. That's all for now. I invite you to connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) or Twitter. I hope that you have fun coding, and keep growing on your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cms (5)
> **CLI Commands:** find (2)
> **Tools:** discord (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [ana] (1)


## Instructor

- [Ana Lisboa](../../Instructors/Web%20Development/Ana%20Lisboa.md)

## Resources

- Exercise files available

## Skills Covered

- Content Management Systems (CMS)
- Laravel

## Path Context

### In [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)
← [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) | **7 of 7**

## Appears In

- [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Essential Jigsaw for PHP and Laravel Developers](Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md) — Laravel
- [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) — Laravel
- [Advanced Laravel](Advanced%20Laravel.md) — Laravel

---

[↑ Back to top](#)