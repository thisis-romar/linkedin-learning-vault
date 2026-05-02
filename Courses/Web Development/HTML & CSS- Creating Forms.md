---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: html-css-creating-forms
url: "https://www.linkedin.com/learning/html-css-creating-forms"
duration_minutes: 150
duration: 2h 30m
level: Beginner
updated: 8/17/2017
learners: 18876
skills:
  - HTML
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG3EL40Sa-iTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669394263?e=2147483647&amp;v=beta&amp;t=-ZhOGxWDv39P0oJ36W4pw76Hq3Z7IxNaeBJEm0g0Yr0"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[HTML- Metadata in the Head]]'
next_courses:
  - '[[Building Great Forms with HTML and CSS]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":7,"total":11,"prev":"HTML- Metadata in the Head","next":"Building Great Forms with HTML and CSS"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML%20%26%20CSS-%20Creating%20Forms.md)

![HTML & CSS: Creating Forms](https://media.licdn.com/dms/image/v2/C4E0DAQG3EL40Sa-iTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669394263?e=2147483647&amp;v=beta&amp;t=-ZhOGxWDv39P0oJ36W4pw76Hq3Z7IxNaeBJEm0g0Yr0)

# HTML & CSS: Creating Forms

> Forms are a major component of modern websites, used to collect user data, conduct polls, and more. While you can use a form builder, they're relatively simple to build from scratch with basic web technologies: HTML and CSS. In this course, Clarissa Peterson demonstrates best practices for creating and styling web forms that are easy to complete and accessible to all users and devices. Learn prope

> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms) | 2h 30m | Beginner | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Designing a Form Experience**](#1-designing-a-form-experience) (4 videos)
  - [Ask the right questions](#ask-the-right-questions)
  - [Explain what you want](#explain-what-you-want)
  - [Create a good flow](#create-a-good-flow)
  - [Data privacy](#data-privacy)
- [**2. Creating Forms with HTML**](#2-creating-forms-with-html) (9 videos)
  - [Basic form structure](#basic-form-structure)
  - [Text, email, and URL input types](#text-email-and-url-input-types)
  - [Number input type](#number-input-type)
  - [Date and time input types](#date-and-time-input-types)
  - [Radio buttons](#radio-buttons)
  - [Select](#select)
  - [Textarea and additional input types](#textarea-and-additional-input-types)
  - [Submit and other types of buttons](#submit-and-other-types-of-buttons)
  - [Attributes used in forms](#attributes-used-in-forms)
- [**3. Making Forms Interactive**](#3-making-forms-interactive) (2 videos)
  - [Form submission and security](#form-submission-and-security)
  - [Form validation](#form-validation)
- [**4. Styling Form Fields with CSS**](#4-styling-form-fields-with-css) (8 videos)
  - [Basic form styles: Text color and size](#basic-form-styles-text-color-and-size)
  - [Box sizing for forms](#box-sizing-for-forms)
  - [Styling text inputs](#styling-text-inputs)
  - [Styling radio buttons and check boxes with images](#styling-radio-buttons-and-check-boxes-with-images)
  - [Styling radio buttons and check boxes as buttons](#styling-radio-buttons-and-check-boxes-as-buttons)
  - [Styling select](#styling-select)
  - [Styling buttons](#styling-buttons)
  - [Styling pseudo-classes](#styling-pseudo-classes)
- [**5. Form Layout with CSS**](#5-form-layout-with-css) (4 videos)
  - [Small-screen layout for forms](#small-screen-layout-for-forms)
  - [Wide-screen layout for forms](#wide-screen-layout-for-forms)
  - [Form labels](#form-labels)
  - [Placeholder attribute](#placeholder-attribute)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=0)** - [Instructor] Hiya, I'm Clarissa Peterson and welcome to HTML and CSS Creating Forms.
>
> **[0:05](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=5)** In this course we'll learn how to build and style basic forms.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=8)** We'll also be talking about how to give your forms better usability and accessibility.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=13)** We'll start out learning how to design a form experience that users won't hate, then we'll go into the HTML that is used to create forms, including various types of inputs, as well as attributes commonly used on forms.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=24)** Then we'll look at how to make forms interactive, starting with form submission, as well as how to validate forms to make sure you're collecting the right data.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=32)** After that, we'll go into using CSS to add styles and layout to forms.
>
> **[0:37](https://www.linkedin.com/learning/html-css-creating-forms/welcome?u=76281980&t=37)** Now let's get started with HTML and CSS Creating Forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (9), [[HTML]] (3), css (3), data (1)
> **Env Vars:** html (3), css (3)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, you should have a working knowledge of HTML and CSS, although you don't need to be an expert in either.
>
> **[0:07](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=7)** If you don't already have a basic understanding of HTML and CSS, we suggest you check out [[HTML Essential Training]] and CSS Essential Training.
>
> **[0:19](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=19)** You'll also need to have a coded editor or a text editor, you can just use the one that came with your computer.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=25)** It's important that you understand that HTML and CSS are constantly changing as new elements and properties are being added and refined.
>
> **[0:33](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=33)** This course covers some parts of HTML and CSS that don't work in all browsers, either because they're still being finalized or because some older browsers don't support those features.
>
> **[0:43](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=43)** Generally I will mention when something isn't supported in all browsers, but that may have changed by the time you are viewing this course.
>
> **[0:49](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=49)** A great way to find out which browsers support a particular feature is to visit [caniuse.com](https://caniuse.com).
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=56)** Simply enter the element, property, or feature you wish to check, and it will show you very specifically which browsers and which versions of those browsers support that feature.
>
> **[1:08](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=68)** Additionally, some new properties in CSS that aren't fully implemented require vendor prefixes.
>
> **[1:15](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=75)** When a CSS property is still in experimental stage or is otherwise not standard, the browser vendors may add a prefix to their version of the property to allow them to experiment.
>
> **[1:25](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=85)** Generally the property will start with a dash and the name of the browser engine, like -webkit or -ms.
>
> **[1:31](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=91)** I will tell you if a particular property requires prefixes, but that may change.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=96)** Rather than trying to keep track of which properties need prefixes, just use a tool like Autoprefixer.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/what-you-should-know?u=76281980&t=102)** Paste your CSS on the left hand side, and this tool will automatically add the appropriate prefixes on the righthand side for any properties that need them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (8), [[HTML]] (5), feature (3)
> **Env Vars:** css (8), html (5)
> **CLI Commands:** find (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/using-the-exercise-files?u=76281980&t=0)** - [Instructor] You can download a copy of the exercise files for this course.
>
> **[0:03](https://www.linkedin.com/learning/html-css-creating-forms/using-the-exercise-files?u=76281980&t=3)** For the videos that have a corresponding exercise file, just open up the file or files and you can follow along.
>
> **[0:10](https://www.linkedin.com/learning/html-css-creating-forms/using-the-exercise-files?u=76281980&t=10)** The files are organized by chapter and for each chapter there are separate folders for the code as it is before starting the exercise and for another folder for the finished code at the end.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1), exercise file (1)
> **Speakers:** - [instructor] (1)


### 1. Designing a Form Experience

[↑ Back to Table of Contents](#table-of-contents)

#### Ask the right questions
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=0)** - [Narrator] Nearly every website has a form and they are used in many different ways.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=4)** To sign up for something, to make a purchase, to apply for a job, to login to a website, to post on social media, and the list goes on.
>
> **[0:12](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=12)** And there are so many bad forms out there that users are very weary of them.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=16)** They are expecting that your form will be difficult to understand.
>
> **[0:19](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=19)** That they will get confusing errors when they submit it.
>
> **[0:22](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=22)** And that they may not be able to submit it at all.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=25)** Because forms are such an important piece of functionality on websites, whether or not your site has good forms can make the difference between whether your website, or even your business, is successful or not.
>
> **[0:35](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=35)** Could Amazon have turned into such a powerhouse if their checkout form was difficult to use?
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=40)** Almost certainly not.
>
> **[0:42](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=42)** The first thing you need to do on a form is ask the right questions.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=46)** When you start thinking about what will go in your form your top goal should be asking the least number of questions as you can.
>
> **[0:53](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=53)** The longer the form, the less likely people are to fill it out.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=56)** Even removing one of two questions can make a difference in your conversion rate.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=62)** The example here is a great form because it only asks what is absolutely needed to sign up for an email list: your email address.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=69)** I've seen plenty of email list sign ups where they need your full name, address, phone, date of birth, etcetera.
>
> **[1:15](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=75)** And all the fields are required.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=77)** Why do they need that information?
>
> **[1:19](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=79)** Who knows.
>
> **[1:20](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=80)** But if people don't want to fill out those fields they'll either skip signing up or they'll fill in fake information.
>
> **[1:25](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=85)** The more questions on your form, the more errors and fake data that will be cluttering up your database.
>
> **[1:32](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=92)** There are many places where you can cut out unnecessary questions.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=96)** For example, when you're buying something it often asks what kind of credit card you'll be using.
>
> **[1:40](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=100)** Mastercard, Visa, or American Express.
>
> **[1:44](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=104)** You may not realize this but you can tell what kind of credit card it is from the first two digits.
>
> **[1:49](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=109)** So on this form, the user starts typing and it picks the correct card.
>
> **[1:55](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=115)** You so you can see now that it's changed to recognize that I typed in the first numbers for a Mastercard.
>
> **[2:00](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=120)** If I type in 37 instead, that's the starting numbers for American Express.
>
> **[2:06](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=126)** An added bonus here, if you look below that at the CVV code, it changes because the CVV code is different for American Express and Mastercard.
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=135)** Here it says the CVV is on the front and it's 4 digits, so it puts 4 dashes in the box.
>
> **[2:22](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=142)** For Mastercard, you can see on CVV it tells you instead it's on the back and there's only 3 dashes.
>
> **[2:31](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=151)** Another thing you can do in forms is make assumptions.
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=154)** For example here, this is a library website.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=157)** If I go to search, they have more than one type of search.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=161)** Catalog, Website, or FAQs.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=164)** The default search is the catalog, because they know most people that are searching here are going to search the catalog.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=170)** Even though this is the website, they know that if a search leads to a search of the website, people are going to be confused by that because they expect the library site to give them results of what books they can find.
>
> **[3:02](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=182)** Here's another site that makes assumptions.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=184)** When you go here it recognizes the location that you're at and will automatically fill that in.
>
> **[3:11](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=191)** Of course, if the user wants to find something different, they are welcomed to change the search term.
>
> **[3:18](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=198)** Try to remember the user's data and preferences where possible so you can save them time in filling things out later.
>
> **[3:25](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=205)** For example, many signup forms say keep me signed in and have a check box you can select that option.
>
> **[3:31](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=211)** And that way you don't have to sign in again when you come back to the site later.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=215)** Here's an example of a form that might cause some problems for users.
>
> **[3:39](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=219)** You don't want to ask them questions that they can't answer.
>
> **[3:42](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=222)** Here is a sign up form for buying a digital subscription to newspaper.
>
> **[3:46](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=226)** You can only an address that's in the United States.
>
> **[3:50](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=230)** Now, one looks at this and wonders is there a reason for that?
>
> **[3:54](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=234)** Is there some reason why their content can't be distributed outside of the United States for copyright reasons?
>
> **[3:59](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=239)** Or did they just not think of the fact that somebody in another country might want to subscribe to a digital product that they'd get online anyways?
>
> **[4:09](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=249)** Here's another example of a question that a user might not be able to answer.
>
> **[4:13](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=253)** This was for buying travel insurance.
>
> **[4:15](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=255)** It asks the purpose of your travel: vacation or business.
>
> **[4:18](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=258)** And I went to buy this recently and was wondering well what if I need to do both?
>
> **[4:22](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=262)** Which one am I supposed to pick if I'm doing both of those things on the same trip?
>
> **[4:26](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=266)** There is no option here that explains it at all so you either have to guess or try calling them and waiting on hold for hours to find and answer to a simple question.
>
> **[4:36](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=276)** If there's some information on a form that the user may not have the answer to it's good to give them options of different types of information they can fill in instead.
>
> **[4:44](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=284)** For example here, you can either enter a zip code or a city and state to find a location.
>
> **[4:49](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=289)** I travel a lot and I find often I go to look for a location of a store or a restaurant and they tell me I must enter a zip code.
>
> **[4:57](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=297)** But who know the zip code of the location they're traveling too?
>
> **[5:00](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=300)** You have to look it up.
>
> **[5:01](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=301)** Being able to enter city and state is certainly a lot easier for someone who doesn't live in that location.
>
> **[5:07](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=307)** Another thing to think about in your questions is the tone, how you're asking the questions.
>
> **[5:12](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=312)** This is from a form on a bank's website to sign up for a new account.
>
> **[5:16](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=316)** They have a long list of questions and each one of them kind of has a breezy, funny question like this one.
>
> **[5:22](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=322)** Instead of just asking for your phone number, it says "Where can we reach you? I know we just met, but we need your phone number."
>
> **[5:29](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=329)** And there are some websites where language like that would totally fit in and be not inappropriate.
>
> **[5:34](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=334)** But on a bank website it just seems very strange, especially since the rest of the website doesn't have this tone, it's more formal.
>
> **[5:42](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=342)** So it makes you wonder, can I trust this bank when they're talking to me in such an informal tone?
>
> **[5:47](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=347)** Are they really going to keep my money safe?
>
> **[5:49](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=349)** Additionally, adding extra text like this makes it longer for the user to fill out the form.
>
> **[5:54](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=354)** There's a lot more for them to read if you're adding extra text that really has no bearing on what they need to enter into that form on the field.
>
> **[6:01](https://www.linkedin.com/learning/html-css-creating-forms/ask-the-right-questions?u=76281980&t=361)** Now that you've learned to ask better and fewer questions in a form, we'll move on to learning how to make sure that users understand what you want them to enter in the form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (7), [[Forms]] (5), express (3), business (2), data (2)
> **CLI Commands:** make (5), find (5)
> **Env Vars:** cvv (4)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Speakers:** - [narrator] (1)

#### Explain what you want
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=0)** - [Narrator] When creating a form, it's important to give your users clear instructions.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=4)** If they don't understand what you're expecting, they might enter the wrong information or they might give up and skip the form entirely.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=11)** If a form is complicated, tell them ahead of time.
>
> **[0:14](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=14)** Don't let them get to the middle of the form and realize they need to go find documents they need and end up with the form timing out.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=21)** For example on this page, they have an online form to apply for disability benefits.
>
> **[0:26](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=26)** It's a very complicated form so they specifically tell you to gather the information you need to complete the application process and there's a link to get a list of all the documents that you do need so you can have them and you're ready to go.
>
> **[0:39](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=39)** Another thing you want to do is not put a lot of instructions at the top of the form as users are likely to just skip them.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=46)** One area where sites don't always do a good job of explaining what they need is password requirements when creating a new password.
>
> **[0:52](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=52)** Many sites don't give instructions and only after you create a password and submit that they let you know that there were rules that you didn't follow.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=59)** This site does a really good job.
>
> **[1:01](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=61)** They have a list on the right of the different things that must be included in a password.
>
> **[1:06](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=66)** And as you type in your potential password, it checks them off and lets you know which ones you have met.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=73)** Another interesting thing they do here is there's an option to show your password.
>
> **[1:18](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=78)** And that's handy because sometimes you'll be typing and not be sure if you hit the wrong key or not.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=84)** Some people just get frustrated if they can't see the word as they're typing.
>
> **[1:28](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=88)** Giving users this option gives them a lot more confidence that they're entering the password that they want to enter.
>
> **[1:34](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=94)** Some websites do this instead.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=96)** Instead of telling you specific requirements, they just say if your password is weak or strong.
>
> **[1:41](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=101)** That seems good in theory, but unfortunately not all users understand what that means.
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=106)** Someone might think a weak password means it isn't long enough and they keep typing, but if they're only typing letters, they may never meet that requirement which you never even told them what the requirement was.
>
> **[1:57](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=117)** Another problem is if a user makes a mistake filling out a form, you need to be really specific about what's wrong.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=123)** Here I tried to sign in, but it won't tell me what's wrong.
>
> **[2:06](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=126)** It just said that didn't work.
>
> **[2:09](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=129)** Is my username wrong?
>
> **[2:10](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=130)** Is my password wrong?
>
> **[2:11](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=131)** Or is the site just broken?
>
> **[2:13](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=133)** I don't know.
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=135)** Here's another form I tried to fill out to register for an online service.
>
> **[2:19](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=139)** It was kind of a lengthy form.
>
> **[2:21](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=141)** I entered a lot of information.
>
> **[2:22](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=142)** It took me a couple of minutes.
>
> **[2:24](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=144)** And then I got this message that I'm not eligible to log in or sign up at this time, but they don't tell me why, what makes me not eligible.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=152)** I think it might have been because of the country I live in, but I'm still not sure and I was frustrated I filled out that whole form and wasted my time because it wouldn't let me sign up.
>
> **[2:42](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=162)** They could have told me of their requirements before I even started filling out the form and then I wouldn't have had to waste my time.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/explain-what-you-want?u=76281980&t=168)** Now that you've learned to be specific in telling users what they need to enter in a form, we'll move on to how to create a better overall user experience for forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), hit (1), [[Microsoft Word|Word]] (1), [[User Experience (UX)|User experience]] (1), [[Forms]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Create a good flow
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=0)** - [Instructor] When a user looks at a form on a website, they aren't thinking of it as a collection of HTML and CSS, like you are.
>
> **[0:06](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=6)** They couldn't care less what kind of code is behind it.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=9)** All that they are concerned with is the experience of filling out the form.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=13)** You can't just think of a form as one page on a website, you have to consider it as a part of a process of whatever action the user is trying to take.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=21)** Users don't like to give you their information, so one of the first things that will happen as they're filling out the form is they're going to decide whether they feel comfortable giving you their information.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=31)** If you're asking them to sign up for a paid service, many users will be worried that they'll be charged for something they didn't actually want or get stuck with ongoing billing that's hard to get out of.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=40)** This site, they have a button Get Started for Free, so you know you don't have to pay right away.
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=45)** Below that, they're very specific.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=47)** No credit card required, and you can cancel anytime.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=50)** So a person is going to feel a lot better about signing up for this rather than something that says, well, you have a free trial and you have to give us your credit card number, and who knows if you'll be able to cancel?
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=62)** You need to make sure that your form, whether it be on one page or multiple pages, is in a logical order.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=69)** And that includes even fields that are next to each other.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=72)** If you look at this example, both of these are real forms that ask for a name, but put it in the wrong order.
>
> **[1:19](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=79)** Who's going to fill out their name and then realize that they're typing last name, and then first name, and then their middle name?
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=84)** People will just see name and then automatically type first, middle, and last because that's what they're used to.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=90)** The one on the bottom, you type your first name, and then your email address, and then your last name.
>
> **[1:35](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=95)** I can guarantee you a lot of people are filling out these forms and putting their information in the wrong blanks.
>
> **[1:41](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=101)** We already talked about making forms short.
>
> **[1:44](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=104)** If there is a lot of optional information that you'd like to get from the user or that will help them with their experience, consider putting it on a separate page.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=111)** For example, on this site, let's say I enter my email address to sign up.
>
> **[2:04](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=124)** So after I've submitted this form, I'm done.
>
> **[2:06](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=126)** I've signed up for the email list, but there's more information that I could fill out if I wanted to, but I don't have to.
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=135)** When you search for a place to stay on Airbnb, on the first screen you just fill in your city and the date you want to travel.
>
> **[2:22](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=142)** You can even do it without the date.
>
> **[2:24](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=144)** And then only when you get the results can you go in and filter them more.
>
> **[2:28](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=148)** For example, choosing a room type, a price range, and more filters like the options you want in the place you stay.
>
> **[2:36](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=156)** If a user had to fill out all of that information right away, it would be very overwhelming to try to go through that whole form and figure out what they need.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=164)** But by just whittling it down to the most basic information, and then putting the other questions later, it makes the form a better experience.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=172)** There's a concept called gradual engagement, that basically means you start off slow, so as to not scare the user off.
>
> **[2:59](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=179)** After they've filled out the first part of the form, they're feeling more committed, so they're more likely to keep going with questions on separate pages.
>
> **[3:05](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=185)** Twitter is a good example of this.
>
> **[3:08](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=188)** They don't even ask for your username on the first page, just your name, phone number or email, and your password.
>
> **[3:14](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=194)** Only after you've clicked the sign up button and you're actually signed up, then it gives you an opportunity to choose your username.
>
> **[3:22](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=202)** They do that because choosing a username is pretty much one of the most stressful parts of signing up for an account like this.
>
> **[3:29](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=209)** Not a lot of things are still available, so you're going to be trying different things to figure out what you want to choose that actually sounds good.
>
> **[3:37](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=217)** When Twitter redesigned their site a few years ago to use gradual engagement, they actually increased their signups by 29%.
>
> **[3:45](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=225)** With e-commerce, there's often a lot of information that needs to be filled out.
>
> **[3:49](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=229)** It's often best to split it into separate steps, but it's important to let the user know where they are in the process, so it doesn't seem never-ending.
>
> **[3:56](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=236)** For example, here, if I add an item to my cart, and then I go to checkout, you can see that there's actually steps one through six of all the different things I need to do before I'm done checking out.
>
> **[4:10](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=250)** They're not putting all of this on one page, which would be overwhelming, but they're also letting me know what's going to happen on the future pages.
>
> **[4:17](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=257)** So I'm not just wondering if I'm going to keep entering information forever.
>
> **[4:21](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=261)** I can see where the ending point is and where I am in the process.
>
> **[4:26](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=266)** Once a user has submitted the form, you're not done yet.
>
> **[4:29](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=269)** You need to let the user know that you got their information.
>
> **[4:32](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=272)** You need to have a good confirmation page.
>
> **[4:34](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=274)** I've seen sites just refresh the page or go back to the home page of the site, and that just leaves users wondering if their information really went through.
>
> **[4:42](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=282)** Here, if I sign up for this email list,
>
> **[4:54](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=294)** it gives me a very clear thank-you page, letting me know that I did sign up.
>
> **[4:58](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=298)** So this site does a good job of letting users know that their information went through.
>
> **[5:03](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=303)** If something in particular is supposed to happen after the form is submitted, you can also let them know what to expect.
>
> **[5:09](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=309)** For example, on an e-commerce site, the confirmation page might tell the user that they'll get an email with their order details and another email when the order has shipped.
>
> **[5:17](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=317)** Now that you know the importance of creating a good flow through a form experience for users, you're ready to move on to actually creating forms.
>
> **[5:25](https://www.linkedin.com/learning/html-css-creating-forms/create-a-good-flow?u=76281980&t=325)** But first, a quick detour to talk about data privacy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (4), [[E-Commerce]] (2), [[HTML]] (1), css (1), next (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (2), basically means (1)
> **Env Vars:** html (1), css (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you need to have (1)

#### Data privacy
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=0)** - [Instructor] Once you've started collecting information from your users, you need to know that you can't just do whatever you want with this information.
>
> **[0:07](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=7)** Many countries have laws about when and how you can collect personal information, how to securely store that data, and what you can do with the personal information.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=15)** Please note that this video is not legal advice, just a broad overview of some of the laws you should be aware of.
>
> **[0:20](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=20)** It's up to you to make sure you are following any appropriate laws and regulations.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=25)** In the United States, data privacy is not highly regulated.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=28)** However, there are a few things to be aware of.
>
> **[0:30](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=30)** One that affects many websites is the Children's Online Privacy Protection Act.
>
> **[0:34](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=34)** It gives very strict standards on the collection of personal information from children under 13, including that you have to get permission from the child's parents before collecting any information.
>
> **[0:44](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=44)** Most websites do not want to deal with the complicated rules, so they simply avoid the issue by not letting children sign up on their site.
>
> **[0:51](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=51)** That's why many social networking sites say you have to be at least 13 to join.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=56)** Particular industries, such as healthcare or the financial industry, have strict rules regarding how data is collected and handled.
>
> **[1:03](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=63)** So if you work in one of these industries, make sure you are aware of the current regulations.
>
> **[1:08](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=68)** There are also laws, mostly on the state level, that deal with what you need to do in the event of a security breach.
>
> **[1:14](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=74)** You are likely required to notify your users if there has been a security breach affecting their personal information.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=81)** In the European Union, there are much stricter laws regarding data collection.
>
> **[1:25](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=85)** The Data Protection Directive specifies what data you are allowed to collect.
>
> **[1:29](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=89)** You can only collect personal information in very specific circumstances and only the information that is actually necessary.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=97)** For example, if a user wants to sign up for your email list, you can ask for their email address, but you may not be even allowed to ask for their birthday since it isn't necessary for sending emails.
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=106)** Once you've collected information from a user, there are laws that tell you what you can do with it.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=111)** An important example is sending emails.
>
> **[1:53](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=113)** In the United States, you cannot send commercial emails without the consent of the recipient, unless you have a business relationship with them, like they purchase something from you.
>
> **[2:02](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=122)** You must give users the option to opt out of future emails.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=125)** And if someone wants to opt out of emails, you are legally required to stop sending them email.
>
> **[2:10](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=130)** Failure to comply could result in large fines.
>
> **[2:13](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=133)** Europe and Canada have similar regulations.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=136)** One thing you should note is that email laws are usually based in the country where the email is received, so you may be responsible for following laws from countries other than your own.
>
> **[2:25](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=145)** That's just an overview of some of the major laws and regulations that may be relevant when you are including forms on a website.
>
> **[2:31](https://www.linkedin.com/learning/html-css-creating-forms/data-privacy?u=76281980&t=151)** Here are links to some sites where you can find more information about data privacy laws in various countries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Privacy]] (2), [[Security]] (2), [[Privacy Protection]] (1), business (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** be aware (2), note that (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** required to (2)
> **Speakers:** - [instructor] (1)


### 2. Creating Forms with HTML

[↑ Back to Table of Contents](#table-of-contents)

#### Basic form structure
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=0)** - [Woman] Every HTML form is different, but there are several things that most forms have in common.
>
> **[0:06](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=6)** In this video, we'll be creating a short form which only has a few elements in it.
>
> **[0:10](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=10)** A heading, a question, a place for a person to record their response, and a submit button.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=18)** When we start to put the form together, we're going to start out with all the elements that you'd have on a basic HTML page.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=25)** Make sure that you include the meta viewport element as it's shown here.
>
> **[0:29](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=29)** Without this, your web page will not be responsive.
>
> **[0:33](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=33)** The next thing you'll need is a heading to describe the purpose or the contents of the form.
>
> **[0:37](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=37)** It's not required to have a heading for your form, but it's good usability, as users will get a quick overview of what the form is about without having to read through all the questions.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=46)** The heading level you use depends on the page structure.
>
> **[0:49](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=49)** So inside the body element, I'm going to add a heading.
>
> **[0:54](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=54)** And I'm going to call this About You.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=56)** That's going to be the heading for our form.
>
> **[0:58](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=58)** After making changes to the file, you're going to save it by doing command + S in Mac or control + S in Windows.
>
> **[1:05](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=65)** And then we can go to the browser and see our changes by doing refresh, which is command + R in Mac or control + R in Windows.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=73)** So, so far all we have on the page is this heading.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=77)** Each form will have an opening and a closing form tag.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=81)** You can have more than one form on a page, but the form elements cannot be nested within each other.
>
> **[1:26](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=86)** The form element is the only element that every form is required to have.
>
> **[1:32](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=92)** So after the heading on line 12, I'm going to add the opening form tag and then go down a few lines and add the closing form tag.
>
> **[1:41](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=101)** The next thing we're going to add is an id.
>
> **[1:44](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=104)** You probably want to have a unique id for each form because it'll help you with targeting CSS to that particular form if you have more than one form on a page.
>
> **[1:54](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=114)** So I'm going to the form element on line 12, and inside the element add an id attribute with a value of questions.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=125)** Also on the form element, we need to tell the browser what to do when the user submits the form.
>
> **[2:10](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=130)** The common way to do this is to include the method and action attributes on the form tag.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=136)** The method is the form submission method, which is either get or post, and the action is what URI the data is being sent to.
>
> **[2:24](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=144)** We'll go into more detail on submitting forms in a separate video.
>
> **[2:29](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=149)** So on line 12 here, still inside the form tag, I'm going to add method="post" and action= and leave that empty.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=161)** And that's empty because in this sample form I don't actually want to send data anywhere when I hit submit.
>
> **[2:47](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=167)** So next inside the form you need one or more fields to collect information.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=172)** And you can do this using the input, select, or textarea elements.
>
> **[2:57](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=177)** So on the form I'm going to go down to line 13 and add a input element and give it a type of text.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=187)** So this will just be a plain text input that the user can type in.
>
> **[3:12](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=192)** Generally all of your input elements are going to go between the open and closing form tags.
>
> **[3:17](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=197)** In HTML5 you can link to input elements elsewhere on the page, but that is not currently supported in all browsers.
>
> **[3:24](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=204)** The input element is what's called an empty element in HTML.
>
> **[3:28](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=208)** You don't need a closing tag, it's just a single tag by itself.
>
> **[3:32](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=212)** Next is the name attribute.
>
> **[3:34](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=214)** The name labels the data when it is sent to the server, or however data is processed.
>
> **[3:39](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=219)** So essentially you can think of it like the name of a column in a spreadsheet or a database, and this isn't shown to the user.
>
> **[3:47](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=227)** So on line 13 inside of the input element, I'm going to add name=, then I'm going to be asking the user their favorite color, so I'm going to call this favcolor.
>
> **[4:00](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=240)** The name attribute is not something that'll be shown to the user.
>
> **[4:03](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=243)** We'll separately add the text of the question that they're going to see on the screen.
>
> **[4:08](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=248)** Next is the id.
>
> **[4:10](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=250)** The id attribute is going to be used to associate each input field with a label, which is what we'll do next.
>
> **[4:16](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=256)** As with any id, it should be unique on the page and descriptive.
>
> **[4:22](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=262)** So inside of line 13, inside the input element, I'm going to add id="favcolor".
>
> **[4:29](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=269)** And this is often the same as the name.
>
> **[4:31](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=271)** They can be the same value.
>
> **[4:35](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=275)** So if I save and go back to the browser and refresh, now I can see that input field on the page.
>
> **[4:41](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=281)** So there's a place for the user to enter their answer, but they don't see a question yet.
>
> **[4:46](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=286)** So now we're going to add the label element.
>
> **[4:49](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=289)** The label element tells the user what we want them to fill in.
>
> **[4:53](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=293)** So I'm going to add a label element on line 13 before the input.
>
> **[4:59](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=299)** So a label opening tag, then I'm going to ask What is your favorite color?.
>
> **[5:06](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=306)** Then the closing label tag.
>
> **[5:09](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=309)** Then I'm going to save, and go to the browser and refresh.
>
> **[5:12](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=312)** And now I see the question that we're asking the user.
>
> **[5:15](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=315)** Now just having text on the page before or after the input box might be sufficient for sighted users, but we need to do a little extra to accommodate visually impaired users using screen readers or users using other assistive technology.
>
> **[5:30](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=330)** So next we're going to add the for attribute.
>
> **[5:32](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=332)** The for attribute is added to the label to match the id of the input element.
>
> **[5:37](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=337)** This will tell the browser or screen reader which label goes with which input.
>
> **[5:41](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=341)** This is the most basic part of accessibility for forms, so make sure you do this for every input and label.
>
> **[5:48](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=348)** It's important to remember that not all users access the web in the same way, so we need to do everything we can to make sure we accommodate users who are using screen readers or other assistive technology.
>
> **[6:00](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=360)** Otherwise, you're going to miss out on potential customers for your business, or people using your website, and it's just the right thing to do to make sure that we include everybody.
>
> **[6:11](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=371)** So inside the label element on line 13, I'm going to add for="favcolor", and that for needs to match the id from the input element.
>
> **[6:26](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=386)** Now, I put the label before the input, but we can also take this label and put it after the input element so in the browser it'll look like that.
>
> **[6:37](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=397)** You can also take the input element and put it inside the label, either before or after the label.
>
> **[6:47](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=407)** And these all are going to work the same, so the only difference in which one of these you pick is how it might affect the way you use CSS to style these elements.
>
> **[6:57](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=417)** Finally, we have the submit button, and it's coded as an input element with the type of submit.
>
> **[7:03](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=423)** There's actually different ways to code a submit button.
>
> **[7:06](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=426)** This is the most basic, and we'll get to the different ways in a later video.
>
> **[7:11](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=431)** So I'm going to go down to line 14 and add input type="submit".
>
> **[7:20](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=440)** And save and go back to the page and refresh.
>
> **[7:25](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=445)** So now we can see we have a short but complete form.
>
> **[7:29](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=449)** We're asking a question, the user is able to respond, and then they can submit their data.
>
> **[7:34](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=454)** So those are elements that typically make up HTML forms.
>
> **[7:38](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-structure?u=76281980&t=458)** Now that you have the basic structure, you're ready to add input and other elements that will be used to collect data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), data (6), [[HTML]] (4), [[Forms]] (4), web (2)
> **Env Vars:** html (4), css (2), uri (1), html5 (1)
> **CLI Commands:** make (5)
> **Prerequisites:** required to (2), you'll need (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** think of it like (1)

