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
  - '[[Advance Your Skills in WordPress]]'
prev_courses:
  - '[[Wordpress Building A Secure Site]]'
next_courses:
  - '[[WordPress- Custom Post Types and Taxonomies]]'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":2,"total":8,"prev":"Wordpress Building A Secure Site","next":"WordPress- Custom Post Types and Taxonomies"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress
  - skill/internationalization
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/WordPress-%20Internationalization.md)

![WordPress: Internationalization](https://media.licdn.com/dms/image/v2/D560DAQHr1McQUIAbgQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684865080588?e=2147483647&amp;v=beta&amp;t=DMqSK2RhbddDqPCR86CGysMWHdYjGLQarTsNaGo0lxI)

# WordPress: Internationalization

> The WordPress content management system powers over 40% of the web. And the WordPress user base and developer network isn't limited to English–WordPress is global software supporting a variety of languages, and its internationalization features allow developers to configure their code so they can be easily translated for any locale. In this course, Carrie Dils introduces the specific functions and

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157) | 1h 22m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Introducing Internationalization]]** (3 videos)
- **[[#3. 2. Internationalization Concepts]]** (3 videos)
- **[[#4. 3. Working with Translation Functions in PHP]]** (6 videos)
- **[[#5. 4. Working with Translation Functions in JavaScript]]** (3 videos)
- **[[#6. 5. Make a Plugin Translation-Ready]]** (10 videos)
- **[[#7. 6. Advanced Concepts]]** (3 videos)
- **[[#8. 7. Contributing to Open Source]]** (2 videos)
- **[[#9. Conclusion]]** (1 videos)

### 1. Introduction

#### WordPress internationalization
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=1)** - Konnichiwa.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=2)** Bonjour.
>
> **[0:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=3)** Hola.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=4)** Hi.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=4)** I'm Carrie Dills and I'd like to welcome you to WordPress Internationalization.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=9)** WordPress is for everybody and I love its mission to democratize publishing through open source software.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=16)** This means that you are free to create, change, and share your content from anywhere in the world.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=23)** Internationalization is the process of writing code in a way that makes it easy to translate into other languages.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=31)** Join me and we'll work with various translation functions in WordPress.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=35)** Learn how to make themes and plugins translatable and even generate language files.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=41)** Are you ready?
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/wordpress-internationalization?u=76281980&t=43)** Grab your pack and let's hit the trail.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - konnichiwa (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you'll want to already be familiar with WordPress, how it works, some of the code behind it, and the basics of extending WordPress functionality with themes or plug-ins.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=13)** You should also have a good working knowledge of PHP.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=17)** While you certainly don't have to be a pro, we'll be working with some PHP in this course, and I'll be focused on explaining it as it relates to internationalization and not necessarily its broader principles.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=29)** The same goes for JavaScript.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=31)** Don't let this scare you off.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=33)** There's not a whole lot of it, but I will be talking about it as it relates to translations.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=38)** If you want to brush up on those topics before diving into this course, I recommend taking some of these courses from our Library, [[WordPress Essential Training]], PHP for WordPress, and JavaScript for Web Designers.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=51)** I'll also be working with a local install of WordPress and a code editor.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=56)** While you don't need either of those things to watch this course, you'll need them if you plan to follow along with me exactly.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=63)** The only other thing you need before starting this course is an eagerness to learn, and I happen to know that you already have that, or you wouldn't be here.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=72)** One more thing before we start.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=74)** This course is not about creating multilingual sites.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=77)** What I mean by that is websites whose content is translated into various languages.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=83)** For example, here on the LinkedIn website, they have a Language option to view the content in various languages.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-you-need-to-know?u=76281980&t=91)** This is a different process than making your code translatable and is outside the scope of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Prerequisites:** install (1), you'll need (1), before we start (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Project overview and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=0)** - [Narrator] Later in the course, we'll build a simple WordPress plugin together to demonstrate the principles of internationalization and localization.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=9)** If you'd like to follow along with that, I've uploaded all the files I've used to a GitHub repository for this course where you can access them for reference.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=18)** The branches are structured to correspond to the videos in this course.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=22)** Some branches are marked with B for beginning while others are marked with E for ending.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=28)** The B branch contains the code as it is at the beginning of the movie, while the E branch contains the code as it is at the end of the movie.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=38)** And then the main branch holds the final state of the code for this course.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=43)** To use these exercise files you can clone them to your local machine.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/project-overview-and-exercise-files?u=76281980&t=48)** You can open them up with a gooey tool like GitHub Desktop or you can download a zip file.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **Exercise Files:** exercise files (1), zip file (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Introducing Internationalization

#### What is internationalization?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=0)** - [Instructor] As a theme or plugin developer, there will be many times that you have to hard-code strings of text.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=6)** As a matter of fact, in WordPress itself, there are many instances of these hard-coded strings.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=12)** So take, for example, this simple WordPress login form.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=15)** We've got this text Username or Email Address, Password, Remember Me, Lost Your Password, et cetera.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=22)** Where does that text come from?
>
> **[0:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=24)** Well, it's actually hard-coded into WordPress.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=27)** Let's take a look.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=30)** Let me copy this.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=31)** And if we head over to the WordPress repository on GitHub, and we'll go to the file that handles that login form, and I'll search for that phrase, Username or Email Address, and it's here several times.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=46)** But this instance right here is actually where the text from that form is coming from.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=53)** Now, what if you wanted to translate that text into another language?
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=57)** Would you have to go and edit core files or duplicate code somehow?
>
> **[1:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=62)** Goodness, no.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=63)** That's where internationalization comes to the rescue.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=67)** Internationalization is the process of writing code in a way so that text strings are easily translatable.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=74)** This is not a concept that's unique to WordPress, but, rather, a practice in the wider programming community that WordPress utilizes.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=82)** More on that later.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=83)** When discussing internationalization, you may come across its shorthand, i18n, where I indicates the first letter of the word, N the last, and 18 representing the number of letters between the I and the N.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=99)** So if you see it written like i18n, you know that means internationalization.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-internationalization?u=76281980&t=105)** In short, it's the process of making your code translation-ready.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), from. (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Why internationalize code?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=0)** - [Narrator] You can create a brilliant theme or plugin that's technically perfect in every way and it doesn't have to be translation ready.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=8)** Internationalization is not a requirement, but it is a major enhancement.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=14)** Why?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=15)** Because WordPress powers over 43% of the web and of those millions of websites a huge number are located around the world not just in native English speaking countries.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=26)** WordPress is fully translated into dozens of languages with many more dozens in the process.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=32)** There's actually a group of volunteers around the world who help with these translation efforts.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=37)** WordPress calls them Polyglots.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=39)** Since 2016, WordPress has even hosted a Global Translation Day, a full day dedicated to making WordPress available to more people around the world.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=50)** The mission of WordPress is to democratize publishing and making WordPress available in a variety of languages is a powerful way of accomplishing that mission.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=60)** WordPress has made internationalization a high priority which means that as a developer, it should be on your list too.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=68)** In the broader scheme, internationalization plays a role in better web accessibility.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=74)** It provides a gateway or access for non-developers to translate code into their own language.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/why-internationalize-code?u=76281980&t=80)** When you take the extra effort to make your code translation ready, you create a better experience for everyone who uses it and that's what you're going to learn how to do in this course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Internationalization vs. localization
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=0)** - [Instructor] If you're reading on the web about internationalization or maybe hearing other developers discuss it, you'll likely also come across the term localization.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=10)** While they go together like peanut butter and jelly they are two distinct things.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=15)** Earlier I shared the internationalization is the process of prepping your theme or plugin files so that they're easily translatable.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=23)** Localization, on the other hand is the actual process of translating a theme or plugin into another language.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=31)** It has its own fancy abbreviation structured in the same way.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=35)** L10n, where L is the first letter of the word.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=40)** N is the last, and there are 10 letters in between.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=44)** We'll discuss both of these in a lot more detail throughout the course, but I wanted to highlight those terms and their meanings upfront.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=51)** Now, before we move forward, let's talk about jigsaw puzzles.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=55)** If you've ever worked on a puzzle, you know how important it is to look at the picture on the box.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=60)** As a matter of fact, I always study the picture for a while before I ever even touch a single piece of the puzzle.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=67)** Likewise, before we look at the details of internationalization and localization, I want to zoom out and give you that big picture overview so that as we move through the course you'll already have a concept of where each piece fits.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=81)** So here's the short version of how it works.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=84)** Developers wrap translatable strings in special functions.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=89)** Those translatable strings are then extracted into a pot or portable objects template file.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=95)** Then using some tool translators provide translations for each of the strings.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=100)** The result is a PO or portable object file.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=104)** PO files are compiled according to whether they contain translated strings for JavaScript or for PHP.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=111)** So we've got MO files for PHP and JSON for JavaScript.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=116)** The compiled files are then used to output the translated strings.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=121)** I know I'm saying some odd sounding terms so if this sounds confusing, don't worry.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-vs-localization?u=76281980&t=126)** As we progress through the course we'll look at each piece of the process in more detail.

