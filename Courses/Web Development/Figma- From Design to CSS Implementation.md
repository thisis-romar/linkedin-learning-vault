---
type: course
cssclasses:
  - lle-course
slug: figma-from-design-to-css-implementation
url: "https://www.linkedin.com/learning/figma-from-design-to-css-implementation"
duration_minutes: 48
duration: 48m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGqIodryoMLJg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687801954408?e=2147483647&amp;v=beta&amp;t=lBHAigFvvtSxMSVND5B6gT4znCRIZUZpmdc45s49geY"
linkedin_topic: Web Development
learning_paths:
  - '[[Design User Experiences with Figma]]'
prev_courses:
  - '[[Designing Microinteractions with Figma]]'
path_nav: '[{"path":"Design User Experiences with Figma","position":6,"total":6,"prev":"Designing Microinteractions with Figma","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Figma-%20From%20Design%20to%20CSS%20Implementation.md)

![Figma: From Design to CSS Implementation](https://media.licdn.com/dms/image/v2/D560DAQGqIodryoMLJg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687801954408?e=2147483647&amp;v=beta&amp;t=lBHAigFvvtSxMSVND5B6gT4znCRIZUZpmdc45s49geY)

# Figma: From Design to CSS Implementation

> You’ve created some great designs, but how can you turn them into code-ready assets that your developers can use? In this practical course, university professor Joseph Labrecque helps you understand what your Figma files need in order to translate well into “developer speak”. Learn how to define image export properties, as well as export and organize your images. Find out how to use the Inspect wo

> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation) | 48m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Producing Image Assets** (3 videos)
- **3. 2. Translating CSS Rules** (4 videos)
- **4. 3. Implementing CSS within HTML** (3 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Implementing CSS from your Figma designs
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=0)** - Tools like Figma are great for designing and prototyping user experiences, but when it comes to translating these designs into workable code and content for the web, or other platforms, things get a bit more tricky.
>
> **[0:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=13)** We'll use Figma's Inspect workspace to gather the CSS properties for visual documentation purposes before creating a CSS file to establish rules based upon the gathered properties.
>
> **[0:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=25)** Finally, we'll establish an HTML file linked to the translated CSS and previously exported images, which contains markup representing our Figma design elements.
>
> **[0:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=37)** With some additional refinements, we will produce a fully functional, responsive website landing page.
>
> **[0:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=43)** I'm Joseph Labrecque.
>
> **[0:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=45)** I invite you to join me in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (1)
> **Tools:** figma (3)
> **Code Keywords:** finally, (1)
> **Speakers:** - tools (1)

#### Getting set up
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=0)** - [Instructor] Before we get started, here are a few things to know about preparing for this course.
>
> **[0:05](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=5)** The exercise files are available through GitHub.
>
> **[0:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=10)** You can see them right here, and if you click on Code, you can download a ZIP of them if you don't know how to grab a repository.
>
> **[0:22](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=22)** This is the main branch here, but you can choose whichever branch corresponds to the particular movie you're about to watch.
>
> **[0:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=30)** So for instance, if I was going into chapter two, movie two, I could choose this branch, 0202, and this is going to be the starter state of the project for this branch.
>
> **[0:47](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=47)** All the files will be within exercise files.
>
> **[0:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=51)** And they'll include things like assets, Figma files, and sometimes even support files, which contain code that can be copied and used in your project as well.
>
> **[1:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=62)** These support files will be called out in each movie when available.
>
> **[1:06](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=66)** You should also have a set of software on hand to complete the course.
>
> **[1:12](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=72)** Firstly, since this course deals with Figma, you should have a license for Figma.
>
> **[1:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=78)** In addition, you're going to need some sort of a basic code editor.
>
> **[1:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=83)** I'm using Visual Studio Code, but you can use whatever you like.
>
> **[1:28](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=88)** Lastly, you'll need to be able to preview your code inside of a modern web browser, which shouldn't be a problem at this point.
>
> **[1:36](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=96)** All right, with that, let's get going.

> [!info]- Semantic Content
>
> **Tools:** figma (3), github (1), visual studio (1)
> **Exercise Files:** exercise files (2)
> **Code Keywords:** let (1)
> **Env Vars:** zip (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Producing Image Assets

#### An overview of the design project
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=0)** - [Instructor] Before we start exporting any content from our Figma design file for use in other environments, we'll first take a few moments to get familiar with the design we'll be working on in this course.
>
> **[0:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=13)** Here I have Big Star Collectibles Gift Claim as a project open in inside of Figma.
>
> **[0:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=19)** We can see here that we have a Topnav frame, a Content frame, and a Footer frame.
>
> **[0:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=27)** Each one of these frames is within our overall Landing Page - Gift Claim frame.
>
> **[0:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=33)** Inside of the Topnav, we have a logo and also some text.
>
> **[0:39](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=39)** Within our Content, we have a thank you and a rather large Offer set of images here that we can really export as a single graphic.
>
> **[0:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=51)** At the very bottom, we have a Claim Button with a yellow background and black text.
>
> **[0:58](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=58)** The only thing that resides inside of the Footer is some footer text.
>
> **[1:04](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=64)** We're going to replicate this entire design in CSS.
>
> **[1:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=68)** Let's have a look at the desktop preview.
>
> **[1:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=70)** It's going to look very similar to what we see inside of Figma, and there it is.
>
> **[1:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=79)** This simple landing page provides us with a number of interesting options when translating the design over to CSS.

