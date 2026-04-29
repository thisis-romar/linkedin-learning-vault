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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/WordPress-%20Custom%20Post%20Types%20and%20Taxonomies.md)

![WordPress: Custom Post Types and Taxonomies](https://media.licdn.com/dms/image/v2/C4E0DAQHOaQ6P8g5Ihg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118357194?e=2147483647&amp;v=beta&amp;t=-ky-6r_5sp3HDdDg4CJJL442J090Pyvyvfp15FHzmWw)

# WordPress: Custom Post Types and Taxonomies

> WordPress is a powerful content management system—but it shines with customization. For example, there are seven default post types, organized using built-in taxonomies like categories and tags. But you can display different types of content according to your own rules by creating custom post types and taxonomies. Best of all, you can customize these elements without a lot of code. In this course,

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3) | 2h 9m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. What Are Custom Post Types and Taxonomies?]]** (3 videos)
- **[[#3. 2. Creating Custom Post Types without Code]]** (5 videos)
- **[[#4. 3. Creating Custom Taxonomies without Code]]** (4 videos)
- **[[#5. 4. Coding Your Own Custom Post Types]]** (9 videos)
- **[[#6. 5. Coding Your Own Custom Taxonomies]]** (6 videos)
- **[[#7. 6. Creating Custom Post Type Templates]]** (7 videos)
- **[[#8. 7. Custom Post Types and Taxonomies in Other Templates]]** (5 videos)
- **[[#9. 8. Moving Your Post Types to Your Theme]]** (3 videos)
- **[[#10. Conclusion]]** (1 videos)

### 1. Introduction

#### Create better content
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=0)** - [Joe] WordPress is a content management system that drives millions of websites, from blogs to E-commerce stores that process thousands of transactions per a day.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=10)** By some estimates, it powers over 30% of the web.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=14)** But out of the box, WordPress is pretty bare bones.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=18)** To create custom content and site functionality, you'll need a little extra.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=23)** Custom post types and taxonomies allow you to create your own content, which can better be organized and provide more useful data to search engines like Google.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=33)** I'll show you how to extend WordPress by creating your own custom post types for content, and custom taxonomies for organizing that content.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=42)** Then, we'll create a child theme to better display that new content.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=48)** We'll also learn how to do a lot of this without code.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=52)** Hi, I'm Joe Casabona, a front end web developer and WordPress educator.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/create-better-content?u=76281980&t=58)** So join me in my LinkedIn Learning course about WordPress: Custom Post Types and Taxonomies.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [joe] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course we're going to build out our own custom post types and taxonomies.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=5)** We're going to build a plug-in, as well as modify a theme.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=9)** Because of that, you should be familiar with HTML, CSS and PHP, as well as how to create how to create WordPress child themes and plugins.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=18)** You should also have a local development environment that runs WordPress.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=24)** You also need to know how to use WordPress in general.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=27)** If this is your first WordPress course I recommend you take a look at Word Press 5 Essential Training.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=34)** You'll get to learn the ins and outs of how to use WordPress, the block editor, installing and activating themes and plugins and more.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=43)** In this course I will be using the 2019 theme, which comes installed with WordPress by default.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=50)** We're going to create a child theme so we can add our new post type templates.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=56)** We will go over the basics, but if you really want to understand child themes in WordPress I recommend you checking out the child themes course in our library.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=67)** For local development I will be using Local by Flywheel.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=72)** Depending on your platform we have several courses on local WordPress development.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=79)** While Local by Flywheel works on both Windows and Mac, you can use any development environment you like.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=86)** If you're looking for alternatives, for Windows, you can check out installing and running WordPress WAMP.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=92)** If you're on a Mac there's installing and running WordPress MAMP.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-you-should-know?u=76281980&t=98)** With our theme and local environment set we're ready to start learning about custom post types and taxonomies.

> [!info]- Semantic Content
>
> **Env Vars:** html (1), css (1), php (1), wamp (1), mamp (1)
> **CLI Commands:** php (1)
> **Code Keywords:** default. (1)
> **Speakers:** - [instructor] (1)

#### Demo project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=0)** - The possibilities for creating different websites with custom post types is endless.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=5)** In this course, we're going to create a simple business directory website.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=12)** We'll create a custom post type called Business that uses all of the built-in features of WordPress without having to rely on any outside plug-in help or custom metafields.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=24)** Our businesses will have the standard content editor field as well as a featured image.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=30)** We'll also create two taxonomies, size and locations.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=35)** This will help us organize our businesses in a unique way.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=40)** Our post types and taxonomies will be in a sample plug-in, which will be downloadable with the exercise files for this course.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=50)** To integrate our post types and taxonomies into our theme, we'll also create a child theme based on Twenty Nineteen.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=58)** We're choosing Twenty Nineteen because it has great support for the new block editor, and it's sure to use all of the best practices that come along with building a WordPress theme.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=70)** We're going to create single and archive templates for our post types and taxonomies as well as make sure our new post types show up in search results and on the front page.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/demo-project-overview?u=76281980&t=83)** If you follow along, by the end of this course, you'll have a site similar to what you see here on screen.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - the (1)


### 2. 1. What Are Custom Post Types and Taxonomies?

#### What are custom post types?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=0)** - [Instructor] One of the most important additions to WordPress that helped it evolve from a single blogging platform to a full-fledged content management system is the addition of different types of data.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=12)** Before we dive into the code, it's important that you understand what custom post types are.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=17)** Out of the box, WordPress has different post types already defined.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=23)** The most common ones you interact with are posts and pages.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=28)** Understanding how these work will help us later when we create our own custom post types.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=36)** Posts are what you normally create on WordPress.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=40)** These are most akin to blog articles.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=42)** They are normally organized in reverse-chronological order, so that the last post goes first in the index and then you see the rest of the posts below.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=52)** They are non-hierarchical, meaning posts do not have parent/child relationships.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=59)** Instead, they're organized based on the author that created them, the date they were published, and they also use categories and tags.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=69)** Every post must have a category and all posts can have tags.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=75)** In contrast, pages are single, individual pieces of content that can be displayed in parent/child relationships, as in, one can be a subitem of another, and you usually see these in the main menu.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=90)** Pages don't have indexes and they don't have categories and tags.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=95)** The only way to get to them is through a direct link and that's why they usually appear in the main menus.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=103)** Posts are normally used for recent or time-sensitive information like news items and articles.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=111)** Pages are used for static content that is rarely updated and is usually made to be available to help visitors understand information about the site.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=123)** When you create a custom post type, you can create one that acts like either a post or a page.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=130)** Whichever one you choose, the new custom post type will inherit all of the features of either posts or pages.
>
> **[2:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=138)** You can set this post type to act like a post and it could be organized by categories and tags or any custom taxonomy or a combination of all of these.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=151)** Custom post types have separate indexes and you can also create custom index templates, which we'll do later in the course.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=160)** Custom post types can have all of, a combination of, or none of the standard features that you find in posts and pages.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=169)** And you can set this up when you create your custom post type.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=173)** The main takeaway here is that custom post types allow you to create your own type of unique content.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=181)** The term post type is a bit confusing because there's a post type called post.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=188)** An easier way to think about them might be as custom content types.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-post-types?u=76281980&t=193)** Posts and pages are types of content and we can create our own content types like businesses, products, and more.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), type, (1), type. (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### What are custom taxonomies?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=0)** - [Instructor] Here we're going to take a look at custom taxonomies.
>
> **[0:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=3)** So, it's important to understand what a taxonomy is.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=8)** The definition of a taxonomy is a scheme of classification.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=13)** Basically, this means that a taxonomy is a way to organize data, which allows you to relate one item to other similar items in a hierarchical or non-hierarchical group.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=27)** To give you a real-life example, we can take a look at one of my favorite websites, Pen Chalet.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=33)** It's got different types of products in the top navigation: fine pens, inks, accessories, and more.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=40)** These are akin to a product taxonomy but if we dig deeper and look at, say, fine pens there are different types of fine pens, a further taxonomy or classification.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=55)** And if we click on fountain pens we'll see even more taxonomies for brand, type, price, and other ways that we can classify and organize these fountain pens.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=70)** In WordPress, we have two default taxonomies that we can use all the time.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=77)** The first is categories, which are mandatory for posts.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=81)** Every post must have a category.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=84)** Categories are displayed in a hierarchical system so you could have parent and child relationships between them, and if you go to a parent category you'll see all the posts underneath the parent category and underneath any of the children of that parent.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=103)** Categories are akin to Pen Chalet's product types.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=108)** Tags, on the other hand, are optional.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=111)** You don't need to use them and you can use them whenever you want.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=116)** They're non-hierarchical meaning one tag does not relate to another tag in any way.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=122)** And they are a secondary organizational method, much like the filters for brand and price.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=130)** When you create custom taxonomies you can create either hierarchical taxonomies like categories or non-hierarchical categories like tags.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=140)** These taxonomies can be applied to one or several post types and you can also make the custom taxonomies apply to your regular posts within your site.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=152)** Custom taxonomies can have custom indexes and archive templates, so you can display them differently from how you would display the category and tag indexes.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=163)** Custom taxonomies are usually displayed alongside categories and other metadata when you look at a post and, finally, custom taxonomies also allow for more advanced organization of your content.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=177)** In our demo project we'll have two taxonomies.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=182)** One for the size of the business, which will be a tag taxonomy.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=189)** And one for location, which will be more like a category.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/what-are-custom-taxonomies?u=76281980&t=195)** Both of these will help us organize our business directory to help people find the business they are looking for.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), finally, (1), for. (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Speakers:** - [instructor] (1)

#### Where does the code belong?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=0)** - [Instructor] WordPress does an incredibly good job of separating form from function.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=4)** Primarily WordPress is for adding and editing content.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=9)** If we want to control the design, we get a new theme, something that isn't married to WordPress Core or the content inside WordPress.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=19)** If we want to add more features like a slider or contact form, we get a plugin.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=26)** That means that content, design and features can be completely separate from each other.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=33)** As a result, we need to take into consideration where the code for our custom post types and custom taxonomies belong.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=41)** For a long time, these were added to the theme.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=44)** If your theme has specific templates for a custom post type, it seemed to make sense that you'd include the custom post types there as well.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=54)** However, a problem arises with this approach.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=57)** If you decide to change the theme, you're effectively disabling content because it's attached to that theme.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=65)** Instead we'll need to take a two-pronged approach, we'll create a plugin that houses our custom post types and custom taxonomies.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=75)** This gives us the most flexibility on the theme as well.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=79)** We won't need to make other arrangements to keep the content otherwise.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=84)** We'll also create a child theme in order to add the new template we need to create to display our custom post types and taxonomies the way we want.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=94)** A good rule to go by generally speaking is that if our code affects the display of the site, like custom templates or the design, then we should add the code to our theme.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=107)** If our code adds features, we make it a plugin.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/where-does-the-code-belong?u=76281980&t=111)** With that in mind, let's get to creating our custom post types and custom taxonomies.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** function (1), type, (1), let (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Creating Custom Post Types without Code

#### The no-code solution
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=0)** - [Instructor] While we're going to write our own custom post types and taxonomies from scratch with code, it's worth noting that there are a few non-code solutions we can explore.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=11)** The main benefit is that you can get up and running quickly, without a coding environment and you can be fairly confident that the post types will work right out of the box.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=26)** There are two popular plugins that will help us create custom post types and taxonomies without code.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=32)** Custom Post Types UI and Pods.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=36)** Both are popular choices and free from the WordPress Plugin repository, but we're going to use Custom Post Types UI for this video.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=46)** You can start by going to plugins, add new, and searching for Custom Post Types UI.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=53)** This plugin is the one by WebDevStudios.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=57)** Click install now, and then activate.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=62)** Once you activate, you'll be brought to a welcome screen telling you all about the latest version of the plugin.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=68)** You'll also notice a new section in your WordPress dashboard with areas for adding new post types, adding new taxonomies, and the registered types and taxonomies you have, as well as some additional tools and support.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-no-code-solution?u=76281980&t=85)** These screens are how you'll create your custom post types and taxonomies without code.