> [!info]- Semantic Content
>
> **Env Vars:** php (2), json (1)
> **Analogies:** picture (3)
> **CLI Commands:** php (2)
> **Code Keywords:** let (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Internationalization Concepts

#### What is gettext?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=0)** - [Instructor] Let me tell you a story.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=2)** Once upon a time, programmers realized the importance of creating multi-language versions of their software so that it could be used across the globe.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=11)** Their problem wasn't simply getting translations, though.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=14)** Programmers found themselves creating multiple copies of the same code in order to serve up different versions in local languages.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=22)** What a nightmare.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=24)** The solution to this inefficiency was a system called gettext, created by Sun Microsystems in the early nineties.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=32)** A few years later, the GNU project released an open source version of this called GNU gettext.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=38)** gettext works with multiple programming languages, including PHP and is considered the standard internationalization system across programming languages.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-is-gettext?u=76281980&t=48)** And this is what WordPress uses for internationalization.

> [!info]- Semantic Content
>
> **Env Vars:** gnu (2), php (1)
> **CLI Commands:** php (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Using text domains
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=0)** - [Instructor] To make your code translatable, you need to use a unique text domain to designate all the text that belongs to your particular theme or plugin.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=9)** Doing this enables translators to use automated tools to easily extract all the text that needs to be translated from your code.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=17)** If you intend to submit your plugin or theme to the [wordpress.org](https://wordpress.org) repository, there's a couple of things to be aware of.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=25)** First, stay away from underscores or special characters.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=29)** Use dashes to separate words.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=32)** Also, the folder name of the plugin or theme, should match your text domain.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=37)** Following these naming conventions, enables WordPress' automated translation services to work.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=44)** To give you an idea of how this works, I've got a local installation of WordPress already set up.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=50)** So if I go to Plugins, we can see that there are no plugins currently.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=55)** I'm going to change that.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=57)** Here, I've got my code editor open, and I've got the file system for this WordPress install loaded up.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=63)** So if I go to WP-Content and Plugins, let's create a new plugin here.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=71)** I'll create a new folder, and give it the very creatively named sample plugin.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=80)** And then from the root of that folder, I'll create my main plugin file and call it sample-plugin.php.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=90)** If you've spent any time looking at the source code for themes or plugins, you note that at the very top of that main file, there's always a header that provides information about said theme or plugin.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=102)** Now, at a minimum for this, we need to add a name.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=104)** So, let's go ahead and do this.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=110)** My plugin name is going to be Sample Plugin, and for the text domain, this will be pretty straightforward.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=120)** I'll just call it sample-plugin.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=124)** And that matches the spelling and name I'm using for both this main plugin file and my plugin directory.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=133)** I'll go ahead and save that.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=135)** And by the way, if you're curious what all goes into this header, WordPress has some documentation for that for header requirements.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=145)** You can see we've got this minimum filled here of just a name, and then all these other fields that can go in, including text domain.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=155)** And if I go back to my WordPress install, and reload this plugins page, there I can see my sample plugin.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=163)** So that's how you add a text domain.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=165)** The next step in the puzzle is to go ahead and load it.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=170)** We've got a few functions available for that.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=172)** And the one that you use depends on whether you're writing a plugin, a theme, or a child theme.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=179)** We've got load_plugin_textdomain, load_theme_textdomain, and load_child_theme_textdomain.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=187)** These functions are used to load text domains for plugins, themes, and child themes respectively.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=193)** Now, let me show you what these functions are doing.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=196)** If I head back to my WordPress install, I'll go to Settings, General, and here's an option to set your site language.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=207)** Based on whatever language a user has their site in, these functions will look to see if there's a corresponding .MO file included with the theme or plugin.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=216)** And if there is, it'll load it, pretty cool.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=219)** So since I'm working on a sample plugin, I want to use this load_plugin_textdomain function.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=227)** Using the WordPress docs as a guide, I can see that this function takes three parameters.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=233)** The first will be the text domain, the second is deprecated, and the third is the path to where the .MO files reside in my project.
>
> **[4:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=243)** Let's go back to our plugin, and off my route directory for my plugin, I'm going to create a new folder and call it Languages.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=253)** And if I had any translation files for this particular plugin, that would be the folder I would put them in.
>
> **[4:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=261)** While you don't have to name the folder languages, that's pretty common to see in the WordPress space.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=267)** So now, let's look at that load_plugin_textdomain function.
>
> **[4:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=275)** And those three parameters, the first one is going to be text domain, the second will just pass false, and the third is going to be the path.
>
> **[4:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=291)** And just to make this a little easier to read, I'm going to create a variable, called this plugin_rel_path, and I'll set it two point at that languages folder.
>
> **[5:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=305)** And now, that's it.
>
> **[5:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=307)** If a particular language file exists in my plugin that corresponds to the locale of the WordPress install, that translation would load.
>
> **[5:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=315)** Of course, I haven't created any language files yet.
>
> **[5:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=318)** We're going to get to that.
>
> **[5:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=319)** So far, we've created a text domain, we've now loaded it into our plugin, and then the final piece of the text domain puzzle is to mark up our strings with the text domain.
>
> **[5:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-text-domains?u=76281980&t=330)** We'll take a look at how that works after I introduce you to translation functions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), this, (1), this. (1), pass (1)
> **Code Identifiers:** load_plugin_textdomain (3), load_theme_textdomain (1), load_child_theme_textdomain (1), plugin_rel_path (1)
> **Prerequisites:** install (4), set up (1)
> **CLI Commands:** make (2), php (1)
> **UI Navigation:** go to (3)
> **Cross-References:** go back to (2)
> **Warnings:** be aware (1), note that (1)
> **File Paths:** sample-plugin.php (1)

#### Translation functions
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=0)** - [Instructor] In this lesson, I'd like to give a quick introduction to creating translatable strings in WordPress.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=6)** PHP is the primary language of WordPress, with JavaScript following.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=11)** When it comes to internationalization, there are methods that we can use for translating PHP and methods we can use for translating JavaScript.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=21)** Because PHP is a server-side language and JavaScript is a client-side language, the approaches are a little bit different.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=28)** Let's look at PHP first.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=30)** For PHP, WordPress uses the gettext function library, but instead of using the native PHP gettext function, WordPress has its own localization functions that serve as a wrapper for this one.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=46)** You're seeing examples of those functions on this screen, and these are the functions that you would use when translating for WordPress, not the native PHP functions.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=56)** Historically, in WordPress, you couldn't translate strings in JavaScript, only in PHP.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=62)** Well, as of WordPress 5.0, released in 2018, there's now a way to add translatable strings in JavaScript.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=71)** This is a 3-step process, each of which we'll look at a more detail later.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=75)** First, when registering scripts, you add wp-i18n as a dependency.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=82)** In this case, wp-i18n is a JavaScript library that ships with WordPress, and it contains the translation functions we need.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=91)** Then, inside your scripts, you can use those functions.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=95)** You'll see as we continue in the course that these functions look very much like their PHP counterparts and are used in the same way.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=103)** The final step is to tell WordPress that your script contains translations.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translation-functions?u=76281980&t=108)** We'll look at practical implementations of both PHP and JavaScript throughout this course, but for now, just note that when we talk about internationalizing code in WordPress, we're talking about specific functions used in P H P and JavaScript.

> [!info]- Semantic Content
>
> **CLI Commands:** php (10)
> **Env Vars:** php (10)
> **Code Keywords:** function (2), let (1), case, (1), continue (1)
> **Definitions:** is a  (4)
> **Versions:** 5.0 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Working with Translation Functions in PHP

