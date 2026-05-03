---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-image-generation-with-dall-e
url: "https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e"
duration_minutes: 24
duration: 24m
level: Intermediate
updated: 1/17/2024
learners: 12474
skills:
  - OpenAI API
  - DALL-E
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-image-generation-with-dall-e-4558023"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGxFE7zT3GMqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705102392664?e=2147483647&amp;v=beta&amp;t=c3rGlUy2B3DH9c11z2tWjRNg05BirMEcYcoAJWq3evA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Fine-Tuning]]'
next_courses:
  - '[[OpenAI API- Vision]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":6,"total":10,"prev":"OpenAI API- Fine-Tuning","next":"OpenAI API- Vision"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/dall-e
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md)

![OpenAI API: Image Generation with DALL-E](https://media.licdn.com/dms/image/v2/D560DAQGxFE7zT3GMqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705102392664?e=2147483647&amp;v=beta&amp;t=c3rGlUy2B3DH9c11z2tWjRNg05BirMEcYcoAJWq3evA)

# OpenAI API: Image Generation with DALL-E

> DALL-E is well-known for its ability to interpret a wide range of text prompts and generate corresponding images. Join instructor Kesha Williams to learn more about DALL-E's enhanced resolution features, access methods, and the art of crafting effective image prompts considering built-in moderation.This course offers a deep dive into real-world applications across various professional industries, 

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e) | 24m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to image generation with DALL-E](#introduction-to-image-generation-with-dall-e)
- [**1. Understanding DALL-E**](#1-understanding-dall-e) (2 videos)
  - [Explore DALL-E features and capabilities](#explore-dall-e-features-and-capabilities)
  - [Gain access to DALL-E](#gain-access-to-dall-e)
- [**2. Using DALL-E in the Real World**](#2-using-dall-e-in-the-real-world) (2 videos)
  - [Craft effective image prompts](#craft-effective-image-prompts)
  - [Use image generation in the real world](#use-image-generation-in-the-real-world)
- [**3. Generate Images via the Images API**](#3-generate-images-via-the-images-api) (3 videos)
  - [Explore the Images API](#explore-the-images-api)
  - [Estimate image pricing](#estimate-image-pricing)
  - [See image generation in action](#see-image-generation-in-action)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your DALL-E journey](#your-dall-e-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to image generation with DALL-E](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/introduction-to-image-generation-with-dall-e?u=76281980&t=0)** - [Kesha] What you create with [[DALL-E]] is only limited to your imagination. Generate high quality images and images for your projects in website design, entertainment, visual [[Storytelling]], research, and so much more. Now more than ever, the [[OpenAI API]] makes it easy to integrate DALL-E into your existing [[Microsoft Products|products]] and applications, and I'll show you how in this course. You'll explore the OpenAI API and learn how to generate the images you want. I'm Kesha Williams, and I've helped hundreds of thousands of people harness the power of AI tools and machine learning technologies, and I'd love to help you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (2), [[OpenAI API]] (2), [[Storytelling]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** dall (2), api (2)
> **Speakers:** - [kesha] (1)


### 1. Understanding DALL-E

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore DALL-E features and capabilities](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=0)** - [Narrator] Blend the name of the famous surrealist artist Salvador Dali and Pixar's animated character WALL-E and you have [[DALL-E]]. DALL-E is an AI model developed by OpenAI that generates images from text descriptions. This advanced tool uses [[Deep Learning]] techniques to understand and interpret text prompts, creating detailed and creative images based on those prompts. It's known for its ability to generate highly realistic images to imaginative visuals, including fantastical, surreal compositions that combine unrelated elements in novel ways. What's exciting is that image generation has greatly improved from previous versions. There are enhanced resolution options with images that range from 1024 by 1024 to 1792 by 1024 pixels, which means sharper, more detailed images, opening new avenues for graphic designers and digital artists. HD options have the ability to produce sharper, more vibrant images, excelling especially in intricate details like text and facial features. There are also style options that are natural or vivid. Vivid causes the model to generate
>
> **[1:33](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-dall-e-features-and-capabilities?u=76281980&t=93)** hyper-real and dramatic images. Natural causes the model to produce more natural images. What's most exciting is that the images you generate with DALL-E are yours to use, and you don't need OpenAI's permission to reprint, sell, or merchandise them. And OpenAI has implemented steps to prevent the generation of images that are considered harmful, focusing on safety. Now that you understand the features and capabilities of DALL-E, let's review the different ways you can access it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[Deep Learning]] (1)
> **Env Vars:** dall (4), wall (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Gain access to DALL-E](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=0)** - [Narrator] You will not believe how easy it is to access [[DALL-E]] to generate images. You can access Dolly using [[ChatGPT]] Plus and Enterprise services via the [[OpenAI API]], which is the method we'll use in this course and via the OpenAI Labs environment. Let's review each option together. DALL-E is built natively on ChatGPT, allowing users who subscribe to ChatGPT Plus or Enterprise services to access it through these platforms easily. This access is typically more user-friendly and geared toward non-developers, allowing for a more interactive experience with DALL-E through conversational interfaces. The primary way to access DALL-E is through the OpenAI API, specifically the Images API. Developers and software engineers can integrate this API into their applications, allowing them to use DALL-E's image generation capabilities programmatically. This method requires an API key and follows the standard procedures for using web APIs. OpenAI offers a Labs environment where users can experiment with DALL-E. This is a web-based tool that allows for easy experimentation without the need for coding. Each of these access methods caters to different user groups
>
> **[1:37](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/gain-access-to-dall-e?u=76281980&t=97)** from developers requiring deep technical integration to casual users interested in exploring DALL-E's capabilities in a more interactive and straightforward manner. Our primary means to access DALL-E in this course will be the OpenAI API, using the [[Python (Programming Language)|Python]] SDK, or Postman. Now that you understand the different ways to access DALL-E, let's discuss crafting effective prompts so that you can truly harness its power.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (9), [[ChatGPT]] (3), [[OpenAI API]] (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** dall (9), api (6), sdk (1)
> **CLI Commands:** python (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Using DALL-E in the Real World

[↑ Back to Table of Contents](#table-of-contents)

#### [Craft effective image prompts](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=0)** - [Instructor] Creating effective prompts for [[DALL-E]] is both an art and a science. Let's discuss how to construct prompts that effectively communicate your vision to DALL-E, helping it to produce the most accurate and creative results possible. Precision is key when constructing prompts. Specifying the color, the mood, the style and the setting can dramatically improve the output of DALL-E. For instance, a prompt like a sunflower in a vase is broad and can result in various images. In contrast, a large sunflower with bright yellow petals in a tall, blue ceramic vase, on a wooden table against a white background in the style of Salvador Dali provides a much clearer and more detailed description. I've just described the art of [[Prompt Engineering]], refining a prompt to produce the best results. There is a feature of DALL-E called prompt rewriting so that you don't have to become an expert prompt engineer to produce the best results. Prompt rewriting optimizes your original text prompt before passing it to DALL-E, because providing detailed prompts gives significantly better results. In this example, your original prompt could be a cruise ship,
>
> **[1:35](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/craft-effective-image-prompts?u=76281980&t=95)** whereas the rewriting feature will update your prompt to be "Visualize a detailed and vibrant image of a magnificent cruise ship" and so on. I'm not going to read the entire prompt, but you can see that the rewritten prompt provides a lot more context and specificity. Here is the beautiful image produced from that rewritten prompt. Prompt rewriting aligns with open AI moderation tools within DALL-E to ensure safety and adherence to ethical guidelines. It's important to understand that certain words or concepts might trigger these moderation tools, leading to altered or rejected prompts. Now that you understand the process of crafting effective prompts, let's look at real-world applications of image generation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (6), [[Prompt Engineering]] (1)
> **Env Vars:** dall (6)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Use image generation in the real world](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=0)** - [Instructor] Are you ready to learn how to apply image generation in the real world? Let's get started. We'll explore real world examples and practical use cases showcasing images generated by [[DALL-E]]. We'll look at [[Graphic Design]] and artwork creation, advertising and marketing, entertainment and media, web and UI design, and research and data visualization. Artists and graphic designers can use DALL-E to quickly generate initial concepts, drafts, or even complete pieces of artwork based on specific themes or ideas. In this prompt, "Generate an image of a futuristic, eco-friendly cityscape at twilight, blending cyberpunk style with natural elements," produces this image. Marketing teams can leverage DALL-E to create unique and eye-catching visuals for advertising campaigns, social media posts, and other marketing materials tailored to specific [[Microsoft Products|products]] or themes. This prompt, "Create an image for a high-tech running shoe campaign, set in a city park at dawn," produces this image. DALL-E can be used in the entertainment industry for storyboarding, character design, and generating backgrounds or scenes for movies,
>
> **[1:36](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/use-image-generation-in-the-real-world?u=76281980&t=96)** video games, and animations. This prompt, "Generate a fantasy adventure scene in an enchanted dusk forest with towering trees and bioluminescent flora," produces this image. Web and UI designers can use DALL-E to generate images and icons tailored to specific themes or user interface requirements. This prompt, "Create minimalist icons for a financial web app, covering budgeting, savings, investments, and analytics," produces this image. Researchers can use DALL-E to generate visual representations of data, abstract concepts, or theoretical models. This prompt, "Design an infographic on [[Quantum Computing]], visually contrasting abstract theories with practical components," produces this image. I told you earlier that what you create with DALL-E is only limited to your imagination. Now that you know how to apply image generation in the real world, let's explore the Images API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (7), [[Graphic Design]] (1), [[Microsoft Products|Products]] (1), [[Quantum Computing]] (1)
> **Env Vars:** dall (7), api (1)
> **Speakers:** - [instructor] (1)


### 3. Generate Images via the Images API

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the Images API](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=0)** - [Instructor] Let's talk about the most popular way to access [[DALL-E]], through the open AI API. Developers and software engineers can integrate the images API into their applications, allowing them to programmatically use DALL-E's image generation capabilities. Let's go into the technical aspects of the API, including how to make requests and handle responses. The Generation API endpoint creates an image based on a text prompt. Here is a simple request to the model. Let's look at each parameter, model, style, quality, prompt, n, size, response_format, and user, in more detail. As a reminder, this is the image produced by the prompt that you just saw. Let's start with the Model parameter. Model indicates the model you want to use for the image generation, DALL-E-2, or in our example, DALL-E-3. The default if left blank is DALL-E-2. The style parameter. It represents the style of the generated image, either natural or vivid. Vivid causes the model to generate hyper real and dramatic images. Natural, causes the model to produce more natural images, the default is vivid.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=93)** Quality. The quality parameter indicates the quality of the image that will be generated, standard or HD, for high definition. HD creates images with finer details and greater consistency across the image. The default is standard. Next, the prompt parameter. The prompt is the text description of the desired image. This field is required of course. Next, we have the n Parameter. This is the number of images to generate. If you're using DALL-E-3 for your model, only n equals one is supported. The Size Parameter, represents the size of the generated image must be 1024 by 1024, 1792 by 1024, or 1024 by 1792 for DALL-E-3 models. The response format is the format in which the generated image or images are returned. The options are URL or base 64 [[JSON]]. The default is URL, which returns a URL to the image generated. The URL or URLs from the API will remain valid for only one hour, meaning after they expire, you can no longer access the image. User is a unique identifier
>
> **[3:10](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/explore-the-images-api?u=76281980&t=190)** representing your end user, which will help open AI to monitor and detect abuse. Before launching your product, you'll need to include end user IDs with each request. Now, let's talk about the response. An image object is returned as the response, and this is a look at an example image object. Now, based on the response format of the input parameter, either a URL to the image will be returned, or a base 64 encoded JSON format for the image will be returned, which you'll need to convert to a viewable format. The next parameter is the revised prompt, which is the rewritten prompt used to generate the image. Remember when I told you about DALL-E's prompt rewriting feature? Well, this is it in action. The prompt sent to the model is this revised version, not our original version. Again, this feature produces better results. The images API is straightforward and easy to use. Now that you understand how to use the images, API, let's talk about pricing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (8), [[JSON]] (2)
> **Env Vars:** dall (8), api (7), url (5), json (2)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** response_format (1)
> **Speakers:** - [instructor] (1)

#### [Estimate image pricing](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/estimate-image-pricing?u=76281980&t=0)** - [Instructor] You've seen the magic of [[DALL-E]], but how much will it cost you? Understanding the cost of using the Images API is an essential aspect of accurately estimating the budget cost of your projects. The API usage is offered on a pay as you go basis and is billed separately from the Labs environment. Credits granted or purchased on labs.[openai.com](https://openai.com) do not apply to the Images API. Let's look at the pricing for DALL-E 3. What's important to note for pricing is the difference between standard and HD images, and how the generated size or resolution impacts the price. For this course, I've used HD quality and 1024x1024 for the resolution, which means each picture lands at around 8 cents. For large volume discounts greater than $5,000 a month, contact OpenAI sales. Regardless of whether an image was generated through a free or paid credit, you still own the images you create. Now that you understand how pricing works, let's see image generation in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (2)
> **Env Vars:** api (3), dall (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [See image generation in action](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=0)** - [Instructor] Are you ready to see the Images API in action? Let's jump into our [[Python (Programming Language)|Python]] code example found in this Jupyter Notebook. The first step is to generate an API key to authenticate to the API, and then configure your application code to use it. Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com), shown here, and clicking Sign up or Log in if you already have an account. You want to treat your API key the way you would treat a password and keep it secure. Now, let's navigate back to our Jupyter Notebook. We use OpenAI's Python SDK for our code example to interact with the Images API. The first step is to install the necessary libraries. I've installed these libraries already, so I won't run this code again. Scroll down to cell one. In this cell, we import the OS and the OpenAI modules or libraries. The OpenAI module provides access to the [[OpenAI API]], and the OS module provides access to operating system dependent functionality. We'll use it to access the API key stored as an environment variable and an external environment file. Let's scroll down. Here on line four, we're loading the environment file. Then, we read the environment variable
>
> **[1:33](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=93)** and initialize the client with it here in cell two on line one. This will be used to authenticate to the API. Let's scroll down to this helper function. Here, I've designed the code to be modular with reusable code defined in functions. The generate image function is used to call the image's API shown here on line five. We are passing in the model, the style, the quality, the prompt and the size, and the function returns the response here on line 13 from the API call. Now, let's look at our very first example. Here on line three, we are calling the generate image function and passing in this prompt. The prompt is to create an image of "an enchanting outdoor night scene, showcasing a sleek, black marble chessboard set on an antique wooden table. Each chess piece is intricately carved from clear ice, glistening under the celestial glow of a star-filled sky with a full moon. The surrounding environment is a serene, snow-covered landscape, softly illuminated by the night sky." I cannot wait to see what this image is going to look like. We are using the [[DALL-E]] 3 model. We're passing in the style of natural. We want the image to be HD or high definition,
>
> **[3:08](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=188)** and the resolution or the size to be 1024 by 1024. Now, let's execute this code. It will take a moment for it to generate the image. Notice here on line 12, I'm storing the URL in this image variable. I'm then printing the image and it should show up inline, as well. So, here is the generated image image. Ooh, I like it. So, I'm seeing this image for the first time just like you are. Now, let's look at example two where we use vivid and standard as the parameters that we pass in. Notice the prompt is exactly the same, still using DALL-E, but like I said, we're using vivid this time and standard, the same size. Let's execute this code to see what happens. It will take a moment for it to run and generate this image.
>
> **[4:20](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=260)** So, this is vivid and standard. I like it, but I think I like the other one better. And now, let's look at the example of prompt rewriting. The prompt that we are passing in this time is a very simple prompt, "a life-size queen chess piece in a garden" using DALL-E 3, natural, HD, 1024 by 1024. Let's execute this code, and we'll give it a second to run. I do want to point out this message here on line four, that the URLs will expire after an hour. So, if you do generate an image with DALL-E, make sure you download it or save it before that hour is up. So, let's look at this life-size queen chess piece in a garden. Oh, I like how this turned out. What do you all think? Now, next, what I wanted to show you, let's execute this code. Remember, I taught you about prompt rewriting, and that's a feature of DALL-E where it takes your original prompt and it rewrites it so that the image produced is of a higher quality. Remember, let me scroll back up. Our original prompt was "a life-sized queen chess piece in a garden." Our prompt was rewritten
>
> **[5:57](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/see-image-generation-in-action?u=76281980&t=357)** to this prompt, "a life-sized chess piece resembling a queen, gracefully carved from sleek and polished stone" and more. I'm not going to read the entire prompt, but this is the prompt here that was used to generate this image that we see. DALL-E's prompt rewriting feature really just attempts to optimize the prompt for you so that you don't need to be a [[Prompt Engineering]] expert. Now that you've seen the Image API in action, let's recap what we've learned and review the next steps in your learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (6), [[Python (Programming Language)|Python]] (2), [[OpenAI API]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** api (11), dall (6), sdk (1), url (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** scroll down (3)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **Tools:** jupyter (2)
> **Definitions:** is a  (2)
> **URLs:** [openai.com](https://openai.com) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your DALL-E journey](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-image-generation-with-dall-e/your-dall-e-journey?u=76281980&t=0)** - [Instructor] Your [[DALL-E]] journey. Congratulations on reaching the end of the course. You should feel proud of what you've accomplished. Thank you for going on this journey with me to generate images using DALL-E and the [[OpenAI API]]. During our time together, you've learned all about the power of DALL-E and the images API to generate highly realistic and imaginative images from a text prompt. If you haven't pulled down the code example, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration. You can also continue learning by watching my other courses, "[[Building a Project with the ChatGPT API]]", "[[Artificial Intelligence Foundations- Machine Learning]]", and other courses in the OpenAI API series. I've enjoyed our time together. Please follow me on [[LinkedIn]] so that we can stay connected. I enjoy speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event. Now go and transform the world. I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (3), [[OpenAI API]] (1), [[ChatGPT]] (1), [[Artificial Intelligence Foundations]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (4), dall (3)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kesha Williams]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-image-generation-with-dall-e-4558023)

## Skills Covered

- OpenAI API
- DALL-E
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Fine-Tuning]] | **6 of 10** | [[OpenAI API- Vision]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Fine-Tuning]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)