---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-vue-js-8602681
url: "https://www.linkedin.com/learning/learning-vue-js-8602681"
level: Intermediate
updated: 5/3/2021
learners: 79911
skills:
  - Vue.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEhNT8dmozWXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619710596377?e=2147483647&amp;v=beta&amp;t=xY6VfyDqX57bYyuzBV0vmDefnYLPx17Xj90DFnNBHNU"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Vue.js]]'
next_courses:
  - '[[Vue.js- Testing and Debugging]]'
path_nav: '[{"path":"Explore Web Development with Vue.js","position":1,"total":3,"prev":null,"next":"Vue.js- Testing and Debugging"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/vue-js
status: not-started
created: 2026-04-21
---

![Learning Vue Js](https://media.licdn.com/dms/image/v2/C4E0DAQEhNT8dmozWXQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619710596377?e=2147483647&amp;v=beta&amp;t=xY6VfyDqX57bYyuzBV0vmDefnYLPx17Xj90DFnNBHNU)

# Learning Vue Js

> Have you found a primary JavaScript framework or library that suits your needs? If not, you might want to explore Vue.js, which offers a progressive approach to solving front-end problems. Unlike some of the more complex JavaScript frameworks, Vue allows developers to add simple data binding to their views and incrementally progress to a full-blown single-page application, if needed. In this cours

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681) | Intermediate | 80K learners
> [Jump to Path Context ↓](#path-context)

## Resources

- Exercise files available

## Skills Covered

- Vue.js

## Table of Contents

### Introduction

#### Is Vue for you?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=0)** - [Michael] Welcome to Learning Vue.js.
>
> **[0:02](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=2)** I'm Mike Sullivan and if you're looking to become a more efficient and versatile front end developer, then you're in the right place.
>
> **[0:08](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=8)** In this course, I'll talk about the reasons that we use frameworks like Vue.js in the first place and how to quickly get up and running with nothing more than a browser and a text editor.
>
> **[0:17](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=17)** We'll take a detailed look at how to manage form controls and dynamic attributes of HTML elements.
>
> **[0:23](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=23)** You'll learn how to take advantage of Vue's powerful reactivity system that allows us to keep our UI in sync with our data model and how to use Vue's flexible computed properties that are cached for optimal performance.
>
> **[0:35](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=35)** There are many different reasons that developers choose one framework over another or end up loving a particular framework.
>
> **[0:42](https://www.linkedin.com/learning/learning-vue-js-8602681/is-vue-for-you?u=76281980&t=42)** If you're not a regular user of any framework yet, or if you're looking to switch to one that you're more comfortable with, then by the end of this course, you'll have a solid understanding of whether Vue can play a role in helping you get your work done or build your next passion project.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (2)
> **Code Keywords:** switch (1)
> **Env Vars:** html (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [michael] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most possible out of this course, you should already be comfortable working with basic HTML and CSS.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/what-you-should-know?u=76281980&t=7)** You should also have some experience with JavaScript including ECMAScript2015 syntax or ECMAScript 6 as it was formerly known.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/what-you-should-know?u=76281980&t=16)** Some familiarity with the command line, Node.JS, and the npm package manager will be helpful, but the overwhelming majority of videos involve only the use of a text editor and a browser.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), npm (1)
> **Env Vars:** html (1), css (1)
> **File Paths:** node.js (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Managing Dynamic Content and Behavior

#### What problems does Vue.js solve?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=0)** - Before writing any code.
>
> **[0:02](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=2)** I want to spend a few minutes talking about our motivation for using Vue.js and the problems that it aims to solve as a framework for JavaScript applications.
>
> **[0:12](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=12)** In the days when libraries like jQuery were first widely used, or even earlier, it was common to write JavaScript code that looked like this.
>
> **[0:21](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=21)** The purpose of this function is to add an element to the Dom or document object model.
>
> **[0:26](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=26)** Our in memory representation of the webpage.
>
> **[0:29](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=29)** In turn, updating the onscreen representation for the user.
>
> **[0:33](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=33)** But after the call to appendElement on the first line this function is almost entirely concerned with updating the rest of the UI to make sure everything stays in a consistent state.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=46)** While we could extract some of this logic to another reusable function, the point is that we need to explicitly do this additional work to keep the UI in sync, whenever we make a small change.
>
> **[0:58](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=58)** And the more complex the UI becomes the more code it takes to manage all of that.
>
> **[1:04](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=64)** Managing complexity is something I often think about when using Vue, the concept is self-explanatory but I probably first came across the term in Steve McConnell's classic book, Code Complete.
>
> **[1:16](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=76)** He calls it Software's Primary Technical Imperative.
>
> **[1:21](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=81)** If we can accept that managing complexity is at least one of our chief concerns as web developers whether we're talking about the code itself or just how our software can help a user complete a complex task, then it makes sense to use tools that are designed to manage or reduce that complexity that go beyond what's available out of the box.
>
> **[1:43](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=103)** The native Dom API that you see used here on this MDN web docs page, was really designed with just making dynamic updates to the Dom even possible and not with managing the complexity that's involved with doing that in a large application.
>
> **[2:01](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=121)** A better approach for our hypothetical example, if we could achieve it somehow, would be to set up triggers, when we initialize the app for those cascading updates to happen automatically, whenever we add or even remove or edit a row in our table.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=136)** Then we could just call appendElement without having to wrap it in the function that also handles keeping the UI in sync.
>
> **[2:23](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=143)** This makeSureEverythingStaysInSyncFromNowOn concept is where frameworks like Vue.js really shine.
>
> **[2:30](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=150)** And it's a large part of why we use them to build our applications.
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=155)** We say that Vue is reactive.
>
> **[2:38](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=158)** Its easy to set things up so that the UI is kept in sync with the underlying data, by automatically reacting to changes in that data.
>
> **[2:46](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=166)** It's also progressive.
>
> **[2:48](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=168)** It's easy to get started with nothing more than a script tag in order to add a small amount of dynamic behavior to your app.
>
> **[2:56](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=176)** And then you can progressively add more features and tools as needed, as your app grows and becomes more sophisticated.
>
> **[3:03](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=183)** It's declarative, we can set up the relationships and calculations required to keep our UI in sync when our application starts and then not have to worry about them later when managing user interactions and other updates.
>
> **[3:17](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=197)** Finally, it's composable.
>
> **[3:19](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=199)** We'll see that you can structure your application using Vue's component system for easier code reuse and easier reasoning about your applications logic and state.
>
> **[3:30](https://www.linkedin.com/learning/learning-vue-js-8602681/what-problems-does-vue-js-solve?u=76281980&t=210)** In the next video, we'll jump right in and talk about how to add Vue.js to a new or existing project.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), this. (1), self (1), finally, (1)
> **Code Identifiers:** appendelement (2), jquery (1), makesureeverythingstaysinsyncfromnowon (1)
> **File Paths:** vue.js (3)
> **Prerequisites:** set up (2), required to (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), mdn (1)
> **Cross-References:** in the next (1)
> **Documentation:** mdn (1)

#### Adding Vue.js to a project
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=0)** - [Instructor] Whether you're starting a new project or you have an existing project that you're considering using Vue for, getting set up is simple.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=7)** At the time I'm recording this course, the Get Started button on the [vuejs.org](https://vuejs.org) homepage still points to the version 2 guide.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=16)** So instead, we'll click up here to get to the version 3 guide and then click Get Started.
>
> **[0:26](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=26)** So, if I click this Installation button here I'm presented with several different ways to get set up.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=32)** The first, Import from a CDN, really just means adding a script tag to an HTML page.
>
> **[0:39](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=39)** And I could do that with the CDN URL, or I could download it and host the script locally.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=46)** If you're familiar with the command line package manager, NPM then you probably know that most JavaScript libraries and frameworks that are still used today are available as downloadable packages that can be automatically installed with those tools.
>
> **[1:02](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=62)** Vue CLI, or command line interface, is just a more sophisticated way of installing Vue with a package manager along with some other useful development tools and some skeleton code to help you get started.
>
> **[1:15](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=75)** To keep things simple for now, we'll grab the URL from the CDN page, but instead of using this script tag I'm going to copy this URL and then use the URL of the specific version that that redirects to.
>
> **[1:31](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=91)** So, in case, you are following along, you can ensure that you're using the same version that I'm using in the video, which is 3.0.7.
>
> **[1:41](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=101)** In the exercise files for this video you'll find index.hmtl.
>
> **[1:46](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=106)** This will be the starting point for our example project, which will be a flashcard app.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=111)** This page pulls in a style sheet and a data file, none of which is specific to vue.js.
>
> **[2:00](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=120)** The CSS just helps us see what's changing a little bit better as we build out the app and makes it a little prettier.
>
> **[2:07](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=127)** So don't worry about its content.
>
> **[2:09](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=129)** And the data file just contains an array of JavaScript objects that represent flashcards, each with a front and a back property.
>
> **[2:18](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=138)** So, the front is the name of an item, or a concept and the back is its description, sort of like questions and answers.
>
> **[2:27](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=147)** So, we'll add the script tag down here under the data file.
>
> **[2:33](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-vue-js-to-a-project?u=76281980&t=153)** And then, in the next video, we'll talk about how Vue can manage this section of the document, this div, to dynamically render it using some of the flashcard attributes from our data file.