> [!info]- Semantic Content
>
> **Code Keywords:** new, (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Creating custom post types
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=0)** - [Instructor] Custom Post Types UI gives us a robust interface for creating custom post types and taxonomies without the need for writing a bunch of code.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=9)** Let's start by creating our own business post type.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=13)** If we click on CPT UI, Add/Edit Post Types, you'll see a number of settings to define a custom post type.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=21)** Since we don't have any defined yet, we'll be taken directly to the Add New Post Type tab and no other options appear.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=30)** We're going to take a look at the basic settings first.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=33)** These are required.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=35)** The additional labels, which we'll look at later, are optional, because they can be determined from the basic settings.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=43)** Let's go ahead and create a simple post type called business.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=48)** We'll fill in the post type slug, which will be used for various queries as well as the URL.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=54)** We'll add the plural label which will be businesses and we'll add the singular label which will be business.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=63)** These are the only required settings so we can add the post type.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=68)** Once we do add the post type, you'll notice a new section in the admin called businesses.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=74)** Make note of the pin icon, because we'll be changing that later.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=79)** You'll also notice some new tabs across the top.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-types?u=76281980&t=82)** These tabs allow you to edit, view, and import and export your post types and taxonomies.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), let (2), interface (1), type, (1)
> **Env Vars:** cpt (1), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Creating custom post type labels
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=0)** - [Instructor] If we go to CPTUI add/edit post types and then click the edit post types tab, we'll be able to edit our business type.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=10)** While we configure the basic settings, we have lots of flexibility for what the user sees in the admin.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=17)** Under additional labels, there are lots of fields, thankfully with descriptions and examples for everywhere our post type could show up and needs to be labeled.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=27)** Let's walk through some of these settings.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=30)** There are a lot.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=32)** Luckily, if we don't define a label, WordPress is smart enough to use either the singular or plural label based on the context.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=40)** But in certain areas, or for certain post types, it might make sense to be a little more specific.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=47)** In this instance, we can generally use the singular or plural label everywhere.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=53)** A helpful exercise would be to insert businesses or business into the example to see if it makes sense, and if it doesn't, we should change it.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=63)** So, for view item, view business, or view items, view businesses, makes perfect sense.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=70)** There are, however, a few good opportunities for us to use custom labels.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=76)** For example, in search item, we can change this to find a business.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=84)** Similarly, for our featured images, we're going to be using the business logos.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=90)** So, we can change the labels to correspond with that.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=94)** We can make featured image, business logo, set featured image to set business logo, remove featured image to remove logo, and use featured image to use logo.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=113)** The last label we'll change is archives.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=116)** We'll change that to business directory.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=123)** With that, let's save our post type.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=126)** As you move throughout the WordPress dashboard, keep an eye out for labels that you think can be better worded.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-post-type-labels?u=76281980&t=133)** We can always edit our post type from this screen.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (2), let (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** cptui (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Custom post type capability settings
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=0)** - [Instructor] With all of our labels defined, let's scroll down to Settings.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=6)** These primarily have to do with displaying and searching for the post type.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=10)** We have great descriptions and default values for each.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=14)** Most we'll keep at that default value, but let's walk through them.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=20)** Public, Publicly Queryable, and Show UI all have to do with whether users can see and query the post type on the front end and in the dashboard.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=31)** This might sound a bit strange to include, and in most cases, we definitely do want users to interact with our post types, but sometimes there are instances where the post type actually supports another function.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=45)** Examples of this, in core, are revisions, menus, and custom CSS.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=51)** Show in Nav Menus let's us decide if we want users to add out post types to the menu areas.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=58)** Show in REST API will enable the REST API.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=62)** This is necessary if you want to make the data accessible outside of WordPress.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=67)** As well if you want to use the block editor.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=70)** The following settings allow you to customize the REST API output, if you like.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=76)** Has Archive let's you create an archive page for the post type.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=81)** This is set to false, but we're going to set it to true.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=85)** We can also customize the slug.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=88)** Since our slug for the post type is business, we'll set this slug to business.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=96)** We can also exclude this post type from the general search.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=99)** This is set to false, and we'll keep it that way.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=102)** Next is Capability Type.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=105)** Our post types can take on the properties of a post or a page.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=109)** By default, this plugin chooses post, and we'll keep it that way.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=114)** Hierarchical allows us to set a parent child relationship.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=119)** Since we don't want our business to have child businesses, we'll leave this as false.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=124)** Similarly, we'll leave the Rewrite rule to true.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=128)** This allows WordPress to make our post type URLs pretty.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=133)** With Front will require our post types slug to be used in any rewrite structure.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=140)** The Query Var is used in custom code.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=144)** We'll keep everything default here as well as the Menu Position and Show in Menu.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=151)** The Menu Icon can use any Dashicon, the font icon set that comes with WordPress, or a custom image.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=160)** You can find a full list of the Dashicons over at developer.[wordpress.org](https://wordpress.org).
>
> **[2:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=167)** We are going to use the dashicons-building icon.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=175)** Finally, we can enable support for some built in WordPress functionality.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=180)** We'll leave Supports as is.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=182)** Using only the title, the editor, and the featured image.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=187)** If there's custom functionality built into your WordPress site, you can add Custom Supports in the next field.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=194)** And lastly, we'll enable the built-in tags taxonomy for this post type.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-type-capability-settings?u=76281980&t=200)** Once we save, the main visible difference is the pin icon has changed to a building, but rest assured, these settings control a lot of under the hood features to keep our website and post type running smoothly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type. (4), public (1), include, (1), function (1)
> **Env Vars:** rest (3), api (3), css (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Displaying your post type on the front end
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=0)** With all of our settings in place, let's test our custom post type and see how it looks on the front end.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=7)** First, we'll add a new business.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=9)** Go to Businesses, Add New.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=14)** This will look near exact to the post editor interface.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=18)** Since we have the REST API enabled, we see the block editor.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=22)** The main difference is our custom labels.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=25)** You'll notice, for instance, that the featured image box uses the logo labels we set.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=31)** Let's go ahead and add a business name, and then we'll add some text about the business.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=45)** We'll add a featured image.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=47)** And then we'll click publish.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=50)** When we click View Business, you'll notice that our business uses the default single.php template for our theme.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=58)** We'll learn how to customize that later.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=61)** Also take note of the URL.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=65)** Notice that the slug is business/business name.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=69)** That's due to our rewrite rule and has front settings.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=74)** Finally, if we change the slug to /businesses, we'll be taken to the archive.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=83)** Something to point out here is that we don't see our business directory archive label.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=90)** That's strictly for nav menus as each theme controls what's displayed on the archive pages.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=96)** This is something else that we can change in code.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=100)** We've successfully created our first custom post type.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-your-post-type-on-the-front-end?u=76281980&t=103)** I encourage you to click around the dashboard to see where our post type pops up and how it behaves relative to post and page types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), new. (1), interface (1), finally, (1), type. (1)
> **Env Vars:** rest (1), api (1), url (1)
> **File Paths:** single.php (1)
> **CLI Commands:** php (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** for instance (1)


### 4. 3. Creating Custom Taxonomies without Code

#### Creating custom taxonomies
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=0)** - [Instructor] Custom Post Types aren't the only thing that Custom Post Types UI allows us to create.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=6)** We can also create Custom Taxonomies.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=9)** Let's create a Size Taxonomy now to organize our businesses.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=13)** If we click on CPT UI, Add/Edit Taxonomies, you'll see a number of settings to define a Custom Taxonomy.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=22)** Since we don't have any defined yet, we'll be taken directly to the Add New Taxonomy form and there are no other tabs that appear at the top.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=30)** We're going to take a look at the Basic Settings first.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=33)** These are required, the additional labels, which we'll look at later, are optional.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=39)** They can be determined from the Basic Settings.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=42)** Let's go ahead and create a simple Taxonomy called size.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=46)** We'll set the Slug to size, we'll set the Plural Label to Sizes and we'll set the Singular Label to Size.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=55)** Now let's attach our Taxonomy to a Post Type.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=60)** You can see that Posts, Pages and Media are all included in WordPress Core and then we have the businesses Custom Post Type that we created.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=69)** Let's go ahead and check that now.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=72)** These are the only required settings so we can save now, leaving the rest of the options at their defaults.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=79)** Let's go ahead and click Add Taxonomy.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=81)** Once we do that, you'll see some new tabs across the top and if we hover over businesses, you'll see the Sizes Taxonomy has been added.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomies?u=76281980&t=92)** If we click Add New you'll see there is a new option on the right for Sizes Taxonomy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type. (1)
> **Env Vars:** cpt (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating custom taxonomy labels
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=0)** - [Instructor] If we go CPT UI, and click on Add/Edit Taxonomies, and then click on the Edit Taxonomies tab, we'll be able to edit our sizes taxonomy.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=11)** While we configured the basic settings, we have lots of flexibility for what the user sees in the admin.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=17)** Under Additional Labels, there are lots of fields thankfully with descriptions and examples for everywhere our taxonomy could show up.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=27)** Let's walk through some of these.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=31)** Just like with post types, if we don't define a label, WordPress is smart enough to use an appropriate one.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=38)** In some instances, that will be the singular or plural label.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=43)** It could also be the word tag or category based on how we characterize our taxonomy.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=52)** In the instance of our sizes taxonomy, we can generally use the singular or plural label everywhere.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=59)** A helpful exercise would be to insert sizes, size or business size into the example to see if it makes sense.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=67)** If it doesn't, we should change it.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=70)** It's also worth noting that some of these labels will only apply based on the Advanced settings.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=75)** For example, parent item colon will only apply if we make our taxonomy hierarchical.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=85)** While the words sizes or size will make sense for pretty much every label here, let's make a couple of changes.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=94)** If we scroll down to Choose From Most Used, we can change this to choose from the most common sizes.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=108)** Item List Navigation can be changed to Browse Business By Size.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=114)** With that, let's go ahead and save our taxonomy.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=119)** As you move throughout the WordPress dashboard, keep an eye out for labels for your taxonomy that you think can be better worded.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-custom-taxonomy-labels?u=76281980&t=126)** We can always edit the taxonomy from this screen later.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (3)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** just like (1), for example (1)
> **Env Vars:** cpt (1)
> **Speakers:** - [instructor] (1)

#### Customizing the taxonomies' settings
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=0)** - [Narrator] With our labels defined, let's scroll down to settings.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=6)** These primarily have to do with displaying and searching for the taxonomy.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=10)** Again, we have great descriptions and default values for each.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=14)** Most we'll keep at the default value.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=16)** Let's go ahead and walk through them.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=19)** Public, Public Queryable, and Show UI all have to do with whether users can see and query the taxonomy, both on the front end and in the dash board.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=29)** Hierarchical allows us to create parent/child relationships between the taxonomy terms.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=36)** For example, if we wanted a size of big and then a child size of 1000 plus employees, we can do that here.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=44)** We are going to keep it at the default value of false.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=49)** Show in menu determines if the taxonomy will show up in the admin menu under the post type it's associated with.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=57)** Show in nav menu allows us to make the taxonomy available for selection in the navigation menus.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=65)** Query Var is used in custom code.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=68)** We'll leave everything at the default here.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=72)** Rewrite is whether or not Word Press should use rewrites for this taxonomy, and the Custom Rewrite Slug is the custom portion of the URL we want to use.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=82)** We are going to keep this at the default of size.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=86)** Show Admin Column allows us to show the taxonomy when it show up on the View Post Type listings.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=94)** Let's set this to true.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=97)** Show in REST API allows us to expose the taxonomy information outside of Word Press, as well as makes it show up in the block editor.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=107)** We'll leave the other REST API options at the default.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=113)** We'll also set Show in quick/bulk edit panel to true.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=117)** So that we can bulk add sizes to businesses.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=121)** Finally, we can set the callback function for the taxonomy's metabox here if we want to apply some custom code to it from a theme or plugin.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=130)** We'll leave this as is.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=133)** Let's go ahead and click save taxonomy.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=136)** The main differences you'll notice here are that on the businesses listings admin page, we'll see sizes show up.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-the-taxonomies-settings?u=76281980&t=144)** Similarly, if we click edit, after selecting businesses, the sizes show up there as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (2), var (1), default. (1), finally, (1)
> **Env Vars:** rest (2), api (2), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Importing and exporting your data
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=0)** - The last area of this Plug-in to point out is the Tools area.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=4)** If we hover over CPT UI and click on Tools, you'll see we have the ability to Import and Export Post Types and Taxonomies.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=15)** This Plug-in uses both JSON and PHP for exporting and JSON for importing.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=22)** Both Post Types and Taxonomies have their own tabs.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=26)** So we can grab the export JSON individually for each.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=32)** With the export JSON, each individual Post Type or Taxonomy is wrapped in JSON, but it's all in the same export field.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=40)** So you can choose to copy all of it, or select individual exports.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=46)** To import JSON, paste the JSON from the export field into the import field on the new site.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=54)** It's important to note that if we do import JSON through this Plug-in, it will overwrite previously registered settings.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=64)** If we go to the Get Code tab, you can find PHP generated for the Post Types and Taxonomies we registered.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=72)** The first box includes all custom Post Type code that's generated.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=77)** We can copy this and paste it into our theme or Plug-in.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=81)** Then, we have the code for each individual Post Type and the same goes for Taxonomies.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=87)** We can get all of the Taxonomies as one piece of code, or each individual Taxonomy as its own piece of code.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=97)** Custom Post Types UI provides a great way to generate the most tedious code without having to write it yourself.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=104)** Then you can copy the code, paste it into your own Plug-in and disable and delete the Plug-in.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=112)** And again, you can do that for all Post Types and Taxonomies or just individual ones.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=120)** This was a quick look at one No-Code solution for generating Custom Post Types and Taxonomies.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=126)** Plug-ins like Custom Post Type UI provide a great way to get introduced to all of the options for defining Post Types and Taxonomies.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/importing-and-exporting-your-data?u=76281980&t=135)** And even gives us a nice starting point for writing our own code.