> [!info]- Semantic Content
>
> **Tools:** figma (3)
> **Env Vars:** css (2)
> **Code Keywords:** let (1)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Defining image export properties
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=0)** - [Instructor] Figma provides the ability to identify certain objects for exports and to define how these assets should be exported via export settings.
>
> **[0:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=10)** This includes decisions around file format, size, naming, and more.
>
> **[0:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=17)** Let's identify some of the assets here that would benefit from being exported as images.
>
> **[0:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=24)** Right in the center, we have this large offer.
>
> **[0:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=27)** This is like a hero banner, so it makes sense to export this complex set of objects inside of Figma into a single image file to be used on the website.
>
> **[0:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=38)** Additionally, we have this little star up top.
>
> **[0:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=43)** The star is a vector object right now and can be exported as SVG for CSS inclusion.
>
> **[0:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=51)** Let's begin with the star.
>
> **[0:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=54)** You can always drill down inside of Figma to select different objects.
>
> **[0:59](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=59)** However, I find using the layers panel to be very beneficial, because you can just simply select each object that you want to export and it highlights for you.
>
> **[1:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=70)** Ensure you are in the design workspace here in your panels and look towards the bottom.
>
> **[1:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=76)** The last option is going to be export, and initially there aren't any exports set up.
>
> **[1:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=83)** We'll have to add an export by clicking the plus button.
>
> **[1:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=87)** Once we click that button, we can choose the size of the image, we can provide a suffix to the file name, and rather importantly, we can choose the file format.
>
> **[1:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=101)** So we have PNG, jpeg, SVG, and PDF.
>
> **[1:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=105)** For the star, I'm going to use SVG or scalable vector graphics.
>
> **[1:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=113)** Clicking on export settings, the small ellipse here, is going to bring us to a couple of additional settings, ignoring any layers that are overlapping our object and also including an ID attribute.
>
> **[2:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=128)** We're just going to keep these at the default and close out that panel.
>
> **[2:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=134)** Immediately below here we can actually see a little preview, and scrolling down, we can see a nice preview of our SVG star against a transparent background.
>
> **[2:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=147)** If we wanted to, we could click export, logo mark big star white, and it would export the object according to these settings.
>
> **[2:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=157)** We're not going to do that quite yet though, because we still have this object here, our offer, to set up.
>
> **[2:46](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=166)** Once again through the layers panel, I'm going to choose this cluster of objects.
>
> **[2:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=172)** We have the gift set, the logo gift.
>
> **[2:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=174)** It's a bunch of text and images all together, and if we open these, we can see it is pretty complex.
>
> **[3:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=182)** So with offer selected, once again in our design workspace, if we go down to export, we can click to add an export option.
>
> **[3:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=194)** It defaults to a PNG file, which actually for this is going to work out perfectly.
>
> **[3:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=200)** So we're going to keep this at PNG, and we'll keep it at the exact same size that it's been designed at, so 1X.
>
> **[3:31](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=211)** The preview looks good against a transparent background, and we're all set.
>
> **[3:36](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=216)** Now, if you ever wanted to remove any exports, you can always click the minus button to remove them, and you can even click the plus button multiple times to export objects with various settings and formats.
>
> **[3:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=232)** Okay, with decisions made around what to export and which formats we want to export these assets to, we can continue on to the next step.

> [!info]- Semantic Content
>
> **Env Vars:** svg (4), png (3), css (1), pdf (1)
> **Code Keywords:** export, (3), let (2), continue (1)
> **Tools:** figma (3)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Exporting and organizing images
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=0)** - [Instructor] With our desired elements marked up for export as assets, we'll now proceed to perform the export and ensure that our assets are organized in a folder for use in the CSS implementation to come.
>
> **[0:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=14)** If you recall, choosing an object that we have marked for exports like the star, we can always click, export here, and the star will be exported in the folder of our choosing.
>
> **[0:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=30)** I'm going to cancel out of that because there is an easier way.
>
> **[0:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=34)** So we went ahead and actually pre-marked and preset a lot of the settings for couple of assets, both the star as an SVG, and this offer file here, this cluster of elements in the center.
>
> **[0:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=51)** So we want to export both of these at once.
>
> **[0:55](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=55)** To do that, we can go to file, export, and here we have our export dialogue that pops up.
>
> **[1:03](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=63)** Inside of here we can untick things that we don't want to export, or tick things that we do, and it gives us the properties here.
>
> **[1:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=74)** So we can see it's a PNG file, 880 in width, and here we have our SVG file, about 50 in width.
>
> **[1:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=83)** And all we need to do here is hit export.
>
> **[1:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=86)** And with both of those selected, it's going to then go ahead and simply use the names of those objects as file names when they're exported to our chosen location.
>
> **[1:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=98)** I'm exporting these to my exercise files.
>
> **[1:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=100)** That looks fine.
>
> **[1:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=101)** Let's go ahead and hit save.
>
> **[1:44](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=104)** All right, we don't get any indicator from Figma that the export has happened, but of course we can check our local file system.
>
> **[1:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=114)** So here is our exported Figma file, but we also have our SVG file, logo mark, big star white, and also our PNG file for the offer.
>
> **[2:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=127)** I'm going to make some changes to these file names because, like I said, it's simply using the file names of the objects from Figma.
>
> **[2:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=136)** Let's go ahead and just name that offer.png, with a lowercase O, and we'll just call this logomark.svg, pretty simple.
>
> **[2:29](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=149)** Another thing I'm going to do is to create a new folder here.
>
> **[2:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=152)** So if I right click and choose new folder, I can then call this assets, and I can move all of my assets that have been exported from Figma inside of my assets folder, and here they are.
>
> **[2:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=173)** It's always a good idea to inspect your exported assets to ensure that they are what you intend them to be and to organize them as well.
>
> **[3:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=182)** These actions will both ensure the remainder of the translation to CSS goes as smoothly as possible.

