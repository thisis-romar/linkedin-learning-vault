---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: css-images-25655459
url: "https://www.linkedin.com/learning/css-images-25655459"
duration_minutes: 130
duration: 2h 10m
level: Advanced
updated: 4/29/2025
learners: 1577
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
github: "https://github.com/LinkedInLearning/css-images-5994321/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQH-hIPN1HlewA/learning-public-crop_675_1200/B4EZX9XECPGYAY-/0/1743712436683?e=2147483647&amp;v=beta&amp;t=vELs2qqjFGJPtDjF0qdPS-qL2O42aBUAw1YQ0n57LSE"
linkedin_topic: Web Development
learning_paths:
  - '[Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)'
prev_courses:
  - '[CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md)'
next_courses:
  - '[CSS- Animation](CSS-%20Animation.md)'
path_nav: '[{"path":"Learn CSS","position":5,"total":12,"prev":"CSS- Inheritance, Specificity, and the Cascade","next":"CSS- Animation"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Images.md)

![CSS: Images](https://media.licdn.com/dms/image/v2/D4E0DAQH-hIPN1HlewA/learning-public-crop_675_1200/B4EZX9XECPGYAY-/0/1743712436683?e=2147483647&amp;v=beta&amp;t=vELs2qqjFGJPtDjF0qdPS-qL2O42aBUAw1YQ0n57LSE)

# CSS: Images

> CSS is a toolkit for image manipulation. Whether you want to create distinctive visual effects or simply make the most of available bandwidth, the options for manipulating images in CSS will let you create reusable graphics solutions. In this course, designed for front-end web developers, instructor Carrie Dils covers essential CSS techniques for images, from basic fitting and positioning to advan

> [LinkedIn Learning](https://www.linkedin.com/learning/css-images-25655459) | 2h 10m | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Working with images in CSS](#working-with-images-in-css)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Basic Image Fitting and Positioning**](#1-basic-image-fitting-and-positioning) (7 videos)
  - [Modern image markup](#modern-image-markup)
  - [Removing space underneath an image](#removing-space-underneath-an-image)
  - [Fitting an image inside any container](#fitting-an-image-inside-any-container)
  - [Fitting and positioning a background image in a container](#fitting-and-positioning-a-background-image-in-a-container)
  - [Creating square and proportionate images](#creating-square-and-proportionate-images)
  - [Fitting an image inside a grid cell](#fitting-an-image-inside-a-grid-cell)
  - [Fitting an image inside a flexbox](#fitting-an-image-inside-a-flexbox)
- [**2. Clip Masks, Paths, and Custom Shapes**](#2-clip-masks-paths-and-custom-shapes) (9 videos)
  - [Rounded corners with border-radius](#rounded-corners-with-border-radius)
  - [Custom shapes using clip-path](#custom-shapes-using-clip-path)
  - [Creating circles and ellipses with clip-path](#creating-circles-and-ellipses-with-clip-path)
  - [Creating straight-lined shapes with polygon](#creating-straight-lined-shapes-with-polygon)
  - [Creating rectangles with clip-path](#creating-rectangles-with-clip-path)
  - [Creating custom paths with clip-path](#creating-custom-paths-with-clip-path)
  - [Creating custom shapes with SVG](#creating-custom-shapes-with-svg)
  - [Using an alternative to clip-path: mask-image](#using-an-alternative-to-clip-path-mask-image)
  - [Creating a text knockout effect with background-clip](#creating-a-text-knockout-effect-with-background-clip)
- [**3. Filtering and Blending**](#3-filtering-and-blending) (7 videos)
  - [Filtering and blending](#filtering-and-blending)
  - [Looking at the filter property](#looking-at-the-filter-property)
  - [Combining filters](#combining-filters)
  - [Using custom SVG filters](#using-custom-svg-filters)
  - [Mix-blend-mode](#mix-blend-mode)
  - [Experimenting with blend modes](#experimenting-with-blend-modes)
  - [Background-blend-mode](#background-blend-mode)
- [**4. Transformations and Animations**](#4-transformations-and-animations) (4 videos)
  - [Translate, scale, rotate, and manipulate perspective](#translate-scale-rotate-and-manipulate-perspective)
  - [Animated effects with transitions](#animated-effects-with-transitions)
  - [Keyframe animations for image effects](#keyframe-animations-for-image-effects)
  - [Important notes on using animations](#important-notes-on-using-animations)
- [**5. Image Optimization and Performance**](#5-image-optimization-and-performance) (3 videos)
  - [Delivering responsive images](#delivering-responsive-images)
  - [Optimizing performance](#optimizing-performance)
  - [Ensuring cross-browser compatibility](#ensuring-cross-browser-compatibility)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with images in CSS](https://www.linkedin.com/learning/css-images-25655459/working-with-images-in-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/working-with-images-in-css?u=76281980&t=0)** - Did you know that CSS gives you incredible control over images without ever touching the original files? You can crop, shape, and filter images with just a few lines of code. Want to turn a square image into a perfect circle? No problem. Add cool color effects, like duotone, gray scale, or high contrast? Okay. Blend images seamlessly with backgrounds or even create dynamic cover effects? CSS has you covered. In this course, we'll unlock the full potential of CSS as an image manipulation powerhouse, exploring techniques that used to require design software like Photoshop. My name is Carrie Dils, and I'd love for you to join me on this learning journey. So if you're ready to transform the way you work with images on the web, grab your pack. Let's hit the trail.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Speakers:** - did (1)

#### [What you should know](https://www.linkedin.com/learning/css-images-25655459/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, we're going to dive straight into different scenarios where we're using images in a webpage, and then using CSS to solve specific problems or to get a particular visual effect. That means I'm not going to spend a lot of time here on core concepts, so to get the most out of this course, you'll want to already have a solid understanding of the fundamentals of working with CSS and [HTML](../../Skills/Web%20Development/HTML.md). If you need a refresher, I'd highly recommend these courses from the library. Other than that, you'll need familiarity with using a code editor and browser developer tools for inspecting elements and/or styles. We'll also be using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) in this course. If you haven't used that before, no worries, I'll give you a primer for that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Env Vars:** css (2), html (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/css-images-25655459/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] For this course, we're using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) for the code samples that I share. In order to open up GitHub Codespaces for this project, there are two ways to get there. The first way is to go directly to the GitHub repository for this course and click this Code button. From there, go to the Codespaces tab, and here you could create a new codespace on the main branch, or you could access any codespaces that you previously created. Also, you could just say /codespaces on the end of that URL, and that would take you to a screen where you could see any codespaces that you've already created. The second way to get there is from the course homepage where you're watching this. You'll see a link to open up GitHub Codespaces. Unless you've previously created a codespace for this course, you'll see a button that says Create codespace, and in this instance, we're going to create it on the main branch. When you initially create the codespace, it'll take a few minutes to set up, but when you go back to this repository in the future, let's refresh, now, you can see this existing codespace that I've set up, and I could click this to restart it. So once this editor is finished loading, you can see all of the files in the folders for the project over here. Now, if you want to navigate to a specific lesson, you look at the corresponding folder, and those are all going to be in this source folder. So for example, chapter one, if you wanted to go
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/using-github-codespaces-with-this-course?u=76281980&t=93)** to the fifth lesson, that would be this 0105b, or 0105e. If you wanted to go to a lesson in the second chapter, you would just go to the corresponding number, and so forth. If you see a b or e at the end of a folder, b stands for beginning and e stands for end. So for example, this 0201b represents the starting state of the code example I use for this lesson, and 0201e represents the final state of the code for this lesson. Additionally, we can click this Go Live button, and this lets us view a live preview of our code in the browser. So we would navigate to Source and, for example, chapter one, 0101e, and there we could see the code for that particular lesson. The cool thing about live preview is that any changes that you make in the editor will be reflected in the browser in real time, giving you the opportunity to experiment as we move through the course. Now, when you click the Go Live button, if you get any notifications or even an error like I see here, you can just go ahead and ignore those. They're the byproduct of working in this live-server environment. So Codespaces offers a powerful and interactive way to follow along with this course and participate. I'd encourage you to use this feature and learn as you go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (4)
> **UI Navigation:** go to (3), navigate to (2)
> **Tools:** github (4)
> **Analogies:** for example (3)
> **Definitions:** stands for (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)


### 1. Basic Image Fitting and Positioning

[↑ Back to Table of Contents](#table-of-contents)

#### [Modern image markup](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=0)** - [Instructor] If you're like me and you've been working with [HTML](../../Skills/Web%20Development/HTML.md) for a while, you may take the image element for granted. You know what it does, but you don't really think that much about it. I'd like to kick off this course with a reminder of how the image element works and interacts with a browser. So here I've got a basic HTML document and I'm using the image element. Now this is an embedded or replaced element, which means the image doesn't live in the context of this HTML document, but rather it exists as a reference to the image. That reference is what we've defined here with this source attribute, and it's pointing to a folder, a couple of levels up called assets. And in that folder, there's another folder called images and there is our image. So we can see that actually here, assets, images, and our reference image. So when the browser is reading this document, it comes across this embedded element, makes a note to itself to leave a space for it, and then sticks whatever is at the end of the source attribute in that space. At this point, we haven't told the browser anything about how to handle this image, so it'll display in its intrinsic size. If we go over to the browser, we can see that we're loading this image, but the intrinsic size in this case is larger than our viewport, so we have to scroll horizontally and even vertically to see the entire image.
>
> **[1:34](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=94)** We've managed to place an image on a page, but it's not how I want it placed on the page. To do that, I need to give the browser more context. So the first thing I'm going to do is add a little CSS. Now I've already got a style sheet link to this HTML document, so I will open that up. So I'll start by making a new rule set for this image element, and I'll set the width to 100% and I'll set the height to auto. Technically, the height defaults to a value of auto, so you might not need it, but I like to go ahead and set it anyway in case there are styles coming in from other sources that might try to override that. So with the width set to 100% the browser will look at this and say, well, what's the width of the container holding the image and then set the width of the image to 100% of that container. So now if we look, let's refresh, we can see that the image is confined to the width of this container, and it's actually overflowing its height, which you can see with this pink border. The pink border is around the container and the image goes beyond that. I'm going to open up my dev tools so I can right click anywhere and say inspect, and let's find this image.
>
> **[3:07](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=187)** There it is. And then here I can see those styles that I set. So the height is auto and the width is 100%. And actually let me dock this over here on the side just to make a little more room. So just for fun, let's say that we want to set the height to 100% of its container, and now let's change the width to be auto. So in this case, you can see that we're confined within the height of the containing element, but we're actually extending beyond the width, and that's because of the intrinsic ratio of this image. You might use this approach in some cases, but generally this is sort of an anti-pattern. In responsive design layouts, we're typically scaling images based on the width of a container, not its height. So we'll reset that. So that's all we're actually going to do in the CSS here, but there are a couple of more things we need to do with this image tag. So if we head back to our index.html, we've got our source, but we haven't told the browser anything about this image other than where to find it. To make this image function properly in any context, we need to add alternative text to describe it. Why, well, browsers don't always display images.
>
> **[4:40](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=280)** This could be for a number of reasons. There are non-visual browsers, such as screen readers used by people with visual impairments. A user might opt to not display images either due to bandwidth issues or [Privacy](../../Skills/Data%20Science/Privacy.md) concerns, or maybe the image path is wrong. In these cases, the alternate or alt text is really important as that's what replaces images. All images must have this alt attribute, but not all images need to actually have text inside the alt attribute. If you leave this string empty like we see here, that signals that the image is not a vital part of content. Maybe it's decorative or a tracking pixel, or you may have described the image elsewhere using a caption or such. In this case, I do want to provide some alt text.
>
> **[5:39](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=339)** Now, this alt text is what will display any time the image is not displayed for whatever reason. So for example, let's just break the URL here, and if we go back and look, now we see our alt text displaying instead. The next thing we want to do here is tell the browser the proportions of the image. In this case, my image is 1800 pixels by 1200 pixels, so I'm going to set the width to 1800 and the height to 1200. And note that I don't need to add the pixel unit here, it's just the numeric value. When I set both of these values, the browser interprets this as the intrinsic size of the image, so both its actual height and width along with its aspect ratio. This is great for responsive design because the browser will build a space for this image that's the correct size and proportion even before the image loads. This helps with content shifting. Next, we can also control when the image is loaded by saying loaded equals get our quotes going. Now if we don't put anything in, then this will default to the browser's default loading behavior. If we say lazy, that means we hold off on loading the image until it's close to being needed in the viewport.
>
> **[7:13](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=433)** This is typically good for performance, or we could say loading is eager and this loads an image immediately, even if it's not in the viewport yet. Unless you have a use case for eager, you typically want to set the loading to lazy. So this width and height element, let the browser save space that's proportionally correct for the image so that even if that image isn't quite loaded by a timer user gets to it, that space is reserved and content won't jump around on the page. But with loading lazy, the image should be loading by the time that image comes into the viewport.
>
> **[7:56](https://www.linkedin.com/learning/css-images-25655459/modern-image-markup?u=76281980&t=476)** Perfect, so we now have an image element that's ready to go. There are some additional image attributes available to us, and we'll touch on those as needed later in the course. But with our source alt, our width height, and our loading all set, we're ready to go. And then we've got that small bit of CSS setting the default width to 100% of its container and the height set to auto. This is the baseline for modern images on the web and what you should follow when you add new images to a website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** html (4), css (3), url (1)
> **CLI Commands:** find (2), make (2)
> **Analogies:** such as (1), for example (1)
> **File Paths:** index.html (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)

#### [Removing space underneath an image](https://www.linkedin.com/learning/css-images-25655459/removing-space-underneath-an-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/removing-space-underneath-an-image?u=76281980&t=0)** - [Speaker] Have you ever seen an image on a site with a little bit of space underneath it and been baffled by where that space is coming from? I have, and it used to drive me nuts until I understood why it was happening. In this lesson, we'll take a look at what's happening, why it's happening, and how we can fix it. This weird behavior happens only when you add an image inside another container like we have here with this gray border, and you can see the small gap between the bottom of the image and that border. This isn't padding or margin or anything else, and no amount of setting padding or margin on the image or the container will solve this issue. So why is it happening? Well, all [HTML](../../Skills/Web%20Development/HTML.md) elements have a default display. Some elements such as a paragraph or a div or block level elements, while other elements such as links and images are in line by default. To demonstrate this, I'll go back to my HTML, and let me close this terminal just to give a little bit more room. And here's my image, and I'm just going to take that and I'm going to move it up somewhere into this paragraph tag. Go back and look. So now you can see what I mean by in line. The image is literally in line, placed in context with the other things in this paragraph. So imagine there's a line running underneath this text and you can see that the bottom of the image lines up with the bottom of the text.
>
> **[1:34](https://www.linkedin.com/learning/css-images-25655459/removing-space-underneath-an-image?u=76281980&t=94)** That's the clue as to what's happening. If we inspect the image, we can see that it's aligned with the bottom of this text. However, we have these two letters here, the G and the Y, and they have what are called descenders, and those are parts of the glyph that go below the baseline. So if we look at the box containing the text, we can see that it extends below the box that contains the image. Because the image is an inline element, what's happening is that we've basically got space left beneath the image for a descender. Now that seems really odd in the context of modern [Web Design](../../Skills/Web%20Development/Web%20Design.md) and the way that we use the images now, but when the image element first made its way into the HTML specification, the web was primarily text-based. The image element offered a way to include inline graphics such as icons or other small graphics along with the text. While that's not the way we use images now, that is the default behavior for images. So if we want to get around this pesky issue of that gap, we can do that by simply changing the display mode of the image to something other than in line. So first, let's go back to our HTML and get our image back below the paragraph again. And then if we go to our style sheet, we've already got a rule set for image here, so I'll just set it to display block.
>
> **[3:06](https://www.linkedin.com/learning/css-images-25655459/removing-space-underneath-an-image?u=76281980&t=186)** And let's refresh. So now we can see that the gap is gone and the bottom of the image sits flush with the bottom of its container. By changing the display to block, we eliminated space that was reserved for descenders. And just about every case by default, I've set up my image styles to include display, block, height, auto, and width 100%. Now here I've got it set at a smaller width just so it fits better for this lesson, but 100% is usually my default. Setting it up this way ensures there's never space on the bottom. And if you need a particular image to display in line for some reason, you could always override your default image style. Now you know what that mysterious gap beneath the image is and how you can fix it on your sites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Web Design](../../Skills/Web%20Development/Web%20Design.md) (1)
> **Env Vars:** html (4)
> **Analogies:** such as (3), imagine (1)
> **Cross-References:** go back to (2)
> **Documentation:** specification (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### [Fitting an image inside any container](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-any-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-any-container?u=76281980&t=0)** - [Instructor] When you're working with images, there will be times you need to fit an image within the size or proportion of a containing element, and that element may not always match the proportion of your image. How to solve for this may not be obvious. So as an example here, I've created a container with this pink border and inside of that I've got an image of our friendly dog. Because the image is bigger than the container, it's spilling or overflowing the container, but I want this image to fit within this pink box. The first thought might be, well, we've got this image set to 100% of the container it's in, so let's try setting the height to 100% as well. That makes the image fit. But you'll immediately notice that it squishes our image vertically, making the proportions all wrong. So that's not a solution. Another option might be to go to the parent container and set its overflow value to hidden. So we could say overflow: hidden; and that's telling the browser that if anything overflows this container, hide it. The result is clipping the image either along the bottom, as in this case, or the right hand side, and that would happen if our image was wider than the container. The problem with this approach is that, one, it only works if the image is bigger than the container. In other words, there's something to hide. And two, we don't have any control over how the image is cropped.
>
> **[1:32](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-any-container?u=76281980&t=92)** So this isn't a solution either. The solution we are looking for is the object-fit property. Object-fit Lets us control how an image or a video element should be resized to fit inside its container. We can tell it to fill, contain, cover, none, or scale down. Let's take a look at how this works. With object-fit, we apply it directly to the image element. And for it to work, the image needs to have a width and a height set. Now in this case, I've already got a width and a height set for the containing element and I could copy those values over and apply them to the image, but I don't really want to hard code that. Plus, if I ever change the size of the parent container, then I'd have to remember to change the values for the image and that's no good. So what I'll do instead is set the image to inherit the settings from its container. So I've got this custom class on my image called image and I'm going to set the height: inherit; and the width: inherit; and now it's inheriting the proportions of the parent container, but you can see that it gets squished. So the next step is to set object-fit: contain. The image is now scaled to fit inside the container, but it keeps its original aspect ratio. Now if the aspect ratio doesn't match its container, such as the case that we have here,
>
> **[3:04](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-any-container?u=76281980&t=184)** we get this letter boxing or pillar boxing where we get the extra space on either side. What's nice is that this is centered. We didn't have to set margin or create a layout. That's just what we got, but this may not be the look that you're going for. That brings us to object-fit cover. This sizes the image to maintain its aspect ratio while also filling the entire container. So if the image is wider than it is tall, which is the case here, it'll fill out the width of the image and then crop it along the top and the bottom. This automatically centers the image as well. A neat thing about cover, if we change the proportions of the containing element. So let's go back up here to this article and let's say the height is 90% of the viewport height and the width is 50% of the viewport width. You can see the image still fills out the available space. If you ever want an image to fill out the entire space, whatever that is, then object-fit is the solution for you. There are a couple of other options for object-fit that I'll show you. So let's go back to our image element and say object-fit: fill. Fill is the same as setting the width and height to 100%. It just fills out the available space without cropping any of the image. This means we're now breaking the proportions of the image. You probably won't find yourself using this much. Then there's the none value. And none just displays the image in its original size,
>
> **[4:40](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-any-container?u=76281980&t=280)** but you can see that it's cropping anything that falls outside of the container. The last value we have for object-fit is scale down. The scale down option will choose either none or contain, depending on the size of the image. If the image is smaller than its container, it'll pick none. If it's bigger, it'll pick contain to restrict the image. In most cases where you're using object-fit, you'll either choose scale down or cover depending on your needs. If you want to display the full image, you scale down because it'll always place the entire image inside the container. If you want the image to fill the container regardless of the size and you don't mind the centered cropping, use cover instead to take up the entire space.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Fitting and positioning a background image in a container](https://www.linkedin.com/learning/css-images-25655459/fitting-and-positioning-a-background-image-in-a-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/fitting-and-positioning-a-background-image-in-a-container?u=76281980&t=0)** - [Instructor] Background images have their own set of CSS properties available for controlling their display. If we look at the MDN Web Docs for background, we can see all of the available background properties, the values they accept and what they do. In this lesson, I'll cover the basics of using a background image and the most common properties you'll use. In this example I've got here, I've set a background image on a container by using the background-image property and then specifying an image source. When you do this, the image is automatically set at its full size. This image is actually bigger than its container, so what we're actually seeing is the top and left corner. And by default, anything outside of the container along the bottom or the right just gets chopped off. If we wanted to resize the background image to fit within the container, then we could use the background-size property. And this has two familiar values that you've already seen with object fit, contain and cover. Contain contains the background image within the container starting at that top left corner, and the image stays at its original aspect ratio. Now this particular image doesn't fill the entire container, so what you're seeing here is the background image repeating. The other option we have is to set the background size to cover.
>
> **[1:34](https://www.linkedin.com/learning/css-images-25655459/fitting-and-positioning-a-background-image-in-a-container?u=76281980&t=94)** This stretches the image as big as possible to fit within the container and then constricts it to the shortest side. So in this case, the image is wider than it is tall, so it's stretched to fit the height or the vertical axis, and then it's cropped on the left and right-hand side to fit within the container. This cover option will always fit the image inside the container, even if the container is a lot bigger than the image. Keep that in mind if you set a container to a proportion of the screen size, like I am here with this width, 75% of the viewport. If someone was looking at this on a really big monitor and this was a really tiny image, the result would be a very pixelated or blurry image, so just be mindful of that. So that's cover. Going back to contain. If you choose this option and you don't want the image to repeat, you have another property, and that is called background-repeat. Here, you can set it to no-repeat or you could set it to repeat only along the x or y-axis and some other options as well, but I'll just set it to no-repeat. Now, notice that the background size contain option works differently than the object fit contain option does. With object fit contain, the image was scaled down and then centered in the middle of the container. But for background images, the image is still anchored to that top left corner. If you want to change that, you can use the background-position property. This lets you position a background image
>
> **[3:08](https://www.linkedin.com/learning/css-images-25655459/fitting-and-positioning-a-background-image-in-a-container?u=76281980&t=188)** within the context of its parent container along either its x-axis or the y-axis or both. Let me show you how this works. So I'll create a new selector just to make this a little easier to read. I'll say background-position. And this can take either one or two of these predefined keywords: top, bottom, left, right, or center. Or you can put in numerical values for the x-axis and the y-axis respectively. As an experiment, I'll set the background-position to right, and now you can see the right edge of the image is aligned with the right edge of the container. If I change that to center, now you can see that it's centered and we have space on both the left and right sides. Top aligns it along the top, but you can't see that here because I've got the background-size set to contain. So let's unset background-size so that we're working with a full size image. And now you'll really be able to see the position of the image change within the context of this container. So if I were to say background position top left, that's our default, but I can change that to top right, and now the image is anchored on the top and the right. Or same thing, I could say bottom right
>
> **[4:42](https://www.linkedin.com/learning/css-images-25655459/fitting-and-positioning-a-background-image-in-a-container?u=76281980&t=282)** and anchor it along the bottom right side. In this case, the height is... Oops, I've still got background-size checked. No wonder it's not looking like it should. So if we uncheck that, there we go. So top left is our default, and then top right, we're moving to the top and right side of the image. And then if we go bottom left, now we're looking at the bottom leftmost of the image, or bottom right. So you can see that we can really move this image around. Those are just the predefined values, but I could also set a numeric value of a pixel or a percentage. If you're providing two number values, the first value applies to the x-axis and the second applies to the y. So I'll say 20% and 50%. So what this says is let's set the image at 20% off the left side, which is that horizontal axis, and at 50% centered along the vertical axis. And if we were to play around with these numbers, you can see the image move around. This is pretty handy as you can essentially crop your background image to display exactly how you'd like within a container.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), mdn (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Documentation:** mdn (1)
> **Speakers:** - [instructor] (1)

#### [Creating square and proportionate images](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=0)** - [Narrator] Now that you know how to fit and position an imagine in a container, let's look at the shape or proportions of the containers holding those images. A regular request you might get from a client or a designer is to create a proportional container that's responsive. For example, a container with an image that's always squared regardless of its width, to maybe it's always 16 by nine, or some other proportion. These are common [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) that you'll see for card layouts, project grid layouts, and that sort of thing. You could use a very specifically defined CSS flex box or grid to achieve this sort of thing or depending on your [HTML](../../Skills/Web%20Development/HTML.md) markup, you could use the aspect ratio property to define an aspect-ratio for a container and leverage that to set your images to a percentage or a proportion of that ratio. But I want to show you a hack you can use to get a proportionate image inside of a responsive container that works across all browsers. I'm calling it a hack because it involves adding a little bit of html that otherwise wouldn't need to be there. Otherwise, we're just using good ol CSS. But before we do that, let's address a little issue you may have already noticed. So, look at the top corners of these boxes here. Notice how the images have square corners while the card containers have rounded corners. This is a common issue you'll find any time you try to place something squared off inside of a container with rounded edges. It's a simple fix, really.
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=93)** All we need to do is set the overflow to hidden on the container. So, in this case, it's the card.
>
> **[1:48](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=108)** And that'll just crop the image corners for you. You don't have to do anything with the image itself. All right, now, back to the hack. So, let's look at the html for this. So, I've got my container and then, I have my card, and then there's this commented out class of ratio-box. I'm going to uncomment that. And we'll do it for this second card. Now, we have a div around each image with the class of ratio-box and this is the container that will make the magic happen. So, let's check it out. We'll refresh. And now, we can see that ratio box in our inspector here. So, right now, this box has a single CSS property and that's the width set to 100 percent of its parent container. And you can see that nothing actually looks different at this point than what we had before. And if we inspect the image here, we can see that we've got the width and height set to inherit from its parent container and the object fit is set to cover so that the image will always fit inside its container. Now, I'll start with the hack. The ratio box is already set to a width of 100 percent
>
> **[3:22](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=202)** of its surrounding container. The next thing I want to do is set its height to zero. That makes the image disappear, but that's actually what I want. So, next, I'll set the padding-top of this ratio box to the same height as the width of this container. So, I'll say padding-top is 100 percent. So, if I hover over this element in the inspector, you can see this square here. So, the square now has a width and a height that's the same. So far, our square is just full of padding, meaning all of the content outside of this box falls below it and we've set the height of this ratio box to zero, so we're not seeing the image. We can solve for that by changing the position of the ratio-box and also changing the position of the image. First, I'll take the ratio-box position and set it to relative. That doesn't change the box itself, but it allows us to position elements inside that box where we want. So now, we can take the image element and set its height to 100 percent, its width to 100 percent, and then we'll say position absolute. Currently, the image is positioned at the first available pixel to the top left side,
>
> **[4:57](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=297)** which is overlapping our content below it. To move it up on top of the padding, we can set the top position to zero. Now, we have a square image and this will always be square no matter what size the image is. So, the proportions are maintained and we have a responsive proportionate box that we can use to display an image. Okay, so, that's a square. What if we want it to be a different proportion? Let's say I want to make these images 16 by nine. In that case, let's go up to the ratio box again and adjust this padding-top since that's what's controlling our height. So, instead of saying padding-top equals 100 percent, which gives us 100 percent of the height, I'll set it to a proportion of the width. So, for this, I'm going to bust out the CSS calc function. So, I'll say calc 100 percent times and then I'll set up the proportion I want. So, if we want 16 by nine, the height would be nine of 16, so that means nine divided by 16. And looky there, 16 by nine images. If I want to make a different proportion, let's say four by three, so that would be three over four, and that's a standard photo image proportion.
>
> **[6:33](https://www.linkedin.com/learning/css-images-25655459/creating-square-and-proportionate-images?u=76281980&t=393)** You could set any proportion you want using this calc formula, by saying 100 percent times these divided values. You can use this to set any proportion you want with having to do the math yourself. CSS takes care of it for you. Now, you know how to create responsive boxes that can display perfectly proportioned images inside them. That gives you the freedom you need to essentially create any image layout you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Env Vars:** css (5)
> **CLI Commands:** make (3), find (1)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Fitting an image inside a grid cell](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-grid-cell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-grid-cell?u=76281980&t=0)** - [Instructor] Let's take a look at image sizing and positioning techniques within the context of modern layout tools. In this example, I have four images of differing sizes and proportions, and I want to display them in a 2x2 grid. So right now they're sitting inside this article container. It's got a class of content and it's four images just literally listed right after the other. So to create a 2x2 grid, I can start by using display grid on this container. So let me open up my style sheet for this lesson. So I'm in 01_06b and I'll open up style.css. And I've already got a rule here set up for content. So I'll just say display grid, and then I can define the grid. So I'll say grid template columns. And I want two columns. So I'm going to say repeat two, and each column should be 20 rem. Okay, so if we go look at that, here we can see our grid. Let's add a little gap. So I'll say gap is 1 rem. Now we can inspect the grid here by going to layout tools and selecting the overlay for this grid. And you can see there's a grid here with a row and column gap. And this works for the layout, but the images are not really fitting properly. That's because the images are trying to fit
>
> **[1:35](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-grid-cell?u=76281980&t=95)** within their containing element. So if we look at the image markup right now, you'll see in the CSS we have the images set to display block with the height set to auto and the width at 100%. This is the default setting we can use for all images on the web thanks to [Responsive Web Design](../../Skills/Web%20Development/Responsive%20Web%20Design.md). What we need now is for these images to stretch to fit within these grid cells so we can create a new rule. I'm going to create that here within content, and we only want to target images that are within this grid, and let's set their height to 100%. This makes the image take up the full available space inside each of the grid cells, but it also stretches the images and makes them look odd in a couple of cases. We can fix that by setting object fit to cover.
>
> **[2:34](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-grid-cell?u=76281980&t=154)** And there we go. We now have a uniform 2x2 grid where all of the images are scaled properly. Since they happen to be images where the animals are sort of centered in the frame, this looks decent, which is great. Now that we have this 2x2 layout, let's go back to the grid and start refining it. So let's say I want to have square boxes instead of those vertical boxes. We can do that by setting our grid template rows and we'll set them to the same size as the column. So we'll say repeat two at 20 rem, and now we have squares. Here's where the object position property comes into play, because now I need to shift the images to display properly, particularly for this kitty cat that's missing a head. So let's go back to our contents image role and we'll say object position and we'll set it to top. And that definitely helps with the cat, but these dogs get pushed down a little far in the frame. So instead of setting object position for all of these images universally, in this case let's just add a rule that targets this second image with the cat and play with that object position property. So we could add a CSS class to this particular image or target it with the nth of type selector,
>
> **[4:07](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-grid-cell?u=76281980&t=247)** and I think that's what I'll do. So let me get rid of that. We'll say nth of type two and there, let's try that object position top. And there we go. That looks better. Of course, you could work with each of these images individually to get the optimal look, but as you can see, creating grids like this and auto-filling the images into these individual cells makes it very easy to work with images in a grid layout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsive Web Design](../../Skills/Web%20Development/Responsive%20Web%20Design.md) (1)
> **CLI Commands:** cat (3)
> **Env Vars:** css (2)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **File Paths:** style.css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Fitting an image inside a flexbox](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=0)** - [Speaker] In this lesson, we'll take a look at using images in a flex box. I'll show you two ways. First, I'll show you an example using images as direct descendants of the flex container. And then I'll show you an example for a more common scenario where you're placing images inside a flex item instead of having it actually be a flex item. So to start here, we have four images with different proportions and sizes, and I want to display them in a horizontal line. So four images across. To do that, I'll select the element that contains these images. So this article with the class content, and you can see the images as direct descendants here. And we want to set this to display flex.
>
> **[0:50](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=50)** This creates a flexible box, and each of these images is a direct descendant, which is also called a flex item. I want to do a quick sidebar here in highlighted difference of something you might be seeing on your screen that you don't see on mine. So if I go look at the default styles applied to the images, I've got this responsive setup here with the height set to auto and the width set to 100%. Let me unset this width. And now we're defaulting to the intrinsic size of these images, which they are huge. And we actually get this horizontal scroll bar and we get a vertical scroll bar too 'cause it's not all fitting into the viewport. I'm using Firefox. But if you're following along using a chromium-based browser, Safari, or even a different version of Firefox, this may be what your screen looks like. So why the exact same code looks different in different browsers? Well, welcome to browser discrepancies. Let me show you why I think this is happening. So if we go look at the layout tab, you'll see that it's showing me this is indeed a flex item, and the flex shrink property is set to one. Now, that's the default value for flex shrink, but I didn't specify that. However, it's the way Firefox is choosing to render this. It actually looks better out the gate than this alternative that we're looking at now.
>
> **[2:23](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=143)** But if you're seeing unexpected results, I wanted to call that out. Now, regardless of what browser you're using, we want to use the exact same approach here so that it's consistent across the board. What we want to do is set a width for each of these images and then let the flex box scale based on the image width. So let me change this back to 100%. So it's the way it was, and we'll come up here to content image and just add width and say 25%. And, of course, in this view, it doesn't look like anything changes. But if your screen looked like mine previously did, then this is what you would be seeing now. So here, I want to call out one way that flex is different from grid. By default, flexbox creates equal height columns that scale its child elements to 100% of the height of the flex container. With grid, the items are not scaled automatically. We can change this by changing the properties of the flexbox, but the problem here isn't that flexbox is doing something weird, it's actually behaving as intended. It's that we're placing these images as flex items within this flexbox. And if we go back and look at the CSS for our image element here, we've got the height set to auto. When we do that, the image will automatically be stretched to the height of its container, and as a result, we get these ugly stretched images. Now that we know what the problem is, it's easy to fix. So we want to go to each of these images and use object fit
>
> **[3:59](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=239)** and set it to cover. Now the images fill-out the available space of their containers and everything looks good. You could also use the same technique to set them to scale down. And you'll notice now the images are displayed in their intrinsic proportions and they're centered vertically in their containers. This is simple and it works, but in a real-world scenario, you're probably not setting up a flex container like this where you just have a container and then a set of images. The more likely scenario is that the image will sit inside of another element, like maybe a card or something. If we look at our markup here, I've added a figure element around each image so that the figure element will now become the flex item. So let me open this file up in the editor. So a 1_07 in index. Okay, so let's uncomment each of these figures, I'll save that. And then previously, I was just adding styles via the browser inspector. So let's go ahead and open up our style sheet
>
> **[5:31](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=331)** and get those added there. So on our content, that was our flex container. So we had that set to display flex. And then on the individual images, we had the object fit set to cover, and the width was 25%. Okay, so let's save that and refresh. Okay, so if we look here, we've still got our article with the class content. This is our flex container, and this time, we're flexing the figure element and the figures don't have intrinsic sizes. So as a result, we just get a flexbox with four columns that are just displayed in the available space. Let me turn on the flexbox overlay. So it's a little easier to see there. Now my images aren't filling-up the available space here because I had them set to a width of 25% for the previous example. So let me drill down, find that, and let's get rid of that. And then the next thing I want to do is get rid of all of this white space that's caused by default browser styling of the figure element. So figure elements just have a lot of margin around them by default. So unless you've got a reset set up or otherwise, overriding it, you may see that space too. So I'll just go to the figure element and add margin is zero. There we go. You'll notice now because of the size of these images, each of these columns have a different width,
>
> **[7:04](https://www.linkedin.com/learning/css-images-25655459/fitting-an-image-inside-a-flexbox?u=76281980&t=424)** which might not be what you want. So to fix that, I need to control the width of the containing element, which is the figure element. So let's go ahead and set this to a width of 25%. And now our columns are equal widths. The images are scaled inside their respective figure elements, and then we get images that are different heights because they have different proportions. But now, these images are working in the context of their individual containers, just like they were in the beginning of the lesson. And we already know how to solve for this. So we're going to go to the image element and change its height property to 100%. That way, it fills-out its container, and then we keep this object fit set to cover. Again, we get the same result only this time, we're working with flex items that contain images inside them. This is the more common scenario, and what's happening is that you're taking the image from being a flex item itself and instead, abstracting it into a container. That's the actual flex item. The weirdness of flex only kicks in if the image is the direct descendant and a child of the flex container. In that situation, you have to approach it a little differently than what you might typically do. But if the image sits inside a container, that's a flex item. It works just like any other image inside any other container.

> [!info]- Semantic Content
>
> **Tools:** firefox (3), safari (1)
> **UI Navigation:** go to (3), select the (1)
> **Analogies:** just like (2)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)


### 2. Clip Masks, Paths, and Custom Shapes

[↑ Back to Table of Contents](#table-of-contents)

#### [Rounded corners with border-radius](https://www.linkedin.com/learning/css-images-25655459/rounded-corners-with-border-radius?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/rounded-corners-with-border-radius?u=76281980&t=0)** - [Instructor] In the previous chapter we looked at various ways we can size and position images within boxes. In this chapter, we'll look at how to change the shape of the box itself in order to change the shape of the image. We're not just limited to squares and rectangles. The first example of this is border-radius. The name of this property may sound like we're working with the border of a box, but it's actually dealing with a border box. Or to put it another way, border-radius lets us change the shape of the outermost edge of the box to give it rounded corners. We can use the border-radius property on any container, including the image itself. So, let's start by selecting this image, and we'll just say border-radius and set it to two rem. When border-radius is set to a single value like this it applies to all four corners of the box. So, you can see it creates a radius on the corner of two rems all the way around. Now, we can change this value by adjusting it up or down. And notice when we get to a border-radius that's the size of the box itself, in this case the height, it stops changing. So, even though I keep making the size bigger, the corners aren't getting any rounder. That's because we're currently using a fixed value. And a fixed value can't go any higher than the actual radius can be based on the shortest side of the container, which in this case is the height. But if we change this value to a percentage, let's say 50%,
>
> **[1:35](https://www.linkedin.com/learning/css-images-25655459/rounded-corners-with-border-radius?u=76281980&t=95)** you can see it's now 50% of either the height or the width. And as a result, we get this oblong ellipses instead of a circle. If you want to crop an image into a perfect circle using border-radius, you'd either need to use an intrinsically square image or one that's been constrained to equal height and width. So, since this is a rectangular image let's go ahead and just show setting a width and height on it. I'll say 500 pixels each. Of course, that distorts the image, but we know from the previous chapter that we can use object-fit and set it to cover to keep the original aspect ratio. And there we go. Now, while this does technically work, I'll show you a better way to create perfect circles a little later in this chapter. So, I'm going to refresh the screen here to get back to our starting point. Now, I mentioned earlier that if you only provide a single value for border-radius that it's applied to each corner. You can actually apply a border-radius to each individual corner, starting from the top left and then going around in a circle. So, let's go back and say border-radius. I'll say 50% for the first corner, and then zero. And because of the way CSS shorthand works, this is saying 50% of the first corner, zero on the second corner, 50% on the next,
>
> **[3:10](https://www.linkedin.com/learning/css-images-25655459/rounded-corners-with-border-radius?u=76281980&t=190)** and zero on the last one. So, we kind of get an interesting leaf-like shape here. So, we could do this with any value, so you could also set it to be something like five rems, zero, and then 20 rems, and then we'll say 10 rem. And now we get this really weird shape. The point is you can shape the box to be anything you want, and using border-radius to round the borders is one way of doing that. One more thing, here we've applied border-radius directly to the image, but we can go up one level to the element containing the image. And that's this article with a class content, and we could apply a border-radius on this instead. I'll refresh our example, and this time I'm going to set the border-radius here on this content rule. I'll set it to 20 rem, and you can see absolutely nothing changed. Even though we've changed the shape of the box that contains the image, the image is spilling outside of the box. It's overflowing the box. So, to fix this we can set overflow to hidden, and then this will hide anything that overflows the box. And again, we get this border-radius shape. So, when you're working with border-radius you have a choice. You can either change the shape of the image itself, or you can change the shape of the container holding the image and then set overflow to hidden to make sure the image doesn't spill out. Either way, you have complete control over the corners
>
> **[4:45](https://www.linkedin.com/learning/css-images-25655459/rounded-corners-with-border-radius?u=76281980&t=285)** if you want them to be rounded using the border-radius property.

> [!info]- Semantic Content
>
> **Cross-References:** previous chapter (2), later in (1)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Custom shapes using clip-path](https://www.linkedin.com/learning/css-images-25655459/custom-shapes-using-clip-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/custom-shapes-using-clip-path?u=76281980&t=0)** - [Instructor] Border-radius is a nifty property if you quickly want to add a little visual interest to a design. But there may be times you need a different shape, like a triangle, or a rhombus, or some completely custom shape. That's where the CSS clip-path property is your best friend. With clip-path, you can define a specific region of an element to display, and everything outside of that path is hidden or clipped. It could be a circle, an ellipsis, a polygon, or a drum path, a rectangle, or even a shape defined by an SVG. While most commonly see clip-path used directly with images, you can actually use it on any element. Clip-path is powerful, and it has a lot of options, as you can see here in the MDN Web Docs. So in the next few movies, we'll go through some of these options in detail so that you know how to use them to get the shape you want for your image.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), svg (1), mdn (1)
> **Cross-References:** in the next (1)
> **Documentation:** mdn (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating circles and ellipses with clip-path](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=0)** - [Instructor] Let's start by using clip path to define a circle. You can use border radius for setting rounded edges on an image or a containing element, but clip path makes it easy to get a perfect circle every time, even if you're not starting with a square image. So here we have a rectangular image, and it's got a container with a class ratio box, and the only setting on that is a width constraint. And then on the image itself, we just have our standard responsive styling. So for this content image, let's say clip path, and then let's set it to the circle function. And without defining anything else about this circle, we get a perfect circle, and it's automatically setting the radius of the circle to whatever is the shortest length in the current image. So if we were working with a square, then that length would automatically be the radius, or in this case we've got this rectangular image, so it's setting the radius to the shortest side, which is the height. If we take a look at the docs for the circle function, we can see that it takes two values. The first is the radius for the circle, and the second is an X and Y position for the center point of the circle. I like referring to the official docs so that you always know the source of truth when working with CSS properties, but I admit some of these examples are easier to explain with visuals. So back to our browser. Now when I set up this clip path property,
>
> **[1:35](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=95)** notice this little shape editor I get. That's a visual designer that's really helpful when working with clip path. Unfortunately it's only available in Firefox. So if that's not your preferred browser, I'll show you an alternative tool later in this video. But first, notice that if I click this, I now see two points on the circle, and this coincides with the two values that I can pass to the circle function. The first one that's on the edge here, that's what defines the radius. And if I drag this, you can see the number changing over here. And if I set the radius larger than the width or the height of its containing element, you can see that it gets cropped. That's an expected behavior. And then the second control here in the center corresponds to the position of this clip path within its containing element. So if I hover over the ratio box, you can visualize where that is. And if I take this control here and start dragging my path around, I can see the top left of the container, the top right, the bottom right, the bottom left, and so forth. And as I'm dragging that around, you can see the second value changing over here. And we've actually got two numbers. The first represents the position on the X, or horizontal axis, and the second represents the position on the Y, or vertical axis. So let me start fresh, I'll refresh the page. So let me go back here to our content image
>
> **[3:12](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=192)** and we'll say circle, whoops, clip path circle.
>
> **[3:24](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=204)** And the first value is going to be the radius. And that could be pixels or any length or percentage value. I'm just going to set mine to 25%. Then we say at, and now we define the position using a length, or percentage value, or even named values, such as top right, or bottom right, or whatever. Let's set ours to zero, which represents the left edge of the X axis, and 100%, which is the bottom edge of the Y axis. The idea here, with the circle clip path, is that you can define both a radius and where you want the path positioned within its container. Now, Firefox has this little visual editor that makes it easy to create the clip path you want, but if you're not using Firefox, or simply want to try another tool, let me show you one. This CSS clip path maker from Bennett Feely is really cool. In this case, you can select a bunch of shapes. I'll select the circle. And here we see these familiar visual controls. The one on the outer edge is for radius, and the one in the middle is to position it within the container. You can make whatever adjustments you need and it auto generates the CSS for you. I actually prefer this, because it defaults to percentage values versus something like pixels. In addition to circles, clip path also gives us the ability to create an ellipse, which is basically a squished circle. And this function behaves in a similar way to circle,
>
> **[4:56](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=296)** except that, instead of just working with one value for radius, here we define an X and a Y value for the shape. Let me show you. Let's refresh our example. And this time I'll go back to my image again and I'll say clip path ellipse. And this automatically clips it at a radius consistent with the height and width of the image, but we can change that. So for the first value, which is along the X axis, let's set it to 15%, and for the second value, along the Y axis, let's set it to 45%. And now I get this oblong shape. Now if we click the little shape tool, like before, now you can see that we get three controls on the circle. This one on the right corresponds to our radius along the X axis, and if I adjust that, you see that first number changing, and this bottom one corresponds to the Y axis. And adjusting that, you can see the second value change here. And then, the same as what we saw with circle, we get this center control, and that lets us move the center of the ellipse along both the X and the Y axis to position it anywhere within this container. So you can see the syntax here. We have this at directive and then followed by a value along the X axis and the Y axis. These are expressed as pixels using this Firefox tool,
>
> **[6:33](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=393)** but I could use a clip path generator tool, like I just showed you, to get percentage values, or you can experiment with them directly in your developer tools. So let's go back to the start here.
>
> **[6:52](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=412)** For the shape, I'll say 15% for X and 45% for Y.
>
> **[7:01](https://www.linkedin.com/learning/css-images-25655459/creating-circles-and-ellipses-with-clip-path?u=76281980&t=421)** So that gives us our shape. And now we want to say at, and we'll say 75% along the horizontal axis and 50%, or centered vertically, on that Y axis. So depending on whether you want a perfect circle or an ellipse, you can use clip path to achieve either of those shapes.

> [!info]- Semantic Content
>
> **Tools:** firefox (4)
> **Env Vars:** css (3)
> **Cross-References:** go back to (2), later in (1)
> **Documentation:** the docs (1), official docs (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### [Creating straight-lined shapes with polygon](https://www.linkedin.com/learning/css-images-25655459/creating-straight-lined-shapes-with-polygon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-straight-lined-shapes-with-polygon?u=76281980&t=0)** - [Instructor] If you need a clip path that's a triangle or a rhombus or a hexagon or any other shape that has straight lines and coordinate points, you can use a polygon. When you define a polygon, you set the coordinates for each point, and then the polygon will draw a line between point to point to point and point, et cetera, until you get the polygon you want. The polygon is defined using the polygon function. So let me find my image here and here I'll say clip-path polygon. Here you have to define at least three points because otherwise you don't have an area for there to be a clip path. Each point is defined by setting its X and Y position, and you do this using pixel values or Ms or percentages. In most cases, you'll want to use percentages since those are responsive. So let's start with three random points here. So I will say 25% and 50% for that first point. So you can't see anything yet, but that first point would be n 25% from the left-hand side, which is the x-axis, and then 50% down from the top, which is the y-axis. So then to add the second point, we say comma, and let's put this point at maybe 30% along the x-axis and 60% along the y.
>
> **[1:42](https://www.linkedin.com/learning/css-images-25655459/creating-straight-lined-shapes-with-polygon?u=76281980&t=102)** You still can't see anything because now I just have two points, which is basically a line, and we need an area, so we'll add a comma. And then for our third point, let's just say 40% and 30%. And there we have a polygon. It's a bit weird looking but that's fine because I'm going to use the shape editor tools to build this out. So I'll click the shape editor icon again, and now I get access to each of my points and I can start dragging them around. Notice this time when I'm dragging these points around, I actually get percentage values, and this is actually more helpful. Right now we've got three points, but what if we needed to add an extra point? In that case, I could just double click anywhere on a line to get a new point, and then I could change the value of that point. Oh, I can maybe make an arrow or something resembling a kite,
>
> **[2:51](https://www.linkedin.com/learning/css-images-25655459/creating-straight-lined-shapes-with-polygon?u=76281980&t=171)** or I could attempt to make a rhombus. That's a really bad rhombus. Or you could even try adding extra points to make a hexagon or something like that. Obviously, I'm not being very precise with my math, but you could use this polygon clip path to create a lot of different geometric shapes. Now, if you want to do something more basic, like set up a triangle, let's try that. I'll refresh, go back to our image here and we'll say clip-path polygon. And we want this top point to be at the center of this full width, so it'll be about 50% across and zero. So that's along the top line. So we'll say 50% on the x and zero on the y. And then for that second point, we want that one to be down here at the bottom. So we'll say 100% on both the x and y-axis. And then for that third point, we want that to be down here on this bottom left corner. So we'll say zero and 100%. And I clearly have a typo here. Let's get rid of that symbol and be sure to add our closing parenthesis. There we go. We've got our triangle.
>
> **[4:24](https://www.linkedin.com/learning/css-images-25655459/creating-straight-lined-shapes-with-polygon?u=76281980&t=264)** So with polygon, you can now create whatever shapes you want. If you're going to use this polygon method, here's a tip. Instead of trying to draw the lines like this in the browser environment, which is not the easiest, use a tool. If you're comfortable in design tools like [Figma](../../Skills/Web%20Development/Figma%20(Software).md) or Illustrator, you can use those to create paths with coordinates and then translate those over. Or you could use an online generator like the Clip-Path maker I showed you in the previous lesson, or here's another option. If these aren't available for some reason when you're watching this, just go online and search for a CSS Clip-Path Generator, and you'll find a bunch of options that allow you to set predefined shapes or allow you to draw your own shapes and then refine them to make them work. Regardless of what method you use, polygon gives you a lot of precision for creating straight edge shapes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Figma](../../Skills/Web%20Development/Figma%20(Software).md) (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** css (1)
> **Cross-References:** go back to (1)
> **Tools:** figma (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating rectangles with clip-path](https://www.linkedin.com/learning/css-images-25655459/creating-rectangles-with-clip-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-rectangles-with-clip-path?u=76281980&t=0)** - [Instructor] If you find yourself needing to create a rectangular shape and you're just checking out the documentation for clip-path, you may see this rect value and think, aha, that's what I need. But this value is actually deprecated and should not be used. If you're ever in doubt about whether or not you should use any particular feature in CSS, [caniuse.com](https://caniuse.com) is an excellent resource. And here we can see that this feature is obsolete. So what's a person to do if we want a rectangular shape? Well, there's something called inset for that. That sounds weird because inset doesn't sound like rectangle, but once I show you what's happening it actually makes sense. The inset property allows you to inset the clip-path from first the top border down, then the right border in, the bottom border up, and finally the left border in. You can also set rounded corners on this. Let's try it out. Let me drill down to my image here, and let's say clip-path: inset, and we'll just say inset by 10%. So when I do this with just a single value, 10% is applied all the way around, just like it would be with borders, end of margins, and padding, et cetera. So now it's been inset by 10%, meaning the clip-path is sitting 10% in from each of these edges. Now, if you wanted different values for the different sides,
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/creating-rectangles-with-clip-path?u=76281980&t=93)** you could use a shorthand like (10% 30%), and now we have top and bottom at a 10% inset where the left and the right are at 30%. If I want to specify all four sides, I could say 40% and 5%. And now we have a custom rectangle inside of our container. We can also add rounded corners to the inset. If you wanted to do that, you would type in the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) round and then you specify what the radius should be for those rounded corners, and that could be any length or percentage value. So let's just say it's five rems, and now we get this five-rem radius on each corner of our inset. You can set the radius on individual corners too. So if I add a zero, now we get the top left corner and bottom right corner at five rem and the other two corners at zero. This inset can be used to create these types of crops anywhere within the context of this box, and it truly is within the context of its box. So I could actually set this top value right here on the edge to zero, and now we're against that top edge, and I could actually put a negative value here, I'll say negative 30%, and that shifts the box outside, which is really the same effect as just setting it to zero unless you had a rounded corner that you wanted to show off in an interesting way. But you can play around with this
>
> **[3:06](https://www.linkedin.com/learning/css-images-25655459/creating-rectangles-with-clip-path?u=76281980&t=186)** to figure out exactly how you want to clip it. But the bottom line is if you need a rectangle, use the property called inset to control all four sides plus the corners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** find (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Env Vars:** css (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom paths with clip-path](https://www.linkedin.com/learning/css-images-25655459/creating-custom-paths-with-clip-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-custom-paths-with-clip-path?u=76281980&t=0)** - [Instructor] So far, I've demoed how you can create circles, ellipses, rectangles, and polygons of all sorts with clip-path. Now, what about custom shapes? That's where path comes into play. This is sort of the gateway to using SVGs as a path, and that's usually a better approach than the example I'm about to show you, and you'll understand why shortly, but I still want to show you this method. So, this function takes an SVG path and uses that as the shape of the clipping path. You could draw whatever shape you want and make it into a path, but you can't really do that in the browser like we did with basic shapes because the markup gets pretty complex. To draw a path, you need a vector-based drawing tool like Adobe Illustrator, so this is where things start to get complicated. For this example, I started with getting the size of this current box. So, to do that, I just right-click Inspect, and here we are. If I hover over the image, I can see, let's make it a little bit bigger. There we go. Our box is 560 by 560 pixels. So, if we go back over here to Illustrator, what I did was create a box with those same dimensions, and inside that box, I drew this heart shape. So, now I just need to get the path for this shape. To do that, I'm going to open up this file in a text editor, and here we can look for the path.
>
> **[1:34](https://www.linkedin.com/learning/css-images-25655459/creating-custom-paths-with-clip-path?u=76281980&t=94)** Now, if you haven't stared at the underlying markup for SVGs, it's not the easiest thing to read. There are actually two paths in this file. One's for the fill and one is for the outline. I want the fill, which is this first path. So, the part I want is the value for this D attribute. So, I'm going to go ahead and grab that and copy it. Now let's go back to the browser, and on this image here, we've got a rule set for it. I'll say clip-path path, and inside that I'll add quote marks and paste in the path between the quotes. And there we go. So here, we're using a custom path as a clip-path inside my image, and this is cool, but it's not responsive. This path is fixed to the size of the view box that I defined when creating this SVG, and since that view box is not defined in a responsive way, when I change the size of the window, you will see what happens. The clip-path is still holding the same relationship to that top left edge of the box, so it's the same size and the same position to the top left hand corner even though the box itself is resizing. There may be circumstances where you will have images that are fixed, and this is a great solution, but it's not the best option if you need responsive images. While there are some workarounds possible, they get pretty convoluted.
>
> **[3:06](https://www.linkedin.com/learning/css-images-25655459/creating-custom-paths-with-clip-path?u=76281980&t=186)** So, if you need this clipping path to resize with the image, then we'll need to import a clipping path from an SVG, and that's what we'll cover in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** svg (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** right-click (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating custom shapes with SVG](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980&t=0)** - [Instructor] If you watched the previous movie, you know that using a path shape with clipPath isn't responsive, it just moves around inside the crop and doesn't really look right. To clip an image with a custom path and keep it responsive, we need to take a different approach. That approach involves using an SVG itself as opposed to just a single path from an SVG. You can use the clipPath element of an SVG as the clipPath source in CSS. This lets you take advantage of the responsive nature of SVGs to make the path responsive as a clipPath in your CSS. Let me show you how it works. So first, we need the path. You can create the path in any application that gives you vector graphics. So I've used Illustrator and exported this as an SVG, and this file is called heart.svg. Now if we go open this up in a code editor, it looks like this, and if you were to open this SVG up in a browser, you would simply see a black heart. What I need to do now is add a clipPath element here, and to set that up, I'll create a clipPath element, and then I'm going to wrap it around these paths that I want to be part of the clipPaths. So I'll go down here, (keys clicking) and I'll say clipPath, and I need to target this later using CSS, so I'll go ahead and give it an ID and call it heart. (keys clicking) These are the two paths I want inside it,
>
> **[1:36](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980&t=96)** so let me just close this clipPath. (keys clicking) Next, we need to make this SVG responsive so that it scales to fit its container. By default, an SVG uses its own internal coordinate system, which determines how elements inside it are positioned. In this case, our view box of the SVG is set to 562 by 562, meaning all points in the path are placed within this coordinate system. So if you look at the actual path data here, you'll see coordinates like 158, 292 85, et cetera, and these are all relative to that 562 by 562 space. When using an SVG clipPath in CSS, the coordinate system of the SVG needs to match the CSS container it's applied to, but by default, the SVG's coordinates are based on its own internal system rather than the CSS layout. We can fix this, though. To do that, we need to tie the SVG's coordinate system to its CSS container, and this requires two steps. First, on the clipPath element here, we'll set clipPathUnits (keys clicking) to objectBoundingBox. And the second thing we need to do is scale our coordinates. So when we set this clipPathUnits to objectBoundingBox, the clipPath stops using the SVG's original dimensions and instead adapts to the size
>
> **[3:12](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980&t=192)** of the element that it's applied to, but here's the catch. The new coordinate system is no longer based on pixels. Instead, the width and height are now between zero and one, where zero represents the left top edge of the element and one represents the right bottom edge of the element. Since our path's points were originally defined in SVG pixels, they're now too big for this new system. So to make them fit, we need to scale them down so their values fall between zero and one. Don't worry, I'm not going to make you do math to individually scale each of these coordinates. Instead, we can use a scaling transformation, and for that, we only need to do one bit of math. So I'm going to use an online calculator, but any calculator will do. Since our SVG's original dimensions are 562 by 562, we need to scale it down, so to do this, we can divide one by 562, and now we have our scaling factor. So this value represents the size of each unit inside the SVG when mapped to a one by one box. So let me go ahead and copy this value. Let's go back to our code. To do that, I'll add this transform attribute to clipPath, and we'll say scale, and scale takes both an X and Y value. In our case, the SVG was 562 by 562, so we can use the same scaling factor for both X,
>
> **[4:49](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980&t=289)** we'll say comma, and Y. (keys clicking) So just to recap what we've got here, because I understand there's a lot going on, so we've got our clipPath, we have our clipPathUnits set to objectBoundingBox, and this is what makes the SVG responsive. Then we have our transform function where we're saying scale everything down to fit inside a normalized one by one box. Now when we apply this to an [HTML](../../Skills/Web%20Development/HTML.md) element using CSS, the clipPath will correctly adapt to the container size. So that completes our SVG modifications. The next step is to actually use this SVG as a filter on a clipPath inside your CSS, and that's actually the easy part. So I'm going to open it up my style sheet for this lesson, and we'll go down to our image element, and this was the image element for the non-responsive path, so let's swap that out, (keys clicking) and we'll keep clipPath, but this time we'll just say url, and we want to point to our SVG and it's in the same folder, so in this case, I'll just say heart.svg. And then once we're inside that file, we want to target the clipPath and that has an ID of heart, so we'll just say #heart. (keys clicking) Let's say that, and go back to the browser and refresh.
>
> **[6:25](https://www.linkedin.com/learning/css-images-25655459/creating-custom-shapes-with-svg?u=76281980&t=385)** And there, we have the same heart that we had before, only this time, it's coming from the clipPath element in the SVG. And if we drill down here and hover on the element, we can actually see the clipPath there in the developer tools. And now when I scale it, it's scaling properly because we're working with a responsive SVG inside this box, and the clipPath that's inside that responsive SVG is being used with the CSS. So there's a lot of things going on here to make this work, but as you can see, when it works, it works beautifully. So if you need a custom shape for a clipPath and you need it to be responsive, this is the way that you can make that happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** svg (24), css (10), html (1)
> **Code Identifiers:** clippath (21), clippathunits (3), objectboundingbox (3), clippaths (1)
> **Non-Speech:** (keys clicking) (7)
> **CLI Commands:** make (6)
> **Cross-References:** go back to (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Using an alternative to clip-path: mask-image](https://www.linkedin.com/learning/css-images-25655459/using-an-alternative-to-clip-path-mask-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/using-an-alternative-to-clip-path-mask-image?u=76281980&t=0)** - [Instructor] Now that you know how to add a clip-path to an SVG, scale it for responsiveness, and use it in CSS, let me introduce you to a simpler alternative. If you have an existing SVG and you don't want to mess with creating a clip-path element, you can use mask-image instead. Mask-image works by taking an image, like an SVG, and using it as a mask over another element. Unlike clip-path, which only defines solid edges, mask-image supports transparency, making it useful for more complex visual effects. Let's take a look at an example. Going back to our original heart.svg that I exported from Illustrator, it has two paths in it and nothing else, no clip-path or additional elements. And if we looked at this in a browser, it would just be the plain black heart. This SVG is what I want to use as my image mask. So I'll open up my CSS, and we'll go down to this content image. And here, we're using clip-path, let's get rid of that. And instead, I'll say mask-image URL and let's point to that heart.svg. If we go look in the browser, let's refresh. There we go. There's the heart. And let's try scaling this. There you go, it's fully responsive because now, we're just displaying the SVG on top of a regular box, and it just works.
>
> **[1:37](https://www.linkedin.com/learning/css-images-25655459/using-an-alternative-to-clip-path-mask-image?u=76281980&t=97)** So you might be asking yourself, "Why on Earth would I go to the trouble of using clip-path if a mask-image can do the job?" Well, the main difference is control. Clip-path allows you to define a bounding box and manipulate how the shape interacts with the element. If you need precise positioning, clip-path gives you more flexibility. With mask-image, you're simply overlaying a shape, so the sizing and alignment depend entirely on the image itself. It's often the easier option, but you need to make sure your masking content are sized correctly so that it works as expected. Both properties have good browser support at this point. So if you're looking for a quick responsive solution, mask-image is a great first choice. If you need more precise control, clip-path is still a solid option. Try both and see which one fits your needs.

> [!info]- Semantic Content
>
> **Env Vars:** svg (5), css (2), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a text knockout effect with background-clip](https://www.linkedin.com/learning/css-images-25655459/creating-a-text-knockout-effect-with-background-clip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/creating-a-text-knockout-effect-with-background-clip?u=76281980&t=0)** - [Instructor] Now that you know how to use custom paths to clip images, you may be wondering if you can use text to clip images as well. The answer is yes, but instead of using an SVG or some other clip path, we can do this using regular old [HTML](../../Skills/Web%20Development/HTML.md) and CSS. So here I've got an h1 element, and if we look in our developer tools, we can see that we have got a background image applied to this. To create that knockout effect where the background image appears inside the letters, we need to use CSS background-clip. The background-clip property was originally designed to control how background images are positioned relative to an elements box. There's border box, padding box, and content box, but it also has a special value, text, which allows the background image to be clipped by the shape of the text itself. Let's look at how this works. First, we've got a background image applied to this text element and that's important because this effect only works when the background image is on the same element as the text. Next, we'll set the background-clip property to text to clip the background image to the shape of the text. Now at first we don't see the effect and this happens because the text still has a color and that's covering the background. To reveal the background, we need to set the color to transparent. There we go.
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/creating-a-text-knockout-effect-with-background-clip?u=76281980&t=93)** Now the text is see-through allowing the background image to show through its shape. This technique is a pure CSS solution that works well across modern browsers. Enjoy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (3), svg (1), html (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Filtering and Blending

[↑ Back to Table of Contents](#table-of-contents)

#### [Filtering and blending](https://www.linkedin.com/learning/css-images-25655459/filtering-and-blending?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/filtering-and-blending?u=76281980&t=0)** - [Instructor] In the early days of the web, if you wanted to manipulate an image, either the shape or color overlays, or the edges, something like that, you had to rely on Photoshop or other image editing software to add those effects directly to the image, and then you could use that image on the web. While those tools certainly still have their place, CSS has come a long way and now offers some pretty powerful options for image manipulation. CSS gives us multiple simple properties that we can use to do things like blur an image, change its contrast, convert it to gray scale, or even blend two images together. In this chapter, we'll take a look at the filter property, which applies predefined filters, or even custom SVG filters, to images and other elements. And then we'll take a look at this mix-blend-mode property. This applies advanced blend modes to images and elements, mixing and blending them with their backgrounds. Let's dive in.

> [!info]- Semantic Content
>
> **Env Vars:** css (2), svg (1)
> **Speakers:** - [instructor] (1)

#### [Looking at the filter property](https://www.linkedin.com/learning/css-images-25655459/looking-at-the-filter-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/looking-at-the-filter-property?u=76281980&t=0)** - [Instructor] The filter property in CSS lets you apply visual effects to elements, much like image editing tools. While they're commonly used for images, these will actually work on any element, including text. One important thing to remember here though and that is that filters apply to everything inside of an element, so if you were to apply, say, a grayscale of 100% to a container, everything inside, any images, text, or borders, anything nested in that container would also turn to grayscale. So, filters are applied using this filter property followed by one or more of these predefined filter functions. So, these functions have mostly intuitive names, like blur, brightness, contrast, et cetera, and each takes a specific value. Let's take a look. In this example, I've applied all of these predefined filters to an image and then turned them off so that we can take a quick look at each of these in turn. So, let's start with blur, and this applies a gaussian blur to the image. It takes a length value for the radius of the blur, and you could use any length value here, but I'm recommending pixels, and I'll show you why. Let's start with one pixel, and this already blurs things quite a bit. Even just getting up to five or six and we're extremely blurry, so that's why I was suggesting pixels so that you can work in small values to soften an image. All right.
>
> **[1:34](https://www.linkedin.com/learning/css-images-25655459/looking-at-the-filter-property?u=76281980&t=94)** Next, we have brightness, and as the name implies, this controls the brightness of an element. The default is 100% and lower values darken the image. It's actually, if you go all the way down to 0%, you get black, and higher values, let's even go crazy, go up to a thousand. Ooh. Higher values brighten it, so the higher you get, the closer this gets to white. Now, we have contrast, and this is just the difference between the light and dark areas. 100% is normal contrast, 0% makes the image completely gray, and values above 100% intensify the contrast. Too much contrast can make images look a bit unnatural, so just be mindful of that. Drop shadow adds a shadow to an element, similar to a box shadow. The box shadow property creates a rectangular shadow behind an element's entire box, while the drop shadow filter here creates a shadow that conforms to the shape of the image itself. Now, this image is a box, so you can't really tell the difference, but if you're working with a non rectangular shape, this is a nice option to have. You can set the x and the y offsets, the blur radius, and then the color of the shadow. The grayscale filter converts colors to grayscale.
>
> **[3:11](https://www.linkedin.com/learning/css-images-25655459/looking-at-the-filter-property?u=76281980&t=191)** So, 0% keeps the original color while 100% makes it fully black and white, so you could go anywhere between 0 and 100 to get the effect that you wanted here. Hue rotate isn't as intuitive as most of these filters. This shifts the colors in an image based on the color wheel. Think of it like taking a rainbow and rotating it. Every color moves along the spectrum by a set number of degrees. The color wheel is a 360-degree spectrum, so for each degree you specify, you're shifting the colors of an image around this color wheel. Let's try that out. So, if we rotate to 90 degrees, we're getting a little bit of a greenish tint. If we go to 180, that shifts us around to a bluish tint, et cetera. Next, we have invert, which flips colors, turning light areas to dark and vice versa. So here, we're at 0%, which is no change, and 100% is a full inversion, so you could go anywhere between 0 and 100% to get the look you want. Opacity controls transparency. 100% is fully visible, while 0% makes the element invisible.
>
> **[4:47](https://www.linkedin.com/learning/css-images-25655459/looking-at-the-filter-property?u=76281980&t=287)** This works just like the opacity property in CSS, but it may have slight performance benefits in some browsers. The saturate filter adjusts color intensity. 100% is normal, lower values reduce the saturation, which fades colors into almost a grayscale look, and higher values intensify the colors, so let's try something like 200. Too much saturation can make images look overprocessed, but that may be the look you're going for. Finally, we have sepia, which applies a warm brownish tint, kind of looking like an old photograph. 100%, let's try that out, creates a full sepia effect while lower values might give you a slight kind of vintage look. This is similar to grayscale, but it's just warmer with the brown tint than with the black and the white. So, with that, you now know all of the filters, what they can do, and how you can use them.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Analogies:** similar to (2), think of it like (1), just like (1)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Combining filters](https://www.linkedin.com/learning/css-images-25655459/combining-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/combining-filters?u=76281980&t=0)** - [Instructor] One of the coolest things about CSS filters is that you can combine multiple filters to create unique effects. Let me show you how it works. So let's say that we wanted to give this image a more subdued field by adding some gray scale. I'll start with filter and gray scale at 50%. This removes some of the color, but now the image looks a little dull. I lose the vibrant red of those berries. So to fix this, I could add some additional filters. In this case, I'll lower the contrast, keep the gray scale at 50% and raise the saturation to 150%. With that, we still get the gray scale effect, but the most vibrant colors pop out again, creating a nice, sharp look. It's a subtle but interesting difference. When combining filters, keep in mind that some can override others. Gray scale at 100% and sepia at 100% remove all color making filters like saturate and hue rotate useless. If there's no color, there's nothing to enhance or shift. Let's try something else. Let's say I wanted to give this image a vintage sepia tone. I can set sepia at 100%, but now the contrast feels a little too harsh. So we can soften that effect by lowering the contrast. Now I still get that warm, nostalgic look, but with a softer, more natural tone. The great thing when you're combining filters is that the order doesn't matter. All of these values are applied simultaneously, so you can mix and match filters to get the exact effect you want.
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/combining-filters?u=76281980&t=93)** So play around, test different values and see how they interact to create custom visual styles.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using custom SVG filters](https://www.linkedin.com/learning/css-images-25655459/using-custom-svg-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/using-custom-svg-filters?u=76281980&t=0)** - [Instructor] So far we've explored the built-in CSS filters, but the filter property has another powerful trick up its sleeve. You can use custom SVG filters to create advanced effects. So all these default CSS filters you've seen like blur, grayscale, and contrast, those are actually predefined SVG filters built into the browser. That means that you're not limited to these presets. You can create your own custom filters, make them as complex as you'd like, and apply them to any element using CSS. Let's take a look at an example. There are online SVG filter generators out there that you can use. This one is specifically for gradient maps, which lets you turn an image into a duo tone or tritone version by mapping its colors to two or three specific cues. Instead of just converting an image to black and white, this technique allows you to apply a custom color scheme to get a more artsy look. There are a bunch of presets here and I can preview what each of these would look like on this demo image, or you could actually come in here and customize these colors to your heart's content. And down here at the bottom, it's kind of hard to see, but this is the code generated that we would need for the filter. So all we need to do to apply this filter to any image is copy this code. So let's find one that we like. Let's do this one. I'll copy that code
>
> **[1:32](https://www.linkedin.com/learning/css-images-25655459/using-custom-svg-filters?u=76281980&t=92)** and let's head over to our index.[HTML](../../Skills/Web%20Development/HTML.md) file for this lesson. And I'm just going to create an inline SVG, so I'll say SVG and literally paste in that filter code.
>
> **[1:50](https://www.linkedin.com/learning/css-images-25655459/using-custom-svg-filters?u=76281980&t=110)** The next step is to apply this to our image with CSS. To do that, let's take a look at this index.html file in the browser. And if we use our developer tools here to go down to the image, I've already got an empty rule set set up for this. So to apply the filter, I just need to say filter URL. And because we're referencing an inline SVG, I just need the ID. So if we go back, the ID is red sunset with purple. I'll copy that and then we come in here and say hashtag and paste in that ID and that didn't work. So let's figure out what's going on. Did we save our file? We saved our file. Let's try refreshing the browser and reapplying. So filter, URL. There we go. Okay, and now the filter is applied to our image creating this really cool cat if I do say so. So if we were using an external SVG, we would just reference the path to the file name, so something like filter.SVG, and then hashtag with this same ID name. By applying this filter, we've taken a normal image and transformed it without modifying the original file. The result is a really visually interesting effect
>
> **[3:24](https://www.linkedin.com/learning/css-images-25655459/using-custom-svg-filters?u=76281980&t=204)** that can be dynamically adjusted in CSS. With this particular effect, we were dealing with a few primitive filter units, so FE blend, FE color matrix, and FE component transfer. If we go back and look at our SVG, here we can see the FE color matrix, the FE component transfer and FE blend. So you can see that there are a lot of additional ways that you can mix and match features to create some really cool SVG filters. If this is something you'd like to explore more, there's an entire course in the library dedicated to this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Env Vars:** svg (10), css (5), url (2)
> **CLI Commands:** make (1), find (1), cat (1)
> **File Paths:** index.html (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Mix-blend-mode](https://www.linkedin.com/learning/css-images-25655459/mix-blend-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/mix-blend-mode?u=76281980&t=0)** - [Instructor] Another way to change how an image looks is by using mix-blend-mode. This blends the image with whatever is behind it. So think of it like this. If you have an element with a background color, and inside it there's an image. When you apply mixed-blend-mode to that image, it blends with its background to create some different visual effects. A good example here is on the mdn web docs. They use the Firefox logo placed over an orange background. So with this mixed-blend-mode set to normal, nothing happens. The image just stays the same. But if you switch to multiply, the colors mix, allowing that orange background to come through the image. We could switch it to hard light or other modes, and you can see even more blending effects. There are a ton of different blend modes, and they work similarly to the ones that you'd find in design software like Photoshop. If you haven't worked with blending before, it can be a bit tricky because colors interact in unexpected ways. The best way to get the effect you want is to experiment with the real images you'll be using as results vary based on the colors involved. The mixed-blend-mode is widely supported across modern browsers, but keep in mind that blending modes can impact readability, accessibility, and even performance if you're going crazy with the blend modes. So use them wisely, and always test with real images and content. That said, mixed-blend-mode does exist, and it's another tool at your disposal that you can use to create some really cool effects on the web.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Documentation:** mdn (1)
> **Tools:** firefox (1)
> **UI Navigation:** switch to (1)
> **Analogies:** think of it like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Experimenting with blend modes](https://www.linkedin.com/learning/css-images-25655459/experimenting-with-blend-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/experimenting-with-blend-modes?u=76281980&t=0)** - [Person] With blend modes, I think the best way of learning how to use them comes from experimenting with the actual images you'll be using. That's because different images, background colors, and background images all interact differently depending on what blend mode you're using. Unlike something like an SVG filter, which could give you a consistent duotone effect across any image, "mix-blend-modes" are not predictable in the same way, a combination that works for one set of images might not work for another just because of the color compilation. Luckily, it's easy enough to experiment directly in the browser to see how something looks, and blend modes don't have settings, you just set a blend mode or take it away, there's no extra values to add in, so the syntax is really simple. So in this example, I have an image and its containing element has a background color set to red. So let's see what happens when I change the blend mode on this image here. It's currently set to "normal" so nothing is happening, but if I delete that, I get a list of all of those available "mix-blend-modes" we saw in the MDN web docs, and we can just use the down key to cycle through these different options. It doesn't take long to see that some of these work better than others, and some really don't work at all, and, again, depending on both the background color I'm using and the colors in the image, these colors will blend uniquely. In this case, I think "difference" and "exclusion..."
>
> **[1:38](https://www.linkedin.com/learning/css-images-25655459/experimenting-with-blend-modes?u=76281980&t=98)** Let's see. Those are both interesting looks. "hard-light" does nothing, let's try "lighten." That's interesting. So I think this could work, but, again, it depends on whatever your goals are, so keep in mind that you don't have to just blend with the background color here, you can also blend with images, which, let me tell you, this can get really weird, really fast, so let me go to this container and turn on our background image, and you can see what I'm talking about, this is bizarre. While this particular combination of images doesn't really work well together, it does illustrate nicely what's actually happening, so let's go back through these blend modes again. (laughs) And I just don't think these images were meant to be together. So going through these options, let's see... There, "soft-light," I think that might be the best I can do here. So depending on what you're going for, you might be better off using actual graphic software, but for now, know that this feature exists in CSS and you might end up using it to make some cool stuff.

> [!info]- Semantic Content
>
> **Env Vars:** svg (1), mdn (1), css (1)
> **CLI Commands:** make (1)
> **Documentation:** mdn (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [person] (1)

#### [Background-blend-mode](https://www.linkedin.com/learning/css-images-25655459/background-blend-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/background-blend-mode?u=76281980&t=0)** - [Instructor] Mixed blend mode lets you blend an image or another element with its parent element, the background, or anything sitting behind it. On the other hand, background blend mode specifically controls how background images interact with each other or with the background color of an element. Notice the emphasis on background images, as in plural. That's because you can actually apply multiple background images to a single element by comma separating the image URLs in the background property. Unlike mixed blend mode, this blend mode only applies to background images. A really good example here, let's scroll further down in the docs. Here we go. So notice here in the background property we've called the source for image1. Then we have a comma and the source for image2. And the background blend mode is set to screen. And we can see that applied here in this example. From here, we can adjust this dropdown to see how these two images blend with different blend modes.
>
> **[1:13](https://www.linkedin.com/learning/css-images-25655459/background-blend-mode?u=76281980&t=73)** So yeah, you can blend multiple background images together, and then you could even add an image on top of that and use mixed blend mode to blend it through the background if you wanted. Using these blend modes, you can blend things together as much as you want.

> [!info]- Semantic Content
>
> **Documentation:** the docs (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)


### 4. Transformations and Animations

[↑ Back to Table of Contents](#table-of-contents)

#### [Translate, scale, rotate, and manipulate perspective](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980&t=0)** - [Instructor] In this chapter, I'd like to cover some additional CSS techniques you can use when working with images. Let's get started with this transform property. This was introduced to the CSS specification around 2010 and was the standard way to handle transformations for well over a decade. So if you wanted to scale an element up or down, rotate it, skew it, or move it along an axis, you needed to use this transform property and then specify a transform function for its value. And you can see a bunch of examples of that here. And you could even combine these functions to perform multiple transformations at once. So for instance, this says translate or move the element 10 pixels to the right along the X axis, rotate it 10 degrees, and move it five pixels down the Y axis. Fast forward to the present day CSS transforms module, and we've got some better options for handling transformations. This transform property still has some use cases, which we'll cover later, but for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this lesson, I want to focus on four standalone properties you can use to transform any block level element, including images. We've got translate, rotate, scale, and there's one more not in this list called perspective. So here we're looking at four images as examples. The first image is being translated or moved, the second is being scaled, the third rotated, and this fourth here is transformed with perspective,
>
> **[1:37](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980&t=97)** meaning it takes on sort of a 3D aspect in that it's rotated away from us. If we look at the markup, each of these images is within a figure, and each image has a unique class just to make it easier to target with CSS. So this first image has a class of translate. The second image has a class of scale. Third has a class of rotate. And this last one, you guessed it, it has a class of perspective. So if I click on any one of these images, we'll just click on the first one here, you could see that we're using the old transform function. In this case it's transform, and that I'm saying translate two rems on the X axis, comma one rem on the Y axis. And you can see this image is moved over two rem on the X axis and one rem down on that Y axis. Now, instead of using transform, we can simply say... I'll leave that as is. Just want to turn it off there. Okay, now we can simply say, translate and provide a value for our X axis and our Y axis. And this time I'll say two rem, one rem. Note that there is no comma in this syntax. Similarly, for this second image, we're using the scale property to scale it down by 0.5, which would be the same as saying 50%. But instead of using transform, now we can use the standalone scale property.
>
> **[3:10](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980&t=190)** So we'll just say scale 0.5. And we get the exact same effect. Of course, this could be any length value, so you could say two to make it bigger, or one's the original size. We'll leave it at 0.5 there. Now if we move along to this rotated image, we've got the transform function and we're rotating it 30 degrees. But now we can just come along and say, rotate 30 degrees. Well, it helps if I type it correctly. There we go. And we get the exact same effect. And the syntax, you could also use something like 0.25 turn to get a quarter turn. And you could use negative values here, too, so let's say -30 degree. There you go. And finally, we have this image with perspective. This one's a little more complex to work with. The perspective value itself defines the depth of the 3D space. So smaller values create a stronger effect... Just to changes here, just so you can see. Woo-o-o. And this is used in conjunction with rotate, translate or other values to visually affect an image. So here we've said perspective is going to be five rem, and let's rotate it on the X axis 10 degrees. Now perspective, as a standalone property, behaves a smidge differently
>
> **[4:44](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980&t=284)** than as a transformed function. For starters, you can see that like the others, we're applying this directly to the transformed element. But with the standalone perspective property, we actually apply it to the parent container of a transformed element. So we want to go to this parent element, which is the card. And I've already got a selector set up here. So I'll say perspective. And let's keep that at five rem. And then on the element that I want to transform, which is this image child element, that's where I can use the rotate standalone property. So I'll say rotate. And since I only want to rotate it on the X axis, I'll say X 10 degree. And now we get the same visual effect that we had before, but we're using standalone properties instead of those transform functions. You may be wondering what advantage these standalones give you, and there are a few. First, it's easier to write, and if you wanted to apply multiple transforms... Let's say for this duck here that we want to... We'll get rid of rotate. We want to translate two rem, one rem. Let's scale it down by 50% and we'll leave the rotate as is. So now what happens if you want to change one of these transformations?
>
> **[6:18](https://www.linkedin.com/learning/css-images-25655459/translate-scale-rotate-and-manipulate-perspective?u=76281980&t=378)** Well, you have to change this entire value. For instance, you couldn't just come down here and say transform. Let's rotate it 45 degree. In this case, the cascade takes over and it replaces this previous declaration. So using standalone properties just makes this part easier. And if you opt to work with animations, you can animate each property individually without affecting other transformations. All of these have solid support in modern browsers, and this is generally the way to go unless you need a transformation that's not available as a standalone property like SKU or Matrix. Or maybe you have some other use case where the transform property gives you better control. Regardless of what you choose, you now have some additional properties available for transforming images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (4), sku (1)
> **Versions:** 0.5 (3), 0.25 (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **Documentation:** specification (1)
> **Warnings:** note that (1)

#### [Animated effects with transitions](https://www.linkedin.com/learning/css-images-25655459/animated-effects-with-transitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/animated-effects-with-transitions?u=76281980&t=0)** - [Instructor] One of the neat things about using CSS to manipulate images either by changing their shape, size, position, color, or even transforming them, is that we can usually apply animations to any of those properties. And we do that by using this transition property. With it, we can define a transition between two states of an element, for example, a default state, and a hover state. I'll show you a simple example I've created to demonstrate this. To start, I've set up a grid on this container, and it's a 2 x 2 grid, and then I've just let the images place themselves naturally. I've then cropped each image down to a square, and then for a couple of these, like this dog here, I've also used some scaling and translating to make the animals a little more proportionate to each other. Lastly, for each of the image elements, I've targeted the figure element that wraps around the image and applied a clip path circle. Now, in this case, I've set the diameter of the circle to a hundred percent, which means the diameter is the same width or height of the image itself. And then for each image, I've moved the center point around so that when we combine these, we get this complete circle. To visualize this a little better, let me grab the center point for this first image and I can move it around so that you can see the box that this image is in. All four of these images are squares,
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/animated-effects-with-transitions?u=76281980&t=93)** and then they're clipped into this circle. So if we click on the dog, we can visualize that the dog too is in a box. In CSS, it looks like this. I've just grabbed each of the images in my grid and I've set the circle at a hundred percent, and then different coordinates for the center point. So this first image has a center point at right bottom, the second at left bottom, the third, right top, and my fourth image here at left top. The next thing I want to do is add a basic transition to this clip path so that the images change shape when I hover over them. So to do that, let me uncomment this. First, I set a clip path on hover, and for this, I've still got it at a 100%, but I'm changing the center point to 50% and 50%, which is the same as saying center or the center of the image. So if we save that now, and let's refresh. So now when I hover over each image, we can see the clip path change, but the change is abrupt and kind of immediate. So that's where this transition property can help us. I'll go to this image rule that applies to all the figures, and I'm going to say transition,
>
> **[3:06](https://www.linkedin.com/learning/css-images-25655459/animated-effects-with-transitions?u=76281980&t=186)** clip path, and we'll set that to one second. So that means that the transition, the movement of the central point of the image will take one second, and let's see what that looks like. Now, when I hover over one of the images, the center point of the circle moves, and we get this interesting animation that takes away the circle and creates a corner instead. And because this is a transition, it'll also rebound back again when I'm not hovering over the element. So then if I move my mouse around the circle, we've got this really fun thing that's kind of satisfying to move around. And all that's happening here is that I'm transitioning the center point of the clip path. The whole point of this demo is to show you that you can transition just one element of a property, and even that small transition can have a big impact on how things are displayed. And here's the thing with clip path, you can use transition to transform any element. So if you had a polygon, you could just move one of the points in the polygon and that would create an animation. Or if you had some other shape, you could change the entire shape and it would create an animation, or you could just change the scale with the transition, the color, anything really, you have a lot of control when you're playing around with this stuff. The best thing to do is just experiment in the browser and see what's possible. If you want to take a deeper dive into transitions and specifically using transitions in combination with transformations, check out this course in the library.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Keyframe animations for image effects](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980&t=0)** - [Instructor] In the last lesson, we looked at the transition property to define a state change for an element. So, going from a default state to a hover state, for example. With transition, you get some timing control. So for example, how long does it take to transition from one state to another? And in this case, we've got it set to one second but beyond that, we don't get a ton of options. If you want additional control over how an image or some other element animates, take a look at keyframes. With keyframes, you can define multi-step animations and specify what the style of transformation should be at each step. So here in this very simple example, we've got keyframes and then whatever name you want to call it, in this case it's slide N. And then we've got two keywords, "from" and "to", where from is 0% or the start of an animation, and to is 100% or the completion of an animation. So, this example says we start with some element translated along the X-axis, so that it's basically sitting on the left edge or 0%, and we end the animation with that element all the way over on the outer edge or 100%. Let's keep scrolling down to see a different example. And here's one where instead of using those keywords, "from" and "to", we're specifying these different stages in the animation. Again, where 0% is the start and 100% is the completion. And then we've got some intermediate steps defined in here.
>
> **[1:35](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980&t=95)** As with most things CSS, this makes more sense when you're looking at a working example. So, let's do that. Now here, I've got my robot helper and we're going to animate this robot to move from the right edge to the left of the screen. And if we look at what's happening in CSS, we've got this image and we're using absolute positioning and we're saying right is zero. So, we're right on that right edge. Let's start by building a simple keyframes animation. So, I'll head to my style sheet for this lesson and we'll just put it at the bottom here. So I'll say keyframes, I'll call it robot. And then the very beginning or 0%, let's say right is zero. And then at the end of the animation, so 100%, we'll say right is 100% or all the way to the left of the screen. And actually, we need to throw a calculation function on this, so we can say 100% minus the width of the robot. So in that case it's 200 pixels. And by doing that, we'll make sure that our robot doesn't go all the way off screen, but stops at 100% minus its width. Okay, so we've created our keyframes with a starting and an ending stage. Now how do we apply it?
>
> **[3:09](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980&t=189)** Well, that's where this animation property comes in. And this is actually a shorthand property that can reference the animation name, duration, timing, etc. So we're going to use this property, tell it to animate using our keyframes, and then we'll tell it how long to animate, so that's animation duration. And then I'll also show you what this animation film mode does. So going back to our style sheet, let's come up here to our image and we'll say animation. And then the name of our animation, which is robot. And I want this animation to last two seconds, so 2s. Okay, let's take a look at that. And cool, this does what we expect. It takes two seconds to go from the right to the left, and then the image returns to its starting state. Now, if I wanted it to stay at its end state, that's where the animation fill mode comes into play. There's a value for that called forwards and let's try adding that. So, we'll go back to our style sheet and say forwards. And there we go. Now our robot stays put at this final state. We also have this animation timing function that we can use to specify how we want our animation to play. So, do we want it to stay the same speed throughout
>
> **[4:42](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980&t=282)** or start off fast and then slow down or vice versa? Let's say in this case, we want our robot to start slow, speed up in the middle, and then slow down again. And for that we'll use this ease in out. So let's go back to our animation property and we'll just say ease in out. Save that. Check it out. And there we go. Let's take this a little further and add a couple of extra steps to our animation. In this case, I want the robot to start upright just like it is and finish in that same state, but somewhere in the middle, I want the robot to rotate or tilt its head forward, so that it looks like it's going faster. So, go back to our style sheet here, and at the very beginning, just say rotate is 0 degrees, and let's add a step. We'll say 10%, and we'll rotate -20 degrees. And then at 90%, let's go ahead and say rotate back to 0 degrees. We'll save that. Okay. Now if I replay the animation, we see our robot tilt forward to go fast and then slow down and straighten up at the end. Let's try it again because that's fun. This is a very simple example using keyframes just to show you what's possible.
>
> **[6:15](https://www.linkedin.com/learning/css-images-25655459/keyframe-animations-for-image-effects?u=76281980&t=375)** I'd encourage you to search online for examples, and you will come across some really sophisticated animations that are pure CSS, no [JavaScript](../../Skills/Software%20Development/JavaScript.md) required, which is really a testament to how far CSS has come.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (4)
> **Cross-References:** go back to (3), in the last (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Important notes on using animations](https://www.linkedin.com/learning/css-images-25655459/important-notes-on-using-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/important-notes-on-using-animations?u=76281980&t=0)** - [Instructor] Now that you know how to animate elements, either through transitions or key frame animations, keep this bit of wisdom in mind. Just because you can doesn't mean you should. In this lesson, I want to mention a few things to keep in mind if you opt to use animations on the web. The first is accessibility. As a web developer, one of your most important jobs is to make the web usable and accessible. When it comes to animation specifically, there's a few things to be aware of. The first is motion sensitivity. So avoid excessive or sudden movement, like rapid zooming or scaling. Then there are seizure risks or photo-sensitive epilepsy. So avoid flashing content or flickering high-contrast content. Next, there's disruptive or distracting animations. So think of things that are on a loop, shaking effects, or that sort of thing. And lastly, any sort of full-screen animation, like a page rotating or flipping. At best, these sorts of animations are just annoying and distract users from whatever they came to a website to do. But at worst, they can actually cause harm. So what can you do? As an alternative to movement, you could do things like change transparency, do color transitions, or some other visual cues that signal change. Provide UI controls to stop, start, or otherwise control onscreen animations. There's also a media @ rule that you can use to detect whether a user prefers reduced motion. So you could use that in your CSS to modify
>
> **[1:35](https://www.linkedin.com/learning/css-images-25655459/important-notes-on-using-animations?u=76281980&t=95)** or eliminate animations for those users. And lastly, make sure you don't have any animations that are getting in the way of a user simply trying to do whatever it is they're trying to do, whether that's read an article, fill out a form, or click a button. That's really web usability 101. Beyond accessibility and usability considerations, the other thing to keep in mind when using animations is performance. Some animations are more costly than others. So try to avoid animations that would cause a layout shift or reflow. Avoid animating too many things on the page at once and keep your animations short and sweet. And then make sure that any animations are only triggered when they're in the viewport. There's no need to animate something if a user can't even see it. All in all, CSS animations can add nice energy to interfaces, but they should be used with intention. Prioritizing accessibility and performance ensures that you're adding value to a user's experience and not hindering it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2), be aware (1)
> **Env Vars:** css (2)
> **Speakers:** - [instructor] (1)


### 5. Image Optimization and Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Delivering responsive images](https://www.linkedin.com/learning/css-images-25655459/delivering-responsive-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/delivering-responsive-images?u=76281980&t=0)** - [Instructor] People access web content across so many more devices and screens than I could have ever imagined when I started developing for the web in the late '90s. Images play a really important role in how people experience web content, and in this lesson, I'd like to take a look at ways that we can deliver responsive images. And by that, I mean delivered the best images based on a user's device resolution, screen size, and bandwidth. The first technologies we have for this have been around a long time, and that's srcset and sizes. When you look at basic [HTML](../../Skills/Web%20Development/HTML.md) markup for an image, there's the source to the image and the alt text, which serves as a fallback in the event that the image either isn't available or we're serving an image to a non-visual user. But we can use the srcset attribute to serve images with different resolutions to different devices, and then use that in conjunction with the sizes attribute to tell the browser how much space we expect an image to occupy in different viewport sizes. Next, we can use the picture element to provide some sort of art direction. Imagine that you might want to crop an image differently if you're on a wide screen versus if you're on a smaller device. This is where picture comes in. You can direct the browser to load a specific image based on the screen width, and then use the regular image element nested inside the picture element as a fallback in case the other sources don't exist. So in short, use srcset when you want to serve images with different resolutions to different devices.
>
> **[1:36](https://www.linkedin.com/learning/css-images-25655459/delivering-responsive-images?u=76281980&t=96)** Use sizes to control how images scale across different sizes efficiently, and use picture when you need different crops, aspect ratios, or formats for various devices. Of course, there are ways to optimize image performance beyond responsive images, and that's what we'll look at in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Analogies:** picture (4), imagine (1)
> **Env Vars:** html (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Optimizing performance](https://www.linkedin.com/learning/css-images-25655459/optimizing-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/optimizing-performance?u=76281980&t=0)** - [Instructor] Responsive image markup is a great way to ensure that the browser is only loading the images it needs to and isn't wasting bandwidth, downloading unused images. That said, whatever you are leaving the browser to download, you want to make sure that it's optimized. I talked about this early on in the course, but use modern image markup. That includes lazy loading to delay an image from loading until a user scrolls near it. Use those width and height attributes to help prevent layout shifts, and always use good alt text for accessibility. Next, you want to use the right image format. This can net you a huge savings and file size. Generally speaking, WebP can save you around 30% on file size compared to its PNG or JPEG counterparts. Then there's SVGs, which are ideal for vector graphics, icons, mini logos, et cetera. Each image is different and may require different levels of compression or optimization, but be aware of using the ideal format for each image. Finally, if you have an image heavy or other resource heavy site, think about using a CDN to boost performance. All of these are tools available to you to help you optimize page load time to create a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) and a better web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** png (1), jpeg (1), cdn (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Ensuring cross-browser compatibility](https://www.linkedin.com/learning/css-images-25655459/ensuring-cross-browser-compatibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/ensuring-cross-browser-compatibility?u=76281980&t=0)** - [Instructor] Now that you've got a good understanding of all the things you can do with images in CSS, let's talk about practical considerations when using these techniques on a live site. All of the features we've looked at in this course are considered widely available across modern browser versions. Some of these features like keyframe animations and filters have been around for the better part of a decade, while features like clip-path and standalone properties such as translate and scale are relatively newer to the scene. I emphasize the term modern browsers here because even though you can use these features in newer browsers, always be aware that older browsers; I'm looking at you, Internet Explorer; may have limited or no support. As always, when designing for the web, consider your audience and the technology they may be using to access the internet. Think of some of these features, particularly animations, as progressive enhancements. That means when you build out your sites, build a workable baseline solution first, and then sprinkle in the fancy stuff as a progressive enhancement for modern browsers. For each of the features we've covered here in this course, there's a browser support list available on their respective pages on MDN Web Docs. You can find it by going to this bar across the top to get a quick summary on browser support, or you can click either this see full compatibility link or this browser compatibility link in the sidebar. So looking at this list, you can see what browsers support a particular feature and version notes.
>
> **[1:33](https://www.linkedin.com/learning/css-images-25655459/ensuring-cross-browser-compatibility?u=76281980&t=93)** You can click on any one of these to see when it was released and whether a browser offers full or modified support. These browser support compatibility tables are regularly updated to show you what's possible. This is a great reference to have anytime you're adding a new feature. If you're ever in doubt about browser support for a specific feature, or you want to create one layout for browsers that have the feature and another for browsers that don't, you can use this supports rule. Supports literally ask the browser: Hey, do you support this particular CSS property? If so, then you can use it, and if not, this doesn't run at all. When it comes to modern browsers, you're in the clear to use the features that we've talked about in this course. But if there's ever a question in your mind about using a particular CSS feature, be sure to check out the MDN Web Docs.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), mdn (2)
> **Documentation:** mdn (2)
> **UI Navigation:** in the sidebar (1), click on (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/css-images-25655459/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-images-25655459/next-steps?u=76281980&t=0)** - [Instructor] CSS offers so many creative possibilities for working with images, and now you have a solid foundation to explore even more. The web is always evolving and new CSS features continue to expand what's possible. What wasn't supported in browsers just a few years ago is now at your fingertips, and there's more to come. To stay ahead, keep MDN Web Docs as a go-to resource. It's really the best place to find up-to-date documentation, examples, and deep dives into CSS properties, including the techniques we covered in this course. But don't stop at what you've learned. Experiment, push boundaries, and discover new ways to enhance images with CSS. The best way to grow as a developer is to keep creating. Now, go build something amazing and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), mdn (1)
> **CLI Commands:** find (1), go build (1)
> **Cross-References:** we covered (1), in the next (1)
> **Documentation:** mdn (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Carrie Dils](../../Instructors/Web%20Development/Carrie%20Dils.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/css-images-5994321/codespaces)

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)
← [CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md) | **5 of 12** | [CSS- Animation](CSS-%20Animation.md) →

## Appears In

- [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)

## Related Courses

_Courses sharing skills:_

- [Making Sense of the CSS Box Model](Making%20Sense%20of%20the%20CSS%20Box%20Model.md) — Cascading Style Sheets (CSS)
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — Cascading Style Sheets (CSS)
- [Cutting-Edge CSS](../Software%20Development/Cutting-Edge%20CSS.md) — Cascading Style Sheets (CSS)
- [Building Great Forms with HTML and CSS](Building%20Great%20Forms%20with%20HTML%20and%20CSS.md) — Cascading Style Sheets (CSS)
- [HTML & CSS- Creating Forms](HTML%20%26%20CSS-%20Creating%20Forms.md) — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)