> [!info]- Semantic Content
>
> **Env Vars:** json (8), php (2), cpt (1)
> **CLI Commands:** php (2), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Code Keywords:** delete (1)
> **Warnings:** note that (1)
> **Speakers:** - the (1)


### 5. 4. Coding Your Own Custom Post Types

#### Creating your plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=0)** - [Instructor] As we write the code to add custom post types and taxonomies to our WordPress site, there are two tasks we need to accomplish.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=8)** Add the code for our custom post types and taxonomies, and modify our theme to add templates for the newly created custom post types and taxonomies.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=18)** These new post types and taxonomies will go in a separate plugin.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=22)** Which will be used to control the content.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=25)** This ensures that our code is theme agnostic, or at least the parts that can be.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=31)** Open up your favorite code editor and head over to /wpcontent/plugins in your WordPress development site.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=41)** Now we're going to create a folder in the plugins folder called lil-post-types.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=50)** Anytime we need to prefix something, we'll use lil for LinkedIn Learning.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=56)** Inside of the lil-post-types folder, we're going to create a new file with the same name.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=62)** Lil-post-types.php.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=68)** This will be the driver for our plugin.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=73)** The first thing we'll do is write the opening PHP tag and then add our plugin definition comment block, which we can get from the exercise files.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=83)** So we'll copy this whole block here, and then we'll paste it into our file.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=90)** This is what shows up in the WordPress dashboard, and includes things like the plugin name and URL, the description, the author, and more.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=100)** Next we're going to make sure that our plugin isn't accessed directly.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=105)** So we'll write if not defined, and then we're looking for a specific WordPress constant here called WPINC.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=115)** If this constant is not defined, we are going to write the directive die, and again, what we're saying here, is if a WordPress isn't accessing this file, then don't let anything happen with the file, and it's a simple security measure.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=131)** The last thing we're going to do is write some constants, and we can get those constants from the exercise files as well.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=140)** So we'll copy all of the define lines here, and we'll paste them into our file.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=150)** These are simple constants that generally come standard with a lot of plugins, and we're defining the version, the domain, and the path.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=159)** Most importantly here is LILPATH, which is grabbing the plugin directory.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=164)** This is going to come in handy as we continue to write out our plugin.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=169)** So with that, let's go ahead and save our file.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=174)** If we go to Plugins, Installed Plugins, you'll see the newly defined plugin we created, and if we click activate, our plugin becomes active.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=185)** But since we haven't added any other code, there are no noticeable differences to our WordPress dashboard.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-your-plugin?u=76281980&t=190)** With our plugin defined, it's time to start adding our custom post type code.

> [!info]- Semantic Content
>
> **Env Vars:** php (1), url (1), wpinc (1), lilpath (1)
> **CLI Commands:** php (2), make (1)
> **Code Keywords:** let (2), continue (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** lil-post-types.php (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Building a basic custom post type
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=0)** - [Instructor] Now that our plugin is defined, let's go ahead and create our custom post type.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=5)** First, we'll start with the basic definition of a custom post type, and then we'll move on to the settings and labels area.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=13)** One note is that if you're using the same WordPress install that you used with Custom Post Types UI for your own plugin, you should deactivate Custom Post Types UI in order to avoid conflict.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=27)** If you want to use it as a reference, make sure to grab that export or set up a completely different development site for the plugin and theme so we don't lose the work or avoid conflicts.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=39)** The first thing we're going to do is in our lil-post-types plugin, we're going to create a new directory called post-types.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=49)** This will be where all of our post types code is included.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=53)** And inside that folder, we're going to create a new file called register.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=60)** Now before we start adding code to register.php, we're going to go back to lil-post-types.php, and we're going to add this line to the end of the file.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=71)** Require_once LILPATH, that's LILPATH in no quotes, that's the constant that we have defined in our plugin.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=81)** A period for concatenation, and then slash post dash types slash register dot PHP.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=92)** This will ensure that our post-types file is included in the plugin.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=100)** Going back to register.php, we'll write the opening PHP tag.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=105)** For the basic definition of this custom post type, we're going to start with the slug, the plural, and the singular labels.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=116)** Now since our post types need to be registered based on a WordPress action, we'll need to create a callback function.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=123)** We'll call that function lil_register_business_type, so we'll write that out here.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=134)** And we will add the action call later.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=137)** For now, let's start with some setup for our function.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=141)** We're going to create two associative or key value arrays, one for the labels, and one for the arguments.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=149)** The labels is where all of our labels go, and for now, we only need two.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=154)** For the name, which is going to be the same as the plural label, and the singular name.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=161)** So we'll create a new variable called labels, and we'll make this an array.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=170)** We're doing this because it's going to make our code a little bit cleaner as we continue to add the labels and arguments.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=177)** So the key for the plural name is name, and then we're going to add the string that we want to use, which is going to be Businesses.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=188)** Notice here I'm wrapping our string in the internationalization function that's built in to WordPress.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=197)** I'm also using the LILDOMAIN as the text domains.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=202)** This ensures that if someone's using a translated version of WordPress, our labels will be properly translated.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=210)** Now we'll do the same thing for the singular name, which is going to be singular underscore name, and we're going to make that Business.
>
> **[3:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=226)** All right.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=228)** So with our labels array set up, let's set up the arguments array as well.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=233)** We're going to call this args.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=235)** This is going to be an array as well.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=239)** And the first key is going to be for the labels, and we're going to pass our labels array to it.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=248)** The second key is going to be for the public argument.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=255)** This is false by default, so we'll need to make it true to expose our custom post type on the WordPress admin and the front end.
>
> **[4:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=265)** And finally, we are going to call the register_post_type function, which will register our custom post type.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=273)** So we'll write register_post_type, and this accepts two arguments, a slug, which is going to be business, and an array of arguments, which we've already named args.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=290)** So we'll save this file, and then the last thing that we need to do is go back to lil-post-types.php, and right under the require_once call, we're going to add a new action.
>
> **[5:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=303)** We're going to say add_action init, which means that we want our function to be called as soon as WordPress is initialized, and we're going to pass the name of the function we just wrote, which is lil_register_business_type.
>
> **[5:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=322)** Let's go back to our WordPress installation, where we've already activated our plugin, which means that if we refresh, we now have the Businesses post type showing up.
>
> **[5:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-post-type?u=76281980&t=332)** With that, let's take a look at customizing our post type even further.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (5), type. (2), type, (2), pass (2)
> **CLI Commands:** php (6), make (5)
> **Code Identifiers:** lil_register_business_type (2), register_post_type (2), require_once (1), add_action (1)
> **Prerequisites:** set up (3), install (1), before we start (1), setup (1)
> **Env Vars:** lilpath (2), php (2), lildomain (1)
> **File Paths:** register.php (2), lil-post-types.php (2)
> **Cross-References:** go back to (3)
> **Definitions:** means that (2)

#### Customizing your post type labels
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=0)** - [Instructor] Now that we have a good structural foundation for our business type, let's take a look at how we can customize it even further.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=8)** In the CPT UI plugin you might remember that there were additional labels and settings that had their own sections.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=14)** And each of these correspond with the arrays that we've set up, labels and arguments.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=20)** Let's first look at the labels we can customize.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=25)** We're going to head to the WordPress codex for the reference to register post type.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=30)** This website will be your best friend because it shows us exactly what we need to pass to the labels and arguments arrays.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=39)** If we scroll down the page to the argument section we'll see a full list of all of the arguments that could be passed to register post type.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=47)** And in the labels array, we'll see a full list of all of the labels that we can customize.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=55)** So if we go back to our code, let's start with customizing the featured image labels.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=64)** In the register.php function, we are going to start by setting up some new key value pairs.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=70)** The first is going to be featured image.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=76)** We're going to internationalize these strings again, and we want to change the featured image label to business logo.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=90)** We're going to do the same thing for set featured image, remove featured image, and use featured image, all of which serve as the keys for the labels array.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=100)** So first we'll do set featured image, and I'm going to copy the featured image text, so that I can paste it later.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=111)** We'll change this to set business logo, add our text domain, and then we'll do the same thing for remove featured image.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=125)** And now we can paste that text I copied.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=132)** We'll make this remove logo.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=137)** And finally, use featured image.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=139)** So we'll type use, and then we'll paste the text that we just copied, and we'll change this to use logo.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=152)** Now there was one more label that we were able to customize using CPT UI, and that was the archives label.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=161)** So let's go ahead and do that now.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=164)** Again, if we reference our labels here on the codex, you'll see all of the ones that we added featured, set, remove, and use featured image, and then you'll also find the archives key, so that's the key that we'll use.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=179)** We'll type archives, and we'll change this to business directory.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=193)** If we go to businesses add new, we'll notice a couple of things, first of all we're still using the classic editor.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=198)** Second, we don't see the featured image area or much of anything, and that's because those get passed to the arguments array, which we'll look at shortly.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=207)** But the other thing is, if we look at the top we see the word add new post here.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=211)** So let's go back to our codex, and see how we can customize that text.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=217)** You'll see that there's a key called add_new, so let's copy that.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=222)** And we'll paste that into our labels array.
>
> **[3:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=230)** And we'll change that to add new business.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=239)** So we'll save that, we'll go back to our WordPress dashboard, and if we refresh, you'll see the add new business label here in the menu.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=253)** And then the last thing we'll do is grab the add new item label, which will change the title on the screen.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=262)** So we'll paste that, and we'll make it the same text as above, which we'll just copy and paste.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=273)** Now if we go back to our admin and refresh again, now we see add new business in both places.
>
> **[4:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=280)** So that's how we were able to customize the labels.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-labels?u=76281980&t=282)** Now, let's look at how we can fully customize and add support to our post edit screen.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (2), type, (1), pass (1), function (1)
> **CLI Commands:** make (2), php (1), find (1)
> **Cross-References:** go back to (4)
> **UI Navigation:** scroll down (1), go to (1), in the menu (1)
> **Env Vars:** cpt (2)
> **File Paths:** register.php (1)
> **Code Identifiers:** add_new (1)
> **Prerequisites:** set up (1)