> [!info]- Semantic Content
>
> **Env Vars:** url (4), cdn (3), html (1), npm (1), cli (1)
> **Code Keywords:** for, (1), interface (1), case, (1)
> **Versions:** version 2 (1), version 3 (1), 3.0.7 (1)
> **CLI Commands:** npm (1), find (1)
> **Tools:** command line (2)
> **Prerequisites:** set up (2)
> **File Paths:** vue.js (1)
> **URLs:** [vuejs.org](https://vuejs.org) (1)

#### Configuring dynamic elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=0)** - [Instructor] In order to configure our Vue app so that it can manage part of our page, we'll add another script element down here making sure that it appears after the one that loads the Vue framework.
>
> **[0:13](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=13)** Next I'm going to declare a new constant called FlashcardApp.
>
> **[0:20](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=20)** And by the way, you'll see const used in this way in the Vue 3 guide as well.
>
> **[0:25](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=25)** A discussion of why that makes sense as opposed to var or let is beyond the scope of this course, but feel free to ask in the Q&A tab if you want to know more about that.
>
> **[0:35](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=35)** So this is not really the app itself, but an object that describes it by representing some options that we're going to pass to a method that will create the app.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=46)** One of those options is the data that our app is going to work with, and we declare that with a function called data that returns an object.
>
> **[0:58](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=58)** The object that the data function returns will contain, for now, just a property called deckName, the name of our flashcard deck.
>
> **[1:08](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=68)** And this is going to be Vue.js Fundamentals.
>
> **[1:12](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=72)** This is going to be a deck of flashcards related to Vue.js concepts, but this app could actually be used to present any deck of flashcards.
>
> **[1:21](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=81)** And this is all we need to get going for now.
>
> **[1:23](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=83)** So on a new line, I'm going to call Vue.createApp, passing in our options object.
>
> **[1:33](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=93)** And then chain onto that a call to mount, which will take a selector for the DOM element that we want Vue to manage for us by mounting the app on it.
>
> **[1:44](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=104)** In this case, we can use this div up here that already has an ID of app.
>
> **[1:52](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=112)** So just like a CSS selector, I'm going to do #app.
>
> **[1:57](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=117)** And now what does this allow us to do?
>
> **[2:00](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=120)** Well, instead of having to write code that, say, selects this H1 element and imperatively sets the inner text, I can just declaratively say that I want the inner text of this element to be the value of our deck name data property, and I can do that using the mustache or double curly brace syntax.
>
> **[2:28](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=148)** The other benefit to this is that it's very easy now for someone to come along later on, and that someone may be you in the future, and just quickly scan this HTML template, and have a good idea of what's going on as compared to when you have some code in a script somewhere that's explicitly accessing this element's inner text value.
>
> **[2:47](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=167)** So if I go over to the browser now and refresh, I can see that deck name has now been replaced by Vue.js Fundamentals.
>
> **[2:56](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=176)** One problem with this is that you might notice a brief flicker of the curly braces when the page is loading before Vue has a chance to take over and replace the div that it's mounted on with its own version.
>
> **[3:10](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-dynamic-elements?u=76281980&t=190)** In the next video, we'll look at a simple solution for this, and also explore some other ways to bind data to DOM elements.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), const (1), var (1), let (1), pass (1)
> **Env Vars:** dom (2), css (1), html (1)
> **File Paths:** vue.js (3)
> **Code Identifiers:** deckname (1), createapp (1)
> **Versions:** vue 3 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### Binding to inner text and HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=0)** - [Narrator] In this video, we'll start to get a sense of Vue's reactivity system and observe how the UI changes when the underlying data changes.
>
> **[0:08](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=8)** First, to get rid of that flash of curly braces when the page loads.
>
> **[0:13](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=13)** One we can do that is just to not put anything between the "h1" tags, to not use the curly braces, and instead opt to use the "v-text" directive which is a special attribute that we can use to bind the inner text to our "deckName" data property.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=32)** So now when we refresh, there's no sign of curly braces because we aren't using them anymore.
>
> **[0:39](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=39)** Now let's take a step toward displaying some flashcard data by adding our cards array to our view data.
>
> **[0:50](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=50)** So, we'll add a new property in our data object called "cards" that will initialize with the value "cards" from the data file.
>
> **[1:01](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=61)** And, this type of property declaration, where the name and the value are the same is so common that we've had a shortcut for it since ES 2015 and in this case it would just be "cards".
>
> **[1:15](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=75)** So let's see if we can just display the content of the first card by setting the inner text of this "h2", I'll remove "item" here, to "cards", the first element at index zero, ".front" And, the inner text of this "div" to "cards[0].back".
>
> **[1:45](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=105)** If we refresh, we can see that content but one problem we have is that you'll notice that there's a little bit of HTML in the description here.
>
> **[1:54](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=114)** Since we're using "v-text" to set the inner text, that HTML is going to be escaped and if we want to render it as HTML, we should use the "v-html" directive instead.
>
> **[2:10](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=130)** Another problem is that we don't want to show both the front and the back of the card at the same time.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=136)** We'll see some cleaner ways to handle this later but one way to approach this is to add a new property called "flipped" which will keep track of whether this card has been flipped over or not and it'll be "false" initially.
>
> **[2:32](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=152)** It's worth mentioning that you can use any single expression for the value provided to "v-text" or "v-html" even a ternary expression like this.
>
> **[2:45](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=165)** So we're saying that if the value of "flipped" is "true", we want an empty string here 'cause the card's been flipped over, otherwise the content of the front like we had it before and then the opposite for the back.
>
> **[3:06](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=186)** Sometimes when I start putting ternary expressions in my templates, it will feel a little bit messy to me and that's a signal that I might need to structure something differently.
>
> **[3:17](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=197)** But, for now, it's good to know that we can do this if we need to.
>
> **[3:21](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=201)** Let's use this as an opportunity to observe the reactive behavior that's so important to all modern JavaScript frameworks which will instantly bring our UI in sync with the underlying data whenever it changes.
>
> **[3:34](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=214)** So first we'll save a reference to our created app in a new variable named "app" and now, having done that, we can refresh the browser and then if we open up the dev tools in the console, I can type "app.flipped" and notice that it shows the default value of "false".
>
> **[3:57](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=237)** If I set "app.flipped" to "true", the DOM is updated immediately.
>
> **[4:03](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=243)** This is the power of a declarative, reactive UI.
>
> **[4:07](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-to-inner-text-and-html?u=76281980&t=247)** Next we'll look at one way to set up a mechanism to allow the user to flip the card themselves.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Env Vars:** html (3), dom (1)
> **Code Identifiers:** deckname (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Dynamic attributes and v-model
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=0)** - [Instructor] Next I want to take a quick look at how to bind data properties, to an elements attributes.
>
> **[0:05](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=5)** Let's say that we wanted to add a link for more information down here.
>
> **[0:11](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=11)** The link text will be read more and, it will point to the Vue guide.
>
> **[0:18](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=18)** But if we want to our app to be a generic solution for any kind of flashcard deck, we would probably have our URL as part of the data, and we can just call it readMoreUrl and initialize it to that same value.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=32)** All we have to do now, to use our data property in place of this hard-coded href value, is replace it with readMoreUrl, and change href to v-bind:href.
>
> **[0:51](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=51)** So now if I refresh, I have a link down here, with a dynamic href value.
>
> **[0:57](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=57)** One way to simplify your template or your markup, is just to remove the v-bind part, leaving only :href, this is just a shorthand version of the v-bind syntax, and it's usage is very common.
>
> **[1:13](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=73)** In fact for the rest of the course we'll be using the shorthand syntax, instead of the v-bind syntax.
>
> **[1:18](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=78)** Next, I'm going to add a text field up here just to experiment a little with.
>
> **[1:23](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=83)** (keyboard crunching) And if I wanted to pre-populate this with an initial value, I could do the same thing with v-bind value or just :value.
>
> **[1:35](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=95)** Let's create a new data property called user input, and down in our data object we'll give it a default value.
>
> **[1:43](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=103)** (keyboard crunching) And we'll just say default for now.
>
> **[1:50](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=110)** So going back up here again I'm just applying this markup and CSS to make it all a little bit easier to see.
>
> **[2:02](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=122)** And we'll invite the user to type something.
>
> **[2:07](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=127)** So now when I refresh, I see the default value there, and if I go to the console, and do app.userInput to access our data property, I see that it has the value default, and, I can also reassign it to some other value, and once I hit enter, I see that reflected on the page immediately.
>
> **[2:31](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=151)** But one limitation with this is that the data is only flowing in one direction, from Vue to the DOM.
>
> **[2:38](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=158)** So if I go up here and I type, something else, it's not going to be reflected, when I evaluate app.userInput again it still says some other value.
>
> **[2:49](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=169)** And I'm certainly going to want my app to have access to that updated value.
>
> **[2:53](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=173)** To solve this problem, we can just use instead of :value, the v-model directive to set up that two way binding.
>
> **[3:03](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=183)** So now when the user edits this field, it will automatically update our user input data property.
>
> **[3:10](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=190)** So let's test this by checking for the word flip, and using user input, as a mechanism for flipping the card.
>
> **[3:18](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=198)** So instead of flipped here, I'm going to ask if user input is equal to flip, and we'll do the same thing right below, instead of, flipped we have that conditional expression.
>
> **[3:35](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=215)** So now when I refresh, and type the word flip, notice I don't even have to submit the form, I don't even have a form actually, and in fact, this field isn't even named, but as soon as I type the P, we got the card to flip, and then if I change it or just hit backspace, it unflips it, that's because the reactivity mechanism is based on the native input event that's being raised every time I type a character.
>
> **[4:06](https://www.linkedin.com/learning/learning-vue-js-8602681/dynamic-attributes-and-v-model?u=76281980&t=246)** So here we have a very declarative very reactive setup to handle this user input, but of course a simple click to flip the card would be better so we'll look at that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (1), type, (1), else, (1)
> **Code Identifiers:** readmoreurl (2), userinput (2)
> **Env Vars:** url (1), css (1), dom (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Handling events with v-on
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=0)** - [Instructor] Now we'll see just how easy it is to respond to a click event in order to flip our card.
>
> **[0:06](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=6)** I've removed the text fields that we were using in the last video, and also reintroduced our previous logic where we were checking the value of the flipped data property.
>
> **[0:17](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=17)** If we want to allow the user to click anywhere on a card and have it flipped to show the back, all we have to do is set up a click handler on this div, using the v-on directive.
>
> **[0:29](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=29)** So v-on:click.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=32)** And then for the value, I can add a statement for what I want to happen.
>
> **[0:39](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=39)** In this case, I want to toggle the Boolean value flipped.
>
> **[0:43](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=43)** So we just set it to its opposite.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=46)** So now when I refresh, I can click to flip the card as many times as I want.
>
> **[0:53](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=53)** v-on also has a shorthand syntax.
>
> **[0:57](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=57)** And it's an @ symbol instead of the v-on:.
>
> **[1:01](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=61)** Again, this is very common so we'll be using this form throughout the rest of the course.
>
> **[1:07](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=67)** Another thing that's overdue to be addressed is the fact that we're only loading the first card in the deck at index zero.
>
> **[1:15](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=75)** Let's change this to Index and we'll add a new data property called Index to keep track of the current index in the array.
>
> **[1:25](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=85)** So down here, I'll add it after cards.
>
> **[1:27](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=87)** Index, and we'll initialize it to zero to show the first card.
>
> **[1:32](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=92)** Next, let's add a button to advance to the next slide.
>
> **[1:39](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=99)** This HTML entity that I'm typing is just a forward arrow.
>
> **[1:45](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=105)** And I'm going to wrap this in a div with class navigation.
>
> **[1:50](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=110)** That's just something that's already in my style sheet that'll help me center this.
>
> **[1:55](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=115)** Now we'll add a click handler with @click.
>
> **[1:59](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=119)** And this time, instead of using an inline statement, we're going to encapsulate our logic in a method named move.
>
> **[2:07](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=127)** So then down in my options object, I'm going to add a key for methods which takes an object containing the methods.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=136)** And we'll add the move method.
>
> **[2:20](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=140)** So this will just increment the value of Index.
>
> **[2:23](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=143)** And while we're inside a method, we could access Index through our app variable down here.
>
> **[2:31](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=151)** Or we could just say this.Index.
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=155)** And this will just increment the value again.
>
> **[2:39](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=159)** One reason that it's nice to use a method is that it's a lot cleaner than putting something in the template if we need to add additional logic here.
>
> **[2:47](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=167)** For example, it would be a good idea to reset the value of flipped.
>
> **[2:52](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=172)** So we see the front of the next card and not the back as I'm cycling through.
>
> **[3:00](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=180)** Now, when I refresh, I'm able to move forward in the deck and cycle through the cards.
>
> **[3:07](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=187)** So I named this method move instead of next or advance because I knew I wanted to use it to move in either direction and not just forward.
>
> **[3:17](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=197)** So up in the template, notice that I don't need parentheses here if I'm not passing a parameter.
>
> **[3:22](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=202)** This is actually calling the method.
>
> **[3:25](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=205)** But if I created another button with a left arrow, then I could pass negative one or one to indicate the direction I want to move.
>
> **[3:41](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=221)** Back down here in the method, I could call this parameter change.
>
> **[3:46](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=226)** And instead of doing Index++, I can now do Index plus equals the change.
>
> **[3:54](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=234)** We should be careful to not go outside the bounds of our array.
>
> **[3:58](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=238)** So let's just test, this.cards and then this.Index plus change for a truthy value just to see if that index exists.
>
> **[4:10](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=250)** Otherwise we won't try to move.
>
> **[4:16](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=256)** So either way, it will keep our HTML template a lot cleaner if we keep all of this logic in a method.
>
> **[4:24](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=264)** So now I have my two arrows.
>
> **[4:26](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=266)** And I can move both ways.
>
> **[4:28](https://www.linkedin.com/learning/learning-vue-js-8602681/handling-events-with-v-on?u=76281980&t=268)** In the next chapter, we'll take a deeper dive into how to work with various form controls in Vue.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (3), case, (1), pass (1)
> **Exercise Files:** template (3)
> **Env Vars:** html (2)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** toggle (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** set up (1)


### 2. Form Control Bindings

#### Text field bindings
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=0)** - In this video, we'll take a look at a very simple HTML form, and talk about how to manage text fields using Vue.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=7)** In my code editor, you can see that this is indeed a form element with an input of type text and then a text area for lengthier input.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=16)** And then below we have the submit button.
>
> **[0:20](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=20)** Our view app is created the same way as before and I'm starting with a data object that has only the deck name property for now.
>
> **[0:29](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=29)** So we've already seen that we can use v-bind value, or the shorthand version, just colon value to pre-populate a text field with a given value.
>
> **[0:39](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=39)** And remember that value could be a data property, or a JavaScript expression.
>
> **[0:44](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=44)** Or even something like math dot random.
>
> **[0:50](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=50)** So let's use deck name instead.
>
> **[0:55](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=55)** And if this were an existing flashcard deck that we were just editing, it might be perfectly fine to preload that value, and then just use a traditional form submission to update it.
>
> **[1:07](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=67)** But if we did that, why would we bother using Vue at all in that case?
>
> **[1:12](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=72)** Because it's still might help us manage some dynamic behavior that we want to add.
>
> **[1:17](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=77)** For instance, I might want to display the length of this value here.
>
> **[1:21](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=81)** So inside double curly braces I could say deck name dot length, and then the word characters after.
>
> **[1:32](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=92)** So this shows us that the current value is 19 characters long.
>
> **[1:36](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=96)** The only problem is that it doesn't change when I edit the fields.
>
> **[1:42](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=102)** And that's because we haven't set up that two way data binding.
>
> **[1:46](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=106)** We've used Vue to render a text field with a dynamic value, but we haven't told it to update the data property when the input changes.
>
> **[1:57](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=117)** To do that remember, we need to use the v-model directive, instead of a dynamic value.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=125)** So now that we see, as I remove characters or as I type more, we're writing the new value to our view instance with every keystroke and updating the UI accordingly.
>
> **[2:18](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=138)** V-model and colon value work the same way with the text area.
>
> **[2:22](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=142)** So if you're familiar with text areas, you know that a pre-populated value usually goes between the text area tags.
>
> **[2:29](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=149)** You should avoid doing that when using Vue.js, even though it might seem to work in some cases.
>
> **[2:36](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=156)** But usually we want that two way data binding, so we should use v-model anyway.
>
> **[2:45](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=165)** Let's add a property called deck description.
>
> **[2:50](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=170)** And then I'll add it to my data object initialized to an empty string.
>
> **[2:56](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=176)** Of course, a more typical example of counting the length of an input would be to indicate a limit.
>
> **[3:04](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=184)** So if our limit for deck description were say, 200 characters, then we could add the curly braces here and say, 200 minus deck description dot length.
>
> **[3:19](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=199)** And we could say that that many characters are still available, or that many characters are left.
>
> **[3:25](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=205)** So now if I refresh again, as I type you can see that number being updated on the fly.
>
> **[3:33](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=213)** So that should give you a good introduction to managing text fields with Vue.
>
> **[3:37](https://www.linkedin.com/learning/learning-vue-js-8602681/text-field-bindings?u=76281980&t=217)** Next, we'll take a look at check boxes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **File Paths:** vue.js (1)
> **Env Vars:** html (1)
> **Analogies:** for instance (1)
> **Best Practices:** avoid doing (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### Using v-model with related checkboxes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=0)** - [Instructor] Let's take a look at some ways that we can work with checkboxes in Vue.
>
> **[0:04](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=4)** So, here you can see that I've added some options to the Deck Settings page, so far, I've only added some basic HTML, nothing related to Vue or any kind of dynamic behavior.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=16)** Let's take a look at this first checkbox, include reverse cards just means that, the user would be presented with both sides of the card as they go through the deck.
>
> **[0:27](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=27)** So, they may be shown a description and they'll have to come up with the name of the item and vice versa.
>
> **[0:34](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=34)** One way we might deal with managing the state of this particular checkbox within our Vue app is to set up a data property that's associated with it, which we could call, reverse.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=46)** This will be a Boolean value because it's just going to keep track of whether this checkbox is checked or unchecked.
>
> **[0:53](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=53)** So, we would initialize to false.
>
> **[0:55](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=55)** And then we would connect that to the checkbox using v-model, so, v-model = reverse and note that the value attribute here really isn't serving any purpose, but we'll leave it for now because we'll use it in another way in a moment.
>
> **[1:12](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=72)** To help us see this in action, let's add another div down here where we just display the value of reverse.
>
> **[1:22](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=82)** So, you can say the value of reverse is, and I'll make it bold and we can just display it as a string.
>
> **[1:31](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=91)** So, now when I refresh, you can see the default value is false.
>
> **[1:35](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=95)** And as I toggled the state of this checkbox, you can see a change there.
>
> **[1:43](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=103)** Let's say you're dealing with a legacy system that's expecting a parameter named reverse, that set to either on or off when we post this form.
>
> **[1:53](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=113)** To handle that, we could use the true-value and false-value directives.
>
> **[1:58](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=118)** So, I could say, when this is checked, I want its value to be on and when it's unchecked, I want the value to be off.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=133)** So, now when I toggle the checkbox, you see, on and off, instead of true and false, note that I didn't change the default value of false, so we still saw that one first.
>
> **[2:25](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=145)** In this case, you'd probably want to just change that to off.
>
> **[2:28](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=148)** Another way we can handle these checkboxes is as a group, in Vue, it's typical to use the same v-model property on a group of related checkboxes.
>
> **[2:37](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=157)** So, instead of being named individually, we could use the name options and then copy that to the other two checkboxes.
>
> **[2:50](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=170)** And then down in data, instead of reverse, we could have options initialized to an empty array.
>
> **[2:57](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=177)** So, what that will do is store all of the values of the checked boxes in an array for us.
>
> **[3:03](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=183)** And again, to see this in action, let's just display the array as a string up here.
>
> **[3:10](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=190)** So, instead of value of reversed, I'll show selected options and that will just cast it to a string and show us what we've selected.
>
> **[3:22](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=202)** So now, as I'm checking and unchecking these boxes, you can see the values are added to our options array and they're kept in sync with the state of the checkboxes.
>
> **[3:35](https://www.linkedin.com/learning/learning-vue-js-8602681/using-v-model-with-related-checkboxes?u=76281980&t=215)** Next, we'll take a look at radio buttons and select elements which usually behave in a similar fashion.

> [!info]- Semantic Content
>
> **UI Navigation:** checkbox (6), toggle (1)
> **Code Keywords:** let (5), case, (1)
> **Warnings:** note that (2)
> **CLI Commands:** make (1)
> **Env Vars:** html (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Configuring radio buttons and select elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=0)** - [Instructor] Now we'll find out how to bind data to radio buttons, and then we'll do the same for select elements, also known as drop-downs.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=7)** So here we have a couple of related radio buttons in a field set for an additional option called leech action, with one of two values, tag or suspend.
>
> **[0:17](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=17)** Leech is a term that I'm borrowing from a popular flashcard program called Anki, which gets his name from the Japanese word for memorization.
>
> **[0:26](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=26)** Anki defines leeches as cards that you tend to have trouble with repeatedly.
>
> **[0:31](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=31)** So you'll have the choice to either temporarily suspend them or just tag them as leeches for reference.
>
> **[0:39](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=39)** Much like a group of related check boxes, I'll use the same V-model property on each radio button element. And we'll call it leech.
>
> **[0:48](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=48)** So I'll add V-model equals leech, and then copy that to the next radio button.
>
> **[0:55](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=55)** (computer keys clicking) And then in our data object down here, we'll add leech and we can let it default to tag because that's the first one that appears.
>
> **[1:07](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=67)** Instead of displaying the selected value on the page or looking at it in the JavaScript console, let's track this value using the Vue JS devtools extension, which is available for Chrome and Firefox, or as a standalone app.
>
> **[1:21](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=81)** I happen to be using Firefox at the moment.
>
> **[1:24](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=84)** So I'm just going to search for Firefox Vue devtools.
>
> **[1:30](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=90)** At the time I'm recording this course, the first value here will still install the Vue two version, although it might be different for you by the time you watch the course.
>
> **[1:41](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=101)** But for me, the Vue three version is still in beta, so I'm going to look at this third result here and visit the GitHub repository, scroll down to installation, and click on beta channel next to the Firefox add-on.
>
> **[1:58](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=118)** I'll click on the first release in the list and then click on this XPI file down here.
>
> **[2:06](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=126)** Continue to installation, and allow it to be added to Firefox.
>
> **[2:12](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=132)** And now you should see this little V in the upper right.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=136)** If we go back to our page and click on that V, we should see a message telling us that Vue JS was detected on this page and suggesting that we opened the devtools and look for the Vue panel under the Vue tab.
>
> **[2:31](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=151)** So I usually do that with F12, and if you don't see it right away, try refreshing the page, closing and opening the dev tools again. And there it is.
>
> **[2:42](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=162)** So over on the right, I have the Vue tab, and if I click that, then I can click route which corresponds to my route Vue instance.
>
> **[2:50](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=170)** Then I should be able to see all of my data over here on the right, including the value for leech, which I can confirm changes from tag to suspend as I toggle those radio buttons.
>
> **[3:04](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=184)** Next, let's take a look at this select element here which offers some possible categories to assign to our flashcard deck.
>
> **[3:13](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=193)** Again, if I want to manage the selected value with Vue, perhaps to post the options as JSON, to an API with an Ajax request, I can simply add V-model (computer keys clicking) and I'll call it category ID. (computer keys clicking) And then let's make sure that we add category ID to our data down here. (computer keys clicking) And we can initialize it with the same value as the default that just invites the user to select, which is an empty string.
>
> **[3:45](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=225)** And to ensure that we've set this up correctly, (computer mouse clicks) I can refresh and take a look at the Vue dev tools.
>
> **[3:54](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=234)** You can see this default category ID empty string and watch it change as we select different options from the dropdown.
>
> **[4:04](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-radio-buttons-and-select-elements?u=76281980&t=244)** So seeing that ID changed there makes me confident that I can access the selected value in the dropdown, when necessary, from my Vue logic.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), dropdown (2), scroll down (1), toggle (1)
> **Tools:** firefox (5), github (1)
> **Code Keywords:** let (4), continue (1)
> **Env Vars:** xpi (1), f12 (1), json (1), api (1)
> **Non-Speech:** (computer keys clicking) (4)
> **Definitions:** known as (1), is a  (1), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1)

