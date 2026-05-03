---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: html-forms-accessibility
url: "https://www.linkedin.com/learning/html-forms-accessibility"
duration_minutes: 44
duration: 44m
level: Intermediate
updated: 3/27/2024
learners: 4573
skills:
  - Digital Accessibility
  - HTML
exercise_files: true
github: "https://github.com/LinkedInLearning/html-forms-accessibility-4465343/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHXPotL4VZwdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711408278458?e=2147483647&amp;v=beta&amp;t=0L_tfokgcJHp30RCNjq2_yZdSL7Rsz79os0RFsz2U_Y"
linkedin_topic: Web Development
learning_paths:
  - '[[Build for Digital Accessibility]]'
prev_courses:
  - '[[Canva- Designing Engaging, Accessible Presentations]]'
next_courses:
  - '[[Microsoft Office Accessibility for Beginners]]'
path_nav: '[{"path":"Build for Digital Accessibility","position":9,"total":12,"prev":"Canva- Designing Engaging, Accessible Presentations","next":"Microsoft Office Accessibility for Beginners"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/digital-accessibility
  - skill/html
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML%20Forms-%20Accessibility.md)

![HTML Forms: Accessibility](https://media.licdn.com/dms/image/v2/D560DAQHXPotL4VZwdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711408278458?e=2147483647&amp;v=beta&amp;t=0L_tfokgcJHp30RCNjq2_yZdSL7Rsz79os0RFsz2U_Y)

# HTML Forms: Accessibility

> Web developers have a tremendous responsibility to ensure that their products are inclusive and accessible to everyone. Forms are one of the most common and important elements of web applications, as they allow users to interact with the system, provide feedback, submit data, and perform various tasks. However, forms can also pose many challenges and barriers for users with disabilities, and if no

> [LinkedIn Learning](https://www.linkedin.com/learning/html-forms-accessibility) | 44m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Be an HTML forms MVP](#be-an-html-forms-mvp)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Form Accessibility**](#1-introduction-to-form-accessibility) (3 videos)
  - [Course use case](#course-use-case)
  - [What is form accessibility?](#what-is-form-accessibility)
  - [Appearance](#appearance)
- [**2. Improving Form Accessibility with Form Controls**](#2-improving-form-accessibility-with-form-controls) (3 videos)
  - [Introduction to HTML form controls](#introduction-to-html-form-controls)
  - [Input, textarea, select, and button form control](#input-textarea-select-and-button-form-control)
  - [Label element](#label-element)
- [**3. Helping Users Input Data into Forms**](#3-helping-users-input-data-into-forms) (6 videos)
  - [Introduction to HTML form attributes](#introduction-to-html-form-attributes)
  - [Input types: Checkbox, radio button, text, password, and email](#input-types-checkbox-radio-button-text-password-and-email)
  - [Name and for attributes](#name-and-for-attributes)
  - [Aria-describedby and Aria-labelledby attributes](#aria-describedby-and-aria-labelledby-attributes)
  - [Placeholder, label attribute](#placeholder-label-attribute)
  - [Focus indicator](#focus-indicator)
- [**4. Managing Data Entry Errors**](#4-managing-data-entry-errors) (3 videos)
  - [Required attribute](#required-attribute)
  - [Autocomplete attribute](#autocomplete-attribute)
  - [Min-length and max-length attribute](#min-length-and-max-length-attribute)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Be an HTML forms MVP](https://www.linkedin.com/learning/html-forms-accessibility/be-an-html-forms-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/be-an-html-forms-mvp?u=76281980&t=0)** - [Host] As developers who build for the web, we hold a tremendous responsibility. Our work goes beyond writing code. We also have to ensure that [[Microsoft Products|products]] being built using code are inclusive and accessible to everyone irregardless of their abilities or disabilities. In this course, I will dive into the how and why of making [[Forms]] usable by everyone. We will learn to create accessible forms and why creating accessible forms matter. I'm Ifeoma Nwosu a front end software engineer. Together we will explore the important ideas behind making things that include everyone. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3), [[Microsoft Products|Products]] (1)
> **Speakers:** - [host] (1)

#### [What you should know](https://www.linkedin.com/learning/html-forms-accessibility/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/what-you-should-know?u=76281980&t=0)** - [Instructor] To get a good understanding of this course, you need to have a prerequisite knowledge of [[HTML]]. It will be beneficial to have prior knowledge of CSS. If you have knowledge of [[JavaScript]], that's great, but it is not required for this course. As you get started with this course, I want you to know that there are exercise files, and to get started using it, you need a [[GitHub]] account. Every lesson is hosted in a GitHub branch, and for each branch we have a begin state, which starts with the letter A and an end state, which starts with the letter B. Any branch without an end state means that there were no code changes. To code along with this course, you will need to fork the repository like so. Make sure to deselect this option. This will be your own copy of the code to work with after you have forked the repository. After forking the repo, you can work with [[Codespaces]] by selecting the branch you want to work on.
>
> **[1:25](https://www.linkedin.com/learning/html-forms-accessibility/what-you-should-know?u=76281980&t=85)** Click on this Code button and then the plus sign to create a new codespace. Once you've done this, you are now ready to code along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[HTML]] (1), [[JavaScript]] (1), [[Codespaces]] (1)
> **Env Vars:** html (1), css (1)
> **Tools:** github (2)
> **Prerequisites:** you need to have (1), prerequisite (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)


### 1. Introduction to Form Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Course use case](https://www.linkedin.com/learning/html-forms-accessibility/course-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/course-use-case?u=76281980&t=0)** - [Instructor] We all make use of [[Forms]] in our daily life, and sometimes we have really good experiences while using these forms and sometimes bad experiences. It all depends on the user's perspectives. When users with disabilities use a form that does not consider their specific needs, they may have a bad experience. Also, a bad experience is not limited to users with disabilities. Here's an example of a form created with no considerations of accessibility in mind. This is a signup form created to collect basic data such as email, password, and a submit button. You might be familiar with this format when filling out signup forms. These areas circled at the parts of the form where there are errors, including the not so obvious errors that can be encountered till the user begins interacting with the form, and this results in a bad experience. We will be tackling these issues and resolving them to create an accessible form at the end of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What is form accessibility?](https://www.linkedin.com/learning/html-forms-accessibility/what-is-form-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/what-is-form-accessibility?u=76281980&t=0)** - [Instructor] What is form accessibility? We have spoken about form accessibility and even shown an example of what an inaccessible form looks like, but what is form accessibility? Form accessibility is making sure [[Forms]] can be used by everyone, no matter their disability status. This includes people who are blind, deaf, and those who have cognitive disabilities and mobility issues. As developers, we need to factor in the guidelines for making accessible forms. These guidelines are known as Web Content Accessibility Guidelines, and developers implement them when building forms. Forms are essential elements of any website or web application because they are used in collecting important data. For example, we create sign-up forms to access an application or to sign up to get a newsletter. We make use of forms when selecting an option. We use forms when making contact inquiries on websites and conducting surveys. These are just a few instances of our use of forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (8)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Appearance](https://www.linkedin.com/learning/html-forms-accessibility/appearance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/appearance?u=76281980&t=0)** - [Instructor] Here is an example of a form that is not usable and completely inaccessible. I will demonstrate using it from a user's perspective just as I would fill a form I come across on the website. The background color is red. This is not a friendly color to the eyes, especially for users who are colorblind. The font is also not legible against the form's background, and this makes it unreadable. There's an absence of placeholders, which should guide the users on what data to be entered in the form. I am imputing my password into the Password section, and there is no presence of a text mask to ensure that the password characters are unreadable, and there's also no indication of how many characters or what type of characters are allowed to be imputed into this field. These are just a few of the problems we aim to fix when building accessible [[Forms]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Improving Form Accessibility with Form Controls

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to HTML form controls](https://www.linkedin.com/learning/html-forms-accessibility/introduction-to-html-form-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/introduction-to-html-form-controls?u=76281980&t=0)** - [Instructor] Form controls are interactive form elements within the web form that allows users to make certain choices, such as the ability to submit data, input text or number information. They add in essential elements of webpage interactions. For example, form controls are buttons, select input, text area, checkboxes, and radio buttons. Form controls are important when creating accessible [[Forms]], and because of this, we need to ensure we make use of the right form control when needed, and that the form control being used can be detected and used by assistive devices. We need to make the form accessible and inclusive, especially for people with disabilities. Here's an example of an accessible form, and I am navigating through this form making use of keyboard navigation, a feature which is only possible with form controls which have been made accessible. As you can see, form controls also enhance user experiences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Input, textarea, select, and button form control](https://www.linkedin.com/learning/html-forms-accessibility/input-textarea-select-and-button-form-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/input-textarea-select-and-button-form-control?u=76281980&t=0)** - [Instructor] Form controls, also referred to as interactive form elements, play a crucial role in [[Web Development]]. I will introduce commonly used form controls, focusing on those we will encounter frequently throughout this course. You can code along with me. Let us start with the input element, a fundamental form control used for collecting various types of user data, such as names, addresses, emails, and dates. The input element has different subelement, such as the text input, text area. And we will begin by creating a text input. Here, I have the skeleton code for my [[HTML]] file, and every style going to be used in building this input has been written and can be found in the style.css file. I'll begin by creating a form making use of the label tag. And because we are creating an input form for username, the label for this username is also going to be username.
>
> **[1:23](https://www.linkedin.com/learning/html-forms-accessibility/input-textarea-select-and-button-form-control?u=76281980&t=83)** I'll also be creating the input element, making use of the input tag. And because we're going to be inputting texts into this input element, the value for the type attribute is going to be text. It's an id of username.
>
> **[1:52](https://www.linkedin.com/learning/html-forms-accessibility/input-textarea-select-and-button-form-control?u=76281980&t=112)** This is the code for creating a simple text input form with a label of username, and this is what we have done so far. Another essential form control is the button used for submitting data after a form has been filled out. Creating this form involves using HTML elements with start and end tags. For the text input, we use the input element. And for the button input, we will use the button element like so. Type, this is a submit button.
>
> **[2:39](https://www.linkedin.com/learning/html-forms-accessibility/input-textarea-select-and-button-form-control?u=76281980&t=159)** Submit. And this is what it looks like. It's worth noting that while this form controls button and text input can be created with non-semantic divs, doing so makes it harder to navigate a form. Semantic elements such as input, button, tags, which are descriptive and provide meaning are crucial for building accessible [[Forms]]. Assistive devices like screen readers rely on semantic elements to offer context, and this enhances the web experience. Semantic elements are HTML elements that are very descriptive, providing more meaning to your code for humans to read and machines to understand. Making use of semantic elements is very important in building an accessible form because assistive devices such as screen readers make use of this element to provide more context to content on the screen, and making use of semantic elements also enhances web optimization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Web Development]] (1), [[Forms]] (1)
> **Analogies:** such as (4)
> **Env Vars:** html (3)
> **File Paths:** style.css (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Label element](https://www.linkedin.com/learning/html-forms-accessibility/label-element?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/label-element?u=76281980&t=0)** - [Instructor] Like an employee at a company who makes use of an ID as a form of identification, this is what labels are to form controls. Sure, we can make use of [[Forms]] without entering data and even submitting them to a server. But for users to know what data needs to be imputed in any form control, there must be a form of identification for that form control. It is this source of identification that we refer to as labels. Labels are used in identifying form controls, text inputs, buttons, check boxes, radio buttons, et cetera. They're important when creating accessible forms 'cause they provide users with context when inputting data, or making selections when using a form. By making use of labels in forms, we ensure the forms are usable, hence improving accessibility. We create labels by making use of the label element. Here we have two input forms. One is a text input and the other accepts numbers. Both are without labels, and I will be adding a label to one of them, to text input. Labels should be as descriptive as possible, so that users know the purpose of the form control, of the form control that a label is associated with.
>
> **[1:37](https://www.linkedin.com/learning/html-forms-accessibility/label-element?u=76281980&t=97)** It should be made readable and legible as well. These are both input element, and this is the one with a label and one without a label. The first one has a label of username, which implies the data to be inputted is a username. And so labels provide more context when building forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (6)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Helping Users Input Data into Forms

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to HTML form attributes](https://www.linkedin.com/learning/html-forms-accessibility/introduction-to-html-form-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/introduction-to-html-form-attributes?u=76281980&t=0)** - [Instructor] In [[HTML]], attributes are elements used to modify an element and provide additional details about it. Because of their functions, attributes play a crucial role in improving accessibility. From attributes are specific attributes designed for use with form element. They serve various purposes and are used to define, modify the behaviors and functionality of [[Forms]]. Since form attributes provide additional details to a form element, they can also be used to assist readers when inputting data into any form, making the experience user-friendly and accessible. Some form attributes related to form elements which will be addressed in the upcoming videos include the type attribute, the placeholder attributes, name, and four attributes, aria-describedby and labeledby attributes. We will examine these attributes individually and discuss how each of them enhances accessibility by assisting users in entering data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Forms]] (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Input types: Checkbox, radio button, text, password, and email](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=0)** - [Instructor] The type attribute specifies the content type of an element, with which it is associated. In web [[Forms]], it is commonly used with the input element. The type attribute has various values which depend on the data a form element needs to collect. Common values used with the type attributes include checkbox, password, text, number, and email. These are the most commonly used ones, although there are more options available. Here, we have boilerplate [[HTML]], and also some content, used in creating a travel booking form. We have several inputs here, radio input, checkbox, and a text and date input. But because we have not specified the input type, it does not reflect in our form. This input type allows users to enter any type of value, including symbols, which should not be so. This means that anyone can input data without knowing what is allowed, potentially causing the browser to submit improper data. To illustrate, consider a person with a visual impairment using assistive devices. Despite labels specifying allowable values for this input element, they can enter any value because the type attribute is unspecified. In other words, using labels on form inputs is insufficient. Specifying the type attributes
>
> **[1:37](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=97)** enables assistive devices like screen readers to guide users by offering hints, enhancing accessibility, and improving the [[User Experience (UX)|user experience]]. Now, we will apply this approach to every input field we have here. Starting off by adding the type attribute for the city name and the travel date input.
>
> **[2:09](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=129)** Because the city is a text input, we will make use of the text value for the type attribute. And because the travel date needs a date to be specified, we will make use of the date value for the type attribute. And this is the outcome. Here, we have a travel date input, displaying dates, which serve as a guide to users, and we can also input text into the city input.
>
> **[2:49](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=169)** The other input types we have here are radio and checkbox, and it is important that we specify the type of input for this element.
>
> **[3:05](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=185)** Here...
>
> **[3:15](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=195)** This is what this looks like, after specifying that the input type for this form elements are of the radio input type. And here, we have a group of check boxes. We'll also be specifying the type to a checkbox. Remember that I mentioned that there are common values used with the type attribute, and they include text, checkbox, radio, number, and email.
>
> **[3:50](https://www.linkedin.com/learning/html-forms-accessibility/input-types-checkbox-radio-button-text-password-and-email?u=76281980&t=230)** And here, we have our form all completed. This difference was made specifying the type attribute commonly used with the input element. And we can see how that has created such a difference within the UI of our form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[HTML]] (1), [[User Experience (UX)|User experience]] (1)
> **UI Navigation:** checkbox (5)
> **Definitions:** means that (1), in other words (1), is a  (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### [Name and for attributes](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980&t=0)** - [Instructor] The Name and For attributes are important in enhancing accessibility and usability. They are used to associate form labels with form controls or form element. This makes it easier for users who make use of assistive devices to understand the use of different form fields when filling a form. Ideally, every form element should have a Name attribute because it's important for the server side processing of form data. What this simply means is that without the Name attribute, the server would not know which data corresponds to which attribute, and this can hinder the functionality of the form. The Name attribute is used with input elements like check boxes, radio buttons, select text area, and other form elements. When the Name attribute is used with grouped form element such as check boxes, radio or select, the option selected are sent across to the server. This way, the server has access to the data entered by user. And here we have our travel booking form, and I'll be adding the Name attribute to the different form fields. For our input with the city label, I will be adding the Name attribute. It is very important to know that the Name attribute should always match the input ID
>
> **[1:36](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980&t=96)** and also add the Name attribute here. The Name attribute used in grouped elements such as check boxes, radio would always be identical and used along with an array-like symbol. And here, this is just a demonstration of what that should look like.
>
> **[2:09](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980&t=129)** All identical with an array. What this signifies is that the check boxes are grouped elements, and when the server receives this data, these grouped elements are going to be added into an array, a data structure. The Name attribute enhances accessibility, although it does not have any effect on the UI of an application, it provides more context to assistive devices that make use of voice inputs like screen readers, so that when the user hovers over an input the screen reader announces the value of the Name attribute. It's important to always use descriptive values when using the Name attribute. And then, the For attribute. The For attribute is used with label elements when building [[Forms]]. It is used to associate a form input with a form label. The value of a For attribute should match the ID of the form control it's to be associated with. This is to form a link between both elements, and I'll be adding a For attribute to the label element we have in our travel booking form. Remember that the value of a For attribute should always match the ID of the input element. So here our For attribute will have the value of city.
>
> **[3:46](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980&t=226)** Our For attribute here will also have the value hotel type. The outcome of this is that when the form label is clicked on, the form control it is associated with gets focused. And now I will click on the city label and watch how the city input form gets focused upon. I'll take away the For attribute so that we can see how this works. Now that I've taken away the For attribute, I'll click upon the label once more, and you can see it does not get focused upon. If I decide to add the value of any of the check boxes to the label for city, what is going to happen is that the check boxes are going to get selected. I'm going to add the ID for the checkbox for gym,
>
> **[4:58](https://www.linkedin.com/learning/html-forms-accessibility/aria-describedby-and-aria-labelledby-attributes?u=76281980&t=298)** and I'll click upon the city label and we can see fitness center is selected. This is an illustration of how significant the For attribute is when building accessible forms. The Name and For attributes are always used together. The Name attribute is used to identify data entered into forms, and the For attribute is used to associate a label to its correct form element. They ensure users, including those using assistive devices, have a clear understanding of the form element and their purposes, creating a user-friendly and inclusive web experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), checkbox (1)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Aria-describedby and Aria-labelledby attributes](https://www.linkedin.com/learning/html-forms-accessibility/name-and-for-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/name-and-for-attributes?u=76281980&t=0)** - [Narrator] ARIA, short for Accessible Rich Internet Applications. Aria-labelledby by is a property that offers additional information regarding the state and value of an interactive element. These properties can also be applied to form elements. ARIA holds significance in creating accessible [[Forms]], as it offers extra information for assistive devices to interpret, tools ensuring form accessibility for all, particularly individuals with disabilities. You might wonder if the descriptions given by [[HTML]] [[JavaScript]] are adequate for assistive devices. Indeed, at times they are not, and this is precisely where ARIA properties play a crucial role. Let's explore the aria-labelledby attributes. In this example, the input element is linked to the label element through aria-labelledby. When a screen reader encounters the input element, it retrieves the text from the element with the id fullName, ensuring users understand where they should enter their full names. And now, I will be adding the aria-labelledby attributes. It is important to emphasize that the elements need to be linked to its label
>
> **[1:33](https://www.linkedin.com/learning/html-forms-accessibility/name-and-for-attributes?u=76281980&t=93)** by ensuring the label's id matches the value of the aria-labelledby. Here, our label has an id of fullNameLabel, and that means the value of the aria-labelledby is also going to be fullNameLabel. When the label for a form element is not next to its element, such as a checkbox, a user making use of an assistive device can still comprehend the label element association. Always opt for a descriptive and fitting label. Although the aria-labelledby has no effect on the UI of a form, it is important to always opt for a descriptive and fitting label, one that aligns with the form element semantically. This approach provides more context to the form element, thereby enhancing accessibility, usability, and comprehension. There are other ARIA states and properties numerous to mention that can be used for several other scenarios and used in enhancing user experiences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** aria (4), html (1)
> **Code Identifiers:** fullnamelabel (2), fullname (1)
> **Definitions:** short for (1), is a  (1)
> **UI Navigation:** checkbox (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Placeholder, label attribute](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=0)** - [Narrator] When you buy a bottle of fruit juice from a store, the flavor is indicated right after the brand name. That way, you get to know what flavor you are getting. This is what the placeholder attribute is like. Even though fruit juice bottles have different colors, for us to know what fruit is in each bottle the flavors are usually indicated as blueberry juice, orange juice, strawberry juice. This is what a placeholder attributes is like. They provide hints as to what data should be entered in a form. Even though labels already provide information on what to submit, placeholders offer additional guidance. They provide hints based on the labels associated with them. The placeholder is usually an example of the label description and should serve as a guide to tell users how and what data to fill into the Input field. When styling a placeholder, the text used should be legible, but also use a lighter color, so that it does not take visual attention from the label. Placeholders are styled using CSS. Here, we have an Invoice form. Our placeholder is already styled in our style.CSS file, and I'll be adding the placeholder to our Invoice App form. I will add a placeholder attribute to the Input field.
>
> **[1:35](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=95)** We have call to actions, like enter your name here, search for product, and enter your address, provide hint for the expected data in the web form. In this form, the placeholder will be Enter the client's name because we have a label titled clientName. It is added, making use of the placeholder attribute.
>
> **[2:07](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=127)** Enter client name and for invoice number, enter invoice number.
>
> **[2:29](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=149)** For the amount and description impute, they get placeholders, such as Enter amount
>
> **[2:41](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=161)** and Enter description,
>
> **[2:51](https://www.linkedin.com/learning/html-forms-accessibility/placeholder-label-attribute?u=76281980&t=171)** and this is what it looks like in the UI. The placeholders have a lighter color because this has been styled in CSS. It is very important to note that placeholders do not replace labels. They aren't substitutes for labels. Always use labels or accessible [[Forms]] alongside placeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** css (3)
> **File Paths:** style.css (1)
> **Code Identifiers:** clientname (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Focus indicator](https://www.linkedin.com/learning/html-forms-accessibility/focus-indicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/focus-indicator?u=76281980&t=0)** - [Instructor] The focus indicator highlights interactive form element, offering visual feedback so users can identify their current points of interaction. In video games, feedback such as red dots or colored circles apply on the screen when movement or certain interactions are made to let users know where they are or where their opponents are. This is similar to how the focus indicator works. The focus indicator enhances web form usability, particularly for users with low vision or visual impairment. It assists with keyboard navigation. When users with disabilities are unable to use a mouse or utilize keyboard navigation, the focus indicator usually shows the active form field. This is our travel booking form and I will be styling the focus indicator making use of CSS. To start the focus indicator, I'll be specifying the type of the form element. And because the input element I will be styling is a text, this is how it is indicated, making use of a CSS selector. To style the focus indicator for the form, we make use of the focus pseudo class. I'll be styling two input elements, texts and date.
>
> **[1:39](https://www.linkedin.com/learning/html-forms-accessibility/focus-indicator?u=76281980&t=99)** And because I'll also be styling the select element, we'll be targeting it making use of the select selector.
>
> **[1:56](https://www.linkedin.com/learning/html-forms-accessibility/focus-indicator?u=76281980&t=116)** Add in the CSS value here none because we do not want the input to have an outline, but we want it to have a border color, a blue border color, and we will style it using the hex code for blue.
>
> **[2:27](https://www.linkedin.com/learning/html-forms-accessibility/focus-indicator?u=76281980&t=147)** I'll also be giving it a box shadow to give it a halo like effect. That is the input to give it a halo like effect. Also color blue. And so it goes from what we had to this. Focus indicators should be styled so that they are distinct and clear as their role is to provide visual feedback and should be in contrast to other elements, but also in line with the website's overall design. Focus indicators should work with assistive devices like screen readers, offering audio feedback for webpages, featuring form input with focus indicators. As a user navigates different form input, the focus indicator provides feedback by highlighting each selected form. This cultivates an inclusive experience when interacting with web [[Forms]]. Here we have all of our elements, our form elements, making use of the focus indicator, and you can see that when we are about to make use of an element and it is clicked upon, the indicator lets us know what input element is active.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** css (3)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Data Entry Errors

[↑ Back to Table of Contents](#table-of-contents)

#### [Required attribute](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980&t=0)** - [Instructor] The required attributes is applied to form elements, mandating user input such as text input, radio buttons, check boxes including form elements like date pickers. Using the required attributes ensures users provide data for form control, hence its name required. Demonstrating using the travel booking form, we are not making use of the required attributes in any of this element, and I'll attempt to submit the form.
>
> **[0:37](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980&t=37)** And you can see that that is submitted. Well, but when we make use of the required attribute, it ensures that data is inputted into the form field. I'll be adding the required attribute to the input elements for city and travel date
>
> **[1:09](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980&t=69)** and the select dropdown. On an attempt to submit this form, I get a prompt saying, please fill out this field. How the required attribute works is that it specifies that an input field must be filled out before form submission. When added to a form element, it makes that field mandatory, meaning the form cannot be submitted unless data is entered into it.
>
> **[1:51](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980&t=111)** This mandatory requirement prevents any data input errors.
>
> **[2:04](https://www.linkedin.com/learning/html-forms-accessibility/required-attribute?u=76281980&t=124)** Simply put, the required attribute is a type of form input validation. You will notice that on clicking the submit button, it no longer prompt a validation message. But before making use of the required attribute, a prompt or validation message, a screen reader can read this message out loud, alerting the user that a field needs data to be entered before the form can be submitted.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Autocomplete attribute](https://www.linkedin.com/learning/html-forms-accessibility/autocomplete-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/autocomplete-attribute?u=76281980&t=0)** - [Instructor] So autocomplete attribute is employed to guide browsers on suggesting autocomplete input values based on the user's previous interactions and data that has been entered into similar input fields. When you buy an ice cream from an ice cream vendor, you always have to state your preferred flavor to the vendor. However, each time you visit that vendor, you consistently choose just one flavor, your favorite, let's say caramel. Now, whenever that vendor sees you approaching their store without you stating your preference and without them asking, they begin to prepare your usual. This analogy illustrates how the autocomplete attributes functions in browsers when users input data into form fields. Now let us include the autocomplete attributes into the form. The autocomplete attributes offers two simple values, on or off. On direct the browser to suggest input values based on the user's past interactions, while off instructs the browser not to provide any input value suggestions. The autocomplete attributes is a default behavior in most modern versions of today's browsers. So even if you don't explicitly set it, the browser may still provide autocomplete suggestions based on the user's history and interactions.
>
> **[1:35](https://www.linkedin.com/learning/html-forms-accessibility/autocomplete-attribute?u=76281980&t=95)** However, in some browsers, you may need to enable this feature by directly setting the autocomplete to on, just as we've done. The autocomplete attribute significantly enhances [[User Experience (UX)|user experience]]. When used, it aids in making [[Forms]] more accessible by assisting users with limited dexterity, thereby reducing the efforts required for data entry. This attribute is particularly beneficial for users dealing with memory-related disabilities as it conveniently pre-fills data entry fields. The autocomplete attribute ensures consistent and predictable data entry, reducing the risk of errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Forms]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Min-length and max-length attribute](https://www.linkedin.com/learning/html-forms-accessibility/min-length-and-max-length-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/min-length-and-max-length-attribute?u=76281980&t=0)** - [Instructor] The minlength and maxlength attributes specify character length limitations when users enter data into [[Forms]]. These attributes are commonly used with input elements like password input and text area input to define both the minimum and maximum character lengths allowed. Both minlength and maxlength attributes require whole number integer values to specify the length values. Minlength is like the minimum daily water intake. If your daily minimum is five glasses, drinking less will affect your body's function for the day. But more than five glasses is okay. Here I have a sign in form, and I will set the minlength to six characters. That way, when less than six characters is inputted in the password input, the form does not submit. If fewer characters are entered, the form will not submit, and some browsers show an error message. This message can be read by screen readers for users who rely on assistive devices.
>
> **[1:22](https://www.linkedin.com/learning/html-forms-accessibility/min-length-and-max-length-attribute?u=76281980&t=82)** This is an illustration and this is the error message. The maxlength attribute sets the maximum character limit for an input. It restricts users from entering excessive characters than what the maxlength value specifies. When the user tries to submit a form, the browser triggers an error message indicating an issue with the input data, or it simply does not allow the user to go further than the value specified for the maxlength attribute. And here we will keep typing, and because we are up to the limit of 20 characters, it is impossible to continue adding characters to the input form. This is what the maxlength attribute does and how it works. Think of the maxlength attribute like your mailbox. If your mailbox can hold a maximum of 20 letters, and you receive 35, it simply will not close. As long as there are more than 20 letters, the mailbox remains open and refuses to be shut.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-forms-accessibility/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-forms-accessibility/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing the Form Accessibility course. We have explored key principles and techniques that empower you to create inclusive [[Forms]] for users of all backgrounds. As you review what you have learned, keep in mind the key points. We have covered the importance of form accessibility and explored various form controls, how ARIA roles improve user experiences, discussed semantic elements, and learned how to create accessible forms. You now have the tools to make digital spaces more accessible. By championing accessibility, you contribute to making the online world more inclusive. Your expertise isn't just a skill, it's a force for positive change. As you wrap up this course, consider how you can implement these principles in your project. Push yourself to exceed mere compliance and aim for excellence in accessibility. Keep in mind, each accessible form you build is a stride towards a more inclusive digital world. Some resources I will recommend to help you on your journey into accessibility is the W3C [[Web Accessibility]] Initiative, and web-content accessibility guideline websites, which defines how to make web content more accessible to people with disabilities. If you have any questions or want to connect regarding this course
>
> **[1:36](https://www.linkedin.com/learning/html-forms-accessibility/next-steps?u=76281980&t=96)** or web accessibility, feel free to reach out to me on [[LinkedIn]]. Thank you for dedicating your time and effort to master in form accessibility. Your commitment to building an inclusive web is truly admirable. I look forward to seeing you in my next course, and as you continue, keep pushing boundaries and championing inclusive [[Web Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (2), [[Web Accessibility]] (2), [[LinkedIn]] (1), [[Web Development]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** aria (1), w3c (1)
> **Warnings:** keep in mind (2)
> **Documentation:** w3c (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Ifeoma Nwosu]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/html-forms-accessibility-4465343/codespaces)

## Skills Covered

- Digital Accessibility
- HTML

## Path Context

### In [[Build for Digital Accessibility]]
← [[Canva- Designing Engaging, Accessible Presentations]] | **9 of 12** | [[Microsoft Office Accessibility for Beginners]] →

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Accessibility]] — Digital Accessibility
- [[HTML- Structured Semantic Data]] — HTML
- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Metadata in the Head]] — HTML

---

[↑ Back to top](#)