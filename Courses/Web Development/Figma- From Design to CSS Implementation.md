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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Figma-%20From%20Design%20to%20CSS%20Implementation.md)

![Figma: From Design to CSS Implementation](https://media.licdn.com/dms/image/v2/D560DAQGqIodryoMLJg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687801954408?e=2147483647&amp;v=beta&amp;t=lBHAigFvvtSxMSVND5B6gT4znCRIZUZpmdc45s49geY)

# Figma: From Design to CSS Implementation

> You’ve created some great designs, but how can you turn them into code-ready assets that your developers can use? In this practical course, university professor Joseph Labrecque helps you understand what your Figma files need in order to translate well into “developer speak”. Learn how to define image export properties, as well as export and organize your images. Find out how to use the Inspect wo

> [LinkedIn Learning](https://www.linkedin.com/learning/figma-from-design-to-css-implementation) | 48m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Implementing CSS from your Figma designs](#implementing-css-from-your-figma-designs)
  - [Getting set up](#getting-set-up)
- [**1. Producing Image Assets**](#1-producing-image-assets) (3 videos)
  - [An overview of the design project](#an-overview-of-the-design-project)
  - [Defining image export properties](#defining-image-export-properties)
  - [Exporting and organizing images](#exporting-and-organizing-images)
- [**2. Translating CSS Rules**](#2-translating-css-rules) (4 videos)
  - [Using the Inspect workspace](#using-the-inspect-workspace)
  - [Documenting the project CSS](#documenting-the-project-css)
  - [Populating the design document](#populating-the-design-document)
  - [Defining a CSS document](#defining-a-css-document)
- [**3. Implementing CSS within HTML**](#3-implementing-css-within-html) (3 videos)
  - [Creating an HTML document](#creating-an-html-document)
  - [Replacing Figma elements for CSS](#replacing-figma-elements-for-css)
  - [Refining the design from Figma](#refining-the-design-from-figma)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementing CSS from your Figma designs](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/implementing-css-from-your-figma-designs?u=76281980&t=0)** - Tools like [[Figma (Software)|Figma]] are great for designing and [[Prototyping]] user experiences, but when it comes to translating these designs into workable code and content for the web, or other platforms, things get a bit more tricky. We'll use Figma's Inspect workspace to gather the CSS properties for visual documentation purposes before creating a CSS file to establish rules based upon the gathered properties. Finally, we'll establish an [[HTML]] file linked to the translated CSS and previously exported images, which contains markup representing our Figma design elements. With some additional refinements, we will produce a fully functional, responsive website landing page. I'm Joseph Labrecque. I invite you to join me in this [[LinkedIn]] Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Prototyping]] (1), [[HTML]] (1), [[LinkedIn]] (1)
> **Env Vars:** css (3), html (1)
> **Tools:** figma (3)
> **Speakers:** - tools (1)

#### [Getting set up](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=0)** - [Instructor] Before we get started, here are a few things to know about preparing for this course. The exercise files are available through [[GitHub]]. You can see them right here, and if you click on Code, you can download a ZIP of them if you don't know how to grab a repository. This is the main branch here, but you can choose whichever branch corresponds to the particular movie you're about to watch. So for instance, if I was going into chapter two, movie two, I could choose this branch, 0202, and this is going to be the starter state of the project for this branch. All the files will be within exercise files. And they'll include things like assets, [[Figma (Software)|Figma]] files, and sometimes even support files, which contain code that can be copied and used in your project as well. These support files will be called out in each movie when available. You should also have a set of software on hand to complete the course. Firstly, since this course deals with Figma, you should have a license for Figma. In addition, you're going to need some sort of a basic code editor. I'm using Visual Studio Code, but you can use whatever you like. Lastly, you'll need to be able to preview your code inside of a modern web browser,
>
> **[1:34](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/getting-set-up?u=76281980&t=94)** which shouldn't be a problem at this point. All right, with that, let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[GitHub]] (1)
> **Tools:** figma (3), github (1), visual studio (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** zip (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Producing Image Assets

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of the design project](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/an-overview-of-the-design-project?u=76281980&t=0)** - [Instructor] Before we start exporting any content from our [[Figma (Software)|Figma]] design file for use in other environments, we'll first take a few moments to get familiar with the design we'll be working on in this course. Here I have Big Star Collectibles Gift Claim as a project open in inside of Figma. We can see here that we have a Topnav frame, a Content frame, and a Footer frame. Each one of these frames is within our overall Landing Page - Gift Claim frame. Inside of the Topnav, we have a logo and also some text. Within our Content, we have a thank you and a rather large Offer set of images here that we can really export as a single graphic. At the very bottom, we have a Claim Button with a yellow background and black text. The only thing that resides inside of the Footer is some footer text. We're going to replicate this entire design in CSS. Let's have a look at the desktop preview. It's going to look very similar to what we see inside of Figma, and there it is. This simple landing page provides us with a number of interesting options when translating the design over to CSS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3)
> **Tools:** figma (3)
> **Env Vars:** css (2)
> **Analogies:** similar to (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Defining image export properties](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=0)** - [Instructor] [[Figma (Software)|Figma]] provides the ability to identify certain objects for exports and to define how these assets should be exported via export settings. This includes decisions around file format, size, naming, and more. Let's identify some of the assets here that would benefit from being exported as images. Right in the center, we have this large offer. This is like a hero banner, so it makes sense to export this complex set of objects inside of Figma into a single image file to be used on the website. Additionally, we have this little star up top. The star is a vector object right now and can be exported as SVG for CSS inclusion. Let's begin with the star. You can always drill down inside of Figma to select different objects. However, I find using the layers panel to be very beneficial, because you can just simply select each object that you want to export and it highlights for you. Ensure you are in the design workspace here in your panels and look towards the bottom. The last option is going to be export, and initially there aren't any exports set up. We'll have to add an export by clicking the plus button. Once we click that button, we can choose the size of the image, we can provide a suffix to the file name,
>
> **[1:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=97)** and rather importantly, we can choose the file format. So we have PNG, jpeg, SVG, and PDF. For the star, I'm going to use SVG or scalable vector graphics. Clicking on export settings, the small ellipse here, is going to bring us to a couple of additional settings, ignoring any layers that are overlapping our object and also including an ID attribute. We're just going to keep these at the default and close out that panel. Immediately below here we can actually see a little preview, and scrolling down, we can see a nice preview of our SVG star against a transparent background. If we wanted to, we could click export, logo mark big star white, and it would export the object according to these settings. We're not going to do that quite yet though, because we still have this object here, our offer, to set up. Once again through the layers panel, I'm going to choose this cluster of objects. We have the gift set, the logo gift. It's a bunch of text and images all together, and if we open these, we can see it is pretty complex. So with offer selected, once again in our design workspace, if we go down to export, we can click to add an export option.
>
> **[3:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-image-export-properties?u=76281980&t=194)** It defaults to a PNG file, which actually for this is going to work out perfectly. So we're going to keep this at PNG, and we'll keep it at the exact same size that it's been designed at, so 1X. The preview looks good against a transparent background, and we're all set. Now, if you ever wanted to remove any exports, you can always click the minus button to remove them, and you can even click the plus button multiple times to export objects with various settings and formats. Okay, with decisions made around what to export and which formats we want to export these assets to, we can continue on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3)
> **Env Vars:** svg (4), png (3), css (1), pdf (1)
> **Tools:** figma (3)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exporting and organizing images](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=0)** - [Instructor] With our desired elements marked up for export as assets, we'll now proceed to perform the export and ensure that our assets are organized in a folder for use in the CSS implementation to come. If you recall, choosing an object that we have marked for exports like the star, we can always click, export here, and the star will be exported in the folder of our choosing. I'm going to cancel out of that because there is an easier way. So we went ahead and actually pre-marked and preset a lot of the settings for couple of assets, both the star as an SVG, and this offer file here, this cluster of elements in the center. So we want to export both of these at once. To do that, we can go to file, export, and here we have our export dialogue that pops up. Inside of here we can untick things that we don't want to export, or tick things that we do, and it gives us the properties here. So we can see it's a PNG file, 880 in width, and here we have our SVG file, about 50 in width. And all we need to do here is hit export. And with both of those selected, it's going to then go ahead and simply use the names of those objects as file names when they're exported to our chosen location.
>
> **[1:38](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/exporting-and-organizing-images?u=76281980&t=98)** I'm exporting these to my exercise files. That looks fine. Let's go ahead and hit save. All right, we don't get any indicator from [[Figma (Software)|Figma]] that the export has happened, but of course we can check our local file system. So here is our exported Figma file, but we also have our SVG file, logo mark, big star white, and also our PNG file for the offer. I'm going to make some changes to these file names because, like I said, it's simply using the file names of the objects from Figma. Let's go ahead and just name that offer.png, with a lowercase O, and we'll just call this logomark.svg, pretty simple. Another thing I'm going to do is to create a new folder here. So if I right click and choose new folder, I can then call this assets, and I can move all of my assets that have been exported from Figma inside of my assets folder, and here they are. It's always a good idea to inspect your exported assets to ensure that they are what you intend them to be and to organize them as well. These actions will both ensure the remainder of the translation to CSS goes as smoothly as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4)
> **Env Vars:** svg (3), css (2), png (2)
> **Tools:** figma (4)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Translating CSS Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Inspect workspace](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=0)** - [Instructor] While the image assets we've exported are necessary for the design implementation, Cascading Style Sheet properties are what provides all the information about positioning and design properties of these assets in addition to all other elements that may be present in a design. Let's have a look at a couple of ways to expose these CSS properties. One thing we can always do is choose a particular object, like perhaps the button skin, and if we right click on this selection, we have the option to copy paste as, and copy this as CSS. Note that as an alternative to the export workflows we explored last time, we can also copy as SVG, or a PNG file. If we choose copy as CSS, it's going to copy the CSS into our clipboard which we can then paste in another document. [[Figma (Software)|Figma]] also has an inspect workspace. So we've been working in design. If I click on Inspect, we can see all of the different properties for this button. We can see its name is button, it's width, height, and positioning, top and left positioning which isn't entirely useful if you're doing certain designs in CSS. But it does give us some ideas.
>
> **[1:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=95)** We also have a corner radius of four pixels. We have the color information here, which we can copy with this little icon. We can also choose to view it as a different color mode, so maybe RGB, there we go. Generally for CSS, you're going to be using either RGBA like this or hex colors, but notice there is a CSS property here as well which defines things for CSS specifically. Code is probably the most important piece that we have here. Now, we can view the code as we see it here as code, or we can view it as a table. So if we choose table, we get the X and Y, width and height properties very similar to the properties up top here. So you're probably going to want to choose the actual code tab here, and we have a little comment that identifies it as button. It gives it a position attribute, a width, and a height, left and a bottom attribute similar to right here. We'll actually discard this when we get into the CSS and position things a bit more dynamically. Then we have our background color, and again the border radius. So a lot of these properties up top here are replicated as CSS rules. Note that if you are doing development for alternative platforms like Apple's iOS, or [[Google]]'s [[Android]],
>
> **[3:09](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/using-the-inspect-workspace?u=76281980&t=189)** you can actually get the boilerplate code for those platforms as well. But in this course we're going to examine CSS, so I'm going to keep it at CSS. As you can see, there are a number of useful ways in getting at the exposed CSS properties within your design file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1), [[Google]] (1), [[Android]] (1)
> **Env Vars:** css (13), svg (1), png (1), rgb (1), rgba (1)
> **UI Navigation:** click on (2)
> **Analogies:** similar to (2)
> **Warnings:** note that (2)
> **Code Identifiers:** ios (1)
> **Tools:** figma (1)
> **Exercise Files:** boilerplate (1)

#### [Documenting the project CSS](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=0)** - [Instructor] Before creating the actual CSS and [[HTML]] files for the translation from [[Figma (Software)|Figma]], it's good practice to document the necessary project elements, establishing identifiers in consideration of the visual elements upon which they're derived. We'll do this with our Figma design file, creating a visual design document for all steps moving forward. The first thing we need to do is create a new frame to hold all of this. So I'm going to [[Zoom]] out and use our frame tool to drag out a new frame right here. With that frame selected, let's go ahead and rename it to Design Document. Looking toward the design workspace, I want to make sure that the width here is wide enough. I'm going to set it at 1096. And for the height, let's choose 1280. I want to change the fill color so it's nice and dark, so I'm going to set that to a dark gray, a text code 19, 19, 19. And then I can reposition it right next to our landing page. We're going to be copying some
>
> **[1:32](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=92)** of the text attributes from the inspect workspace and placing them within our design document and then matching them up with visuals, so I'm going to need some text. Choosing the text tool, let's go ahead and drag in a text object that's about one half the width of our design document. Once again, inside of the design workspace, we'll change our text properties. [[Ubuntu]] is fine for this text. Bold is good. 35 is a bit too much. That's very large. So we're going to change that to 17. The line height at 125% will work, and I'm going to change my paragraph spacing to 10 just to give it a little more breathing room, and we can align the text to the top. I think that'll work just fine, and to the left, of course. The text fill is going to be white, which is going to stand out very well from the dark background. Let's go ahead now and copy some of these elements, in particular, the IDs from our content on the landing page and place them inside of our design document. Now, before we move on, I'm going to put in a little X here. That's going to act as a placeholder for when we are switching between documents. That'll go away soon enough, but you must have something inside of your text element in order for it to stick around.
>
> **[3:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/documenting-the-project-css?u=76281980&t=190)** All right, with our design document setup, all we need to do now is populate it, which we'll do in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (2), [[HTML]] (1), [[Zoom]] (1), [[Ubuntu]] (1)
> **Env Vars:** css (1), html (1)
> **Tools:** figma (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** setup (1)

#### [Populating the design document](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=0)** - [Instructor] With our design document established and a text element ready to accept our element identifiers, we'll now make use of the inspect workspace to gather these identifiers and create boilerplate CSS rules with matching visuals for identification purposes. The first thing we'll do is go to our landing page and identify things from top to bottom. So the first element we have is our top navigation. Let's select that and move over to the inspect workspace. Note, in our CSS code, we have a little comment identifier for Topnav. Let's go ahead and copy that. And then inside of our design document, we're going to add that in to the first line.
>
> **[0:55](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=55)** Just paste in Topnav. Since we're dealing with CSS, we're going to want to create a matching CSS rule, identifying a div inside of our [[HTML]] that will give an idea of Topnav. There's our first rule set up. Notice there are no CSS properties inside of it. It's just simply an identifier right now. Next, we'll gather some additional IDs from elements within Topnav, like the logo mark here. Again, copy that identifier.
>
> **[1:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=101)** Paste and create a CSS rule. We'll name this nav-logomark. I've included a text file named IDs.txt that you can copy and paste the [[Representational State Transfer (REST)|rest]] of these identifiers from if you don't want to go through this process too long. I'm going to paste in the rest from that document. And there we are. So we have our nav text, we have the content area, the offer image, offer text, the claim button, the footer itself, and the text within the footer. Let's go ahead and match these with the visuals now for our stakeholders. The first thing we need is the Topnav. So I'm going to select it, right click and choose Copy/Paste as, and we're going to copy this as a PNG. Going back to our design document, we can select it and then paste with Control or Command + V. And there we go. We've got our navigation element right here. And we can resize this just so people get the idea of exactly what it is they're dealing with when it comes to Topnav. So matching the visuals with that CSS. Feel free to give some more space as we go through this.
>
> **[3:21](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=201)** I'm going to put in a couple of lines here and there in order to have some nice breathing room for our content.
>
> **[3:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=215)** Next on the list is our logo mark. So this is just the star itself. We can select that in our layers panel. Once again, right click, Copy/Paste, Copy as PNG,
>
> **[3:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=233)** and then paste that into our design document.
>
> **[4:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=241)** We'll do the same thing for the navigation text.
>
> **[4:11](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=251)** And since these are just identifiers for stakeholders and for ourselves later on, we can always change the size of these. They don't have to be exact, it's just an identifier. Next is our content area, that should be pretty simple.
>
> **[4:35](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=275)** And you'll notice some of these are very large when they're pasted in, but thankfully we can transform them easy enough with the transform handles that are present on any image.
>
> **[4:53](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=293)** Our offer image is next.
>
> **[5:02](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=302)** The text, thank you for joining.
>
> **[5:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=314)** The claim button itself.
>
> **[5:24](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=324)** Finally, down to the footer. And of course, since we're copying these as PNGs, we don't have to worry about the text going weird on us when we resize the containers because they've all been changed to simple images.
>
> **[5:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=352)** And finally, the footer text, our last piece of visual.
>
> **[6:07](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/populating-the-design-document?u=76281980&t=367)** Now, if you wanted to be very picky, you could always select all the images we've placed in here, and then in the design workspace we can align those either all to their center, all to the left, whatever we want to do just to tidy this up a bit. But there we go, we now have our design document prepared and ready to translate into real CSS. Not only have we documented our CSS rules for this transition, but can also easily make this visual resource available to other project stakeholders like developers, clients, and even managers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[HTML]] (1)
> **Env Vars:** css (9), png (2), html (1)
> **CLI Commands:** make (2)
> **File Paths:** ids.txt (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** boilerplate (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Defining a CSS document](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=0)** - [Instructor] Now that we have all the assets and CSS properties gathered into one spot, we can more easily construct the actual CSS file to be used in this project. I'll be using Visual Studio Code as my editor, but you can use any web code editor you like. So let's shift from [[Figma (Software)|Figma]] over to Visual Studio Code. There we are. I've already opened up my Exercise Files folder here, and we have a folder for assets, which includes our logomark.svg that we exported. Our offer.png file. And we've also got the text file that includes all of the IDs that we used to create our design document. We can actually just copy these with a Command or Control+A. A Command or Control+C. So that we can place them easily into our CSS file. Additionally, of course, you can always copy them from your design document if you wish, but here they're more useful as identifiers. Let's create a new CSS file inside of our files. I'm going to click the New File icon. And we'll call this star.css. Our star.css file now exists
>
> **[1:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=97)** and has opened up inside of our code editor. Recall that I copied all of the rules from ids.txt, and now we can paste them using Command or Control+V into star.css. Here we have these basic empty rules for each one of these. I'm going to go ahead and just put in a carriage return between each one of these brackets in order to get them ready for CSS properties.
>
> **[2:19](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=139)** We can now make reference back to our Figma file in the Inspect workspace to gather some of these properties to populate the CSS rules. We'll jump back into Figma and select each particular element we want to copy CSS from. So the first one's going to be our Topnav. We'll go to Inspect. And inside of our CSS rules, we'll highlight those rules, copy them, find our Topnav rule in CSS, and paste them in. There we go. Now, as mentioned before, some of these rules are not going to be exactly applicable. But for now, we're just going to copy and paste them from Figma into our CSS. Next is our logomark, the little star up top here. And since we're already in the Inspect workspace, it makes it very easy to highlight, copy, and paste.
>
> **[4:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=240)** For the Claim button, we don't only need to grab the positioning information, but we also need the coloring. So make sure to grab it from button.
>
> **[4:23](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/defining-a-css-document?u=76281980&t=263)** And finally, our footer text. There we have it. Now that we have our actual CSS rules established in a real CSS file, these can be applied to an [[HTML]] document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4), [[HTML]] (1)
> **Env Vars:** css (12), html (1)
> **Tools:** figma (4), visual studio (2)
> **File Paths:** star.css (3), ids.txt (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** make sure to (1)


### 3. Implementing CSS within HTML

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating an HTML document](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=0)** - [Instructor] We now have everything we need from the [[Figma (Software)|Figma]] design document translated into an immediately usable form. We have a set of organized image assets and a CSS file, which includes the raw rules derived from Figma. We'll now establish a simple [[HTML]] file and link our CSS document to it. So inside of Visual Studio Code, let's go ahead and create a new file. We'll name it index.html. Here we are inside of the index.html file, and what we need is some boilerplate for our HTML. I've included such a boilerplate inside of this file here, 0301_code.txt. So we have our basic HTML template here. I'm going to copy and paste it right into our index.html document. Here we declare the doc type as HTML. We set the language to English, and then we have the head of the document established, the body, and then we close out the HTML. So inside of our head we have the character set assigned to UTF8. We have a title for Big Star Collectibles, some viewport settings, and description [[Metadata]] content. Next, we'll need to link our CSS file to this HTML file,
>
> **[1:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/creating-an-html-document?u=76281980&t=100)** and also include references to the fonts we want to use. If you recall from Figma, we are using [[Ubuntu]]. So let's go back to our text file here. And if you scroll down, you can see that we have font inclusion from [[Google]]. So I've already prepared this from Google Fonts. We also have a link to our style sheet, star.css. So let's go ahead and copy these link elements and place them within our head of the document. These first three links here all come directly from Google's font API, and we are grabbing the Ubuntu font. This last one points to our style sheet that we created, this is our CSS's file, star.css. Let's go ahead and view this in a web browser. Since we've not created any markup to represent the various elements from Figma yet, the CSS has little visual impact upon our HTML. Of course, we're going to fix this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (10), [[Figma (Software)|Figma]] (4), [[Google]] (3), [[Ubuntu]] (2), [[Metadata]] (1)
> **Env Vars:** html (7), css (5), utf8 (1), api (1)
> **File Paths:** index.html (3), star.css (2), 0301_code.txt (1)
> **Tools:** figma (4), visual studio (1)
> **Exercise Files:** boilerplate (2), template (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Replacing Figma elements for CSS](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=0)** - [Instructor] With our CSS and [[HTML]] files linked together, we must now ensure that the CSS rules we have created have matching elements within the HTML document so they can be applied in order to fulfill our design. We're going to be working in inside of the body of our CSS file. I'm going to be typing in all of the code but if you want to copy and paste I have this little 0302_code.txt file that you can use for this particular lesson. We're going to define our header navigation, our content body area, and our footer as top level divs with specific IDs. And I'm just going to duplicate this three times because I know that's what's needed. Okay. Now if we look back into our CSS document we can see we have a rule that is an identifier for top nav. We've got a rule for content and down below we have a rule for footer. These are the IDs that we're going to use in our index.html. Top nav for the first one, content for the second, and footer for the last.
>
> **[1:36](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=96)** All right, there's our basic structure. With these IDs inside of our HTML elements, these three CSS rules now apply to our actual visual content in HTML. Now inside of our top nav, let's add in another div and we're going to give this the ID. If we look up here, nav logo mark to hold our star.
>
> **[2:14](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=134)** We also need some text in there, big star collectibles. However, this is actually going to be more suitable for something like an H1 than a div. So heading level one, H1. It will get another ID, so we can point back to that CSS. And if we look under nav logo mark, we have nav text so that's what we're going to use. Nav-text. And then we'll close out our H1, but we also need to add in the text itself. So big star collectibles, just like that.
>
> **[3:01](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=181)** All right, our top nav elements are complete. Let's go into our content area. And in the content we're going to first need to include that image. So we have the offer.png image here. Let's use an IMG tag for an image element and set the ID equal to if we refer back inside of here. Offer dash image.
>
> **[3:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=220)** We'll set the source attribute for this equal to our assets folder, offer.png.
>
> **[3:52](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=232)** And then we close out that particular element. Now we're also going to have a bit of paragraph text in here which we can also give an ID, and that ID is going to be offer dash text. We can always refer back to our CSS file to see that. And then we also have our button, so claim dash button. The button is going to be a button element. It only makes sense to use those elements that are reserved for specific use cases. And we'll set the type here equal to button.
>
> **[4:41](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=281)** The label of the button can be included right here. Claim your gift. Now what about the offer text? The text itself is a little more lengthy. We can always grab it from here inside of the text file I've provided to make it a little easier to work with, but we can grab this from our [[Figma (Software)|Figma]] file as well. Notice we have a little line break right there little BR element. And there we go. The content is complete. Now inside of the footer, there's only one additional element, and that's another paragraph of text. We'll set the ID equal to text dash footer and then inside of here, let's go to our actual Figma document once again, and inside of the footer here we go. We've actually got all of this content inside of our inspect area that we can copy and paste.
>
> **[5:57](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=357)** From Figma directly into our HTML. Let's go ahead and add another space here though. We'll use a BR once again right after terms and before this.
>
> **[6:16](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/replacing-figma-elements-for-css?u=76281980&t=376)** There we have it. Our footer is also complete. Let's once again, view this in a web browser. Well, things are looking a bit closer to our Figma design but we still need to modify our CSS rules to refine the presentation and to actually make it responsive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[Figma (Software)|Figma]] (4)
> **Env Vars:** css (8), html (5), img (1)
> **Tools:** figma (4)
> **File Paths:** 0302_code.txt (1), index.html (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### [Refining the design from Figma](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=0)** - [Instructor] We will now complete the implementation from [[Figma (Software)|Figma]] to CSS by modifying the CSS rules in such a way that the final design remains true to what was visualized within Figma while also providing a responsive experience to the user. As we can see, as things currently are with just the raw direct content from Figma, things are not very responsive, and also the spacing's a little weird here and there, nothing resizes, and the star still needs to be implemented. We're going to change all this right now. So similar to before, I do have here, a 0303_code.txt file with all of the modifications that we need to make to our CSS document. We're going to use this as a guide. In Visual Studio Code, I'm going to add another window here so we can keep this code in view as we go through the content. So firstly, in our CSS, we don't have any rules right now, for the body of our document, which is lacking. We should have some rules defined, things like margins, padding, and a background color. So I'm going to copy this straight off from our code file and pop that body rule directly up top above top nav and everything else.
>
> **[1:37](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=97)** Looking at top nav next, right now, everything is positioned absolutely inside of there, which looks great but isn't that good for a responsive website. So what we're going to do is change some things a little bit. We're going to remove that position absolute, and change the height to 50 pixels. We'll remove all of this positioning data here, left, right and top, and replace that with a bit of padding. So this padding of 15 pixels is going to help us get to that original 80 height. The background color is completely fine as well as the box shadow, so we will leave those as they are. Let's move on to our logo mark. So remove the position absolute, property, and let's look at the width, the width is fine, the height is fine. However, we need to specify our SVG background image, we have not done that yet. Let's copy all of this background image content and also the float. And we do not need a background color of white. We do not need the left and top positioning. So we will paste over all of that. So our background image is going to logomark.svg. We do need to add in assets right there
>
> **[3:13](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=193)** or else it's not going to work. The background size is set to contain, so the full star will be visible inside of our element and we don't want it to repeat either. So we set the background repeat to no repeat and float left is going to allow us to use floats within here. So everything will be aligned to the left inside of the nav for the nav text. A lot of this is okay. We can see here the font family and size and so forth, that can all be the same. However, it's using some strange things here that we don't really need, such as the alignments and it being a flex container. We're not going to use that. So all we need to do is copy margin padding and just paste that in right above the font rules. There we go. Setting our margin, setting our padding, so things will be aligned in a particular way. That should do it for our text. Let's go back into the browser and have a look. Refresh. And there we are. That looks awesome. And it's completely responsive.
>
> **[4:49](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=289)** Onto our content area. There's a lot we can remove here. We don't need any positioning text or anything like that, so I'll remove all of that content. We do want everything to be aligned to the center, and we want some padding. So we'll copy those particular attributes over, text line center and patting on all sides of 50 pixels. Moving into our offer image, this can be greatly simplified. I want it to be responsive, I don't want any of this absolute positioning or absolute width. So we'll paste in max-width of 75%.
>
> **[5:42](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=342)** The offer text is the text that's just right underneath the offer image. Again, we want to remove any of this absolute positioning and absolute width. Let's get rid of it. We're going to replace that with some margin top left and right information.
>
> **[6:10](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=370)** And that should do it. Just cleaning up those extra lines from Figma. The last item in our content area is our claim button. The claim button actually has quite a few things going forward here but definitely we want to remove the absolute positioning. We can keep the background color, but let's put in some margin top.
>
> **[6:40](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=400)** We're going to set the border to none, set the color, do a number of additional things including defining the typeface. So let's paste that in there. And that should take care of our content. Let's go back and check and see how that is. Inside of the browser. Refresh. And there we go. It looks pretty good. Let's see what happens. Ah. Nicely responsive. Last thing to tackle is the footer. Notice we can remove a lot of this content. So I'm going to remove this absolute positioning rule, as I've been doing with everything. And it's associated position information here. And that's it for the footer. We've got a height, we've got a background color and that's it. For the actual text within our footer, instead of that paragraph, we want the font family information to stay the same. But I'm going to remove once more all of this absolute rules here, and set a margin of 16 pixels on all sides.
>
> **[8:08](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/refining-the-design-from-figma?u=76281980&t=488)** And then just clean up some of this extra stuff. Everything else can stay the same. And there we go. There is our completed CSS file. Let's take one more look over in the browser, and refresh. The raw CSS properties from Figma give us a great foundation to work with, but we must still put our experience into practice when translating a design to CSS in this way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (5)
> **Env Vars:** css (7), svg (1)
> **Tools:** figma (5), visual studio (1)
> **Analogies:** similar to (1), such as (1)
> **File Paths:** 0303_code.txt (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-from-design-to-css-implementation/what-s-next?u=76281980&t=0)** - [Joseph] With the course now concluded, you have a good idea of the workflow involved when translating a design file in [[Figma (Software)|Figma]] to the web via CSS and [[HTML]]. We first exported any image assets that we would need from our design documents into files. We then used the inspect workspace in Figma to gather the CSS properties from various visual design elements within our document. After visually documenting these elements and properties, we then created a proper CSS file and translated the raw properties into a set of valid CSS rules. We then established an HTML file and linked our CSS to it, along with the markup representing the various design elements. A few refinements later, and we have produced a fully functional responsive landing page based on the original Figma design document. I'm Joseph Labrecque and I hope you enjoyed working with Figma and CSS in this course. Thank you for joining me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4), [[HTML]] (2)
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