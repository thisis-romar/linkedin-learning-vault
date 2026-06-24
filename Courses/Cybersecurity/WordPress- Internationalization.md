---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wordpress-internationalization-22343157
url: "https://www.linkedin.com/learning/wordpress-internationalization-22343157"
duration_minutes: 82
duration: 1h 22m
level: Intermediate
updated: 5/25/2023
learners: 4573
skills:
  - WordPress
  - Internationalization
exercise_files: true
github: "https://github.com/LinkedInLearning/wordpress-internationalization-3266041"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHr1McQUIAbgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684865080588?e=2147483647&amp;v=beta&amp;t=DMqSK2RhbddDqPCR86CGysMWHdYjGLQarTsNaGo0lxI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)'
prev_courses:
  - '[Wordpress Building A Secure Site](../Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md)'
next_courses:
  - '[WordPress- Custom Post Types and Taxonomies](WordPress-%20Custom%20Post%20Types%20and%20Taxonomies.md)'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":2,"total":8,"prev":"Wordpress Building A Secure Site","next":"WordPress- Custom Post Types and Taxonomies"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress
  - skill/internationalization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/WordPress-%20Internationalization.md)

![WordPress: Internationalization](https://media.licdn.com/dms/image/v2/D560DAQHr1McQUIAbgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684865080588?e=2147483647&amp;v=beta&amp;t=DMqSK2RhbddDqPCR86CGysMWHdYjGLQarTsNaGo0lxI)

# WordPress: Internationalization

> The WordPress content management system powers over 40% of the web. And the WordPress user base and developer network isn't limited to English–WordPress is global software supporting a variety of languages, and its internationalization features allow developers to configure their code so they can be easily translated for any locale. In this course, Carrie Dils introduces the specific functions and

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157) | 1h 22m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [WordPress internationalization](#wordpress-internationalization)
  - [What you need to know](#what-you-need-to-know)
  - [Project overview and exercise files](#project-overview-and-exercise-files)
- [**1. Introducing Internationalization**](#1-introducing-internationalization) (3 videos)
  - [What is internationalization?](#what-is-internationalization)
  - [Why internationalize code?](#why-internationalize-code)
  - [Internationalization vs. localization](#internationalization-vs-localization)
- [**2. Internationalization Concepts**](#2-internationalization-concepts) (3 videos)
  - [What is gettext?](#what-is-gettext)
  - [Using text domains](#using-text-domains)
  - [Translation functions](#translation-functions)
- [**3. Working with Translation Functions in PHP**](#3-working-with-translation-functions-in-php) (6 videos)
  - [Translating strings](#translating-strings)
  - [Translate HTML](#translate-html)
  - [Use placeholders](#use-placeholders)
  - [Argument swapping](#argument-swapping)
  - [Working with plurals](#working-with-plurals)
  - [Adding context](#adding-context)
- [**4. Working with Translation Functions in JavaScript**](#4-working-with-translation-functions-in-javascript) (3 videos)
  - [Including wp-i18n](#including-wp-i18n)
  - [Using translation functions](#using-translation-functions)
  - [Loading translations](#loading-translations)
- [**5. Make a Plugin Translation-Ready**](#5-make-a-plugin-translation-ready) (10 videos)
  - [Introducing the project](#introducing-the-project)
  - [Best practices for internationalization](#best-practices-for-internationalization)
  - [Add text domain and set domain path](#add-text-domain-and-set-domain-path)
  - [Add translation functions to PHP](#add-translation-functions-to-php)
  - [Create and enqueue a script with wp18n](#create-and-enqueue-a-script-with-wp18n)
  - [Add translation functions to JavaScript](#add-translation-functions-to-javascript)
  - [Create a translation file](#create-a-translation-file)
  - [Include an additional translation with your plugin](#include-an-additional-translation-with-your-plugin)
  - [Generate MO and JSON files](#generate-mo-and-json-files)
  - [Load translations](#load-translations)
- [**6. Advanced Concepts**](#6-advanced-concepts) (3 videos)
  - [Automating text domains](#automating-text-domains)
  - [Language packs](#language-packs)
  - [Internationalization Security](#internationalization-security)
- [**7. Contributing to Open Source**](#7-contributing-to-open-source) (2 videos)
  - [Translating for WordPress with GlotPress](#translating-for-wordpress-with-glotpress)
  - [Contributing to GlotPress](#contributing-to-glotpress)
- [**Conclusion**](#conclusion) (1 videos)
  - [What next?](#what-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [WordPress internationalization](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=1)** - Konnichiwa. Bonjour. Hola. Hi. I'm Carrie Dills and I'd like to welcome you to [WordPress](../../Skills/Web%20Development/WordPress.md) [Internationalization](../../Skills/Web%20Development/Internationalization.md). WordPress is for everybody and I love its mission to democratize publishing through open source software. This means that you are free to create, change, and share your content from anywhere in the world. Internationalization is the process of writing code in a way that makes it easy to translate into other languages. Join me and we'll work with various translation functions in WordPress. Learn how to make themes and plugins translatable and even generate language files. Are you ready? Grab your pack and let's hit the trail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (2)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - konnichiwa (1)

#### [What you need to know](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you'll want to already be familiar with [WordPress](../../Skills/Web%20Development/WordPress.md), how it works, some of the code behind it, and the basics of extending WordPress functionality with themes or plug-ins. You should also have a good working knowledge of [PHP](../../Skills/Software%20Development/PHP.md). While you certainly don't have to be a pro, we'll be working with some PHP in this course, and I'll be focused on explaining it as it relates to [Internationalization](../../Skills/Web%20Development/Internationalization.md) and not necessarily its broader principles. The same goes for [JavaScript](../../Skills/Software%20Development/JavaScript.md). Don't let this scare you off. There's not a whole lot of it, but I will be talking about it as it relates to translations. If you want to brush up on those topics before diving into this course, I recommend taking some of these courses from our Library, [WordPress Essential Training](../Web%20Development/WordPress%20Essential%20Training.md), PHP for WordPress, and JavaScript for Web Designers. I'll also be working with a local install of WordPress and a code editor. While you don't need either of those things to watch this course, you'll need them if you plan to follow along with me exactly. The only other thing you need before starting this course is an eagerness to learn, and I happen to know that you already have that, or you wouldn't be here. One more thing before we start. This course is not about creating multilingual sites. What I mean by that is websites whose content is translated into various languages. For example, here on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) website, they have a Language option to view the content in various languages. This is a different process
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=93)** than making your code translatable and is outside the scope of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Prerequisites:** install (1), you'll need (1), before we start (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Project overview and exercise files](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=0)** - [Narrator] Later in the course, we'll build a simple [WordPress](../../Skills/Web%20Development/WordPress.md) plugin together to demonstrate the principles of [Internationalization](../../Skills/Web%20Development/Internationalization.md) and localization. If you'd like to follow along with that, I've uploaded all the files I've used to a [GitHub](../../Skills/Software%20Development/GitHub.md) repository for this course where you can access them for reference. The branches are structured to correspond to the videos in this course. Some branches are marked with B for beginning while others are marked with E for ending. The B branch contains the code as it is at the beginning of the movie, while the E branch contains the code as it is at the end of the movie. And then the main branch holds the final state of the code for this course. To use these exercise files you can clone them to your local machine. You can open them up with a gooey tool like GitHub Desktop or you can download a zip file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **Tools:** github (2)
> **Exercise Files:** exercise files (1), zip file (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)


### 1. Introducing Internationalization

[↑ Back to Table of Contents](#table-of-contents)

#### [What is internationalization?](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=0)** - [Instructor] As a theme or plugin developer, there will be many times that you have to hard-code strings of text. As a matter of fact, in [WordPress](../../Skills/Web%20Development/WordPress.md) itself, there are many instances of these hard-coded strings. So take, for example, this simple WordPress login form. We've got this text Username or Email Address, Password, Remember Me, Lost Your Password, et cetera. Where does that text come from? Well, it's actually hard-coded into WordPress. Let's take a look. Let me copy this. And if we head over to the WordPress repository on [GitHub](../../Skills/Software%20Development/GitHub.md), and we'll go to the file that handles that login form, and I'll search for that phrase, Username or Email Address, and it's here several times. But this instance right here is actually where the text from that form is coming from. Now, what if you wanted to translate that text into another language? Would you have to go and edit core files or duplicate code somehow? Goodness, no. That's where [Internationalization](../../Skills/Web%20Development/Internationalization.md) comes to the rescue. Internationalization is the process of writing code in a way so that text strings are easily translatable. This is not a concept that's unique to WordPress, but, rather, a practice in the wider programming community that WordPress utilizes. More on that later. When discussing internationalization, you may come across its shorthand, i18n, where I indicates the first letter of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), N the last,
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=95)** and 18 representing the number of letters between the I and the N. So if you see it written like i18n, you know that means internationalization. In short, it's the process of making your code translation-ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Why internationalize code?](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=0)** - [Narrator] You can create a brilliant theme or plugin that's technically perfect in every way and it doesn't have to be translation ready. [Internationalization](../../Skills/Web%20Development/Internationalization.md) is not a requirement, but it is a major enhancement. Why? Because [WordPress](../../Skills/Web%20Development/WordPress.md) powers over 43% of the web and of those millions of websites a huge number are located around the world not just in native English speaking countries. WordPress is fully translated into dozens of languages with many more dozens in the process. There's actually a group of volunteers around the world who help with these translation efforts. WordPress calls them Polyglots. Since 2016, WordPress has even hosted a Global Translation Day, a full day dedicated to making WordPress available to more people around the world. The mission of WordPress is to democratize publishing and making WordPress available in a variety of languages is a powerful way of accomplishing that mission. WordPress has made internationalization a high priority which means that as a developer, it should be on your list too. In the broader scheme, internationalization plays a role in better [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md). It provides a gateway or access for non-developers to translate code into their own language. When you take the extra effort to make your code translation ready, you create a better experience for everyone who uses it and that's what you're going to learn how to do in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (8), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (3), [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Internationalization vs. localization](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=0)** - [Instructor] If you're reading on the web about [Internationalization](../../Skills/Web%20Development/Internationalization.md) or maybe hearing other developers discuss it, you'll likely also come across the term localization. While they go together like peanut butter and jelly they are two distinct things. Earlier I shared the internationalization is the process of prepping your theme or plugin files so that they're easily translatable. Localization, on the other hand is the actual process of translating a theme or plugin into another language. It has its own fancy abbreviation structured in the same way. L10n, where L is the first letter of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). N is the last, and there are 10 letters in between. We'll discuss both of these in a lot more detail throughout the course, but I wanted to highlight those terms and their meanings upfront. Now, before we move forward, let's talk about [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) puzzles. If you've ever worked on a puzzle, you know how important it is to look at the picture on the box. As a matter of fact, I always study the picture for a while before I ever even touch a single piece of the puzzle. Likewise, before we look at the details of internationalization and localization, I want to [Zoom](../../Skills/Software%20Development/Zoom.md) out and give you that big picture overview so that as we move through the course you'll already have a concept of where each piece fits. So here's the short version of how it works. Developers wrap translatable strings in special functions. Those translatable strings are then extracted into a pot or portable objects template file.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=95)** Then using some tool translators provide translations for each of the strings. The result is a PO or portable object file. PO files are compiled according to whether they contain translated strings for [JavaScript](../../Skills/Software%20Development/JavaScript.md) or for [PHP](../../Skills/Software%20Development/PHP.md). So we've got MO files for PHP and [JSON](../../Skills/Web%20Development/JSON.md) for JavaScript. The compiled files are then used to output the translated strings. I know I'm saying some odd sounding terms so if this sounds confusing, don't worry. As we progress through the course we'll look at each piece of the process in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internationalization](../../Skills/Web%20Development/Internationalization.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Jigsaw](../../Skills/Web%20Development/Jigsaw.md) (1)
> **Env Vars:** php (2), json (1)
> **Analogies:** picture (3)
> **CLI Commands:** php (2)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Internationalization Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [What is gettext?](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=0)** - [Instructor] Let me tell you a story. Once upon a time, programmers realized the importance of creating multi-language versions of their software so that it could be used across the globe. Their problem wasn't simply getting translations, though. Programmers found themselves creating multiple copies of the same code in order to serve up different versions in local languages. What a nightmare. The solution to this inefficiency was a system called gettext, created by Sun Microsystems in the early nineties. A few years later, the GNU project released an open source version of this called GNU gettext. gettext works with multiple programming languages, including [PHP](../../Skills/Software%20Development/PHP.md) and is considered the standard [Internationalization](../../Skills/Web%20Development/Internationalization.md) system across programming languages. And this is what [WordPress](../../Skills/Web%20Development/WordPress.md) uses for internationalization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internationalization](../../Skills/Web%20Development/Internationalization.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** gnu (2), php (1)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor] (1)

#### [Using text domains](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=0)** - [Instructor] To make your code translatable, you need to use a unique text domain to designate all the text that belongs to your particular theme or plugin. Doing this enables translators to use automated tools to easily extract all the text that needs to be translated from your code. If you intend to submit your plugin or theme to the [wordpress.org](https://wordpress.org) repository, there's a couple of things to be aware of. First, stay away from underscores or special characters. Use dashes to separate words. Also, the folder name of the plugin or theme, should match your text domain. Following these naming conventions, enables [WordPress](../../Skills/Web%20Development/WordPress.md)' automated translation services to work. To give you an idea of how this works, I've got a local installation of WordPress already set up. So if I go to Plugins, we can see that there are no plugins currently. I'm going to change that. Here, I've got my code editor open, and I've got the file system for this WordPress install loaded up. So if I go to WP-Content and Plugins, let's create a new plugin here. I'll create a new folder, and give it the very creatively named sample plugin. And then from the root of that folder, I'll create my main plugin file and call it sample-plugin.[PHP](../../Skills/Software%20Development/PHP.md). If you've spent any time looking at the source code for themes or plugins,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=93)** you note that at the very top of that main file, there's always a header that provides information about said theme or plugin. Now, at a minimum for this, we need to add a name. So, let's go ahead and do this. My plugin name is going to be Sample Plugin, and for the text domain, this will be pretty straightforward. I'll just call it sample-plugin. And that matches the spelling and name I'm using for both this main plugin file and my plugin directory. I'll go ahead and save that. And by the way, if you're curious what all goes into this header, WordPress has some documentation for that for header requirements. You can see we've got this minimum filled here of just a name, and then all these other fields that can go in, including text domain. And if I go back to my WordPress install, and reload this plugins page, there I can see my sample plugin. So that's how you add a text domain. The next step in the puzzle is to go ahead and load it. We've got a few functions available for that. And the one that you use depends on whether you're writing a plugin, a theme, or a child theme. We've got load_plugin_textdomain, load_theme_textdomain, and load_child_theme_textdomain.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=187)** These functions are used to load text domains for plugins, themes, and child themes respectively. Now, let me show you what these functions are doing. If I head back to my WordPress install, I'll go to Settings, General, and here's an option to set your site language. Based on whatever language a user has their site in, these functions will look to see if there's a corresponding .MO file included with the theme or plugin. And if there is, it'll load it, pretty cool. So since I'm working on a sample plugin, I want to use this load_plugin_textdomain function. Using the WordPress docs as a guide, I can see that this function takes three parameters. The first will be the text domain, the second is deprecated, and the third is the path to where the .MO files reside in my project. Let's go back to our plugin, and off my route directory for my plugin, I'm going to create a new folder and call it Languages. And if I had any translation files for this particular plugin, that would be the folder I would put them in. While you don't have to name the folder languages, that's pretty common to see in the WordPress space. So now, let's look at that load_plugin_textdomain function. And those three parameters, the first one is going to be text domain, the second will just pass false,
>
> **[4:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=284)** and the third is going to be the path. And just to make this a little easier to read, I'm going to create a variable, called this plugin_rel_path, and I'll set it two point at that languages folder. And now, that's it. If a particular language file exists in my plugin that corresponds to the locale of the WordPress install, that translation would load. Of course, I haven't created any language files yet. We're going to get to that. So far, we've created a text domain, we've now loaded it into our plugin, and then the final piece of the text domain puzzle is to mark up our strings with the text domain. We'll take a look at how that works after I introduce you to translation functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (10), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** load_plugin_textdomain (3), load_theme_textdomain (1), load_child_theme_textdomain (1), plugin_rel_path (1)
> **Prerequisites:** install (4), set up (1)
> **CLI Commands:** make (2), php (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Warnings:** be aware (1), note that (1)
> **File Paths:** sample-plugin.php (1)

#### [Translation functions](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=0)** - [Instructor] In this lesson, I'd like to give a quick introduction to creating translatable strings in [WordPress](../../Skills/Web%20Development/WordPress.md). [PHP](../../Skills/Software%20Development/PHP.md) is the primary language of WordPress, with [JavaScript](../../Skills/Software%20Development/JavaScript.md) following. When it comes to [Internationalization](../../Skills/Web%20Development/Internationalization.md), there are methods that we can use for translating PHP and methods we can use for translating JavaScript. Because PHP is a server-side language and JavaScript is a client-side language, the approaches are a little bit different. Let's look at PHP first. For PHP, WordPress uses the gettext function library, but instead of using the native PHP gettext function, WordPress has its own localization functions that serve as a wrapper for this one. You're seeing examples of those functions on this screen, and these are the functions that you would use when translating for WordPress, not the native PHP functions. Historically, in WordPress, you couldn't translate strings in JavaScript, only in PHP. Well, as of WordPress 5.0, released in 2018, there's now a way to add translatable strings in JavaScript. This is a 3-step process, each of which we'll look at a more detail later. First, when registering scripts, you add wp-i18n as a dependency. In this case, wp-i18n is a JavaScript library that ships with WordPress, and it contains the translation functions we need. Then, inside your scripts, you can use those functions.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=95)** You'll see as we continue in the course that these functions look very much like their PHP counterparts and are used in the same way. The final step is to tell WordPress that your script contains translations. We'll look at practical implementations of both PHP and JavaScript throughout this course, but for now, just note that when we talk about internationalizing code in WordPress, we're talking about specific functions used in P H P and JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (10), [PHP](../../Skills/Software%20Development/PHP.md) (10), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** php (10)
> **Env Vars:** php (10)
> **Definitions:** is a  (4)
> **Versions:** 5.0 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Working with Translation Functions in PHP

[↑ Back to Table of Contents](#table-of-contents)

#### [Translating strings](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=0)** - [Instructor] In order to make a string translatable in [PHP](../../Skills/Software%20Development/PHP.md), you need to wrap it in a gettext function. Here we are in the PHP manual for gettext, and we can see exactly what this function looks like. The name of the function is gettext, and it accepts a single parameter called message, and that is a data type of string. Now, this function also has a shorter alias. If we scroll down, here we go, you can use a underscore character as an alias for the gettext function. Now on [WordPress](../../Skills/Web%20Development/WordPress.md), we're not going to use either one of these, because WordPress has its own functions for translating strings. Here's a page showing all of the available PHP translation functions in WordPress. And the equivalent to what we just looked at with the gettext or the single underscore, is this double underscore parenthesis. This function is going to be the most common translation function that you'll see. And note that depending on what font you're using in your code editor, the double underscore may look like this, or it may look like two distinct underscores. I'm going to open up my code editor, and let's take a look at an example. I'll create a variable called greeting, and just set it equal to a string that says, "Hello", straightforward enough. But the problem here
>
> **[1:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=92)** is that I've hard coded the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "Hello", and if you wanted to translate this to say, Spanish, you'd have to go into the code, and manually change "Hello" to "Hola". That's the whole point of [Internationalization](../../Skills/Web%20Development/Internationalization.md). We want to make this easy to change, without having to modify the source code. So let's make this string translatable, with a double underscore function that we just looked at. So if we go back to the docs here, we can see that this function takes two parameters. The first is going to be the string that we want to translate, and the second is the text domain. Earlier we talked about text domains, and that they're used to help automated tools extract all the strings for translations belonging to a particular theme or plugin. The text domain for this plugin I'm working on is sample-plugin, so we're going to use that. So I'm going to get rid of this and use double underscore. And the first is going to be the string that I want to translate, in this case, "Hello". And the second parameter is going to be that text domain. Now, I officially have a translatable string in PHP. In theory, this string, "Hello", could be extracted into a pop file for translation later on. Now in this example I've set the variable, greeting, equal to a value, and if I wanted to print that value, "Hello", to the screen, I'd need to echo it out,
>
> **[3:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=184)** and I could do that just by saying echo greeting. It so happens there's another string translation function that lets us skip this extra line of code, and just go straight to echoing out a translatable string. Going back to our translation function reference, that is going to be this _e function. I'll click on that and it looks like there is an updated page available. So what this _e function, there's no need to write the two lines of code, one with a variable and a second one echoing the variable. This particular function does both. And we can see that it takes the same two parameters and that's going to be the string for translation and the text domain. So going back to my code, I could write _e,
>
> **[4:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=241)** my string for translation, (keyboard keys clicking) and my text domain. And this single line of code does the same thing as these two lines of code combined. Of course, depending on whether you actually want to return a value or print it to the screen, will determine whether or not you're using the double underscore versus the _e function. And that's it, the double underscore and the _e are the two most basic translation functions you'll use when internationalizing your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** php (4), make (3)
> **Env Vars:** php (4)
> **Cross-References:** go back to (1), we talked about (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** the docs (1)
> **Exercise Files:** source code (1)

#### [Translate HTML](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=0)** - [Narrator] Now that you've seen two basic translation functions, the double underscores for returning strings and the _e for echoing strings, there's a couple of more string translation functions I'd like to introduce you to. They're the counterparts to these two functions that we just looked at. The difference is that you use these when there's [HTML](../../Skills/Web%20Development/HTML.md) output involved. Here, we're adding the escape_html to the beginning of either one of those functions to escape HTML output. In the first case, we're returning a string with escaped HTML and in the second we're echoing that string. If you're not familiar with escaping HTML output, it basically goes like this. Escaping HTML lets us tell the browser whether we want to interpret those characters as text or truly as a special character. The easiest way to explain this is by looking at an example. And we've got one ready to go here in the [WordPress](../../Skills/Web%20Development/WordPress.md) docs. So here we've got a variable called $html and it contains a string with HTML markup. So the question is, do we want to display the HTML when it prints to the screen or do we want it to render the HTML so that it actually prints out a link? That's where escaping HTML comes into play. Escaping the HTML, then our string contains the entity characters instead of like the greater or less than signs.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=95)** Then when it's displayed in an HTML document it would look like this versus actually rendering a link. So if we escape HTML output, it'll look more like the former, and if we don't escape it, it'll actually read that text as HTML and render it. So depending on the output that you're going for, you would or would not use an escape_html function. So getting back to [Internationalization](../../Skills/Web%20Development/Internationalization.md). That's where the escape_html__ function or the escape_html_e functions come in. These functions return or echo a translated string that includes HTML that should be escaped.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (15), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **Env Vars:** html (14)
> **Code Identifiers:** escape_html (2), escape_html_e (1)
> **Speakers:** - [narrator] (1)

#### [Use placeholders](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=0)** - [Instructor] Let's talk about placeholders. Placeholders come into play when you're using variables in a string. For instance, I might want to personalize a welcome page with a logged-in user's name. So how would I internationalize this data? In this case, I want to make the text "hello" translatable, but I don't want the variable to literally appear in the translation file, that wouldn't make any sense. So that's where placeholders come in. It's leaving an available spot for the code to come back and insert the dynamic data at runtime. In [PHP](../../Skills/Software%20Development/PHP.md), placeholders are implemented using a combination of the sprintf or printf functions, along with something called a type specifier. As we've already seen with some earlier functions that we've worked with, some functions, like double underscores, returns a value, while others, such as _e, outputs a value. When it comes to sprintf versus printf, that's the basic difference. Sprintf returns a formatted string while printf outputs it. Now what about those type specifiers I mentioned? Well, there's full documentation here on the [W3schools.com](https://W3schools.com) website, but I'm going to highlight the ones that I'm most interested in. I'm going to use this %d as a placeholder anytime I need a placeholder for an integer, and this %s anytime I want my placeholder value to contain a string. Let's take a look at an example. Here, I've got the user variable, which equals Carrie,
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=95)** and that's a string, which means that I'm going to use the %s placeholder. Now, the way that the sprintf function works is the first parameter we're passing in is the formatted string, in this case, it's that hello, %s. And the second value that we're passing in is the argument that's going to be used to replace the %s. So it's the value of %s, and in that case, it's our user, which equals Carrie. So our greeting variable would actually hold, Hello, Carrie. So that's how you would use the sprintf function with a placeholder, but at this point, we haven't done anything to make that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "hello" actually translatable. In order to do that, we need to wrap the formatted string inside of a translation function. So here, I'm going to use the old friendly double underscore translation function. The first parameter I give it is the string for translation and the second is the text domain. And then, if we nest that inside of the sprintf function, then we can pass the translation function, comma, and then user, which is going to be the argument that, again, will be used to replace that %s or that string placeholder. So that's how you could work with a single placeholder in a translation function. But let's say you want to get fancy and do multiple placeholders. For instance, let's say I want to output a sentence,
>
> **[3:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=189)** Hello, Carrie, you're employee 99. In this case, I'd be working with multiple placeholders. So how does that work? Well, let's take our variable user, it still equals Carrie, and we'll create a new variable called number and set that value to 99. So we've got one string and one integer, and we'll pass those into the sprintf function as arguments. So we've got our first string, hello, %s, which is going to be replaced by that first argument titled user, and you're employee %d, and that placeholder is going to be replaced by the second argument, which is the variable number. So what the string would actually hold then is, Hello, Carrie, you're employee 99. Now, once again, this is how the sprintf function works, but at this point, we haven't done anything to make that entire sentence translatable. So to do that, I'm going to wrap it in the double underscore function and then nest that inside of the sprintf function where I can replace those placeholders with the actual values I want. So here I'm showing you examples with sprintf but printf works in very much the same fashion except for it outputs the value versus just returning it. And that, my friend, is placeholders in a nutshell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (4), php (1)
> **Analogies:** for instance (2), such as (1)
> **URLs:** [w3schools.com](https://w3schools.com) (1)
> **Env Vars:** php (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Argument swapping](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=0)** - [Instructor] [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) ordering in a sentence differs from language to language. For example, in English, the adjective typically goes before the noun so I might say the pretty flower. In Spanish however, this might be reversed. So the same phrase would read la flor bonita with the noun coming first then followed by the adjective. We've seen how to use placeholders for translations but there may be times when you need to allow translators the flexibility to decide where an argument is used. Enter argument swapping. Argument swapping lets the translator determine which argument goes where regardless of the order that the argument is passed in. To accomplish this, we'll use a variation of the placeholder we've already looked at, and it looks a little like this. So we've got the %s when there's a single placeholder in a string. For multiple placeholders, we'll add a number and a dollar sign for each nth placeholder. The same exact thing goes for %d when we're working with decimals or integers. We add 1$ to the first placeholder, 2$ to the second, and so forth. And in this case, the number represents the argument's position in the print F or sprint F function. For example, here we've got three variables, two of which are strings, and one of which is numeric. Those variables are passed
>
> **[1:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=92)** to the sprint F function in a specific order. In this case, I've got the variable container followed by treat, followed by quantity, but that doesn't have to correspond to the order that they're used in the translated string. The number that precedes the dollar sign indicates where the argument should appear in the translation. This gives the translator the flexibility to adjust the language in a way that makes the most sense. In this example, our translation function would let us sub in any of these translated variations. There are three cookies in the jar. The jar contains three cookies or three cookies remain in the jar. This is a simple example but it demonstrates how you can work with argument swapping with placeholders in the context of a translatable string.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with plurals](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=0)** - [Instructor] Plurals come into play when you have a string that changes with a number of items. A basic example of this in [WordPress](../../Skills/Web%20Development/WordPress.md) is the comment. In English, we have one comment where comment is singular, or two comments where comments is plural. When working with strings for translation, we need to allow translators a way to adjust these strings based on that number. In this case, comment versus comments. To help us with that, we've got the _n function. This function grabs the plural, or singular form based on the quantity. Let's take a look at this function in the WordPress docs. So the function takes four parameters. First, we've got the single version of the string, which is the text that'll be used if the number is singular. Then we've got the plural version and then we have whatever the number actually is. And finally, our text domain. So let's look at an example. Using comments, I'm going to say _n or I should say using comments as an example. I'll do the first string, which is the singular string and say there is one comment. The plural string is there are two comments. Then we have the number of comments that there actually are. So I'll just leave, put a little variable there for a second. And then that fourth parameter is going to be our text domain. In this case, sample-plugin.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=96)** So I'll say comments, and let's say our comments equal 30. It was a really popular post. Lots of people commented. (instructor chuckling) Okay, so here's a basic way of how that _n function would work. But remember here, we're actually working with placeholders. I don't want to hard code the one or the two. So in this case, I'm going to need to wrap this entire thing in a sprintf function. So if you recall for sprintf, the first parameter is going to be the string to be translated and we'll dump in this entire _n function. The second parameter is going to simply be the value that we use to replace our placeholders. So let me go back and add placeholders since we're dealing with integers here. I'll use %d and then this comments is going to be the value that I want to use to replace these placeholders.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=174)** Let me make sure we got [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) wrap on here so you can see this. Okay, so let's break this down. So we have the sprintf function and within that, we've got the _n. There is a placeholder, comment, the singular form. The second parameter is there are placeholder comments, which is plural. Then we have the number of comments and this number is going to determine whether we return the singular or the plural form. And then within the sprintf function, we need to specify what the placeholder value should be. And that's where this comments comes in. And of course, since sprintf only returns value versus echoing it or outputting it, you would need to set this as a variable and then you could echo the variable or you could use printf instead. As you can see between plurals and placeholders, we've really got a ton of flexibility when it comes to translating strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding context](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=0)** - [Instructor] Context is everything. English has words and phrases that can have totally different meanings depending on the context. In another language, the same concept may use different words or phrases entirely. This is where the _x function steps in to help translators. The _x is similar to the double underscore, but it accepts an additional context parameter so that context can be added. Let's take a look at an example. So here I've got the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Lead, Lead, or Lead depending on how the word is being used. With the _x function, the first parameter is going to be the string for the translation, in this case, Lead or Lead, and the second is going to be context. So in this first example, the context is a lead as in a leash for a dog. And the second example, it would be a type of metal. And then in the third example, it would be a verb, meaning to guide or influence others. And then the final parameter we pass to this translation function is the text domain. This function also has a couple of sister functions that follow the pattern we've already seen. There's the basic _x for returning the string. The _ex for echoing a string. And the hybrid _nx function that supports both plurals and context. When it comes to translating strings, the main point here is that if there's any room for ambiguity,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=94)** always err on the side of providing too much information. I guarantee you that your translator will appreciate it. If your head is swimming from all the different translation functions for [PHP](../../Skills/Software%20Development/PHP.md) that we've looked at so far, don't worry, just remember the [WordPress](../../Skills/Web%20Development/WordPress.md) docs are your friend. It has all of these functions documented complete with examples for each so that you can reference them anytime you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 4. Working with Translation Functions in JavaScript

[↑ Back to Table of Contents](#table-of-contents)

#### [Including wp-i18n](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=0)** - [Instructor] As of [WordPress](../../Skills/Web%20Development/WordPress.md) 5.0, it's possible to internationalize [JavaScript](../../Skills/Software%20Development/JavaScript.md) files using functions that directly mirror those used in [PHP](../../Skills/Software%20Development/PHP.md). There's an [Internationalization](../../Skills/Web%20Development/Internationalization.md) script that ships with WordPress, and to use those functions in your theme or plugin, you need to declare this script as a dependency. If you're using MPM in your project, you can install it as a dependency, and then you could import those functions that you need from that package, and then use them accordingly in your code. If you're not using MPM, you can declare this package as a dependency when registering or on-queuing your script. In that case, you've got your code that you write, and that's in a JavaScript file. Let's say it's called my-script.js. Then when you register or on-queue the script, and we'll on-queue it in this example, then you declare that W 18n as a dependency. This tells WordPress to load the script before your my-script.js, ensuring that the translation functions will be available to your script. Once you've done that, you're ready to start using translation functions in your JavaScript. And what exactly are those? Well, we'll get to that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **Env Vars:** mpm (2), php (1)
> **File Paths:** my-script.js (2)
> **CLI Commands:** php (1)
> **Versions:** 5.0 (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using translation functions](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=0)** - [Instructor] Once we've got the WP I18n script loaded as a dependency, we can start using translation functions in our [JavaScript](../../Skills/Software%20Development/JavaScript.md). Now, not all translation functions in [PHP](../../Skills/Software%20Development/PHP.md) have JavaScript counterparts. These are the ones that we're limited to. We've got __(), which retrieves the string for translation. We've got _x() that retrieves the translated string with context. We've got _n(), which retrieves the singular or plural form of a translated string. We've got _nx(), which does the same thing as _n(), except this gives us the opportunity to add context. And finally, sprintf(), which allows for placeholders. Note that for each of these, these translation functions are retrieving values and not printing or echoing them. You could use any of these the same way that you use their PHP counterparts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Loading translations](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=0)** - [Instructor] To complete the circuit when it comes to using [Internationalization](../../Skills/Web%20Development/Internationalization.md) functions in [JavaScript](../../Skills/Software%20Development/JavaScript.md), the remaining bit is to tell [WordPress](../../Skills/Web%20Development/WordPress.md) to load those transactions, and we do that with the WP Set Script translations function. This function takes three parameters. The first is the handle of your already registered or on queued JavaScript file. The second is the text domain of your theme or plugin and the third is going to be the path to the directory containing your translation files. And that's really it. Once you've included the internationalization script as a dependency you can then use translation functions in your JavaScript. Then assuming your theme or plugin includes translation files, you direct WordPress to load them using that function we just looked at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **Speakers:** - [instructor] (1)


### 5. Make a Plugin Translation-Ready

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the project](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=0)** - [Instructor] In this chapter, I want to take what we've learned about [Internationalization](../../Skills/Web%20Development/Internationalization.md) and apply it in the form of a basic [WordPress](../../Skills/Web%20Development/WordPress.md) plugin. So here I've got WordPress running locally on my machine and in this particular install, if I go to Plugins, here is a plugin called To the Top. And what this plugin does is it adds a back to top link to every page of the site. If we look at the front-end of the site, we'll see two instances of that link. One is written in [JavaScript](../../Skills/Software%20Development/JavaScript.md) and the other is in [PHP](../../Skills/Software%20Development/PHP.md). Now, before we get started, I'll give you an introduction to the files and folders that make up this plugin. So first, I've got a folder called to-the-top. Then in the root directory, I've got my main plugin file to-the-top.php. And here in the root directory, I have two folders, a js folder containing a JavaScript file, and my languages folder, which contains my files for translation. I mentioned it at the beginning of the course, but as a refresher, you have access to these same files via [GitHub](../../Skills/Software%20Development/GitHub.md). There's a branch for each video in this chapter. In some cases, two branches, one marked with b and one with e, where b stands for beginning and e for end. For example, this branch 05-04b contains the code I used as the starting point of the fourth video in this chapter, while branch 04, 0e shows what the code looked like at the end of that lesson.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=94)** You're welcome to clone this repository to your local machine. Use GitHub Desktop or download a complete zip and follow along. Now that you have an idea of what we're building, let's strip it down to the beginning and we'll build it up from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** php (2), make (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), stands for (1)
> **File Paths:** to-the-top.php (1)
> **Env Vars:** php (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Best practices for internationalization](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=0)** - [Instructor] Before we dive into creating a plugin that's translatable, I want to talk about some best practices when it comes to prepping strings for translation. First, use a good English style. Try to avoid slang or abbreviations if possible. If a translator doesn't understand the message, they can't provide an appropriate translation. For example, 'No match', is not a helpful string. Does this mean that we can't start a fire or there's no result for a search or that my outfit doesn't go together? Avoid ambiguity, and you can do that by following our next rule. Write entire sentences. This is really important as many languages have a different [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) order than English. Next up, split your text at paragraphs. It's okay to have multiple sentences as part of a single string, but basically you don't want to end up with a whole page of text in a single string. Next, instead of using concatenation, format strings. In the case of these two examples, the second one is much simpler to read than the first one that uses concatenation. Along with these best practices, try not to embed URLs and instead use placeholders. This is a best practice both for security and it eliminates potential mistakes that could come from copying, pasting a URL. Lastly, avoid leading or trailing white space in a translatable phrase. If you follow these rules of thumbs, you'll increase the odds of getting successful
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=93)** and accurate translations for your strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Add text domain and set domain path](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=0)** - [Instructor] So to get started, I have a local installation of [WordPress](../../Skills/Web%20Development/WordPress.md) up and running. And you can see I have no plugins yet. I'm going to head over to my code editor where I have this install opened up. And in my plugins folder, I'm going to start by adding a new folder for my plugin, to-the-top, to-the-top. And from there, I'll add my main plugin file by the same name. I'll start by opening up my [PHP](../../Skills/Software%20Development/PHP.md) brackets. The next thing I want to do from here is add a header block. I will head over to the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) WordPress docs and I'm going to actually go and just copy this header block here and paste that into my file. That way I don't have to type it all out. And I'm going to update this with my own information. I'm not going to spend a lot of time here explaining this header block, but what I do want to point out is this text domain and the domain path. We know that the text domain is what we'll use to identify all of the translatable strings that belong to this plugin. The text domain should exactly match the slug of your plugin, and in this case my slug is two-the-top. Now, note that as a WordPress 4.6, you don't have to specify the text domain like this. WordPress will automatically set it based on your plugin slug. That said, there's definitely no harm in including it, and I like it as a reference point for this example.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=97)** The next thing I want to call out is this domain path. This lets WordPress know here to find the translations. Later on, I'm going to create a folder that will hold my translation files, and that's going to be the name of the folder here that I set for my domain path. I'll just leave this for now. Note that while you don't have to name your folder, "languages", that is something that's pretty standard in WordPress plugins and themes, so I'm going to stick to it. So with our main plugin file and our header block in place, we are ready to roll.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** php (1), find (1)
> **Warnings:** note that (2)
> **Env Vars:** php (1)
> **Versions:** 4.6 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Add translation functions to PHP](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=0)** - [Instructor] In this lesson I want to write some code that will output a, back to top, link in the footer of my site. So I'm going to start by writing a function. I'll call it ttt, for to the top, underscore add link.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=20)** And let's create a variable for my link text. And we'll just say, back to top. And then I'm going to use a print F statement to construct my link. And now we're going to do a couple of familiar things. So for starters, this link text, I want it to be translatable, so I'm going to use the basic double underscore translation function, where the first parameter is the text that I want to translate and the second parameter is my text domain. Then here in this print F function, I'm going to use a placeholder for that link text. So I'll say percent S. And the second parameter of this function should be the value of that, which is this link text variable. So I'll go ahead and add that in. Let's not forget our semicolon. And oops, I forgot to write the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) function at the beginning of my function name. So let's go ahead and add that. We'll add a couple of quick comments explaining what's going on.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=105)** Okay, so now I have a function that would add a link, but right now I haven't hooked it anywhere, so this function isn't actually going to execute. To do that, I'm going to do an add action and hook it to WP Footer. So there's my hook, and then my callback function is this ttt underscore ad link. Perfect, so let's save that. And if I head back to my plugin, let's refresh. Here, I can see, to the top. And before I activate it, let's just go look at the site. Okay, and this is just a default [WordPress](../../Skills/Web%20Development/WordPress.md) install I haven't done anything to. Let's activate the plugin and when we reload the front end, there we see that back to top link. And if I click it, boop, it takes us right back to top. Okay, so I know I glossed over this right here of using action hooks and filters. If you really want a thorough walkthrough of those topics, I have got a course that in the library. just for you, but with just this code, I've got a very basic function that outputs a link with translatable text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Create and enqueue a script with wp18n](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=0)** - [Instructor] So far, I've shown you how to create a back to top link with translatable text and add it to the footer of a site using [PHP](../../Skills/Software%20Development/PHP.md). Now I want to show you how you could do the same, but with [JavaScript](../../Skills/Software%20Development/JavaScript.md) instead. I'm going to start by creating a folder off the root of my plugin, and I'll call it js, and inside that folder, I'll create a file, and just call it to-the-top.js. I'll just create this as a placeholder for the custom code that we'll write in the next lesson, but I'd like to go ahead and tell [WordPress](../../Skills/Web%20Development/WordPress.md) to load this file. So to do that, I'm going to use the enqueue_script function. This registers a script in WordPress and queues it up, so to speak, and it takes 4 parameters. The first is going to be a unique handle for the script, the URL or source of the script, any dependencies, and then you can also specify a version number, and then whether or not it should load in the footer. So let's head back to our plugin, and in our main file, we add a couple lines. We'll add a function and we'll call it ttt_load_scripts, and this function is going to hold that script enqueue. Normally in a theme or a plugin, you might be loading up a number of scripts or even styles, so sometimes it makes sense to bundle those
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=95)** within a single plugin, or excuse me, a single function. So we'll do wp_enqueue_script, and the first thing we want is the handle, so we'll say to_the_top. The second is going to be the source. Now, how you specify the source will look a little bit differently depending on if you're using a plugin versus a theme versus a child theme. So in this case, I'm going to use the plugin directory URL function,
>
> **[2:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=138)** and then point it to that js folder, and to-the-top.js. Okay. I'm going to go ahead and just leave it at that for the moment. Put our ending semicolon. Okay, and now we need to hook this function up so that it runs, and the appropriate hook for that is this wp_enqueue_scripts, plural, so I'm going to go ahead and copy that. We'll do another add_action. There's our hook, and here is our callback function. Okay, so with that, if I head back to the site that we're building, let's open up the inspector, and under the network tab, I'm going to select JS so that I can see all JavaScript files that are loading on this page. I'll go ahead and click reload, and there we go. I got a couple of scripts that are just loading with the site, and then there is my to-the-top script. So that's what we're doing with this bit of code. Now the other thing that you can pass as part of this enqueue script function is any dependencies, and we've talked earlier that we want that wp-i18n script as a dependency, and also for the code I'll be writing, I do want to use jQuery, so I'm going to go ahead and add jQuery as a dependency.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=233)** So now if I save that and go back and refresh this page, there we go. I can see that jQuery is loading, along with that i18n, and then those scripts, in turn, have some dependencies, which you see being loaded here. But we've confirmed that our JavaScript file is loading, that the dependencies are loading, and with that, we're ready to move forward to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** jquery (3), enqueue_script (1), ttt_load_scripts (1), wp_enqueue_script (1), to_the_top (1)
> **Env Vars:** url (2), php (1)
> **File Paths:** to-the-top.js (2)
> **CLI Commands:** php (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Add translation functions to JavaScript](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=0)** - [Instructor] With our script set to Load along with the dependencies that we'll need, let's add some [JavaScript](../../Skills/Software%20Development/JavaScript.md) to our file. In this case, I'm going to replicate what I've already done with [PHP](../../Skills/Software%20Development/PHP.md), and do it with JavaScript. Now, while you wouldn't really bundle both of these together in a real-world scenario, my point is to show you how to create translatable strings in both PHP and JavaScript. Now, to save you from having to watch me type, I've got some code on my clipboard that I'll just go ahead and paste in, and then I'll explain what's going on. Okay, so inside of our jQuery here, we've got our variable called toTheTop and that holds basically our link. We've got the link target, a CSS class, and then the text, Back to top. And then this next bit here simply appends that link to the [HTML](../../Skills/Web%20Development/HTML.md) footer in our site. So let me save that. Let's go back to our page and refresh. And now we see two Back to top links, one is from our JavaScript and the other is from our PHP. And just to make those a little bit easier to differentiate, let's say this one is JS, and if I go back to the PHP, here's my link text, I'll put PHP. Okay, so if I refresh there, now I can see which one is coming from JavaScript and which one is coming from PHP. So the last piece of the puzzle here
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=93)** is to make this text here translatable. We're going to use the double underscore function that you've already seen. So we've got our string to translate and we'll use our text domain, to-the-top. Now, there's one more thing I need to do in addition to wrapping this in a text string. Even though I've loaded the [Internationalization](../../Skills/Web%20Development/Internationalization.md) script as a dependency, I need to reference that object here in this JavaScript file. There's two ways I can do that, and I was just going to show you here from the documentation. The first would be to take those available translation functions for JavaScript and set them to a constant referencing that wp.i18n object. The other way is just to directly reference that object by putting it in front of that translation function. You can do this either way. If you're going to have a lot of translatable strings in the context of your JavaScript file, it's probably easier to go with the recommendation here from the docs, which is just to set that up once, and then you can use any of these translation functions without having to prefix them. So let's go ahead and save that. And if I head back to my site, reload, nothing changes, I've got both of those links there. But in the background, I know that both of those now contain translatable strings and we're going to take a look at what to do with those
>
> **[3:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=187)** in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [PHP](../../Skills/Software%20Development/PHP.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** php (6), make (2)
> **Env Vars:** php (6), css (1), html (1)
> **Cross-References:** go back to (2), in the next (1)
> **Code Identifiers:** jquery (1), tothetop (1)
> **Documentation:** the documentation (1), the docs (1)
> **Speakers:** - [instructor] (1)

#### [Create a translation file](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=0)** - [Instructor] The plugin we've built so far contains strings for translation in both [JavaScript](../../Skills/Software%20Development/JavaScript.md) and [PHP](../../Skills/Software%20Development/PHP.md). In this lesson I'd like to show you how to generate a POT file, that stands for portable objects template and that contains any translatable strings. There are several ways that you can generate a POT file and I'm going to show you how using WP-[CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Now, if you're not familiar with WP-CLI this is the official command line interface for [WordPress](../../Skills/Web%20Development/WordPress.md) and it has all sorts of helpful utilities for managing WordPress via terminal. If this sounds intimidating, it's actually pretty approachable and there's great documentation for installing it on your machine and running it. You also have the option to use POEDIT, a visual tool for creating POT files. I'll be using WP-CLI and here's the documentation for that make-pot command that's used to generate a pot file. One quick comment I want to make before we get started. If you happen to use local WP for your local [Wordpress Development](../../Skills/Web%20Development/Wordpress%20Development.md) it automatically installs WP-CLI for you. And to use those commands, all you have to do is go to your site in local and click open site shell. It opens a terminal window where you can run those CLI commands. Okay, so here's the documentation for make-pot and we can see that this scans PHP, Blade-PHP, and JavaScript files for translatable strings. There's multiple options that we can pass to this command.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=94)** For instance, here's destination. That would be where you want the POP file to be generated. You can include specific files or directories, exclude them, etc. And then if we keep scrolling down here are a couple of examples of this command in use. So I will go over here to local and open site shell. Here it's dumped me in the public directory. So if I do, let's list things out. Okay, I want to head into my WP content plugins folder and if I look at what's in there we can see that to-the-top plugin. I want to run that make-pot command on the entire to-the-top folder and everything in it. So I'm actually going to run that command from this plugins folder. And to do that, I'll say, wp i18n make-pot and then I'll specify the directory, to-the-top. Okay, I'll hit enter. Success. My POT file was successfully generated. Let's go back to our code and see. Okay, so here in my plug-in file I can see that that created a languages folder off the route directory. And inside of that is a to-the-top POT file. And inside of this file are strings for translation. You can see that it's pulling some information automatically from the header in my plugin. And available strings for translation
>
> **[3:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=187)** we've got the name of the plugin, the description of the plugin, author's name, URI, and here we can see specifically that back to top text that was in our PHP function and this back to top text that was in our JavaScript function. So now that I've got a POP file included with my plugin I'm officially ready for translation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Wordpress Development](../../Skills/Web%20Development/Wordpress%20Development.md) (1)
> **Env Vars:** pot (5), cli (5), php (4), pop (2), poedit (1)
> **CLI Commands:** make (5), php (4)
> **Tools:** terminal (2), command line (1)
> **Documentation:** the documentation (2)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Include an additional translation with your plugin](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=0)** - [Instructor] Now that we've gone through the process of creating a plugin, using translation functions and pulling translatable strings into a POT file, I'd like to show you how you could use this as the basis for localizing your plugin. We know that POT stands for portable objects template. So think of that file as the template containing source text that translators will use to generate POE or portable object files with their translations. One POE file will be created per translation. For example, you may have one POE file containing a Danish translation another for Spanish, and another containing Hindi. The POE file is where the translation happens. Then in order to use these translations in [WordPress](../../Skills/Web%20Development/WordPress.md), these POE files need to be compiled for strings from [PHP](../../Skills/Software%20Development/PHP.md) files, a MOE file is created, and for strings from [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, a [JSON](../../Skills/Web%20Development/JSON.md) file is created. We've already got our POT file. So to start, I'm just going to create a new file in my languages folder, and this is going to be my POE file. What should I name it? Well, with plugins, the naming convention for POE files is the text domain followed by a dash, language code_country code. If you're providing translations for a theme, you could leave off the text domain and simply use the language cod_country code convention. Here's a resource for finding country codes
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=93)** and language codes. And in case you're wondering why we use a combination of these two, it's because many countries share the same language, but there might be regional differences. So using a language code in conjunction with a country code gives us the ability to include very specific translations. In my case, I'll be creating a translation in Spanish. So I'll say to the top for my text domain- and then the language code is ES_ and the country code in this case for Mexico is MX. And I'll just give it the .po extension and I'm going to go ahead and copy and paste the components of my POT file directly into that POE file. So you could use a visual translation tool here but since I've only got two strings to translate, I'm just going to do it manually. And that's these two strings, the back to top for PHP and the back to top for JS. So the message GID, that's going to be the original text to translate. And then what goes in this message STR is going to be your translated string. Okay. I'll go ahead and save that with my translated strings, and that's it. I've now got my POE file ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** poe (9), pot (4), php (2), moe (1), json (1)
> **CLI Commands:** php (2)
> **Code Identifiers:** code_country (1), cod_country (1)
> **Exercise Files:** template (2)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generate MO and JSON files](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=0)** - [Instructor] With our PO file translated, it's time to compile it into a MO file and a [JSON](../../Skills/Web%20Development/JSON.md) file. The MO file will hold translated strings for [PHP](../../Skills/Software%20Development/PHP.md) and the JSON file has the strings for [JavaScript](../../Skills/Software%20Development/JavaScript.md). Let's start with the MO file. There are various ways you can do this. You could do it via the command line, you could do it via Poedit, or even a plugin like Loco Translate. Since I've already shown you the wp i18n [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) command, I'm going to stick with that. There's a make-mo sub command I can use. Let's go ahead and click through that. And this basically takes two options. There is a source, which is the path to the existing PO file, or a directory with multiple PO files, and the destination directory. Basically, where do I want to save this MO file? I'll go back to terminal and confirm that I'm in the root directory of my plugin and I'll run the command, wp i18n-make-mo.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=74)** And I want to specify the languages folder, as both the source and I'll let it default to that destination. And success. It says created a file. Let's go check it out. Okay, so in my languages folder, I now have a MO file that matches the naming convention of my PO file. Perfect. Next up, I want to create the JSON file that I can use for translating the JavaScript strings. So let's head back to the i18 sub commands and here is one specifically for make-json. This extracts JavaScript strings from PO files and adds them to individual JSON files. Now, this is a little more nuanced than that make-mo command, so let me highlight a few things. For starters, let's say you have multiple JavaScript files with translation strings represented in your POT file. This command would generate a single JSON file per JavaScript file. It's a one-on-one mapping, so if you've got multiple JavaScript files in your theme or plugin, don't be surprised if you run this command and get multiple JSON files as a result. The other thing I want to point out is this purge option. This is saying when you run this make-json command and it pulls strings from your POT file that correlate to a JavaScript file, do you want to then remove those strings from the POT file, or leave them be? If we look at my existing PO file, we can see
>
> **[2:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=170)** here is the string from my JavaScript file. That purge option would determine whether this bit remains in the PO file or gets removed. It's really up to you, but just be aware. Okay, so I will head back to my command line and this time the command is, wp i18n-make-json. And again I will specify that languages folder. Success. So if we go back to our languages folder, there it is. There's that JSON file and I'm going to make this a little bigger to see. Now, it follows the same naming convention in terms of text domain, language code, country code, but then we get this kind of weird string of letters and numbers. What is that about? Well, that's a hash that [WordPress](../../Skills/Web%20Development/WordPress.md) uses to map this translation file back to the original JavaScript file. And with that, we have now got our compiled files ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (10), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (9), [PHP](../../Skills/Software%20Development/PHP.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** json (7), pot (3), php (1), cli (1)
> **CLI Commands:** make (7), php (1)
> **Tools:** command line (2), terminal (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Load translations](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=0)** - [Instructor] Now that we have our translation files ready to go, the last piece of the puzzle is to let [WordPress](../../Skills/Web%20Development/WordPress.md) know that we want to load those translations. There are three functions available for loading translations in [PHP](../../Skills/Software%20Development/PHP.md), depending on whether you're working with a plugin, theme or child theme respectively. And then there's wp_set_script_translations for loading translations in [JavaScript](../../Skills/Software%20Development/JavaScript.md). Let's start with our PHP. So here in the documentation for this load_plugin_textdomain, it takes three parameters. The first is our textdomain, the second is deprecated. It was a path that's no longer used. And the third is the relative path where our .mo files reside in our plugin. So heading back to my main plugin file, let's write a wrapper function to hold that load_plugin_textdomain. I'll call it ttt_load_php_translations. And the first parameter is going to be my text domain, to-the-top. For the second, I can just pass false. And for this third, this is going to be the relative path to the folder where our .mo file resides.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=86)** Okay, so where should we hook this? Well, the documentation comes in handy and thanks to contributor Fahad for letting us know why we should use the init hook.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=109)** So go back to our add_action, hook to init, and then add our callback function. Okay, so at this point, we should be good to go, but how do we know if this is working? Well, let's go to our site settings under general, and let's change the language of our site to Espanol de Mexico, and we'll save that.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=146)** And now you can actually see the back end of the site is translated into Spanish. And if we go to the front end of the site and scroll down, there we see our translation from our script in PHP, and that is fantastic. Now it looks like when I did this translation I forgot to include the parenthesis showing that this was from PHP. So I'm going to just run back to my profile, put PHP in parentheses there. We'll save it. And then if I run back to my command line, I'll regenerate that .mo file. Perfect. Okay, so now if we reload this page, whoop, there we can see our translation is coming from that .mo file. That is fantastic. Next, let's load up the translation for JavaScript. This particular function takes three parameters. The first is going to be the handle of the script that you want to load. The second is the text domain and the third is the full path to the directory with the translation files. This is a little bit different from load_plugin_textdomain, which was just looking for a relative path. I'm highlighting that specifically because if you get into issues where your translation files aren't loaded, it may well be that you're looking in the wrong path. So just a heads-up there to double check which path you're pointing to. So back to our main plug-in file.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=242)** Let's create a wrapper function, and we'll call this one ttt_load_js_translation.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=253)** And I'll say wp_set_script_translations. The first is going to be the handle of the script that I enqueued earlier, this to-the-top. And since that's the same as my text domain that's actually a little confusing. So I'm going to change this script handle. I'm just going to append a -js on the end. And that's the first parameter I want to pass to this script_translations function. The next is going to be the textdomain, which is to-the-top. And this is going to be the full path. So I'll say plugin_dir_path, and then tack on languages at the end.
>
> **[5:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=313)** There we go, and you know, I'm really not setting a good example for you by not adding comments to this. So let me do that quickly. Okay, now, same as the function we just wrote up here, we need a place to hook this function that we just wrote. So I'm going to refer back to the documentation. And here we have a contributor letting us know that we want to hook this to the wp_enqueue_scripts hook. However, we want it to run after we've already loaded scripts. So if we go back and look at our code, we're using this wp_enqueue_scripts hook earlier to enqueue our JavaScript. But we want to run this at a little bit later point in time, and we can do that through the beauty of priorities. So we'll say add_action. Our hook is enqueue_scripts, plugin our callback function, and then let's just add a later priority functions run by default at a priority of 10, and I'll just say 100, to make sure any other scripts hanging out there might have already loaded. So we'll save that. And if we go to look at the front end of our site, and if we refresh, there we have it, we can see our translated script
>
> **[6:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=406)** that is coming from JavaScript. And also looks like I forgot to mark this translation as coming from a JavaScript file. I'm going to head back to my [JSON](../../Skills/Web%20Development/JSON.md) file, this is a little easier to read if we wrap it. And here we go. And I'll just put JS in parentheses so that it's obvious which of these translations is coming from where. So with that, my friends, we have successfully loaded our translations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** load_plugin_textdomain (3), wp_set_script_translations (2), add_action (2), wp_enqueue_scripts (2), ttt_load_php_translations (1)
> **CLI Commands:** php (5), make (1)
> **Env Vars:** php (5), json (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)


### 6. Advanced Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Automating text domains](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=0)** - [Narrator] Learned to show you how you can go further with [Internationalization](../../Skills/Web%20Development/Internationalization.md). Let's start with adding text domains in bulk. Hopefully you're in the habit of adding a text domain every time you use a translation function, but if you're not, or maybe you inherit a code base without text domains or some other situation where you need to go add them in bulk, there is a way to do it. And it only takes a few steps. To start, you would download this [PHP](../../Skills/Software%20Development/PHP.md) file and drop it into the root of the theme or plug-in folder with the files that you wanted to add the text domain to. From there, you would open up a terminal and move your command line to that theme or plug in directory where that file is. And then finally, you would run a command that would automatically either create a new file or replace the existing files with that text domain added. So the idea is, if you had a translation function like this, underscore with a translatable text post, no text domain, after running that command, it would write the same function, but it would include the text domain. And here you've got multiple examples of how to use this command based on what exactly you're trying to accomplish in terms of whether you want to change a single file, change all files in a directory, override files, or create new files, et cetera. So that's it. I'd strongly suggest that you get in the habit of including text domains with every translation function,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=94)** but should you find yourself in a situation where you need to generate those text domains in bulk, this is a handy script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** php (1), find (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (2)
> **Env Vars:** php (1)
> **Speakers:** - [narrator] (1)

#### [Language packs](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=0)** - [Narrator] In [WordPress](../../Skills/Web%20Development/WordPress.md), language packs refer to sets of language files that enable users to translate a site into their preferred language. Language packs include translations for all the default WordPress files, including the themes and plugins that come bundled with WordPress. You can set the language during the WordPress installation process, or if you've got a WordPress site already installed, you can go to settings, general, and under site language, you can choose your preferred language. This will automatically install the WordPress core language pack for you. And in addition to the ease of installing the WordPress core language pack from right there, if you have any themes or plugins installed that include a translation for that same locale, it'll go ahead and load those as well. Now, a note here, if you are using WordPress multisite. The default language for the entire network is what you set under the network admin settings but you also have the ability to set the language on a per site basis via the settings general panel like the one we just looked at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (8)
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Internationalization Security](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=0)** - [Instructor] Anytime you're writing code, security is an important consideration and [Internationalization](../../Skills/Web%20Development/Internationalization.md) is no exception. In this lesson, we'll look at some tips. For starters, if you're going to bundle locales provided by other translators, you'll want to check those strings for spam or malicious words. If you're not familiar with the translation language, you could use [Google](../../Glossary/Service/Google.md) Translate to convert a translation into your native language so that you can compare the original strings to the translated strings just to make sure there's no spam or anything malicious. Next, you want to make sure to escape strings. It's one thing to include spammy translations, but it's another to actually add malicious code. To keep that from happening, you'll want to treat internationalized strings just like you would any other untrusted input. Say, like what a user might enter into a form. As another best practice, you'll want to avoid URLs in internationalized strings. That's because a malicious translator could change the URL to point to somewhere you didn't intend. To get around this, use the printf, or sprintf functions we've already looked at to use placeholders for URLs. As an additional bonus, This could help prevent any copy-pasting errors that might come if a translator were trying to copy your URL as part of a translation string and paste it back in. Use placeholders and help everybody out. Finally, you'll want to compile your own .MO files.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=95)** Even if a translator sends a compiled .MO file along with their plain text .PO file, go ahead, throw it away, and compile your own. Consider this a best practice because you have no idea whether the .MO file was actually compiled against the .PO file that was sent. It could have instead been compiled against a .PO that had malicious strings. While you want to hope that anyone submitting a translation file for your code would do so with good intentions, you still want to do your due diligence and take precautions by following these security measures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Best Practices:** best practice (2), make sure to (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 7. Contributing to Open Source

[↑ Back to Table of Contents](#table-of-contents)

#### [Translating for WordPress with GlotPress](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=0)** - [Instructor] I couldn't teach you about [WordPress](../../Skills/Web%20Development/WordPress.md) and [Internationalization](../../Skills/Web%20Development/Internationalization.md) and not mention the opportunities available to help translate. WordPress is in the process of being translated into over 150 locales. And when I say in the process of, that means that some may be at 100% translation, and others might not yet have a single string translated. If you speak languages other than English and are looking for a way to contribute to the WordPress project, this is a perfect opportunity. You can join thousands of other polyglots to help make WordPress more accessible and, therefore, democratize publishing around the world. To get started, you'll need an account at [wordpress.org](https://wordpress.org). It's free to create if you don't already have one. Then from translate.[wordpress.org](https://wordpress.org), you'd want to find the right locale that you want to contribute to and then click the Contribute Translation button. For each locale, you can contribute to certain versions of WordPress, core themes, plugins, patterns, etcetera. Whichever project you wanted to translate to, you would find it and just click on the Translate Project button. WordPress uses something called GlotPress, which is a collaboration tool for translators. GlotPress takes a POT file and then sets up individual profiles for each desired translation. If you're interested in translating WordPress or getting involved with the polyglots team,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=94)** be sure to check out the Translator Handbook. On a related note, if you're interested in using GlotPress to create translations for one of your themes or plugins, you can do that with a GlotPress plugin available on [wordpress.org](https://wordpress.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (10), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** find (2), make (1)
> **URLs:** [wordpress.org](https://wordpress.org) (3)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** pot (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Contributing to GlotPress](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980&t=0)** - [Narrator] Community contributions are at the heart of open source [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) like [WordPress](../../Skills/Web%20Development/WordPress.md). As I mentioned in the previous lesson, GlotPress is an open source tool that makes it easy for translators to collaborate on a code base. If you're not multilingual, or don't feel compelled to contribute to WordPress translations, you could always contribute your development skills directly to the GlotPress project, helping enable others to translate software. If you're interested, you can find contribution guidelines here in the GlotPress [GitHub](../../Skills/Software%20Development/GitHub.md) repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What next?](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=0)** - Well, what do you think? Are you ready to start writing code that others can translate or maybe even translate for the [WordPress](../../Skills/Web%20Development/WordPress.md) project? In this course, we've covered what you need to know to get started with [Internationalization](../../Skills/Web%20Development/Internationalization.md). You know the variety of translation functions available to you. You know how to make your theme or plugin translatable, and you know how to use the documentation at [wordpress.org](https://wordpress.org) to help you as you go. This brings us to the end of our time together for now, but I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Internationalization](../../Skills/Web%20Development/Internationalization.md) (1)
> **CLI Commands:** make (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Documentation:** the documentation (1)
> **Speakers:** - well (1)


## Instructor

- [Carrie Dils](../../Instructors/Web%20Development/Carrie%20Dils.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/wordpress-internationalization-3266041)

## Skills Covered

- WordPress
- Internationalization

## Path Context

### In [Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)
← [Wordpress Building A Secure Site](../Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md) | **2 of 8** | [WordPress- Custom Post Types and Taxonomies](WordPress-%20Custom%20Post%20Types%20and%20Taxonomies.md) →

## Appears In

- [Advance Your Skills in WordPress](../../Paths/Cybersecurity/Learning%20Paths/Advance%20Your%20Skills%20in%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [Troubleshoot and Repair Your WordPress Website](../Web%20Development/Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md) — WordPress
- [WordPress- Accessibility](../Web%20Development/WordPress-%20Accessibility.md) — WordPress
- [WordPress- Speeding Up Your Site](../Web%20Development/WordPress-%20Speeding%20Up%20Your%20Site.md) — WordPress
- [WordPress- SEO](../Web%20Development/WordPress-%20SEO.md) — WordPress
- [Wordpress Ecommerce](../Web%20Development/Wordpress%20Ecommerce.md) — WordPress

---

[↑ Back to top](#)