> [!info]- Semantic Content
>
> **Env Vars:** svg (3), css (2), png (2)
> **Code Keywords:** export, (2), let (2), export. (1)
> **Tools:** figma (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Translating CSS Rules

#### Using the Inspect workspace
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=0)** - [Instructor] While the image assets we've exported are necessary for the design implementation, Cascading Style Sheet properties are what provides all the information about positioning and design properties of these assets in addition to all other elements that may be present in a design.
>
> **[0:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=18)** Let's have a look at a couple of ways to expose these CSS properties.
>
> **[0:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=23)** One thing we can always do is choose a particular object, like perhaps the button skin, and if we right click on this selection, we have the option to copy paste as, and copy this as CSS.
>
> **[0:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=41)** Note that as an alternative to the export workflows we explored last time, we can also copy as SVG, or a PNG file.
>
> **[0:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=52)** If we choose copy as CSS, it's going to copy the CSS into our clipboard which we can then paste in another document.
>
> **[1:04](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=64)** Figma also has an inspect workspace.
>
> **[1:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=68)** So we've been working in design.
>
> **[1:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=70)** If I click on Inspect, we can see all of the different properties for this button.
>
> **[1:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=78)** We can see its name is button, it's width, height, and positioning, top and left positioning which isn't entirely useful if you're doing certain designs in CSS.
>
> **[1:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=92)** But it does give us some ideas.
>
> **[1:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=95)** We also have a corner radius of four pixels.
>
> **[1:39](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=99)** We have the color information here, which we can copy with this little icon.
>
> **[1:46](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=106)** We can also choose to view it as a different color mode, so maybe RGB, there we go.
>
> **[1:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=114)** Generally for CSS, you're going to be using either RGBA like this or hex colors, but notice there is a CSS property here as well which defines things for CSS specifically.
>
> **[2:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=128)** Code is probably the most important piece that we have here.
>
> **[2:12](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=132)** Now, we can view the code as we see it here as code, or we can view it as a table.
>
> **[2:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=138)** So if we choose table, we get the X and Y, width and height properties very similar to the properties up top here.
>
> **[2:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=145)** So you're probably going to want to choose the actual code tab here, and we have a little comment that identifies it as button.
>
> **[2:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=155)** It gives it a position attribute, a width, and a height, left and a bottom attribute similar to right here.
>
> **[2:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=163)** We'll actually discard this when we get into the CSS and position things a bit more dynamically.
>
> **[2:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=169)** Then we have our background color, and again the border radius.
>
> **[2:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=172)** So a lot of these properties up top here are replicated as CSS rules.
>
> **[2:58](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=178)** Note that if you are doing development for alternative platforms like Apple's iOS, or Google's Android, you can actually get the boilerplate code for those platforms as well.
>
> **[3:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=196)** But in this course we're going to examine CSS, so I'm going to keep it at CSS.
>
> **[3:22](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=202)** As you can see, there are a number of useful ways in getting at the exposed CSS properties within your design file.