#### Adding modifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=0)** - [Instructor] View includes several directive modifiers that provide shorthand syntax for adding certain behaviors.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=7)** For example, if we look at the deck name property in view DevTools, we can see that the bound value increases in length if I just hit the Space bar a few times.
>
> **[0:18](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=18)** We might want to write some code in a submit event handler that trims that string before sending it to the server.
>
> **[0:25](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=25)** But we have a convenient alternative in the trim modifier which is basically as easy as just typing the word trim in our template.
>
> **[0:33](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=33)** So we'll do that right after the V model for deck name.
>
> **[0:37](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=37)** So this becomes V-model.trim.
>
> **[0:40](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=40)** If I go back and refresh, and if you watch deck name now in the view DevTools, you can see that no matter how many times I press the Space bar, the bound value in our data object doesn't change.
>
> **[0:53](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=53)** But of course this only handles leading or trailing white space.
>
> **[0:57](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=57)** So if I start typing out here, I'll get a long string with that space in the middle.
>
> **[1:03](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=63)** Again, it's nice that View keeps our form fields and our data in sync with every keystroke.
>
> **[1:09](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=69)** It does that by handling the native input event.
>
> **[1:12](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=72)** But what if we didn't want that?
>
> **[1:13](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=73)** What if we only wanted to update our data property after the user has finished typing and then moved the focus away from that field?
>
> **[1:22](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=82)** We can tell you to handle the change event instead of the input event, by adding the lazy modifier.
>
> **[1:28](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=88)** So if we do V-model.lazy equals deck description then you can see that typing in this text area,
>
> **[1:42](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=102)** has no effect on the value we see in the DevTools until I hit Tab.
>
> **[1:48](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=108)** Next, the category ID values are treated as strings by the browser.
>
> **[1:54](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=114)** You can see that if I select biology, say the value for category ID is now the string three.
>
> **[2:01](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=121)** But it may be helpful at times to automatically cast those to integers.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=125)** That can be accomplished with the number modifier.
>
> **[2:09](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=129)** So if I change this to the V-model.number, equals category ID, when I refresh and select biology again, I now have three as a number type.
>
> **[2:23](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=143)** Other modifiers exist for use with event handlers.
>
> **[2:27](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=147)** The one that I use the most is probably the prevent modifier.
>
> **[2:30](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=150)** So if I were to add a V on click or the shorthand version, just @click to this submit button and have it call a method named submit.
>
> **[2:42](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=162)** Recall that I would need to add a key down here in our options for methods, and then define the submit method.
>
> **[2:51](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=171)** For now let's just have it pop an alert that says that we're submitting the form.
>
> **[2:57](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=177)** So now if I make some changes and then I click the create button, it pops the alert, but once I hit, okay the browser submits the form and refreshes the page.
>
> **[3:10](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=190)** If I want it to prevent that default behavior I could just do, @click.prevent.
>
> **[3:21](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=201)** Now we can handle this submission however we want, again, perhaps with an AJAX call and a client site update.
>
> **[3:37](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=217)** There are a few other modifiers that will come in handy at times, including stop for stopping event propagation, self for detecting whether the target was this element or a child element.
>
> **[3:50](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=230)** And once for limiting the handler to a single execution.
>
> **[3:54](https://www.linkedin.com/learning/learning-vue-js-8602681/adding-modifiers?u=76281980&t=234)** For now, we'll wrap up this chapter with a discussion of View's computed properties feature which is a great example of how powerful its reactivity system is.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), let (1), self (1)
> **CLI Commands:** make (1)
> **Env Vars:** ajax (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Computed properties
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=0)** - [Instructor] Vue.js uses a reactivity system that tracks changes in the data that we declare when we create a view instance.
>
> **[0:08](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=8)** It can tell when changes to the data necessitate re-rendering parts of the DOM.
>
> **[0:15](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=15)** To improve the performance of this process, as well as the readability of our templates, we can make use of something called computed properties.
>
> **[0:23](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=23)** A computed property is something that's derived or calculated based on existing data properties or even other computed properties.
>
> **[0:31](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=31)** In practice, they work a bit like methods, but they have some advantages for organization and performance.
>
> **[0:38](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=38)** Take a look at our mustache expression here that shows how many characters are still available for our description.
>
> **[0:44](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=44)** As JavaScript expressions go, this one's fairly readable, but there are a lot of front-end developers who would say that even this is too much code for what we're claiming as a declarative template.
>
> **[0:56](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=56)** What a computed property allows us to do is move this logic into our Vue instance and replace it with a simple identifier.
>
> **[1:05](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=65)** In this case, we could use something like charsLeft.
>
> **[1:10](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=70)** This certainly makes our template cleaner.
>
> **[1:12](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=72)** Let's see how it works in our Vue options.
>
> **[1:17](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=77)** After data, I'm going to add another key called computed which is an object containing my computed properties.
>
> **[1:25](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=85)** for now, I'll add a single property called charsLeft which we declare as a function.
>
> **[1:31](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=91)** And all that has to do is return the expression that was previously in our template which I had cut to the clipboard.
>
> **[1:38](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=98)** Except, I also have to remember to change deckDescription to this.deckDescription, because now we're inside the Vue instance and not in the template where we can just use the bare property name.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=111)** So if I refresh, I can see that this should be working the same way as before.
>
> **[1:56](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=116)** This number is updated on the fly.
>
> **[1:59](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=119)** And it's actually possible to set this up, using a method instead.
>
> **[2:03](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=123)** You might be wondering about that.
>
> **[2:06](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=126)** I could comment this out and move it down to methods.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=133)** And the only difference is, I would need to invoke the method with parentheses up here, instead of just the computed property name.
>
> **[2:25](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=145)** The reason that we prefer a computed property when possible is that they're cached and only recalculated as necessary.
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=155)** Whereas, the method version would be executed every time that part of the DOM is re rendered.
>
> **[2:41](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=161)** At this point, we've covered a lot of basic concepts in Vue, but we still haven't talked about using conditional rendering or loops within our templates.
>
> **[2:50](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=170)** So in the next chapter, we'll tackle those concepts and discuss Vue's built-in support for managing CSS.
>
> **[2:57](https://www.linkedin.com/learning/learning-vue-js-8602681/computed-properties?u=76281980&t=177)** And that will open up a lot of possibilities for a dynamic user interfaces.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1), function (1), except, (1), this. (1)
> **Code Identifiers:** charsleft (2), deckdescription (2)
> **Exercise Files:** template (4)
> **Env Vars:** dom (2), css (1)
> **File Paths:** vue.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)