#### Text, email, and URL input types
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=0)** - [Instructor] The most basic type of input field is text.
>
> **[0:03](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=3)** Several other input types are similar, but have special features for entering certain types of information.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=9)** In this video we'll look at the text, email, and URL input types.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=16)** First, the text input type.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=18)** This is the most basic and is supported in all browsers, even very old ones.
>
> **[0:23](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=23)** You can use this for pretty much any type of data that can be typed in, such as letters, numbers, and symbols.
>
> **[0:29](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=29)** It only accepts single line entry and the browser will strip out any line breaks.
>
> **[0:34](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=34)** To accept data with line breaks you'll need to use a text area element, which we'll look at in another video.
>
> **[0:41](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=41)** So to start out I already have my form tags in place and a submit button, so I'm just going to be adding an input field now.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=47)** I'm going to go directly in the line after the opening form tag and do input type = text.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=62)** I also need to add an id and a name on here.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=69)** And I'm going to call them name, because the question I'm going to be asking of the user is their name.
>
> **[1:18](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=78)** And then I need to add a label, so label, and then for = and match the id on the input, which is name.
>
> **[1:28](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=88)** And then Name and the closing label tag.
>
> **[1:35](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=95)** Refreshing that in the browser I get the field for them to type it in and Name.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=102)** So I can type my name in there and then Submit.
>
> **[1:47](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=107)** The next input type is the email input type.
>
> **[1:50](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=110)** And this is used to enter email addresses.
>
> **[1:54](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=114)** So I'm going to go on a new line, I'm on line 13, and I'm going to do input type = email.
>
> **[2:02](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=122)** And then I'm going to add my id and name.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=125)** And I'm going to call it email, because I'm asking for an email address.
>
> **[2:13](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=133)** The opening label and for = email to match the id.
>
> **[2:22](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=142)** And then save, and go back to the browser.
>
> **[2:26](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=146)** So after I refresh you can see that I have now the Name and the Email fields on the page.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=152)** And the Email field looks exactly like the text input, so although you can enter an email or anything else in the text input there's two advantages to using a specific email type of input.
>
> **[2:43](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=163)** And the first, that the browser may have built-in validation for this input type.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=168)** So if I type something in here that's not an email address and I try to submit it I get an error message telling me it's not an email address.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=176)** Now it can't actually tell if a email address is fully valid or not, so basically it's just checking to see if there's an at symbol in the middle there.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=184)** Most browsers support the email input type and are able to validate like this.
>
> **[3:08](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=188)** All recent browsers, except for Opera Mini and Internet Explorer below 10.
>
> **[3:14](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=194)** The good news is if the browser does not support the email input type it simply replaces it with the text input type, so the user's still able to enter information even if there's no validation.
>
> **[3:25](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=205)** So because you cannot count on the validation on all browsers you still need to do server-side validation, which we'll talk about later, to make sure it's an email address.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=215)** But doing browser-side validation is faster.
>
> **[3:38](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=218)** Browser-side validation just means that it's doing it directly in the browser and nothing has to talk back and forth to the server, so it definitely saves time.
>
> **[3:49](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=229)** The message that you see, this comes from the browser and can't be styled with CSS.
>
> **[3:54](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=234)** The error message is going to be in the language of the browser locale.
>
> **[3:58](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=238)** So if someone's using this from a different country with a different language they'd see the error message in their own language.
>
> **[4:05](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=245)** The second advantage to using the email input type is on mobile devices you get a slightly different keyboard to make it easier to enter an email address.
>
> **[4:13](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=253)** So as you see here on iOS you get a keyboard that includes the at symbol and a period, so you don't need to shift through to a different keyboard to get those symbols.
>
> **[4:23](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=263)** And the same thing on Android.
>
> **[4:25](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=265)** This definitely helps with usability for users who are using a mobile device.
>
> **[4:31](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=271)** The next thing that we can do is we can say that we want our email input to accept more than one email address.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=278)** And we do this by simply adding the multiple attribute inside the input.
>
> **[4:43](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=283)** So I'm on line 13, I'm going to go inside the input element and add the word multiple.
>
> **[4:50](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=290)** And this attribute is different from some other type attributes, it doesn't need to have equals anything, it's just the word multiple, which turns on the ability to accept multiple email addresses.
>
> **[5:04](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=304)** Now when I go to the browser and refresh it'll actually let me enter two email addresses separated by a comma.
>
> **[5:14](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=314)** You can enter as many as you want as long as they're separated by commas.
>
> **[5:20](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=320)** Next is the URL input type and you use this to enter URLs or websites.
>
> **[5:27](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=327)** So on line 14 I'm going to enter input type = url.
>
> **[5:35](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=335)** Again, I need an id.
>
> **[5:38](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=338)** I'm going to call this website, name, and then add a label for = website.
>
> **[5:55](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=355)** And going back to the browser and refreshing now I have my third input to add a website.
>
> **[6:02](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=362)** So if I add something in here that is not a website and I submit it I get an error message.
>
> **[6:08](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=368)** So this works similarly to the email input where you get the error message.
>
> **[6:13](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=373)** Here it's looking to make sure that you have a colon with something before it.
>
> **[6:18](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=378)** It can't tell if it's actually a real website or not.
>
> **[6:22](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=382)** So similarly to the email input, you get a different keyboard on mobile when you're entering something in a URL field.
>
> **[6:30](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=390)** You get the slash and .com buttons, which makes it easier for the user to enter that website.
>
> **[6:35](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=395)** The support is similar to email in that most recent browsers support this except for Opera Mini or IE less than 10.
>
> **[6:43](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=403)** And again, if your browser does not support it it will just replace it with a regular text input field.
>
> **[6:49](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=409)** So text, URL, and email are just a few of the many input types you can include in a form.
>
> **[6:54](https://www.linkedin.com/learning/html-css-creating-forms/text-email-and-url-input-types?u=76281980&t=414)** We'll continue to look at other types of inputs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), data (2), [[Microsoft Word|Word]] (2), css (1), [[Android]] (1)
> **Env Vars:** url (4), css (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** ios (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)

#### Number input type
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=0)** - [Instructor] If you need to collect numeric data, there are several input types that can be used.
>
> **[0:05](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=5)** In this video, we'll look at the number input type, as well as attributes you can use to require users to enter data in a certain format.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=13)** First is the number input type.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=16)** This is used to collect either positive or negative numbers, including decimals.
>
> **[0:22](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=22)** So, going to my page.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=24)** On line 12, I'm going to enter an input type equals number, and then, for name, I'm just going to call this number and add the ID.
>
> **[0:43](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=43)** Label for equals number.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=47)** And number is what the user will see on the page.
>
> **[0:52](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=52)** And then save and go to the browser, and there I have my field to enter a number.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=59)** Now, I can enter numbers here.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=62)** What's interesting, it won't let me enter anything that's not a digit, so right now, you can't see, but I'm typing letters but nothing is happening.
>
> **[1:10](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=70)** It'll allow me to enter any digits, the plus or minus sign and the period for decimal point.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=77)** So using this field is useful if you want to make sure that the user is entering a number.
>
> **[1:22](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=82)** You can enter negative numbers with the minus sign, like that, and decimals as well.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=90)** You'll see that this looks a little bit different than a text field.
>
> **[1:33](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=93)** You have what's called a stepper on the right here.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=96)** And if you click the up and down arrows, you can see that the number in the field is changing.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=102)** The number input is supported by all browsers except for IE.
>
> **[1:47](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=107)** Besides not letting you type letters, the input type also has browser validation.
>
> **[1:52](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=112)** So, if you want to enter something that's not a valid number, for example, put more than one decimal point in there, when you try to submit, it'll give you an error message that it's not a valid number.
>
> **[2:04](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=124)** Looking at how this field shows up on mobile devices, you can see that, again, the keyboard is slightly different than what you'd regularly get as a keyboard for entering information.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=136)** You get either the number keyboard or the phone keyboard depending on what operating system you're using, and it also makes the period and negative symbol available for the user on the mobile device.
>
> **[2:28](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=148)** The number input type is partially or fully supported in all modern browsers except for Opera Mini.
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=154)** If the browser doesn't support this input type, it'll just display a text field instead, so the user can still enter a number.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=161)** One note.
>
> **[2:42](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=162)** Not everything that looks like a number should actually be a number.
>
> **[2:46](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=166)** For example, zip codes.
>
> **[2:47](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=167)** They look like a number, but because some zip codes start with the digit zero, it's possible that the database will strip out the leading zero because it thinks it's just a regular number.
>
> **[2:58](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=178)** So a zip code should always be entered in a text field.
>
> **[3:01](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=181)** But if you only want to accept digits, you can use what's called the pattern attribute, which we'll look at later, to use the text field but only allow the user to enter digits.
>
> **[3:12](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=192)** The next thing that we can do is set the range of numbers that the user can enter into the field by setting the minimum and maximum attributes.
>
> **[3:21](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=201)** So, for example, going to my number input here, I'm going to do a min equals negative four and max equals 12,
>
> **[3:33](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=213)** so the user's only going to be able to enter numbers between negative four and 12.
>
> **[3:38](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=218)** So I'm going to save and go to the browser here.
>
> **[3:43](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=223)** So, let's say I try to enter 15 and submit.
>
> **[3:46](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=226)** I'll get this error message that says the value must be less than or equal to 12.
>
> **[3:51](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=231)** Also, if I use the stepper here to go up or down, it'll only go to numbers that are within that range.
>
> **[3:58](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=238)** I'm clicking on up, but it will not go past 12.
>
> **[4:02](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=242)** You might have also noticed that the number field isn't as wide as it was before, because it's assuming that you're only entering a whole number between negative four and 12, so you only need space for a couple digits.
>
> **[4:16](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=256)** Step is another attribute that you can use with number, and it sets the interval between numbers that can be accepted in the field.
>
> **[4:23](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=263)** So, for example, if you add an interval of two or a step of two, you can only enter numbers that are zero, two, four, even numbers.
>
> **[4:32](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=272)** You can set it to do numbers that are three apart or five apart or anything else that you want.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=278)** So, going back to the code, under number, I'm going to take out the min and max and replace it with step equals two, and then save and go to the browser.
>
> **[4:50](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=290)** And now, if I type a number here's that's not an even number, like five, and try to submit, it says, first of all, that's not valid, but it tells me the closest valid values, which are four and six.
>
> **[5:02](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=302)** If I use the stepper, it's going to go up and down by two at a time, so zero, two, four.
>
> **[5:08](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=308)** One thing that's kind of unusual that you need to note when you're using the Chrome browser.
>
> **[5:14](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=314)** If no step is entered, the default value is one, so it only accepts whole numbers.
>
> **[5:19](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=319)** So, going back to the code, if I take out step and save and refresh, I am in Chrome right now, if I try to enter a decimal number here, it's going to say that it's not valid.
>
> **[5:33](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=333)** Going back to the code, I'm going to add step in here, add if step equals any, and save.
>
> **[5:41](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=341)** And now it's going to let me enter a decimal number here.
>
> **[5:50](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=350)** So that was how to use the number input type and attributes that you can use to restrict the data that the user can enter in the field.
>
> **[5:57](https://www.linkedin.com/learning/html-css-creating-forms/number-input-type?u=76281980&t=357)** Next, we'll look at the date and time input types that also allow you to collect numeric data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (2), database (1)
> **UI Navigation:** go to (4)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Date and time input types
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=0)** - [Instructor] There are other input types that can be used to collect numeric data.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=4)** In this video we'll look at the date, time, and telephone input types, and again, look at attributes you can use to require users to enter data in a certain format.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=13)** We'll continue with the same exercise file from the previous video.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=18)** The next input type is date, which is used to accept dates.
>
> **[0:23](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=23)** So back in the code I'm going to enter input type = date, name, let's call this birthday, we can ask the user their birthday, id = birthday.
>
> **[0:41](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=41)** And then label for = birthday, and close the label.
>
> **[0:53](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=53)** So now I have Birthday in here.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=56)** So you'll see that there's placeholders for month, day, and year.
>
> **[1:00](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=60)** And you can type directly in each of these.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=62)** So, for example, I can enter 12 for month, 01 for day, whatever I want for the year, so it's a little bit different than a text field in that way.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=72)** When you're in any of these three parts of the number field you can use a stepper to go up and down.
>
> **[1:18](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=78)** It starts with today under the year.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=81)** There's also this X here on a gray background, if you click that it refreshes the field and deletes everything that you typed in here.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=90)** The other really cool part of this, the arrow on the end, when you click it you actually get a calendar.
>
> **[1:35](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=95)** So you can go back to different months and choose a date this way.
>
> **[1:40](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=100)** Now you can't style a calendar with CSS, so if you want something that looks different you would have to create your own in JavaScript.
>
> **[1:48](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=108)** Now the date field, the date input type does not have great support yet.
>
> **[1:52](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=112)** It's available in Chrome, Opera, Edge, and many mobile browsers, but look for more support for this in the future.
>
> **[1:59](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=119)** As an alternative if you want to have a date that's supported in all browsers you could instead have three different number input fields where they could enter the day, month, and year separately.
>
> **[2:12](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=132)** Here is what the date input field will look like on mobile.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=136)** So you don't get a keyboard here at all, instead you get spinners for the month, day, and year.
>
> **[2:21](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=141)** And this is a much better interface for the calendar than trying to type in the date.
>
> **[2:26](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=146)** So going back to the code for a date we can also enter a min and max.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=152)** So min =, and the format we need here is year, month, and date, so let's say I wanted to restrict this to dates in 2017.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=161)** So I do 2017-01-01.
>
> **[2:46](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=166)** And then the max = 2017-12-31.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=172)** Save, go back to the browser, and now you can see that it looks a little bit different.
>
> **[2:59](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=179)** 2017 is already filled in, because my min and my max only allows dates in 2017.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=187)** So you can't even enter something else there.
>
> **[3:09](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=189)** But I can still enter whatever I want under month and day.
>
> **[3:15](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=195)** So the next input type is time, which is used to enter time of day.
>
> **[3:23](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=203)** So I'm going to enter one more input here.
>
> **[3:26](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=206)** Input type = time.
>
> **[3:31](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=211)** Name = time.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=215)** Id = time.
>
> **[3:42](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=222)** Label for = time.
>
> **[3:52](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=232)** And save and go back and refresh.
>
> **[3:56](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=236)** Now this looks a little bit similar to date in that there are specific areas to enter the hours, the minutes, and the a.m. and p.m..
>
> **[4:04](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=244)** So I can type in in each of these if I want, so I'm just Tabbing through them and typing.
>
> **[4:10](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=250)** I can also use the up and down in each one, or use the X to clear the whole thing.
>
> **[4:18](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=258)** And this is how the time input looks in mobile.
>
> **[4:21](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=261)** Again, you get spinners for each part instead of having to type it out.
>
> **[4:27](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=267)** Going back to our time input I can add step under time as well.
>
> **[4:31](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=271)** Let's say I only wanted the user to be able to enter times that are every half hour.
>
> **[4:37](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=277)** So the step is actually in seconds here, so to set it for a half hour part I would do 1800, which is how many seconds are in a half an hour.
>
> **[4:46](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=286)** And save and go back to the browser.
>
> **[4:49](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=289)** And now when I enter something here it won't accept that first of all, and when I do up and down it only goes up and down from 00, 30, 00.
>
> **[5:01](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=301)** So it will only let me enter times that are on the half hour.
>
> **[5:06](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=306)** Like date, there is not full browser support for this yet and you could, again, instead use three different fields for the hours, minutes, and a.m. and p.m.
>
> **[5:14](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=314)** if you wanted to have a time that supports all browsers.
>
> **[5:19](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=319)** And the next input type is tel, T-E-L, which stands for telephone, and is used to enter telephone numbers.
>
> **[5:27](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=327)** So going back to our code we're going to add one more input on this page, input type = tel, name = phone, id = phone,
>
> **[5:41](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=341)** and then label for phone.
>
> **[5:50](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=350)** Save and go back and refresh.
>
> **[5:53](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=353)** And now there's a field to enter the phone number.
>
> **[5:56](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=356)** So the phone number field on desktop will actually let you enter anything you want.
>
> **[6:02](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=362)** There's no default syntax, because in some places phone numbers are formatted with different symbols and may even include letters.
>
> **[6:10](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=370)** However, on mobile we get something else.
>
> **[6:15](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=375)** Here's what the tel input type looks like in mobile.
>
> **[6:18](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=378)** You get a phone keyboard on all the devices, so it's much bigger keys to allow you to enter in the numbers very quickly.
>
> **[6:26](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=386)** The tel input type is supported in all recent browsers, except for Opera Mini and IE below 10.
>
> **[6:33](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=393)** So those are a few of the input types you can use to collect numeric data in a form.
>
> **[6:37](https://www.linkedin.com/learning/html-css-creating-forms/date-and-time-input-types?u=76281980&t=397)** We still have several more input types to look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (3), css (1), [[JavaScript]] (1)
> **Cross-References:** go back to (3), previous video (1)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** for example (1), similar to (1)
> **Env Vars:** css (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Radio buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=0)** - [Instructor] Besides typing in data, there are times when you want to have the user select between multiple options.
>
> **[0:05](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=5)** The most common ways to do this are using radio buttons, check boxes, or a select menu, which is commonly called a dropdown menu.
>
> **[0:14](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=14)** The two at the top are our radio button input and check box input.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=18)** They look very much the same.
>
> **[0:19](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=19)** The only difference between them, with a radio button, the user can only select one of the options, while with check boxes, the user can select more than one option.
>
> **[0:29](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=29)** Below that is a select menu.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=32)** This is a dropdown where you can only choose one option.
>
> **[0:35](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=35)** And below that is also a select menu, but it's set to allow you to choose more than one option.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=40)** You can choose more than one by using command-click on your Mac, or control-click on your Windows computer.
>
> **[0:48](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=48)** To choose between these options, it is often best to go with a radio button or check box input because then the user can see all of the available options at one time, and they only have to click once to make a selection, whereas with a dropdown menu, you have to click it to see the options and you still can't see all of them at the same time.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=69)** You have to click twice before you can choose an option.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=73)** Here you cannot see all of them at once, you have to scroll to see the options.
>
> **[1:18](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=78)** But you just only have to click once to get the option.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=81)** So it's better to use the radio button or the check boxes for usability because users can see everything at once and there's less clicks for them.
>
> **[1:31](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=91)** The radio type of input only refers to one choice in a list of multiple radio buttons.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=97)** I'm going to enter this inside of my form element, input type="radio".
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=106)** Here I'm going to be asking for favorite color again, but I'm going to give them the options that they can choose from.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=111)** So name="favcolor", value="blue".
>
> **[1:59](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=119)** And this is the information that will be sent to the database.
>
> **[2:02](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=122)** The value isn't actually what the user sees.
>
> **[2:04](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=124)** We'll type that in just a second.
>
> **[2:06](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=126)** And then id="blue".
>
> **[2:09](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=129)** This often will match the value.
>
> **[2:11](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=131)** Then we'll do label for="blue".
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=135)** And then this is what the user will see on the screen.
>
> **[2:18](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=138)** So it can actually be different than the value, even though they should, in theory, be the same thing since that's the selection you're sending to the server.
>
> **[2:27](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=147)** So I'm going to close that with a /label.
>
> **[2:33](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=153)** So going back to the browser, I'm going to refresh, and you can see that my one option showed up.
>
> **[2:40](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=160)** So to add additional options, I'm going to go back to the code.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=164)** I am actually going to copy and paste this whole thing so I don't have to type it over again, and just go through and change the color.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=172)** So in the second one, everywhere where it says blue, I'm going to change it to red, and same thing in the third, using green.
>
> **[3:03](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=183)** Save and go back to the browser.
>
> **[3:05](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=185)** And there you can see all three of the options.
>
> **[3:10](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=190)** The checked attribute can be used if we want to show an item selected by default already when the user first goes to the form.
>
> **[3:18](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=198)** So I'm going to go inside the input for red right here and add the word checked as the attribute.
>
> **[3:25](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=205)** And it doesn't get an equals sign after it, it's just the word checked.
>
> **[3:29](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=209)** Then when I go to the browser and refresh, then I get red already checked.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=215)** So that's how you make radio button and check box options.
>
> **[3:40](https://www.linkedin.com/learning/html-css-creating-forms/radio-buttons?u=76281980&t=220)** Next we're going to look at how to use the select element as a different way to allow users to choose between one or more options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), data (1), [[Windows]] (1), database (1), next (1)
> **UI Navigation:** dropdown (3), click on (1), go to (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### Select
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=0)** - [Instructor] In this video we're going to look at how to use the select element to allow users to choose between multiple options.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=9)** Next, we need to add a fieldset and a legend.
>
> **[0:12](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=12)** And these are used to group the radio buttons together and provide the question that's being answered.
>
> **[0:19](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=19)** If we look on our page here we have the answers, blue, red, and green, but we don't yet see the question.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=24)** So we're going to add that in the code.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=28)** So I'm going to go above the first input for the color blue and add fieldset, and then below that legend.
>
> **[0:37](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=37)** Inside the legend element I'm going to ask the question, What is your favorite color?
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=45)** And then after the last of those three options I'm going to close the fieldset and add an additional break tag right there.
>
> **[0:54](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=54)** So when I go back to the browser now I see the question and the answers.
>
> **[1:00](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=60)** So the legend essentially labels the whole fieldset.
>
> **[1:04](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=64)** If someone's using a screen reader it might read to them the legend along with each label.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=69)** For example it will say what is your favorite color?
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=73)** Blue.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=73)** What is your favorite color? red, et cetera, so it's very clear to the screen reader user what they're answering.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=81)** So the input type of checkbox essentially works the same was as the radio buttons, except the user can select more than one.
>
> **[1:28](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=88)** So going back to the code I can use everything exactly the same, except change the type from radio to checkbox.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=97)** And then save and refresh in the browser and now they're checkboxes.
>
> **[1:41](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=101)** I still have the red selected by default.
>
> **[1:45](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=105)** So the select element is how I get what is usually called a drop-down menu.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=111)** I start with the select element and inside it there's two or more option elements for the user to choose from.
>
> **[1:57](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=117)** The value in each of those is what is sent when the form is submitted.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=123)** So going to our code I'm going to add this underneath the radio buttons.
>
> **[2:13](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=133)** I'm going to ask the question first.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=136)** I'm going to say label for, and we're going to call it pizza, because we're going to ask what is the user's favorite pizza toppings?
>
> **[2:28](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=148)** Close the label element.
>
> **[2:30](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=150)** Now I have the select and the select will group all of the options within it.
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=154)** So select the name = pizza, and the id = pizza, and then close the select.
>
> **[2:46](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=166)** In between I'm going to have the option elements.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=170)** Option value = mushroom, and close the option element.
>
> **[2:59](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=179)** And then I'm going to add four more just by copying and pasting that.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=184)** So let's say onions, pepperoni, and sausage.
>
> **[3:19](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=199)** And then I'm just going to add some line breaks right after the select.
>
> **[3:24](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=204)** So going back to our browser, when I refresh you'll see I get a drop-down menu right here.
>
> **[3:30](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=210)** If we add the multiple attribute to the select element it allows the user to choose more than one option.
>
> **[3:38](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=218)** So I'm going to go back, I'm going to find the select element on line 23, add the word multiple, save it, refresh in the browser, and you see here instead of the drop-down menu now it's changed to this box where I can choose one or more option.
>
> **[3:54](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=234)** The next attribute I can add is size and the size attribute refers to how many options are visible at once without scrolling.
>
> **[4:02](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=242)** This isn't a measurement of the select element.
>
> **[4:06](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=246)** So if I go to the select element I add size = say 7.
>
> **[4:11](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=251)** I go back and refresh it and it makes the box large enough to have seven options fit in there.
>
> **[4:18](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=258)** And the last thing we can do with the select menu is add the optgroup element.
>
> **[4:22](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=262)** And what this does it adds category labels to the list of options if you have many options.
>
> **[4:30](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=270)** So now I'm going to add in the optgroups to put categories for the pizza toppings.
>
> **[4:35](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=275)** So I'm going to start with one, optgroup and label = veggies, and that's the name of the category.
>
> **[4:44](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=284)** And then after the two veggie options I'm going to close the optgroup element.
>
> **[4:49](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=289)** And then you'd do another one, optgroup label = meats.
>
> **[4:55](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=295)** And then after the two meats close that optgroup element again.
>
> **[4:58](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=298)** Save it, go back to the browser and refresh, and now you can see the categories.
>
> **[5:05](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=305)** And I can click on the options, but I can't click on the categories.
>
> **[5:10](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=310)** If I go back and make this not a multiple menu and just a regular drop-down menu you'll see I still get the category labels in there.
>
> **[5:20](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=320)** So those are some of the ways that we can allow users to choose from multiple options.
>
> **[5:25](https://www.linkedin.com/learning/html-css-creating-forms/select?u=76281980&t=325)** Next we'll look at some of the other types of data you can collect in a form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[Microsoft Word|Word]] (1), data (1)
> **UI Navigation:** checkbox (2), click on (2), select the (1), go to (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (2)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Textarea and additional input types
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=0)** - [Instructor] Here are a few additional input types that can be used to collect text, as well as some more specific types of data.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=8)** And the first is a text area element, which can be used to collect text on multiple lines.
>
> **[0:14](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=14)** So inside my form, I'm going to add first the label.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=25)** And I'm going to ask the user to write a poem.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=31)** And then the text area element ID is poem, and name is also poem.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=40)** And it needs a closing tag, even though there's nothing in between them.
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=45)** And then add some line breaks after that.
>
> **[0:48](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=48)** So going to look at that in the browser, it's not just a one line box like I get for inputs, I can actually type in some text and hit Enter between the lines.
>
> **[1:00](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=60)** So the box looks pretty small.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=62)** You can resize it using CSS, but what's interesting is that the user can actually resize it themselves by clicking on the corner of the box and making it larger or smaller on the page.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=72)** However, most users don't know that they can do that.
>
> **[1:16](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=76)** The next input type is color, and this allows the user to select a color.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=81)** Unfortunately, it's not supported in all browsers yet.
>
> **[1:25](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=85)** So for this, I'm going to add a label for="color" and close the label, and then on the next line, input type="color" name="color" id="color" and then some line breaks after that.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=111)** And in the browser, I get this.
>
> **[1:53](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=113)** If you click on that, you get the color chooser that comes with your operating system.
>
> **[1:59](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=119)** So this is what you see in Mac.
>
> **[2:01](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=121)** And there's different ways to choose a color.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=125)** The color input field is supported in Chrome, Firefox, Edge, Opera, and Android, but not in Safari and iOS.
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=135)** The value of the color is passed as a hex number.
>
> **[2:19](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=139)** The next input type is file, which allows the user to upload a file.
>
> **[2:25](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=145)** So, for example, if they're going to upload a resume, we'll put label for="resume" Upload your resume, and then input type="file" name="resume" id="resume" and then a couple of line breaks.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=172)** Looking at that in the browser, you see the Choose File button.
>
> **[2:55](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=175)** It says No File Chosen.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=176)** If I click on that, I can choose from among the files that are saved on my computer.
>
> **[3:03](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=183)** You can also add the multiple attribute on here to allow the user to upload more than one file.
>
> **[3:10](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=190)** Another attribute is the accept attribute, which is how you can specify which types of files are allowed, so going to this last input, accept="image/*" and that will tell the browser to accept any type of image, JPEG, or PNG file, but it will not allow you to upload any file type that is not an image.
>
> **[3:36](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=216)** One security warning is that this does not work all the time.
>
> **[3:40](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=220)** It's very easy to hack, so don't count on this to keep the users from trying to upload executable files or viruses or something like that.
>
> **[3:50](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=230)** You also need to protect against that on the server side, which is not covered in this course.
>
> **[3:57](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=237)** The next input type is password.
>
> **[3:59](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=239)** It looks like a text field, but it masks the characters that are entered in the field.
>
> **[4:05](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=245)** So, label for="password"
>
> **[4:18](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=258)** input type="password" name="password" id="password" and add a couple of line breaks.
>
> **[4:34](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=274)** When I refresh that in the browser, I can type anything I want in this field, and nobody can see what I'm typing.
>
> **[4:41](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=281)** Also a security warning here that just having it be a password field doesn't make it encrypted when it's sent.
>
> **[4:47](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=287)** That's something we'll talk later on in another video.
>
> **[4:50](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=290)** The next input type is hidden.
>
> **[4:52](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=292)** And this is where you have an input that is going to contain data that is passed to the server but not shown to the user.
>
> **[4:59](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=299)** So you might do this if you had like a tracking code or something like that, that needs to be sent to the database along with this form, but the user doesn't need to see it.
>
> **[5:12](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=312)** So input type="hidden" value="1234" name="tracking" and you don't need to put a label on this, since the user doesn't see it.
>
> **[5:27](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=327)** It's totally hidden to the user.
>
> **[5:30](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=330)** Next we're going to look at the range input type.
>
> **[5:33](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=333)** This allows the user to choose from a range of values on a slider.
>
> **[5:38](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=338)** And you have to have the min and the max to set the value that they can choose from, and also a step to show what the steps are within the values.
>
> **[5:50](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=350)** So, input type="range" min="1", max="10", step="1"
>
> **[6:05](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=365)** and looking at that in the browser, it's just a slider like this.
>
> **[6:10](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=370)** And the thing with range is it doesn't actually show you what the numbers are, so you can't use it for getting the exact number.
>
> **[6:17](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=377)** The only way to put a label on it is to do that with JavaScript.
>
> **[6:21](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=381)** This input type is supported by all recent browsers except Opera Mini and IE below 10.
>
> **[6:28](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=388)** And the last one is the search input type, which allows the user to enter a search term.
>
> **[6:35](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=395)** Label for="search" and have search as the label, and then input type="search" name="search" id="search" and then a couple of line breaks.
>
> **[6:57](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=417)** In the browser it looks like this.
>
> **[6:59](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=419)** So it looks almost exactly like a text field.
>
> **[7:02](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=422)** The only difference is once you type in it you get the gray X at the end so that you can delete what's in the field.
>
> **[7:10](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=430)** We've covered all the common input types in a form.
>
> **[7:12](https://www.linkedin.com/learning/html-css-creating-forms/textarea-and-additional-input-types?u=76281980&t=432)** Now we're ready to move on to buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (7), next (6), data (2), [[Security]] (2), hit (1)
> **Env Vars:** css (1), jpeg (1), png (1)
> **Tools:** firefox (1), safari (1)
> **UI Navigation:** click on (2)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)