#### Translating strings
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=0)** - [Instructor] In order to make a string translatable in PHP, you need to wrap it in a gettext function.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=6)** Here we are in the PHP manual for gettext, and we can see exactly what this function looks like.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=13)** The name of the function is gettext, and it accepts a single parameter called message, and that is a data type of string.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=22)** Now, this function also has a shorter alias.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=26)** If we scroll down, here we go, you can use a underscore character as an alias for the gettext function.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=36)** Now on WordPress, we're not going to use either one of these, because WordPress has its own functions for translating strings.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=43)** Here's a page showing all of the available PHP translation functions in WordPress.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=48)** And the equivalent to what we just looked at with the gettext or the single underscore, is this double underscore parenthesis.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=57)** This function is going to be the most common translation function that you'll see.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=62)** And note that depending on what font you're using in your code editor, the double underscore may look like this, or it may look like two distinct underscores.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=74)** I'm going to open up my code editor, and let's take a look at an example.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=79)** I'll create a variable called greeting, and just set it equal to a string that says, "Hello", straightforward enough.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=91)** But the problem here is that I've hard coded the word "Hello", and if you wanted to translate this to say, Spanish, you'd have to go into the code, and manually change "Hello" to "Hola".
>
> **[1:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=103)** That's the whole point of internationalization.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=106)** We want to make this easy to change, without having to modify the source code.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=112)** So let's make this string translatable, with a double underscore function that we just looked at.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=118)** So if we go back to the docs here, we can see that this function takes two parameters.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=123)** The first is going to be the string that we want to translate, and the second is the text domain.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=130)** Earlier we talked about text domains, and that they're used to help automated tools extract all the strings for translations belonging to a particular theme or plugin.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=140)** The text domain for this plugin I'm working on is sample-plugin, so we're going to use that.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=148)** So I'm going to get rid of this and use double underscore.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=152)** And the first is going to be the string that I want to translate, in this case, "Hello".
>
> **[2:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=157)** And the second parameter is going to be that text domain.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=163)** Now, I officially have a translatable string in PHP.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=168)** In theory, this string, "Hello", could be extracted into a pop file for translation later on.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=174)** Now in this example I've set the variable, greeting, equal to a value, and if I wanted to print that value, "Hello", to the screen, I'd need to echo it out, and I could do that just by saying echo greeting.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=190)** It so happens there's another string translation function that lets us skip this extra line of code, and just go straight to echoing out a translatable string.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=201)** Going back to our translation function reference, that is going to be this _e function.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=209)** I'll click on that and it looks like there is an updated page available.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=214)** So what this _e function, there's no need to write the two lines of code, one with a variable and a second one echoing the variable.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=222)** This particular function does both.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=225)** And we can see that it takes the same two parameters and that's going to be the string for translation and the text domain.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=233)** So going back to my code, I could write _e,
>
> **[4:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=241)** my string for translation, (keyboard keys clicking) and my text domain.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=249)** And this single line of code does the same thing as these two lines of code combined.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=255)** Of course, depending on whether you actually want to return a value or print it to the screen, will determine whether or not you're using the double underscore versus the _e function.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-strings?u=76281980&t=266)** And that's it, the double underscore and the _e are the two most basic translation functions you'll use when internationalizing your code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (2), this, (1), case, (1)
> **CLI Commands:** php (4), make (3)
> **Env Vars:** php (4)
> **Cross-References:** go back to (1), we talked about (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** the docs (1)
> **Exercise Files:** source code (1)

#### Translate HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=0)** - [Narrator] Now that you've seen two basic translation functions, the double underscores for returning strings and the _e for echoing strings, there's a couple of more string translation functions I'd like to introduce you to.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=13)** They're the counterparts to these two functions that we just looked at.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=17)** The difference is that you use these when there's HTML output involved.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=22)** Here, we're adding the escape_html to the beginning of either one of those functions to escape HTML output.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=31)** In the first case, we're returning a string with escaped HTML and in the second we're echoing that string.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=38)** If you're not familiar with escaping HTML output, it basically goes like this.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=45)** Escaping HTML lets us tell the browser whether we want to interpret those characters as text or truly as a special character.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=55)** The easiest way to explain this is by looking at an example.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=59)** And we've got one ready to go here in the WordPress docs.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=63)** So here we've got a variable called $html and it contains a string with HTML markup.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=73)** So the question is, do we want to display the HTML when it prints to the screen or do we want it to render the HTML so that it actually prints out a link?
>
> **[1:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=84)** That's where escaping HTML comes into play.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=87)** Escaping the HTML, then our string contains the entity characters instead of like the greater or less than signs.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=95)** Then when it's displayed in an HTML document it would look like this versus actually rendering a link.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=104)** So if we escape HTML output, it'll look more like the former, and if we don't escape it, it'll actually read that text as HTML and render it.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=117)** So depending on the output that you're going for, you would or would not use an escape_html function.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=125)** So getting back to internationalization.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=128)** That's where the escape_html__ function or the escape_html_e functions come in.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translate-html?u=76281980&t=136)** These functions return or echo a translated string that includes HTML that should be escaped.

> [!info]- Semantic Content
>
> **Env Vars:** html (14)
> **Code Keywords:** function (2), case, (1), this. (1), for, (1)
> **Code Identifiers:** escape_html (2), escape_html_e (1)
> **Speakers:** - [narrator] (1)