### 3. Rendering and Styling Logic

#### Conditional rendering with v-if
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=0)** - [Instructor] In this video, we'll turn our attention back to our flashcard presenter and clean up our template using some additional directives for conditionally displaying elements.
>
> **[0:11](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=11)** If we look at this first inner div here inside the div that our app is mounted on, we have this click handler here and for the value of that directive we have a bit of JavaScript code that will be executed when a user clicks.
>
> **[0:26](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=26)** And that's instead of perhaps a method call to handle the click event.
>
> **[0:30](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=30)** Again, some Vue developers would prefer not to have any statements like this in their templates.
>
> **[0:36](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=36)** Personally, I think a simple assignment like this is okay, but that's about as far as I would go with actually including imperative code in your template.
>
> **[0:45](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=45)** And moving inside where we display either the front or the back of the card in the level two heading or div element here, depending on the value of flipped, this is definitely more logic than I would usually like to see in a template.
>
> **[1:01](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=61)** And this type of toggling behavior can be more elegantly implemented with some simple if and else directives.
>
> **[1:09](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=69)** Since we're using Vue, it will be v-if.
>
> **[1:14](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=74)** So we add v-if here and I might've swapped these elements if I want it to start with v-if flipped, but I can also just say v-if.
>
> **[1:25](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=85)** If the card is not flipped, then I want to display the front here, and I can take out this ternary statement and just change it to cards index.front.
>
> **[1:37](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=97)** And then for the div, I'll just have v-else.
>
> **[1:41](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=101)** No value needed, it's just the else condition, so if flipped is true.
>
> **[1:48](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=108)** And again, I can remove part of this ternary and just leave cards index.back.
>
> **[1:57](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=117)** And while we're cleaning this up, let's go ahead and create computed properties for the front text and the back HTML.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=125)** So we could just use front and back in our template.
>
> **[2:09](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=129)** So I'm going to cut this and replace it with just front.
>
> **[2:14](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=134)** And then I'm going to go down to our Vue options, add back that computed key, and...we're going to define a computed property called front, and we'll need to remember to add, not only returned, but this in front of cards and this in front of index.
>
> **[2:43](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=163)** So I'm just going to copy this for back and change front to back on the end there.
>
> **[2:51](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=171)** And now if I go back up here, I already have front for v-text, and I can clean this up a little bit.
>
> **[2:58](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=178)** And for v-html, we have back.
>
> **[3:01](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=181)** So now, if I refresh, I see the same behavior as before, but it's implemented in a cleaner, more readable way.
>
> **[3:11](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=191)** And by the way, because that H2 element is no longer there to push the description down, I did sneak some CSS into the stylesheet to add some padding to that div there, so it wasn't all the way at the top.
>
> **[3:23](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=203)** By the way, there's also v-elseif, which can be pretty useful at times.
>
> **[3:29](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=209)** For example, I might want to make sure that back actually exists before rendering it.
>
> **[3:35](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=215)** So I might have a check for that there.
>
> **[3:38](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=218)** And you can have as many elements with v-elseif as you want, followed by an optional v-else at the end.
>
> **[3:46](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=226)** One thing that's important to understand about v-if and v-else is that they determine whether or not elements actually exist in the DOM and not just whether they are visible.
>
> **[3:57](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=237)** So if we pull up the developer tools and let me flip this back, if we zero in on this H2 here, you can see that there's no sign of that sibling div tag until we click.
>
> **[4:13](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=253)** So it's actually yanking these elements out of the DOM and then recreating them as we keep clicking and flipping the card instead of hiding them with CSS.
>
> **[4:23](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-if?u=76281980&t=263)** But sometimes it's preferable to hide and reveal elements with CSS, and we'll talk about how to implement that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), dom (2), html (1)
> **Code Keywords:** if. (2), let (2), else. (1)
> **Exercise Files:** template (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Conditional rendering with v-show
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=0)** - [Instructor] Next, we'll take a look at a directive that's very similar to v-if called v-show, and we'll discuss some of the reasons you might want to choose one over the other in certain situations.
>
> **[0:11](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=11)** Remember what I showed you, at the end of the last video, when we use v-if and v-else, the element that's toggled off is actually removed from the DOM, but sometimes it's beneficial to not have you create and destroy these elements on demand, and instead just hide or reveal them with CSS.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=32)** And that's especially true if it's resource intensive or time consuming to create the elements, and that's where v-show comes in, to demonstrate, we're going to introduce a short delay before returning the computed property back, which is referenced here.
>
> **[0:49](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=49)** So before the return statement, we'll just let an empty loop run, so for zero, all the way to three times 10 to the ninth.
>
> **[1:07](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=67)** We'll let that loop run before returning the back content, and this will just simulate an expensive operation that fetches or generates this content.
>
> **[1:16](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=76)** So now that we have that delay, let's refresh the page and we'll see how the card flip behaves.
>
> **[1:23](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=83)** So I'm clicking the card now, and you can see it takes a few seconds for it to show me the back, that's because the div element that was just created, it didn't exist until we clicked, and the value of "back" isn't computed until it's needed, but if I keep clicking, you can see that the delay has gone because the computed value of "back" is cached, remember, that's one of the advantages of setting this up as a computed property, of course, when I go to the next card, I've now changed the value of "index", which is a dependency of "back" and "back" must be recomputed sending it through that artificial delay loop once again.
>
> **[2:06](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=126)** So I'm clicking now, and I have to wait again.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=133)** Finally, we'll get to v-show.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=136)** So back up here, we'll change v-if to v-show, they behave very similarly, except one drawback to v-show, is that you can't use it with v-else.
>
> **[2:30](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=150)** But we can just do v-show="flipped".
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=155)** So refreshing again, once the page loads, the back content has already been rendered, although as a hidden element, and when we get around to flipping the card, which I'll do now, that value has already been computed, of course, if you noticed we did block the initial rendering of the page with that JavaScript loop, but in a real application, we might be loading that data behind the scenes with Ajax, which would avoid that completely, since we're on the subject of hiding and revealing things, it's a good time to talk about v-cloak, remember that if we wanted to, we could rewrite this with mustache syntax here instead of using v-text.
>
> **[3:17](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=197)** Refresh again, now with that delay, those curly braces are especially visible, but if we wanted to hide that element until Vue has loaded, we can do it with v-cloak.
>
> **[3:30](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=210)** So we're just going to add the v-cloak directive here on the h2, and v-cloak is a special directive that's always removed as soon as our view instance has finished compiling, by itself, it has no effect, but while it's present we can use it to hide the h2 element with CSS.
>
> **[3:52](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=232)** So in my style sheet, I have v-cloak display: none, and v-cloak is in square brackets because it's like an attribute.
>
> **[4:02](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=242)** Now, when we refresh again, we've hidden the mustache and the variable name from the user.
>
> **[4:11](https://www.linkedin.com/learning/learning-vue-js-8602681/conditional-rendering-with-v-show?u=76281980&t=251)** In the next video, we'll talk about rendering a collection of elements using a for-loop.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else, (1), finally, (1), else. (1)
> **Env Vars:** css (2), dom (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), it's like (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Looping and list rendering with v-for
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=0)** - In this video, we'll talk about how to use the v-for directive to iterate over a collection of items and render a series of related DOM elements.
>
> **[0:09](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=9)** Our example for this exercise will be a card manager page, which shows all of the cards in a list and allows the user to edit them.
>
> **[0:18](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=18)** So I've created a skeleton page that looks similar to where we started in chapter one.
>
> **[0:24](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=24)** For each card I want to show the front and the back side by side.
>
> **[0:29](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=29)** So that the user can see the whole deck at a glance.
>
> **[0:32](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=32)** To start, I'm going to add a div with the class card pair.
>
> **[0:40](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=40)** And that will allow me to place two child divs inside, each with class card.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=46)** And these will be lined up nicely with Flexbox with the help of some CSS that's already in our style sheet.
>
> **[0:54](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=54)** So again, we have our cards array in our data down here.
>
> **[0:58](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=58)** And what we want to do is iterate over that array, and render a card pair div for every element.
>
> **[1:06](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=66)** So we're going to add v-for to this card pair div.
>
> **[1:09](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=69)** In the syntax is going to be V dash for and then a looping variable that we can name whatever we want.
>
> **[1:16](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=76)** I'll call it card.
>
> **[1:18](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=78)** And then just in cards.
>
> **[1:21](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=81)** So we might say for every card in cards render one of these divs.
>
> **[1:27](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=87)** And what that will allow us to do, is to reference this card looping variable anywhere inside this div that has the v-for directive.
>
> **[1:37](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=97)** So for the front, we can add V-text is card.front.
>
> **[1:42](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=102)** And then for the back we have V-html is card.back.
>
> **[1:48](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=108)** So now when we refresh the page, we see all of the cards on one screen.
>
> **[1:53](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=113)** But how can we edit them?
>
> **[1:55](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=115)** Well, in this course we're not using any persistent data storage.
>
> **[1:58](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=118)** So the updates will last only until the page is refreshed.
>
> **[2:02](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=122)** But we can simulate, editing and saving.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=125)** So for this exercise, we'll just make the front editable.
>
> **[2:10](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=130)** And this card pair div is a repeating element.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=136)** So, if we're going to turn one of these into a text field to edit it in line, we'll need to know the index in the array of the card we want to edit.
>
> **[2:25](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=145)** To access the current index as we're looping, all we have to do is change card to card comma index.
>
> **[2:34](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=154)** Or you can even use I or whatever you want to call it.
>
> **[2:37](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=157)** And then surround these two variables with parentheses.
>
> **[2:43](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=163)** So now we can add a click handler on the front card.
>
> **[2:49](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=169)** And all that needs to do, is record the index of the card that we want to edit.
>
> **[2:55](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=175)** So I'm going to add a new data property called editIndex, and we'll just set that to the current index.
>
> **[3:04](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=184)** We could also have written a method that took index as a parameter if we wanted to.
>
> **[3:10](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=190)** So then, let's go ahead and define editIndex in data.
>
> **[3:14](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=194)** And we're going to initialize it to an invalid index so that we're not editing anything by default.
>
> **[3:23](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=203)** So next, I'm going to add another div and using v-if.
>
> **[3:28](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=208)** We can say that we should render another card div if the editIndex is the current index.
>
> **[3:40](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=220)** So this will have class card also, but instead of card.front, we'll have a text area with v-model card.front to allow us to edit it.
>
> **[3:54](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=234)** And then we're going to add v-else on the original front card.
>
> **[4:00](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=240)** And we'll render that if we're not editing.
>
> **[4:03](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=243)** So let's see what we have so far.
>
> **[4:05](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=245)** I should be able to click any of these cards on the left, and it's transformed into a text area that I could use to edit this content.
>
> **[4:16](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=256)** To finish this off, we can allow a user to press enter on the text area to simulate saving their changes.
>
> **[4:24](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=264)** So a shortcut for doing this would be to use the keydown or keyup event.
>
> **[4:32](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=272)** So we can say, on keydown, the same as V on keydown.
>
> **[4:39](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=279)** So remember this is the shorthand syntax @keydown just like @click.
>
> **[4:44](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=284)** And we can actually add a modifier to target a specific key, in this case enter.
>
> **[4:49](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=289)** So keydown enter, and what do we want to do?
>
> **[4:55](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=295)** All we need to do actually is just reset the edit index back to negative one.
>
> **[5:03](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=303)** So now if I refresh, let's say I want it to change mustache syntax to add an additional hint.
>
> **[5:11](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=311)** We'll add the double curly braces.
>
> **[5:14](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=314)** And when I press enter, my value is updated, and I'm back to the static version of the card.
>
> **[5:21](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=321)** In the next two videos.
>
> **[5:23](https://www.linkedin.com/learning/learning-vue-js-8602681/looping-and-list-rendering-with-v-for?u=76281980&t=323)** We'll take a look at some techniques for managing class and style attributes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default. (1), if. (1), static (1)
> **Code Identifiers:** editindex (3)
> **Env Vars:** dom (1), css (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - in (1)

#### Binding style attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=0)** - [Instructor] In this video, we'll take a look at how we can use dynamic style attributes in view.
>
> **[0:06](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=6)** Whether we're using view or just writing static HTML.
>
> **[0:09](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=9)** The use of style attributes is generally something we should avoid because it has a tendency to litter our markup with CSS properties that would be better off in an external style sheet but there are exceptions to that rule of thumb.
>
> **[0:23](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=23)** And also it can sometimes be helpful for quick prototyping.
>
> **[0:27](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=27)** A classic example for a dynamic style attribute is wanting to change a numeric value at a very granular level, such as a font size or a width which would be difficult to set up with CSS classes.
>
> **[0:40](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=40)** Let's see if we can add an option to dynamically change the font size on our card manager page.
>
> **[0:47](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=47)** So first I'm going to wrap this repeating div in another div where we'll be adding the dynamic style attribute.
>
> **[0:55](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=55)** And that's just so that I'm not repeating it over and over again in the card pair div and also so that it doesn't affect the h1 up here.
>
> **[1:03](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=63)** So we can set up a dynamic style attribute using the shorthand for v bind style, colon style.
>
> **[1:11](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=71)** And one way to set the value is as a JavaScript object with CSS property names and values.
>
> **[1:20](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=80)** So we can use the actual property name, font size.
>
> **[1:24](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=84)** If we put it in quotes, or we could use camel case font size without the quotes.
>
> **[1:30](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=90)** Then we can either put a static value in quotes like 15px or we would make more sense for our purposes is to build that string using a data property that we could call font size and then just add the px to it.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=111)** Now let's go ahead and add font size to data and we'll initialize it to 15.
>
> **[1:59](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=119)** And the reason we just use the numeric portion is that makes it a lot easier to change programmatically.
>
> **[2:07](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=127)** So next, we'll go back up here and set up some controls for the user.
>
> **[2:12](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=132)** So I'm going to add a static style attribute but we'll make it dynamic in a moment.
>
> **[2:18](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=138)** And I'm just going to add text align center and cursor pointer so that the user knows that they can click here.
>
> **[2:27](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=147)** They won't be able to click on text size, that's okay for now, but then we'll add a span that they can click on, which will increment font size.
>
> **[2:37](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=157)** So just fontsize++ here.
>
> **[2:40](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=160)** And that text is going to be bigger.
>
> **[2:43](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=163)** We'll add a vertical bar with another span and you can probably guess this is going to decrement font size, and it's going to set smaller.
>
> **[2:54](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=174)** So now if I refresh, you can see, I can click on bigger or smaller and can make the text way too big or way too small.
>
> **[3:05](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=185)** In a real app we would probably want to use a method instead of the inline statement so that we could add some limits on either end and some additional logic there.
>
> **[3:15](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=195)** This next example won't really be dynamic but just to show you another syntax I could take these two properties here.
>
> **[3:23](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=203)** I'll cut those to the clipboard and I could move them into an object in data that we'll call text size control style.
>
> **[3:41](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=221)** And again since text-align is not a valid JavaScript identifier, I would want to put quotes around it or I have the option of changing it to camel case.
>
> **[3:52](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=232)** But since center is a value, I do want quotes around that and pointer and cursor we can leave as this.
>
> **[4:01](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=241)** So having done that, I can change this style up here to a dynamic style attribute, colon style, and for the value, I can just give it the name of that object.
>
> **[4:13](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=253)** So if I refresh, I see the same style here.
>
> **[4:17](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=257)** I have my cursor and everything is aligned in the center.
>
> **[4:21](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=261)** It's also possible to use an erase syntax here in case you have multiple objects that you wanted to apply.
>
> **[4:28](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=268)** So if another style object were defined in data, I could do that and have both sets of CSS properties assigned.
>
> **[4:39](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-style-attributes?u=76281980&t=279)** In the next video, we'll take a look at CSS class bindings which offer a little more flexibility in terms of being able to conditionally apply them.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), let (2), case. (1), this. (1)
> **Env Vars:** css (5), html (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (3)
> **Prerequisites:** set up (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Binding CSS classes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=0)** - [Instructor] In this video, we'll continue looking at managing dynamic CSS with Vue, this time through the use of class attribute bindings.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=7)** And you can see that we're back to our flashcard presenter again.
>
> **[0:11](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=11)** What a good flashcard app needs is a way to receive feedback from the user.
>
> **[0:15](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=15)** At the very least, the user should be able to say either I'm good with this card for now or show me this one again in a bit.
>
> **[0:22](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=22)** So let's add a couple of buttons for that.
>
> **[0:24](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=24)** We're going to end up putting them right on the back of the card and one will say GOT IT and the other will say AGAIN.
>
> **[0:37](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=37)** And we'll put them in a div with class score just to help with the layout a little bit.
>
> **[0:46](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=46)** I'm also going to take this v-else here from the div with the back content and create a parent element for both of these elements so that they're toggled at the same time.
>
> **[0:57](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=57)** The back content, along with those buttons for the feedback.
>
> **[1:03](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=63)** One problem with our implementation so far is that the card changer logic just sort of stops when we get to the end of the array and then we can only go backwards.
>
> **[1:13](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=73)** So let's make it continue from the beginning when we go past the end and vice versa.
>
> **[1:18](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=78)** All we have to do is add an else and say if that index doesn't exist and the user's trying to go forward or change is plus one, then we'll reset the index to zero.
>
> **[1:33](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=93)** So we'll say this.index, depending on the value of change, so we test for if change is one, then we set it to zero, back to the beginning or we'll set it to the last index if they were already moving backwards and they're going past the beginning.
>
> **[1:53](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=113)** So this.cards.length -1 and whatever path we take, the if or the else, we can always unflip the card.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=125)** So let's move this line to the end.
>
> **[2:10](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=130)** And now let's handle GOT IT and AGAIN with methods named for them.
>
> **[2:15](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=135)** No parameters necessary.
>
> **[2:16](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=136)** So on this button, I'll add a click handler and it's going to call a method named gotIt.
>
> **[2:25](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=145)** And on the again button, same thing but it'll call a method called again.
>
> **[2:31](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=151)** So now down in methods, all gotIt has to do is remove the card from the list by splicing one element.
>
> **[2:40](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=160)** And then it can unflip the next card, which will automatically move into the current position.
>
> **[2:44](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=164)** So we can do this.cards.splice, starting at the current index, splicing one element.
>
> **[2:53](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=173)** And then we can say make sure the next card is not flipped already.
>
> **[3:00](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=180)** We want to be careful if we end up removing the last card though because then our index is no longer valid.
>
> **[3:06](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=186)** So after splicing, we should add a check to see if the current index is still valid.
>
> **[3:14](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=194)** So we'll say if this index doesn't exist, then we can just reset to zero.
>
> **[3:22](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=202)** And if zero is also not valid because maybe this was the last item in the array that we were removing, then we could just, at the beginning, pop an alert that says well done.
>
> **[3:33](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=213)** So we could test if the length of the array is one, even before we're removing anything, we can just return and pop an alert at the same time that says well done.
>
> **[3:46](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=226)** Not pretty for now but it does avoid these errors and I'll leave it to you to come up with a slicker way to handle the completion of the deck.
>
> **[3:54](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=234)** Also since GOT IT and AGAIN, since those buttons are right on the card, we don't want a button click to cause the card to flip when that event bubbles up.
>
> **[4:06](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=246)** So we should stop propagation of the click event to the parent div by just adding the stop modifier.
>
> **[4:13](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=253)** So click.stop and click.stop.
>
> **[4:16](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=256)** So we still need to define again and in again, we want to flag the current card as needing review.
>
> **[4:26](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=266)** So we can just add a new property to the card called isRepeat and set it to true.
>
> **[4:32](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=272)** So this.cards, this.index, we can say isRepeat equals true.
>
> **[4:39](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=279)** Speaking of repeating things, look at how many times I'm repeating this reference here, this.cards, this.index.
>
> **[4:47](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=287)** That would be a great candidate for a computed property to clean up these methods a little.
>
> **[4:52](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=292)** But again, I'll leave that to you.
>
> **[4:54](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=294)** And in again, we still want to increment the index, go to the next card after the user clicks again but we should do so through the move method, which handles the bounds correctly.
>
> **[5:06](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=306)** So this.move one.
>
> **[5:09](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=309)** Okay, so over in my style sheet, I have this again class already defined, which just adds a yellowish background color.
>
> **[5:17](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=317)** So what we can do in our card div up here is add a dynamic class attribute, again with v-bind or just :class and similar to the style syntax, this is often going to be a JavaScript object but the property names will correspond to CSS classes and the values will be treated as Booleans that determine whether the class name should appear in the list.
>
> **[5:44](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=344)** So if I write again and isRepeat, I'm saying that the again class should appear in the class list as long as isRepeat is true but remember, this isn't quite right yet because isRepeat is a property of the current card or any card.
>
> **[6:05](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=365)** So we would either have to change that so we're accessing isRepeat through the current card or to keep the template cleaner and to leave it like this, we can just make a computed property that returns the value of isRepeat for the current card.
>
> **[6:20](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=380)** And again, I'm going to be repeating that same reference but that's okay for now.
>
> **[6:24](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=384)** So isRepeat is this.cards, this.index isRepeat and if we've done this correctly, after I refresh and I'm going through the deck, I can click Got It, Got It, Got It and if I want to see this one again, I click the Again button and as I'm cycling through, when I get back to it, it's now yellow, indicating that I needed at least one additional review for this one.
>
> **[6:58](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=418)** Just like with the dynamic styles, I can include multiple classes here with multiple conditions.
>
> **[7:05](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=425)** So I could say I also want anotherClass as long as something else IsTruthy, like so.
>
> **[7:12](https://www.linkedin.com/learning/learning-vue-js-8602681/binding-css-classes?u=76281980&t=432)** In the next chapter, we'll take a look at how to clean up our templates even more using Vue components.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (10), let (4), continue (2), else, (1), this, (1)
> **Code Identifiers:** isrepeat (9), gotit (2), anotherclass (1)
> **Env Vars:** got (3), again (3), css (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), just like (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)


### 4. Using Vue Components

#### Creating and registering components
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=0)** - We've talked a little bit along the way about strategies for cleaning up our templates.
>
> **[0:05](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=5)** One of the most effective tools that Vue offers us in that regard is its component system, which allows us to encapsulate sections of our template and make them easier to reason about and debug.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=16)** Let's target a section of our template for component extraction. We'll start with something simple like the "read more" link here and to make it even simpler, we're going to temporarily change this to a static href attribute and just put the URL for the guide there instead of "read more" URL.
>
> **[0:37](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=37)** But, we'll leave the "read more" data property down there so that we can reintroduce it soon.
>
> **[0:42](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=42)** What using components will enable us to do is remove this element from the template.
>
> **[0:50](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=50)** I'm going to cut it to the clipboard and then we can replace it with a custom element that I'll call "read more" that will look something like this with open and closed tags.
>
> **[1:02](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=62)** You'll want to keep the tag names of your custom components lowercase for now, and include a hyphen if possible to help ensure that it's valid HTML and also not a tag name that already exists.
>
> **[1:17](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=77)** And then to define, "read more", we can go all the way down here and use app, which points to our view instance and with the component method, we can say that this app uses a component with the tag "read more" and next we have an options object. It's very similar to the options object that we use when we declare the main instance, but because we're not mounting it on a certain element, but just making it available through the use of a custom tag, we need to define its template.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=111)** So I'm just going to paste what I cut before inside these single quotes and note that if I were to break this up into multiple lines, maybe something like this, I would have to escape each new line with a backslash so that, that would still be valid JavaScript.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=133)** Finally, we need to make sure that when we mount our view app already knows about the read more component.
>
> **[2:19](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=139)** So we'll change this a little bit.
>
> **[2:21](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=141)** First, we're going to just create the app then register the component and then call app.mt Now, if this is starting to feel like jumping through hoops just to encapsulate some markup and a custom tag, and if the idea of putting the component template in a string and having to escape new lines all feels a bit messy to you, then let me just say that I completely agree, but in a larger, more complex app, using components is an absolute must.
>
> **[2:55](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=175)** And, there's a much simpler and more powerful way to use components that doesn't involve expressing the template as a string, but as plain HTML in a separate file.
>
> **[3:07](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=187)** It does require setting up a build tool, such as web pack, so for now we're going to stick with this approach as our introduction to components.
>
> **[3:15](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=195)** So now let's refresh and we see the same thing as before our read more link that we can click to get to the Vue.js guide and let's take a moment to look at this in view dev tools so I'm going to click the view tab over here again and I can see my route instance with its data and computer properties over here on the right.
>
> **[3:37](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=217)** And I also see that I now have a child component that's called "anonymous component".
>
> **[3:43](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=223)** You might be expecting to see the "read more" name here after all, it's surrounded by angle brackets, but when using components defined like this if we want to see a different name in the view dev tools, we'll need to add a name property.
>
> **[3:59](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=239)** So I can just add name and here, the casing doesn't matter.
>
> **[4:02](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=242)** I could use Pascal case like that, "read more".
>
> **[4:06](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=246)** And then when I refresh now you see the "read more" component.
>
> **[4:10](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=250)** So the pane on the right is blank because this component doesn't use any dynamic data.
>
> **[4:16](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=256)** And in fact, components don't have direct access to a parent component's data.
>
> **[4:23](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-and-registering-components?u=76281980&t=263)** So in the next video, we'll talk about how to share data with child components.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (1), this, (1), finally, (1), require (1)
> **Exercise Files:** template (6)
> **Env Vars:** url (2), html (2)
> **CLI Commands:** make (3)
> **Analogies:** similar to (1), such as (1)
> **File Paths:** vue.js (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)