#### Submit and other types of buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=0)** - [Instructor] Every form needs submit button.
>
> **[0:02](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=2)** There are several different ways to create buttons for forms, including submit buttons, reset buttons, and generic buttons, as well as buttons made out of images.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=11)** The submit input type is the original way to create a submit button.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=16)** Type tells the browser that it's a submit button, and the value tells the browser what word to put on the button.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=21)** Submit is the default word if you don't specify.
>
> **[0:26](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=26)** I'm going to add a button here on line 13.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=28)** Input type equals submit value; and the text I want on the button, let's say, "Submit Answers."
>
> **[0:39](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=39)** Then, add a couple of line breaks.
>
> **[0:43](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=43)** Refresh, and there is my button.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=46)** You can use other words as appropriate, but make sure it's clear to the user that they will submit the form when they click it.
>
> **[0:52](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=52)** For example, it could say, "Add to cart," "Donate," "Place order," that sort of thing.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=59)** The next input type is reset.
>
> **[1:01](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=61)** This button will clear all the fields in a form.
>
> **[1:04](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=64)** Most forms don't need a reset button, and you want to use with care because you don't want the user clearing the form accidentally.
>
> **[1:14](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=74)** I'm just going to copy this last one, change the type to reset, and the value to appear on the button to reset.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=84)** Save that and refresh, and there I have a reset button.
>
> **[1:28](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=88)** If you have both a submit button and a reset button on the same form, make sure it's clear that the submit button is the primary action.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=96)** You don't want somebody accidentally clicking reset and clearing all the answers they just typed in.
>
> **[1:41](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=101)** Normally the submit button could be set out by making it bigger, a darker color, or using the position on the page to make it clear it's a submit button.
>
> **[1:50](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=110)** Sometimes a secondary action is a link instead of a button.
>
> **[1:53](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=113)** You just want to make sure the users don't accidentally click it.
>
> **[1:57](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=117)** The next input type is button.
>
> **[2:00](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=120)** This displays a button, but it has no action associated with it.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=123)** Just putting this in your html, nothing will happen when you click it.
>
> **[2:08](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=128)** However, you can add customized behavior to it with JavaScript.
>
> **[2:14](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=134)** Again, I'm going to copy and paste.
>
> **[2:17](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=137)** The input type is button, and value can be whatever you want.
>
> **[2:26](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=146)** There's my button.
>
> **[2:29](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=149)** Besides using input elements to create a button, you can also use the button element to create a button.
>
> **[2:35](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=155)** This is very similar.
>
> **[2:36](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=156)** It's a button with the type of submit, so it works exactly the same as the input with the type of submit.
>
> **[2:42](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=162)** The only difference is instead of it being a self-closing element, there's text in between the opening and closing button tag.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=170)** So I would have the opening button tag type equals submit.
>
> **[2:57](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=177)** Then whatever I want to have on the button; for example, "Place Order.
>
> **[3:02](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=182)** Then close the button element, and then I'll add some line break tags.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=187)** So here's my button for "Place Order."
>
> **[3:10](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=190)** The difference between using an input type of submit and a button type of submit has to do with the text on the button.
>
> **[3:18](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=198)** If I look at the code, I remember here to add the value on the input button that's inside an attribute, whereas here on the button, the text is in between the opening and closing button tags.
>
> **[3:30](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=210)** What I can do; I can actually stye the text on this button.
>
> **[3:34](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=214)** For example, I could add strong tags, and now I would have the bold text on the button.
>
> **[3:43](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=223)** You can also use CSS to format the text on the button element when you can't do that on the input element.
>
> **[3:51](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=231)** Also with the button element, you have one with the type of "Reset," and one with type of "Button," which work similarly to the input types of reset and button.
>
> **[4:02](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=242)** The last way to do a submit button is with a image.
>
> **[4:05](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=245)** You do input type equals image.
>
> **[4:08](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=248)** This displays similarly to an image element, but it acts like a button.
>
> **[4:14](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=254)** I'm going to do input type equals image, source equals an image that I already have in the correct folder.
>
> **[4:25](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=265)** I need alt text on here since it's an image.
>
> **[4:28](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=268)** I'm going to give it a width to say how big this should be.
>
> **[4:35](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=275)** Now I go to the browser to refresh.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=278)** I refreshed the page and now I have a bird that's actually a button.
>
> **[4:43](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=283)** I can click on this to submit.
>
> **[4:45](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=285)** You might think that you want to make a very nice looking submit button in Photoshop to use as a image as a submit button, but keep in mind that almost any way you can style a button, you can also do with CSS; which is better than adding an extra image to your page.
>
> **[5:00](https://www.linkedin.com/learning/html-css-creating-forms/submit-and-other-types-of-buttons?u=76281980&t=300)** Those are all the different types of buttons you can include in a form, but for most uses you'll be sticking with just a submit button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[Microsoft Word|Word]] (2), next (2), css (2), generic (1)
> **CLI Commands:** make (5)
> **Analogies:** for example (3)
> **Env Vars:** css (2)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Attributes used in forms
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=0)** - [Instructor] Attributes are used to add additional information and browser instructions to an element in HTML.
>
> **[0:06](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=6)** In this video, we will look at some of the most common attributes you will use when creating forms, but many of the other HTML attributes may be relevant for forms.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=15)** Some of these attributes in this video are ones we've covered in previous videos.
>
> **[0:20](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=20)** The first attribute is type, and this is used on the input element, because there's more than one type of input.
>
> **[0:26](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=26)** For example, text, number, or date.
>
> **[0:29](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=29)** The type attribute is required on the input field.
>
> **[0:33](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=33)** The next attribute is name.
>
> **[0:35](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=35)** And this can go on the input, select, or text area element.
>
> **[0:38](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=38)** It labels the data when it's sent to the server or database, or however the data is processed, and you can think of it like the column name in the database.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=47)** Each name in a form should be unique.
>
> **[0:49](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=49)** This isn't shown to the user.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=50)** You use the label element to tell the user what goes in each field in the form.
>
> **[0:55](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=55)** You need to include this on every input, select, or text area.
>
> **[1:01](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=61)** The next attribute is for.
>
> **[1:03](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=63)** It's used on the label element to link the label with the ID of the input selector text area.
>
> **[1:08](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=68)** This makes it clear to screen readers which label goes with which input, and it should be included on every label element.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=77)** The next attribute is value, which has a few slightly different uses.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=81)** For fields where a user enters data such as text, number, or date, the value is the data that the user fills into the form field.
>
> **[1:29](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=89)** You can also use the value attribute to set a default value of a field when the form is first loaded.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=96)** The user will see this as data that's already filled in but they can change it by entering their own data.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=102)** The next is in a form field where the user chooses from options you supply to them, such as checkboxes, radio buttons, or select menu.
>
> **[1:50](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=110)** So there should be a value for each checkbox, or a value for each option in a select element.
>
> **[1:55](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=115)** The value attribute is also used on button-type inputs to set the text that is displayed on the button.
>
> **[2:01](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=121)** If you don't include it, it just uses the default text.
>
> **[2:04](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=124)** The value is optional on buttons, as the rest of the attributes covered in this video from here on.
>
> **[2:10](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=130)** Next are the checked and selected attributes.
>
> **[2:14](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=134)** They work similarly.
>
> **[2:15](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=135)** The checked attribute is used on checkbox or radio inputs to set a default choice, where the selected attribute does the same thing in an option on the select menu.
>
> **[2:27](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=147)** The placeholder attribute is used to provide text that is shown inside an input or text area, and can be used to give users a hint of the type of data.
>
> **[2:35](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=155)** For example, if a field is labeled name, the hint could be Enter First and Last Name, and it shows up as gray text in the field.
>
> **[2:43](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=163)** Placeholder can cause some usability problems, and it's addressed in more detail in a later video.
>
> **[2:49](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=169)** The min and max attributes are used to set what values are accepted in a field.
>
> **[2:55](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=175)** For example, if you only want to collect numbers between one and 10.
>
> **[2:59](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=179)** You can use it on inputs such as number, date, time, or range.
>
> **[3:03](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=183)** Browser validation will only accept values that meet these requirements.
>
> **[3:09](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=189)** The next attribute is step, which is used to set increments for the values that are accepted in a field, for example, if you only want to accept even numbers.
>
> **[3:17](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=197)** You can use it on inputs such as number, date, time or range.
>
> **[3:23](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=203)** The max length attribute is used to set the maximum number of characters that can be entered in a field.
>
> **[3:30](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=210)** The browser may or may not let the user type more characters but browser validation won't accept more than you specify with this attribute.
>
> **[3:38](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=218)** But you need to be careful, because data might be longer than you think.
>
> **[3:43](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=223)** For example, if the field is Name, think of the longest name that you know.
>
> **[3:47](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=227)** There's actually probably people out there with much longer names, and you want to make sure that you can accept their names.
>
> **[3:55](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=235)** The next attribute is multiple, which allows the user to enter multiple values.
>
> **[3:59](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=239)** You can use it on the select element, drop-down menus, in the email input type, or in the file input type.
>
> **[4:08](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=248)** Checkboxes collect multiple values, but you don't need to set the multiple attribute.
>
> **[4:13](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=253)** That's just automatic.
>
> **[4:16](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=256)** The next attribute is pattern.
>
> **[4:18](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=258)** And this is used to set the requirement for the data in a field to be validated against their requirement.
>
> **[4:24](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=264)** For example, here what you see between the square brackets, it's saying that users can only enter letters between A and Z, either upper or lower case.
>
> **[4:34](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=274)** That means they can't enter numbers or symbols.
>
> **[4:36](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=276)** The second part, the three in the curly brackets, means that there should be exactly three characters entered.
>
> **[4:43](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=283)** To figure out how to write a pattern, just look online for regular expressions.
>
> **[4:48](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=288)** This is something that comes from computer science.
>
> **[4:50](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=290)** It's not specific to HTML.
>
> **[4:54](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=294)** The next attribute is required.
>
> **[4:56](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=296)** This means that the field must have a value, it must be filled in before the user submits the form.
>
> **[5:01](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=301)** You only need to use the word Required by itself.
>
> **[5:04](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=304)** There's no equal sign or value.
>
> **[5:06](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=306)** You can use this on most fields, not those such as hidden or buttons where it doesn't apply.
>
> **[5:13](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=313)** You also must tell the user visually, on the page, that a field is required, either in the label or perhaps by placing asterisks next to each required field.
>
> **[5:23](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=323)** In a later video, we'll look more closely at options for showing the users which fields are required.
>
> **[5:29](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=329)** The next attribute is aria-required.
>
> **[5:32](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=332)** When you put the required attribute on a field, most screen readers will let the user know that the field is required, but it may not work in some older screen readers.
>
> **[5:40](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=340)** So, every time you use Required, also use aria-required="true" as a backup.
>
> **[5:46](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=346)** That way, you're covering all the bases for screen readers.
>
> **[5:50](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=350)** Next is the disabled attribute.
>
> **[5:53](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=353)** Putting this on a field means that no data can be entered in the field.
>
> **[5:57](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=357)** It'll be grayed out on the page, and the value is not submitted when the form is submitted.
>
> **[6:02](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=362)** You can either apply this individually to one field, or to an entire field set where it's inherited.
>
> **[6:09](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=369)** Next is the readonly attribute.
>
> **[6:11](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=371)** It's the same as disabled, where you can view but not complete the field, but the value is submitted to the database.
>
> **[6:18](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=378)** So you'd use this for something, for example if you wanted to tell the user that you've collected their IP address, you're going to show it on the page and submit it with the form, but not let them edit it.
>
> **[6:30](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=390)** And last, we have the hidden attribute.
>
> **[6:33](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=393)** This is the same as readonly, except that the user cannot view it.
>
> **[6:37](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=397)** This field does not show up on the page at all, but the value is submitted, so it's handy to use for something like a tracking code.
>
> **[6:44](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=404)** Those were some of the common attributes that you'll use in forms.
>
> **[6:47](https://www.linkedin.com/learning/html-css-creating-forms/attributes-used-in-forms?u=76281980&t=407)** Now you're ready to move on to making forms interactive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (13), data (10), [[Forms]] (4), [[HTML]] (3), database (3)
> **Analogies:** for example (7), such as (5)
> **Env Vars:** html (3)
> **Definitions:** means that (3)
> **UI Navigation:** checkbox (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 3. Making Forms Interactive

[↑ Back to Table of Contents](#table-of-contents)

#### Form submission and security
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=0)** - [Narrator] The point of a form is to send data to a server or sometimes just to another page.
>
> **[0:05](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=5)** In this video, we will look at how forms are submitted.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=9)** The form element has an action and method attribute which will determine how the data is sent to the server.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=16)** First, the action attribute.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=18)** This is where the data gets sent.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=21)** It needs to be a valid URL either absolute or relative URL generally.
>
> **[0:26](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=26)** It's not required to have an action and if you don't include one, the default is the current page.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=31)** It's important to know whether the sending and receiving page have HTTPS.
>
> **[0:37](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=37)** That's the secure protocol for sending data, but not all websites have it and you can tell by whether the URL of the website is HTTP or HTTPS.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=47)** If both the sending and receiving page are HTTPS, then everything is encrypted as it's sent.
>
> **[0:54](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=54)** That's the best way to go.
>
> **[0:58](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=58)** If both the sending and receiving page are HTTP, the data is not encrypted.
>
> **[1:03](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=63)** This is not recommended and definitely don't use this for any data that should be kept secure like personal information or passwords.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=72)** If your sending page is HTTP, not secure, but the receiving page is HTTPS, then the data is encrypted.
>
> **[1:21](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=81)** And if your sending page is secure, HTTPS, but the receiving page is HTTP, the data is not not encrypted.
>
> **[1:29](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=89)** And further in this scenario, the browser will display a security warning message to the user advising the user that they should probably not submit their data.
>
> **[1:39](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=99)** Next, the method attribute on the form element and this is the HTTP method which is the way the data is transmitted.
>
> **[1:47](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=107)** And commonly, this will be either get or post.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=111)** First, if the method is get, this means the browser is sending an HTTP request to ask for a resource with an empty body in the request.
>
> **[2:01](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=121)** So essentially that means the data from the form is in the URL which is sent to the server or to a different page.
>
> **[2:08](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=128)** The format is after the URL, you can see there is a question mark followed by the name of the form field equals and the value the user entered.
>
> **[2:18](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=138)** So here we have color and the value is blue and there's design and the value is striped.
>
> **[2:24](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=144)** If you have more than one to send, they're separated by an ampersand symbol.
>
> **[2:28](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=148)** The user will be able to see this in the URL as the data is sent.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=152)** There is a limit on how much information can be submitted as servers may limit the length of the URL.
>
> **[2:38](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=158)** Don't use this method for sensitive data as it's possible to intercept data in the URL.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=164)** The other value for method is post and this is more common.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=168)** In this one, the browser sends an HTTP request to the server to ask for a response with the data in the body of the request rather than in the URL.
>
> **[2:58](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=178)** This is the preferred method as it is much more secure.
>
> **[3:01](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=181)** All the user will see is the URL that the data is being sent to and their data will not be visible.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=187)** The server receiving the data will process the data and respond.
>
> **[3:11](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=191)** So the server is programmed in a language like PHP, Python, Pearl, Java, Ruby, other languages or a framework based on one of them.
>
> **[3:20](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=200)** And talking about what happens on the server is beyond the scope of this course.
>
> **[3:25](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=205)** After the server processes the data, it responds by sending information back to the user's computer.
>
> **[3:31](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=211)** It may just tell the browser to display a particular resource page such as a confirmation page or it may return data based on the form entries.
>
> **[3:40](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=220)** For example if I submit a search form, the server will send back the search results that it retrieved from a database.
>
> **[3:46](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=226)** There are a few things you should be aware of to make forms secure.
>
> **[3:50](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=230)** On the browser side, the form is never totally secure.
>
> **[3:53](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=233)** Hackers can add scripts to a form or make their own form that submits to your server so don't rely on browser validation such as file type.
>
> **[4:01](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=241)** Although it's nice to check on the browser side before sending, the server should also check to make sure it's not receiving an executable file.
>
> **[4:08](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=248)** You don't want to get your server hacked.
>
> **[4:10](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=250)** And the server should also make sure that the data it receives is in the format it's supposed to be as a hacker could send a script or database request.
>
> **[4:19](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=259)** So that was an overview of what happens when a form is submitted.
>
> **[4:22](https://www.linkedin.com/learning/html-css-creating-forms/form-submission-and-security?u=76281980&t=262)** Next, we will look at how validation can help make sure that the user enters the right data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), [[Forms]] (2), next (2), [[Search]] (2), database (2)
> **Env Vars:** url (10), http (7), https (5), php (1)
> **CLI Commands:** make (5), php (1), python (1), ruby (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (1), be aware (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** required to (1)

#### Form validation
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=0)** - [Presenter] The goal of validation is to make sure users are entering the data you want.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=4)** For example the correct number of digits in a zip code, and also to make sure they aren't sending malicious data.
>
> **[0:10](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=10)** Validation just means you're telling them that they make a mistake after the user entered the data.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=15)** There are different ways to provide validation, which can be roughly divided into three categories.
>
> **[0:23](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=23)** We have client-side validation, which is done in the browser when the form is submitted.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=28)** And this what we see an examples of with the built in browser validation.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=32)** Client-side validation can can also be done inline.
>
> **[0:35](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=35)** And this is when you get a validation message as the user is filling out the form before they click submit.
>
> **[0:41](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=41)** Server-side validation is done after the form is submitted when the server sends back an error message.
>
> **[0:48](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=48)** So the advantage of doing validation on the client-side, that is by the browser, is that it's a lot faster than waiting for the server to send back a response.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=56)** The disadvantage of client-side validation is that it's not 100% foolproof.
>
> **[1:00](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=60)** It may not be supported by all browsers and anything in the browser is hackable by someone who wants to submit fake or even malicious data.
>
> **[1:08](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=68)** So the answer is to use a combination of both.
>
> **[1:10](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=70)** Validate in the browser because it's fast, but also have the server validate when it receives the data to catch anything that slipped through.
>
> **[1:19](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=79)** Use server-side validation to verify everything you already checked with client-side validation.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=84)** Additionally, some fields can only be validated by checking with the server.
>
> **[1:29](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=89)** For example, when a user logs in checking if their password is correct, or if a user enters a credit card number, running the charge to make sure it goes through.
>
> **[1:38](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=98)** This type of validation is done through the back end code of the website, so it's beyond the scope of this course.
>
> **[1:44](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=104)** We already saw many examples of built in browser validation that is available in HTML5.
>
> **[1:49](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=109)** You should take advantage of this when you can, but be aware that depending on the input type, it might not be supported in all browsers yet and screeners may not support it either.
>
> **[1:58](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=118)** If you want client-side validation that is more widely supported or is more flexible than the browser default validation, that's commonly done with JavaScript.
>
> **[2:07](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=127)** You don't necessarily have to write JavaScript from scratch.
>
> **[2:10](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=130)** There are many libraries and frameworks that do validation that you can implement easily on a site.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=136)** Inline validation is done as a user is completing a field on the form, or immediately after they've completed the field.
>
> **[2:23](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=143)** A benefit of this type of validation is the user can see immediately if they made a mistake, instead of having to go back at the end.
>
> **[2:29](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=149)** However, a downside is that you're interrupting the user when you ask them to a correct an error and it may interrupt their flow as they're filling out the form.
>
> **[2:38](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=158)** You can do inline validation using CSS, but it's fairly limited.
>
> **[2:43](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=163)** In an upcoming video in this course, we'll go through some of the pseudo-classes that apply to forms, some of which can be used in validation.
>
> **[2:49](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=169)** The primary example is valid and invalid.
>
> **[2:53](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=173)** So I'm going to go to the CSS for this page.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=176)** I already have all of my layout here.
>
> **[2:58](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=178)** And I'm going to add some CSS to give the valid inputs a green border and the invalid inputs a dashed, red border.
>
> **[3:05](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=185)** So I just do input valid, and then border two pixels solid green, and then below that input invalid, and border two pixels dashed in red.
>
> **[3:22](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=202)** And I'm using a dash border to signify the invalid fields, in addition to the color red, because color blind people may not be able to see the difference between green and red on the page.
>
> **[3:32](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=212)** You can style valid and invalid fields however you want.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=215)** A common method is to place a green check or red x next to each field, which can be done by applying background images using valid and invalid.
>
> **[3:43](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=223)** So I'm going to save this and go back to the browser and refresh.
>
> **[3:47](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=227)** Now you can see that all of the fields now have a green border, that's because an empty value is a valid value for those fields, but let's say I make one of the fields required.
>
> **[3:58](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=238)** So I go back to the code and in the HTML, I will say for example, name is required.
>
> **[4:05](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=245)** So I'm going to add the required attribute in line 17 on the input element.
>
> **[4:11](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=251)** Going back to the browser and refresh, and now you can see that dashed red line around name because an empty value is not a valid value in that field.
>
> **[4:20](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=260)** Once I start typing, now it's valid and I get the green border.
>
> **[4:24](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=264)** This is actually not very good from a usability perspective.
>
> **[4:28](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=268)** By telling them their entry is invalid before they even start typing in a field, you're interrupting them with information that isn't relevant.
>
> **[4:35](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=275)** It's also annoying to be told that what you're typing isn't correct when you want to yell at the computer, but I'm not done yet.
>
> **[4:42](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=282)** Unfortunately, using pseudo-classes for inline validation is very limited in this manner.
>
> **[4:47](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=287)** To get inline validation working the way you want, you'll probably need to use some JavaScript, which will give you a lot more flexibility.
>
> **[4:56](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=296)** Here's an example of a website that does validation very well.
>
> **[5:02](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=302)** The choose a username field has inline validation, which doesn't display as your typing, but displays as soon as you tab out, or click out of the field.
>
> **[5:11](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=311)** Since it's very likely you'll give an incorrect response in that field, after all you have no idea which usernames are already taken, they want to let you know right away so you can try something else.
>
> **[5:23](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=323)** So I can fill out the other fields here, and say I don't enter email correctly, when I got to submit it's going to tell me that the email address is not a valid format.
>
> **[5:40](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=340)** It also told me that I forgot to fill out the CAPTCHA box at the bottom.
>
> **[5:45](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=345)** So one thing to note, that when you did see the inline validation for the username field, it's not actually client-side validation, since it must be checking with the server to see if the username is available.
>
> **[5:56](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=356)** To communicate with the server without submitting the form, you would need to use a method like Ajax.
>
> **[6:03](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=363)** This form does a lot of things well.
>
> **[6:04](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=364)** First, the error messages are very clear and specific.
>
> **[6:08](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=368)** Many websites will simply tell you which fields are wrong and say please correct your errors, without telling you what the errors are.
>
> **[6:15](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=375)** This site says exactly what is wrong in each field.
>
> **[6:18](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=378)** Another thing that it does well, is it puts the error message right next to each field.
>
> **[6:23](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=383)** Many web forms put all the error messages at the top of the page, so you have to scan through the page to find the field that needs to be fixed, by which point you might not even remember what it told you was wrong.
>
> **[6:34](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=394)** This site also makes the error messages very visible, both by using color for users who can see it and making sure the error messages stand out with white text and a dark background for those who can't see the colors.
>
> **[6:46](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=406)** In this video we looked at some different ways to do form validation: client-side validation, either inline or unsubmit, and server-side validation.
>
> **[6:54](https://www.linkedin.com/learning/html-css-creating-forms/form-validation?u=76281980&t=414)** Although you're limited in what you can do using only HTML and CSS, you should make use of these methods and add on additional validation with JavaScript or on a server where it's possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[JavaScript]] (4), css (4), [[Forms]] (2), next (2)
> **Env Vars:** css (4), html (2), html5 (1), captcha (1)
> **CLI Commands:** make (6), find (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)


### 4. Styling Form Fields with CSS

[↑ Back to Table of Contents](#table-of-contents)

#### Basic form styles: Text color and size
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=0)** - [Tutor] Forms will work perfectly okay without any styles at all, but you can use CSS to make them look more consistent, visually appealing and match the overall design of your site.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=9)** In the next few videos, we'll be looking at how to style individual form elements.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=13)** With this video, we'll start by just looking at how to style a color and size of text on various input types.
>
> **[0:19](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=19)** Usually elements inherit font styles from the containing element, for example, if you apply font-family to a body element, it's inherited by most elements in the body, but that doesn't always work in forms, some elements may not inherit font-family or font-size.
>
> **[0:35](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=35)** So for example, on this form you can see that most of the text on here is a serif text, there's no styles on this page at all or you can see already on the Choose File button and No file chosen text next to it, those are a sans serif, so they're obviously not the same typeface, also if you type in the fields here, that's also a sans serif, so it's a different typeface than the text on the page.
>
> **[1:03](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=63)** Usually you want your text to be consistent with the rest of the content, so you want to make some changes to styles, so everything inside the form inherits the font-family and other font characteristics from their containing element.
>
> **[1:19](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=79)** So we're going to go into our stylesheet and add a few styles.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=84)** So we're going to style the button element, input, select and textarea and the style I'm going to add here is font-family: inherit and then font-size: 100%, save this, go back and refresh and now all of this text, the No file chosen, when you type in a field, this is all going to be the same typeface, the only thing that's not changing is the text on the File Upload button, that's actually a security feature in browsers, they don't let you really do any styles to that button, because they want to make sure you don't trick users into uploading a file, by not recognizing that is a file button, so that's why that button is not styleable.
>
> **[2:14](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=134)** So that code snippet that we just typed in, this one, it's handy to include that on your entire website, so that way all of your forms will automatically inherit the fonts and get the fonts that you're starting with, so from here on out, we're going to include this on the stylesheet in every video.
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=154)** One tip when sizing text, like any text, make sure that the text in the form is large enough that it's easy to read.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=161)** Remember that you can use media queries, if you want any of your form styles to be different for different screen sizes.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=168)** You can target styles to different input types, so I could apply a style to all the different inputs, but if I just wanted to apply a style to date inputs, I would use square brackets, type equals date and then I could do a style here, for example, font-size: two ems and color: green and when you go back here, that's only been applied to the date input field.
>
> **[3:18](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=198)** One interesting thing, the arrow, this takes the color of the text also.
>
> **[3:24](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=204)** So I'm going to take that out and this time I'm going to style the file input and add a font-size and a color, go back to the browser and refresh, so now you can see here that what's styled is right here where it says No file chosen, if I'd uploaded a file, that would be the filename instead, so the button that's still not being styled is just this text.
>
> **[3:53](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=233)** So it's kind of strange, normally text would move down, so there's enough space to see all of it, on the input type of file, this kind of weird thing happens and you can fix it by adding padding-top, so I'm going to go back to the code, add padding-top: point 5 ems and refresh and that's fixed that problem, so it didn't make the text on the button bigger, what's interesting, if I choose to make the font-size smaller than normal, so point five ems and I refresh, it does make the text in the button smaller.
>
> **[4:28](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=268)** There's a lot of quirky things like that about CSS, that you don't really realize until you try them and something doesn't work the way you thought it would.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=278)** So I can also apply styles to labels,
>
> **[4:53](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=293)** so I'm doing a color and a font-weight of bold and that styles all the labels on the page.
>
> **[5:00](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=300)** If you want to apply style to a label for a particular input type, you can use what's called an adjacent sibling selector, so to only do the label for the date input, first I'm going to do input type equals date and then after that space plus and then label, so what this adjacent sibling selector with a plus sign does is it looks for that particular date input and then it finds a label that's immediately following it, so I can add style here, so I've added the color orange here and I'm going to go back to the browser and refresh and now only the label after the date field is orange, so I'm going back to the code
>
> **[5:46](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=346)** and I'm going to take out all the styles I've applied, except for that default at the top, because I want to start from scratch again.
>
> **[5:53](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=353)** So now I'm going to apply a style to the fieldset, color of orange and save and go back and refresh, so that color of orange is applied to everything in the fieldset, so the legend at the top, all of the labels, but it hasn't applied to the inputs, inside the inputs.
>
> **[6:16](https://www.linkedin.com/learning/html-css-creating-forms/basic-form-styles-text-color-and-size?u=76281980&t=376)** If I want to color just the legend, I can do that, so legend and then add a style for perhaps color of green and go back and refresh, so these were examples of how to apply basic font styles to certain input types, but there are many other CSS styles, that can be used as well, just be aware that some input types like file input will have unusual results, when you try to style the text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), css (3), next (2), [[Representational State Transfer (REST)|Rest]] (1), [[Security]] (1)
> **CLI Commands:** make (7)
> **Cross-References:** go back to (3), in the next (1)
> **Env Vars:** css (3)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)
> **Speakers:** - [tutor] (1)