#### Use placeholders
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=0)** - [Instructor] Let's talk about placeholders.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=2)** Placeholders come into play when you're using variables in a string.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=6)** For instance, I might want to personalize a welcome page with a logged-in user's name.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=11)** So how would I internationalize this data?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=15)** In this case, I want to make the text "hello" translatable, but I don't want the variable to literally appear in the translation file, that wouldn't make any sense.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=24)** So that's where placeholders come in.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=27)** It's leaving an available spot for the code to come back and insert the dynamic data at runtime.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=33)** In PHP, placeholders are implemented using a combination of the sprintf or printf functions, along with something called a type specifier.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=43)** As we've already seen with some earlier functions that we've worked with, some functions, like double underscores, returns a value, while others, such as _e, outputs a value.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=55)** When it comes to sprintf versus printf, that's the basic difference.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=59)** Sprintf returns a formatted string while printf outputs it.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=64)** Now what about those type specifiers I mentioned?
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=68)** Well, there's full documentation here on the [W3schools.com](https://W3schools.com) website, but I'm going to highlight the ones that I'm most interested in.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=76)** I'm going to use this %d as a placeholder anytime I need a placeholder for an integer, and this %s anytime I want my placeholder value to contain a string.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=89)** Let's take a look at an example.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=92)** Here, I've got the user variable, which equals Carrie, and that's a string, which means that I'm going to use the %s placeholder.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=101)** Now, the way that the sprintf function works is the first parameter we're passing in is the formatted string, in this case, it's that hello, %s.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=111)** And the second value that we're passing in is the argument that's going to be used to replace the %s.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=118)** So it's the value of %s, and in that case, it's our user, which equals Carrie.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=124)** So our greeting variable would actually hold, Hello, Carrie.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=130)** So that's how you would use the sprintf function with a placeholder, but at this point, we haven't done anything to make that word "hello" actually translatable.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=140)** In order to do that, we need to wrap the formatted string inside of a translation function.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=147)** So here, I'm going to use the old friendly double underscore translation function.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=153)** The first parameter I give it is the string for translation and the second is the text domain.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=159)** And then, if we nest that inside of the sprintf function, then we can pass the translation function, comma, and then user, which is going to be the argument that, again, will be used to replace that %s or that string placeholder.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=176)** So that's how you could work with a single placeholder in a translation function.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=181)** But let's say you want to get fancy and do multiple placeholders.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=186)** For instance, let's say I want to output a sentence, Hello, Carrie, you're employee 99.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=192)** In this case, I'd be working with multiple placeholders.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=195)** So how does that work?
>
> **[3:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=197)** Well, let's take our variable user, it still equals Carrie, and we'll create a new variable called number and set that value to 99.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=207)** So we've got one string and one integer, and we'll pass those into the sprintf function as arguments.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=215)** So we've got our first string, hello, %s, which is going to be replaced by that first argument titled user, and you're employee %d, and that placeholder is going to be replaced by the second argument, which is the variable number.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=232)** So what the string would actually hold then is, Hello, Carrie, you're employee 99.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=238)** Now, once again, this is how the sprintf function works, but at this point, we haven't done anything to make that entire sentence translatable.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=246)** So to do that, I'm going to wrap it in the double underscore function and then nest that inside of the sprintf function where I can replace those placeholders with the actual values I want.
>
> **[4:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=260)** So here I'm showing you examples with sprintf but printf works in very much the same fashion except for it outputs the value versus just returning it.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/use-placeholders?u=76281980&t=271)** And that, my friend, is placeholders in a nutshell.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (5), case, (4), pass (2)
> **CLI Commands:** make (4), php (1)
> **Analogies:** for instance (2), such as (1)
> **URLs:** [w3schools.com](https://w3schools.com) (1)
> **Env Vars:** php (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Argument swapping
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=0)** - [Instructor] Word ordering in a sentence differs from language to language.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=4)** For example, in English, the adjective typically goes before the noun so I might say the pretty flower.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=11)** In Spanish however, this might be reversed.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=14)** So the same phrase would read la flor bonita with the noun coming first then followed by the adjective.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=21)** We've seen how to use placeholders for translations but there may be times when you need to allow translators the flexibility to decide where an argument is used.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=32)** Enter argument swapping.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=34)** Argument swapping lets the translator determine which argument goes where regardless of the order that the argument is passed in.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=43)** To accomplish this, we'll use a variation of the placeholder we've already looked at, and it looks a little like this.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=51)** So we've got the %s when there's a single placeholder in a string.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=56)** For multiple placeholders, we'll add a number and a dollar sign for each nth placeholder.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=64)** The same exact thing goes for %d when we're working with decimals or integers.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=70)** We add 1$ to the first placeholder, 2$ to the second, and so forth.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=76)** And in this case, the number represents the argument's position in the print F or sprint F function.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=83)** For example, here we've got three variables, two of which are strings, and one of which is numeric.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=90)** Those variables are passed to the sprint F function in a specific order.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=95)** In this case, I've got the variable container followed by treat, followed by quantity, but that doesn't have to correspond to the order that they're used in the translated string.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=106)** The number that precedes the dollar sign indicates where the argument should appear in the translation.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=113)** This gives the translator the flexibility to adjust the language in a way that makes the most sense.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=119)** In this example, our translation function would let us sub in any of these translated variations.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=126)** There are three cookies in the jar.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=129)** The jar contains three cookies or three cookies remain in the jar.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/argument-swapping?u=76281980&t=134)** This is a simple example but it demonstrates how you can work with argument swapping with placeholders in the context of a translatable string.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), case, (2), this, (1), this. (1), let (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with plurals
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=0)** - [Instructor] Plurals come into play when you have a string that changes with a number of items.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=5)** A basic example of this in WordPress is the comment.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=8)** In English, we have one comment where comment is singular, or two comments where comments is plural.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=16)** When working with strings for translation, we need to allow translators a way to adjust these strings based on that number.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=23)** In this case, comment versus comments.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=26)** To help us with that, we've got the _n function.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=30)** This function grabs the plural, or singular form based on the quantity.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=36)** Let's take a look at this function in the WordPress docs.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=39)** So the function takes four parameters.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=42)** First, we've got the single version of the string, which is the text that'll be used if the number is singular.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=48)** Then we've got the plural version and then we have whatever the number actually is.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=53)** And finally, our text domain.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=56)** So let's look at an example.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=59)** Using comments, I'm going to say _n or I should say using comments as an example.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=68)** I'll do the first string, which is the singular string and say there is one comment.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=75)** The plural string is there are two comments.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=80)** Then we have the number of comments that there actually are.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=84)** So I'll just leave, put a little variable there for a second.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=87)** And then that fourth parameter is going to be our text domain.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=91)** In this case, sample-plugin.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=96)** So I'll say comments, and let's say our comments equal 30.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=103)** It was a really popular post.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=105)** Lots of people commented.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=107)** (instructor chuckling) Okay, so here's a basic way of how that _n function would work.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=113)** But remember here, we're actually working with placeholders.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=116)** I don't want to hard code the one or the two.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=121)** So in this case, I'm going to need to wrap this entire thing in a sprintf function.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=132)** So if you recall for sprintf, the first parameter is going to be the string to be translated and we'll dump in this entire _n function.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=143)** The second parameter is going to simply be the value that we use to replace our placeholders.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=152)** So let me go back and add placeholders since we're dealing with integers here.
>
> **[2:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=156)** I'll use %d and then this comments is going to be the value that I want to use to replace these placeholders.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=174)** Let me make sure we got word wrap on here so you can see this.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=178)** Okay, so let's break this down.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=180)** So we have the sprintf function and within that, we've got the _n.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=186)** There is a placeholder, comment, the singular form.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=191)** The second parameter is there are placeholder comments, which is plural.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=197)** Then we have the number of comments and this number is going to determine whether we return the singular or the plural form.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=204)** And then within the sprintf function, we need to specify what the placeholder value should be.
>
> **[3:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=210)** And that's where this comments comes in.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=213)** And of course, since sprintf only returns value versus echoing it or outputting it, you would need to set this as a variable and then you could echo the variable or you could use printf instead.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/working-with-plurals?u=76281980&t=231)** As you can see between plurals and placeholders, we've really got a ton of flexibility when it comes to translating strings.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (6), case, (3), finally, (1), this. (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding context
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=0)** - [Instructor] Context is everything.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=2)** English has words and phrases that can have totally different meanings depending on the context.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=8)** In another language, the same concept may use different words or phrases entirely.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=13)** This is where the _x function steps in to help translators.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=18)** The _x is similar to the double underscore, but it accepts an additional context parameter so that context can be added.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=26)** Let's take a look at an example.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=29)** So here I've got the word Lead, Lead, or Lead depending on how the word is being used.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=37)** With the _x function, the first parameter is going to be the string for the translation, in this case, Lead or Lead, and the second is going to be context.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=47)** So in this first example, the context is a lead as in a leash for a dog.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=53)** And the second example, it would be a type of metal.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=56)** And then in the third example, it would be a verb, meaning to guide or influence others.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=63)** And then the final parameter we pass to this translation function is the text domain.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=69)** This function also has a couple of sister functions that follow the pattern we've already seen.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=74)** There's the basic _x for returning the string.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=78)** The _ex for echoing a string.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=82)** And the hybrid _nx function that supports both plurals and context.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=88)** When it comes to translating strings, the main point here is that if there's any room for ambiguity, always err on the side of providing too much information.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=98)** I guarantee you that your translator will appreciate it.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=102)** If your head is swimming from all the different translation functions for PHP that we've looked at so far, don't worry, just remember the WordPress docs are your friend.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/adding-context?u=76281980&t=111)** It has all of these functions documented complete with examples for each so that you can reference them anytime you need.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), case, (1), pass (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Working with Translation Functions in JavaScript

#### Including wp-i18n
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=0)** - [Instructor] As of WordPress 5.0, it's possible to internationalize JavaScript files using functions that directly mirror those used in PHP.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=9)** There's an internationalization script that ships with WordPress, and to use those functions in your theme or plugin, you need to declare this script as a dependency.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=19)** If you're using MPM in your project, you can install it as a dependency, and then you could import those functions that you need from that package, and then use them accordingly in your code.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=32)** If you're not using MPM, you can declare this package as a dependency when registering or on-queuing your script.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=40)** In that case, you've got your code that you write, and that's in a JavaScript file.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=44)** Let's say it's called my-script.js.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=47)** Then when you register or on-queue the script, and we'll on-queue it in this example, then you declare that W 18n as a dependency.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=58)** This tells WordPress to load the script before your my-script.js, ensuring that the translation functions will be available to your script.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=68)** Once you've done that, you're ready to start using translation functions in your JavaScript.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=72)** And what exactly are those?
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/including-wp-i18n?u=76281980&t=74)** Well, we'll get to that in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** mpm (2), php (1)
> **File Paths:** my-script.js (2)
> **Code Keywords:** case, (1), let (1)
> **CLI Commands:** php (1)
> **Versions:** 5.0 (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Using translation functions
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=0)** - [Instructor] Once we've got the WP I18n script loaded as a dependency, we can start using translation functions in our JavaScript.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=8)** Now, not all translation functions in PHP have JavaScript counterparts.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=13)** These are the ones that we're limited to.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=16)** We've got __(), which retrieves the string for translation.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=21)** We've got _x() that retrieves the translated string with context.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=26)** We've got _n(), which retrieves the singular or plural form of a translated string.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=32)** We've got _nx(), which does the same thing as _n(), except this gives us the opportunity to add context.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=40)** And finally, sprintf(), which allows for placeholders.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=45)** Note that for each of these, these translation functions are retrieving values and not printing or echoing them.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/using-translation-functions?u=76281980&t=53)** You could use any of these the same way that you use their PHP counterparts.

> [!info]- Semantic Content
>
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Code Keywords:** finally, (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Loading translations
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=0)** - [Instructor] To complete the circuit when it comes to using internationalization functions in JavaScript, the remaining bit is to tell WordPress to load those transactions, and we do that with the WP Set Script translations function.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=14)** This function takes three parameters.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=17)** The first is the handle of your already registered or on queued JavaScript file.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=23)** The second is the text domain of your theme or plugin and the third is going to be the path to the directory containing your translation files.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=33)** And that's really it.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=34)** Once you've included the internationalization script as a dependency you can then use translation functions in your JavaScript.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/loading-translations?u=76281980&t=42)** Then assuming your theme or plugin includes translation files, you direct WordPress to load them using that function we just looked at.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3)
> **Speakers:** - [instructor] (1)