#### Using component props
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=0)** - [Instructor] Next, we'll talk about passing data to child components using props.
>
> **[0:05](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=5)** So we might try changing this href in our read-more component, back to a dynamic attribute and then we could change the value here to readMoreurl.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=16)** referencing our data property.
>
> **[0:18](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=18)** But if we refresh the page now and look in our dev tools in the console if we have warnings enabled, we'll probably see one that says the readMoreurl. was accessed, but not defined.
>
> **[0:34](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=34)** Like I mentioned before, the read more component can't just reach up into the parent instances data.
>
> **[0:42](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=42)** What we want to do instead is have the parent pass this data down to the child component through the use of what's called a prop.
>
> **[0:50](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=50)** So down in the component options I can add props to declare the data that this component is expecting to be provided with.
>
> **[1:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=60)** So this can take several forms and one is just an array of string names and we'll include URL as one of the props that this component is expecting.
>
> **[1:10](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=70)** And then instead of referring to readMoreurl. here I can just use its own prop URL.
>
> **[1:17](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=77)** And then up in our main template on the read-more tag we'll pass URL just like any other dynamic property colon URL and the value is readMoreurl..
>
> **[1:31](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=91)** It's important to stop and note that we don't always have to use a colon here and make our props dynamic.
>
> **[1:39](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=99)** And that's true for any attribute of any element in the template.
>
> **[1:42](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=102)** For example, I could just pass a hard coded URL here and then remove the colon.
>
> **[1:50](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=110)** But with the colon, we're signaling that readMoreurl. is the name of a data property and not a string value.
>
> **[1:58](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=118)** So, notice that this is no longer underline and I can't click it there's no href there, but if I refresh I have my link working again.
>
> **[2:08](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=128)** And if we can do that then it should be relatively simple to create a component out of the card itself.
>
> **[2:15](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=135)** So this entire div here.
>
> **[2:18](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=138)** So again, I'm going to cut this markup to the clipboard and use it to create a new component that I'm going to call flash-card.
>
> **[2:29](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=149)** So next, after we register read-more we can register our new component flash-card.
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=155)** So we give it the tag and then the options.
>
> **[2:43](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=163)** And we declare the template inside single quotes.
>
> **[2:49](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=169)** I'm going to paste what I had on the clipboard.
>
> **[2:52](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=172)** And remember, now that this is a string that's spread out among multiple lines.
>
> **[2:57](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=177)** I do have to escape the new lines with a backslash.
>
> **[3:05](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=185)** And let's also give it a name like the other one.
>
> **[3:11](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=191)** We'll call it flash-card.
>
> **[3:13](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=193)** Now let's think about what props this component needs to accept.
>
> **[3:16](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=196)** Look at the data properties that are referenced here.
>
> **[3:19](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=199)** We have flipped isRepeat, front and back.
>
> **[3:27](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=207)** So again we'll add props and then an array with those names.
>
> **[3:33](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=213)** Flipped isRepeat, front and back.
>
> **[3:38](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=218)** Let's go back up to the flash-card tag and set it up.
>
> **[3:41](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=221)** So it's passing those properties down to the card component because we set up those computer properties we can just pass flipped for flipped isRepeat for isRepeat and so on.
>
> **[4:05](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=245)** One thing we need to be careful of though is that HTML attributes are not case sensitive.
>
> **[4:10](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=250)** So instead of camel casing isRepeat we'll want to use a kebab case meaning a hyphen between is, and repeat.
>
> **[4:19](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=259)** We could go ahead and change that in the props array in the component options as well if we wanted to, but that's optional.
>
> **[4:26](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=266)** So now if we go back to the browser and refresh look at the view dev tools, I have a flash-card component and a read more component as child components of the route.
>
> **[4:38](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=278)** And what's more, I can see all the props for this component on the right here.
>
> **[4:44](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=284)** Notice that isRepeat is undefined because that's not in our data file, but just something we add on the fly to flash-card.
>
> **[4:53](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=293)** A child component also can't access the methods of it's parent component.
>
> **[4:57](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=297)** So got-it and again are not going to work yet but before we even get that far, we have to deal with another problem, which is that we're not allowed to just reassign the value of flipped when we click since flipped is data that's owned by the parent and only shared with this flash-card component you'll see a message in the console about that if you do click.
>
> **[5:20](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=320)** Saying that props are read only.
>
> **[5:22](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-props?u=76281980&t=322)** So in the next video we'll talk about how to handle that issue correctly.

