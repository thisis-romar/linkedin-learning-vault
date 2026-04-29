---
type: course
cssclasses:
  - lle-course
slug: stable-diffusion-tips-tricks-and-techniques
url: "https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques"
duration_minutes: 373
duration: 6h 13m
updated: 6/28/2023
learners: 27010
skills:
  - Artificial Intelligence for Design
  - Stable Diffusion
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF4NEWWGf1tcQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687557331718?e=2147483647&amp;v=beta&amp;t=MABpY_1ytFXWM_92NTshGo6LrB2NOjQ5Dowgyzk1ErM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Applying Generative AI as a Creative Professional]]'
prev_courses:
  - '[[Midjourney- Tips and Techniques for Creating Images]]'
next_courses:
  - '[[Adobe Firefly Essential Training (2024)]]'
path_nav: '[{"path":"Applying Generative AI as a Creative Professional","position":4,"total":7,"prev":"Midjourney- Tips and Techniques for Creating Images","next":"Adobe Firefly Essential Training (2024)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-for-design
  - skill/stable-diffusion
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Stable%20Diffusion-%20Tips%2C%20Tricks%2C%20and%20Techniques.md)

![Stable Diffusion: Tips, Tricks, and Techniques](https://media.licdn.com/dms/image/v2/D560DAQF4NEWWGf1tcQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687557331718?e=2147483647&amp;v=beta&amp;t=MABpY_1ytFXWM_92NTshGo6LrB2NOjQ5Dowgyzk1ErM)

# Stable Diffusion: Tips, Tricks, and Techniques

> AI image generation tools enable you to enter a text description and get an image in a flash. For creative pros, these tools can accelerate the creative process and help generate assets. For everyone else, these tools enable the effortless creation of images for presentations and reports—or just for fun. The open-source Stable Diffusion platform is known for its power, customizability, and ability

> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques) | 6h 13m | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - What is Stable Diffusion?
- [**1. Stable Diffusion Basics**](#1-stable-diffusion-basics) (5 videos)
  - What can you do with Stable Diffusion?
  - What's different about Stable Diffusion?
  - How can you access Stable Diffusion?
  - Installing Stable Diffusion locally
  - Using Stable Diffusion
- [**2. Digging Deeper into Stable Diffusion Prompts**](#2-digging-deeper-into-stable-diffusion-prompts) (12 videos)
  - What does a prompt do?
  - Stable Diffusion seeds
  - Stable Diffusion batches and pixel counts
  - Prompt basics
  - Questions to answer when writing prompts
  - PNG information and saving
  - Using CFG scale
  - Prompt weighting
  - Writing prompts for series 2 models
  - Prompt libraries and styles
  - Interrogating an image
  - Artist names and rendering styles
- [**3. Advanced Stable Diffusion**](#3-advanced-stable-diffusion) (7 videos)
  - Sampling and steps
  - Automatic iterating
  - Changing SD models
  - Using LoRA models
  - Using embeddings
  - Upscaling SD images
  - Settings and extensions
- [**4. Training and Customizing Stable Diffusion**](#4-training-and-customizing-stable-diffusion) (13 videos)
  - img2img basics
  - img2img options on hosted sites
  - Using a sketch in img2img
  - Using a photobash with img2img
  - Changing aspect ratios with img2img
  - Removing elements with inpainting
  - Adding objects with inpainting
  - Outpainting
  - Using outpainting to resize an image
  - Improving faces created by SD
  - Outpainting with openOutpaint
  - Instruct pix2pix
  - Free handy resources
- [**5. Working with ControlNet**](#5-working-with-controlnet) (9 videos)
  - Introduction to ControlNet
  - Installing ControlNet
  - OpenPose in ControlNet
  - Limitations using OpenPose
  - Using img2img and ControlNet
  - Choosing a ControlNet model
  - Image size and ControlNet
  - Other features in ControlNet
  - OpenPose editors
- [**6. Refining Your Workflow**](#6-refining-your-workflow) (4 videos)
  - Using models to influence image style
  - Inpainting and upscaling
  - Refining with XYZ plot
  - Complete a Stable Diffusion workflow
- [**7. Customization and Model Training**](#7-customization-and-model-training) (4 videos)
  - Creating a custom model
  - Creating models with DreamBooth
  - Merging models
  - Training a model using an object
- [**Conclusion**](#conclusion) (1 videos)
  - What's next

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### What is Stable Diffusion?
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=0)** - AI image generation is amazing.
>
> **[0:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=3)** Enter some text, get an image, move on with your life.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=5)** It's great.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=7)** In this course, we're going to take a look at the finer details of how to write a good prompt.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=11)** But in Stable Diffusion, you are not limited to your prompt writing skills to get a good image.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=16)** So we'll dig into image-to-image capabilities that let you start with a sketch, a photobash, or another AI rendering and use that as a prompt to get precisely the composition and image details that you want.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=29)** We'll look at how to expand Stable Diffusion's functionality through extensions, and along the way, we'll talk about how you can run your own Stable Diffusion server, train Stable Diffusion to render things that it previously didn't know about and much, much more.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-is-stable-diffusion?u=76281980&t=43)** If you've got a web browser, you're ready to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - ai (1)


### 1. Stable Diffusion Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### What can you do with Stable Diffusion?
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=0)** - You are going to learn how to use Stable Diffusion, an AI image generator.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=5)** Does this now mean that you will quickly be producing any image that you can imagine to your precise specifications?
>
> **[0:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=13)** No.
>
> **[0:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=15)** Before we go any further, I would like to suggest that you might want to start managing your expectations a little bit.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=21)** Very often, getting a good usable image out of any AI generator can take a lot of time and work.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=28)** There will be instances when you can't get the image that you want at all or can't get it to the level of quality that you want.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=35)** We're in the first generation of this technology, and it's incredible, but it's not a perfect HAL 9000 level of AI power.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=43)** That's good because it means your computer won't toss you out of an airlock.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=47)** But it's important to know that you're going to have to coax the image that you want out of Stable Diffusion, sometimes, and sometimes that's a time consuming process.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=57)** So why go through it?
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=59)** Because Stable Diffusion is an incredible piece of software and while it's not remotely intelligent, it does do a great simulation of intelligence when it comes to making images.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=70)** If you're running on a fast system, then Stable Diffusion can crank out pictures with astonishing speed.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=76)** One of the first most immediate uses of Stable Diffusion is probably brainstorming and ideation.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=82)** If you think maybe a design layout would look good with a photo of a person sitting at a Parisian cafe table, then you can quickly crank out an image of that scene.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=91)** Sure, you could also quickly get such a shot from a stock photo site, but with Stable Diffusion you can experiment with more specific ideas.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=98)** Maybe you specifically want a closeup with the person holding a hotdog, or maybe you'd like to experiment with a more stylized layout.
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=107)** And so you want to see some media besides photography, an oil painting or pastel drawing, or pencil sketch.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=114)** Even if none of these images are suitable for final use, the ability to crank them out so quickly and to such a customized degree means that you can work with placeholder images that have much more value than what you might be able to access any other way.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=128)** Character design for a video game or comic book, story boarding for a video production, Stable Diffusion can tackle these tasks.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=135)** Maybe one of the best things you can do with Stable Diffusion is communicate better.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=140)** Perhaps you're an office manager who would like to convey some ideas for a new conference room.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=144)** Stable Diffusion allows you to generate high quality visualizations that may not be perfect representations of the conference space you have, but that are close enough to allow you to convey ideas of mood, atmosphere, color treatments, and more.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=159)** Stable Diffusion is not just useful for generating finished images.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=162)** In fact, one of the best ways to incorporate it into your workflow might be to use it to generate assets that you combine with other processes.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=170)** Maybe you composite Stable Diffusion elements into photos or natural media works.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=175)** Maybe you use Stable Diffusion to generate textures for 3D software or to use in motion graphics.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=182)** And then of course, Stable Diffusion is just fun.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=186)** It doesn't satisfy the same things as generating work on your own, but as a fun way to explore images and ideas about images, you'll probably find that regular use often gives you a lot of laughs, and very often feelings of wonder and surprise.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=201)** What can you use it for?
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-can-you-do-with-stable-diffusion?u=76281980&t=203)** I can't begin to imagine all of the things that you might do with Stable Diffusion, but as we work through this course, I expect you'll start getting a lot of ideas.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), means that (1)
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Env Vars:** hal (1)
> **Speakers:** - you (1)

#### What's different about Stable Diffusion?
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=0)** - I've been involved with computer graphics since the mid 1980s, so I've already gone through a few imaging revolutions.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=7)** There was desktop publishing in the mid 1980s, the rise of digital image editing in the late 1980s, and then the ascension of digital photography in the late 1990s.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=17)** Those developments truly were revolutionary and they fundamentally changed the industries that they affected.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=24)** This AI imaging revolution is different.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=28)** When digital tools first entered the world of graphic design, photography, audio production, film and video production, they provided digital versions of analog tools that professionals had always used.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=40)** These new digital tools were faster, sometimes easier.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=44)** And because they didn't require manual dexterity, anyone could produce technical results that previously required years of practice and development of muscle memory.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=55)** But to apply these tools well, you still had to know a lot.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=59)** In the case of design and photography, you had to know about composition, aesthetics, and a lot more.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=65)** AI imaging is not a digital version of a tool that we have had before, it is something completely new.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=71)** And what makes this a different kind of revolution is that you don't have to have any previous knowledge to get good results from these AI tools.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=79)** Yes, in this course, we're going to go through instruction on how to drive the Stable Diffusion interface.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=83)** And yes, it helps if you already know what a good image looks like, but these tools also come with aesthetics built in.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=90)** If you take the time to generate enough images, you will get a good one regardless of any previous experience you might have had.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=98)** At the time of this shooting, there are three major AI imaging tools available for use.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=103)** DALL-E, Midjourney, and Stable Diffusion.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=106)** Adobe has announced their Firefly technology and open betas are available.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=110)** but it has not been formally released as of this production.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=115)** All of these tools offer similar functionality.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=117)** You write a prompt and the software generates an image.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=120)** That image can be photorealistic or it can look like natural media.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=123)** And in either case, it can be an image of something that no one has ever seen before.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=129)** Under the hood, there are differences in the algorithms that are used, but fundamentally they share some common traits.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=135)** They were all trained by analyzing huge quantities of images, and all four have very sophisticated human language processors in them.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=143)** Those two things work together to create what we generally refer to as an AI image generator.
>
> **[2:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=151)** There are some differences.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=152)** DALL-E and Midjourney both excel at photorealism, but Midjourney is also capable of a particular Midjourney look which skews towards atmospheric fantasy illustration.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=163)** By default, Stable Diffusion sits somewhere between photorealism and illustration, but Stable Diffusion also allows you to swap out its core set of trained images, making it possible to give Stable Diffusion new imaging capabilities and entirely different looks.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=179)** You can, in fact, add a data model that makes Stable Diffusion render images that look very much like Midjourney's fantasy style images.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=188)** We'll dig into all of that later in this course.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=191)** DALL-E's data set is more curated than Stable Diffusion's default data set.
>
> **[3:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=196)** This means that you can more easily create not safe for work type images in Stable Diffusion.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=201)** If you're in an education environment, DALL-E's curation might be a better choice for you because it's harder to create potentially offensive images.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=209)** On the other hand, you can easily find safe for work models for Stable Diffusion.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=215)** Access to these systems differs.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=217)** Stable Diffusion, DALL-E, and Firefly are all accessed through a web browser.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=221)** While you access Midjourney through the Discord server.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=224)** Firefly will likely see integration into Adobe's apps and there are already plug-ins and add-ons for integrating Stable Diffusion into Photoshop.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=233)** What's more, you can get standalone applications for the macOS and iOS that allow you to run Stable Diffusion as standalone apps or you can create your own Stable Diffusion server on a Mac, Windows, or Linux machine.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=247)** There are questions of morality around the practice of training data sets off of images that don't belong to you.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=254)** Adobe's Firefly doesn't suffer from these concerns because it was trained off of public domain images and Adobe's own stock photo service.
>
> **[4:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=262)** Perhaps one of the most significant differences between Stable Diffusion and its competitors is that you can use Stable Diffusion for free.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=269)** Where DALL-E, Midjourney, and Firefly ultimately require payment.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=273)** This is because of one of the other big differences with Stable Diffusion which is that it is open source software.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=279)** This is why you have the option to run it on your own computer for free, but it's open source nature also means that there's a huge Stable Diffusion community that is constantly pushing out new data models, plugins, and lots more.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=293)** In addition to being able to change its data models, Stable Diffusion offers some other features that its competitors lack.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=298)** For example, you can train Stable Diffusion so that it knows how to make images of specific people or things that you want to render.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=306)** Stable diffusion includes an image to image feature which allows you to use a simple sketch in conjunction with a text prompt to create an image.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=314)** This is sometimes the only way to get the precise composition that you want, and so it's a great tool to have at your disposal.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=321)** As far as which system is best, they're all amazing.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=324)** And you don't have to wonder, you can get free time with all four systems and make some decisions for yourself.
>
> **[5:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=330)** All of these platforms take time to master but it's not a waste of time to invest study in one even if you ultimately end up favoring another because much of the skill and understanding that you develop in one are applicable to all four.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=343)** I love Stable Diffusion's feature set.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=345)** I don't think you sacrifice image quality choosing any one of these systems over another, and it's hard to beat free.
>
> **[5:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=351)** So I think you've made the right choice in deciding to learn Stable Diffusion.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-different-about-stable-diffusion?u=76281980&t=354)** Let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), new. (1), interface (1), case, (1), default, (1)
> **Env Vars:** dall (6)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** macos (1), ios (1)
> **Cross-References:** later in (1)
> **Tools:** discord (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### How can you access Stable Diffusion?
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=0)** - As mentioned in the last video Stable Diffusion is open source software.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=5)** One of the practical upshots of that is that there are many different ways that you can access Stable Diffusion.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=10)** The easiest way is via the web by pointing your web browser to a publicly available Stable Diffusion node.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=17)** This is simply a machine or network of machines running Stable Diffusion and providing a web-based interface to the software.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=25)** [StableDiffusionweb.com](https://StableDiffusionweb.com) is probably the best place to start.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=30)** In addition to access to the software that site includes a lot of very good tutorial information and background as well as technical details on how Stable Diffusion works.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=41)** Hugging Face is a name you're probably going to get more familiar with if you dig much deeper into Stable Diffusion.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=47)** Hugging Face builds itself as a community and data science platform on a journey to advance and democratize AI through open source and open science.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=59)** Depending on how far you go, you may find yourself downloading a lot of code and models and libraries from Hugging Face.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=66)** In the meantime, you can use their Stable Diffusion server.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=70)** Mage.space also provides a front end to Stable Diffusion.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=74)** They offer free access with some limitations.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=77)** You'll see ads and you won't be running on their fastest hardware.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=81)** For a monthly fee, you can gain access to more features at various tiers.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=86)** These features include access to additional data models, no ads, faster hardware.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=91)** By the time you watch this video some of these options may have gone away others may have turned up.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=96)** A search engine will quickly lead you to a usable, Stable Diffusion site.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=101)** Because it's open source, you can download Stable Diffusion and install it on your own computer.
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=107)** This is a complex process that we'll discuss in the next movie.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=111)** Fortunately, some people have rolled the Stable Diffusion software into normal applications that can be easily installed and used like any other day-to-day app.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=121)** For example, Draw Things is an iPad app that is a complete Stable Diffusion install including the option to download multiple data models.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=131)** At a minimum, it's going to chew up four to five gigabytes of storage, but it runs entirely on the iPad and presents a very nice interface.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=140)** Diffusion B is the same thing, but for Mac OS.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=144)** [AllThingsAI.com](https://AllThingsAI.com) is a good source for learning about what applications are out there for your particular OS.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/how-can-you-access-stable-diffusion?u=76281980&t=152)** For now, hitting a site like [StableDiffusionWeb.com](https://StableDiffusionWeb.com) is certainly the easiest way to get up and running.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **URLs:** [stablediffusionweb.com](https://stablediffusionweb.com) (2), [allthingsai.com](https://allthingsai.com) (1)
> **CLI Commands:** node (1), find (1)
> **Code Keywords:** interface (2)
> **Code Identifiers:** ipad (2)
> **Cross-References:** in the last (1), in the next (1)
> **Prerequisites:** install (2)
> **Analogies:** for example (1)

#### Installing Stable Diffusion locally
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=0)** - [Instructor] Installing Stable Diffusion on your own hardware offers a number of advantages, the most significant of which is speed.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=6)** If you've got a fast video card then you can get extremely quick rendering times.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=10)** Here you can see I'm rendering images at an average speed of five or six seconds each.
>
> **[0:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=15)** For iterating and generating large batches, this is great.
>
> **[0:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=19)** By comparison, using an online site can sometimes take up to a minute per image.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=24)** Now, a lot of my speed gain when running locally comes simply from the fact that I don't have to share processor time with lots of other users because I'm running on my own hardware.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=33)** The downside to this is that to get really fast rendering, you've got to have an expensive video card.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=39)** Stable Diffusion is open source software, but at the time of this shooting, there is no official release of it of any kind.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=46)** Instead, a number of enthusiasts have created and released distributions, which you can install for free.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=51)** There may be commercial releases one day, but at the time of this shooting, there are just a few main players.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=57)** A distribution called AUTOMATIC1111 is the most popular and most widely supported.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=62)** It's available from a GitHub repository and you can find instructions there for installation or you can use the installation guide that I've written, which is available in the course notes or you can find all sorts of guides online.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=75)** Installation does require the use of the command line, and it requires you to install a number of dependencies.
>
> **[1:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=80)** If my mention of either of those things makes you nervous, then installing Stable Diffusion may not be for you.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=88)** AUTOMATIC1111, which you see here, presents a solid, decent, easy to use interface, but it's not glamorous by any means.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=96)** Straight out of the box, It's got a very full feature set, but maybe the best thing about it is that it is extensible through the use of downloadable plugins or extensions.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=106)** As research leads to new AI imaging breakthroughs, it seems like an AUTOMATIC1111 extension that exploits those breakthroughs is available almost immediately.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=116)** Invoke AI is another distribution, it provides a slicker looking interface and an environment that feels more like an image editing application than a browser-based server side tool.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=128)** Infinite undoes, a built-in gallery for browsing images that you've made and excellent in painting and out painting tools, among many other things, make this a really nice place to work.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=138)** At the time of this shooting, the feature set is quite a bit smaller than AUTOMATIC1111's and there are no extensions.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=145)** If you've got the capable hardware, you can install both of these and switch between them, but it's best not to have them both running at the same time.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=153)** On the server itself, both of these systems show up as a simple terminal window, where you can see what activity the system is currently executing.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=160)** But that's all you see.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=162)** All configuration and management is implemented through a web-based interface.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=166)** I have included PDFs with installation instructions for both AUTOMATIC1111 and Invoke AI on either the Mac or Windows.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=174)** If you're a Linux user, you can also install both of these systems.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=178)** Since the Mac OS is basically Unix, you should be able to follow the Mac's installation instructions with no problem.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=183)** If you run into an issue, a search engine should lead you to plenty of installation documents and videos.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=189)** There's one detail of installation that I found it difficult to find online documentation for, so I'm going to cover it here.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=195)** Both AUTOMATIC1111 and Invoke AI are launched by running a Windows batch file.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=201)** As explained in my Windows installation document, you can edit that batch file.
>
> **[3:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=205)** Here, I'm opening up the batch file for AUTOMATIC1111, and if I add this --listen command to the end of this line, save this, and then restart AUTOMATIC1111, I can now access this instance of Stable Diffusion from any machine on my network.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=223)** Here I am back on my Mac in my web browser, I know the IP address of my Windows machine where Stable Diffusion is running, so I enter that followed by a colon and 7860, which is the port number that Stable Diffusion listens to.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=236)** I enter all that and here I am.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=239)** I can do this from my iPhone if I want to or any other device on my LAN.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=244)** Invoke AI works the same way and you'll find instructions in its own launch batch file.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=251)** If you want to access your Stable Diffusion machine from outside of your house, you'll need to open the appropriate ports in your server's firewall, and you'll need to set up port forwarding on your router, which is what I'm doing here, so that traffic on port 7860 gets sent to the server machine on your network.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=268)** Invoke AI uses port 9090.
>
> **[4:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=271)** Instructions for all of that can be found online, but note that not all routers offer a port forwarding feature.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=278)** So if you want this capability, you may end up having to upgrade your router.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=282)** There's another option for running AUTOMATIC1111, and it's ideal if you don't have a fast video card.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=288)** Google Colab is a Google service that allows you to run Python applications on computers hosted by Google.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=298)** A lot of work has been done to make it very simple to get AUTOMATIC1111 running in what's called a Colab notebook.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=305)** You can often get much better performance with Google Colab than you can get from other publicly available servers, and if you don't have a fast video card, then Google Colab will almost certainly be faster than what you can do at home.
>
> **[5:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=316)** You can do quite a bit of work for free, though if you get serious about using it, you may want to subscribe.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=321)** Google provides several pricing options, which give you increasing levels of rendering quantity, and access to faster and faster hardware.
>
> **[5:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=328)** Going into the details of Colab is way beyond the scope of this course, but with a simple web search, you can easily find instructions for installing and using AUTOMATIC1111 on Colab.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=340)** In this course, you're mostly going to see me using my own server because I want this kind of speed, and you're mostly going to see me using AUTOMATIC1111, which I'm going to be referring to as Stable Diffusion.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=352)** If you're using an online instance of Stable Diffusion, any of the ones discussed in the last video, that's fine.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=358)** You'll see equivalent controls to what I'm using but the interface to them will probably be different and they might use different labels and names for their various controls and sliders.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=371)** I know this sounds like a lot of information, but honestly, we're just getting started with the topic of installing Stable Diffusion.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=377)** We'll be returning to this subject in a later chapter.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=380)** It's important to understand this odd, ad hoc, open source nature that Stable Diffusion has.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=387)** From time to time, you are going to see out in the world what profess to be new AI imaging tools but which, upon closer examination, you can recognize as just being re-skinned versions of Stable Diffusion.
>
> **[6:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-stable-diffusion-locally?u=76281980&t=400)** Being able to recognize that will help you better understand if particular products are things that you actually want to investigate.

> [!info]- Semantic Content
>
> **Env Vars:** automatic1111 (12), lan (1)
> **Tools:** colab (6), github (1), command line (1), terminal (1)
> **CLI Commands:** find (5), make (2), python (1)
> **Code Keywords:** interface (4), require (1), switch (1), for, (1), this, (1)
> **Prerequisites:** install (4), you'll need (2), set up (1), getting started (1)
> **Ports:** port 7860 (1), port 9090 (1)
> **Code Identifiers:** iphone (1)
> **Cross-References:** in the last (1)

#### Using Stable Diffusion
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=0)** - We're finally ready to actually have Stable Diffusion make us a picture.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=4)** To do this, you're going to need access to Stable Diffusion.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=7)** If you don't have it, watch the last video.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=11)** While there are lots of different ways that you can run Stable Diffusion, they don't all present the same interface.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=16)** For example, here's what mage.space's free option looks like.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=21)** It's got a place to enter your image prompt and it's even got a sample prompt already in there.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=26)** There's an option to choose a model.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=27)** And then further down here, we've got some more controls.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=31)** If I click on Advanced Mode, I get even more options down here.
>
> **[0:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=36)** Over on [stablediffusionweb.com](https://stablediffusionweb.com), I get a prompt box, the area where my image will appear, some example prompts, and an Advanced Options button that has some of the same things as mage.space but also some different things.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=50)** Because Stable Diffusion is running in a web browser, it's easy for these sites to customize the user experience to exactly what they want.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=57)** And some sites opt to shield the user from too many options.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=61)** Here's what the interface looks like if you install the Stable Diffusion software on your own machine.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=66)** This is not Stable Diffusion running in an app.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=69)** As you can see, it's still in a web browser.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=71)** This is running on a Windows computer, which is hosting a URL that I can get to from anywhere.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=78)** This is what I'm going to be using throughout this course.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=81)** Other sites might have prettier interfaces or show you lots of nice example prompts but I figured that since this shows every control available in the software, it doesn't matter what you're using, you should be able to see your control somewhere in my interface.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=96)** Also, my video card is very fast.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=99)** If it turns out that at some point in this course I'm accessing a control that you don't see in the Stable Diffusion that you're using, then you'll need to go try another site if you want to follow along with whatever I'm talking about then.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=112)** So we're ready. We just need to enter a prompt.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=116)** A prompt is simply a description of the image that we want.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=121)** Since this will be the inaugural image in our AI image-making experience together, why don't we ask for a photo of the inauguration of a giant robot as emperor of the universe.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=136)** That ought to keep the AI very happy.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=139)** Before you hit Generate, take a moment to consider this prompt.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=142)** I didn't just say the inauguration of.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=145)** I started with a photo, as opposed to an oil painting or a sketch or concept art of.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=152)** This is sometimes referred to as the frame of the prompt.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=155)** We're specifying the media we want.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=158)** The rest is pretty simple.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=159)** Let's hit Generate and see what we get.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=163)** I'll buy that.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=165)** Now, when you hit Generate, you're not going to get the same image.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=169)** And I'll explain why in a later movie.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=171)** For now, let's do a little more work.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=172)** First of all, a prompt doesn't always yield a great image.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=176)** So if your Stable Diffusion client allows it, dial up the batch count or number of images or whatever your client calls it to something higher.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=185)** I'm going to set mine to three and then hit Generate.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=188)** When it's done, I have three images and this little thumbnail collection of all of them.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=194)** The reason it's better to render multiples is that there will be times when a prompt yields a really bad result.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=200)** If you only see one result, you might be tempted to rework your prompt when your prompt is actually fine on the next generation.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=206)** So don't ever judge a prompt by only one result.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=210)** I'll sometimes set mine to generate 30, then I'll browse through them later.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=214)** Obviously, if you're on a very slow system, that may not be practical.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=218)** So spend some time generating a bunch of images off of this one prompt, just so you can get a feel for how much variation there can be from one generation to another.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=227)** Along the way, if you end up with an image you like, you should have a Download button somewhere in your interface which will allow you to download a copy.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=234)** By default, Stable Diffusion renders a 512 by 512 image, so downloading one is very speedy and doesn't take up much storage.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=242)** Coming up with the right prompt is the single most important step in getting good results from Stable Diffusion.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-stable-diffusion?u=76281980&t=248)** So next, we'll look at prompt-writing in more detail.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (2), this, (1), yield (1), default, (1)
> **Analogies:** picture (1), for example (1)
> **Prerequisites:** install (1), you'll need (1)
> **CLI Commands:** make (1)
> **URLs:** [stablediffusionweb.com](https://stablediffusionweb.com) (1)
> **Env Vars:** url (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** click on (1)


### 2. Digging Deeper into Stable Diffusion Prompts

> [↑ Back to Table of Contents](#table-of-contents)

#### What does a prompt do?
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=1)** - [Instructor] If you've played with the ChatGPT bot, then you know that there are very good AI language models out there.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=8)** They don't actually know any language.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=9)** They're just statistical models that are very good at predicting what the next word should be in any given sentence.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=16)** There are also a critical part of an image generation tool because that prompt that you write in an image generator has to be interpreted somehow.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=23)** Like all machine learning tools, Stable Diffusion was trained on a dataset.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=28)** Specifically, it was trained on a dataset acquired from a company called LAION.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=32)** In this case, this was a dataset consisting of images with text descriptions.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=37)** Over a billion image-text pairs at a training cost of hundreds of thousands of dollars were used to train a model for Stable Diffusion.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=47)** For each image, Stable Diffusion did a bunch of analysis and stored some resulting data.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=51)** None of that data would be of any use if there weren't that text associated with it.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=55)** After all, it doesn't matter if the machine knows how to draw a dog if you have no way to ask it for a drawing of a dog.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=62)** These image generation systems are so useful because of their natural language interface.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=69)** This is a number line.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=70)** You should recognize this from elementary school.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=72)** A number line isn't complicated, but it is a clever way of showing a spatial relationship for a number.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=79)** Here's a Cartesian coordinate grid.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=81)** I can mark places on this grid using pairs of numbers.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=84)** With three numbers, I can define a point in 3D space.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=87)** We're going to come back to this in a minute.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=90)** An AI language model converts text into numbers, a process called tokenizing, because different bits of text end up represented by specific numeric tokens.
>
> **[1:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=100)** I'm not talking about ASCII.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=101)** A token is not a number representing a specific letter.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=104)** Tokens can be words or other language constructs.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=108)** As you type a prompt, Automatic1111 shows you count of how many tokens you've used against your maximum token count of 75.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=117)** That's this business right here.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=120)** I've installed an extension in Stable Diffusion that will show me how text gets tokenized.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=125)** I enter a prompt like "A woman sitting on a park bench eating a sandwich wearing a yellow dress on a fall afternoon," and I tokenize and I can see that it considers this sentence to have 21 tokens.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=137)** And here they are listed out.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=140)** After a little bit of experimenting, I have found that the same words always get the same tokens.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=146)** During Stable Diffusion's training, different qualities and aspects of an image are also assigned numbers of various kinds.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=153)** As we've seen, numbers can be represented as locations in space.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=158)** So one way to think of Stable Diffusion's data model is that it's a big multidimensional space with specific data stored in specific locations within that space.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=168)** Different text tokens lead you to different locations in that space.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=172)** And in each location, you find data related to specific qualities and aspects of an image or part of an image.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=180)** Now this is a very simplified explanation.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=182)** One thing we haven't talked about is what "oil painting" might refer to.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=186)** Dog is pretty simple to understand, but what visual qualities does "oil painting" reference?
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=192)** The answer is that we don't know.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=195)** An artificial neural network, like the one driving Stable Diffusion, is very good at recognizing patterns, subtle, complex patterns.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=203)** We don't know what patterns it's picking up on when it's trained.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-does-a-prompt-do?u=76281980&t=207)** But as you can see from using it, Stable Diffusion is very good at equating text tokens with specific image particulars and qualities to create specific imagery.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** case, (1), interface (1)
> **Env Vars:** laion (1), ascii (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Stable Diffusion seeds
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=0)** - [Instructor] As you saw in the last video, Stable Diffusion generates images by using numbers associated with text to identify specific data that can be used to diffuse an image out of a pattern of noise.
>
> **[0:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=13)** So one of the things that Stable Diffusion has to do when it generates an image is to create an initial field of noise.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=20)** It bases this random noise pattern on a numeric seed.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=24)** Different seed numbers yield different noise patterns and every noise pattern results in a different image even when the prompt doesn't change.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=33)** That's why if both you and I enter the same prompt into our separate systems we'll most likely get different images.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=40)** In fact, if you come back later and enter the same prompt into your own system, you'll likely get a different image than what you got the first time.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=47)** In automatic 1111, there's a seed field right down here.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=52)** If you're using a different Stable Diffusion system it should have a control for seed somewhere in its interface.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=59)** Mine is currently set to minus one, which indicates to the system that it should generate a random number.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=66)** If I click this recycle button, it sets the seed to whatever the seed was for the last image that I generated.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=75)** By the way, you can browse all sorts of parameters for the most recently generated images right here and here you can see the seed.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=86)** I can also enter a seed here by hand.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=89)** If I click the die button, it sets me back to random which shows up as minus one.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=96)** Manipulating the seed is very useful and we'll be doing that throughout this course.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=101)** I wanted you to see right away why if you're following along, entering the same prompt, configuring the same parameters, you're probably not getting the same images that I am.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-seeds?u=76281980&t=109)** If you are, then you have just experienced a freakish level of coincidence because what has happened, is that your computer has generated the same random number as mine at the same time.

> [!info]- Semantic Content
>
> **Code Keywords:** yield (1), interface (1)
> **Cross-References:** as you saw (1), in the last (1)
> **Speakers:** - [instructor] (1)

#### Stable Diffusion batches and pixel counts
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=0)** - [Instructor] Before we dive into lots of image making, I want to say that if you're someone who has a tendency towards perfectionism or if you're someone who strives for great efficiency, then you might find yourself a little uncomfortable working with Stable Diffusion or any AI image generator.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=14)** The fact is there's a huge amount of trial and error and luck involved in using these systems.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=21)** You are very rarely going to sit down, enter a prompt, and get the image that you want.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=25)** It's very likely that you're going to have to generate dozens of images before you hit on something that you can consider as a starting point for lots of additional refinement.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=34)** Working with Stable Diffusion is a lot like fishing or mushroom hunting.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=39)** You've got to be patient and you've got to be ready to try lots of things.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=43)** For that reason, before we even start writing a prompt, I'm going to increase the batch count from one to four.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=52)** Now, every time I click the Generate button, Stable Diffusion will generate four different images.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=58)** You could also set the batch size to four.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=60)** This would also yield four images, but in a different way.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=63)** Note that not all Stable Diffusion distributions offer a batch size option.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=69)** Here's the window showing my server activity.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=72)** In my client, if I set batch count to four, enter a prompt and hit Generate, you can see on the server that what happens is that Stable Diffusion executes four separate image generation processes one after another.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=87)** If I set the batch count back to one and increase the batch size to four, and then hit Generate on the server, there's only one image generation, but it renders four images.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=99)** The difference has to do with memory usage on the video card.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=103)** Increasing batch size may get you results a little faster, but it will use more VRAM on your graphics card.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=109)** Increasing the batch count will use less RAM but take a tiny bit longer.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=114)** However, using less RAM means you can possibly render images with higher pixel counts.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=119)** My recommendation would be to leave batch size set to one and increase batch count.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=125)** Work that way for now, and if you one day want to do some experimenting to see if there's a notable performance difference, then maybe you'll find that adjusting batch size works better for you in some circumstances.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=136)** By default, most stable diffusion systems generate results that are 512 by 512 pixels.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=142)** If that sounds very small to you, that's because it is.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=146)** If you're hoping to generate 20 megapixel images to print out on a large format printer, you're not going to be able to do that with the results that come straight out of the system.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=154)** You can, of course, upsize, and Stable Diffusion includes its own upsizing tools, and we'll look into those later.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=161)** As you can see, Stable Diffusions size sliders don't go up very high.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=167)** And if you try to crank them up this far, you may find your results get really wonky.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=172)** Maximum size can vary depending on which model you're using, how much memory you have on your graphics card, and some other factors that we'll talk more about later.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=180)** A handy tool for figuring out what to put in your width and height fields here is [calculateaspectratio.com](https://calculateaspectratio.com).
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=187)** This lets me easily figure out pixel dimensions for a given aspect ratio.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=190)** So for example, if I want 16 by 9 and I don't want to go over 512, I can put 512 in here, and I find out that the correct height for 16 by 9 is 288.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=201)** So I could come back here and set my height to 288.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=204)** That said, you can go above 512.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=208)** Let's say that, with some experimenting, I'd found that actually I'm okay up to 1,000 pixels width.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=213)** So then my height would be 563, I'm going to round up there.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/stable-diffusion-batches-and-pixel-counts?u=76281980&t=218)** So that's a really great tool for figuring out aspect ratios as you go.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** yield (1), default, (1), let (1)
> **Env Vars:** ram (2), vram (1)
> **URLs:** [calculateaspectratio.com](https://calculateaspectratio.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Prompt basics
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=1)** - [Instructor] Automatic1111 shows these different tabs.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=4)** In this course, we're going to look at all of these and we're even going to add some more.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=8)** But for right now, the one we want to focus on is txt2img.
>
> **[0:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=13)** This is the module that allows you to enter a prompt and get an image.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=18)** If you're working in mage.space, [invoke.ai](https://invoke.ai), [playgroundai.com](https://playgroundai.com), or many other Stable Diffusion instances, you probably won't have this tabbed interface but you should have an obvious prompt box.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=32)** Also, Stable Diffusion allows you to change the data model or checkpoint that it uses when it's rendering an image, this is the data that it's searching through.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=44)** This is an incredibly powerful feature that we will be looking at in detail later.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=48)** For now, it's important to understand that Stable Diffusion data models fall into two categories, models based on the original 1.4 model and models based on the newer 2.0 model.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=61)** Stable Diffusion's prompts behave very differently depending on whether you're using 1.4-based models or 2.0-based models.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=70)** We'll talk about the differences later.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=72)** For right now, know that 1.4 series models are capable of generating not-safe-for-work content.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=79)** So if you're working in a sensitive environment, you might want to be careful with your prompts.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=83)** That said, it's not going to easily fall into rendering lots of naked people or something, so I wouldn't worry too much about this.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=91)** For the rest of this chapter, we're going to be working with the 1.5 version of the default Stable Diffusion model which was based on the 1.4 model.
>
> **[1:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=100)** Yours might have a different name but there should be 1.5 somewhere in the title.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=104)** If you don't have the 1.5 model, then select the 1.4 model.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=110)** My 1.5 model has "pruned" in the name.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=114)** As you might expect, pruned models are smaller than unpruned models, sometimes by quite a lot.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=120)** You can think of a pruned model as having fewer decimal points.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=124)** It can still come up with a valid answer, it just won't be as precise.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=128)** For generating images, this lack of precision doesn't matter at all.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=132)** Where you don't want to use a pruned model is when you're training a new model.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=136)** You train models based off of other models.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=139)** So I'm going to stick with this 1.5 pruned model for now.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=143)** If you're using mage.space or [invoke.ai](https://invoke.ai), or [playgroundai.com](https://playgroundai.com), or just about any other Stable Diffusion instance, then you should have a control for changing the model.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=153)** Double check it now and make sure it's using a 1. x model rather than a 2. x model.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=159)** As I've mentioned, Stable Diffusion is a great brainstorming tool.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=163)** It's fun to just throw in a prompt, let it make an image, and see what ideas you get from the result.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=168)** For learning, I think it's better to have an image in mind before you start, a target image of some kind that you have to try to coax from the system.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=175)** So, let's say that we have a startup company that's trying to bring an exciting new product to market, the Pocket Stonehenge.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=186)** So let's say we want to start with an image of the real Stonehenge to establish some heritage and a sense of history with our product.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=195)** So I'm running Stable Diffusion on my Windows server.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=197)** I am accessing it here from my Macintosh, just in a normal browser window.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=202)** To keep you from having to suffer through me typing at a reasonable speed and making lots of typos and things like that, I'm going to take advantage of the Mac's voice recognition capability, that's what this little thing is down here.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=212)** So you're going to see me from time to time clicking on this thing, that's just so I can make it recognize and I don't want it typing all this stuff I'm saying right now.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=219)** So, we want to start with an image of Stonehenge.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=223)** I think we should have a person in front of Stonehenge to give it some scale and to humanize it.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=228)** So, when you start writing a prompt, the best thing to do is just start by asking it for what you want.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=234)** I'm going to put my cursor up here and say a photo of a person standing in front of Stonehenge.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=240)** And I'm going to set my batch count up to four, like I told you to do earlier, that's so that we get four different images.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=247)** I'm taking defaults on the rest of these, we will discuss those controls later.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=251)** I'm going to hit the Generate button, let it go through its thing.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=254)** So when they're first coming in, they look blurry.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=257)** Don't worry, it's just not showing you the final rendering of any of these.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=261)** When it's done, it gives me this thumbnail.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=263)** And I can tap on these images and now just look through them.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=267)** There's Stonehenge.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=269)** Sure enough, there's a person standing in front of Stonehenge with their back to me.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=273)** There's a disfigured person standing far away, there's another person, and there we go.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=278)** None of these are satisfying at all, and this is a very typical Stable Diffusion result.
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=284)** Don't worry, we're not on the wrong path.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=287)** It's just that Stable Diffusion, it did what I asked it to do, I just didn't ask it to do very much.
>
> **[4:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=292)** So let's make some changes here.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=294)** Let's go ahead and say a woman, in fact, this is a corporate presentation, let's say a woman in business casual, I think it should recognize that, standing in front of Stonehenge.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=306)** So I'll hit Generate again.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=310)** In post-production, I am going through and speeding up that process.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=314)** You've gotten a sense of what it's like in real time, there's no need for you to have to suffer through that.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=318)** So right away, things are looking better.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=322)** I've at least now got a woman facing the camera most of the time, and we now come to the next ugly truth about Stable Diffusion, ooh, boy, these faces, they're trouble.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=335)** Let's ignore that for now and focus on some other aspects, see if we can get this image more to our liking.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=341)** I want more drama in this image, and I think the way that that's going to come about is camera angle and lighting.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=349)** As I've mentioned before, camera angle is pretty tough to control just through a prompt.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=353)** So let's start with lighting.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=355)** I want to mention a couple of other things.
>
> **[5:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=356)** I don't need to say "a," I can just say photo of a woman, that buys me another token.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=363)** And you don't have to get really finicky about economizing like this but you don't have to write long literary prompts.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=371)** In fact, most of the time it's better if you don't.
>
> **[6:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=373)** It's a better use of the limited number of tokens that you have.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=376)** So I'm not going to try to write a description of the drama that I want, I'm just going to start adding some dramatic components.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=382)** I'm going to put a comma and I'm going to say cloudy sky.
>
> **[6:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=385)** Let's see what that does.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=386)** It's also very often a good idea to add extra or change your prompts just one factor at a time so that you can tell really what's making a difference.
>
> **[6:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=397)** Okay, it's following my instructions.
>
> **[6:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=403)** I like this better, this is a good cloudy sky.
>
> **[6:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=406)** That's a good cloudy sky.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=407)** Again, try to ignore the messed up faces, we'll talk about that separately.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=411)** You know, looking at these, I like this better.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=414)** I don't like the green lawn.
>
> **[6:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=416)** I would really like to not have the green lawn there.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=418)** I don't know why I like this color palette better, but also just this feels like, I don't know, like we're on a miniature golf course or something.
>
> **[7:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=425)** So let's get rid of the green lawn.
>
> **[7:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=427)** Well, I haven't asked for a green lawn, but I do have here a negative prompt.
>
> **[7:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=431)** Anything that I put in here will not be in my final image.
>
> **[7:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=436)** So I'm going to say green grass, I'm going to say green lawn, I'm not sure what the correct term would be.
>
> **[7:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=441)** Now when we generate, sure enough, none of these have my green lawn.
>
> **[7:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=448)** Ooh, I like this, I like this dramatic camera angle.
>
> **[7:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=451)** We have stumbled into some camera control here.
>
> **[7:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=455)** Now, you might say, how does a negative prompt for green lawn give us camera control?
>
> **[7:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=459)** It doesn't.
>
> **[7:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=460)** Earlier I said that working with Stable Diffusion is a lot like fishing or mushroom hunting, and that's what's just happened, we have made a find.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=467)** Now remember, each of these images has a different seed attached to it.
>
> **[7:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=471)** It was rendered out of a different piece of noise that Stable Diffusion has found in a different place in its big galaxy of images.
>
> **[8:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=480)** So it would be nice to stay around this space.
>
> **[8:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=484)** Well, we can do that by coming to this image, oops, coming to this image and finding out what the seed is, here it is.
>
> **[8:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=494)** I'm going to select that and copy it and come over here and paste it into the Seed field.
>
> **[8:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=500)** Now, when I generate, I'm going to generate four images.
>
> **[8:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=503)** The first one again is going to be this image, but then it's going to generate three more.
>
> **[8:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=510)** Okay, so these three images are all a little bit similar, they're all kind of from this lower angle.
>
> **[8:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=516)** They don't all have the same composition, but they do have that in common, we're still keeping with our good sky.
>
> **[8:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=521)** So we're still getting very random results, I don't know why the sky turned purple.
>
> **[8:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=525)** In fact, let's just say we don't want purple sky, I know that.
>
> **[8:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=530)** And I like the lighting here.
>
> **[8:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=535)** We can maybe look for stronger cloudy skies or we can just keep going, understanding that this is a random process.
>
> **[9:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=543)** And so we're looking for the part of image space that tends to lend good results and we're looking to keep refining our prompt, either adding things or removing things.
>
> **[9:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=554)** Yeah, I'm not seeing much there.
>
> **[9:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=556)** I'm going to crank this up to 10 and really let it rip.
>
> **[9:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=563)** And here we are.
>
> **[9:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=564)** Let's get in close on some of these.
>
> **[9:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=567)** As you can see, it's perfectly capable of rendering a nice face, it just doesn't do it all the time.
>
> **[9:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=572)** And she's poorly composed, she's got her back to us.
>
> **[9:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=575)** She's turning into rock.
>
> **[9:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=578)** This isn't bad, it doesn't have the serious business climate that I want.
>
> **[9:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=582)** I like this.
>
> **[9:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=585)** That's not bad.
>
> **[9:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=585)** So we've got some good strong poses here, some good sky.
>
> **[9:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=590)** So I could, if I wanted to, pick one of these, grab its seed number, throw it in and keep heading in that direction.
>
> **[9:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=595)** This is the Stable Diffusion prompt writing process.
>
> **[10:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=600)** Let's add just a couple more things, and then I'm going to ask you to go off on your own.
>
> **[10:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=603)** I'm going to say I want detailed, I'm going to add 8K, I'm going to add photorealistic.
>
> **[10:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=609)** These are all things that will get me a different type of image.
>
> **[10:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=617)** And here we go.
>
> **[10:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=618)** Nothing, no great profound discoveries here.
>
> **[10:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=621)** This isn't bad.
>
> **[10:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=623)** But they didn't affect a huge change, and sometimes it's like that.
>
> **[10:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=627)** So what I would like you to do now is go play on your own with trying to come up with a good shot of a woman in business casual clothing in front of Stonehenge.
>
> **[10:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=634)** If you think you've got a better idea for raising some money for this product that we're going to try and sell, that's great, follow those ideas.
>
> **[10:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=642)** Work with your negative prompt, your normal prompt.
>
> **[10:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=645)** And I also want you to play with changing the order of things.
>
> **[10:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=648)** As far as Stable Diffusion is concerned, the closer things are to the front of the prompt the more important they are, the more it's going to pay attention to those things.
>
> **[10:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=657)** So maybe try throwing photorealistic up at the front, maybe move cloudy sky to the back, see what happens.
>
> **[11:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-basics?u=76281980&t=662)** Think of some other keywords, put them in there, and see what you can come up with.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this. (2), throw (2), module (1), interface (1)
> **Versions:** 1.4 (5), 1.5 (5), 2.0 (2)
> **Definitions:** is a  (6), is an  (1)
> **CLI Commands:** make (4), find (1)
> **URLs:** [invoke.ai](https://invoke.ai) (2), [playgroundai.com](https://playgroundai.com) (2)
> **Analogies:** it's like (2)
> **UI Navigation:** select the (1)
> **Warnings:** be careful (1)

#### Questions to answer when writing prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=0)** - [Narrator] Working with an AI image generator can be a little weird because you set out to make an image and immediately find yourself facing a writing problem, namely the problem of trying to think of words that describe the scene that you want.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=12)** If you're someone who spends more time image making than word crafting, this can be a frustrating barrier.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=18)** Making all of this more difficult is the fact that the creators of Stable Diffusion have never published any documentation.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=23)** There is no list of keywords that were in the training set, and there are a lot of possible words out there in the world.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=30)** Something that can make describing a scene easier is to ask yourself some questions about the image that you have in mind.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=37)** The answers to these questions can go straight into your prompt.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=40)** First, what is your subject?
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=43)** Now, that may sound like a simple question, but consider something like a post-apocalyptic cyberpunk urban adventurer scene.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=51)** There are a lot of evocative, descriptive words in there, but there's not actually a subject.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=57)** A subject is a thing you can point at and reference specifically.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=62)** Next, what is the style of the image?
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=64)** Is it a photo, an oil painting, a 3D rendering?
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=68)** Style doesn't have to be a medium.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=70)** For example, maybe you are looking for a pulp novel cover, a movie poster, a xeroxed flyer.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=76)** I'm using the word style pretty broadly here.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=78)** Photo versus oil painting.
>
> **[1:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=80)** Those are two very different mediums while tarot card is a very specific look using a very specific medium.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=86)** Note also that these examples that I'm giving you are just examples.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=89)** These are not in any way meant to represent a full list of the words you can choose to use to answer this question.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=95)** That's true for all of these other questions, too.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=99)** Think about defining a camera angle or point of view.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=101)** Should your subject be seen from above or below?
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=104)** I expect you're going to find that Stable Diffusion does not respond as well to camera directions as you would like.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=110)** If you were picturing a low angle, looking up at a subject, writing that specific thing into your prompt probably won't get it for you.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=117)** Don't spend too much time trying to compose your shot and set your camera angle using the prompt.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=121)** It's very limited, and there are many other tools that give you precise control over composition, camera angle and framing.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=128)** In fact, you may not need any camera angle descriptions in your prompt at all, but this is still a good question to ask yourself to help you refine your own idea of what you want and what the final image should look like.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=139)** What's the background? Where is your subject?
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=142)** There's a big difference between a photo of a girl on a submarine and a photo of a girl at the zoo.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=147)** Simply stating where your subject is is usually enough for Stable Diffusion to create some kind of background detail.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=153)** You can also say, standing in front of whatever, the pyramids, a station wagon, a soccer field.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=160)** Do you envision particular lighting, dramatic lighting, dark, moody lighting, fall light, high key, whatever?
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=167)** A lighting prompt may be the thing that has the greatest impact on the atmosphere in your scene.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=172)** It might also be the part of the prompt that lets Stable Diffusion know what time of day your scene is set in.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=179)** Do you envision a particular color palette, black and white, pastel, saturated?
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=183)** You can even specify a particular tint or wash such as a blue tint.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=189)** You don't have to answer every one of these questions for every image, but these are definitely categories of modifiers that Stable Diffusion will likely respond to.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=197)** Perhaps more importantly, answering these questions will help you better envision the image that you want.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=202)** Also, when writing your prompt, you do not have to include the answers to all of these questions in this order.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=209)** As we saw earlier, keyword order has a big impact on your final image.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=213)** Oh, also, Stable Diffusion is not case sensitive.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=216)** Upper case doesn't seem to matter at all.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=220)** The answers to these questions are not the only things that might go into your prompt.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=223)** Stable Diffusion responds well to a lot of words that don't fit into any of these questions.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=227)** Remember, the image you want is sitting out there somewhere in the virtual space defined by your Stable Diffusion model, and you're trying to navigate to it.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=235)** Any word you put in your prompt can help steer or nudge the system to the image that you want.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=239)** For that reason, there are a lot of extra modifiers that people often add to a prompt.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=244)** For example, you might see people adding things like 8K or 4K or photorealistic or HDR.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=252)** These all help to increase the level of detail in the image, sometimes.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=257)** If they're after a photorealistic portrait, then they might add detailed skin in addition to the photorealistic keyword.
>
> **[4:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=265)** Octane render is another one that you'll see a lot.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=267)** If that doesn't mean anything to you, know that Octane is the name of a 3D rendering product.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=273)** Images rendered by Octane are known for a particular look, especially high detail.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=278)** Remember, the text descriptions that Stable Diffusion knows are things that were scraped from the web alongside images.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=285)** So, think of how someone might describe an image or the subject of an image in say a stock photo library or on Etsy or in a product catalog.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=294)** Think about if you were posting an image to the web and you wanted it to be found in a search.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=299)** What words might you want to associate with that image?
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=302)** Some of those words would be descriptors of the content of the image.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=305)** Some would be descriptors of the style.
>
> **[5:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=307)** Some might even just be loose associations, things you add to, again, nudge the search.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=313)** Maybe you add Middle Earth to a prompt to get a pastoral, moody feel, even if you're not specifically creating a fantasy image.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=322)** I've given you these lists of words which are hardly comprehensive for their questions, but as you will see in a little bit, there are other places to find examples of effective prompt terms.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/questions-to-answer-when-writing-prompts?u=76281980&t=332)** Before we get to those, let's get back to some imaging.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (2)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Env Vars:** hdr (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [narrator] (1)

#### PNG information and saving
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=0)** - [Instructor] Getting back to our woman in front of Stonehenge image.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=4)** Let's look at some of the images that I've come up with and how I came up with them.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=8)** To do that, we're going to take advantage of a feature in AUTOMATIC1111.
>
> **[0:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=13)** If you go over here to the PNG info tab, you'll find a great analysis tool.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=20)** So to use this, I just drop an image that I have saved back into this little panel here.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=26)** So I'm doing this from Bridge right now.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=27)** I could just as easily do this from the file manager of my operating system.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=31)** So I put this image in here and now it's showing me every parameter that was set to generate this image.
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=38)** So you can see my prompt here, my negative prompt here, how many steps I was using samplers, CFG scale.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=44)** We're going to talk about all of that.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=46)** Here you can see the seed, the size it was rendered at, all sorts of stuff.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=50)** Most of this is information you're never going to use.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=54)** There's no tool for adjusting gamma or color space or any of that kind of stuff.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=58)** But this prompt and seed and these parameters right here, this is really handy to have if you want to recreate a specific image or if you want to try to figure out how to build a style of an image that you like.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=71)** So having this stuff in here means you don't have to be keeping detailed notes somewhere else.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=77)** A curious thing about this, if I drop this into Bridge or Photoshop or some other place that normally allows me to read metadata, none of this stuff is there.
>
> **[1:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=85)** It's not in the, it's not in the IPTC data or anything.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=88)** I don't know where it's hidden away but you can get to it through this PNG info tab.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=93)** If you are using a different stable diffusion client, you're going to want to look around for something like this because it's really handy as you're iterating.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=102)** But also just as a way to learn.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=104)** We're going to devote some time to the face problem.
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=107)** So we're going to do that later.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=109)** I still want you to ignore it for now.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=110)** However, there is a quick thing you can try to get your faces under control, and that is to put descriptions of bad faces into your negative prompt.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=119)** So here I've added, well, here's the Greengrass and green lawn that we added in the previous video, but I've also added to my negative prompt, distorted face, disfigured face, deformed face, deformed, disfigured, ugly.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=132)** Any way you can think of to describe those messed up faces, stick 'em into the negative prompt and maybe you'll get somewhere.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=139)** After I did that, I ended up with a bunch of images of the woman looking away from me.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=146)** Its a snarky little AI sometimes.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=149)** This was its way to get around the face problem, which is clever, but really not what I was looking for.
>
> **[2:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=156)** I also experimented with adding the word closeup at the start of the prompt, which helped some, it gave me fewer really long shots, but I also ended up with a lot of shots of Stonehenge by itself.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=168)** Some of them were quite nice, so they might be useful but obviously they don't fit my goal right now.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=174)** One way to control the composition in any prompt is to specifically state something that you want to see in the frame.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=182)** So if you say hands on hips, here we go.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=186)** If you say hands on hips, then the AI can only go so close and still manage to show hands on hips.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=193)** If I had added cowboy boots, then there would be a good chance of getting a full body shot.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=198)** So if a camera direction in your prompt is not working for you, which they usually don't, then add specific things to your prompt that you want to see and that will force the AI into compositions that make those things fit.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=210)** Now, in working on these, I did play with grabbing specific seeds from images that I like and generating more images from those seeds.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=217)** But mostly I just rendered large batches, tried different ideas in the prompts and then I rendered more large batches.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=223)** I did though come up with some things that I like.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=226)** I've got 16 images here.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=228)** Most of them have scrambled faces.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=230)** I chose them either because I do like this lighting and I do like this as a composition and as a pose for her.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=238)** If she were looking into straight into the camera, maybe with a little bit of attitude, that might be nice.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=242)** Her posture might be a little afraid.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=244)** I don't know.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=245)** Another good strong pose.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=246)** I like the low camera angle.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=249)** I really liked this, the idea of standing on a path because then we get these cool leading lines heading right off into Stonehenge.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=256)** I've never been to Stonehenge, Stonehenge.
>
> **[4:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=258)** This may be complete nonsense.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=260)** There may not be a path like this.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=261)** In fact, I don't think you're allowed to walk up to it by herself, but still as an image, I like it.
>
> **[4:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=266)** So that's something to remember.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=267)** I would like this if it, if she were facing us.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=270)** What I like about this is she's now a vertical piece just like the stones are.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=276)** Same thing here.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=277)** I like her framed by the rocks and then the dramatic backlighting.
>
> **[4:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=280)** If we could just turn her around.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=281)** Now, if you're thinking, why did you save these images?
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=284)** The women are all facing the wrong way or have bad faces or whatnot, because as you're going to see, we might be able to work with these renderings.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=290)** We might be able to hand it this image and say do it again with her facing us.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=294)** So that's why these are worth keeping.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=296)** I like her posture here.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=298)** She's, I like the movement of this arm, the low angle, Stonehenge in the back.
>
> **[5:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=303)** This could really turn into something.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=304)** I don't mind that she's cut off at the shins.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=306)** If she were cut off at the knees, that would bother me because you should never cut someone at a joint.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=311)** That's just creepy looking.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=312)** But this, I like, this could be, this is a pose of strength or playfulness or something that I like.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=319)** Another good one here.
>
> **[5:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=320)** I wish you weren't pouting and didn't have one eye larger than the other, but you get the idea.
>
> **[5:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=323)** Still as a full body shot, I like this.
>
> **[5:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=325)** I also like what she's wearing.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=326)** I like these boots, so I'm finding stuff in all of these.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=329)** If she were looking at the camera, that would be cool.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=332)** So there's good stuff in these.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=335)** I actually like, this is a great example of a shot where it's going to work with her looking away.
>
> **[5:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=338)** That was not something I had considered in in my head.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=341)** She was always looking into the camera.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=342)** So that's a nice discovery.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=345)** She's a little tough looking, but maybe that works.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=348)** I like the crossed arms.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=349)** I just wish she didn't look angry.
>
> **[5:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=351)** And this one is, is just playful.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=352)** So I, I got stuff that I, that I liked here.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=355)** Again, later, we'll see why this is useful.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=359)** Now, as you've seen in AUTOMATIC1111, as the system generates images it shows them to you down here.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=366)** If you want a copy, you need to select the image you want.
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=369)** Press the save button and then you get the, this download links.
>
> **[6:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=373)** The download link.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=374)** Other systems will have other ways of sending you finished results but the results will always be in PNG format.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=381)** If you are running your own AUTOMATIC1111 server you should know that every image that the system generates from the text to image tab, which is what we've been working in, all those images get put into a special folder.
>
> **[6:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=393)** Inside my AUTOMATIC1111 folder is an outputs folder and inside there are a bunch of folders, including text to image.
>
> **[6:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=400)** And inside there I will find images ordered into sub folders by creation date.
>
> **[6:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=405)** So you can go back at any time and pull images out of these folders.
>
> **[6:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=409)** The images aren't large, but eventually this folder could chew up a lot of disc space so you'll want to empty it from time to time.
>
> **[6:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=415)** The thumbnail grids that it creates get put in here and images created by other modules such as Image to Image which we'll see later, get put here.
>
> **[7:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=424)** Again, from time to time, you'll want to empty these folders.
>
> **[7:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=427)** If you share your system with someone else, you might want to tell them that all images that they generate are ultimately visible to you since you're the system admin or you might not.
>
> **[7:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=437)** One thing to note about these image files whether you download them or pull them directly from the outputs folder, the file name of these images always includes first and image number and then the seed number that was used to generate the image.
>
> **[7:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=450)** So even if you don't have a way, something like the PNG info tab, even if you don't have access to that you've still always got the seed number.
>
> **[7:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=458)** So at this point, I don't have a usable image yet, but I do have some more clear ideas in my head of things that I like and things that I don't like, which is valuable.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=467)** We're iterating strongly a this point.
>
> **[7:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=469)** During these prompt writing lessons, I want to encourage you to spend time playing on your own.
>
> **[7:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=473)** Since there's not a strict procedural process to prompt writing, you need to start working up your own experience and your own collections of phrases and tokens that yield things you like, both for regular prompts and negative prompts.
>
> **[8:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=486)** Knowing of course that these things won't always yield what you like.
>
> **[8:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=489)** Working with an AI is like watercolor painting.
>
> **[8:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=493)** It's going to smear and blend and bleed some on its own and you've got to get comfortable with just going with that and seeing where it leads.
>
> **[8:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=501)** Fortunately, the prompt is not the only control you have over your image.
>
> **[8:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/png-information-and-saving?u=76281980&t=504)** We're going to look at lots of other tools that Stable Diffusion provides to help you improve, refine and control your image generation.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), this. (2), yield (2), let (1), else. (1)
> **Env Vars:** automatic1111 (4), png (4), cfg (1), iptc (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** just like (1), such as (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)
> **Best Practices:** you should never (1)

#### Using CFG scale
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=0)** - [Instructor] Language is a slippery thing.
>
> **[0:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=1)** Different people can interpret the same sentence in multiple ways, and the AI in stable diffusion is no different.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=7)** However, unlike that annoying coworker who always misinterprets you, stable diffusion allows you to specify how freely it should interpret your prompt.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=18)** You do that with this control labeled CFG Scale, or Classifier Free Guidance.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=25)** This is a great example of a parameter name that was lifted from the underlying theory, but that doesn't mean much in the real world.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=31)** Other interfaces may show you something else.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=34)** mage.space, for example, has these guidance scale buttons down here, unless you click this Advanced Mode switch, and in which case, it then turns into this scale with some hints down here at the bottom.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=48)** Low, normal, Strict, Very Strict, Insane.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=51)** What that's referring to is how tightly it pays attention to your prompt.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=58)** Let's look at another example.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=59)** Here in dreamlike.art, if you turn on the advanced mode, you get a guidance scale.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=65)** They drop the classifier free bit, and they give you a recommended value of 14.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=69)** That's different than what's in AUTOMATIC1111 and mage.space.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=74)** They describe it as how much to prioritize prompt over creativity.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=78)** I'm not crazy about this definition, because the AI is not actually creative, but maybe the best way to think about it is just this word guidance, which is not shown in AUTOMATIC1111, but CFG, Classifier Free Guidance Scale.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=93)** If you mouse over it, it shows that to you.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=95)** What they mean by guidance is how much will the prompt guide the de-noising process that leads to a final image.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=105)** If I turn this way down, then the prompt will have very little effect on the process of creating an image.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=112)** If I turn it way up, then in theory, it will have a tremendous effect.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=115)** So as you can see here in stable diffusion, the scale goes from one to 30, and defaults to seven.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=124)** Over there in the dreamlike.art, theirs defaults to 14.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=129)** mage.space doesn't have numbers.
>
> **[2:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=130)** Oh, yes, they do.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=132)** Their numbers show up when you mouse over these spots here.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=135)** So they default to seven and a half.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=136)** Now you may think, "Why would I want it to not do what's in my prompt?
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=141)** Why don't I just turn this up all the way?"
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=143)** Well, let's take a look.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=145)** I've got the prompt that I've been using here that has been generating messed up faces and getting me some usable results sometimes, and not other times.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=153)** Oops, my Batch count was set to one.
>
> **[2:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=156)** Let's crank that up to four, and try that again.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=158)** So I've got the CFG Scale set to seven, so it's at its default setting, and it's generating images very much like the ones we've been seeing before.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=169)** I actually kind of like that pose and that composition.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=170)** Interesting in black and white, I hadn't considered that before.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=173)** So if I turn this down to one, its lowest setting, and generate four more images, now we're having very little guidance from the prompt.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=182)** The AI is just free to do whatever it wants.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=184)** So here, it left the person out altogether.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=188)** It's been doing that even with it set to seven.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=190)** Notice that we've had a loss of saturation, and there's some aliasing and other weird artifacts along the edge.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=202)** This doesn't look like Stonehenge.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=203)** It's not stones in a circle.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=206)** It's just dropping rocks all over the place.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=207)** Let's do four more and see.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=208)** So it's taking great liberties with really every part of the image.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=211)** It's not rendering Stonehenge correctly.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=214)** It's sometimes putting in a woman, it's sometimes not, and I can't even really tell what she's doing when she is.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=220)** I don't even know, that's some kind of bipedal creature wearing a poncho, it looks like.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=223)** Here we got a couple of people that barely look like people and a wall.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=226)** So it's pretty out there.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=228)** So let's take this up.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=230)** Let's just go all the way, we'll go to 30.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=233)** Yeah, and now, curiously enough, as I've said follow the prompt more, it feels like it's being more creative.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=242)** I don't know how it got to here.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=245)** I've lost Stonehenge altogether.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=246)** These are not photorealistic.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=248)** So it's just gone, it's gone way out of the park on either ends of the scale.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=252)** Let's say instead of seven, we do something like 20.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=260)** And even this is looking pretty fantastical.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=263)** In my experience, sticking around seven is usually the best thing, but you hear that, and it tends to make you forget about this control, and sometimes this control really will make the difference between you getting an image that you want and not.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=276)** I can't think of an instance where I've turned it down and ended up with better results, but turning it up, sometimes even as high as nine, will sometimes make it recognize something in my prompt that it was ignoring.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=288)** If I've asked her to hold a football, or something like that, and the football's not showing up, I can turn up the CFG Scale, and then the football will show up.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=296)** An interesting thing about teaching this course, you may be saying, "Well, why don't you show me that example?"
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=300)** Because there's this whole random element.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=302)** There's no guarantee that if I try that example right now, it's going to work for you.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=306)** You just got to, or it's going to show up that way, you've just got to take my word for it.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=309)** I like this image.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=311)** This is an interesting color palette.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=311)** Stonehenge has gotten a little wonky, but I like the idea of her wearing a skirt that looks like stone.
>
> **[5:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=316)** So that's maybe something to remember as we move forward, that that was a cool idea.
>
> **[5:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=320)** If you're trying to generate something that stable diffusion doesn't know about, a duck riding on a dragon, something that it definitely doesn't have a picture of, then increasing CFG Scale probably will have more of an impact.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=332)** It needs more guidance at that point.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=334)** Note also that the model you are using can impact how effective the CFG Scale slider is.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=342)** So don't forget about CFG Scale.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=344)** It's not a magic bullet.
>
> **[5:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=346)** If you're having bad results, turning it up is not going to suddenly fix your image unless it does, and there will be times when it does, but never by turning it up very far.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-cfg-scale?u=76281980&t=354)** It's just another parameter to try as you go, as you're iterating, as you're generating lots of batches.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), else. (1), switch (1), case, (1)
> **Env Vars:** cfg (7), automatic1111 (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), kind of like (1), picture (1)
> **Best Practices:** recommended (1), don't forget (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Prompt weighting
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=0)** - [Presenter] So I'm continuing to toil through this prompt writing of trying to get a woman standing in front of Stonehenge.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=5)** And I have a prompt here that says hands on hips and I just asked it at a CFG scale of seven.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=12)** I just asked it for four images and not in a single one of them does she have anything on her hips.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=18)** Here's a purse on a hip, sort of, but it's just missed it entirely and nevermind that she's looking away and so on and so forth.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=28)** I mentioned earlier that the order that you put things in really matters.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=33)** If I put hands on hips closer to the front, then that will have more weight, but I can't really go closer to the front.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=39)** I've got closeup photo, I need to say that.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=41)** Woman in business casual clothing standing in front of Stonehenge.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=44)** That needs to come before hands on hips, but I can still lend weight to a particular token or set of tokens in my prompts so that Stable Diffusion will add more emphasis to it and possibly stand a better chance of putting it into my image.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=57)** The syntax for that varies a lot, depending on which instance of stable diffusion you're using.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=63)** If you're using AUTOMATIC1111, the easiest way to do this is select the token that you want to add weight to.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=67)** And on the Mac, hold down the command key.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=70)** on Windows, hold down control, and just press the up and down arrow keys.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=75)** So you can see I'm adding more weight in in tenths of a unit increments.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=81)** So I'm going to bump this up to 1.5, and now hit Generate.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=86)** Oh, there's a hand on a hip.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=87)** There's just some hips so it's maybe got the weight a little high and then these women don't have any at all.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=92)** Okay, let's bump the CFG scale up a little bit and see if that helps at all.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=96)** Make it follow the prompt a little more closely.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=99)** Well, it's really gone off the rails here.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=101)** All right, I'm going to not stop this video.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=106)** I'm going to keep going here because this is what working with Stable Diffusion is like.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=110)** Plainly that change, hands-on hips 1.5 really threw a wrench in the work.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=115)** So I'm going to bump it down to 1.3.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=116)** Ah, there's some hands on hips.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=118)** There's hands in the air.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=119)** Ooh, I actually like this image. (chuckles) So maybe we're getting closer.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=123)** Let's bump down to 1.2.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=125)** Changing the weight of the hips is affecting a change in the image.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=132)** It's just curious how often it's not really hands on hips but it is making them change the pose.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=138)** Let's bump up the weight of something else.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=139)** Let's add more, let's add more detail.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=144)** Let's see if that changes anything.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=146)** If you are using another instance, wow, it's interesting, isn't it?
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=150)** How changing detail has radically altered my composition.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=154)** This is how weirdly intertwined the tokens are in Stable Diffusion.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=159)** I'm going to take that out and put this back to where it was and see if that gets us back on track.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=167)** This is a weird thing about trying to teach Stable Diffusion.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=169)** I would like to give you a great example of something, except there's this whole random element.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=173)** I can't ever tell if a great example of something is going to come up.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=177)** If you were using an instance besides AUTOMATIC1111, then you may have to either type this by hand.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=184)** For instance, in made shot space, you have to use a colon and this number syntax each increment in tenths of the a unit.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=194)** Another thing you can do is just put parentheses around something.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=197)** Let's beef up the cloudy sky.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=199)** If I put one set of parentheses around a token, then that increases the strength by 0.1.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=206)** If I put two sets around it, that increases it by 0.2.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=210)** Let's see what that does.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=212)** That's a common syntax in most instances.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=215)** In a lot of instances of Stable Diffusion, there won't be a negative prompt box.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=219)** Instead to get a negative prompt, you'll write a token and put square brackets around it.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=223)** The greater the number of square brackets, the greater the increase in negativity.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=230)** So that is a more dramatic sky, but it's coming at the cost of Stonehenge.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=235)** It's dropped out of the picture some.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=236)** So I'm going to take some of the emphasis off the cloudy sky because it was plainly making things too much about the cloudy sky.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=244)** So what we might need to do here, since we want more drama on the cloudy sky, but we're losing Stonehenge, is let's in increase the Stonehenge strength.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=253)** We keep losing it.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=254)** Let's make sure it doesn't drop out.
>
> **[4:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=255)** There we go.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=256)** Hey, look, there was a woman with hands on her hips and a good strong Stonehenge and a dramatic sky.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=260)** It's starting to come together.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=261)** Look at that.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=264)** I'm not crazy about the expression of her face but at least she has a face.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=267)** It's a non-disfigured face, so we can work with that.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=270)** Stonehenge has picked up leopard spots but we might be able to do something about that.
>
> **[4:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=274)** This isn't bad either, so it's working.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=276)** Combining these, wow, look at that arm.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=278)** That's great.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=279)** Well, arms and hands are as flaky as as faces are sometimes.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=283)** We'll fix those later.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=285)** Anyway, you can see that changing weights is making a difference, finding a balance of different weights so that one thing doesn't take over too much.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=294)** That's a tricky bit that you've got to play with.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=296)** This process that I'm going through here, again, the reason I didn't stop the recording and try starting something else hoping that I would get a good result right away is that I just rarely get a good result right away.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=305)** This is what you have to do, is just iterate through this process of playing with weights.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=309)** I use weights in just about every prompt that I make.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=312)** They're very important.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=313)** You need to practice with them.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-weighting?u=76281980&t=314)** If you're using something other than AUTOMATIC1111, then look for a help file that tells you the syntax for indicating weights.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), else. (1)
> **Versions:** 1.5 (2), 1.3 (1), 1.2 (1), 0.1 (1), 0.2 (1)
> **Env Vars:** automatic1111 (3), cfg (2)
> **CLI Commands:** make (3), rails (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), picture (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [presenter] (1)

#### Writing prompts for series 2 models
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=1)** - [Instructor] In Stable Diffusion terms, a model is simply the set of trained data that serves as the basis for all imaging.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=7)** As I mentioned earlier Stable Diffusion models fall into two categories, version 1.X models and version 2.X models.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=16)** When you train a new model for stable diffusion you use an existing model as the basis for the one you're training.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=23)** If you find a new model to download, something we will look at later, you should see a listing for what source model, or in this case base model, that this model was generated from.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=35)** And this will usually be 1.4, 1.5 or 2.1.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=39)** Everything that we have looked at so far, in terms of prompt writing, applies to any model that was based on the original 1.4 or 1.5 version.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=48)** Version 2.1 has important improvements over version 2.0, so most people who want to make a version derived from the 2.0 series use the 2.1 model as a source.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=59)** Now when I say a version 2.0 model what I really mean is a 2.1 model.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=64)** No one's using 2.0 anymore.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=66)** Similarly, when I say version 1.4, I really mean 1.5.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=70)** 1.5 was based on 1.4.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=72)** You can think of it as one series models and two series models.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=75)** So let's take a look here.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=77)** We're back to our prompt that we've been working with and this is on the 1.5 model.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=82)** And as you can see, I'm getting the same kind of results that I've been getting throughout our demos here.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=88)** Got my regular prompt and my negative prompt.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=90)** I'm going to switch to a 2.1 model, and you can tell from the listing here that it's also pruned.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=96)** Again, that has no impact on image generation.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=99)** That just means that we would not want to train a new model off of this model.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=103)** More importantly, is this 768 number.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=105)** Version two models are trained on a data set at 768 by 768 size instead of 512 by 512 size.
>
> **[1:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=113)** So that's nice, right out of the gate you get larger models.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=116)** I'm going to switch to that now, and you can see I'm getting a little progress bar.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=119)** This is showing that the model is loading into the memory on the graphics card.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=124)** If I hit generate before that's done, I will have to wait for that to finish.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=128)** So sometimes if you quickly change a model and hit the generate button you'll see that it's taking longer 'cause you've got to wait for the loading.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=134)** So before I do anything else I want to change my size to 768 by 768.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=139)** Yes, you can render a 512 by 512 model with a version two model.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=144)** I'm sorry, you can render a 512 by 512 image with a version two model, but it's going to have problems.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=149)** Best to start with at least the base size of 768 by 768.
>
> **[2:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=156)** As before, I sped that up.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=158)** I should say that rendering with this model takes a little bit longer, and that's mostly because of the change in image size.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=164)** Rendering a 1.5 model at 768 by 768 will also take longer.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=168)** So you can see that I'm getting pretty much the same sort of results.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=171)** I've still got the messed up faces.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=174)** I can't say in general whether it does a better or worse job overall.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=178)** Right away I would say this is doing a pretty comparable job to the 1.5 model, and it's yielding a larger result.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=187)** With this second batch I've actually got some useful faces here.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=191)** Well, somewhat useful faces.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=193)** I like that composition.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=194)** I wish she were over a little bit more to the right, but again, maybe there's another idea.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=198)** These are maybe not looking quite as photorealistic.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=201)** Some people say that 2.0 models don't work as well if you don't have a negative prompt, that 2.0 and 2.1 models seem to require a negative prompt.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=211)** If I take the negative prompt out I don't see a huge difference.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=215)** Now this is a 2.1 model.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=217)** Apparently 2.0 models were a little worse in this regard.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=221)** So you can see here our green grass is back.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=224)** So definitely we're losing some of the advantages of a negative prompt, but I don't see that the images are particularly worse.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=230)** Overall, I don't like the quality as much.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=232)** It's more cartoony.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=233)** There are keywords you can use that will kind of trick it into more photorealism.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=237)** If you find a 2.1 model that you want to use, I think it's really worth digging through a prompt engineering site and looking at what people are using for prompts.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=247)** That's going to be the best way to find the keywords that yield particular results.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=251)** And you may find yourself using a different set of modifiers than you did with your 1.0 models.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=257)** I'm going to up the photo realism here quite a bit and see if that gives us anything different.
>
> **[4:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=266)** Not a big change.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=267)** So I'm going to be sticking with one series models for the rest of this course.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=273)** If you find a two series model that you really want to use because it has a feature that you like, it's going to take some study.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=279)** It's not going to take any theory that's different than anything we've talked about.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=282)** It just means you're going to have to really go look at what keywords work well to get certain effects.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=288)** You got to do the same thing with your one series models, so it's just going to be a different set of modifiers and parameters that you use with a two series model.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=296)** There are some other differences.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=297)** It is more difficult to get a not safe for work image out of a two series model.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=301)** It's a little bit easier with a 2.1 model, but not as easy as with a one series model.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=306)** So if you're working in an education environment, 2.0 models or two series models might be the best choice simply for that reason.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=313)** 2.0 models did not respond to celebrity tokens as well as one series models did.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=318)** 2.1 changed this a little, but if you want to render images of celebrities you might be better off using a one series model.
>
> **[5:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=325)** Perhaps most significantly for some people is that two series models do not respond as well to listing specific artist styles in a prompt.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=333)** In some cases a two series model may not respond at all to such promptings.
>
> **[5:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=338)** I'm going to have more to say about the topic of using artist's names in a prompt at the end of this chapter.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=343)** If this is something you want to do, then you should probably stick with the one series model.
>
> **[5:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=347)** Finally, there are a couple of higher end features which we will look at later and which will behave differently in two series models.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=354)** Under the hood, the big change is that two series models use a language model that is open source.
>
> **[6:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=360)** And what that means, hopefully, is that because it's open source, we're going to see a lot of development coming from the Stable Diffusion community.
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=369)** And so over time it may be that we all end up switching to two series models because they enable features that we want because those features are likely to be developed by an open source community.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=380)** In the meantime, most people seem to still be building new models and new features around one series models.
>
> **[6:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=385)** So a change, some kind of big change, coming because of 2.0 just hasn't happened yet.
>
> **[6:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=392)** Also, we're only six months into this software, so who can say.
>
> **[6:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=395)** For the time being, I'm going to stick with one series models and that's how it's going to work for the rest of this course.
>
> **[6:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=401)** That doesn't mean you should ignore two series models.
>
> **[6:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/writing-prompts-for-series-2-models?u=76281980&t=403)** Just know that they're going to require a little study to be able to use well.

> [!info]- Semantic Content
>
> **Versions:** 2.1 (9), 2.0 (8), 1.5 (7), version 2 (4), 1.4 (3)
> **Code Keywords:** switch (2), require (2), from. (1), let (1), yield (1)
> **CLI Commands:** find (5), make (1)
> **Definitions:** is a  (2), means that (1)
> **UI Navigation:** switch to (2)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Prompt libraries and styles
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=0)** - [Presenter] Prompt writing can be pretty overwhelming because you've got the entire English language to work with.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=6)** There are many ways to describe things.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=7)** Where do you start?
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=8)** And by the way, Stable Diffusion does need to be in English.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=12)** The original dataset used English text pairings so that's how the model was trained.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=17)** If you're running your own automatic 1111 server then you should know that there is an extension called prompt translator that will automatically translate prompts into English.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=26)** At the time of this shooting, I couldn't get it to work but things change quickly in the Stable Diffusion world so it might be worth keeping an eye on.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=32)** We'll look at extensions and how to install them later.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=35)** As for learning how Stable Diffusion responds to different ways of describing things you don't have to wallow around in the prompt box all on your own.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=42)** There are a number of sites out there that will help you with prompt engineering as it is being called in some circles.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=48)** Lexia.art is a great place to start.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=51)** Here in the generate tab you get an actual Stable Diffusion instance so you can use this as your Stable Diffusion system.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=58)** But what makes it really useful is simply this home tab which serves as a search engine for images that have already been generated with Stable Diffusion.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=68)** You don't write a prompt in this box you just write the type of search you would put into any search engine and then you're given a bunch of images.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=76)** Now, what's cool about these images is I can find out exactly what their prompt was, their prompt, what model was used, the guidance scale, original dimensions, what it was upscaled to.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=87)** So if I like this look or even if I like this subject matter I know the exact prompt that generated it assuming I'm using the same model.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=96)** So this is a great way to learn what does what within a prompt.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=99)** It can even be a great starting point for your own prompts.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=102)** Other sites that offer similar services include [krea.ai](https://krea.ai), similar interface, and open [art.ai/presets](https://art.ai/presets).
>
> **[1:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=113)** You got to have the slash presets in here or you get to another part of the site.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=117)** Again, very different selection of images, but that's great.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=120)** They're divided into categories right off the bat.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=122)** So in addition to searching, you immediately have these categories that you can dig into.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=127)** I confess I feel a little strange cause here we are getting near the end of the prompt chapter and what I'm telling you is go find someone else's prompt and just use that.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=135)** But the fact is, this is a great way to start working on an image.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=139)** If you can find something similar to what you want start there.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=141)** Continuing the fishing metaphor, are you a bad fisherman if you go to a place where you heard the fish were biting?
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=147)** No, you're just saving the time of iterating up to this point by starting at this point and continuing on from there.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=155)** Back in Stable Diffusion, if you do come up with some kind of style information that you like and you would like to keep it, for example, earlier we had cloudy, 8K, cinematic lighting, octane render, detailed.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=171)** I'm going to take the subject out of this.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=174)** A woman standing in business casual clothing in front of Stonehenge.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=178)** And so now this is just a style.
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=181)** If I come over here, you can see I've already got a couple of Stonehenge styles that I've been saving.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=187)** I'm just going to hit this disc button and I'm going to call this dramatic style and hit okay.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=193)** And now it's added to my style menu over here.
>
> **[3:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=196)** Now anytime I want to do something, a man standing in front of Stonehenge, I can select dramatic style and hit this clipboard button to apply that style.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=211)** So this is just like a little clipboard over here where you can store multiple things.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=214)** If you are using an instance of some kind that doesn't have a feature like this then just get a digital notebook.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=220)** And when you get a prompt or part of a prompt that you like, write it down.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=225)** Recycle. Recycle as much as you can.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=227)** That's what most regular Stable Diffusion users do.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=230)** It's very important to remember if you've got a negative prompt, you need to record that also.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=235)** As you're poking around the web you're probably going to find there are some people who always have the same name in their negative prompt.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=240)** They have a default negative prompt that they use.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=242)** In fact, if you go to a search engine and look for Stable Diffusion negative prompt you will find some generic negative prompts that are meant to eliminate weird faces and hands and that kind of thing.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=253)** So there's nothing wrong with reusing what people have come up with before.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/prompt-libraries-and-styles?u=76281980&t=257)** It's a great way to learn and it's a great way to streamline your iteration process.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** similar to (1), for example (1), just like (1)
> **Code Keywords:** interface (1), this. (1)
> **URLs:** [krea.ai](https://krea.ai) (1), [art.ai](https://art.ai) (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1)
> **Speakers:** - [presenter] (1)

#### Interrogating an image
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=0)** - [Narrator] Stable Diffusion is capable of taking text and turning it into an image, so it probably shouldn't surprise you that it can take an image and derive some text from it.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=12)** Interrogating an image to see how Stable Diffusion understands it, what it recognizes in it, is a good way to learn a little bit more about prompting.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=21)** In AUTOMATIC1111, we can do this using the image2image tab, which sits right here.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=28)** We're going to have a whole chapter on the tools in this tab, so don't worry about a lot of the stuff you're seeing in here.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=35)** For right now, we're interested in these two buttons, Interrogate CLIP and Interrogate DeepBooru.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=41)** I have a picture here.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=42)** I just poked around on my computer, and I found this picture of me from a long time ago, and this is what it looks like.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=49)** I'm going to hit the Interrogate CLIP button.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=52)** CLIP is the name of the language model that Stable Diffusion uses.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=54)** So it looked at this image and identified "a man taking a picture of a field with a camera in his hand and mountains in the background with clouds in the sky.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=64)** Alan Davis, wide angle lens, a character portrait, precisionism."
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=70)** That's not a word I've heard before.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=72)** I didn't know who Alan Davis was, so I looked him up.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=74)** He's a comic book illustrator.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=76)** Because I look so super heroic here, I think that's probably why it picked up on that.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=81)** So if these are the things that it notices, interrogating more images in this way may be a way for you to find some tokens and keywords that actually are effective for getting certain looks.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=91)** Interrogate DeepBooru yields a different set of words.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=96)** "1boy," I don't know what that is.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=98)** "Bald," thanks a lot.
>
> **[1:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=100)** "Beach," there's no beach around.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=101)** "Beard," okay, "blue sky, boat," there's no boat.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=105)** "Chest hair," no, "cloud, cloudy sky, day, eyewear on head, facial hair, goggles, hat, horizon," this goes on and on.
>
> **[1:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=113)** "Ocean," I don't know.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=115)** Obviously a lot of this is wrong, but it's interesting to see that this particular method identified some of these things.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=123)** Now, DeepBooru, as near as I can tell from Googling around, was an anime fan site, or maybe it still exists, that had extensive tagging, and so I guess they have some kind of big database of some kind that is integrated into this button here.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=139)** I don't find this to be as useful.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=140)** Interrogate CLIP can be kind of useful in terms of learning a little more about prompting.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=145)** I wouldn't say go spend time throwing photos in here and reading their CLIP prompt.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=150)** But if there is an image, if you found a photo in a magazine or something and you're really wanting to duplicate a look or a style from it, maybe throw that photo in here and see what tokens come up.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/interrogating-an-image?u=76281980&t=161)** Those might be things that are useful to put into your prompt if you are aiming for an image with a similar look.

> [!info]- Semantic Content
>
> **Env Vars:** clip (5), automatic1111 (1)
> **Analogies:** picture (3)
> **CLI Commands:** find (2)
> **Code Keywords:** super (1), throw (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Artist names and rendering styles
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=0)** - There are currently a few prototype methods for creating animation in Stable Diffusion.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=6)** More accurately, what you're seeing here is a form of rotoscoping using Stable Diffusion.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=10)** Video production is beyond the scope of this course, but keep an eye out for a course devoted to using Stable Diffusion for animation and 3D.
>
> **[0:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=19)** If you look at other prompt writing guides or at sample prompts that are out there on the web, you're going to see something that I haven't mentioned yet, and that is the practice of including a specific artist name in your prompt.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=32)** Stable Diffusion trained itself by analyzing gobs of images that all had text associated with them, and very often that text was the name of the creator of that associated image.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=44)** So, the system ended up learning the rendering styles of many different visual artists in many different media.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=51)** Consequently, it knows how to create images that look like things specific artists made.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=56)** And you can often get those looks simply by adding the associated artist's name to your prompt.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=64)** I would encourage you to not do this.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=67)** Ultimately, this is a personal decision, but I think including artist names in your prompts is a bad idea and I think this for a few reasons.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=74)** First of all, it's creepy.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=77)** There are already a lot of discussions out there as well as lawsuits about whether it was right to train the AI on people's works without compensating those people, or even allowing them to opt out of the training process.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=89)** I can argue that when either way, but when it comes to deciding to specifically create an image so that it looks like it was painted by a particular person who is not you, when you have decided to create an image with premeditated deception in it, when you have decided to basically create a forgery, at that point I think you're on shaky moral ground.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=111)** But also, why would you want to do this?
>
> **[1:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=113)** If you want to replicate the work of someone else, go buy a paint by numbers set.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=118)** You'll achieve the same thing, but along the way you'll experience actual mark making.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=122)** You'll build some mechanical skill and maybe get some insight into why the artist originally built a work in the way that they did, and you'll get away from your computer for a while.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=132)** When you use an AI to generate a work in the style of a specific artist, you are inherently creating an inferior work.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=139)** Because the AI is never going to do as good a job as that person would've done because the AI is too stupid and because it's not them.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=148)** So you're immediately handicapping yourself and you're basically creating what can be called at best a parody.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=155)** I'm a photography instructor and one of the things I've noticed over the years is that beginning photographers often take a photo because they recognize it as something that looks like a photo.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=164)** They spot lighting or composition or subject matter that is similar to things that they've seen in other photos.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=170)** Learning to do that and see that way is a necessary step in becoming a good photographer, but better photographers take photos because they have an emotional response to something, and so they said about trying to figure out how to capture that emotional response using photographic vocabulary.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=186)** From time to time, they create something that doesn't look like a photo anyone has seen before but it works.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=192)** And in those times, they move the medium forward.
>
> **[3:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=196)** I think a lot of people choose to include artists' names in their prompts because they don't actually know what they like or what makes a good image.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=204)** They just know that an image that looks like one made by so-and-so looks cool.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=209)** Rather than throwing in an artist name because that makes an image that you like, Learn why you like the images you like.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=216)** Learn what makes an image work and then start trying to find prompts that achieve that type of image.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/artist-names-and-rendering-styles?u=76281980&t=221)** At that point, you are not being deceptive, you are not stealing someone else's time and effort, your own visual senses growing and developing, and who knows, maybe you'll end up being one of the people who move AI image making into the world of fine art.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Code Keywords:** this. (1), else, (1), while. (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - there (1)


### 3. Advanced Stable Diffusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Sampling and steps
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=0)** - [Instructor] We've got a couple of important things to talk about in this movie but before we get there, I want to take a look at this image which I've come up with.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=6)** I'm liking this a lot.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=7)** I like the closeup angle.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=9)** I like Stonehenge in the background.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=11)** It's still there, but it's mostly about her.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=14)** I want to show you how I got here.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=16)** I've changed my prompt to closeup of a woman in business casual clothing but instead of saying standing in front of Stonehenge, I've made a new token that says Stonehenge in the background.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=26)** Then I've got cloudy sky, dramatic lighting, 8k and I've added photorealistic.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=29)** I've added a lot of weight to photorealistic.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=31)** I've got 1.5 here and I've added weight to closeup, I've got 1.2 over here.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=37)** My negative prompt is still green lawn, green grass, purple sky, disfigured face, deformed face and ugly.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=42)** I don't think it was necessarily that prompt that's working.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=44)** I think I just got lucky.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=45)** We got a nice clean face here.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=47)** What I think is really significant here is that the vagaries of language, there are lots of ways of saying the same thing.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=53)** Instead of saying a woman in business casual clothing standing in front of Stonehenge, pulling this out to a separate thing saying Stonehenge in the background is giving me different results.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=62)** For one thing, it's taking the word standing out and if I have standing in there, Stable Diffusion wants to include feet and legs and so it was getting harder to get a closeup.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=71)** That's not always true.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=72)** I can still get images that don't have her in it at all or that have her standing way in the background, things like that.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=78)** But still, I'm, I'm getting more hits with this prompt than I was before.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=82)** As we discussed earlier, Stable Diffusion renders an image by starting with a field of noise and then making multiple passes to remove that noise from the image in very specific ways that it learned during its training.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=94)** The sampling steps field lets you specify how many of these noise removal passes Stable Diffusion will make when it renders.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=102)** Most Stable Diffusion instances give you this parameter, but not all do.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=106)** I've never seen it called anything besides sampling steps or steps.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=109)** Here's what happens if I take that last prompt and render it in one step.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=115)** It doesn't get any farther than this.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=118)** Two steps gets me here.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=120)** This is the first step where it actually starts to look like a person.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=124)** Four steps is getting closer and then five is the first thing that really looks like a finished person but I don't have much of Stonehenge and she's pretty blurry.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=134)** By 10 steps, we're getting a good, solid image.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=136)** This is a usable image.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=137)** In fact, I may like this one better than the other one.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=140)** I like the rim lighting around her hair.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=142)** Stonehenge kind of doesn't look believable at all but it at least looks dramatic.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=146)** This doesn't look terribly photorealistic.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=148)** It looks very painterly.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=150)** 20 steps is the one that we saw earlier.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=152)** Now things are improving as I increase the number of steps so you would think that 30 steps should be much better and it's about the same.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=160)** If anything, she looks a little more painterly.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=162)** 40 steps.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=164)** I'm sure you've noticed, if I go back to 30, 20, the woman's appearance is changing dramatically.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=169)** Her clothes are staying the same but her face changes a lot as it continues to resample and refine its idea of what a woman standing in front of Stonehenge would look like.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=177)** 50 steps.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=180)** 60 steps, big change there but not in overall quality or rendering style.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=186)** 150 steps.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=187)** At this point, she's starting to look a little too cartoony although another rendering at 150 steps may not.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=193)** None of these look terribly photorealistic so I would need to work with my prompt some more but as you can see, I'm not getting a big change as I'm increasing the number of steps.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=203)** If you had been standing here while I was doing it though, you would've noticed something which is the more steps I have the longer it takes to render.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=209)** The higher this sampling steps number is, the more you're going to be waiting.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=213)** So if you're on slow hardware you really don't want to be cranking up the steps.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=217)** This is why it's nice to figure out what are the least number of steps that you need to get an image that you like.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=222)** If you can work at that level, you're going to be able to iterate faster.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=227)** Check out this image.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=228)** This is the same prompt, very different result.
>
> **[3:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=231)** I really like this one.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=233)** Stonehenge is way in the background and that's not something I ever imagined or envisioned when I was thinking about this image, but if our idea is that we're trying to create an image that links our product to the heritage of Stonehenge then having Stonehenge far away kind of maybe makes sense and it almost looks like it has more power or is more impressive.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=251)** You can't get too near it or something.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=252)** I don't know, I really like this.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=253)** It's not something I had thought of before and so it's a great example of generative imaging helping me brainstorm and come up with something I wouldn't have thought of necessarily on my own.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=264)** So same prompt, same negative prompt, same number of steps, different sampler.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=269)** We haven't talked about samplers yet.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=272)** It turns out there are many different algorithms that Stable Diffusion can use for removing noise from that initial noise field that it starts with.
>
> **[4:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=280)** These are called sampling methods and most Stable Diffusion instances provide you with a choice of samplers.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=286)** In AUTOMATIC1111, we get this big long list.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=290)** Sampling choice can be overwhelming because there can be a lot of options and the names are meaningless and don't you already have enough parameters and settings to worry about?
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=300)** The good news is that most of the time your choice of samplers is not going to make that big a difference.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=305)** Check this out.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=306)** This grid shows you that same prompt that I just showed you rendered in these different samplers at these different steps.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=314)** So columns are steps 20, 30, 40, and 50 and rows are samplers.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=319)** So you can see that Euler yields something very different than what I was just showing you and if you increase the number of steps too far you start getting a second Stonehenge in the sky.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=329)** As we look over these though, we can see that there's really not a huge difference.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=333)** They're all coming up with the same layout.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=336)** They all, some of them start to generate weird artifacts at too many steps.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=342)** DDIM has this woman looking away in at 20 steps but kind of coming back to what we were thinking of.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=348)** PLMS looks a little too contrasty to me down here.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=352)** I know these are small on your screen, I am going to make this document available for you to download so you can look at it up close.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=358)** But even at this thumbnail size, you should be able to tell there's not a huge difference.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=363)** That's good news.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=365)** It turns out that most of the time, your choice of samplers is not going to make that big a difference.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=371)** If you want to do some experimenting what you'll probably find is that some samplers exhibit something called convergence.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=376)** After a certain number of steps, their images don't change.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=380)** Other samplers never converge.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=382)** Their images always alter.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=384)** Some samplers like DDIM produce a useful image in far fewer steps than others, though it might not be as nice as what another sampler will do in more steps.
>
> **[6:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=394)** If you're working with a slower system then you can prototype a prompt in DDIM using just a few steps and get quick renders and then switch to a higher number of steps or switch to a sampler with more steps as you move towards a final image.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=407)** There can be a general difference in rendering speed from one sampler to another.
>
> **[6:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=412)** These samplers tend to all render at about the same speed.
>
> **[6:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=417)** These samplers all render slower than those other samplers but these all run at about the same speed as each other.
>
> **[7:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=424)** In general, I think it's safe to pick a sampler to work with and use it at a moderate number of steps between 15 and 20.
>
> **[7:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=430)** I'm working with 20 here.
>
> **[7:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=432)** When you get an image working to your liking then fiddle with changing the steps or the sampler and see if you get something else you like.
>
> **[7:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=440)** Again, I had that one image that I like.
>
> **[7:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=441)** I changed samplers and I find another image that I like.
>
> **[7:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=444)** That's great, I've got both of them.
>
> **[7:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=445)** I've saved them both.
>
> **[7:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=446)** I've got the parameters for both.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=447)** I can recreate and iterate from either of them from here.
>
> **[7:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/sampling-and-steps?u=76281980&t=452)** To make this choice of steps and samplers and making comparisons easier, Stable Diffusion offers a cool tool which we'll look at next.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (2)
> **Env Vars:** ddim (3), automatic1111 (1), plms (1)
> **Code Keywords:** this. (2), switch (2)
> **Cross-References:** we discussed (1), go back to (1), coming up (1)
> **Versions:** 1.5 (1), 1.2 (1)
> **UI Navigation:** switch to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Automatic iterating
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=0)** - [Instructor] Hopefully by now you've seen that the key to getting anywhere with Stable Diffusion is iteration, trying lots of things.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=7)** And trying lots of variations of lots of things.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=10)** Of course, between how much variation there can be in a prompt and how many parameters Stable Diffusion has, figuring out how to stay organized while you're trying lots of different combinations of things, figuring out what combinations of things to try, that can be tedious.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=26)** Fortunately, Stable Diffusion offers you some scripts down here at the bottom of the interface that automate a lot of this process.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=34)** Before we get to those, I want to mention that I am running AUTOMATIC1111 in dark mode.
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=38)** If you're running your own installation of AUTOMATIC1111 this is an option that you have.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=43)** I'll get to that at the end of this video.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=45)** For now, let's take a look at the prompt matrix.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=48)** I get a few controls down here, but the real action for this script happens up here in my prompt.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=53)** So I've come across this image, which I like okay.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=57)** And it's the first one where I've really noticed, "oh, shallow depth of field.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=61)** That might be interesting, having Stonehenge be a little blurry in the background."
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=65)** So it would be interesting to try this sharp, try it blurry, maybe try it really blurry.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=70)** So I'm fixing my seed so that I will always get the same image.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=74)** And what I'm going to do is have this render a few different versions.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=77)** I've got my prompt up here as normal with my prompt matrix script activated.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=83)** I can now put a vertical bar and start typing in additional things that I would like to have at the end of the script.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=90)** So I'm going to say shallow depth of field.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=95)** I'm going to put another bar and say deep depth of field.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=103)** You need spaces around the vertical bars by the way.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=106)** If you're a photographer, you may know the term bokeh.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=108)** Some people pronounce it bo-kay, it's a Japanese word that is used to describe the quality of unfocused areas in an image.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=116)** It usually equates to shallow depth of field, so I'm hoping that will skew the renderer towards shallow depth of field.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=124)** So what's going to happen is it's going to render an image with this prompt, with shallow depth of field at the end.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=129)** Then it's going to render another image with this prompt with deep depth of field at the end, and then another with bokeh, and then it's going to do combinations of those.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=143)** When it's all done, I end up with this matrix.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=145)** So here's a rendering with none of these keywords in the prompt.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=150)** Here's a rendering with shallow depth of field in the prompt.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=153)** Here's one with deep depth of field.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=155)** Here's one with both.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=157)** That's kind of a useless prompt, but it doesn't know that.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=160)** Here's one with the bokeh keyword.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=162)** Here's one with bokeh and shallow depth of field.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=164)** Here's one with bokeh and deep depth of field, another stupid prompt.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=167)** And then here's one with all three.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=171)** Now, one thing that's cool is it has also rendered out full res versions of each of these.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=176)** So for judging sharpness and focus, it's probably more useful to look at these.
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=181)** But even from this, I can tell, oh, I'm not getting a huge difference.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=185)** Bokeh seems to work the best although it pushes Stonehenge farther away, so that's going to be something I need to fiddle with.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=191)** Now, one interesting thing here is I can add weights to these, so just as I always would, I could either type in by hand or use my keyboard shortcut for adding weight and maybe that'll make a difference.
>
> **[3:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=205)** Let's try another round.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=210)** Okay, that didn't actually make much of a difference, but you know, the point of this lesson is that it was really easy to build this grid.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=217)** This is a really useful way of trying a lot of variation in your prompt.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=221)** Down here, I have this put variable parts at start of prompt.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=224)** You always type your variations at the end of the prompt and by default, they're placed at the end of the prompt.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=230)** But if I wanted, I could come in here and say photo, and then maybe watercolor, and then a pencil sketch.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=243)** And if I check this button, instead of them going at the end, they'll go at the beginning.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=248)** So I'll have photo of a woman in business casual clothing, then watercolor of a woman in business casual clothing, and so on.
>
> **[4:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=255)** So really useful way of fiddling with your actual prompt.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=260)** Another way to try variations of prompts is prompts from file or text box.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=264)** What this is useful for is if you've got a bunch of prompts that you want to try.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=267)** So let's just take this one.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=270)** And if I wanted, I could write a bunch of prompts into a text file, separate prompt on each line, drop the text file in here, or I can simply paste them in here, one on each line.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=282)** So let's try some variations in this.
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=284)** Let's take out in business casual clothing.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=287)** Let's make another one and put her in formal dress.
>
> **[4:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=292)** And I could just keep going and I can put as many of these as I want.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=296)** And after I hit the generate button, it will just render out one image for each of these prompts.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=302)** Now I've got my seed fixed still, so it's rendering only off of this seed.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=308)** If I were to randomize the seed, I would get very different results.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=312)** What this is great for is if you've got a bunch of ideas you can write 'em in a text file or write 'em into this box, start it generating, and then go have lunch or something while it whittles away on all these different images that you want.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=324)** Earlier we saw how sampling steps and sampling method can have a huge impact on your image.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=329)** And I showed you a grid of a bunch of different images rendered in different combinations of steps and sampling methods.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=335)** I did not meticulously go through and change all of these and then lay all that out into a grid.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=340)** It's not that you're not worth it, it's just that I have this X/Y/Z plot script, which allows me to put a range of different variables onto different axes of a grid.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=350)** That's what you saw earlier.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=352)** So let's try one here, let's say we want to graph steps against CFG scale.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=357)** We know that CFG scale can have a big impact on an image.
>
> **[6:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=360)** So I'm going to choose steps for the X axis.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=363)** And here, let's say I wanted to do 20 to 50 steps in, we'll say five step increments.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=374)** So that'll give me 20, 25, 30, 35, you know, that's probably too many.
>
> **[6:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=378)** Let's do 10 step increments, that'll give me 20, 30, 40, and 50.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=382)** I could also just say 20, 30, 40, and 50.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=387)** Against that, we're going to graph the CFG scale and we'll go a little lower than we normally do, and we'll go higher than we normally do, 6 to 9.
>
> **[6:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=397)** And if I hit generate.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=407)** And when it's done, I have this, steps as columns 20, 30, 40, and 50.
>
> **[6:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=415)** And then CFG scale 6, 7, 8, and 9.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=418)** Her skin's getting more saturated with the increased CFG scale and her shirt has changed in a few different places, that's interesting.
>
> **[7:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=426)** So with this one, you do actually have the full renderings.
>
> **[7:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=429)** They just don't show up here.
>
> **[7:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=431)** You got to go dig 'em out of your server.
>
> **[7:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=433)** So if you don't have control of your server, you may not be able to get these exact images to investigate at full size but you do at least know the settings, so you can dial those in and redo them Not with the script, but as actual renderings.
>
> **[7:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=446)** Again, this is all working because I've fixed my seed so that I'm getting the same image.
>
> **[7:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=451)** I can randomize the seed also, it's just I'll have a different image in every cell of the grid, and that's not quite so useful for comparisons.
>
> **[7:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=459)** You do have a third axis, that's the Z type.
>
> **[7:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=461)** I left that set to nothing.
>
> **[7:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=462)** If I had filled another parameter in here then I would've ended up with multiple grids.
>
> **[7:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=469)** So it's like a stack of grids that becomes a third axis, I rarely find that useful.
>
> **[7:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=474)** It's just too much variation to try to keep in your head.
>
> **[7:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=478)** So those are some simple ways that you can try letting AUTOMATIC1111 work through a bunch of variations for you as you zero in on the right one.
>
> **[8:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=487)** Don't ignore these.
>
> **[8:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=489)** These script features, they're very handy.
>
> **[8:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=491)** Later, we might be adding more scripts to that menu.
>
> **[8:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=494)** You can download custom scripts and add them and so, you can find lots of other ways to automate AUTOMATIC1111.
>
> **[8:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=500)** As promised, if you are running your own AUTOMATIC1111 server and you would like to run it in dark mode, all you have to do is append to your URL.
>
> **[8:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=509)** So here I'm going to the local address on my network to port 7860/?, two underscores, theme=dark.
>
> **[8:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/automatic-iterating?u=76281980&t=518)** And that will give me this nice dark theme.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (2), try, (1), interface (1), default, (1)
> **Env Vars:** automatic1111 (5), cfg (5), url (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is an  (1), is a  (1)
> **Ports:** port 7860 (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Changing SD models
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=0)** - [Instructor] One of Stable Diffusion's advantages over other AI imaging systems like Midjourney and DALL-E is that you can change its underlying data model.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=9)** The data model is everything that it learned during its training.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=12)** Everything that it knows about how to render anything in the world you can swap that out for a different understanding.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=21)** This allows you to change the style of its renderings, it allows you to get it to render specialized content and generally completely change the way that it sees the world.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=30)** Whether you can change the data model or not depends a lot on which instance of Stable Diffusion you're using.
>
> **[0:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=36)** Here in Mage.Space, if I click this View Options button, the first thing that comes up is a choice of models.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=43)** So by default, I'm on the Stable Diffusion 1.5 model, I can switch to the 2.1 model, and if I pay money, I get access to all of these other things.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=52)** And Mage.Space is constantly adding more models.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=55)** It's a curated collection.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=57)** They're choosing them for specific reasons.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=59)** One thing that's nice about their selection is there's not a lot of redundancy.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=62)** You won't have 12 different models that are tailored towards rendering anime, for example.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=69)** Other Stable Diffusion instances may or may not have an option to install other models.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=75)** If you're running Automatic 1111, then you can choose to install more models on your own.
>
> **[1:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=80)** The first thing you got to do is find one.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=82)** [HuggingFace.co](https://HuggingFace.co) is a good place to start.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=86)** Hugging Face is just a good Stable Diffusion resource in general, if you click here on the Models tab, you'll get a long list of possible models.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=95)** It's not the most visual site to browse, but still don't forget about this as a resource.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=102)** The place you'll probably go to the most for models is a website called Civitai.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=108)** That's [C-I-V-I-T.AI](https://C-I-V-I-T.AI).
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=111)** Before we take a look at Civitai, I want to cover one thing.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=114)** I am not signed in right now, so when I come to the site, it's showing me what it thinks of as a safer work selection of popular content.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=124)** I wasn't sure about this one on the left so I blurred that out a little bit.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=127)** When you sign in, by default you're going to see whatever the most popular models are and with your default user account settings, some of those could be pretty racy.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=139)** So if you come into your settings which you can find over here, there's an icon that represents your user account.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=147)** And down at the bottom is account settings.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=149)** If you scroll down a little bit, you do have some controls for content moderation.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=154)** So come through here, figure out what you want to turn on and off and that will attenuate a lot of what's on that front page.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=162)** Civitai actually hosts a lot of different types of data.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=166)** There are models, there are hyper network files and other things.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=171)** What you're looking for is a checkpoint merge.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=174)** This is an indication that this is an actual model.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=178)** As we saw earlier, they also list the original model that this image was based off of.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=183)** So you know if it's a one series model or a two series model.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=186)** If you don't know the difference between those two, go back and watch the video that I did earlier.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=191)** The size of the model is shown.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=193)** This gives you an idea of how much disk space you're going to chew up.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=195)** And again, this is just amazing.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=197)** 3.82 gigabytes.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=199)** When you figure that the original source images consume 240 terabytes of disk space, this is a fantastic form of abstraction and compression.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=208)** If I open this up, I get a choice of formats, SafeTensor format, PickleTensor format, and then I can have Pruned models which are smaller.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=217)** If all I'm ever going to do is render images, I'm not going to do any training of my own or mixing of models then it's fine to go with these and save some space.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=226)** On some models, you might also see something called Checkpoint or CKPT.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=232)** Checkpoint is the original model format.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=234)** The problem with a checkpoint file is that it is possible for there to be malicious content in a code that could be executed.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=241)** So most people are switching these days to SafeTensor or PickleTensor format.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=246)** Either of these are fine with Automatic 1111.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=248)** The advantage of PickleTensor is that it's compatible with other systems as well, such as Invoke AI.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=254)** So choose whichever one you want, download the file.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=257)** To install it, you're going to place it inside your Stable Diffusion web UI folder, inside the Models folder, inside the Stable Diffusion folder.
>
> **[4:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=266)** And here you can see I've already put realistic vision, the SafeTensor's version.
>
> **[4:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=271)** Copy it into there and then back in your Automatic 1111 interface, just hit this Reload button and it will re-scan the model directory and your new model should appear.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=281)** If it doesn't, go restart your server, and launch it again and you should be okay.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=287)** So let's see what our stock prompt that we've been working with here does with our normal 1.5 model.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=293)** I don't have a negative prompt in here right now, so we're still going to get green lawns and purple skies, and all that kind of thing.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=298)** And so it's muddling along here.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=304)** I'm actually getting some okay faces.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=306)** I like my shallow depth of field, but this is typical of the kind of stuff we've been getting.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=310)** Let's switch now to realistic vision.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=314)** It is loading, right off the bat, just that one change, we're getting very different results.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=324)** First of all, look at this, no scrambled faces so far.
>
> **[5:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=328)** It's really zeroing in on the closeup aspect in a way that I had been expecting when I first put that in there.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=336)** So maybe we just got lucky.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=339)** Maybe we got four seeds that really worked for us.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=341)** Let's do another round.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=344)** So similar, it's staying pretty strictly to a particular concept that it's pulled from my prompt and that's without changing my prompt at all.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=353)** If I come back to the realistic vision page I see these trigger words, analog style model, shoot style, NSFW, nudity.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=361)** If I put these words in my prompt, it will take advantage of kind of the intent of this training.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=366)** Let's throw in model shoot style and see what happens.
>
> **[6:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=370)** I'm going to put that kind of close up.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=371)** We'll put it before cloudy and see if that makes any difference.
>
> **[6:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=379)** I would say that did make a difference.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=380)** There's a lighting change, we're getting more dramatic lighting, we're getting some better angles.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=384)** It's really focusing on her.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=387)** Stonehenge is sort of in the background.
>
> **[6:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=388)** So this is a very, very simple change that I've done that is making a huge difference.
>
> **[6:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=395)** It offered up analog style.
>
> **[6:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=398)** Let's see what that does.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=402)** Interesting.
>
> **[6:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=403)** I don't know if, oh well, this vignetting that we've got going on here, a kind of overall softness.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=411)** I think that's what they're saying about analog style.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=414)** Let's take model shoot style out and see just the changes we get from having only analog style.
>
> **[7:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=422)** So these are, we've lost that lighting effect that we got from the model shoot and the women are definitely not as glamorous as they were, but we've picked up a little yellow tinge which has kind of a Polaroid vibe to it.
>
> **[7:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=435)** So I think analog style is specifically trying to look like old analog film.
>
> **[7:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=440)** No, I am not going to try the NSFW, if you're interested in that, you got to do that yourself.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=447)** There are hundreds of models available at Civitai and some of them get very creative and specialized.
>
> **[7:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=454)** Here's one that is meant to make your image look like a papercut.
>
> **[7:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=459)** I don't think that's going to do very much in this case because we've got a complex description that's not about an individual thing.
>
> **[7:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=466)** But let's just see if we can get a papercut woman in front of a papercut Stonehenge.
>
> **[7:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=471)** I'm going to take out the analog style keyword and if you look over here, you see that for papercut, we need to put in a papercut keyword.
>
> **[7:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=479)** So I'll just replace that here.
>
> **[8:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=483)** Papercut, one word.
>
> **[8:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=486)** Okay, we kind of lost Stonehenge.
>
> **[8:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=489)** It's focusing more on the closeup woman in business casual clothing but it's done a effective papercut look for her.
>
> **[8:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=497)** I don't know what that is.
>
> **[8:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=499)** This one.
>
> **[8:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=500)** This one really works.
>
> **[8:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=501)** I love the textured hair even in a papercut.
>
> **[8:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=504)** So changing models can be really fun and very often the way that you solve a lot of your problems.
>
> **[8:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=511)** Honestly, I don't work that often with the stock 1.5 model that we've been using.
>
> **[8:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=516)** I have found some other models that I find consistently give me better results with the type of look that I like.
>
> **[8:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=522)** You just got to be careful to pay attention to the trigger words, read the descriptions, and you'll get a better idea of whether a model is going to do a particular thing that you're looking for.
>
> **[8:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=531)** If you go down below you're going to find examples with prompts.
>
> **[8:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=534)** I'm not doing that here.
>
> **[8:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=535)** Oh, I could do that on the papercut.
>
> **[8:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=537)** I don't think we're going to stumble into anything too NSFW here.
>
> **[9:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=540)** So these are things that people have rendered, and in a lot of cases, they will tell you their prompt so you can learn more about how to use a particular model that way.
>
> **[9:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-sd-models?u=76281980&t=549)** Changing models is a key component to success with Stable Diffusion, so head out and look for either a service that offers a lot of models, install some on your own, and in either case, be certain that you read the documentation and look for what trigger words are necessary to really get the most out of those models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (2), default, (1), interface (1), this, (1)
> **Definitions:** is a  (7), is an  (2)
> **CLI Commands:** find (4), make (2)
> **Env Vars:** nsfw (3), dall (1), ckpt (1)
> **Versions:** 1.5 (3), 2.1 (1), 3.82 (1)
> **Prerequisites:** install (4)
> **UI Navigation:** switch to (1), go to (1), scroll down (1)
> **URLs:** [huggingface.co](https://huggingface.co) (1), [c-i-v-i-t.ai](https://c-i-v-i-t.ai) (1)

#### Using LoRA models
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=0)** - [Instructor] We've seen how you can install new models into Stable Diffusion, and we've seen that you can find those models on sites like Hugging Face or Civitai.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=9)** The models we've been looking at are entire data sets that Stable Diffusion uses.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=14)** And as you've seen, these data sets can be very large.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=18)** This one is almost four gigabytes.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=21)** There's another type of model.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=23)** Actually there are a couple of other types of models.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=26)** We're going to take a look at something called a LoRA model.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=28)** LoRA is an acronym that stands for Low Rank Adaptation.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=33)** The explanation for how it works is complicated and involves a lot of math, so we're going to skip that.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=39)** It's easy to find LoRA models on Civitai.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=43)** The search box includes these filters.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=47)** If you don't see this bar of filters right now, just do a search of any kind and this should show up.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=54)** This is the, actually, these are sorting menus.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=56)** This is the filter menu over here, and if I open it up, I can tell it that rather than looking for all checkpoint types, I want to look for LoRA files.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=65)** And if I don't have anything in here, it will show me all of the LoRA files on the site.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=70)** This can take quite a while to scroll through.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=73)** And I can tell you that at the time of this recording it's very, very heavily influenced towards anime.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=79)** What's interesting about LoRA models is that they can be anything.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=82)** They can be people, they can be styles, they can be somewhat abstract concepts.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=88)** So I've installed a few LoRA models, let's play with them.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=90)** First thing I did is install a model of a woman named Irene.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=95)** I didn't pick this for any reason other than it looked like a high quality model.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=99)** Installing a LoRA model is very simple.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=101)** You download it and then you go to your Stable Diffusion web UI folder, and just as you would with a checkpoint model you go into the models folder.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=109)** But instead of going into Stable Diffusion, you go into the LoRA folder, and here you see my Irene model.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=116)** And most importantly, you see that this model is 151 megabytes.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=121)** That's it.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=122)** By comparison let's take a look at Realistic Vision version 1.2, 4.1 gigabytes, version 1.5 model, 4.27 gigabytes.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=131)** LoRA models can be really tiny.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=134)** From the page for this model, I see that there is a trigger word called Irene1.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=138)** That's how I will get her to appear in my prompt.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=143)** But I have to make one other little modification.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=146)** So let's say closeup of Irene1 in business casual clothing, Stonehenge in the background.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=161)** Ditch the word the.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=163)** And a comma.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=164)** I put that comma there because I need to add something else and that is the name of the LoRA file that I want to use.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=169)** I can type it by hand, but it's much easier to go here to this thing, which says, show and hide extra networks.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=178)** If I tap that, this whole new section appears including a tab called LoRA.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=185)** Refresh this, and these are all of the LoRA models that I have installed.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=190)** These are all of the files that I have put into my LoRA folder.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=193)** So I'm going to tap on Irene and it adds the appropriate LoRA reference to my prompt.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=199)** So that reference is angle brackets, the word LoRA, a colon, the precise name of the model file without an extension.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=207)** So in this case, that's irene_V70.safetensors.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=214)** So I leave off the .safetensors.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=216)** Then a colon, then the weight that I want this model to have from zero to one, and then a closing angle bracket.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=223)** Weight is not so significant for this model because it's a model of a specific thing.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=227)** If I put it to zero, Irene won't be there.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=230)** Where this comes in handy is for things that are more abstract and for styles.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=234)** So let's crank up our batch count.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=236)** By the way, I could have just typed this in by hand.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=240)** And here she is.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=243)** So let's take a look here.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=245)** This is what Irene is supposed to look like.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=252)** I don't feel like these images are a dead ringer for her.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=256)** And maybe that's our CFG scale.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=257)** Let's turn that down.
>
> **[4:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=258)** But I still think if nothing else, if I wanted a particular look, she's fitting that look.
>
> **[4:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=266)** I think this is maybe a little bit better.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=269)** She's actually looking more like Bjork now than like Irene in that picture.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=272)** I can play with this model.
>
> **[4:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=274)** I can say closeup of Irene in business casual clothing.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=277)** I'm going to say short hair.
>
> **[4:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=280)** And now Irene's been bobbed.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=283)** Let's try adding some glasses.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=286)** My point here is that this is a really flexible model.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=291)** Now, something I haven't tried is increasing steps and changing the sampler.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=296)** I could throw those into a plot and see if I get any different results.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=301)** She definitely looks different here.
>
> **[5:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=303)** I think maybe she's getting closer to what I saw on the model card.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=306)** Obviously there's room to play.
>
> **[5:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=307)** These models are very, very flexible.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=310)** As I said, you don't just have to have a model of a thing.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=313)** If I come back here to my LoRA catalog that I have installed, I see cartoony style.
>
> **[5:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=317)** Click on that, I get my LoRA referenced to that style.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=322)** But I need to know how to trigger it so I'm going to go look at the documentation.
>
> **[5:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=327)** It says it's going to end up looking like this.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=329)** The trigger words are flat color.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=331)** So I can come back over here and say, flat color closeup of Irene, and we got one.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=339)** You know, I was getting better results earlier.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=341)** Let's put our CFG scale back to seven.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=345)** There we go.
>
> **[5:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=346)** So it's not always giving me my cartoony style.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=352)** Maybe if I increase CFG scale even more.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=357)** Well, I'm getting at least one per batch, so it works.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=361)** As you can see, I can combine LoRA models that do different things.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=367)** Let's try another one.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=368)** I'm going to take out closeup and flat color and say, Irene in business casual clothing with short hair, eh, we'll take that out.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=376)** We're going to take out Stonehenge.
>
> **[6:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=378)** We're going to take out our cartoony style.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=381)** And we're going to instead put in painted miniature.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=386)** That wants a trigger word of pmini.
>
> **[6:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=389)** Pmini, agh, auto correct is wrecking all of this.
>
> **[6:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=395)** And I'm going to say miniature of Irene in business casual clothing.
>
> **[6:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=401)** And when I'm done, I get these little painted miniatures of Irene.
>
> **[6:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=404)** This is how powerful LoRA can be in terms of how it impacts your final rendering.
>
> **[6:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=409)** Now, her face is pretty scrambled in all of these.
>
> **[6:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=412)** I don't know that you could say it's Irene.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=414)** And this is an odd take on business casual clothing.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=418)** Also, look how high contrast it is.
>
> **[7:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=421)** Maybe that's just a bad paint job.
>
> **[7:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=422)** But I seem to recall from the documentation that the weight is supposed to be somewhere between 0.6 and 0.8.
>
> **[7:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=428)** So let's bump that down to 0.6.
>
> **[7:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=432)** And this is working much better.
>
> **[7:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=433)** Her face is still a little scrambled, still has that kind of Irene slash Bjork look that she had.
>
> **[7:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=439)** Can I still fiddle with the model the way I did before?
>
> **[7:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=441)** Yes, I can.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=442)** I can say short hair, glasses, and I got some.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=447)** In this case, I didn't get full body, and I think that's because the glasses made it focus on her face so I could fiddle with my prompts some more there.
>
> **[7:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=455)** Let's do one final one.
>
> **[7:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=456)** We're going to stick with Irene.
>
> **[7:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=462)** We're going to ditch painted miniature.
>
> **[7:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=465)** I have not tried this yet.
>
> **[7:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=466)** We're going to load the Steampunk AI LoRA.
>
> **[7:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=472)** And I'm just going to say Irene1 and see what it gives me.
>
> **[7:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=476)** Find out if there's a trigger word, and there, is Steampunk AI.
>
> **[8:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=483)** So we'll say Steampunk AI.
>
> **[8:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=487)** Okay, those are pretty steampunky and somewhat Irene-y.
>
> **[8:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=491)** I can type more elaborate prompts.
>
> **[8:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=493)** I can put her in situations and get her doing things and so on and so forth.
>
> **[8:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=497)** And it'll give me a steampunk rendition.
>
> **[8:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=498)** This is a very, very strong style to come from a file that's so small.
>
> **[8:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=505)** So LoRA files are a spectacularly small, very powerful way of getting custom models into Stable Diffusion.
>
> **[8:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=514)** We're doing all of this of course in AUTOMATIC1111.
>
> **[8:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=516)** If you're using an online site probably you're not going to have an ability to add LoRA files but maybe you will.
>
> **[8:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=523)** It's worth looking around for.
>
> **[8:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-lora-models?u=76281980&t=525)** At the time of this shooting, I couldn't find any.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), abstract (2), case, (2), this. (2), this, (1)
> **Versions:** version 1 (2), 0.6 (2), 4.1 (1), 4.27 (1), 0.8 (1)
> **Definitions:** is a  (3), is an  (2), stands for (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** cfg (3), automatic1111 (1)
> **Documentation:** the documentation (2)
> **Prerequisites:** install (2)
> **UI Navigation:** click on (1)

#### Using embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=0)** - [Instructor] We've seen custom checkpoints, we've seen LoRA models.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=4)** There is a third way to introduce new styles and content into Stable Diffusion, and that is also available up here on CivitAI or Hugging Face.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=16)** If I go to the filter menu here and select Textual Inversion.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=21)** This is nowadays more commonly known as an embedding, or textual embeddings or textual inversion embeddings.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=28)** What these do is not introduce new data to the model, but rather they go in at the text level, and they add a token that causes you to navigate to a particular point in the data space of your model.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=42)** You don't have to know how it works to use it.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=44)** Let's just go over it and look at some of the ones I've already installed.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=47)** I'm not going to do any specific people because you've already seen that we can add that functionality to stable diffusion using checkpoints or LoRAs, just know you can do it with embeddings also.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=56)** Again, I'm going to click on my show additional networks button.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=60)** And if I come down there, here's the LoRA tab we were looking at before.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=64)** Here's textual inversion.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=65)** I'll refresh that and you'll see that I have three of these installed.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=70)** I'll show you how to install them in a minute.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=71)** Let's start with adventurer style.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=74)** We'll go back here to our woman in business casual clothing.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=82)** Stonehenge. I'm going to say closeup.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=88)** And now I'll come over here and I'll click the advntr embedding.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=93)** I'm going to put a comma there.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=94)** And we'll render a batch.
>
> **[1:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=97)** I'm using the realistic vision model which you've been seeing in other movies.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=101)** And so you know, the kind of stuff it's been putting out.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=103)** This is very different.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=104)** It's an illustrated style, and she's got kind of an adventurey flair about her.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=110)** Let's take out the closeups so we can see more of maybe what it's trying to do to Stonehenge and what it's doing in the background.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=117)** So this is giving me almost kind of a pulp flair, a pulp adventure magazine flare, but she is in business casual clothing.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=124)** It's a solid style that is distinctive and consistent across these different renderings, and that's simply by adding this little embedding file.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=131)** And in a minute you'll see just how little it is.
>
> **[2:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=133)** So let's try another one.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=134)** I'm going to take advntr off and come back here.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=136)** I have one called Style-Winter, and this is not going to work very well, but I wanted to show it to you so you could see just how strong embeddings can be.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=147)** So this is supposed to make your scene look more wintry.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=150)** And actually I'm surprised, I said it's not going to work very well because in none of my testings could I ever get it to show Stonehenge.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=158)** This model does a specific thing, it makes a wintry scene.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=161)** Getting it to do that with other things in your prompts is a little hard.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=165)** It's a very, very heavy style, and there's no weight control for embeddings.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=170)** I can't dial them up and down.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=173)** Let's do one more and then we'll go look at installation.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=176)** Now I told you that I don't think it's a great idea to use existing artist styles, but I found this durer-style.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=183)** He's been dead for a long time.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=185)** I don't think his descendants are trying to live off of royalties or anything, so I'm going to go ahead and try this style.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=192)** And it's pretty good.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=195)** It doesn't quite feel like engravings to me, but it's still, it is, it's pretty good.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=202)** Again, it's a heavy style.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=204)** You're always going to get these kinds of clothes.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=207)** I mean, she had a little bit of a business casual thing.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=209)** This is actually kind of a good hybrid.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=210)** I don't know how much you'll be able to customize this.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=213)** So the thing about embeddings is they're really small.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=217)** This is 3.7 kilobytes.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=220)** I think the shopping, my grocery list in my Notepad application probably takes up more than four kilobytes.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=225)** I'm going to download this.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=227)** And if you look in your Stable Diffusion web UI folder you will see a folder called Embeddings.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=232)** And it says, "Place textual inversion embeddings here."
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=235)** So I can just copy this over here.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=238)** After you do that, if you want, you can come down here and click this reload UI button.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=242)** I have not found it necessary to do that.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=245)** If I come here and just hit the refresh button, it will go find my embeddings.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=251)** So as with checkpoint models and LoRA files, there is a huge quantity of embeddings available at Hugging Face and CivitAI.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=260)** Again, they're able to do everything from adding specific content to an image to radically restylizing an image, and they combine with checkpoints and LoRA.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-embeddings?u=76281980&t=270)** So you start mixing these three things together, and you can get very custom results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 3.7 (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Upscaling SD images
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=0)** - [Instructor] We've already discussed how Stable Diffusion's rendering sizes are pretty small by any modern standard.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=5)** Even if you don't intend to print, 512 by 512 is still a low pixel count even for phone viewing.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=11)** But image size is not only a concern for viewing and output.
>
> **[0:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=15)** One reason that we're getting messed up faces is because with the compositions we've been making, the faces are small in the frame.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=22)** There just aren't a lot of pixels there to work with and so the AI gets confused.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=25)** Upscaling is a necessary step for correcting the fine details in our images.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=31)** Of course, you can throw a rendering into Photoshop or another image editor and resize it there and probably get pretty good results.
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=38)** These tools work by analyzing the pixels in the frame to figure out which pixels should be duplicated to create a bigger image.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=47)** This approach does not consider the content of the image at all.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=51)** If only there was some kind of tool that understood image content.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=55)** Oh wait.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=56)** Most instances of Stable Diffusion will include some kind of scaling tool.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=60)** These tools actually bring AI training to bear on the problem of upscaling and they can deliver very good results.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=67)** Scaling controls and options vary a lot from distribution to distribution.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=72)** For example, here in mage.space, I've got the normal prompt that we've been working with.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=76)** I'm going to ask it to render that.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=81)** And when it's done, I get this.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=83)** I really like this image.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=84)** This is one of the better ones that's come up in any of our renderings.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=87)** Right away I get this enhance button.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=90)** If I tap that, I get a range of options that vary depending on what kind of account I have with mage.space, but I will always have this Upscale plus Face Fix.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=99)** There are no parameters, nothing to do, but tap it, so I'm going to do that.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=103)** When it's done, I end up with this.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=105)** Now you can't tell a difference because we're viewing it at the same size as the original.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=109)** We would need to get this into an image editor.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=111)** But if I hit restore, which is basically an undo and you watch the change, you can see that there has been change happening.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=120)** Some details have changed as the upscaling has transpired.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=123)** Now, I can't lead you through every Stable Diffusion distribution.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=127)** And even if I did, those distributions may have changed or disappeared by the time you see this.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=132)** The most important thing to know is that what we're seeing here is not like the upsampling process you were already used to in your image editor.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=139)** This process actually considers the content in your image.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=143)** Also know that where AI can fall down is in super fine detail.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=149)** Back in Automatic 1111 we have an upscaling tool.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=152)** To get to it, I tap on an image to select it and then I hit this send to extras button.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=158)** Maybe not the most intuitive name, but easy to remember once you've learned it.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=163)** So from here I have the option of upscaling a single image, a batch of images or if I've already got a bunch of images sitting in a folder on my computer, I can say batch from directory.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=175)** For controls, I have scale by and scale to.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=177)** Scale by is simply a multiplication factor.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=180)** Right now, I'm going to get a 4x scaling of this image.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=184)** Remember, this is 512 by 512 right now, so that'll go up to 2048 by 2048.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=190)** If I know that I need specific image dimensions I can use the scale to tab and put those in here.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=195)** Most of the time I get by okay just using one of these straight multipliers.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=199)** I have two upscalers that I can run.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=202)** Both of these menus provide the same set of algorithms.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=206)** The idea is that I can run two different algorithms and then composite them together or actually Automatic 1111 will do that for me.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=214)** This upscaler to visibility slider is basically like an opacity control for this upscaled version.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=221)** The reason for this is that some of these methods are better for some types of content than others.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=226)** So maybe by using two of them and blending them together I would get better results.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=230)** Notice I said maybe.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=232)** I honestly don't bother with this second upscaler.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=236)** I've tried finding a time where I thought, oh, my results are dramatically better by blending these together.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=240)** I just haven't found it.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=242)** Feel free to play with it.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=243)** You might have better results than I do or be smarter about how you're using them.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=248)** So we're back to a typical Automatic 1111 mix of meaningless names here.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=254)** These first two things are basically the same types of algorithms that Photoshop would use, so you can skip these.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=260)** The things you want to pay attention to here are these three: ESRGAN4X and RESRGAN4x plus.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=268)** R stands for real, but don't put too much weight on that, it doesn't really mean anything.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=272)** Let's start with this one.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=273)** These are both good for photorealistic or finely detailed images.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=278)** So I have chosen that.
>
> **[4:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=280)** I'm not going to play with any of these other parameters yet.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=282)** I'm just going to hit generate.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=285)** As always, I have accelerated that process but Automatic 1111 actually shows you a rendering time down here.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=291)** That took 6.6 seconds to render.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=293)** If I tap on it, again, I'm viewing this at the same size as I was viewing the 512 by 512 image so I can't really tell much.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=301)** I need to get these into an image editor and this is where Stable Diffusion has a problem.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=306)** If you are using Stable Diffusion across a network, that is if you are not running it directly on the same machine as the server, you can't get to this image.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=314)** There's no way to download this.
>
> **[5:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=316)** The only way this is really useful is if you are running on the Stable Diffusion server itself.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=321)** If you are, then you can tap this folder button and it will open up the output folder where the images are stored.
>
> **[5:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=327)** As you can see, it's written out both a JPEG and a PNG.
>
> **[5:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=330)** Let's get these into Photoshop and see how they compare to the original.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=333)** Here's my original at 100%.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=335)** Here is my upscaled version at 100%.
>
> **[5:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=338)** It's four times larger as it was supposed to be.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=341)** But this has turned pretty chunky back here.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=344)** I mean, it is larger and I don't really have aliasing or anything but I got a lot of noise up here.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=349)** I've got these weird artifacts.
>
> **[5:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=351)** It's pretty safe to say that ESRGAN4x always generates sharper images than the RESRGAN.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=359)** Sometimes that's good.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=361)** This is a case where the image is actually ending up looking over sharpened.
>
> **[6:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=364)** So let's switch to this model and hit the generate button.
>
> **[6:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=370)** I'm calling these models because they are data models just like the data models that you use to generate an image in the first place.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=377)** The difference is these are models that have been trained and tweaked specifically for the process of upscaling.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=384)** So they contain a data set that's fine tuned and appropriate for this particular activity.
>
> **[6:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=392)** That took 55 seconds, so almost 10 times as long as the normal ESRGAN4x.
>
> **[6:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=398)** Let's see how it did.
>
> **[6:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=400)** So here's our new rendering at 100%, and sure enough, we don't have all that messy detail that we had back here.
>
> **[6:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=408)** The grass looks better.
>
> **[6:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=409)** Her eye has gotten messed up.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=411)** We'll need to fix that later with some face correction, but she's not as noisy as she was over here.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=418)** A lot of noise, a slightly messed up eye, but this stuff is much worse over here.
>
> **[7:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=422)** So plainly it is worth playing with these different models.
>
> **[7:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=426)** Some other options you have here, LDSR does a very, very good job, but it's really slow.
>
> **[7:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=432)** So I don't know how useful that will be for you.
>
> **[7:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=435)** More options.
>
> **[7:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=437)** Your results are going to vary depending on your image, so they're worth trying.
>
> **[7:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=440)** Know that you can plug these into the plot x, y, z script.
>
> **[7:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=443)** So that can be a way to assess the right upscaler for your image.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=447)** These two sliders have to do with face restoration and again, these are basically like opacity controls.
>
> **[7:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=453)** They specify how much the face correction will be blended into the original.
>
> **[7:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=456)** You can try these.
>
> **[7:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=457)** Sometimes they work.
>
> **[7:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=458)** Usually I just wait and do a different face correction method later.
>
> **[7:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=462)** As with everything related to Stable Diffusion, if you go to a different distribution you may or may not see a variation of these same controls.
>
> **[7:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=468)** You may have a different set of models, and in fact, if you want to get really nerdy about upscaling or if it's a topic that you find really interesting, you can come over here to upscale.wiki where there is a model database.
>
> **[8:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=481)** You can download gobs and gobs of different upscaling models and install them in your local Automatic 1111 by sticking them in the same folder where you would stick any other data model.
>
> **[8:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=492)** I'll be honest, I have not gone into this at all, because I'm doing fine with the built-in models.
>
> **[8:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=498)** If you are using a distribution that doesn't have an upscaler, or if you're running off of somebody else's Automatic 1111 installation because you're accessing over a network, then you're going to need to look for another upscaling option.
>
> **[8:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=513)** If you throw free online AI upscaler into a search engine you're going to come up with a lot of options including [replicate.com](https://replicate.com), which is using the ESRGAN4 model.
>
> **[8:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=526)** So you come down here and you drop in an image.
>
> **[8:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=529)** You've got a scaling control.
>
> **[8:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=531)** You can turn on face enhancement if you want.
>
> **[8:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=533)** Click scale.
>
> **[8:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=534)** It uploads it, you can download the result.
>
> **[8:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=537)** Another well regarded one which I have not tried, is SuperRes Diffusion which runs in a Google collab notebook, and there are many other options out there.
>
> **[9:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=545)** So if you don't like your upscaling tools, if you don't have them, if you don't have access to upscaling tools, then there are plenty of free ones out there that will do a fine job of resizing your images.
>
> **[9:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/upscaling-sd-images?u=76281980&t=555)** And as you're going to see, this image upscaling is a critical step in performing in painting which we're going to look at later and which was one of the ways that we're going to fix faces.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (4), throw (2), super (1), switch (1)
> **Env Vars:** esrgan4x (1), jpeg (1), png (1), resrgan (1), ldsr (1)
> **Definitions:** is a  (4), stands for (1)
> **UI Navigation:** switch to (1), go to (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **URLs:** [replicate.com](https://replicate.com) (1)
> **Versions:** 6.6 (1)

#### Settings and extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=0)** - [Instructor] This movie is mostly going to only be immediately useful to those of you who are running AUTOMATIC1111 on your own either on your own hardware or on a cloud service like Google Colab or RunPods or Amazon Web Services.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=14)** However, if you are using Stable Diffusion through an online service like Mage.Space or any of the others that we've talked about, there's still a lot for you to learn here, because what we're going to talk about is a way that you can enable additional functionality.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=29)** So you might want to watch to get an idea of what additional functionality is out there for Stable Diffusion, because you might find you want to go look for a different service that offers one of these extensions that I'm going to talk about.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=40)** First of all, let's talk about settings.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=42)** Stable Diffusion has a voluminous collection of settings that you can alter.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=47)** They're here in the Settings tab, and they're grouped into sub-tab subcategories.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=53)** We're not going to look at all of these.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=55)** A lot of these are things you don't need to think about.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=57)** They're going to be too technical to understand at a simple glance.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=60)** Some of these we will come back to as we need them.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=62)** For now, let's look at just some basic usability and interface things.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=66)** Saving images/grids gives you control over how AUTOMATIC1111 saves out its rendered images.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=74)** By default, it is set to always save all generated images in PNG format and it has a default image file name pattern.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=82)** Here in the Stable Diffusion documentation on GitHub, you can find full documentations for how to use this field.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=89)** I'll put this link in the course notes.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=92)** These are the things that Pattern understands.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=95)** So by default, Stable Diffusion will write out file names as a number, the seed, and then everything in the prompt separated by spaces.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=104)** But there's lots of other things you can use here, what model name you were using, the width and height, any styles you've applied, the date, so on and so forth.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=112)** So you can create very, very custom file names which can be really handy for integrating these images into more complex existing workflows.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=120)** For example, if these images are going into a video editing project where you are expected to name files a particular way, or a 3d, you're using 'em to generate 3D textures and you need them to go into a project in a particular way.
>
> **[2:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=133)** You've seen the little grids that Stable Diffusion generates at the end of a batch.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=138)** If you want, you can save these.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=139)** That's on by default.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=140)** If you never look at them after their initial display, then you might turn this off to save some disk space.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=146)** You can also, if you want, configure all grids to be an identical size.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=150)** By default, Stable Diffusion saves text information about generation parameters as chunks within PNG files.
>
> **[2:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=156)** This is the metadata that we've been looking at with PNG info in AUTOMATIC1111.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=162)** You can have it create a text file, a little sidecar file, for every image with the parameters stored in there.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=168)** So if you're worried about losing access to those parameters, if you know you want to save them in a document somewhere, Stable Diffusion can do that for you automatically.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=179)** Some more options here about saving copies before other changes are made.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=183)** I'm just glossing over the ones that I think might be relevant to you right now.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=186)** You might also want to take a look in the paths for saving directory.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=191)** By default, images have been going into my outputs folder inside the AUTOMATIC1111 folder, and those are separated into sub-folders.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=199)** If I want, I could change this, I could have it write them into a folder on the desktop, wherever I want.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=204)** I can also control the behavior of how it saves, and using this same pattern feature, specify how sub directories get named.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=214)** Down here in user interface, I can't imagine you would want to change any of these defaults, but if you want you can actually rearrange the order that the parameters and sliders are shown in in text to image and image to image.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=228)** If there's something you find you never use, put it to the end and it'll just stay out of your field of view.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=234)** In the upscaling section, you'll find that Stable Diffusion might already have some upscalers installed that it's not showing you.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=243)** So if you're really getting detailed and nerdy about what upscaler you want to use, check here, it might already be installed in your system.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=251)** It's just not turned on in the UI.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=253)** After you make any changes, you need to hit Apply settings.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=256)** And when that's done, you need to hit Reload UI.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=260)** If you don't see any of your changes at that point, restart the server and they should appear.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=267)** I've mentioned at several places through this course that Stable Diffusion has a plugin architecture.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=273)** It is extensible.
>
> **[4:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=274)** You can add features to it, and you do that over here in the Extensions tab.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=278)** This is one of the most important features of Stable Diffusion because it allows you to add some extraordinarily powerful tools to the system.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=286)** Extensions can be contributed to a repository somewhere.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=290)** By default, your system should come with this repository built in, Extension index URL, so this is just a place where a bunch of extensions are stored.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=300)** If I hit Load from, it will grab a list of all of the extensions stored in that repository.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=305)** As you can see, there are a lot.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=308)** I'm going to later in this course ask you to install some specific ones that we're going to use.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=313)** These will be things that I think are critical features that every Stable Diffusion user will want to have.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=319)** Before you can install any extensions, if you have the listen parameter added to your batch file that launches AUTOMATIC1111, you need to take it out and restart your server.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=331)** This extension facility cannot work if listen is running.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=336)** After you get your extensions installed, then you can put it back.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=340)** For right now, let's install a very simple one so you can see how this works.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=344)** I'm going to grab the Find command in my browser.
>
> **[5:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=347)** I'm using Safari on the Mac, so that's CMD + F, I think that's true for most browsers, on Windows that would be CTRL + F.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=353)** And I'm going to type aspect, and here we go.
>
> **[5:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=356)** Aspect ratio selector, adds image aspect ratio selector buttons.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=361)** So you may just want to work through this list and look at the things that are here.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=366)** Some of these things you're not going to understand.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=368)** Other things are going to be very obvious what they do such as adds image aspect ratio selector buttons.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=374)** I'm going to click the Install button and then wait until it is done with its installation.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=381)** When that's finished, I need to come over here to Installed.
>
> **[6:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=385)** I'm going to say Apply and restart UI.
>
> **[6:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=390)** And when it's done, I now have these aspect ratio selector buttons down here.
>
> **[6:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=394)** So if I hit 16:9, it gives me 910 by 512, 4:3 gives me 683 by 512, 3:2 gives me 768 by 512.
>
> **[6:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=404)** These are always in landscape orientation.
>
> **[6:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=406)** I can't get it to give me a portrait orientation, but if I want portrait orientation, I can say 16:9, find out the correct dimensions, and then just swap these with this button right here.
>
> **[6:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=417)** So you don't really need a separate control for portrait orientation.
>
> **[7:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=421)** From time to time, extensions get updated.
>
> **[7:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=424)** So if I hit Check for updates, any extension that needs to be updated will show here.
>
> **[7:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=429)** The update will be downloaded, but it won't be installed until I restart the server.
>
> **[7:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=434)** And I'm remembering now that the aspect ratio buttons do not show up in this list, so don't worry about that.
>
> **[7:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=438)** I don't know why, I guess they can't be updated.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=442)** You have another option, which is to install from URL.
>
> **[7:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=445)** If you are out there on the web, and you see something that looks like a great Stable Diffusion extension, it's possible that they will just give you a URL for it.
>
> **[7:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=454)** In other words, it's possible that it is not living in this repository.
>
> **[7:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=459)** You just paste that URL in here, hit Install, come back over here, hit Apply and restart UI, and then you should have that extension.
>
> **[7:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=468)** There's very little that can go wrong with this extension installing process.
>
> **[7:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=472)** You just have to remember that if things aren't working after you have relaunched the UI, relaunch the server.
>
> **[7:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=478)** That solves most problems.
>
> **[8:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=480)** And from time to time, you will want to come over here and check for updates and make sure you're running the latest version.
>
> **[8:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=489)** Before you do that, you might want to check around to see if people are reporting any problems with the latest version.
>
> **[8:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=495)** This is true of software updates for your phone or OS as well.
>
> **[8:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=499)** Sometimes an update comes out that breaks things.
>
> **[8:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=501)** It is possible with GitHub to go and grab a previous version of any of these extensions or the Stable Diffusion install itself.
>
> **[8:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=511)** That's a complicated process that we're not going to go into here.
>
> **[8:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=514)** There's a lot of finicky syntax you have to know.
>
> **[8:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=516)** So that is possible.
>
> **[8:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=517)** If you find one of your extensions is broken and you would like to go to a previous version, Google around on previous version GitHub and you should find instructions.
>
> **[8:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=526)** By the way, AUTOMATIC1111 also receives a lot of updates.
>
> **[8:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=530)** On your Windows server, you can check for them by going to your Stable Diffusion server.
>
> **[8:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=536)** Clicking up here in the navigation bar, typing CMD, hitting Return, that gets me a command line that is already set to the path of my AUTOMATIC1111 installation.
>
> **[9:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=547)** And here I just type git pull, hit Return, and it will check for an update.
>
> **[9:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=553)** If it's there, it will install it.
>
> **[9:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/settings-and-extensions?u=76281980&t=555)** If AUTOMATIC1111 is running, then I will need to restart it.

> [!info]- Semantic Content
>
> **Env Vars:** automatic1111 (8), url (4), png (3), cmd (2), ctrl (1)
> **Code Keywords:** default, (5), let (3), interface (2), return, (2), default. (1)
> **CLI Commands:** find (8), make (2), git (1)
> **Prerequisites:** install (8), configure (1)
> **Tools:** github (3), colab (1), safari (1), command line (1)
> **Analogies:** for example (1), imagine (1), such as (1)
> **Definitions:** is a  (1), in other words (1)
> **Cross-References:** later in (1)


### 4. Training and Customizing Stable Diffusion

> [↑ Back to Table of Contents](#table-of-contents)

#### img2img basics
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=0)** - [Instructor] Let's say the word has just come down from the PR department that they want this image to be an Asian woman.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=6)** This presentation is going to be multicultural and they've decided that in this image, for where it's going to be in the layout, they need an Asian woman.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=12)** If I type Asian woman in business casual clothing, even if I preserve my seed, I'm still not going to get this image.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=20)** With the same seed and something else in my prompt, it's going to generate an entirely new image.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=24)** I may lose this composition that I've got and these clothes that I like.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=29)** So what I'm going to do is send this image to Img2Img, which I can do with this button right here.
>
> **[0:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=36)** That pops us over to the Img2Img tab.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=40)** And here you can see I've got my prompt and my negative prompt, just like I had before, but now I've got that image sitting in here.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=46)** And I have some additional controls.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=49)** I've still got samplers, geometry, batch count, batch size, CFG scale, but I've got denoising strength, and I have these four buttons here.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=57)** For right now, leave this set to Just resize.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=59)** We're going to talk about these in a different video.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=61)** We're going to come back to denoising strength.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=64)** My seed is still set to random.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=67)** So I'm going to change my prompt to say Asian woman, and then I'm going to hit, I'm going to increase my batch count to four, and then I'm going to hit Generate.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=79)** And sure enough, I've got the same composition, same Stonehenge in the background, same clothes, but now she's Asian.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=89)** Img2Img takes your prompt and uses that to generate a pattern of noise that it lays over your source image.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=96)** And then it goes through its normal diffusion process of removing that noise to reveal a combination of the image below with the prompt that you've written.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=106)** So that's how we were able to change her.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=108)** I like this woman's pose.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=110)** This shoulder up here is a strong position.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=114)** I'm not crazy about how close this is to the top of her head.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=117)** This woman looks a little too afraid.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=119)** These just don't have as much character as this woman does.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=122)** So I would like to continue working with this image.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=126)** So what I'm going to do is select it and say Send to Img2Img.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=132)** So now she ends up over here.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=134)** So now I'm really iterating.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=136)** Stable Diffusion is generating images and I'm feeding them back to Stable Diffusion so that it can refine them and build on them even more.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=144)** Let's see if we can get her to look at the camera.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=147)** I'm going to say looking at camera.
>
> **[2:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=151)** And Generate.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=153)** No, it's also changing the woman quite a bit.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=155)** I would like it to leave, I really like where she's at.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=158)** I don't want her to change so much.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=160)** So let's say looking into camera.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=164)** And let's take the denoising strength and lower it.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=168)** Now that may sound like another one of Stable Diffusion's nonsensical parameter names, but remember I said that we're taking this image and we're putting noise on top of it and then diffusing that noise away according to our prompt.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=179)** This determines how much noise gets added initially.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=182)** And as you've seen with steps, the more you denoise something, the more the image changes.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=187)** So the more I dial this to the right, the more my result will differ from my source image.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=193)** The more I dial this to the left, the more my result will be similar to my source image.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=198)** So let's set this down to .5.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=201)** We were at .7, so I'll go down by 1/4 of the scale.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=204)** I'm not basing that on anything other than, I don't know, let's go down by 1/4.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=210)** Yeah, I'm not going to be able to get her to look in the camera.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=212)** Let's try eyes front.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=218)** Okay, so her eyes aren't looking forward.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=220)** The other thing is, I'm interested in having another piece of Stonehenge over here.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=225)** I don't know what I would put in my prompt to get that.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=228)** So I think what I would like to do is take this image into Photoshop.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=232)** These images are all a little bit different.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=233)** I want to keep working with this one, so I'm going to set my denoising strength to zero, which means that if I generate, the image won't change at all.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=243)** Now I've opened this up in Photoshop because I want to do a little work.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=246)** I'm going to zoom in.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=247)** The first thing I want to do is work on her eyes.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=249)** I could lasso these and move them, but Photoshop actually has a neural filter.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=256)** This is an AI filter that lets me adjust eye direction.
>
> **[4:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=262)** I'm going to turn that on.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=263)** I'm going to take my eye direction and skew it way over here to the left.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=268)** That's better.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=270)** She's a little  cross-eyed now, but we can tweak that.
>
> **[4:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=275)** I'm going to keep shifting them to the left a little bit.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=278)** Okay, that's good, I'm going to say Ok.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=282)** Yeah, she's definitely cross-eyed.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=283)** Well, we'll see how that, if that gets fixed later.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=286)** The next thing I want to do is, I'm going to lasso Stonehenge with just the regular lasso tool.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=293)** I'm not going to be super precise about it.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=298)** Whoa.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=299)** Or not precise at all, even.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=301)** Need to grab that.
>
> **[5:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=303)** And I'm going to copy that and paste it.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=304)** So now I have an additional copy in another layer.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=308)** I think I'll take that and flip it horizontally.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=314)** And then I'm going to move it over here maybe.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=321)** That looks good.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=322)** I mean, it looks terrible, but that's okay.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=324)** So what I'm going to do now is take the eraser tool.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=329)** I'm going to lower the opacity of my stone so I can see that I'm working with.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=335)** And I'm going to erase all of this stuff.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=337)** I could also use a layer mask for that.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=339)** That would be fine.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=340)** As you can see, I'm working very roughly, so it doesn't even really matter.
>
> **[5:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=346)** And then the last thing I should do maybe is fill some of this back in, which I will do with the clone stamp tool.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=355)** I'm not doing anything fancy here at all.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=357)** Except for the neural filter thing, everything I'm doing is stuff you can do in pretty much any image editor.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=363)** And as you can see, I'm not being real precise.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=371)** When I'm done, I've got that.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=374)** I think I will erase this little bit, flatten this image, save it.
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=383)** And now, I will drag this into Img2Img, keep my prompt the same, and generate a new one.
>
> **[6:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=392)** Okay, it kept more of the garbage than I wish it would have, but that's because my denoising strength is set to zero.
>
> **[6:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=398)** So let's pull this back up to five.
>
> **[6:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=401)** It didn't just keep the garbage.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=402)** It duplicated this image, because again, when denoising strength is zero, it totally retains this image.
>
> **[6:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=410)** Aha, now we're getting somewhere.
>
> **[6:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=413)** Okay, now we're starting to get somewhere.
>
> **[6:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=415)** We're really taking some control here.
>
> **[6:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=417)** I've got my second stone over here.
>
> **[6:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=419)** Her eyes went back to looking in the distance.
>
> **[7:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=427)** But as you can see, I've really taken control of composition here.
>
> **[7:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=430)** So I'm going to continue to work with this, and I think you should go take your first stab at Img2Img.
>
> **[7:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=436)** Really, the only control you need to worry about is denoising strength.
>
> **[7:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=439)** CFG scale you should already be comfortable with.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=442)** And it's just about getting an image in here, making little changes to your prompt, generating new images.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=447)** If you like one and want to keep working with it, throw it over here and keep generating.
>
> **[7:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=452)** Oh, let's do one more thing.
>
> **[7:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=455)** And real quick, I'm going to take this black and white image that I was working with earlier, change her to Asian, make this color photo, and let's see if it'll colorize it.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=467)** And it did.
>
> **[7:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=468)** It's subtle color, but it's there.
>
> **[7:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=470)** So that's a nice way to get around times when Stable Diffusion throws you a black and white and you wanted color.
>
> **[7:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=476)** You can do the reverse as well.
>
> **[7:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=477)** So go take a stab at Img2Img.
>
> **[7:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-basics?u=76281980&t=479)** We've got lots more to cover with it, so it's good to get a good foundation in right now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), continue (2), super (1), this, (1), throw (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Env Vars:** cfg (2)
> **Analogies:** just like (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### img2img options on hosted sites
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=0)** - [Instructor] Honestly, I don't know where my manners have gone.
>
> **[0:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=2)** It's like I was generated in a barn.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=5)** In that last video, I jumped right into showing you image to image in automatic 1111 without first looking at how you get to image to image in some other instances of stable diffusion.
>
> **[0:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=19)** I'm sorry.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=20)** I was just so excited to dig in.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=21)** I forgot to take that step.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=23)** I'm not actually an automatic 1111 chauvinist of some kind.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=27)** If you come here to the site that we've looked at before curated list of free AI image generator sites.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=33)** This is at [stable-diffusion-art.com](https://stable-diffusion-art.com).
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=38)** They maintain here a list of current places where you can get publicly available instances of stable diffusion.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=46)** This list changes regularly.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=48)** They're doing a good job of kicking out places that are gone and adding places that are showing up.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=53)** So this list may change by the time you see this.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=55)** Also, right now, some of these sites like the stable diffusion version, 1.5 demo site this does not currently have an image to image feature.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=63)** It may get one in the future.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=64)** So it's worth keeping an eye on some of these even if they don't have what you're looking for now.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=70)** So let's start with mage.space.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=72)** By default, when you come here you see only a text to image feature.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=75)** It's not labeled as such, but that's what this is.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=77)** It's a prompt where you can type something in.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=79)** If you hit view options, you still don't see an image to image feature but if you move this slider from text to image to image to image, then you get some stuff.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=90)** Now, you can't get to these unless you have a pro account which I do not have, but I can see what the features are.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=96)** If you're a pro user you get access to instruct picks to picks, control net, canny control net open pose control net, HED.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=104)** These are all extensions for automatic 1111.
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=107)** So I will be covering all of these features later in this course.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=110)** So with mage.space, you get access to very high end image to image features.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=115)** You just don't have that basic image to image feature that I looked at in the last video.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=120)** That's fine.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=120)** If you've got these, you don't need it.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=122)** As far as learning to use these, we'll get to those.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=125)** We'll get to this technology in later chapters.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=129)** Over at [playgroundai.com](https://playgroundai.com).
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=131)** If you look down at the bottom of this left hand panel here this is where your text prompt is.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=138)** And down at the bottom there is an image to image feature.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=140)** You can actually sketch in here or you can upload an image file.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=144)** [dezgo.com](https://dezgo.com) is something that I have not mentioned before.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=148)** It's got very simple text to image, image to image and an upscaling feature.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=152)** Very full featured.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=154)** It's got all of the controls you want for image to image.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=158)** They are calling Denoising Strength, just strength.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=161)** And it's nice 'cause they give you a little clue here as to what this slider does.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=165)** So there are a lot of other places you can get to image to image.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=168)** If you don't have one already and you don't have access to Automatic 1111 at home then check out this list and see what you can find.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/img2img-options-on-hosted-sites?u=76281980&t=177)** Now we're going to get back to making some pictures.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), default, (1)
> **URLs:** [stable-diffusion-art.com](https://stable-diffusion-art.com) (1), [playgroundai.com](https://playgroundai.com) (1), [dezgo.com](https://dezgo.com) (1)
> **Cross-References:** later in (1), in the last (1)
> **CLI Commands:** find (1)
> **Env Vars:** hed (1)
> **Versions:** 1.5 (1)
> **Definitions:** is an  (1)
> **Analogies:** it's like (1)

#### Using a sketch in img2img
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=0)** - [Instructor] Earlier, we generated an image by writing a prompt, letting Stable Diffusion generate an image, and then we sent that to image to image and began to refine it.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=9)** That's a very normal Stable Diffusion workflow, but you can start with any image.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=14)** You don't have to start with something generated from here.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=17)** For example, I'm going to go right to the image to image tab.
>
> **[0:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=19)** Let's say the word has come down that they need another image for their fundraising proposal.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=25)** They're continuing with trying to just show basic people in rural settings, people who might need a pocket Stonehenge, so they want a farmer.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=34)** So in my head, I'm seeing a farmer in front of a red barn with a yellow cornfield in the background, and they're still wanting diversity, so let's make him South American somehow.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=45)** So I came up with a prompt, Argentinian farmer in front of a red barn, yellow cornfield in the distance, blue sky photorealistic Fuji XT3.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=57)** Fuji XT3 is a camera.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=58)** Putting in popular camera models will sometimes get you a more photorealistic look.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=64)** I have a very clear idea in my head of a particular composition.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=68)** I'm not saying it's the best composition, but it's something that came to mind right away.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=72)** So I went to my iPad and fired up a painting program and sketched out very roughly my idea of a composition for this image.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=81)** And by very roughly, you can see how like I'm barely one step up from a stick figure.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=86)** But I want this farmer in front of the barn on the right side.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=90)** I want the field behind him.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=93)** With it finished, I can simply drop it in here, just as I would with any other image.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=101)** I am going to raise my batch count to four.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=105)** I'm going to leave my CFG scale at seven, a normal CFG scale.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=108)** And remember, CFG scale determines how closely it's going to stick to my prompt.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=112)** I'm going to keep my denoising strength at 0.75.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=116)** So again, if I'm all the way to the right, it's going to generate a completely new image that has absolutely nothing to do with this one.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=123)** If I put it all the way to the left, it's just going to give me this image.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=126)** So we're going more towards new than not.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=134)** Okay, right away you can see that, in our very first attempt here, we are getting the composition that I wanted.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=141)** No more rendering a bunch of images hoping to stumble into a composition.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=145)** Now the downside is, when we were trying to get the woman in front of Stonehenge, it was offering up things that I hadn't thought of.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=152)** So there's still a good use to just having it generate images on its own as a brainstorming exercise.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=157)** But when you know you need something in particular, even a rough sketch like this can get you completely usable results.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=165)** I mean, a completely usable starting point.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=167)** His face is a little skewy.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=169)** I don't know what's happened to the horizon here, but those are all things we could iterate on.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=173)** The corn looks a little silly somehow.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=178)** I don't, maybe I shouldn't say cornfield, but still the point is, wow, I'm totally controlling composition just with some simple sketches.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=189)** And notice that it's mostly matching my colors.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=193)** It put green on most of these guys.
>
> **[3:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=196)** It gave him a blue shirt, but most of 'em got a green shirt just like they were supposed to.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=200)** It's pretty much perfectly mimicked the color that I painted in, My silly little clouds worked.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=207)** So this is a really powerful way to get started.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=210)** From here, I can think of a number of iterative things I would try.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=215)** It gave us a second barn.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=216)** If I liked this image, well, here, let's just take this.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=218)** Let's save this, download it, and I'm going to drop this into Photoshop.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=224)** So now that I'm here, I'm just going to erase this barn.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=228)** And I think the easiest way to do that in Photoshop is I'm going to select it and use the content aware fill feature, which is a kind of AI based feature.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=237)** Eh, it's not doing a great job, but it's a start.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=240)** And this doesn't have to be perfect, because I'm going to just put this back into image to image.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=245)** If you don't have a content aware feature, you can just use a clone stamp tool to take some stuff out.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=252)** One thing I like about this image over some of the others is the corn is not growing up around his feet.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=257)** It's been smart about how it situated things.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=260)** So let's save that and take it back into Automatic 1111 and we'll generate again.
>
> **[4:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=271)** Boy, it's determined to put a barn back there.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=273)** It's pretty funny actually.
>
> **[4:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=275)** And I think, and then it put like Mount Fuji or something.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=279)** I think that, because I left some artifacts in there, it's trying to do something with them.
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=284)** So I should go clean this up again.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=286)** The point is, you can see how this workflow works.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=288)** I start with a hand drawn sketch, I get an iteration, and now I've got something more photorealistic I can throw back into Photoshop to make changes to and then iterate off of that.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=299)** We haven't talked yet whether we are aiming for a finished piece that is actually going to be used in a product, or if we are trying to come up with visualizations as a brainstorming tool or as something to give a photographer.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=313)** If we're in an incredibly low budget situation, maybe we can't afford to hire a photographer.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=318)** But if we're really wanting to make a go at real fundraising for our product here, I would hope that we would get a real photographer out to do some real work, in which case we're going to be able to give them very realistic renderings of exactly what we want.
>
> **[5:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=330)** And in that case, we're not going to worry about certain details.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=332)** So it's important to know what your criteria for success is before you get too lost in the weeds trying to correct mistakes that maybe don't matter.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=340)** So don't forget that image to image works with any kind of image, hand drawn sketches, things generated in Stable Diffusion, other photos.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=348)** I like that shallow depth of field here. This is nice.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=350)** So be creative about how you use this feature.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=353)** It's very powerful.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=354)** And now, maybe you're starting to see why I said that prompt writing is not as critical as you may think it is.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-sketch-in-img2img?u=76281980&t=361)** We're getting things we want in the image from the prompt, but we're arranging those things with simple sketches.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), raise (1), try. (1), this. (1), this, (1)
> **Env Vars:** cfg (3), xt3 (2)
> **Definitions:** is a  (4)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), just like (1)
> **Code Identifiers:** ipad (1)
> **Versions:** 0.75 (1)
> **Best Practices:** don't forget (1)

#### Using a photobash with img2img
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=0)** - [Instructor] In the last movie, we took a look at how you can use a simple hand-drawn sketch in combination with image-to-image to create a finished picture.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=9)** Now, I firmly believe that everybody can learn how to draw but I'm not sure everyone can learn that they can learn how to draw, there are people who are really resistant to that, if you're one of those people who says, "No, I just can't draw, I just can't do it."
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=23)** Well, you've got another option, you can use your image editor to photobash a collage together and you can use that as a source for image-to-image.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=32)** We're going to try again to take a stab at this farmer standing in front of a barn image that we were doing last time, but this time, I'm going to build it up from some stock photos.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=43)** There are a number of stock photo sites out there that offer completely free and royalty free stock photos, [pixabay.com](https://pixabay.com), P-I-X-A-B-A-Y is a good one and they've got everything well organized, well tagged, all of these sites offer excellent searching.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=61)** PIXNIO, [P-I-X-N-I-O.com](https://P-I-X-N-I-O.com) is another one.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=65)** I'm going to use Pexels, [P-E-X-E-L-S.com](https://P-E-X-E-L-S.com).
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=69)** I'm not going to actually do any searches here and show you.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=72)** LinkedIn has a firm policy about not using stock photos of people in any of their educational content.
>
> **[1:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=80)** I'm not trying to call them out on that, I'm saying that because, if you work for a large corporation, they may have a similar policy so it's very important to check into this sort of thing before you start freely visiting stock photo sites and grabbing assets and trying to use them.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=94)** For legal reasons, liability reasons, and so on, some companies may not want you using these assets so check into that before you dive too deep into the process that I'm about to show you.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=106)** Using simple searches, I tracked down some assets that I think I can use.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=110)** I started by looking for a red barn, I just typed "Red Barn" into the search engine and came up with a number of things, including this image.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=118)** Now, when you scope this out, you might go, well, I don't know, the red barn's pretty far away.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=122)** It doesn't matter, these are going to be very rough composites.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=126)** I want the texture, I want the front of a barn.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=128)** Next, I searched "Aerial farmland" and came up with a number of things, and I think this is going to work nicely for me.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=137)** And then, finally, I needed a farmer.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=139)** Again, I'm not allowed to use stock photos of people so I took a picture of myself with my iPhone.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=145)** I'm just going to take all of that into Photoshop and start cramming it together.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=150)** I started out by making a document that's 512 by 512.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=153)** We're still working in squares right now, I could have gone a little wider if I wanted a landscape image but I'm fine with a square image, it needs to stay small.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=162)** The larger your image, the more you start running the risk of overloading the RAM on the GPU in your computer or on the computer in whatever service you're working with.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=171)** So Stable Diffusion doesn't need a lot of data, work small.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=174)** I then cut the barn out, threw it on a layer in my 512 by 512 document, and just started using the free transform command to get it scaled and moved.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=183)** I didn't worry about scaling it correctly, there are some places where I stretched it and I kind of put it back it, it doesn't really matter, I just, I'm looking for the texture and the color.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=192)** So I got it positioned, then I grabbed the picture of me, I pasted it in place, got it scaled to the right size, because this 512 image by 512 image is so small, all of my stock assets are coming in really, really big.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=206)** So I have to use free transform to scale them down.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=209)** I use the quick select brush to grab the background and take it out.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=212)** Again, I'm not worrying about correctly selecting around hair and that kind of thing, these are rough collages.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=218)** I use Content-Aware Fill to fill in some bits at the bottom, and then I grabbed my landscape and threw it in the background.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=224)** That's it, this lousy looking, rough composite where the lighting is wrong, the masks are rough, the perspectives don't match, all of that kind of stuff, it doesn't matter, this is going to be enough to get us somewhere in image-to-image.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=240)** Now we're ready to go, I'm going to drag my final image into the image-to-image field, I am using my realistic vision model.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=248)** I've got Argentinian farmer in front of Red Barn, farmland and mountains and background, blue sky, photorealistic, Fuji XT3 8K.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=257)** I'm throwing the word "painterly" into the negative prompt in an effort to try to get this to look more photorealistic, I'm going to see if that does something for me.
>
> **[4:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=266)** I've got a denoising strength of 0.75, a CFG scale of seven, my seed is random, let's see what we get.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=279)** You know, I've used this technology a lot and still there are times when it just amazes me.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=287)** We started with this really bad composite and we've ended up with a very reasonable image.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=293)** We're back to kind of a Mount Fuji thing in the background, which may be a little much, on the other hand, I don't know, I like it.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=298)** I like this better than what I was getting out of my pencil sketch earlier.
>
> **[5:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=303)** This transition in the background out to the fields looks better, the field looks more realistic than what we were getting before.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=309)** It's insisting on throwing another barn out here, I'm about to decide, I don't even care about that, I think I like it.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=314)** The main thing is I wasn't happy with how the farmer was positioned before and I think I did a better job of getting about the right size of figure in the frame that I wanted.
>
> **[5:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=325)** So I'm liking all this, the barn looks great, and that's just the first image, I can keep going with that, I can throw this back in and iterate on it some more.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=333)** So photobashing is a very simple way to get yourself a starting image that you can throw into image-to-image, and then really get going somewhere with.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-a-photobash-with-img2img?u=76281980&t=342)** Remember, denoising strength and CFG scale are going to be the sliders you want to play with as you try to work the image closer or farther to your prompt and closer or farther to your source image CFG Scale to make it more obedient of your prompt, denoising to make it more obedient of your image.

> [!info]- Semantic Content
>
> **Env Vars:** cfg (3), pixnio (1), ram (1), gpu (1), xt3 (1)
> **Code Keywords:** throw (2), finally, (1), match, (1), let (1), this, (1)
> **URLs:** [pixabay.com](https://pixabay.com) (1), [p-i-x-n-i-o.com](https://p-i-x-n-i-o.com) (1), [p-e-x-e-l-s.com](https://p-e-x-e-l-s.com) (1)
> **Analogies:** picture (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** iphone (1)
> **Versions:** 0.75 (1)

#### Changing aspect ratios with img2img
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=0)** - [Instructor] So far for all our renderings, we have been working at a size of 512 by 512.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=5)** We've been generating fairly small square images.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=7)** Now, I might have scared you off of the idea of generating really large images and you can't generate really large images by modern standards but you can make bigger images and for sure, you can go bigger enough to get different aspect ratios.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=22)** So we're going to take this image that I rendered and make it into a wider aspect ratio.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=27)** Before we do that, I want to talk about my prompt.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=29)** So actually first, let's talk about this image.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=31)** Let's say that word came down from the art department that they wanted an image of an astronomer because they're still trying to put together, you know, who are the people who are going to use the pocket Stonehenge and astronomers need to know when the Equinox is.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=45)** And yeah, sure, they could just use the calendar but you know, it's like listening to a vinyl record instead of listening to a CD.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=52)** Sometimes you just want to use the older analog technology because you enjoy it.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=56)** So the pocket Stonehenge is perfect for an astronomer.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=60)** This is the prompt that I used and this is a bit different than anything you've seen before.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=64)** I went to the Civitai page where I got the Realistic Vision model which is what I'm using right now.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=70)** And if you come down here, a lot of these models include very detailed documentation about how to use them.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=76)** So this is the author's suggestion for a prompt, and he's saying stick your own subject in here, and then use this stuff, and then use this as a negative prompt.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=86)** So that's what I did here.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=88)** Raw photo, that's one of his suggestions or her suggestions.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=91)** And then I said astronomer, telescope, and background.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=94)** And then the rest of this is from that Civitai page, as is the negative prompt.
>
> **[1:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=100)** Again, I'm using the Realistic Vision model.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=103)** I rendered that and this is one of the results that I got.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=105)** I like it.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=106)** So now I would like to try to make it wider.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=109)** So I'm in image to image.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=111)** You can see right here.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=112)** So the first thing I need to do is set this to a wider aspect ratio.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=116)** I'm going to come down here to my extension that I installed earlier, which allows me to just pick an aspect ratio and I'm going to say 3:2.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=123)** And that gives me 768 by 512.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=126)** If you are running on an installation that doesn't have buttons like this, you can, as I explained earlier, calculate these by hand, enter them by hand.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=136)** Not all image to image features offer the ability to change the size of an image.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=141)** So if yours doesn't have this, you may want to go look around for another one when you need to do jobs like this.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=148)** So let's think for a moment about what it's going to do.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=150)** I have a square image, it's going to make it more rectangular.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=154)** What's it going to do with the new space that it is creating?
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=157)** Well, I have a number of different options.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=160)** I can choose just resize.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=162)** Let's start with that, that's the default.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=165)** I have my denoising strength set to nine which means I'm going to see a lot of change in this image.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=169)** And I like the way this is looking so far, so I'm going to lower that.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=173)** I'm going to drop it down to about 0.5.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=176)** I'm going to set my CFG scale back down to seven.
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=181)** Sampling steps at 20.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=183)** Let's see what we come up with.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=187)** I want to mention that I have not changed my prompt at all from what I originally generated with, so it's really just generating the same image again at a different size, but looks weird, doesn't it?
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=197)** It looks distorted.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=198)** What it's done is generate a 512 by 512 image and then stretch it to fill my new size.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=204)** That's not what I want, I don't like this distorted look.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=207)** So I have other options.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=209)** I can say crop and resize.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=214)** So this has generated a 512 by 512 image, just like my original, but then it's cropped into it to give me the aspect ratio that I want.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=223)** I don't get any distortion.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=224)** I actually like this closer view but I want the landscape in the background.
>
> **[3:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=229)** I want sky, I like this horizon back here, so that one's not going to work for me.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=235)** Resize and fill.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=239)** This gives me mostly the same image.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=241)** If I would lower my denoising strength I would get even more of the same image.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=245)** The camera's changed, the person's face has changed, but then I've just got these pillar boxes over here.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=249)** What it's done is it's taken the extra space and filled it with what it has calculated to be an average color for this image.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=257)** Just resize, latent upscale.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=261)** You're going to see the word latent a lot when talking about Stable Diffusion.
>
> **[4:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=265)** What it's referring to is the latent image data.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=268)** Now, if you're coming from a film background this will make sense to you, because when you speak of a negative, a film negative, you think of it as having a latent image in it.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=277)** There's an image in there, it just needs to be brought out.
>
> **[4:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=280)** All of that weird noise data that's in our model, that's latent image data.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=285)** It's waiting to be realized.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=287)** It's waiting to be sampled into something.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=290)** So what this is saying is that it's going to resize the canvas and then it is going to use a latent image rendering process to try to fill this in.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=301)** So this isn't looking too much different to me than the just resize option.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=306)** It's kept my whole composition but it's distorted the person.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=310)** So none of these options are working great.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=312)** We're going to have to go with the resize and fill option and use some additional tools to get what we want.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=319)** I'm back in text to image and I have set my size to 768 by 512 and rendered another image.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=326)** I like this guy, so I'm going to send him to image to image because maybe I want to make some changes.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=332)** And there's something very important to pay attention to when you come into image to image.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=336)** And that is whether it has properly set the width and height.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=340)** I want to be sure this matches the original image.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=343)** Now, where you can get in trouble here is when you are dragging and dropping an image from somewhere else.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=349)** So by default, if I come into image to image, I'm at 512 by 512.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=353)** If I drop an image in here with a different aspect ratio, it does not update these.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=359)** So now, if I try to make an image to image change, things are going to get messed up because the original image is this aspect ratio.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=368)** But image to image is being asked to generate a square aspect ratio.
>
> **[6:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=372)** So if I ask it to do something, I've lost my original aspect ratio.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=377)** Now you can of course find out the original aspect ratio by dragging this into the PNG info tab.
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=383)** Or a nice thing in AUTOMATIC1111 is you can just grab the width slider or the height slider and drag and it will show you when you've hit the right number.
>
> **[6:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=394)** You just want that red to cover the entire image.
>
> **[6:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=396)** Again, different distributions are going to have different ways of dealing with changing the aspect ratio of an image.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=402)** Some are not going to allow it, others are.
>
> **[6:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=404)** But the concepts are going to be exactly like you've seen here.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/changing-aspect-ratios-with-img2img?u=76281980&t=407)** If you're working with AUTOMATIC1111, it's an easy thing to do but you've got to be sure you've got all your settings fiddled just right.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), this. (1), default. (1), else. (1)
> **CLI Commands:** make (7), cd (1), find (1)
> **Env Vars:** automatic1111 (2), cfg (1), png (1)
> **Analogies:** it's like (1), just like (1), think of it as (1)
> **Versions:** 0.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Removing elements with inpainting
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=0)** - [Instructor] There are a few different ways that you can edit an image that you've made inside of Stable Diffusion.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=5)** And one of those is called in-painting, wherein you select an area of an image and you give a prompt and only that selected area gets affected by the prompt.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=14)** Now, not all Stable Diffusion instances offer an in-painting feature.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=18)** In fact, none of the other ones that we've looked at, Mage.Space or any of those, have in-painting.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=23)** You've got to use AUTOMATIC 1111.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=25)** If you don't have access to AUTOMATIC 1111, I recommend watching this video anyway so that you can see how an in-painting feature works, because if someone does add it to a distribution that doesn't exist now, it's probably going to work very similarly to what you're about to see.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=41)** If I render an image using text to image, one of my options after that image is done rendering, is to say send to inpaint.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=48)** But I want to go back to an image that we made earlier, this Argentinian farmer image.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=55)** As you recall, I couldn't get it to stop rendering this barn, so I'm going to try and get rid of the barn.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=61)** And to do that, I want to take it into img2img.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=64)** But before I go into img2img, I want to know what my original prompt was.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=68)** So I'm going to go over here to PNG info and I'm going to drop this image in here and let it analyze it.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=75)** Aha.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=75)** Here's my prompt, my negative prompt, and all of my configuration.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=79)** I can now just say send to inpaint, and that takes me right to the img2img tab.
>
> **[1:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=85)** And in img2img, it's automatically selected the endpoint inpaint subtab and filled my image in here.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=93)** It did not unfortunately fill in the prompt boxes, which seems a little silly, but that's okay.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=98)** I can just come over here and copy these and paste them right in.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=105)** It's very possible that if I had sent this stuff to img2img instead of in-painting, it would've filled these boxes in and then I could move from img2img in to inpaint, but it's just as easy to do it this way.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=119)** So it also will not change the model properly, but I know this is the model that I used, so that's all set up.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=126)** Down here, you're going to see most of the same commands that you see with the normal img2img tab, but we do have a couple of extra things; this mask blur feature, mask mode, masked content inpaint area, mask padding, and some other stuff.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=141)** We'll get to those in a moment.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=142)** First thing we need to do is make a mask.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=144)** And when I come in here, you see I've got this black circular cursor; this is actually a paintbrush, so I'm going to paint over this barn.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=153)** I don't have to be super precise, but no reason to change the image more than I have to.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=164)** Our barn is masked.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=165)** So now I can choose whether my in-painting operation is going to affect what's inside the mask or what's outside the mask, depending on how I have either of these buttons set.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=178)** I've got it set to inpaint the masked area.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=180)** That means the changes are going to happen here.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=182)** The reason for the other is that if you want to change a really large area, it might be easier to just paint out a small thing and then tell it to affect the not masked area.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=193)** Next, I need to tell it what to fill this area with, and by that I mean fill it before it starts processing.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=202)** Because remember, Stable Diffusion works by adding noise to your image and then using your prompt to figure out how to remove that noise to diffuse an image out of that initial field of noise.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=215)** If I select Fill, it will fill this area with just a flat color and then start processing from there.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=223)** That's not what I want. I want to get rid of this.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=227)** If I choose Original, it will actually fill it with the original area.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=232)** So watch what happens when I do that.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=234)** I'm going to choose Original.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=235)** My prompt is set just as it was when I originally rendered the image.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=240)** I've got a strong denoising strength, 0.75, so that's allowing it to make a lot of change.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=247)** I'm going to hit the Generate button.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=249)** Actually, let's increase our batch count here.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=253)** Now I'm going to hit the Generate button.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=256)** It didn't get rid of my barn, it just changed it to a different barn.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=261)** Not what I wanted at all, but that should make sense to you because you've watched as img2img can regenerate an image you've already got, but make changes to it.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=273)** You saw that when we changed the woman in front of Stonehenge into an Asian woman.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=277)** So basically what I've told it to do is just give me a different barn.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=281)** That's a powerful feature.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=282)** That's something that could be really useful under the right circumstances.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=286)** This isn't one of those circumstances.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=288)** So instead I'm going to tell it to fill with latent noise.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=291)** Again, there's that latent word again, thinking of latent, meaning an image that's in the noise pattern, waiting to come out.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=297)** So now it will fill this area with noise and then diffuse from there.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=304)** Okay, that worked sometimes, but sometimes is all that I need.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=308)** Here, it replaced it with another barn, here, it replaced it with a house, here, it got rid of it.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=313)** I could maybe up my accuracy by fiddling with my CFG and Denoising sliders, but why bother?
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=319)** I've got the image that I want.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=321)** I got rid of the barn, and I like this tree here, so I'm going to save this one.
>
> **[5:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=328)** And I want to look at some other options we've got here.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=331)** Inpaint area, whole picture or only masked.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=334)** So this actually regenerated the entire image, and you can tell it's subtle, but you can tell that I've got some differences in tonality.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=348)** This looks a little darker.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=350)** Mostly it's an identical image.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=352)** If I wanted, I could say only masked, and now it will actually generate only the masked area and then it will shove that back into the image.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=367)** One thing that's nice about this is it's generating this masked area at a full 512 by 512 pixels and then sticking it back in, so presumably I'm getting better detail.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=377)** I've still got latent noise selected.
>
> **[6:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=379)** This was a case where it didn't get rid of the barn, so I would need to keep generating to get what I wanted.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=384)** So that's the basics of inpainting.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=387)** I have not changed my prompt at all here.
>
> **[6:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=389)** It's working with the same prompt, but as you've seen, depending on the masked content mode that I choose, I can either change something in a masked area, or get rid of something in a masked area, or I can change or get rid of something in the unmasked area, depending on how I've got these set.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=407)** So this is a powerful way to start altering things.
>
> **[6:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=410)** I'm tempted to go in and see if I can change or alter Mount Fuji, but we'll see, I'm liking it more and more.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/removing-elements-with-inpainting?u=76281980&t=418)** There are some other things that you can do with inpainting those, and we're going to get to those next.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2), super (1), this. (1)
> **Env Vars:** automatic (2), png (1), cfg (1)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 0.75 (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)

#### Adding objects with inpainting
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=0)** - [Instructor] I want to return to this image and do a little inpainting.
>
> **[0:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=3)** The idea that this was supposed to be an astronomer out working, someone who could use a pocket Stonehenge.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=8)** And sure enough there are somebody holding an instrument of some kind.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=12)** Fact is stable diffusion has trouble drawing gear whether that's cameras or musical instruments.
>
> **[0:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=19)** Things that you interact with with your hands can sometimes end up goofy looking.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=23)** This person also has an extra arm or something, or maybe that arm's okay and they've got an extra elbow.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=28)** I don't know.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=29)** It's hidden by the tripod.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=30)** It's not immediately noticeable.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=32)** But also, again, I need to decide, is this image going to be a final asset or am I just looking for a pre-visualization?
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=39)** If that's the case, this isn't worth taking the time to fix.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=42)** For this exercise though, I want to try adding an observatory or something out here on the horizon.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=48)** I think that would help sell the idea of them as an astronomer or at least astrophotographer.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=55)** So I'm coming in here to PNG info.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=58)** I'm going to grab my positive prompt, send to inpainting.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=64)** Then I'll go back and pick up my negative prompt.
>
> **[1:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=72)** So again, I'm in the image to image tab inside of the inpainting.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=77)** So when I mouse over the area I've got my mask just like we had before.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=83)** So I'm going to paint the area where I want my observatory.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=87)** Now this is just, I'm not defining the shape of the observatory, I'm just telling stable diffusion.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=93)** This is a blob that you're allowed to work within.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=96)** You can put whatever you want in here.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=99)** So there we go.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=101)** I'm going to keep my resize mode to just resize.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=103)** I'll keep my mask blur where it is.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=105)** I want to inpaint the masked area.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=108)** I do not want to alter what's there.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=110)** I want something new.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=111)** So I'm going to switch to latent noise.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=114)** I'm going to keep this on whole picture.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=118)** My denoising strength is kind of where it always is.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=120)** I'm going to leave it there.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=121)** My CFG scale is where it always is.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=123)** I'm going to leave that there and I'm going to come up here and make a really important change.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=128)** I'm going to switch models.
>
> **[2:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=130)** This is realistic vision.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=132)** This is the model that originally rendered this scene.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=134)** For inpainting, it's usually best to use a model specifically designed for inpainting.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=141)** Now we got away with it in the last video because sometimes you can, but I have down here the stable diffusion 1.5 inpainting model.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=148)** Now when you go look for models you'll sometimes find that in addition to the regular model there's an inpainting version.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=155)** Also, I need to go back and see if there's an inpainting version of realistic vision.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=159)** I don't believe there is.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=161)** But you can get away with an inpainting model that is not from the same training session as whatever model you originally rendered with.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=169)** So I'm going to pick that.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=170)** This is a model that has been trained specifically for inpainting.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=173)** It's got some extra secret sauce in it.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=176)** If you really want to know what's going on it's not hard to google how these things work and find good descriptions.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=182)** So I think I've got a random seed.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=184)** I think I'm ready to give this a try.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=186)** Oh, I'm going to increase my batch count up to four and here we go.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=193)** Yeah, I didn't change my prompt so there's no way we're getting an observatory here.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=199)** So let's try two things here.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=200)** Let's say observatory in background and give it a try.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=207)** And I'm still not getting anything.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=210)** And if you think about it, I've got a masked area here.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=214)** This is the area that it's allowed to manipulate.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=216)** It's dealing with the whole image, but it's only allowed to change this.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=220)** And my prompt is describing the entire image.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=223)** I'm going to have better luck if I change my prompt to say observatory and switch my inpaint area to only masked.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=236)** I think this is going to work better.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=237)** We may need to change our denoising strength.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=241)** Now it's doing something.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=242)** It's not necessarily doing anything that I like, but it is doing something.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=247)** These are weird observatories.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=248)** They're all spherical.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=249)** Oh, that one's not.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=251)** I mean like completely spherical.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=252)** Let's turn up the denoising strength to give it more room to make modifications.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=260)** These are better and this is starting to sell it a little better.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=263)** Although they look a lot like arboretums to me.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=267)** I feel like this probably a nice garden we could go walk through.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=270)** I don't know what that is.
>
> **[4:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=271)** That's not bad.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=272)** But I want like the white building with the cutout door.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=278)** I think also, I don't know that they're necessarily fitting the time of day.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=283)** Let's say observatory at night and see what happens.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=288)** Well, this is odd.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=289)** Oddly enough, it's given us mostly trees.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=291)** I'm going to turn the denoising strength back down a little bit, I think.
>
> **[4:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=295)** Well, no, I only went to 0.8.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=297)** Let's turn the CFG scale up.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=299)** Really make it, pay attention to that prompt and try it again.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=304)** It's really stuck on trees.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=306)** This is getting better, although that looks like it could be a state capital or something.
>
> **[5:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=316)** All right, I'm getting the same thing over and over, which is a sign, I think, that my prompt is weird.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=322)** I'm going to go astronomical observatory at night and this one is pretty good.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=332)** I'm liking that.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=333)** That looks like an observatory to me.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=336)** Why it's giving me so many trees?
>
> **[5:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=338)** I don't know.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=339)** That's very odd.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=340)** It may have something to do with the shape of my mask, but I did manage to get an observatory in there.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=345)** So this is adding with inpainting.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=349)** There are going to be times when it goes much easier than this.
>
> **[5:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=351)** There are going to be times when it's harder.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=353)** You've got to play with your prompt.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=355)** You've got to play with your denoising strength.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/adding-objects-with-inpainting?u=76281980&t=357)** But the really critical thing to remember is that you do need this inpainting model selected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (3), try. (2), this. (2), case, (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** cfg (2), png (1)
> **Definitions:** is a  (3)
> **Versions:** 1.5 (1), 0.8 (1)
> **Analogies:** just like (1), picture (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** switch to (1)

#### Outpainting
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=0)** - [Instructor] You've seen how inpainting can be used to add and remove details within an image.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=5)** We are now going to add details outside of the image, a process called outpainting.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=12)** Let's say word has come down from on high that some changes have been made to the layout and now this needs to be a rectangular image.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=20)** It needs to have a landscape aspect ratio.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=23)** I could throw this image into PNG info, get the original prompt, get the original seed, get all the original settings, change the width and re-render it.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=31)** But if I do that, I will get a different image.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=34)** Again, thinking about all of these images as existing somewhere in that latent space that exists within our model.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=42)** This particular image lives where it lives because it has 512 by 512 pixels.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=48)** Different width is going to change the data enough that I'm going to get a different image.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=52)** Layout might be different, his space might be different.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=54)** I like the way this looks, so rather than re-render it, I want to add space to the left side.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=60)** To do that, I'm going to go here to my image to image tab.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=64)** I can either work with this sub tab image to image or with the inpainting tab.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=70)** Either one will work.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=71)** I'm just going to stick with this one, drop him in here.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=74)** Note that I am using my inpainting model.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=78)** Yes, this is outpainting, but outpainting's actually a form of inpainting, so we use an inpainting model.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=84)** By default, Automatic 1111 ships with two outpainting scripts down here in the script menu.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=91)** The first one is called outpainting mark two.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=94)** Now, that might seem like the one we want to use, but it's not.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=98)** We want to use poor man's outpainting and when we pick it we get this poor man's selection of outpainting tools.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=104)** Starting with the number of pixels that we're going to use to expand the image, we're going to add 128 pixels to the left, the right, the top, and the bottom.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=115)** That's not going to be divided amongst these all four.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=117)** It's going to add 128 pixels to each side.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=120)** We don't want that. We want only the left side.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=124)** After it adds that space, it needs to fill it with something.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=128)** It can either fill it with a color, with original image, which doesn't really work, 'cause there's no original image there, latent noise, or latent nothing.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=136)** This is just like inpainting.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=137)** We're going to go with latent noise.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=138)** We want there to be some noise there that it can diffuse an image out of.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=144)** The documentation for poor man's outpainting says that it's best to use maximum denoising strength and maximum CFG scale.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=154)** In addition, it says it's best to use between 50 and 100 sampling steps.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=159)** So we'll split the difference and go with 75.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=162)** We don't need to change the dimensions of our image.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=166)** These should be the correct dimensions for the image we've dropped in here, which they are.
>
> **[2:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=170)** It's going to take care of adding width.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=172)** We don't need to worry about that.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=173)** We are ready then to just generate.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=177)** And here we are.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=178)** Now look, it's continued the line of the mountain down.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=182)** It's continued the line of these down.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=184)** It's cleared all my farmland across.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=187)** It's brought the clouds over.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=189)** I can see a line here.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=192)** There's a difference in this color and this color, but it might be that I can see this line here because I know to look for it.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=199)** A civilian might not see it, but still we can try to address that by coming down here and changing our mask blur.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=209)** This is how blurry the transition zone between the original content and the new content should be.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=214)** I'm going to set that to 20.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=215)** I want you to notice something else about this image.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=218)** I didn't put in a prompt of any kind.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=221)** It looked at the existing image to figure out the context for what it should put in here.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=228)** Again, we are in image to image right now, so it's getting everything it needs from here.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=234)** For that matter, the seed is very often not as important as it is when you're working with text to image.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=242)** That's why I didn't bother putting it back in to match this image.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=246)** So now let's see if we can do anything about that transition.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=250)** Yeah, that didn't really help.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=251)** Can you see that there's a, you can really see the line right through here.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=257)** Setting that aside, I think this has worked fantastically well.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=261)** So let's try to fix this by clicking this send to image to image button.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=267)** Dink, so now this is the image that I'm working with.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=272)** It has already changed my width to be 640 by 512.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=276)** My thinking is if we do a normal image to image render of this as it re-renders it, it might smooth out some of this stuff and get rid of that line.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=285)** We need to make some adjustments to our settings though.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=287)** First of all, we need to turn off our poor man's outpainting script.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=291)** Otherwise, it's going to add another 128 pixels to this image.
>
> **[4:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=295)** Our denoising strength is set crazily high for what we're doing now.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=300)** Remember, we're just doing a normal image to image.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=302)** I want this to mostly be the same.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=306)** So I want my denoising strength to be pretty low.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=309)** I don't want it to have a lot of latitude for changing the image.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=312)** Remember, the more you go this way, the more you get new stuff.
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=315)** The more you go this way, the more you stick with the old image.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=319)** I'm also going to put my CFG scale back to something normal, like seven.
>
> **[5:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=323)** I'm going to set my steps back down to 20.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=326)** Still, I'm not going with any prompt.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=329)** I am just re-rendering.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=331)** That did a pretty good job over here, and it didn't stick a barn back here, which is unusual.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=339)** His face has changed a lot.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=340)** Nothing wrong with this face. Came out good.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=342)** But I liked this guy.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=343)** So let's turn the denoising strength back up.
>
> **[5:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=347)** We'll put it at the halfway point.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=349)** We'll put it right at 0.5.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=352)** Aha, you know what the problem is?
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=355)** There's one change that I forgot to make.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=357)** I'm still working with the inpainting model, and I don't need it anymore because I'm not outpainting anymore.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=363)** I'm just doing straight image to image.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=365)** So let's change this back to our realistic vision model and see what happens.
>
> **[6:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=372)** Okay, I'm liking these faces better.
>
> **[6:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=375)** It's still cleaned that up pretty well.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=377)** This might be a time to go get our original seed.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=382)** So I'm going to come back to my image.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=384)** Whoops. I'm going to go to PNG info.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=386)** There's actually another way to do what I'm about to do right now, but I really want to make sure you don't forget about this PNG info, because it's such a powerful tool.
>
> **[6:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=396)** Let's go ahead and put our prompts back in, because that might be also why we're not getting the same guy.
>
> **[6:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=405)** Oh, we don't have much in our negative prompt.
>
> **[6:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=409)** Let's see what it does without the seed.
>
> **[6:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=413)** There we go. Now we got him back in.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=414)** Now it's sticking a red barn back in here.
>
> **[6:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=416)** So the main, the most important thing is we have cleaned up this mess.
>
> **[7:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=421)** So we now have an image that's wider and we've used the image to image process to clean up the image that we originally generated with our outpainting operation.
>
> **[7:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=434)** So that's a handy trick to remember.
>
> **[7:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=436)** Again, the trick to outpainting is max denoising strength, maximum CFG scale, upping your sampling steps, and making sure that you're putting it on the right side.
>
> **[7:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting?u=76281980&t=446)** Let's take a look at another example, which we'll do in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), throw (1), default, (1)
> **Env Vars:** png (3), cfg (3)
> **CLI Commands:** make (3)
> **Best Practices:** it's best to (2), don't forget (1)
> **Versions:** 0.5 (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)

#### Using outpainting to resize an image
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=0)** - [Instructor] We're going to do some more outpainting.
>
> **[0:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=2)** Let's say the word has come down from on high that this image also needs to be wider, needs to be a landscape aspect ratio.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=12)** As I said before, I could, because I can go into PNG info and get the prompt and the seed and all of the original parameters, I could re-render this at a wider size.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=22)** However, if I increase the width here, that's going to make a change.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=27)** That's going to give me a different image.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=28)** I'm going to end up with a different astronomer with a different background.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=32)** Everything's going to change, and I like this stuff so I just want to use outpainting to resize the image.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=37)** However, I want to keep my composition.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=39)** I want to keep the astronomer in the middle of the frame.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=41)** So I'm going to start by switching to my inpainting model.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=46)** And then I'm going to come down here and fire up my poor man's outpainting script which defaults to adding 128 pixels to all four sides.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=55)** I want only the left and right side.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=57)** However, I can tell you that Stable Diffusion is not going to do a good job of adding to both sides simultaneously.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=64)** Even though they both need the same settings, even though they both need the same prompt, it's just better to do them separately.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=70)** So I'm going to set this to only the left side.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=73)** I want the new content that's generated to be filled or the new area that's generated to be filled with latent noise so that the content will be derived from that.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=82)** Again, as per the instructions for Poor Man's outpainting, we need Denoising strength set all the way up.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=87)** We need CFG scale set all the way up and we need sampling steps somewhere between 50 and 100.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=93)** I'm going to go 50.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=95)** We went 75 last time.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=96)** But as we've seen earlier in the course increasing sampling steps does not necessarily get you better quality.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=102)** And if I can keep it as low as possible, my rendering times will be faster.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=108)** Now we need a prompt for filling in the new area.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=112)** I'm going to say desert landscape at night.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=116)** Starry sky.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=120)** Batch count doesn't work with the poor man's outpainting script, so I can only do one at a time.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=126)** This is nice, it continued the horizon.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=128)** I've got a good looking sky, but there's this vertical.
>
> **[2:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=130)** Oh, I see.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=131)** Okay, there's this vertical bar here and that's because my original has a black border around it.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=137)** That is not an interface element coming from AUTOMATIC1111.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=141)** I hadn't noticed it before.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=142)** I really like it.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=143)** I like what it does for this image but it's apparently getting in the way.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=147)** I could go into an image editor and crop that out.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=150)** Instead, I'm going to try increasing the mask blur.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=154)** This is the blurriness of the boundary between the old content and the new and hopefully that'll just smear over and we'll see what happens.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=162)** Not much happened, really visible seam.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=165)** Some kind of weird, yeah, it's just bad.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=168)** That's better, I don't like the nuclear power plant meltdown over the horizon that's happening.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=175)** Let's try again.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=177)** Wow, okay.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=179)** Like the landscape.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=180)** This is berserk here.
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=181)** Let's get going with our negative prompt here.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=184)** We don't want any deep galactic structures here so we're going to say galaxy, aurora, nebula, nebulae.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=195)** we'll just conjugate nebula fully.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=197)** Bright lights, colored lights.
>
> **[3:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=201)** See what that does.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=203)** That looks pretty good.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=203)** I don't know what this thing is and our galaxy is getting kind of weird.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=208)** I like this, it looks a little fanciful.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=214)** Let's do another.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=216)** Okay, it's been doing this the last couple of images we're getting these weird string beans coming out of our galaxy and I'm wondering if the sampling steps are set too high.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=226)** That looks over rendered to me.
>
> **[3:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=229)** So this may actually be an example of quality not improving with more steps.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=233)** So I've put that back down to 20.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=238)** That's better.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=239)** I don't like this light.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=244)** It's doing it again.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=247)** Let's drop the denoising strength a little bit.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=250)** Maybe it's got a little too much freedom.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=253)** That's looking better.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=254)** That's looking a little more like a real galaxy and I like this background.
>
> **[4:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=258)** Okay, our left side is pretty good.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=261)** I mean really this whole Milky Way thing shouldn't be here at all, with that much light pollution on the horizon you'd never see the Milky Way up there but it's conveying astronomy and mysticism and pocket stonehenge and all sorts of other stuff.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=273)** So let's switch from the left side to the right side.
>
> **[4:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=278)** All of our other settings are going to remain the same.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=281)** We're going to use the same prompt but if I hit generate right now, it's not going to work.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=285)** If I hit generate right now I am not going to get 128 pixels added to the right side of this image.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=290)** What I'm going to get is 128 pixels added to the right side of this image.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=294)** We're going to lose the left side we just worked so hard to get so I need to send this to img2img.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=301)** Now we'll add 128 pixels to this.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=306)** It automatically upped my width, which is good.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=308)** I'm at 640 rather than 512.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=311)** It's doing it again.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=313)** What is it with this stuff?
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=315)** It's ignoring my negative prompt it seems like and now it's piling up sandbags or something.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=324)** Boy, this is perfect.
>
> **[5:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=325)** There's no seam.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=326)** I'm really not crazy about this.
>
> **[5:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=328)** I could inpaint that out very easily for that matter.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=331)** I could just take it into Photoshop and clone it out.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=334)** We'll save that just in case as a safety image, a perfectly acceptable safety image.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=340)** But let's go ahead and generate some more.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=342)** Okay, those are some weird looking rocks, but you know what?
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=345)** This is working really well and I would still like to through inpainting, put an observatory or a radio telescope or something back here.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=354)** So I like this and actually my background is very smooth.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=358)** I don't think I need to do what I did in the last image which was throw this into img2img and let it re-render the whole thing.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=366)** This is working very well.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=367)** So that's outpainting again with the idea of preserving a center composition.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=374)** If I wanted to make this image a larger square, I could now go in, select the top and let it add to the top, select the bottom and let it add to the bottom.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=382)** If I were to select the top I would change this to simply starry sky.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=387)** If I were to go to the bottom, I think I would go and grab my original prompt and put that back in.
>
> **[6:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=392)** The important thing is work one side at a time.
>
> **[6:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-outpainting-to-resize-an-image?u=76281980&t=396)** That's just the nature of this particular outpainting process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (2), interface (1), this, (1), switch (1)
> **UI Navigation:** select the (3), go to (1)
> **Env Vars:** png (1), cfg (1), automatic1111 (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1), in the last (1)
> **Speakers:** - [instructor] (1)

#### Improving faces created by SD
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=0)** - [Instructor] I've been promising you a fix for bad faces since the very first lesson where we were rendering images and I've put it off till now for a couple of reasons.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=9)** One, you needed to learn some extra tools before we could address it.
>
> **[0:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=13)** And two, because I feel like you've already seen the fix for bad faces, which is to use a model that does a good job with faces.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=22)** For these last few lessons, you've seen me rendering people and we haven't had any bad faces and that's because I was using that realistic vision model which does very well with faces.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=31)** And there are lots and lots of other models that are fine tuned for generating faces and generally do a better job than the 1.5 model.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=42)** In the end, I think that's the easiest way to deal with the face problem is just don't have it in the first place, but sometimes it's going to happen.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=49)** Sometimes it's going to happen regardless of what model you're working with.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=52)** So let's take a look at some images that I generated early on, like this one.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=58)** I mentioned before, I liked her framing here within the hinges.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=62)** I don't actually know if that's called a hinge, but anyway, but her face is totally scrambled.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=67)** So we're going to go, as you might expect, to img2img and we're going to go to inpainting and I'm going to drop her in here.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=78)** Now back here in txt2img, you probably saw this button restore faces and maybe you've even tried it.
>
> **[1:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=85)** If you have, you've probably found that it didn't really help.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=89)** For restore faces to do anything, you need to go here to Settings to Face restoration and you need to pick one of these face restoration models, CodeFormer or GFPGAN.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=101)** And then you need to set a weight.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=103)** It can't do anything at all if you haven't taken that step.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=106)** My experience is that even if you have taken that step, it doesn't matter.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=110)** It's still not going to do anything at all.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=111)** Sometimes you will see an effect.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=115)** The best case scenario that I've seen is that it will change the face, but it will take out so much detail and leave it so soft looking that it just doesn't look real.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=123)** As with many things related to stable diffusion, it might be that restore faces works great with a particular sample add a particular denoising strength with a certain number of steps, and maybe you could find something that would consistently work.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=136)** I'm just not interested in that because there are other ways to get around it.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=141)** Restore faces can also work better if you choose the Hires. fix option.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=145)** At the time of this shooting, Hires. fix is broken on my machines.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=149)** I've tried it on several different machines all running the latest version of stable diffusion and I'm getting out of memory errors and I've got GPUs with a lot of memory, so I'm not sure what's up with that.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=159)** You're not really missing out if you don't have that.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=161)** The techniques we're going to look at are going to work in places other than automatic 11/11,.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=166)** For example, using a different model will work with any distribution of stable diffusion that supports multiple models.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=171)** And what we're going to look at right now is simply fixing a face with inpainting.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=176)** And so if you've got a distribution that supports inpainting, then something like this might work.
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=181)** So I'm going to paint over this woman's entire head.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=185)** Not just her face, but I'm going to get her hair also.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=188)** And I'm not worried too much obviously about being very precise.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=195)** I'm going to set my resize mode to Just resize and I want to inpaint the masked area.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=202)** I want to fill with latent noise and I want the inpaint area to be Only masked, because the real problem we're having with faces right here in this image is that the face is very, very small in the frame and stable diffusion 1.5 training model just doesn't have enough data from its original training to be able to deal with a very, very small face.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=227)** So when I choose Only masked, it's going to render the mask area at my full size and then scale it back down.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=235)** I can tell you from a test on this image that's still not going to work.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=238)** So what I'm going to do instead is change.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=241)** Whoa, change the dimensions of my image.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=244)** I'm going to try to change the dimensions of my image, there we go, to 1024 by 1024.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=248)** So now it will have a nice big area to render a good looking face in and then it'll shrink it back down and stuff it into my finished image.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=257)** Finally, I need a prompt.
>
> **[4:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=259)** So I'm going to say a beautiful woman.
>
> **[4:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=265)** Now beauty is subjective.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=268)** I don't want to get if lost in the weeds in a gnarly discussion of, well, what does beautiful woman mean?
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=273)** Can we just agree that what I'm looking for here is a woman whose nose is on straight rather than upside down or sideways, who doesn't have six eyes and four rows of teeth.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=285)** I'm using beautiful woman simply to try to get towards normal woman, meaning anatomically correct.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=293)** So with all that set, let's double check my model.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=296)** I'm set for the pruned model, but I'm doing inpainting.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=299)** So I'm going to switch to my inpainting model.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=302)** That's going to load and I'm going to hit Generate.
>
> **[5:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=307)** Here are the results.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=309)** And she's a normal looking woman.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=311)** She is not disfigured.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=312)** Now she came in with a slightly paler skin tone than her hands.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=318)** We could adjust that in Photoshop.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=319)** We could keep rendering.
>
> **[5:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=320)** I only did one pass.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=321)** By the way, the same trick can also be used to clean up hands.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=326)** So again, the critical thing here is that I am asking it to render at very large size or rather at double size a face and then put it back into the image.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=336)** Let's do another one.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=339)** So I'm going to paint here.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=345)** I find if I don't get the hair, I get faces that aren't merged well with the hair.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=350)** But the rest of my setting should be okay because I'm still set for Only masked inpaint area, filled with latent noise.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=357)** And again, that means that it's starting with a field of noise just like it would with a brand new image.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=365)** Width and height are set to double size.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=367)** I'm using a random seed.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=368)** My denoising strength is pretty much the default as is my CFG scale.
>
> **[6:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=372)** So I haven't changed either of those.
>
> **[6:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=373)** I'm sticking with the beautiful woman prompt and I'm going to hit Generate, and here we go.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=380)** So a couple of things.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=382)** Again, her face has ended up a different skin tone than her hands.
>
> **[6:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=385)** So let's try something else.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=387)** Rather than latent noise, let's fill with the original because the original might have an average color tone that better matches her hands.
>
> **[6:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=398)** Yeah, that works a little better.
>
> **[6:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=400)** I buy that more.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=402)** Honestly, these faces, they're coming in maybe a little more supermodel than I'd like.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=407)** So let's just say a woman and see what happens.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=411)** I like this better.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=411)** We've lost some of that fake glamour we were getting before.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=414)** And it turns out that the prompt woman with the inpainting model is enough to not get a disfigured face.
>
> **[6:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=419)** Her skin tone is better matching her hands.
>
> **[7:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=422)** So I think this is working well.
>
> **[7:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=423)** You could use this same trick for fixing specific features.
>
> **[7:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=426)** If you've got an face, that's okay, but an eye is out of whack, you can inpaint the eye.
>
> **[7:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=431)** Again, you can do this with hands.
>
> **[7:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=434)** I don't know why she's carrying a bag and one pants leg is longer than another and this foot is messed up.
>
> **[7:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=438)** We could inpaint that.
>
> **[7:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=439)** So don't forget, not just for restoring faces, but for restoring any kind of detail.
>
> **[7:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=444)** This trick of inpainting only the masked area at double size.
>
> **[7:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/improving-faces-created-by-sd?u=76281980&t=449)** If it's something that's very small

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1), switch (1), pass (1), else. (1)
> **CLI Commands:** find (2)
> **Env Vars:** gfpgan (1), cfg (1)
> **Versions:** 1.5 (2)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1), just like (1)
> **Best Practices:** don't forget (1)

#### Outpainting with openOutpaint
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=0)** - [Instructor] We're going to look now at another outpainting tool, something called openOutpaint.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=4)** This is available for AUTOMATIC1111 only.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=9)** So you're not going to find this at mage.space or any of the other websites we've been looking at.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=14)** So if you don't have access to AUTOMATIC1111, you're not going to be able to use this.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=18)** I wanted to show it anyway both for those who do have their own server but also for those who don't because I think it's a great demonstration of the types of interfaces that we can expect to see in the future maybe for Stable Diffusion.
>
> **[0:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=32)** So though you may not be able to find this online now, you might eventually.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=35)** It installs as an extension.
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=38)** So you need to first disable any listen commands you may have in the batch file that launches AUTOMATIC1111.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=46)** Then you just go through the normal extensions process, search for outpaint and you will come across openOutpaint.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=53)** Note that it says in its installation instructions that you have to add this to the command line when you launch.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=61)** So after getting it installed, go back to your batch file, put your listen command back in place and then add this.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=70)** If everything goes well when you run AUTOMATIC1111 you should now have an openOutpaint tab and if we click on that, we get taken to the openOutpaint environment.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=82)** So a couple things here for this to render properly on screen, I had to greatly expand the pixel dimensions of my screen.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=90)** So you may notice texts look smaller than it has looked in the rest of this course and that's because I've had to go to a bigger size.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=96)** I also had to switch here on the Mac from Safari to Chrome.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=99)** Even at this size, Safari was not rendering this palette properly.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=104)** So what this is is a single tab that can replace all of these other tabs.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=110)** I can do text to image in here.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=112)** I can do image to image, I can do outpainting, I can do inpainting.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=115)** I can export my images all within this single unified environment.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=119)** It is very similar to InvokeAI which I have mentioned before.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=123)** That's another distribution that you can run on your own hardware.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=126)** Personally, I use this for outpainting.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=128)** I use it sometimes for inpainting, but I'm so used to the other environment that I use this more like an add-on tool.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=135)** So let's start from nothing here.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=137)** I'm going to go over here to the prompt section and throw in that prompt we were using earlier.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=143)** I'm not looking to get a good image out of this, I just want to show you how this works.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=147)** Woman in business casual clothing, Stonehenge in background photo.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=157)** I'm not going to bother with a negative prompt.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=159)** I'm using the realistic vision model.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=161)** So with that in there, I have currently selected by default, it comes on the dream tool.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=166)** So this is going to fulfill my dream of an image of a woman in business casual clothing.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=171)** I click here, oops, I click here and it starts rendering.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=178)** When it's done, I am looking at image one of four because if you look over here in stable diffusion settings, you see that I have a batch count of two and iterations of two, so two images per batch and here you'll find steps, CFG scale.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=195)** There are not pixel dimensions.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=197)** You can only render square images.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=199)** This is just telling you the size of the square, size of one side of the square.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=203)** So now that I've rendered an image, I can click through them and see if I like any of them.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=209)** I think I'm going to go with this one right here.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=211)** So I've got a yes button and a no button.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=212)** I'm going to say yes.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=214)** And so that image is now baked onto my canvas.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=216)** I've got a history palette up here that'll record a lot of steps.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=220)** I've also got a Layers palette so I could create a second layer and render another image on top of part of it.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=225)** So I can actually do some compositing in here.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=227)** But what I would like to do next is expand this.
>
> **[3:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=229)** I would like to get a rectangular image so I need to do some outpainting.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=234)** First, I need to be sure that I switch to an inpainting model.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=238)** This is just like the outpainting we were doing earlier.
>
> **[4:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=240)** So I still have my model selector up here but I also have this model selector here.
>
> **[4:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=245)** Ignore this one.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=246)** This is where you change your model.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=249)** So I'm going to pick my inpainting model.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=251)** After it loads, I can hit this refresh button and now this is set to the inpainting model.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=257)** Now things get cool.
>
> **[4:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=258)** I've still got my dream tool selected.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=261)** So if I click and select an area that includes some of my current image then it will take that image into consideration as it renders and there it just continued my image for me.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=276)** Let's throw some onto the other side.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=283)** Okay, she's standing right next to a stone but I got four different images so I can click through.
>
> **[4:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=292)** Ah, that's the one I want.
>
> **[4:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=293)** I'm going to hit yes here.
>
> **[4:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=295)** That got added to my history palette.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=296)** I have not clicked to choose one over here.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=298)** I just liked the first one so much I didn't even bother looking at the others.
>
> **[5:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=303)** Wow, where'd she come from?
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=304)** Yes, the first one is definitely the best.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=305)** I'll hit yes, and now I've got this image over here.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=309)** I've got a brush here for painting masks if I want to do inpainting, I have saving and upscaling over here.
>
> **[5:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=317)** I can pick an upscaler, choose a size and do an upscale at the same time that I say save Canvas.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=324)** When I say save canvas, I'll get an image that I can download and either throw back into here or into image to image or Photoshop or wherever.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=334)** When you install the extension, you also get buttons.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=337)** Now when I generate something with text to image, I have a send to openOutpaint button.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=342)** Same thing over here with image to image.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=344)** So it can be really tightly integrated at whatever level you want.
>
> **[5:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=347)** You can work entirely in here or you can, as I was saying use it as an add-on for the other tools.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=353)** Great environment, as with the rest of Stable Diffusion, all open source so hopefully this will continue to be expanded.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=359)** If you don't have access to something like this right now, keep an eye out for it.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/outpainting-with-openoutpaint?u=76281980&t=363)** It's a very cool way to work.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), throw (3), switch (2), let (2), this, (1)
> **Code Identifiers:** openoutpaint (5)
> **Env Vars:** automatic1111 (4), cfg (1)
> **CLI Commands:** find (3)
> **Tools:** safari (2), command line (1)
> **UI Navigation:** click on (1), go to (1), switch to (1)
> **Analogies:** similar to (1), just like (1)
> **Cross-References:** go back to (1)

#### Instruct pix2pix
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=0)** - [Instructor] In AUTOMATIC1111, there's an additional feature hidden away in the img2img tab.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=5)** It only becomes available when you select a certain model.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=10)** This is called Instruct pix2pix and it lets you use natural language to perform pretty radical edits to an image.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=17)** Before I show you how to install it, and before I show you how to access it on systems other than AUTOMATIC1111, let's take a look at what it does so you can see if you're interested.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=26)** I'm going to start with this image of our Argentinian farmer and just as a refresher, I want to resize this to make it more rectangular.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=34)** So I need out painting for that.
>
> **[0:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=36)** So I need to switch to an in painting model.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=41)** Notice that I'm in the img2img tab.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=43)** For using the Poor Man's out painting script, you can be in the img2img tab.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=50)** You don't have to be in the in paint tab within the img2img tab.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=56)** So I would like to add 256 pixels to the left side of the image.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=62)** I'm going to set my blur up pretty high.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=66)** I'm going with fill here, setting my denoising strength all the way, my CFG scale all the way.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=73)** My step count to 50 And this looks pretty good except for the big band down the middle.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=81)** So I'm going to send that back to img2img.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=84)** I'm going to turn off the out painting script.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=91)** It has properly set my size, my rendering size to 768 so I'm going to hit generate And I've ended up with some kind of cubist conference room.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=101)** Okay, I forgot to put in a prompt.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=103)** I need to put my original prompt in here to get back to this image.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=106)** I also need to switch back to my original model.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=109)** So we're going to go back to realistic vision and show you another trick I stumbled into the other day.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=116)** If I take my original image here and drag it up here into the prompt field, it will pull all of my parameter metadata so I can edit this other stuff.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=125)** This is the steps and sampler and everything.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=127)** I can take that out.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=129)** I can stick my painterly thing down here in the negative prompt.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=132)** Now I'm ready to try again.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=134)** And now, it's really changed the image a lot.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=137)** I hope you recognize what's going on there.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=138)** That means that I need to change these back to something normal.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=144)** Denoising strength is up so high that the system is free to change the image a lot.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=148)** So I'm going to drop that down to around .5.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=150)** I'm going to put my CFG scale back to seven and hopefully, we're back to normal.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=158)** I got rid of that really strong band in the middle and it's stuck a barn back in there of course.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=165)** It wants a barn in the background, I'm not going to fight it because I have a way to defeat it now that we did not have before.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=171)** I'm saving this image and now I'm going to send this to img2img.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=176)** I saved it just in case something goes wrong.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=178)** I have installed a model called Instruct pix2pix.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=184)** I'm choosing that now.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=185)** And with that model selected, I can now simply type in some text up here.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=190)** I want to get rid of that barn.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=191)** I'm going to say put a forest in the background and I'm going to hit generate.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=200)** Well, that didn't really do anything, did it?
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=202)** Once I have activated the Instruct pix2pix model, if I scroll down, I'll find I have a new control, image CFG scale.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=211)** So many of the controls in AUTOMATIC1111 are context sensitive.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=215)** For example, the script menu, the contents of the script menu changes depending on what tab you're in.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=221)** If I go over here to text to image, I no longer have poor man's out painting because I can't do out painting when I'm in text to image.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=228)** Similarly, if you have the instruct pix2pix model selected, you will get this image CFG scale slider.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=235)** You should recognize CFG scale because you have a CFG scale slider.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=239)** We just turned it.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=241)** Remember, the higher the CFG scale is, the more freedom the system has to go its own way to stray from the prompt.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=249)** The lower it is, the more it adheres to the prompt.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=252)** Image CFG scale is the exact opposite.
>
> **[4:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=255)** The higher the image CFG scale, the more the system sticks to this image.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=260)** The lower it is, the more it's free to add its own stuff.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=263)** So plainly, it's sticking too closely to this image.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=267)** So let's lower image CFG Scale.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=270)** Cut it in half there.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=273)** Still nothing.
>
> **[4:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=274)** All right, let's take it even farther.
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=284)** Aha, we're getting a forest.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=286)** I want more forest.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=287)** There's still of a hint of building.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=288)** There's still a hint of building there.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=289)** I'm going to say, put a dense forest in the background.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=296)** Ha, and the building has been eliminated.
>
> **[4:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=299)** Now we've lost some farmland.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=301)** His face has changed and is starting to get a little screwed up.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=306)** So I think I'm going to raise my CFG scale back up.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=308)** However, I can also always go back in and in paint him later if I want.
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=315)** Okay, now we've got a barn in the forest but we're starting to get him back.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=319)** So, and we've got some of our farmland back.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=321)** Let's say put crops in front of the forest.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=331)** We lost our forest there.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=334)** Let's go back to our dense forest.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=341)** As you can see, I'm just working with regular English.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=344)** I'm just thinking up anything I can say.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=345)** This is not like what I said about prompt writing.
>
> **[5:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=347)** We don't put lists of things here.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=348)** We put descriptions of things.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=350)** I didn't have to say what the background was.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=352)** It figured that out.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=354)** What if I say something like, make him younger.
>
> **[6:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=360)** Wow, younger and goofier.
>
> **[6:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=362)** My point here, it screwed up his hat there but it figured out what him is.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=367)** It also stuck like a... I would say that's a scarecrow, except it looks like a penguin.
>
> **[6:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=372)** It stuck a scare penguin in the background.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=374)** Weird.
>
> **[6:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=375)** Let's not make him younger, let's make him older.
>
> **[6:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=379)** That did, wow, it made him a lot older.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=382)** So again, I could be playing with my image CFG scale and I may find that I want different amounts of image CFG scale, depending on what my prompt is.
>
> **[6:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=391)** And also as always, with stable diffusion, the prompt, the seed, the CFG scale, the denoising strength, all of that's going to affect the rest of the image as well.
>
> **[6:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=400)** I can go very vague here.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=402)** Make it winter.
>
> **[6:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=406)** Took the leaves off the trees.
>
> **[6:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=407)** It added snow on the hills in the background.
>
> **[6:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=410)** It didn't give him a beefier coat or anything but it made it look more wintery.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=414)** In sticking with our theme, let's say put stone hinge in the background.
>
> **[7:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=423)** Oh, nice.
>
> **[7:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=424)** There's a little hinge in the background and what looks like a cemetery.
>
> **[7:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=428)** In addition to changing the content of the image, I can change anything else that I would consider when making an image.
>
> **[7:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=434)** I can change the media.
>
> **[7:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=436)** I can change the style.
>
> **[7:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=438)** Let's say make it an oil painting.
>
> **[7:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=444)** Very different image.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=447)** Make it a watercolor.
>
> **[7:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=450)** It's maybe a little too detailed for a watercolor but still, it does look more natural media than what we had before.
>
> **[7:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=458)** Make it a pencil sketch.
>
> **[7:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=461)** Make it a rough pencil sketch.
>
> **[7:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=464)** We haven't played a lot with natural media effects but these are all simple cues you can give.
>
> **[7:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=470)** There we go, rough pencil sketch.
>
> **[7:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=474)** Let's say make it concept art.
>
> **[7:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=479)** That's still more detailed than I would want for concept art.
>
> **[8:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=481)** But again, playing with, I'm not adjusting any of my denoising strength or CFG sliders so there's a lot that I can do there.
>
> **[8:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=487)** Make him a woman.
>
> **[8:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=492)** None of these things I'm doing are stacking because I am not moving this image into img2img.
>
> **[8:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=498)** It's done that.
>
> **[8:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=499)** Her face is a little messed up.
>
> **[8:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=499)** But again, we could in paint that later.
>
> **[8:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=501)** So very easy way to rip through a lot of changes to an image very, very quickly.
>
> **[8:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=507)** To install it in AUTOMATIC1111, all you have to do is install the Instruct pix2pix model in your model's folder, just like you would any other model that you download.
>
> **[8:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=518)** I'll include a link to where to get that model down below.
>
> **[8:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=522)** If you're not running AUTOMATIC1111, you can get to Instruct pix2pix at this hugging face page.
>
> **[8:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=528)** Drop an image here, put in your prompt.
>
> **[8:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=531)** You've got all of your normal controls down here.
>
> **[8:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=533)** Similarly, you can go go here to this Timothy Brooks page who is one of the people responsible for this technology or this software.
>
> **[9:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=544)** Ooh, turn him into a cyborg.
>
> **[9:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=546)** That's a fun one.
>
> **[9:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=548)** Let's just give that a try.
>
> **[9:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=552)** Turn him into a cyborg.
>
> **[9:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=554)** Now, the downside to this, as with so much of this AI generative stuff, is you'll really waste a lot of time trying this or that.
>
> **[9:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=562)** Wow, he's like a Terminator farmer.
>
> **[9:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=565)** In addition to these two sites, Instruct pix2pix is available in mage.space.
>
> **[9:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=570)** If you have a pro level account, and it's available on some of the other sites that you will find around.
>
> **[9:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/instruct-pix2pix?u=76281980&t=576)** Not the best solution for making any edit that you would want or every edit that you want, but it's a great tool to have in your toolbox.

> [!info]- Semantic Content
>
> **Env Vars:** cfg (15), automatic1111 (5)
> **Code Keywords:** let (11), switch (2), raise (1), try. (1), this, (1)
> **CLI Commands:** make (11), find (3)
> **Definitions:** is called (1), means that (1), is a  (1)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** switch to (1), scroll down (1)
> **Analogies:** for example (1), just like (1)

#### Free handy resources
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=0)** - [Instructor] By this point, you've seen a lot of what Stable Diffusion can do and I would like to pause here for a moment to give you the chance to remind yourself that this is incredible.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=10)** I say that because we are the last generation that will be capable of remembering a time when computers could not create illustrations and photos and other kinds of imagery on their own.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=22)** In the future, this will be normal and so it won't seem amazing to people and one of the amazing things to me about Stable Diffusion is that it's free.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=31)** You've got this incredible ability and all you need is a web browser and access to a server.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=37)** Throughout this course, we've looked at some other free resources.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=39)** We looked at some free stock photo sites, we looked at a free aspect ratio calculator.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=44)** I want to take a quick look at some other free resources because if you're coming from a background or if you're now in a position where you normally aren't expected to make imagery, you may not have a copy of Photoshop lying around or some of the other things that photographers and graphics professionals are used to having or if you're in an education environment, you may be wondering about how you can teach this if you need some expensive software to go along with it.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=66)** The good news is you don't.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=68)** Let's start here with Clipdrop.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=70)** If you go to [clipdrop.co](https://clipdrop.co), you'll come to Stable Diffusion Reimagine which is a site that's actually run by [stability.ai](https://stability.ai), the people that make, that's stability dot AI, the people that make Stable Diffusion.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=83)** So the idea here is I drop in an image that I have already made, image I've already rendered, I can drop any image in here, but I'm going to drop our Argentinian farmer in here and it's just going to churn away and on its own come up with variations.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=103)** Now, I don't know what its criteria for how it generates these variations are.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=108)** I like his hat better than the hat that I had on him.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=111)** There are no controls of any kind, but as a way of quickly iterating with no involvement on your part, this is pretty great.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=119)** Throw an image in, get a bunch of variations, take 'em out, take 'em back into Stable Diffusion, throw 'em back in here, whatever.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=126)** In the pricing tab, you can see that it's free for a certain level of ability.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=131)** If you pay a little money, you get more ability and you get apps that run on your mobile device.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=138)** Upscaling is a very important part of using Stable Diffusion and earlier we looked at upscaling facilities that are built in to automatic 1111.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=147)** If the Stable Diffusion distribution that you are using does not provide upscaling, you can get it for free here ai.[nero.com](https://nero.com) and this is using the same type of AI driven upscaling process that we saw when we talked about upscaling earlier.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=165)** All right, I'm puttin' this one in here and I got to tell you that I don't actually use it, but I can imagine how it would be useful.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=172)** App.posemy, that's P O S E M Y.art.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=177)** This is a 3D figure that you can pose however you want and if you want you can add more figures, you can add female figures, you can drop in pre-made scenes and the idea here, the reason I included this, is so you could use this to pose a figure the way that you want and then feed this image into image to image.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=204)** Personally, I think it's just as easy to stand against a white wall and shoot a selfie in the pose that I want.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=210)** If you're not into doing that, if you don't like shooting pictures of yourself, you don't have a tripod to put your camera on, this might be a way to get figures in positions that you want to generate images that you can then feed to Stable Diffusion.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=223)** An image editor is great for everything from altering images that you've already made to preparing sketches to throw into image to image.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=232)** If you don't have a copy of Photoshop or Affinity Photo or any of the other popular image editing applications that are out there right now, this site, [photopea.com](https://photopea.com), some people say it's photopia, but that's not spelled right.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=247)** Some people say photopeya, but there's no accent over the e.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=250)** I don't know how you pronounce it, but it's a nice full featured image editor that supports all the file formats that you would get from a commercial editor.
>
> **[4:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=259)** Another option in this regard is Krita.
>
> **[4:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=262)** This is an app that you actually install on your computer, it's not web-based, but again, it gives you a very full featured image editing system.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=270)** I think the real advantage for these, again, is education.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=272)** For a classroom that maybe can't afford a suite of Adobe Creative Cloud apps, you can throw some of these in there, find a free stable diffusion node, and you've got yourself an entirely free AI imaging system.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=286)** NVIDIA, the people who make graphics cards, have a beta of a free download that's available for Windows and if you have the right graphics card, you can use this NVIDIA canvas application to create landscapes.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=300)** There's this simple tool palette over here that offers you mountains and oceans and forests and gravel and things like that and you just paint in this area to the left and as you paint it, re-render your stroke into whatever it was that the brush said it was going to be, so if I paint with the mountains brush, I get mountains, if I paint with the grassland brush, I get grasslands.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=322)** In addition to being incredibly fun to play with, this gives you another great place to start for image to image.
>
> **[5:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=328)** You could get exactly the background you want, throw it into image to image, and then use instruct pick to pick to tell it what type of thing you want in the foreground or use Stable Diffusion to generate your foreground and then use your image editor to composite that with a background that you make here.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=345)** There are lots of other free tools out there.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/free-handy-resources?u=76281980&t=348)** I would hardly recommend next time you need to do an image editing operation if you don't have Photoshop or another nice commercial image editor, don't hesitate to put the name of that operation and free into a web browser and see what you come up with.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1), node (1)
> **Code Keywords:** throw (5), let (1), this, (1)
> **Definitions:** is a  (4), is an  (1)
> **URLs:** [clipdrop.co](https://clipdrop.co) (1), [stability.ai](https://stability.ai) (1), [nero.com](https://nero.com) (1), [photopea.com](https://photopea.com) (1)
> **Env Vars:** nvidia (2)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)


### 5. Working with ControlNet

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=0)** - [Instructor] It's time for the big reveal.
>
> **[0:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=1)** In this movie, we're actually going to see a pocket Stonehenge finally.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=6)** So, for these materials that we want to generate to give to VCs, to try to get money to manufacture the pocket Stonehenge, we want to show some people using it.
>
> **[0:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=15)** So, my first thought is we'll have a guy with a map spread over the hood of his car and he's there bent over looking at the map.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=22)** And on the map, maybe there's some other instruments like a compass or a thermos or something, and a little pocket Stonehenge sitting there.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=30)** Now, if I try simply typing a prompt for that into Stable Diffusion, so I've got here a man looking at a map on the hood of his car, on the map is a tiny model of Stonehenge.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=41)** I'm back to writing sentences sort of, because I couldn't figure out a way to describe this complex choreography as just a list of words.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=51)** For my negative prompt, I've just put in some things to try to get hands under control.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=55)** I'm switching to my realistic vision model, upping my batch count to four, and we'll see what it does.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=62)** Okay, nothing that's even close to my description.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=66)** Don't know what that is.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=68)** There's a map on the hood of the car.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=70)** Hmm, that's a weird one.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=73)** Oh, look, it's Thing from "The Addams Family", holding a map outside of a car.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=77)** Stonehenge has not appeared anywhere in here.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=79)** So, you could say, well, you've got to refine your prompt.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=81)** I can tell you after some experimentation, there is no way that I know of to write a prompt that gets me the composition and blocking that I'm seeing inside my head.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=90)** But also, there's this tiny model of Stonehenge thing.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=93)** Let's say this was not just a silly hypothetical situation that we really did have a product that we were trying to bring to market and we already knew what it looked like, because we had prototypes or models or whatnot.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=105)** And so, we needed to be able to create images of that.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=108)** I see the pocket Stonehenge as this little tiny Stonehenge, a little circle of stones standing on like a little rectangular plinth of some kind.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=117)** So, we're going to need to be able to represent that accurately.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=121)** To get all of this, we need a spectacular level of control over Stable Diffusion.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=126)** And so, for that reason, we are going to use ControlNet, which is an extension that gives you such refined robust power that I'm devoting an entire chapter to it.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=138)** If you are running your own installation of automatic 1111, you can very easily install ControlNet and I will have instructions for that in the next video.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=146)** At mage.space, you can click on View Options and switch the text to image slider over to image to image, and then you get ControlNet Canny, ControlNet Openpose, ControlNet HED.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=159)** I assume there's some more down here, but I'm not a professional, so I can't see those things.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=164)** So, that is ControlNet.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=165)** By the time you watch this, there may be lots of other instances that offer ControlNet access.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=171)** So, if we go back to our idea of a Stable Diffusion data model as being a giant virtual space and what we're doing is that we're looking, we're navigating that space to try to find a particular image.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=184)** Then, you could think of some of the various controls we have as inputs to that navigational process.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=191)** So, our prompt steers us in one direction.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=194)** Our negative prompt steers us in another direction.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=197)** Our width and height steer us in a direction.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=200)** All those things, all those different inputs are combined to lead us to a particular place.
>
> **[3:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=205)** ControlNet simply gives us some more inputs.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=208)** It's basically a much more powerful version of image to image, one that gives us a much more refined level of control.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=215)** When you open yours, you, by default, are not going to see Control Model 0 and 1.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=219)** You're only going to see 0.
>
> **[3:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=221)** So, I've got an image that I've made here.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=225)** Cro-Magnon people in caves in France drew better work than this, but it does spec out what I want.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=232)** I haven't even given the guy hands.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=233)** My lines are of many varying thicknesses.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=237)** I'm going to take this image and drop it here into ControlNet.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=241)** I'm going to enable ControlNet.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=243)** And if you have a video card with less than eight gigabytes of VRAM then you have to check this Low VRAM box.
>
> **[4:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=251)** ControlNet has to load not only the normal data model, it has to load this ControlNet model also.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=256)** If you check this box, it'll manage doing both of those things a little bit better if you're running a card with less RAM.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=264)** And while there are a bunch of controls, the critical ones that I'm worried about are preprocessor and model.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=269)** I have a choice of preprocessors, so I'm not going to explain these yet.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=272)** I'm going to choose scribble, because that's what I've done here.
>
> **[4:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=275)** And I'm going to choose the corresponding model.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=277)** You always need to make sure that your preprocessor matches your model.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=281)** Why the model isn't automatically selected, I don't know, but it's not.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=285)** Batch count of four.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=286)** I am still on my realistic vision model.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=289)** I did not draw a tiny Stonehenge in here, so I'm going to take that out of my prompt.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=294)** My idea is we will inpaint that in later.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=297)** So, let's see what we get.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=300)** And bang, right away, we've got images that are matching my composition.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=305)** And not only that, but when you consider how stupidly simple my sketch was, Stable Diffusion has on its own, made a lot of really impressive assumptions.
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=315)** Along with the rendering.
>
> **[5:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=317)** We have this thing, which looks like my original sketch, but chunkier.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=322)** What ControlNet does is use this preprocessor to try to find edges in your image.
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=331)** It then passes those edges to a model tuned for that specific type of edge detail.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=337)** And from that, is able to generate inputs that it can feed into the Stable Diffusion system to, as you see, give us a fantastic level of control.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=348)** Each one of these preprocessors is a different form of edge detection.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=352)** We'll look at some of the others in a bit.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=354)** Let's just continue working with scribble for the moment, because we need to decide, are any of these images correct?
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=359)** Well, the first thing, let's set aside any issues like, actually these all came out good.
>
> **[6:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=364)** They've all got good hands, but let's set aside some issues and just think about some content.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=368)** What do we want in the background?
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=369)** I didn't specify a background in my prompt and I didn't draw a background in my scribble.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=374)** So, it's amazing we've got one at all.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=376)** This is supposed to be someone using Stonehenge out in the real world in the way that you would really use the pocket Stonehenge.
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=383)** So, I think of it as a more rural thing.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=386)** Let's say wilderness in the background.
>
> **[6:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=390)** I have drawn nothing in my image to support that.
>
> **[6:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=393)** So, we'll see how it does.
>
> **[6:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=396)** And I'd say it did pretty well.
>
> **[6:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=398)** A number of different good-looking wildernesses and I think they're well-integrated into the image.
>
> **[6:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=403)** Look, it even put it through the windows of the car and added some glass distortion.
>
> **[6:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=409)** The contrast is a little bit different there.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=411)** That's amazing that it was able to figure out that that is the window of a car.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=418)** But I'm not sure why this guy would be out here needing a pocket Stonehenge.
>
> **[7:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=422)** So, instead of wilderness, let's put farmland in the background.
>
> **[7:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=426)** And as long as we are going to do that, let's change the man to a farmer.
>
> **[7:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=433)** These are nice.
>
> **[7:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=434)** I like that they're kind of modern-looking farmers, that it didn't just go for overalls and a corn cob pipe, and that kind of thing.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=442)** I believe these guys.
>
> **[7:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=444)** So, you may be wondering, why do they all have beards?
>
> **[7:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=448)** I don't know.
>
> **[7:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=449)** But my current theory is that in a sketch that is this simple, the signal to noise ratio is so out of whack that any tiny variation in a mark becomes significant.
>
> **[7:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=463)** There are so few marks here that the system has to take every one of them very seriously.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=467)** And this line's a little jagged.
>
> **[7:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=470)** It's thicker on one side.
>
> **[7:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=472)** I think it's interpreting that little bit of jaggedness as well, a beard.
>
> **[7:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=475)** That would make sense for that.
>
> **[7:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=477)** I should probably go through and clean up these lines.
>
> **[8:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=481)** I wanted to use this rough one as an experiment to show you can be really rough and it will still work.
>
> **[8:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=487)** Something else to take note of is I've drawn no contours onto the head.
>
> **[8:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=494)** This is an oval.
>
> **[8:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=495)** It's not a sphere, it's not spherical.
>
> **[8:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=497)** So, there's no way to know which way the head is pointed.
>
> **[8:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=500)** The face is the only way for Stable Diffusion to know which way the head is oriented, the face and the hair.
>
> **[8:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=507)** So, if you've taken even a basic drawing class, you know that the eyes are always in the middle of a person's head.
>
> **[8:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=513)** I'm talking about vertically.
>
> **[8:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=515)** If I draw the eyes up here, then Stable Diffusion is going to position the head, so that it's looking up.
>
> **[8:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=521)** So, you've got to be careful with where you put your facial features.
>
> **[8:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=524)** I think one reason we keep getting guys looking to their left is because I should probably move the eyes more in this direction.
>
> **[8:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=530)** I'm not going to worry about that.
>
> **[8:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=531)** If we generate enough images, we'll get a shot of a guy looking forward like this guy.
>
> **[8:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=535)** So, the idea now is to get a good rendering out of here.
>
> **[8:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=539)** We'll then photobash a little pocket Stonehenge in here and pass that back to image to image to do some inpainting.
>
> **[9:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=549)** So, let's look at what we've got and see what we think about these as candidate images.
>
> **[9:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=553)** The really messed up steering wheel might be an issue.
>
> **[9:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=556)** And for some of these problems that we're going to see, it might be that the issue is I should go back and do a better job in my drawing.
>
> **[9:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=562)** This is also something we could fix in post.
>
> **[9:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=564)** I think we want to say we want the guy looking down.
>
> **[9:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=566)** This is supposed to be about the pocket Stonehenge.
>
> **[9:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=568)** And even though he's happy-looking, I would like it better if he were just gazing with adoration at his little pocket Stonehenge, or at least serious work.
>
> **[9:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=576)** I like this image. His hands are good.
>
> **[9:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=578)** The background's a little cartoony, but that may not matter.
>
> **[9:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=582)** My problem here is this shadow.
>
> **[9:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=585)** We want the pocket Stonehenge sitting in a more of a pool of light.
>
> **[9:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=589)** This guy's looking the wrong way. Again, shadow.
>
> **[9:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=593)** And there we are.
>
> **[9:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=594)** So, I'm going to generate a bunch more.
>
> **[9:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=596)** I'm going to crank this up to 10.
>
> **[10:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=600)** Okay, here's what I'm left with.
>
> **[10:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=601)** We've got a nice spot of light right here that I think works well.
>
> **[10:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=604)** The hands are mostly in good shape.
>
> **[10:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=606)** His eye line is maybe a little off, but I also kind of like him turned a little more towards us.
>
> **[10:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=610)** I think the background looks good.
>
> **[10:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=612)** The truck looks good.
>
> **[10:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=614)** The dashboard is weirdly melded into the seat, but we'll ignore that for now.
>
> **[10:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=619)** This guy, I just couldn't get over his hair, so I had to save this one, but we're not going to use it.
>
> **[10:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=623)** So, the next step is to take one of these and composite a little pocket Stonehenge into it in Photoshop.
>
> **[10:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=630)** I think I'm going to start with this one.
>
> **[10:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=631)** I asked Stable Diffusion for an aerial rendering of Stonehenge and got this image.
>
> **[10:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=636)** In Photoshop, I cut out the Stonehenge part and very crudely drew a base onto it.
>
> **[10:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=642)** So, now, I've got a little pocket Stonehenge model that I can composite into other images.
>
> **[10:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=647)** I took our ControlNet rendering and pasted my Stable Diffusion pocket Stonehenge image into that model.
>
> **[10:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=655)** And then, used the Free Transform and Distort commands to get it positioned and to try to correct the perspective to match the perspective of the image as best I could.
>
> **[11:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=665)** Note that I'm working only with 512 by 512 images.
>
> **[11:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=669)** I have not upscaled anything.
>
> **[11:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=670)** So, my result is going to be a 512 by 512 image that I have right here, which I will now take back into automatic 1111.
>
> **[11:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=679)** First of all, we're going to do some inpaintings.
>
> **[11:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=680)** So, I've selected my inpainting model.
>
> **[11:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=682)** I'm going to go to image to image over to the Inpaint tab.
>
> **[11:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=686)** And there, I will drop my nice new composite.
>
> **[11:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=693)** I want to be sure that I fill the masked content with original image.
>
> **[11:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=698)** I want it to repaint our or re-render our pocket Stonehenge.
>
> **[11:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=702)** I'll just go ahead and make my mask that area, repaint that.
>
> **[11:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=707)** I want to inpaint only the masked area.
>
> **[11:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=709)** And I'm going to use the same trick of scaling up to a higher pixel count, so that we get more detail.
>
> **[11:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=719)** So, that looks pretty good.
>
> **[12:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=721)** Let's up our batch count and see what we can get.
>
> **[12:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=725)** Actually, before I up the batch count, I'm just going to do a single one in case something's way off.
>
> **[12:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=730)** Oh, I need a prompt, a model of Stonehenge.
>
> **[12:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=734)** Okay, that's not great.
>
> **[12:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=736)** It's really lost a lot of the detail that was in my original.
>
> **[12:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=740)** So, remember, when you're doing image to image, denoising strength.
>
> **[12:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=744)** The farther it is to the right, the more creative the computer can be.
>
> **[12:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=747)** The farther it is to the left, the more it's going to stick to your original content.
>
> **[12:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=752)** So, I'm going to set that to 0.5.
>
> **[12:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=755)** Oh, yeah. That's a tiny little Stonehenge.
>
> **[12:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=757)** Okay, let's do a few of them.
>
> **[12:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=766)** So, it is making changes to the masked area from image to image, just like it would rendering a full image.
>
> **[12:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=773)** And some of these I definitely like better than others.
>
> **[12:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=775)** I like that one. That one's pretty good.
>
> **[12:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=779)** That one's a little too random.
>
> **[13:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=781)** I think this is the one.
>
> **[13:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=785)** And I like that.
>
> **[13:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=786)** It's nice that this shadow, nonsensical as it is, is continuing over here.
>
> **[13:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=792)** It's rounded off the corners of my little plinth.
>
> **[13:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=795)** I could try to change my original composite photobash to fix that, or I can just go in and clone that how I want it.
>
> **[13:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=802)** It's lost a little bit of the depth of the plinth.
>
> **[13:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=804)** I don't know that I care about that, but I could fix that.
>
> **[13:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=808)** I could inpaint the hands and try and fix those.
>
> **[13:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=810)** And there's some other details around or I could fix those in post.
>
> **[13:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=814)** I could straighten out this map in Photoshop and do some of the other corrections that I need in Photoshop.
>
> **[13:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=819)** This would need to be cleaned up.
>
> **[13:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=820)** Another option would've been to simply render far more initial images until I got one that didn't have some of these problems and had the pose that I wanted.
>
> **[13:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=829)** That's not an unusual thing to have to do.
>
> **[13:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=831)** The bigger point is that this was a pretty simple workflow built from a extremely and extremely crude sketch.
>
> **[13:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=839)** It took hardly any time at all to knock out that sketch and it's gotten me to this image that I have incredible control of.
>
> **[14:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=846)** So, this is just our first peak at ControlNet.
>
> **[14:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/introduction-to-controlnet?u=76281980&t=849)** But you can already see that we are getting dramatically more control of our composition and content than we've gotten with any of the other tools we've looked at so far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (3), finally. (1), switch (1), default, (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** vram (2), hed (1), ram (1)
> **Analogies:** think of it as (1), kind of like (1), just like (1)
> **Cross-References:** in the next (1), go back to (1)
> **UI Navigation:** click on (1), go to (1)
> **Warnings:** be careful (1), note that (1)

#### Installing ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=0)** - [Instructor] ControlNet is an extension for AUTOMATIC1111 that is simply extraordinary.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=7)** You've seen how image-to-image allows you to generate images by starting with other images.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=12)** ControlNet builds on image-to-image and gives you a spectacular level of control that at the time of this shooting you can't see in any other AI image generator.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=22)** I'm not even going to try to sell you on it.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=24)** I'm not going to try to tell you what it does to convince you that you need to install it.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=27)** I'm just going to go right in to installation because if you're using Stable Diffusion and you have your own server, you're silly to not be using ControlNet.
>
> **[0:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=36)** If you are looking for another instance to use if you don't have your own server, then you want to look for one that has ControlNet.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=43)** So, to get installed, we need to go to our extensions tab, just like we always would.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=48)** And just like we always would, before we do this, if you have added the listen property to the batch file that launches AUTOMATIC1111, you need to take that out and restart AUTOMATIC1111.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=61)** If you don't know what I'm talking about, don't worry about it.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=63)** You haven't done that.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=65)** So again, if you've got listen in your batch file, take it out, restart AUTOMATIC1111, reload your browser and now you can install extensions.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=74)** I'm going to go over here to available.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=75)** Click on load from.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=77)** This extension index should already be there.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=79)** Load from and this going to get me a list of available extensions.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=82)** Yours might be different than mine because hopefully there will be more extensions when you're watching this.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=87)** To find ControlNet, I'm going to hit control F and command F if you're on a Mac.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=92)** And just search for control.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=95)** And I come down.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=96)** Here we go, SD Web UI ControlNet.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=99)** This is what we want, so I come over here and I hit install.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=103)** That's taking care of the download.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=105)** When that's finished, I need to come back over here to install.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=110)** Say apply and restart UI.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=114)** And if that doesn't work, then I need to simply restart the server itself.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=119)** I'm going to do that.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=121)** With the server restarted, I can reload my page on my client and now I have this new thing down here called ControlNet.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=127)** But I'm not done with my installation, because ControlNet needs me to install some extra data models.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=134)** So I'm going to go up here to my browser and create a new tab and I'm gong to search for ControlNet.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=140)** Oops, models.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=142)** And that will bring up the ControlNet page on Hugging Face.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=147)** Model card, this is a description of what we got.
>
> **[2:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=149)** You can read that if you want.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=150)** There's some interesting stuff in here.
>
> **[2:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=151)** What we want to do is go over here to files and versions, down to models and we see all these models.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=157)** You want to download all of these.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=158)** They are in pickle tensor format.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=160)** As you can see, they're large.
>
> **[2:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=161)** Each model is five gigabytes.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=163)** If you don't want to chew up that much space, then at least grab canny for now.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=168)** As we go through more demos, you might want to come back and get some others.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=173)** Once you have them, you want to copy them into your Stable Diffusion Web UI folder, or whatever you've called it, into the models directory and inside that into the ControlNet directory.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=184)** So they'll go right into here.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/installing-controlnet?u=76281980&t=186)** After they're in there, you're ready to start using ControlNet.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5)
> **Env Vars:** automatic1111 (4)
> **Code Keywords:** this, (1), from. (1), this. (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### OpenPose in ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=0)** - [Instructor] Another image of someone with a pocket Stonehenge.
>
> **[0:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=2)** We want to show something of our company and to show that the pocket Stonehenge is actually still rooted in a modern world, so I'm thinkin' we show someone in a conference room, typical corporate modern conference room, holding a pocket Stonehenge.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=18)** So I set my phone, my iPhone, up on a tripod.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=21)** I put a white background up, and I took this picture of me.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=24)** That's just a book that I'm holding.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=26)** This was very early in the morning, so my hair was doing weird things.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=29)** The thing is, I don't care what I look like, because I'm going to be so abstracted by this process.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=35)** And composited it with a conference room.
>
> **[0:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=39)** I got the conference room by asking Stable Diffusion to render me a picture of a conference room, so it made the background.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=46)** I used Photoshop to combine these two things together.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=49)** Now, I'm going to hand this to ControlNet, so I'm back here, coming down to ControlNet.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=57)** I'm going to drop in my photo.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=60)** First thing I have to do is enable ControlNet.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=64)** Now, I need to choose a model.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=68)** This is much more than a scribble, so the scribble model is not going to work.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=71)** The model you're probably going to use the most often is canny.
>
> **[1:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=76)** This is named after the person, I believe this is named after the person who came up with this particular edge detection mechanism.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=83)** I'm going to put a simple prompt in here, "A man in a conference room holding a model of Stonehenge, "8K, photorealistic, detailed, "modelshoot style."
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=102)** This is the realistic vision model that we're using.
>
> **[1:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=105)** Set my batch count.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=106)** I'm going to leave it at one for the moment 'cause I want to show you something.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=110)** It renders, and again, right away, with very little effort, we get something that's extremely close to our input image.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=119)** His fingers are a little bit messed up, but we could do a bunch of renderings and come up with something.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=124)** This is the edge detection that it created.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=127)** So you can see, it's really coming in and finding lots of fine details, and it is using those in combination with the canny model to drive inputs into our process, and that's why we're getting very good results right off the bat.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=142)** Let's crank it up to four because I would like you to see that this is very consistent.
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=148)** It's also, of course, following colors to a degree.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=154)** Now, I do have some control, just like I do with regular text to image, over how much attention it's paying to my prompt, how much it's paying to the image.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=162)** So CFG scale is still here doing its thing.
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=164)** I could turn that up, but I don't really see any reason to.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=168)** It's not getting the model of Stonehenge part.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=171)** I don't think any amount of CFG increase is going to do anything for that, and one reason for that is because the ControlNet influence is very strong.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=182)** If I come down here, I have this weight slider, which ranges from zero to two.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=188)** It defaults to being set to one right in the dead center.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=190)** This is saying how strong the ControlNet input is to the entire image creation process, so again, thinking of it as navigating a space.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=198)** ControlNet is having a lot of influence over where we end up in our image space.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=204)** So let's crank this down quite a bit.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=206)** I'm going to put this down to a quarter.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=209)** So with ControlNet having less influence, the rest of the inputs now have more sway.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=216)** So our composition is not as rigorous.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=219)** The pose is is not as rigorous as it was.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=222)** He's holding stone.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=223)** This is a change.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=224)** That's actually a pretty good hand holding stone for Stable Diffusion.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=227)** The conference room has changed a lot, and remember I set my CFG scale up higher.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=232)** So let's try adding some weight to model of Stonehenge, and now Stonehenge is overpowering everything.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=239)** So, this isn't working.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=241)** We're going to take that off.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=244)** Also, I liked that original image.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=247)** I don't want to give that up, so lowering the ControlNet weight is not really a direction that I want to go right now.
>
> **[4:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=256)** What I would like to do instead is later inpaint Stonehenge into the scene like we did before.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=261)** Before we get to that though, I want to show you something.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=263)** Let's get some regular renderings back up here.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=267)** Okay, now we're back to something like the target scene that I had created before.
>
> **[4:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=271)** You've seen before that I can make pretty radical changes to an image by changing my prompt, so I'm going to change this to a woman in a conference room.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=283)** Okay, she looks female.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=286)** She also still is really following the original image.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=289)** She's got my glasses, she's got my shirt, she's got my length hair, she's got more fingers than I have.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=298)** So, it kind of doesn't matter what I do here.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=302)** ControlNet is driving this so much that I'm never going to get much variation of the figure.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=309)** I can either have a guy who looks like me or a woman who kind of looks like me or has attributes that are coming from me.
>
> **[5:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=317)** As you've already seen, if I lower the ControlNet weight, then other aspects of the image start to fall apart.
>
> **[5:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=323)** I start to lose the specificity of the conference room.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=326)** So what if I did want to use myself as a model, but I wanted a very different character in here?
>
> **[5:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=331)** Well, ControlNet is the answer.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=334)** Canny is a fantastic general purpose model to use with ControlNet because this type of edge detection really does give us a fantastic level of detail.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=343)** In this case, it's giving us too much specific detail, and so we can't get a female character in here.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=349)** But there are other models to choose from.
>
> **[5:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=350)** I'm going to go down here and change my pre-processor to open pose and then change to the open pose model.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=359)** This is going to do something pretty different.
>
> **[6:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=361)** Let's turn the batch count down to one, and I'm going to set this back to a man for a moment.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=366)** Let's see if we can get the image that we got before.
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=369)** No, instead we've got a guy with a mullet.
>
> **[6:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=372)** That is not remotely what I was looking for.
>
> **[6:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=374)** He is holding a stone.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=376)** The conference room is gone.
>
> **[6:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=378)** What's really interesting though is look at the edge detection it did.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=381)** What in the world is this?
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=383)** This is not edge detection.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=386)** This is meant to be a skeleton view of my pose.
>
> **[6:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=391)** Stable Diffusion identified where there was a figure in the image and then plotted out where there was a torso, shoulders, upper arm, lower arm, neck, head position, so on and so forth.
>
> **[6:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=401)** So mullet guy here is actually mostly in the correct pose, but everything else is messed up.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=411)** So, we'll come back to that everything else is messed up problem in a moment.
>
> **[6:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=415)** Let's change this now to a woman.
>
> **[6:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=417)** So now, we are starting to get people, who don't look like me and aren't following my characteristics.
>
> **[7:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=424)** She's got a more shapely outfit on now, rather than just a boxy shirt, long hair, so that's really changed things.
>
> **[7:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=432)** Great, we have figured out how to capture the pose from a source image and put different people on top of that, but we've done it at the expense of everything else in the frame.
>
> **[7:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=444)** There is an answer to that, and it comes from using ControlNet.
>
> **[7:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=447)** This is going to become a theme for quite awhile, that ControlNet is the answer to all your Stable Diffusion problems.
>
> **[7:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=453)** You can see here I've got control model zero and control model one.
>
> **[7:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=455)** It's possible to run two ControlNet processes, or more even, at the same time.
>
> **[7:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=462)** To do this, you have to go to settings, and then come down to ControlNet.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=467)** And here you see, "Multi ControlNet, "max models amount requires restart."
>
> **[7:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=472)** Mine is currently set to two, it defaults to one.
>
> **[7:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=476)** I've not ever needed more than two, so I just leave mine set to two because it makes for a simpler interface.
>
> **[8:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=481)** After you do this, you can sometimes get away with reloading the UI.
>
> **[8:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=486)** What I found is that I have to restart the server.
>
> **[8:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=488)** So, that's where this second ControlNet node comes from.
>
> **[8:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=494)** I'm going to come over here and drop the same image into here, but this time, I'm going to enable it, and this time, I'm going to use the canny processor, because we know canny gets us all this fantastic edge detail.
>
> **[8:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=507)** So, a couple of things here.
>
> **[8:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=509)** This model has a weight of one.
>
> **[8:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=513)** This model has a weight of one.
>
> **[8:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=514)** Together, that gives us a weight of two, if my math is correct, and that's a pretty significant amount of ControlNet influence.
>
> **[8:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=522)** So I'm going to drop the weight of both of these down to .75, and now let's change this back to a man.
>
> **[8:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=531)** Let's see if we can get back to our original image just to know if we can do that.
>
> **[8:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=536)** Great, his hand's a little bit messed up, but we could do multiple renderings.
>
> **[9:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=540)** We've got our conference room back.
>
> **[9:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=541)** We've got our correct pose, so we're getting influence of two different kinds from the same image.
>
> **[9:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=546)** Now, if I wanted, I could use a different image here.
>
> **[9:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=549)** I don't have to use the same image in all of these control models.
>
> **[9:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=552)** I could pull a pose from one image and canny details from another.
>
> **[9:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=557)** So let's see if we can get him swapped out for a woman.
>
> **[9:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=561)** Great, but now we're back to women, who have more my traits, hair, boxy shirt, still have the glasses.
>
> **[9:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=568)** How do we get her into something else?
>
> **[9:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=572)** Well, we could start by giving a prompt for some different hair and different clothes.
>
> **[9:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=576)** So let's say long hair, and see if that does anything.
>
> **[9:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=581)** There's some wisps of hair coming out here.
>
> **[9:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=583)** If she's got long hair, it's tied back, so very clever hack on the part of Stable Diffusion.
>
> **[9:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=590)** So, that's not really working.
>
> **[9:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=592)** I could increase the weight, but I can tell you right now that's not going to work.
>
> **[9:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=595)** Let's add business casual clothing.
>
> **[9:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=599)** Let's see if that gives us anything.
>
> **[10:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=601)** No, she's still stuck in a t-shirt.
>
> **[10:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=604)** So the answer has to do with weight.
>
> **[10:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=607)** We know that we're gettin' a good pose with a weight of 0.75, let's leave that alone for now.
>
> **[10:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=612)** Let's go to the canny node and dial the impact of this canny edge detection down quite a bit.
>
> **[10:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=619)** I'm going to put it at 0.4, it was at one.
>
> **[10:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=622)** Excellent, we picked up some hair, and she's now holding some geometry.
>
> **[10:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=628)** Tell you what, since we're going to inpaint Stonehenge into here, I'm going to take out holding a model of Stonehenge and trust that we're getting everything we need about her posture from our open pose.
>
> **[10:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=642)** That's better.
>
> **[10:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=643)** Her hand's still up there, we can work with that.
>
> **[10:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=646)** Her clothes have changed.
>
> **[10:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=648)** She's still wearin' my glasses, but she's got long hair.
>
> **[10:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=651)** So that came by lowering the weight of the canny processor, and remember, the canny processor generated this, which is pretty specifically me.
>
> **[11:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=660)** So if we lower the weight of this influence, we can get away from such specificity of detail in our scene.
>
> **[11:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=668)** Now, it's also changed our conference room quite a bit.
>
> **[11:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=671)** It doesn't match the original image as much, but I don't mind that.
>
> **[11:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=674)** I actually like this conference room.
>
> **[11:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=675)** It puts a lot of light behind where we'll put the pocket Stonehenge.
>
> **[11:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=679)** Let's dial the weight down a little bit more.
>
> **[11:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=681)** 0.4 is good.
>
> **[11:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=682)** I'm okay with going there, and in fact, let's save this model, because I do like a lot about the layout.
>
> **[11:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=690)** We'll generate some more.
>
> **[11:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=692)** I like this, the tie is funny.
>
> **[11:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=694)** I don't want black back here because I'm afraid the Stonehenge is going to get lost in it.
>
> **[11:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=698)** But anyway, you can see, that by balancing the weight of these two different models, I'm able to pull influences of different kinds from different images, or in this case, the same image, and build back up the image that I want.
>
> **[11:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=712)** Now, let's get Stonehenge in there.
>
> **[11:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=714)** I asked Stable Diffusion for another rendering of Stonehenge, this time not aerial.
>
> **[12:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=720)** And using Photoshop, I built myself a pocket Stonehenge viewed from the side, so I can very easily composite that into this image of her.
>
> **[12:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=730)** Okay, now we're actually at the part of the process that does not involve ControlNet.
>
> **[12:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=734)** I'm in my img2img tab.
>
> **[12:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=735)** In the inpaint tab, I've dropped my photo batched image together.
>
> **[12:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=740)** Going to paint a mask over this, and let's go ahead and get her fingers, see if that gets cleaned up at all.
>
> **[12:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=746)** I should have picked an image with a better hand, but you know the point of this is to teach you how to do this.
>
> **[12:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=754)** I can work later to get a really good image.
>
> **[12:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=755)** Whoops, I'm setting my mass content to original, and I'm setting this up to 1024 by 1024, so that, again, we will have a high res inpainted area.
>
> **[12:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=769)** Want to make sure this is only masked, and we want to make sure we're using our inpainting model.
>
> **[12:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=777)** And I need a prompt, a model of Stonehenge.
>
> **[13:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=784)** Actually this, in some cases, did clean up her hand a bit.
>
> **[13:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=789)** This is something I could probably easily fix with a clone tool.
>
> **[13:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=794)** It's gone really stone on the platform, which I kind of like, but again, this is the sort of thing that I could fix in Photoshop pretty easily.
>
> **[13:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=803)** I think I would also want to move her eyes to point towards me, which I can use, again, with an AI tool in Photoshop.
>
> **[13:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=810)** But there we go.
>
> **[13:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=811)** We've built our finished image, and we did it by using two different ControlNet nodes, so that we could both capture a pose from an image and put any figure we wanted onto it and capture detail from an image.
>
> **[13:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=825)** We happened to be using the same image for both of those, but again, you could mix it up and use separate images.
>
> **[13:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=831)** As you've seen, there are lots and lots of other ControlNet models and pre-processors available here.
>
> **[14:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-in-controlnet?u=76281980&t=840)** We're going to take a look at some of those as we move forward.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), this, (6), case, (2), from. (2), for. (1)
> **CLI Commands:** make (3), node (2)
> **Analogies:** picture (2), just like (1), kind of like (1)
> **Env Vars:** cfg (3)
> **Versions:** 0.4 (2), 0.75 (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** iphone (1)

#### Limitations using OpenPose
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=0)** - [Instructor] ControlNet with OpenPose is probably going to become a pretty regular part of your Stable Diffusion process, but it does have some limitations.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=9)** Let's take a look at some places where ControlNet maybe will fall down.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=16)** I'm going to come in here and bring in a model that I want to use as a ControlNet source.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=23)** So this is something I just asked Stable Diffusion for a man running.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=28)** I'm going to set my pre-processor to OpenPose and my model to OpenPose.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=34)** Now you've seen how if I enter a prompt and generate a rendering, I will get my final rendering and I will get a second image that shows what the pose was.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=43)** If I want to preview any of the images that ControlNet derives through a pre-processor, I can just say Preview Annotator Result.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=52)** If I click that, it shows me what it's going to pull from my image and feed as an input to the generation process.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=63)** So here you can see a typical ControlNet skeleton.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=67)** There are very specific points that it tracks.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=70)** Wrist, elbow, shoulder, knee, ankle, hip joint.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=75)** The first thing it does and the most critical joint of all is this one, the neck, where the neck connects to the shoulders and to the spine.
>
> **[1:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=85)** The thing to know about ControlNet is that if it is missing one joint, it can't render anything that is connected further down that chain.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=94)** So if I don't have the shoulders present in an image, I can't use ControlNet.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=98)** For example, this is another image that came up when I asked for a shot of a guy running on a track.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=103)** If I pull this over here and ask ControlNet to show me what it sees in terms of OpenPose, it comes up with nothing because he has no shoulders.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=122)** Getting closer in, we can see that ControlNet also tracks the head.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=131)** This is a point that I can only assume is the middle of the head so maybe the nose.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=135)** These are definitely the eyes and then it tracks ears.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=138)** So it can't see my left ear, but it can see my right ear.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=143)** If you switch to OpenPose Hand as a pre-processor, it will add additional tracking points for hands.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=152)** This is a fantastic solution sometimes for rendering hands.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=157)** The problem is it couldn't decipher this one.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=159)** I've got two fingers and a thumb visible here and it's just seeing it as a single curved shape.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=167)** So even though OpenPose can't solve this problem, this is still interesting as a diagnostic tool to realize, "Oh, I'm not going to get a good rendering of a hand out of ControlNet here.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=177)** Maybe I want to go back reposition my hand and shoot this image again."
>
> **[3:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=181)** Here's an example of where you can run into some trouble with some of these limitations.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=186)** This was our final rendered composite yesterday.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=189)** Let's say we gave this to an art director and they'd say, "I'd rather he was a woman."
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=193)** Okay, well let's drop it over here into ControlNet.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=197)** We've got our OpenPose model running.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=200)** But if we look at the pre-processor, we see it's pretty confused here because a lot of his limbs are hidden.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=210)** It has decided to stick a leg down here that we actually can't see in this frame.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=218)** What that means is if I try to regenerate this frame using the same prompt, I'm getting really scrambled results because it doesn't know how to reconcile this extra leg.
>
> **[3:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=229)** So it's going to be difficult for me to get back to that exact same composition.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=233)** This might be a case where I want to go into img2img and use my instruct-pix2pix model and ask it to change him to a woman.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/limitations-using-openpose?u=76281980&t=246)** That might be the only way that I can get a really clean transition to making him female.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using img2img and ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=0)** - [Instructor] So far we've been using text to image with ControlNet to generate images but we can also use image to image with ControlNet to generate images.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=9)** ControlNet is kind of a fancy image to image though, so what's the point of image to image?
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=14)** There's not a real clear answer to that, but there are some differences.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=17)** At the end of chapter two you saw a video that I had rotoscoped with Stable Diffusion.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=23)** Rotoscoping is the process of painting or drawing or applying computer graphics to live video.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=31)** This is a technique that goes back to the very earliest days of animation.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=35)** I had Stable Diffusion process each frame of video to get it to look a particular way, but I had to start with some actual video.
>
> **[0:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=43)** I'm going to use one of those frames now.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=45)** We're going to step away from Stonehenge for a moment.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=47)** I'm here in text to image going into ControlNet.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=51)** I've got this image of me.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=54)** I'm going to stick it here in ControlNet.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=57)** I'm going to enable it and choose the Canny pre-processor end model.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=62)** Remember that's just kind of a generic edge detection.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=66)** I have to have a description because this is text to image.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=69)** I am using a model of me and in this model I am referred to as SKS man and I'm going to say speaking.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=79)** So if I generate an image now it's changed the pixel dimensions 'cause I'm set for square.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=84)** We're going to talk more about these resizing controls in ControlNet, which are somewhere around, here we go.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=90)** Resize mode.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=91)** We're going to talk about those in a minute.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=92)** So this is the image that I got.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=94)** What happens if I stick photorealistic on here just to try to steer it in the direction of a photo?
>
> **[1:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=100)** A little better.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=101)** Let's go to image to image and drop this image here and wire up ControlNet.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=108)** By the way, if it looks to you like my AUTOMATIC1111 interface has changed, since the last time you saw it or since earlier movies, that's because it has because an update was released and so now some widgets are in different places and are arranged differently and are flowing differently in the browser.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=125)** Update sometimes come out, there will be an update every day for a few days and then a week goes by without anything.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=131)** I'm set again for Canny.
>
> **[2:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=133)** I still need to put a prompt up here so I'm going to say SKS man, talking, photorealistic.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=142)** And I get different results.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=144)** I think the main thing you could say is that text to image had to make up a background and figure out some lighting and make a lot of decisions on its own.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=153)** Image to image was guided by my photo.
>
> **[2:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=156)** Underneath it all, ControlNet was there to give it a hand.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=160)** If I turn ControlNet off in image to image and render again, it's messed up because my size down here is wrong.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=173)** I'm going to set this to 960 by 540 and have another go at it.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=178)** So on its own image to image is a little less reliable.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=182)** It's thrown in some other subject matter.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=184)** It looks like it's starting to make another copy of me.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=187)** It's changed the lighting a lot.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=189)** It's changed my expression.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=190)** My mouth is now closed which is no good for what I was doing, which was animation.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=194)** We're going to talk more about that in the next movie.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=197)** So ControlNet is definitely critical for really matching this frame and I get better results in this case using image to image rather than text to image.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=207)** So when you're trying to modify an existing image, whether you should start in text to image or image to image really depends on your goal.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=215)** If you're really wanting to follow the original image, then stick with image to image.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=220)** If you are using this as a source for more radical change then text to image is probably going to be better.
>
> **[3:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=227)** Here you'll do what we were doing before.
>
> **[3:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=229)** Throw in an open pose, ControlNet to get the pose.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=232)** Throw in an edge detection ControlNet to pull some details and then play with your strength, I'm sorry, your weight sliders to get those balanced in conjunction with your prompt to make a change.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=243)** Again, ControlNet is going to allow me to apply a pose from one photo to completely different subject matter.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=250)** For that video, for that rotoscoping, I used image to image because it was really critical that I follow this frame very closely both in terms of detail and lighting.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-img2img-and-controlnet?u=76281980&t=261)** It was also imperative that I pick the right pre-processor and model and we're going to talk about how to do that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** throw (2), let (1), interface (1)
> **Env Vars:** sks (2), automatic1111 (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Choosing a ControlNet model
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=0)** - [Instructor] In ControlNet, this pre-processor menu and the corresponding model menu can be a little intimidating because there are so many options here.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=8)** I can tell you right away that you don't need to understand any of the algorithms that are going on here and for the most part, you don't need to have some kind of general universal idea about most of these models.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=20)** I say most of them because there are some of these models that are intended for specific purposes and we've already seen that.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=25)** Scribble is for hand drawn images, hand drawn scribbles.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=29)** OpenPose is for extracting poses.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=31)** MLSD actually has an important use.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=35)** I'm going to grab another image out here and drop it into ControlNet.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=40)** And if I switch to MLSD and the MLSD model, I don't actually have to do this just to preview.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=49)** MLSD looks for straight lines.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=51)** That's all it does.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=52)** Doesn't matter if they're vertical, horizontal, or diagonal.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=54)** It finds all the straight lines in your image.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=56)** This is great for architecture, for interior spaces, for closeups of geometric models.
>
> **[1:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=64)** Look what it did with the trees here.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=66)** It didn't even bother to try to figure these out.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=68)** MLSD does not do organic shapes at all but if you are trying to use ControlNet on something with a lot of strong vertical lines, it's going to be a great model.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=78)** For the most part, most of these other things are more general purpose.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=82)** So how do you choose? Let's go back.
>
> **[1:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=85)** I'm tired of looking at it but let's go back to this shot of me.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=88)** This is a source frame from the rotoscoping that you saw in the movie at the end of chapter two.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=94)** I wanted through ControlNet to process each frame to stylize it, to make it look different, but it was critical that my mouth appeared to stay in sync with my voice and that proved to be a little bit tricky.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=108)** In the last movie we did this rendering which came out pretty good.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=112)** Obviously I haven't dialed in any stylization.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=114)** I did all that through the prompt but here's what Canny came up with in terms of edge detection.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=120)** Can you really tell what's my mouth and what's not?
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=124)** In this image, it's actually a pretty good match.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=127)** You can tell that my mouth is open but in a lot of images I ended up with just a closed mouth.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=132)** "O" sounds and other vowels that left my mouth circular also seemed to really confuse Canny so all I did was go through some other models and look at what they extracted from them.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=144)** What does depth map do in this case?
>
> **[2:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=148)** If I preview that, I see this.
>
> **[2:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=150)** Depth map is really useful for certain types of images that have a lot of 3D depth in them.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=157)** Depth map works by shading things that are closer in a lighter tone than things that are far away.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=163)** A street scene where there's a car in the foreground in a building in the background, that might benefit a lot from a depth map.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=168)** This doesn't because I'm interested in getting details in my mouth and they're not here.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=173)** So that was obviously not going to be a good choice.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=177)** HED is what I ended up using and let's just go ahead and do a full rendering with HED.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=185)** And if we preview that, you can see that my mouth doesn't have super fine detail but it's very separate from the mustache and beard and so stable diffusion had an easier time figuring out the shapes when I was using the HED processor.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=200)** So I dragged a couple of different frames in here, looked at the pre-processor data and could see that there was change happening.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=207)** Then I rendered a short test.
>
> **[3:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=208)** I rendered a half a second of video maybe a second or two to see if it was all syncing up.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=214)** I also found that to get it to work well, I had to really exaggerate my mouth movements.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=219)** I had to open my mouth a lot and I worry that that made my speaking style a little more forceful than it might normally have been.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=226)** With practice, I could probably have learned to speak normally with that much mouth movement but I didn't have time for that.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=232)** It's also worth noting that I did light my original footage.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=236)** Now, I didn't care what I looked like obviously because I knew that I was just going to be painted over, so I don't know.
>
> **[4:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=243)** I didn't shave that day.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=244)** I knew I wanted this thing around my neck because I felt like I just, well for one thing, it's San Francisco, it's cold, but also I felt like I just needed something else of visual interest in the frame since I was on this nothing background.
>
> **[4:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=258)** I wanted the processor to have more to play with.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=261)** Edges in an image are a function of contrast.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=264)** The reason you can see an edge right here is because this is darker than this.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=268)** So I lit this scene.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=269)** I put two lights, one over here and one over here and if you look closely, you can see that this side of my face is lighter than that side of my face.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=276)** That gives me contour, but it makes edges or in this case, wrinkles show up more.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=282)** I did not put a backlight because I don't have room in my apartment to set up a white backdrop far enough away to work with a backlight.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=289)** But that might have been interesting to have some lighting detail along here or it might have been too much extra visual noise to have in the rotoscoping.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=296)** But if you are trying to create imagery to use as a source for ControlNet, know that you're going to get better results from your pre-processor if you've got a lot of contrast in the image and you control contrast through lighting.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=308)** I didn't have the exposure on my camera nailed for this so I actually processed all these frames in Photoshop before I sent them here.
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=315)** I brightened them up a little and added a little bit of contrast there.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=321)** When you are trying to choose a model, simply go by trial and error.
>
> **[5:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=325)** There are going to be some things that you know, openpose for poses, scribbles for scribbles, MLSD for things with lots of straight lines.
>
> **[5:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=333)** I think for most organic shapes, HED might be a better choice a lot of the time than Canny because Canny produces such a noisy texture.
>
> **[5:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=341)** For foliage and stuff with lots of fine detail, Canny might be the way to go.
>
> **[5:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=345)** NormalMap is more useful if you're working with content coming out of 3D rendering software.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=352)** Some of these others, honestly, I have not played with yet because I haven't needed them.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=357)** In fact, you don't need to install all of these if you want to save yourself the download and if you want to have a ControlNet menu that's not so confusing.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=365)** For the rest of this course, you're going to see me probably moving through either Canny, HED, and of course I'll be using openpose and maybe scribble.
>
> **[6:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/choosing-a-controlnet-model?u=76281980&t=373)** Otherwise, choosing a model is just dependent on what your image is and what result you're going for.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), switch (1), match. (1), super (1)
> **Env Vars:** mlsd (6), hed (5)
> **Cross-References:** go back to (1), in the last (1)
> **Prerequisites:** set up (1), install (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Image size and ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=0)** - [Instructor] Once you've installed ControlNet in Automatic1111, you'll find yourself with all sorts of size controls.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=5)** There's the normal width and height that you have up here in text-to-image, then you get down here into ControlNet and there's resize mode and canvas width and height.
>
> **[0:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=14)** Fortunately, this is all much easier than it seems.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=17)** As we've seen, the first thing that ControlNet does when it runs is to create this annotator result.
>
> **[0:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=24)** This is the edge detail that it will feed into the system to help it render an image.
>
> **[0:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=29)** And because you can use one image to influence another image or influence a scene that you've specked out up here, it's possible that this image is a different size and aspect ratio than what you've specked out up here or than what you're using if you're working in the image-to-image tab.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=46)** These resize modes simply control how this image is resized to match whatever your size specifications are up here.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=56)** Or if you're in image-to-image, whatever your size specifications are there.
>
> **[0:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=59)** You have three options.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=60)** You can tell it to just resize it to match.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=63)** You can tell it to scale this to fit whatever is specified up here.
>
> **[1:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=69)** Or you can go the other way.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=71)** Honestly, I don't know that there's a huge difference in any of these.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=75)** I just leave it on just resize and I usually get exactly what I want.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=79)** In theory, it's possible that scaling in one direction or another will introduce artifacts that will mess things up.
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=87)** That level of artifact-ing is so small compared to like getting a hand with six fingers that I just don't really worry about it that much.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=95)** These two controls here are specifying the size of a blank canvas that will get created when you click the create blank canvas button.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=103)** And if you notice, if I go to a new ControlNet node, it says drop image here or click to upload.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=108)** If I say create blank canvas, now I've got drawing tools and so you can see this is a square.
>
> **[1:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=117)** I'm going to erase that.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=118)** Come down here. Change this to be wider.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=121)** Say create blank canvas.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=123)** And now, I've got a canvas that is wider than it is tall.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=128)** So I can scribble right in here, switch to my scribble pre-processor and model, and I'm ready to go.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=134)** So that's all that these are for.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=136)** Again, they're very simple.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=137)** Choose any one of these. You're probably going to be fine.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=140)** If you are finding strange artifacts in some of your ControlNet renderings, you could consider adjusting these if there's a big difference between what you've put into your ControlNet image and what you're trying to do up here.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/image-size-and-controlnet?u=76281980&t=154)** All of these same controls exist in ControlNet in image-to-image and they work the same way.

> [!info]- Semantic Content
>
> **Code Keywords:** match. (1), switch (1), for. (1)
> **CLI Commands:** find (1), node (1)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Other features in ControlNet
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=0)** - [Narrator] I want to very quickly go over some of the other things that are scattered around the ControlNet interface that we haven't talked about, and which honestly you're probably not going to use, but I don't want you to feel like I'm hiding something from you.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=12)** So up here we've got this image button.
>
> **[0:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=15)** If I click on that, I get a standard open dialogue, so I can grab an image, that's as opposed to dragging and dropping like I've been doing.
>
> **[0:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=21)** If I've got a camera on the device that I'm using, I can fire it up and shoot an image right in here.
>
> **[0:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=27)** Invert input color and RGB to BGR.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=31)** These have to do with the fact that if you want, you can skip this pre-processor thing and generate an edge map on your own using some other kind of software.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=42)** Edge detection is a standard part of sharpening algorithms and lots of other things that you'll find in your image editor.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=48)** Or if you're generating material in a 3D program, you may have the ability to create normal maps and depth maps on your own.
>
> **[0:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=57)** If so, they need to be, they may need to be inverted or they may be in a color mode that needs to be altered.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=63)** Another way to put it is these are advanced options that you're probably never going to use.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=67)** Guess Mode at the time of this shooting is an experimental feature that is meant to allow you to use ControlNet without a prompt in text to image it's, we'll try to guess at the image.
>
> **[1:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=79)** I fiddled with it a little bit and it does a pretty good job.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=83)** It's also easy enough to write a prompt.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=86)** Guidance start and guidance end are here in the same place as weight because they also allow you to control how much influence ControlNet is going to have over your image.
>
> **[1:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=97)** And what they let you do is tell it within your step count, sampling step count, when will ControlNet step in and start working and when will it step out?
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=107)** So right now ControlNet is going to be influencing every single step.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=111)** I'm dialed in for 20 steps right now, so every one of them will get ControlNet as an input.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=116)** This goes from zero to one, so this is a percentage.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=119)** So if I put it at 25 or 0.25, a quarter of the way in, ControlNet will start.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=126)** Until then, Stable Diffusion will be left on its own.
>
> **[2:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=129)** Similarly, I can control when it comes out.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=132)** The thinking behind this is that the bulk of what happens in an image gets settled in the first few steps.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=139)** Some big decisions are made by the AI, and then it sticks with those and refines them.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=144)** This allows you to have ControlNet back off from those initial steps so that you're working more with CFG Scale or in the case of image to image with De-noising strength to get some good strong elements settled.
>
> **[2:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=158)** And then ControlNet comes in and works on the details.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=160)** Conversely, you could set ControlNet to zero so that it's working right away and then set the guidance out here so that it steps out so that it lets these controls have more influence over the details.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=174)** We're not going to go into examples of this here.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=176)** This is an advanced concept that's related to something similar you can do with prompt writing where you can have prompts have more weight at the beginning or end of the process.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=184)** We'll be covering those in a future course.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=186)** And again, if you're wondering why your ControlNet only shows one control model tab, that's because you need to turn on additional tabs by going to settings and then into ControlNet and adjusting the multi ControlNet max models slider.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=204)** As you've seen, we're getting away fine with just two.
>
> **[3:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/other-features-in-controlnet?u=76281980&t=207)** I can't imagine you would ever need more than three.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** rgb (1), bgr (1), cfg (1)
> **Code Keywords:** interface (1), let (1)
> **CLI Commands:** find (1)
> **Versions:** 0.25 (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### OpenPose editors
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=0)** - [Instructor] By now you should have experienced that trying to get a precise pose, or precise choreography or blocking, using only a prompt is very difficult.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=10)** As we've seen, ControlNet with the OpenPose model makes short work of getting very precise poses for a figure.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=16)** What we haven't looked at is that OpenPose in ControlNet is smart enough to generate poses for any figure in the frame, multiple figures.
>
> **[0:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=26)** For example, let's say with straight txt2img, I'm going to switch to the standard model here.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=34)** Let's say with straight txt2img, I wanted two people playing chess in a park, photorealistic.
>
> **[0:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=45)** That's not bad.
>
> **[0:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=46)** I actually, I wanted a profile, and it got me a profile.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=50)** But he's a little cut off.
>
> **[0:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=52)** There's too much headroom.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=53)** They're crammed into the table real tight.
>
> **[0:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=56)** Let's fix this up here a little bit, let's say, profile of... Okay.
>
> **[1:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=62)** This is profile of two people playing chess, there aren't even people in the frame, there's someone sitting over there.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=67)** This is better, but again, cut off, strange composition.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=71)** With ControlNet, if I feed it an image with two people in the frame it will automatically generate poses for those two people, there are many ways I could make that source image.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=81)** I could look for stock photography.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=83)** I could shoot a photo of myself and Photobash it so that I am playing with a flipped version of myself.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=92)** I could use 3D software to render an image of two figures playing text, any of that stuff could be used to generate a pose model.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=101)** If you go to the Extensions tab in Stable Diffusion, and look at the currently available extensions, and search for OpenPose, you'll find a couple of different things, including OpenPose Editor.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=116)** After you install it, you will have this OpenPose Editor tab.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=120)** And if you click on that, you'll get this, now this should look familiar, this looks like the type of image that ControlNet makes when you're using the OpenPose model, this is the type of skeleton that it will derive from an image.
>
> **[2:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=133)** The difference is, I can move all these points around, so I can position this in exactly the pose that I want.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=141)** Now it's not a true 3D environment, I can't spin this around, so I have to just figure out how to lay these points on top of each other to get what I want.
>
> **[2:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=152)** This will be the hips right here, the knee, and the foot.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=160)** So this would be the other hip, other knee, other foot, I'm staggering 'em a little bit to get some perspective.
>
> **[2:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=171)** So I want the head tilted forward a little bit, remember these are the eyes up top.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=177)** And so that makes these last ones the ears, so I don't know quite where they go.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=183)** This person may have some strange ears.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=186)** Now, they're sitting in the wrong place in the frame, but that's okay, I can select all of these points.
>
> **[3:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=193)** And then drag them all at once to where I want them.
>
> **[3:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=196)** Now remember, this is the skeleton, they're going to have a body that sticks out here.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=200)** So I'm going to put that in a little bit.
>
> **[3:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=203)** And I don't have to just select all of the points, I can select just a subset, then tilt it forward a little bit.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=211)** And maybe we'll make their torso a little longer.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=218)** What's cool is after I've got that, I can hit the Add button and add a second model, I'm sorry.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=224)** And now I can position this one.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=226)** What I'm actually thinking of for this image is a person playing chess against a robot.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=232)** So, I want this robot to be really tall.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=235)** So I'm going to take these and put them up here.
>
> **[3:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=239)** We're going to have a kind of cramped chessboard.
>
> **[4:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=241)** It might be better to work this on a rectangular image, but we'll see what we can get.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=246)** Take the head, tilt it forward.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=252)** Eyes and ears, I don't care so much if the ears are out of whack on a robot.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=260)** And I want it sitting in a chair that's the same size, so, this is going to be possibly a very oddly proportioned robot, or, we're just going to have to really cram its feet back under the chair, have its knees sticking way underneath.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=276)** And the last thing we need are its arms.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=279)** One thing that's funny in my prompt, I'm not going to specify a robot, and we'll talk about why.
>
> **[4:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=285)** But stable diffusion is going to have to come up with a justification for why these figures are such different sizes.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=291)** So we'll see what it ends up with.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=294)** I'm not sure about my horizontal positioning in this frame, I may have them too close to the edge, but we'll see.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=300)** Now, once I'm done, there is a button for Send to txt2img, with a specific ControlNet node, that's supposed to go ahead and drop it into my ControlNet image frame.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=312)** That's not working right now so I'm just going to save this as a ping.
>
> **[5:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=319)** Back in txt2img in ControlNet, I can come down here to one of my models.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=324)** Now, you know normally you drop an image here, and then after you run the pre-processor, you see a second image that shows what was derived, in the case of OpenPose, that would be a pose model.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=335)** We're not going to do that, we're going to actually add this pose model.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=340)** So here it is, just as we drew it.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=342)** I'm going to enable ControlNet.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=344)** And I am not going to select a pre-processor, because I've done the pre-processing step, instead, I'm just going to choose my OpenPose model.
>
> **[5:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=356)** I'll leave weights and everything at their defaults.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=359)** I still have my prompt in here, I hit Generate.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=363)** And I get exactly the composition that I asked for.
>
> **[6:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=367)** I don't know why I'm getting this weird illustration style.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=371)** I'm going to switch to the Realistic Vision model.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=376)** Note that I'm now using the Realistic Vision 2.0 model.
>
> **[6:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=380)** I just noticed that yesterday.
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=383)** Okay, again, I've got exactly the pose that I wanted, I need to make some adjustments, I need to move them over to the right a little bit, tilt his head down, maybe tilt his head down.
>
> **[6:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=393)** His feet, none of the feet are fitting in the frame, so I could lift those up, I'm not sure why I'm getting this weird almost paper cutout sort of thing, I'm going to add a few things to my prompt and increase the batch count.
>
> **[6:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=412)** And this is better.
>
> **[6:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=413)** So, this character is consistently looking the other way, that's because of where I positioned the eyes.
>
> **[7:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=420)** So I would need to move the eyes around somehow to get it looking forward.
>
> **[7:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=427)** In your Extensions tab, in addition to OpenPose Editor, you will also find 3D OpenPose.
>
> **[7:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=433)** If you install that, and click on this tab, you get this.
>
> **[7:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=437)** This is a full 3D environment for specifying a pose.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=442)** This can make it much easier to get a head positioned a particular way, for example.
>
> **[7:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=448)** And what's nice about this, is it offers me a couple of ways of moving points around.
>
> **[7:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=454)** If I select a point, like this hand, notice it does have hand models.
>
> **[7:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=461)** I get this translate control, and when I move it, I get what's called in 3D terms inverse kinematics.
>
> **[7:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=468)** Every joint that's attached to it moves correctly.
>
> **[7:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=471)** So I can get this positioned up here.
>
> **[7:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=477)** And then if I click on one of the other joints, I get these rotation controls so I can fine tune.
>
> **[8:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=483)** So I can use this to go in, and build a very precise model, just like I was before, but, I've got the ability to see it from different perspectives, to zoom in and out, and so on and so forth.
>
> **[8:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=494)** When I'm done, I also have Send to txt2img and Send to img2img.
>
> **[8:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=498)** Those aren't working for me now either.
>
> **[8:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=500)** But I can save an image and import it just like I did before.
>
> **[8:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=504)** I want to talk about one last thing here.
>
> **[8:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=506)** I mentioned that I want this to be a robot, but I'm not saying that in the prompt, if I say profile photo of someone playing chess against a robot, I'll get two robots, and I can't control which one is a robot even if I was getting a human and a robot, so this needs to be inpainted.
>
> **[8:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=525)** I'm going to send this to inpaint.
>
> **[8:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=527)** And once I'm here, I'm going to quickly paint a mask over this guy.
>
> **[9:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=541)** And I'm going to switch from realistic vision to a model called robo-diffusion.
>
> **[9:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=548)** Now, realistic vision does have an inpainting model, and that might be a better way to go.
>
> **[9:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=553)** But robo-diffusion is designed specifically for creating robots.
>
> **[9:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=558)** And to use it, you need to use this nousr robot.
>
> **[9:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=565)** And so I'm going to say a nousr robot playing chess, and we will see what happens.
>
> **[9:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=574)** Mixed results here, that's a weird one.
>
> **[9:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=577)** But I do have a couple of nice looking robots in here.
>
> **[9:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=582)** Let's try some more.
>
> **[9:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=585)** Ooh, that one's not bad, he's not the scale that I want.
>
> **[9:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=589)** But, I could throw my ControlNet model back in here.
>
> **[9:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=594)** Oh that's a good one.
>
> **[9:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=596)** Let's try that, let's come down here to ControlNet.
>
> **[10:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=604)** This pose still is not right.
>
> **[10:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=608)** But I don't want to waste your time while I redraw a pose.
>
> **[10:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=615)** So we're kind of getting some.
>
> **[10:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=618)** I think the real lesson here is that inpainting with a regular model can be extremely hit or miss, you really need an inpainting model, I should go look and see if there's a nousr robot inpainting model.
>
> **[10:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=631)** If there is, then this is a way you can use multiple models on the same image.
>
> **[10:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/openpose-editors?u=76281980&t=637)** But, the real lesson here, the important thing, are these different OpenPose editing tools, just remember that when you're using your own pose map, you do not need a pre-processor.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (3), this, (2), for. (1), this. (1)
> **CLI Commands:** make (4), find (2), node (1)
> **UI Navigation:** click on (3), switch to (2), go to (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), just like (2)
> **Prerequisites:** install (2)
> **Versions:** 2.0 (1)
> **Warnings:** note that (1)


### 6. Refining Your Workflow

> [↑ Back to Table of Contents](#table-of-contents)

#### Using models to influence image style
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=0)** - [Instructor] In chapter two, I recommended that you not put artists' names in your prompts.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=5)** But if you're not going to do that how do you steer Stable Diffusion towards a particular style?
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=11)** Well, these days, with the incredible proliferation of models that are out there, free models, models you can download anytime you want, you can easily get a style by simply picking a model that renders in the style that you want.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=23)** If you're not running your own AUTOMATIC1111, if you're running off of mage.space or any number of other different sites, they offer model choices.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=31)** So let's play around with that for a minute.
>
> **[0:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=33)** I've got the ProtogenX34 photorealism model dialed up.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=37)** I've put in closeup of a woman in business casual clothing, Stonehenge in the background, photo portrait, photorealistic.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=44)** I've given some weight to photorealistic and closeup.
>
> **[0:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=47)** Let's see what happens.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=49)** Saturated colors, not super photorealistic, kind of cartoony background.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=55)** I'm not saying this is either good or bad, but it is a particular style.
>
> **[0:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=58)** Let's see if it's consistent with that style.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=61)** Also because Stable Diffusion uses an English language model, it had to be trained on a data set that had English words associated with images.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=70)** And so image text pairs were scraped off the web that were English.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=75)** That means those are going to be from English speaking countries.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=77)** That means those are mostly going to be Western countries.
>
> **[1:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=80)** That means there are some biases built into the data set.
>
> **[1:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=83)** This is nothing sinister.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=84)** They weren't trying to steer in a particular direction.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=88)** It's just when you scrape the web for English, you get a lot of white people.
>
> **[1:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=92)** So when you ask for a man or a woman in a prompt, you're probably going to get a white man or a white woman.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=98)** That doesn't mean you can't get something else, you just have to ask for it.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=101)** So I'm going to say a closeup of a Japanese woman and see what we get.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=108)** Now this is different because our seed is set to randomize.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=111)** We got a Japanese woman.
>
> **[1:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=112)** Still, colors aren't super saturated but we're still not getting tremendous photorealism.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=118)** It's got more of an illustrated look.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=119)** It's a simpler look.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=121)** Let's up the batch count and see if that's consistent.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=125)** I would say it is.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=126)** This model has a particular style.
>
> **[2:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=128)** I think it's a style that's well suited for any number of different applications.
>
> **[2:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=132)** Notice also that for the most part we're getting pretty clean faces.
>
> **[2:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=136)** It does well at portraits.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=138)** This one's a little scrambled, but she's small in the frame.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=140)** This woman is smaller in the frame.
>
> **[2:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=141)** Inpainting is probably going to take care of those with no problem.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=145)** Always remember to check the distributor of the model you're using to see what trigger words there might be.
>
> **[2:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=151)** We've got model shoot style, analog style, Midjourney style, style that gives us robots.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=155)** I'm going to stick model shoot style in here to see if that gives us a different look.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=163)** And just to really stress that I'm going to give it some weight.
>
> **[2:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=165)** I also feel like, well, we'll just do that for now.
>
> **[2:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=169)** I'm wondering if Stonehenge needs a little more weight.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=173)** I think I would also like it moodier.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=175)** So I'm just going to throw moody in there.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=179)** Interesting, model shoot is giving me women who don't have their mouths open.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=184)** They don't have open mouth smiles if they're smiling at all, they look more model like.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=187)** They've got their arms crossed, they've got that disaffected model look.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=191)** It did a good job going moody, but I'm still mostly sticking with this same style here.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=197)** Not super photorealistic.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=199)** A little more illustrative than photographic.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=202)** Let's keep this exact same prompt and switch over to Realistic Vision, which is at the time of this shooting, generally considered to be the best model to use for photorealism.
>
> **[3:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=215)** And sure enough, we're getting a very different look.
>
> **[3:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=218)** I don't think we've hit extreme photorealism yet.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=222)** I like this shot a lot, this is nice also.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=225)** But we are getting closer.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=228)** And remember this one has a specific prompt that it recommends.
>
> **[3:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=232)** I'm going to recycle this seed.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=235)** I want to stick with this pose and this woman.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=238)** Now I may be about to screw all of that up by coming here to the Realistic Vision page and copying this prompt that they recommend.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=248)** So I'm going to take this stuff.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=253)** I'm going to add raw photo, like they say.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=257)** Model shoot style is a trigger for this model.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=260)** I'm going to take the rest of this and replace it with what they suggested.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=263)** I'm going to go back to my moody trigger because I think that was helping us.
>
> **[4:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=273)** And then I'm going to grab the negative prompt that they recommend.
>
> **[4:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=277)** Even though we've been getting very clean faces in the smattering of renderings we've done here.
>
> **[4:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=287)** Definitely more photorealistic now.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=289)** I like that it kept her head cropped at the top, although I feel like it's a little too tight.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=294)** Hint of Stonehenge in the background.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=296)** This is a nice rendering.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=298)** I think I will recycle this seed.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=301)** And note that if I hit generate right now, I'm going to get this same image again.
>
> **[5:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=306)** Then it's going to step forward one number in the seed, it's going to go to 56 and render another image, and then it's going to do that again for the next one and so on.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=314)** So I'm not going to see a huge change.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=318)** Which is great because it produced this image which I think I like better than that other one.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=322)** So again, recycling the seed, something we talked about earlier, is very important.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=326)** But as I was saying, the point of this lesson is changing model to get a different style.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=332)** Let's recycle this seed and try one more thing, which is I'm going to change to a very, very different look.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=337)** And I'm going to switch over here to Synthwave Punk, which produces this illustrated style.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=344)** They do not have a recommendation of a prompt.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=348)** I could come down here to some samples and see what people are using.
>
> **[5:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=351)** But they do recommend the trigger word, synthwave style.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=355)** It's weirdly abbreviated.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=359)** Let's leave as much of this in here as we can so that things don't change.
>
> **[6:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=363)** We will take out raw photo and put in synthwave style.
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=369)** And we'll give it some strength, some weight.
>
> **[6:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=375)** And now we're getting very, very different things.
>
> **[6:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=377)** Again, just by simply changing the model.
>
> **[6:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=379)** We've really lost Stonehenge.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=381)** I'm not going to go too far with this 'cause this is not the look we were going for.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=384)** And I think I've made the point that model choice might be all that you need to zero in on a look that you want, a style that you want.
>
> **[6:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=393)** These are definitely heading in a cool direction.
>
> **[6:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=395)** And you can see that I'm now well away from the original composition, and that's because in this model, that particular seed, with this particular prompt takes me to something different than what it did in the Realistic Vision model.
>
> **[6:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=406)** Exploring what people are using for prompts for this model might lead me to a number of different things.
>
> **[6:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=411)** I often stress that one of the advantages of Stable Diffusion over its competitors is the ability to swap out models.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=418)** And this is one reason why.
>
> **[7:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=420)** When you find a model that you like for a particular style and you really learn how to drive it, that's a huge advantage and you're not stuck with just that.
>
> **[7:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=428)** You can change to another model, learn how to drive that.
>
> **[7:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/using-models-to-influence-image-style?u=76281980&t=430)** Soon you can have a real toolbox full of different models for different looks and different styles.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), super (3), switch (2), else, (1), throw (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), we talked about (1)
> **Best Practices:** recommended (1), remember to (1)
> **CLI Commands:** find (1)
> **Env Vars:** automatic1111 (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)

#### Inpainting and upscaling
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=0)** - [Instructor] Hopefully by now you've gotten a chance to do some in painting on your own and gotten some experience there.
>
> **[0:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=5)** I would like to return to that topic for a moment to discuss some quality issues.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=9)** I'm here in the in painting tab.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=11)** I've got the same prompts that I use to generate my image and as you can see, I've already put the image in, her face is a little bit scrambled.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=18)** So let's paint a mask on here.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=22)** As I mentioned before, I like to cover the hair so that I don't end up with a face that looks like it's superimposed into some hair.
>
> **[0:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=31)** So I've still got my stock size of 512 by 512.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=35)** This was the size that the original image was rendered at.
>
> **[0:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=38)** I'm going to tell it to in paint only the masked area and I'm going to have it start over from scratch with some latent noise rather than working with the original.
>
> **[0:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=48)** This is better.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=49)** Odd little shadow there.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=51)** Her face has changed direction.
>
> **[0:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=53)** She's looking away now.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=54)** So let's see what happens if I go to the original and try again.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=61)** Now her face is pretty small in the frame here.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=63)** I'm actually surprised it did this good of a job since we're sticking with the original 512 by 512 image.
>
> **[1:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=71)** Also note that I'm still using a random seed but since I'm sticking with the original, she's maintaining the Asian look that she has.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=82)** If you find that your in painting is drifting too much, go get the original seed and put it back in here.
>
> **[1:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=88)** So let's try that.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=89)** I happen to have the original seed right here and now she's looking directly into the camera.
>
> **[1:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=95)** So your seed choice does make a difference when you're in painting and if you're really hoping to preserve an expression or oppose or some detail it might be that you need to work with the original seed.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=106)** It's easy to forget to put that in there.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=109)** I'm going to save this image and now I'm going to do what we've been doing before which is increasing our pixel count, doubling our pixel count on our width and our height.
>
> **[2:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=121)** Everything else is staying the same.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=123)** I'm going to generate again and I get this image.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=127)** Let's save this and I'll put 'em side by side.
>
> **[2:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=133)** Here's the first image we rendered.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=135)** This is the one where we kept the size at 512 by 512.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=139)** Here's the second one that we did at 1024 by 1024.
>
> **[2:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=143)** There's more detail on her face.
>
> **[2:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=145)** There's more subtle shading.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=147)** I'm at 300% here because these images are still 512 by 512.
>
> **[2:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=151)** So when I say more detail, I don't mean that we're going to zoom in and find super fine details of individual eyelashes and things but she does look different.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=160)** You might be able to argue that this image looks better because the level of detail in her face better matches the level of detail in the rest of her body and her hands and so on and so forth.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=172)** Stonehenge is a little bit soft focus where these stones are soft focused so I expect them to look different, but everything on this plane should have the same kind of quality and it does.
>
> **[3:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=182)** Here, I can kind of tell that something's changed.
>
> **[3:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=189)** Now what I don't know is if I can tell that because I'm no one to look for it if I'm hunting it down.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=192)** That's very often a problem with trying to find subtle imaging differences.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=197)** I'm just bringing it up here because you might find that if you're going to do any in painting before you do the in painting, you want to upscale your image.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=206)** So I might want to either through extras or through image to image, double the resolution of this, then do my in painting.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=213)** So here's a two x up scaling of my original disfigured image and you can see that I'm set for 1024 by 1024 here.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=222)** Now since I'm in painting only the mast, I could set this to 2048 by 2048 again and get more detail on the face than anywhere else.
>
> **[3:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=231)** But we're trying to prevent this problem of a difference in face detail versus everything else.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=235)** So I'm going to leave those alone.
>
> **[3:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=236)** I'm going to put my mask back and hit generate.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=244)** Before we take this into Photoshop to look at it, I want to take note of something else.
>
> **[4:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=248)** I am using the realistic vision model, the regular straight model.
>
> **[4:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=252)** There is an in painting version.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=254)** Honestly, I forgot to switch to it and it's doing a great job just using the stock model.
>
> **[4:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=260)** I'm not suffering from not switching to the in painting model.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=263)** It's great to have an in painting model if one is available, definitely grab those when you see them but don't hesitate to try in painting with a regular model just to see how well it does.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=276)** So here we are at 200%.
>
> **[4:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=279)** Really nice detail and I do feel like overall this is a quality that is matching the others or I should say it has a quality that matches the rest of her.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=290)** So in this case, I think it was better to upscale first and then do my in painting.
>
> **[4:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=295)** Whether or not this particular finicky issue that I'm talking about is going to matter to you is going to vary depending on the model you're using, the style of the image you're creating.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=304)** This is a level of detail that is coming up because we're aiming for a more photorealistic look.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=310)** If you're doing something with more of a natural media style, this kind of stuff may not matter.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=314)** As you continue working with stable diffusion, trying different things, it's worth to consider where in your workflow you put that upscaling step.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/inpainting-and-upscaling?u=76281980&t=322)** Because if you are going to do in painting it could make a difference.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), else. (3), super (1), this, (1), switch (1)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** go to (1), switch to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Refining with XYZ plot
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=0)** - [Instructor] Earlier while doing some batches of renderings with the realistic vision model, I came across this, which I really like.
>
> **[0:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=6)** I really like the quality of it.
>
> **[0:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=9)** I like the pose, I like the detail of Stonehenge.
>
> **[0:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=12)** I even like this chromatic aberration, this weird green stuff that's coming around here that feels very authentic.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=18)** A weird combination of a cheap lens and a nice quality lens on her face.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=22)** So I could stop here, but don't forget about the ability to make those XY grids because it's a quick way to find out if maybe somewhere in this same part of the image space there's something else that I would like.
>
> **[0:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=35)** Or maybe if I render this data from the inner image space with a different sampling method, I would come up with something else that I like.
>
> **[0:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=42)** So let's come down here to X, Y, Z plot, and let's start by saying we want to try a variation of steps.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=51)** We'll do 20, 30, 40, 50, and 60, and let's try fiddling with the CFG scale, and seeing what happens.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=61)** We were at 7, let's go 7 1/2.
>
> **[1:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=66)** 8, 8/12, 9, 9/12, I don't know that we really need to go up to 10, but we'll give it a try.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=75)** I have kept the seed the same.
>
> **[1:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=77)** These are obviously all working with the same sampler.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=81)** So at a CFG scale of 7 /12, I can see that increasing steps isn't really making any effective change.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=91)** Increasing CFG is adding a lot of contrast that I don't like.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=96)** Look at Stonehenge here versus Stonehenge here.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=99)** Obviously it's changed geometry, but also the shadows are darker, and those darker shadows are also showing up on her cheekbones.
>
> **[1:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=106)** She's got a little cleft in her chin that I hadn't seen as much before.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=110)** So I definitely feel like with this image going too high on the CFG scale is a mistake.
>
> **[1:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=116)** I really feel like for the soft light we've got in this scene or that's implied in this scene by the cloud cover, even going above 7 1/2, even going to 8 is getting shadows that are a little bit too strong.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=127)** With this particular sampler, increasing steps doesn't seem to be getting us a lot of change in, well, really anything.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=135)** Her expression's not changing.
>
> **[2:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=137)** The background isn't changing.
>
> **[2:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=139)** So I'm not finding that there's anything else that I like any more here than what I was already getting.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=147)** So that's great news.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=147)** I don't need to mess with those parameters, but I am curious about what another sampler might do.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=153)** So I'm going to do another plot.
>
> **[2:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=154)** I'm going to assume that increasing the CFG scale is always going to increase contrast in a way that I don't like.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=163)** So we'll graph steps against a sampler.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=167)** Again, the easy way to fill these in is to just hit this button, which gives us all of them.
>
> **[2:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=173)** We're using Euler A, I'm going to get rid of that.
>
> **[2:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=176)** Over time, you may find there's some things you are curious about because some samplers you're curious about because you've gotten good results from them before.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=186)** Things like that.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=187)** I'm going to take these out.
>
> **[3:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=190)** I'm going to keep DDIM.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=192)** I'm going to take this out.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=194)** I can't give you any really good reason for why I'm choosing the ones I'm choosing.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=199)** Any sampler that has A in the name means it's an ancestral sampler.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=204)** That doesn't mean that it's old and obsolete.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=206)** That means it takes a particular approach to the way that it does things.
>
> **[3:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=212)** I do want to see this one.
>
> **[3:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=214)** I'm going to try and get it down to maybe five samplers.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=217)** We'll just take those out.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=219)** One, two, three, four, five, six, that's fine.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=224)** And we'll render this.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=226)** Here we are, and now we're seeing some pretty different renderings depending on sampler.
>
> **[3:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=231)** Ooh, here we're even getting some bare shoulder.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=235)** Totally different poses in the DDIM sampler.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=238)** So the first thing we can do is say, does the step count matter for any particular sampler?
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=244)** It does not for the Heun sampler, it does for some of these others.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=250)** Earlier I mentioned the idea of convergence, and you can see it happening here with DPM a Karras.
>
> **[4:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=255)** It starts out here at 20 steps and then we get some change and then it settles down by the time it gets to 50.
>
> **[4:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=263)** In fact, all of these are showing convergence at around 50 steps.
>
> **[4:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=268)** My goal here is not to look at this with the idea of deciding, "Well, what's the sampler I want to use all the time or from now on", my goal is just to say, "Is there another image that can be produced from where I'm at now that I like more than the one that I had, or in addition to the one that I had?"
>
> **[4:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=284)** And I would say that I don't like any of these as much as what I had.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=288)** Maybe this one, it's interesting that they've all decided to bring her hands up into play except for this one.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=294)** These are definitely, this is a nice image.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=297)** Actually, that's a nice smile.
>
> **[4:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=298)** These are the ones that I might want to go look at close up and see if there's something else I like.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=304)** So that's nice.
>
> **[5:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=305)** I started with one image, now I have three related candidates that I maybe like as much or more.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=311)** So this plot script is not just useful for doing some experiments to try to learn how samplers work, which is what we were using it for before.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=321)** It can be the final polishing step that you take before you go on to up sizing your image and creating a final output.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=329)** It's a chance to very easily see some variations that might lead in a place that you like.
>
> **[5:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=335)** So don't forget about the plot script.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=337)** After you've written a prompt, done your image to image, your control net, everything else that's gotten you to a final image.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/refining-with-xyz-plot?u=76281980&t=343)** Once you've got that final image, it's time to start working on some variations before you head on to in painting, up scaling, and the other parts of your workflow that will alter that image.

> [!info]- Semantic Content
>
> **Env Vars:** cfg (5), ddim (2), dpm (1)
> **Code Keywords:** let (4), this, (1), try. (1), this. (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Best Practices:** don't forget (2)
> **Versions:** go 7 (1)
> **Speakers:** - [instructor] (1)

#### Complete a Stable Diffusion workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/complete-a-stable-diffusion-workflow?u=76281980)


### 7. Customization and Model Training

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating a custom model
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=0)** - [Instructor] If you've spent much time with stable diffusion, what I'm about to describe may sound familiar to you, you spend a lot of time using all of your skills.
>
> **[0:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=8)** You're using control net, you're using your prompt writing skills, and after all that time, you come to the image that you wanted, and now you would like to take this woman, and put her on a school bus, but you can't do that because this woman does not actually exist in the data model anywhere.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=28)** She has appeared here because it turns out that if you take all of the noise associated with all of these different tokens and diffuse all that noise, you happen to get this woman standing in front of Stonehenge.
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=41)** But if I now say a woman on a school bus, she's pretty close, but she's different.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=50)** And bear in mind too, that to start to get a different pose, I may have to unlock my seed and go back to a random seed in which case she's going to change even more.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=60)** In general, it's safe to say that unless you are rendering an image of a famous person, getting consistent characters from rendering to rendering, prompt to prompt is impossible in stable diffusion.
>
> **[1:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=70)** And even famous people are getting more difficult to pull off as they are being pulled out of models for legal reasons.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=78)** So if you want to create consistent characters from situation to situation, prompt to prompt, rendering to rendering, you need to create a custom model.
>
> **[1:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=86)** For the rotoscoped movie that you saw at the end of chapter two, I had to create a model of myself because I needed it to render 6,000 different images of me, and I couldn't trust that it would do that, if I didn't have a custom model.
>
> **[1:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=99)** There are a number of ways of creating custom models.
>
> **[1:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=102)** We're going to start with the easiest, and the one that I used to make the model that I used for that video, which is [astria.ai](https://astria.ai).
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=110)** This is a website that will build a model for you for a very reasonable price.
>
> **[1:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=115)** For $1.50, it will build a model for you, and once it's built, you can render images with that model for 10 cents per prompt, but for that $1.50 fee, you can also download the model file, and install it in your own instance of automatic 1111, which is what I did to make my rotoscoping.
>
> **[2:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=135)** At the time of this shooting, I have not seen a web-based instance of stable diffusion that allows you to upload a model, so made shot space does not allow you to upload a model and so on.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=147)** So to use a custom model, you either have to have your own instance of automatic 1111, or you can generate one here at [astria.ai](https://astria.ai).
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=155)** And anytime you want to use it, come here and pay 10 cents per prompt to work with it.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=159)** Generating a model at [astria.ai](https://astria.ai) is pretty simple.
>
> **[2:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=162)** You give it a title.
>
> **[2:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=163)** This title has nothing to do with anything you will ever do in a prompt.
>
> **[2:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=167)** This is simply to reference the model here on [astria.ai](https://astria.ai) because you might end up making multiple models.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=174)** The important field is this one, class name, and they say here, this should not be a name.
>
> **[2:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=179)** This is the class of thing that you are choosing to model.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=183)** Woman, man, couple, objects.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=186)** You could also say person.
>
> **[3:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=188)** So I chose a class of man and then I uploaded my images.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=192)** Now they give you some suggestions here.
>
> **[3:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=194)** Upload 20 images of the subject, or anything between four and 30 images.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=199)** Images should include different variations blah, blah, blah.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=202)** Like most people, I don't like looking at pictures of myself, so this is a drag, but here are the 23 images that I uploaded.
>
> **[3:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=210)** Now, I just pulled these from my archive of images.
>
> **[3:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=213)** I did not go and shoot anything new because I felt like I had what I needed.
>
> **[3:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=217)** They suggest four to 30.
>
> **[3:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=219)** I chose 23 because I had some questions about some of these.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=222)** They suggest the breakdown should be three full body shots, five shots from the waist up, and the rest should be closeups of your face.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=230)** Here's a full body, here's a full body, here's another one, here's one.
>
> **[3:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=234)** But I'm sitting down, so I didn't know if that counted.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=237)** And then I do have a number of waist up shots, and a number of shots in my face.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=242)** The most critical thing, the thing that I can't stress the most is variation.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=247)** So think about this.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=249)** We're trying to make a model from which it can generate any image of me that I can imagine, and we're doing that with a sample set of 23 images.
>
> **[4:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=257)** That's not a lot of images, so to the AI, anything in any of these frames is significant.
>
> **[4:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=264)** So if anything is repeated across frames, it runs the risk of becoming significant to the image generation process.
>
> **[4:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=270)** For example, I have tried using the model that it created of me, to render an image of me without glasses on and I can't do it because I'm wearing glasses in every single frame.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=281)** It thinks the glasses are part of me.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=283)** I once managed to get a single image of me without glasses on, and it didn't look that much like me.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=289)** So I'm stuck with glasses.
>
> **[4:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=291)** If I want to render pictures of me without glasses on, I need to build a separate model without glasses.
>
> **[4:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=296)** If you notice, for the most part, I'm trying to have different clothes on in every image.
>
> **[5:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=302)** It doesn't always work out because in some cases, these are images from either the same trip or I'm outside.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=309)** So I'm wearing a coat, and I often wear the same coat outside.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=312)** Same trip here, so same shirt.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=314)** I've tried to have as much of a variety of facial expression and angle as I can get, and I've tried to bury the backgrounds in every image.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=322)** Just be smart about it.
>
> **[5:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=323)** Think again about size of the sample set.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=326)** If you were somebody who was trying to learn this person, and you saw the same thing in multiple frames, you would think it was significant.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=332)** Well, you wouldn't, you're smart enough to know the difference between a person and a background, but an AI is not that smart.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=337)** Your images need to be square.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=339)** I cropped these manually in Photoshop.
>
> **[5:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=342)** There are websites that will crop images for you.
>
> **[5:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=344)** A Google search will find them.
>
> **[5:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=346)** They suggest 512 by 512 images.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=348)** I think I accidentally uploaded 1024 by 1024, but that was okay.
>
> **[5:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=352)** Once you're done, they have a mechanism for uploading.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=354)** You hit the create button and it takes about half an hour.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=358)** You don't have to sit here and watch it.
>
> **[6:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=360)** You don't have to leave the browser window open.
>
> **[6:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=362)** You can use your computer for something else.
>
> **[6:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=364)** When it's done, it will send you an email letting you know that it's finished.
>
> **[6:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=368)** And they send you this cool webpage where they've already generated a bunch of images of you.
>
> **[6:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=373)** Check this out, this is an AI generated image.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=376)** The model they've built is good enough to get this level of photorealism.
>
> **[6:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=381)** Here's some natural media stuff.
>
> **[6:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=383)** And then my favorite is they made me into an action figure.
>
> **[6:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=386)** Surprisingly, the AI was smart enough to know that an action figure of me would be like, you know, someone laying around.
>
> **[6:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=394)** Most importantly, I can download a ckpt file, a checkpoint file, a model file that I can install in my own stable diffusion that goes inside your stable diffusion Web UI folder.
>
> **[6:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=406)** Inside the models folder, inside the stable diffusion folder, you just put it here.
>
> **[6:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=412)** And then when you come back to stable diffusion to automatic 1111 in your web browser if you pop the model's menu open after you have recycled the list, you'll see your custom model.
>
> **[7:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=423)** So I name all my custom models with an underscore, and cust at the front that keeps them at the top of the list, so this is the custom me model.
>
> **[7:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=430)** I put a date on it and I can pick that and now work with it.
>
> **[7:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=435)** So let's just do the prompt we've been doing.
>
> **[7:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=437)** So that class that you chose, this thing, class name I chose man that means I reference myself in this model as sks man.
>
> **[7:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=451)** The SKS is something that Astria is building into the model.
>
> **[7:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=454)** That's not some universal rule.
>
> **[7:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=455)** What they're trying to do is find some kind of nomenclature that possibly isn't already in the model.
>
> **[7:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=462)** So I'm going to say sks man in business casual clothing, Stonehenge in background.
>
> **[7:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=471)** Something went wrong, I don't know what that is.
>
> **[7:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=476)** Photo, I'm going to stick close up here.
>
> **[7:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=477)** Now, I've been using model shoot style, and a bunch of other custom things that came from the realistic diffusion or realistic vision model.
>
> **[8:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=488)** Remember, I'm in a completely different model now.
>
> **[8:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=491)** I don't need those.
>
> **[8:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=493)** So let's up our batch count and see what happens.
>
> **[8:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=497)** Wow, I've always wanted to go to Stonehenge, and now I don't have to, very, very good quality.
>
> **[8:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=503)** I wouldn't call that business casual clothing.
>
> **[8:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=506)** I hope that's not because I was wearing a leather jacket, and so many images that now thinks I should always have a leather jacket on.
>
> **[8:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=513)** Again, this comes down to replication of stuff in the frame.
>
> **[8:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=516)** My head looks a little big on my body there but that doesn't seem to be a consistent problem.
>
> **[8:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=521)** I think that was just a problem in that specific image.
>
> **[8:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=524)** So I can go in here, I can use control net to pose myself.
>
> **[8:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=528)** I can do all of the same things we've been doing, and it's always going to look like me.
>
> **[8:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=532)** Most importantly, I could say Giza Pyramid in background which auto corrected to Liz for some reason, and it's still me.
>
> **[9:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=545)** This ability to create and use a custom model suddenly opens up huge new use cases for stable diffusion, story boarding, pre-visualization anything where you want multiple frames that include the same character, character design.
>
> **[9:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=561)** I can start playing with me in different outfits, maybe with different hair.
>
> **[9:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=566)** I can transfer makeup from people and put it on me.
>
> **[9:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=569)** I can change my hair color, so on and so forth.
>
> **[9:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=571)** I can really work up a character design.
>
> **[9:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=573)** You could hire a model that's got the beginning of a look you like, and then start basically using them as a virtual paper doll.
>
> **[9:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=580)** You can also model things.
>
> **[9:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=583)** So if you've got a product like the Pocket Stonehenge, and you have a practical model, you could build an AI model of that, and start using it in other imagery.
>
> **[9:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=591)** The model file that I installed here, they're typically somewhere between three to five gigabytes, so they're not small but storage is cheap and plentiful these days.
>
> **[10:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=600)** However, there are some other custom model methods you can use that result in smaller files with slightly different capabilities.
>
> **[10:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=607)** We'll be taking a look at those.
>
> **[10:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-a-custom-model?u=76281980&t=609)** In the meantime, if you want to get started with custom models whether you're running your own automatic 1111 instance, or not, [astria.com](https://astria.com) is a great way to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **URLs:** [astria.ai](https://astria.ai) (4), [astria.com](https://astria.com) (1)
> **Code Keywords:** let (2), this. (1), else. (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 1.50 (2)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** install (2)
> **Env Vars:** sks (1)

#### Creating models with DreamBooth
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=0)** - [Instructor] If you're running your own installation of Automatic 1111 you might be able to install Dreambooth which will let you create your own models on your own hardware.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=10)** This is a normal extension.
>
> **[0:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=11)** It installs in the normal way there's no need to download anything else.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=16)** I say you might be able to install, you'll definitely be able to install it.
>
> **[0:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=20)** Whether it will run well on your machine depends entirely on your video card.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=25)** As you can see in the description it has been optimized for lower VRAM GPUs so it will probably run, but it might take three or four hours to complete a training depending on what kind of GPU you have.
>
> **[0:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=37)** Even my Fast in video cards that have 24 gigabytes of RAM still takes sometimes 20 to 30 minutes to train a model.
>
> **[0:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=44)** So this is not a speedy process it may not be worth your trouble.
>
> **[0:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=49)** If you're not looking to do a lot of model creation then it might be fine.
>
> **[0:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=54)** Once it's installed, you will have this Dreambooth tab which takes you to what is currently the Dreambooth interface.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=61)** The interface tends to change a lot and that brings us to an important consideration.
>
> **[1:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=67)** I think Dreambooth is a fantastic piece of software and just like Automatic 1111 and so much of this other stuff we're doing it's incredible that it is free.
>
> **[1:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=75)** This is the miracle of open source.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=78)** The last couple of months with Dreambooth though have been a little frustrating because Dreambooth will work and then a Dreambooth update will come out or an Automatic 1111 update will come out and Dreambooth won't work anymore.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=90)** And by won't work.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=91)** I don't mean that the interface doesn't work or that it doesn't claim to be generating a model.
>
> **[1:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=96)** It does all that and it's just that you activate the model and you try to render an image of the thing that you modeled in it, it's not there or it doesn't look good or it looks all disfigured.
>
> **[1:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=107)** Right now Dreambooth is working very well.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=109)** Hopefully that will last.
>
> **[1:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=111)** As you can see, Dreambooth has a lot of parameters that you can fiddle with and that's just this first settings tab.
>
> **[1:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=119)** As we're going to see here, straight out of the box.
>
> **[2:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=122)** Taking simple default settings.
>
> **[2:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=124)** If you've got good input material, you can get very good output.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=127)** So maybe you never need to adjust any of these settings.
>
> **[2:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=130)** On the other hand, at [astria.ai](https://astria.ai) which we looked at in the last video, I'm amazed at what a good job they're doing delivering high quality models regardless of the content that I send them.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=142)** And it's only a dollar and a half to get something created.
>
> **[2:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=146)** So if you're not looking to create a whole bunch of models and if you don't want to dig in and fiddle with a whole bunch of stuff, sticking with Astria AI might be the best way to go because you know you'll get good results.
>
> **[2:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=157)** It's not that expensive.
>
> **[2:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=159)** You don't have to figure out what's under the hood and you don't have to worry that you're going to wake up tomorrow, do an update and then you're not going to be able to create models anymore.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=166)** So all of that said, let's dig into Dreambooth because it is a fantastic add-on for Automatic 1111.
>
> **[2:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=172)** I'm going to use the same set of images that I used in my [astria.ai](https://astria.ai) demo.
>
> **[2:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=177)** So there some pictures of me.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=178)** I'm going to create a model of me and to begin with we need a model file for that to go into.
>
> **[3:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=184)** So you start by going to this create tab and giving it a name.
>
> **[3:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=187)** As always, I'm going to start mine with cust and then I'm going to say demo of me.
>
> **[3:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=195)** Maybe I'll make that a little easier to read demo of me.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=199)** When you create a model, you are not actually creating a model from scratch because the only thing I'm training is me.
>
> **[3:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=205)** I'm not training everything else in the world.
>
> **[3:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=206)** So instead we're going to add me onto an existing model.
>
> **[3:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=211)** I have scaled all of my images to be five 12 by five 12 so I'm checking this box.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=216)** If I were wanting to add onto a 2.0 model I would uncheck this box and go up to 768 by 768.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=223)** I'm going to stick with the realistic vision model.
>
> **[3:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=226)** As I have said earlier, working with a pruned model does not yield very good results and we've been using these realistic vision models throughout this course.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=235)** So I think you have an idea of what they look like.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=237)** It will be interesting to see if the version of me that it's creating kind of fits in with the realistic vision style.
>
> **[4:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=244)** I hit Create Model and it starts doing that over here.
>
> **[4:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=247)** In the meantime, let's look at our settings.
>
> **[4:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=249)** There are a lot of things here and I'm not going to go into most of them.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=253)** Dreambooth has been under development for a while.
>
> **[4:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=255)** The developers are plainly extremely intelligent about how this all works.
>
> **[4:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=261)** Oh, this happens sometimes it throws an error, but right behind it you see checkpoint successfully extra something.
>
> **[4:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=267)** It did work.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=269)** So I've just been ignoring that error and things have been fine.
>
> **[4:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=272)** Anyway, what I was saying is the creators of Dreambooth seem to really know what they're doing.
>
> **[4:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=275)** I trust their idea about default settings, but if you want to fiddle with these, if you make a model and you're not happy with the results, there are really only two things that you should work with unless you're going to try to dig into this and really learn how all this works.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=290)** The first is training steps per image or Epochs, which defaults to 100 and we get some, some help here.
>
> **[4:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=297)** This is the total number of training steps that will be performed on each instance image.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=301)** This is just like the steps in txt2img or image to image.
>
> **[5:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=304)** This is how many passes it's going to take, adding noise and analyzing what happened.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=309)** To high number, which is good.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=311)** We're only giving it 20 images.
>
> **[5:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=312)** We want to really feed it a lot, as much useful data as we can.
>
> **[5:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=316)** It is possible to overtrain a model.
>
> **[5:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=318)** You might say, "Well, of a 100 is good, I don't mind giving up some time.
>
> **[5:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=321)** Let's set it to a 1,000."
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=322)** If you overtrain the model, then the references that you're creating to the thing that you are trying to model may not work.
>
> **[5:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=330)** Basically the AI is going to be thinking too much and it's just going to lose track of how to find whatever it is that you're trying to add.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=339)** The other thing that you would want to fiddle with if you feel like you're not pleased with the results of your model is where to go down here learning rate.
>
> **[5:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=348)** It defaults to 0.000002.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=354)** So if you do find that, well, I'd like to see if I can get better quality, I'm going to change the learning rate.
>
> **[5:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=359)** Don't say I'll set it to 50 or something like that.
>
> **[6:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=362)** Plainly, this is an extremely granular adjustment here.
>
> **[6:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=366)** Maybe you bump it up to 0.000003.
>
> **[6:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=369)** Don't do big changes here and on a fast card it's half an hour to find out what the change does.
>
> **[6:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=376)** So adjusting these is fiddly and some trial and error and I would definitely recommend doing some reading on what the various settings here do and whether or not they're really going to solve the problems you think you're having.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=387)** Two other things you could fiddle with if you do have a slower GPU or a GPU with less memory, you could set save model frequency and save preview frequency to zero.
>
> **[6:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=397)** These are kind of feedback and safety mechanisms.
>
> **[6:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=399)** They don't impact the overall quality of your model and they theoretically slow down the generation process.
>
> **[6:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=405)** It takes my high end high ram GPU 25 to 30 minutes to create a model.
>
> **[6:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=412)** If changing these knocks off two minutes, I don't care.
>
> **[6:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=414)** So I just leave those.
>
> **[6:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=416)** So let's move on to the concepts tab.
>
> **[6:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=418)** There is stuff here that has to be filled out.
>
> **[7:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=421)** This should be a path to your source images.
>
> **[7:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=425)** Now, this is a little bit tricky.
>
> **[7:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=427)** The documentation says that I can drag any path in here that I want.
>
> **[7:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=432)** That has not been my experience with this version of Dreambooth.
>
> **[7:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=436)** I'm on my Mac right now, but I'm connected to my Windows machine.
>
> **[7:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=442)** That's where Dreambooth is running on that server.
>
> **[7:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=445)** If I drag in a path to a directory on my Mac, I get an error when I try to train the model.
>
> **[7:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=451)** And it's not an error about the dataset directory it's an error about concepts needing to be filled out.
>
> **[7:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=459)** I fiddled with this for a long time before I finally moved my images over to my Windows machine and tried doing this there.
>
> **[7:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=467)** It still didn't work.
>
> **[7:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=469)** Finally it worked when I put it inside the Dreambooth folder that's inside the models folder, that's inside my Stable Diffusion web UI folder.
>
> **[7:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=479)** Once I moved my images into there and copied and pasted that path into the dataset directory field, then things were working.
>
> **[8:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=487)** I'm not actually going to start the training process that you're going to see right now.
>
> **[8:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=490)** We're just going to look at how to fill it out.
>
> **[8:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=492)** The other two critical things to complete here are under training prompts instance prompt.
>
> **[8:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=498)** We want to put an example of how we would reference the thing that we're trying to add.
>
> **[8:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=503)** So I'm going to say photo of, I need to choose something here that isn't probably already in the model, the six gigabyte model of everything in the world.
>
> **[8:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=513)** So I should use my full name or a nonsense version of my name or something.
>
> **[8:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=519)** What I'm going to choose is mememe.
>
> **[8:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=522)** And if I'm not feeling confident about that I can add a fourth me.
>
> **[8:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=525)** Obviously, it's critical that I remember what this reference is.
>
> **[8:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=528)** It's really worth writing things these things down in a notepad somewhere.
>
> **[8:52](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=532)** Next is a class.
>
> **[8:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=533)** What is the thing that I'm rendering?
>
> **[8:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=536)** I could say it's a person. I could say it's a man.
>
> **[8:59](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=539)** I could say I'm a being, whatever.
>
> **[9:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=542)** I'm going to say person.
>
> **[9:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=545)** And those are the only critical things that I need to fill out.
>
> **[9:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=548)** There are lots of other fields here that have to do with the creation of other types of model, other types of data, other ways of refining the reference to the thing you're trying to add.
>
> **[9:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=560)** Again, we're sticking with basic driving of this software.
>
> **[9:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=565)** After you fill all that out, save your settings hit the train button and it'll take off and start doing its training thing.
>
> **[9:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=570)** You can go have lunch or something.
>
> **[9:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=572)** We're going to do the cooking show trick now where we pull the finished model out of the oven.
>
> **[9:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=576)** I'm going to switch over here to txt2img and change my model.
>
> **[9:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=579)** I've been building a bunch of different models.
>
> **[9:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=582)** I'm going to go to this one here which is basically the settings that I just showed you applied to the realistic vision model.
>
> **[9:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=589)** And now I'm just going to start typing in a prompt.
>
> **[9:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=591)** Let's start with just a simple prompt photo of mememe.
>
> **[9:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=595)** That's all I'm going to say.
>
> **[9:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=596)** We'll dial up five of them and see if we get anything.
>
> **[10:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=600)** We did. It worked and I like that hat.
>
> **[10:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=604)** So I'm plainly in here as is a whole lot of my nose.
>
> **[10:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=611)** Let's go try and create one of our Stonehenge images.
>
> **[10:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=614)** I'm going to grab the stock prompt for realistic vision.
>
> **[10:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=617)** This is, something went wrong.
>
> **[10:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=620)** I know that because it says something went wrong.
>
> **[10:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=623)** I had stored this earlier.
>
> **[10:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=625)** This is the stock prompt that comes off of the realistic vision page at Exhibit AI and all I need to do here, oh it added it to what was already there.
>
> **[10:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=634)** All I need to do here is change this subject to mememe.
>
> **[10:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=639)** And we're going to add Stonehenge in the background and we'll see what happens.
>
> **[10:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=648)** We're getting a pretty standard selection of images like we were getting before in images where my face is smaller it is scrambled in the way they usually are, but they they mostly look like me.
>
> **[11:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=661)** I think I was wearing a blue shirt in a in two or three of the images.
>
> **[11:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=665)** I probably need to go back and swap that out.
>
> **[11:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=667)** I don't want it to always be putting me in a blue shirt.
>
> **[11:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=669)** Let's add closeup.
>
> **[11:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=672)** It's mostly rendering pictures of Stonehenge.
>
> **[11:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=674)** So I think I should add some weight to me.
>
> **[11:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=675)** But the more important thing is, this is a pretty good model of me.
>
> **[11:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=680)** In one of the source photos I was wearing a hat and I think it's conspicuous now that in both of our patches I've had a hat on.
>
> **[11:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=686)** That's how significant every single thing and every single image is.
>
> **[11:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=691)** Here I'm wearing a leather jacket 'cause probably on three of the images I was wearing a leather jacket because I'd gotten to wherever I was going on my motorcycle.
>
> **[11:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=698)** So again, that's why having variation is really critically important.
>
> **[11:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=703)** Let's add some weight to me to see if we can improve the number of hits.
>
> **[11:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=708)** Whoops, we get off of me.
>
> **[11:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=711)** I'm just wanting to find out, am I really in this model in the way that the other things I'm used to are.
>
> **[11:56](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=716)** So far it's looking like, no, I'm still mostly getting Stonehenge and I don't know who that person is.
>
> **[12:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=722)** I mean, maybe we weren't doing any better with the other people.
>
> **[12:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=725)** We were trying to render, my mouth looks a little weird here to me and it's giving me helmet head all the time.
>
> **[12:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=732)** And maybe again, maybe my source images were I had been wearing my helmet.
>
> **[12:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=736)** I'm going to do one more batch and then we're going to move on to checking out something else.
>
> **[12:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=739)** I'm going to again, increase the weight of me.
>
> **[12:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=743)** I'm still not even getting half the images being me.
>
> **[12:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=747)** But anyway, the model is working and as I've said earlier when you're getting kind of the same results every time it's time to really fiddle with your prompt.
>
> **[12:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=753)** So I probably need to make some changes here to get me to show up more often.
>
> **[12:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=758)** But I want to show you something else here.
>
> **[12:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=760)** I am going to reload this page to wipe out all the prompts and everything, and I'm going to load a different model.
>
> **[12:47](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=767)** I modeled myself off of the standard 1.5 model.
>
> **[12:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=771)** Unfortunately, I could not find the full model.
>
> **[12:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=774)** I need to go do some more searching.
>
> **[12:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=775)** So I modeled this off of a pruned version.
>
> **[13:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=781)** Let's see how that fares.
>
> **[13:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=784)** So first of all, I don't think the model is as good.
>
> **[13:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=787)** I hope I don't really look this way.
>
> **[13:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=789)** It's distorting my face in weird ways and I've got some cybernetic implant here.
>
> **[13:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=795)** That's kind of cool.
>
> **[13:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=796)** I'd like to have more of that.
>
> **[13:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=796)** So that's modeling people in Dreambooth.
>
> **[13:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=800)** Again, if you're going to do a lot of this and you've got a fast video card, this is a great way to go when Dreambooth is working.
>
> **[13:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=805)** Hopefully things are going to settle down.
>
> **[13:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=807)** Again, it's open source things are moving quickly in the Automatic 1111 world right now.
>
> **[13:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=812)** There's no reason to think that the Dreambooth problems we've been having are going to continue.
>
> **[13:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/creating-models-with-dreambooth?u=76281980&t=816)** But again, if you don't have a fast video card if you don't think you're going to do that much modeling or maybe even if you are you just don't want to hassle with figuring things out on your own, you can stick with [astria.ai](https://astria.ai).

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (3), else. (2), yield (1), while. (1)
> **Definitions:** is a  (8), is an  (1)
> **CLI Commands:** find (5), make (3)
> **Env Vars:** gpu (4), vram (1), ram (1)
> **Versions:** 2.0 (1), 0.000002 (1), 0.000003 (1), 1.5 (1)
> **URLs:** [astria.ai](https://astria.ai) (3)
> **Prerequisites:** install (3)
> **Analogies:** just like (2)

#### Merging models
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=0)** - [Instructor] Automatic1111 has a built-in feature called Checkpoint Merger, which allows you to combine models.
>
> **[0:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=7)** So, if you watched Star Trek TV shows or movies in the '80s and '90s, you know that a Klingon has a particular look.
>
> **[0:16](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=16)** The model Klingon diffusion lets you render images of Klingons in Stable Diffusion.
>
> **[0:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=22)** So, I'm going to say, I've called up the model Klingon diffusion.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=25)** I have to use the word keyword Klingon.
>
> **[0:28](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=28)** So, I'm going to say Klingon in the desert, and I end up with pretty good Klingons, got all the weird brow ridge stuff and the hair, and they even give me a lot of Klingon clothing and weapons and things that, because it's Stable Diffusion, when they're holding them, they point in funny directions.
>
> **[0:51](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=51)** These look like images that actually could come from a Star Trek show 'cause it's a Klingon in the desert.
>
> **[0:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=55)** But I can also say Klingon in a shopping mall, and it does a pretty good job.
>
> **[1:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=65)** And yes, AI is one of the most significant developments so far in the 21st century, and I'm using it to render images of Klingons in shopping malls.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=73)** So, in addition to this Klingon model, I also, as you've seen, have a model that I have made of me.
>
> **[1:21](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=81)** I would hope the next question would be obvious, which is can I combine me with a Klingon?
>
> **[1:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=87)** The answer is yes.
>
> **[1:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=90)** I hope, the question after that is also obvious.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=91)** Is this a valuable use of my time?
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=93)** Absolutely.
>
> **[1:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=94)** So, I'm going to go to the Checkpoint Merger and what I do is I can pick up to three models.
>
> **[1:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=101)** So, I'm going to start with the custom me model.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=104)** Then, I'm going to choose Klingon diffusion, and I'm not going to use a third model.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=109)** I can give it a name if I want.
>
> **[1:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=110)** I'm going to take the default name that it creates and then I have this multiplier.
>
> **[1:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=114)** This determines how much the resulting model is going to pull from my primary model and how much it's going to pull from the secondary model.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=123)** If I set it halfway, I will get a model that's half me, half Klingon.
>
> **[2:07](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=127)** You can see here it says set to 0 to get model A.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=131)** I can tell you right now that if I use this setting, it's not going to work.
>
> **[2:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=134)** And I believe the reason it doesn't work is that the Klingon diffusion model was trained with lots of pictures of Klingons.
>
> **[2:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=140)** Klingon in this model is very strong.
>
> **[2:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=144)** If I use the Klingon keyword, I always get a Klingon.
>
> **[2:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=147)** It never gets confused and gives me just a dark-skinned person, with a wrinkled brow.
>
> **[2:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=153)** It's always a good, solid Klingon.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=155)** The model of me was trained with 22 images.
>
> **[2:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=160)** When I'm using it on its own, it's possible for it to screw up sometimes and not give me what looks like me.
>
> **[2:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=166)** It'll gimme some other guy with gray hair.
>
> **[2:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=168)** So when I do a 50/50 merge, it's basically like the Klingon diffusion model is the dominant gene.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=174)** Everything comes out Klingon.
>
> **[2:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=175)** I can't get anything that looks remotely like me.
>
> **[2:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=178)** So, you may need to do some experimenting here.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=180)** Fortunately, merging models doesn't take too long.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=183)** You may want to go all the way down to 0.05.
>
> **[3:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=186)** After you've set your weight, I've just been using the stock interpolation method of weighted sum.
>
> **[3:12](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=192)** This controls, as you can see from the little equations, how these are going to be merged together.
>
> **[3:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=197)** You can also choose no interpolation.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=199)** I've been finding weighted some.
>
> **[3:20](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=200)** I can't tell a difference between it and add difference, so I just keep it.
>
> **[3:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=204)** I can also choose whether I want a CKP file or a safetensors file.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=209)** I'm not planning on giving this model away, so I'm it, I'm not worried, it probably doesn't matter what I choose, and the rest of this, you can leave defaults.
>
> **[3:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=216)** Then you hit the Merge button When it's done, it installs the resulting model in your models folder and should update your menu.
>
> **[3:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=224)** If not, you need to hit the Reload button.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=228)** And here you can see I've done a few of them.
>
> **[3:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=230)** The names show how the models were combined.
>
> **[3:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=233)** So, 0.95 of me, 0.05 of Klingon, 0.75 of me, 0.25 of Klingon.
>
> **[3:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=238)** Most of these yielded pretty similar results.
>
> **[4:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=242)** So, let's call that up and we're going to change this to sks man because that's how I am referenced in the model of me.
>
> **[4:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=254)** If you watched the previous movies in this chapter you may think, I thought you were referenced as me, me, me.
>
> **[4:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=259)** This model that we're talking about is the one that I rendered using [astria.ai](https://astria.ai).
>
> **[4:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=265)** And in that model it's rendered as sks man or represented as sks man.
>
> **[4:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=269)** So, I'm going to say sks man as a Klingon in the desert.
>
> **[4:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=275)** So, it gave me Klingon clothes, it gave me Klingon boots, it gave me a Klingon thing.
>
> **[4:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=281)** It's done a good job with the desert, but it's just kept me.
>
> **[4:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=283)** it was smart enough to gimme sunglasses and it it squared them off a little bit so they look a little more Klingon.
>
> **[4:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=289)** But basically outfit change is all I can get from these models when I combine them, which is actually pretty cool.
>
> **[4:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=295)** If I wanted an easy way to put me into some tougher looking gear, this is a way to do it.
>
> **[5:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=301)** But I did manage to finally get myself looking a little Klingon, and I think that was with this one, 0.6 of me, 0.4 of Klingon, and I can start to get some brow ridges.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=314)** I like that it keeps the glasses in a lot of them, in some of them I'm an old gray-haired Klingon and some I'm not, but it works.
>
> **[5:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=322)** Klingons don't wear glasses and the model of me, it's difficult to get the glasses off because they were in every frame of my source images, so I probably would need to build a model of me without glasses.
>
> **[5:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=336)** So, I'm sure you can see the huge value of being able to merge yourself with Klingons.
>
> **[5:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=340)** But Checkpoint Merger has some other uses as well.
>
> **[5:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=343)** Here's a model called Ink Punk Diffusion, which gives you this cool illustrated style.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=349)** There is a textural embedding that I can use to get this same style.
>
> **[5:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=353)** It works well.
>
> **[5:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=354)** If you search Civitai for Ink Punk, you'll find it.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=358)** I merged the model of me with Ink Punk Diffusion and was able to get a couple of things that have me rendered in this style.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=365)** So, Checkpoint Mergers can also be used if you're looking to get a specific thing into a specific style.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=371)** Many of the models that you see on Civitai and Hugging Face are mergers that people have come up with.
>
> **[6:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=378)** They fine tune them by very carefully setting the multiplier and maybe adding some additional material.
>
> **[6:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=384)** You'll often see in the description references to source models that were used and combined to produce whatever you're looking at.
>
> **[6:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=391)** Easy to do, quick to render.
>
> **[6:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/merging-models?u=76281980&t=392)** Checkpoint Mergers are definitely something to play with.

> [!info]- Semantic Content
>
> **Versions:** 0.05 (2), 0.95 (1), 0.75 (1), 0.25 (1), 0.6 (1)
> **Code Keywords:** this, (1), let (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **URLs:** [astria.ai](https://astria.ai) (1)
> **Env Vars:** ckp (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Training a model using an object
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=0)** - [Instructor] I poked around online and found this model of Stonehenge.
>
> **[0:04](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=4)** Unfortunately, it was not designed to be permanently assembled in any way, so I put the base down on a piece of cardboard and stuck it there with some museum wax and then used museum wax to get all of the stones in place.
>
> **[0:17](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=17)** The base that the model had was round and I've been wanting my pocket Stonehenge base to be rectangular.
>
> **[0:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=23)** So I trimmed the cardboard and filled in the extra cardboard, colored in the extra cardboard with a green Sharpie and then tightened up the edges with some black electrical tape.
>
> **[0:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=34)** Now this is not a great looking model but I'm not a professional model maker and my goal here is not necessarily to create a great model because I don't have the skillset for that, it's to find out can I get Stable Diffusion to model a thing.
>
> **[0:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=50)** We've seen what it's like to model a person, so I took a bunch of pictures of it, being careful to have it in a different place with a different background for most every shot.
>
> **[1:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=60)** I also made sure to get some different lighting.
>
> **[1:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=63)** I started out shooting indoors so I was getting a lot of soft light so I went outside so I could get some hard shadows and things.
>
> **[1:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=68)** With all those ready, I went straight into DreamBooth just as if I was going to model a person.
>
> **[1:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=74)** So for a prompt, I said photo of pocketstonehenge, all one word.
>
> **[1:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=78)** That will be my token that should summon this model.
>
> **[1:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=82)** And for a class, I thought about putting prop but I wasn't sure if Stable Diffusion's language model really knows that.
>
> **[1:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=89)** So I just stuck with object.
>
> **[1:31](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=91)** And then I said about letting it go.
>
> **[1:33](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=93)** It took a kind of normal amount of time to model just as if I was modeling a person.
>
> **[1:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=98)** And now here I am in Automatic 1111 with my custom pocket Stonehenge model loaded.
>
> **[1:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=103)** Let's see what it did.
>
> **[1:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=104)** I'm just going to say photo of pocketstonehenge.
>
> **[1:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=109)** Bump my batch up to four or five.
>
> **[1:53](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=113)** And wow, these are some bad looking Stonehenge models.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=118)** This is fantastic.
>
> **[1:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=118)** What I mean by that is the renderings are very accurate.
>
> **[2:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=123)** They are accurate renderings of my bad looking Stonehenge models.
>
> **[2:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=126)** So I think it's safe to say these bad renderings are a real success.
>
> **[2:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=131)** This shows that yeah, you can take a thing, model it, and then reference it just like any other object.
>
> **[2:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=138)** So now let's try working it into some actual images that we want to use.
>
> **[2:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=142)** I don't know that the end results are going to be really any better than all that photobashing I was doing, but this is much easier now that I've got it modeled, I can just reference with this one word instead of having to go out and cobble together a photobash.
>
> **[2:35](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=155)** So let's say man in business casual clothing,
>
> **[2:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=164)** conference room, and let's say he's holding pocket Stonehenge, or in this case stonghenge, that's not right.
>
> **[2:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=174)** Okay, I'm not going to do much else besides that.
>
> **[3:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=180)** Yeah, okay, these didn't work.
>
> **[3:03](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=183)** That's the closest one to the actual model.
>
> **[3:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=185)** Here you can see some of those puzzle pieces and the stones look right, but this isn't working.
>
> **[3:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=191)** I'm going to simplify this by taking out holding pocketstonehenge, and let's just get a man in a conference room.
>
> **[3:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=198)** This is good.
>
> **[3:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=199)** Now I can start using some of these with ControlNet.
>
> **[3:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=202)** So I'm going to save this first one.
>
> **[3:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=205)** Now I can upload this from that image I saved.
>
> **[3:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=209)** I can also just drag this image over here and so we're going to use this guy to get a pose.
>
> **[3:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=220)** I'm going to leave my default set here.
>
> **[3:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=222)** Keep my prompt.
>
> **[3:43](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=223)** Let's see what we get now.
>
> **[3:45](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=225)** Good. So that's consistently getting me some stuff.
>
> **[3:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=228)** Let's say holding pocketstonehenge.
>
> **[3:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=235)** I had to make one change here.
>
> **[3:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=237)** I had it as hooding pocketstonehenge, and the guy came out wearing a hoodie, so I corrected that to holding pocketstonehenge and got these.
>
> **[4:06](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=246)** There's not a hint of a pocket Stonehenge anywhere.
>
> **[4:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=250)** It is trying to get him to hold something.
>
> **[4:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=253)** As you've already seen, getting Stable Diffusion to render people interacting with objects is difficult.
>
> **[4:19](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=259)** I think maybe if I shot images of 20 to 30 different people holding the pocket Stonehenge in different ways, added those to my training set, retrained, I might be able to have some luck getting images of people holding a pocket Stonehenge.
>
> **[4:36](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=276)** I don't have access to 20 to 30 people, different people, and I would want them to be different.
>
> **[4:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=282)** And I would want a mix of races and lots of clothing and so on and so forth.
>
> **[4:46](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=286)** But if you worked in an office, maybe that's not so complicated.
>
> **[4:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=288)** So I'm going to try a different approach.
>
> **[4:50](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=290)** I think what's going to happen here is we're going to have to solve this problem with Inpaint.
>
> **[4:54](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=294)** So let's think of something that's small and flat that maybe it does know how to show someone holding.
>
> **[5:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=300)** I'm going to say a man in business casual clothing holding a pie in a conference room.
>
> **[5:08](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=308)** That's working better.
>
> **[5:09](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=309)** And man, this guy likes his pie.
>
> **[5:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=310)** That's a big pie.
>
> **[5:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=311)** Let's go with this one.
>
> **[5:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=313)** And he's smiling.
>
> **[5:14](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=314)** That's nice.
>
> **[5:15](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=315)** So I'm going to take this image and send it to Inpaint, and I'm going to mask this out.
>
> **[5:23](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=323)** Four parameters.
>
> **[5:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=324)** I want to fill it with latent noise.
>
> **[5:26](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=326)** I don't want any hint of pie in this rendering.
>
> **[5:29](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=329)** I want it to start with noise and generate a pocket Stonehenge from there.
>
> **[5:32](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=332)** I want only masked.
>
> **[5:34](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=334)** I'm going to keep the stock sizes.
>
> **[5:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=337)** It may be that we need to turn those up.
>
> **[5:38](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=338)** We'll see.
>
> **[5:39](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=339)** Then for my prompt I'm just going to say pocketstonehenge, all one word.
>
> **[5:49](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=349)** Crank up the batch count.
>
> **[5:55](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=355)** And there we go.
>
> **[5:57](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=357)** That's pretty good.
>
> **[5:58](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=358)** There's some bits of trouble with the interface there.
>
> **[6:02](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=362)** So that might just mean painting my mask a little smaller.
>
> **[6:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=365)** But I think this one looks good, that I could easily touch up in Photoshop.
>
> **[6:11](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=371)** Now his hands are messed up, so maybe I'd want to go in and in paint some hands work some more with maybe extending the mask all the way out to here so that it completely re-renders the hands and the pocket Stonehenge.
>
> **[6:22](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=382)** But now I've got what really does look like my model except that it's not rectangular.
>
> **[6:27](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=387)** I could again fix that in Photoshop or I could maybe have him hold something rectangular instead like a book or a pizza box or something like that.
>
> **[6:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=397)** So I think Inpaint is going to be the key to using this little pocket Stonehenge model.
>
> **[6:42](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=402)** The important thing though, is yes, you can train objects.
>
> **[6:44](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/training-a-model-using-an-object?u=76281980&t=404)** So if you have already built a prototype of something that you're wanting to include in imagery, maybe something that's got a complex design that you can't photobash together as easily as the pocket Stonehenge, then this is a great way for you to take some quick images throw 'em in Dream Booth, and end up with something that the AI can actually render for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), class, (1), interface (1), throw (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** it's like (1), just like (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### What's next
> [LinkedIn Learning](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=0)** - I've authored a lot of courses here at LinkedIn Learning, and I have to say that this was one of the most difficult simply because Stable Diffusion is changing so quickly.
>
> **[0:10](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=10)** When I started writing this course, ControlNet did not exist, which means Openpose editing did not exist and so on and so forth.
>
> **[0:18](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=18)** Stable Diffusion is, and will remain, a moving target for anyone who's trying to learn how to master it.
>
> **[0:25](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=25)** The good news is that what we've covered in this course likely will not change.
>
> **[0:30](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=30)** While some tools may be replaced by others, the underlying neural net structure will likely stay constant for a long time, meaning that most of what you've learned here will stay relevant.
>
> **[0:40](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=40)** What might change?
>
> **[0:41](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=41)** For sure, Stable Diffusion's official data models will continue to improve, and those improvements will include better photorealism, better ability to render text, maybe the ability to render vector-style graphics, and maybe most importantly, the ability for people out in the world to have their images removed from the source training set.
>
> **[1:01](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=61)** In addition to being more fair to creators, this also removes the threat of Stable Diffusion going away because of legal action around this issue of the rights associated with training images.
>
> **[1:13](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=73)** My recommendation to you if you want to stay up to speed with Stable Diffusion is to subscribe to some good YouTube channels or other news sources that stay on top of new developments and take a look at them from time to time.
>
> **[1:24](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=84)** Stable Diffusion's creators would definitely like the two series models to be the source of all future development, so it's safe to assume that a Version 3.0 Series will have more in common with two series models than with 1.5 models.
>
> **[1:37](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=97)** I've stressed using 1.5 models in this course, but it would be in your long-term best interest to gain some familiarity with two series models, so that you will be better prepared for what comes next.
>
> **[1:48](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=108)** That said, the bulk of the user community development in Stable Diffusion is around 1.5 models, so the cool models will probably continue to use 1.5 as their basis for a long time to come.
>
> **[2:00](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=120)** As with all creative endeavors, the best way to get better at Stable Diffusion is through practice.
>
> **[2:05](https://www.linkedin.com/learning/stable-diffusion-tips-tricks-and-techniques/what-s-next?u=76281980&t=125)** Hopefully, you've already seen that it gets easier to use the longer you use it, and so you will understand when I say, "Stop watching me and go start making some images!"

> [!info]- Semantic Content
>
> **Versions:** 1.5 (4), version 3 (1)
> **Code Keywords:** continue (2)
> **Speakers:** - i (1)


## Instructor

- [[Ben Long]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence for Design
- Stable Diffusion
- Artificial Intelligence (AI)

## Path Context

### In [[Applying Generative AI as a Creative Professional]]
← [[Midjourney- Tips and Techniques for Creating Images]] | **4 of 7** | [[Adobe Firefly Essential Training (2024)]] →

## Appears In

- [[Applying Generative AI as a Creative Professional]]

## Related Courses

_Courses sharing skills:_

- [[AI Foundations- Ideating and Prototyping]] — Artificial Intelligence (AI), Artificial Intelligence for Design
- [[UX for AI- Design Practices for AI Developers]] — Artificial Intelligence (AI), Artificial Intelligence for Design
- [[Finding Creativity in the Age of AI]] — Artificial Intelligence (AI), Artificial Intelligence for Design
- [[Leveraging AI in Adobe Photoshop and Creative Cloud (2023)]] — Artificial Intelligence (AI), Artificial Intelligence for Design
- [[Adobe Firefly Essential Training (2024)]] — Artificial Intelligence (AI), Artificial Intelligence for Design

---

[↑ Back to top](#)