### 6. 5. Make a Plugin Translation-Ready

#### Introducing the project
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=0)** - [Instructor] In this chapter, I want to take what we've learned about internationalization and apply it in the form of a basic WordPress plugin.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=8)** So here I've got WordPress running locally on my machine and in this particular install, if I go to Plugins, here is a plugin called To the Top.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=19)** And what this plugin does is it adds a back to top link to every page of the site.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=25)** If we look at the front-end of the site, we'll see two instances of that link.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=30)** One is written in JavaScript and the other is in PHP.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=35)** Now, before we get started, I'll give you an introduction to the files and folders that make up this plugin.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=41)** So first, I've got a folder called to-the-top.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=44)** Then in the root directory, I've got my main plugin file to-the-top.php.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=50)** And here in the root directory, I have two folders, a js folder containing a JavaScript file, and my languages folder, which contains my files for translation.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=61)** I mentioned it at the beginning of the course, but as a refresher, you have access to these same files via GitHub.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=69)** There's a branch for each video in this chapter.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=72)** In some cases, two branches, one marked with b and one with e, where b stands for beginning and e for end.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=80)** For example, this branch 05-04b contains the code I used as the starting point of the fourth video in this chapter, while branch 04, 0e shows what the code looked like at the end of that lesson.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=94)** You're welcome to clone this repository to your local machine.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=98)** Use GitHub Desktop or download a complete zip and follow along.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/introducing-the-project?u=76281980&t=103)** Now that you have an idea of what we're building, let's strip it down to the beginning and we'll build it up from there.

> [!info]- Semantic Content
>
> **CLI Commands:** php (2), make (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), stands for (1)
> **File Paths:** to-the-top.php (1)
> **Code Keywords:** let (1)
> **Env Vars:** php (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Best practices for internationalization
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=0)** - [Instructor] Before we dive into creating a plugin that's translatable, I want to talk about some best practices when it comes to prepping strings for translation.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=9)** First, use a good English style.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=12)** Try to avoid slang or abbreviations if possible.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=15)** If a translator doesn't understand the message, they can't provide an appropriate translation.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=20)** For example, 'No match', is not a helpful string.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=24)** Does this mean that we can't start a fire or there's no result for a search or that my outfit doesn't go together?
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=31)** Avoid ambiguity, and you can do that by following our next rule.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=36)** Write entire sentences.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=38)** This is really important as many languages have a different word order than English.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=44)** Next up, split your text at paragraphs.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=48)** It's okay to have multiple sentences as part of a single string, but basically you don't want to end up with a whole page of text in a single string.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=57)** Next, instead of using concatenation, format strings.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=61)** In the case of these two examples, the second one is much simpler to read than the first one that uses concatenation.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=68)** Along with these best practices, try not to embed URLs and instead use placeholders.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=75)** This is a best practice both for security and it eliminates potential mistakes that could come from copying, pasting a URL.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=83)** Lastly, avoid leading or trailing white space in a translatable phrase.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/best-practices-for-internationalization?u=76281980&t=89)** If you follow these rules of thumbs, you'll increase the odds of getting successful and accurate translations for your strings.

> [!info]- Semantic Content
>
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Add text domain and set domain path
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=0)** - [Instructor] So to get started, I have a local installation of WordPress up and running.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=5)** And you can see I have no plugins yet.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=8)** I'm going to head over to my code editor where I have this install opened up.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=13)** And in my plugins folder, I'm going to start by adding a new folder for my plugin, to-the-top, to-the-top.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=22)** And from there, I'll add my main plugin file by the same name.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=28)** I'll start by opening up my PHP brackets.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=32)** The next thing I want to do from here is add a header block.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=36)** I will head over to the word WordPress docs and I'm going to actually go and just copy this header block here and paste that into my file.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=48)** That way I don't have to type it all out.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=50)** And I'm going to update this with my own information.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=55)** I'm not going to spend a lot of time here explaining this header block, but what I do want to point out is this text domain and the domain path.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=65)** We know that the text domain is what we'll use to identify all of the translatable strings that belong to this plugin.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=73)** The text domain should exactly match the slug of your plugin, and in this case my slug is two-the-top.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=81)** Now, note that as a WordPress 4.6, you don't have to specify the text domain like this.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=86)** WordPress will automatically set it based on your plugin slug.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=90)** That said, there's definitely no harm in including it, and I like it as a reference point for this example.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=97)** The next thing I want to call out is this domain path.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=100)** This lets WordPress know here to find the translations.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=104)** Later on, I'm going to create a folder that will hold my translation files, and that's going to be the name of the folder here that I set for my domain path.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=113)** I'll just leave this for now.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=115)** Note that while you don't have to name your folder, "languages", that is something that's pretty standard in WordPress plugins and themes, so I'm going to stick to it.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-text-domain-and-set-domain-path?u=76281980&t=124)** So with our main plugin file and our header block in place, we are ready to roll.