> [!info]- Semantic Content
>
> **Code Identifiers:** isrepeat (6), readmoreurl (5)
> **Code Keywords:** pass (4), let (3)
> **Env Vars:** url (5), html (1)
> **Exercise Files:** template (3)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Configuring custom events
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=0)** - [Instructor] In this video, we'll solve the problem of not being able to flip the card now that it's in its own separate component.
>
> **[0:07](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=7)** One solution could be to set it up as a data property, just like we do with our route instance.
>
> **[0:14](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=14)** Child components can also have their own data and it can be copied from props.
>
> **[0:20](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=20)** So, we could set up a data property.
>
> **[0:22](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=22)** We wouldn't use the name Flipped because that's already being used for the prop, but we can call it isFlipped, and then we could use Flipped as the initial value.
>
> **[0:31](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=31)** And then, we could update our template to use isFlipped and just manipulate that value as necessary.
>
> **[0:37](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=37)** But we'll be better off if we continue to let the parent have complete control over this property and that's so that we can make sure we're always resetting Flipped to false as we cycle through the cards in the parent component.
>
> **[0:51](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=51)** We don't want both components to be able to change this value as that will get confusing to debug.
>
> **[0:56](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=56)** So instead of changing the value when we click, as we're doing here, we're instead going to just raise or emit an event, alerting the parent component that the user has clicked on the card.
>
> **[1:09](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=69)** So to do that, we just call dollar sign emit, and pass an event name, which I'll call it Flip.
>
> **[1:19](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=79)** - And the dollar sign is used there just to make it less likely that you'll write a method with a name that collides with this one.
>
> **[1:27](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=87)** And this is where these string templates get a little bit messier because we now have to escape the quotes around Flip, if you noticed.
>
> **[1:35](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=95)** But what this allows us to do is to handle an event called Flip in our root instance now.
>
> **[1:42](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=102)** So, in the flashcard tag, just like we're using at click elsewhere, we can now use at flip and put our flip logic there.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=111)** And all we have to do is say flipped is the negation of flipped.
>
> **[1:57](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=117)** So now if we go back to the browser and refresh, that warning is gone and we can flip our cards again.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=125)** But remember, I mentioned that a child component can't access methods on the parent, so we'll see an error if we try to click Got It or Again and actually, we already see errors about Got It and Again being accessed but not defined.
>
> **[2:21](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=141)** So let's see if we can fix that now.
>
> **[2:23](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=143)** First, when a tag and all its attributes starts to grow like this, it's usually better to put each attribute on a separate line.
>
> **[2:32](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=152)** So, maybe something like this.
>
> **[2:39](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=159)** And some people actually like to put the closing angle bracket on its own line, or maybe do that.
>
> **[2:46](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=166)** It's all really a matter of personal preference.
>
> **[2:49](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=169)** Okay, so back to Got It and Again.
>
> **[2:52](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=172)** Same as with the card click, we'll emit events instead of trying to call methods or manipulate any parent data.
>
> **[3:00](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=180)** So I'm going to just call these events yes and no, because those names are short and sweet and it will also allow us to avoid any possible issues with case sensitivity.
>
> **[3:18](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=198)** So then, back in our flashcard tag we can handle a yes event by calling our Got It method, and handle the no event by just calling Again.
>
> **[3:33](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=213)** So finally, when I refresh, I don't see any errors.
>
> **[3:38](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=218)** I can click Got It, Got It, Again, and I can cycle through the cards and everything seems to be working.
>
> **[3:46](https://www.linkedin.com/learning/learning-vue-js-8602681/configuring-custom-events?u=76281980&t=226)** In the next video, we'll look at a feature of components called slots which we use for managing dynamic content of a component.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), raise (1), pass (1), this, (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** isflipped (2)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (1), - and (1)
> **Exercise Files:** template (1)
> **Warnings:** warning (1)

#### Using component slots
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=0)** - [Instructor] One way to make our components more flexible, is through the use of slots and slot content.
>
> **[0:06](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=6)** Again, we'll use the read more component, for a simple example.
>
> **[0:09](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=9)** We're already allowing the consumer of this component, to provide a URL through that prop.
>
> **[0:15](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=15)** But, what if we wanted to allow someone to provide custom content for the link text?
>
> **[0:20](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=20)** We could certainly use an additional prop, but, what if we want it to be even more flexible, and allow arbitrary HTML content there?
>
> **[0:29](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=29)** That's where slots come in handy.
>
> **[0:31](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=31)** So down in the read more template, if I just change this link text, to a slot element, with open and close tags, that becomes a placeholder for any content that's between the read more tags in the main template, meaning anything that's between, the open and closed tags there where the cursor is now.
>
> **[0:55](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=55)** So I could put the read more text there, and the main template now, but, let's try something a little different, and I'll wrap it in EM tags, just to make sure that this is working when I refresh, I'll say click here to read more.
>
> **[1:10](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=70)** So now I have my custom link text, provided through a slot and I can see that, the link is still working.
>
> **[1:18](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=78)** You might be wondering what if, you want to make this content optional, and perhaps fall back to the read more texts that we had before, if nothing is provided here.
>
> **[1:28](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=88)** That's pretty easy.
>
> **[1:29](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=89)** Just put the read more text, between the slot tags here.
>
> **[1:37](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=97)** So if I refresh again, I still see the same link text, but, if I go back up to my main template and, remove this, then I see the default content.
>
> **[1:51](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=111)** Sometimes you want to include multiple slots in a component.
>
> **[1:56](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=116)** Maybe we want a copyright line, below the link here.
>
> **[2:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=120)** To use multiple slots, give the other ones a name.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=125)** So we could say, slot, name equals, copyright.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=133)** Then, up in my main template, to provide content for that slot, I can use a template element, with the V slot directive, and the slot name like this.
>
> **[2:28](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=148)** So I could say, copyright, 2021, flashcard out.
>
> **[2:36](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=156)** If I still want to provide content for the default slot, for the link text, I can do that the same way as before, or I can use another template element with V slot default.
>
> **[2:50](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=170)** So let's make sure this much is working.
>
> **[2:52](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=172)** That looks good.
>
> **[2:54](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=174)** And, next, it's important to understand that, if for some reason I wanted to use the URL, in the slot content here, I would have to do that, by referencing read more URL, and not, just URL.
>
> **[3:11](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=191)** That's because the scope that we're working with here is still the route scope, because we're in the root template.
>
> **[3:17](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=197)** And URL is only defined inside the read more component, after it's passed in as a prop.
>
> **[3:26](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=206)** But what if there were some data in the read more component, that we wanted to reference here?
>
> **[3:31](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=211)** And what I mean by that is, what if read more had its own data?
>
> **[3:37](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=217)** For example, if this component, somehow kept track of the year, if we had, year 2021 here.
>
> **[3:48](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=228)** In that case, we could make it available, to the copyright slot, by passing it as a prop to the slot.
>
> **[3:56](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=236)** So I would have here, year equals year.
>
> **[4:00](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=240)** And we might have multiple props like this, and we would access them by adding a name for an object that contains all of them as a value for the V slot directive, backup in our main template.
>
> **[4:12](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=252)** So V slot copyright equals, we could call it props.
>
> **[4:17](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=257)** And then instead of 2021 here, we could do, props.year.
>
> **[4:23](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=263)** Let's check to see if we did that correctly.
>
> **[4:26](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=266)** Still looks good.
>
> **[4:27](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=267)** Now I would say that, this convention and its syntax here, is pretty far from intuitive.
>
> **[4:35](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=275)** So don't worry too much about this right now if you find it confusing.
>
> **[4:38](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=278)** The main takeaway here should be that, if we need to, we can access data from the child component, when providing slot content, from the parent component.
>
> **[4:50](https://www.linkedin.com/learning/learning-vue-js-8602681/using-component-slots?u=76281980&t=290)** We'll wrap up this chapter with a look at a more powerful way to work with components, that have proper templates as normal markup in separate files instead of specified as strings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), if, (1), this. (1), default. (1)
> **Exercise Files:** template (9)
> **CLI Commands:** make (5), find (1)
> **Env Vars:** url (5), html (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Installing Vue CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=0)** - [Tutor] The best way to work with Vue components is by defining them in files with the dot Vue extension and these are known as single file components.
>
> **[0:09](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=9)** Here's a component called hello, defined in its own file as shown in the Vue guide.
>
> **[0:15](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=15)** Browsers can't natively support such files so they need to be compiled to JavaScript with a build tool like Webpack or Vue CLI or command-line interface which can configure Webpack for us and make the whole build process a lot simpler.
>
> **[0:31](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=31)** Vue CLI is a mature system for rapid Vue.js development and it makes it incredibly fast to scaffold and configure a project that can make use of single file components.
>
> **[0:43](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=43)** From the Vue guide, you'll find links to the Vue CLI docs in a few different places.
>
> **[0:48](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=48)** One being the ecosystem menu up here.
>
> **[0:51](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=51)** If I go down and click on Vue CLI and then click get started, I can click installation in the left-hand nav here.
>
> **[1:02](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=62)** I'm going to be using the NPM package manager provided by Node.js.
>
> **[1:07](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=67)** So I'm just going to copy this first command here.
>
> **[1:10](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=70)** And if you don't have Node.js already installed on your machine, head over to node.[js.org](https://js.org) and download and install the latest LTS or long-term support version for your platform.
>
> **[1:24](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=84)** Once that's taken care of, you should be able to install UCLI on your command line of choice using the NPM package manager, that's included with Node.
>
> **[1:34](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=94)** I'm on a Windows machine using vs code.
>
> **[1:37](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=97)** So, I'm going to open up a terminal with Control + backtick and then I'm just going to paste that command that I copied from the Vue CLI docs.
>
> **[1:48](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=108)** I'm not going to talk about any of the initial output here because it's likely different on your machine.
>
> **[1:53](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=113)** But once this is finished installing, we can tell that we've successfully installed the correct version if I go back to the Vue CLI docs and click on GitHub in the upper right.
>
> **[2:04](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=124)** I can see on the right side that the latest release is four dot five dot 11.
>
> **[2:10](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=130)** So again, on the command line if I do Vue dash dash version, I should see that same version four dot five dot 11 and I do.
>
> **[2:20](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=140)** So next we'll go ahead and create a project with Vue create and the name I'll give it is flashcard dash app.
>
> **[2:30](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=150)** There's a lot of options here especially if you look at manually select features, but for now we'll use the Vue three preview preset.
>
> **[2:40](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=160)** And then when this is finished scaffolding the project we're given some helpful instructions for starting a lightweight development server.
>
> **[2:48](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=168)** So let's change to that directory.
>
> **[2:52](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=172)** CD flashcard app and then we'll execute NPM run serve.
>
> **[3:00](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=180)** And as long as you don't have another web server or some other process that's using port 8080, you should see these links.
>
> **[3:08](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=188)** Also note that if we wanted to deploy this to a production server, we would first want to execute NPM run build as it says here, and that would create a dist directory containing an optimized version that would work on any web server.
>
> **[3:23](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=203)** But for now, if we just click on this local host one, we should see that we're up and running on the Vue dev server.
>
> **[3:33](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=213)** So to get a sense of how all of this works with the local development server, we can start in our flashcard app directory with index dot HTML in the public directory.
>
> **[3:48](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=228)** You see here, the div with ID app, just like we had in the other version, you won't see any script tags on this HTML page because the development server will just automatically inject them as it says in this comment here.
>
> **[4:04](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=244)** Obviously that's not going to work if you plan on deploying this to a server that's running Nginx or Apache and serve up this HTML file.
>
> **[4:13](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=253)** So you would want to run that NPM run build command as was already suggested in the console output.
>
> **[4:19](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=259)** So to understand the JavaScript, our entry point is going to be in the source directory, main dot js.
>
> **[4:27](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=267)** This is similar to the way we mounted our app before but instead of defining an options object here, we're importing it from app dot Vue.
>
> **[4:37](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=277)** So let's go there next.
>
> **[4:40](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=280)** In the same source directory, app dot Vue is our first look at a single file component.
>
> **[4:45](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=285)** So we can call this the root component of our Vue app.
>
> **[4:49](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=289)** It's sort of like the route Vue instance that we defined in our options object previously, only this time, it defines its own template within these template tags here, instead of with those messy strings.
>
> **[5:02](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=302)** And that allows us to take full advantage of IDE syntax highlighting.
>
> **[5:07](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=307)** And then we also have an optional style element down here.
>
> **[5:11](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=311)** Notice it's also importing a child component, hello world, which it uses in its template up here.
>
> **[5:19](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=319)** We'll talk a little bit more about what's going on in this file in the next video, but for now I want to show you one nice feature of the development server, which is automatic reloading.
>
> **[5:28](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=328)** So if I were to line up my IDE and my browser side-by-side and then just change this message prop here, instead of welcome to your Vue.js app I'm going to just say flashcard app.
>
> **[5:45](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=345)** You can see that the browser refreshes automatically so I can see the change right away.
>
> **[5:51](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=351)** This is a really nice way to work and iterate on your projects.
>
> **[5:54](https://www.linkedin.com/learning/learning-vue-js-8602681/installing-vue-cli?u=76281980&t=354)** In the next video, we'll go through the exercise of creating a simple component and integrating it into our app.

> [!info]- Semantic Content
>
> **Env Vars:** cli (6), npm (5), html (3), ide (2), lts (1)
> **CLI Commands:** npm (5), node (4), make (2), find (1), cd (1)
> **File Paths:** node.js (3), vue.js (2)
> **Tools:** command line (2), vs code (1), terminal (1), github (1)
> **Code Keywords:** let (2), interface (1), public (1)
> **Prerequisites:** configure (2), install (2)
> **Cross-References:** in the next (2), go back to (1)
> **UI Navigation:** click on (3)

#### Creating single file components
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=0)** - [Instructor] Now we'll create our own simple component and add it to this page.
>
> **[0:04](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=4)** Back in our single file component named app, let's take a closer look at what's going on here.
>
> **[0:10](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=10)** This components option here is just another way to register components.
>
> **[0:16](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=16)** Previously, we were using the component method to globally register them, making view aware of them so that they could be used anywhere in the app.
>
> **[0:24](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=24)** Using the components option is a way to locally register components as child components of the app component.
>
> **[0:33](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=33)** Let's go ahead and remove all references to this hello world component and then we'll create a new component for our deck name.
>
> **[0:43](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=43)** So in the components folder, I'm going to add a new file decname.view and now we'll create a single file component from scratch.
>
> **[0:53](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=53)** Most single file components have a template element, a script element and a style element.
>
> **[1:05](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=65)** The script element will be used for defining our options object and then exporting it as a JavaScript module.
>
> **[1:14](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=74)** So it's common to see here, export default instead of a named export, and then the options object.
>
> **[1:23](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=83)** By the way, you'll notice that the view team tends not to use semi-colons at the end of JavaScript statements but I still find them sort of reassuring.
>
> **[1:32](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=92)** So we can give our component a name.
>
> **[1:36](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=96)** This will be deck name and this will take the name of the deck as a prop.
>
> **[1:43](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=103)** So we'll add props here and remember we'll just have the name, name in an array.
>
> **[1:49](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=109)** There are other ways to declare props and we can even include the type that we're expecting.
>
> **[1:54](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=114)** And you can read about that in the view guide, but for now this will do just fine.
>
> **[1:58](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=118)** So now that we have that set up, let's talk about our template.
>
> **[2:03](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=123)** This is going to be incredibly simple just an H1 tag with our name prop interpolated there with the mustache syntax like so.
>
> **[2:12](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=132)** We don't have to use style if we don't want to but this is a convenient place to add components specific CSS and it can make it really easy to update this component later because we'll have all the markup, logic and relevant CSS, all in one place.
>
> **[2:29](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=149)** Let's just add a little bit of styling to the H1 tag to make sure this is all working as expected.
>
> **[2:35](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=155)** So we'll just italicize it.
>
> **[2:39](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=159)** Another nice feature of single file components is that we can make sure that this CSS doesn't affect anything outside of this component by adding the scoped attribute to the style element and I'll show you how that will change the rendered element in a moment.
>
> **[2:56](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=176)** So now back in app let's import this component deck.name from dot the current directory slash components slash deck name.
>
> **[3:11](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=191)** And that will pick up the deckname.view for us.
>
> **[3:14](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=194)** We'll register it as a local component by just adding deck name here and then we'll add it to the template.
>
> **[3:23](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=203)** So up here now that we're using Vue CLI and compiled templates, I can use the Pascal casing here.
>
> **[3:31](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=211)** I don't have to use the kebab casing as we were doing before which would be deck dash name all lowercase.
>
> **[3:37](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=217)** And remember, this is expecting a name prop.
>
> **[3:39](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=219)** So we'll just pass in hard-coded Vue JS fundamentals.
>
> **[3:45](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=225)** So we're not passing a data property or a JavaScript expression.
>
> **[3:49](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=229)** So we don't use colon name, just name and we can have the open and closed tags or we can just use a self-closing tag like so.
>
> **[3:58](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=238)** So now if I go over to the browser which has automatically been refreshed, we see that our simple component is being rendered correctly.
>
> **[4:07](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=247)** And if you take a look at the dev tools and just zero in again on this H1 element you'll see that this data attribute has been inserted here.
>
> **[4:17](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=257)** And the CSS rule that goes along with it has been updated as well.
>
> **[4:23](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=263)** This pretty much guarantees that this CSS would never affect anything outside of this component.
>
> **[4:30](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=270)** Even if we had another H1 tag.
>
> **[4:32](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=272)** We've really only scratched the surface of what's possible with single file components and Vue CLI.
>
> **[4:38](https://www.linkedin.com/learning/learning-vue-js-8602681/creating-single-file-components?u=76281980&t=278)** And with view itself. We'll wrap up the course in the next video with some tips and ideas about where to allocate your learning time moving forward to get the most out of UJS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (1), export, (1), pass (1), self (1)
> **Env Vars:** css (5), cli (2), ujs (1)
> **CLI Commands:** make (3), find (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=0)** - [Michael] I'll leave you now with a few ideas for where to focus next if you're interested in learning more and growing as a Vue developer.
>
> **[0:08](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=8)** First, even if you're the type of learner who doesn't always find value in reading through guides and documentation I would suggest at least giving the Vue Guide a try.
>
> **[0:18](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=18)** It's known for being very well-written and user-friendly and it will reinforce the concepts covered in this course while exposing you to the ones that we didn't have time to get to.
>
> **[0:28](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=28)** One thing you'll see in there that was, perhaps, conspicuously absent from this course is a discussion of the Vue lifecycle.
>
> **[0:36](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=36)** This describes how Vue instances are created, mounted and the process of updating data and re-rendering the DOM based on Vue's in memory representation of elements known as the Virtual DOM.
>
> **[0:50](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=50)** If we had been using an API to fetch data for our example app, I would likely have used the created hook shown here.
>
> **[0:58](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=58)** This is fired when the instance is first created and it's quite common to tap into that event to make an AJAX call since you can't just declare data that's fetched asynchronously from an API in the data object, like we did with our cards array that was already available.
>
> **[1:15](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=75)** You'll also find out about other advanced features, like Vue Router, for building single page apps with client side routing and Vuex whose name is based on the flux pattern made popular by React.
>
> **[1:31](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=91)** This can be a great solution for managing state and sharing data between components in more complex Vue apps.
>
> **[1:38](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=98)** If you're on Twitter, definitely check out the Team page and start following the core members.
>
> **[1:44](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=104)** Maybe even create a Twitter list to see them all in one place and find out what they're up to periodically.
>
> **[1:50](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=110)** You'll be surprised what a tweet can lead to for your personal growth.
>
> **[1:54](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=114)** I, myself, came to Vue years ago after seeing a tweet praising Vue for being innovative while also effectively borrowing things that already work well from existing frameworks.
>
> **[2:05](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=125)** For more video content, please check out Ray Villalobos' Vue.js 3 Essential Training here on LinkedIn Learning.
>
> **[2:13](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=133)** I hope, by now, that you have enough of a feel for Vue to at least be able to determine whether you want to go deeper and perhaps even adopt it as your JavaScript framework of choice moving forward.
>
> **[2:24](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=144)** That's what I did over five years ago now.
>
> **[2:27](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=147)** And I, honestly, haven't looked back since.
>
> **[2:29](https://www.linkedin.com/learning/learning-vue-js-8602681/next-steps?u=76281980&t=149)** Thanks for watching and best of luck with whatever this path or another may lead to.

> [!info]- Semantic Content
>
> **Env Vars:** dom (2), api (2), ajax (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (1), known as (1)
> **File Paths:** vue.js (1)
> **Code Keywords:** try. (1)
> **Speakers:** - [michael] (1)


## Path Context

### In [[Explore Web Development with Vue.js]]
**1 of 3** | [[Vue.js- Testing and Debugging]] →

## Appears In

- [[Explore Web Development with Vue.js]]

## Related Courses

_Courses sharing skills:_

- [[Vue.js- Creating and Hosting a Full-Stack Site]] — Vue.js

---

[↑ Back to top](#)