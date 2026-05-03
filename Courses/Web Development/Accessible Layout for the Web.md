---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: accessible-layout-for-the-web
url: "https://www.linkedin.com/learning/accessible-layout-for-the-web"
duration_minutes: 52
duration: 52m
level: Intermediate
updated: 4/12/2024
learners: 128439
skills:
  - Web Accessibility
  - Web Design
exercise_files: true
github: "https://github.com/LinkedInLearning/accessible-layout-for-the-web-4488047/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH23NLY2hQeNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712947676463?e=2147483647&amp;v=beta&amp;t=C-M4iKqJzuhkZ9Xse2yvyx_OVMdOoLjaRPSZ-F3OSYY"
linkedin_topic: Web Development
learning_paths:
  - '[[Build for Digital Accessibility]]'
prev_courses:
  - '[[Designing Accessible Components In Figma]]'
next_courses:
  - '[[Build an Image Captioning Tool for Visually Impaired Users with Gemini]]'
path_nav: '[{"path":"Build for Digital Accessibility","position":6,"total":12,"prev":"Designing Accessible Components In Figma","next":"Build an Image Captioning Tool for Visually Impaired Users with Gemini"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-accessibility
  - skill/web-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Accessible%20Layout%20for%20the%20Web.md)

![Accessible Layout for the Web](https://media.licdn.com/dms/image/v2/D560DAQH23NLY2hQeNQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712947676463?e=2147483647&amp;v=beta&amp;t=C-M4iKqJzuhkZ9Xse2yvyx_OVMdOoLjaRPSZ-F3OSYY)

# Accessible Layout for the Web

> Accessibility is an important, but often overlooked, aspect of web development. Developers need to create websites that are accessible to everyone, including people with disabilities. In this course, developer advocate and web development instructor Gift Egwuenu teaches you how to create accessible websites by default. Learn about the importance of web accessibility. Find out how to identify and r

> [LinkedIn Learning](https://www.linkedin.com/learning/accessible-layout-for-the-web) | 52m | Intermediate | 128K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Creating accessible web layout for a diverse audience](#creating-accessible-web-layout-for-a-diverse-audience)
- [**1. Understanding Accessibility**](#1-understanding-accessibility) (3 videos)
  - [What is web accessibility?](#what-is-web-accessibility)
  - [Making a case for accessibility](#making-a-case-for-accessibility)
  - [Tools for testing accessibility](#tools-for-testing-accessibility)
- [**2. Accessibility Standards**](#2-accessibility-standards) (2 videos)
  - [Accessible standards (WCAG)](#accessible-standards-wcag)
  - [Guiding principles of web accessibility](#guiding-principles-of-web-accessibility)
- [**3. Creating Accessible Layout**](#3-creating-accessible-layout) (7 videos)
  - [Semantic HTML](#semantic-html)
  - [Accessible navigation and focus](#accessible-navigation-and-focus)
  - [Accessible forms](#accessible-forms)
  - [Accessible tables](#accessible-tables)
  - [Accessible images and media](#accessible-images-and-media)
  - [Challenge: Build an accessible web page](#challenge-build-an-accessible-web-page)
  - [Solution: Build an accessible web page](#solution-build-an-accessible-web-page)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps for improving accessibility in web applications](#next-steps-for-improving-accessibility-in-web-applications)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating accessible web layout for a diverse audience](https://www.linkedin.com/learning/accessible-layout-for-the-web/creating-accessible-web-layout-for-a-diverse-audience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/creating-accessible-web-layout-for-a-diverse-audience?u=76281980&t=0)** - [Gift Egwuenu] The current state of accessibility on the web result in millions of users missing out on valuable content leading to a poor [[User Experience (UX)|user experience]]. We can promote inclusivity by addressing this issue and ensuring we make the web accessible to everyone. In this course, you'll learn the key principles for implementing accessibility and gain practical experience crafting accessible web layouts, including creating accessible [[Forms]], cables, navigation, and media. This course offers modern skill development. It's a step towards contributing to a more inclusive web. I'm Gift Egwuenu, a web developer, educator, and accessibility advocate, and I'm excited to share my knowledge with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Forms]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [gift (1)


### 1. Understanding Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [What is web accessibility?](https://www.linkedin.com/learning/accessible-layout-for-the-web/what-is-web-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/what-is-web-accessibility?u=76281980&t=0)** - [Narrator] Our lives revolve around using the internet to accomplish various tasks every day, but it's important to remember that accessible websites are vital for people with disabilities. According to the WebAIM Report, over 98.1% of homepage have at least one accessibility failure. The three most common being low contrast text, missing image, alt text, and empty links. This statistic shows the importance of prioritizing accessibility in web applications. Imagine navigating a website without the ability to use a mouse or keyboard, or struggling to read a webpage due to poor contrast issues. Unfortunately, these challenges are a reality for many people. As developers, we need to understand the impact of developing inaccessible websites, and ensure all our users can assess the web and enjoy using it. This helps foster an inclusive environment for everyone. [[Web Accessibility]] is a process of designing and developing websites that are usable by everyone regardless of their abilities. This includes ensuring that the websites are compatible with screen readers. Ensure you provide alternate text for non-text content and enable navigation with assistive devices. Making sure your application is accessible
>
> **[1:36](https://www.linkedin.com/learning/accessible-layout-for-the-web/what-is-web-accessibility?u=76281980&t=96)** from the start is super important. This makes the application more inclusive, and saves you time and money by avoiding the need to add accessibility features later on. Now that you know how important it's to build accessible applications, what can you do to ensure your website is accessible to everyone and create an environment that's welcoming to all?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1)
> **Versions:** 98.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Making a case for accessibility](https://www.linkedin.com/learning/accessible-layout-for-the-web/making-a-case-for-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/making-a-case-for-accessibility?u=76281980&t=0)** - [Narrator] According to the World Health Organization, an estimated 16% of the world's population experiences disability. That's over 1.3 billion people worldwide. And yet, many web applications are still not accessible by default. In this lesson, we'll examine the different types of disability that affect people and their challenges when navigating the web. For instance, there is a wide range of disabilities that can affect users access to the web. Some of them include auditory disability. People with auditory disability have hearing impairments that can range from mild to profound, so it's important to provide alternative ways of conveying information such as transcripts or captions for videos. People with cognitive disability have difficulty processing and understanding information. Therefore, it's important to use simplified language, clear navigation, and a consistent design. People with neurological disabilities have conditions that affect the brain and nervous system. They have difficulty with motor skills, memory, and attention. Therefore, using keyboard shortcuts or voice command can help ease navigation on a website. People with physical disabilities have mobility impairments that affect their ability to use a mouse or keyboard.
>
> **[1:39](https://www.linkedin.com/learning/accessible-layout-for-the-web/making-a-case-for-accessibility?u=76281980&t=99)** They can benefit from assistive devices like screen readers, touch part, or joysticks. People with visual disabilities have impairments that affect their ability to see. They may benefit from alternative ways of conveying information such as descriptive alternative texts for images or larger font sizes. By considering the needs of people with disabilities when designing and developing web applications, we can create a more inclusive web experience for everyone.

> [!info]- Semantic Content
>
> **Versions:** 1.3 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Tools for testing accessibility](https://www.linkedin.com/learning/accessible-layout-for-the-web/tools-for-testing-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/tools-for-testing-accessibility?u=76281980&t=1)** - [Instructor] A few years ago, while working with a team of front-end developers on a platform for booking and scheduling meeting rooms, a friend introduced me to [[Web Accessibility]]. Intrigued by the concept, I wondered why it wasn't already a part of our development process. I took it upon myself to ensure that accessibility was integrated into the tool we were building. I engaged other developers and emphasized the importance of testing for accessibility before we ship. We created tickets to assess the websites and use a combination of accessibility testing tools to identify and fix issues before launching the product. By prioritizing accessibility, we could create a product that anyone could use. This not only helped those with disabilities, but also improved the [[User Experience (UX)|user experience]] for everyone, making our platform more user-friendly. You would think this is uncommon, but it's very common in a lot of development teams where you may need to be the one to advocate for implementing accessibility into the platform you are building. So if this is the case, don't shy away from being the person to bring it up. Many tools are available to help you test if your website is accessible. Learning to use and integrate these tools into the [[Web Development]] process is important to ensure that a website meets accessibility guidelines. These are a list of tools you can use to test your websites.
>
> **[1:38](https://www.linkedin.com/learning/accessible-layout-for-the-web/tools-for-testing-accessibility?u=76281980&t=98)** First, we have axe DevTools by Deque. This is a browser extension that scans webpages for accessibility issues and provide suggestions for improvements. It can be integrated with [[Google]] Chrome and Firefox DevTools. Next, we have the WAVE Evaluation Tool. This is a free browser extension that provides feedback on the accessibility of web content. Identifying issues with [[HTML]] and CSS code, it also offers a text-only version of a website to highlight any issues with content that may not be accessible to all users. Google Lighthouse is also another tool you can use. This tool is built into Google Chrome, and it helps audits webpages for performance, accessibility, and other best practices. It provides a report with actionable suggestions for improving your website. Next, we have the WebAIM Contrast Checker. These two helps check the contracts between foreground and background colors to ensure that text is readable for visually impaired users. It can be used to determine if the text meets the WCAG 2.2 Contrast Ratio Requirements. While these testing tools can be helpful,
>
> **[3:13](https://www.linkedin.com/learning/accessible-layout-for-the-web/tools-for-testing-accessibility?u=76281980&t=193)** it is crucial to build with accessibility in mind from the start. By keeping it in mind during the development process, you can avoid many common accessibility issues and ensure your website is accessible to all users. In addition to the tools mentioned earlier, there are other platforms that can help ensure accessible measures are met. For example, Fable is a platform that helps improve [[Digital Accessibility]], powered and tested by people with disabilities. They offer tools such as the accessible usability scale to evaluate the usability of your websites, as well as Fable Engage. This platform allows users with disability to provide feedback on the accessibility of your website. These tools provide valuable insight into how users with disabilities interact with your websites and identify areas for improvement. As developers, we have the power to create a more inclusive and accessible web for all our users. So take every opportunity to do so. By combining these tools and integrating them into your web development process, you can ensure that your websites meets accessibility guidelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Web Development]] (2), [[Web Accessibility]] (1), [[User Experience (UX)|User experience]] (1), [[HTML]] (1)
> **Env Vars:** wave (1), html (1), css (1), wcag (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), such as (1)
> **Versions:** 2.2 (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)


### 2. Accessibility Standards

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessible standards (WCAG)](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-standards-wcag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-standards-wcag?u=76281980&t=1)** - [Narrator] Developers building accessible websites must understand the web content accessibility guidelines, and conform to them. WCAG 2.2 is a widely recognized accessibility standard for making web content accessible to everyone. It provides a set of principles, guidelines, success criterias and techniques to help make web content accessible to everyone. The following are the layers of guidelines to adhere to when implementing accessibility on your websites. First, we have principles. These basic principles form the foundation of [[Web Accessibility]], and they include perceivable, operable, understandable and robust. There are testing guidelines that developers can follow to make their contents more accessible to users. These guidelines provide a framework for achieving the success criteria and improving the accessibility of the contents of your websites. There are three levels of conformance defined. There is level A, level AA and level AAA. These levels are designed to provide increasing levels of accessibility, with level A being the minimum requirement for accessibility and level AAA providing the highest level of accessibility. Web developers should pick the level of conformance that is appropriate for their websites based on factors such as the target audience, the type of content
>
> **[1:36](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-standards-wcag?u=76281980&t=96)** and the nature of the websites. However, all websites should strive to achieve at least level A conformance, as this is the minimum requirement for accessibility. The working group has documented various informative techniques for each guideline and success criterion. These techniques are either sufficient or advisory. Some advisory techniques address accessibility barriers not covered by the testable success criteria. There are also common failures that are also documented in the guidelines.
>
> **[2:18](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-standards-wcag?u=76281980&t=138)** Now that you're familiar with the WCAG guidelines, write down how you can apply these principles to improve the accessibility of your current or future web projects, then take your notes and go to the A11Y Project checklist to find practical solutions for implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1)
> **Env Vars:** wcag (2), aaa (2), a11y (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 2.2 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Guiding principles of web accessibility](https://www.linkedin.com/learning/accessible-layout-for-the-web/guiding-principles-of-web-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/guiding-principles-of-web-accessibility?u=76281980&t=1)** - [Presenter] To ensure you can build an accessible application, it is important to follow the four basic principles that form the foundation of [[Web Accessibility]]. These principles provide a framework for designing and developing inclusive websites. The four principles represented by the acronym POUR are perceivable, operable, understandable, and robust. Let's begin by explaining the first principle, perceivable. To ensure accessibility, information and user interface component should be presented in a way that users can perceive them. An application is considered perceivable if it includes alternative text for images, video captions, and clear and distinguishable content. By making all content perceivable, web developers can ensure that users with visual impairment or other sensory disabilities can assess and understand the information on the website. Moving on to the second principle, operable, user interface component and navigation must be operable. This means that users should be able to interact with all the functionalities of the websites using different inputs methods such as keyboard navigation, or voice commands. Web developers need to ensure that all interactive elements, such as buttons and links are easily accessible
>
> **[1:36](https://www.linkedin.com/learning/accessible-layout-for-the-web/guiding-principles-of-web-accessibility?u=76281980&t=96)** and can be activated without any barriers. By focusing on operability, websites can be used by individuals with motor disability or those with difficulty using a mouse or touchscreen. Next, the thought principle, understandable, information and the operation of the user interface must be understandable. This requires using clear and simple language, providing instructions and feedback, and organizing the content logically and intuitively. Web developers should strive to make the website easy to navigate and understand so the users with cognitive or learning disabilities can effectively interact with the content on the website. Finally, the fourth principle, robust, content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. This means using [[Web Standards]] and technology supported by different browsers and assistive technologies, ensuring compatibility and interoperability, web developers should test their websites across different platforms, browsers, and devices, to ensure that all users can assess and interprets the content correctly. Now, imagine yourself as a user navigating a website.
>
> **[3:13](https://www.linkedin.com/learning/accessible-layout-for-the-web/guiding-principles-of-web-accessibility?u=76281980&t=193)** Would you prefer a website that lacks the necessary accessible features or one that follows all the guidelines for accessibility? Here's a challenge for you. Set one goal to make your website more accessible based on at least one of the guiding principles. Then share your goal by commenting on the course Q&A. Finally, set a reminder on your calendar 30 days from now to check on your progress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Accessibility]] (1), [[Web Standards]] (1)
> **Analogies:** such as (2), imagine (1)
> **CLI Commands:** make (2)
> **Env Vars:** pour (1)
> **Definitions:** means that (1)
> **Speakers:** - [presenter] (1)


### 3. Creating Accessible Layout

[↑ Back to Table of Contents](#table-of-contents)

#### [Semantic HTML](https://www.linkedin.com/learning/accessible-layout-for-the-web/semantic-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/semantic-html?u=76281980&t=1)** - [Instructor] Have you ever tried reading a book without any chapter headings or titles? It would be challenging to navigate and understand the content, right? Well, the same applies to websites that lack structure. Without clear structure and meaningful elements, your users, especially those relying on assistive technologies, face a similar challenge when accessing information on the page. In this lesson, you'll learn the importance of semantic [[HTML]] and how we can transform websites into inclusive and accessible spaces for everyone. But first, what is semantic HTML? Semantic HTML are elements that convey meaning and structure to both the browser and the user. Unlike non-semantic HTML which primarily focuses on the visual presentation of content, semantic HTML uses tags with inherent meaning and purpose. These meaningful tags help assistive technologies understand the content and provide context to improve accessibility. Developers can use semantic HTML to build websites with a clear structure and meaning. This approach is great for improving accessibility for assistive technologies and enhancing the overall [[User Experience (UX)|user experience]] for all visitors. Semantic HTML also has the added benefit of improving [[Search Engine Optimization (SEO)|search engine optimization]] so search engines can understand the content of the page. Finally, it helps promote cleaner and maintainable code,
>
> **[1:37](https://www.linkedin.com/learning/accessible-layout-for-the-web/semantic-html?u=76281980&t=97)** which makes it easier for developers to understand the structure of a page. HTML tags such as heading, section, article, footer, and button are examples of semantic elements. These elements provide meaning and structure to your webpage, making it easier for users to navigate and understand the contents. On the other hand, div and span are non-semantic elements commonly used as substitutes for these elements. Non-semantic elements do not convey meaning to users or browsers and can sometimes make your website inaccessible. A common accessibility antipattern uses a div element as a button instead of the semantic element button. In this demo, you can see an example. When developers use a div element as a button, it can cause accessibility issues. Using a div element as a button lacks semantic meaning. Assistive technologies may need to interpret the element's purpose, leading to confusion and difficulty for users who rely on these technologies. Additionally, using a div element may not provide the proper keyboard accessibility or focus management that the button element offers out of the box. On the other hand, the button element
>
> **[3:11](https://www.linkedin.com/learning/accessible-layout-for-the-web/semantic-html?u=76281980&t=191)** is designed for interactive elements that trigger actions or events, such as submitting a form or navigating to a different page. Using the button element provides clear semantic meaning to both the browser and assistive technologies, making it easier for users to understand and interact with your websites. Another way to improve the accessibility of your website is by correctly utilizing ARIA, Accessible Rich Internet Applications attributes. ARIA attributes provide additional information to assistive technologies, helping them understand interactive elements, dynamic content, and complex user interface components. But it's important to use ARIA attribute cautiously, and ensure you follow the ARIA specification to ensure proper implementation. Understanding semantic HDML is essential for creating accessible websites. It's always a best practice to use semantic elements. Instead of immediately resorting to a div, first, consider if there is a more appropriate alternative like section or heading to use that conveys meaning to both the browsers and your users. This minor adjustment can significantly enhance the user experience of your web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[User Experience (UX)|User experience]] (2), [[Search Engine Optimization (SEO)|Search engine optimization]] (1)
> **Env Vars:** html (8), aria (4), hdml (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Accessible navigation and focus](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-navigation-and-focus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-navigation-and-focus?u=76281980&t=1)** - [Narrator] Do you ever think about how people with disabilities navigate web applications? Imagine trying to use a website without a mouse or a keyboard. How would you interact with the different elements on the page and navigate through the contents? These are the challenges individuals face that cannot use a mouse or keyboards to access information on the internet daily. Many websites overlook the importance of prioritizing accessibility. This leads to common issues for the users. These issues include difficulty with navigating menus, inaccessible keyboard focus, inconsistent navigation and a lack of proper focus management. One of these issues can occur when the keyboard focus indicator is not clearly visible or missing entirely. This makes it difficult for users to determine which element is currently focused, especially for those who rely on keyboard navigation. Here's an example to illustrate this issue. I've created a button that users can navigate and click on or use the keyboard to focus on. The problem with this button is that the focus indicator is very subtle. When users navigate the page using the keyboard, they might need help identifying which elements have focus, leading to a poor [[User Experience (UX)|user experience]] and potential frustration. Now, to fix this issue, it is crucial to ensure that
>
> **[1:37](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-navigation-and-focus?u=76281980&t=97)** the keyboard focus is always visible. Now, I will go ahead and add additional styling to the button. Here I'm adding an outline and an outline offset, and what that does is that improves the focus visibility of the button. It is crucial to ensure that keyboard focus is always visible and distinct, providing clear feedback to users as they navigate through interactive elements on a webpage.
>
> **[2:14](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-navigation-and-focus?u=76281980&t=134)** Another example is seen when a user tries to use a keyboard to navigate through a website with a long menu list. This action can force them to tap through numerous links before reaching the actual content they're interested in. To improve the navigation experience, you can add a skip link to your websites. This will help them skip to the main content on the page. Skip links are anchored links that lets you jump straight to the main content on the page. It acts like a shortcut and doesn't take you to a different page. It just helps you skip to the important part of the same page that you're on. This makes it much easier for people who use keyboard or assistive technology to navigate websites and find what they're looking for.
>
> **[3:08](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-navigation-and-focus?u=76281980&t=188)** One additional issue with a lot of websites is a lack of focus management. This means that the focus order needs to be maintained throughout the page. Let's look at this page featuring a form for subscribing to a newsletter. This form includes fields for name, email address and a check box to agree to terms and conditions of subscribing to the newsletter. However, the tab order for the form is incorrect, as it jumps from the name, inputs to the check box and then back to the email address. This is an example of incorrect sequencing for the form fields. To address this issue, it's important to establish a logical and consistent focus order that follows the visual flow of the content. This ensures that users can navigate through interactive elements predictably, enhancing the overall usability of your websites. To summarize, implementing accessible navigation and focus is crucial for creating inclusive and user-friendly websites. By considering keyboard accessibility, focus management and other WCAG guidelines, you can ensure that your website provides equal access and usability for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** wcag (1)
> **UI Navigation:** click on (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Accessible forms](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-forms?u=76281980&t=1)** - [Instructor] [[Forms]] are essential in web applications because it allows users to submit information, sign up for services and provide feedback, but not all forms are equally accessible. To ensure that all users can fully participate in online interactions, it's important that we implement accessible forms. You can create user-friendly forms by following key guidelines and best practices. To improve the accessibility of forms, consider following these important steps. First, use clear and concise labels. Labels are essential for providing contexts and instructions to users of assistive technologies. They should be associated with their corresponding form elements. Without proper labels, users with visual impairments, cognitive disabilities or some form of neurodivergence may struggle to understand the purpose and function of each form field. Aria labels like aria-label and aria-labelledby can be used when it's not possible to use a label in association with a form field. Next, ensure a form is keyboard accessible. Besides adding labels, you need to ensure the fields in your form can be navigated with keyboard only. Forms with interactions such as selecting an item from a dropdown or submitting a form can easily be accessed with a mouse,
>
> **[1:39](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-forms?u=76281980&t=99)** but you should check and validate that those actions can also work with the keyboard. Provide clear instructions and help text. Help text and clear instructions can guide users through the form filling process and also prevent errors. By offering explicit instructions and helpful hints, you can assist users in accurately and efficiently completing the form. Use in-line help texts, tool tips or contextual messages to provide additional guidance when needed. This can be particularly beneficial for users with cognitive disabilities or those unfamiliar with specific form requirements. Handle errors in an accessible manner. Even with clear instructions and assistance, users may encounter errors while filling out the form. It's important to handle these errors in an accessible way to ensure users understand the issue and can take appropriate action. Ensure you implement error identification techniques to highlight any errors, provide suggestions on correcting them and also prevent similar errors from happening in the future. Following these best practices for error handling helps users with disability effectively navigate and complete the form. Use the auto-complete and required attributes. It's great to note that you can include
>
> **[3:12](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-forms?u=76281980&t=192)** the auto-complete attributes as it enhances accessibility and usability of your forms. The upper complete attributes lets users quickly fill out a form by remembering and suggesting previously entered information, and it can benefit users with motor disabilities or difficulty remembering complex information. Also, by including the required attributes, users will be able to identify which fields are required in order to complete the form, and the area required attributes will also assist screen readers in identifying and announcing the required fields. Using these attributes can help streamline the form filling process and also provide a more efficient and accessible experience for your users. By implementing these guidelines and best practices, you can create web forms that are inclusive and accessible to all users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (8)
> **UI Navigation:** dropdown (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Accessible tables](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-tables?u=76281980&t=0)** - [Instructor] Let's talk about tables. Tables are valuable for organizing, and presenting data in a structured format. They allow you to compare, and analyze information effectively, but regarding accessibility, some tables can pose challenges for users who rely on assistive technology to understand the information within the table. For this reason, it's a best practice to design, and create accessible tables that are appropriately structured and marked up. I commonly see tables on websites that don't adhere to accessibility standards. These tables lack the correct structure, and elements necessary for creating accessible tables. They also don't include captions, which is essential for describing the table's context and purpose. Let's look at this table for example. It's trying to convey information about total goals sold in June of 2023. The table has no defined columns or rules, and no table caption. Accessible table needs proper [[HTML]] markup that indicates header and data cells, and also defines their relationship. Assistive technologies use this information to provide context to users.
>
> **[1:41](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-tables?u=76281980&t=101)** When creating accessible tables, it's important to consider the following guidelines. First, add structure with table elements. Your tables should be marked up using the appropriate HTML table elements like T head, T body, or T foot. Ensure you had a caption. You can give your table a caption by enclosing it within a caption element. The caption should be meaningful and informative, giving users an understanding of the table's content without requiring visual inspection. Associate table headers. The table header elements defines table headers for each row, and column. This helps screen readers announce the headers when reading the table, providing contexts and facilitating comprehension. Also associate data cells with the scope attributes. The scope attributes identifies whether a table header is a column header or a row header. Assigning a scope to a table header will allow screen readers identify the correct column or row header. Following these guidelines, you can create accessible tables that adhere to the recommended standards. As a practice exercise, try applying what you've learned to modify, and improve the tables accessibility shown previously. To modify the inaccessible table,
>
> **[3:15](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-tables?u=76281980&t=195)** you can check the exercise files for the starter code. This hands-on challenge will help you solidify your understanding of accessible tables in a real world scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2)
> **Exercise Files:** exercise files (1), starter code (1)
> **Best Practices:** best practice (1), recommended (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Accessible images and media](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-images-and-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-images-and-media?u=76281980&t=1)** - [Instructor] Besides making tables accessible, images and videos should not be omitted when implementing accessibility on your website. They are crucial in improving your website's visual appeal and [[User Experience (UX)|user experience]]. How can you ensure that the images and the videos you incorporate into your websites are accessible by default? First, let's start with images. An important aspect of making images accessible is providing alternative texts, also known as alt texts. Alt text is a brief description of an image that can be read by screen readers, enabling users with visual impairments to understand the content of the image. Including descriptive alt texts will ensure that everyone can fully engage with your website's images, regardless of their abilities. It's also important to consider color contrast. Ensuring sufficient contrast between the foreground and background in images and videos can significantly improve readability for individuals with visual impairment or colorblindness. Ensure you select colors with high contrast to make the content easily distinguishable and legible for all users. You can leverage built-in developer tools in browsers like Chrome and Firefox to evaluate the color contrast on your web pages. Tools such as the WebAIM Color Contrast Checker and the Color Contrast Analyzer are excellent resources
>
> **[1:34](https://www.linkedin.com/learning/accessible-layout-for-the-web/accessible-images-and-media?u=76281980&t=94)** for assessing your website's color contrast. These tools help select high-contrast color combinations that improve the overall accessibility of your content. When it comes to videos or media files, one technique for making them accessible is to provide captions or subtitles and audio descriptions. Captions are overlays that display the spoken dialogue and other important audio information in videos. They're crucial for users with hearing impairment who rely on reading the text to understand the content. By including captions, you can ensure that your videos are accessible to a broader audience. On the other hand, audio description is a narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone. This is beneficial for users who are blind or have low vision as it provides a verbal representation of key visual elements, such as actions, facial expressions, scene changes, and onscreen texts. You can provide users with an audio version of information that is provided visually, so that it's possible for people who cannot see to understand audiovisual files. Adding audio descriptions to your videos can ensure the content is accessible to users who rely on auditory information to fully understand the context of the video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build an accessible web page](https://www.linkedin.com/learning/accessible-layout-for-the-web/challenge-build-an-accessible-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/challenge-build-an-accessible-web-page?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/accessible-layout-for-the-web/challenge-build-an-accessible-web-page?u=76281980&t=5)** - [Narrator] Now it's time to put your knowledge to test. In this challenge, you audit a website with a few accessibility issues. Your goal is to identify the issues, fix them, and ensure that the website meets the highest accessibility standards. To accomplish this, apply accessibility best practices and use the tools you've learned throughout this course. Resolve all the accessibility issues thoroughly. Your effort will significantly impact how you create a more inclusive web experience for all users. Best of luck as you embark on this exciting challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Build an accessible web page](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=0)** - [Instructor] How was the challenge? Were you able to find any inaccessible issue with the website? Let me show you how I solved this. So I head over to the website and the first thing I would like to do is to make an audit. I can go straight to the website and scan for any possible errors, but it's also important to use tools and resources that are available to you. And one of that is the Wave Chrome extension. So using the Wave Chrome extension, I can already detect the possible errors that I have on this website, see specific fixes to it, and also where in the website those errors are occurring. For example, we have three errors detected. If I view more details, you'd see that one of those errors is that we don't have an alternative text for this image. You can also see exactly what line of code the error is directing you to so you can directly fix it. And also there is a reference where it shows you how to fix it and also links to the WCAG guideline. So now that we know where the errors are, let's go in and start fixing them. So the first thing I'll do is I'll add an alt text to this specific image. So I head back into my code and this is where I have the image. So I'll go over and add alt. So I want to add a very descriptive alternative text for this image.
>
> **[1:31](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=91)** So I'll go ahead and add that in called "Hand-picked selection of beautiful flowers for every occasion." Now, if I go back to my browser and I run the two again, you see that we now have two errors, meaning that the specific alt description that I included now fixes it and it makes sense that this is working perfectly. So what we need to do now is go on and fix other issues that is occurring on the website. So the next one I would like to fix is missing form label. Essentially what this is, is I did not include a label for each form input. So I need to add that and also make sure that it's associated with the specific input field. So navigate back to the code base and scroll all the way to where we have the form. And right there we'll add the label.
>
> **[2:35](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=155)** And then we need to associate it to the input. So here I need to add an ID of name. So I'll do the same for email. Okay, so now when I go back to this page at I run the Wave two again, you see that we no longer have any errors. And if I go all the way to my signup form, we now have a form label that is present and associated with the form control. The next thing we need to fix is semantic [[HTML]]. One thing you notice in this website is that the headings are not properly aligned, like we have H1 and then we are jumping all the way to H3, H4, and then back to H2. So we need to fix this, ensure that we are following a semantic structure for our headings. So make sure that when we start with H1, the next one that follows should be H2 and so on. So I'll go back to the code base and try to fix this. So the first heading we have is a H1. That's good. The second one we should have should be H2. So I'll change this to H2 and this should be H3, or we can still maintain the same H2 if required. And the next one after this should be now H3.
>
> **[4:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=241)** And then we can still maintain H3 for this as well. So with this fixed, if I go back to my website and inspect, you can see that we do not have those errors anymore. Specifically this is okay. Heading 1, good. Heading 2, okay, the next heading, heading 2 still okay. The next heading, heading 3, still okay. So if I check structure, we not have a very good structure for our website. The next thing I would like to fix is a contrast issue. So right now the contrast on our bottom is not sufficient for the WCAG guidelines. So it's not passing the correct guidelines number that we need for either AA compatibility or AAA. So what I need to do is, you know, edit that a bit. Right now we have a green background, but I can also like change it to meet the sufficient contrast ratio and also pass the WCAG AA and AAA levels. So what I need to do is highlight one of those buttons, which one should I do? So this one, and I know that right now both of them are failing, so I can either like try to reduce the darkness to make it pass, but what I would like to do instead is to fix the contrast, I want to change the color.
>
> **[5:34](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=334)** So I want to change the color to like a dark blue or purple, that still passes regardless. That will still pass this rule. So let's try this one. And now we see the difference. We can also like make it a bit lighter if we want to. So, okay, now this fills, so I'll just bring it back here and then copy this color and go back to my CSS file. So wherever we have the green, we are going to change it to the blue that or purple that I just selected. So one of them is here, other one is here, and the final one I think is here. Let's just confirm that we have everything. There's one more up here. Okay, now when I go back to the website and I refresh and try to run this test again, you see we no longer have the contrast errors, so that's fine. So we can still go on to fix additional things that are possibly needed to fix right here. So one of that is on the feedback section. We are adding a paragraph for the specific commenter's name. So we want to change that we are heading instead
>
> **[7:08](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=428)** because the text appears to be heading, but it's not a heading element. So what I need to do is go back to my code and right where we have P, we can change this to H4.
>
> **[7:25](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=445)** Since remember that I need to keep the heading consistent. So that's why I'm using H4 there.
>
> **[7:40](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=460)** And then if I try to run this tool again, we don't have any alert anymore, we have 12 structural elements. Let's see what that is. So everything seems to be meeting our accessibility checklists for the Wave tool, but I don't necessarily think that we are all the way there yet. So what I would usually advise you do is also use the keyboard to tap through to ensure that you can assess every part of this website, every part of the website is accessible, and then go back to your markup and look at it over and over again and figure out what is missing. Because there's some things that might not be visible to you or to the tool that you're using, but just going through it and reviewing might give you some insights. And for me, one of that is I find that I'm using a lot of div within this markup. So I would like to change them to use semantic HTML instead. So instead of using div, I want to use section, I want to use article, you know, instead of using div for everything. So let's go ahead and start changing that. So for this part I'll change that to section.
>
> **[9:01](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=541)** And then because this is a nav bar, I'm going to change it to use nav. So using semantic HTML is super important. So now that section is fixed, for the next section, I'll use section instead. And I can call this article.
>
> **[9:30](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=570)** The image is on aside, so we can give that an aside.
>
> **[9:46](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=586)** So go on to change everything possibly that can be changed to fit the semantic format. So I've gone on to change section, so I'll go ahead and change it here as well. Section, section.
>
> **[10:21](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=621)** So let's copy that and change this to article.
>
> **[10:36](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=636)** And then the last part, I think we still have more, we still need to set this section and section.
>
> **[10:51](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=651)** This should be footer and we don't need to have footer and then have a class of footer. So I'm going to change, remove the class and go back to the style. And instead of the footer, just change that to use the specific elements. So we can call footer there. So there you have it. This looks a bit more semantic is following a semantic element structure for the entire markup. So if we go back to our websites, we don't see a lot of changes because what we just did is change the specific sections. The only thing you might see that is different is the styling. And for that I would advise that you go back and check the styling. For example, we changed this to H3 and this to H3. So just make sure that the styles that you have updated your elements to fit what you like the website to look like. One final thing I would like to include is aria-label. So there are specific areas in this website that would benefit from having an aria-label. One of that is this button. So I'll go ahead to that area and set an aria-label label for the hamburger menu, just so when a screen reader is trying to navigate through it, it knows what exactly the button is used for. So I would say this is open navigation menu.
>
> **[12:29](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=749)** And then the other button we have is to buy flowers, right? So I can also add the label there.
>
> **[12:48](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=768)** And then one last thing we need to check is our table. So right now the tables don't have specific semantic elements that should follow a table. For example, there is no scope defined for the headings. And what I'll just do is go ahead and add that in. So for the heading, I'll put a scope here, col and do the same for the [[Representational State Transfer (REST)|rest]] of the heading.
>
> **[13:20](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=800)** Then we also need to use table specific element. For example, we need to use thead and tbody. So I'm going to go ahead and add the thead and then move this up into that. And also for the body of the table. So we need to use tbody, and then I move all of the rows there, And now this looks better. So if I go back to the website and then try to run the Wave again, I don't see any specific errors anymore. I see now that we have an aria-label. So one thing we need to do is to remember that for every time you are auditing your website or checking for accessibility issues, don't just stop at what the specific tool that you're using gives you. Also like try to look more into your, you know, markup and see where exactly there are additional fixes that you could make. So there you have it. We've been able to fix most of the accessibility issues of this website with helpful tools like the Wave Chrome extension. But don't just stop there. There are additional things you could do to make your website more accessible. For example, on this website you can add skip navigation links to enable users skip
>
> **[14:56](https://www.linkedin.com/learning/accessible-layout-for-the-web/solution-build-an-accessible-web-page?u=76281980&t=896)** to the main content of the page. I hope this was helpful in showing you different ways that you can audit and face accessibility issues on your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (8), find (2)
> **Cross-References:** go back to (10)
> **Env Vars:** wcag (3), html (3), aaa (2), css (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (4)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for improving accessibility in web applications](https://www.linkedin.com/learning/accessible-layout-for-the-web/next-steps-for-improving-accessibility-in-web-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/accessible-layout-for-the-web/next-steps-for-improving-accessibility-in-web-applications?u=76281980&t=0)** - [Gift] Wow, we've reached the end of the course. Thank you for joining me on this journey of creating an accessible layout on the web. Now that you have a strong foundation, it's time to take the following steps in improving accessibility in your web applications. I recommend going through the course handouts, as it's packed with helpful resources on accessibility best practices. You can also find communities where accessibility professionals share their knowledge and experiences, as this will help you continually expand your knowledge on accessibility.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [gift] (1)


## Instructor

- [[Gift Egwuenu]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/accessible-layout-for-the-web-4488047/codespaces)

## Skills Covered

- Web Accessibility
- Web Design

## Path Context

### In [[Build for Digital Accessibility]]
← [[Designing Accessible Components In Figma]] | **6 of 12** | [[Build an Image Captioning Tool for Visually Impaired Users with Gemini]] →

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Accessibility]] — Web Accessibility
- [[Introduction To Web Design And Development]] — Web Design

---

[↑ Back to top](#)