#### Customizing your post type settings
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=0)** - [Instructor] With our labels set, let's turn our attention to the settings, which we're going to pass through the argument array.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=8)** The codex makes it clear which of these arguments are true by default, and which are not, making it easier for us to know what we need to pass through code.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=19)** There are a few things we do want to set, though, such as have archives, the rewrite rule, we want to set the menu icon, and we want to make sure to add those supports.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=29)** If we look at the current state of our Add New Business screen, you'll see that while we have the title and editor, we don't have the featured image, and the block editor is not enabled, but we'll touch on that later.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=44)** So let's go back to our code and in the arguments array, we'll start adding some key value pairs.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=51)** The first is has_archive.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=55)** We're going to set this explicitly to businesses.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=59)** Remember our slug is business, but we want this to represent the fact that there are multiple businesses.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=66)** Next is rewrite.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=70)** We want to make sure that has_front is set on for the rewrite rule, and rewrite is actually an argument that accepts an array as its value, so we're going to set up another array, and we're going to turn on has_front.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=88)** This will give us the URL structure that we want.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=92)** Next is the menu icon, we want to customize the menu icon, using the key menu_icon, and we want to set it to the dashicons-building.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=107)** Finally, we want to explicitly set what elements of the post screen hour custom post type supports.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=116)** That's going to be using the supports key and this, also, accepts an array of arguments.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=122)** We'll explicitly set title and editor, even though those are on by default, as well as thumbnail, which represents the featured image.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=132)** Again, if you ever need to reference any of the other arguments, or you want to read a little bit more about what we've added here, again you can always reference the codex.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=143)** So if we save this, and then go back to our Word Press Dashboard, let's go ahead and refresh the screen.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=153)** So you could see the featured image area, which is properly labeled business logo, is showing up, but the label for set feature image is not.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=162)** Let's go back to our code, and see what's going on there.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=166)** Looks like we missed a d in each of our labels, so let's go ahead and change those now.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=173)** We'll save, and we will refresh, and now our labels are showing up properly.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=180)** You can also see that the menu icon has changed to the business.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/customizing-your-post-type-settings?u=76281980&t=184)** Everything looks good now, except we're still using the classic editor, so let's learn how we can turn on the block editor for our custom post tags.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), default, (2), this, (2), finally, (1)
> **Code Identifiers:** has_front (2), has_archive (1), menu_icon (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Env Vars:** url (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### Activating the REST API on your post type
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=0)** - One of the arguments we haven't set yet is for the REST API which should get some special attention.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=6)** Aside from allowing our post type data to be accessible from outside WordPress via an API, there's another crucial feature that the REST API turns on.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=18)** If we look at the post edit screen for creating a new business right now, you'll see the classic editor.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=25)** The one that existed pre 5.0.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=28)** The other feature that's included in the REST API support is enabling the new block or Gutenberg editor.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=35)** Let's go ahead and do that now.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=38)** If we reference the Code X and we scroll down towards the bottom we'll see a key called show_in_rest.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=52)** There are also two other rest related arguments for rest base and rest controller class.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=58)** But we will definitely leave those at the default.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=61)** So let's go ahead and copy the show_in_rest key which is set by default to false.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=70)** Then we'll go back to our code and under the supports key, we'll paste in show_in_rest and we'll set it to true.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=80)** If we save our file and then go back to our WordPress edit screen and refresh, the block editor is now showing up.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=91)** As it stands now, you need to set show_in_rest to true to enable the block editor.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=97)** This is recommended if you want the editing experience to match posts and pages.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-on-your-post-type?u=76281980&t=101)** However, if you plan on making heavy customizations to that screen by using something like advanced custom fields, you may want to keep it set to false and rely on the classic editor.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), rest (3)
> **Code Keywords:** let (2), class. (1), default. (1)
> **Code Identifiers:** show_in_rest (4)
> **Cross-References:** go back to (2)
> **Versions:** 5.0 (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** recommended (1)
> **Speakers:** - one (1)

#### Creating a post with your post type
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=0)** - [Instructor] Now that our business post type is created, let's see how it works, both in the admin, and on the front end.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=7)** If we go to Businesses, Add New, you can see that we have the block editor.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=12)** So we can add a title, so let's add the business Leaf and Mortar, and then we'll add some text to the block editor area, and we can click on the Document tab over here, and add a logo.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=33)** If we click Publish, we can then view the post, but notice that we're getting a 404, even though we just published.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=41)** That's because we haven't told Wordpress to update the permalinks to include the rewrite rules we set in our custom post type settings.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=50)** The way that we can do that is by forcing it on the permalinks page in the admin.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=57)** So we'll go to the Dashboard, and then go to Settings, Permalinks, and we'll click Save Changes.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=65)** Now, if we go back to our Leaf and Mortar post, we can see everything is working properly.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=74)** And if we go to /businesses, we'll see our archive page is showing up properly as well.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=82)** One note about flushing the rewrite rules is that we don't necessarily need to do it through the admin.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=88)** We can also set it in code, using the flush rewrite rules function.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=94)** We might want to exercise caution with this though, to make sure that we don't call it too much.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=99)** A good example of where to place flush rewrite rules would actually be right after you register a custom post type.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=106)** We'll look at this a little later.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=109)** But for now, congratulations.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-post-with-your-post-type?u=76281980&t=111)** You've now written and published your first custom post type using code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), new, (1), function (1), type. (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create an events post type
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=0)** - [Instructor] Now that you've watched how a custom post type is created within Word Press, it's your turn to create your own.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=12)** Using what you've learned, I want you to create your own post type for events.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=18)** And we'll want to have all the furnishings that we had for businesses.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=23)** Name it Events.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=24)** Make sure the block editor is enabled.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=27)** Create the appropriate rewrite rules with the has front setting set.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=33)** Add a custom menu icon of your choice.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=36)** And be sure to include custom labels where appropriate.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=40)** This challenge should take you no more than five minutes to complete.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=44)** And if you look at the existing code, as well as the register post type documentation on the Word Press codex, you should have all the information you need to complete the challenge.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-create-an-events-post-type?u=76281980&t=54)** Once you do complete the challenge, you can view the next movie where I show you the solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create an events post type
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=0)** - [Narrator] Now that you've completed the challenge of creating an events type, I'm going to show you how I would solve the problem.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=13)** So the first thing we'll do is copy our function that defines our business type.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=18)** We're going to use this as a boilerplate for the events type.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=22)** We'll copy the function in its entirety, and then we'll paste it below.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=27)** We'll also change the function name to lil_register_event_type.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=33)** Next, we'll change the labels.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=35)** The first thing we'll do is delete all of the featured image labels here, and we'll just use the standard labels for that.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=44)** Next, we'll change name to Events.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=48)** We'll change singular_name to Event.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=52)** We'll change archives to Events Calendar.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=59)** And we'll change add_new and add_new_item to Add New Event.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=68)** Moving down to our argument array, we're going to change the value of has_archive to events.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=76)** We're going to change the menu_icon to dashicons-calendar.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=82)** And then finally we will change register_post_type from business to event.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=88)** The last thing we'll need to do here is go to our lil-post-types.php file and make sure we add our new function to the init action.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=98)** So we'll copy the add_action line, and then we'll paste the copy below, and rename lil_register_business_type to lil_register_event_type.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=111)** Now if we save this and go back to our dashboard, and if we hit refresh, our new events type will show up, and if we click on Add New Event, we will see the Add New Event label, we'll see the block editor, and the featured image labels are now the default.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=130)** So that's the solution that I came up with for this challenge.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-create-an-events-post-type?u=76281980&t=133)** Yours could be different and might be different, but that's okay as long as everything is working properly.