> [!info]- Semantic Content
>
> **CLI Commands:** php (1), find (1)
> **Warnings:** note that (2)
> **Code Keywords:** this. (1)
> **Env Vars:** php (1)
> **Versions:** 4.6 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Add translation functions to PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=0)** - [Instructor] In this lesson I want to write some code that will output a, back to top, link in the footer of my site.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=7)** So I'm going to start by writing a function.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=12)** I'll call it ttt, for to the top, underscore add link.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=20)** And let's create a variable for my link text.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=27)** And we'll just say, back to top.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=33)** And then I'm going to use a print F statement to construct my link.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=44)** And now we're going to do a couple of familiar things.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=47)** So for starters, this link text, I want it to be translatable, so I'm going to use the basic double underscore translation function, where the first parameter is the text that I want to translate and the second parameter is my text domain.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=67)** Then here in this print F function, I'm going to use a placeholder for that link text.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=74)** So I'll say percent S.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=77)** And the second parameter of this function should be the value of that, which is this link text variable.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=85)** So I'll go ahead and add that in.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=86)** Let's not forget our semicolon.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=89)** And oops, I forgot to write the word function at the beginning of my function name.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=93)** So let's go ahead and add that.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=95)** We'll add a couple of quick comments explaining what's going on.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=105)** Okay, so now I have a function that would add a link, but right now I haven't hooked it anywhere, so this function isn't actually going to execute.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=115)** To do that, I'm going to do an add action and hook it to WP Footer.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=123)** So there's my hook, and then my callback function is this ttt underscore ad link.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=132)** Perfect, so let's save that.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=134)** And if I head back to my plugin, let's refresh.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=141)** Here, I can see, to the top.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=143)** And before I activate it, let's just go look at the site.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=147)** Okay, and this is just a default WordPress install I haven't done anything to.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=153)** Let's activate the plugin and when we reload the front end, there we see that back to top link.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=162)** And if I click it, boop, it takes us right back to top.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=167)** Okay, so I know I glossed over this right here of using action hooks and filters.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-php?u=76281980&t=173)** If you really want a thorough walkthrough of those topics, I have got a course that in the library. just for you, but with just this code, I've got a very basic function that outputs a link with translatable text.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (7)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Create and enqueue a script with wp18n
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=0)** - [Instructor] So far, I've shown you how to create a back to top link with translatable text and add it to the footer of a site using PHP.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=9)** Now I want to show you how you could do the same, but with JavaScript instead.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=13)** I'm going to start by creating a folder off the root of my plugin, and I'll call it js, and inside that folder, I'll create a file, and just call it to-the-top.js.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=28)** I'll just create this as a placeholder for the custom code that we'll write in the next lesson, but I'd like to go ahead and tell WordPress to load this file.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=39)** So to do that, I'm going to use the enqueue_script function.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=45)** This registers a script in WordPress and queues it up, so to speak, and it takes 4 parameters.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=52)** The first is going to be a unique handle for the script, the URL or source of the script, any dependencies, and then you can also specify a version number, and then whether or not it should load in the footer.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=68)** So let's head back to our plugin, and in our main file, we add a couple lines.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=76)** We'll add a function and we'll call it ttt_load_scripts, and this function is going to hold that script enqueue.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=87)** Normally in a theme or a plugin, you might be loading up a number of scripts or even styles, so sometimes it makes sense to bundle those within a single plugin, or excuse me, a single function.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=100)** So we'll do wp_enqueue_script, and the first thing we want is the handle, so we'll say to_the_top.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=110)** The second is going to be the source.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=114)** Now, how you specify the source will look a little bit differently depending on if you're using a plugin versus a theme versus a child theme.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=124)** So in this case, I'm going to use the plugin directory URL function,
>
> **[2:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=138)** and then point it to that js folder, and to-the-top.js.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=145)** Okay. I'm going to go ahead and just leave it at that for the moment.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=151)** Put our ending semicolon.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=153)** Okay, and now we need to hook this function up so that it runs, and the appropriate hook for that is this wp_enqueue_scripts, plural, so I'm going to go ahead and copy that.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=168)** We'll do another add_action.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=173)** There's our hook, and here is our callback function.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=179)** Okay, so with that, if I head back to the site that we're building, let's open up the inspector, and under the network tab, I'm going to select JS so that I can see all JavaScript files that are loading on this page.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=196)** I'll go ahead and click reload, and there we go. I got a couple of scripts that are just loading with the site, and then there is my to-the-top script.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=206)** So that's what we're doing with this bit of code.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=209)** Now the other thing that you can pass as part of this enqueue script function is any dependencies, and we've talked earlier that we want that wp-i18n script as a dependency, and also for the code I'll be writing, I do want to use jQuery, so I'm going to go ahead and add jQuery as a dependency.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=233)** So now if I save that and go back and refresh this page, there we go. I can see that jQuery is loading, along with that i18n, and then those scripts, in turn, have some dependencies, which you see being loaded here.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-and-enqueue-a-script-with-wp18n?u=76281980&t=249)** But we've confirmed that our JavaScript file is loading, that the dependencies are loading, and with that, we're ready to move forward to the next step.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2), case, (1), pass (1)
> **Code Identifiers:** jquery (3), enqueue_script (1), ttt_load_scripts (1), wp_enqueue_script (1), to_the_top (1)
> **Env Vars:** url (2), php (1)
> **File Paths:** to-the-top.js (2)
> **CLI Commands:** php (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Add translation functions to JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=0)** - [Instructor] With our script set to Load along with the dependencies that we'll need, let's add some JavaScript to our file.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=6)** In this case, I'm going to replicate what I've already done with PHP, and do it with JavaScript.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=12)** Now, while you wouldn't really bundle both of these together in a real-world scenario, my point is to show you how to create translatable strings in both PHP and JavaScript.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=23)** Now, to save you from having to watch me type, I've got some code on my clipboard that I'll just go ahead and paste in, and then I'll explain what's going on.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=33)** Okay, so inside of our jQuery here, we've got our variable called toTheTop and that holds basically our link.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=42)** We've got the link target, a CSS class, and then the text, Back to top.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=46)** And then this next bit here simply appends that link to the HTML footer in our site.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=53)** So let me save that.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=56)** Let's go back to our page and refresh.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=63)** And now we see two Back to top links, one is from our JavaScript and the other is from our PHP.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=69)** And just to make those a little bit easier to differentiate, let's say this one is JS, and if I go back to the PHP, here's my link text, I'll put PHP.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=83)** Okay, so if I refresh there, now I can see which one is coming from JavaScript and which one is coming from PHP.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=91)** So the last piece of the puzzle here is to make this text here translatable.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=97)** We're going to use the double underscore function that you've already seen.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=102)** So we've got our string to translate and we'll use our text domain, to-the-top.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=109)** Now, there's one more thing I need to do in addition to wrapping this in a text string.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=115)** Even though I've loaded the internationalization script as a dependency, I need to reference that object here in this JavaScript file.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=124)** There's two ways I can do that, and I was just going to show you here from the documentation.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=129)** The first would be to take those available translation functions for JavaScript and set them to a constant referencing that wp.i18n object.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=139)** The other way is just to directly reference that object by putting it in front of that translation function.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=147)** You can do this either way.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=149)** If you're going to have a lot of translatable strings in the context of your JavaScript file, it's probably easier to go with the recommendation here from the docs, which is just to set that up once, and then you can use any of these translation functions without having to prefix them.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=170)** So let's go ahead and save that.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=172)** And if I head back to my site, reload, nothing changes, I've got both of those links there.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/add-translation-functions-to-javascript?u=76281980&t=180)** But in the background, I know that both of those now contain translatable strings and we're going to take a look at what to do with those in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), case, (1), type, (1), class, (1)
> **CLI Commands:** php (6), make (2)
> **Env Vars:** php (6), css (1), html (1)
> **Cross-References:** go back to (2), in the next (1)
> **Code Identifiers:** jquery (1), tothetop (1)
> **Documentation:** the documentation (1), the docs (1)
> **Speakers:** - [instructor] (1)

#### Create a translation file
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=0)** - [Instructor] The plugin we've built so far contains strings for translation in both JavaScript and PHP.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=7)** In this lesson I'd like to show you how to generate a POT file, that stands for portable objects template and that contains any translatable strings.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=16)** There are several ways that you can generate a POT file and I'm going to show you how using WP-CLI.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=22)** Now, if you're not familiar with WP-CLI this is the official command line interface for WordPress and it has all sorts of helpful utilities for managing WordPress via terminal.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=34)** If this sounds intimidating, it's actually pretty approachable and there's great documentation for installing it on your machine and running it.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=43)** You also have the option to use POEDIT, a visual tool for creating POT files.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=49)** I'll be using WP-CLI and here's the documentation for that make-pot command that's used to generate a pot file.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=57)** One quick comment I want to make before we get started.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=60)** If you happen to use local WP for your local WordPress development it automatically installs WP-CLI for you.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=68)** And to use those commands, all you have to do is go to your site in local and click open site shell.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=76)** It opens a terminal window where you can run those CLI commands.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=80)** Okay, so here's the documentation for make-pot and we can see that this scans PHP, Blade-PHP, and JavaScript files for translatable strings.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=91)** There's multiple options that we can pass to this command.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=94)** For instance, here's destination.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=96)** That would be where you want the POP file to be generated.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=101)** You can include specific files or directories, exclude them, etc.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=105)** And then if we keep scrolling down here are a couple of examples of this command in use.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=112)** So I will go over here to local and open site shell.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=118)** Here it's dumped me in the public directory.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=121)** So if I do, let's list things out.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=124)** Okay, I want to head into my WP content plugins folder and if I look at what's in there we can see that to-the-top plugin.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=134)** I want to run that make-pot command on the entire to-the-top folder and everything in it.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=141)** So I'm actually going to run that command from this plugins folder.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=144)** And to do that, I'll say, wp i18n make-pot and then I'll specify the directory, to-the-top.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=158)** Okay, I'll hit enter.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=160)** Success.
>
> **[2:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=161)** My POT file was successfully generated.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=163)** Let's go back to our code and see.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=166)** Okay, so here in my plug-in file I can see that that created a languages folder off the route directory.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=171)** And inside of that is a to-the-top POT file.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=175)** And inside of this file are strings for translation.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=178)** You can see that it's pulling some information automatically from the header in my plugin.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=185)** And available strings for translation we've got the name of the plugin, the description of the plugin, author's name, URI, and here we can see specifically that back to top text that was in our PHP function and this back to top text that was in our JavaScript function.
>
> **[3:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/create-a-translation-file?u=76281980&t=208)** So now that I've got a POP file included with my plugin I'm officially ready for translation.

> [!info]- Semantic Content
>
> **Env Vars:** pot (5), cli (5), php (4), pop (2), poedit (1)
> **CLI Commands:** make (5), php (4)
> **Code Keywords:** let (2), function (2), interface (1), pass (1), public (1)
> **Tools:** terminal (2), command line (1)
> **Documentation:** the documentation (2)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Include an additional translation with your plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=0)** - [Instructor] Now that we've gone through the process of creating a plugin, using translation functions and pulling translatable strings into a POT file, I'd like to show you how you could use this as the basis for localizing your plugin.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=14)** We know that POT stands for portable objects template.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=18)** So think of that file as the template containing source text that translators will use to generate POE or portable object files with their translations.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=28)** One POE file will be created per translation.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=31)** For example, you may have one POE file containing a Danish translation another for Spanish, and another containing Hindi.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=39)** The POE file is where the translation happens.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=43)** Then in order to use these translations in WordPress, these POE files need to be compiled for strings from PHP files, a MOE file is created, and for strings from JavaScript files, a JSON file is created.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=57)** We've already got our POT file.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=59)** So to start, I'm just going to create a new file in my languages folder, and this is going to be my POE file.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=69)** What should I name it?
>
> **[1:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=71)** Well, with plugins, the naming convention for POE files is the text domain followed by a dash, language code_country code.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=80)** If you're providing translations for a theme, you could leave off the text domain and simply use the language cod_country code convention.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=90)** Here's a resource for finding country codes and language codes.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=95)** And in case you're wondering why we use a combination of these two, it's because many countries share the same language, but there might be regional differences.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=104)** So using a language code in conjunction with a country code gives us the ability to include very specific translations.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=113)** In my case, I'll be creating a translation in Spanish.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=117)** So I'll say to the top for my text domain- and then the language code is ES_ and the country code in this case for Mexico is MX.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=130)** And I'll just give it the .po extension and I'm going to go ahead and copy and paste the components of my POT file directly into that POE file.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=143)** So you could use a visual translation tool here but since I've only got two strings to translate, I'm just going to do it manually.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=151)** And that's these two strings, the back to top for PHP and the back to top for JS.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=159)** So the message GID, that's going to be the original text to translate.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=163)** And then what goes in this message STR is going to be your translated string.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=173)** Okay.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=174)** I'll go ahead and save that with my translated strings, and that's it.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/include-an-additional-translation-with-your-plugin?u=76281980&t=178)** I've now got my POE file ready to go.