> [!info]- Semantic Content
>
> **Env Vars:** css (13), svg (1), png (1), rgb (1), rgba (1)
> **UI Navigation:** click on (2)
> **Analogies:** similar to (2)
> **Warnings:** note that (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** ios (1)
> **Tools:** figma (1)
> **Exercise Files:** boilerplate (1)

#### Documenting the project CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=0)** - [Instructor] Before creating the actual CSS and HTML files for the translation from Figma, it's good practice to document the necessary project elements, establishing identifiers in consideration of the visual elements upon which they're derived.
>
> **[0:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=17)** We'll do this with our Figma design file, creating a visual design document for all steps moving forward.
>
> **[0:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=24)** The first thing we need to do is create a new frame to hold all of this.
>
> **[0:29](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=29)** So I'm going to zoom out and use our frame tool to drag out a new frame right here.
>
> **[0:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=40)** With that frame selected, let's go ahead and rename it to Design Document.
>
> **[0:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=52)** Looking toward the design workspace, I want to make sure that the width here is wide enough.
>
> **[0:59](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=59)** I'm going to set it at 1096.
>
> **[1:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=62)** And for the height, let's choose 1280.
>
> **[1:09](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=69)** I want to change the fill color so it's nice and dark, so I'm going to set that to a dark gray, a text code 19, 19, 19.
>
> **[1:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=83)** And then I can reposition it right next to our landing page.
>
> **[1:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=90)** We're going to be copying some of the text attributes from the inspect workspace and placing them within our design document and then matching them up with visuals, so I'm going to need some text.
>
> **[1:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=103)** Choosing the text tool, let's go ahead and drag in a text object that's about one half the width of our design document.
>
> **[1:56](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=116)** Once again, inside of the design workspace, we'll change our text properties.
>
> **[2:03](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=123)** Ubuntu is fine for this text.
>
> **[2:06](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=126)** Bold is good.
>
> **[2:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=127)** 35 is a bit too much.
>
> **[2:09](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=129)** That's very large.
>
> **[2:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=131)** So we're going to change that to 17.
>
> **[2:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=134)** The line height at 125% will work, and I'm going to change my paragraph spacing to 10 just to give it a little more breathing room, and we can align the text to the top.
>
> **[2:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=146)** I think that'll work just fine, and to the left, of course.
>
> **[2:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=152)** The text fill is going to be white, which is going to stand out very well from the dark background.
>
> **[2:39](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=159)** Let's go ahead now and copy some of these elements, in particular, the IDs from our content on the landing page and place them inside of our design document.
>
> **[2:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=171)** Now, before we move on, I'm going to put in a little X here.
>
> **[2:55](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=175)** That's going to act as a placeholder for when we are switching between documents.
>
> **[3:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=182)** That'll go away soon enough, but you must have something inside of your text element in order for it to stick around.
>
> **[3:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=190)** All right, with our design document setup, all we need to do now is populate it, which we'll do in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1)
> **Env Vars:** css (1), html (1)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** setup (1)

#### Populating the design document
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=0)** - [Instructor] With our design document established and a text element ready to accept our element identifiers, we'll now make use of the inspect workspace to gather these identifiers and create boilerplate CSS rules with matching visuals for identification purposes.
>
> **[0:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=18)** The first thing we'll do is go to our landing page and identify things from top to bottom.
>
> **[0:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=24)** So the first element we have is our top navigation.
>
> **[0:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=27)** Let's select that and move over to the inspect workspace.
>
> **[0:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=34)** Note, in our CSS code, we have a little comment identifier for Topnav.
>
> **[0:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=40)** Let's go ahead and copy that.
>
> **[0:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=43)** And then inside of our design document, we're going to add that in to the first line.
>
> **[0:55](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=55)** Just paste in Topnav.
>
> **[0:58](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=58)** Since we're dealing with CSS, we're going to want to create a matching CSS rule, identifying a div inside of our HTML that will give an idea of Topnav.
>
> **[1:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=71)** There's our first rule set up.
>
> **[1:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=73)** Notice there are no CSS properties inside of it.
>
> **[1:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=76)** It's just simply an identifier right now.
>
> **[1:21](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=81)** Next, we'll gather some additional IDs from elements within Topnav, like the logo mark here.
>
> **[1:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=93)** Again, copy that identifier.
>
> **[1:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=101)** Paste and create a CSS rule.
>
> **[1:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=103)** We'll name this nav-logomark.
>
> **[1:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=109)** I've included a text file named IDs.txt that you can copy and paste the rest of these identifiers from if you don't want to go through this process too long.
>
> **[2:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=120)** I'm going to paste in the rest from that document.
>
> **[2:04](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=124)** And there we are.
>
> **[2:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=127)** So we have our nav text, we have the content area, the offer image, offer text, the claim button, the footer itself, and the text within the footer.
>
> **[2:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=145)** Let's go ahead and match these with the visuals now for our stakeholders.
>
> **[2:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=152)** The first thing we need is the Topnav.
>
> **[2:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=154)** So I'm going to select it, right click and choose Copy/Paste as, and we're going to copy this as a PNG.
>
> **[2:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=165)** Going back to our design document, we can select it and then paste with Control or Command + V.
>
> **[2:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=172)** And there we go.
>
> **[2:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=173)** We've got our navigation element right here.
>
> **[3:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=181)** And we can resize this just so people get the idea of exactly what it is they're dealing with when it comes to Topnav.
>
> **[3:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=190)** So matching the visuals with that CSS.
>
> **[3:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=198)** Feel free to give some more space as we go through this.
>
> **[3:21](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=201)** I'm going to put in a couple of lines here and there in order to have some nice breathing room for our content.
>
> **[3:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=215)** Next on the list is our logo mark.
>
> **[3:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=218)** So this is just the star itself.
>
> **[3:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=221)** We can select that in our layers panel.
>
> **[3:44](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=224)** Once again, right click, Copy/Paste, Copy as PNG,
>
> **[3:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=233)** and then paste that into our design document.
>
> **[4:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=241)** We'll do the same thing for the navigation text.
>
> **[4:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=251)** And since these are just identifiers for stakeholders and for ourselves later on, we can always change the size of these.
>
> **[4:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=260)** They don't have to be exact, it's just an identifier.
>
> **[4:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=265)** Next is our content area, that should be pretty simple.
>
> **[4:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=275)** And you'll notice some of these are very large when they're pasted in, but thankfully we can transform them easy enough with the transform handles that are present on any image.
>
> **[4:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=293)** Our offer image is next.
>
> **[5:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=302)** The text, thank you for joining.
>
> **[5:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=314)** The claim button itself.
>
> **[5:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=324)** Finally, down to the footer.
>
> **[5:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=330)** And of course, since we're copying these as PNGs, we don't have to worry about the text going weird on us when we resize the containers because they've all been changed to simple images.
>
> **[5:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=352)** And finally, the footer text, our last piece of visual.
>
> **[6:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=367)** Now, if you wanted to be very picky, you could always select all the images we've placed in here, and then in the design workspace we can align those either all to their center, all to the left, whatever we want to do just to tidy this up a bit.
>
> **[6:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=384)** But there we go, we now have our design document prepared and ready to translate into real CSS.
>
> **[6:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=393)** Not only have we documented our CSS rules for this transition, but can also easily make this visual resource available to other project stakeholders like developers, clients, and even managers.