> [!info]- Semantic Content
>
> **Code Identifiers:** lil_register_event_type (2), singular_name (1), add_new (1), add_new_item (1), has_archive (1)
> **Code Keywords:** function (4), type. (2), type, (1), delete (1), default. (1)
> **CLI Commands:** php (1), make (1)
> **File Paths:** lil-post-types.php (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [narrator] (1)

#### Extending post types with custom fields
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=0)** - [Instructor] While there are lots of benefits to creating new custom post types with their own URLs and organization structure, there's a lot more you can do with them.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=9)** Often times you'll find custom post types aren't just the new types themselves but they have custom fields or custom data associated with them.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=19)** We create new post types because they're housing data that's not necessarily relevant to a post or a page but how do we add that extra data?
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=29)** Well, there are a few ways.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=33)** First, WordPress does have native support for custom metafields.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=38)** If you add that support to your post type via the support argument, you'll see a new metabox on the post edit page.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=46)** You can add one off custom fields that way but this can get a bit tedious as there are other, more robust ways to add custom field support.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=57)** The most popular way is with Advanced Custom Fields.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=61)** This is a free plug in that let's you extend any of your post types, modify the post edit screens and much more.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=69)** It also has a drag and drop interface that makes creating custom fields, including complicated ones, as easy as possible.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=79)** We have a full course on Advanced Custom Fields which you can find in our library.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=86)** There are also coding frameworks that you can use.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=89)** Perhaps the most popular one of these is CMB2, or custom metaboxes two.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=95)** You would download this from github, include it in your plugin and then define the fields in code.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=100)** Finally, you'd associate them with your post types.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=104)** This reduces dependency on another plugin and gives you a bit more control over the code you're using but it will require a bit more work to get these fields up and running.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=115)** Luckily, CMB2 is well-documented.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/extending-post-types-with-custom-fields?u=76281980&t=120)** I recommend Advanced Custom Fields because of the affordable price for the pro version, the fact that it has a free version you can try and all of the incredible features outside of custom field support, that it offers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), interface (1), finally, (1), require (1)
> **CLI Commands:** find (2)
> **Env Vars:** cmb2 (2)
> **Tools:** github (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Coding Your Own Custom Taxonomies

#### Building a basic custom taxonomy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=0)** - [Instructor] Now that we have some custom post types, let's create a custom taxonomy to organize them.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=6)** First, we'll get the basic definition of the taxonomy down, and then we'll move on to the more advanced customizable settings.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=15)** In our plugin lil-post-types, we're going to create a new directory called taxonomies, and inside that folder, we're going to create a new file called register.php.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=32)** In lil-post-types.php, we're going to use the require_once function to grab that register file.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=40)** So I'm going to copy the require_once that we're using to pull in our post types, I'll add a couple of lines to the end of the file, I will paste that line, and then I will change post-types to taxonomies.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=57)** Then we'll save that.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=59)** Back in our register file, I'm first going to do the opening PHP tag, and then we're going to create a function to register our size taxonomy.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=71)** So we'll call that function lil underscore register underscore size underscore taxonomy.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=81)** And this is where we will define our taxonomy.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=85)** For the basic definition of our taxonomy, we're going to need to pass in a plural and singular label, the slug, and the post types that our taxonomy is attached to.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=97)** So we're going to set up a couple of arrays similar to the ones that are set up for our post types.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=104)** So first we're going to create a labels array, and we're going to pass two key value pairs to it.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=113)** The first is name, which will be Sizes, and we'll internationalize this again.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=123)** And then the singular name, which will be Size, and then include LILDOMAIN for the text domain.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=139)** Next, we're going to set up our arguments array.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=143)** We'll call this args, we'll make it an array, and this array is also going to accept a couple of key value pairs.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=151)** The first is labels, which we'll pass our labels array to.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=158)** And the second is public, which we'll explicitly set here.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=163)** So we'll set public to true to make sure our taxonomy shows up in the admin.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=169)** There's also one more array that we're going to create, and that's called post_types.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=175)** This will be used to attach our taxonomy to our post types.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=180)** So we'll create a new array, and we're going to pass the slug of the post types we want associated with the size taxonomy.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=190)** Right now that's just the one called business.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=195)** Finally, we will call the register_taxonomy function.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=204)** This is going to accept a slug, which we'll call size, it's going to accept the post_types, and it's going to accept the args array.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=214)** We'll save this file and then the last thing we'll do is attach our registration function to the init action.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=224)** So we'll write add_action init, and then we'll pass the name of our function, which is lil_register_size_taxonomy.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/building-a-basic-custom-taxonomy?u=76281980&t=238)** If we save this and then go to our WordPress dashboard, you can see we're looking at the business listings, so we'll refresh, and you'll see the Sizes taxonomy show up in the admin underneath Businesses.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), pass (5), public (2), let (1), finally, (1)
> **Code Identifiers:** require_once (2), post_types (2), register_taxonomy (1), add_action (1), lil_register_size_taxonomy (1)
> **CLI Commands:** php (3), make (2)
> **Prerequisites:** set up (3)
> **File Paths:** register.php (1), lil-post-types.php (1)
> **Env Vars:** php (1), lildomain (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### Creating an advanced custom taxonomy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=0)** - Now that we have a good structural foundation for registering our size taxonomy, let's look at how we can customize it even further.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=9)** Customizing a taxonomy is very similar to customizing the custom post type.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=15)** And if we look at the Codex page for register taxonomy, we'll see a lot of the same arguments.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=22)** There's a label and a labels array, many of the key value pairs for the labels array are exactly the same as the custom post type, and then we have a lot of the same arguments.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=35)** This is going to make familiarizing yourself with both taxonomies and post types a bit easier.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=41)** If we go back to our code, the first thing we'll want to do is customize the labels.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=46)** And in most cases, the labels here will make sense.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=50)** Add sizes or add new size is a perfectly fine label for our new taxonomy.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=56)** However, because our taxonomy isn't hierarchical, it takes on the properties and labels of tags, which means that you will see the label add new tag in the dashboard.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=68)** So let's at least make that change.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=70)** We'll add the key add new item and then we'll add the label Add New Size.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=83)** We'll then include our text domain for internationalization, and that's the only label that we're going to customize here.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=92)** For the arguments, according to the Codex, many of the arguments that we would want to use are the default settings.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=101)** But, there are two that we're going to want to set here.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=104)** Show admin column and show in quick edit, which we want to set both to true.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=109)** So let's start with show admin column.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=112)** This'll be the key, show underscore admin underscore column, and we'll set that to true.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=121)** This is all going in our args array.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=124)** And the same thing goes for show in quick edit.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=130)** Which we'll also set to true.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=134)** Now if we save this and we go to the admin area for sizes, if we refresh, you'll see the label has changed.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=144)** And if we click on Businesses, you'll see sizes show up right in the admin column.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=151)** Now there are lots of other great settings that we left at the default.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=155)** If you want size to be hierarchical, for example, you can send that through the args array.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-an-advanced-custom-taxonomy?u=76281980&t=160)** I recommend keeping this Codex link pretty handy as you do more development for both taxonomies and custom post types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1), type, (1), default. (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### Activating the REST API for your taxonomy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=0)** - [Instructor] One of the options we haven't set yet is for the REST API.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=4)** Aside from allowing our taxonomy data to be accessible from outside WordPress via an API, there's another crucial feature that the REST API turns on.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=14)** And it's related to adding REST API support for our post type.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=20)** If we look at the post edit screen for creating a new business, you'll notice on the right side bar our taxonomy is missing.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=27)** That's because we haven't added REST API support.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=31)** It's worth noting that our taxonomy would show up just fine in the classic editor.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=36)** Basically, if you enable it for the post type you should also enable it for any related taxonomies.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=43)** If we head over to the codex we can find the show_in_rest key which is false by default.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=51)** Let's go ahead and copy that and go back to our code editor.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=55)** In the args array we will paste that key and set it to true.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/activating-the-rest-api-for-your-taxonomy?u=76281980&t=62)** Now, we'll save and if we go back to our WordPress dashboard and refresh the new business post edit screen you'll see the next size taxonomy show up.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), rest (4)
> **Code Keywords:** type. (1), default. (1), let (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** show_in_rest (1)
> **Speakers:** - [instructor] (1)

#### Adding taxonomy terms to your post types
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=0)** - [Narrator] With all of the code for our taxonomy set let's add some to our businesses.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=6)** We'll go ahead and click on businesses and then click on one of our sample businesses.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=11)** Let's do Leaf and Mortar.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=14)** From the right sidebar we can add a new size.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=18)** Let's add small, since Leaf and Mortar is a small business.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=23)** We'll then click update, and if we view this post you'll notice that nothing has changed.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=30)** That's because our custom taxonomy isn't being pulled on the template that's rendering this page.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=37)** We'll address that later.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=40)** But if we go to sizes, and then view the small size, you'll notice that we're getting that 404 error again.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=49)** And that's because we haven't flushed the rewrite rules since defining our taxonomy.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=55)** Let's go to dashboard, settings, permalinks, and then click save changes.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=63)** Now if we go back to businesses, sizes, and click on the view for small, we see the size archive.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=72)** It's worth noting that the URL structure for our size archive is size-slash-small.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=80)** If we try to go to just slash-sizes that page won't be found because unlike businesses, which has a top level archive page that is slash-businesses, our taxonomies do not.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-taxonomy-terms-to-your-post-types?u=76281980&t=93)** They need at least two levels, the taxonomy slug, which is size, and the term slug, which in this example is small.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (3)
> **Code Keywords:** let (4)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Make location taxonomy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=0)** - [Instructor] Now that you know how to define and register a custom taxonomy it's your turn.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=11)** Another way we can organize our business post type is by location.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=16)** And we can also keep this taxonomy generic enough to apply to our events.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=21)** So, in this challenge I want you to use what you've learned to create a location taxonomy.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=27)** The name should be Location.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=29)** You should enable the block editor only if necessary.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=33)** Create the appropriate rewrite rules.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=35)** Make this one hierarchical and include custom labels.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=41)** Now, we haven't made a taxonomy hierarchical yet, but make sure to use the codex to help you out here.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=48)** Imagine that we could have a broader location like the United States and then a child location, a smaller area, like New York.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=58)** Be sure to use the custom code and the codex as reference material and you should have everything you need to complete this challenge.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/challenge-make-location-taxonomy?u=76281980&t=66)** It should take around five minutes and you can check out the solution in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Make location taxonomy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=0)** - [Instructor] Now that you've created a location taxonomy, let's take a look at how I would do it.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=11)** Since we have our register size taxonomy function here, we're going to copy that and use it a boiler plate for our location taxonomy.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=20)** We'll go ahead and paste that right into the register.php file inside our taxonomies folder.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=26)** Then we'll rename this function to lil_register_location_taxonomy.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=33)** We'll change the labels.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=34)** So we'll change Sizes to Locations, we'll change Size to Location, and we'll change Add New Size to Add New Location.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=46)** In the args is where it gets a little tricker because we want this taxonomy to be hierarchal.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=53)** So the first thing we'll need to do is add the hierarchical key and we'll set that to true, it is false by default.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=65)** And then we'll also set our rewrite rules.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=68)** Because we are making this a hierarchical taxonomy we want to make sure we have the appropriate rewrite structure in place, so we'll set this array and there are two keys we're going to set.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=81)** This array accepts a key called hierarchical as well, which we'll set to true.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=90)** And we'll set the key has front to true as well.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=98)** We'll associate this post type with business and event.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=104)** And then when we register the taxonomy we'll change the size slug to location.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=110)** The last thing we'll need to do here is add our function to the init action so we will copy this function name and then we'll go to lil posttypes.php.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=122)** We'll scroll to the bottom here.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=125)** And then we will add the new action.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=128)** So we'll write add action, we'll add it to the init action like our other taxonomy and then we'll paste the function name in.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=140)** If we save this and go to the front end of our website, and refresh the page we'll now see the locations taxonomy showing up in both businesses and events.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=155)** And if we click on Locations and add a new location let's say United States and then click Add New Location, now we can add a new taxonomy term for New York and we can make the parent category United States.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=176)** Notice that there's also an opportunity here to change parent category to parent location.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/solution-make-location-taxonomy?u=76281980&t=182)** But that's it for the solution we have successfully created a hierarchical taxonomy called location.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2), default. (1)
> **CLI Commands:** php (2), make (2)
> **UI Navigation:** go to (2), click on (1)
> **File Paths:** register.php (1), posttypes.php (1)
> **Code Identifiers:** lil_register_location_taxonomy (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. Creating Custom Post Type Templates

#### The WordPress template hierarchy
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=0)** - [Instructor] WordPress has some pretty great fallbacks for new content.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=4)** So we technically don't need to do anything to have our post types supported on the front-end.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=9)** However, we may want to customize those templates.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=13)** Understanding the template hierarchy is key to doing that.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=17)** On the screen here, you can see a nice visualization of the WordPress template hierarchy.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=23)** We'll work through this, left to right, but I do want to point out the entry all the way to the right.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=29)** Everything boils down to the index.php template.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=34)** This is the ultimate fallback.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=37)** This also means that WordPress themes only really needed two files, style.css to define the theme, and index.php to drive it.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=48)** That said, the hierarchy is very robust and flexible.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=53)** Let's dive in.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=54)** To the left, you have the big overarching sections, and there are six of them.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=59)** You can picture these as the main types of templates.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=63)** As we move to the right, those sections are broken down.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=67)** Archive Page, for example, has Author, Category, Custom Post Type, Date, and more.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=76)** Those sections are broken down further into content specific template names.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=82)** Let's take a look at the Custom Taxonomy Archive.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=86)** The first thing we look for is a taxonomy that has the taxonomy terms structure name.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=93)** So anytime we see a dollar sign, that is a variable for the template name.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=99)** In this case, we can have a size-small specific template, so we'd have a template named taxonomy-size-small.php, and that would be the template that drives the small term template.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=116)** If that doesn't exist, the template hierarchy falls back to taxonomy and then whatever the taxonomy name is, so in this case, taxonomy-size, so in this case taxonomy-size.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=132)** If a taxonomy specific template doesn't exist, we fall back to taxonomy.php.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=139)** If that doesn't exist, we fall back to archive.php, and finally we land on index.php.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=147)** You can see the same thing for a Singular Page.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=152)** The Singular Page has several different types of pages, Single Post Page and Static Page, and inside Single Post Page, there are even more classifications.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=164)** If we take a look at Custom Post, our first stop for Custom Post is custom.php, which is generally a page template that can be selected from the dashboard.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=174)** If that's not selected, then we fall back to single-$posttype-$slug, so in our leaf and mortar example, it would be single-business-leaf-and-mortar.php.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=192)** That would be the template that drives that specific piece of content.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=196)** If that template doesn't exist, we fall back to single-$posttype, which in our case would be single-business.php followed by single.php followed by singular.php followed by index.php.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=211)** In the case of our theme, we're going to want to create a single-business.php template to customize our Custom Post Type template.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=221)** And this was just a brief overview of the WordPress template hierarchy.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=227)** If you visit [wphierarchy.com](https://wphierarchy.com), you can take a closer look at all of these templates, including clicking through any one of these templates to the codex page.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=236)** You'll also get a deeper description below the hierarchy.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/the-wordpress-template-hierarchy?u=76281980&t=241)** Finally, you can download a PDF of this hierarchy to print out for reference.

> [!info]- Semantic Content
>
> **Exercise Files:** template (17)
> **File Paths:** index.php (4), single-business.php (2), style.css (1), taxonomy-size-small.php (1), taxonomy.php (1)
> **CLI Commands:** php (13)
> **Code Keywords:** let (2), case, (2), this, (1), type, (1), static (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), for example (1)
> **URLs:** [wphierarchy.com](https://wphierarchy.com) (1)
> **Env Vars:** pdf (1)

#### Setting up your child theme
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=0)** - [Instructor] Because we've created custom post types, and taxonomies, we'll want to display that content in a way separate from the current theme.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=9)** In order to display that content on the front end, we'll need to add some code to our theme.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=15)** If you're using a custom made theme, that is, one you developed, or had one developed for you, you can make modifications directly to the theme.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=25)** However, if you're using a theme that you got from a marketplace, or the WordPress theme repository, you'll risk losing any changes you make the next time that theme updates, so instead we'll need to make a child theme.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=40)** A child theme piggybacks off of the main, or parent theme, using any files from the parent, not specifically overwritten in the child.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=51)** That means that if the parent gets an update, our modifications are safe, and sound.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=57)** This is a quick primer on WordPress child themes, but if you'd like to learn more about WordPress child themes, you can check out the course in our library.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=68)** Since we're using the Twenty Ninteen theme, we're going to make a child theme based off of that.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=75)** To start, open your code editor, and create a new folder inside WP-Content Themes called twentyninteen-child-theme.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=89)** And in that folder we're going to create a new file called style.css.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=96)** This is where the definition for our theme will be, and we're going to copy, and paste that definition right from the exercise files.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=107)** So we'll copy this, and we will paste it into our new theme.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=113)** Our Theme Name, Theme URI, Description, Author, and Author URI will all show up in the WordPress Dashboard to help identify this theme, but there's one important line that we're adding here, and that's template.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=127)** So Template: twentyninteen tells WordPress two things, that we are creating a child theme, and that the parent of this child theme is twentyninteen.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=140)** This value needs to match the folder name for the parent theme.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=147)** The next thing we're going to do is create a new file called functions.php, and in the functions.php file we are going to include our parent CSS.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=164)** So there's two things that we'll need to do here.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=167)** We're going to need to create a function to enqueue the styles, and we're going to need to add an action to call our new function.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=176)** So let's create the function first.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=179)** We'll call this lil_child_enqueue_styles, and inside this function we are going to first enqueue the parent CSS, and then in cue the child CSS.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=194)** So we'll call wp_enqueue_style, and this function accepts several arguments.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=201)** The first one is the slug, or the ID, so we'll just call that parent-style.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=210)** The next is the source, or the URL for the style sheet.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=215)** So we're going to use a built in WordPress function called get_template_directory_uri,
>
> **[3:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=226)** and then we will concatenate it with a string that starts with /style.css.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=234)** Get_template_directory_uri will specifically grab the parent themes file path, or URI.
>
> **[4:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=244)** We're going to make a similar call here for wp_enqueue_style to grab the child CSS.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=252)** So we'll call that child-style.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=255)** We're going to use a different function here called get_stylesheet_directory_uri,
>
> **[4:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=268)** and then again we will concatenate the string /style.css.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=273)** Get_stylesheet_directory_uri specifically grabs the child theme's directory URI, and then the last argument that we're going to pass here is an array of dependencies.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=286)** So we're going to put in the array, parent-style.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=290)** This tells WordPress that our child style depends on the parent style, which means that it will definitely load the parent style first.
>
> **[5:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=300)** So we'll close that, and then the last thing we'll do is add the action.
>
> **[5:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=308)** So we'll do add_action.
>
> **[5:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=312)** The action that we want to call our function on is wp_enqueue_scripts, and then we will copy our function name here.
>
> **[5:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=330)** Alright, let's save functions and style.
>
> **[5:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=333)** We'll go to our WordPress Dashboard, and then we'll go to Appearance Themes, and we will enable our child theme.
>
> **[5:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/setting-up-your-child-theme?u=76281980&t=341)** If we visit the site, nothing has changed, and that's exactly what we expected.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (2), this, (1), pass (1)
> **Env Vars:** uri (4), css (4), url (1)
> **CLI Commands:** make (5), php (2)
> **Code Identifiers:** wp_enqueue_style (2), lil_child_enqueue_styles (1), get_template_directory_uri (1), get_stylesheet_directory_uri (1), add_action (1)
> **File Paths:** style.css (3), functions.php (2)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** means that (2), is a  (1)
> **UI Navigation:** go to (2)

