---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: using-custom-meta-boxes-in-wordpress
url: "https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress"
duration_minutes: 93
duration: 1h 33m
level: Intermediate
updated: 12/16/2021
learners: 4154
skills:
  - Wordpress Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEaanmvNCpt1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639506601351?e=2147483647&amp;v=beta&amp;t=dlaorsXV1vwvvGA0QOX7u_FiZQNZzvVQRAL5JENCi2w"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your Skills in WordPress]]'
prev_courses:
  - '[[WordPress- Custom Post Types and Taxonomies]]'
next_courses:
  - '[[WordPress Essential Training]]'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":4,"total":8,"prev":"WordPress- Custom Post Types and Taxonomies","next":"WordPress Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Using%20Custom%20Meta%20Boxes%20in%20WordPress.md)

![Using Custom Meta Boxes in WordPress](https://media.licdn.com/dms/image/v2/C560DAQEaanmvNCpt1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639506601351?e=2147483647&amp;v=beta&amp;t=dlaorsXV1vwvvGA0QOX7u_FiZQNZzvVQRAL5JENCi2w)

# Using Custom Meta Boxes in WordPress

> When you're building your own plugin or theme, it's important to reduce the number of external dependencies that a site owner needs to use it. While there are a lot of great custom field plugins out there, CMB2 allows you to include it as a library in your own theme or plugin. In this course, Joe Casabona, course developer and founder of Creator Courses, walks you through how CMB2 works, when to u

> [LinkedIn Learning](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress) | 1h 33m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Custom fields without dependency](#custom-fields-without-dependency)
  - [What you should know](#what-you-should-know)
  - [Demo project overview](#demo-project-overview)
- [**1. How CMB2 Works**](#1-how-cmb2-works) (8 videos)
  - [What is CMB2 and how does it work?](#what-is-cmb2-and-how-does-it-work)
  - [The difference between CMB2 and ACF](#the-difference-between-cmb2-and-acf)
  - [Installing CMB2 via the Plugin Directory](#installing-cmb2-via-the-plugin-directory)
  - [Setting up our project plugin](#setting-up-our-project-plugin)
  - [CMB2 as a library for your plugin](#cmb2-as-a-library-for-your-plugin)
  - [The CMB2 documentation](#the-cmb2-documentation)
  - [Field types in CMB2](#field-types-in-cmb2)
  - [CMB2 and the block editor](#cmb2-and-the-block-editor)
- [**2. Building Our Custom Fields**](#2-building-our-custom-fields) (9 videos)
  - [Defining our custom fields](#defining-our-custom-fields)
  - [Creating our meta boxes](#creating-our-meta-boxes)
  - [Adding a the custom field type](#adding-a-the-custom-field-type)
  - [Adding fields to our meta boxes](#adding-fields-to-our-meta-boxes)
  - [Adding a file uploader](#adding-a-file-uploader)
  - [Creating a repeatable field](#creating-a-repeatable-field)
  - [How to get data from CMB2](#how-to-get-data-from-cmb2)
  - [Adding our custom fields to the frontend](#adding-our-custom-fields-to-the-frontend)
  - [Displaying from a repeatable field](#displaying-from-a-repeatable-field)
- [**3. Creating a Post Select Box**](#3-creating-a-post-select-box) (2 videos)
  - [Building a post select box](#building-a-post-select-box)
  - [Updating the content output](#updating-the-content-output)
- [**4. Noteworthy Features**](#4-noteworthy-features) (4 videos)
  - [Bringing in taxonomies](#bringing-in-taxonomies)
  - [Frontend Meta Box support](#frontend-meta-box-support)
  - [Creating a theme options page](#creating-a-theme-options-page)
  - [Adding fields to user profiles](#adding-fields-to-user-profiles)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Custom fields without dependency](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=0)** - [Joe] A common and important feature of many custom plugins is the custom fields associated with certain aspects of the plugin. While there are lots of great custom fields plugins out there, it's important to reduce the number of external dependencies a site owner needs to use to make your plugin work. That's where CMB2, short for Custom Meta Boxes 2, comes in. It is one of the only plugin frameworks where you can include it as a library in your own theme or plugin. And in this course, you will learn how to supercharge your custom [[WordPress]] work using this popular framework. Hi, I'm Joe Casabona, a front-end web developer and educator who's been using [[PHP]] since 2003 and WordPress since 2004. So join me in my [[LinkedIn]] Learning course, where I will show you just about everything you need to know to start using CMB2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[PHP]] (1), [[LinkedIn]] (1)
> **Env Vars:** cmb2 (2), php (1)
> **CLI Commands:** make (1), php (1)
> **Definitions:** short for (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=0)** - [Instructor] CMB2 is a developer's tool kit for building meta boxes, custom fields and [[Forms]] for [[WordPress]]. So there are definitely a few things you should know before diving into this course. On top of a familiarity with WordPress as a user, you should also be familiar with the common terms like posts, pages, meta fields and more. If you're shaky on those terms or need a refresher, you can always check out the WordPress Essentials Training here in the [[LinkedIn]] Learning Library. On top of that, you'll need to be familiar with [[PHP]], particularly how it relates to [[Wordpress Development]]. After all, we'll be making a plugin. The Learning PHP and PHP for WordPress courses can help you with that. Finally, knowing [[HTML]], CSS and [[JavaScript]] will be a big plus. They won't be a focus of the course, but we will be displaying information on the screen and we'll need to format it. If you want a general refresh on any or all of this, the Becoming a Junior WordPress Developer Learning Path here in the LinkedIn Learning Library is definitely your best bet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[PHP]] (3), [[LinkedIn]] (2), [[Forms]] (1), [[Wordpress Development]] (1)
> **Env Vars:** php (3), cmb2 (1), html (1), css (1)
> **CLI Commands:** php (3)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Demo project overview](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=0)** - [Instructor] When custom post types and meta fields were first introduced in [[WordPress]], the possibilities for what WordPress could become seemed endless. Years later, those possibilities were actualized thanks in a big part to frameworks and libraries like CMB2. We could build complex field types and add them directly to plugins without dependencies. Throughout these videos, you will be learning how CMB2 works from a technical standpoint. And to apply some practicality, we're going to build out a podcasting website. The site will allow us to convert posts into podcast episodes with information about the episode like the audio file and episode number, and even the ability to add sponsors. We'll also allow for related episodes by connecting posts. Then we'll display that information by hooking into the content so that our plugin works with any theme. Finally, we'll explore some advanced topics of CMB2 like bringing in and moving the taxonomies fields, front-end Meta Box support, creating a theme options page, and adding fields to user profiles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **Env Vars:** cmb2 (3)
> **Speakers:** - [instructor] (1)


### 1. How CMB2 Works

[↑ Back to Table of Contents](#table-of-contents)

#### [What is CMB2 and how does it work?](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=0)** - [Instructor] Custom fields in [[WordPress]] are key value pairs that allow us to store any information that WordPress doesn't natively store. Imagine for example you want to include a mood in your posts. Let's pretend it's 2001 for a moment. There's no native mood field in WordPress core, but we can use custom fields instead to add a name and then a value. For example, we can name this field current mood, and then give a value of happy, and then click add field. There are a few pitfalls to this. First, we'd need to retype this name for every post, remembering that we used the term current mood as the name, otherwise it won't show up in our template. Second, as the number of custom fields grow, sifting through a list of names can get unwieldy. Finally, we're limited pretty much to plain text here. If we wanted something more advanced like check boxes or even formatted text, we'd need to custom code that or figure out a workaround like a comma separated list. Luckily, CMB2 handles all of this for us. We can create advanced interfaces for entering in those name, value pairs and represent the inputs in lots of different ways. This saves us tons of time, creates repeatable,
>
> **[1:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=91)** and familiar ways to enter data, and allows us to focus on displaying that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** cmb2 (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [The difference between CMB2 and ACF](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=0)** - [Instructor] Advanced Custom Fields is an industry leader in the [[WordPress]] plugin and custom field space. And in fact, there's a course on it in the [[LinkedIn]] learning library. So why should you use CNB2 instead? Well, there are a few reasons, depending on your needs. First CMB2 is much more of a developers tool. There's no user interface to build out the custom fields. It's all done through a robust set of functions. The developers and community understand people will be bundling this with their own code, and they don't want anything to be a breaking change for as long as they can help it. Because of that, there's also a strong commitment to backwards compatibility. There's a strong community of volunteers maintaining the software and that means CMB2 is free. This is an important aspect of the library if you intend to bundle it with your code, you don't need to pay a developer license or pass the costs onto your clients or customers. In fact, there's very little dependency outside the CMB2 library or the WordPress core. You can include the library right in your plugin or theme code. A lot of work went into the loader to make sure everything works properly and mistakes like accidentally loading two versions of CMB2 are caught and handled gracefully. All of this means that as a developer, CMB2 is your best bet. Especially if you plan to create commercial software or don't want to tie your clients
>
> **[1:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=93)** to using another premium plugin. However, if you're looking for the easiest way to create custom fields or a more modern way that has a block editor support, you should consider ACF, there's a course on it in the LinkedIn learning library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[LinkedIn]] (2)
> **Env Vars:** cmb2 (5), cnb2 (1), acf (1)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Installing CMB2 via the Plugin Directory](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=0)** - [Presenter] There are two ways that you can use CMB2. The first is by installing the plug-in directly through the plugin directory. Let's take a look at how to do that now. From your [[WordPress]] dashboard, go to Plugins, Add New. Then search for CMB2 in the search field. You'll see a bunch of options but the first one will be CMB2 by CMB2 team. Click Install Now and then activate. Now that's it, there's no UI or admin menus for us to interact with the plugin, that's all done through code. So to test this, we'll grab the examples-functions.[[PHP]] file from the documentation website over at [github.com/CMB2/CMB2/wiki](https://github.com/CMB2/CMB2/wiki). We'll click on examplefunctions.php then we'll click Raw and we'll copy all of this code. Then, and this is only recommended in a test environment understanding that we're going to delete these changes. We're going to copy that code into the current themes functions.php file through the WordPress admin. Again, this is never recommended in a production or even a real staging environment. This is simply to test in our local development environment that the plugin is working.
>
> **[1:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=92)** We'll go to Appearance and then Theme Editor. We'll get a warning from the WordPress editor telling us that we shouldn't do this. So we'll click I Understand and then we'll click on the Themes Functions. Now, depending on the theme you're using, you might may see a different list of files or the code in the editor might look different. I'm using 2019 because I think that's a really nice looking default theme. We'll scroll to the very bottom of the functions.php file and then we will paste in the code. Now, one thing we'll need to do is go back up and delete the opening PHP tag because that will throw an error. So we'll find that for me, it's going to be on a line 365, we'll delete that then we'll click Update File. If there are no errors, you'll see file edited successfully. Once we do that, we'll go to pages add new and if it worked, we'll see a whole bunch of new fields added by the examplefunctions.php. So that worked so let's go back to Appearance, Theme Editor, click functions.php and then delete all of the example fields that we just added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[WordPress]] (3), [[GitHub]] (1)
> **CLI Commands:** php (7), find (1)
> **Env Vars:** cmb2 (6), php (1)
> **File Paths:** functions.php (3), examplefunctions.php (2), examples-functions.php (1)
> **UI Navigation:** go to (3), click on (2)
> **Best Practices:** recommended (2)
> **URLs:** [github.com](https://github.com) (1)
> **Cross-References:** go back to (1)

#### [Setting up our project plugin](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=0)** - [Instructor] When it comes to adding CMB2 as a library, you need a place to add it. And in [[WordPress]], that's either a theme or a plugin. Now we could do either, but I'd strongly recommend against putting CMB2 in your theme in most cases. While theme option pages were a main driver of this at first, the recommendation is to put most of the theme options in the customizer, and soon, it will be the full-site editor. So we'll create a plugin, specifically a podcasting plugin that adds fields to posts for episode and sponsor information. I'm using the VS Code editor. You can use whatever you'd like. In the explorer here, I have the plugins folder for my local [[Wordpress Development]] environment. And for that, I'm using Local, the application. Again, you can use whatever you'd like here. So the first thing I'll do is right click and add a new folder. I'll call that folder lil-cmb2. You'll be able to find all of the code in the exercise files for this course. Inside that folder, I will create another file called lil-cmb2.[[PHP]]. This will be the driver or loader function. The first thing we'll do is define the function, and I've copied the definition from the sample code, so I'll just paste that right in here. And we'll call this [[LinkedIn]] Learning Podcast. This is the standard WordPress plugin definition
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=94)** that includes the name, the description, and then the author information and the license information. Next, we'll add some important setup variables. First, we want to make sure that this file is not called directly, so we'll write if not defined 'WPINC', and then we will just kill the file, so we'll say die. Then we'll add a constant for the plugin version. Now we may not use this in our plugin, but it's always something I add to my plugins, 'LIL_CMB2_VERSION'. Since it's a constant, we'll put it in all caps, and then the version will be '1.0.0'. The version number will help if we make updates or upgrades to it to let WordPress know. And then the last thing we'll add is the plugin URL just in case we need to reference that. So we'll call this 'LIL-CMB2_URL'. We'll use the function, plugin_dir_url, and then it'll be for the current file which is underscore, underscore, the [[Microsoft Word|word]] FILE, underscore, underscore. This is a builtin global variable and then the semicolon. Now this includes the trailing slash, so that's important to note. This includes the trailing slash. And that's it, we'll save this
>
> **[3:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=190)** and we'll add the [[Representational State Transfer (REST)|rest]] of the code as needed, starting with loading CMB2 as a library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Wordpress Development]] (1), [[PHP]] (1), [[LinkedIn]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** cmb2 (3), wpinc (1), lil_cmb2_version (1), url (1), lil (1)
> **CLI Commands:** make (2), find (1), php (1)
> **Exercise Files:** exercise files (1), sample code (1)
> **File Paths:** lil-cmb2.php (1)
> **Code Identifiers:** plugin_dir_url (1)
> **Versions:** 1.0.0 (1)
> **Tools:** vs code (1)

#### [CMB2 as a library for your plugin](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=0)** - [Instructor] The second way to use CMB2 is the more preferable way as a library in your own plugin. On the screen here, you see CMB2 from the [[WordPress]] Plugin Repository. This is where we will download the CMB2 library to then add to our plugin. So, the first thing we'll do is you can go to [wordpress.org/plugins/cnb2](https://wordpress.org/plugins/cnb2) and click the Download button. This will download a zip file that we can then unzip, and we can move it right into our plugin directory code. So, I'll bring up the code editor and then we will take CMB2 and drag it directly into our LIL CMB2 directory in the WordPress plugins directory. From here, we need to include, what's called, the bootstrap. The thing that's going to load CMB2. And to do that, we can go back to the CMB2 [[GitHub]] repository to the example-functions.[[PHP]] file. So the first thing I'll do here is just copy the bootstrap, which is lines 18 to 22 in this file. And I'll paste it into our plugin. I'll save the file and now CMB2 is getting loaded. Now, if you want to test this, we can do the same thing where we copy the example-functions.php file [[Microsoft Word|word]] for word, and paste it into our plugin, and then load the plugin. But we don't have to do that this time around.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=96)** Instead, we will just open up our dashboard. We'll go to Plugins and we'll click Activate to make sure there are no errors. And now our plugin is ready to add fields to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[PHP]] (2), [[Microsoft Word|Word]] (2), [[GitHub]] (1)
> **Env Vars:** cmb2 (8), lil (1)
> **CLI Commands:** php (2), unzip (1), make (1)
> **File Paths:** example-functions.php (2)
> **Exercise Files:** download the (1), zip file (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)

#### [The CMB2 documentation](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=0)** - [Instructor] The CMB2 documentation and sample files will be instrumental to us, so here we'll get a tour of the documentation and how to access sample snippets. The documentation actually exists in two places. At cmb2, the number two, .io and in the [[GitHub]] wiki. We will be referencing the GitHub wiki because it's generally kept more up to date. While we'll be covering the basics and then some in this course, the wiki is the best place for you to find well-documented functions, sample code, issues and updates. And aside from documenting the plug-in, there are a couple of other resources to point out. The first is the advanced tutorials, which is a great way to find real-world examples of how to extend CMB2. The other is the CMB2 Snippet Library. Here you can find well-commented examples to copy, paste and modify. We will likely be coming back to this library later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **CLI Commands:** find (3)
> **Env Vars:** cmb2 (3)
> **Documentation:** the documentation (2)
> **Tools:** github (2)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Field types in CMB2](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=0)** - [Instructor] The power behind CMB2, is that it takes a simple implementation. The [[WordPress]] custom field being two text boxes and convert that into an area of endless possibilities for [[Application Development]]. Over on CMB2, [[GitHub]] page, you could see a full list of the field types. These are the fields that we can define by default using CMB2. Clicking on one of the fields will bring us to the usage area, with screenshot and sample code for how it's used. The big benefit here is that CMB2 has implemented validation and browser fallbacks. Now this was a lot more important when CMB2 first came out, but it's still important today. For example, with text date, jQuery UI is implemented since at the time of this recording, safari doesn't support all date selection fields. If we go to the field parameters, you'll also notice that some fields are marked as non repeatable. For fields that can be repeatable, you can allow users to add multiple rows that will be assigned to an array related to that field. Finally, we can create our own fields. This is great, if you have specific custom data that you want to validate like an internal ID, or if you want to associate posts, we'll take a closer look at both of these later. Using the vast array of features
>
> **[1:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=93)** we can extend posts, pages, and custom post types. To create our own option pages and even add user profile information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[Application Development]] (1), [[GitHub]] (1)
> **Env Vars:** cmb2 (5)
> **Tools:** github (1), safari (1)
> **Code Identifiers:** jquery (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [CMB2 and the block editor](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980&t=0)** - [Instructor] CMB2 predates the Block Editor by several years so how does it work and what can we expect from the behavior? Well, currently there is no explicit support for the Block Editor in CMB2, and the meta boxes are added the way any others are, as an extra section at the bottom of the Block Editor. There's no easy way to add custom fields to blocks without coding your own block, which you can learn how to do in the "Developing Blocks with Gutenberg" course from the [[LinkedIn]] Learning Library. In short, while CMB2 allows us to easily add flexible advanced meta boxes to our posts and post types support for modern features like the Block Editor and full site editing simply isn't there yet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Env Vars:** cmb2 (3)
> **Speakers:** - [instructor] (1)


### 2. Building Our Custom Fields

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining our custom fields](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=0)** - [Instructor] The first task in front of us is to determine what information we want to include, and how we want to structure that data. So let's go ahead, and plan our plugin by giving us a mapping for the type of data we want to store, and then the actual field types that we'll store it. The goal of our plugin is to perform three tasks, add episode and sponsor fields to the post type. Allow users to relate episodes to each other, with a related posts field or a related episodes field. And then add the fields info to the front-end via the content hook so that our plugin works with any theme, and we're not relying on specific theme templates. We'll also add a Twitter link, and podcast role to the user profiles to demonstrate how that works in the advanced topics section. So first let's talk about mapping our episode fields. We want to have a few like episode numbers, season number, audio file, and then information for the transcripts, the actual transcript, and a downloadable transcript file. Episode number and season number, it will be the text number field. Now, if you look at the documentation, you'll notice that there is no text number field. So we're going to have to create that as a custom field first. The audio file, as well as the transcript file, we'll use the file upload fields, and the file upload field allows us to limit the type of files uploaded. So with audio file,
>
> **[1:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=91)** it will be an MP3 or an M4A only, those are the podcast app supported audio files. And for the transcript file, it will be a PDF only. The transcript itself we'll use the WYSIWYG Editor, which is the classic editor if you're using [[WordPress]] 5.0 or newer. Then we'll map our sponsor fields. So for our sponsor, we want to have the sponsor name, which will be the standard text field. The sponsor link, which will be a text URL field. And the sponsor logo, which will be a file upload field, and that will only accept WordPress supported image uploads. So JPEG, PNG, GIF and WebP. WebP is supported as of WordPress 5.8. There can also be any number of sponsors. So this will go into a repeatable group field so that we can add two, three, four sponsors. Finally, there's the related episodes. We'll only need the post ID for this. So here's how it will work. Now, this will need to be a custom field that will return a comma separated list of post IDs. And the way this will work is it will be a custom checkbox field that's populated based on the posts. It will grab the post titles, and the post IDs show them, and then a user can select the related episodes. And with that, all of our fields are mapped out. So let's get to coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3)
> **Env Vars:** mp3 (1), m4a (1), pdf (1), wysiwyg (1), url (1)
> **Versions:** 5.0 (1), 5.8 (1)
> **UI Navigation:** checkbox (1), select the (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Creating our meta boxes](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=0)** - [Instructor] Before we add the fields, we need a place to put them. So we're going to create two custom metaboxes. In our plugin, which you can find in the exercise files, we're going to create a new folder called metaboxes. And then in that folder, we'll create two new files. One will be called episodes-metabox or episodes-meta. and the other will be called sponsors-meta. Note with our naming convention, we're going to be sticking with plural when we're referring to the metaboxes. So this is the metaboxes for all sponsors or for all episodes. Then in our driver file, the lil-cmb2.[[PHP]] file will make two require calls. So we'll say require once and then metaboxes/episodes-meta.php,
>
> **[1:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=65)** and then we'll do the same thing for sponsors-meta. So we'll just replace episodes or sponsors after copying and pasting. Okay, so we'll save this file and now we'll add the metaboxes. So in episodes-meta, we'll open our PHP code here and then the first thing we'll do is add an action. So we'll say add action, and then the action we want to add is cmb2_admin_init. This is a custom hook that's been added by cmb2, and then we'll use our callback function, which will be lil_episodes_meta. Then we'll write the function. Function lil_episodes_meta and the parentheses. And then in between the curly braces, we will initiate the metabox. So I'm going to create a new variable here called episodes gets or equals. I usually say gets when referring to an assignment, and then we'll use the function new_cmb2_box. This is a function added by cmb2 that accepts an array of arguments. So we'll say array, and then we'll add the argument. So the first one is going to be ID. This is an associative array. So the first key is ID, and then this could be whatever we want to call it. So episodes_metabox,
>
> **[2:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=161)** and then the title, which is what's displayed to the user. That will be episode information. And we're going to put this in the translation function. So episode information, and then we also need a namespace. So the namespace will just lil_cmb2, We don't want to have a semi-colon there. We want a comma and then the object types, and this is going to be any of the post types that we want the metaboxes to show on there. So this is going to be an array of post types, and this is just going to go under the posts, custom post type or the post post type. Next is going to be the context. The context is basically where we want the box to show up and there's normal, which will show up in the normal area. There's also side, which will show up in the sidebar. So we'll set our context to normal here. For a full list of all of the arguments for this function. You can check the documentation at [github.com/cmb2/cmb2/wiki](https://github.com/cmb2/cmb2/wiki). Next is priority, and this will determine where on the admin screen our box will show up. So if we set it to high, it will show up above everything else, or it'll show up with everything else that gives a priority of high. And then we have a argument called show_names,
>
> **[4:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=257)** which we'll fix that show_names, which tells cmb2 if we want to show the field names to the left. So we'll set this to true as well. And then that is all of the arguments that will pass to it. So we'll make sure everything lines up, and now we have our episodes box defined. So what I'm going to do now is I'm going to copy all of this code, move it over to sponsors-meta, and then just make some key changes here. So I'm going to highlight the [[Microsoft Word|word]] episodes with VS code. I can press Command+D, and delete all instances of the same word and then replace it. So I will change instances of episodes to sponsors, this smartly doesn't change variable names. So I'll have to change this one myself. And then the same thing here, this is a string. So we can just call this sponsor information, but everything else will be the same. So we'll make sure we get all of the IDs right as well sponsors. So lil_sponsors_meta, lil_sponsors_meta. Sponsors, the ID is sponsors_meta. Sponsor information, and then show names. So now we'll save all of this. And if we go to our [[WordPress]] dashboard and refresh, and go to a new post, we'll see two new metaboxes here. One is episode information, and one is sponsor information. What I'm going to do is go to the three dots icon here,
>
> **[5:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=354)** the options, icon and click Preferences. And I am going to hide the custom fields panel so that it doesn't clutter up our dashboard. We want to focus only on the cmb2 boxes that we're adding, and now we have those. So now it's time to add some fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Microsoft Word|Word]] (2), [[GitHub]] (1), [[WordPress]] (1)
> **CLI Commands:** make (4), php (3), find (1)
> **Code Identifiers:** lil_episodes_meta (2), show_names (2), lil_sponsors_meta (2), episodes_metabox (1), sponsors_meta (1)
> **UI Navigation:** go to (3), in the sidebar (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** lil-cmb2.php (1), metaboxes/episodes-meta.php (1)
> **Tools:** github (1), vs code (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Adding a the custom field type](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=0)** - Since we have to number specific fields, it would be great to have custom fields that checked and validated input to ensure that only numbers are submitted. And while cmb2 doesn't support this natively, it does allow us to define our own fields. So let's start by creating a new file in the root of our plugin. And we will call this custom-field-types. So custom-field-types.[[PHP]]. And then in that file, we'll add some code. So we'll open up our php tags, and then we will add an action. Now, this is a bit of clever code from cmb2. I'm going to name the action, cmb2 underscore render underscore text underscore number. Now this is not an actual action defined by cmb2, cmb2 dynamically renders new actions or new hooks for cmb2 underscore render underscore, and then whatever your field type is. This is important because later on, we're going to validate on that same hook. So with this dynamically generated hook, we'll also create a function called lil_text_number. So now we'll add the two optional arguments to add action. The first is priority, which will make 10.
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=97)** And the second is the accepted arguments, which is five, and then we'll create the function. So function, lil_text_number. Now this does accept a few arguments. It accepts field, then escaped value, then object ID, object type,
>
> **[2:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=126)** and field type object. These are all things that cmb2 will use to process and create our custom field. Inside the function it's a little bit easier than using all of these arguments. We can simply type echo field type object arrow. So this field type object is an actual object input, and then it will accept an array of arguments. These are going to more or less map to the input attributes in [[HTML]]. So the first one we can add is class, and we'll call this cmb2 dash text dash small so that we know that the styling that cmb2 should add to it. And then the type which is going to be a field type and number is a recognized field type in HTML. So that's the type that will make it. And that is it for this function. Now we'll write the code to sanitize the input. And while number is an accepted field in modern browsers, it's always good to have a server side callback. So we'll add a filter here. The filter will be cmb2 sanitize text number. And again, this is going to have the same naming convention cmb2 sanitize, and then the fields type, the custom field type here.
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=220)** So sanitize text number, and then our callback function, which we'll name similarly, lil_sanitize_text_number, and then we'll add the priority and accepted arguments. So now we'll name the function, lil_sanitize_text_number, and this is going to accept two arguments. The first is no, and the second is new and new is really the value that we're going to focus in on here. So we'll say new gets, and this is our own sanitizing function now. So preg_replace. What we want to do is replace any non numbers with a blank space. So we'll say preg_replace, and then we'll pass a regular expression slash and then the caret zero dash nine bracket, and then the slash again, to end the regular expression. So any character you find, that's not zero through nine, replace it with nothing and do that within the variable new that's what we're searching here. And then we will return new. So if we save this, now we have a new field called text number that can be used when we define our custom fields. The last thing we need to do now is actually include
>
> **[5:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=314)** this page in our driver file. So we'll go to lil-cmb2.php and we will add the require once call above episodes, meta and sponsors matter because we actually want to use this field in those meta boxes. So we'll add require once, and this is in the root folder. So we will add custom-field-types.php, and now our custom field type is actually ready to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[HTML]] (2)
> **CLI Commands:** php (4), make (2), find (1)
> **Code Identifiers:** lil_text_number (2), lil_sanitize_text_number (2), preg_replace (2)
> **Definitions:** is a  (2), is an  (2)
> **File Paths:** custom-field-types.php (2), lil-cmb2.php (1)
> **Env Vars:** html (2)
> **UI Navigation:** go to (1)
> **Speakers:** - since (1)

#### [Adding fields to our meta boxes](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=0)** - Now it's time to add our fields to the meta boxes. Let's start with how to add them, then add the episode fields. Under the hood our meta box is an object. So, to add fields, we're going to use that classes add field function, passing it an array of arguments. Inside of our LIL episodes meta function, we'll create a new line and then we will call the episodes object, and then the add field function, then we'll pass it an array of arguments. The first will be the name, and the name is what the user will see in the meta box. So, we'll add our translation function, call this episode number, and then lil_cmb2 for our namespace. Then the ID, which is how we will reference this when we are ready to display it on the front end, so we'll call this lil_episode_number, and then the type, the type corresponds with the list of fields types on the cmb2 documentation, as well as the custom field types that we've created, which at this point we've created a text number field so that's what we'll use here. And that's how you add a field. This is the minimum number of arguments we need to add a field to a custom meta box.
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=94)** So, with that field added, let's just go to our dashboard and see how it looks. You can see there's now a new field here and it's saying number fields, so everything appears to be working properly. With that let's go ahead and add the [[Representational State Transfer (REST)|rest]] of our basic fields here. Now, there are also a number of optional argument based on the type. And we'll cover those as we come across them but for the most part name, ID and type are the ones that will be what we call the most. So, now let's add a season number. I'm just going to copy this add field call and paste it and then I will replace the [[Microsoft Word|word]] episode here with season number, and similarly in the ID, I will replace episode with season, but this is also going to be a text number. And then finally, I'll paste that block one more time and we want to add a transcript field, but we want this field to be the wysiwyg editor. So, let's name this transcript, and then lil_transcript for the ID and the type will be wysiwyg so, what you see is what you get. So, we'll save this and we'll go back to our dashboard, we'll refresh the new post page and now we have a couple of new fields. Now, one thing to note is it appears
>
> **[3:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=189)** for me the wysiwyg field is working, if it's not for you, you may need to use the JQuery Migrate Helper plugin. So, if we go to plugins, add new you can search for JQuery Migrate, and then Enable JQuery Migrate Helper. Install and activate that to get the wysiwyg field, which relies on TinyMCE to work properly. And these are the most common ways to add fields, cmb2 is mature and well supported, so there's not a whole lot else we need to do. However, there are a couple of fields that need some more finesse. One is the file uploader.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** lil_episode_number (1), lil_transcript (1)
> **UI Navigation:** go to (2)
> **Env Vars:** lil (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - now (1)

#### [Adding a file uploader](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=0)** - [Lecturer] This wouldn't be much of a podcast site without audio. Luckily CMB2 has a file upload a field that we can include that's pretty flexible and we'll be adding two, one for the audio and one for the transcript PDF. Let's start with the audio file. In the episodes meta.[[PHP]] file right underneath the CMB2 box definition, I'm going to add a new field. So we'll write episodes, arrow, add field, and then our array of arguments. The name of this field will be audio file. We'll make sure to translate that. And then the namespace, L-I-L-C-M-B2, the ID, which will be L-I-L audio file.
>
> **[1:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=64)** And then we're going to add a optional field called the description. So upload your audio or enter a URL more on that in a minute. And then the type will be a file. Now those are the basics, and we need to add a couple of more options for the audio file uploader. So there's actually an argument called options, which is also an array. And in it one of the arguments is URL. We're going to set this to true, which will then show the text input for the URL as well. So our users will be able to upload an audio file or paste a URL from their audio host. We can also customize the upload button text with the option add, upload file. Text, and we can write add audio. Now outside the options URL, we're also going to limit the type of files a user can upload to be only a podcast supported formats. So this is going to use the query args, argument.
>
> **[2:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=152)** This is going to be in array and inside the array we're going to have another array called type. So you could see how this gets pretty complicated pretty quickly. And then we're going to pass an array of types. So the first one will be audio/MP3, which is the MP3 file type, audio/M4A, which is the M4A audio type or file type. And then audio/W-A-V for wave, which is also supported. So now we have the array. We have the query args here and then you need to add a comma there, and then we have the file array completed. So let's save this and make sure everything works properly. We'll go to our [[WordPress]] dashboard to add new, and we do have an audio file so we can upload a file or we can paste a URL in here. So now let's do the same thing for the transcript file. So we'll copy this whole call. And then under the WYSIWYG editor, we'll paste this, we'll change the name to transcript file. We'll change the ID to L-I-L transcript file. We can change the description to upload your transcript PDF,
>
> **[4:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=249)** type is going to be file for URL. We're going to set that to false. We want people to just upload the PDF here, and then for the add upload file text, we'll write add PDF. And then for the file types here, we're only going to have one. And since PDF is a specific application file type, this will be type application/PDF. So we'll save that. We'll go back to our dashboard and refresh, and we also have the add PDF button and you can see there's no URL here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[WordPress]] (1)
> **Env Vars:** url (8), pdf (7), cmb2 (2), mp3 (2), m4a (2)
> **CLI Commands:** make (2), php (1)
> **File Paths:** meta.php (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)

#### [Creating a repeatable field](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=0)** - [Instructor] Sometimes we need to capture multiple instances of the same field. For example, a single episode may have several sponsors and that's where our repeatable fields come in. A repeatable field is one that you can create multiple instances of. And it's actually not a field type, it an attribute that can be applied to most fields. You can see which ones are supported and which ones are not at the [[GitHub]] wiki for CMB2. For example, if we wanted to have a custom field for the episodes top takeaways, we can make a repeatable field. So right under the audio file, I will add a new field. I will just copy the episode number field. So we have a good starting point. We'll call this top takeaways. We'll give this an ID of L I L takeaways. The type will be text area. So we have the ability to add a bunch of texts and we're not limited to smaller fields. And then we would pass the argument repeatable, and we'll set that to true. Now, if we save this and go to our dashboard and refresh, you can see we have a section for top takeaways and we can click add row to add more. When it comes to repeating multiple fields that we'd like groups together,
>
> **[1:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=92)** there's an even better implementation. And that's the field group. This group is a set of fields together and makes them automatically repeatable. And this field is perfect for our sponsors. So let's open the sponsors meta file. And in our L I L sponsors meta, we'll create a group. Now, remember for this one, we will need to add a field to the sponsors box. And this repeatable group, will actually become its own object as well. So what we're going to do here is rename the sponsors box to sponsors info, and then we'll create the repeatable group called sponsors. That'll be a little bit clearer to reference later on. So we'll say sponsors gets sponsors info, arrow add field, and then we will create the array. So first we'll send it an ID there's no name for the group because we'll name each individual field and we'll call this sponsor group. The type will be group. So this is all we need to do to set up the field, but then we can pass some options to it. So we'll create the options key or the options argument. This is going to be an array of arguments.
>
> **[3:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=185)** And first here is going to be group title. So this is part of the options for the group field. And that's because it will dynamically generate the title so we'll create the translation and then we'll call this sponsor and then curly brace and then the pound sign and curly brace. So each sponsor will get its own number this way, and then we'll add our namespace so L I L CMB2,
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=220)** then we can customize the add button and we'll copy this just to save some time and we can name this add another sponsor. And then we can also create a remove button.
>
> **[4:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=251)** And we'll say, this is remove sponsor. The last option we'll pass here is the sortable option or sortable flag, which will set to true, which means we can reorder the group. So now we have our options in place and our group set up. In order to add a group field, we are going to use the sponsors info field so our meta box field, and we're going to add the function add group field in this we pass the group that we want to add the fields to. So in this case, we're going to add sponsors and then an array of arguments. The first is going to be name, and this is going to work just like adding a normal field. So again, I'll copy the translation function field here. So this will be sponsor name. The ID will be name, notice that we're not prefixing it cause it's already part of a group. So it doesn't really need to be prefixed and the type will be text in quotes. So that's how we add one field let's go ahead and add the next field, which will be the sponsor URL. So we'll just copy our first group field call and make some changes sponsor URL, and then the type will be text URL.
>
> **[5:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=347)** The last group field we want to add is the sponsor logo. And this is going to be just like adding another file. So what we'll do is paste the group call. And so the name will be sponsor logo. The ID will be logo. The type will be file. And then we'll add our file options so in quotes, this is going to be in array, URL we'll set to false, we want people to actually upload the logo so they can't hotlink it from anywhere. And then the query args, again they should be in quotes.
>
> **[6:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=399)** This is going to be in array and then type array. And then this is going to be four types, all images. So image GIF, and then we'll copy this paste it four times, cause they're all going to be images. So it'll be image GIF, image JPEG, image PNG and image WebP. And again WebP is supported as of [[WordPress]] 5.8 All right and that's our sponsor information with the logo included so we'll save this. We'll go back out to our admin and refresh this page looks like we have a parse error unexpected on line 16. So let's troubleshoot that really quick. It looks like we forgot the [[Microsoft Word|word]] array here. So add the array, and then there's the options add this here and now we'll refresh. Everything looks good and if we go under sponsors, we'll see sponsor one. We have our fields add or upload file for our logo. And then we can remove this sponsor or add another sponsor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[WordPress]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** url (4), cmb2 (2), gif (2), jpeg (1), png (1)
> **Analogies:** for example (2), just like (2)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** set up (2)
> **Versions:** 5.8 (1)
> **Tools:** github (1)

#### [How to get data from CMB2](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=0)** - One of the things that makes CMB2 so great, is that to get data to display, you can use the built-in [[WordPress]] function, get_post_meta. You can find more information about that, on the WordPress Developer doc, which you see on the screen. As a refresher, get_post_meta accepts up to three arguments. A post ID, which you need to pass. The ID of the field, which we defined when creating our fields. And a Boolean, to state if the result is a single value or not. Now, the single argument can get a little bit ambiguous depending on what you're working with. But in the context of CMB2, we will always pass true. So let's look at a few examples of how we would get data out of our podcast plugin. We would use the function, get_post_meta and then the first argument for the ID would be the cached function, get_the_ID(), which will always return the ID of the current post. Then we would pass our ID as defined when we created the meta boxes. So for example, 'lil_episode_number', and then we would pass, true. So in the first two examples, with 'lil_episode_number', we would get a string back, that would be the number, for example, one. In 'lil_audio_file', We will get a URL, whether or not the user pasted an actual URL or uploaded a file. When it comes to groups or repeatable fields, we need to keep in mind, that this will be an array. So let's look at the results for
>
> **[1:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=92)** getting the post meta from sponsor group. You can see here that this is a multi-dimensional array. And each sponsor entry is a numeric key, and then in associative array for the value. So in our first array, we have the IDs as defined in our group, fields, functions. So name, which can be 'Podcast Liftoff' URL, which would be the URL to the website. And then the logo, which would be a URL to the image we uploaded. We also have access to the logo_ID, which is the post ID inside of WordPress, but we won't be using that. So in order to print this information, we will then loop through this array to display it. With that primer, we're ready to add our custom field to the website. But first let's answer an important question. Where do we add it? If you're creating a custom theme, you can add the fields to one of your templates or create a custom template. However, if we are creating a standalone plugin, like we are in this course, we should be using the content hook, to add that information via a filter before and after the post content. Now, if you want to go the extra mile, while it's outside the scope of this course, you could also create short codes, to embed in the WordPress editor, or a block. Using what you could learn in the Developing Blocks for Gutenberg course, here in the [[LinkedIn]] library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[LinkedIn]] (1)
> **Env Vars:** url (5), cmb2 (2)
> **Code Identifiers:** get_post_meta (3), lil_episode_number (2), lil_audio_file (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)

#### [Adding our custom fields to the frontend](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=0)** - [Instructor] In order to add our fields to the content, we'll first create a new file called display.[[PHP]] in the root of our plug-in folder. So we'll add display.php. We'll add the opening PHP tag here, and save it. And then we'll go back to lil-cmb2. And at the bottom of this file, we'll add require_once( 'display.php' ). We want to add this after everything else, 'cause we'll need the defined meta boxes. Back in the display file, we want to break our functions into two parts: a before-the-content function and an after-the-content function. Let's start with before. We'll write add_filter, and then we'll call the_content for the hook. This will filter the content based on what we do in our function. And then we'll call our callback function, lil_pod_info_before. Our function is going to do three things: retrieve the data, validate and sanitize the data, and then pre-pend the data to our content. So first let's define the function, which accepts one argument, which is the content. We'll write function lil_pod_info_before. It accepts the argument of the content or $content. And then the first thing that we'll do is check to make sure that this function is being used on a singular post. If we don't, then we could run into errors
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=94)** because it might be run in the admin. So we'll say, if ( ! is_singular ), just return the content. And that's another thing to keep in mind. We will always need to return at least the content variable, otherwise nothing will show up on the page. So now, let's get the season, episode and audio file using get_post_meta. So we'll say $season = get_post_meta(). And then we'll use the get_the_ID function. We'll use the key, which is lil_season_number. And the third argument will always be true. We'll do the same thing for episode number. So we'll just change $season to $episode_number,
>
> **[2:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=148)** and then we'll update the key to be lil_episode_number. And finally, the audio file. So we'll call this $audio_file. And then get_post_meta( get_the_ID(), 'lil_audio_file'). Now, we want to do a check. We want to validate and sanitize our data. So validating our data, we'll be making sure we actually got stuff. And then sanitizing, we'll be using the [[WordPress]] escape functions. So first let's up our output. We'll call this $episode_info, and we'll set this as an empty string for now. And then we'll check to make sure we actually have season and episode numbers. So we'll say, if ( ! is_null( $season ) && ! is_null( $episode_number ) ).
>
> **[3:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=208)** Only if both of these have values do we want to proceed. And then we'll proceed by defining our $episode_info. So we'll say $episode_info gets, we'll put this in a header with the class episode-info, and then we'll output our custom field data. And we'll use the function sprintf for this, which allows us to store a string that we want to format. So the first argument here will be the [[HTML]] you want to output with placeholders. So Season, and then we could say %s, which is a string placeholder. This will grab the first string that we pass to the function after our format string. And then Episode %s which will do the same thing for the second string that we pass. So here is our format. And then the first string that we want to pass is the season number. So we'll say esc_html(), and then $season. And the second string that we want to pass is esc_html( $episode_number ). And let's go ahead and wrap this just to make it a little bit easier to read. So sprintf, our string, and then our $season and our $episode_number. With that, let's close out the $episode_info header with our close-header tag. Now, let's do the same thing for the audio embed,
>
> **[5:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=309)** but we're actually going to use a conditional assignment or tertiary operator here. So we'll say $audio_embed gets, and then we'll check the condition. If, ( ! is_null( $audio_file ) ). And if that's the case, then we want to print out a <div class="audio_file">
>
> **[5:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=338)** Then we want to execute a built-in WordPress shortcode to do an audio embed. So we'll call the function do_shortcode. The shortcode is square bracket, audio src for source, equals, double quote. And then our URL, which we will escape. So we'll say esc_url( $audio_file ). And then we will close the shortcode. So close quote, close square bracket, and then we'll come outside of the do_shortcode function and we will close the div.
>
> **[6:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=385)** And then we need the condition for if it is null. So we'll write colon, empty string and then the semi-colon. Finally, we need to return everything. And again, we want to pre-pend and all of this starting with the $episode_info. So we'll say return $episode_info . $audio_embed . $content.
>
> **[6:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=410)** Let's go ahead and save this, and let's see how it looks on our frontend. So I have a post here in the admin that I've added information to, let's click update. It looks like we have an error here. I typoed singular. I wrote is_sigular, so let's fix that. Then go back and refresh. And now we'll actually view this post. And we have season one, episode one, and we have the audio file here. Now, let's do the same thing for after-our-content function. Adding custom fields after our content is going to start the same way as before. So I will copy lines three through six here and paste them on line 24. I will rename the callback function in the filter to after. I'll rename our callback function after. And we still want to check to see if this is being run on a singular page. But now we want to grab the transcript and the transcript file. So I'm just going to go up here and grab one of our get_post_meta calls from earlier and paste that in our function. So we'll call this $transcript. And this will be lil_transcript. And then I'll copy this and paste it 'cause it's virtually the same. We'll call this $transcript_file, and lil_transcript_file.
>
> **[8:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=505)** So for our validation check here, if transcript is not filled out, then we just won't print this section at all. So we'll say, if ( is_null( $transcript ) ) return $content.
>
> **[8:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=523)** Otherwise, let's set up our $transcript_info. So this will be a section that we'll call transcript. And then the heading, Transcript. Next up, we want to print the transcript button. So we'll say, if ( ! is_null( $transcript_file ) ).
>
> **[9:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=553)** This could also be a tertiary assignment but we'll write it out this time around. $transcript_info dot gets sprintf, we're running sprintf again. And we're going to put this in a paragraph and then anchor tag gets %s, that's our placeholder. Download PDF, and anchor tag and paragraph. And then the string that we pass will be esc_url( $transcript file ). And then we'll add the actual transcript. So we'll say $transcript_info dot gets, and since this is a WYSIWYG editor, we want to add paragraphs. So we will use the wpautop, or some pronounce it WP-autop, to our WYSIWYG editor. So to $transcript. And then we will close out our section. So $transcript_info dot gets, end section. And then we will return, and we want this to be after the content. So return $content first, then $transcript_info. We'll save this. We'll go back to our browser and refresh. And we have the download PDF link, and then our transcripts now. Most themes come with a button class, so we'll just add that here, just in case, no harm, no foul.
>
> **[10:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=651)** Save that, refresh one more time, and now this is a nicer looking button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[WordPress]] (2), [[HTML]] (1)
> **Code Identifiers:** episode_info (6), is_null (5), transcript_info (5), get_post_meta (4), episode_number (4)
> **CLI Commands:** php (4), make (3)
> **Env Vars:** pdf (2), wysiwyg (2), php (1), html (1), url (1)
> **File Paths:** display.php (3)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **Warnings:** keep in mind (1)

#### [Displaying from a repeatable field](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=0)** - [Instructor] Since repeatable fields by nature hold more data. There's a different way that we can process them. We're also going to add some CSS to get the sponsors to look nice on the front end, but first to keep our filter functions clean, we'll create a separate function that sends the market back. So in the bottom of our display.[[PHP]] file, we'll add a new function called lil_sponsor info. Since this is a standalone function, it's not going to accept any arguments and we don't need to do a check on template either. We'll create a variable called sponsors and that will get post meta, we'll pass get the ID, and then we'll send the group ID which is sponsor group. And we'll send true. Note that even though we're getting an array back here, we're still sending true for single value. Now let's validate so we'll say if is null sponsors return a blank string. We can also say return false here If we'd like assuming we do have sponsor info, we will set up the format. And again, we'll be using sprint F here by instead of embedding the format string in sprint F, we'll set it as a variable just to make our code look a little bit cleaner. And we want this to be an unordered list. So we'll say li and then a href and here we're going to use a slightly different notation,
>
> **[1:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=95)** we're going to say percent, $1 sign S what this says is always use the first string past two sprint F. So we can use this in multiple places if we want because we're specifically referencing the first string and you'll see why that's important in a minute. So we'll say a ref percent $1 sign S then we'll say image source gets percent $2 sign S and then alt percent $3 sign S and title. Now, instead of passing the name of the sponsor twice, we can reference percent $3 sign S again, then we'll close our image, our anchor tag, and our list item. And then we'll set up our sponsor output. So sponsor output gets h3 sponsored by colon close h3
>
> **[2:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=167)** and then the UL class gets sponsors
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=177)** or US class UL class equals sponsors, I should say. Alright, so now with our output set up and it's worth noting here that we could probably change this to double quotes so that we can add a little bit better formatting here maybe we'll do like the carriage return and then tab so that our text shows up appropriately. And then we'll add escape characters for the double quote actually inside of the output. So now we'll say for each sponsors as sponsor, and then we'll say sponsor output plus gets sprint F format. And then the first string is the URL so escape URL,
>
> **[3:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=238)** and then this is going to be a key in the sponsor array so sponsor URL. And then we'll repeat that for the logo, which is also URL so we'll say escape, URL, sponsor logo, and let's put this on a different line just so it's a little bit easier for us to read and then escape [[HTML]] here because this is just plain text name, and then we'll close out our function and then our loop. So the last thing we need to do is close the unordered list and UL and then return sponsor output. And then we need to add this somewhere to one of our filter functions. We want this to be before. So we'll add the call to the function will say, sponsors gets lil sponsor info and we don't need to pass anything to it. And then for return, we want this to be after the episode info but before the audio embed, so we'll write sponsors and then dot. So now our line should read, return episode_info. sponsors. audio_embed. content Let's save this, go back to our front end and refresh.
>
> **[5:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=336)** Now it looks like nothing happened, wonder why that is. We forgot the o in sponsors. So we'll save this and we'll refresh. And now we have a list of logos, but let's add a little bit of CSS here. So we are going to add a function to the bottom of our display.php file. Honestly, the best way to do this is probably to enqueue a style but we haven't set this up. So we can just quickly do this by printing styles in the head. So we'll do this by saying, add action WP head, and then lil styles. And we'll give this a priority of 99, so it's one of the last things that are done. Then we'll say function lil styles, we'll close our PHP tag, and then we'll open it before the closing curly brace. And this gives us a little bit of freedom to write the CSS. So I won't walk through all of this, but I'll just say UL sponsors, display grid,
>
> **[6:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=414)** grid template columns, 1fr 1fr 1fr column gap, 25 pixels, list style type none. And then UL sponsors image max width 100%, height auto,
>
> **[7:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=450)** and then we will close our styles. And then if we go back out to the front page, our sponsors look a lot nicer now. Now as for our top takeaways, well, that's going to be virtually the same as our sponsor output with one small difference. So my challenge to you is to write a function to display the top takeaways after the content but before the transcript. You can find the solution in the exercise files for this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[HTML]] (1)
> **Env Vars:** url (5), css (3), html (1), php (1)
> **CLI Commands:** php (3), make (1), find (1)
> **Code Identifiers:** lil_sponsor (1), episode_info (1), audio_embed (1)
> **Exercise Files:** template (2), exercise files (1)
> **Prerequisites:** set up (3)
> **File Paths:** display.php (2)
> **Cross-References:** go back to (1)


### 3. Creating a Post Select Box

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a post select box](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=0)** - [Instructor] In order to get more people to listen to our podcast episodes, we want to build a way to suggest other episodes with a post select box. And the great thing about CMB2 is that it's been around for so long, that there are lots of extra plugins, libraries, and code snippets to help us out. In this case, we're going to use a CMB2 plugin or extension called Post Search Field. So, the first thing we'll do is download the zip from [[GitHub]], which you can find at [github.com/cmb2/cmb2-post-search-field](https://github.com/cmb2/cmb2-post-search-field). We will go to the code button and click download zip. Once the zip is downloaded, we'll unzip it. And we'll rename this to CMB2-post search. So here in LIL-CMB2, we'll drag this folder into the directory. Now, VS code will ask if we want to add the folder to the workspace or copy the folder. We want to copy. We want to make sure it is a directory inside our plugin directory. Once we do that, we want to add this to our plugin. So, in LIL-CMB2, right under the CMB2 bootstrap we'll require the driver file for that area, which if we look at this, will be CMB2-post-search-field.[[PHP]]. So, I'm just going to right click,
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=97)** and go to rename and then just copy this name here. All right. Now, we'll say require once. We can use the dirname function like the bootstrap does, just to keep everything consistent. So, we'll say dirname, file. Now, we technically could use the constant that we defined earlier, but again, for consistency sake with the bootstrap, we'll just use dirname. And then CMB2-post-search/
>
> **[2:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=143)** and then the file name that we just copied. So with that bootstrap created, now if we go to our metaboxes, to episodes meta, we can add a new metabox that has the related fields. So, let's add that in a different function. So, we'll go to the bottom of our file, clean this up a little bit, and we'll say, add action, CMB2, admin, init. LIL related episodes will be our callback function name. And then we'll say function, LIL related episodes.
>
> **[3:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=200)** And first we'll create a new metabox. Related, gets new CMB2 box, array, ID, in quotes. ID, gets LIL related episodes. And let's switch that to underscores just to be consistent. Title, and then our translation function. Related episodes, and then our namespace, which is LIL CMB2, and then objects types array, post. All right, so now our related custom metabox is created and here's where the magic happens. We'll say related, add field, array. The name will also be related episodes, so we'll just copy this. The ID will also match. They don't have to match, and we could change this back into dashes, 'cause this is just [[HTML]] reference, but we'll leave them the same.
>
> **[4:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=293)** Type. And we're going to use our new type here. So we'll write type, post, search, text. Post type, which is the type of post we want to include in the search. So this is going to be post. Select type will be checkbox. You can reference the documentation over on, get hub to see what other select types there are. And select behavior will be add. This could also be replaced if you only want one post to be selected, but we want multiple posts to be selected. So let's save this and then we'll go back to our posts. We'll refresh this page, and now there should be a new box under transcripts for related episodes. This is a box that we can type into, but if we click the search icon, we have a list of other posts, and then we can select the related ones. Then you could see their IDs show up here. We'll click update, and now we'll have to display them. I do want to mention one note though, that this isn't necessarily a two-way street. So if we go to one of the posts we selected, it's not going to show up here. We'd have to explicitly select the posts on each individual post.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[PHP]] (1), [[HTML]] (1)
> **Env Vars:** cmb2 (11), lil (6), html (1)
> **UI Navigation:** go to (5), select the (2), checkbox (1)
> **CLI Commands:** find (1), unzip (1), make (1), php (1)
> **Tools:** github (2), vs code (1)
> **Definitions:** is a  (2)
> **File Paths:** cmb2-post-search-field.php (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Updating the content output](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=0)** - [Instructor] Now it's time to display the related episodes, and we'd like to show them after the post content, but before the transcript. Instead of tacking this onto our current after function, we'll add a new filter with a higher priority. So let's go to our display file at the bottom. Well, before the CSS. We will add a new function. So this will be around line 78 in the exercise files. We'll add add_filter. It will be on the content. We'll call this lil_related_episodes_output, and we'll give it a priority of 5. So this will be added before our post_info_after function, even though it shows up in our code first, because we're giving this a higher priority. So then we'll say function lil_related_episodes_output.
>
> **[1:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=66)** This is going to accept the content as an argument. And we'll do the f not is_singular check. And if it's not singular, we will just return content. Now let's get our related episodes. So related gets get_post_meta, get_the_ID,
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=96)** lil_related_episodes for the key, and true for the single argument. Then we'll make sure that it's not empty, and we are using empty here instead of null, 'cause this is a comma separated string. Most will achieve a similar goal. So we're just using empty here. If empty related return content. If you are getting mixed results with is null for some reason, depending on your [[PHP]] version, you could always change this to empty, because that's a little more explicit. And then we'll prepare the output. So we'll say related output gets h3, Related Episodes,
>
> **[2:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=149)** end h3, and then ul class related-posts.
>
> **[2:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=157)** Again, if you'd like, you could also escape and add the escape characters here. We'll just keep this as simple as possible for now. For format, we'll say format gets li a href %1$s.
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=177)** This will be the permalink to the episode, and then %2$s will be the title of the episode. So that's our format. Now, crucially, our field saves the related posts as a comma separated list of IDs, and we want to convert that to an array, so we'll use explode. So we'll say related gets explode. If you're unfamiliar with explode, this will basically look at a string and look for specific characters and it'll separate the string on those characters and add each entry to an array. So we'll explode on comma for the string related, and then it'll pass an array back to related. So now we can say foreach related as id.
>
> **[3:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=234)** I'm purposely calling this ID, because sometimes if you name something post, it conflicts with something going on in [[WordPress]], there's usually a global post variable, and we want to avoid that. We'll say episode get_post id, and then related_output dot get sprintf format,
>
> **[4:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=263)** get_permalink id and then episode post_title.
>
> **[4:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=274)** We don't necessarily have to escape this, this is already being stored in WordPress and should have been escaped on the way to us. Finally, we will close the related output...
>
> **[4:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=289)** And then return that appended to the content. So now we'll save this. We'll go back to the frontend of our website... So we can see that there's a related episode section now. If we click on that, we'll see the two episodes we added to this one, and then if we go to a post without any related episodes, it won't show up at all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[PHP]] (1)
> **Code Identifiers:** lil_related_episodes_output (2), add_filter (1), post_info_after (1), is_singular (1), get_post_meta (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (1), php (1)
> **Env Vars:** css (1), php (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 4. Noteworthy Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Bringing in taxonomies](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=0)** - [Instructor] CMB2 offers a whole bevy of advanced features that are a little bit outside the scope of this introductory course, but the approach is very similar to adding fields to posts and they're worth surfacing in this section. So let's start with taxonomies. Now CMB2 has fields that allow you to essentially move taxonomies and change how they're selected like radio, checkbox, or dropdown buttons. And you can find them on the field types. For example, here's the taxonomy radio field type, which will move the taxonomies into a metabox and then change them to a radio button. Similarly, you can do radio inline, have hierarchical radio or change it to a select box again inside the metabox that you've defined. You can also create a multi check if you want. These will tap into built in taxonomies and taxonomies that you define separately through the taxonomy class in [[WordPress]], but CMB2 also allows you to add custom fields to taxonomies. In the example of functions file, starting on line 601, you can see that this adds a custom metabox to the category and tag taxonomies, and then it adds two different fields. If we put this into our plugin, here's what it looks like on the front end.
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=94)** You can see there's a new section for extra info. There's a term image that we can add or upload. And then there is another term field. And then these get tacked on to the taxonomy. You can then access that term meta by using the get term at meta function, where you pass the term ID, the key as defined in the meta fields, and of course true for single. One more note about this section is while we won't always be writing the code live, you'll be able to find all of the code that we reference here in the aux folder of the exercise files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **Env Vars:** cmb2 (3)
> **CLI Commands:** find (2)
> **UI Navigation:** checkbox (1), dropdown (1)
> **Analogies:** similar to (1), for example (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Frontend Meta Box support](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=0)** - [Instructor] One interesting aspect of CMB2 is the ability to have front end metabox support. CMB2 allows you to display any defined metabox on the front end using the CMB2 metabox form function, which is defined in the [[GitHub]] Wiki. As they know, you'll need to change the cmb2_admin_init hook to cmb2_init instead so they could be added anywhere in [[WordPress]], not just the admin. To do that in our code, we could go to the episodes-meta.[[PHP]] file and change that first hook to cmb2_init, giving us access to the episodes_metabox. Adding this support to a singular template where the post type is supported will create a form allowing people to submit that data. The documentation also shows you how to turn this into a shortcode so that it can be embedded anywhere in the content. But if, for example, you wanted to make it easy for admins to edit the content in the front end, you could do something like this. This code can be found in aux, frontend-boxes.php. We'll write add_filter and then we'll say the_content. We'll call this lil_fe_box. And we'll give it a priority of 100 just so it shows at the bottom of the content. Then we'll define our function. Lil_fe_box,
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=94)** which accepts the content as an argument. So we'll do a check with the function current_user_can. So if not current_user_can, edit_post.
>
> **[1:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=112)** And then we'll get_the_ID of the post. Then we will just return the content. Otherwise, we will return the content dot
>
> **[2:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=133)** and then the cmb2 metabox form but because we don't want it printed immediately, there's another function that just returns the output and that is cmb2_get_metabox_form. We need the ID of the episodes_metabox, which is going to be episodes_metabox. So we'll add that here. And then the ID of the post we want to display it on. Now, this is going to work both ways. This is going to be the post that's currently being displayed on and then the ID of the post the metaboxes belong to. We'll save that and go back to our front end, and if we scroll down, after the transcripts, we have all of our fields available and editable on the front end here. If I log out, and we go back to the front end, those fields are not available. And while this is an interesting use case, depending on what you need, there may be better solutions by using form builders like Gravity [[Forms]] or WPForms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[GitHub]] (1), [[WordPress]] (1), [[Forms]] (1)
> **Code Identifiers:** episodes_metabox (3), current_user_can (2), add_filter (1), the_content (1), lil_fe_box (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** cmb2 (3)
> **File Paths:** episodes-meta.php (1), frontend-boxes.php (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Documentation:** the documentation (1)

#### [Creating a theme options page](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=0)** - [Instructor] CMB2 also allows you to create your own admin pages and add fields to it, creating a sort of theme options page. This is really helpful if you're creating a full-blown plugin that requires its own group of settings. However, as the customizer has taken over and full site editing is poised to be the new way to customize the theme, this feature has more niche roles. You can see in the example snippet from the Wiki, the focus here is on a custom color, better handled by the customizer these days. But for instance, in our podcast plugin, if we wanted to make it easy to add a donation link to every episode of the homepage, this might be the place to add it. To access the data, we can't use get_post_meta because there's no post associated. We need to use CMBs custom return function of CMB2_get_option. Then we would return the option key from the meta box we defined as well as a default value. We can then use that data on the backend as well as in front end areas using hooks or creating custom short codes or blocks.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** get_post_meta (1)
> **Env Vars:** cmb2 (1)
> **Definitions:** defined as (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Adding fields to user profiles](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=0)** - [Narrator] One of the compelling features for CMB2 for people who run sites with lots of users, or who want to create custom profiles, is the ability to add custom fields to users. For example, you might want to add links for social profiles or in our case podcast specific roles like host, producer or editor. And just like most things in CMB2 there is sample code in the snippet library specifically in the example functions file starting on line 508. For our plugin, we've created a file called user meta in the aux folder, and we have included two different fields here. We define the metabox for the edit user profile screen as used in the example profiles and we kept the Twitter URL and then we added a new text field called podcast role. If we save this and go back to our admin and refresh the page, we can scroll down and see the new fields. So we can add a Twitter URL and a podcast role, and that information gets saved. Now, if you want to display that information on the front end you could use get user meta which accepts a user ID, the key as defined by CMB2, and then the single argument which would be true. In many cases, you'd probably want to get the author of the post, not necessarily the current logged in user,
>
> **[1:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=93)** but that all depends on what information you want to display.

> [!info]- Semantic Content
>
> **Env Vars:** cmb2 (3), url (2)
> **Analogies:** for example (1), just like (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=0)** - [Joe] Congratulations, you've gotten a good look at CMB2 and how to use it, as well as some extra features to explore on your own. The CMB2 Wiki over at [[GitHub]] will serve as a great resource for you. If you want to continue your [[WordPress]] journey, you should check out the "Become a WordPress Developer" learning path. You can also check out the Learning [[PHP]] course to get a deeper understanding of PHP if you'd like. Finally, I'd love to hear from you about how you're using CMB2. You can always find me on Twitter @JCasabona. If you'd like to learn more from small business owners and industry experts, check out my podcast, "How I Built It" over at howibuilt.it. Thanks so much for watching and until next time, get out there and build something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[PHP]] (2), [[GitHub]] (1)
> **Env Vars:** cmb2 (3), php (2)
> **CLI Commands:** php (2), find (1)
> **Tools:** github (1)
> **Speakers:** - [joe] (1)


## Instructor

- [[Joe Casabona]]

## Resources

- Exercise files available

## Skills Covered

- Wordpress Development

## Path Context

### In [[Advance Your Skills in WordPress]]
← [[WordPress- Custom Post Types and Taxonomies]] | **4 of 8** | [[WordPress Essential Training]] →

## Appears In

- [[Advance Your Skills in WordPress]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Staging a Site]] — Wordpress Development
- [[Creating Block Patterns in WordPress]] — Wordpress Development
- [[Building a WordPress Membership Site with Ecommerce]] — Wordpress Development
- [[Building a Headless WordPress Site with Gatsby]] — Wordpress Development
- [[WordPress- Everything about Plugins]] — Wordpress Development

---

[↑ Back to top](#)