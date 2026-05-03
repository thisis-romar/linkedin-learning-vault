---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: wordpress-custom-post-types-and-taxonomies-3
url: "https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3"
duration_minutes: 129
duration: 2h 9m
level: Advanced
updated: 8/8/2019
learners: 5709
skills:
  - WordPress
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHOaQ6P8g5Ihg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118357194?e=2147483647&amp;v=beta&amp;t=-ky-6r_5sp3HDdDg4CJJL442J090Pyvyvfp15FHzmWw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your Skills in WordPress]]'
prev_courses:
  - '[[WordPress- Internationalization]]'
next_courses:
  - '[[Using Custom Meta Boxes in WordPress]]'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":3,"total":8,"prev":"WordPress- Internationalization","next":"Using Custom Meta Boxes in WordPress"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/WordPress-%20Custom%20Post%20Types%20and%20Taxonomies.md)

![WordPress: Custom Post Types and Taxonomies](https://media.licdn.com/dms/image/v2/C4E0DAQHOaQ6P8g5Ihg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118357194?e=2147483647&amp;v=beta&amp;t=-ky-6r_5sp3HDdDg4CJJL442J090Pyvyvfp15FHzmWw)

# WordPress: Custom Post Types and Taxonomies

> WordPress is a powerful content management system—but it shines with customization. For example, there are seven default post types, organized using built-in taxonomies like categories and tags. But you can display different types of content according to your own rules by creating custom post types and taxonomies. Best of all, you can customize these elements without a lot of code. In this course,

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3) | 2h 9m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Create better content](#create-better-content)
  - [What you should know](#what-you-should-know)
  - [Demo project overview](#demo-project-overview)
- [**1. What Are Custom Post Types and Taxonomies?**](#1-what-are-custom-post-types-and-taxonomies) (3 videos)
  - [What are custom post types?](#what-are-custom-post-types)
  - [What are custom taxonomies?](#what-are-custom-taxonomies)
  - [Where does the code belong?](#where-does-the-code-belong)
- [**2. Creating Custom Post Types without Code**](#2-creating-custom-post-types-without-code) (5 videos)
  - [The no-code solution](#the-no-code-solution)
  - [Creating custom post types](#creating-custom-post-types)
  - [Creating custom post type labels](#creating-custom-post-type-labels)
  - [Custom post type capability settings](#custom-post-type-capability-settings)
  - [Displaying your post type on the front end](#displaying-your-post-type-on-the-front-end)
- [**3. Creating Custom Taxonomies without Code**](#3-creating-custom-taxonomies-without-code) (4 videos)
  - [Creating custom taxonomies](#creating-custom-taxonomies)
  - [Creating custom taxonomy labels](#creating-custom-taxonomy-labels)
  - [Customizing the taxonomies' settings](#customizing-the-taxonomies-settings)
  - [Importing and exporting your data](#importing-and-exporting-your-data)
- [**4. Coding Your Own Custom Post Types**](#4-coding-your-own-custom-post-types) (9 videos)
  - [Creating your plugin](#creating-your-plugin)
  - [Building a basic custom post type](#building-a-basic-custom-post-type)
  - [Customizing your post type labels](#customizing-your-post-type-labels)
  - [Customizing your post type settings](#customizing-your-post-type-settings)
  - [Activating the REST API on your post type](#activating-the-rest-api-on-your-post-type)
  - [Creating a post with your post type](#creating-a-post-with-your-post-type)
  - [Challenge: Create an events post type](#challenge-create-an-events-post-type)
  - [Solution: Create an events post type](#solution-create-an-events-post-type)
  - [Extending post types with custom fields](#extending-post-types-with-custom-fields)
- [**5. Coding Your Own Custom Taxonomies**](#5-coding-your-own-custom-taxonomies) (6 videos)
  - [Building a basic custom taxonomy](#building-a-basic-custom-taxonomy)
  - [Creating an advanced custom taxonomy](#creating-an-advanced-custom-taxonomy)
  - [Activating the REST API for your taxonomy](#activating-the-rest-api-for-your-taxonomy)
  - [Adding taxonomy terms to your post types](#adding-taxonomy-terms-to-your-post-types)
  - [Challenge: Make location taxonomy](#challenge-make-location-taxonomy)
  - [Solution: Make location taxonomy](#solution-make-location-taxonomy)
- [**6. Creating Custom Post Type Templates**](#6-creating-custom-post-type-templates) (7 videos)
  - [The WordPress template hierarchy](#the-wordpress-template-hierarchy)
  - [Setting up your child theme](#setting-up-your-child-theme)
  - [Creating a single custom post template](#creating-a-single-custom-post-template)
  - [Modifying the single template header](#modifying-the-single-template-header)
  - [Creating a custom post archive template](#creating-a-custom-post-archive-template)
  - [Adding a custom taxonomy to a template](#adding-a-custom-taxonomy-to-a-template)
  - [Creating a custom taxonomy template](#creating-a-custom-taxonomy-template)
- [**7. Custom Post Types and Taxonomies in Other Templates**](#7-custom-post-types-and-taxonomies-in-other-templates) (5 videos)
  - [Custom post types on the front page](#custom-post-types-on-the-front-page)
  - [Organizing your child theme](#organizing-your-child-theme)
  - [Creating a custom loop for post types](#creating-a-custom-loop-for-post-types)
  - [Displaying the custom loop](#displaying-the-custom-loop)
  - [Styling your custom loop](#styling-your-custom-loop)
- [**8. Moving Your Post Types to Your Theme**](#8-moving-your-post-types-to-your-theme) (3 videos)
  - [Warning: Custom post types in themes](#warning-custom-post-types-in-themes)
  - [Adding custom post types to themes](#adding-custom-post-types-to-themes)
  - [Automatically flushing rewrite riles](#automatically-flushing-rewrite-riles)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create better content](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=0)** - [Joe] [[WordPress]] is a [[Content Management]] system that drives millions of websites, from blogs to [[E-Commerce]] stores that process thousands of transactions per a day. By some estimates, it powers over 30% of the web. But out of the box, WordPress is pretty bare bones. To create custom content and site functionality, you'll need a little extra. Custom post types and taxonomies allow you to create your own content, which can better be organized and provide more useful data to search engines like [[Google]]. I'll show you how to extend WordPress by creating your own custom post types for content, and custom taxonomies for organizing that content. Then, we'll create a child theme to better display that new content. We'll also learn how to do a lot of this without code. Hi, I'm Joe Casabona, a front end web developer and WordPress educator. So join me in my [[LinkedIn]] Learning course about WordPress: Custom Post Types and Taxonomies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[Content Management]] (1), [[E-Commerce]] (1), [[Google]] (1), [[LinkedIn]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course we're going to build out our own custom post types and taxonomies. We're going to build a plug-in, as well as modify a theme. Because of that, you should be familiar with [[HTML]], CSS and [[PHP]], as well as how to create how to create [[WordPress]] child themes and plugins. You should also have a local development environment that runs WordPress. You also need to know how to use WordPress in general. If this is your first WordPress course I recommend you take a look at [[Microsoft Word|Word]] Press 5 Essential Training. You'll get to learn the ins and outs of how to use WordPress, the block editor, installing and activating themes and plugins and more. In this course I will be using the 2019 theme, which comes installed with WordPress by default. We're going to create a child theme so we can add our new post type templates. We will go over the basics, but if you really want to understand child themes in WordPress I recommend you checking out the child themes course in our library. For local development I will be using Local by Flywheel. Depending on your platform we have several courses on local [[Wordpress Development]]. While Local by Flywheel works on both [[Windows]] and Mac, you can use any development environment you like. If you're looking for alternatives, for Windows, you can check out installing and running WordPress WAMP. If you're on a Mac
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=94)** there's installing and running WordPress MAMP. With our theme and local environment set we're ready to start learning about custom post types and taxonomies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (9), [[Windows]] (2), [[HTML]] (1), [[PHP]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (1), css (1), php (1), wamp (1), mamp (1)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor] (1)

#### [Demo project overview](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=0)** - The possibilities for creating different websites with custom post types is endless. In this course, we're going to create a simple business directory website. We'll create a custom post type called Business that uses all of the built-in features of [[WordPress]] without having to rely on any outside plug-in help or custom metafields. Our businesses will have the standard content editor field as well as a featured image. We'll also create two taxonomies, size and locations. This will help us organize our businesses in a unique way. Our post types and taxonomies will be in a sample plug-in, which will be downloadable with the exercise files for this course. To integrate our post types and taxonomies into our theme, we'll also create a child theme based on Twenty Nineteen. We're choosing Twenty Nineteen because it has great support for the new block editor, and it's sure to use all of the best practices that come along with building a WordPress theme. We're going to create single and archive templates for our post types and taxonomies as well as make sure our new post types show up in search results and on the front page. If you follow along, by the end of this course, you'll have a site similar to what you see here on screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - the (1)


### 1. What Are Custom Post Types and Taxonomies?

[↑ Back to Table of Contents](#table-of-contents)

#### [What are custom post types?](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=0)** - [Instructor] One of the most important additions to [[WordPress]] that helped it evolve from a single blogging platform to a full-fledged [[Content Management]] system is the addition of different types of data. Before we dive into the code, it's important that you understand what custom post types are. Out of the box, WordPress has different post types already defined. The most common ones you interact with are posts and pages. Understanding how these work will help us later when we create our own custom post types. Posts are what you normally create on WordPress. These are most akin to blog articles. They are normally organized in reverse-chronological order, so that the last post goes first in the index and then you see the [[Representational State Transfer (REST)|rest]] of the posts below. They are non-hierarchical, meaning posts do not have parent/child relationships. Instead, they're organized based on the author that created them, the date they were published, and they also use categories and tags. Every post must have a category and all posts can have tags. In contrast, pages are single, individual pieces of content that can be displayed in parent/child relationships, as in, one can be a subitem of another, and you usually see these in the main menu. Pages don't have indexes and they don't have categories and tags.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=95)** The only way to get to them is through a direct link and that's why they usually appear in the main menus. Posts are normally used for recent or time-sensitive information like news items and articles. Pages are used for static content that is rarely updated and is usually made to be available to help visitors understand information about the site. When you create a custom post type, you can create one that acts like either a post or a page. Whichever one you choose, the new custom post type will inherit all of the features of either posts or pages. You can set this post type to act like a post and it could be organized by categories and tags or any custom taxonomy or a combination of all of these. Custom post types have separate indexes and you can also create custom index templates, which we'll do later in the course. Custom post types can have all of, a combination of, or none of the standard features that you find in posts and pages. And you can set this up when you create your custom post type. The main takeaway here is that custom post types allow you to create your own type of unique content. The term post type is a bit confusing because there's a post type called post. An easier way to think about them might be
>
> **[3:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=191)** as custom content types. Posts and pages are types of content and we can create our own content types like businesses, [[Microsoft Products|products]], and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Content Management]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What are custom taxonomies?](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=0)** - [Instructor] Here we're going to take a look at custom taxonomies. So, it's important to understand what a taxonomy is. The definition of a taxonomy is a scheme of classification. Basically, this means that a taxonomy is a way to organize data, which allows you to relate one item to other similar items in a hierarchical or non-hierarchical group. To give you a real-life example, we can take a look at one of my favorite websites, Pen Chalet. It's got different types of [[Microsoft Products|products]] in the top navigation: fine pens, inks, accessories, and more. These are akin to a product taxonomy but if we dig deeper and look at, say, fine pens there are different types of fine pens, a further taxonomy or classification. And if we click on fountain pens we'll see even more taxonomies for brand, type, price, and other ways that we can classify and organize these fountain pens. In [[WordPress]], we have two default taxonomies that we can use all the time. The first is categories, which are mandatory for posts. Every post must have a category. Categories are displayed in a hierarchical system so you could have parent and child relationships between them, and if you go to a parent category
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=95)** you'll see all the posts underneath the parent category and underneath any of the children of that parent. Categories are akin to Pen Chalet's product types. Tags, on the other hand, are optional. You don't need to use them and you can use them whenever you want. They're non-hierarchical meaning one tag does not relate to another tag in any way. And they are a secondary organizational method, much like the filters for brand and price. When you create custom taxonomies you can create either hierarchical taxonomies like categories or non-hierarchical categories like tags. These taxonomies can be applied to one or several post types and you can also make the custom taxonomies apply to your regular posts within your site. Custom taxonomies can have custom indexes and archive templates, so you can display them differently from how you would display the category and tag indexes. Custom taxonomies are usually displayed alongside categories and other [[Metadata]] when you look at a post and, finally, custom taxonomies also allow for more advanced organization of your content. In our demo project we'll have two taxonomies. One for the size of the business, which will be a tag taxonomy.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=189)** And one for location, which will be more like a category. Both of these will help us organize our business directory to help people find the business they are looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[WordPress]] (1), [[Metadata]] (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Where does the code belong?](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=0)** - [Instructor] [[WordPress]] does an incredibly good job of separating form from function. Primarily WordPress is for adding and editing content. If we want to control the design, we get a new theme, something that isn't married to WordPress Core or the content inside WordPress. If we want to add more features like a slider or contact form, we get a plugin. That means that content, design and features can be completely separate from each other. As a result, we need to take into consideration where the code for our custom post types and custom taxonomies belong. For a long time, these were added to the theme. If your theme has specific templates for a custom post type, it seemed to make sense that you'd include the custom post types there as well. However, a problem arises with this approach. If you decide to change the theme, you're effectively disabling content because it's attached to that theme. Instead we'll need to take a two-pronged approach, we'll create a plugin that houses our custom post types and custom taxonomies. This gives us the most flexibility on the theme as well. We won't need to make other arrangements to keep the content otherwise. We'll also create a child theme in order to add the new template we need to create to display our custom post types and taxonomies the way we want.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=94)** A good rule to go by generally speaking is that if our code affects the display of the site, like custom templates or the design, then we should add the code to our theme. If our code adds features, we make it a plugin. With that in mind, let's get to creating our custom post types and custom taxonomies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **CLI Commands:** make (3)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 2. Creating Custom Post Types without Code

[↑ Back to Table of Contents](#table-of-contents)

#### [The no-code solution](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=0)** - [Instructor] While we're going to write our own custom post types and taxonomies from scratch with code, it's worth noting that there are a few non-code solutions we can explore. The main benefit is that you can get up and running quickly, without a coding environment and you can be fairly confident that the post types will work right out of the box. There are two popular plugins that will help us create custom post types and taxonomies without code. Custom Post Types UI and Pods. Both are popular choices and free from the [[WordPress]] Plugin repository, but we're going to use Custom Post Types UI for this video. You can start by going to plugins, add new, and searching for Custom Post Types UI. This plugin is the one by WebDevStudios. Click install now, and then activate. Once you activate, you'll be brought to a welcome screen telling you all about the latest version of the plugin. You'll also notice a new section in your WordPress dashboard with areas for adding new post types, adding new taxonomies, and the registered types and taxonomies you have, as well as some additional tools and support. These screens are how you'll create your custom post types and taxonomies without code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom post types](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=0)** - [Instructor] Custom Post Types UI gives us a robust interface for creating custom post types and taxonomies without the need for writing a bunch of code. Let's start by creating our own business post type. If we click on CPT UI, Add/Edit Post Types, you'll see a number of settings to define a custom post type. Since we don't have any defined yet, we'll be taken directly to the Add New Post Type tab and no other options appear. We're going to take a look at the basic settings first. These are required. The additional labels, which we'll look at later, are optional, because they can be determined from the basic settings. Let's go ahead and create a simple post type called business. We'll fill in the post type slug, which will be used for various queries as well as the URL. We'll add the plural label which will be businesses and we'll add the singular label which will be business. These are the only required settings so we can add the post type. Once we do add the post type, you'll notice a new section in the admin called businesses. Make note of the pin icon, because we'll be changing that later. You'll also notice some new tabs across the top. These tabs allow you to edit, view, and import and export your post types and taxonomies.

> [!info]- Semantic Content
>
> **Env Vars:** cpt (1), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom post type labels](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=0)** - [Instructor] If we go to CPTUI add/edit post types and then click the edit post types tab, we'll be able to edit our business type. While we configure the basic settings, we have lots of flexibility for what the user sees in the admin. Under additional labels, there are lots of fields, thankfully with descriptions and examples for everywhere our post type could show up and needs to be labeled. Let's walk through some of these settings. There are a lot. Luckily, if we don't define a label, [[WordPress]] is smart enough to use either the singular or plural label based on the context. But in certain areas, or for certain post types, it might make sense to be a little more specific. In this instance, we can generally use the singular or plural label everywhere. A helpful exercise would be to insert businesses or business into the example to see if it makes sense, and if it doesn't, we should change it. So, for view item, view business, or view items, view businesses, makes perfect sense. There are, however, a few good opportunities for us to use custom labels. For example, in search item, we can change this to find a business. Similarly, for our featured images, we're going to be using the business logos. So, we can change the labels to correspond with that. We can make featured image, business logo,
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=98)** set featured image to set business logo, remove featured image to remove logo, and use featured image to use logo. The last label we'll change is archives. We'll change that to business directory. With that, let's save our post type. As you move throughout the WordPress dashboard, keep an eye out for labels that you think can be better worded. We can always edit our post type from this screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** cptui (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Custom post type capability settings](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=0)** - [Instructor] With all of our labels defined, let's scroll down to Settings. These primarily have to do with displaying and searching for the post type. We have great descriptions and default values for each. Most we'll keep at that default value, but let's walk through them. Public, Publicly Queryable, and Show UI all have to do with whether users can see and query the post type on the front end and in the dashboard. This might sound a bit strange to include, and in most cases, we definitely do want users to interact with our post types, but sometimes there are instances where the post type actually supports another function. Examples of this, in core, are revisions, menus, and custom CSS. Show in Nav Menus let's us decide if we want users to add out post types to the menu areas. Show in [[Representational State Transfer (REST)|REST]] API will enable the REST API. This is necessary if you want to make the data accessible outside of [[WordPress]]. As well if you want to use the block editor. The following settings allow you to customize the REST API output, if you like. Has Archive let's you create an archive page for the post type. This is set to false, but we're going to set it to true. We can also customize the slug. Since our slug for the post type is business, we'll set this slug to business.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=96)** We can also exclude this post type from the general search. This is set to false, and we'll keep it that way. Next is Capability Type. Our post types can take on the properties of a post or a page. By default, this plugin chooses post, and we'll keep it that way. Hierarchical allows us to set a parent child relationship. Since we don't want our business to have child businesses, we'll leave this as false. Similarly, we'll leave the Rewrite rule to true. This allows WordPress to make our post type URLs pretty. With Front will require our post types slug to be used in any rewrite structure. The Query Var is used in custom code. We'll keep everything default here as well as the Menu Position and Show in Menu. The Menu Icon can use any Dashicon, the font icon set that comes with WordPress, or a custom image. You can find a full list of the Dashicons over at developer.[wordpress.org](https://wordpress.org). We are going to use the dashicons-building icon.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=175)** Finally, we can enable support for some built in WordPress functionality. We'll leave Supports as is. Using only the title, the editor, and the featured image. If there's custom functionality built into your WordPress site, you can add Custom Supports in the next field. And lastly, we'll enable the built-in tags taxonomy for this post type. Once we save, the main visible difference is the pin icon has changed to a building, but rest assured, these settings control a lot of under the hood features to keep our website and post type running smoothly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6), [[Representational State Transfer (REST)|Rest]] (4)
> **Env Vars:** rest (3), api (3), css (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Displaying your post type on the front end](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=0)** With all of our settings in place, let's test our custom post type and see how it looks on the front end. First, we'll add a new business. Go to Businesses, Add New. This will look near exact to the post editor interface. Since we have the [[Representational State Transfer (REST)|REST]] API enabled, we see the block editor. The main difference is our custom labels. You'll notice, for instance, that the featured image box uses the logo labels we set. Let's go ahead and add a business name, and then we'll add some text about the business.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=45)** We'll add a featured image. And then we'll click publish. When we click View Business, you'll notice that our business uses the default single.[[PHP]] template for our theme. We'll learn how to customize that later. Also take note of the URL. Notice that the slug is business/business name. That's due to our rewrite rule and has front settings. Finally, if we change the slug to /businesses, we'll be taken to the archive. Something to point out here is that we don't see our business directory archive label. That's strictly for nav menus as each theme controls what's displayed on the archive pages. This is something else that we can change in code. We've successfully created our first custom post type. I encourage you to click around the dashboard to see where our post type pops up and how it behaves relative to post and page types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[PHP]] (1)
> **Env Vars:** rest (1), api (1), url (1)
> **File Paths:** single.php (1)
> **CLI Commands:** php (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** for instance (1)


### 3. Creating Custom Taxonomies without Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating custom taxonomies](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=0)** - [Instructor] Custom Post Types aren't the only thing that Custom Post Types UI allows us to create. We can also create Custom Taxonomies. Let's create a Size Taxonomy now to organize our businesses. If we click on CPT UI, Add/Edit Taxonomies, you'll see a number of settings to define a Custom Taxonomy. Since we don't have any defined yet, we'll be taken directly to the Add New Taxonomy form and there are no other tabs that appear at the top. We're going to take a look at the Basic Settings first. These are required, the additional labels, which we'll look at later, are optional. They can be determined from the Basic Settings. Let's go ahead and create a simple Taxonomy called size. We'll set the Slug to size, we'll set the Plural Label to Sizes and we'll set the Singular Label to Size. Now let's attach our Taxonomy to a Post Type. You can see that Posts, Pages and Media are all included in [[WordPress]] Core and then we have the businesses Custom Post Type that we created. Let's go ahead and check that now. These are the only required settings so we can save now, leaving the [[Representational State Transfer (REST)|rest]] of the options at their defaults. Let's go ahead and click Add Taxonomy. Once we do that, you'll see some new tabs across the top and if we hover over businesses, you'll see the Sizes Taxonomy has been added. If we click Add New you'll see there is a new
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=95)** option on the right for Sizes Taxonomy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** cpt (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom taxonomy labels](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=0)** - [Instructor] If we go CPT UI, and click on Add/Edit Taxonomies, and then click on the Edit Taxonomies tab, we'll be able to edit our sizes taxonomy. While we configured the basic settings, we have lots of flexibility for what the user sees in the admin. Under Additional Labels, there are lots of fields thankfully with descriptions and examples for everywhere our taxonomy could show up. Let's walk through some of these. Just like with post types, if we don't define a label, [[WordPress]] is smart enough to use an appropriate one. In some instances, that will be the singular or plural label. It could also be the [[Microsoft Word|word]] tag or category based on how we characterize our taxonomy. In the instance of our sizes taxonomy, we can generally use the singular or plural label everywhere. A helpful exercise would be to insert sizes, size or business size into the example to see if it makes sense. If it doesn't, we should change it. It's also worth noting that some of these labels will only apply based on the Advanced settings. For example, parent item colon will only apply if we make our taxonomy hierarchical. While the words sizes or size will make sense for pretty much every label here, let's make a couple of changes. If we scroll down to Choose From Most Used,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=97)** we can change this to choose from the most common sizes.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=108)** Item List Navigation can be changed to Browse Business By Size. With that, let's go ahead and save our taxonomy. As you move throughout the WordPress dashboard, keep an eye out for labels for your taxonomy that you think can be better worded. We can always edit the taxonomy from this screen later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** just like (1), for example (1)
> **Env Vars:** cpt (1)
> **Speakers:** - [instructor] (1)

#### [Customizing the taxonomies' settings](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=0)** - [Narrator] With our labels defined, let's scroll down to settings. These primarily have to do with displaying and searching for the taxonomy. Again, we have great descriptions and default values for each. Most we'll keep at the default value. Let's go ahead and walk through them. Public, Public Queryable, and Show UI all have to do with whether users can see and query the taxonomy, both on the front end and in the dash board. Hierarchical allows us to create parent/child relationships between the taxonomy terms. For example, if we wanted a size of big and then a child size of 1000 plus employees, we can do that here. We are going to keep it at the default value of false. Show in menu determines if the taxonomy will show up in the admin menu under the post type it's associated with. Show in nav menu allows us to make the taxonomy available for selection in the navigation menus. Query Var is used in custom code. We'll leave everything at the default here. Rewrite is whether or not [[Microsoft Word|Word]] Press should use rewrites for this taxonomy, and the Custom Rewrite Slug is the custom portion of the URL we want to use. We are going to keep this at the default of size. Show Admin Column allows us to show the taxonomy when it show up on the View Post Type listings. Let's set this to true.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=97)** Show in [[Representational State Transfer (REST)|REST]] API allows us to expose the taxonomy information outside of Word Press, as well as makes it show up in the block editor. We'll leave the other REST API options at the default. We'll also set Show in quick/bulk edit panel to true. So that we can bulk add sizes to businesses. Finally, we can set the callback function for the taxonomy's metabox here if we want to apply some custom code to it from a theme or plugin. We'll leave this as is. Let's go ahead and click save taxonomy. The main differences you'll notice here are that on the businesses listings admin page, we'll see sizes show up. Similarly, if we click edit, after selecting businesses, the sizes show up there as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** rest (2), api (2), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Importing and exporting your data](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=0)** - The last area of this Plug-in to point out is the Tools area. If we hover over CPT UI and click on Tools, you'll see we have the ability to Import and Export Post Types and Taxonomies. This Plug-in uses both [[JSON]] and [[PHP]] for exporting and JSON for importing. Both Post Types and Taxonomies have their own tabs. So we can grab the export JSON individually for each. With the export JSON, each individual Post Type or Taxonomy is wrapped in JSON, but it's all in the same export field. So you can choose to copy all of it, or select individual exports. To import JSON, paste the JSON from the export field into the import field on the new site. It's important to note that if we do import JSON through this Plug-in, it will overwrite previously registered settings. If we go to the Get Code tab, you can find PHP generated for the Post Types and Taxonomies we registered. The first box includes all custom Post Type code that's generated. We can copy this and paste it into our theme or Plug-in. Then, we have the code for each individual Post Type and the same goes for Taxonomies. We can get all of the Taxonomies as one piece of code, or each individual Taxonomy as its own piece of code.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=97)** Custom Post Types UI provides a great way to generate the most tedious code without having to write it yourself. Then you can copy the code, paste it into your own Plug-in and disable and delete the Plug-in. And again, you can do that for all Post Types and Taxonomies or just individual ones. This was a quick look at one No-Code solution for generating Custom Post Types and Taxonomies. Plug-ins like Custom Post Type UI provide a great way to get introduced to all of the options for defining Post Types and Taxonomies. And even gives us a nice starting point for writing our own code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[PHP]] (2)
> **Env Vars:** json (8), php (2), cpt (1)
> **CLI Commands:** php (2), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Warnings:** note that (1)
> **Speakers:** - the (1)


### 4. Coding Your Own Custom Post Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating your plugin](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=0)** - [Instructor] As we write the code to add custom post types and taxonomies to our [[WordPress]] site, there are two tasks we need to accomplish. Add the code for our custom post types and taxonomies, and modify our theme to add templates for the newly created custom post types and taxonomies. These new post types and taxonomies will go in a separate plugin. Which will be used to control the content. This ensures that our code is theme agnostic, or at least the parts that can be. Open up your favorite code editor and head over to /wpcontent/plugins in your [[Wordpress Development]] site. Now we're going to create a folder in the plugins folder called lil-post-types. Anytime we need to prefix something, we'll use lil for [[LinkedIn]] Learning. Inside of the lil-post-types folder, we're going to create a new file with the same name. Lil-post-types.[[PHP]]. This will be the driver for our plugin. The first thing we'll do is write the opening PHP tag and then add our plugin definition comment block, which we can get from the exercise files. So we'll copy this whole block here, and then we'll paste it into our file. This is what shows up in the WordPress dashboard, and includes things like the plugin name and URL,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=96)** the description, the author, and more. Next we're going to make sure that our plugin isn't accessed directly. So we'll write if not defined, and then we're looking for a specific WordPress constant here called WPINC. If this constant is not defined, we are going to write the directive die, and again, what we're saying here, is if a WordPress isn't accessing this file, then don't let anything happen with the file, and it's a simple security measure. The last thing we're going to do is write some constants, and we can get those constants from the exercise files as well. So we'll copy all of the define lines here, and we'll paste them into our file. These are simple constants that generally come standard with a lot of plugins, and we're defining the version, the domain, and the path. Most importantly here is LILPATH, which is grabbing the plugin directory. This is going to come in handy as we continue to write out our plugin. So with that, let's go ahead and save our file. If we go to Plugins, Installed Plugins, you'll see the newly defined plugin we created, and if we click activate, our plugin becomes active. But since we haven't added any other code, there are no noticeable differences
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=188)** to our WordPress dashboard. With our plugin defined, it's time to start adding our custom post type code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[PHP]] (2), [[Wordpress Development]] (1), [[LinkedIn]] (1)
> **Env Vars:** php (1), url (1), wpinc (1), lilpath (1)
> **CLI Commands:** php (2), make (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** lil-post-types.php (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Building a basic custom post type](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=0)** - [Instructor] Now that our plugin is defined, let's go ahead and create our custom post type. First, we'll start with the basic definition of a custom post type, and then we'll move on to the settings and labels area. One note is that if you're using the same [[WordPress]] install that you used with Custom Post Types UI for your own plugin, you should deactivate Custom Post Types UI in order to avoid conflict. If you want to use it as a reference, make sure to grab that export or set up a completely different development site for the plugin and theme so we don't lose the work or avoid conflicts. The first thing we're going to do is in our lil-post-types plugin, we're going to create a new directory called post-types. This will be where all of our post types code is included. And inside that folder, we're going to create a new file called register. Now before we start adding code to register.[[PHP]], we're going to go back to lil-post-types.php, and we're going to add this line to the end of the file. Require_once LILPATH, that's LILPATH in no quotes, that's the constant that we have defined in our plugin. A period for concatenation, and then slash post dash types slash register dot PHP. This will ensure that our post-types file
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=95)** is included in the plugin. Going back to register.php, we'll write the opening PHP tag. For the basic definition of this custom post type, we're going to start with the slug, the plural, and the singular labels. Now since our post types need to be registered based on a WordPress action, we'll need to create a callback function. We'll call that function lil_register_business_type, so we'll write that out here. And we will add the action call later. For now, let's start with some setup for our function. We're going to create two associative or key value arrays, one for the labels, and one for the arguments. The labels is where all of our labels go, and for now, we only need two. For the name, which is going to be the same as the plural label, and the singular name. So we'll create a new variable called labels, and we'll make this an array. We're doing this because it's going to make our code a little bit cleaner as we continue to add the labels and arguments. So the key for the plural name is name, and then we're going to add the string that we want to use, which is going to be Businesses.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=188)** Notice here I'm wrapping our string in the [[Internationalization]] function that's built in to WordPress. I'm also using the LILDOMAIN as the text domains. This ensures that if someone's using a translated version of WordPress, our labels will be properly translated. Now we'll do the same thing for the singular name, which is going to be singular underscore name, and we're going to make that Business.
>
> **[3:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=226)** All right. So with our labels array set up, let's set up the arguments array as well. We're going to call this args. This is going to be an array as well. And the first key is going to be for the labels, and we're going to pass our labels array to it. The second key is going to be for the public argument. This is false by default, so we'll need to make it true to expose our custom post type on the WordPress admin and the front end. And finally, we are going to call the register_post_type function, which will register our custom post type. So we'll write register_post_type, and this accepts two arguments, a slug, which is going to be business, and an array of arguments, which we've already named args. So we'll save this file, and then the last thing that we need to do is go back to lil-post-types.php, and right under the require_once call, we're going to add a new action. We're going to say add_action init, which means that we want our function to be called as soon as WordPress is initialized, and we're going to pass the name of the function we just wrote, which is lil_register_business_type.
>
> **[5:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=322)** Let's go back to our WordPress installation, where we've already activated our plugin, which means that if we refresh, we now have the Businesses post type showing up. With that, let's take a look at customizing our post type even further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (7), [[PHP]] (6), [[Internationalization]] (1)
> **CLI Commands:** php (6), make (5)
> **Code Identifiers:** lil_register_business_type (2), register_post_type (2), require_once (1), add_action (1)
> **Prerequisites:** set up (3), install (1), before we start (1), setup (1)
> **Env Vars:** lilpath (2), php (2), lildomain (1)
> **File Paths:** register.php (2), lil-post-types.php (2)
> **Cross-References:** go back to (3)
> **Definitions:** means that (2)

#### [Customizing your post type labels](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=0)** - [Instructor] Now that we have a good structural foundation for our business type, let's take a look at how we can customize it even further. In the CPT UI plugin you might remember that there were additional labels and settings that had their own sections. And each of these correspond with the arrays that we've set up, labels and arguments. Let's first look at the labels we can customize. We're going to head to the [[WordPress]] codex for the reference to register post type. This website will be your best friend because it shows us exactly what we need to pass to the labels and arguments arrays. If we scroll down the page to the argument section we'll see a full list of all of the arguments that could be passed to register post type. And in the labels array, we'll see a full list of all of the labels that we can customize. So if we go back to our code, let's start with customizing the featured image labels. In the register.[[PHP]] function, we are going to start by setting up some new key value pairs. The first is going to be featured image. We're going to internationalize these strings again, and we want to change the featured image label to business logo. We're going to do the same thing for set featured image,
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=92)** remove featured image, and use featured image, all of which serve as the keys for the labels array. So first we'll do set featured image, and I'm going to copy the featured image text, so that I can paste it later. We'll change this to set business logo, add our text domain, and then we'll do the same thing for remove featured image. And now we can paste that text I copied. We'll make this remove logo. And finally, use featured image. So we'll type use, and then we'll paste the text that we just copied, and we'll change this to use logo. Now there was one more label that we were able to customize using CPT UI, and that was the archives label. So let's go ahead and do that now. Again, if we reference our labels here on the codex, you'll see all of the ones that we added featured, set, remove, and use featured image, and then you'll also find the archives key, so that's the key that we'll use. We'll type archives, and we'll change this to business directory.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=193)** If we go to businesses add new, we'll notice a couple of things, first of all we're still using the classic editor. Second, we don't see the featured image area or much of anything, and that's because those get passed to the arguments array, which we'll look at shortly. But the other thing is, if we look at the top we see the [[Microsoft Word|word]] add new post here. So let's go back to our codex, and see how we can customize that text. You'll see that there's a key called add_new, so let's copy that. And we'll paste that into our labels array. And we'll change that to add new business.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=239)** So we'll save that, we'll go back to our WordPress dashboard, and if we refresh, you'll see the add new business label here in the menu. And then the last thing we'll do is grab the add new item label, which will change the title on the screen. So we'll paste that, and we'll make it the same text as above, which we'll just copy and paste. Now if we go back to our admin and refresh again, now we see add new business in both places. So that's how we were able to customize the labels. Now, let's look at how we can fully customize and add support to our post edit screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[PHP]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2), php (1), find (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** scroll down (1), go to (1), in the menu (1)
> **Env Vars:** cpt (2)
> **File Paths:** register.php (1)
> **Code Identifiers:** add_new (1)
> **Prerequisites:** set up (1)

#### [Customizing your post type settings](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=0)** - [Instructor] With our labels set, let's turn our attention to the settings, which we're going to pass through the argument array. The codex makes it clear which of these arguments are true by default, and which are not, making it easier for us to know what we need to pass through code. There are a few things we do want to set, though, such as have archives, the rewrite rule, we want to set the menu icon, and we want to make sure to add those supports. If we look at the current state of our Add New Business screen, you'll see that while we have the title and editor, we don't have the featured image, and the block editor is not enabled, but we'll touch on that later. So let's go back to our code and in the arguments array, we'll start adding some key value pairs. The first is has_archive. We're going to set this explicitly to businesses. Remember our slug is business, but we want this to represent the fact that there are multiple businesses. Next is rewrite. We want to make sure that has_front is set on for the rewrite rule, and rewrite is actually an argument that accepts an array as its value, so we're going to set up another array, and we're going to turn on has_front. This will give us the URL structure that we want. Next is the menu icon, we want to customize the menu icon,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=97)** using the key menu_icon, and we want to set it to the dashicons-building. Finally, we want to explicitly set what elements of the post screen hour custom post type supports. That's going to be using the supports key and this, also, accepts an array of arguments. We'll explicitly set title and editor, even though those are on by default, as well as thumbnail, which represents the featured image. Again, if you ever need to reference any of the other arguments, or you want to read a little bit more about what we've added here, again you can always reference the codex. So if we save this, and then go back to our [[Microsoft Word|Word]] Press Dashboard, let's go ahead and refresh the screen. So you could see the featured image area, which is properly labeled business logo, is showing up, but the label for set feature image is not. Let's go back to our code, and see what's going on there. Looks like we missed a d in each of our labels, so let's go ahead and change those now. We'll save, and we will refresh, and now our labels are showing up properly. You can also see that the menu icon has changed to the business. Everything looks good now, except we're still using the classic editor, so let's learn how we can turn on the block editor for our custom post tags.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** has_front (2), has_archive (1), menu_icon (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Env Vars:** url (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### [Activating the REST API on your post type](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=0)** - One of the arguments we haven't set yet is for the [[Representational State Transfer (REST)|REST]] API which should get some special attention. Aside from allowing our post type data to be accessible from outside [[WordPress]] via an API, there's another crucial feature that the REST API turns on. If we look at the post edit screen for creating a new business right now, you'll see the classic editor. The one that existed pre 5.0. The other feature that's included in the REST API support is enabling the new block or Gutenberg editor. Let's go ahead and do that now. If we reference the Code X and we scroll down towards the bottom we'll see a key called show_in_rest. There are also two other rest related arguments for rest base and rest controller class. But we will definitely leave those at the default. So let's go ahead and copy the show_in_rest key which is set by default to false. Then we'll go back to our code and under the supports key, we'll paste in show_in_rest and we'll set it to true. If we save our file and then go back to our WordPress edit screen and refresh, the block editor is now showing up. As it stands now, you need to set
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=93)** show_in_rest to true to enable the block editor. This is recommended if you want the editing experience to match posts and pages. However, if you plan on making heavy customizations to that screen by using something like advanced custom fields, you may want to keep it set to false and rely on the classic editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (6), [[WordPress]] (2)
> **Env Vars:** api (4), rest (3)
> **Code Identifiers:** show_in_rest (4)
> **Cross-References:** go back to (2)
> **Versions:** 5.0 (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** recommended (1)
> **Speakers:** - one (1)

#### [Creating a post with your post type](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=0)** - [Instructor] Now that our business post type is created, let's see how it works, both in the admin, and on the front end. If we go to Businesses, Add New, you can see that we have the block editor. So we can add a title, so let's add the business Leaf and Mortar, and then we'll add some text to the block editor area, and we can click on the Document tab over here, and add a logo. If we click Publish, we can then view the post, but notice that we're getting a 404, even though we just published. That's because we haven't told [[WordPress]] to update the permalinks to include the rewrite rules we set in our custom post type settings. The way that we can do that is by forcing it on the permalinks page in the admin. So we'll go to the Dashboard, and then go to Settings, Permalinks, and we'll click Save Changes. Now, if we go back to our Leaf and Mortar post, we can see everything is working properly. And if we go to /businesses, we'll see our archive page is showing up properly as well. One note about flushing the rewrite rules is that we don't necessarily need to do it through the admin. We can also set it in code, using the flush rewrite rules function. We might want to exercise caution with this though,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=96)** to make sure that we don't call it too much. A good example of where to place flush rewrite rules would actually be right after you register a custom post type. We'll look at this a little later. But for now, congratulations. You've now written and published your first custom post type using code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create an events post type](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=0)** - [Instructor] Now that you've watched how a custom post type is created within [[Microsoft Word|Word]] Press, it's your turn to create your own. Using what you've learned, I want you to create your own post type for events. And we'll want to have all the furnishings that we had for businesses. Name it Events. Make sure the block editor is enabled. Create the appropriate rewrite rules with the has front setting set. Add a custom menu icon of your choice. And be sure to include custom labels where appropriate. This challenge should take you no more than five minutes to complete. And if you look at the existing code, as well as the register post type documentation on the Word Press codex, you should have all the information you need to complete the challenge. Once you do complete the challenge, you can view the next movie where I show you the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create an events post type](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=0)** - [Narrator] Now that you've completed the challenge of creating an events type, I'm going to show you how I would solve the problem. So the first thing we'll do is copy our function that defines our business type. We're going to use this as a boilerplate for the events type. We'll copy the function in its entirety, and then we'll paste it below. We'll also change the function name to lil_register_event_type. Next, we'll change the labels. The first thing we'll do is delete all of the featured image labels here, and we'll just use the standard labels for that. Next, we'll change name to Events. We'll change singular_name to Event. We'll change archives to Events Calendar. And we'll change add_new and add_new_item to Add New Event.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=68)** Moving down to our argument array, we're going to change the value of has_archive to events. We're going to change the menu_icon to dashicons-calendar. And then finally we will change register_post_type from business to event. The last thing we'll need to do here is go to our lil-post-types.[[PHP]] file and make sure we add our new function to the init action. So we'll copy the add_action line, and then we'll paste the copy below, and rename lil_register_business_type to lil_register_event_type. Now if we save this and go back to our dashboard, and if we hit refresh, our new events type will show up, and if we click on Add New Event, we will see the Add New Event label, we'll see the block editor, and the featured image labels are now the default. So that's the solution that I came up with for this challenge. Yours could be different and might be different, but that's okay as long as everything is working properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1)
> **Code Identifiers:** lil_register_event_type (2), singular_name (1), add_new (1), add_new_item (1), has_archive (1)
> **CLI Commands:** php (1), make (1)
> **File Paths:** lil-post-types.php (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [narrator] (1)

#### [Extending post types with custom fields](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=0)** - [Instructor] While there are lots of benefits to creating new custom post types with their own URLs and organization structure, there's a lot more you can do with them. Often times you'll find custom post types aren't just the new types themselves but they have custom fields or custom data associated with them. We create new post types because they're housing data that's not necessarily relevant to a post or a page but how do we add that extra data? Well, there are a few ways. First, [[WordPress]] does have native support for custom metafields. If you add that support to your post type via the support argument, you'll see a new metabox on the post edit page. You can add one off custom fields that way but this can get a bit tedious as there are other, more robust ways to add custom field support. The most popular way is with Advanced Custom Fields. This is a free plug in that let's you extend any of your post types, modify the post edit screens and much more. It also has a drag and drop interface that makes creating custom fields, including complicated ones, as easy as possible. We have a full course on Advanced Custom Fields which you can find in our library. There are also coding frameworks that you can use. Perhaps the most popular one of these is CMB2, or custom metaboxes two.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=95)** You would download this from [[GitHub]], include it in your plugin and then define the fields in code. Finally, you'd associate them with your post types. This reduces dependency on another plugin and gives you a bit more control over the code you're using but it will require a bit more work to get these fields up and running. Luckily, CMB2 is well-documented. I recommend Advanced Custom Fields because of the affordable price for the pro version, the fact that it has a free version you can try and all of the incredible features outside of custom field support, that it offers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[GitHub]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** cmb2 (2)
> **Tools:** github (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Coding Your Own Custom Taxonomies

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a basic custom taxonomy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=0)** - [Instructor] Now that we have some custom post types, let's create a custom taxonomy to organize them. First, we'll get the basic definition of the taxonomy down, and then we'll move on to the more advanced customizable settings. In our plugin lil-post-types, we're going to create a new directory called taxonomies, and inside that folder, we're going to create a new file called register.[[PHP]]. In lil-post-types.php, we're going to use the require_once function to grab that register file. So I'm going to copy the require_once that we're using to pull in our post types, I'll add a couple of lines to the end of the file, I will paste that line, and then I will change post-types to taxonomies. Then we'll save that. Back in our register file, I'm first going to do the opening PHP tag, and then we're going to create a function to register our size taxonomy. So we'll call that function lil underscore register underscore size underscore taxonomy. And this is where we will define our taxonomy. For the basic definition of our taxonomy, we're going to need to pass in a plural and singular label, the slug, and the post types that our taxonomy
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=96)** is attached to. So we're going to set up a couple of arrays similar to the ones that are set up for our post types. So first we're going to create a labels array, and we're going to pass two key value pairs to it. The first is name, which will be Sizes, and we'll internationalize this again. And then the singular name, which will be Size, and then include LILDOMAIN for the text domain. Next, we're going to set up our arguments array. We'll call this args, we'll make it an array, and this array is also going to accept a couple of key value pairs. The first is labels, which we'll pass our labels array to. And the second is public, which we'll explicitly set here. So we'll set public to true to make sure our taxonomy shows up in the admin. There's also one more array that we're going to create, and that's called post_types. This will be used to attach our taxonomy to our post types. So we'll create a new array, and we're going to pass the slug of the post types we want associated with the size taxonomy.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=190)** Right now that's just the one called business. Finally, we will call the register_taxonomy function.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=204)** This is going to accept a slug, which we'll call size, it's going to accept the post_types, and it's going to accept the args array. We'll save this file and then the last thing we'll do is attach our registration function to the init action. So we'll write add_action init, and then we'll pass the name of our function, which is lil_register_size_taxonomy. If we save this and then go to our [[WordPress]] dashboard, you can see we're looking at the business listings, so we'll refresh, and you'll see the Sizes taxonomy show up in the admin underneath Businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1)
> **Code Identifiers:** require_once (2), post_types (2), register_taxonomy (1), add_action (1), lil_register_size_taxonomy (1)
> **CLI Commands:** php (3), make (2)
> **Prerequisites:** set up (3)
> **File Paths:** register.php (1), lil-post-types.php (1)
> **Env Vars:** php (1), lildomain (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### [Creating an advanced custom taxonomy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=0)** - Now that we have a good structural foundation for registering our size taxonomy, let's look at how we can customize it even further. Customizing a taxonomy is very similar to customizing the custom post type. And if we look at the Codex page for register taxonomy, we'll see a lot of the same arguments. There's a label and a labels array, many of the key value pairs for the labels array are exactly the same as the custom post type, and then we have a lot of the same arguments. This is going to make familiarizing yourself with both taxonomies and post types a bit easier. If we go back to our code, the first thing we'll want to do is customize the labels. And in most cases, the labels here will make sense. Add sizes or add new size is a perfectly fine label for our new taxonomy. However, because our taxonomy isn't hierarchical, it takes on the properties and labels of tags, which means that you will see the label add new tag in the dashboard. So let's at least make that change. We'll add the key add new item and then we'll add the label Add New Size. We'll then include our text domain for [[Internationalization]], and that's the only label that we're going to customize here. For the arguments, according to the Codex,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=96)** many of the arguments that we would want to use are the default settings. But, there are two that we're going to want to set here. Show admin column and show in quick edit, which we want to set both to true. So let's start with show admin column. This'll be the key, show underscore admin underscore column, and we'll set that to true. This is all going in our args array. And the same thing goes for show in quick edit. Which we'll also set to true. Now if we save this and we go to the admin area for sizes, if we refresh, you'll see the label has changed. And if we click on Businesses, you'll see sizes show up right in the admin column. Now there are lots of other great settings that we left at the default. If you want size to be hierarchical, for example, you can send that through the args array. I recommend keeping this Codex link pretty handy as you do more development for both taxonomies and custom post types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Internationalization]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Activating the REST API for your taxonomy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=0)** - [Instructor] One of the options we haven't set yet is for the [[Representational State Transfer (REST)|REST]] API. Aside from allowing our taxonomy data to be accessible from outside [[WordPress]] via an API, there's another crucial feature that the REST API turns on. And it's related to adding REST API support for our post type. If we look at the post edit screen for creating a new business, you'll notice on the right side bar our taxonomy is missing. That's because we haven't added REST API support. It's worth noting that our taxonomy would show up just fine in the classic editor. Basically, if you enable it for the post type you should also enable it for any related taxonomies. If we head over to the codex we can find the show_in_rest key which is false by default. Let's go ahead and copy that and go back to our code editor. In the args array we will paste that key and set it to true. Now, we'll save and if we go back to our WordPress dashboard and refresh the new business post edit screen you'll see the next size taxonomy show up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[WordPress]] (2)
> **Env Vars:** api (5), rest (4)
> **CLI Commands:** find (1)
> **Code Identifiers:** show_in_rest (1)
> **Speakers:** - [instructor] (1)

#### [Adding taxonomy terms to your post types](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=0)** - [Narrator] With all of the code for our taxonomy set let's add some to our businesses. We'll go ahead and click on businesses and then click on one of our sample businesses. Let's do Leaf and Mortar. From the right sidebar we can add a new size. Let's add small, since Leaf and Mortar is a small business. We'll then click update, and if we view this post you'll notice that nothing has changed. That's because our custom taxonomy isn't being pulled on the template that's rendering this page. We'll address that later. But if we go to sizes, and then view the small size, you'll notice that we're getting that 404 error again. And that's because we haven't flushed the rewrite rules since defining our taxonomy. Let's go to dashboard, settings, permalinks, and then click save changes. Now if we go back to businesses, sizes, and click on the view for small, we see the size archive. It's worth noting that the URL structure for our size archive is size-slash-small. If we try to go to just slash-sizes that page won't be found because unlike businesses, which has a top level archive page that is slash-businesses, our taxonomies do not. They need at least two levels,
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=95)** the taxonomy slug, which is size, and the term slug, which in this example is small.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (3)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Make location taxonomy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=0)** - [Instructor] Now that you know how to define and register a custom taxonomy it's your turn. Another way we can organize our business post type is by location. And we can also keep this taxonomy generic enough to apply to our events. So, in this challenge I want you to use what you've learned to create a location taxonomy. The name should be Location. You should enable the block editor only if necessary. Create the appropriate rewrite rules. Make this one hierarchical and include custom labels. Now, we haven't made a taxonomy hierarchical yet, but make sure to use the codex to help you out here. Imagine that we could have a broader location like the United States and then a child location, a smaller area, like New York. Be sure to use the custom code and the codex as reference material and you should have everything you need to complete this challenge. It should take around five minutes and you can check out the solution in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Make location taxonomy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=0)** - [Instructor] Now that you've created a location taxonomy, let's take a look at how I would do it. Since we have our register size taxonomy function here, we're going to copy that and use it a boiler plate for our location taxonomy. We'll go ahead and paste that right into the register.[[PHP]] file inside our taxonomies folder. Then we'll rename this function to lil_register_location_taxonomy. We'll change the labels. So we'll change Sizes to Locations, we'll change Size to Location, and we'll change Add New Size to Add New Location. In the args is where it gets a little tricker because we want this taxonomy to be hierarchal. So the first thing we'll need to do is add the hierarchical key and we'll set that to true, it is false by default. And then we'll also set our rewrite rules. Because we are making this a hierarchical taxonomy we want to make sure we have the appropriate rewrite structure in place, so we'll set this array and there are two keys we're going to set. This array accepts a key called hierarchical as well, which we'll set to true. And we'll set the key has front to true as well.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=98)** We'll associate this post type with business and event. And then when we register the taxonomy we'll change the size slug to location. The last thing we'll need to do here is add our function to the init action so we will copy this function name and then we'll go to lil posttypes.php. We'll scroll to the bottom here. And then we will add the new action. So we'll write add action, we'll add it to the init action like our other taxonomy and then we'll paste the function name in. If we save this and go to the front end of our website, and refresh the page we'll now see the locations taxonomy showing up in both businesses and events. And if we click on Locations and add a new location let's say United States and then click Add New Location, now we can add a new taxonomy term for New York and we can make the parent category United States. Notice that there's also an opportunity here to change parent category to parent location. But that's it for the solution we have successfully created a hierarchical taxonomy called location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** php (2), make (2)
> **UI Navigation:** go to (2), click on (1)
> **File Paths:** register.php (1), posttypes.php (1)
> **Code Identifiers:** lil_register_location_taxonomy (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Creating Custom Post Type Templates

[↑ Back to Table of Contents](#table-of-contents)

#### [The WordPress template hierarchy](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=0)** - [Instructor] [[WordPress]] has some pretty great fallbacks for new content. So we technically don't need to do anything to have our post types supported on the front-end. However, we may want to customize those templates. Understanding the template hierarchy is key to doing that. On the screen here, you can see a nice visualization of the WordPress template hierarchy. We'll work through this, left to right, but I do want to point out the entry all the way to the right. Everything boils down to the index.[[PHP]] template. This is the ultimate fallback. This also means that WordPress themes only really needed two files, style.css to define the theme, and index.php to drive it. That said, the hierarchy is very robust and flexible. Let's dive in. To the left, you have the big overarching sections, and there are six of them. You can picture these as the main types of templates. As we move to the right, those sections are broken down. Archive Page, for example, has Author, Category, Custom Post Type, Date, and more. Those sections are broken down further into content specific template names. Let's take a look at the Custom Taxonomy Archive. The first thing we look for is a taxonomy that has the taxonomy terms structure name. So anytime we see a dollar sign,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=96)** that is a variable for the template name. In this case, we can have a size-small specific template, so we'd have a template named taxonomy-size-small.php, and that would be the template that drives the small term template. If that doesn't exist, the template hierarchy falls back to taxonomy and then whatever the taxonomy name is, so in this case, taxonomy-size, so in this case taxonomy-size. If a taxonomy specific template doesn't exist, we fall back to taxonomy.php. If that doesn't exist, we fall back to archive.php, and finally we land on index.php. You can see the same thing for a Singular Page. The Singular Page has several different types of pages, Single Post Page and Static Page, and inside Single Post Page, there are even more classifications. If we take a look at Custom Post, our first stop for Custom Post is custom.php, which is generally a page template that can be selected from the dashboard. If that's not selected, then we fall back to single-$posttype-$slug, so in our leaf and mortar example, it would be single-business-leaf-and-mortar.php. That would be the template
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=193)** that drives that specific piece of content. If that template doesn't exist, we fall back to single-$posttype, which in our case would be single-business.php followed by single.php followed by singular.php followed by index.php. In the case of our theme, we're going to want to create a single-business.php template to customize our Custom Post Type template. And this was just a brief overview of the WordPress template hierarchy. If you visit [wphierarchy.com](https://wphierarchy.com), you can take a closer look at all of these templates, including clicking through any one of these templates to the codex page. You'll also get a deeper description below the hierarchy. Finally, you can download a PDF of this hierarchy to print out for reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (13), [[WordPress]] (4)
> **Exercise Files:** template (17)
> **File Paths:** index.php (4), single-business.php (2), style.css (1), taxonomy-size-small.php (1), taxonomy.php (1)
> **CLI Commands:** php (13)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), for example (1)
> **URLs:** [wphierarchy.com](https://wphierarchy.com) (1)
> **Env Vars:** pdf (1)

#### [Setting up your child theme](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=0)** - [Instructor] Because we've created custom post types, and taxonomies, we'll want to display that content in a way separate from the current theme. In order to display that content on the front end, we'll need to add some code to our theme. If you're using a custom made theme, that is, one you developed, or had one developed for you, you can make modifications directly to the theme. However, if you're using a theme that you got from a marketplace, or the [[WordPress]] theme repository, you'll risk losing any changes you make the next time that theme updates, so instead we'll need to make a child theme. A child theme piggybacks off of the main, or parent theme, using any files from the parent, not specifically overwritten in the child. That means that if the parent gets an update, our modifications are safe, and sound. This is a quick primer on WordPress child themes, but if you'd like to learn more about WordPress child themes, you can check out the course in our library. Since we're using the Twenty Ninteen theme, we're going to make a child theme based off of that. To start, open your code editor, and create a new folder inside WP-Content Themes called twentyninteen-child-theme. And in that folder we're going to create a new file called style.css.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=96)** This is where the definition for our theme will be, and we're going to copy, and paste that definition right from the exercise files. So we'll copy this, and we will paste it into our new theme. Our Theme Name, Theme URI, Description, Author, and Author URI will all show up in the WordPress Dashboard to help identify this theme, but there's one important line that we're adding here, and that's template. So Template: twentyninteen tells WordPress two things, that we are creating a child theme, and that the parent of this child theme is twentyninteen. This value needs to match the folder name for the parent theme. The next thing we're going to do is create a new file called functions.[[PHP]], and in the functions.php file we are going to include our parent CSS. So there's two things that we'll need to do here. We're going to need to create a function to enqueue the styles, and we're going to need to add an action to call our new function. So let's create the function first. We'll call this lil_child_enqueue_styles, and inside this function we are going to first enqueue the parent CSS,
>
> **[3:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=191)** and then in cue the child CSS. So we'll call wp_enqueue_style, and this function accepts several arguments. The first one is the slug, or the ID, so we'll just call that parent-style. The next is the source, or the URL for the style sheet. So we're going to use a built in WordPress function called get_template_directory_uri,
>
> **[3:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=226)** and then we will concatenate it with a string that starts with /style.css. Get_template_directory_uri will specifically grab the parent themes file path, or URI. We're going to make a similar call here for wp_enqueue_style to grab the child CSS. So we'll call that child-style. We're going to use a different function here called get_stylesheet_directory_uri,
>
> **[4:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=268)** and then again we will concatenate the string /style.css. Get_stylesheet_directory_uri specifically grabs the child theme's directory URI, and then the last argument that we're going to pass here is an array of dependencies. So we're going to put in the array, parent-style. This tells WordPress that our child style depends on the parent style, which means that it will definitely load the parent style first. So we'll close that, and then the last thing we'll do is add the action. So we'll do add_action. The action that we want to call our function on is wp_enqueue_scripts, and then we will copy our function name here.
>
> **[5:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=330)** Alright, let's save functions and style. We'll go to our WordPress Dashboard, and then we'll go to Appearance Themes, and we will enable our child theme. If we visit the site, nothing has changed, and that's exactly what we expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8), [[PHP]] (2)
> **Env Vars:** uri (4), css (4), url (1)
> **CLI Commands:** make (5), php (2)
> **Code Identifiers:** wp_enqueue_style (2), lil_child_enqueue_styles (1), get_template_directory_uri (1), get_stylesheet_directory_uri (1), add_action (1)
> **File Paths:** style.css (3), functions.php (2)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** means that (2), is a  (1)
> **UI Navigation:** go to (2)

#### [Creating a single custom post template](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=0)** - [Instructor] With our child theme created it's time to add our custom templates. We're going to start by building a single-business.[[PHP]] template to display individual businesses in our directory. And because everything is based off of twentynineteen, we're going to use that theme for guidance. Let's start within our twentynineteen-child-theme directory, by creating a new file called single-business.php.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=32)** Here we're going to copy the single.php template from twentynineteen in its entirety. So inside the twentynineteen directory we're going to open up single.php, copy that, and then paste it into our single-business.php directory. We'll go ahead and save that, and then if we scroll to line 24 here, we'll see that the crux of the matter is a template part called template-parts/content/content, single. This is going to control all of the content for our template. So we want to recreate this directory in our child theme, and then make a file called content-single-business. Let's go ahead and do that now. So first we'll create a new folder called template-parts. Inside the template-parts folder we'll create a new folder called content, and inside the content folder we are going to create a file called content-single-business.php.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=110)** Now, we can change the template part in single-business.php to template-parts/content/content-single and then we'll replace single with business. And since we don't want to start with a blank slate we'll go back to our twentynineteen theme into template-parts, content, and we'll grab the content-single.php file. We'll copy that, and we'll paste that into content-single-business.php. Let's start by making a small change. First, since it's a business we want to make sure that the logo is displayed more clearly than it is in the standard twentynineteen theme so right above the_content template tag around line 23 we're going to place a new call to the_post_thumbnail. This will grab the standard post thumbnail. It accepts one optional argument and that is the size of the thumbnail, and we'll pull in the large version of it. So let's go ahead and save that. If we go back to the front-end of our website and we refresh the page for our business, Leaf and Mortar, we'll see the logo is now showing up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9)
> **CLI Commands:** php (9), make (2)
> **Exercise Files:** template (11)
> **File Paths:** single-business.php (4), single.php (2), content-single-business.php (2), content-single.php (1)
> **Code Identifiers:** the_content (1), the_post_thumbnail (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Modifying the single template header](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=0)** There's one more modification we want to make to our single business template, and that's to remove some of the header information. Things like author and date are not necessarily important to a business directory listing. So, let's go back to our code and, you can see that our header information is in another template part. So, let's go ahead and create that in our child theme. In the template parts directory, we need to create a new directory called header. And, in the header directory, we're going to create a new file called entry-header-business.[[PHP]]
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=44)** Then, we'll copy 2019s template parts header entry-header and we'll paste that into our entry header business template. Since we're working with a business, here; date, author, and the comment count aren't entirely important. So, we're going to delete that entire section of code. Starting right below the entry-meta div, which is around line fifteen, we will delete everything up until the closing span tag. Now, we'll save this header. But there are two more steps, here. We need to change the template part in two files. Content/single/business and in header.php. Let's tackle content/single/business, first. So, right around line seventeen, we'll change the template part call to template-parts/header/entry-header
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=112)** and, then, we'll change the last header argument to business. Now, this says, if there is no featured image, show the header, instead. Now, let's create our own header file. Let's go to 2019 and we will copy that whole file, and, we'll paste it into our child theme. If we open header.php, we can scroll down to the entry header call, which is going to be around line forty-five. We'll see it here, get template part, template part header entry. And, we're going to add some logic, here, to check to see if the business post type is being called. So, right inside that opening php tag, we'll create some space and we'll say, if business equal equal get post type, and, then we'll make the template part call that we want to make. Which, we can copy from content single business. So, we'll copy that and we'll paste it here. Else, and that's where we want to call the more general template header. So, we will cut this, fix our spacing,
>
> **[3:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=207)** and paste it in the else area. Now, this says, if the current post type is a business post type, use the business header. Otherwise, use the standard header. Let's save this file, and go back to our website. Now, if we refresh this page, the date and author are no longer being included. Just to double-check, let's click on Hello world! Which is a regular blog post, and you can see the standard header is being included.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **Exercise Files:** template (12)
> **CLI Commands:** php (4), make (3)
> **File Paths:** header.php (2), entry-header-business.php (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)

#### [Creating a custom post archive template](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=0)** - [Instructor] With improvements made to the brand, new single-business template, let's turn our attention to the business listing page, which is an archive page. You can see that it's pretty plain-looking, and it turns all of our logos blue, so let's make some changes. Let's open up our code editor to the twentynineteen parent theme, and we're going to copy the archive.[[PHP]] file. Then, in our child theme, we're going to paste it and rename it archive-business.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=36)** Next, we're going to find the function call for the archive title. This dynamically grabs the title based on the archive page we're viewing. Since we'd like this just be labeled as a business directory, we're going to change this line. Let's make note of the h1 class here. We'll actually copy that, and then we'll delete this entire php call in between the opening and closing header tags. We'll paste the h1 tag, and then we will use the [[Internationalization]] print function to print out the words All Businesses. And we'll use the twentynineteen text domain, since that's what's used in the [[Representational State Transfer (REST)|rest]] of the files. Then, we'll close our php tag and close the h1 tag. We can hard-code the title here because this is only going to be used for the business archive. The other change we want to make is going to be in a template part. So if we scroll down, around line 34, we see there's a call to the template part content excerpt. So we'll go to the twentynineteen parent theme, into template-parts content, and we'll copy the content-excerpt.php file, and we'll paste that into our own child themes, template parts content directory. We'll then rename this to content-excerpt-business. The main change that we want to make in this file
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=130)** is to remove the blue logo and instead use the regular-colored logo. So here, around line 24, you'll see the twentynineteen_post_thumbnail function. This is a custom function provided by the parent theme. We're going to delete this entire line, and then right inside the opening entry content div tag, we are going to add a standard thumbnail call. So I'll write the opening php tag, and then, the_post_thumbnail, and we'll pass the large size to it. And then we'll close that up. We're placing the thumbnail inside the entry content, so that we don't have to worry about adding custom CSS to make everything aligned properly. This will automatically make everything align. We'll save this, and then we'll go back to our archive business template. And the change we're going to make here is in get template part. We're going to change it to template-parts/content/content-excerpt. And we're going to change the second excerpt to business. We'll save this, and then we'll go to our website, to the archive page, refresh, and now the title says All Businesses, and our logos are showing up properly. Now this only scratches the surface of what you can do.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=222)** I just wanted to show you how you can modify the template structure to customize your themes and child theme. But you could take it much further, adding styles, markup, and even completely new sections to these templates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Internationalization]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (7), php (5), find (1)
> **Exercise Files:** template (9)
> **UI Navigation:** go to (2), scroll down (1)
> **File Paths:** archive.php (1), content-excerpt.php (1)
> **Code Identifiers:** twentynineteen_post_thumbnail (1), the_post_thumbnail (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** css (1)

#### [Adding a custom taxonomy to a template](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=0)** - [Instructor] One of the nice things that we can add to our new post templates is the custom taxonomy we created. Since this taxonomy is not built into [[WordPress]] core, we need to explicitly add the terms to our template. Luckily, Wordpress has a function that can help us out here, and it's called get the terms list. This function accepts a post ID, a taxonomy slug, what should go before the taxonomy list, how the list should be separated, and what comes after the taxonomy list. So we're going to want to add this nice comma-separated list of sizes to both our single and archive template. And let's start with the archive. First I'm going to copy this function here, so we can easily paste it later, and then in our code editor, I'm going to open the content excerpt business file. I'm going to scroll down to the 2019 entry footer, and right after the opening div, I'm going to add some markup. So I'm going to put this in a paragraph with the class "taxonomy-sizes". And then I'm going to open up the [[PHP]] tag and paste in our function call. So the first call needs to be the ID of the post we're on. We can grab that by calling get the ID, which is a built-in function inside Wordpress.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=95)** Then we need the slug of the taxonomy, which is going to be size. We need what's going to be before the list, and that's going to be Size, colon, and a space. The separator is going to be a comma and a space, and the space is important. And then we don't need anything coming after the list. So we'll close this, close our php tag, and then close our paragraph tag. We will go ahead and save this, and then we'll copy this so that we can paste it into our single template. First let's see how it looks on the business archive page. So if we go to the archive page, we'll see that it's not showing up. And that's because we made a small error. Anytime that we see the [[Microsoft Word|word]] get in front of a Wordpress function, we should assume it's not being printed out. So we'll type echo, and then we should see our sizes show up. So we'll just copy this again, so we don't paste the wrong code again, and then we'll refresh. And we have our size showing up. And since every business is only going to have one size, we don't see the commas, but we do see the size showing up properly. Now let's modify our single template. We want this to show up in the header, so we'll go to the template parts, header, entry header business file, in our child theme. And we're going to want to place this
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=188)** in the entry-meta div. So we're going to place our cursor right after the entry-meta div, and we're going to paste the code that we copied. Now we're going to make a small change here, we're going to get rid of the paragraph, because entry-meta is already styled, and we want the size label to stand out, so we're going to wrap the size label in an opening and closing b tag. We're using b and not strong here, because we don't necessarily want to emphasize and tell search engines that this is important text, we just want it to visually stand out. So we'll save that, and then we'll go back to our website, and if we click on one of the businesses, we'll see the size showing up in the header area, and size is now bold.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[PHP]] (2), [[Microsoft Word|Word]] (1), cursor (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1), click on (1)
> **Exercise Files:** template (5)
> **CLI Commands:** php (2), make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom taxonomy template](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=0)** - [Instructor] Since we modified our business template to show the taxonomy terms for size, we're exposing a new template on the front end. And that is the size taxonomy template. This taxonomy template looks exactly like our business archive before we modified it, and that's because it is. In fact, it's using the very same archive.[[PHP]] template to drive it. And that's good news for us. Thanks to the robust template hierarchy and the template part architecture we've been using to drive our child theme, we can fully customize the size archive by making minimal changes. If we open up our code editor, and inside our child theme we can copy and then paste the archive business template and then we can rename this template. And we'll rename it to Taxonomy dash Size. Now if we go back to the front end of our website and refresh, we'll see that the template looks exactly like the business archive. And that actually includes the title. So let's go ahead and change that. We know the original page was using the archive title. Every [[WordPress]] function like this also has a corresponding getter, so get the archive title is another function that exists. And if we reference the source code, which is here in the code reference for Get the Archive Title,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=97)** we can scroll to the bottom and find a very helpful function to us. And that function is Single Term Title. This will dynamically grab the single term for the archive page that we're on. So we're going to copy this and then go back to our child theme. And for the page header, we're first going to replace the text "All Businesses" with "Business Size" and then a space, and then we're going to make a call to the single term title. So we'll open up our PHP tag, we'll paste that function, and then we'll close our PHP tag. If we save this file and go back to the front end, and refresh, now we have the business size and the term we're currently viewing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[WordPress]] (1)
> **Exercise Files:** template (10), source code (1)
> **CLI Commands:** php (3), find (1), make (1)
> **Cross-References:** go back to (3)
> **Env Vars:** php (2)
> **File Paths:** archive.php (1)
> **Speakers:** - [instructor] (1)


### 7. Custom Post Types and Taxonomies in Other Templates

[↑ Back to Table of Contents](#table-of-contents)

#### [Custom post types on the front page](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=0)** - [Instructor] By default, the main query that's powering [[WordPress]]'s front page will only return posts of the post type. Here, we're going to add our businesses to the front page as well. So let's go ahead and open up our code editor, and then open up our child themes functions.[[PHP]] file. We'll start by adding an action. So we'll add a couple of lines to functions.php, and then we'll add the action 'pre_get_posts'. What this action does is say right before you send the main query off to get posts, call this function, which will likely modify the query. So we'll call this 'lil_add_business_to_query',
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=56)** and then we'll create that function. For consistency's sake, we'll create the function above the add_action. So let's go ahead and copy that function we just created, and then we'll write function, we'll paste the name, and this function, unlike the other ones we've used so far, actually accepts an argument, and that argument is query. WordPress is passing the query to this action for modification. Now there's a lot of information included in this query, including checks as to where we are on the site, what information should be retrieved, and much more. You can find all of that information over on the WordPress Codex on the Query Overview page. There's a lot of information to parse out here, so we're going to go through exactly what we need to modify the front page. The first thing that we're going to do is check to make sure we're actually on the front page, so we'll say if ($query ->is_home( ) ),
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=128)** and then we also want to make sure that we're using the main query, because you could have more than one query, or more than one loop on a WordPress page, we want to make sure that we aren't causing any unforeseen or unpredictable actions to themes or plugins. So we'll also say && $query->is_main_query () ).
>
> **[2:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=154)** These are both functions within the query object that was passed to our function. If both of these are true, then the next thing we want to do is add the business post type to the list of post types that are being returned for the front page. We can do that by saying $query->set ( ), and here, we're telling the query to set a variable or an array to a new value. So that variable is going to be post_type, and the new value is going to be an array of post type slugs. So we want to make sure to continue to include post, but we also want to include our business type. With our if statement and function properly closed out, let's save this and then go to the front-end of our website. If we refresh this page, we now have the hosts, as well as the businesses, showing up on our front page. There is one caveat, and that's that our modified template parts aren't being pulled in. I'll challenge you to try your hand at that, given what you've learned so far. If you want to know the solution, you can find it in the bonus section of the exercise files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[PHP]] (2)
> **CLI Commands:** make (4), php (2), find (2)
> **Code Identifiers:** pre_get_posts (1), lil_add_business_to_query (1), add_action (1), is_home (1), is_main_query (1)
> **File Paths:** functions.php (2)
> **Exercise Files:** template (1), exercise files (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Warnings:** caveat (1)

#### [Organizing your child theme](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=0)** - [Instructor] So far, we've taken a look at how to modify our child theme and template to format and include our new custom post types and taxonomies, but it's worth noting that there are a few ways to handle that information that we'll explore here. You may have noticed a few things we've done in our child theme. We've leveraged the template hierarchy to create new templates for our custom post types. We've created template parts, specifically for our custom post types, and we've conditionally checked to see if our post type is being used, to change information on what data is shown within templates. You may have also noticed, throughout the code base that the authors of 2019 do the same thing within general templates, like content.[[PHP]]. We could of done the same thing for our business type. We could have modified these more generic templates to check to see if we're using a custom post type or if we're on the single template for a custom post type, and make modifications that way. And in some instances, it might of made more sense. Especially if we don't want long, complicated conditionals for more than one post type. So why didn't we? Part of the reason is the goal of this course is to show you what is possible and our approach showed a more wide range of possibilities.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=93)** The other reason is mostly a judgment call. I like to organize my template parts by type of display, single, except, and post type, post, business, event. It helps me clearly understand where I can find the information I'm looking for. In some instances, it might be better or more clever to conditionally check within the template part what post we're displaying. An example is the search template. If we look at the search.php file inside 2019, we could see a call to a generic content template part. For consistency we might want to modify just that file in our child theme to check and properly label for the business type. The alternative would be to modify search.php for each post type we want to display, and then create a new template part. In the end, it's up to you, we've looked at what's possible and knowing what you can do will help you design and architect a theme that makes the most sense for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **Exercise Files:** template (9)
> **CLI Commands:** php (3), make (1), find (1)
> **File Paths:** search.php (2), content.php (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom loop for post types](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=0)** - [Instructor] Custom post types aren't just for creating other types of posts. They can also be used to include different content throughout the page. With our businesses, we wanted to display an index of businesses in a directory style, but we've also created an events type, which we can include on other templates to show users what's happening in the area. This requires a custom loop, which we'll create here. Let's go to our Code Editor, and open up the functions.[[PHP]] file. At the end of the file, we're going to create a new function called lil_show_events(). Here, we'll want to create a new posts query, calling WP_Query, and that requires an array of arguments. Let's set this up first. We'll create an array called $args, and then we'll send it a number of key value pairs. The first, is going to be post_type. This is going to tell WP_Query, which post types to return. So, we're going to set that to event, and then we're also going to put a limit on the number of events that are returned. So, that argument is called posts_per_page, and we'll set that to three. These are the only arguments that we'll set here, but you can check WP_Query's developer documentation to see a list of all the arguments you can pass to WP_Query. It's also worth noting that
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=93)** we're just doing the basics here, but if we had other information in meta fields, like dates, we could definitely sort them that way, or sort them on a shared taxonomy. The possibilities are endless. With our argument's array set, let's go ahead and call WP_Query. We're going to create a variable called $events, and then we'll write new WP_Query, note the capitalization, that's important here, and then we will pass it the $args array. WP_Query is a object within [[WordPress]], so this is going to return a WP_Query object, assign it to events, and the result of the query will be part of that object. The object also has a set of functions that we can call. We're going to make use of those functions now, by displaying them in a custom WordPress Loop, and this is going to look very similar to a main WordPress Loop, but instead of having standalone functions, like have_posts and the_post, they are going to be part of the WP_Query object called events. Let's see what that looks like. We'll write if ( $events->have_posts() ),
>
> **[2:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=176)** and then, inside of this If Statement, if we have posts returned, that is if there are events to display, we will display them. So first, we'll write, echo '<ul class="events-list">',
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=193)** and then we'll create a format for the string that we want to print out per event. We're going to be using the print function printf here, which requires a format and allows us to pass a format with placeholders inside the string for variables. This'll make our code look a little bit cleaner. So, we're creating an unordered list here, so we'll say <li class="event"><a href, will make this a link, and this will be where our first placeholder goes. So we'll do %1$s, and this is basically saying, this is the first string, which is serving as a placeholder. We'll add the title, which will be our second placeholder, and then we will include the title again. So this is where code cleanliness comes in a little bit. We don't have to rewrite the title script, or anything like that, we can simply reuse the second string we passed to the print function. Then we'll do an argument and print the content, which will be the third placeholder that we send. Then we'll end the list item, and then we'll move on to the While Loop. So this is going to look very similar to the WordPress Loop. We'll say while( $events->have_posts() ), and then we'll want to print the events. First, we'll have to assign the current post to the current event to the_post query on the page,
>
> **[4:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=287)** so that we can use the Loop functions. We'll do that through events->the_post. Then we'll use our printf function, and we'll pass it the format, which we setup above, and the three placeholder strings that we want to print out. The first is get_permalink. The second is get_the_title. Remember, we don't want to actually print any of these out, we're passing them to a print function, so we just want the values, and then we're going to print the content, and we need to do a little bit of extra work here. So we're going to need to call the apply_filters function, and the filter we want to apply is the_content. Basically, this is WordPress taking the sanitized information that is in our database and setting it up, so it could print with all of the formatting that was set in the Content Editor. So if you have things like, bold or italics, you'll want to pass it through the apply_filters function to make sure everything looks as you'd expect, and that's it for our While Loop. So, after the While Loop, we will close our unordered list, and then the last, and very important thing that we need to do here is, reset the query. So we'll do that after the If Statement. It'll be the last thing that we do before we close the function. We'll call wp_reset_query.
>
> **[6:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=380)** If we don't do this, than we'll have posts colliding and we will get unpredictable results. So always make sure to include wp_reset_query. So this is our query function. There's one more thing that we'll need to do though, and that is add it to the template where we want it to show up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[PHP]] (1)
> **Code Identifiers:** have_posts (3), the_post (3), apply_filters (2), wp_reset_query (2), lil_show_events (1)
> **CLI Commands:** make (5), php (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** functions.php (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)

#### [Displaying the custom loop](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=0)** - [Instructor] With our custom loop function defined, it's time to add that to our templates. Let's go ahead and copy the lil show events function, and then we're going to open up our content single business file in template parts content. Right before the end of the entry content div, we're going to place our custom code. So the first thing we'll do is create a section with the class related events. We'll close that section so we don't forget to later. And then we will add our content. So we'll create a heading three tag, and we'll print out a heading using the [[Internationalization]] function, so we'll open up our [[PHP]] tag, underscore e, upcoming events,
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=59)** and then our text domain will be twentynineteen. We'll close the php tag, and then we'll close the heading three tag. And then, we will call our lil show events function. And since we do all of the printing inside of that function, we don't have to worry about printing it here, we can just add the function call. So let's save that, and then we will go to the front end of our website. We added this to the single business content, so we should be able to open any business page and see the same set of events. We'll open one and we'll scroll down, and we see the upcoming events. Perfect. Now if we go back to another business, we should see it there too. So let's just pick the very first one. And we see that same set of events. So it looks like these events can use a little bit of styling. Good thing we added those extra classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Internationalization]] (1)
> **CLI Commands:** php (2)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Styling your custom loop](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=0)** - [Instructor] With our event properly displaying, let's go ahead and add some styles. You can see that we have added special classes for related-events, that's the entire section and we've also added specific classes on the unordered list, events-list and the list it for event. Let's take advantage of these classes. We're going to copy the CSS directly from the exercise files for this video, so you can open the exercise files and we will copy them and then talk through the changes. So let's go ahead and do related-events first. Let's open up our style.css file inside of our child theme and we'll paste that first CSS. Here for the entire section, we're adding a light gray background, a darker gray border and we're adding some padding to the entire block so that we have some spacing to work with. Next are styles for the event-list and list items. Let's copy that. And then paste that into our style.css file. Here we're getting rid of the list style type which is the bullet. We're going to get rid of that completely and then on the list item, we're going to add a light gray border, margin and padding to give us some space between each list item. Finally we're going to add some styles to the specific elements inside the list item. So we'll copy that code from our example files,
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=96)** paste them in our style.css and what we're doing here is we're bolding the anchor tag which is going to consist of the title of the event so that'll make the title stand out and then we're getting rid of margins and paddings on the paragraph. The content will automatically add paragraph tags and so it's going to make things look really spaced out since we want just a simple listing for the event text here. We're going to get rid of the margins and paddings. We'll save this and we'll go to the front end of our website. Let's go ahead and refresh this page and things look a lot better. Our events are set apart from the content of the business. Our title text is bold and we've got some nice spacing between everything.

> [!info]- Semantic Content
>
> **File Paths:** style.css (3)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **UI Navigation:** open the (1), go to (1)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1)


### 8. Moving Your Post Types to Your Theme

[↑ Back to Table of Contents](#table-of-contents)

#### [Warning: Custom post types in themes](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=0)** - [Instructor] A common strategy in the [[Wordpress Development]] world for a long time was to bundle custom post types and other functionality with the themes. The idea was that themes essentially depended on these post types, and the post types depended on the theme for them to be viewed properly. It also made selling commercial themes on marketplaces a bit easier. You didn't have to come up with new instructions to tell users how to install and enable the theme, and then install and enable a set of plugins you were including. However, best practice dictates that the custom post types and taxonomies be included in a plugin, and not a theme. There are a few reasons for this, but the root of it goes back to what we talked about earlier: a separation of concerns. Content should not be tied directly to the display. Users should be able to swap out the theme without losing their content. But there's also the philosophy that one should never say never. There could be legitimate reasons why you need to include your custom post types inside the theme. So if you absolutely need to do that, this section will show you how. We'll take the approach of taking the plugin that we've written, and copying it into our theme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wordpress Development]] (1)
> **Prerequisites:** install (2)
> **Cross-References:** we talked about (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Adding custom post types to themes](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=0)** - [Instructor] As stated earlier, it's strongly recommended that custom post types and taxonomies stay in a separate plugin so that there's no reliance on the theme to create content. That said, here I'll show you how to add the post types and taxonomies we created into our 2019 theme. So we have a fully working plugin here in its own folder with its structure and organization. We could copy all of the code from all of those files directly into our functions.[[PHP]] file and everything will work fine. But we like to keep things organized. So the first thing we'll do is go to our demo site and we'll deactivate our plugin. You'll see the businesses and events disappear. Now if we go back to our code editor, we're going to copy the entire plugin folder, lil-post-types and past it in the child theme folder, 2019 child theme. Now in our child theme's functions.php file, we're going to add this line. We're going to add this to the top of our functions.php file so that any functions we wrote don't break because they rely on the plugin files. So we'll write require_once and then we'll use the get_stylesheet_directory function. And this is slightly different
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=96)** from get_stylesheet_directory_uri because it's getting the directory path which is all we need here for the inclusion of our new folder. And then we'll write a period for concatenation, open the single quotes, /lil-post-types, that's our folder name and then /lil-post-types.php. That's our driver file. So this is going to call in the driver file which is going to call in the [[Representational State Transfer (REST)|rest]] of the plugin. If we save this and then go back to our [[WordPress]] installation and go to the dashboard, you'll see everything is working properly. That's all we really need to do to include our plugin in our theme directory. That said, there are a couple of things that we want to clean up for consistency sake. So inside of the 2019 child theme directory, inside the lil-post-types folder, we're going to open up lil-post-types.php. We're going to remove everything from line 19 which defines our plugin version and up. We don't need any of this code except for the opening PHP bracket. The only other change we're going to make is we're going to change LILPATH from plugin_dir_path to get_stylesheet_directory. This is working
>
> **[3:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=192)** because plugin_dir_path is just a wrapper for the dir name function that's built into PHP but we want to make this easy to read for other people who might look at this code. So we're going to delete plugin_dir_path and we'll type get_stylesheet_directory. Period, open single quote, /lil-post-types and then the trailing slash as well. This will ensure that all of our paths remain in working order, so we will save this and we'll go back to the front end one more time. Refresh. And everything is still in working order. If we go to Plugins, our plugin is no longer active and it wasn't reactivated somehow so this is all being driven from our theme files. One note if you'd like to roll back and keep using the plugin and theme separately, don't worry, you can always grab the start state code from the exercise files for this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[Representational State Transfer (REST)|Rest]] (1), [[WordPress]] (1)
> **CLI Commands:** php (7), make (2)
> **Code Identifiers:** get_stylesheet_directory (3), plugin_dir_path (3), require_once (1), get_stylesheet_directory_uri (1)
> **File Paths:** functions.php (3), lil-post-types.php (2)
> **UI Navigation:** go to (3), open the (1)
> **Env Vars:** php (2), lilpath (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### [Automatically flushing rewrite riles](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=0)** - [Instructor] So far, we've seen the manual way to flush rewrite rules by going to settings, permalinks. And as you saw, that can be a tedious process. If you forget, it can cause unnecessary headache for troubleshooting. And you need to do it anytime you make a change to the URL or rewrite structure. So, let's see how we can flush rewrite rules automatically with our plugin and our child theme. Here on the screen, you see the codex page for register post type. If you scroll towards the bottom, you'll see the flushing rewrite on activation. And it gives you sample code to use in both your plugin and your theme. We're going to copy this first block of text here, this first block of code, and we're going to paste it into our plugin. So, let's go to our plugins to LIL-postypes.[[PHP]]. And at the bottom, below the other add actions, we'll paste this code. We'll clean it up a little bit. We'll get rid of the cautionary comments, though they are very important to read. Now, you should only do this during plugin activation, for example, because you don't want to do it on every page alert. And then, we'll need to replace my CPT init with another function. So, let's just pick our first function, the register business type. We'll copy that from the action above and paste that into our function. We'll also rename this to LIL rewrite flush. And under register activation hook,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=94)** we'll make the same change. So, this code will say first call this function, and then flush the rewrite rules. So, it'll simulate that click from settings, permalinks. There are a few caveats here, though. First, this is only called on plugin activation and should only ever be. That means that if you make any changes after the plugin is activated, you'll need to either deactivate and reactivate the plugin or flush the rewrite rules by visiting the settings, permalink page. The other caveat is that we're only calling one of the four functions here that would require flushing the rewrite rules. To solve this problem, we might want to lower the priority on one of our registration plugins and call that one or have a single function that registers all the post types at once. And then, call that function in the LIL rewrite flush function. So, we'd essentially have a single driver called LIL register everything, call all four of our functions, and then flush the rewrite rules. If we go back to the codex page, you'll notice the only change that we really need to make is change the register activation hook to add action. So, if we go back to our code, we can copy our function. And then in 2019 child theme,
>
> **[3:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=187)** we'll open up functions.php. We'll scroll to the bottom of our functions.php file. We'll paste in our rewrite flush function, and then we'll add the action. The action will be after switch theme. And this is saying that when the new theme is activated or the theme is switched, call this function. We'll save those changes. And now, we have our rewrite rules flushed automatically, either when our plugin is activated or when our theme is activated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** make (4), php (3)
> **Env Vars:** lil (4), url (1), cpt (1)
> **File Paths:** functions.php (2), lil-postypes.php (1)
> **Cross-References:** go back to (2), as you saw (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Definitions:** means that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you've reached the end of this course. We've covered how to create our own custom post types and taxonomies with and without code. We also took a look at the [[WordPress]] template hierarchy, how to create custom templates for post types for both single and archive, and even how to move our plugin code into a WordPress theme. I would encourage you to dig deeper into the WordPress codex, and play with all of the customizations and types of data you can create. You can also experiment in different ways to display that data on the front end. [[LinkedIn]] Learning has lots of courses to help you even more. There's the continuously updated WordPress master class playlist that takes you all the way from novice to seasoned developer. There's also a course on advanced custom fields, so you can add that [[Metadata]] and custom fields to your brand new post types. Finally, I'd love to hear from you about what kind of custom post types and taxonomies you're creating for your own WordPress sites and projects. You can always find me on Twitter @jcassabona. If you'd like to learn more from WordPress and industry experts, check out my podcast How I Built It over at howibuilt.it. Thanks so much for watching, and until next time, get out there and build something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6), [[LinkedIn]] (1), [[Metadata]] (1)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Casabona]]

## Resources

- Exercise files available

## Skills Covered

- WordPress

## Path Context

### In [[Advance Your Skills in WordPress]]
← [[WordPress- Internationalization]] | **3 of 8** | [[Using Custom Meta Boxes in WordPress]] →

## Appears In

- [[Advance Your Skills in WordPress]]

## Related Courses

_Courses sharing skills:_

- [[Troubleshoot and Repair Your WordPress Website]] — WordPress
- [[WordPress- Accessibility]] — WordPress
- [[WordPress- Speeding Up Your Site]] — WordPress
- [[WordPress- SEO]] — WordPress
- [[Wordpress Ecommerce]] — WordPress

---

[↑ Back to top](#)