#### Box sizing for forms
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=0)** - [Instructor] The default widths for various input types can be slightly different, in this video, we'll see how to give them a consistent width.
>
> **[0:07](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=7)** First, here are all the different input types.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=11)** We haven't styled them yet, you can see that they're actually all different widths.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=16)** Even if I give them a width, they're not quite even.
>
> **[0:20](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=20)** The only ones that are actually 150 pixels wide are the search and the select, the others are actually a little bit more than a 150 pixels.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=28)** But when you're styling a page, you're probably going to want everything to be a consistent width just to make it look good.
>
> **[0:34](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=34)** So you can do that using a CSS property called, box sizing.
>
> **[0:38](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=38)** Box sizing changes the way the browser interprets the box model, the box model, basically describes how padding and margins are rendered around an element.
>
> **[0:48](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=48)** The default box sizing is content box.
>
> **[0:51](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=51)** That's the first box you see here, so, what happens here, this paragraph that you see, is 600 pixels and there's 50 pixels of padding.
>
> **[1:00](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=60)** By using box sizing content box, when you take the paragraph and add the padding, that goes on the outside, so instead of being 600 pixels wide, the box is now 700 pixels wide.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=72)** On the bottom, we have box sizing of border box.
>
> **[1:16](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=76)** In there, you have a paragraph that's 600 pixels wide, but when you add padding, it shrinks the paragraph so the paragraph and the padding, all fit within 600 pixels.
>
> **[1:26](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=86)** In recent years, it's been pretty common to set your entire website to box sizing border box because it's then, it's easier to figure out how the padding and margins fit together on the page.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=97)** So, it's possible that your website is already set so that everything use it for their box, but it's good to also specify that for your forms because they don't always inherit everything properly.
>
> **[1:49](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=109)** So this is how it looked when you just had a 150 pixels set as the width and if we add the box sizing border box, you can see now, that all the field line up exactly, they are the exact same size.
>
> **[2:02](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=122)** So just to note, that you do need to webkit vendor prefix for box sizing on this.
>
> **[2:09](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=129)** So now that we understand that box sizing can help you style your forums more consistently, we're going to add this into our default style that we're going to use, on all of our forms going forward.
>
> **[2:20](https://www.linkedin.com/learning/html-css-creating-forms/box-sizing-for-forms?u=76281980&t=140)** So I'm just going to paste that in there, so now that we've added this to the default styles, you don't need to worry about it again, because it will affect all of your forms from now on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Search]] (1), css (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)

#### Styling text inputs
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=0)** - [Instructor] In this video, you will learn how to style a text entry inputs.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=4)** So this will cover all the different inputs where you type, such as text or number, but not other types of entry like check boxes or select.
>
> **[0:12](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=12)** We're going to start out with a webpage where I've included one of each type of field.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=16)** So this is what all of them look like without any styles.
>
> **[0:20](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=20)** In the CSS at the top, the first two things I have are the default styles that we looked at in the last couple videos.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=28)** The last thing here is just a list of all the different input elements as selectors with no styles applied to them yet.
>
> **[0:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=36)** So I'm going to start with applying a width as a style.
>
> **[0:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=42)** You can see above that I've applied that to input type text, input type url, et cetera, all of the input types including text area.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=50)** So I'm going to save that and go to the browser and refresh.
>
> **[0:53](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=53)** Now they're all the same width.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=56)** I used ems to size them, so that we will change with the font size, so if I have a large font size in one of these fields then the box will get bigger so there's room to type.
>
> **[1:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=66)** You also might want to use percentage to base the size on the containing element.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=73)** Next, if users are entering long text, it's best to have the box long enough to see the whole thing.
>
> **[1:18](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=78)** So, for example, the url field, websites are often long, so I'm going to make that box itself longer.
>
> **[1:25](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=85)** So input, square brackets, type equals url and the style I'm going to add is width 20 ems and save and go back to the browser, so now our website field is wider.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=102)** Another example of what you might want to change is make a zip code field shorter since that's something that won't have a lot of characters in it.
>
> **[1:49](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=109)** Next, I'm going to add padding to all of the inputs.
>
> **[1:53](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=113)** Padding, five pixels, save and refresh.
>
> **[1:58](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=118)** So you can see that all of the boxes now have padding in them expect for the search term box.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=123)** If I type something in here, there's space around the text that I'm typing.
>
> **[2:08](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=128)** The search boxes have a little bit weirdness as to how they apply CSS formatting, so if you're using a search input you might have to apply styles in different ways to get it to do what you want to do.
>
> **[2:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=141)** Next, I'm going to apply a margin to all the inputs.
>
> **[2:25](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=145)** I'm going to do a margin of 10 pixels on every side, except for the last, which is going to be zero, so they're just going to line up against the margin on the left side.
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=154)** Then I go back and refresh.
>
> **[2:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=156)** So that looks great, there's space between them.
>
> **[2:38](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=158)** The only problem I have is the text area, the last field in the page.
>
> **[2:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=162)** The words no longer line up with the field.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=164)** To fix that, I'm going to add some CSS just to text area.
>
> **[2:53](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=173)** It's vertical align middle and this will make the text line up with the middle of the field.
>
> **[3:01](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=181)** And there we go, now it looks perfect.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=184)** So I'm going to show you really quickly something you should not do, but I see this a lot on the web.
>
> **[3:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=189)** A lot of people make their input boxes look like something that's not an input box, for example just a line underneath.
>
> **[3:16](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=196)** So I'm going to give it a border of zero and this is to all the inputs and give it a border bottom of two pixels and dashed and save this and go back.
>
> **[3:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=207)** And that's what you get.
>
> **[3:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=208)** And you do see this sometime in websites, but it's actually hard for users to use because it's not exactly clear where they're supposed to type.
>
> **[3:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=216)** It's sometimes hard to see where the labels line up with the input fields.
>
> **[3:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=220)** So try to avoid doing this.
>
> **[3:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=222)** It does make things look nifty and cool, but it's better to make your site usable than look fancy.
>
> **[3:48](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=228)** So I'm going to go back and take out those two lines I just added.
>
> **[3:52](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=232)** And next I'm going to add rounded corners to each of the input fields using border radius of seven pixels.
>
> **[4:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=240)** Save that and refresh.
>
> **[4:02](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=242)** So now I go back to just the regular inputs instead of underlines and they have rounded corners.
>
> **[4:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=249)** I could give them a background color next.
>
> **[4:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=255)** I'm going to give them a background color of fdedec in hex, which when I go and refresh is just a light pink background.
>
> **[4:23](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=263)** I always make sure there's enough contrast between the background, that the text is readable.
>
> **[4:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=268)** So those were just some of the basic styles you can use on text input fields on a form.
>
> **[4:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-text-inputs?u=76281980&t=272)** Most of them work consistently for all the different input types, but you could see there were a few quirks that you need to look out for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), css (3), [[Search]] (3), web (1)
> **CLI Commands:** make (7)
> **Env Vars:** css (3)
> **Cross-References:** go back to (2), in the last (1)
> **Analogies:** for example (2), such as (1)
> **Best Practices:** it's best to (1), avoid doing (1), always make sure (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Styling radio buttons and check boxes with images
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=0)** - [Instructor] In this video, we'll look at how to style radio buttons and check boxes with images.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=4)** Styles work exactly the same for both, so I'm just going to show you check boxes, but you can substitute radio buttons and do the same styles.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=11)** We starting off with a set of check boxes and a field set.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=15)** I'm going to go to the style sheet, where I'm starting off with the default styles and I'm going to add styles for input and type=checkbox.
>
> **[0:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=27)** I'm going to try adding a border of one pixel solid in red and then, a background color of gray.
>
> **[0:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=37)** And then when I go back here and refresh, nothing happens.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=40)** That's because you can't actually apply borders and background colors to the check boxes themselves.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=46)** However, you can put the inputs inside of the label elements and then apply the styles to the label.
>
> **[0:54](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=54)** Okay, I'm going to cut and paste the input from line 16 and paste it into line 17 and cut and paste the input from line 19 and paste it into 20 and, cut from 22 and paste it into 23.
>
> **[1:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=75)** Then take out the empty spaces, and then save this, and then go back the styles and instead of styling the input, I'm going to style the label and refresh and, there, our style's applied to the labels.
>
> **[1:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=91)** Now you probably want to add some padding and a consistent width, so I'm going to add on line 12, padding of five pixels and width of 6em and save.
>
> **[1:45](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=105)** And we go back here and refresh, and we have some padding, but I don't have a consistent width.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=111)** The width doesn't work because the labels are displayed in line, so you need to change it to, display inline block or block.
>
> **[1:58](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=118)** So going back to the style sheet, display: inline-block on line 14 and refresh, and now they're all the same width.
>
> **[2:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=129)** To select any of the options, you can actually click on the label, you don't need to click on the box itself.
>
> **[2:14](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=134)** That works as long as the labels are associated with the input, using four or if the input is inside the label element.
>
> **[2:22](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=142)** Now you can't style the check boxes themselves with CSS, as the browsers won't apply styles consistently.
>
> **[2:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=148)** But you can replace the default check boxes with images.
>
> **[2:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=151)** So you just need two images that line up with each other, an empty check box and a checkered box.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=157)** So we're going to go back to the styles, I'm going to take out all of the styles that I added so far, the border and the padding and the background color and, save this and go back to just the plain check boxes.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=170)** I also want to go to the HTML and go back and put the inputs before each label, so I'm just doing ctrl Z to undo all the changes I made in the HTML file.
>
> **[3:01](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=181)** So going back to styles, I'm going to apply the styles to input and then, type=checkbox and then give it on line 10,
>
> **[3:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=195)** opacity of zero and save.
>
> **[3:19](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=199)** When I go here, the check boxes are no longer visible.
>
> **[3:23](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=203)** If you use display none, they would also not be visible, but unfortunately that wouldn't hide it for screen readers, so don't use display none, the correct thing to do here is opacity zero.
>
> **[3:33](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=213)** Next, going back to the style sheet, I want to apply styles to the labels following each of these inputs.
>
> **[3:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=221)** So, I'm going to copy and paste from line nine, input type check box and do the adjacent sibling selector, so + label and then on line 13, I'm going to do background:url and then the image I'm using is, checkbox-empty.png and then, left: center no-repeat, so that is going to take the check box and put it in the background of the label, on the left side and the center going up and down, and not repeat it.
>
> **[4:19](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=259)** And then, I need a background size for that image, and that's going to be 1em by 1em.
>
> **[4:25](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=265)** I want to use ems for the background size, so if the text size changes, then the background size of the image will change with it.
>
> **[4:33](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=273)** So save that and refresh, and now I have the check boxes.
>
> **[4:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=277)** But they're not in the right place yet.
>
> **[4:39](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=279)** Going back to the code, I'm going to add padding-left of 1.5em on line 15, and you go back and refresh, and now, they're to the left of the text.
>
> **[4:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=291)** But there's still empty space where the original check box was, so I'm going to use a negative margin on the left to push the whole thing over to the left.
>
> **[5:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=300)** So on line 16, margin-left, then -1.5em, save and refresh, and now the check boxes are back where they should be.
>
> **[5:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=313)** So we're good and we can actually still select the check boxes, but nothing happens because we need to add a separate image for the checked state.
>
> **[5:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=321)** So going back to the styles, I'm going to copy this whole selector right here and paste it on line 18, and then I'm going to add :checked and that will select the label following the input, but only when it is selected.
>
> **[5:38](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=338)** So styling going to add here, I'm actually going to copy this whole style too and paste that in there, because I only need to change that image and that is going to be checkbox.checked.png, save, go back and refresh, and now when I check each of these, you can see it is checked.
>
> **[5:58](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=358)** So if you wanted to style radio buttons in the same way, all the code is exactly the same, just use radio instead of check box and you'd use empty and filled circles instead of the squares.
>
> **[6:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=369)** So that's just one way you can use CSS to style check boxes or radio buttons, to make them look better and fit in with your website style.
>
> **[6:17](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-with-images?u=76281980&t=377)** Next, we're looking at another way to style check boxes and radio buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (2), [[HTML]] (2), next (2)
> **UI Navigation:** checkbox (4), go to (2), click on (2), select the (2)
> **Env Vars:** css (2), html (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Styling radio buttons and check boxes as buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=0)** - [Instructor] Another technique for styling radio buttons or check boxes is to replace each check box or radio button with a button style selector.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=8)** This is an example of what the finished exercise will look like.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=11)** And you can select each one just like you would a check box.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=15)** So this is actually what we're going to start with, and then style.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=18)** It's just check boxes inside a field set.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=21)** So I'm going to go to my CSS.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=24)** And I'm going to style input and then type equals check box.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=31)** And the first styles I'm going to add are opacity of zero, to hide the check box itself, with the zero and a margin of zero.
>
> **[0:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=41)** So now we just have the words right there.
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=45)** Now I'm going to add styles to the labels to make them look like buttons.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=50)** So I'm going to copy and paste and put type check box, and it's going to be plus label, that's the adjacent sibling selector, to style every label that's after the input of a type check box.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=62)** And I'm going to add a bunch of styles here.
>
> **[1:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=64)** You can add whatever styles you want.
>
> **[1:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=66)** These are just some styles I'm choosing to make it look like a button.
>
> **[1:10](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=70)** So I'm going to give it a border, two pixels, solid, and then a background color.
>
> **[1:22](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=82)** And then a padding of four pixels and 10 pixels.
>
> **[1:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=87)** And that's top and bottom and left and right.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=90)** Border radius of seven pixels to give it rounded corners.
>
> **[1:38](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=98)** Display of inline block, which will allow me to set padding and width and height on them.
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=106)** A width of four ems, and then text align center.
>
> **[1:52](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=112)** And then save that, go back to the browser and refresh.
>
> **[1:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=116)** So all of those styles were applied to the labels, so the label just went from a plain word to these style looking buttons.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=123)** And all of what I typed in, you can do any style you want, different borders, different colors, just as long as people recognize that it's clickable.
>
> **[2:12](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=132)** So when you click on these, you can't tell which is selected, so we're going to need to add a separate style for that.
>
> **[2:18](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=138)** So going back to the style, I'm going to copy and paste this selector on a new line, and add after the input, a colon checked on line 24.
>
> **[2:33](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=153)** And then add a different border color, a different background color, and give it a font weight of bold.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=168)** And save, go back and refresh.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=170)** And now when I click on each one, it's easy to recognize that it's been clicked.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=176)** So that was another way you can use CSS to style check boxes or radio buttons to make them look more interesting, but without it making any changes to functionality.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-radio-buttons-and-check-boxes-as-buttons?u=76281980&t=184)** Next, we'll look at how to style the select element.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (2), [[Microsoft Word|Word]] (1), next (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** css (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Styling select
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=0)** - [Instructor] In this video we'll look at different ways to style the select element.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=4)** This is what our finished page will look like.
>
> **[0:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=6)** We have four select menus here.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=8)** The first two are regular select menus, and then the last two have the multiple attribute added to them, so you can select more than one option.
>
> **[0:16](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=16)** The second of each set has optgroup in it so you can see the categories.
>
> **[0:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=21)** This is what our HTML looks like without any styles as we're starting out.
>
> **[0:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=27)** So, going to the CSS, the first thing we're going to do is style the select menu.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=31)** I'm on line nine.
>
> **[0:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=34)** And add a display of block, which will make them go up and down vertical on the page rather than across.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=40)** And then add a margin bottom of 20 pixels to put some space between them.
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=45)** And I go back to the browser and refresh.
>
> **[0:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=47)** It already looks a little bit nicer.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=50)** Now, when you click on the menu and see this pop up with your choices, that part of it is not stylable with CSS.
>
> **[0:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=57)** The only way to style it is through JavaScript.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=59)** So the styles I'm showing are just the parts you see here on the page without clicking anything.
>
> **[1:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=66)** Going back to the CSS, I want to remove the default formatting for the dropdown.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=73)** So I'm going to change the appearance property to none, this requires fender prefixes.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=84)** So add all three of those, save and go back, and now this will remove all the formatting when I refresh, including the arrows on these at the top.
>
> **[1:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=94)** So, the arrows are gone, and any default formatting is gone.
>
> **[1:39](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=99)** And also removes the gradient in them.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=102)** Going back here to the CSS on line 15, I'm going to add background color of white, which will remove the gray background.
>
> **[1:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=110)** Go back here and refresh and now they're all white.
>
> **[1:53](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=113)** Going back to the CSS, so we removed the arrow using the appearance property, and I want to add my own arrow with an image.
>
> **[2:01](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=121)** So I want to apply this to every select element but not the ones that are multiple, because they shouldn't have an arrow.
>
> **[2:07](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=127)** So I'm going to do select colon not.
>
> **[2:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=131)** And then this is the tricky part, you need the regular parentheses, and inside them, square parentheses, and the word multiple.
>
> **[2:18](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=138)** So this selector will apply to any select element that does not have the multiple attribute.
>
> **[2:26](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=146)** On line 18, I'm going to do background colon URL, and then double-arrow.png is the name of my image file.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=157)** I want it aligned to the right, to the center going up and down, and not repeating.
>
> **[2:43](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=163)** And on the next line background size is 1em by 1em.
>
> **[2:49](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=169)** Save it and go back and refresh.
>
> **[2:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=171)** So just these two at the top get that arrow in there.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=176)** The only problem is the text overlaps the arrow, so we need to fix that.
>
> **[3:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=180)** Going back to the style, on line 20, we're going to do padding right of 1em.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=187)** That number should be whatever amount of space you need depending on your image.
>
> **[3:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=191)** Go back and refresh, and now there's no overlap.
>
> **[3:14](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=194)** Going back to our code, we're going to add some padding to all of the select menus.
>
> **[3:22](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=202)** 8px, 1em, 8px and 8px.
>
> **[3:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=208)** And save that.
>
> **[3:29](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=209)** And go back and refresh.
>
> **[3:30](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=210)** So now there's padding in all of them.
>
> **[3:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=214)** I also want to add some padding for each of the individual options in the multiple menus on the bottom.
>
> **[3:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=220)** So, I'm going to use option, and then do a style of padding, five pixels on line 26.
>
> **[3:48](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=228)** Save, go back and refresh, and now there's padding between all of the options.
>
> **[3:55](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=235)** So, next I'm going to add the background color.
>
> **[4:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=240)** On the select, it's background color, #fdebd0 is the color I'm using.
>
> **[4:07](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=247)** When I go back and refresh, it only applies to the two that are multiple here.
>
> **[4:12](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=252)** And the reason for that, is because here when I applied some styles to select, not multiple, that's more specific, and there's the background image there, so I need to add a background color there as well.
>
> **[4:26](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=266)** And now I refresh, and everything has a background color.
>
> **[4:30](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=270)** Next, I'm going to add a border.
>
> **[4:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=274)** 2px solid and #af601a, and I'm on line 26.
>
> **[4:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=281)** Refresh and now each of these menus has a border around it.
>
> **[4:45](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=285)** Next, I want to style the optgroups, and those are what you see in the fourth example here.
>
> **[4:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=291)** So, going back to the style, On the last line I'm going to add optgroup, and then the styles will be border, one pixel, dashed and #af601a, and then add some padding in there.
>
> **[5:10](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=310)** Five pixels, and go back and refresh.
>
> **[5:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=313)** And now, each optgroup in the bottom example has a border around it that's dashed.
>
> **[5:19](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=319)** So, those were some examples of how you can style select menus.
>
> **[5:22](https://www.linkedin.com/learning/html-css-creating-forms/styling-select?u=76281980&t=322)** Next, we'll look at how to style buttons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (5), next (5), [[HTML]] (1), [[JavaScript]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** css (5), html (1), url (1)
> **UI Navigation:** click on (1), dropdown (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Styling buttons
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=0)** - [Instructor] From the styling perspective, there are three types of buttons.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=4)** In this video, we're going to look at how to style two of these types, the button using an input element and a button using a button element.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=11)** There are also buttons that are on image.
>
> **[0:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=15)** The first type is using the input element.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=18)** You see here three different variations, the type of submit, type of reset, and type of button.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=25)** These three buttons work slightly differently, but they're styled exactly the same, so any styles you apply would affect them in the same way.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=32)** Then we also have three types of button using the button element.
>
> **[0:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=36)** Again, they're submit, reset, and button as their types.
>
> **[0:39](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=39)** And they again work slightly differently but any styles you apply would affect all three of these in the same way.
>
> **[0:46](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=46)** The third type of button is the image type of input.
>
> **[0:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=51)** Although this element also works as a button, it's styled very differently as an image, so you can just style it the same as you would any image.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=59)** So we'll just be looking at the first two types which are input buttons and button elements.
>
> **[1:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=66)** First we're going to start with a input button and a button element, and I'm going to put two of each on the page in separate divs so we can compare the not styled versions to when I add styles to them.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=77)** The default styles are different for the input element and the button element as you can see here.
>
> **[1:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=84)** In the code I already have set up a selector here to style the styled input and button elements.
>
> **[1:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=91)** The first thing I'm going to do is appearance: none and this requires the vendor prefixes.
>
> **[1:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=107)** Appearance: none, and I go back to the browser and refresh.
>
> **[1:52](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=112)** And you can see that that removed the default browser styles.
>
> **[1:55](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=115)** So not styled on the top is without the style added and on the bottom it's the style that I just added which was removing the appearance.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=125)** So now both the input element and the button element look the same.
>
> **[2:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=129)** They have a gray background that's not a gradient.
>
> **[2:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=131)** It removed the curved corners on the input element, added a grooved border, and it gave it more height.
>
> **[2:20](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=140)** So buttons look different in each browser and here you can see screenshots of each so you can compare them all at once.
>
> **[2:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=147)** On the left are the not styled versions.
>
> **[2:29](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=149)** You can already see that they're different in each browser.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=152)** And on the right, when I just add basic styles to them, they still look different in each browser.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=157)** So as you're styling buttons, you need to remember to test it in all the different browsers because the styles you see in one browser aren't necessarily going to work the same in every browser.
>
> **[2:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=167)** But if you put the extra work into making sure you test it back and forth, it might not be totally consistent, but at least you can have a button that looks good in every browser.
>
> **[2:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=177)** So going back to the CSS, I'm going to remove the appearance code that I just added and go back to the browser and refresh, and you can see that now there's no styles on there.
>
> **[3:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=189)** And there's a bunch of quirks about how buttons are styled, and I'm going to show you first by just adding a border of two pixels in blue, save, and go back and refresh.
>
> **[3:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=201)** So now you see on the bottom I added a blue border to both buttons which came through as expected, but it also changed the other button styles.
>
> **[3:29](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=209)** It made it a gray, taller, got rid of the rounded corners, all the same things that I did when I removed the appearance.
>
> **[3:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=217)** So that's kind of not what one would expect.
>
> **[3:39](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=219)** You'd expect the only thing that would change would be the border, but it turns out pretty much any time you add a style to a button, it will remove all the default styles as well.
>
> **[3:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=231)** So if I go back to the style sheet, instead of adding a border, I'm going to add a background color,
>
> **[4:02](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=242)** and it's on line 10.
>
> **[4:03](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=243)** Go back and refresh, and here I have the background color but again you can see it also removed the default styles even though I didn't specifically tell it to do that.
>
> **[4:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=255)** Going back to the styles, I'm going to remove the background color on line 10, replace it with a border radius of eight pixels, save, refresh.
>
> **[4:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=264)** Now it added the border radius and again removed the default styles, even though I didn't tell it to.
>
> **[4:29](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=269)** Now I'm going to go back again to the styles, and I'm going to add padding, but this time add it to both the styled and unstyled versions of the buttons.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=278)** Go back and refresh.
>
> **[4:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=280)** So you can see here, it added it to all of these except for the input element that's not styled.
>
> **[4:46](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=286)** So even among the two non-styled elements, the input element and the button element, only the button element actually applied the padding.
>
> **[4:54](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=294)** But on the styled versions of each, it applied the padding to both of them.
>
> **[4:58](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=298)** I'm going to go back to the style sheet, change the padding to margin, and it does apply margin consistently to all of them.
>
> **[5:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=306)** So at least that's one thing that it's consistent.
>
> **[5:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=309)** Going back to the style sheet, on the styled input and button, I'm going to add cursor: pointer, and what this is going to do is add a pointer when you hover over those buttons.
>
> **[5:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=324)** I'm going to go back and refresh and now on the styled versions you can see when I hover over each of these buttons, you see the arrow turns into a little hand.
>
> **[5:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=332)** It doesn't do that on the non-styled buttons.
>
> **[5:35](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=335)** So that's just a little addition that you can make to a form to make it more interesting.
>
> **[5:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=340)** Of course, this isn't something that you'd see on the touch screen.
>
> **[5:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=342)** It's only on browsers or on input devices where you can hover.
>
> **[5:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=347)** So going back to the HTML now, I can actually add styles within the text on a button element, and that's something that I can't do on an input element.
>
> **[5:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=357)** On the input element, the text is in the value attributes, it's unstyleable, but here on the button element it's actual text inside the button tags.
>
> **[6:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=366)** So I can add a span in here with another word and style the span, so now I have the word button and then word button in a span.
>
> **[6:16](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=376)** If I go back to the styles, I'm going to add a style for button, space, span, so that will be any span inside of a button, and add color red, and font-style of italic.
>
> **[6:30](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=390)** Save and go back and refresh.
>
> **[6:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=392)** So now you can see I've styled text inside of that button.
>
> **[6:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=396)** And again that's only possible on the button element and not on the input element.
>
> **[6:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=401)** Going back to the styles, I'm going to remove all of these styles that I've added so far.
>
> **[6:49](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=409)** And the next thing I'm going to do is look at the button states and that means does the button change when you hover over it or focus on it.
>
> **[6:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=417)** The first thing I'm going to look at is focus.
>
> **[7:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=420)** So when you tab between elements, this is what changes.
>
> **[7:02](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=422)** You probably tab in a form to get from one field to the next, and this is very important for users who use only a keyboard to navigate and are unable to use a mouse.
>
> **[7:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=433)** To style just the styled buttons, I'm going to do styled as ID, input, and then type="submit", and then :focus, because I only want to style what's in focus, and do a comma, and then do the same thing but change the input element with a button element.
>
> **[7:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=456)** So I'm styling both the button and input elements while they're in focus.
>
> **[7:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=461)** And the style I'm going to add, let's say border: 2px solid green, and go back and refresh.
>
> **[7:50](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=470)** And now when I start tabbing, I click the Tab key once.
>
> **[7:53](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=473)** I'm going to the first two buttons that are non-styled.
>
> **[7:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=477)** Now when I'm going to these two styled buttons with the Tab key, you can see the green border.
>
> **[8:02](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=482)** You also get that blue outline that's already showing with the buttons in focus.
>
> **[8:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=486)** But now I can add a border to also show it's in focus.
>
> **[8:10](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=490)** And of course, I can add any other style.
>
> **[8:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=491)** I could give it a different background color when it's in focus or anything else.
>
> **[8:16](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=496)** If I wanted to remove that blue glow, I'm going to go back to the style sheet and add outline:none, save and go back.
>
> **[8:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=507)** And now if I tab through, I just get the green border and not that blue outline.
>
> **[8:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=512)** Don't remove the outline unless you're replacing it with something else because then the keyboard users would not be able to tell when a field is in focus.
>
> **[8:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=520)** Going back to my styles, I want to now add styles for when one hovers over the buttons.
>
> **[8:48](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=528)** So I'm going to copy this whole selector from line 15, add it on line 19, and here on both of these where it says focus, I'm going to change it to hover, and give it a style, let's say a red border.
>
> **[9:08](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=548)** Go back and refresh and now when I hover over either of these, it gets a red border.
>
> **[9:15](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=555)** Going back to the styles, I'm going to add one more and that's for active.
>
> **[9:20](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=560)** So I'm going to copy this whole thing.
>
> **[9:23](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=563)** I'm going to replace hover with active, and give it, let's say, a background color of orange, and save and go back and refresh.
>
> **[9:40](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=580)** And active is as I'm clicking.
>
> **[9:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=581)** So right now I'm hovering over this button and right now I'm going to click the mouse, and as I click, you can see the background color changes to orange.
>
> **[9:51](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=591)** So that's just a few ways you can style buttons.
>
> **[9:54](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=594)** You can use many of the others CSS properties as well like gradient, background image, or box shadow, to make the buttons fit in with the theme of your website.
>
> **[10:01](https://www.linkedin.com/learning/html-css-creating-forms/styling-buttons?u=76281980&t=601)** Buttons are a little bit complicated, so you can also search online for a button generator which will help you select the options you want and turn them into CSS easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (3), [[Microsoft Word|Word]] (3), next (2), [[HTML]] (1), [[Search]] (1)
> **Cross-References:** go back to (6)
> **Env Vars:** css (3), html (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Styling pseudo-classes
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=0)** - [Instructor] A pseudo-class is a keyword that specifies a state of an element.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=4)** You can use it to apply styles to an element with that state.
>
> **[0:07](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=7)** There are several pseudo-classes you can use when styling forms.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=11)** The first are focus and active.
>
> **[0:14](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=14)** Focus is triggered when a user clicks on, tabs, or taps into a field, and active, when a user activates a field, such as by clicking on a button.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=24)** I'm going to look at applying some different pseudo-classes on this page.
>
> **[0:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=28)** So first we're going to try out focus and active.
>
> **[0:31](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=31)** We'll go to our CSS, and after the default styles, we're going to do input:focus, so the style'll apply to any input that's in focus.
>
> **[0:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=41)** And give it a background color.
>
> **[0:49](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=49)** And then do an input:active, which will apply to any field that is currently active.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=56)** And give that a background color, and I'm on line 13.
>
> **[1:01](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=61)** Save, go back to the browser, and now when I tab through the fields, you can see each time I tab to a new field, it gets the green background when it's in focus.
>
> **[1:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=73)** As I click in a field or as I click on a button, then it gets the red background color for active.
>
> **[1:20](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=80)** The next ones we'll look at are enabled and disabled.
>
> **[1:23](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=83)** So, the disabled attribute you can add to a given field if you don't want the user to complete it, and every other field is going to be enabled by default.
>
> **[1:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=92)** The default style is a disabled field will have a gray background.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=97)** So I'm going to remove the styles I just added, and then I'm going to go back to the HTML and make one of these fields disabled.
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=106)** So, for example, the name field, the first one.
>
> **[1:49](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=109)** On the input element, I'm going to add a disabled attribute in the input element on line 13, and save.
>
> **[1:56](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=116)** So when I go to the browser and refresh, you can't click into the Name element because it's disabled, but you can't see a visual distinction telling you it's disabled.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=125)** So I'm going to go to my styles, and do :disabled to style anything that's disabled on the page, And give it a background color of gray.
>
> **[2:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=141)** And refresh, and now it's gray, so it's very clear that that element is disabled.
>
> **[2:27](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=147)** So next we're going to look at the checked and selected pseudo-classes.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=152)** Checked is when an option in radio buttons or checkboxes has been selected, and the selected pseudo-class is when an option in a select menu has been checked.
>
> **[2:43](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=163)** So I'm going to go back to the HTML, remove the disabled right there, and save it.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=168)** And then go to the Styles and remove the disabled styles.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=172)** And now I'm going to add checked as a style.
>
> **[2:55](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=175)** So I'm going to do input, and then type="checkbox" and then :checked, I'm on line nine here, and then + label.
>
> **[3:09](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=189)** So I can't actually apply style to the checkbox, so I'm applying it to the label following the checkbox.
>
> **[3:14](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=194)** I'm going to give this a background color on line 10, and save, go back to the browser.
>
> **[3:25](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=205)** And refresh, and now when I check any of these checkboxes, you can see that there's a background color on the adjacent label.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=215)** And next is valid and invalid, which refers to when the requirements for field have been met.
>
> **[3:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=222)** So, this is whether you, say, added a range for the field, if you've added anything else or you're saying you want a certain data in the field, and the browser will check and let you know whether it's valid or invalid.
>
> **[3:55](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=235)** So I'm going to go back to the HTML, and you'll see that on line 15 I have a minimum and maximum between one and 10, so I'm going to add some styles for that field.
>
> **[4:05](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=245)** And delete the style I just added, and do input type="number", and then :valid, and then give that a border of green.
>
> **[4:21](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=261)** And then do input type equals number, and then :invalid, and then a red border.
>
> **[4:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=274)** And save that, and go back to the browser and refresh.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=278)** Now, it's already giving me the green border because it's valid.
>
> **[4:42](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=282)** I haven't entered in a number yet, but no number is a valid value.
>
> **[4:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=287)** If I type something in there that's valid, it stays green, but if I type something in there that's invalid, 11 is more than our range of one to 10, it immediately turns to red.
>
> **[4:57](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=297)** And next, we have in-range and out-of-range, and these work similarly when you set a range for a numeric field and the value is within the range.
>
> **[5:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=306)** So, valid and invalid work for other things like pattern or step, in-range and out-of-range only work for range.
>
> **[5:14](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=314)** So I'm going to go back to my styles, and instead of doing valid, I'm going to do in-range.
>
> **[5:19](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=319)** Instead of invalid I'm going to do out-of-range.
>
> **[5:24](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=324)** Save, and go back and refresh, and now the same thing.
>
> **[5:28](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=328)** If it's in the range, it's green, if it's out of the range, it's going to be red.
>
> **[5:34](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=334)** And the next are required and optional.
>
> **[5:36](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=336)** And these refer to whether the required attribute has been set on a field.
>
> **[5:41](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=341)** So I'm going to go to HTML and set required for the name.
>
> **[5:47](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=347)** And save, and then go to the CSS.
>
> **[5:52](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=352)** Delete these styles that we already added, and just do input:required, so any input with required attribute and give it a border that's purple.
>
> **[6:06](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=366)** Go back to the browser and refresh, and now we can see that the one element that's required has a purple border.
>
> **[6:13](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=373)** So, it's easy for me to see that it's required, but that may present problems for a colorblind person, so remember that if you're applying any styles to let people know the status of an element, a status of the field in the form, don't only do it with color, you need to use other styles as well.
>
> **[6:30](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=390)** So those are some ways that we can use pseudo-classes to style fields and forms.
>
> **[6:35](https://www.linkedin.com/learning/html-css-creating-forms/styling-pseudo-classes?u=76281980&t=395)** Now we're going to move onto form layout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), [[HTML]] (4), [[Forms]] (2), css (2), data (1)
> **UI Navigation:** go to (6), checkbox (3), click on (1)
> **Cross-References:** go back to (8)
> **Env Vars:** html (4), css (2)
> **Definitions:** is a  (3), refers to (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 5. Form Layout with CSS

[↑ Back to Table of Contents](#table-of-contents)

#### Small-screen layout for forms
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=0)** - [Presenter] Now we're going to look at how to lay out a simple form, in this case, an appointment request form.
>
> **[0:06](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=6)** Here is what it looks like without any styles added.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=9)** We just have fields at the top and below that the address is in a field set to kind of bring everything together, and then preferred time within a field set.
>
> **[0:18](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=18)** When you're deciding what order to put the fields in on a form remember that you can rearrange everything on the page using CSS, but people who are using screen readers will get the order that everything was coded in HTML.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=32)** So, think of how the form makes sense, the best order for all the fields, do that in the HTML, and then if you want to move things visually on the page, do that using CSS.
>
> **[0:45](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=45)** The code we have for this exercise, it starts out on line 13 with our heading, below that we have several fields.
>
> **[0:51](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=51)** Each field is within a div, which will make it easier to style them.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=56)** Scrolling down, we have the address in a field set and the check boxes within another field set at the bottom.
>
> **[1:04](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=64)** So when we're thinking about layout, we're making a responsive website with this form so we want to think from the narrowest screen width.
>
> **[1:12](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=72)** So first we're going to make our browser window as narrow as we can.
>
> **[1:15](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=75)** Unfortunately Chrome only goes as narrow as 400 pixels wide, but we want to make sure our design works in as low as 320 pixels wide, which are generally a narrow end for a phone.
>
> **[1:27](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=87)** So there's actually a trick to to do this.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=90)** If you do inspect to show the web tools right there, then you can actually make the webpage part of the screen narrower.
>
> **[1:39](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=99)** So I'm going to actually make that be 320 pixels wide, more or less.
>
> **[1:44](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=104)** So that way I can design this to fit really good on a 320 pixel phone screen.
>
> **[1:51](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=111)** So going back to the code, I'm going to look at the style sheet.
>
> **[1:54](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=114)** I have my default style at the top and the first thing I'm going to do is put the labels and inputs on separate lines, by giving the label a display of block.
>
> **[2:06](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=126)** Save, go back and refresh, and now the labels and fields are in separate lines.
>
> **[2:12](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=132)** However, the check boxes on the bottom should not be on separate lines.
>
> **[2:16](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=136)** So going to the code we're going to say, we're going to type input, and then type equals check box, and then do plus label and the adjacent sibling selector means this style will apply to any label immediately after that check box input, and then we're going to do display inline.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=157)** Save, go back and refresh, and now our check boxes are all on one line.
>
> **[2:42](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=162)** The next thing I'm going to do is remove the borders around the field sets.
>
> **[2:46](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=166)** Those are useful for people with screen readers because it's clear what fields go together, but for a visual user we don't necessarily need to see those on the page.
>
> **[2:58](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=178)** So the next line of CSS is field set, and then I'm going to give it a border width of zero,
>
> **[3:12](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=192)** and then a padding of zero.
>
> **[3:16](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=196)** Go back and refresh and now those lines around the field sets are gone.
>
> **[3:22](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=202)** So our input's are default width and we want to change them so there's enough room for the users to enter information.
>
> **[3:28](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=208)** So going back to the code, the last line of the CSS I'm going to do input, and then type equals text, input, type equals tell, and input, type equals email.
>
> **[3:47](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=227)** So I'm only targeting these inputs, cos I want to make sure I'm not doing the inputs that are check boxes.
>
> **[3:53](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=233)** And the style I'm going to apply is width of 90%.
>
> **[3:57](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=237)** Save, go back and refresh, and now all of those inputs are the full width of the page.
>
> **[4:04](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=244)** The only one I'm going to change is make the zip code narrower, because a zip code is never that many characters.
>
> **[4:11](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=251)** So on the next line of CSS, I'm going to do pound zip to target the id, and then do a max width of 10ms.
>
> **[4:20](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=260)** Save and refresh.
>
> **[4:23](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=263)** And the reason why I did max width instead of width is because if there's not enough room on the screen it could get narrower.
>
> **[4:30](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=270)** I'm only saying it can be no wider than 10ms.
>
> **[4:33](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=273)** Now we're going to add some white space between the fields.
>
> **[4:38](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=278)** So under the inputs, I'm going to do a margin of .2m, auto, .8ms, and auto.
>
> **[4:47](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=287)** And the top and the bottom I'm setting right there is .2ms and .8ms and the auto is right and left, because I don't want to change those.
>
> **[4:55](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=295)** So now the .2ms is the top, so above each input element there is a small space and then below each there's a large space.
>
> **[5:05](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=305)** We're doing that so the labels are close to the input elements.
>
> **[5:08](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=308)** You don't want the labels to be exactly in between the input elements because then it'll be harder for the user to see if they go with the one below it or the the one above it.
>
> **[5:18](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=318)** So next I'm going to add spacer on the select menu in the field set.
>
> **[5:21](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=321)** So I'm going to do select comma field set, and then give it the same margin as the previous one.
>
> **[5:32](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=332)** Save and go back and refresh.
>
> **[5:35](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=335)** And now there is spacer on those as well.
>
> **[5:39](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=339)** Next, I want to line up the legend text, it's actually indented just a tiny bit.
>
> **[5:45](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=345)** So on the last of CSS, I'm going to do legend, and then margin left, negative .1m, and then also make it bold.
>
> **[5:59](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=359)** Save and refresh.
>
> **[6:02](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=362)** So now we have a nice layout for a narrow screen.
>
> **[6:04](https://www.linkedin.com/learning/html-css-creating-forms/small-screen-layout-for-forms?u=76281980&t=364)** Next, we're going to look at how to change the layout for wider screens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** css (6), next (6), [[HTML]] (2), web (1)
> **CLI Commands:** make (8)
> **Env Vars:** css (6), html (2)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### Wide-screen layout for forms
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=0)** - [Narrator] We already created a layout for this form that works well for the narrowest screen widths.
>
> **[0:04](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=4)** Now we're going to use media queries to change the layout for wider screens.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=8)** Here's what our layout looks like at 400 pixels wide.
>
> **[0:12](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=12)** If I make the browser window wider, I can see that the input fields get very long.
>
> **[0:17](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=17)** They don't need to be that long so at some point I can add a media query and change the layout so that the labels are to the left of the input fields instead of above them.
>
> **[0:26](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=26)** To determine where I should make that media query go, I figure out where there's a good point at which it looks like there's enough space to do that.
>
> **[0:33](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=33)** So I'm going to make the browser window wider until I feel like maybe at about this point there's enough space to add the input fields next to the labels instead of below them.
>
> **[0:43](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=43)** To figure out what width I need to put my media query at, the best way to do that is to have a tool like [MQtest.io](https://MQtest.io) open in a separate tab of the same window.
>
> **[0:52](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=52)** This will tell me exactly how wide the window is at this point in time.
>
> **[0:56](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=56)** And it tells me it's about 35 ems wide.
>
> **[1:01](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=61)** So I'm going to go to the code and at the bottom of the style sheet I'm going to add a media query for 35 ems, @media (min-width: 35em)
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=77)** and the style I'm going to add is label and then display inline and save, go back to my page and refresh.
>
> **[1:30](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=90)** So now when it gets to exactly 35 ems wide the labels pop down to be beside the input fields.
>
> **[1:37](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=97)** But this doesn't quite work because I set these fields to be 90 percent wide so where there's long labels like number and street, it doesn't fit next to the label on the page.
>
> **[1:47](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=107)** So going back to my style sheet I'm going to go to the bottom and I'm actually going to go inside the media query because I want this style to apply only at the wider screen width and I'm going to do input type equals text, input type equals tel, input type equals email, and the style I'm going to add is width auto.
>
> **[2:19](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=139)** Go back and refresh and now they're next to each label.
>
> **[2:23](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=143)** So on the narrow screen the labels are above the inputs, when the screen is more than 35 ems wide they're next to them.
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=152)** So now I want the labels to be the same width, so that will allow the input fields to line up on the left.
>
> **[2:39](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=159)** So go in to the code, inside this media query I'm going to do label and then give it a width of 10 ems.
>
> **[2:49](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=169)** When I go back and refresh nothing happens and that's because they're inline so I can't give them a width.
>
> **[2:56](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=176)** So I also need to give the labels a display of inline-block.
>
> **[3:04](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=184)** And now the labels are all the same width.
>
> **[3:07](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=187)** I also want to give the inputs a width because now they're just the default width, but I can make them wider so there's more room for people to type.
>
> **[3:16](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=196)** So again inside of the media query I'm going to apply a style to the input type of text, type of tel, and type of email that I already typed, so on line 39 I'm going to do, instead of width-auto, I'm going to do width 55 percent, save and refresh.
>
> **[3:35](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=215)** And now they're a good width.
>
> **[3:37](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=217)** So I'm going from the narrow screen where the labels are above the inputs, to a wider screen where they're next to the inputs.
>
> **[3:44](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=224)** So that's just a simple layout that'll work well for a range of screen widths.
>
> **[3:48](https://www.linkedin.com/learning/html-css-creating-forms/wide-screen-layout-for-forms?u=76281980&t=228)** For very wide widths you might make additional layout changes but generally your form is going to be within the layout of your website's design so you're going to have additional limitations to fit with in there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (2)
> **URLs:** [mqtest.io](https://mqtest.io) (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Form labels
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=0)** - [Instructor] Labels on each of your form fields are key to making sure the user fills out the form properly.
>
> **[0:05](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=5)** The way you lay out the labels on the page can make a big difference.
>
> **[0:09](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=9)** For example, the label placement will often depend on the width of the screen.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=13)** At the narrow screen width you see here, on a responsive website, it makes sense to have the labels above each form field, so that the input elements can be as wide as possible.
>
> **[0:25](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=25)** On a wider screen you have more options.
>
> **[0:27](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=27)** Many forms have the labels on the left, like this, including the check-box labels at the bottom.
>
> **[0:33](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=33)** For long-form, this is usually the best option, because users can easily skim the labels on the left side of the screen.
>
> **[0:39](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=39)** If there is a lot of different inputs to fill out, the user likes to skim through them ahead of time to make sure that they have all the information they need.
>
> **[0:50](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=50)** The layout starts to have problems when the labels vary in length.
>
> **[0:53](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=53)** Here, we have some very long labels, like Best Number to Reach you, and short labels, like yes and no.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=59)** For the short labels, there's a lot of white space between the label and the input.
>
> **[1:02](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=62)** So, it may be hard to the users to match them up and make sure they are filling in the correct information.
>
> **[1:09](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=69)** Another option is to keep the labels on the left, but align them to the right, so that they're up against each input.
>
> **[1:15](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=75)** This makes it easier to match each label with the correct input, but it makes it harder to skim through the labels.
>
> **[1:20](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=80)** It can also look kind of messy, because they're not lined up on the left.
>
> **[1:26](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=86)** Putting the labels above each field means it doesn't matter how long or short each label is.
>
> **[1:31](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=91)** If you have one that is super long, you can even wrap it onto multiple lines.
>
> **[1:35](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=95)** The wrapping is especially useful if your website is being translated between multiple languages, and each label could vary greatly in length between languages.
>
> **[1:43](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=103)** This form may be faster for the user to complete, since their eyes only need to move down the page, and not back and forth.
>
> **[1:50](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=110)** However, it's hard for the user to scan the labels, since there are inputs separating them.
>
> **[1:54](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=114)** Generally, you should only do top labels on wider screen widths if there are only a few questions.
>
> **[2:01](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=121)** You can also put the labels on the right.
>
> **[2:03](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=123)** This is nice because they line up neatly, even if some labels are much longer than others.
>
> **[2:08](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=128)** However, it really only works on a form like this, where there are only a few input fields, they are all the same width, and they are not very wide.
>
> **[2:17](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=137)** On a form like this, where the inputs are different widths, and there are more inputs, it looks a lot more messy and will be more difficult for the user to figure out which label goes with which input.
>
> **[2:27](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=147)** There's not one right way to do labels, though, that will work with every form.
>
> **[2:31](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=151)** Generally, top labels work best for the narrow widths of your responsive site.
>
> **[2:35](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=155)** And left labels for the wider screen widths.
>
> **[2:37](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=157)** But, it depends too, on the contents of the form.
>
> **[2:41](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=161)** Another thing to think about, is what each label should say.
>
> **[2:44](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=164)** Generally, keep them simple and straightforward.
>
> **[2:47](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=167)** But, you should try to avoid unnecessary words.
>
> **[2:50](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=170)** In this form, not only is every label longer than necessary, but it's hard to scan through the labels since they all begin with the same word.
>
> **[2:58](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=178)** Also, try to avoid questions such as, what is your name?
>
> **[3:01](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=181)** Questions are generally longer and make labels harder to skim.
>
> **[3:05](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=185)** Sometimes, phrasing as a question is the only way to make sure that the user knows what you're asking for.
>
> **[3:11](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=191)** But, you should always try first, to find a non-question variant that makes sense.
>
> **[3:16](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=196)** Some forms use a colon after each label, like this.
>
> **[3:19](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=199)** It really doesn't matter if you include a colon, or not.
>
> **[3:22](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=202)** It's not necessary, but it doesn't make the form any more difficult to use, either.
>
> **[3:26](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=206)** But, if you do use colons, make sure that you are consistent in using them on every label and not just some of them.
>
> **[3:33](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=213)** So, we've seen some different choices for how to layout the labels on your page.
>
> **[3:37](https://www.linkedin.com/learning/html-css-creating-forms/form-labels?u=76281980&t=217)** And some tips on how to make them more effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (8), find (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### Placeholder attribute
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=0)** - [Narrator] A placeholder is a pseudo-element that allows you to display text inside a form field and disappears once the user has focus in the field.
>
> **[0:08](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=8)** It's meant to give the user a hint as to what should go in the field.
>
> **[0:11](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=11)** This is an example.
>
> **[0:12](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=12)** Here the placeholder lets the user know that the format of email@[example.com](https://example.com) is expected in that field.
>
> **[0:20](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=20)** In the code, you can see the placeholder attribute on line 22.
>
> **[0:24](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=24)** It's just "placeholder=" and then whatever text you wish to display.
>
> **[0:29](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=29)** By default, the placeholder appears as gray text.
>
> **[0:32](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=32)** The placeholder can be used on any fill-and-type input field, except for those that already have their own placeholder text, like date or time.
>
> **[0:40](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=40)** The placeholder doesn't need to match the rules for the input element.
>
> **[0:44](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=44)** For example, the zip code placeholder that you see here on this form has a word, even though there's a pattern restricting the field to digits.
>
> **[0:53](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=53)** Although placeholder text is very popular on websites lately, there are several accessibility and usability reasons why you should avoid it.
>
> **[0:59](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=59)** First, a user may look at this email input field and think that the field is already filled in.
>
> **[1:05](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=65)** Even if it seems obvious that what's in the field isn't a real email value, some users will simply skim past the field without even reading it at all.
>
> **[1:14](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=74)** Your eyes are visually drawn to empty fields.
>
> **[1:17](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=77)** Although the placeholder text here is gray, it's dark enough to look like a value is filled in.
>
> **[1:22](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=82)** You could try making the text a lighter shade of gray, but then users with low vision may not be able to see it.
>
> **[1:28](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=88)** Many uses of placeholder text on the web are just unnecessary.
>
> **[1:32](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=92)** It's common to do a placeholder like this for email format.
>
> **[1:36](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=96)** But how many people really don't know how to format their own email address?
>
> **[1:39](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=99)** That's just not something that people need help with.
>
> **[1:42](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=102)** Some web forms have a placeholder in every field, just because they can.
>
> **[1:46](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=106)** Basically then, you're just wasting user's time by making them read extra things as they're filling up the form.
>
> **[1:52](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=112)** If it's a situation where the field really needs more explanation, you should probably just include that information in the label.
>
> **[1:59](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=119)** That way, the explanation is easily available to all users.
>
> **[2:05](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=125)** One trend in web forms lately is to omit the labels entirely and use placeholders to label each field.
>
> **[2:11](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=131)** Visually, this offers some benefits as the form takes up much less room on the page and it looks cleaner.
>
> **[2:17](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=137)** But from a usability perspective, it can cause a lot of problems.
>
> **[2:21](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=141)** First, once I start typing in a field, the placeholder disappears.
>
> **[2:26](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=146)** Usually you can remember what you are supposed to enter, but what if you start typing and realize you aren't sure?
>
> **[2:32](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=152)** Did the placeholder say name or first name?
>
> **[2:34](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=154)** The only way to find out is to delete what I just typed and start over.
>
> **[2:39](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=159)** Second, after the user has filled out the form, she might want to go back and check to make sure she answered each question correctly, especially if it's a long or complicated form.
>
> **[2:48](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=168)** But if the placeholders are gone, there's no way to check each field.
>
> **[2:52](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=172)** If you have a very short form, it's probably not that bad from a usability perspective to do this sort of styling, but I highly recommend that you don't do it on a form of more than a few fields.
>
> **[3:03](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=183)** Although placeholder allows you to add an additional hint to an input field, it can cause usability issues.
>
> **[3:08](https://www.linkedin.com/learning/html-css-creating-forms/placeholder-attribute?u=76281980&t=188)** You should take care to avoid it unless it's really necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (3), [[Forms]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/html-css-creating-forms/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-css-creating-forms/next-steps?u=76281980&t=0)** - [Clarissa] Now that you've learned how to create a form with HTML, learned how to style and layout the form with CSS, and learned some tips on how to make sure your form provides a good user experience, you're ready to start creating forms on your own.
>
> **[0:13](https://www.linkedin.com/learning/html-css-creating-forms/next-steps?u=76281980&t=13)** I appreciate you taking the time to watch this course and I hope you enjoyed learning how to create forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[HTML]] (1), css (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** html (1), css (1)
> **CLI Commands:** make (1)
> **Speakers:** - [clarissa] (1)


## Instructor

- [[Clarissa Peterson]]

## Resources

- Exercise files available

## Skills Covered

- HTML
- Cascading Style Sheets (CSS)

## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML- Metadata in the Head]] | **7 of 11** | [[Building Great Forms with HTML and CSS]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[Building Great Forms with HTML and CSS]] — HTML, Cascading Style Sheets (CSS)
- [[HTML and CSS- Linking]] — HTML, Cascading Style Sheets (CSS)
- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)