> [!info]- Semantic Content
>
> **Env Vars:** css (9), png (2), html (1)
> **Code Keywords:** let (3), finally, (2), this. (1)
> **CLI Commands:** make (2)
> **File Paths:** ids.txt (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** boilerplate (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Defining a CSS document
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=0)** - [Instructor] Now that we have all the assets and CSS properties gathered into one spot, we can more easily construct the actual CSS file to be used in this project.
>
> **[0:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=11)** I'll be using Visual Studio Code as my editor, but you can use any web code editor you like.
>
> **[0:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=18)** So let's shift from Figma over to Visual Studio Code.
>
> **[0:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=25)** There we are.
>
> **[0:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=26)** I've already opened up my Exercise Files folder here, and we have a folder for assets, which includes our logomark.svg that we exported.
>
> **[0:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=37)** Our offer.png file.
>
> **[0:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=41)** And we've also got the text file that includes all of the IDs that we used to create our design document.
>
> **[0:50](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=50)** We can actually just copy these with a Command or Control+A.
>
> **[0:55](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=55)** A Command or Control+C.
>
> **[0:58](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=58)** So that we can place them easily into our CSS file.
>
> **[1:05](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=65)** Additionally, of course, you can always copy them from your design document if you wish, but here they're more useful as identifiers.
>
> **[1:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=79)** Let's create a new CSS file inside of our files.
>
> **[1:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=84)** I'm going to click the New File icon.
>
> **[1:29](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=89)** And we'll call this star.css.
>
> **[1:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=94)** Our star.css file now exists and has opened up inside of our code editor.
>
> **[1:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=100)** Recall that I copied all of the rules from ids.txt, and now we can paste them using Command or Control+V into star.css.
>
> **[1:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=113)** Here we have these basic empty rules for each one of these.
>
> **[2:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=120)** I'm going to go ahead and just put in a carriage return between each one of these brackets in order to get them ready for CSS properties.
>
> **[2:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=139)** We can now make reference back to our Figma file in the Inspect workspace to gather some of these properties to populate the CSS rules.
>
> **[2:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=150)** We'll jump back into Figma and select each particular element we want to copy CSS from.
>
> **[2:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=158)** So the first one's going to be our Topnav.
>
> **[2:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=161)** We'll go to Inspect.
>
> **[2:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=163)** And inside of our CSS rules, we'll highlight those rules, copy them, find our Topnav rule in CSS, and paste them in.
>
> **[3:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=180)** There we go.
>
> **[3:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=182)** Now, as mentioned before, some of these rules are not going to be exactly applicable.
>
> **[3:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=187)** But for now, we're just going to copy and paste them from Figma into our CSS.
>
> **[3:15](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=195)** Next is our logomark, the little star up top here.
>
> **[3:22](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=202)** And since we're already in the Inspect workspace, it makes it very easy to highlight, copy, and paste.
>
> **[4:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=240)** For the Claim button, we don't only need to grab the positioning information, but we also need the coloring.
>
> **[4:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=248)** So make sure to grab it from button.
>
> **[4:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=263)** And finally, our footer text.
>
> **[4:28](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=268)** There we have it.
>
> **[4:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=270)** Now that we have our actual CSS rules established in a real CSS file, these can be applied to an HTML document.

> [!info]- Semantic Content
>
> **Env Vars:** css (12), html (1)
> **Tools:** figma (4), visual studio (2)
> **File Paths:** star.css (3), ids.txt (1)
> **Code Keywords:** let (2), from. (1), finally, (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** make sure to (1)


### 4. 3. Implementing CSS within HTML

#### Creating an HTML document
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=0)** - [Instructor] We now have everything we need from the Figma design document translated into an immediately usable form.
>
> **[0:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=7)** We have a set of organized image assets and a CSS file, which includes the raw rules derived from Figma.
>
> **[0:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=16)** We'll now establish a simple HTML file and link our CSS document to it.
>
> **[0:22](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=22)** So inside of Visual Studio Code, let's go ahead and create a new file.
>
> **[0:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=30)** We'll name it index.html.
>
> **[0:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=34)** Here we are inside of the index.html file, and what we need is some boilerplate for our HTML.
>
> **[0:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=43)** I've included such a boilerplate inside of this file here, 0301_code.txt.
>
> **[0:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=53)** So we have our basic HTML template here.
>
> **[0:56](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=56)** I'm going to copy and paste it right into our index.html document.
>
> **[1:05](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=65)** Here we declare the doc type as HTML.
>
> **[1:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=68)** We set the language to English, and then we have the head of the document established, the body, and then we close out the HTML.
>
> **[1:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=79)** So inside of our head we have the character set assigned to UTF8.
>
> **[1:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=85)** We have a title for Big Star Collectibles, some viewport settings, and description metadata content.
>
> **[1:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=95)** Next, we'll need to link our CSS file to this HTML file, and also include references to the fonts we want to use.
>
> **[1:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=105)** If you recall from Figma, we are using Ubuntu.
>
> **[1:50](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=110)** So let's go back to our text file here.
>
> **[1:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=113)** And if you scroll down, you can see that we have font inclusion from Google.
>
> **[1:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=117)** So I've already prepared this from Google Fonts.
>
> **[2:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=120)** We also have a link to our style sheet, star.css.
>
> **[2:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=127)** So let's go ahead and copy these link elements and place them within our head of the document.
>
> **[2:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=136)** These first three links here all come directly from Google's font API, and we are grabbing the Ubuntu font.
>
> **[2:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=146)** This last one points to our style sheet that we created, this is our CSS's file, star.css.
>
> **[2:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=155)** Let's go ahead and view this in a web browser.
>
> **[2:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=160)** Since we've not created any markup to represent the various elements from Figma yet, the CSS has little visual impact upon our HTML.
>
> **[2:50](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=170)** Of course, we're going to fix this.

> [!info]- Semantic Content
>
> **Env Vars:** html (7), css (5), utf8 (1), api (1)
> **File Paths:** index.html (3), star.css (2), 0301_code.txt (1)
> **Code Keywords:** let (4), this. (1)
> **Tools:** figma (4), visual studio (1)
> **Exercise Files:** boilerplate (2), template (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Replacing Figma elements for CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=0)** - [Instructor] With our CSS and HTML files linked together, we must now ensure that the CSS rules we have created have matching elements within the HTML document so they can be applied in order to fulfill our design.
>
> **[0:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=16)** We're going to be working in inside of the body of our CSS file.
>
> **[0:21](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=21)** I'm going to be typing in all of the code but if you want to copy and paste I have this little 0302_code.txt file that you can use for this particular lesson.
>
> **[0:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=38)** We're going to define our header navigation, our content body area, and our footer as top level divs with specific IDs.
>
> **[0:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=52)** And I'm just going to duplicate this three times because I know that's what's needed.
>
> **[0:59](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=59)** Okay. Now if we look back into our CSS document we can see we have a rule that is an identifier for top nav.
>
> **[1:09](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=69)** We've got a rule for content and down below we have a rule for footer.
>
> **[1:15](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=75)** These are the IDs that we're going to use in our index.html.
>
> **[1:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=83)** Top nav for the first one, content for the second, and footer for the last.
>
> **[1:36](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=96)** All right, there's our basic structure.
>
> **[1:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=98)** With these IDs inside of our HTML elements, these three CSS rules now apply to our actual visual content in HTML.
>
> **[1:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=109)** Now inside of our top nav, let's add in another div and we're going to give this the ID.
>
> **[2:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=121)** If we look up here, nav logo mark to hold our star.
>
> **[2:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=134)** We also need some text in there, big star collectibles.
>
> **[2:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=138)** However, this is actually going to be more suitable for something like an H1 than a div.
>
> **[2:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=144)** So heading level one, H1.
>
> **[2:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=147)** It will get another ID, so we can point back to that CSS.
>
> **[2:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=152)** And if we look under nav logo mark, we have nav text so that's what we're going to use.
>
> **[2:42](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=162)** Nav-text.
>
> **[2:46](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=166)** And then we'll close out our H1, but we also need to add in the text itself.
>
> **[2:51](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=171)** So big star collectibles, just like that.
>
> **[3:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=181)** All right, our top nav elements are complete.
>
> **[3:05](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=185)** Let's go into our content area.
>
> **[3:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=188)** And in the content we're going to first need to include that image.
>
> **[3:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=193)** So we have the offer.png image here.
>
> **[3:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=198)** Let's use an IMG tag for an image element and set the ID equal to if we refer back inside of here.
>
> **[3:31](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=211)** Offer dash image.
>
> **[3:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=220)** We'll set the source attribute for this equal to our assets folder, offer.png.
>
> **[3:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=232)** And then we close out that particular element.
>
> **[3:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=237)** Now we're also going to have a bit of paragraph text in here which we can also give an ID, and that ID is going to be offer dash text.
>
> **[4:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=248)** We can always refer back to our CSS file to see that.
>
> **[4:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=253)** And then we also have our button, so claim dash button.
>
> **[4:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=260)** The button is going to be a button element.
>
> **[4:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=263)** It only makes sense to use those elements that are reserved for specific use cases.
>
> **[4:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=273)** And we'll set the type here equal to button.
>
> **[4:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=281)** The label of the button can be included right here.
>
> **[4:44](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=284)** Claim your gift.
>
> **[4:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=289)** Now what about the offer text?
>
> **[4:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=292)** The text itself is a little more lengthy.
>
> **[4:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=294)** We can always grab it from here inside of the text file I've provided to make it a little easier to work with, but we can grab this from our Figma file as well.
>
> **[5:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=310)** Notice we have a little line break right there little BR element.
>
> **[5:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=316)** And there we go.
>
> **[5:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=317)** The content is complete.
>
> **[5:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=320)** Now inside of the footer, there's only one additional element, and that's another paragraph of text.
>
> **[5:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=327)** We'll set the ID equal to text dash footer and then inside of here, let's go to our actual Figma document once again, and inside of the footer here we go.
>
> **[5:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=345)** We've actually got all of this content inside of our inspect area that we can copy and paste.
>
> **[5:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=357)** From Figma directly into our HTML.
>
> **[6:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=362)** Let's go ahead and add another space here though.
>
> **[6:06](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=366)** We'll use a BR once again right after terms and before this.
>
> **[6:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=376)** There we have it.
>
> **[6:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=377)** Our footer is also complete.
>
> **[6:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=380)** Let's once again, view this in a web browser.
>
> **[6:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=387)** Well, things are looking a bit closer to our Figma design but we still need to modify our CSS rules to refine the presentation and to actually make it responsive.

> [!info]- Semantic Content
>
> **Env Vars:** css (8), html (5), img (1)
> **Code Keywords:** let (6), this. (1)
> **Tools:** figma (4)
> **File Paths:** 0302_code.txt (1), index.html (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### Refining the design from Figma
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=0)** - [Instructor] We will now complete the implementation from Figma to CSS by modifying the CSS rules in such a way that the final design remains true to what was visualized within Figma while also providing a responsive experience to the user.
>
> **[0:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=18)** As we can see, as things currently are with just the raw direct content from Figma, things are not very responsive, and also the spacing's a little weird here and there, nothing resizes, and the star still needs to be implemented.
>
> **[0:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=37)** We're going to change all this right now.
>
> **[0:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=40)** So similar to before, I do have here, a 0303_code.txt file with all of the modifications that we need to make to our CSS document.
>
> **[0:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=54)** We're going to use this as a guide.
>
> **[0:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=57)** In Visual Studio Code, I'm going to add another window here so we can keep this code in view as we go through the content.
>
> **[1:06](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=66)** So firstly, in our CSS, we don't have any rules right now, for the body of our document, which is lacking.
>
> **[1:15](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=75)** We should have some rules defined, things like margins, padding, and a background color.
>
> **[1:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=80)** So I'm going to copy this straight off from our code file and pop that body rule directly up top above top nav and everything else.
>
> **[1:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=97)** Looking at top nav next, right now, everything is positioned absolutely inside of there, which looks great but isn't that good for a responsive website.
>
> **[1:48](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=108)** So what we're going to do is change some things a little bit.
>
> **[1:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=112)** We're going to remove that position absolute, and change the height to 50 pixels.
>
> **[2:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=120)** We'll remove all of this positioning data here, left, right and top, and replace that with a bit of padding.
>
> **[2:09](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=129)** So this padding of 15 pixels is going to help us get to that original 80 height.
>
> **[2:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=139)** The background color is completely fine as well as the box shadow, so we will leave those as they are.
>
> **[2:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=147)** Let's move on to our logo mark.
>
> **[2:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=154)** So remove the position absolute, property, and let's look at the width, the width is fine, the height is fine.
>
> **[2:42](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=162)** However, we need to specify our SVG background image, we have not done that yet.
>
> **[2:48](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=168)** Let's copy all of this background image content and also the float.
>
> **[2:56](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=176)** And we do not need a background color of white.
>
> **[2:59](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=179)** We do not need the left and top positioning.
>
> **[3:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=181)** So we will paste over all of that.
>
> **[3:05](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=185)** So our background image is going to logomark.svg.
>
> **[3:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=190)** We do need to add in assets right there or else it's not going to work.
>
> **[3:15](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=195)** The background size is set to contain, so the full star will be visible inside of our element and we don't want it to repeat either.
>
> **[3:25](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=205)** So we set the background repeat to no repeat and float left is going to allow us to use floats within here.
>
> **[3:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=214)** So everything will be aligned to the left inside of the nav for the nav text.
>
> **[3:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=221)** A lot of this is okay.
>
> **[3:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=223)** We can see here the font family and size and so forth, that can all be the same.
>
> **[3:50](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=230)** However, it's using some strange things here that we don't really need, such as the alignments and it being a flex container.
>
> **[4:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=241)** We're not going to use that.
>
> **[4:04](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=244)** So all we need to do is copy margin padding and just paste that in right above the font rules.
>
> **[4:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=258)** There we go.
>
> **[4:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=259)** Setting our margin, setting our padding, so things will be aligned in a particular way.
>
> **[4:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=266)** That should do it for our text.
>
> **[4:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=270)** Let's go back into the browser and have a look.
>
> **[4:36](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=276)** Refresh.
>
> **[4:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=278)** And there we are.
>
> **[4:39](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=279)** That looks awesome.
>
> **[4:43](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=283)** And it's completely responsive.
>
> **[4:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=289)** Onto our content area.
>
> **[4:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=292)** There's a lot we can remove here.
>
> **[4:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=293)** We don't need any positioning text or anything like that, so I'll remove all of that content.
>
> **[5:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=300)** We do want everything to be aligned to the center, and we want some padding.
>
> **[5:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=307)** So we'll copy those particular attributes over, text line center and patting on all sides of 50 pixels.
>
> **[5:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=320)** Moving into our offer image, this can be greatly simplified.
>
> **[5:26](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=326)** I want it to be responsive, I don't want any of this absolute positioning or absolute width.
>
> **[5:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=333)** So we'll paste in max-width of 75%.
>
> **[5:42](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=342)** The offer text is the text that's just right underneath the offer image.
>
> **[5:48](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=348)** Again, we want to remove any of this absolute positioning and absolute width.
>
> **[5:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=353)** Let's get rid of it.
>
> **[5:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=357)** We're going to replace that with some margin top left and right information.
>
> **[6:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=370)** And that should do it.
>
> **[6:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=371)** Just cleaning up those extra lines from Figma.
>
> **[6:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=376)** The last item in our content area is our claim button.
>
> **[6:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=380)** The claim button actually has quite a few things going forward here but definitely we want to remove the absolute positioning.
>
> **[6:30](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=390)** We can keep the background color, but let's put in some margin top.
>
> **[6:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=400)** We're going to set the border to none, set the color, do a number of additional things including defining the typeface.
>
> **[6:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=413)** So let's paste that in there.
>
> **[6:59](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=419)** And that should take care of our content.
>
> **[7:04](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=424)** Let's go back and check and see how that is.
>
> **[7:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=427)** Inside of the browser. Refresh.
>
> **[7:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=430)** And there we go. It looks pretty good.
>
> **[7:12](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=432)** Let's see what happens. Ah.
>
> **[7:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=436)** Nicely responsive.
>
> **[7:20](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=440)** Last thing to tackle is the footer.
>
> **[7:27](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=447)** Notice we can remove a lot of this content.
>
> **[7:29](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=449)** So I'm going to remove this absolute positioning rule, as I've been doing with everything.
>
> **[7:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=454)** And it's associated position information here.
>
> **[7:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=458)** And that's it for the footer.
>
> **[7:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=460)** We've got a height, we've got a background color and that's it.
>
> **[7:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=465)** For the actual text within our footer, instead of that paragraph, we want the font family information to stay the same.
>
> **[7:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=473)** But I'm going to remove once more all of this absolute rules here, and set a margin of 16 pixels on all sides.
>
> **[8:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=488)** And then just clean up some of this extra stuff.
>
> **[8:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=491)** Everything else can stay the same.
>
> **[8:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=497)** And there we go.
>
> **[8:18](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=498)** There is our completed CSS file.
>
> **[8:21](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=501)** Let's take one more look over in the browser, and refresh.
>
> **[8:33](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=513)** The raw CSS properties from Figma give us a great foundation to work with, but we must still put our experience into practice when translating a design to CSS in this way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), else. (1)
> **Env Vars:** css (7), svg (1)
> **Tools:** figma (5), visual studio (1)
> **Analogies:** similar to (1), such as (1)
> **File Paths:** 0303_code.txt (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 5. Conclusion

#### What's next?
> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=0)** - [Joseph] With the course now concluded, you have a good idea of the workflow involved when translating a design file in Figma to the web via CSS and HTML.
>
> **[0:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=11)** We first exported any image assets that we would need from our design documents into files.
>
> **[0:17](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=17)** We then used the inspect workspace in Figma to gather the CSS properties from various visual design elements within our document.
>
> **[0:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=24)** After visually documenting these elements and properties, we then created a proper CSS file and translated the raw properties into a set of valid CSS rules.
>
> **[0:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=37)** We then established an HTML file and linked our CSS to it, along with the markup representing the various design elements.
>
> **[0:45](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=45)** A few refinements later, and we have produced a fully functional responsive landing page based on the original Figma design document.
>
> **[0:54](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=54)** I'm Joseph Labrecque and I hope you enjoyed working with Figma and CSS in this course.
>
> **[1:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=61)** Thank you for joining me.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), html (2)
> **Tools:** figma (4)
> **Speakers:** - [joseph] (1)


## Instructor

- [[Joseph Labrecque]]

## Path Context

### In [[Design User Experiences with Figma]]
← [[Designing Microinteractions with Figma]] | **6 of 6**

## Appears In

- [[Design User Experiences with Figma]]

---

[↑ Back to top](#)