#### Creating a single custom post template
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=0)** - [Instructor] With our child theme created it's time to add our custom templates.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=4)** We're going to start by building a single-business.php template to display individual businesses in our directory.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=12)** And because everything is based off of twentynineteen, we're going to use that theme for guidance.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=19)** Let's start within our twentynineteen-child-theme directory, by creating a new file called single-business.php.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=32)** Here we're going to copy the single.php template from twentynineteen in its entirety.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=40)** So inside the twentynineteen directory we're going to open up single.php, copy that, and then paste it into our single-business.php directory.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=52)** We'll go ahead and save that, and then if we scroll to line 24 here, we'll see that the crux of the matter is a template part called template-parts/content/content, single.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=68)** This is going to control all of the content for our template.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=72)** So we want to recreate this directory in our child theme, and then make a file called content-single-business.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=79)** Let's go ahead and do that now.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=83)** So first we'll create a new folder called template-parts.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=91)** Inside the template-parts folder we'll create a new folder called content, and inside the content folder we are going to create a file called content-single-business.php.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=110)** Now, we can change the template part in single-business.php to template-parts/content/content-single and then we'll replace single with business.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=125)** And since we don't want to start with a blank slate we'll go back to our twentynineteen theme into template-parts, content, and we'll grab the content-single.php file.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=140)** We'll copy that, and we'll paste that into content-single-business.php.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=146)** Let's start by making a small change.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=149)** First, since it's a business we want to make sure that the logo is displayed more clearly than it is in the standard twentynineteen theme so right above the_content template tag around line 23 we're going to place a new call to the_post_thumbnail.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=169)** This will grab the standard post thumbnail.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=172)** It accepts one optional argument and that is the size of the thumbnail, and we'll pull in the large version of it.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=180)** So let's go ahead and save that.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-single-custom-post-template?u=76281980&t=182)** If we go back to the front-end of our website and we refresh the page for our business, Leaf and Mortar, we'll see the logo is now showing up.

> [!info]- Semantic Content
>
> **CLI Commands:** php (9), make (2)
> **Exercise Files:** template (11)
> **File Paths:** single-business.php (4), single.php (2), content-single-business.php (2), content-single.php (1)
> **Code Keywords:** let (4)
> **Code Identifiers:** the_content (1), the_post_thumbnail (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Modifying the single template header
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=0)** There's one more modification we want to make to our single business template, and that's to remove some of the header information.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=7)** Things like author and date are not necessarily important to a business directory listing.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=14)** So, let's go back to our code and, you can see that our header information is in another template part.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=22)** So, let's go ahead and create that in our child theme.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=25)** In the template parts directory, we need to create a new directory called header.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=32)** And, in the header directory, we're going to create a new file called entry-header-business.php
>
> **[0:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=44)** Then, we'll copy 2019s template parts header entry-header and we'll paste that into our entry header business template.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=57)** Since we're working with a business, here; date, author, and the comment count aren't entirely important.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=62)** So, we're going to delete that entire section of code.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=66)** Starting right below the entry-meta div, which is around line fifteen, we will delete everything up until the closing span tag.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=80)** Now, we'll save this header.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=82)** But there are two more steps, here.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=84)** We need to change the template part in two files.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=87)** Content/single/business and in header.php.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=92)** Let's tackle content/single/business, first.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=100)** So, right around line seventeen, we'll change the template part call to template-parts/header/entry-header
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=112)** and, then, we'll change the last header argument to business.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=119)** Now, this says, if there is no featured image, show the header, instead.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=126)** Now, let's create our own header file.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=130)** Let's go to 2019 and we will copy that whole file, and, we'll paste it into our child theme.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=143)** If we open header.php, we can scroll down to the entry header call, which is going to be around line forty-five.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=151)** We'll see it here, get template part, template part header entry.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=155)** And, we're going to add some logic, here, to check to see if the business post type is being called.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=161)** So, right inside that opening php tag, we'll create some space and we'll say, if business equal equal get post type, and, then we'll make the template part call that we want to make.
>
> **[3:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=183)** Which, we can copy from content single business.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=187)** So, we'll copy that and we'll paste it here.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=193)** Else, and that's where we want to call the more general template header.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=200)** So, we will cut this, fix our spacing, and paste it in the else area.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=210)** Now, this says, if the current post type is a business post type, use the business header.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=217)** Otherwise, use the standard header.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=220)** Let's save this file, and go back to our website.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=225)** Now, if we refresh this page, the date and author are no longer being included.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=231)** Just to double-check, let's click on Hello world!
>
> **[3:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/modifying-the-single-template-header?u=76281980&t=234)** Which is a regular blog post, and you can see the standard header is being included.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (2), type, (2), else, (1), this, (1)
> **Exercise Files:** template (12)
> **CLI Commands:** php (4), make (3)
> **File Paths:** header.php (2), entry-header-business.php (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)

#### Creating a custom post archive template
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=0)** - [Instructor] With improvements made to the brand, new single-business template, let's turn our attention to the business listing page, which is an archive page.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=9)** You can see that it's pretty plain-looking, and it turns all of our logos blue, so let's make some changes.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=17)** Let's open up our code editor to the twentynineteen parent theme, and we're going to copy the archive.php file.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=25)** Then, in our child theme, we're going to paste it and rename it archive-business.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=36)** Next, we're going to find the function call for the archive title.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=40)** This dynamically grabs the title based on the archive page we're viewing.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=46)** Since we'd like this just be labeled as a business directory, we're going to change this line.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=51)** Let's make note of the h1 class here.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=53)** We'll actually copy that, and then we'll delete this entire php call in between the opening and closing header tags.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=61)** We'll paste the h1 tag, and then we will use the internationalization print function to print out the words All Businesses.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=74)** And we'll use the twentynineteen text domain, since that's what's used in the rest of the files.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=82)** Then, we'll close our php tag and close the h1 tag.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=86)** We can hard-code the title here because this is only going to be used for the business archive.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=91)** The other change we want to make is going to be in a template part.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=95)** So if we scroll down, around line 34, we see there's a call to the template part content excerpt.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=102)** So we'll go to the twentynineteen parent theme, into template-parts content, and we'll copy the content-excerpt.php file, and we'll paste that into our own child themes, template parts content directory.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=120)** We'll then rename this to content-excerpt-business.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=126)** The main change that we want to make in this file is to remove the blue logo and instead use the regular-colored logo.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=137)** So here, around line 24, you'll see the twentynineteen_post_thumbnail function.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=142)** This is a custom function provided by the parent theme.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=146)** We're going to delete this entire line, and then right inside the opening entry content div tag, we are going to add a standard thumbnail call.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=159)** So I'll write the opening php tag, and then, the_post_thumbnail, and we'll pass the large size to it.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=170)** And then we'll close that up.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=172)** We're placing the thumbnail inside the entry content, so that we don't have to worry about adding custom CSS to make everything aligned properly.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=179)** This will automatically make everything align.
>
> **[3:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=183)** We'll save this, and then we'll go back to our archive business template.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=188)** And the change we're going to make here is in get template part.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=191)** We're going to change it to template-parts/content/content-excerpt.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=200)** And we're going to change the second excerpt to business.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=205)** We'll save this, and then we'll go to our website, to the archive page, refresh, and now the title says All Businesses, and our logos are showing up properly.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=218)** Now this only scratches the surface of what you can do.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=222)** I just wanted to show you how you can modify the template structure to customize your themes and child theme.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-post-archive-template?u=76281980&t=228)** But you could take it much further, adding styles, markup, and even completely new sections to these templates.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), php (5), find (1)
> **Code Keywords:** let (4), function (4), delete (2), this, (2), pass (1)
> **Exercise Files:** template (9)
> **UI Navigation:** go to (2), scroll down (1)
> **File Paths:** archive.php (1), content-excerpt.php (1)
> **Code Identifiers:** twentynineteen_post_thumbnail (1), the_post_thumbnail (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** css (1)

#### Adding a custom taxonomy to a template
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=0)** - [Instructor] One of the nice things that we can add to our new post templates is the custom taxonomy we created.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=8)** Since this taxonomy is not built into Wordpress core, we need to explicitly add the terms to our template.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=15)** Luckily, Wordpress has a function that can help us out here, and it's called get the terms list.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=21)** This function accepts a post ID, a taxonomy slug, what should go before the taxonomy list, how the list should be separated, and what comes after the taxonomy list.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=34)** So we're going to want to add this nice comma-separated list of sizes to both our single and archive template.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=43)** And let's start with the archive.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=45)** First I'm going to copy this function here, so we can easily paste it later, and then in our code editor, I'm going to open the content excerpt business file.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=54)** I'm going to scroll down to the 2019 entry footer, and right after the opening div, I'm going to add some markup.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=64)** So I'm going to put this in a paragraph with the class "taxonomy-sizes".
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=75)** And then I'm going to open up the php tag and paste in our function call.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=82)** So the first call needs to be the ID of the post we're on.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=88)** We can grab that by calling get the ID, which is a built-in function inside Wordpress.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=95)** Then we need the slug of the taxonomy, which is going to be size.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=100)** We need what's going to be before the list, and that's going to be Size, colon, and a space.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=108)** The separator is going to be a comma and a space, and the space is important.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=112)** And then we don't need anything coming after the list.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=115)** So we'll close this, close our php tag, and then close our paragraph tag.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=122)** We will go ahead and save this, and then we'll copy this so that we can paste it into our single template.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=131)** First let's see how it looks on the business archive page.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=135)** So if we go to the archive page, we'll see that it's not showing up.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=140)** And that's because we made a small error.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=142)** Anytime that we see the word get in front of a Wordpress function, we should assume it's not being printed out.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=148)** So we'll type echo, and then we should see our sizes show up.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=154)** So we'll just copy this again, so we don't paste the wrong code again, and then we'll refresh.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=160)** And we have our size showing up.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=163)** And since every business is only going to have one size, we don't see the commas, but we do see the size showing up properly.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=171)** Now let's modify our single template.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=175)** We want this to show up in the header, so we'll go to the template parts, header, entry header business file, in our child theme.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=187)** And we're going to want to place this in the entry-meta div.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=190)** So we're going to place our cursor right after the entry-meta div, and we're going to paste the code that we copied.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=199)** Now we're going to make a small change here, we're going to get rid of the paragraph, because entry-meta is already styled, and we want the size label to stand out, so we're going to wrap the size label in an opening and closing b tag.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=217)** We're using b and not strong here, because we don't necessarily want to emphasize and tell search engines that this is important text, we just want it to visually stand out.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-a-custom-taxonomy-to-a-template?u=76281980&t=228)** So we'll save that, and then we'll go back to our website, and if we click on one of the businesses, we'll see the size showing up in the header area, and size is now bold.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), this, (2)
> **UI Navigation:** go to (2), open the (1), scroll down (1), click on (1)
> **Exercise Files:** template (5)
> **CLI Commands:** php (2), make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom taxonomy template
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=0)** - [Instructor] Since we modified our business template to show the taxonomy terms for size, we're exposing a new template on the front end.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=9)** And that is the size taxonomy template.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=12)** This taxonomy template looks exactly like our business archive before we modified it, and that's because it is.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=20)** In fact, it's using the very same archive.php template to drive it.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=25)** And that's good news for us.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=27)** Thanks to the robust template hierarchy and the template part architecture we've been using to drive our child theme, we can fully customize the size archive by making minimal changes.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=41)** If we open up our code editor, and inside our child theme we can copy and then paste the archive business template and then we can rename this template.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=56)** And we'll rename it to Taxonomy dash Size.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=64)** Now if we go back to the front end of our website and refresh, we'll see that the template looks exactly like the business archive.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=72)** And that actually includes the title.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=75)** So let's go ahead and change that.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=78)** We know the original page was using the archive title.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=81)** Every Wordpress function like this also has a corresponding getter, so get the archive title is another function that exists.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=90)** And if we reference the source code, which is here in the code reference for Get the Archive Title, we can scroll to the bottom and find a very helpful function to us.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=102)** And that function is Single Term Title.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=106)** This will dynamically grab the single term for the archive page that we're on.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=112)** So we're going to copy this and then go back to our child theme.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=119)** And for the page header, we're first going to replace the text "All Businesses" with "Business Size" and then a space, and then we're going to make a call to the single term title.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=133)** So we'll open up our PHP tag, we'll paste that function, and then we'll close our PHP tag.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-taxonomy-template?u=76281980&t=142)** If we save this file and go back to the front end, and refresh, now we have the business size and the term we're currently viewing.

