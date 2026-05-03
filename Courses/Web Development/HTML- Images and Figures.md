---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: html-images-and-figures
url: "https://www.linkedin.com/learning/html-images-and-figures"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 5/9/2018
learners: 23509
skills:
  - HTML
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG795roMFBeog/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567113452295?e=2147483647&amp;v=beta&amp;t=7QDpclWesRAW6rEe6HEyXtR9vLpfPcx9Y20LGJzBVCI"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[HTML and CSS- Linking]]'
next_courses:
  - '[[HTML- Tables]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":4,"total":11,"prev":"HTML and CSS- Linking","next":"HTML- Tables"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML-%20Images%20and%20Figures.md)

![HTML: Images and Figures](https://media.licdn.com/dms/image/v2/C4E0DAQG795roMFBeog/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567113452295?e=2147483647&amp;v=beta&amp;t=7QDpclWesRAW6rEe6HEyXtR9vLpfPcx9Y20LGJzBVCI)

# HTML: Images and Figures

> The web offers more and more ways to make your graphics accessible, reliably placed, and a smooth fit for a variety of different screens. It's not just IMG anymore. In this course, join J. David Eisenberg as he provides a comprehensive exploration of the many ways to present graphics on web pages. Learn about different image formats—including GIF, PNG, and JPEG—and discover how to adjust and style

> [LinkedIn Learning](https://www.linkedin.com/learning/html-images-and-figures) | 1h 2m | Intermediate | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Setting up your computer](#setting-up-your-computer)
- [**1. Image Essentials**](#1-image-essentials) (4 videos)
  - [Using the img element and src attribute](#using-the-img-element-and-src-attribute)
  - [Accessibility: alt and title attributes](#accessibility-alt-and-title-attributes)
  - [Image size: Width and height](#image-size-width-and-height)
  - [Obtaining images](#obtaining-images)
- [**2. Image Formats**](#2-image-formats) (4 videos)
  - [Image format overview](#image-format-overview)
  - [GIF and PNG: The format for line art](#gif-and-png-the-format-for-line-art)
  - [JPEG: The format for photos](#jpeg-the-format-for-photos)
  - [SVG: The format for vector line art](#svg-the-format-for-vector-line-art)
- [**3. Images and CSS**](#3-images-and-css) (6 videos)
  - [Borders, padding, and spacing](#borders-padding-and-spacing)
  - [Alignment](#alignment)
  - [Challenge: Images and text](#challenge-images-and-text)
  - [Solution: Images and text](#solution-images-and-text)
  - [Special effects](#special-effects)
  - [Background images](#background-images)
- [**4. Responsive Images**](#4-responsive-images) (7 videos)
  - [Resolution and pixel density](#resolution-and-pixel-density)
  - [Handling pixel density](#handling-pixel-density)
  - [Using srcset and sizes](#using-srcset-and-sizes)
  - [Testing screen resolutions](#testing-screen-resolutions)
  - [Challenge: Use srcset](#challenge-use-srcset)
  - [Solution: Use srcset](#solution-use-srcset)
  - [Art direction: The picture element](#art-direction-the-picture-element)
- [**5. Figures**](#5-figures) (2 videos)
  - [Using figure and figcaption elements](#using-figure-and-figcaption-elements)
  - [Autonumbering figures with CSS](#autonumbering-figures-with-css)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/html-images-and-figures/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-images-and-figures/welcome?u=76281980&t=0)** - [J. David] We can't imagine a web without images. But the very first version of [[HTML]] in 1992 didn't include images at all. HTML version two had support for basic images and its been onward and upward ever since. Hi, I'm David Eisenberg and Welcome to HTML Images and Figures. This course will start with the fundamentals of putting an image on the webpage. You'll learn about different image formats available to you. How to use styles to position images. And do special effects such as rotation. We'll also explore using the principles of responsive design to make sure your image looks great. No matter what kind of device its viewed on. The best thing about learning these techniques is being able to get images and text to work together perfectly so your webpage looks exactly the way you want. Now, let's get started learning HTML Images and Figures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** html (4)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [j (1)

#### [What you should know](https://www.linkedin.com/learning/html-images-and-figures/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/what-you-should-know?u=76281980&t=1)** - [Instructor] In order to successfully complete this course, you need to know the essentials of [[HTML]]. You need to know that an HTML element consists of an opening tag, a closing tag, and the content between. HTML opening tags can have attributes which consist of an attribute name and the attribute value. You should know how to use CSS by specifying an element to be styled, the property you want to modify, and the value for that property. You should also be able to specify where a file is in your project's structure by using a path. If you need a refresher on these concepts, look for the course [[HTML Essential Training]] in the Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** html (4), css (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your computer](https://www.linkedin.com/learning/html-images-and-figures/setting-up-your-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-images-and-figures/setting-up-your-computer?u=76281980&t=0)** - [Instructor] You need only two things to set up for this course, a web browser and a text editor. You'll want a web browser that has good support for developers. I recommend either [[Google]] Chrome or Firefox Developer Edition. You'll also need a text editor. If you don't already have a favorite text editor, you can use a simple yet powerful one like Notepad++ for [[Windows]] or Geany, which works on Window, Macintosh and [[Linux]]. Or you can go with an integrated development environment, like Atom or Visual Studio Code, which also work on Windows, Macintosh and Linux. All of these are free to download and use. In this course, I am using Firefox and Geany on a [[Windows 10]] machine, but you'll be able to follow along with the software of your choice. If you have access to the exercise files for this course, each chapter contains a folder for each video. In the specific video folder, you'll find begin and end. The begin folder contains the [[HTML]] file and images for you to follow along at the start of the video, and the end folder shows the state of the files at the end. Also in the exercise files folder, we've included the file links.html, which has all the links that we'll refer to throughout this course. Now that you know what you need to get set up, let's start working with images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (2), [[HTML]] (2), [[Google]] (1), [[Windows 10]] (1)
> **Tools:** firefox (2), atom (1), visual studio (1)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** set up (2)
> **File Paths:** links.html (1)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)


### 1. Image Essentials

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the img element and src attribute](https://www.linkedin.com/learning/html-images-and-figures/using-the-img-element-and-src-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/using-the-img-element-and-src-attribute?u=76281980&t=1)** - [Instructor] Here are the essentials of adding an image into an [[HTML]] page. Use the image element with the source, SRC attribute that gives the path to the image file. The image element is an empty element. It doesn't have any content and it doesn't have a losing slash image tag. In some XHTML5 documents, which is flavor of HTML5 based on something called XML you may see a notation like this with a slash greater than at the end. This is the XML way of saying this is a beginning and ending tag all wrapped up into one. Here's a diagram of the project structure which you will find in the exercise files that accompany this course. The folder will contain the necessary HTML and possibly CSS files along with a directory named images that will contain any of the images needed for the project. In this case, we're putting the image element into the index.html file so the correct relative path to the image will be images/teddybear.jpg. Here's the HTML for the web page. In the body of the document, we have a paragraph that will eventually have an image in it. This is what it looks like in the browser. And this is the image that we want to put in the web page. So, we'll type less than img src, which is the source and in double quotes the path to image, images/teddybear.jpg. And then close the tag. We'll save that,
>
> **[1:33](https://www.linkedin.com/learning/html-images-and-figures/using-the-img-element-and-src-attribute?u=76281980&t=93)** come back to the browser, the HTML page and reload. And there's the image. Notice that the image does not automatically start on a new line. That's because image is an inline element and inline elements don't start a new line. If we do want the picture on the line all by itself, close the paragraph after the first line, start a div, end the div after the image and then start a new paragraph for the last line of text. Save the file, go back to the browser, reload and now the picture's online all by itself and that's the essentials of putting images into a web page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **Env Vars:** html (4), xml (2), src (1), xhtml5 (1), html5 (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** picture (2)
> **File Paths:** index.html (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### [Accessibility: alt and title attributes](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980&t=1)** - [Instructor] What happens if some of your users are blind or visually impaired? Let's take another look at the web page. This is what someone using a screen reader will hear.
>
> **[0:10](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980&t=10)** - [Computer] Here's a cute picture to start this course. Image. Hope you like it.
>
> **[0:15](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980&t=15)** - [Instructor] The only thing it read for the image was the [[Microsoft Word|word]] image. Not very helpful for the user to know what was in the image, was it? To solve this problem, you use the alt attribute. Alt stands for alternate text. The general rule for all text is to make a description for the people who can't see the screen. Sometimes it helps to pretend you're talking to someone on the phone and describing the picture to them. Let's add an alt attribute to the image of the teddy bear. In this case, the alt will equal a brown teddy bear with plaid scarf and stocking cap holding pink flowers. We'll save that, go back to the browser and reload. It doesn't show up on the screen but someone who's using a screen reader will hear this.
>
> **[1:09](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980&t=69)** - [Computer] Here's a cute picture to start this course. Brown teddy bear in plaid scarf and stocking cap holding pink flowers image. Hope you like it.
>
> **[1:18](https://www.linkedin.com/learning/html-images-and-figures/accessibility-alt-and-title-attributes?u=76281980&t=78)** - [Instructor] That's much better. Here are guidelines for alternate text in addition to describing the image. Since the screen reader tells users that it's an image, you don't have to repeat that. Don't repeat what the text says. If I had mentioned a brown teddy bear in the text, I could omit the word brown in the alt text and it's always okay to use a long description to make sure the person who can't see the screen understands what the image really is. Yes, it is a lot of work to add alt attributes to all your images but there are good reasons to do so. If you're working for a US federal agency, your website must be accessible. It's the law. By making your site accessible, you increase the number of people who can use it effectively. For commercial sites that goes straight to the bottom line and most important, it's the right thing to do. Think about it. If you were the visually impaired person, wouldn't you appreciate someone making their site accessible to you? The next question is when don't you need an alt attribute? If an icon is next to text with the same meaning or if an image is purely decorative, use an empty string for the alt attribute. You may also see some sites using the title attribute to specify text that appears in a tool tip when you hover over an image. Many screen readers will ignore the title attribute altogether and some devices such as mobile phones don't have any ability to hover. So, I recommend that you avoid using this attribute. Using the alt attribute with your images will make your site both more accessible and more professional.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Speakers:** - [instructor] (3), - [computer] (2)
> **Analogies:** picture (3), such as (1)
> **CLI Commands:** make (3)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** go back to (1)
> **Best Practices:** general rule (1)

#### [Image size: Width and height](https://www.linkedin.com/learning/html-images-and-figures/image-size-width-and-height?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/image-size-width-and-height?u=76281980&t=1)** - [Instructor] Sometimes an image won't be the size you'd like. Here's a webpage that shows a picture of cherry blossoms, but I'd like the image to be a bit smaller. I can change its display size by using the width and height attributes on the image element. First, I need to find out how big the image is right now. I can do that by right-clicking and looking at the image info. This image is 533 pixels wide and 400 pixels high. So let's say I wanted to display as 300 pixels high instead. I can go into the editor and add the height attribute to the image element by saying height equals 300. Just put the number as the attribute value. Don't use PX, that's for style sheets. When you save and reload in the browser, you'll see that the image is now smaller. I didn't have to specify the width. The browser made sure that the picture stayed in proportion. However, it's always a good idea to specify both the width and height. This lets the browser figure out how much space the image will need, and it will pre-allocate it before it loads in the image. In this case, the proportional width is 400. So when I save and reload, everything will look the same. Although you could use width and height to stretch or squash an image out of proportion, that's not what those attributes were intended for, so don't do that. Remember that the area of a picture is its width times its height, so if you specify half the width
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/image-size-width-and-height?u=76281980&t=94)** and half the height, the resulting image is only one-fourth as large as the original. If you really want a picture that displays as half the screen area of the original, you have to multiply the width and height by 70%. In the general case, the scaling factor for width and height is the square root of the area. Here's the original at 70% scale, which is approximately half the total area of the original. However, width and height are not always the answer. Let's go back to our [[HTML]] and add a close-up image of the cherry blossoms picture. So I'll start a new paragraph, and this image will have a source of images, cherry_blossoms_closeup.jpg, and its alt attribute will be closeup of cherry blossoms with pink centers. And I'll close the paragraph. The picture I'm referencing here is a 3.4 megabyte file with dimensions of 3264 by 2448 pixels, so when I save and come into the browser and reload, I get the full sized picture, and that is way too large. Now, your first instinct might be to use width and height to resize it to the same height as the other image. So let's set its height also to be 300. Save and reload, and everything looks good.
>
> **[3:10](https://www.linkedin.com/learning/html-images-and-figures/image-size-width-and-height?u=76281980&t=190)** Let's reload again. And you'll notice, there's a flash for the bottom picture but not for the top picture. That's because the server downloads all 3.4 megabytes of the large picture and the browser is doing the resize. That takes a little bit of time. So if you're on a mobile device, that little picture costs you 3.4 megabytes of data. What's the solution to this problem? Use an image editor program, like the preview app for Macintosh, Paint for [[Windows]], or, as in this screenshot, the GNU image manipulation program, which works on Windows, Mac, and [[Linux]]. I've used it to resize the picture and named it cherry_blossoms_closeup_small.jpg. It's a lot smaller, only 76 kilobytes instead of 3.4 megabytes. I'll go to the webpage and I'll reference that new smaller picture instead. Save, come back to the browser, and now, when I reload, there's no flash, because I'm only downloading 76 kilobytes instead of 3.4 megabytes. Not only does this improve the performance of your webpage, your mobile uses will thank you for keeping their data charges down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[HTML]] (1), [[Linux]] (1)
> **Analogies:** picture (13)
> **Versions:** 3.4 (5)
> **Code Identifiers:** cherry_blossoms_closeup (1), cherry_blossoms_closeup_small (1)
> **Env Vars:** html (1), gnu (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Obtaining images](https://www.linkedin.com/learning/html-images-and-figures/obtaining-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/obtaining-images?u=76281980&t=1)** - [Instructor] Before we go further, let's address the subject of where you get images for your websites. If you needed a photo of the city of Tokyo, you might be tempted to go [[Google]] Images, search for an image you like and right click to save that image. No, don't do that. Just because an image is on the internet doesn't mean it's free for you to use. You may well be violating the owner's copyright and that's illegal. Okay, no problem. You'll put the URL for the image as the source in your image element, right? No, don't do that. That's stealing the other person's server resources, their bandwidth and that's illegal too. So, what's the solution? If you're working on a commercial website, set aside money in your budget to hire a professional photographer or artist or buy stock photos. Here are a few of the better known stock photo sites. Let's take a look at iStock because it's also important you read the license agreement to know where and how you can use the images. If you don't have a budget and need something free, you can go to sites such as the ones shown here. Again, make sure you read the license terms for these images as well. You can use a search engine such as Google Images. If you use its Tools menu to select usage rights and then find only pictures that are labeled for reuse with or without modification. Or you can search a site such as Flickr for images licensed for reuse. Be sure to read the Creative Commons page at [flickr.com/creativecommons](https://flickr.com/creativecommons).
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/obtaining-images?u=76281980&t=94)** If you're using free photos or art, make sure you give the artist credit somewhere on your website and that's the right way to get images for your pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (3)
> **Code Identifiers:** istock (1)
> **URLs:** [flickr.com](https://flickr.com) (1)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 2. Image Formats

[↑ Back to Table of Contents](#table-of-contents)

#### [Image format overview](https://www.linkedin.com/learning/html-images-and-figures/image-format-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/image-format-overview?u=76281980&t=1)** - [Instructor] At this point you know how to put images into your web pages. In this chapter we're going to discuss types of images, the file types that web browsers use and how to choose the correct type of image. The first type of image is line art which consists of large areas of flat colors as in the paintbrush, or perhaps with some gradients as in the middle image. This doesn't mean that line art can't have detail in it as you see in the image of the globe and plane. In all these cases it's pretty clear that you have a drawing as opposed to something that's clearly a photograph. The file formats optimized for line art are GIF, PNG and SVG. The file format created for photos is JPEG. We'll go into detail further in the chapter. Part of the optimization that image files do is called compression. For example consider the image of the teddy bear. It's 349 by 400 pixels. If each pixel takes up three bytes one each for the amount of red, green and blue in the color, that's a total or 418,800 bytes. Similarly the paint brush as 219 by 300 need 197,100 bytes, but because the file format is compressed the actual file sizes are much much smaller, 15% and 4% of their uncompressed size. Now that you know what the formats are we're ready to go into them in more detail.

> [!info]- Semantic Content
>
> **Env Vars:** gif (1), png (1), svg (1), jpeg (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [GIF and PNG: The format for line art](https://www.linkedin.com/learning/html-images-and-figures/gif-and-png-the-format-for-line-art?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/gif-and-png-the-format-for-line-art?u=76281980&t=1)** - [Instructor] Let's start by investigating line art formats. The Graphics Interchange Format pronounced GIF has a long history. GIF's can have only 256 colors which is fine for the time when they were invented. Monitors usually didn't support more colors. You could specify one color as the transparent color and those pixels would not display. In 1989 animation was added to the GIF format by allowing multiple frames in one file along with timing information on when to display them. While GIF is good, it has drawbacks. At the time the web took off, the 256 color limit was not enough for the much more capable monitors and the algorithm was patented which meant people had to pay royalties to use the GIF format or face legal action when the patent wasn't forced. In 1996 a group of graphic experts came up with Portable Network Graphics, a patented free format that allows more than 16 million colors with varying transparency on a pixel by pixel basis. It does not however have an animation capability. Here's the general idea of how compression works with GIF and PNG. Consider this series of pixels. What we can do is change it to a series of counts and colors. Three blue pixels followed by two green, then four red pixels. This method called run-length encoding is lossless. All the information in the original is stored precisely in the compressed version so when uncompressed the image will look exactly as the original did. The [[Algorithms]] used by GIF and PNG are significantly more complex than the one showing here but the idea is the same. With PNG, ping, you can adjust
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/gif-and-png-the-format-for-line-art?u=76281980&t=94)** the amount of compression that the algorithm uses. Here are the [[Statistics]] for compression of the image at the left. The difference in amount of time needed to uncompress is negligible, so you may as well use the best compression all the time. Which format should you use? If your line art needs animation you need GIF, otherwise use PNG, it's file sizes are comparable to GIF and it's far more versatile and powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Statistics]] (1)
> **Env Vars:** gif (9), png (4)
> **Speakers:** - [instructor] (1)

#### [JPEG: The format for photos](https://www.linkedin.com/learning/html-images-and-figures/jpeg-the-format-for-photos?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/jpeg-the-format-for-photos?u=76281980&t=1)** - [Instructor] Now let's turn out attention to photographic images. The JPEG format stands for the name of the group that designed it. The Joint Photographic Experts Group. This format has been around since 1992. Like portable network graphics, it allows an image to have over 16 million colors. 256 levels each for red, green, and blue. Unlike the line art formats, JPEG doesn't allow animation or transparent pixels. The compression JPEG uses is very different from PNG or GIF. Let's look at a closeup of part of a photo. All the colors there just different enough that the method that line art uses for compression won't work here. JPEG instead analyzes the pixels in groups and uses a mathematical formula to find a set of factors that best represent those pixels. This formula's designed around the way your eye perceives colors. The JPEG file stores the factors, not the individual pixels. When you display the image, the browser plugs the factors back into the formula and creates a set of pixels, because the formulas can't be a hundred percent accurate, some of the original information is lost. The result pixels are not quite the same as the original ones. This is called lossy compression. Most image editors let you specify how well the formula should represent the pixels. Here are closeups of the same area of a picture stored at high, medium, and low quality. The better the quality, the bigger the file size. If you're going to be displaying on monitors with high resolution in pixel density, choose the highest quality you can. And that's how JPEG works.

> [!info]- Semantic Content
>
> **Env Vars:** jpeg (6), png (1), gif (1)
> **Definitions:** stands for (1), is called (1)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [SVG: The format for vector line art](https://www.linkedin.com/learning/html-images-and-figures/svg-the-format-for-vector-line-art?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/svg-the-format-for-vector-line-art?u=76281980&t=1)** - [Instructor] The last format we'll discuss is one that's ideal for line art, SVG Scalable Vector Graphics. GIF, PNG and JPEG images are in Raster format. They treat the images a grid of individual pixels. If you take a PNG file and enlarge it by a factor of 300 percent, the browser has to expand the pixels, which gives the image a jagged, ugly look. SVG, however, doesn't store pixels. It stores images as a series of shapes to be drawn. The file consists of commands that tell the browser what geometric shapes to draw. It looks a lot like [[HTML]]. This example tells the browser to draw an ellipse and a rectangle with the specified positions, dimensions and styles. Here's what the enlarged portion of the airplane looks like when the SVG version of the drawing is enlarged. The browser is drawing the shapes with crisp edges no matter what sizes they're scaled to. That's the scalable part of SVG. This makes SVG a great choice for drawing icons and logos that have to look good at any size. You don't have to learn how to write SVG by hand. You can get programs that let you draw directly whatever you want. Here are a few choices. Adobe Illustrator as a commercial product. Or as Inkscape, Vectr, and Gravit Designer are all free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** svg (6), png (2), gif (1), jpeg (1), html (1)
> **Speakers:** - [instructor] (1)


### 3. Images and CSS

[↑ Back to Table of Contents](#table-of-contents)

#### [Borders, padding, and spacing](https://www.linkedin.com/learning/html-images-and-figures/borders-padding-and-spacing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/borders-padding-and-spacing?u=76281980&t=1)** - [Instructor] Let's look at how to use CSS, [[Cascading Style Sheets (CSS)|Cascading Style Sheets]], to change how your images are displayed. Here's the markup for three pictures of eagle-themed art in Washington, D.C. The image elements are on lines 22 through 27. Here's what it looks like in the browser. Since image is an inline element, all the images show up on the same line. You might notice that it's difficult to see where the top edge of the right-hand image is because its background color is very close to white. Putting borders on all the images will solve that problem. You can use this shorthand CSS to set the border width, style, and color all at the same time. The width can be specified as a CSS length specifier, such as pixels, points, 1/72 of an inch, inches, millimeters, or em units, which is a way of saying the current font size. The border style can be any one of the ones shown here. The link at the bottom of the page will show you what each one of them looks like. And the border color can be specified in a number of different ways, a color name, a hex code, red, green, blue values from zero to 255, or red, green, blue percentages. In this case, I want all the images to have a border, so I'll put that in the style sheet at the head of the document. I want every image to have a border that's four pixel, double line, in black, on all four sides. I save that, and, when I reload, there it is.
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/borders-padding-and-spacing?u=76281980&t=94)** Now the boundaries of the image are very clear. The images are a little bit too close to one another, so I might want to put a margin on the left and right of the center picture to separate it more from the others. You can set the margins individually, as in the first four examples, or set them all at once, as in the last two examples. The length can be replaced by any CSS length, pixels, points, or other units of your choice. I'll put a style directly on this image. And I'll set a margin of zero on the top and bottom, and, in this case, I don't need to put units because zero of anything is zero, and 10 pixels at the left and right. I save it, come back into the browser, and, when I reload, now I have a little bit more separation. The margin that I specified is the space outside the borders. You can also specify padding, the space inside the borders, in a way similar to margins. Again, the top four show you setting the padding on each side individually. The last two show setting the padding on all four sides at once. In this case, I want all the images to have a padding of four pixels, so that's going to go into the internal style sheet. So every image will have a padding of four pixels. And, when I show it in the browser, it has a little bit more spacing all around the image. Adjusting spacing and using borders judiciously is a good way to give your design a more professional look.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cascading Style Sheets (CSS)|Cascading style sheets]] (1)
> **Env Vars:** css (4)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (1), picture (1), similar to (1)
> **File Paths:** d.c (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Alignment](https://www.linkedin.com/learning/html-images-and-figures/alignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/alignment?u=76281980&t=1)** - [Narrator] It's important to know how to align images with surrounding text and how to wrap text around an image. In the first paragraph of this webpage, on lines 17 through 20, the Flag of Japan is in the middle of the text. Because the image element is an inline element, images flow right in with the surrounding text. The flag sticks up above the text and it doesn't seem to look quite right. This is the default alignment of images, the bottom of the image is aligned with the baseline of the text. The baseline is shown here in red. Baseline is a typographical term. Here it is in reference to other terms that you may see as you go through your career in [[Web Design]]. You can adjust the alignment of the image with respect to the text by using the vertical align CSS property. The link that shows them all in action is shown here at the bottom of the screen. But for this instance, let's take the flag and give it a style of vertical align middle. Save it and that looks a lot better. You'll see that the flag is now centered along with the text that surrounds it. Looking further down the page, we have an image of The Imperial Palace followed by text. This also leaves a lot to be desired. It would look much better if the text were right next to the image wrapping around it. To accomplish this, you use the float CSS property. When an image is floated, it's moved to the side of the window you specify and the browser then reflows the text around it. Most commonly, you'll use the left and right values,
>
> **[1:35](https://www.linkedin.com/learning/html-images-and-figures/alignment?u=76281980&t=95)** depending on where you want the image to appear. The link at the bottom of the screen shows you all the possible choices. Let's float this image to the left, and see what it looks like. Now the text is wrapped around the image, but you'll notice it's wrapped rather tightly around it so let's add some padding on the right and bottom of the image to separate the text from the image further. We'll set the padding to be zero on the top, one half of the current font size on the right, one half the current font size on the bottom and zero on the left. Now the text and image have some breathing room. Sometimes float doesn't work ideally. Let's say I wanted to take this last paragraph about Tokyo Station and split it into its own paragraph. So I'll end the previous one and start a new one. Save and when I reload, and you'll see that the paragraph is still next to the image but I'd really like it to begin after the image. To accomplish this, you use a style to clear left or clear right depending on the float to tell the browser, wait until the left side of the browser window is clear of any images before displaying this paragraph. And now, no matter how much I [[Zoom]] in on the text or no matter where I resize my window, I'm always
>
> **[3:11](https://www.linkedin.com/learning/html-images-and-figures/alignment?u=76281980&t=191)** guaranteed that the text will be below the image. If you have images that are floated both to the left and right as you see in this screenshot, you can use clear both to ensure the text doesn't appear until the browser window is clear of images on both sides. In this case, the last paragraph was positioned properly using clear both. Use alignment and floats to give your webpages a more balanced look.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (1), [[Zoom]] (1)
> **Env Vars:** css (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Images and text](https://www.linkedin.com/learning/html-images-and-figures/challenge-images-and-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-images-and-figures/challenge-images-and-text?u=76281980&t=0)** (gentle whooshing)
>
> **[0:04](https://www.linkedin.com/learning/html-images-and-figures/challenge-images-and-text?u=76281980&t=4)** - [Man] Okay, now it's your turn. Here's a challenge involving image resizing, spacing, alignment, and floating. In the exercise files for this video you'll find the files you need for this challenge. The original sizes for each image is listed here. The [[HTML]] file I've provided you has comments that tell you what needs to be done. The heading on lines 17 to 21 will have the flags of Germany and Munich on either side of the text, vertically aligned with the middle of the text. The main text on lines 22 to 33 will have the image of the museum clock at the left, and the view from the top of the museum on the right. The paragraph on lines 39 to 42, giving information on how to get to the museum, must appear below both pictures, not between them. Here's what the result should look like. Your webpage might not look exactly like this, depending on the font size and screen width you use, but you will have to make the width and height of the flags smaller than their normal size to get the right proportions. Feel free to adjust the spacing between the images and text to your preferences. No one part of this challenge is difficult, there's just a lot of little parts. In this next video, I'll show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** html (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [man] (1)

#### [Solution: Images and text](https://www.linkedin.com/learning/html-images-and-figures/solution-images-and-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/html-images-and-figures/solution-images-and-text?u=76281980&t=4)** - [Instructor] Here's my solution to your challenge. To save some time, I've already added the basic image elements with their source and alt attributes. The images I added were the German flag on line 17 and 18, the Munich flag on lines 23 and 24, the museum clock on lines 28 and 29, and the city view image on lines 35 and 36. Let's go to the browser to verify that the images display. Now that we know that, I can make them look more like I want them to. My first task is to center the heading in the internal stylesheet by adding text-align, center. I'll save that and reload it in the browser. The flags are way too large and the vertical alignment also needs centering. The flag dimension is 320 by 192, so I'll divide each of them by three. That'll make the width 107 and the height 64. I want to do this on only one flag first. That way, if it doesn't look right, I have only one change to make instead of two. So a save and a reload tells me that the size is right. Now, I add a style to get the vertical-align in the middle. Save that and a reload gives me the results I want. I'll do the same thing for the Munich flag
>
> **[1:41](https://www.linkedin.com/learning/html-images-and-figures/solution-images-and-text?u=76281980&t=101)** with a copy and a paste. Save, yet another reload, and my heading is exactly what I want. Next, comes the image of the clock. I'm going to add the width and height with the width of 184 and the height of 200. And I'm going to float it to the left. Let's save. And a reload shows the text beginning to wrap around the picture. It's a little bit too close to the picture, so I'll solve that by adding a padding of one-half em on all four sides. Again, save and reload. And now, I have some space between the picture and the text. I'll do something similar for the city view. I'll add the width of 251 and the height of 200, and I'll set the style to float to the right this time with the same padding as the other picture. A save and a reload shows that everything is fine. And now, my only remaining task is to make sure that this last paragraph shows up below both of the pictures. I take care of that by adding a style to that paragraph that says, make sure both sides of the screen are clear of any images before displaying this text.
>
> **[3:17](https://www.linkedin.com/learning/html-images-and-figures/solution-images-and-text?u=76281980&t=197)** And after that, save and another reload. I have exactly the result I want and that's the solution. I hope you see how a little bit of your CSS made a big difference in the way your page looks.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Analogies:** picture (4)
> **Env Vars:** css (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Special effects](https://www.linkedin.com/learning/html-images-and-figures/special-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/special-effects?u=76281980&t=1)** - [Instructor] You can use CSS to enhance your images with special effects. You may need to tweak the image you have in order to match the style of the webpage you're creating. Let me show you a few of these effects. This webpage has three images of eagle-themed art. I'd like to make these images a bit more interesting. Let's do this by adding a style attribute with the transform CSS property to rotate the images on the ends. The property value is rotate with a number of degrees in parentheses. A negative rotation is counter-clockwise and a positive rotation is clockwise. Other units you can use besides degrees are rad for radians and turn for a fractional or whole complete rotation. I'm going to rotate the image on lines 25 and 26, 20 degrees counter-clockwise by adding the style to transform with a rotation of negative 20 degrees. The image on the right will have a style that gives a transform to rotate 20 degrees clockwise. I'll save that, go into the browser, and refresh, and now the images are rotated around their center point. Not bad, but they're a bit too high on the page and they should overlap the center image a bit more. For that I'm going to use the translate property. Let's go back to the markup and on the image at the left, I'm going to add a transformation
>
> **[1:36](https://www.linkedin.com/learning/html-images-and-figures/special-effects?u=76281980&t=96)** that says translate X, which means to move in the X, or horizontal direction, 30 pixels. On the right-hand image, I'm going to move in the X direction horizontally negative 30 pixels and that will move them in towards the center. I'm also going to move them down on the page by putting translate Y, a vertical movement, of 35 pixels for both of the images. (keyboard clacking) I'll save that, refresh, and now the images are positioned more where I would like them. If you're using a modern browser, you can also use the clip-path property to trim the image to fit within a geometric shape. Let's click the left and right images to an ellipse. We'll do that by adding a clip-path which is an ellipse. The easiest way to specify the lengths and positions is in terms of percentages. The horizontal radius of the ellipse will be 50% of the picture. The vertical radius will be 40% and I want the ellipse centered at the center of the picture. I'll do the same thing for the image at the right side with the same clip-path. (keyboard clacking) Specifying the radius, horizontal and vertical,
>
> **[3:15](https://www.linkedin.com/learning/html-images-and-figures/special-effects?u=76281980&t=195)** and the position. Then, I want to click the center picture to a diamond shape. So, it's going to have a clip-path that's a polygon. The first point is halfway across the picture at the top. The next point is all the way at the right, halfway down the picture. The third point is halfway across at the bottom and the last point is at the left, halfway across. Remember to put a comma in-between each of the sets of coordinates. I'll save that, come into the browser, and reload. How cool is that? The result is that the image is now displaying the shapes that we specified. There are many other CSS properties you can use to style your images. I recommend going to [css-tricks.com](https://css-tricks.com) and doing a search for effects. The examples on this site show you the markup and they show you the results in action.

> [!info]- Semantic Content
>
> **Analogies:** picture (5)
> **Env Vars:** css (3)
> **CLI Commands:** make (1)
> **URLs:** [css-tricks.com](https://css-tricks.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Background images](https://www.linkedin.com/learning/html-images-and-figures/background-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/background-images?u=76281980&t=1)** - [Instructor] Sometimes you want to put a graphic element in the background of your page to subtly emphasize the point being made in the text. I started creating a page for a fictional travel agency. At the left is the mark up and on the right is what you see in the browser. This looks okay but I want to add a background image. Here's the image I'm going to use for the background of the page. Let's go over to the mark up and add it using CSS. At the top in the Style section of the Body element between lines seven and nine, I'm going to add the background-image property which has a URL of images/travel-globe.png. I'll save that and when I reload in the browser, let's see what that looks like and there's the background image. When you specify a background image, it tiles the background repeating horizontally and vertically to fill the browser window. As you can see, this image is far from being subtle. It's drowning out the text. Let's fix this. I've already prepared a lighter colored version of the image by adjusting its transparency in an image editing program. I'm going to use this file, travel-globe-light.png instead so the text is easier to see. Back in the [[HTML]], I'm going to modify the URL. Save. Come back to the page and reload and the text is now readable. The background is again the subtle hint in the background rather than taking over the whole page.
>
> **[1:33](https://www.linkedin.com/learning/html-images-and-figures/background-images?u=76281980&t=93)** If you want the image to be tiled only in the vertical direction, set the background-repeat property to repeat-y. Or repeat-x if you wanted the horizontal direction. And now I only have a vertical stripe of background images at the left edge. If I want it centered in the screen, I can set the background position property to both 50% horizontally and 50% vertically. Let's save and you refresh and as you see here the background image has been repositioned. If you want the logo to appear only once at the upper right, you can set its position to 100% and zero and instead of repeating it along the Y axis, just say that you want no repeat. When you save and reload, the image now appears at the upper right. Instead of percentages, you can also use keywords. So, instead of 100% zero, I could have said right top. Save and reload and it's the exact same thing. You can also add offsets so the image isn't all the way at the border. Here, I'm going to add 20 pixels at the right and 10 pixels at the top. Save and reload
>
> **[3:06](https://www.linkedin.com/learning/html-images-and-figures/background-images?u=76281980&t=186)** and now the image is comfortably away from the edge. When I scroll the window, the image scrolls off the top. If I don't want it to do that, I can fix that by adding the background attachment property and setting the value to fixed instead of the default which is scroll. You can specify all the background properties at one time. Just say background and put in all the values one after another. So, I have the URL, no repeat at the top right in the fixed location. I'll save that and reload. The effect is the same and there's just a little less typing for you. Mozilla's documentation on this CSS property can be found here at developer.[mozilla.org](https://mozilla.org). If you scroll down, you will see an example where a background is applied to a paragraph. Mozilla's documentation is a great resource for you to use when you want to learn more about styles in CSS and HTML in general.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** css (3), url (3), html (2)
> **URLs:** [mozilla.org](https://mozilla.org) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Responsive Images

[↑ Back to Table of Contents](#table-of-contents)

#### [Resolution and pixel density](https://www.linkedin.com/learning/html-images-and-figures/resolution-and-pixel-density?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/resolution-and-pixel-density?u=76281980&t=1)** - [Instructor] Responsive design, or how you design your images so they work on a wide variety of devices is something everyone who works with [[HTML]] should learn. In the preceding chapters, our pages will work fine if our viewers have only one type of display device, say a monitor. But there are lots of display devices out there, such as tablets and phones that come in a dizzying array of sizes, and tablets and phones can be held in different orientations, too. When talking about responsive design, we need some terminology. Resolution is the number of pixels in a display, expressed as width by height, so this monitor has a resolution of 1280 by 720. You can also represent the resolution as one number, the diagonal resolution, which is the square root of the width squared plus the height squared. Thank you, Pythagoras. But resolution isn't the entire story. You can have a monitor and tablet with the same resolution but the screens are of different sizes, as measured by their diagonals. If you take the diagonal resolution and divide it by the diagonal measurement, in this case measured in inches, you get the pixels per inch. With all these different sizes of displays, how do you prevent the browser from taking a small picture and enlarging it on a larger display, getting all sorts of blurring and pixelation or a large image shown on a small display and pretty much throwing away all the details? In other words, how do you get the browser to respond in such a way that the image is ideally chosen for the display? That's what responsive design is all about and that's what we're going to explore in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Analogies:** such as (1), picture (1)
> **Env Vars:** html (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Handling pixel density](https://www.linkedin.com/learning/html-images-and-figures/handling-pixel-density?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/handling-pixel-density?u=76281980&t=1)** - [Instructor] The first way to handle the problem of varying resolutions is to specify a set of images to use depending upon the pixel density of the display device. That way you won't show a low-density image on a high-density screen. The images have been edited here to dramatize the difference. In the exercise files for this video, we have images at a display pixel ratio of 1, 1.5, and 2. By default the image element on lines 19 and 20 shows that we want the pixel ratio of 1 as the source for the image. There's one new thing here on line six. When you're doing responsive images you need this meta element to tell the browser to use the full window width with a scaling factor of 1, which is no [[Zoom]]. This factor can range from 0.1 to 10. We need this meta element so that the browser doesn't try to resize the text for what it thinks is the optimum. To make the image responsive we'll add a source set attribute whose value is a comma separated list of the candidate images and the desired pixel density using x as the multiplication factor. So the first candidate is images slash grand place 1x.jpg with a ratio of 1x and then the image with a ratio of 1.5 images grand place 1.5x.jpg and its multiplication factor, and by the way, I'm putting this on a separate line for readability, and then finally the image grand place 2x.jpg
>
> **[1:39](https://www.linkedin.com/learning/html-images-and-figures/handling-pixel-density?u=76281980&t=99)** with a pixel density of 2. There's no law that says you have to put the density in the file title, but it does help you keep your images organized. Let's save that and when we come into the browser and reload, the browser will choose the image that best fits the density of your display device. We're going to see later on how to experiment to show that it's really choosing the image that you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Versions:** 1.5 (2), 0.1 (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using srcset and sizes](https://www.linkedin.com/learning/html-images-and-figures/using-srcset-and-sizes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/using-srcset-and-sizes?u=76281980&t=1)** - [Instructor] Using srcset to let the browser choose an image by display density is a good first step, but sometimes you'd like to have more accurate control over which images are chosen. In the images folder in the exercise files for this video, I've created four versions of a picture of the seal of the city of Bruges with the varying widths 200, 400, 600, and 800 pixels. Ordinarily, these would be identical images other than their dimensions, but in order to show the effect more clearly, I've labeled each of the pictures with their width as shown in this example. Here's the [[HTML]] so far with just the 200 pixel image on line 16 and 17. As before, we have the meta element on line six to tell the browser to use the full window width with an initial scaling factor of one. Once again, I'm going to add a srcset attribute to the image, whose value is going to be a comma separated list of the candidate images and their widths, but this time using a W as the width unit instead of X for multiplication. The first candidate is images/bruges_seal_200.jpg and it has a width of 200. The next one is bruges_seal_400.jpg with a width of 400. And I'm going to use copy and paste to make my life a little easier, to add the ones for the 600 width and the width of 800.
>
> **[1:41](https://www.linkedin.com/learning/html-images-and-figures/using-srcset-and-sizes?u=76281980&t=101)** Again, I'm putting each one on a separate line for readability. Then you tell the browser what sizes you want the layout width to be. So we're going to have the sizes attribute and you can use px for pixels or you can use the vw units, where each vw is 1% of the viewport width. So in this case, I want only one size. The picture should always appear at 50% of the viewport width. I'll save that and when I go to the browser, you'll notice I'm now displaying the 800 pixel image. If I resize the browser window to make it smaller, I'm displaying the 600, the 400, and the 200 width image. The picture always takes half the window width, but the image that is chosen changes. Because sizes is plural, that means you can specify more than one size by using media conditions. For example, I can say that when the maximum width of the viewport is 400 pixels or less, display the 200 pixel image. If the maximum width is 600 pixels, then use the 400 pixel image. For any width between 600 and 800 pixels, use the 600 pixel image. And in all other cases, use the 800 pixel image. The browser will try the conditions in the order that you write them and will choose the first one that matches. Let's save that, come back to the browser, reload.
>
> **[3:18](https://www.linkedin.com/learning/html-images-and-figures/using-srcset-and-sizes?u=76281980&t=198)** And now as we resize, you'll see that it takes 200 or 400, 600 and 800 depending upon the width of our browser window. This resizing on the fly works great in Firefox but not in Chrome, because Chrome keeps the largest image cached and reuses it. To show you that srcset really does work in Chrome, I opened several new [[Windows]], resized them, and then loaded the web page. As you can see, the correct sized image displays for each sized window. Using srcset and sizes lets you specify the correct image to use and how much of the screen it should occupy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Windows]] (1)
> **Analogies:** picture (3), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1)
> **Tools:** firefox (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Testing screen resolutions](https://www.linkedin.com/learning/html-images-and-figures/testing-screen-resolutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/testing-screen-resolutions?u=76281980&t=1)** - [Instructor] Admittedly, I cheated a bit in the previous video. I added the width, number of pixels, of the image on the image itself, so it would be obvious which one the browser is displaying. That was a proof of concept to convince you the sourceset and sizes work as advertised. The real issue is this. Now that you could specify a variety of images, you want to know what you're page will look like on a particular mobile device or tablet. And resizing by hand is not the answer. Luckily, both Firefox and Chrome provide a tool to help you with this. In Firefox, you use web developer. Web console. And then click the responsive design mode icon. And then select the inspector view. Now you can select a device to see what the page will look like on that device. When you hover over the image source element in the inspector, you can see the dimensions of the currently selected image. If I go to landscape view, I can again, see what everything will look like and see which image is selected. In Chrome, use more tools. Developer tools. Then toggle device toolbar. And then select the device you want. The main idea here is to use these tools to test your response and design and get an idea of what your page looks like on a variety of devices. It's important to do this testing to make sure
>
> **[1:33](https://www.linkedin.com/learning/html-images-and-figures/testing-screen-resolutions?u=76281980&t=93)** all your users get the best possible experience.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (2), go to (1), toggle (1)
> **Tools:** firefox (2)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Use srcset](https://www.linkedin.com/learning/html-images-and-figures/challenge-use-srcset?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/html-images-and-figures/challenge-use-srcset?u=76281980&t=4)** - [Instructor] Now you try it. This is a challenge about using sourceset and sizes. Start by opening the index dot [[HTML]] file in the exercise files. Follow the instructions in the comments of the index dot html page starting by adding the meta element after line six. The images you will use for this challenge are in the images folder. The first one is a rather exotic relief work. And it comes in three different widths. 1000, 600, and 300 pixels. You'll put that image into the webpage and make sure it takes up 90 percent of the viewport. The images to use are images slash arch face 1000 dot jpg. Images slash arch face 600 dot jpg. And images slash arch face 300 dot jpg. The default image should be images slash arch face 600 dot jpg. That's on lines 11 through 17. The other image also comes in three different widths. 800, 500 and 300 pixels. Make the clock image on lines 26 through 33. Responsive as specified. If the browser window is less than 500 pixels, display images slash clock 300 dot jpg. If the window is 500 to 800 pixels wide, display images slash clock 500 dot jpg. Otherwise, display images slash clock 800 dot jpg. The default image source should be images slash clock 500 dot jpg. Remember to put appropriate alt attributes in your images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Use srcset](https://www.linkedin.com/learning/html-images-and-figures/solution-use-srcset?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/html-images-and-figures/solution-use-srcset?u=76281980&t=4)** - [Instructor] Here's my solution to the challenge. To save time, I've already set up the basic image elements with appropriate alt attributes on lines 18 and 19 as well as here on lines 37 and 38. Now I type the meta element to set the view port to be the width of the entire device and an initial scale of one for no [[Zoom]]. I'll save that and load the page in the browser to make sure that the defaults give a reasonable display before I try expanding on the mark up. First I put in the size for the arch. The sizes is going to equal 90 view port width units or 90 percent of the view port. And the appropriate source set for all the images with their widths, the first one is images, archface1000.jpg this is 1,000 units wide images archface600.jpg which is 600 wide and images archface300.jpg which is 300 wide. I'll save that, reload it in the browser. It's now taking up 90 percent of the width and when I resize it's always taking up 90 percent of the width
>
> **[1:37](https://www.linkedin.com/learning/html-images-and-figures/solution-use-srcset?u=76281980&t=97)** of the view port. Now let's work on the second picture. I'm going to need several sizes here. For a maximum width of 500 pixels I need a 300 pixel image. For a maximum width of 800 pixels I want a 500 pixel image and for everything else I want an 800 pixel image. I then add the matching source set.
>
> **[2:16](https://www.linkedin.com/learning/html-images-and-figures/solution-use-srcset?u=76281980&t=136)** Images clock300.jpg is 300 units wide. Images/clock500.jpg is 500 wide and images/clock800.jpg is 800 wide. Save that. Come back to the browser and reload. And again as I resize, it selects the different images. And that solves the challenge. There's a lot more to responsive design than we've shown you in these videos. You can find more courses in the library by doing a search for [[Responsive Web Design]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Responsive Web Design]] (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (clicking) (1)

#### [Art direction: The picture element](https://www.linkedin.com/learning/html-images-and-figures/art-direction-the-picture-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/art-direction-the-picture-element?u=76281980&t=1)** - [Instructor] In the proceeding videos, you've used source set to tell the browser which of a set of pictures to choose, but all the pictures have looked alike. You may have noticed when doing the challenge, that the header image looks great on a large screen, like an iPad, but on a smaller phone, like a Galaxy S5, not so much. The face, which is the centerpiece of the image, is too small to make out the detail. This is the art direction problem. That's direction as in directing a film and choosing the correct shot not which direction is the person holding the phone or tablet. Look at this set of images. Unlike the ones in the preceding videos, these are not the same image but different sizes. Instead, they've been edited so that the relief work, the important part of the image, stays front and center in each one. In order to help the browser select which of the images is the correct one to display, you use the picture element. Here's the general form of the element. It contains a series of source elements, and at the end, it must be at the end, an image element for any browser that doesn't support picture. Let's put that into action. I already have an image element with an Alt attribute on lines 15 and 16, so I'll put it inside of a picture element, with an opening tag and the corresponding closing tag.
>
> **[1:27](https://www.linkedin.com/learning/html-images-and-figures/art-direction-the-picture-element?u=76281980&t=87)** The first source has a media attribute that says, for a maximum width of the view port of 600 pixels, the source set to use is images/arch_face300.jpg.
>
> **[1:47](https://www.linkedin.com/learning/html-images-and-figures/art-direction-the-picture-element?u=76281980&t=107)** The next source says that for a max width of up to 1,000 pixels
>
> **[1:58](https://www.linkedin.com/learning/html-images-and-figures/art-direction-the-picture-element?u=76281980&t=118)** the source to use is images/arch_face600.jpg. And for anything else, the source to use will be images/arch_face1000.jpg. Let's save that and see how it looks in the browser. You can tell that different image are being chosen by looking at the number of bricks that you see in the background of the image, and this solves the art direction problem. No matter what size the window is, the face of the relief work is always the most important part in all the detail that we can give it. If you want, you can even specify multiple images for different display densities in each source set attribute, or sizes along with width, as in the previous video. But you won't see this done often in practice. Use the picture element to ensure that your users focus on the important parts of your images when they view your webpages.

> [!info]- Semantic Content
>
> **Analogies:** picture (4)
> **CLI Commands:** make (1)
> **Code Identifiers:** ipad (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 5. Figures

[↑ Back to Table of Contents](#table-of-contents)

#### [Using figure and figcaption elements](https://www.linkedin.com/learning/html-images-and-figures/using-figure-and-figcaption-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/using-figure-and-figcaption-elements?u=76281980&t=1)** - [Instructor] Sometimes you want to annotate images or reference them by number. Such as figure one, figure two and so on. Take for example, this part of a webpage that's a fictional account of how to buy tickets for the Tokyo metro system. Rather than having these unlabeled images, you might want to capture them. The figure and fig caption elements let you do just that. For the first image, I'm going to replace the opening and closing div tags by figure tags. If I save that, and go back to the browser, you'll notice that figures are a little bit more indented than the normal images are. Now you add the fig caption element. Place it right after the opening figure tag if you want the caption above the image. Or right before the closing slash figure tag if you want the caption below the image. Which is what I want in this case. So before the closing figure tag, I'm going to have an opening and closing fig caption tag and in between the text that I want to appear which will be language selection screen. Save that. Come back to the browser. Reload. And there's my caption below the image. As a mini challenge, you can complete the remaining figures with these captions. Ticket type selection screen. Number of tickets selection screen. And ticket machine payment area. Captions are a great way to add descriptive texts
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/using-figure-and-figcaption-elements?u=76281980&t=94)** for each of your images on a webpage in the context of the image.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for example (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Autonumbering figures with CSS](https://www.linkedin.com/learning/html-images-and-figures/autonumbering-figures-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/autonumbering-figures-with-css?u=76281980&t=1)** - [Instructor] When a document like a manual or scientific paper is written. Often times, captions include a prefix like figure one, figure two, and so on. Let me show you what I mean. By searching [[Google]] Scholar for [[Web Design]], I'll scroll down a bit and look at this article about sitemaps and storyboards. And if I scroll down, here's figure two with a caption below it. Let's add figure numbers to the figures we created in the preceding video. In our [[HTML]], we could type the words figure one, figure two and so on inside each fig caption. But the browser can do that for you with CSS. To start the process, lets establish a name to counter in the CSS for the body element and reset it to zero. You do that by specifying the counter reset property and the name of the counter. And figure counter seems like a pretty good name. The next step is to specify the text to be added before the text inside each fig caption element. So I say fig caption before and when that occurs, the first thing to do is to increment the figure counter. So I'll use the counter increment property and specify the counter name that I want. And then the content to be displayed. Which is the [[Microsoft Word|word]] figure followed by a space. The current counter value. And a colon followed by a space.
>
> **[1:34](https://www.linkedin.com/learning/html-images-and-figures/autonumbering-figures-with-css?u=76281980&t=94)** Save that. Go into the browser, reload. And that does the trick. All my figures are now properly numbered. Now if I add or remove figures I don't have to renumber them by hand. The CSS will keep track of it automatically. To find out more about CSS counters in detail, go to the Mozilla developer network at developer dot Mozilla dot org and do a search for using CSS counters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Web Design]] (1), [[HTML]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** css (5), html (1)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-images-and-figures/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/html-images-and-figures/next-steps?u=76281980&t=1)** - [Instructor] Congratulations, you've completed this course from the basic image element and understanding image formats, to using CSS with your images to make them more appealing and responsive. What's next after this? There are two major directions you can go. The technical side, learning more about CSS and how to use it with images and text, and learning to use the tools for making images. And the artistic side. How do you create a visually effective layout? How do you balance graphic elements with text? If you're going the technical route, here are some courses in the library you might want to take. The CSS essential trainings, motion design with CSS, and creating [[Responsive Web Design]]. There's a large selection of [[Graphic Design]] courses, as well. From introduction to advanced levels. Don't feel you have to do one of these or the other. The more you know about both of these areas, the more effective your sites will be. If you're dealing with statistical graphics, charts, and tables, this book, The Visual Display of Quantitative Information by Edward Tufte, is a must read. Even if you aren't doing graphics in that area, the book is so beautiful designed and well-written that you will definitely learn a lot. Whichever route you take, either technical or artistic, or both, enjoy your future projects working with images and figures in [[HTML]]. Thanks so much for taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsive Web Design]] (1), [[Graphic Design]] (1), [[HTML]] (1)
> **Env Vars:** css (4), html (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[J. David Eisenberg]]

## Resources

- Exercise files available

## Skills Covered

- HTML

## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML and CSS- Linking]] | **4 of 11** | [[HTML- Tables]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[HTML- Structured Semantic Data]] — HTML
- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Metadata in the Head]] — HTML
- [[HTML- Tables]] — HTML

---

[↑ Back to top](#)