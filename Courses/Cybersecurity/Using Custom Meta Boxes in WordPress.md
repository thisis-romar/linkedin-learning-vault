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
created: 2026-05-02
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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=0)** - [Joe] A common and important feature of many custom plugins is the custom fields associated with certain aspects of the plugin.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=8)** While there are lots of great custom fields plugins out there, it's important to reduce the number of external dependencies a site owner needs to use to make your plugin work.
>
> **[0:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=20)** That's where CMB2, short for Custom Meta Boxes 2, comes in.
>
> **[0:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=25)** It is one of the only plugin frameworks where you can include it as a library in your own theme or plugin.
>
> **[0:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=32)** And in this course, you will learn how to supercharge your custom [[WordPress]] work using this popular framework.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=40)** Hi, I'm Joe Casabona, a front-end web developer and educator who's been using [[PHP]] since 2003 and WordPress since 2004.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/custom-fields-without-dependency?u=76281980&t=50)** So join me in my [[LinkedIn]] Learning course, where I will show you just about everything you need to know to start using CMB2.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=0)** - [Instructor] CMB2 is a developer's tool kit for building meta boxes, custom fields and [[Forms]] for [[WordPress]].
>
> **[0:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=7)** So there are definitely a few things you should know before diving into this course.
>
> **[0:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=11)** On top of a familiarity with WordPress as a user, you should also be familiar with the common terms like posts, pages, meta fields and more.
>
> **[0:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=20)** If you're shaky on those terms or need a refresher, you can always check out the WordPress Essentials Training here in the [[LinkedIn]] Learning Library.
>
> **[0:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=29)** On top of that, you'll need to be familiar with [[PHP]], particularly how it relates to [[Wordpress Development]].
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=35)** After all, we'll be making a plugin.
>
> **[0:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=38)** The Learning PHP and PHP for WordPress courses can help you with that.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=44)** Finally, knowing [[HTML]], CSS and [[JavaScript]] will be a big plus.
>
> **[0:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=49)** They won't be a focus of the course, but we will be displaying information on the screen and we'll need to format it.
>
> **[0:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-you-should-know?u=76281980&t=56)** If you want a general refresh on any or all of this, the Becoming a Junior WordPress Developer Learning Path here in the LinkedIn Learning Library is definitely your best bet.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=0)** - [Instructor] When custom post types and meta fields were first introduced in [[WordPress]], the possibilities for what WordPress could become seemed endless.
>
> **[0:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=9)** Years later, those possibilities were actualized thanks in a big part to frameworks and libraries like CMB2.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=17)** We could build complex field types and add them directly to plugins without dependencies.
>
> **[0:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=24)** Throughout these videos, you will be learning how CMB2 works from a technical standpoint.
>
> **[0:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=29)** And to apply some practicality, we're going to build out a podcasting website.
>
> **[0:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=34)** The site will allow us to convert posts into podcast episodes with information about the episode like the audio file and episode number, and even the ability to add sponsors.
>
> **[0:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=47)** We'll also allow for related episodes by connecting posts.
>
> **[0:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=51)** Then we'll display that information by hooking into the content so that our plugin works with any theme.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/demo-project-overview?u=76281980&t=57)** Finally, we'll explore some advanced topics of CMB2 like bringing in and moving the taxonomies fields, front-end Meta Box support, creating a theme options page, and adding fields to user profiles.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=0)** - [Instructor] Custom fields in [[WordPress]] are key value pairs that allow us to store any information that WordPress doesn't natively store.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=8)** Imagine for example you want to include a mood in your posts.
>
> **[0:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=12)** Let's pretend it's 2001 for a moment.
>
> **[0:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=15)** There's no native mood field in WordPress core, but we can use custom fields instead to add a name and then a value.
>
> **[0:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=24)** For example, we can name this field current mood, and then give a value of happy, and then click add field.
>
> **[0:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=37)** There are a few pitfalls to this.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=40)** First, we'd need to retype this name for every post, remembering that we used the term current mood as the name, otherwise it won't show up in our template.
>
> **[0:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=51)** Second, as the number of custom fields grow, sifting through a list of names can get unwieldy.
>
> **[0:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=59)** Finally, we're limited pretty much to plain text here.
>
> **[1:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=63)** If we wanted something more advanced like check boxes or even formatted text, we'd need to custom code that or figure out a workaround like a comma separated list.
>
> **[1:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=75)** Luckily, CMB2 handles all of this for us.
>
> **[1:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=79)** We can create advanced interfaces for entering in those name, value pairs and represent the inputs in lots of different ways.
>
> **[1:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/what-is-cmb2-and-how-does-it-work?u=76281980&t=87)** This saves us tons of time, creates repeatable, and familiar ways to enter data, and allows us to focus on displaying that data.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=0)** - [Instructor] Advanced Custom Fields is an industry leader in the [[WordPress]] plugin and custom field space.
>
> **[0:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=6)** And in fact, there's a course on it in the [[LinkedIn]] learning library.
>
> **[0:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=10)** So why should you use CNB2 instead?
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=14)** Well, there are a few reasons, depending on your needs.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=17)** First CMB2 is much more of a developers tool.
>
> **[0:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=22)** There's no user interface to build out the custom fields.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=26)** It's all done through a robust set of functions.
>
> **[0:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=29)** The developers and community understand people will be bundling this with their own code, and they don't want anything to be a breaking change for as long as they can help it.
>
> **[0:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=39)** Because of that, there's also a strong commitment to backwards compatibility.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=44)** There's a strong community of volunteers maintaining the software and that means CMB2 is free.
>
> **[0:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=51)** This is an important aspect of the library if you intend to bundle it with your code, you don't need to pay a developer license or pass the costs onto your clients or customers.
>
> **[1:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=62)** In fact, there's very little dependency outside the CMB2 library or the WordPress core.
>
> **[1:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=68)** You can include the library right in your plugin or theme code.
>
> **[1:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=72)** A lot of work went into the loader to make sure everything works properly and mistakes like accidentally loading two versions of CMB2 are caught and handled gracefully.
>
> **[1:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=84)** All of this means that as a developer, CMB2 is your best bet.
>
> **[1:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=88)** Especially if you plan to create commercial software or don't want to tie your clients to using another premium plugin.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-difference-between-cmb2-and-acf?u=76281980&t=96)** However, if you're looking for the easiest way to create custom fields or a more modern way that has a block editor support, you should consider ACF, there's a course on it in the LinkedIn learning library.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=0)** - [Presenter] There are two ways that you can use CMB2.
>
> **[0:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=4)** The first is by installing the plug-in directly through the plugin directory.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=8)** Let's take a look at how to do that now.
>
> **[0:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=11)** From your [[WordPress]] dashboard, go to Plugins, Add New.
>
> **[0:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=15)** Then search for CMB2 in the search field.
>
> **[0:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=20)** You'll see a bunch of options but the first one will be CMB2 by CMB2 team.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=26)** Click Install Now and then activate.
>
> **[0:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=31)** Now that's it, there's no UI or admin menus for us to interact with the plugin, that's all done through code.
>
> **[0:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=39)** So to test this, we'll grab the examples-functions.[[PHP]] file from the documentation website over at [github.com/CMB2/CMB2/wiki](https://github.com/CMB2/CMB2/wiki).
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=53)** We'll click on examplefunctions.php then we'll click Raw and we'll copy all of this code.
>
> **[1:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=61)** Then, and this is only recommended in a test environment understanding that we're going to delete these changes.
>
> **[1:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=70)** We're going to copy that code into the current themes functions.php file through the WordPress admin.
>
> **[1:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=78)** Again, this is never recommended in a production or even a real staging environment.
>
> **[1:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=86)** This is simply to test in our local development environment that the plugin is working.
>
> **[1:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=92)** We'll go to Appearance and then Theme Editor.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=96)** We'll get a warning from the WordPress editor telling us that we shouldn't do this.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=101)** So we'll click I Understand and then we'll click on the Themes Functions.
>
> **[1:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=106)** Now, depending on the theme you're using, you might may see a different list of files or the code in the editor might look different.
>
> **[1:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=116)** I'm using 2019 because I think that's a really nice looking default theme.
>
> **[2:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=122)** We'll scroll to the very bottom of the functions.php file and then we will paste in the code.
>
> **[2:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=131)** Now, one thing we'll need to do is go back up and delete the opening PHP tag because that will throw an error.
>
> **[2:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=146)** So we'll find that for me, it's going to be on a line 365, we'll delete that then we'll click Update File.
>
> **[2:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=155)** If there are no errors, you'll see file edited successfully.
>
> **[2:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=159)** Once we do that, we'll go to pages add new and if it worked, we'll see a whole bunch of new fields added by the examplefunctions.php.
>
> **[2:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/installing-cmb2-via-the-plugin-directory?u=76281980&t=170)** So that worked so let's go back to Appearance, Theme Editor, click functions.php and then delete all of the example fields that we just added.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=0)** - [Instructor] When it comes to adding CMB2 as a library, you need a place to add it.
>
> **[0:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=5)** And in [[WordPress]], that's either a theme or a plugin.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=8)** Now we could do either, but I'd strongly recommend against putting CMB2 in your theme in most cases.
>
> **[0:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=16)** While theme option pages were a main driver of this at first, the recommendation is to put most of the theme options in the customizer, and soon, it will be the full-site editor.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=26)** So we'll create a plugin, specifically a podcasting plugin that adds fields to posts for episode and sponsor information.
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=35)** I'm using the VS Code editor.
>
> **[0:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=37)** You can use whatever you'd like.
>
> **[0:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=39)** In the explorer here, I have the plugins folder for my local [[Wordpress Development]] environment.
>
> **[0:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=46)** And for that, I'm using Local, the application.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=50)** Again, you can use whatever you'd like here.
>
> **[0:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=52)** So the first thing I'll do is right click and add a new folder.
>
> **[0:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=56)** I'll call that folder lil-cmb2.
>
> **[1:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=60)** You'll be able to find all of the code in the exercise files for this course.
>
> **[1:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=66)** Inside that folder, I will create another file called lil-cmb2.[[PHP]].
>
> **[1:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=74)** This will be the driver or loader function.
>
> **[1:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=79)** The first thing we'll do is define the function, and I've copied the definition from the sample code, so I'll just paste that right in here.
>
> **[1:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=87)** And we'll call this [[LinkedIn]] Learning Podcast.
>
> **[1:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=91)** This is the standard WordPress plugin definition that includes the name, the description, and then the author information and the license information.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=101)** Next, we'll add some important setup variables.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=105)** First, we want to make sure that this file is not called directly, so we'll write if not defined 'WPINC', and then we will just kill the file, so we'll say die.
>
> **[2:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=120)** Then we'll add a constant for the plugin version.
>
> **[2:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=124)** Now we may not use this in our plugin, but it's always something I add to my plugins, 'LIL_CMB2_VERSION'.
>
> **[2:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=134)** Since it's a constant, we'll put it in all caps, and then the version will be '1.0.0'.
>
> **[2:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=142)** The version number will help if we make updates or upgrades to it to let WordPress know.
>
> **[2:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=148)** And then the last thing we'll add is the plugin URL just in case we need to reference that.
>
> **[2:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=155)** So we'll call this 'LIL-CMB2_URL'.
>
> **[2:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=161)** We'll use the function, plugin_dir_url, and then it'll be for the current file which is underscore, underscore, the [[Microsoft Word|word]] FILE, underscore, underscore.
>
> **[2:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=174)** This is a builtin global variable and then the semicolon.
>
> **[2:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=179)** Now this includes the trailing slash, so that's important to note.
>
> **[3:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=184)** This includes the trailing slash.
>
> **[3:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/setting-up-our-project-plugin?u=76281980&t=188)** And that's it, we'll save this and we'll add the [[Representational State Transfer (REST)|rest]] of the code as needed, starting with loading CMB2 as a library.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=0)** - [Instructor] The second way to use CMB2 is the more preferable way as a library in your own plugin.
>
> **[0:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=6)** On the screen here, you see CMB2 from the [[WordPress]] Plugin Repository.
>
> **[0:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=13)** This is where we will download the CMB2 library to then add to our plugin.
>
> **[0:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=18)** So, the first thing we'll do is you can go to [wordpress.org/plugins/cnb2](https://wordpress.org/plugins/cnb2) and click the Download button.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=26)** This will download a zip file that we can then unzip, and we can move it right into our plugin directory code.
>
> **[0:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=36)** So, I'll bring up the code editor and then we will take CMB2 and drag it directly into our LIL CMB2 directory in the WordPress plugins directory.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=50)** From here, we need to include, what's called, the bootstrap.
>
> **[0:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=54)** The thing that's going to load CMB2.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=57)** And to do that, we can go back to the CMB2 [[GitHub]] repository to the example-functions.[[PHP]] file.
>
> **[1:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=64)** So the first thing I'll do here is just copy the bootstrap, which is lines 18 to 22 in this file.
>
> **[1:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=72)** And I'll paste it into our plugin.
>
> **[1:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=77)** I'll save the file and now CMB2 is getting loaded.
>
> **[1:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=81)** Now, if you want to test this, we can do the same thing where we copy the example-functions.php file [[Microsoft Word|word]] for word, and paste it into our plugin, and then load the plugin.
>
> **[1:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=93)** But we don't have to do that this time around.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=96)** Instead, we will just open up our dashboard.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=101)** We'll go to Plugins and we'll click Activate to make sure there are no errors.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-as-a-library-for-your-plugin?u=76281980&t=105)** And now our plugin is ready to add fields to.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=0)** - [Instructor] The CMB2 documentation and sample files will be instrumental to us, so here we'll get a tour of the documentation and how to access sample snippets.
>
> **[0:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=10)** The documentation actually exists in two places.
>
> **[0:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=12)** At cmb2, the number two, .io and in the [[GitHub]] wiki.
>
> **[0:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=18)** We will be referencing the GitHub wiki because it's generally kept more up to date.
>
> **[0:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=24)** While we'll be covering the basics and then some in this course, the wiki is the best place for you to find well-documented functions, sample code, issues and updates.
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=35)** And aside from documenting the plug-in, there are a couple of other resources to point out.
>
> **[0:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=41)** The first is the advanced tutorials, which is a great way to find real-world examples of how to extend CMB2.
>
> **[0:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=49)** The other is the CMB2 Snippet Library.
>
> **[0:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=52)** Here you can find well-commented examples to copy, paste and modify.
>
> **[0:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/the-cmb2-documentation?u=76281980&t=59)** We will likely be coming back to this library later.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=0)** - [Instructor] The power behind CMB2, is that it takes a simple implementation.
>
> **[0:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=4)** The [[WordPress]] custom field being two text boxes and convert that into an area of endless possibilities for [[Application Development]].
>
> **[0:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=13)** Over on CMB2, [[GitHub]] page, you could see a full list of the field types.
>
> **[0:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=20)** These are the fields that we can define by default using CMB2.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=26)** Clicking on one of the fields will bring us to the usage area, with screenshot and sample code for how it's used.
>
> **[0:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=34)** The big benefit here is that CMB2 has implemented validation and browser fallbacks.
>
> **[0:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=41)** Now this was a lot more important when CMB2 first came out, but it's still important today.
>
> **[0:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=48)** For example, with text date, jQuery UI is implemented since at the time of this recording, safari doesn't support all date selection fields.
>
> **[0:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=58)** If we go to the field parameters, you'll also notice that some fields are marked as non repeatable.
>
> **[1:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=65)** For fields that can be repeatable, you can allow users to add multiple rows that will be assigned to an array related to that field.
>
> **[1:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=76)** Finally, we can create our own fields.
>
> **[1:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=79)** This is great, if you have specific custom data that you want to validate like an internal ID, or if you want to associate posts, we'll take a closer look at both of these later.
>
> **[1:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=91)** Using the vast array of features we can extend posts, pages, and custom post types.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/field-types-in-cmb2?u=76281980&t=96)** To create our own option pages and even add user profile information.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980&t=0)** - [Instructor] CMB2 predates the Block Editor by several years so how does it work and what can we expect from the behavior?
>
> **[0:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980&t=9)** Well, currently there is no explicit support for the Block Editor in CMB2, and the meta boxes are added the way any others are, as an extra section at the bottom of the Block Editor.
>
> **[0:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980&t=23)** There's no easy way to add custom fields to blocks without coding your own block, which you can learn how to do in the "Developing Blocks with Gutenberg" course from the [[LinkedIn]] Learning Library.
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/cmb2-and-the-block-editor?u=76281980&t=35)** In short, while CMB2 allows us to easily add flexible advanced meta boxes to our posts and post types support for modern features like the Block Editor and full site editing simply isn't there yet.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=0)** - [Instructor] The first task in front of us is to determine what information we want to include, and how we want to structure that data.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=8)** So let's go ahead, and plan our plugin by giving us a mapping for the type of data we want to store, and then the actual field types that we'll store it.
>
> **[0:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=19)** The goal of our plugin is to perform three tasks, add episode and sponsor fields to the post type.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=26)** Allow users to relate episodes to each other, with a related posts field or a related episodes field.
>
> **[0:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=33)** And then add the fields info to the front-end via the content hook so that our plugin works with any theme, and we're not relying on specific theme templates.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=44)** We'll also add a Twitter link, and podcast role to the user profiles to demonstrate how that works in the advanced topics section.
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=53)** So first let's talk about mapping our episode fields.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=57)** We want to have a few like episode numbers, season number, audio file, and then information for the transcripts, the actual transcript, and a downloadable transcript file.
>
> **[1:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=67)** Episode number and season number, it will be the text number field.
>
> **[1:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=71)** Now, if you look at the documentation, you'll notice that there is no text number field.
>
> **[1:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=76)** So we're going to have to create that as a custom field first.
>
> **[1:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=80)** The audio file, as well as the transcript file, we'll use the file upload fields, and the file upload field allows us to limit the type of files uploaded.
>
> **[1:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=90)** So with audio file, it will be an MP3 or an M4A only, those are the podcast app supported audio files.
>
> **[1:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=98)** And for the transcript file, it will be a PDF only.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=101)** The transcript itself we'll use the WYSIWYG Editor, which is the classic editor if you're using [[WordPress]] 5.0 or newer.
>
> **[1:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=110)** Then we'll map our sponsor fields.
>
> **[1:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=112)** So for our sponsor, we want to have the sponsor name, which will be the standard text field.
>
> **[1:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=117)** The sponsor link, which will be a text URL field.
>
> **[2:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=120)** And the sponsor logo, which will be a file upload field, and that will only accept WordPress supported image uploads.
>
> **[2:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=126)** So JPEG, PNG, GIF and WebP.
>
> **[2:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=131)** WebP is supported as of WordPress 5.8.
>
> **[2:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=134)** There can also be any number of sponsors.
>
> **[2:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=136)** So this will go into a repeatable group field so that we can add two, three, four sponsors.
>
> **[2:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=143)** Finally, there's the related episodes.
>
> **[2:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=146)** We'll only need the post ID for this.
>
> **[2:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=148)** So here's how it will work.
>
> **[2:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=150)** Now, this will need to be a custom field that will return a comma separated list of post IDs.
>
> **[2:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=156)** And the way this will work is it will be a custom checkbox field that's populated based on the posts.
>
> **[2:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=163)** It will grab the post titles, and the post IDs show them, and then a user can select the related episodes.
>
> **[2:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=171)** And with that, all of our fields are mapped out.
>
> **[2:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/defining-our-custom-fields?u=76281980&t=173)** So let's get to coding.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=0)** - [Instructor] Before we add the fields, we need a place to put them.
>
> **[0:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=3)** So we're going to create two custom metaboxes.
>
> **[0:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=6)** In our plugin, which you can find in the exercise files, we're going to create a new folder called metaboxes.
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=14)** And then in that folder, we'll create two new files.
>
> **[0:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=18)** One will be called episodes-metabox or episodes-meta.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=26)** and the other will be called sponsors-meta.
>
> **[0:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=34)** Note with our naming convention, we're going to be sticking with plural when we're referring to the metaboxes.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=40)** So this is the metaboxes for all sponsors or for all episodes.
>
> **[0:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=45)** Then in our driver file, the lil-cmb2.[[PHP]] file will make two require calls.
>
> **[0:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=52)** So we'll say require once and then metaboxes/episodes-meta.php,
>
> **[1:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=65)** and then we'll do the same thing for sponsors-meta.
>
> **[1:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=71)** So we'll just replace episodes or sponsors after copying and pasting.
>
> **[1:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=76)** Okay, so we'll save this file and now we'll add the metaboxes.
>
> **[1:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=80)** So in episodes-meta, we'll open our PHP code here and then the first thing we'll do is add an action.
>
> **[1:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=88)** So we'll say add action, and then the action we want to add is cmb2_admin_init.
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=97)** This is a custom hook that's been added by cmb2, and then we'll use our callback function, which will be lil_episodes_meta.
>
> **[1:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=108)** Then we'll write the function.
>
> **[1:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=111)** Function lil_episodes_meta and the parentheses.
>
> **[1:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=117)** And then in between the curly braces, we will initiate the metabox.
>
> **[2:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=122)** So I'm going to create a new variable here called episodes gets or equals.
>
> **[2:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=130)** I usually say gets when referring to an assignment, and then we'll use the function new_cmb2_box.
>
> **[2:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=138)** This is a function added by cmb2 that accepts an array of arguments.
>
> **[2:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=143)** So we'll say array, and then we'll add the argument.
>
> **[2:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=148)** So the first one is going to be ID.
>
> **[2:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=151)** This is an associative array.
>
> **[2:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=152)** So the first key is ID, and then this could be whatever we want to call it.
>
> **[2:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=156)** So episodes_metabox, and then the title, which is what's displayed to the user.
>
> **[2:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=165)** That will be episode information.
>
> **[2:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=168)** And we're going to put this in the translation function.
>
> **[2:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=171)** So episode information, and then we also need a namespace.
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=177)** So the namespace will just lil_cmb2, We don't want to have a semi-colon there.
>
> **[3:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=184)** We want a comma and then the object types, and this is going to be any of the post types that we want the metaboxes to show on there.
>
> **[3:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=197)** So this is going to be an array of post types, and this is just going to go under the posts, custom post type or the post post type.
>
> **[3:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=207)** Next is going to be the context.
>
> **[3:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=208)** The context is basically where we want the box to show up and there's normal, which will show up in the normal area.
>
> **[3:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=217)** There's also side, which will show up in the sidebar.
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=220)** So we'll set our context to normal here.
>
> **[3:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=224)** For a full list of all of the arguments for this function.
>
> **[3:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=228)** You can check the documentation at [github.com/cmb2/cmb2/wiki](https://github.com/cmb2/cmb2/wiki).
>
> **[3:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=235)** Next is priority, and this will determine where on the admin screen our box will show up.
>
> **[4:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=244)** So if we set it to high, it will show up above everything else, or it'll show up with everything else that gives a priority of high.
>
> **[4:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=253)** And then we have a argument called show_names, which we'll fix that show_names, which tells cmb2 if we want to show the field names to the left.
>
> **[4:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=266)** So we'll set this to true as well.
>
> **[4:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=268)** And then that is all of the arguments that will pass to it.
>
> **[4:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=271)** So we'll make sure everything lines up, and now we have our episodes box defined.
>
> **[4:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=279)** So what I'm going to do now is I'm going to copy all of this code, move it over to sponsors-meta, and then just make some key changes here.
>
> **[4:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=289)** So I'm going to highlight the [[Microsoft Word|word]] episodes with VS code.
>
> **[4:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=293)** I can press Command+D, and delete all instances of the same word and then replace it.
>
> **[5:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=301)** So I will change instances of episodes to sponsors, this smartly doesn't change variable names.
>
> **[5:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=307)** So I'll have to change this one myself.
>
> **[5:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=310)** And then the same thing here, this is a string.
>
> **[5:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=312)** So we can just call this sponsor information, but everything else will be the same.
>
> **[5:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=320)** So we'll make sure we get all of the IDs right as well sponsors.
>
> **[5:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=326)** So lil_sponsors_meta, lil_sponsors_meta.
>
> **[5:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=329)** Sponsors, the ID is sponsors_meta.
>
> **[5:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=333)** Sponsor information, and then show names.
>
> **[5:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=336)** So now we'll save all of this.
>
> **[5:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=337)** And if we go to our [[WordPress]] dashboard and refresh, and go to a new post, we'll see two new metaboxes here.
>
> **[5:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=346)** One is episode information, and one is sponsor information.
>
> **[5:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=350)** What I'm going to do is go to the three dots icon here, the options, icon and click Preferences.
>
> **[5:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=357)** And I am going to hide the custom fields panel so that it doesn't clutter up our dashboard.
>
> **[6:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=363)** We want to focus only on the cmb2 boxes that we're adding, and now we have those.
>
> **[6:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-our-meta-boxes?u=76281980&t=368)** So now it's time to add some fields.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=0)** - Since we have to number specific fields, it would be great to have custom fields that checked and validated input to ensure that only numbers are submitted.
>
> **[0:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=10)** And while cmb2 doesn't support this natively, it does allow us to define our own fields.
>
> **[0:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=16)** So let's start by creating a new file in the root of our plugin.
>
> **[0:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=22)** And we will call this custom-field-types.
>
> **[0:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=27)** So custom-field-types.[[PHP]].
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=35)** And then in that file, we'll add some code.
>
> **[0:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=39)** So we'll open up our php tags, and then we will add an action.
>
> **[0:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=46)** Now, this is a bit of clever code from cmb2.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=50)** I'm going to name the action, cmb2 underscore render underscore text underscore number.
>
> **[1:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=60)** Now this is not an actual action defined by cmb2, cmb2 dynamically renders new actions or new hooks for cmb2 underscore render underscore, and then whatever your field type is.
>
> **[1:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=77)** This is important because later on, we're going to validate on that same hook.
>
> **[1:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=81)** So with this dynamically generated hook, we'll also create a function called lil_text_number.
>
> **[1:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=90)** So now we'll add the two optional arguments to add action.
>
> **[1:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=95)** The first is priority, which will make 10.
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=97)** And the second is the accepted arguments, which is five, and then we'll create the function.
>
> **[1:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=103)** So function, lil_text_number.
>
> **[1:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=107)** Now this does accept a few arguments.
>
> **[1:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=111)** It accepts field, then escaped value, then object ID, object type,
>
> **[2:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=126)** and field type object.
>
> **[2:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=130)** These are all things that cmb2 will use to process and create our custom field.
>
> **[2:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=136)** Inside the function it's a little bit easier than using all of these arguments.
>
> **[2:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=142)** We can simply type echo field type object arrow.
>
> **[2:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=149)** So this field type object is an actual object input, and then it will accept an array of arguments.
>
> **[2:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=158)** These are going to more or less map to the input attributes in [[HTML]].
>
> **[2:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=164)** So the first one we can add is class, and we'll call this cmb2 dash text dash small so that we know that the styling that cmb2 should add to it.
>
> **[2:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=179)** And then the type which is going to be a field type and number is a recognized field type in HTML.
>
> **[3:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=186)** So that's the type that will make it.
>
> **[3:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=188)** And that is it for this function.
>
> **[3:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=191)** Now we'll write the code to sanitize the input.
>
> **[3:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=195)** And while number is an accepted field in modern browsers, it's always good to have a server side callback.
>
> **[3:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=201)** So we'll add a filter here.
>
> **[3:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=205)** The filter will be cmb2 sanitize text number.
>
> **[3:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=212)** And again, this is going to have the same naming convention cmb2 sanitize, and then the fields type, the custom field type here.
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=220)** So sanitize text number, and then our callback function, which we'll name similarly, lil_sanitize_text_number, and then we'll add the priority and accepted arguments.
>
> **[3:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=237)** So now we'll name the function, lil_sanitize_text_number, and this is going to accept two arguments.
>
> **[4:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=248)** The first is no, and the second is new and new is really the value that we're going to focus in on here.
>
> **[4:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=257)** So we'll say new gets, and this is our own sanitizing function now.
>
> **[4:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=261)** So preg_replace.
>
> **[4:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=263)** What we want to do is replace any non numbers with a blank space.
>
> **[4:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=270)** So we'll say preg_replace, and then we'll pass a regular expression slash and then the caret zero dash nine bracket, and then the slash again, to end the regular expression.
>
> **[4:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=287)** So any character you find, that's not zero through nine, replace it with nothing and do that within the variable new that's what we're searching here.
>
> **[4:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=299)** And then we will return new.
>
> **[5:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=304)** So if we save this, now we have a new field called text number that can be used when we define our custom fields.
>
> **[5:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=311)** The last thing we need to do now is actually include this page in our driver file.
>
> **[5:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=318)** So we'll go to lil-cmb2.php and we will add the require once call above episodes, meta and sponsors matter because we actually want to use this field in those meta boxes.
>
> **[5:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=330)** So we'll add require once, and this is in the root folder.
>
> **[5:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-the-custom-field-type?u=76281980&t=335)** So we will add custom-field-types.php, and now our custom field type is actually ready to use.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=0)** - Now it's time to add our fields to the meta boxes.
>
> **[0:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=3)** Let's start with how to add them, then add the episode fields.
>
> **[0:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=7)** Under the hood our meta box is an object.
>
> **[0:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=11)** So, to add fields, we're going to use that classes add field function, passing it an array of arguments.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=17)** Inside of our LIL episodes meta function, we'll create a new line and then we will call the episodes object, and then the add field function, then we'll pass it an array of arguments.
>
> **[0:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=36)** The first will be the name, and the name is what the user will see in the meta box.
>
> **[0:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=42)** So, we'll add our translation function, call this episode number, and then lil_cmb2 for our namespace.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=57)** Then the ID, which is how we will reference this when we are ready to display it on the front end, so we'll call this lil_episode_number, and then the type, the type corresponds with the list of fields types on the cmb2 documentation, as well as the custom field types that we've created, which at this point we've created a text number field so that's what we'll use here.
>
> **[1:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=85)** And that's how you add a field.
>
> **[1:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=88)** This is the minimum number of arguments we need to add a field to a custom meta box.
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=94)** So, with that field added, let's just go to our dashboard and see how it looks.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=101)** You can see there's now a new field here and it's saying number fields, so everything appears to be working properly.
>
> **[1:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=108)** With that let's go ahead and add the [[Representational State Transfer (REST)|rest]] of our basic fields here.
>
> **[1:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=114)** Now, there are also a number of optional argument based on the type.
>
> **[1:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=118)** And we'll cover those as we come across them but for the most part name, ID and type are the ones that will be what we call the most.
>
> **[2:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=127)** So, now let's add a season number.
>
> **[2:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=130)** I'm just going to copy this add field call and paste it and then I will replace the [[Microsoft Word|word]] episode here with season number, and similarly in the ID, I will replace episode with season, but this is also going to be a text number.
>
> **[2:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=149)** And then finally, I'll paste that block one more time and we want to add a transcript field, but we want this field to be the wysiwyg editor.
>
> **[2:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=158)** So, let's name this transcript, and then lil_transcript for the ID and the type will be wysiwyg so, what you see is what you get.
>
> **[2:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=175)** So, we'll save this and we'll go back to our dashboard, we'll refresh the new post page and now we have a couple of new fields.
>
> **[3:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=186)** Now, one thing to note is it appears for me the wysiwyg field is working, if it's not for you, you may need to use the JQuery Migrate Helper plugin.
>
> **[3:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=200)** So, if we go to plugins, add new you can search for JQuery Migrate, and then Enable JQuery Migrate Helper.
>
> **[3:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=212)** Install and activate that to get the wysiwyg field, which relies on TinyMCE to work properly.
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=220)** And these are the most common ways to add fields, cmb2 is mature and well supported, so there's not a whole lot else we need to do.
>
> **[3:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=228)** However, there are a couple of fields that need some more finesse.
>
> **[3:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-our-meta-boxes?u=76281980&t=232)** One is the file uploader.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=0)** - [Lecturer] This wouldn't be much of a podcast site without audio.
>
> **[0:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=3)** Luckily CMB2 has a file upload a field that we can include that's pretty flexible and we'll be adding two, one for the audio and one for the transcript PDF.
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=14)** Let's start with the audio file.
>
> **[0:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=16)** In the episodes meta.[[PHP]] file right underneath the CMB2 box definition, I'm going to add a new field.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=26)** So we'll write episodes, arrow, add field, and then our array of arguments.
>
> **[0:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=38)** The name of this field will be audio file.
>
> **[0:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=41)** We'll make sure to translate that.
>
> **[0:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=48)** And then the namespace, L-I-L-C-M-B2, the ID, which will be L-I-L audio file.
>
> **[1:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=64)** And then we're going to add a optional field called the description.
>
> **[1:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=67)** So upload your audio or enter a URL more on that in a minute.
>
> **[1:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=78)** And then the type will be a file.
>
> **[1:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=83)** Now those are the basics, and we need to add a couple of more options for the audio file uploader.
>
> **[1:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=93)** So there's actually an argument called options, which is also an array.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=101)** And in it one of the arguments is URL.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=105)** We're going to set this to true, which will then show the text input for the URL as well.
>
> **[1:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=111)** So our users will be able to upload an audio file or paste a URL from their audio host.
>
> **[1:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=118)** We can also customize the upload button text with the option add, upload file.
>
> **[2:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=128)** Text, and we can write add audio.
>
> **[2:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=134)** Now outside the options URL, we're also going to limit the type of files a user can upload to be only a podcast supported formats.
>
> **[2:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=144)** So this is going to use the query args, argument.
>
> **[2:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=152)** This is going to be in array and inside the array we're going to have another array called type.
>
> **[2:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=163)** So you could see how this gets pretty complicated pretty quickly.
>
> **[2:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=167)** And then we're going to pass an array of types.
>
> **[2:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=170)** So the first one will be audio/MP3, which is the MP3 file type, audio/M4A, which is the M4A audio type or file type.
>
> **[3:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=184)** And then audio/W-A-V for wave, which is also supported.
>
> **[3:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=191)** So now we have the array.
>
> **[3:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=193)** We have the query args here and then you need to add a comma there, and then we have the file array completed.
>
> **[3:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=204)** So let's save this and make sure everything works properly.
>
> **[3:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=207)** We'll go to our [[WordPress]] dashboard to add new, and we do have an audio file so we can upload a file or we can paste a URL in here.
>
> **[3:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=218)** So now let's do the same thing for the transcript file.
>
> **[3:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=221)** So we'll copy this whole call.
>
> **[3:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=225)** And then under the WYSIWYG editor, we'll paste this, we'll change the name to transcript file.
>
> **[3:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=234)** We'll change the ID to L-I-L transcript file.
>
> **[4:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=240)** We can change the description to upload your transcript PDF, type is going to be file for URL.
>
> **[4:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=253)** We're going to set that to false.
>
> **[4:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=254)** We want people to just upload the PDF here, and then for the add upload file text, we'll write add PDF.
>
> **[4:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=264)** And then for the file types here, we're only going to have one.
>
> **[4:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=269)** And since PDF is a specific application file type, this will be type application/PDF.
>
> **[4:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=280)** So we'll save that.
>
> **[4:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-a-file-uploader?u=76281980&t=281)** We'll go back to our dashboard and refresh, and we also have the add PDF button and you can see there's no URL here.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=0)** - [Instructor] Sometimes we need to capture multiple instances of the same field.
>
> **[0:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=4)** For example, a single episode may have several sponsors and that's where our repeatable fields come in.
>
> **[0:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=11)** A repeatable field is one that you can create multiple instances of.
>
> **[0:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=16)** And it's actually not a field type, it an attribute that can be applied to most fields.
>
> **[0:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=21)** You can see which ones are supported and which ones are not at the [[GitHub]] wiki for CMB2.
>
> **[0:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=28)** For example, if we wanted to have a custom field for the episodes top takeaways, we can make a repeatable field.
>
> **[0:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=36)** So right under the audio file, I will add a new field.
>
> **[0:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=42)** I will just copy the episode number field.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=44)** So we have a good starting point.
>
> **[0:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=46)** We'll call this top takeaways.
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=53)** We'll give this an ID of L I L takeaways.
>
> **[1:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=60)** The type will be text area.
>
> **[1:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=63)** So we have the ability to add a bunch of texts and we're not limited to smaller fields.
>
> **[1:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=70)** And then we would pass the argument repeatable, and we'll set that to true.
>
> **[1:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=78)** Now, if we save this and go to our dashboard and refresh, you can see we have a section for top takeaways and we can click add row to add more.
>
> **[1:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=88)** When it comes to repeating multiple fields that we'd like groups together, there's an even better implementation.
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=94)** And that's the field group.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=96)** This group is a set of fields together and makes them automatically repeatable.
>
> **[1:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=101)** And this field is perfect for our sponsors.
>
> **[1:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=104)** So let's open the sponsors meta file.
>
> **[1:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=107)** And in our L I L sponsors meta, we'll create a group.
>
> **[1:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=112)** Now, remember for this one, we will need to add a field to the sponsors box.
>
> **[2:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=121)** And this repeatable group, will actually become its own object as well.
>
> **[2:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=125)** So what we're going to do here is rename the sponsors box to sponsors info, and then we'll create the repeatable group called sponsors.
>
> **[2:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=136)** That'll be a little bit clearer to reference later on.
>
> **[2:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=140)** So we'll say sponsors gets sponsors info, arrow add field, and then we will create the array.
>
> **[2:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=152)** So first we'll send it an ID there's no name for the group because we'll name each individual field and we'll call this sponsor group.
>
> **[2:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=165)** The type will be group.
>
> **[2:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=172)** So this is all we need to do to set up the field, but then we can pass some options to it.
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=177)** So we'll create the options key or the options argument.
>
> **[3:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=182)** This is going to be an array of arguments.
>
> **[3:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=185)** And first here is going to be group title.
>
> **[3:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=189)** So this is part of the options for the group field.
>
> **[3:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=194)** And that's because it will dynamically generate the title so we'll create the translation and then we'll call this sponsor and then curly brace and then the pound sign and curly brace.
>
> **[3:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=208)** So each sponsor will get its own number this way, and then we'll add our namespace so L I L CMB2,
>
> **[3:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=220)** then we can customize the add button and we'll copy this just to save some time and we can name this add another sponsor.
>
> **[4:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=241)** And then we can also create a remove button.
>
> **[4:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=251)** And we'll say, this is remove sponsor.
>
> **[4:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=255)** The last option we'll pass here is the sortable option or sortable flag, which will set to true, which means we can reorder the group.
>
> **[4:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=265)** So now we have our options in place and our group set up.
>
> **[4:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=271)** In order to add a group field, we are going to use the sponsors info field so our meta box field, and we're going to add the function add group field in this we pass the group that we want to add the fields to.
>
> **[4:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=290)** So in this case, we're going to add sponsors and then an array of arguments.
>
> **[4:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=295)** The first is going to be name, and this is going to work just like adding a normal field.
>
> **[5:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=301)** So again, I'll copy the translation function field here.
>
> **[5:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=306)** So this will be sponsor name.
>
> **[5:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=311)** The ID will be name, notice that we're not prefixing it cause it's already part of a group.
>
> **[5:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=318)** So it doesn't really need to be prefixed and the type will be text in quotes.
>
> **[5:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=325)** So that's how we add one field let's go ahead and add the next field, which will be the sponsor URL.
>
> **[5:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=333)** So we'll just copy our first group field call and make some changes sponsor URL, and then the type will be text URL.
>
> **[5:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=347)** The last group field we want to add is the sponsor logo.
>
> **[5:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=351)** And this is going to be just like adding another file.
>
> **[5:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=355)** So what we'll do is paste the group call.
>
> **[5:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=359)** And so the name will be sponsor logo.
>
> **[6:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=364)** The ID will be logo.
>
> **[6:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=369)** The type will be file.
>
> **[6:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=373)** And then we'll add our file options so in quotes, this is going to be in array, URL we'll set to false, we want people to actually upload the logo so they can't hotlink it from anywhere.
>
> **[6:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=390)** And then the query args, again they should be in quotes.
>
> **[6:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=399)** This is going to be in array and then type array.
>
> **[6:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=407)** And then this is going to be four types, all images.
>
> **[6:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=410)** So image GIF, and then we'll copy this paste it four times, cause they're all going to be images.
>
> **[7:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=421)** So it'll be image GIF, image JPEG, image PNG and image WebP.
>
> **[7:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=430)** And again WebP is supported as of [[WordPress]] 5.8 All right and that's our sponsor information with the logo included so we'll save this.
>
> **[7:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=444)** We'll go back out to our admin and refresh this page looks like we have a parse error unexpected on line 16.
>
> **[7:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=453)** So let's troubleshoot that really quick.
>
> **[7:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=456)** It looks like we forgot the [[Microsoft Word|word]] array here.
>
> **[7:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=459)** So add the array, and then there's the options add this here and now we'll refresh.
>
> **[7:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=471)** Everything looks good and if we go under sponsors, we'll see sponsor one.
>
> **[7:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=475)** We have our fields add or upload file for our logo.
>
> **[8:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-repeatable-field?u=76281980&t=480)** And then we can remove this sponsor or add another sponsor.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=0)** - One of the things that makes CMB2 so great, is that to get data to display, you can use the built-in [[WordPress]] function, get_post_meta.
>
> **[0:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=9)** You can find more information about that, on the WordPress Developer doc, which you see on the screen.
>
> **[0:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=15)** As a refresher, get_post_meta accepts up to three arguments.
>
> **[0:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=19)** A post ID, which you need to pass.
>
> **[0:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=21)** The ID of the field, which we defined when creating our fields.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=26)** And a Boolean, to state if the result is a single value or not.
>
> **[0:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=31)** Now, the single argument can get a little bit ambiguous depending on what you're working with.
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=35)** But in the context of CMB2, we will always pass true.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=40)** So let's look at a few examples of how we would get data out of our podcast plugin.
>
> **[0:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=45)** We would use the function, get_post_meta and then the first argument for the ID would be the cached function, get_the_ID(), which will always return the ID of the current post.
>
> **[0:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=56)** Then we would pass our ID as defined when we created the meta boxes.
>
> **[1:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=61)** So for example, 'lil_episode_number', and then we would pass, true.
>
> **[1:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=66)** So in the first two examples, with 'lil_episode_number', we would get a string back, that would be the number, for example, one.
>
> **[1:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=74)** In 'lil_audio_file', We will get a URL, whether or not the user pasted an actual URL or uploaded a file.
>
> **[1:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=83)** When it comes to groups or repeatable fields, we need to keep in mind, that this will be an array.
>
> **[1:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=90)** So let's look at the results for getting the post meta from sponsor group.
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=96)** You can see here that this is a multi-dimensional array.
>
> **[1:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=99)** And each sponsor entry is a numeric key, and then in associative array for the value.
>
> **[1:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=107)** So in our first array, we have the IDs as defined in our group, fields, functions.
>
> **[1:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=114)** So name, which can be 'Podcast Liftoff' URL, which would be the URL to the website.
>
> **[1:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=119)** And then the logo, which would be a URL to the image we uploaded.
>
> **[2:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=124)** We also have access to the logo_ID, which is the post ID inside of WordPress, but we won't be using that.
>
> **[2:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=133)** So in order to print this information, we will then loop through this array to display it.
>
> **[2:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=138)** With that primer, we're ready to add our custom field to the website.
>
> **[2:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=142)** But first let's answer an important question.
>
> **[2:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=145)** Where do we add it?
>
> **[2:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=146)** If you're creating a custom theme, you can add the fields to one of your templates or create a custom template.
>
> **[2:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=152)** However, if we are creating a standalone plugin, like we are in this course, we should be using the content hook, to add that information via a filter before and after the post content.
>
> **[2:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=167)** Now, if you want to go the extra mile, while it's outside the scope of this course, you could also create short codes, to embed in the WordPress editor, or a block.
>
> **[2:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/how-to-get-data-from-cmb2?u=76281980&t=176)** Using what you could learn in the Developing Blocks for Gutenberg course, here in the [[LinkedIn]] library.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=0)** - [Instructor] In order to add our fields to the content, we'll first create a new file called display.[[PHP]] in the root of our plug-in folder.
>
> **[0:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=9)** So we'll add display.php.
>
> **[0:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=12)** We'll add the opening PHP tag here, and save it.
>
> **[0:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=16)** And then we'll go back to lil-cmb2.
>
> **[0:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=18)** And at the bottom of this file, we'll add require_once( 'display.php' ).
>
> **[0:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=24)** We want to add this after everything else, 'cause we'll need the defined meta boxes.
>
> **[0:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=30)** Back in the display file, we want to break our functions into two parts: a before-the-content function and an after-the-content function.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=40)** Let's start with before.
>
> **[0:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=42)** We'll write add_filter, and then we'll call the_content for the hook.
>
> **[0:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=49)** This will filter the content based on what we do in our function.
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=53)** And then we'll call our callback function, lil_pod_info_before.
>
> **[1:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=62)** Our function is going to do three things: retrieve the data, validate and sanitize the data, and then pre-pend the data to our content.
>
> **[1:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=70)** So first let's define the function, which accepts one argument, which is the content.
>
> **[1:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=76)** We'll write function lil_pod_info_before.
>
> **[1:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=81)** It accepts the argument of the content or $content.
>
> **[1:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=84)** And then the first thing that we'll do is check to make sure that this function is being used on a singular post.
>
> **[1:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=91)** If we don't, then we could run into errors because it might be run in the admin.
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=97)** So we'll say, if ( ! is_singular ), just return the content.
>
> **[1:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=103)** And that's another thing to keep in mind.
>
> **[1:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=104)** We will always need to return at least the content variable, otherwise nothing will show up on the page.
>
> **[1:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=113)** So now, let's get the season, episode and audio file using get_post_meta.
>
> **[1:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=118)** So we'll say $season = get_post_meta().
>
> **[2:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=124)** And then we'll use the get_the_ID function.
>
> **[2:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=128)** We'll use the key, which is lil_season_number.
>
> **[2:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=132)** And the third argument will always be true.
>
> **[2:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=137)** We'll do the same thing for episode number.
>
> **[2:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=140)** So we'll just change $season to $episode_number,
>
> **[2:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=148)** and then we'll update the key to be lil_episode_number.
>
> **[2:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=153)** And finally, the audio file.
>
> **[2:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=156)** So we'll call this $audio_file.
>
> **[2:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=160)** And then get_post_meta( get_the_ID(), 'lil_audio_file').
>
> **[2:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=167)** Now, we want to do a check.
>
> **[2:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=169)** We want to validate and sanitize our data.
>
> **[2:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=171)** So validating our data, we'll be making sure we actually got stuff.
>
> **[2:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=174)** And then sanitizing, we'll be using the [[WordPress]] escape functions.
>
> **[2:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=178)** So first let's up our output.
>
> **[3:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=180)** We'll call this $episode_info, and we'll set this as an empty string for now.
>
> **[3:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=187)** And then we'll check to make sure we actually have season and episode numbers.
>
> **[3:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=191)** So we'll say, if ( ! is_null( $season ) && ! is_null( $episode_number ) ).
>
> **[3:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=208)** Only if both of these have values do we want to proceed.
>
> **[3:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=212)** And then we'll proceed by defining our $episode_info.
>
> **[3:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=216)** So we'll say $episode_info gets, we'll put this in a header with the class episode-info, and then we'll output our custom field data.
>
> **[3:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=231)** And we'll use the function sprintf for this, which allows us to store a string that we want to format.
>
> **[3:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=238)** So the first argument here will be the [[HTML]] you want to output with placeholders.
>
> **[4:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=244)** So Season, and then we could say %s, which is a string placeholder.
>
> **[4:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=248)** This will grab the first string that we pass to the function after our format string.
>
> **[4:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=255)** And then Episode %s which will do the same thing for the second string that we pass.
>
> **[4:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=262)** So here is our format.
>
> **[4:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=264)** And then the first string that we want to pass is the season number.
>
> **[4:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=268)** So we'll say esc_html(), and then $season.
>
> **[4:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=273)** And the second string that we want to pass is esc_html( $episode_number ).
>
> **[4:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=281)** And let's go ahead and wrap this just to make it a little bit easier to read.
>
> **[4:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=287)** So sprintf, our string, and then our $season and our $episode_number.
>
> **[4:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=293)** With that, let's close out the $episode_info header with our close-header tag.
>
> **[5:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=305)** Now, let's do the same thing for the audio embed, but we're actually going to use a conditional assignment or tertiary operator here.
>
> **[5:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=314)** So we'll say $audio_embed gets, and then we'll check the condition.
>
> **[5:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=320)** If, ( ! is_null( $audio_file ) ).
>
> **[5:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=326)** And if that's the case, then we want to print out a <div class="audio_file">
>
> **[5:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=338)** Then we want to execute a built-in WordPress shortcode to do an audio embed.
>
> **[5:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=342)** So we'll call the function do_shortcode.
>
> **[5:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=346)** The shortcode is square bracket, audio src for source, equals, double quote.
>
> **[5:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=354)** And then our URL, which we will escape.
>
> **[5:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=358)** So we'll say esc_url( $audio_file ).
>
> **[6:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=363)** And then we will close the shortcode.
>
> **[6:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=366)** So close quote, close square bracket, and then we'll come outside of the do_shortcode function and we will close the div.
>
> **[6:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=385)** And then we need the condition for if it is null.
>
> **[6:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=388)** So we'll write colon, empty string and then the semi-colon.
>
> **[6:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=393)** Finally, we need to return everything.
>
> **[6:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=395)** And again, we want to pre-pend and all of this starting with the $episode_info.
>
> **[6:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=399)** So we'll say return $episode_info . $audio_embed . $content.
>
> **[6:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=410)** Let's go ahead and save this, and let's see how it looks on our frontend.
>
> **[6:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=415)** So I have a post here in the admin that I've added information to, let's click update.
>
> **[7:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=422)** It looks like we have an error here.
>
> **[7:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=424)** I typoed singular.
>
> **[7:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=426)** I wrote is_sigular, so let's fix that.
>
> **[7:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=430)** Then go back and refresh.
>
> **[7:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=433)** And now we'll actually view this post.
>
> **[7:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=436)** And we have season one, episode one, and we have the audio file here.
>
> **[7:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=441)** Now, let's do the same thing for after-our-content function.
>
> **[7:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=447)** Adding custom fields after our content is going to start the same way as before.
>
> **[7:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=450)** So I will copy lines three through six here and paste them on line 24.
>
> **[7:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=458)** I will rename the callback function in the filter to after.
>
> **[7:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=462)** I'll rename our callback function after.
>
> **[7:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=465)** And we still want to check to see if this is being run on a singular page.
>
> **[7:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=470)** But now we want to grab the transcript and the transcript file.
>
> **[7:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=475)** So I'm just going to go up here and grab one of our get_post_meta calls from earlier and paste that in our function.
>
> **[8:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=484)** So we'll call this $transcript.
>
> **[8:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=489)** And this will be lil_transcript.
>
> **[8:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=494)** And then I'll copy this and paste it 'cause it's virtually the same.
>
> **[8:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=498)** We'll call this $transcript_file, and lil_transcript_file.
>
> **[8:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=505)** So for our validation check here, if transcript is not filled out, then we just won't print this section at all.
>
> **[8:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=511)** So we'll say, if ( is_null( $transcript ) ) return $content.
>
> **[8:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=523)** Otherwise, let's set up our $transcript_info.
>
> **[8:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=527)** So this will be a section that we'll call transcript.
>
> **[8:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=535)** And then the heading, Transcript.
>
> **[9:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=541)** Next up, we want to print the transcript button.
>
> **[9:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=545)** So we'll say, if ( ! is_null( $transcript_file ) ).
>
> **[9:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=553)** This could also be a tertiary assignment but we'll write it out this time around.
>
> **[9:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=558)** $transcript_info dot gets sprintf, we're running sprintf again.
>
> **[9:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=565)** And we're going to put this in a paragraph and then anchor tag gets %s, that's our placeholder.
>
> **[9:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=574)** Download PDF, and anchor tag and paragraph.
>
> **[9:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=581)** And then the string that we pass will be esc_url( $transcript file ).
>
> **[9:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=589)** And then we'll add the actual transcript.
>
> **[9:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=592)** So we'll say $transcript_info dot gets, and since this is a WYSIWYG editor, we want to add paragraphs.
>
> **[9:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=599)** So we will use the wpautop, or some pronounce it WP-autop, to our WYSIWYG editor.
>
> **[10:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=608)** So to $transcript.
>
> **[10:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=613)** And then we will close out our section.
>
> **[10:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=616)** So $transcript_info dot gets, end section.
>
> **[10:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=622)** And then we will return, and we want this to be after the content.
>
> **[10:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=627)** So return $content first, then $transcript_info.
>
> **[10:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=632)** We'll save this.
>
> **[10:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=635)** We'll go back to our browser and refresh.
>
> **[10:38](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=638)** And we have the download PDF link, and then our transcripts now.
>
> **[10:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-our-custom-fields-to-the-frontend?u=76281980&t=643)** Most themes come with a button class, so we'll just add that here, just in case, no harm, no foul.
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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=0)** - [Instructor] Since repeatable fields by nature hold more data.
>
> **[0:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=3)** There's a different way that we can process them.
>
> **[0:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=6)** We're also going to add some CSS to get the sponsors to look nice on the front end, but first to keep our filter functions clean, we'll create a separate function that sends the market back.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=17)** So in the bottom of our display.[[PHP]] file, we'll add a new function called lil_sponsor info.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=26)** Since this is a standalone function, it's not going to accept any arguments and we don't need to do a check on template either.
>
> **[0:33](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=33)** We'll create a variable called sponsors and that will get post meta, we'll pass get the ID, and then we'll send the group ID which is sponsor group.
>
> **[0:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=48)** And we'll send true.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=50)** Note that even though we're getting an array back here, we're still sending true for single value.
>
> **[0:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=55)** Now let's validate so we'll say if is null sponsors return a blank string.
>
> **[1:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=67)** We can also say return false here If we'd like assuming we do have sponsor info, we will set up the format.
>
> **[1:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=75)** And again, we'll be using sprint F here by instead of embedding the format string in sprint F, we'll set it as a variable just to make our code look a little bit cleaner.
>
> **[1:25](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=85)** And we want this to be an unordered list.
>
> **[1:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=87)** So we'll say li and then a href and here we're going to use a slightly different notation, we're going to say percent, $1 sign S what this says is always use the first string past two sprint F.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=105)** So we can use this in multiple places if we want because we're specifically referencing the first string and you'll see why that's important in a minute.
>
> **[1:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=114)** So we'll say a ref percent $1 sign S then we'll say image source gets percent $2 sign S and then alt percent $3 sign S and title.
>
> **[2:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=134)** Now, instead of passing the name of the sponsor twice, we can reference percent $3 sign S again, then we'll close our image, our anchor tag, and our list item.
>
> **[2:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=151)** And then we'll set up our sponsor output.
>
> **[2:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=157)** So sponsor output gets h3 sponsored by colon close h3
>
> **[2:47](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=167)** and then the UL class gets sponsors
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=177)** or US class UL class equals sponsors, I should say.
>
> **[3:02](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=182)** Alright, so now with our output set up and it's worth noting here that we could probably change this to double quotes so that we can add a little bit better formatting here maybe we'll do like the carriage return and then tab so that our text shows up appropriately.
>
> **[3:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=203)** And then we'll add escape characters for the double quote actually inside of the output.
>
> **[3:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=209)** So now we'll say for each sponsors as sponsor, and then we'll say sponsor output plus gets sprint F format.
>
> **[3:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=229)** And then the first string is the URL so escape URL,
>
> **[3:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=238)** and then this is going to be a key in the sponsor array so sponsor URL.
>
> **[4:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=245)** And then we'll repeat that for the logo, which is also URL so we'll say escape, URL, sponsor logo, and let's put this on a different line just so it's a little bit easier for us to read and then escape [[HTML]] here because this is just plain text name, and then we'll close out our function and then our loop.
>
> **[4:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=281)** So the last thing we need to do is close the unordered list and UL and then return sponsor output.
>
> **[4:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=298)** And then we need to add this somewhere to one of our filter functions.
>
> **[5:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=301)** We want this to be before.
>
> **[5:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=303)** So we'll add the call to the function will say, sponsors gets lil sponsor info and we don't need to pass anything to it.
>
> **[5:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=314)** And then for return, we want this to be after the episode info but before the audio embed, so we'll write sponsors and then dot.
>
> **[5:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=324)** So now our line should read, return episode_info. sponsors. audio_embed. content Let's save this, go back to our front end and refresh.
>
> **[5:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=336)** Now it looks like nothing happened, wonder why that is.
>
> **[5:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=343)** We forgot the o in sponsors.
>
> **[5:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=345)** So we'll save this and we'll refresh.
>
> **[5:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=349)** And now we have a list of logos, but let's add a little bit of CSS here.
>
> **[5:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=357)** So we are going to add a function to the bottom of our display.php file.
>
> **[6:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=364)** Honestly, the best way to do this is probably to enqueue a style but we haven't set this up.
>
> **[6:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=369)** So we can just quickly do this by printing styles in the head.
>
> **[6:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=373)** So we'll do this by saying, add action WP head, and then lil styles.
>
> **[6:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=382)** And we'll give this a priority of 99, so it's one of the last things that are done.
>
> **[6:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=387)** Then we'll say function lil styles, we'll close our PHP tag, and then we'll open it before the closing curly brace.
>
> **[6:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=397)** And this gives us a little bit of freedom to write the CSS.
>
> **[6:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=402)** So I won't walk through all of this, but I'll just say UL sponsors, display grid,
>
> **[6:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=414)** grid template columns, 1fr 1fr 1fr column gap, 25 pixels, list style type none.
>
> **[7:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=434)** And then UL sponsors image max width 100%, height auto,
>
> **[7:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=450)** and then we will close our styles.
>
> **[7:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=455)** And then if we go back out to the front page, our sponsors look a lot nicer now.
>
> **[7:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=462)** Now as for our top takeaways, well, that's going to be virtually the same as our sponsor output with one small difference.
>
> **[7:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=469)** So my challenge to you is to write a function to display the top takeaways after the content but before the transcript.
>
> **[7:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/displaying-from-a-repeatable-field?u=76281980&t=477)** You can find the solution in the exercise files for this video.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=0)** - [Instructor] In order to get more people to listen to our podcast episodes, we want to build a way to suggest other episodes with a post select box.
>
> **[0:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=9)** And the great thing about CMB2 is that it's been around for so long, that there are lots of extra plugins, libraries, and code snippets to help us out.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=17)** In this case, we're going to use a CMB2 plugin or extension called Post Search Field.
>
> **[0:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=23)** So, the first thing we'll do is download the zip from [[GitHub]], which you can find at [github.com/cmb2/cmb2-post-search-field](https://github.com/cmb2/cmb2-post-search-field).
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=35)** We will go to the code button and click download zip.
>
> **[0:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=41)** Once the zip is downloaded, we'll unzip it.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=44)** And we'll rename this to CMB2-post search.
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=53)** So here in LIL-CMB2, we'll drag this folder into the directory.
>
> **[0:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=59)** Now, VS code will ask if we want to add the folder to the workspace or copy the folder.
>
> **[1:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=64)** We want to copy.
>
> **[1:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=65)** We want to make sure it is a directory inside our plugin directory.
>
> **[1:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=69)** Once we do that, we want to add this to our plugin.
>
> **[1:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=74)** So, in LIL-CMB2, right under the CMB2 bootstrap we'll require the driver file for that area, which if we look at this, will be CMB2-post-search-field.[[PHP]].
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=94)** So, I'm just going to right click, and go to rename and then just copy this name here.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=105)** All right.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=105)** Now, we'll say require once.
>
> **[1:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=110)** We can use the dirname function like the bootstrap does, just to keep everything consistent.
>
> **[2:01](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=121)** So, we'll say dirname, file.
>
> **[2:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=126)** Now, we technically could use the constant that we defined earlier, but again, for consistency sake with the bootstrap, we'll just use dirname.
>
> **[2:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=135)** And then CMB2-post-search/
>
> **[2:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=143)** and then the file name that we just copied.
>
> **[2:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=147)** So with that bootstrap created, now if we go to our metaboxes, to episodes meta, we can add a new metabox that has the related fields.
>
> **[2:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=162)** So, let's add that in a different function.
>
> **[2:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=168)** So, we'll go to the bottom of our file, clean this up a little bit, and we'll say, add action, CMB2, admin, init.
>
> **[3:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=184)** LIL related episodes will be our callback function name.
>
> **[3:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=191)** And then we'll say function, LIL related episodes.
>
> **[3:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=200)** And first we'll create a new metabox.
>
> **[3:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=202)** Related, gets new CMB2 box, array, ID, in quotes.
>
> **[3:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=212)** ID, gets LIL related episodes.
>
> **[3:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=221)** And let's switch that to underscores just to be consistent.
>
> **[3:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=226)** Title, and then our translation function.
>
> **[3:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=232)** Related episodes, and then our namespace, which is LIL CMB2, and then objects types array, post.
>
> **[4:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=251)** All right, so now our related custom metabox is created and here's where the magic happens.
>
> **[4:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=257)** We'll say related, add field, array.
>
> **[4:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=264)** The name will also be related episodes, so we'll just copy this.
>
> **[4:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=276)** The ID will also match.
>
> **[4:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=284)** They don't have to match, and we could change this back into dashes, 'cause this is just [[HTML]] reference, but we'll leave them the same.
>
> **[4:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=293)** Type.
>
> **[4:55](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=295)** And we're going to use our new type here.
>
> **[4:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=297)** So we'll write type, post, search, text.
>
> **[5:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=307)** Post type, which is the type of post we want to include in the search.
>
> **[5:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=313)** So this is going to be post.
>
> **[5:15](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=315)** Select type will be checkbox.
>
> **[5:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=320)** You can reference the documentation over on, get hub to see what other select types there are.
>
> **[5:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=326)** And select behavior will be add.
>
> **[5:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=332)** This could also be replaced if you only want one post to be selected, but we want multiple posts to be selected.
>
> **[5:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=342)** So let's save this and then we'll go back to our posts.
>
> **[5:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=344)** We'll refresh this page, and now there should be a new box under transcripts for related episodes.
>
> **[5:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=354)** This is a box that we can type into, but if we click the search icon, we have a list of other posts, and then we can select the related ones.
>
> **[6:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=365)** Then you could see their IDs show up here.
>
> **[6:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=368)** We'll click update, and now we'll have to display them.
>
> **[6:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=371)** I do want to mention one note though, that this isn't necessarily a two-way street.
>
> **[6:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=376)** So if we go to one of the posts we selected, it's not going to show up here.
>
> **[6:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/building-a-post-select-box?u=76281980&t=381)** We'd have to explicitly select the posts on each individual post.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=0)** - [Instructor] Now it's time to display the related episodes, and we'd like to show them after the post content, but before the transcript.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=8)** Instead of tacking this onto our current after function, we'll add a new filter with a higher priority.
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=14)** So let's go to our display file at the bottom.
>
> **[0:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=19)** Well, before the CSS.
>
> **[0:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=21)** We will add a new function.
>
> **[0:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=24)** So this will be around line 78 in the exercise files.
>
> **[0:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=29)** We'll add add_filter.
>
> **[0:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=34)** It will be on the content.
>
> **[0:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=37)** We'll call this lil_related_episodes_output, and we'll give it a priority of 5.
>
> **[0:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=46)** So this will be added before our post_info_after function, even though it shows up in our code first, because we're giving this a higher priority.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=57)** So then we'll say function lil_related_episodes_output.
>
> **[1:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=66)** This is going to accept the content as an argument.
>
> **[1:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=71)** And we'll do the f not is_singular check.
>
> **[1:16](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=76)** And if it's not singular, we will just return content.
>
> **[1:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=82)** Now let's get our related episodes.
>
> **[1:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=84)** So related gets get_post_meta, get_the_ID,
>
> **[1:36](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=96)** lil_related_episodes for the key, and true for the single argument.
>
> **[1:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=105)** Then we'll make sure that it's not empty, and we are using empty here instead of null, 'cause this is a comma separated string.
>
> **[1:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=112)** Most will achieve a similar goal.
>
> **[1:56](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=116)** So we're just using empty here.
>
> **[1:58](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=118)** If empty related return content.
>
> **[2:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=125)** If you are getting mixed results with is null for some reason, depending on your [[PHP]] version, you could always change this to empty, because that's a little more explicit.
>
> **[2:18](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=138)** And then we'll prepare the output.
>
> **[2:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=139)** So we'll say related output gets h3, Related Episodes,
>
> **[2:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=149)** end h3, and then ul class related-posts.
>
> **[2:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=157)** Again, if you'd like, you could also escape and add the escape characters here.
>
> **[2:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=162)** We'll just keep this as simple as possible for now.
>
> **[2:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=166)** For format, we'll say format gets li a href %1$s.
>
> **[2:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=177)** This will be the permalink to the episode, and then %2$s will be the title of the episode.
>
> **[3:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=187)** So that's our format.
>
> **[3:09](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=189)** Now, crucially, our field saves the related posts as a comma separated list of IDs, and we want to convert that to an array, so we'll use explode.
>
> **[3:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=200)** So we'll say related gets explode.
>
> **[3:24](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=204)** If you're unfamiliar with explode, this will basically look at a string and look for specific characters and it'll separate the string on those characters and add each entry to an array.
>
> **[3:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=217)** So we'll explode on comma for the string related, and then it'll pass an array back to related.
>
> **[3:45](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=225)** So now we can say foreach related as id.
>
> **[3:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=234)** I'm purposely calling this ID, because sometimes if you name something post, it conflicts with something going on in [[WordPress]], there's usually a global post variable, and we want to avoid that.
>
> **[4:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=243)** We'll say episode get_post id, and then related_output dot get sprintf format,
>
> **[4:23](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=263)** get_permalink id and then episode post_title.
>
> **[4:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=274)** We don't necessarily have to escape this, this is already being stored in WordPress and should have been escaped on the way to us.
>
> **[4:41](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=281)** Finally, we will close the related output...
>
> **[4:49](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=289)** And then return that appended to the content.
>
> **[4:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=297)** So now we'll save this.
>
> **[4:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=299)** We'll go back to the frontend of our website... So we can see that there's a related episode section now.
>
> **[5:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/updating-the-content-output?u=76281980&t=308)** If we click on that, we'll see the two episodes we added to this one, and then if we go to a post without any related episodes, it won't show up at all.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=0)** - [Instructor] CMB2 offers a whole bevy of advanced features that are a little bit outside the scope of this introductory course, but the approach is very similar to adding fields to posts and they're worth surfacing in this section.
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=14)** So let's start with taxonomies.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=17)** Now CMB2 has fields that allow you to essentially move taxonomies and change how they're selected like radio, checkbox, or dropdown buttons.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=26)** And you can find them on the field types.
>
> **[0:29](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=29)** For example, here's the taxonomy radio field type, which will move the taxonomies into a metabox and then change them to a radio button.
>
> **[0:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=39)** Similarly, you can do radio inline, have hierarchical radio or change it to a select box again inside the metabox that you've defined.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=50)** You can also create a multi check if you want.
>
> **[0:54](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=54)** These will tap into built in taxonomies and taxonomies that you define separately through the taxonomy class in [[WordPress]], but CMB2 also allows you to add custom fields to taxonomies.
>
> **[1:10](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=70)** In the example of functions file, starting on line 601, you can see that this adds a custom metabox to the category and tag taxonomies, and then it adds two different fields.
>
> **[1:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=87)** If we put this into our plugin, here's what it looks like on the front end.
>
> **[1:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=94)** You can see there's a new section for extra info.
>
> **[1:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=97)** There's a term image that we can add or upload.
>
> **[1:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=100)** And then there is another term field.
>
> **[1:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=103)** And then these get tacked on to the taxonomy.
>
> **[1:48](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=108)** You can then access that term meta by using the get term at meta function, where you pass the term ID, the key as defined in the meta fields, and of course true for single.
>
> **[2:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/bringing-in-taxonomies?u=76281980&t=123)** One more note about this section is while we won't always be writing the code live, you'll be able to find all of the code that we reference here in the aux folder of the exercise files.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=0)** - [Instructor] One interesting aspect of CMB2 is the ability to have front end metabox support.
>
> **[0:06](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=6)** CMB2 allows you to display any defined metabox on the front end using the CMB2 metabox form function, which is defined in the [[GitHub]] Wiki.
>
> **[0:17](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=17)** As they know, you'll need to change the cmb2_admin_init hook to cmb2_init instead so they could be added anywhere in [[WordPress]], not just the admin.
>
> **[0:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=27)** To do that in our code, we could go to the episodes-meta.[[PHP]] file and change that first hook to cmb2_init, giving us access to the episodes_metabox.
>
> **[0:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=42)** Adding this support to a singular template where the post type is supported will create a form allowing people to submit that data.
>
> **[0:51](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=51)** The documentation also shows you how to turn this into a shortcode so that it can be embedded anywhere in the content.
>
> **[1:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=60)** But if, for example, you wanted to make it easy for admins to edit the content in the front end, you could do something like this.
>
> **[1:07](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=67)** This code can be found in aux, frontend-boxes.php.
>
> **[1:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=72)** We'll write add_filter and then we'll say the_content.
>
> **[1:19](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=79)** We'll call this lil_fe_box.
>
> **[1:22](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=82)** And we'll give it a priority of 100 just so it shows at the bottom of the content.
>
> **[1:28](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=88)** Then we'll define our function.
>
> **[1:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=90)** Lil_fe_box, which accepts the content as an argument.
>
> **[1:39](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=99)** So we'll do a check with the function current_user_can.
>
> **[1:42](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=102)** So if not current_user_can, edit_post.
>
> **[1:52](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=112)** And then we'll get_the_ID of the post.
>
> **[1:59](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=119)** Then we will just return the content.
>
> **[2:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=124)** Otherwise, we will return the content dot
>
> **[2:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=133)** and then the cmb2 metabox form but because we don't want it printed immediately, there's another function that just returns the output and that is cmb2_get_metabox_form.
>
> **[2:30](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=150)** We need the ID of the episodes_metabox, which is going to be episodes_metabox.
>
> **[2:37](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=157)** So we'll add that here.
>
> **[2:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=160)** And then the ID of the post we want to display it on.
>
> **[2:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=164)** Now, this is going to work both ways.
>
> **[2:46](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=166)** This is going to be the post that's currently being displayed on and then the ID of the post the metaboxes belong to.
>
> **[2:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=173)** We'll save that and go back to our front end, and if we scroll down, after the transcripts, we have all of our fields available and editable on the front end here.
>
> **[3:05](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=185)** If I log out, and we go back to the front end, those fields are not available.
>
> **[3:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/frontend-meta-box-support?u=76281980&t=194)** And while this is an interesting use case, depending on what you need, there may be better solutions by using form builders like Gravity [[Forms]] or WPForms.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=0)** - [Instructor] CMB2 also allows you to create your own admin pages and add fields to it, creating a sort of theme options page.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=8)** This is really helpful if you're creating a full-blown plugin that requires its own group of settings.
>
> **[0:14](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=14)** However, as the customizer has taken over and full site editing is poised to be the new way to customize the theme, this feature has more niche roles.
>
> **[0:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=26)** You can see in the example snippet from the Wiki, the focus here is on a custom color, better handled by the customizer these days.
>
> **[0:34](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=34)** But for instance, in our podcast plugin, if we wanted to make it easy to add a donation link to every episode of the homepage, this might be the place to add it.
>
> **[0:44](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=44)** To access the data, we can't use get_post_meta because there's no post associated.
>
> **[0:50](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=50)** We need to use CMBs custom return function of CMB2_get_option.
>
> **[0:57](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=57)** Then we would return the option key from the meta box we defined as well as a default value.
>
> **[1:04](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/creating-a-theme-options-page?u=76281980&t=64)** We can then use that data on the backend as well as in front end areas using hooks or creating custom short codes or blocks.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=0)** - [Narrator] One of the compelling features for CMB2 for people who run sites with lots of users, or who want to create custom profiles, is the ability to add custom fields to users.
>
> **[0:11](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=11)** For example, you might want to add links for social profiles or in our case podcast specific roles like host, producer or editor.
>
> **[0:20](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=20)** And just like most things in CMB2 there is sample code in the snippet library specifically in the example functions file starting on line 508.
>
> **[0:31](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=31)** For our plugin, we've created a file called user meta in the aux folder, and we have included two different fields here.
>
> **[0:40](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=40)** We define the metabox for the edit user profile screen as used in the example profiles and we kept the Twitter URL and then we added a new text field called podcast role.
>
> **[0:53](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=53)** If we save this and go back to our admin and refresh the page, we can scroll down and see the new fields.
>
> **[1:03](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=63)** So we can add a Twitter URL and a podcast role, and that information gets saved.
>
> **[1:12](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=72)** Now, if you want to display that information on the front end you could use get user meta which accepts a user ID, the key as defined by CMB2, and then the single argument which would be true.
>
> **[1:26](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/adding-fields-to-user-profiles?u=76281980&t=86)** In many cases, you'd probably want to get the author of the post, not necessarily the current logged in user, but that all depends on what information you want to display.

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
> **[0:00](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=0)** - [Joe] Congratulations, you've gotten a good look at CMB2 and how to use it, as well as some extra features to explore on your own.
>
> **[0:08](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=8)** The CMB2 Wiki over at [[GitHub]] will serve as a great resource for you.
>
> **[0:13](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=13)** If you want to continue your [[WordPress]] journey, you should check out the "Become a WordPress Developer" learning path.
>
> **[0:21](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=21)** You can also check out the Learning [[PHP]] course to get a deeper understanding of PHP if you'd like.
>
> **[0:27](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=27)** Finally, I'd love to hear from you about how you're using CMB2.
>
> **[0:32](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=32)** You can always find me on Twitter @JCasabona.
>
> **[0:35](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=35)** If you'd like to learn more from small business owners and industry experts, check out my podcast, "How I Built It" over at howibuilt.it.
>
> **[0:43](https://www.linkedin.com/learning/using-custom-meta-boxes-in-wordpress/next-steps?u=76281980&t=43)** Thanks so much for watching and until next time, get out there and build something.

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