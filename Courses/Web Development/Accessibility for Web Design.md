---
type: course
cssclasses:
  - lle-course
slug: accessibility-for-web-design
url: "https://www.linkedin.com/learning/accessibility-for-web-design"
duration_minutes: 118
duration: 1h 58m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFEldSjvm_oGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655410107982?e=2147483647&amp;v=beta&amp;t=yBzaHJwb36X3FR4o11qUaIdyzTF1ol-eXOPxh297Nyg"
linkedin_topic: Web Development
learning_paths:
  - '[[Prepare for Digital Accessibility]]'
prev_courses:
  - '[[UX Foundations- Accessibility]]'
next_courses:
  - '[[Web Accessibility for Developers]]'
path_nav: '[{"path":"Prepare for Digital Accessibility","position":3,"total":8,"prev":"UX Foundations- Accessibility","next":"Web Accessibility for Developers"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Accessibility%20for%20Web%20Design.md)

![Accessibility for Web Design](https://media.licdn.com/dms/image/v2/C4E0DAQFEldSjvm_oGg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655410107982?e=2147483647&amp;v=beta&amp;t=yBzaHJwb36X3FR4o11qUaIdyzTF1ol-eXOPxh297Nyg)

# Accessibility for Web Design

> Are you doing everything you can to make sure your sites are accessible and easy to use? Learn practical accessibility techniques to ensure your web designs can be viewed and used by everyone. Internationally recognized accessibility expert Derek Featherstone walks through examples of common web interaction flows, and then steps through considerations and tactical strategies for each component, to

> [LinkedIn Learning](https://www.linkedin.com/learning/accessibility-for-web-design) | 1h 58m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Making the digital world accessible](#making-the-digital-world-accessible)
- [**1. Real-World Scenarios**](#1-real-world-scenarios) (2 videos)
  - [An ecommerce purchase](#an-ecommerce-purchase)
  - [Personas](#personas)
- [**2. Accessible Visual Design**](#2-accessible-visual-design) (5 videos)
  - [The use of color](#the-use-of-color)
  - [Color contrast](#color-contrast)
  - [Animation, movement, and flashing](#animation-movement-and-flashing)
  - [Proximity and grouping in design](#proximity-and-grouping-in-design)
  - [Effective visual focus indicators](#effective-visual-focus-indicators)
- [**3. Keyboard Interaction**](#3-keyboard-interaction) (3 videos)
  - [Keyboard functionality](#keyboard-functionality)
  - [Avoiding keyboard traps](#avoiding-keyboard-traps)
  - [Linear flow of content](#linear-flow-of-content)
- [**4. Touch Interfaces**](#4-touch-interfaces) (3 videos)
  - [Accessibility and touch](#accessibility-and-touch)
  - [Target sizes](#target-sizes)
  - [Working with gestures](#working-with-gestures)
- [**5. Images and Multimedia Accessibility**](#5-images-and-multimedia-accessibility) (4 videos)
  - [Working with audio and video](#working-with-audio-and-video)
  - [Understanding media types](#understanding-media-types)
  - [The importance of text equivalents](#the-importance-of-text-equivalents)
  - [Accessibility for complex visuals](#accessibility-for-complex-visuals)
- [**6. Form Accessibility**](#6-form-accessibility) (4 videos)
  - [Labeling forms](#labeling-forms)
  - [The placeholder attribute](#the-placeholder-attribute)
  - [HTML5 form inputs](#html5-form-inputs)
  - [Form validation and error messaging](#form-validation-and-error-messaging)
- [**7. Flexibility and Accessibility**](#7-flexibility-and-accessibility) (3 videos)
  - [Flexible vs. fixed width designs](#flexible-vs-fixed-width-designs)
  - [Responsive design and accessibility](#responsive-design-and-accessibility)
  - [Designing for text resizing](#designing-for-text-resizing)
- [**8. Structured Content**](#8-structured-content) (3 videos)
  - [Content hierarchy and headings](#content-hierarchy-and-headings)
  - [The importance of page titles](#the-importance-of-page-titles)
  - [Page structure](#page-structure)
- [**Conclusion**](#conclusion) (1 videos)
  - [A challenge for you](#a-challenge-for-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making the digital world accessible](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/making-the-digital-world-accessible?u=76281980&t=0)** - 14. That's the number of times one person got stuck when I was doing [[Usability Testing]] with people with disabilities for an [[E-Commerce]] flow early in my web career. The design and code had some pretty significant flaws for people with disabilities, and each one of them was completely preventable with a small bit of effort and care. I saw the parallels between these barriers and accessibility in the physical world that I had seen with my grandfather after he had a stroke. And at that point, I knew that my web career was going to be dedicated to making the digital world more accessible. I'm Derek Featherstone, and this is the course on accessibility for [[Web Design]]. I'm an international expert on accessibility and have been for almost 15 years. And I've taught tens of thousands of designers and developers how to make things easier to use for people with disabilities. This course will help you design things that work for the 20% of the world's population that has a disability. We'll look at designing from a few perspectives. Visual design for focus states, color contrast, and target size. On the interaction design front, we'll look at keyboard interactions, linear flow, and touch interfaces. And we'll round that out with a lot of discussion points for you and your development team to work on together. Okay, let's dig in to accessibility for web design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (2), [[Usability Testing]] (1), [[E-Commerce]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - 14 (1)


### 1. Real-World Scenarios

[↑ Back to Table of Contents](#table-of-contents)

#### [An ecommerce purchase](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=0)** - In this course, we're going to explore [[Accessible Design]] from a lot of different angles using three typical scenarios. They're pretty common tasks that people will do online. And there are things that you the designer or developer need to think about as you're building sites for yourself or your clients. Here's a high-level walkthrough of those scenarios that we'll work through in this course. Let's say you're looking to buy a gift for your best friend to celebrate an occasion. Think about that process for a minute. How do you find that gift? You're going to go through several steps. You'll spend time looking for different ideas. Looking for inspiration. You read reviews. You research pricing. You do a lot of comparison. After all of that process, you find just the right thing. You check the price, select the color, maybe enter a promo code, and you add it to the shopping cart. You're ready to check out. So you fill in the shipping details, and payment details. You mark the order as a gift, which allows you to add a note, a gift receipt, and maybe even get it wrapped. Then you craft a meaningful, and playful message and you send off the order. You'll wait patiently for the shipping notice, and look for the gift to arrive so you can make your best friend's day. You need to arrange for a lawn mowing service to come and take care of your lawn for the upcoming summer season. You and your partner will be gone on a three month trip with your two teenage children. You saw an advertisement for a local landscaping service, so you go to their website, and look for their lawn maintenance packages. You review their services.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=94)** Find that they have a weekly option, and then you fill out their form asking for a quote. You send it their way and wait for an email confirmation that tells you they've received your inquiry, and will get back to you as soon as they can. You love how popular podcasting has become. It's your main source for getting up-to-date information. To stay in-sync, you regularly load podcasts onto your phone. You share episodes you love with your friends, and colleagues, and you're always researching new podcasts for your library. You'll take them with you on your commute to work and listen every day as you travel to and from the [[Microsoft Office|office]] 25 minutes each way. Now that's a really high-level overview of those scenarios. Put yourself in the shoes of the person that is completing each of those tasks. Better yet. Put yourself inside their heads. Thinking about people with disabilities, and how they use digital things often seems very different to us, and yet it isn't. If you woke up and suddenly had no use of your hands, would your job change? Would your hobbies change if your vision started to deteriorate? No. The requirements of your job would stay the same, and your interests would stay the same. People with disabilities are trying to accomplish the same goals, and same tasks as you or me. They just might use specialized tools to do it. Here's what that means for you. As a designer, you'll need to keep a few things in mind as you're designing and working with others to write content, and build your sites. Okay, it's more than a few things but if you take some very specific actions, you're going to go a long way
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/an-ecommerce-purchase-14870326?u=76281980&t=187)** to making things accessible for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (1), [[Microsoft Office|Office]] (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - in (1)

#### [Personas](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=0)** - When we talk about accessibility, we really mean that we want to make things work easily for everyone, regardless of their abilities or the tools that they're using to consume our content or transactions. We often use personas that include some functional needs for people with disabilities to help remind us how we can best meet their needs. These are five personas that we use pretty regularly in our work. It's important to remember though, that these aren't artifacts that are set in stone. They're based on research and they vary from project to project and client to client. There are two critical pieces of these personas. First, they serve as a reminder of these people's mindsets, motivations, and goals. Second, they incorporate reminders of functional needs for people with disabilities. So let's run through them quickly. First is Giovanni. He's 27 years old, single with no kids. And is a gallery artist that works from home. He uses his artwork to create awareness around civil rights issues. He needs simple, clear instructions, wants to avoid getting lost in details, and frequently feels overwhelmed. He's looking for a gift for his best friend who helped him with his last gallery show. Giovanni is somewhere on the spectrum. In other words, he's been diagnosed with autism spectrum disorder or ASD. Rose is next. She's 34 years old, married with no kids. She's a graduate student and a journalist and works quite unusual hours. She takes a mix of short and long trips for her work. She manages most of her whole life while she's on the move.
>
> **[1:36](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=96)** And she keeps up with recent events with daily podcasts. She lives by her mobile phone. And she needs her life to be effortless and forward thinking, ready for whatever's next. She really doesn't have patience for wasting time and she's been almost completely deaf since birth. Mary is 48 years old. She's married with two teenage girls. She's an exceptional musician. She plays over 11 instruments and she's a professor of ethnomusicology. She wants to inspire her students with new ways of creating music. And she just received a grant for remote music learning for the K to 12 space. She's planning to use podcasts and video as part of her online coursework for those students. She's traveling for three months this summer with her family and is arranging services to watch over their home while they're gone. She gets things done very quickly when she's focused. And was blind by the age of 13. She really needs significant trust in everybody that she works with. Sean is a 31 year old UI engineer in Palo Alto. He's engaged, but doesn't have any kids yet. Sean is very, very competitive and driven. He's always staying up to date on the latest technology and trends and works about 85 hours a week. He does almost all of his shopping online and is quickly bored with technology. Sean has low vision and he needs to view the screen at 400% magnification. Finally, we have Maxine. She's 68 years old, is widowed, has two children, and five grandchildren.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/personas-14872204?u=76281980&t=191)** She manages medical claims for a large insurance company. She's looking to retire this year and travel to spend more time with her grandchildren. And she plans on spoiling each and every one of them this year. She wants to find some help around the house, especially while she's away. She's an extrovert with very strong people skills, but has severe arthritis from years of computer work. These personas can act as touchstones for you as we progress through the course. Keep them in mind. as we look at each example and scenario. How would this work for Sean, Maxine, Rose, Giovanni, or Mary? Their functional needs are things that we as designers need to be conscious of every single day.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** asd (1)
> **Speakers:** - when (1)


### 2. Accessible Visual Design

[↑ Back to Table of Contents](#table-of-contents)

#### [The use of color](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=0)** - For years, accessibility has been seen as the domain of the developer. Sure, there are lots of things that happen in code to make sure that digital things are accessible, but design and content are just as important, or maybe even more important. Why? As a designer, you're in a unique position to influence the final product by creating more accessible designs from the beginning of a project, rather than adding it in part way through. Ultimately, you need a great mix of [[Accessible Design]], accessible development skills, and accessible content. Let's look at how all these pieces come together to create an accessible experience. We'll start with looking at what accessibility means from a visual perspective. When we create designs, we use several tools to communicate. One of the most obvious tools we use is color. We use it as a design element in meaningful ways. Color communicates status and helps us distinguish one thing from another. Take a look at this graph. It shows the number of different pieces of fruit eaten over a week. Now you're likely aware that some people are colorblind. In fact, one in 12 men and one in 200 women have some form of colorblindness. That means that about 4.5% of the world's population is going to have difficulty perceiving different color combinations because of colorblindness. That's almost 315 million people in the world. Knowing that, how would you change the graph to make sure that you don't rely on color? You'd use other methods to distinguish one line of data from the other.
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=94)** You'd use shape or patterns to show the difference between lines. Notice I didn't say how would you change the graph to not use color? I changed it so that the graph didn't rely on color. There's a big difference. Use color to your advantage, yes, but make sure it isn't the only method to communicate your message. There's lots of great material out there on colorblindness and designing accessible color palettes. In fact, check out Gerri Coady's book, "Color Accessibility Workflows" for the science behind colorblindness as well as methods for creating great color combinations that work for everyone, including people that are colorblind. Now that we've got that sorted, let's put it into practice. Let's apply this to that [[E-Commerce]] site selling T-shirts. Notice the color swatches on the right hand side of the page above the add to cart button? If you were colorblind or couldn't see color at all, how would you know which color is which? This is fairly easy to solve. We combine the color names with the color swatches, and we've now made this much more accessible. Here's a different scenario. Take a look at this podcast page we've created. Each search result comes back color coded to show if the keyword was found in the podcast name, episode titles, or the content of the podcast itself. Now take a look at what happens when we take the color away. See what happens? We actually lose some meaning. We can't easily tell the difference between podcasts, episodes, and transcripts.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=187)** Like the last example, we can come up with several different ways to distinguish these items that do not rely on color alone. Now, pause this video and take 30 seconds to come up with at least three different methods. Explore different ideas. Many people will jump straight into a single solution without considering others. Really, I'm serious. Pause the video and come up with three.
>
> **[3:33](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=213)** Okay. Now that we're back, here's some possibilities. There is no right answer, but did you consider using shape, circles, squares, and triangles to denote the difference between the three types of search results? Did you consider prefixing each result with podcast colon, episode colon, or transcript colon? Or how about simply putting an uppercase P, E, or T in the color block? Any of those would work. They use different mechanisms that don't rely on color to convey the details. Which one you choose will be up to you. And if you can't decide, put it to [[Usability Testing]]. There's nothing better than getting the answer directly from people that are using what you're creating. We've been talking about this from the perspective of someone that is colorblind, but here's the best part. By making our designs so that they don't rely on color alone, not only do we make them work better for people that are colorblind and have difficulty distinguishing between colors, we also make them work well for people that can't see color at all or are blind or have low vision. There's almost another 300 million or so people in the world that have significant visual impairment that isn't just related to color. Approximately 40 million people are considered blind, and another 250 million or so have low vision. By doing this right, you're helping a lot of people. You can and should apply the same principles to other uses of color that are common in digital interfaces today. We often use green to signify a success message
>
> **[5:07](https://www.linkedin.com/learning/accessibility-for-web-design/the-use-of-color-14869535?u=76281980&t=307)** and red to indicate an error. As a designer, we need to find multiple ways of providing the same message. What will you do to ensure that you're conveying the same message to everyone?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accessible Design]] (1), [[E-Commerce]] (1), [[Usability Testing]] (1)
> **CLI Commands:** make (5), find (1)
> **Versions:** 4.5 (1)
> **Definitions:** means that (1)
> **Speakers:** - for (1)

#### [Color contrast](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=0)** - Designers also need to take care when choosing their color palettes for their work. Ensuring that there's enough color contrast between the foreground and background is important. Remember Sean, our persona with low vision? Because of his low vision, he has difficulty detecting the differences between colors that are too similar. There are lots of color combinations that just don't work well from a contrast perspective. Let's step into the lab and try a few combinations out. The first tool is Lea Verou's contrast checker.
>
> **[0:40](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=40)** The second tool is Jonathan Snook's checker, which includes sliders to allow you to easily nudge colors in different directions to find combinations that work. The key is to understand that too little difference in the colors means that you can't tell the difference between them. And that means people with less than perfect vision will likely struggle to read the interface. These ratios are obtained by calculating the difference in the color based on brightness and luminosity. Don't worry too much about what that means. Just know this very straightforward advice. The contrast for things in an interface, whether it is text, icons or something else that has meaning needs to be 4.5 to 1. For large or bold items, it can be three to one. Anything less and you're making people work much harder than they need to. Oh, and just so you're aware, these numbers come from the Web Content Accessibility Guidelines version 2.0. They're a set of guidelines that help you know what things you should and shouldn't do from an accessibility perspective. Let's take a look back at our podcast interface. See the page where we've got the [[Metadata]] listed for each result? The text has a color of 999999 and it is set on white background with color FFFFFF. That just doesn't have enough contrast. Since that text is small, we need to increase the contrast. Here we used 333333 to do the trick. That's plenty of contrast but it could have easily been 777777. That gives us a ratio of exactly 4.5 to 1,
>
> **[2:17](https://www.linkedin.com/learning/accessibility-for-web-design/color-contrast-14870324?u=76281980&t=137)** the minimum required for normal sized text. There're a lot of tools out there that can help you with contrast. It doesn't matter too much which one you choose. Just remember to use one. The key thing to remember is that it isn't so much about the colors themselves but how they're used in combination with other colors. When you're building pattern libraries, styles guides and [[Design Systems]], make sure that you're always showing colors in pairs that show enough contrast and provide warnings about which colors shouldn't be used together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Design Systems]] (1)
> **Versions:** 4.5 (2), version 2 (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** the key is (1), remember to (1)
> **Env Vars:** ffffff (1)
> **Speakers:** - designers (1)

#### [Animation, movement, and flashing](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=0)** - When was the last time you saw an animation or motion on the web? There's a good chance it was within the last day or two. Animation and motion techniques are becoming more popular, as they create engagement and a sense of excitement in our designs. They can be used in very functional ways, too, to attract attention. When you attempt to log into a site like [icloud.com](https://icloud.com) or use Stripe Checkout to pay for something online, the entire login form will shake when you enter incorrect information. It's a subtle way of getting your attention to say, "Hey, something went wrong." Many sites also use large animated background images or videos as a way of pulling you into the interface. Parallax effects are used to create a sense of depth in interfaces. You'll see it when you're scrolling down a screen and it looks like a photo is actually behind the surface of the page, because the page and the photo are moving at slightly different speeds. Have you ever stood at the bottom of a tall building and looked up and experienced that feeling of vertigo, where your reference points to the ground are gone and you start to feel almost dizzy and maybe even nauseous? Or maybe you've experienced some serious headaches when you've been looking at the screen for too long. What if I told you that some people feel that vertigo, dizziness, nausea, or even pain because of those animations? It's a real thing. You may not have heard of it, but these effects are loosely grouped into what we call vestibular disorders. People experience these things every single day, often when they experience
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=93)** unexpected large-scale animations. This is an area of accessibility we're only just starting to learn about, but we see fairly widespread evidence of it in social media, people posting that their mobile phone's predictive text keyboard showing up and disappearing is making them dizzy or that the Parallax effect on a webpage when scrolling is giving them headaches. Look for the hashtag dizzy or vestibular on your social media. If you want to see more detail on how it has impacted people in the past, go see this summary article I wrote at Sateach.es/vestibular. That's S-A-T-E-A-C-H.E-S/vestibular. Does that mean we can't use animations? Not really, we can use them, but we need to do it responsibly. Using animation and motion in a webpage responsibly means a few things. Allow a person the choice to turn animations off. There's a reduced motion setting in iOS that does just that system-wide. Your webpages can actually look for that setting and respect it. Make sure your site or app doesn't rely on animation. What happens if someone does prefer reduced motion? Can they still get all the content and the functionality? Finally, we want to create stateful animations, where we define a logical start and end state. If someone prefers for things not to animate, instead of a slide-in effect, they could use a dissolve effect to get from start to end. Flashing content can also have a profound effect.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/animation-movement-and-flashing-14876135?u=76281980&t=186)** For people with photosensitive epilepsy, content that flashes, like a strobe light, can trigger a seizure. You'll often see trigger warnings going into movie theaters or even some amusement park rides letting people know of the strobe effects in advance. While we don't often put trigger warnings on the web, we know that content that flashes more than three times per second can set off a seizure. Oh, and if you noticed, I didn't include any visual examples of those types of animation or flashing content in this video, why? I didn't want to trigger any issues. And there's plenty of great examples out there that you can find on the web. For great resources on animation, you'll definitely want to connect with Val Head on Twitter @vlh and Rachel Nabors, @rachelnabors. Animation and motion in webpages is a growing trend, and yes, it can be quite powerful. So yes, use animation. For most sites some-small scale animations can be very effective in your design. And remember the famous words from Uncle Ben, "With great power comes great responsibility."

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** ios (1)
> **URLs:** [icloud.com](https://icloud.com) (1)
> **Speakers:** - when (1)

#### [Proximity and grouping in design](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=0)** - Earlier in the course, I shared five personas with you. One of them was Sean. He's 31 years old, does all his shopping online, and has low vision. He uses a magnifier at 400%, so that he can see things on the screen. That means that he'll only be able to see a small portion of the screen at once. Most people with low vision will start at the top left of a page; call that their home base, and they orient themselves. Then they'll move through the [[Representational State Transfer (REST)|rest]] of the content of the page. Let's simulate that. We're going to use something that I call the straw test. I remember hearing from several people with low vision that their particular vision makes it like they're looking through a straw all the time. So, I started using that analogy to help designers find opportunities for making their designs work better for people with low vision. Go and get an actual straw, or hold up your fist like you're holding a straw, and look through it at the screen. We've effectively limited your view there, just like Sean might experience. I'm going to show our podcast page on the screen, and what you need to do is hold up your straw, and while you're looking through it, go through the motion to skip ahead to the 19 minute mark of the podcast. Take 10 seconds or so to do that now.
>
> **[1:32](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=92)** What did you notice when you were sliding the player across to 19 minutes? Unless your straw was really, really big, you wouldn't have been able to see the thumb on the audio player and the time counter at the same time. The limited field of view makes it impossible. So, how can you solve that? I can think of a couple of ways fairly quickly. First, you could just put the time counter above or below the sliding thumb, so that as you moved it across, you could see the time too. You could also make it so that the time counter is editable, and when you type a new value in, the podcast skips ahead to that time. In both of those cases, we made a very small change to the interface, but with huge benefits to Sean. Now, let's look at this eCommerce transaction, and how it might impact someone with low vision. Here's a view of the t-shirt page. Watch as I click on Add To Cart. The Shopping Cart in the top right corner of the page updates. Now, I want you to see what it might be like for Sean. If we use the magnifier built into [[Windows]], you'll see that this is quite similar to the straw test in that we're only able to see a small portion of the screen. We're over on the right hand side of the page, and when we click Add To Cart, the part of the page that updates is so far away, you can't see it while you're magnified. There are lots of ways to help address this issue. The easiest is building in some visual feedback to the Add To Cart button. Here's a version where the digit, 1,
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=186)** shows on the button after the click, and then moves up to the cart. This is a simple strategy. It helps provide feedback right away that something happened. Sean should be able to see it because it'll be in his field of view. In [[User Experience (UX)|user experience]] terms, this is often referred to as the principle of proximity. We need to group related items together, near one another, to show the relationship between them, and to help people succeed in our user task flows. This is especially important to people with low vision. Some people may have the screen magnified 200%, 400%, or even more. Just to put that into perspective, if the screen is magnified to 400%, that means that they're seeing only 1/16 of the page at a time. Let's look at another example from the shipping page. As we fill in the form while magnified, we enter a zip code, and that automatically updates the shipping cost. Unfortunately, it's a long way away from the source of the action. Knowing what you now know, how could you improve this design? The easiest method is likely to include some visual feedback near the shipping field, so that it's in the view while magnified. That doesn't mean it can't also be updated in the sidebar. This is a case of finding a way to leave the design as is, but adding in a small update to make it better for someone like Sean. The straw test is an easy way to help you identify areas in your design where proximity needs some attention.
>
> **[4:40](https://www.linkedin.com/learning/accessibility-for-web-design/proximity-and-grouping-in-design-14874207?u=76281980&t=280)** I like to use the straw test on everything from wire frames to interactive prototypes, and to sites that are in production. It's a simple tool that can have a huge impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1), [[User Experience (UX)|User experience]] (1)
> **Definitions:** means that (2), is a  (2), is an  (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Analogies:** just like (1), similar to (1)
> **Code Identifiers:** ecommerce (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - earlier (1)

#### [Effective visual focus indicators](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=0)** - One of the most fundamental principles of accessibility is the need for keyboard navigation. If you think back to our personas, both Mary and Maxine need keyboard interactivity to use the web. They use the tab key, enter, arrow keys, and space bar to move through the page and to activate buttons and links. There's only one fundamental difference between them. They rely on the keyboard for different reasons. Mary is blind and can't see the screen to see where a mouse cursor is. She listens to the web by using a screen reader. As she uses her arrow keys and tab key to move around, her screen reader will read text to her, let her know which form field she's in, or which button she's on. Maxine, on the other hand, can see the screen. Even though she could see the mouse cursor, using the mouse is too painful because of her arthritis. Maxine is what we'd call a sighted keyboard user, and this next technique is aimed directly at her. As she moves through the page, she doesn't hear things being read out to her. She needs to see where the cursor is, and that means she needs a good, visible focus indicator. When a sighted keyboard user moves through the page, they need to see the focus outline. Now, there's a default focus outline included in every browser. Safari and Chrome use a blue glow focus indicator, and Internet Explorer and Firefox use a thin, dark gray dotted line. Here you can see, as we tab through the page in Safari,
>
> **[1:36](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=96)** we can't see where the focus is on many parts of the page. This is likely because these indicators don't look like they're integrated into the design. So a designer asks to suppress it with a simple bit of CSS. They'll put outline: none in their pages, which makes that focus indicator disappear. This isn't good for Maxine. She can't see where the focus is reliably for all those active elements of the page. The maintenance packages don't look like they ever received the focus nor does the Request a quote button. If we switch to the other tab, you'll see that the default focus indicator is back, and as we tab through the navigation, packages, and quote button, we have really clear focus indicators on every active part of the page. We see a similar effect in Internet Explorer. The first tab doesn't have a good :focus state all the way through the page. And the second tab does, all because of the presence of outline: none. The default focus indicator may be slightly different for every browser. So now I'm going to tell you to do exactly the opposite of what you think I might. Most people will likely tell you not to use outline: none in your CSS, but I'm going to tell you use outline: none. Why? In some blue designs, the default focus indicator in WebKit is hardly noticeable. And in dark designs, the default focus indicator in IE and Firefox is hardly noticeable.
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/effective-visual-focus-indicators-14872202?u=76281980&t=190)** You need to follow the golden rule. If you take away something that is natively part of the browser, you need to replace it with something that is as good or even better. So don't rely on the default focus indicator, take some time to really plan your :focus states, combine outline: none with well designed :focus states on everything, reuse your :hover colors for :focus colors, use text decoration: underline, and use background-color changes to indicate focus. Once you design :focus states for all your work, make sure the developer follows through by testing fully with the keyboard. Do that, and you'll make the interface really easy to use for a sighted keyboard user like Maxine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (3)
> **Tools:** safari (2), firefox (2)
> **CLI Commands:** make (2)
> **Env Vars:** css (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - one (1)


### 3. Keyboard Interaction

[↑ Back to Table of Contents](#table-of-contents)

#### [Keyboard functionality](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=0)** - One of the most important requirements for accessibility is keyboard usage, why? Because this actually affects people with many different types of disabilities. When you make things accessible to use with a keyboard, you make it work for anyone who can't use a mouse. Some people like Maxine have mobility challenges or issues with dexterity. And some people like Mary can't see the screen and need to use a keyboard. You also make it accessible to people that use other assistive technologies like voice recognition software, switches or other devices. Remember, we don't have those technologies or disabilities represented in our personas, and that's okay. As you learn more, you'll create new personas that represent these functional needs in different ways. Here's the key principle to remember. You must be able to complete all tasks using a keyboard. Must, this is not optional. And it's the very first thing I test when I'm looking at a client site to see how accessible it is, and it should be the very first thing you look at too. The simplest way to understand it is to look at some examples. We've got an example here where I'll start to Tab through the page using the keyboard and you can see that I can access the things in the navigation. You can see that they're changing as I Tab through them. But when I make it to the next part or the main part of the page, you can see that the keyboard skipped over every block of content that's here.
>
> **[1:38](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=98)** I can click on each one of these to select them with the mouse, but it requires the mouse. There's no keyboard mechanism for me to be able to do this. So as I Tab through, you can see the Tab focus goes straight from the navigation, down to the Request a Quote button at the bottom. In this version of the page, we've actually enabled all the keyboard navigation that we need. So as I Tab through, I Tab through the navigation, and I get to the main content. And I can use my arrow keys to move between these blocks of content. And I can Tab off of that block and onto the Request a Quote button. This was a simple case of not using the right element. When the site was built, it was built using divs with [[JavaScript]] attached to them. You can't Tab to a div by default. Sure, the JavaScript made the click actions happen, but only for a mouse user. The solution was to use something that was focusable in the first place, a simple link. And then attaching the JavaScript to the link instead of to a div. From a design perspective, the why behind it doesn't matter so much, but you as a designer are in charge of making sure that you take inventory of all functionality available to a mouse user, and then ensuring there's an equivalent keyboard mechanism. Let's look at a more complex example. The main functionality on this page is a map.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=191)** And there's a lot of different controls on it that I can click. I can pan up, pan down, pan left, pan right multiple times.
>
> **[3:23](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=203)** I can recenter the map. I can [[Zoom]] in, zoom out, and I even have little flags available that tell me some data about each pin on the map when I click on it. So in order to make sure that we're providing equal functionality for all different users, we need to make sure that all of that functionality is available for somebody using a keyboard. We can do that quite easily by making sure that each one of the controls that we clicked on with the mouse is a simple button. So as I Tab through the interface, we'll take the focus down into the map. You can see as I use the keyboard, each control inside the map takes the focus. Right now, you can see that it's on pan up. And if I hit the Enter key, it pans up. If I hit Tab, I move to pan left. The Enter key will pan left, hit Tab to center, to pan right, to pan down, all of those work with the keyboard. If I continue on, I should get to the zoom in control
>
> **[4:48](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=288)** which I can activate using the keyboard. I can also zoom out using the keyboard. All of that functionality was equivalent to what is provided for a mouse user. But we've actually gone to the point of making this even a little bit better for a keyboard user. A mouse user has the ability to drag the map and move it fairly easily within the interface. It's not quite that simple to do drag and drop for a keyboard user. But what we have done, is enabled some really simple navigation techniques. So if I Tab through the interface, you'll see that the map as a whole takes the focus. And you can tell by that big, blue focus outline around it. We've also set this up so that when the map takes the focus, I can use the arrow keys to pan left, pan right, pan up, pan down, and I can use the plus key to zoom in and the minus key to zoom out. So as you can see, we've created the exact same functionality for a keyboard user that a mouse user has. The final piece of the puzzle was all of these little pins within the map that have a mouse click on them that show some data about that pin. Unfortunately, with [[Google]] Maps, there's no way to use the keyboard to get at each of those pins.
>
> **[6:22](https://www.linkedin.com/learning/accessibility-for-web-design/keyboard-functionality-14874210?u=76281980&t=382)** If I Tab through the interface, you'll see that I can go through all of the other components that are there, but the focus never gets to those pins themselves. So in order to make sure that people have access to that data that's in those little call-outs, that show when we click on the pins, we've replicated all of that information down below the map so that somebody that's a keyboard user can get at it and not have to rely on the mouse. One thing to keep in mind. Making sure that we can do everything with the keyboard doesn't mean that we need to be able to Tab to all of the content. Some people often misinterpret. You need to be able to do everything with the keyboard and make every single paragraph of text on the page tabbable, that's not the case. Just focus on the function of the interface, and carefully think through how you'll accomplish every task with a keyboard. Links, buttons and form fields are your friends here. They've got all the keyboard access you need built right in. So use those elements and you'll be in good shape. And if you have to create a custom element, try to base it off of those simple elements that are already keyboard-accessible. The map controls are just button elements. The thumb on the podcast player is just an anchor element. There's rarely a case where you need to use a div. So stick with simple elements and you'll make things keyboard-accessible by default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (6), [[JavaScript]] (3), [[Google]] (1)
> **CLI Commands:** make (9)
> **UI Navigation:** click on (4), drag and drop (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### [Avoiding keyboard traps](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=0)** - When we're designing and building sites, we often need to put in some custom functionality for custom widgets, like audio and video players, sliders, maps, or other complex controls. In almost all of those cases, we need to use some [[JavaScript]] to make that magic happen. Sometimes the JavaScript can go wrong, and we create something known as a keyboard trap. A scenario where the keyboard cursor will get stuck. Usually that's because the person that designed and built that custom control or that task flow was really thinking about people that use a mouse, and not keyboard users. Here's three examples of keyboard traps. Each one is slightly different, but the end result is the same; a person getting stuck and not being able to access some of the content or functionality that they need using their keyboard. In this first example, I can use the keyboard to fill out the billing form. But something isn't quite right. I can tab through the fields, and fill them out easily. I enter my name, credit card, and expiry date, and press tab to move into the security code field. I realize that I entered the wrong expiry date. So I press shift tab to go back into the expiry field. And that's where it breaks. I can't leave the security code field. I can't move backwards through the form, and I can't move forward to get to the next step button. I'm stuck in a keyboard trap. This is likely because security code is a required field, and there's some JavaScript on there that is saying, "No, you can't leave this field until you've entered your security code."
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=94)** For a person using a mouse, this keyboard trap isn't a big problem. They can just click somewhere else on the page and continue. But for someone that has no choice but to use a keyboard, this is pretty bad. They get stuck in this field, and they have to close the browser to start all over again, or give up entirely. Here's another example. It's slightly different. We often see auto tabbing scripts where some JavaScript will be used to auto advance the cursor when typing each part of a phone number in three fields. We type three numbers, and the cursor automatically moves ahead. Then another three, and it moves ahead. And finally, the last four. If I need to make a correction, I can't move backwards because the JavaScript sees there are three characters in there, and it advances the cursor to the next field again. This is particularly troublesome for someone like Mary, using a screen reader. She can't see what she typed in. So to verify that she typed her number in correctly, she needs to move backwards through the fields. Keep this in mind. And this is important. These problems aren't caused just because there was JavaScript on those fields. It's happening in both of these cases because the JavaScript isn't well written, and it didn't take into account that people might need to correct their work using a keyboard. Maybe it was incomplete testing, or scenarios that weren't on the radar when the script was designed. Why doesn't matter so much? We just need to know that we can't let this happen. Here's a final example.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/avoiding-keyboard-traps-14870318?u=76281980&t=186)** This bank login form. As I tab through, you can follow the cursor through all the fields. Card number, password, log in button, main navigation, view details button, card nickname field, then back to password. We get stuck in that cycle. So there are key parts of the interface we can't get to with the keyboard. The remember my card number, and nickname check box, and all these links in the right-hand side bar. I know what you're thinking. "That would never happened to me or my team. That's just bad JavaScript." Except it does happen, all the time, to great teams. Here's the key to preventing it. As a designer, you should document the tab order for things so that a developer knows how the keyboard flow should work. When you document keyboard flows, you communicate with the development team and the testing team. You provide the expected behaviors. It helps you build keyboard functionality into all your work as a baseline expectation for everyone. And when you do that, these kinds of things, like keyboard traps, have much less chance of making it to your live site, making it much easier for anyone that relies on a keyboard to get things done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (8), cursor (5)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - when (1)

#### [Linear flow of content](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=0)** - One of the simplest and yet most important concepts in accessibility is making sure that things are read in the right order. Mary, who uses a screen reader, generally reads content in the order in which it's placed on the page in the source order. So if there are two columns of text on a page, whichever one appears in the source order first will be what she hears first, if she's reading the page from top to bottom. Giovanni, someone with autism, who might describe himself as neurodivergent, expects a certain amount of predictability in the interface. When he's tabbing through pages, he expects the cursor to follow a typical pattern of going from top to bottom and left to right. Sean has low vision and magnifies the screen. We mentioned earlier that the top left corner of the page is his home base. Since he can't see the entire page at once it can be disorienting to look for content that is way off in the right hand side bar. Order matters for a lot of people. In the eCommerce billing flow, we have two blocks of content, the block on the left with the billing form and the block on the right with the order summary and the ability to add gift wrap and include a note for the recipient. Now let's think about this from a top to bottom, left to right perspective. Should we interact with the billing form first or should we interact with the order summary first? You'll need to make that decision at some point. So let's look at both options. If we put the billing form first, and then the order summary second
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=93)** with our current design, the interaction to fill out and submit the form would go something like this for a keyboard user: move through the billing fields and fill them out, move to the next step button, read the order summary, add gift wrap in a note, move backwards through the order summary, move backwards to the next step button, and then activate the next step button. What about the other scenario, where we put the order summary first and then the billing form? Here's what that experience might be like for a keyboard user: read the order summary, add gift wrap and note, move through the billing fields and fill them out, move to the next step button and activate the next step button. Which content flow is better? From a keyboard perspective, having the order summary come first not only requires less work with the keyboard, but it also makes more sense. It'd be good to get a reminder of what you're buying before you get to the next step button. If we have the billing form block of content appear first, then a keyboard user who can't see the screen may even get to the next step button and not realize there's any content after it. That person might just submit the button without knowing about the gift wrap and message options. At this point, we'd likely decide to put the order summary first in the source order. You can even see the impact of it immediately by digging in through the inspector and reordering the code. Here's a headings list in voiceover, the screen reader that comes built
>
> **[3:05](https://www.linkedin.com/learning/accessibility-for-web-design/linear-flow-of-content-14875143?u=76281980&t=185)** in with an apple computer. I'll pull that up using control option U and you can see that it shows the billing heading first, and then the order summary one. We can switch the content order by taking this aside and dragging it to be before the article in the Dom. Now the aside content that contains the order summary is above the billing form. If we close the inspector and pull up the headings list and voice over again, you can see that the order summary is first now, and that's the order that we're after. We made no changes to the CSS, just a simple change to the order of the code, and we've created a much better experience by creating a better linear flow. I encourage you to always be thinking about the steps someone would need to follow to complete a transaction or navigate and read content with just a keyboard. It's your responsibility as a designer to put thought into this. Be intentional with the order of the content on the page and you'll make things much more accessible for a lot of people.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ecommerce (1)
> **Env Vars:** css (1)
> **Cross-References:** we mentioned (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - one (1)


### 4. Touch Interfaces

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessibility and touch](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=0)** - Designing and building touch friendly interfaces that work for people with all kinds of different needs serves as an important step in making your content more inclusive. In fact, it was the advent of touchscreen interfaces that caused a lot of people to think about accessibility differently. When creating more accessible content online, the mantra used to be "Keyboard, keyboard, keyboard," but it really isn't as simple as that anymore. Touch interfaces vary in size, as you can imagine. Anywhere from the 38-millimeter Apple Watch, all the way up to 28-inch diagonal [[Microsoft]] Surface Studio, and everything in between. They all use touch, multi-touch, gestures, and in some cases, 3D touch. And all of these have an impact on accessibility. In order to understand touchscreens a little better, we need to expand our understanding of accessibility a little more. We need to understand how people with disabilities might use these new ways of interacting with your content. Think back to our personas. Sean has low vision. Mary is blind. Maxine has dexterity issues. Rose is deaf. And Giovanni is autistic. And it's really likely that all of them have some sort of touch-enabled device. Let's add another one to the mix. Renata is a product owner at a national insurance company. A few years ago, she lost both of her arms above the elbow during her tour overseas as a reserve officer in the military. When she returned, Renata went through about 18 months of rehabilitation and she transitioned to working as a product owner again.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=95)** At work, she's able to use the same systems as before, with some additional software and [[Hardware]] technologies. She's just as enthusiastic as before about her job, and she uses podcasts to keep up with the [[Agile Development|Agile]] industry. Renata loves her smartphone when she's on the go, but she prefers her tablet when she's home with her family. There are some specific accessibility concepts we need to keep in mind when we're designing for touch screens, but the most important is this. We're not all the same. Let's think about that for a minute. How do you use your smartphone? Do you use your thumbs for scrolling, or your fingers? How do you type? Do you hold it in one hand or two? Does it depend? Maybe you don't even have a regular pattern. What about Renata? She doesn't have any thumbs or fingers. What if I told you she uses her feet to operate her tablet? How would that change your design if you literally optimized your design for foot operation? Mary might make her screen reader cursor move with a swipe or double-tap gesture to read the objects on the screen. Sean may use voiceover with magnification and a Bluetooth keyboard attached, where he literally doesn't ever touch the screen at all. And what about Christopher Hills? He has cerebral palsy, and operates his touchscreen devices with a switch that he activates with his head. If you haven't seen his YouTube videos before, you should definitely go check them out
>
> **[3:08](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-and-touch-14876138?u=76281980&t=188)** for a different perspective. That's what I meant when I said, "We're not all the same." We've seen scenarios before where a screen says, "Tap anywhere on the screen to continue." And while that might work for someone that can touch the screen, for a person using a screen reader, it's much better to have an actual button to activate to continue. We have to remember to design things that take into account these differences. When you design touch interfaces, consider that some people may never physically touch the screen. How can you make sure that they can achieve the same functionality? Answer this question, and you're on the right path to making your sites and apps more accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Hardware]] (1), [[Agile Development|Agile]] (1), cursor (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - designing (1)

#### [Target sizes](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=0)** - You've likely experienced this before. You try to touch or tap something on your phone, and you miss. Think radio button or a checkbox. They're both pretty small targets. Or how about a link or a button that submits a form? How about that image carousel that includes little dots to allow you to choose an item in the carousel? They're all too small. And when you tap, you miss and don't activate anything. Or maybe they're too close together and you hit the wrong one. You end up zooming the interface to be able to have a big enough target to tap, or so that the interface is big enough so that you can make sure you hit the right link. It's easy enough to fix. Make things a little bigger and give them some breathing room. Take a look at this podcast search results page. In this case, there's 74 search results. So there's some results pagination at the bottom. Those will already be difficult for Maxine to tap. Her arthritis sometimes acts up and makes it difficult to hit those targets with accuracy. And Renata, she uses her feet. Or what about someone that searched using their phone with voice recognition, and now needs to page through the results but taps using their nose? Yes, with their nose. We can make things much easier by increasing the size of the targets and spacing them out. Not only are they larger, but they're also spread out, making it easier to activate for everyone. And while we're focused on touch devices here, the larger target size will also benefit people
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/target-sizes-14871238?u=76281980&t=93)** with dexterity issues that use a mouse or a switch device. It's win-win. Apple, [[Google]], and [[Microsoft]] all have guidance for designing for touch to make sure that targets are big enough. Their guidance varies from 34-by-34 pixels for Microsoft, 44 by 44 for Apple, and 48 by 48 for Google. There's a bit of debate though about whether or not these sizes are even big enough. Bottom line, make them bigger and test your interfaces with people with disabilities in the real world. So those are two quick principles for you to remember. Make targets big enough and space them out a little. That'll make them more accessible for everyone regardless of how they operate the touchscreen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Microsoft]] (2)
> **CLI Commands:** make (7)
> **UI Navigation:** checkbox (1)
> **Speakers:** - you (1)

#### [Working with gestures](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=0)** - Gestures are powerful ways of directly manipulating touchscreen interfaces. And they open new methods for people with disabilities to use touchscreens. Gestures are practically essential for a blind person to operate a touchscreen device. With gestures, they have the ability to swipe through an interface to move a cursor around the screen. Very similar to the way they can use a keyboard to move the cursor on a desktop computer. This is an effective technique because they can't see the screen. They manipulate the cursor with swipes and flicks, up, down, left, right and many others. Here's why that matters to you. When you're designing an interface, remember not everyone will use the touchscreen the same way as you. I recently worked with a client that had come up with a swipe to confirm your transaction functionality. It was designed to help ensure that people really wanted to make that transaction. And they knew they needed to dive a little deeper when it came to accessibility. We talked through a few scenarios. Maxine with arthritis might have a difficult time swiping the control across the screen. Mary who was blind couldn't swipe across the screen the same way because a swipe for her means something else when she uses her screen reader. Renata sometimes uses her feet, but also uses a switch device to operate the interface because gestures are more difficult with her feet. For each of these people, the designers needed to make sure that their assistive technology worked with that swipe to confirm. For Mary, it was making sure
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=94)** that when her screen reader was on, double tapping the control would activate it. For Renata, it was making sure that the swipe mechanism was easy to use while using a switch. And for Maxine, it was making sure that the swipe start, the path on which it traveled and the swipe endpoint had some additional flexibility. They could increase the physical size of the slider to make it easier and allow for the swipe to go slightly off the path for people that might have dexterity issues. So what are the gestures? There's too many to name here, but the best source to understand gestures for assistive technologies on touch screens is to go straight to [[Google]]'s, Apple's and [[Microsoft]]'s documentation. What do you do if a gesture you want to use conflicts with a gesture in use by assistive technology? It's pretty simple actually, design and build another mechanism to accomplish the same thing. For example, we've built a sortable table before where a swipe up or down a column will sort ascending or descending on that column. It was kind of cool, except that swipe up or down is used by a screen reader to either move to the previous or next item or just explore the screen and hear what's under their finger. So what did we do? We needed to build in another mechanism. We made it so that the sort wasn't reliant on the swipe by making the table header cell tappable to toggle between sorting and ascending or descending order. As a side benefit, by doing that, we also just happen to make it work better
>
> **[3:08](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-gestures-14876131?u=76281980&t=188)** for someone that uses a keyboard as well since they can't swipe. Take a look at all your designs for touch in this critical way. How would things work if that gesture couldn't be completed? This is just like everything else. I'm not saying don't use gestures. I'm saying use gestures and make sure there's another mechanism to do the same thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (3), [[Google]] (1), [[Microsoft]] (1)
> **CLI Commands:** make (5)
> **Analogies:** similar to (1), for example (1), just like (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is an  (1)
> **Speakers:** - gestures (1)


### 5. Images and Multimedia Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with audio and video](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=0)** - The web used to be a text based medium, but that changed when we started adding the ability for browsers to render images. Then came embedded audio and video players. Now we find ourselves where there are more than 400 hours of video uploaded to YouTube, and over 200,000 images uploaded to [[Facebook]] every 60 seconds. There are literally hundreds of thousands of hours of podcasts and audio files available on the internet at all times. Video, audio and images are media rich content. So how do we ensure that the same richness can be shared with people with disabilities? How will Rose access the content she can't hear? How will Mary or Sean access the content that they can't see? in order to understand how we'll make that type of content accessible, we'll need to understand one thing first. What is the purpose of that content? When we understand the purpose of the content, how we expect people to use it, and what their goals are, we can make better decisions about how to make it accessible. Let's take a look at a couple of examples. We specifically mentioned two personas that are very interested in multimedia. Rose is an avid consumer of podcasts to keep up with her fast-paced world on the move as a journalist. And Mary is a music teacher that is planning on using podcasts and video as a teaching tool for her online music courses. So first, let's look at our podcast page. The main content we're talking
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=93)** about here is the podcast itself. And that content is in the MP3 file that lives inside this audio player. How do we expect people would use that content? Rose is on the go all the time and uses it to keep up with the world around her. She frequently travels and downloads and syncs podcasts for offline access to her favorite content. And what about Mary's students? She'll use native audio and video for her online course delivery. We can envision her students learning to play the violin, the flute, or the guitar as beginners. Not only do they need to hear the things that Mary is saying, they'll want to see the techniques that Mary is demonstrating. How to hold the flute or the bow, or where to place their fingers on the guitar fronts. And as beginners, they're likely going to pause and rewind the video a lot for repetition of certain parts of the video. And they're likely going to struggle a little with putting their fingers in exactly the right place without looking at their own fingers. Okay, what are the important parts of those use cases? For Rose, she regularly downloads and syncs for offline access. Mary's students, they need to look at their hands for proper placement, they need the details from the video, they need clear instructions, and they need to be able to easily repeat clips. This step might seem obvious to you, but it's something that we cannot skip in our design process. We need a deeper understanding of how people are going to use that content, whether it's audio, video,
>
> **[3:08](https://www.linkedin.com/learning/accessibility-for-web-design/working-with-audio-and-video-14870323?u=76281980&t=188)** or even just plain old images. When we have that level of detail, we can take that forward to make better, more informed decisions about what techniques we need to use to make things accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** mp3 (1)
> **Speakers:** - the (1)

#### [Understanding media types](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=0)** - Whether we're talking about images, interactives, audio, or video content, we need to follow a decision making process to determine how we'll make that content accessible. Here's how we normally break content down into groups. First, some types of media content that is considered informational, this is what we call content that is important in and of its own right, where important information is contained in that image, video, or audio. This kind of content needs a text equivalent. Here's some familiar examples of that type of content. The image of the T-shirt on the product page, that likely needs a small description of the T-shirt to go with the information that's conveyed visually. Or think of the podcast. If there is no text based equivalent for the audio file, the content is just outright missing for people with certain disabilities. For Mary, as she creates her content for her students, there's a lot of detail in the visuals, either images or video that is useful to her students. We also have content that is considered functional. This includes images that are part of links or form controls, and that are used for navigation or for performing tasks within the browser. Think of those images on the Green Thumb Lawncare site that provide the pricing for the various services, and the logo in the header of the site. Each of those is part of a link, and therefore, active or functional. The SVG graphics used for the play and pause button on the audio player is also functional.
>
> **[1:37](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=97)** These images are important because they will tell someone about the link, or the function that the buttons will perform. Similar to informational media, this content needs a text equivalent. Finally, we have content that is considered decorative. This includes images or other media that aren't really that important to the page. Think of the arrows in the navigation of our shopping cart. There's not much value in those arrows. So they're likely just fine being considered decorative. A decorative image or other media does not need a text equivalent. A good rule of thumb is to ask yourself, "If this media was gone, will the meaning of the content or page be affected?" If the answer is yes, you need a text equivalent. And if the answer is no, you don't. Now, let's review each scenario and make some decisions on each piece of media on the page. We'll start with the podcast and its audio player. The controls on the player. Are they informational, functional, or decorative? They're functional because they're going to be used to tell someone what function that button performs. They need a text equivalent, and they're pretty straightforward. The text equivalent will depend on the button that's showing, play or pause. What about the podcast audio content itself? Rose loves podcasts, and is deaf. Is that content informational, functional, or decorative? I hope this one is pretty clear.
>
> **[3:13](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=193)** It's informational. The content is valuable in and of its own right, so she needs a text equivalent. The best way to provide a text equivalent for a podcast is to publish a transcript of the audio. Here's an example. We usually publish the transcript on the same page as the podcast itself so that all the different formats of the content are in the same place. Finally, let's look at the product page. We've got the shirt itself, the color swatches, and the arrows in the site's breadcrumb navigation. The shirt, we've already decided that's informational. So it needs a text equivalent that conveys the visual information. How about something like, "Front view of our sky blue crew neck T-shirt." That should convey the same detail as the photo. And what about the color swatches? They're functional, and so they need a text equivalent that conveys their function. Simply using the color names is fine. Blue, olive green, red, or pink. These equivalents let the person know which color of shirt they're selecting. The arrows, this is a bit of a judgment call, but there's not much value to them. They convey a small amount of hierarchy, but that detail is of limited value since it's already available in many other places on the site, in the header and in the navigation. So we can allow those arrows to be decorative, which means they don't need a text equivalent. There you have it.
>
> **[4:46](https://www.linkedin.com/learning/accessibility-for-web-design/understanding-media-types-14871241?u=76281980&t=286)** This can get pretty complicated, but the bottom line is that almost all media fits into one of those three types. Ask yourself each time you're designing and building something, is this informational, functional, or decorative?

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** svg (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - whether (1)

#### [The importance of text equivalents](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=1)** - Now let's look a little more closely at our scenarios to understand the impact and importance of getting text equivalents right. We'll start with the podcast here. We see this very often. People will publish show notes to go along with their podcast. They're usually just a quick bullet point summary of the topics that were covered and are often published instead of transcripts. But that's not a good text equivalent when we compare it to the entire content of the podcast. Even without knowing the content of this podcast episode, you can tell that these show notes don't cut it. Is this list of bullet points enough for someone that can't hear to get the content of the audio? It simply isn't. People that are deaf or hard of hearing need the transcript. While you as the publisher might look at it as an add-on or additional format, for someone that's deaf, it's their main format for consumption. Look back at Rose's persona. She likes podcasts and downloads and syncs for offline access because she travels a lot. Having the transcript is essential for her to consume that content. And if you want to level up a little, make the transcript easily downloadable in a nice, easy to read format. Now, that will make it easy for Rose to consume the podcast. Okay, what about our [[E-Commerce]] purchase? We've already seen two versions of this page. One where there's just color swatches and one where those color swatches are paired
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=94)** with text versions of the color names. In the first version, without the text, the swatches needed a text equivalent because it was the only way to get the color selection. On those, we used aria label equals color name so that assistive technologies could announce the color selections when a blind person was reading the page. But what about when we put the text out there for everyone to see? Now the swatches themselves don't need aria label because they've got a text equivalent right beside them. So now we can use aria hidden equals true to avoid repetition. We're using SVG here so the mechanism is a little different than if we were using images. If we were using PNGs or another image format, we'd use alt text, like this. Alt equals olive green. And then when the text is beside the swatch image, alt equals quote quote. This null alt attribute will tell assistive technology that it doesn't need to read anything out when it encounters that image. The same is also true for aria hidden. If we look at our lawn care customer, we have two scenarios to consider. One, the person reading the page with a screen reader, and two, the person navigating the page using voice recognition. Let's take a look at some examples of alt text done wrong and then compare that to alt text done right. All of those images are part of a link. Do you remember what we call that type of image? I'll give you a hint.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=186)** It begins with an F and ends in unctional. That's right, a functional image. They're all part of a call to action. So for each image, there's a meaningful text equivalent. Let's listen to a screen reader run through those links.
>
> **[3:23](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=203)** - [Computer] Green Thumb Lawn Care link, Home link, Services link, Packages link, About Us link, Contact Us link, dollar 149 link, dollar 59 link, dollar 79 link, package dash landscape dash price dot PNG link.
>
> **[3:39](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=219)** - Did you hear the alt text? Did it match what was on the screen? Sometimes yes and sometimes no. Unfortunately, the screen reader read out $149 for the weekly maintenance package. Maybe it was just a typo, or perhaps that was the old price for that service. Either way, the alt text is wrong and a person using a screen reader isn't getting the right message. The custom landscaping image had no alt text on it at all, so the screen reader read out the image's source attribute. It was part of a link so it had to read out something and hope for the best. There have been numerous accessibility-related legal cases in the past decade. And many of them include scenarios just like this, where a person using a screen reader gets incorrect content or sometimes no content at all. They miss deals, content, or even get different pricing altogether. The alt text should be more like this.
>
> **[4:41](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=281)** - [Computer] Headings links, Services link, Packages link, About Us link, Contact Us link, dollar 49 weekly maintenance link, dollar 59 semi-monthly maintenance link, dollar 79 weed maintenance link, starting at dollar 900 Custom Landscaping link.
>
> **[4:59](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=299)** - The alt text needs to convey the same message that is shared visually. Screen reader users aren't the only ones that use alt text. People using Dragon naturally speaking need it too. When we use voice recognition software, we see the thing on the screen that we want to activate and we say it, like this. Click $49 or click custom landscaping. If the alt text isn't right, a Dragon user won't be able to easily operate that interface. Let's take a walk through the same example using voice commands. Click $49, click $59. Go back, scroll down. Click custom landscaping. Scroll up, click $49. Since those base-level commands didn't work, a person using Dragon will need to use a fallback mechanism to activate those links. In this case, we'll use the mouse grid. Mouse grid four, nine, click that. That mouse grid is a convenient method for activating things that don't work the way they're supposed to. Unfortunately it might take three, four, or sometimes five or six steps to narrow down
>
> **[6:32](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-text-equivalents-14872200?u=76281980&t=392)** on the thing that you want to click. Our goal is to make things easy to use for everyone. Making someone use the mouse grid is not the way to do that. If we switch tabs and look at a repaired version with the right alt text, you'll see a big difference in the way it works with voice recognition. Click $49, go back, scroll down, click custom landscaping, go back. Hopefully you can see the difference. Getting text equivalents right is one of the most important things you can do for people with all kinds of disabilities. Doing this well requires thought, care, and intention, but it pays off with great success and ensures that people with disabilities can use the sites and content that you create.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1)
> **Speakers:** - [computer] (2), - now (1), - did (1), - the (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Env Vars:** svg (1), png (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)

#### [Accessibility for complex visuals](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=0)** - All the scenarios we've reviewed so far in terms of text equivalents are pretty straightforward. It isn't always that simple though. Sometimes, a visual is part decorative, part informational, and part functional all wrapped up in one. Here's some scenarios that require a bit more thought when we're deciding how to implement a text equivalent. In each case, here's the approach that you should take. One, ask yourself what is the overall purpose of this visual? Two, ask yourself what is the best way to convey that? And three, ask yourself which parts of this visual are decorative, informational, or functional? Once you answer those questions, you'll have a better handle on what to do. In this first scenario, we'll look at the Green Thumb Lawncare locations. What's the overall purpose of the map? This has a multi-part answer, but in terms of importance, it shows the locations around the city, presumably so that people can get in touch with an [[Microsoft Office|office]] that might serve their part of the city. That's informational, so it needs a text equivalent that represents that. Easy enough. That detail is provided as text outside the map with a listing of the locations and contact information. There's also the ability to manipulate the map. The images in the corners that are used to move around and [[Zoom]] in and out enable that. Those are functional images and therefore need
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=95)** a text equivalent that tells their purpose. Pan left, pan right, zoom in, zoom out. Finally, there's the map tiles themselves. While they're interesting, they aren't really that important to the overall visual. For the most part, we consider those decorative because the main purpose of the map was about the locations of their offices. So we don't worry about a text equivalent for every single map tile that's on the page. In this second map, we're looking at a route to go from one place to another rather than listing locations. So what's the purpose of the main map? It's all about showing a route, and that's informational. So we need a text equivalent. The solution, show a text-based version of the directions outside the map itself that communicates the same thing that the visual rendering communicates. We also talked about Mary a little earlier and her interest in using podcasts and video to teach her students music. The visuals she's creating for her video lessons are complex too. They show her finger positions on the violin, the angle at which she holds her violin bow, and there's a lot of complexity in some of the drills. So the students need to look at their own hands while they're practicing. Much of that is informational content represented in video form. Mary's first step is to provide captions for her video. They're a text equivalent that visually show during her videos for people that are deaf
>
> **[3:10](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=190)** or hard of hearing. But what do we do for her students that are blind and can't see where Mary is putting her fingers? In this case, we need something more detailed. Her videos need some audio description where she describes the positions of her fingers and the angle of her bow to the students. Audio description is often used with television shows and movies so people can understand what's happening on the screen without being able to see it. Mary might provide that just by describing it herself in her videos, or she might provide a separate audio-described video that gives that detail. Audio description is effectively a text equivalent for important things that are happening on the screen. And when that audio description makes its way into the transcript of the video, she'll have a great resource with detailed instructions that almost reads like a screenplay. While its audience is primarily people with vision and hearing-related issues, it'll end up being useful for everyone. The final two examples show more interactive visuals, a visual representation of some data. The first is some [[Statistics]] from an accessibility assessment our team completed. It shows a breakdown of the affected population for the issues that we found. In this case, this is both informational and functional. Informational because it represents data and functional because you can click on each bar in the chart, and it'll take you to those details.
>
> **[4:45](https://www.linkedin.com/learning/accessibility-for-web-design/accessibility-for-complex-visuals-14875137?u=76281980&t=285)** Some people will need a text equivalent, and we can provide that by creating a toggle that allows a person to view the data as a simple table instead of as a graph. In the second one, we've got a visual agenda. It's also interactive and explorable. And instead of having a toggle in the interface to switch between views, it made more sense to show the text equivalent for the visual all the time. This can get quite complex, but your job as a designer remains the same. Figure out the purpose of the visual, figure out which parts are decorative, informational, and functional, and then make sure your design takes into account appropriate text equivalents for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[Microsoft Office|Office]] (1), [[Statistics]] (1)
> **UI Navigation:** toggle (2), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - all (1)


### 6. Form Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Labeling forms](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=0)** - Labeling form fields is one of the simplest things you can do to ensure that [[Forms]] are more accessible. They create a programmatic relationship between the on-screen text and the form control itself so that the forms can be understood and used by people that can't see the screen. When placed correctly on the page they help people with low vision better understand which piece of information goes where in the form. They help people with mobility and dexterity impairments because they create bigger targets for clicking, and they help make things work with voice recognition and other assistive technology. They're also useful for anyone with memory-related issues, which let's be honest, that happens to all of us at some point. Form labels help everyone, so here's the number one thing you need to consider when designing and building forms. Every form field needs a label. There's lots of different ways you can accomplish that, but the bottom line is that you need a label for every single form field. We've talked a lot about screen reader usage in this course so far, so we'll just talk through the basics here. Every time you move to a form field the screen reader tells the person what the name of the form field is and what type of control it is. That lets them understand how they should use the control. When Mary hears it's a text box she knows she can just type, but when she hears it's a checkbox she knows to check it off using her space bar. And when she hears it's a radio button
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=95)** she knows to use her arrow keys. Labeling the form fields lets her hear exactly what she's doing and what information she should be providing. Here's some typical forms. I want to show you some of the benefits of labeling forms for people with mobility and dexterity issues, and I'll share some typical gotchas for good measure so that you know to watch out for them. Maxine heard about podcasts from her grandchildren, and she's decided to go look for some listening material. Remember though, Maxine has pretty severe arthritis. She uses her keyboard for a lot of things, and uses her mouse to a certain degree. Clicking on small targets is a challenge for her. She doesn't have the steadiness in her hand to click radio buttons easily. Here's our podcast search form. Notice these radio buttons and the text beside them. Clicking on the radio buttons with a mouse might be quite difficult for Maxine. If she's off by even a few pixels she won't select that radio button for searching podcast titles only. However, if we use a proper label for the radio button the clickable area now becomes much bigger and includes the text podcast titles only. Here's a version that is properly labeled, and you can see that as we click on the words beside the radio button the radio button is selected. When we use that label correctly we make it easier for people to access its field. This same holds true for any form field.
>
> **[3:12](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=192)** Clicking the label or tapping it on its touch screen will place the focus in that field or select it, depending on the type of control it is. We can use that fact to very quickly test and see if we've done all of our form field labeling properly. In the shipping form example you can click on every visible label and see where the focus goes. If it goes nowhere the form field isn't likely labeled at all. If it goes to the wrong field like it does here when I click on Last Name and the focus moves to the First Name field, that's usually a copy and paste error. Try this on the forms that you have on your own sites. Click the label, and what happens? Does the focus move to the right spot? Does the checkbox or radio button toggle its state? If not, get in there and fix them up. Remember I said that every form field needs a label? How does that work here for Street Address? We've got a visible label saying street address, but there are two fields under it, presumably for a two-line address. Visually the words street address applies to both, but how does that work for someone that can't see the screen? We build in a hidden label for the second line of the address using aria-label or even a hidden label. So, while it looks like not every form field is labeled, they really are. One of the best indicators of accessibility for a form is to check for one-to-one relationships
>
> **[4:45](https://www.linkedin.com/learning/accessibility-for-web-design/labeling-forms-14875142?u=76281980&t=285)** between form controls and their labels. Sometimes you'll have two form controls with one label like the shipping address, and other times you'll have two or three pieces of information that go with a single form control. They all need to be related together programmatically. One-to-one is your guide. Think about that when you're designing, and think about it when you're developing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (6)
> **UI Navigation:** click on (3), checkbox (2), toggle (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)
> **Speakers:** - labeling (1)

#### [The placeholder attribute](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=0)** - The placeholder is a relatively recent addition to the [[HTML]] tools we have available to us. It is supposed to be used to provide a hint on how to fill out certain form fields. You can use a placeholder to show a date format, for example. Here's how we use it. We use the placeholder here in the Start Date field to show that we want the format to be MM/DD/YYYY. One of the challenges though is that the placeholder disappears as soon as you start typing. The fact that we've got a useful piece of information in the placeholder that disappears makes it a little bit less useful. It can have a pretty significant impact on someone with literacy or memory related issues. One of the techniques we use to make it a little more useful is to make the placeholder persist. When we place focus in the field and start typing, we take the value of the placeholder and append it to the existing label. That ensures that it'll help everyone. Another common trend is using the placeholder as a label. We really shouldn't do that. The placeholder and label performed two different functions. Designers started doing this for a couple of reasons. One, they saved vertical space by putting the label where the placeholder is. And two, they created less visual noise by keeping the text and the field as one visual unit so that it was theoretically easier to digest. This had some impacts though.
>
> **[1:35](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=95)** People with low vision or cognitive issues often thought the form was already filled out and that they didn't need to do anything with it, subsequently causing errors. The placeholder is also a little lighter color by default in browsers, and was easy for a person with low vision to miss completely. It also meant that form fields were effectively unlabeled. Without a programmatic label, it became more difficult for people using screen readers and voice recognition to easily fill out the form. We've started to see this pattern emerge, and it's a reasonable compromise. We get some of the space saving benefits, but without many of the drawbacks of using just a placeholder. There hasn't been enough research on the potential impacts of this type of design on Giovanni, who is on the autism spectrum. It might be completely unpredictable for him and create a certain amount of anxiety. That'll be something that we'll need to explore more before we can fully understand its impact to people on the spectrum. In this form, all the form fields use a label that lives in the placeholder spot. And when we focus on the field, the label animates and fades its way to a spot above the field. This is only one possible visual treatment. We've seen versions where the label will slide down or to the right, and sometimes stays visually within the bounding box of the form field. For all of them though, there is always a visible programmatic label,
>
> **[3:09](https://www.linkedin.com/learning/accessibility-for-web-design/the-placeholder-attribute-14872198?u=76281980&t=189)** and that makes it more accessible for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1), yyyy (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [HTML5 form inputs](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=0)** - One of the best features for accessibility has been the ease of use that is provided when we use the new HTML5 form inputs. I say new, like they're fresh, but they were first formally proposed as early as 2005. Of course, it took time for them to be codified and implemented in browsers, but we're in a place now where support for HTML5 form types is quite good. These include specialized versions of text boxes, like tel, URL, email, number, date, search, and a host of others. The biggest reason these are an accessibility benefit is that they're recognized on mobile devices as being different by the operating system. [[Forms]] are designed for input. So when we use these form types on most modern mobile devices, we end up with a keyboard that is customized to that particular type of field. Here's some examples from our Green Care Lawn quote form. When we use the phone number field, which has a type equal to tel, we get a keyboard that is optimized for telephone number entry. This is a huge benefit for everyone, but especially Mary, who uses her screen reader to enter her phone number, and Maxine, who appreciates the large button sizes. When we use the email field with a type equal to email, we get a keyboard that shows the @ symbol
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/html5-form-inputs-14872201?u=76281980&t=94)** and dot by default. Finally, the date fields use a type equal to date, which shows a native date selector widget with a convenient method to clear the date that you've already entered. All of these make entering text easier because of the context sensitive keyboard. Unfortunately, we don't have the same set of tools on the desktop yet. Some people with mobility challenges use an onscreen keyboard. It would be highly beneficial for those keyboards to be context-sensitive too. As you can see here, the same fields don't have the same benefits on desktop. Keep all of these things in mind when you're creating your designs and working with the implementation team to make sure that you're documenting which specific types of form fields you should be using. Build them into your pattern libraries, [[Design Systems]], and project-level design specs to make sure all these details are included, and you'll make it easier for everyone to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Design Systems]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** html5 (2), url (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Form validation and error messaging](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=0)** - When we use [[Forms]], we need to make sure that the input for those forms has both the correct format and expected values. And when they don't, we need to show some kind of error messaging to help people fix the issues. It's not the most glamorous of topics, but it's certainly one that you need to consider as a designer. It isn't as simple as show an error message on the page. I've seen lots of strategies for that that just don't work. Have you seen an error displayed in a modal dialog and then had the modal disappear, taking the error message along with it? Have you seen the error message at a consistent spot at the top of the page but nowhere near the field it relates to? Have you seen error messages off to the right side of form fields and then had them fade away after 10 seconds? All of these strategies may seem like good design ideas when we come up with them, but they're not helpful for anyone, including people with disabilities. So, what should you do? Let's think of all the best practices for the design of error messaging. First, establishing a consistent placement and pattern for the error messages is a good thing. You might always show the error message above the form field and always include the same error icon. That helps everyone, but especially people that expect that predictability, like Giovanni, who is on the autistic spectrum. It's also useful for people using screen readers,
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=94)** as they'll have a consistent method for identifying errors. They know that when a field's data is wrong, there will always be an icon that is announced as error, and they can read the exact error by pressing the left arrow key, for example. Second, the error should be close to the field that it pertains to. It needs to be in visual proximity of the field in error so that it's easily discoverable. This is a very high priority for people like Sean with low vision. When he's magnified at 400% and looking at a form field, the error message should be somewhere in his line of sight. Third, the error message content should be as simple as possible. No jargon, and written in plain language so that it's easy to understand for everyone. This helps people with literacy-related issues, people that are deaf or hard of hearing, and anyone that doesn't natively speak the same language as your website's interface. Finally, the error should be programmatically connected to the field. This isn't as much of a necessity for designers to take care of. It'll usually be coded to connect to the field by a developer. We often put the error message right inside the label for the form field or use aria-describedby to make sure a screen reader user hears that the field has an error. All of those principles are reflected in this simple error message on our billing form. When I activate the Next step button
>
> **[3:09](https://www.linkedin.com/learning/accessibility-for-web-design/form-validation-and-error-messaging-14870325?u=76281980&t=189)** without filling in the form, I immediately get some feedback and error messages for many of the fields. There's a few things to note about them. They use consistent placement and iconography. They're visually close to the fields they apply to. They use plain language, and they're properly connected to the fields by putting the messages in the label. You'll need to think about how to apply this to other scenarios. The design we have here isn't your design, so don't just expect to drop this into your designs and have a cohesive error messaging system. You'll need to think about how it applies in other scenarios and how it fits your design. How will it work for error messages that are longer? How will they respond to text resizing? How will they work in a different language? There's lots to consider, but if you consider them, you're doing your job really well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **Analogies:** for example (1)
> **Speakers:** - when (1)


### 7. Flexibility and Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Flexible vs. fixed width designs](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=0)** - Which resolution do we design for? In the early days of the web, it was 640 x 480. Then, when our analytics showed us the dominant screen resolution was 800 x 600, we rejoiced and quickly moved to making all our designs fit that 800 x 600 screen. We did the same when we jumped to 1024 x 768. Many people moved from designing for print to designing for the web, and they naturally created fixed width, pixel perfect designs, just like it was being output on paper. It didn't have to be that way, though. Even in the early days of [[Web Design]], we could design things that had flexibility built into them. Rather than confining things to a fixed number of pixels, we could use percent units for specifying widths. In fact, there was a many years long debate between designers about fixed versus flexible width designs. That's hard to believe now. When we ask the same question today, which resolution do we design for, the only answer is, all of them. Today, creating more flexible designs seems to just be accepted as how we design for the web. Maybe it's because more people are coming to the web design without having a print background, or maybe it's because responsive design techniques encourage us to design things that work well at all kinds of different resolutions. Either way, it doesn't really matter. Designing with flexibility in mind
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=93)** generally makes things better from an accessibility perspective. Here's a few reasons why. Fixed layouts don't often respond well to text resizing, and many people need that text resizing, whether they've got low vision or are simply getting older and need to bump up the font size on their screen. Flexible layouts adapt better to different size screens than fixed widths do. Which means that flexible layouts respond better to things like font size changes in the browser or at the operating system level. Fixed layouts introduce horizontal scrolling on smaller screens, either smaller devices or smaller [[Windows]] that aren't maximized on a desktop or laptop screen. Watch here as we take our podcast page and resize the browser. When we get to the point where the screen is quite small, the fixed width introduces horizontal scrolling. That makes it very hard for Sean to read because he has low vision. He has to work a lot harder to read the transcript when he has to scroll, because he has to do a lot of left and right scrolling to get at the content, because the design doesn't adapt to fit the screen he's working on. If we compare that to the same page that is designed to be both flexible and responsive, you can see that the content adapts to the smaller browser view port size and doesn't introduce any need for scrolling. That'll it much easier for Sean to consume that content. Sometimes we design just certain parts of the interface to be flexible.
>
> **[3:07](https://www.linkedin.com/learning/accessibility-for-web-design/flexible-vs-fixed-width-designs-14871235?u=76281980&t=187)** Here's a look at that Lawncare Locations page in a resizing browser window. The flexibility on the width of the map makes it such that this page works well at a number of different viewport widths. Now, remember, it's not like people out there in the real world sit there and resize their browser windows like we do. We do it because we're seeing how the layout will [[React.js|react]] to being at different sizes, not because people resize their browsers all day. The reality is, though, if we can design things well that work for a resizing browser window, we're going to create things that work for small screens, big screens, and all the sizes in between. One of the biggest ideals for designing and building for accessibility is to take people's needs into account, no matter how they're viewing or working with what we've created. When we design our page templates to be flexible, and we design parts of our pages to be flexible, we take into account text resizing, user settings, and preferences. When we do that, we make things better and more accessible by meeting people where they are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (2), [[Windows]] (2), [[React.js|React]] (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - which (1)

#### [Responsive design and accessibility](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=0)** - Responsive design is well known for reflowing content and parts of the page to work well at different sizes, usually known as mobile, tablet, and desktop. Those names imply too much certainty about the device that a person is using though. So many have reframed mobile, tablet, and desktop to be small, medium, and large glass. Responsive design is a huge benefit to accessibility. The most important accessibility benefit to responsive design is the conscious, intentional reflowing of content to fit appropriately in different viewport sizes. We go well beyond the fixed versus flexible width debates of old. Even when we were using flexible widths, we still ended up squishing too much content on the screen at once. Now, using responsive design techniques, we're making much smarter decisions about how we should reflow content on different sized screens. That ability to reflow content intelligently is incredibly helpful to people with low vision. When you're reflowing content in a responsive design, here's the number one thing you need to remember. Linear order matters. We've already covered this topic in other chapters, but it bears repeating because it is so important for accessibility. Linear order matters to someone that uses a keyboard, both when tabbing through an interface at a page level and at a micro level when tabbing through a form. So we need to make sure that all your content flows
>
> **[1:36](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=96)** in a logical order at all breakpoints, small, medium, and large. That helps make it read properly and also makes for a logical interaction flow. Some really tricky areas are making sure that navigation works correctly in responsive designs. Mary uses a screen reader on her phone. When she visits a site and activates the main menu, the navigation slides in from the left of the screen. If she keeps moving forward from that point using her screen reader, the next thing that takes the focus should be the newly exposed navigation menu, except it very often doesn't. The menu came in from the left and was usually before the activation toggle in the source. That means you'd need to move backwards to get to the navigation, and that's not intuitive at all. We need to ensure a logical flow of all content independently at all different viewport sizes or breakpoints that we're creating. Now, even if we do a perfect job of getting the linear flow right, that doesn't make the [[Representational State Transfer (REST)|rest]] of our responsive design automatically accessible. There's a few things that we need to take into account to make sure that our designs are accessible to everyone. Take your multicolumn [[Forms]] and reflow them into a single vertical stack at smaller viewport sizes. Or consider just making them a single vertical stack on all viewports, and you'll help everyone at all viewport sizes.
>
> **[3:11](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=191)** Use the smallest size to prioritize what should be in the interface. If it isn't important to have at the smallest size of the interface, why should it be present in the largest size? Maybe it shouldn't. If you make your interface simpler, you'll make it easier to use for everyone. Remember that some people may want to resize the interface on a touchscreen using pinch, [[Zoom]]. There's code out there that lets you disable zooming on the interface on touchscreens. I'm not even going to show it to you because I don't want you to use it. Some people need to resize the interface, period, so we're doing our job by letting them. Here's a few other scenarios to consider. My father-in-law had low vision, hearing issues, and some dexterity problems when using a mouse. He used a large, 21-inch monitor, but his resolution was set at 832 by 624 pixels. Why? That's the size he needed to be able to see stuff on the screen comfortably. Knowing that he likely didn't always run his browser window maximized means that his viewport height and width was likely considered tablet or medium glass. We've also seen designs that assumed tablet equals touch. If we make that assumption that he's on a touchscreen and show a design that specifically relies on touch interactions to operate, we'd be wrong. Viewport size can't be used as a proxy for anything.
>
> **[4:50](https://www.linkedin.com/learning/accessibility-for-web-design/responsive-design-and-accessibility-14874212?u=76281980&t=290)** Our team regularly conducts [[Usability Testing]] sessions with people with disabilities. On several occasions, we've worked with screen reader users in those sessions that didn't use a monitor. Why? They didn't need them. They couldn't see the screen anyway, and they didn't share their computer with anyone else. And in many of those sessions, we saw screen reader users open up a browser window, completely unaware of the browser window's size. They were using a keyboard and their screen reader but interacting with the small and medium glass size designs because their browser window was half the width of the screen. Or it was 150 pixels by 150 pixels because that was the size of the last window that was open. The opposite is true as well. Large touchscreen devices are becoming more common. Hopefully both of these make this point clear. When you know the viewport size, don't assume a small viewport is a touchscreen. Don't assume a large viewport isn't a touchscreen. Don't assume they will or won't be using a keyboard. Don't assume you know anything other than viewport size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Forms]] (1), [[Zoom]] (1), [[Usability Testing]] (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (2), known as (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - responsive (1)

#### [Designing for text resizing](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=0)** - One of the things that we do quite well with responsive and flexible designs is designed for flexible widths. That's fantastic as it allows for a lot of variation in line length, tech sizes and [[Zoom]] levels, and that benefits people with all kinds of different disabilities. However, there's one thing that we consistently forget about in the design process, designing with flexible height as well. In this chapter, I'll show you why you need to design with flexible height in mind, as well as width. And we'll explore some of the settings that people use to make text look the way they want it to. First, let's look at a setting that some people with low vision might use. When thinking about low vision, we thought a lot about Sean, and how he might work with websites. He needs 400% magnification, but that's just him. Because he needs that level of magnification, he's likely using an actual screen magnifier, either one that's built into the operating system or a third-party magnifier like ZoomText. Other people with low vision will need more magnification than Sean. Maybe even up to 1600%. Some people might need less, and some people might combine browser text resizing with operating system settings, and magnifier settings to get it just right for them. Personally, I don't have low vision, though I will admit, my eyes aren't as good as they used to be. Sometimes I need to bump up the font size
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=94)** to 150 or 175% so that I can read the screen more comfortably. Here's what I do. I set my browser to zoom the text only. This strategy is also used by some people with low vision. Why? I don't need to increase the zoom on images or other things on the page. I just want to make the text bigger. When I zoom the entire interface, usually things get to a point where all the content becomes too wide for the viewport and causes horizontal scrolling. Now it has become more difficult to read rather than easier. When I zoom the text only, effectively resizing the text, that means that the content still fits in the viewport, and I don't get the horizontal scroll. Now I can read the text comfortably. Almost all browsers have this capability built-in. And those that don't, have easy to find extensions that make it easy to add-on. It serves as low-tech assistive technology, and it's in a familiar tool, the browser. Let's look at two versions of our lawn care packages page. The first one uses fixed heights on the packages containers, and the second uses flexible heights on the packages containers On the fixed height version, we've set the container size at 225 pixels. When we resize the text,
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=186)** that means that content gets cut off. On the other hand, when we don't set a fixed height but use a relative height like 14 M or 14 REM, we end up with a container that shows all the content, and flexes according to its content. It's as simple as that really. We're always checking to make sure that we design specifically for text that resizes. It's like stress testing your design. In our podcast page, we've designed that with flexible heights for everything. That allows content to drop to two lines easily as tech size increases. If we placed a fixed height on this navigation, we'd end up with white texts on a white background, and it wouldn't be readable. In these examples, we saw content getting cut off but that's not the only thing to watch out for. You should be able to resize text up to 200% and everything should still be usable. That means that, content doesn't get cut off or disappear. Content doesn't overlap other content making it unreadable. No meaning or functionality is missing. We say functionality because this can just as easily happen to [[Forms]] as it does to text, and other types of content. And content blocks don't get so narrow that they become unusable. These are all things to take into account at the design stage. So please make sure
>
> **[4:39](https://www.linkedin.com/learning/accessibility-for-web-design/designing-for-text-resizing?u=76281980&t=279)** you take your time and think them through, and specify in your design documentation that containers for things need to account for text resize, and should use relative sizing for widths and heights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[Forms]] (1)
> **CLI Commands:** make (5), find (1)
> **Definitions:** means that (3)
> **Env Vars:** rem (1)
> **Analogies:** it's like (1)
> **Warnings:** watch out (1)
> **Speakers:** - one (1)


### 8. Structured Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Content hierarchy and headings](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=0)** - Your friend sends you a link, and you click it. It opens up in your browser. You likely look around a little before you dig in. You start to think to yourself, "What site is this? What is this page even about? Okay, it's an article. I likely should read it, but should I read it now or save it for later? Hmm. How long is the article? Okay, not that long. Let's read a bit and then decide." As you are having that conversation with yourself, you're likely engaging in some pretty typical behaviors. You likely look around the page a little to see what site the article is on. Your eye is drawn to the main heading or the large graphics that go with the article. Maybe your eye jumps around a little distracted by those ads, but you come back to the main article. You start in and read the intro. Then you scan down the page to see what else might be in the article. Maybe you stop part way down when you see a heading fly by as you scroll. You read a bit of that content. You decide you can't read it all right now, but you're going to save it for later. People with disabilities are generally speaking, going to do the exact same thing. They might read the whole thing, but they might not. It all depends on their mindset, their interest in the article, and how they respond to the content that they started to read. They'll scan the page too just like you did. The only difference is that some people
>
> **[1:33](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=93)** with disabilities use different tools to actively read and scan. Behavior is behavior, it's just the tools that are different. The most significantly different tool that people use is a screen reader. Mary uses one. Sean uses a magnifier almost exclusively on the desktop, but sometimes he switches to a screen reader on his mobile phone so that he can give his eyes a [[Representational State Transfer (REST)|rest]] from working with that tiny screen. So how would Mary or Sean use the same page we looked at? It'll vary from person to person, but here's what it might look like. The page loads, and then Mary presses the one key. That takes her to the first H1 on the page. She listens to that heading. and it sounds interesting, so she presses the right arrow to read the next thing that's there. She hears the author's name and the date the article was published. Still interested so she moves forward more. She starts to read the summary of the article. In the middle of that paragraph she presses the keys to read out the title of the window she's in because she wants to verify the site that she's on. She hears it and then goes back to reading the intro paragraph. She wants to figure out how long the page is, so she switches to headings mode, and flicks through the headings in the article. She listens them from top to bottom, and then goes back from bottom towards the top until she gets about halfway through.
>
> **[3:06](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=186)** She starts reading the next paragraph, and then realizes she'll need to read this later. It's too long for her to read right now. It's the exact same as you. So don't think of it any differently. Make sure your content is written in a way that helps people make decisions quickly. Should they read more or not? Your main heading and introductory paragraphs will help with that. Put the important things first so that it can be consumed quickly. People with literacy issues will use the heading structure as well. Sometimes they'll have tools that figure out the headings on a page so that people with literacy, and comprehension difficulties can click on a heading, and consume just the content between that heading and the next one, effectively presenting just one section at a time. Ask yourself. "If someone just reads the headings in my page, will they get a good understanding of what's on the page? What if someone only reads the first sentence of every paragraph?" Reading just the headings or the first sentence of every paragraph are both easy to do with assistive technology. So make sure your heading structure reflects the content in the page, and is well-structured with appropriate levels of headings. There are some simple tools you can use to accomplish that. The Web Developer extension for Chrome is just one. It includes a tool to examine the document outline. Here we use it on some of our pages like the podcast pages
>
> **[4:39](https://www.linkedin.com/learning/accessibility-for-web-design/content-hierarchy-and-headings-14869537?u=76281980&t=279)** to see if the headings are logical, and make sense. Do they help people scan the page, and make decisions about whether or not they want to read further? It's as simple as saying view document outline, and the heading structure opens in a new tab for you to examine. Does the heading structure tell the story of your page? If it does, you're creating reasonably accessible content. If it doesn't, you've got some work to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - your (1)

#### [The importance of page titles](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=0)** - Page titles are useful to everyone. They are visible in the browser's window title bar or the tab and are used by default when bookmarking a page. Titles are particularly important to people like Sean and Mary who can't see the screen well or at all. Why? The title of the page is the first thing announced by a screen reader when a page loads. It's an orientation cue that lets people know what the page is about and usually confirms that they're on the website or page they expect to be on. It's important that each page in a site have a unique title. It doesn't make sense to have every single page of the Green Thumb Lawncare site have a title of Green Thumb Lawncare. They need to distinguish one page from another. So we use Lawncare Package-Green Thumb Lawncare. Locations-Green Thumb Lawncare. Contact Us-Green Thumb Lawncare. When we are checking out to buy our new T-shirt from the Merch warehouse, we want titles like this. T-shirts-Merch Warehouse. Sky blue crew-neck T-shirt-Merch Warehouse. Billing information-Merch Warehouse. And shipping information-Merch Warehouse. I usually recommend creating titles that read from specific to general. That puts the distinguishing information first. If you look at the list of titles
>
> **[1:34](https://www.linkedin.com/learning/accessibility-for-web-design/the-importance-of-page-titles-14871242?u=76281980&t=94)** from the Merch Warehouse, it would be a little less convenient to listen to Merch Warehouse first in each title. By putting the distinguishing information first, we help people confirm quicker that they are where they expect to be. You might even get more specific. What about billing information, checkout, Merch Warehouse. Shipping information, checkout, Merch Warehouse. Why? This tells you that you're filling out billing and shipping information in the checkout process and not while you're logged in managing your account. You should also make it read similarly to the h1 on the page. The page title and the h1 should work together to say here's the main topic of this page. These are small details but they are very useful for people with disabilities and specifically, visual impairments as an orientation and wayfinding cue.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - page (1)

#### [Page structure](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=0)** - We've already talked about heading structure and page titles. Using good, clean markup on the [[Representational State Transfer (REST)|rest]] of your page is an extension of that same concept. Use meaningful markup in a logical order. You should use [[HTML]] markup the way it was designed to be used. Choose the most meaningful [[Semantic Markup]] possible. That will ensure that the visual structure of your brilliant design is conveyed to someone that can't see it. Look for opportunities to understand and use HTML5 elements like the header element, the footer element, the aside, article, paragraph, main, nav, button,
>
> **[0:50](https://www.linkedin.com/learning/accessibility-for-web-design/page-structure-14874211?u=76281980&t=50)** use table for tabular data like our shopping cart and the order summary. Use description lists, ordered lists, and unordered lists. They're all elements that convey meaning. The least meaningful markup we have in HTML are spans, divs, and sections. Use those in cases where there's no other appropriate element. But for things that are meaningful, use the appropriate elements listed in the HTML5 specification. There are all kinds of tools that rely on this markup. Voice recognition software like Dragon NaturallySpeaking, screen magnifiers like ZoomText, or screen readers like VoiceOver, NVDA, or JAWS. They're all more efficient and easy to use when we have a good solid base of semantic markup. When you make sure your implementations use good, solid semantic markup, we also enable people to create their own tools that help them consume things more readily. Work with your development teams to get this markup into your pattern libraries and [[Design Systems]]. When you create this type of markup, people using assistive technologies can use it to their advantage. It usually helps you standardize your practice too, and that tends to speed you up and ensure consistency. It does all that and makes it more accessible. It's a win-win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Markup]] (3), [[HTML]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Design Systems]] (1)
> **Env Vars:** html (2), html5 (2), nvda (1), jaws (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [A challenge for you](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessibility-for-web-design/a-challenge-for-you?u=76281980&t=1)** - Almost everyone I talk with about accessibility says they want to make their work more accessible. But not nearly enough take action, and not nearly enough change the way that they work. So here's my challenge to you, review this course over and over again and pick one thing each time that you go through the course that you can do differently than you do now, and then work on making that happen. If you make one improvement every two weeks, your work is going to be much more accessible in a year. And when you work in concert with developers, you get the opportunity to make a huge difference, not just through creating accessible [[Microsoft Products|products]], but by creating new processes that embrace accessibility and inclusion. If you're looking for more, you'll always find great articles and books from A List Apart, A Book Apart, and Smashing Magazine. And check out my site at [simplyaccessible.com](https://simplyaccessible.com), where my team and I have been working to create more great accessibility content for you. I'm feather on Twitter and derekfeatherstone on [[LinkedIn]]. I'd love to connect with you and hear more about what you're working on and what you want to learn next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [simplyaccessible.com](https://simplyaccessible.com) (1)
> **Speakers:** - almost (1)


## Instructor

- [[Derek Featherstone]]

## Path Context

### In [[Prepare for Digital Accessibility]]
← [[UX Foundations- Accessibility]] | **3 of 8** | [[Web Accessibility for Developers]] →

## Appears In

- [[Prepare for Digital Accessibility]]

---

[↑ Back to top](#)