> [!info]- Semantic Content
>
> **Env Vars:** poe (9), pot (4), php (2), moe (1), json (1)
> **CLI Commands:** php (2)
> **Code Identifiers:** code_country (1), cod_country (1)
> **Exercise Files:** template (2)
> **Code Keywords:** case, (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generate MO and JSON files
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=0)** - [Instructor] With our PO file translated, it's time to compile it into a MO file and a JSON file.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=6)** The MO file will hold translated strings for PHP and the JSON file has the strings for JavaScript.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=13)** Let's start with the MO file.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=16)** There are various ways you can do this.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=18)** You could do it via the command line, you could do it via Poedit, or even a plugin like Loco Translate.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=29)** Since I've already shown you the wp i18n CLI command, I'm going to stick with that.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=36)** There's a make-mo sub command I can use.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=39)** Let's go ahead and click through that.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=42)** And this basically takes two options.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=45)** There is a source, which is the path to the existing PO file, or a directory with multiple PO files, and the destination directory.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=55)** Basically, where do I want to save this MO file?
>
> **[0:59](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=59)** I'll go back to terminal and confirm that I'm in the root directory of my plugin and I'll run the command, wp i18n-make-mo.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=74)** And I want to specify the languages folder, as both the source and I'll let it default to that destination.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=84)** And success. It says created a file. Let's go check it out.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=88)** Okay, so in my languages folder, I now have a MO file that matches the naming convention of my PO file.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=94)** Perfect.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=96)** Next up, I want to create the JSON file that I can use for translating the JavaScript strings.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=103)** So let's head back to the i18 sub commands and here is one specifically for make-json.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=113)** This extracts JavaScript strings from PO files and adds them to individual JSON files.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=120)** Now, this is a little more nuanced than that make-mo command, so let me highlight a few things.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=126)** For starters, let's say you have multiple JavaScript files with translation strings represented in your POT file.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=133)** This command would generate a single JSON file per JavaScript file.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=139)** It's a one-on-one mapping, so if you've got multiple JavaScript files in your theme or plugin, don't be surprised if you run this command and get multiple JSON files as a result.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=150)** The other thing I want to point out is this purge option.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=154)** This is saying when you run this make-json command and it pulls strings from your POT file that correlate to a JavaScript file, do you want to then remove those strings from the POT file, or leave them be?
>
> **[2:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=167)** If we look at my existing PO file, we can see here is the string from my JavaScript file.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=175)** That purge option would determine whether this bit remains in the PO file or gets removed.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=181)** It's really up to you, but just be aware.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=184)** Okay, so I will head back to my command line and this time the command is, wp i18n-make-json.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=195)** And again I will specify that languages folder. Success.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=201)** So if we go back to our languages folder, there it is.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=205)** There's that JSON file and I'm going to make this a little bigger to see.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=209)** Now, it follows the same naming convention in terms of text domain, language code, country code, but then we get this kind of weird string of letters and numbers.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=219)** What is that about?
>
> **[3:41](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=221)** Well, that's a hash that WordPress uses to map this translation file back to the original JavaScript file.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/generate-mo-and-json-files?u=76281980&t=229)** And with that, we have now got our compiled files ready to go.

> [!info]- Semantic Content
>
> **Env Vars:** json (7), pot (3), php (1), cli (1)
> **CLI Commands:** make (7), php (1)
> **Code Keywords:** let (7), this. (1)
> **Tools:** command line (2), terminal (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Load translations
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=0)** - [Instructor] Now that we have our translation files ready to go, the last piece of the puzzle is to let WordPress know that we want to load those translations.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=9)** There are three functions available for loading translations in PHP, depending on whether you're working with a plugin, theme or child theme respectively.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=18)** And then there's wp_set_script_translations for loading translations in JavaScript.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=24)** Let's start with our PHP.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=27)** So here in the documentation for this load_plugin_textdomain, it takes three parameters.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=33)** The first is our textdomain, the second is deprecated.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=37)** It was a path that's no longer used.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=40)** And the third is the relative path where our .mo files reside in our plugin.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=47)** So heading back to my main plugin file, let's write a wrapper function to hold that load_plugin_textdomain.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=58)** I'll call it ttt_load_php_translations.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=64)** And the first parameter is going to be my text domain, to-the-top.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=70)** For the second, I can just pass false.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=72)** And for this third, this is going to be the relative path to the folder where our .mo file resides.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=86)** Okay, so where should we hook this?
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=90)** Well, the documentation comes in handy and thanks to contributor Fahad for letting us know why we should use the init hook.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=109)** So go back to our add_action, hook to init, and then add our callback function.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=121)** Okay, so at this point, we should be good to go, but how do we know if this is working?
>
> **[2:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=128)** Well, let's go to our site settings under general, and let's change the language of our site to Espanol de Mexico, and we'll save that.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=146)** And now you can actually see the back end of the site is translated into Spanish.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=152)** And if we go to the front end of the site and scroll down, there we see our translation from our script in PHP, and that is fantastic.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=163)** Now it looks like when I did this translation I forgot to include the parenthesis showing that this was from PHP.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=170)** So I'm going to just run back to my profile, put PHP in parentheses there.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=178)** We'll save it.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=180)** And then if I run back to my command line, I'll regenerate that .mo file.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=186)** Perfect.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=187)** Okay, so now if we reload this page, whoop, there we can see our translation is coming from that .mo file.
>
> **[3:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=195)** That is fantastic.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=198)** Next, let's load up the translation for JavaScript.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=202)** This particular function takes three parameters.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=205)** The first is going to be the handle of the script that you want to load.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=209)** The second is the text domain and the third is the full path to the directory with the translation files.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=216)** This is a little bit different from load_plugin_textdomain, which was just looking for a relative path.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=224)** I'm highlighting that specifically because if you get into issues where your translation files aren't loaded, it may well be that you're looking in the wrong path.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=233)** So just a heads-up there to double check which path you're pointing to.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=238)** So back to our main plug-in file.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=242)** Let's create a wrapper function, and we'll call this one ttt_load_js_translation.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=253)** And I'll say wp_set_script_translations.
>
> **[4:20](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=260)** The first is going to be the handle of the script that I enqueued earlier, this to-the-top.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=267)** And since that's the same as my text domain that's actually a little confusing.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=271)** So I'm going to change this script handle.
>
> **[4:34](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=274)** I'm just going to append a -js on the end.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=279)** And that's the first parameter I want to pass to this script_translations function.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=286)** The next is going to be the textdomain, which is to-the-top.
>
> **[4:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=293)** And this is going to be the full path.
>
> **[4:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=296)** So I'll say plugin_dir_path, and then tack on languages at the end.
>
> **[5:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=313)** There we go, and you know, I'm really not setting a good example for you by not adding comments to this.
>
> **[5:18](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=318)** So let me do that quickly.
>
> **[5:24](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=324)** Okay, now, same as the function we just wrote up here, we need a place to hook this function that we just wrote.
>
> **[5:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=331)** So I'm going to refer back to the documentation.
>
> **[5:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=337)** And here we have a contributor letting us know that we want to hook this to the wp_enqueue_scripts hook.
>
> **[5:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=345)** However, we want it to run after we've already loaded scripts.
>
> **[5:49](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=349)** So if we go back and look at our code, we're using this wp_enqueue_scripts hook earlier to enqueue our JavaScript.
>
> **[5:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=358)** But we want to run this at a little bit later point in time, and we can do that through the beauty of priorities.
>
> **[6:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=368)** So we'll say add_action.
>
> **[6:16](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=376)** Our hook is enqueue_scripts, plugin our callback function, and then let's just add a later priority functions run by default at a priority of 10, and I'll just say 100, to make sure any other scripts hanging out there might have already loaded.
>
> **[6:36](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=396)** So we'll save that.
>
> **[6:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=397)** And if we go to look at the front end of our site, and if we refresh, there we have it, we can see our translated script that is coming from JavaScript.
>
> **[6:48](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=408)** And also looks like I forgot to mark this translation as coming from a JavaScript file.
>
> **[6:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=414)** I'm going to head back to my JSON file, this is a little easier to read if we wrap it.
>
> **[7:02](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=422)** And here we go.
>
> **[7:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=424)** And I'll just put JS in parentheses so that it's obvious which of these translations is coming from where.
>
> **[7:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/load-translations?u=76281980&t=433)** So with that, my friends, we have successfully loaded our translations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (8), pass (2), this. (1)
> **Code Identifiers:** load_plugin_textdomain (3), wp_set_script_translations (2), add_action (2), wp_enqueue_scripts (2), ttt_load_php_translations (1)
> **CLI Commands:** php (5), make (1)
> **Env Vars:** php (5), json (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)