> [!info]- Semantic Content
>
> **Exercise Files:** template (10), source code (1)
> **Code Keywords:** function (5), let (1)
> **CLI Commands:** php (3), find (1), make (1)
> **Cross-References:** go back to (3)
> **Env Vars:** php (2)
> **File Paths:** archive.php (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Custom Post Types and Taxonomies in Other Templates

#### Custom post types on the front page
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=0)** - [Instructor] By default, the main query that's powering WordPress's front page will only return posts of the post type.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=9)** Here, we're going to add our businesses to the front page as well.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=14)** So let's go ahead and open up our code editor, and then open up our child themes functions.php file.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=22)** We'll start by adding an action.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=25)** So we'll add a couple of lines to functions.php, and then we'll add the action 'pre_get_posts'.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=34)** What this action does is say right before you send the main query off to get posts, call this function, which will likely modify the query.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=47)** So we'll call this 'lil_add_business_to_query',
>
> **[0:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=56)** and then we'll create that function.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=58)** For consistency's sake, we'll create the function above the add_action.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=63)** So let's go ahead and copy that function we just created, and then we'll write function, we'll paste the name, and this function, unlike the other ones we've used so far, actually accepts an argument, and that argument is query.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=79)** WordPress is passing the query to this action for modification.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=85)** Now there's a lot of information included in this query, including checks as to where we are on the site, what information should be retrieved, and much more.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=96)** You can find all of that information over on the WordPress Codex on the Query Overview page.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=106)** There's a lot of information to parse out here, so we're going to go through exactly what we need to modify the front page.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=115)** The first thing that we're going to do is check to make sure we're actually on the front page, so we'll say if ($query ->is_home( ) ),
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=128)** and then we also want to make sure that we're using the main query, because you could have more than one query, or more than one loop on a WordPress page, we want to make sure that we aren't causing any unforeseen or unpredictable actions to themes or plugins.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=145)** So we'll also say && $query->is_main_query () ).
>
> **[2:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=154)** These are both functions within the query object that was passed to our function.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=161)** If both of these are true, then the next thing we want to do is add the business post type to the list of post types that are being returned for the front page.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=171)** We can do that by saying $query->set ( ), and here, we're telling the query to set a variable or an array to a new value.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=184)** So that variable is going to be post_type, and the new value is going to be an array of post type slugs.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=194)** So we want to make sure to continue to include post, but we also want to include our business type.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=203)** With our if statement and function properly closed out, let's save this and then go to the front-end of our website.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=213)** If we refresh this page, we now have the hosts, as well as the businesses, showing up on our front page.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=224)** There is one caveat, and that's that our modified template parts aren't being pulled in.
>
> **[3:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=230)** I'll challenge you to try your hand at that, given what you've learned so far.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/custom-post-types-on-the-front-page?u=76281980&t=235)** If you want to know the solution, you can find it in the bonus section of the exercise files.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (3), type. (2), default, (1), if ( (1)
> **CLI Commands:** make (4), php (2), find (2)
> **Code Identifiers:** pre_get_posts (1), lil_add_business_to_query (1), add_action (1), is_home (1), is_main_query (1)
> **File Paths:** functions.php (2)
> **Exercise Files:** template (1), exercise files (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Warnings:** caveat (1)

#### Organizing your child theme
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=0)** - [Instructor] So far, we've taken a look at how to modify our child theme and template to format and include our new custom post types and taxonomies, but it's worth noting that there are a few ways to handle that information that we'll explore here.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=16)** You may have noticed a few things we've done in our child theme.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=19)** We've leveraged the template hierarchy to create new templates for our custom post types.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=26)** We've created template parts, specifically for our custom post types, and we've conditionally checked to see if our post type is being used, to change information on what data is shown within templates.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=43)** You may have also noticed, throughout the code base that the authors of 2019 do the same thing within general templates, like content.php.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=54)** We could of done the same thing for our business type.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=57)** We could have modified these more generic templates to check to see if we're using a custom post type or if we're on the single template for a custom post type, and make modifications that way.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=72)** And in some instances, it might of made more sense.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=75)** Especially if we don't want long, complicated conditionals for more than one post type.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=82)** So why didn't we?
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=85)** Part of the reason is the goal of this course is to show you what is possible and our approach showed a more wide range of possibilities.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=93)** The other reason is mostly a judgment call.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=97)** I like to organize my template parts by type of display, single, except, and post type, post, business, event.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=105)** It helps me clearly understand where I can find the information I'm looking for.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=110)** In some instances, it might be better or more clever to conditionally check within the template part what post we're displaying.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=118)** An example is the search template.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=122)** If we look at the search.php file inside 2019, we could see a call to a generic content template part.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=134)** For consistency we might want to modify just that file in our child theme to check and properly label for the business type.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=143)** The alternative would be to modify search.php for each post type we want to display, and then create a new template part.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/organizing-your-child-theme?u=76281980&t=152)** In the end, it's up to you, we've looked at what's possible and knowing what you can do will help you design and architect a theme that makes the most sense for you.

> [!info]- Semantic Content
>
> **Exercise Files:** template (9)
> **Code Keywords:** type. (3), type, (2), except, (1), for. (1)
> **CLI Commands:** php (3), make (1), find (1)
> **File Paths:** search.php (2), content.php (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom loop for post types
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=0)** - [Instructor] Custom post types aren't just for creating other types of posts.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=5)** They can also be used to include different content throughout the page.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=9)** With our businesses, we wanted to display an index of businesses in a directory style, but we've also created an events type, which we can include on other templates to show users what's happening in the area.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=23)** This requires a custom loop, which we'll create here.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=26)** Let's go to our Code Editor, and open up the functions.php file.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=31)** At the end of the file, we're going to create a new function called lil_show_events().
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=40)** Here, we'll want to create a new posts query, calling WP_Query, and that requires an array of arguments.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=48)** Let's set this up first.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=50)** We'll create an array called $args, and then we'll send it a number of key value pairs.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=57)** The first, is going to be post_type.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=60)** This is going to tell WP_Query, which post types to return.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=66)** So, we're going to set that to event, and then we're also going to put a limit on the number of events that are returned.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=73)** So, that argument is called posts_per_page, and we'll set that to three.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=81)** These are the only arguments that we'll set here, but you can check WP_Query's developer documentation to see a list of all the arguments you can pass to WP_Query.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=92)** It's also worth noting that we're just doing the basics here, but if we had other information in meta fields, like dates, we could definitely sort them that way, or sort them on a shared taxonomy.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=103)** The possibilities are endless.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=106)** With our argument's array set, let's go ahead and call WP_Query.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=112)** We're going to create a variable called $events, and then we'll write new WP_Query, note the capitalization, that's important here, and then we will pass it the $args array.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=128)** WP_Query is a object within WordPress, so this is going to return a WP_Query object, assign it to events, and the result of the query will be part of that object.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=142)** The object also has a set of functions that we can call.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=147)** We're going to make use of those functions now, by displaying them in a custom WordPress Loop, and this is going to look very similar to a main WordPress Loop, but instead of having standalone functions, like have_posts and the_post, they are going to be part of the WP_Query object called events.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=164)** Let's see what that looks like.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=165)** We'll write if ( $events->have_posts() ),
>
> **[2:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=176)** and then, inside of this If Statement, if we have posts returned, that is if there are events to display, we will display them.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=184)** So first, we'll write, echo '<ul class="events-list">',
>
> **[3:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=193)** and then we'll create a format for the string that we want to print out per event.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=198)** We're going to be using the print function printf here, which requires a format and allows us to pass a format with placeholders inside the string for variables.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=208)** This'll make our code look a little bit cleaner.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=211)** So, we're creating an unordered list here, so we'll say <li class="event"><a href, will make this a link, and this will be where our first placeholder goes.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=224)** So we'll do %1$s, and this is basically saying, this is the first string, which is serving as a placeholder.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=233)** We'll add the title, which will be our second placeholder, and then we will include the title again.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=242)** So this is where code cleanliness comes in a little bit.
>
> **[4:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=244)** We don't have to rewrite the title script, or anything like that, we can simply reuse the second string we passed to the print function.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=253)** Then we'll do an argument and print the content, which will be the third placeholder that we send.
>
> **[4:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=261)** Then we'll end the list item, and then we'll move on to the While Loop.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=266)** So this is going to look very similar to the WordPress Loop.
>
> **[4:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=269)** We'll say while( $events->have_posts() ), and then we'll want to print the events.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=279)** First, we'll have to assign the current post to the current event to the_post query on the page, so that we can use the Loop functions.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=290)** We'll do that through events->the_post.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=293)** Then we'll use our printf function, and we'll pass it the format, which we setup above, and the three placeholder strings that we want to print out.
>
> **[5:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=305)** The first is get_permalink.
>
> **[5:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=310)** The second is get_the_title.
>
> **[5:15](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=315)** Remember, we don't want to actually print any of these out, we're passing them to a print function, so we just want the values, and then we're going to print the content, and we need to do a little bit of extra work here.
>
> **[5:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=326)** So we're going to need to call the apply_filters function, and the filter we want to apply is the_content.
>
> **[5:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=334)** Basically, this is WordPress taking the sanitized information that is in our database and setting it up, so it could print with all of the formatting that was set in the Content Editor.
>
> **[5:49](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=349)** So if you have things like, bold or italics, you'll want to pass it through the apply_filters function to make sure everything looks as you'd expect, and that's it for our While Loop.
>
> **[6:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=360)** So, after the While Loop, we will close our unordered list, and then the last, and very important thing that we need to do here is, reset the query.
>
> **[6:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=372)** So we'll do that after the If Statement.
>
> **[6:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=374)** It'll be the last thing that we do before we close the function.
>
> **[6:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=378)** We'll call wp_reset_query.
>
> **[6:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=380)** If we don't do this, than we'll have posts colliding and we will get unpredictable results.
>
> **[6:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=386)** So always make sure to include wp_reset_query.
>
> **[6:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=390)** So this is our query function.
>
> **[6:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/creating-a-custom-loop-for-post-types?u=76281980&t=394)** There's one more thing that we'll need to do though, and that is add it to the template where we want it to show up.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), pass (5), let (4), class= (2), type, (1)
> **Code Identifiers:** have_posts (3), the_post (3), apply_filters (2), wp_reset_query (2), lil_show_events (1)
> **CLI Commands:** make (5), php (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** functions.php (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** similar to (1)

#### Displaying the custom loop
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=0)** - [Instructor] With our custom loop function defined, it's time to add that to our templates.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=5)** Let's go ahead and copy the lil show events function, and then we're going to open up our content single business file in template parts content.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=20)** Right before the end of the entry content div, we're going to place our custom code.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=27)** So the first thing we'll do is create a section with the class related events.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=35)** We'll close that section so we don't forget to later.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=40)** And then we will add our content.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=42)** So we'll create a heading three tag, and we'll print out a heading using the internationalization function, so we'll open up our php tag, underscore e, upcoming events,
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=59)** and then our text domain will be twentynineteen.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=65)** We'll close the php tag, and then we'll close the heading three tag.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=69)** And then, we will call our lil show events function.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=74)** And since we do all of the printing inside of that function, we don't have to worry about printing it here, we can just add the function call.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=81)** So let's save that, and then we will go to the front end of our website.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=86)** We added this to the single business content, so we should be able to open any business page and see the same set of events.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=95)** We'll open one and we'll scroll down, and we see the upcoming events.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=99)** Perfect.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=100)** Now if we go back to another business, we should see it there too.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=104)** So let's just pick the very first one.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=108)** And we see that same set of events.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=110)** So it looks like these events can use a little bit of styling.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/displaying-the-custom-loop?u=76281980&t=113)** Good thing we added those extra classes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3)
> **CLI Commands:** php (2)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Styling your custom loop
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=0)** - [Instructor] With our event properly displaying, let's go ahead and add some styles.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=5)** You can see that we have added special classes for related-events, that's the entire section and we've also added specific classes on the unordered list, events-list and the list it for event.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=21)** Let's take advantage of these classes.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=23)** We're going to copy the CSS directly from the exercise files for this video, so you can open the exercise files and we will copy them and then talk through the changes.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=35)** So let's go ahead and do related-events first.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=39)** Let's open up our style.css file inside of our child theme and we'll paste that first CSS.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=47)** Here for the entire section, we're adding a light gray background, a darker gray border and we're adding some padding to the entire block so that we have some spacing to work with.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=60)** Next are styles for the event-list and list items.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=65)** Let's copy that.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=67)** And then paste that into our style.css file.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=70)** Here we're getting rid of the list style type which is the bullet.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=74)** We're going to get rid of that completely and then on the list item, we're going to add a light gray border, margin and padding to give us some space between each list item.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=87)** Finally we're going to add some styles to the specific elements inside the list item.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=93)** So we'll copy that code from our example files, paste them in our style.css and what we're doing here is we're bolding the anchor tag which is going to consist of the title of the event so that'll make the title stand out and then we're getting rid of margins and paddings on the paragraph.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=113)** The content will automatically add paragraph tags and so it's going to make things look really spaced out since we want just a simple listing for the event text here.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=125)** We're going to get rid of the margins and paddings.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=128)** We'll save this and we'll go to the front end of our website.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=132)** Let's go ahead and refresh this page and things look a lot better.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=136)** Our events are set apart from the content of the business.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/styling-your-custom-loop?u=76281980&t=141)** Our title text is bold and we've got some nice spacing between everything.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **File Paths:** style.css (3)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **UI Navigation:** open the (1), go to (1)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1)