### 7. 6. Advanced Concepts

#### Automating text domains
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=0)** - [Narrator] Learned to show you how you can go further with internationalization.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=4)** Let's start with adding text domains in bulk.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=8)** Hopefully you're in the habit of adding a text domain every time you use a translation function, but if you're not, or maybe you inherit a code base without text domains or some other situation where you need to go add them in bulk, there is a way to do it.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=22)** And it only takes a few steps.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=25)** To start, you would download this PHP file and drop it into the root of the theme or plug-in folder with the files that you wanted to add the text domain to.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=35)** From there, you would open up a terminal and move your command line to that theme or plug in directory where that file is.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=44)** And then finally, you would run a command that would automatically either create a new file or replace the existing files with that text domain added.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=54)** So the idea is, if you had a translation function like this, underscore with a translatable text post, no text domain, after running that command, it would write the same function, but it would include the text domain.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=71)** And here you've got multiple examples of how to use this command based on what exactly you're trying to accomplish in terms of whether you want to change a single file, change all files in a directory, override files, or create new files, et cetera.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=87)** So that's it.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/automating-text-domains?u=76281980&t=88)** I'd strongly suggest that you get in the habit of including text domains with every translation function, but should you find yourself in a situation where you need to generate those text domains in bulk, this is a handy script.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), finally, (1), this, (1), override (1)
> **CLI Commands:** php (1), find (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (2)
> **Env Vars:** php (1)
> **Speakers:** - [narrator] (1)

#### Language packs
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=0)** - [Narrator] In WordPress, language packs refer to sets of language files that enable users to translate a site into their preferred language.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=9)** Language packs include translations for all the default WordPress files, including the themes and plugins that come bundled with WordPress.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=17)** You can set the language during the WordPress installation process, or if you've got a WordPress site already installed, you can go to settings, general, and under site language, you can choose your preferred language.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=33)** This will automatically install the WordPress core language pack for you.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=38)** And in addition to the ease of installing the WordPress core language pack from right there, if you have any themes or plugins installed that include a translation for that same locale, it'll go ahead and load those as well.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=51)** Now, a note here, if you are using WordPress multisite.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/language-packs?u=76281980&t=56)** The default language for the entire network is what you set under the network admin settings but you also have the ability to set the language on a per site basis via the settings general panel like the one we just looked at.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Internationalization Security
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=0)** - [Instructor] Anytime you're writing code, security is an important consideration and internationalization is no exception.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=7)** In this lesson, we'll look at some tips.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=10)** For starters, if you're going to bundle locales provided by other translators, you'll want to check those strings for spam or malicious words.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=19)** If you're not familiar with the translation language, you could use Google Translate to convert a translation into your native language so that you can compare the original strings to the translated strings just to make sure there's no spam or anything malicious.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=35)** Next, you want to make sure to escape strings.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=39)** It's one thing to include spammy translations, but it's another to actually add malicious code.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=45)** To keep that from happening, you'll want to treat internationalized strings just like you would any other untrusted input.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=52)** Say, like what a user might enter into a form.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=56)** As another best practice, you'll want to avoid URLs in internationalized strings.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=61)** That's because a malicious translator could change the URL to point to somewhere you didn't intend.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=68)** To get around this, use the printf, or sprintf functions we've already looked at to use placeholders for URLs.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=75)** As an additional bonus, This could help prevent any copy-pasting errors that might come if a translator were trying to copy your URL as part of a translation string and paste it back in.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=89)** Use placeholders and help everybody out.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=92)** Finally, you'll want to compile your own .MO files.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=95)** Even if a translator sends a compiled .MO file along with their plain text .PO file, go ahead, throw it away, and compile your own.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=105)** Consider this a best practice because you have no idea whether the .MO file was actually compiled against the .PO file that was sent.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=113)** It could have instead been compiled against a .PO that had malicious strings.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-internationalization-22343157/internationalization-security?u=76281980&t=118)** While you want to hope that anyone submitting a translation file for your code would do so with good intentions, you still want to do your due diligence and take precautions by following these security measures.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), finally, (1), throw (1)
> **Best Practices:** best practice (2), make sure to (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (2)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Contributing to Open Source

#### Translating for WordPress with GlotPress
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=0)** - [Instructor] I couldn't teach you about WordPress and internationalization and not mention the opportunities available to help translate.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=8)** WordPress is in the process of being translated into over 150 locales.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=13)** And when I say in the process of, that means that some may be at 100% translation, and others might not yet have a single string translated.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=23)** If you speak languages other than English and are looking for a way to contribute to the WordPress project, this is a perfect opportunity.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=31)** You can join thousands of other polyglots to help make WordPress more accessible and, therefore, democratize publishing around the world.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=40)** To get started, you'll need an account at [wordpress.org](https://wordpress.org).
>
> **[0:44](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=44)** It's free to create if you don't already have one.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=50)** Then from translate.[wordpress.org](https://wordpress.org), you'd want to find the right locale that you want to contribute to and then click the Contribute Translation button.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=61)** For each locale, you can contribute to certain versions of WordPress, core themes, plugins, patterns, etcetera.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=69)** Whichever project you wanted to translate to, you would find it and just click on the Translate Project button.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=77)** WordPress uses something called GlotPress, which is a collaboration tool for translators.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=83)** GlotPress takes a POT file and then sets up individual profiles for each desired translation.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=90)** If you're interested in translating WordPress or getting involved with the polyglots team, be sure to check out the Translator Handbook.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-internationalization-22343157/translating-for-wordpress-with-glotpress?u=76281980&t=97)** On a related note, if you're interested in using GlotPress to create translations for one of your themes or plugins, you can do that with a GlotPress plugin available on [wordpress.org](https://wordpress.org).

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **URLs:** [wordpress.org](https://wordpress.org) (3)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** pot (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Contributing to GlotPress
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980&t=0)** - [Narrator] Community contributions are at the heart of open source software projects like WordPress.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980&t=6)** As I mentioned in the previous lesson, GlotPress is an open source tool that makes it easy for translators to collaborate on a code base.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980&t=14)** If you're not multilingual, or don't feel compelled to contribute to WordPress translations, you could always contribute your development skills directly to the GlotPress project, helping enable others to translate software.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-internationalization-22343157/contributing-to-glotpress?u=76281980&t=27)** If you're interested, you can find contribution guidelines here in the GlotPress GitHub repo.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)


### 9. Conclusion

#### What next?
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=0)** - Well, what do you think?
>
> **[0:03](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=3)** Are you ready to start writing code that others can translate or maybe even translate for the WordPress project?
>
> **[0:09](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=9)** In this course, we've covered what you need to know to get started with internationalization.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=15)** You know the variety of translation functions available to you.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=19)** You know how to make your theme or plugin translatable, and you know how to use the documentation at [wordpress.org](https://wordpress.org) to help you as you go.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-internationalization-22343157/what-next?u=76281980&t=28)** This brings us to the end of our time together for now, but I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Documentation:** the documentation (1)
> **Speakers:** - well (1)


## Instructor

- [[Carrie Dils]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/wordpress-internationalization-3266041)

## Skills Covered

- WordPress
- Internationalization

## Path Context

### In [[Advance Your Skills in WordPress]]
← [[Wordpress Building A Secure Site]] | **2 of 8** | [[WordPress- Custom Post Types and Taxonomies]] →

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