### 9. 8. Moving Your Post Types to Your Theme

#### Warning: Custom post types in themes
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=0)** - [Instructor] A common strategy in the Wordpress development world for a long time was to bundle custom post types and other functionality with the themes.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=10)** The idea was that themes essentially depended on these post types, and the post types depended on the theme for them to be viewed properly.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=17)** It also made selling commercial themes on marketplaces a bit easier.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=22)** You didn't have to come up with new instructions to tell users how to install and enable the theme, and then install and enable a set of plugins you were including.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=30)** However, best practice dictates that the custom post types and taxonomies be included in a plugin, and not a theme.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=39)** There are a few reasons for this, but the root of it goes back to what we talked about earlier: a separation of concerns.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=46)** Content should not be tied directly to the display.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=50)** Users should be able to swap out the theme without losing their content.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=57)** But there's also the philosophy that one should never say never.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=61)** There could be legitimate reasons why you need to include your custom post types inside the theme.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=67)** So if you absolutely need to do that, this section will show you how.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/warning-custom-post-types-in-themes?u=76281980&t=72)** We'll take the approach of taking the plugin that we've written, and copying it into our theme.

> [!info]- Semantic Content
>
> **Prerequisites:** install (2)
> **Code Keywords:** this, (1)
> **Cross-References:** we talked about (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Adding custom post types to themes
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=0)** - [Instructor] As stated earlier, it's strongly recommended that custom post types and taxonomies stay in a separate plugin so that there's no reliance on the theme to create content.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=11)** That said, here I'll show you how to add the post types and taxonomies we created into our 2019 theme.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=20)** So we have a fully working plugin here in its own folder with its structure and organization.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=26)** We could copy all of the code from all of those files directly into our functions.php file and everything will work fine.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=36)** But we like to keep things organized.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=39)** So the first thing we'll do is go to our demo site and we'll deactivate our plugin.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=47)** You'll see the businesses and events disappear.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=51)** Now if we go back to our code editor, we're going to copy the entire plugin folder, lil-post-types and past it in the child theme folder, 2019 child theme.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=67)** Now in our child theme's functions.php file, we're going to add this line.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=73)** We're going to add this to the top of our functions.php file so that any functions we wrote don't break because they rely on the plugin files.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=85)** So we'll write require_once and then we'll use the get_stylesheet_directory function.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=95)** And this is slightly different from get_stylesheet_directory_uri because it's getting the directory path which is all we need here for the inclusion of our new folder.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=107)** And then we'll write a period for concatenation, open the single quotes, /lil-post-types, that's our folder name and then /lil-post-types.php.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=124)** That's our driver file.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=126)** So this is going to call in the driver file which is going to call in the rest of the plugin.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=132)** If we save this and then go back to our WordPress installation and go to the dashboard, you'll see everything is working properly.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=142)** That's all we really need to do to include our plugin in our theme directory.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=149)** That said, there are a couple of things that we want to clean up for consistency sake.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=155)** So inside of the 2019 child theme directory, inside the lil-post-types folder, we're going to open up lil-post-types.php.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=165)** We're going to remove everything from line 19 which defines our plugin version and up.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=174)** We don't need any of this code except for the opening PHP bracket.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=180)** The only other change we're going to make is we're going to change LILPATH from plugin_dir_path to get_stylesheet_directory.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=191)** This is working because plugin_dir_path is just a wrapper for the dir name function that's built into PHP but we want to make this easy to read for other people who might look at this code.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=205)** So we're going to delete plugin_dir_path and we'll type get_stylesheet_directory.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=214)** Period, open single quote, /lil-post-types and then the trailing slash as well.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=225)** This will ensure that all of our paths remain in working order, so we will save this and we'll go back to the front end one more time.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=234)** Refresh.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=236)** And everything is still in working order.
>
> **[4:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=240)** If we go to Plugins, our plugin is no longer active and it wasn't reactivated somehow so this is all being driven from our theme files.
>
> **[4:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/adding-custom-post-types-to-themes?u=76281980&t=250)** One note if you'd like to roll back and keep using the plugin and theme separately, don't worry, you can always grab the start state code from the exercise files for this video.

> [!info]- Semantic Content
>
> **CLI Commands:** php (7), make (2)
> **Code Identifiers:** get_stylesheet_directory (3), plugin_dir_path (3), require_once (1), get_stylesheet_directory_uri (1)
> **File Paths:** functions.php (3), lil-post-types.php (2)
> **UI Navigation:** go to (3), open the (1)
> **Code Keywords:** function (2), delete (1)
> **Env Vars:** php (2), lilpath (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### Automatically flushing rewrite riles
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=0)** - [Instructor] So far, we've seen the manual way to flush rewrite rules by going to settings, permalinks.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=6)** And as you saw, that can be a tedious process.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=9)** If you forget, it can cause unnecessary headache for troubleshooting.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=13)** And you need to do it anytime you make a change to the URL or rewrite structure.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=19)** So, let's see how we can flush rewrite rules automatically with our plugin and our child theme.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=25)** Here on the screen, you see the codex page for register post type.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=29)** If you scroll towards the bottom, you'll see the flushing rewrite on activation.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=34)** And it gives you sample code to use in both your plugin and your theme.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=39)** We're going to copy this first block of text here, this first block of code, and we're going to paste it into our plugin.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=50)** So, let's go to our plugins to LIL-postypes.php.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=55)** And at the bottom, below the other add actions, we'll paste this code.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=59)** We'll clean it up a little bit.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=60)** We'll get rid of the cautionary comments, though they are very important to read.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=66)** Now, you should only do this during plugin activation, for example, because you don't want to do it on every page alert.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=72)** And then, we'll need to replace my CPT init with another function.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=78)** So, let's just pick our first function, the register business type.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=82)** We'll copy that from the action above and paste that into our function.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=87)** We'll also rename this to LIL rewrite flush.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=92)** And under register activation hook, we'll make the same change.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=98)** So, this code will say first call this function, and then flush the rewrite rules.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=105)** So, it'll simulate that click from settings, permalinks.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=112)** There are a few caveats here, though.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=114)** First, this is only called on plugin activation and should only ever be.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=119)** That means that if you make any changes after the plugin is activated, you'll need to either deactivate and reactivate the plugin or flush the rewrite rules by visiting the settings, permalink page.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=133)** The other caveat is that we're only calling one of the four functions here that would require flushing the rewrite rules.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=140)** To solve this problem, we might want to lower the priority on one of our registration plugins and call that one or have a single function that registers all the post types at once.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=151)** And then, call that function in the LIL rewrite flush function.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=157)** So, we'd essentially have a single driver called LIL register everything, call all four of our functions, and then flush the rewrite rules.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=166)** If we go back to the codex page, you'll notice the only change that we really need to make is change the register activation hook to add action.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=176)** So, if we go back to our code, we can copy our function.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=184)** And then in 2019 child theme, we'll open up functions.php.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=190)** We'll scroll to the bottom of our functions.php file.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=194)** We'll paste in our rewrite flush function, and then we'll add the action.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=200)** The action will be after switch theme.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=203)** And this is saying that when the new theme is activated or the theme is switched, call this function.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=214)** We'll save those changes.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/automatically-flushing-rewrite-riles?u=76281980&t=215)** And now, we have our rewrite rules flushed automatically, either when our plugin is activated or when our theme is activated.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (3), type. (2), require (1), switch (1)
> **CLI Commands:** make (4), php (3)
> **Env Vars:** lil (4), url (1), cpt (1)
> **File Paths:** functions.php (2), lil-postypes.php (1)
> **Cross-References:** go back to (2), as you saw (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** sample code (1)
> **Definitions:** means that (1)


### 10. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you've reached the end of this course.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=4)** We've covered how to create our own custom post types and taxonomies with and without code.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=9)** We also took a look at the WordPress template hierarchy, how to create custom templates for post types for both single and archive, and even how to move our plugin code into a WordPress theme.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=24)** I would encourage you to dig deeper into the WordPress codex, and play with all of the customizations and types of data you can create.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=33)** You can also experiment in different ways to display that data on the front end.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=39)** LinkedIn Learning has lots of courses to help you even more.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=43)** There's the continuously updated WordPress master class playlist that takes you all the way from novice to seasoned developer.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=51)** There's also a course on advanced custom fields, so you can add that metadata and custom fields to your brand new post types.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=60)** Finally, I'd love to hear from you about what kind of custom post types and taxonomies you're creating for your own WordPress sites and projects.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=68)** You can always find me on Twitter @jcassabona.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=72)** If you'd like to learn more from WordPress and industry experts, check out my podcast How I Built It over at howibuilt.it.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-custom-post-types-and-taxonomies-3/next-steps?u=76281980&t=81)** Thanks so much for watching, and until next time, get out there and build something.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
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