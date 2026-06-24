---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: react-components-context-and-accessibility
url: "https://www.linkedin.com/learning/react-components-context-and-accessibility"
duration_minutes: 87
duration: 1h 27m
level: Advanced
updated: 4/24/2025
learners: 22230
skills:
  - Digital Accessibility
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGZpDB3TmKYsA/learning-public-crop_675_1200/B56ZbF5SkzGgAY-/0/1747076852693?e=2147483647&amp;v=beta&amp;t=a2mR-X04ae0V5iUmry6EIX13ITVQmPN_QgoBvxlk3XI"
linkedin_topic: Web Development
learning_paths:
  - '[Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)'
prev_courses:
  - '[Microsoft Office Accessibility for Beginners](Microsoft%20Office%20Accessibility%20for%20Beginners.md)'
next_courses:
  - '[Using Stark for Accessible Design Projects](Using%20Stark%20for%20Accessible%20Design%20Projects.md)'
path_nav: '[{"path":"Build for Digital Accessibility","position":11,"total":12,"prev":"Microsoft Office Accessibility for Beginners","next":"Using Stark for Accessible Design Projects"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/digital-accessibility
  - skill/react-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Components%2C%20Context%2C%20and%20Accessibility.md)

![React: Components, Context, and Accessibility](https://media.licdn.com/dms/image/v2/D560DAQGZpDB3TmKYsA/learning-public-crop_675_1200/B56ZbF5SkzGgAY-/0/1747076852693?e=2147483647&amp;v=beta&amp;t=a2mR-X04ae0V5iUmry6EIX13ITVQmPN_QgoBvxlk3XI)

# React: Components, Context, and Accessibility

> Once you've mastered the foundations of the React framework and its supporting architecture, you can start taking advantage of more sophisticated features that enable faster and more accessible applications. In this course, learn about the enhancements found in React 16 and how to leverage key features to build better React apps. Explore advanced components and patterns that can help you structure

> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility) | 1h 27m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [React components, context, and accessibility](#react-components-context-and-accessibility)
- [**1. What’s New in React**](#1-whats-new-in-react) (4 videos)
  - [Rendering arrays](#rendering-arrays)
  - [setState() changes](#setstate-changes)
  - [How to use CoderPad](#how-to-use-coderpad)
  - [Solution: Implementing array-based state updates](#solution-implementing-array-based-state-updates)
- [**2. Advanced Components**](#2-advanced-components) (4 videos)
  - [Compound components](#compound-components)
  - [Uncontrolled components](#uncontrolled-components)
  - [Controlled components](#controlled-components)
  - [Solution: Creating a compound component system](#solution-creating-a-compound-component-system)
- [**3. Enhanced Components**](#3-enhanced-components) (4 videos)
  - [Working with fragments](#working-with-fragments)
  - [Using keyed fragments](#using-keyed-fragments)
  - [New component lifecycle](#new-component-lifecycle)
  - [Solution: Implementing a fragment-based layout](#solution-implementing-a-fragment-based-layout)
- [**4. React Patterns**](#4-react-patterns) (7 videos)
  - [Understanding the context API](#understanding-the-context-api)
  - [Using context](#using-context)
  - [Referencing context in stateless functional components](#referencing-context-in-stateless-functional-components)
  - [Working with higher-order components](#working-with-higher-order-components)
  - [Working with render props](#working-with-render-props)
  - [Render props in the wild: React Apollo](#render-props-in-the-wild-react-apollo)
  - [Solution: Building a context-based theme system](#solution-building-a-context-based-theme-system)
- [**5. React Accessibility**](#5-react-accessibility) (6 videos)
  - [Web accessibility overview](#web-accessibility-overview)
  - [Viewing React accessibility warnings](#viewing-react-accessibility-warnings)
  - [Using semantic HTML](#using-semantic-html)
  - [WAI-ARIA roles](#wai-aria-roles)
  - [Accessibility testing](#accessibility-testing)
  - [Solution: Building an accessible navigation system](#solution-building-an-accessible-navigation-system)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)
- [**Appendix**](#appendix) (1 videos)
  - [Using the exercise files](#using-the-exercise-files)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [React components, context, and accessibility](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980&t=0)** - Once you get beyond the [React](../../Skills/Web%20Development/React.js.md) basics, it's time to explore ways to handle state management and accessibility with more precision. Hi, I'm Eve Porcello. I'm a software engineer and an instructor, and in this course, we're going to take a closer look at advanced component creation, the Context API, and best practices for accessibility to build faster, more modern applications. Build applications that serve your next million users well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** api (1)
> **Speakers:** - once (1)


### 1. What’s New in React

[↑ Back to Table of Contents](#table-of-contents)

#### [Rendering arrays](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=0)** - [Instructor] To get started, let's take a look at our exercise files. In chapter one lesson two, you'll find the [HTML](../../Skills/Web%20Development/HTML.md) file set up and ready to go. We're going to be writing most of our code here not to get bogged down in [JavaScript](../../Skills/Software%20Development/JavaScript.md) tooling, but to instead focus on these important concepts. The file is set up with Babel to compile ES.Next syntax and JSX into JavaScript that the browser can read. We're also going to include [React](../../Skills/Web%20Development/React.js.md) and React dom. All of our code will be written here in this script tag where we've indicated that we're going to transpile, or compile everything that's inside of this script tag. Now in previous versions of React, we were only able to render one root element. In other words, everything had to be nested inside of one tag. In React 16, we can render arrays. So let's take a look at what this might look like. The first step is we're going to use react dom without render. We're going to render this component called greetings. And this component should be mounted to the root element here on line eight. So get element by ID, root. The next step is we're going to actually create the greetings component. So here on line 11, I'm going to create a component called greetings. This is going to be a function component that simply returns an array. Now this array is going to have a few different items here, so we'll say
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=94)** li and we'll say key of one. This will say hello. And then we'll copy and paste these to add a few more greetings. So key two, this will say hey, and this will say yo, and it'll also have a key of three. Great. So at this point we can give that a save, and we can go over to the browser and run this. And we should see that these components aren't rendering as expected, really, because we need to add commas between them. So let's do that on line 13 and 14. So once we give that a save, we are actually going to be rendering this array, so it looks like all of these are rendering as expected and we are able to render this array. Now this becomes even nicer when rendering dynamic data. Here on line 11, I'm going to create a simple array called data, and this is gonna have a few different greetings in it. So the first one, we've seen this before, will say hello. We'll give it an ID of one. And then again, we'll copy and paste these to use our other greetings. Feel free to use whatever greeting seems right to you today. And we'll also say yo and three. Now instead of just rendering this flat array, we're going to actually map over the data.
>
> **[3:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=190)** So the first step here is we need to pass the data to the component, so we'll say data equals data. And now this is accessible in the greetings component via props. So we could say props or we can destructure this and use data. Now we're going to replace this return with another return which will map over the data in props, and it's going to return an item for each of our greetings. So let's go ahead and return a list item.
>
> **[3:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=230)** And we're gonna pull the key from item.ID. And then the text that will display is item.greeting. Okay, so this adds a little bit more flexibility as our data set grows or shrinks, we should always render the right number of list items. So once we hit save, we should see nothing really changed. If we say hi there, we should be able to refresh and see that dynamic data appearing. So this is a big deal. At React Conf in 2017, they announced that we would be able to start rendering arrays, and everybody exploded in excitement and clapping and it was a big deal, so this allows us to render something beyond just one element and it allows us to display dynamic content in that array if we so choose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** html (1), jsx (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Versions:** react 16 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [setState() changes](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=0)** - [Narrator] One of the ways that we can change data in our application is to use set state. We're gonna take a look at how set state has functioned for awhile and then we're also going to look at how we can pass instead of an object, a function, to set state. So the first place I wanna start here is let's get rid of our previous data in our previous component we also are going to be rendering a menu component instead. Now the menu component is going to be responsible for rendering a menu, so we'll make this a class component.
>
> **[0:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=38)** And this should have, of course, a render method, we're also going to set up some initial state so I'll add the constructor. Now the constructor always takes in props. And we can call super with those props as well. The next step is I want to initialize our state so we'll say this dot state will give meal a value of spaghetti and then within our render we're going to return the following. Now what we should return is, at this point, just the div. Let's add another component here on line 11. This component is going to be responsible just for rendering an h1, so, it's gonna be called now eating and this will take in some props and return an h1. So a pretty simple stateless functional component here that displays props dot meal. Now this component is going to be rendered in the menu so we'll add it here to line 23 so now eating should also take a property called meal and it's going to be set to the value of this dot state dot meal passing that value down the tree to the now eating component. Cool, let's take a look at that in our browser. We should see the spaghetti value is being pulled from state and passed down as props to now eating. The next step is I'm going to add a method,
>
> **[2:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=131)** a custom method here called add side dish. Now add side dish is going to set the state so we'll call this dot set state and traditionally how set state calls have worked is we pass it an object that contains new information to overwrite whatever's in state so we'll say spaghetti and salad. So now the way that we'll trigger that function is we're gonna add a button so right next to our now eating component, let's do this, we're gonna just add a JSX expression here, we're gonna check to see that this dot state dot meal equals spaghetti.
>
> **[3:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=180)** And if it does, we're going to render a button. Now the button should have the text displaying as add side dish. The button will have an on click that maps to this dot add side dish. Excellent, and then the else condition here will just return null, so, we don't want the button to be clicked again after it's clicked once basically. Now finally we need to bind this so we will use this dot add side dish equals this add side dish dot bind this. Okay, now let's take a look back at our browser we should refresh to see... Let's see what our error is. Oh cool, looks like we didn't terminate our JSX expression. Actually, we did, but it's here on line 31. So let's put that on line 32 after the whole thing is done. Nice, and now I'm gonna click add side dish and we should see spaghetti and salad. So let's look at how we might re-factor this using set state and a function. So right now we're taking in this object. Now if we ever wanted to refer back to what the past state was it might be a little tricky to do so it's much more simple if we do use the function here. So to this dot set state we're going to instead pass in a function.
>
> **[4:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=272)** So the function is gonna have the argument previous state. This is gonna return the following, we'll say return meal and now we're gonna use a template string to use the previous state dot meal and we'll just concatenate that with and salad, perfect. So let's take a look at that. We refresh, I add my side dish, and that will work correctly. So we're able to capture that previous state value and since set state is asynchronous we can work with it this way. Now the final little re-factor I wanna do here is sometimes you'll see our class properties instead of using the constructor you may see them as static properties so I'm gonna actually replace the constructor with state as a static property, so we'll say state equals this object. And then we're gonna get rid of everything else. Now you'll notice that I'm about to delete the binding for add side dish. That's okay, we're gonna get around this by simply binding add side dish with an arrow function. So we're gonna say add side dish equals a function and this should all work correctly, the arrow function is gonna bind this for us. We refresh, we see the same UI, I say add side dish, and everything is working as expected. So that is just a tiny re-factor,
>
> **[6:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=366)** it's a little less boiler plate to skip using the constructor but you can use any method that you'd like to construct your components.

> [!info]- Semantic Content
>
> **Env Vars:** jsx (2)
> **CLI Commands:** make (1)
> **UI Navigation:** in the menu (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that will appear when you click on the challenge links in the courses table of contents. Each challenge includes instructions and a couple of code editors that you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience with these code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas: instructions up here on the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used down here in this test code panel, and then a console for output as well as the render because this challenge is using [React](../../Skills/Web%20Development/React.js.md). You can use these drag handles to allocate space as you'd like. And to get even more horizontal space for the code editors, you can always collapse the courses table of contents on the left. Each challenge has instructions that include a description of the challenge and the challenges parameters and desired result. So what we can do here is we can create our answer. We're trying to find the largest number in an array, so we can say return Math.max and then push in all of these numbers. That looks good. Now we'll drag this handle here for a moment.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=96)** We'll see that the largest number is 19, this is the React component that's being rendered. But if I want to test the code like that, the console is going to open in a moment and we'll see those test results. So all we need to do to run that again, we just click test my code, and here you'll see a message indicating whether your code returned a correct result. Now the code editor down here in the lower right is how our code is going to be used. So we can change this code to experiment with various different test cases. We also can compare that to what we're writing up here, and if we were to write something incorrect, like maybe I remove the spread operator there on line six, we'll see that those tests, when I click test my code, will start to fail. So regardless of whether your answer is successful, you'll see messages in the console output on the lower left, and then if any of those messages are too long to fit in that area, you can always scroll sideways to see the whole thing. When you've finished each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing array-based state updates](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=0)** - [Instructor] Now that we have our task list scaffolded here, we can create our handleAddTask function that's going to add these values every time I click on Add Task. So let's go ahead and replace those comments with this. We'll say const newTask, and we'll set that equal to New Task. And then we'll place the this.state.count value right here, make sure that semicolon is the outside of those back ticks. Then we'll call this.setState. We'll take in the previous state. And then we want to return an object. So we need to wrap that in a set of parentheses and we'll say tasks. And then we'll push in our previous State.tasks and add the newTask. And then we'll also set the count to whatever the prevState.count was, plus one. Next, we want to render the tasks. So in our unordered list, we will map over the values that are in state. this.state.tasks.map.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=96)** And then we will pass task and index in here. And then we will return a list item. Each list item should have the task here, and then each one should have a key that is set to the index. So now, if I test the code, I should be able to see in the console that both of these are working correctly. We're going to be able to add a task when the button is clicked, and then we're also going to be able to render an empty list initially. Nice, so a nice little combination of being able to work with the spread operator and to create a new state for a couple different values at the same time.

> [!info]- Semantic Content
>
> **Code Identifiers:** newtask (2), handleaddtask (1), setstate (1), prevstate (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Advanced Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Compound components](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=0)** - [Instructor] Compound components allow you to create and use components that share a state. Let's go ahead and take our now eating and menu components out of here and instead we're going to render this display component. The display component is going to display something based on a truthy or falsy variable, so let's do this, we're gonna say if truthy is true, we'll set that default argument there, and then finally we will pass in children. The next step is we're going to use another one of those in line if else, we're gonna check to see if truthy is true, now if it is, then we're going to call this function [react](../../Skills/Web%20Development/React.js.md).children.only so what this is gonna do is it's going to make sure that children only has one child and then it's going to return it, the other option is just to return null, so if there are no children then we'll return null. We'll also setup here a value for h, let's go ahead and set that to 18, and we're also going to use if truthy, we're gonna pass down this property so we'll say, age is greater than or equal to, 18, so our display component we're gonna want to render some sort of a child here, so let's go ahead and render
>
> **[1:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=98)** an h1, this h1 should say you can vote, that's US rules there, now if this is true, if this evaluates as true, we're gonna go ahead and display this, if not then we won't render anything. So let's give that a save, we're gonna look at it in the browser, and we're gonna see that we can indeed vote. What if we changed this value to say 12. We're gonna see nothing. So this is an example of using a compound component where sharing some state information between the display component and any children, so this h1 particular. If you're interested in learning more about react.children or other ways to manipulate elements with react APIs, just check out the docs and you'll be able to see all of the methods that are available on react.children. Here's the one that we used react.children.only.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Uncontrolled components](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=0)** - [Instructor] In this video we'll take a look at one way to build a form using an uncontrolled component. With an uncontrolled component you'll use dom elements directly to build your form. And then to capture input values we'll use refs. So let's first get rid of this display stuff from before instead we're going to render a component called encouragement form, this is gonna encourage us to keep programming, and, we'll say encouragement form extends [react](../../Skills/Web%20Development/React.js.md) component, of course this is gonna render something we will render a form.
>
> **[0:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=49)** Now the form should have a label and inside of that label we will add the label text so we'll say send an encouraging message
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=67)** and we'll add the input at this level as well. So this will have a type of text, and then we'll use the ref, we'll use input, then we'll say this.input equals input. So this is gonna allow us to capture whatever the value is that is entered into that field. Now finally we want to add a button here, our button is simply going to wrap around a submit bit of text, cool so let's see what this looks like in the browser we should see send an encouraging message, and if we type anything it just clears it out, so let's figure out how we can grab this input value and we're gonna do this using a custom method. Alright so first things first, let's use handle submit and handle submit is going to do the following so we're gonna create a function here that's gonna take in the events, and it's going to alert this.input.value, we'll also use prevent default here so prevent default is just gonna prevent the browser's default behavior, so that we can see this alert running. So the final step here is I need to make sure that his handle submit method is added to our form itself so we're gonna add on submit this will map
>
> **[2:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=164)** to this.handlesubmit, since we used this arrow function we don't have to bind this which is pretty nice. So once I give that a save and refresh, and I send another encouraging message like, you're doing great, this should alert me that I'm doing great and that this value has been captured. So this is one way that we can handle creating [Forms](../../Skills/Web%20Development/Forms.md) with react, in the next lesson we're gonna look at how we can do this with components instead of working with the dom directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Controlled components](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=0)** - [Narrator] We just looked at uncontrolled components and how we can use refs to capture values from inputs. In this video, we'll look at controlled components. A controlled input accepts a value as a prompt and also uses a call back to change a value. So, let's make some adjustments to our form here. Right now, we have our handleSubmit function, let's stub out a few more things that we're gonna need. So the first thing here is state. So, our state property is going to have a value called Message, and the initial state will be just an empty string. Next, we want to create something called handleChange. And handleChange is gonna be another function that does something in a second. So, we looked at how to add a ref to an input, let's actually get rid of this though. Instead, we're going to use the value this.state.message, and then when something changes, we're going to call this.handleChange. Okay, so let's create our handleChange function. This is going to also set the state. And what this will do, is it's going to reset the state of our message value by using Message e.target.value.
>
> **[1:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=91)** Okay. And then finally, let's alert this as well, let's grab the state.value, this.state.message.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=103)** Okay, at this point, let's see what this looks like in our browser. We'll refresh, and then we'll send another encouraging message, let's say, you are smarter than you even know. Submit, and this page will tell me that. So by using a controlled component, the data is pushed to the form component. This means that it always has the current value of the input without having to ask for it with a reference. This way the state and the inputs are always in sync. And this can make tasks like validation simpler, because all of the data is accessible via the component state. So, this is a controlled component. It differs slightly because we're not using a ref and instead we're just changing state with our handleChange and handleSubmit events.

> [!info]- Semantic Content
>
> **Code Identifiers:** handlechange (5), handlesubmit (2)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Solution: Creating a compound component system](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=0)** - [Instructor] It is time to create our toggle that has a few different static methods as part of the class. So here on line 17, we want to render children when the toggle state is true. So let's go ahead and point this arrow at an expression here. We'll check to see if the property on is true. If so, we'll return children, otherwise we'll return null. Same goes for this one for toggling off. Let's simplify this a little bit and we'll say not on, and we'll return children. Or if that's not true, we'll return null. Then we're going to render our button. So we'll return a button and this button element is going to display toggle and it'll have a property called on click, which will be set to toggle. Now let's replace everything that's in this little expression here. And we're going to say [react](../../Skills/Web%20Development/React.js.md).children.map. This.props.children,
>
> **[1:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=97)** and then we'll take in a callback function here. This callback function is going to take in whatever the child element is and we'll return react that clone element. And then we'll take in the child. And then the second argument here will be an object where the first value is on. And then toggle is set to this.toggle. Okay, so now all of that should live within our div. So now I can click on test my code.
>
> **[2:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=144)** And it's not seeing on defined. We just need to add that inside of our render. So we'll say const on, set that equal to this.state. Alright, that's a little better. Now if we run our tests...
>
> **[2:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=167)** Now we're still seeing this error that on is not defined. And so we need to check this out inside of the component. We actually need to add this property to both the on and off functions. Now, after we pass that and we run the code, we should see that our tests are running as expected. Nice. So we've built out a class that's going to handle this toggle, and then we can display those elements within our component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2)
> **UI Navigation:** toggle (7), click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Enhanced Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with fragments](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=0)** - [Instructor] When we're working on a [React](../../Skills/Web%20Development/React.js.md) project, it's really common to use a component to return multiple elements. Maybe you're returning a collection of list items, or maybe some rows for a table, but with some of the rendering rules surrounding React, this may mean adding a ton of additional nodes to the DOM. We have some CSS set up for you here in the style tag. And next let's go ahead and create an app component. So we'll make a function component to make this happen here on line 22. We'll say const App, this should return a header.
>
> **[0:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=41)** Within the header we want to return a nav. And then the nav element should have four links, so, a href, a slash, and this is our Home route, and we'll just copy and paste these so that we have four nice links. So this one would be called About, Services, and Contact.
>
> **[1:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=77)** Okay, so now that this is created, we will add this to the DOM by using ReactDOM.render. This should render the App component right there to the root. So document.getElementById, root. Okay, so now that this is created, let's give that a save and take a look at it in the browser. We should see the Home, About, Services, and Contact links up here in the header. Now there might be a point where we want to break this component apart and render just the links in their own component. So let's go ahead and do this. We're going to create another component, and this one will be called NavItems. Now NavItems will be another function component.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=137)** Now NavItems will be a function component that simply returns these links. So we're gonna paste this here, and then we should replace the links with the actual component name. So we'll say NavItems should render in the nav. Now let's take a look at this in the browser. Alright, well it looks like there's some sort of a problem here. I'm gonna open our console, and we should see that adjacent JSX elements must be wrapped in an enclosing tag. Now this is an error that you'll see quite a bit when working on React apps, and the popular way to fix it is we're just gonna wrap everything in an enclosing tag. So instead of just rendering these anchor tags here, we're going to render a div that wraps around them.
>
> **[3:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=194)** Now if I refresh this, we see that the content is rendering, we no longer have an error in the console, but a couple things are wrong here. So, first of all we have a nav element that has a div as a child, and then a bunch of a tags, so our nav item is no longer semantically correct. And obviously what's worse here is that our CSS is broken, and it looks really bad. So to get around this, we could add a fragment. A React fragment is going to allow us to wrap our a tags in an enclosing fragment without adding anything extra to the DOM. So let's just replace the div with React.Fragment. Now if I give that a save and refresh, we should see that our CSS is back. If we look at our React developer tools, we should see that our app wraps around the header, nav, and NavItems. There's no extra div, or section, or anything like this. We're just rendering those elements because we can get away with it because of this fragment. Another option that you'll see is we can replace React.Fragment with a short syntax. So, we can get rid of everything that's inside of this tag and just use these brackets. And if we go back, we should see that this is still working. The same thing is happening. So this is just a shorthand syntax for a React fragment.
>
> **[4:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=289)** You don't necessarily need to use that, but that's always at your disposal. Now I should note that since we're using Babel 7, this is gonna work okay. If you're using some other tools, this syntax may not work, but it'll alert you to that right away in your console if it doesn't, and then you can always revert back to React fragment. React fragments are fantastic when you have a few elements to inject into a component that may be siblings, but when you don't want to add extra elements to the DOM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (10)
> **Env Vars:** dom (4), css (3), jsx (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** getelementbyid (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using keyed fragments](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=0)** - [Instructor] In the last video we looked at fragments and how these can be used to return multiple elements. Let's take a look at another example where we'll render items from an array. So here's some data for a list of skiing and snowboarding related definitions. We're going to pass this data down to the app component via props. So here in line 42 we'll just pass this to the app component as props, skiDictionary equals skiDictionary. Then we'll put together our component. We're going to create a description list, a description list is an [HTML](../../Skills/Web%20Development/HTML.md) tag that describes a list of terms. So let's go ahead and adjust our app component, we'll no longer be rendering this header, but instead we're going to take in props and we're going to return the following, so let's get rid of these tags. We're going to return a definition list DL and the definition list should wrap around a mapping of props, so we'll say props.skiDictionary.map. We're going to take in a term and for each one of these terms we should return two tags, so DT again the term itself, so we will use term.name pulling from that data and secondly we'll return DD term definition.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=96)** Okay once we save this we should refresh and we'll see that familiar error again that we're trying to return adjacent JSX elements and we need to make some adjustments. So here's another place where fragments come in handy. Instead of returning these DT and DD items we'll just return a fragment, and you can use [react](../../Skills/Web%20Development/React.js.md).fragment or that shortened syntax like I'm using here. And as simple as that we should be able to see that this is working, awesome. Now we still do have one more warning that we want to clear, the dreaded key warning this one is a pretty simple one to fix so let's go ahead and do it. We're going to add this directly to the fragment. Now a little bit of a tricky thing here is I can't add it to the shortened syntax I need to add it to react.fragment. So that's something that we can handle we'll say key term.id alright so we can add react.fragment as the closing tag and we should see if we take a look at our console again that our warning has been cleared, excellent. So the rule about adding keys to dynamic children helps react render intelligently and a react fragment saves us from adding unnecessary tags to the (mumbles).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** skidictionary (3)
> **Warnings:** warning (3)
> **Env Vars:** html (1), jsx (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [New component lifecycle](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=0)** - [Instructor] Whenever you create a [React](../../Skills/Web%20Development/React.js.md) component, there are several life cycle methods that you can use to execute code at particular moments in the life span of a component. Now if you have the life cycle methods that we have used in the past will be deprecated in React 17. For that reason, I'm just going to talk about the ones that will work in the foreseeable future and some new ones that were introduced with React 16. The most recognizable and the most used method of the component life cycle is Render. Render is called when the component is first mounted, but it's also called when new props come in or when Set State is called. The mounting life cycle also includes the following: we have the constructor, this is called before the component is mounted and is a place to initialize state. We also have getDerivedStateFromProps in the mounting life cycle. This is invoked right after the component is constructed. And then finally we have component DidMount, which is called right after the component is mounted. This is a really good place to load data or make network requests. We also have the UpdatingLifeCycle. This includes the following: now getDerivedStateFromProps we saw in the mounting life cycle, but it also fires when the component receives new props. shouldComponentUpdate if this returns false then Render and componentDidUpdate won't be called. We're gonna take a closer look at this one in particular in the next lesson. We also have render as part of the UpdatingLifeCycle also when the data changes, we call Render again.
>
> **[1:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=95)** getSnapshotBeForeUpdate is going to be called right before the most recently rendered output is rendered. Here we can't read the dom but we can capture a value for use later and then finally componentDidUpdate is invoked right after the update, so this can be used to operate on the dom once that update has occurred. Now the UnmountingLifeCycle only has one method on it and that is componentWillUnmount. This is invoked right before the component is unmounted and it's a great time to do some cleanup. You can cancel at request of the network, reset timers and all those types of clean up tasks. So the react component life cycle has really undergone some change over time. We have new methods to make use of and all of these have to do with changes to Reacts handling of asynchronous information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Code Identifiers:** getderivedstatefromprops (2), componentdidupdate (2), shouldcomponentupdate (1), getsnapshotbeforeupdate (1), componentwillunmount (1)
> **Definitions:** is called (4), is a  (2)
> **CLI Commands:** make (2)
> **Versions:** react 17 (1), react 16 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing a fragment-based layout](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=0)** - [Instructor] Fragments are these magical little containers that we can use to avoid having to add unnecessary elements to the dom. So we have our class for notifications here. We've already set some initial state properties. Now we need to handle updating with componentDidMount and ComponentDidUpdate. So here in componentDidMount. So once the component is added to the dom, we're going to call this.setState and then we're going to say previous and return this new object that says updates previous.updates plus one.
>
> **[0:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=53)** Okay. From here we can add our ComponentDidUpdate function. So once this occurs inside of the component lifecycle, we're going to say, if prevState.notifications
>
> **[1:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=73)** is not equal to this.state.notifications, then we want to call this.setState. And then we'll return updates previous updates plus one. Nice. From here we need to create this little method called handle add. This is going to create a new note and here we'll say notification this.state.count, this.setState should take in a previous value and we'll say notifications, push in any previous notifications and the new note. And then we'll also change the count while we're at it. Previous count plus one. Alright. Now what we can do inside of our render, this is where we get to make the magic happen where we're actually using the fragment. So in the unordered list we're going to say this.state.notifications.map note an index.
>
> **[2:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=173)** Then we're going to add a list item here. So we'll say li. And then inside of the list item, let's go ahead and add our note. So it looks like we're using one too many sets of curly braces there. That looks slightly better, but we also need to close that. Excellent. So now if we test our code, this is telling us that we need a unique key. So for each one of these list items, let's go ahead and create that. We're going to set the key as index. So let's test the code again, and it looks like everything is passing. Now if you want to avoid the div here, you can remove that and instead use the shorthand for our [React](../../Skills/Web%20Development/React.js.md) fragment here. And it looks like all of our tests are now passing. So again, this fragment helps us to not have to use wrapping divs where we don't actually need them. So if you don't need it, you can use a fragment. And then we're using the component lifecycle to set our state and make sure that we're displaying the correct number of notifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Code Identifiers:** setstate (3), componentdidmount (2), prevstate (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. React Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the context API](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=0)** - [Instructor] In [React](../../Skills/Web%20Development/React.js.md) applications we create nested component trees to [compose](../../Glossary/Framework/Jetpack%20Compose.md) our user interfaces. In early React apps sometimes you'd see state everywhere. This made it really easy to get some data quickly, but having state all over your app made it difficult to keep those values in sync. The common ideology then became, hey, instead of putting state everywhere, let's only put it at the root. Then we can pass down state data to components via props. So this starts out fairly straightforward. We can create a parent component that renders a child component. Let's go ahead and do this. So here on line 11 I'm going to create a component called resort. This is gonna have some state, which is just the name of the resort. And then we're gonna render something. So let's render a div that just displays that name.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=69)** All right and then we're going to go ahead and render this resort. Perfect. Next up let's create that child component. So this is gonna be called Lift. And this is just a stateless component that will render a div. This div, let's just say trail here. We're also gonna create an additional child component. You might guess what it is based on what I just typed. So let's create a trail component. This is gonna be called const Trail and we'll take in some props, and then we should render the following.
>
> **[1:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=119)** Okay. So at this point what we wanna do is here in our Lift, let's render the Trail component. And we're gonna pass down the properties here so we'll say props.name. We also want to, instead of rendering this.state.name, we're gonna render the actual Lift and we'll pass down this.state.name for that resort name. Okay. So this should be okay. We should be able to see this in our browser. Cool, so we have Snowtooth Montain. If we take a look at our React developer tools, we should see our Resort wrapping around our Lift which wraps our trail. We have to explicitly pass down props from one component to another, all the way up and down the tree. So Resort passes to Lift, passes to Trail. Now passing data from one component to another all the way up and down the tree can sometimes be time consuming. It's sort of like taking a train with a lot of stops from San Francisco to DC. Popular state management solutions like Redux and MobEx have emerged to solve these problems. But in React 16.3 the team announced a new context API. Context is how we pass data down to child components without having to pass it all the way down the tree. This is sort of like taking
>
> **[3:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=212)** a plain old way across the country. When we create context these values are accessible all the way down the tree. So in the next video I'll show you how we can adjust our little app to use context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Env Vars:** api (1)
> **Versions:** react 16 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Using context](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=0)** - [Instructor] Let's take a closer look at how we can use context to pass data down to our child components. The first step is we're going to create a context value, which will be called Context, and this is going to use a function called createContext from the [react](../../Skills/Web%20Development/React.js.md) package. Next, we're gonna create a provider. So, the provider is gonna be responsible for passing data down to the children. So class Provider extends React.Component. Now, instead of using state in the resort component, we're gonna move this. Let's just cut and paste this into the provider, and this will set up our initial state that can be passed down. Next, we wanna render something. What we'll render in this case is the context provider. This is a tag Context.Provider that will wrap around this.props.children. So, Context.Provider and then any children will be displayed right here. Okay. Now the thing I'm missing here on line 19 is I need to pass in a value. So this value is going to be what we pass down to these props children. We're gonna use state is this.state. This means that this information will be passed down. Since we've done this, we can make a few adjustments to our other components. Instead of rendering props.name,
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=94)** we'll get rid of that more on the trail component in a second. Let's also get rid of the passing of the name to the trail and the state to the name. Okay. From here, once I have created the provider, I'm gonna need to wrap our div here in the resort in the provider tag. So provider is going to provide all this information. Then we can give that a little tab over. Okay. This is gonna be responsible for passing that data, and now I need to consume it with the trail component. In the trail component we already have a div. This div is going to wrap around Context.Consumer. This component will consume the data from the provider, and using a pattern called render props, which we'll talk about more in a later video, we're going to actually render a function as a child here. This is gonna take in whatever the context is and it's going to return some UI. What it will return in this case is just a paragraph that'll say, this is the context, and we'll render context.state.name. Okay. Let's give our file a save and we'll check it out in the browser. Awesome.
>
> **[3:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=189)** It looks like our Snowtooth Mountain context is being rendered, meaning that this can be used in absolutely any component within the tree. As long as our provider is wrapping around the appropriate text that we'll need to render things to, we can pass it all the way down from lift and then to trail. This is how we start to work with context in our applications. We can pass down data without having to do so explicitly in all of these components. In the next video, I'll show you how to set state using context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** createcontext (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Referencing context in stateless functional components](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=0)** - [Narrator] In the last lesson, we looked at how the provider can pass data to a child component that uses the consumer. In this video, we'll take a look at how to change state using the context API. The first place I want to start is I want to add another state variable. So, we're gonna set up a value called status, which we'll set to OPEN. So this will mean the resort is open, closed, or perhaps on hold. The next step is I want to adjust the trail component a little bit. So, right now, we are rendering our consumer, and then we render this one paragraph tag, let's actually render a little bit more here. So, let's render a div, and this div is going to wrap around this paragraph. Now, we're displaying the context here, let's also display the status, so we'll say the resort is context.state.status,
>
> **[1:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=65)** and then finally, we want to add a button. So, here's where things get interesting. The button is going to be responsible for taking the status and changing it to closed. So, our button will be called Close Resort, and we're gonna add an onClick method here, which will say onClick equals, something we haven't created yet, but we will in just a second, context.changeStatus. Okay, so from here, what we can do is actually adjust these values that are in our context provider. So, the first step I'll take here, is let's hit a return on our values, and we're gonna add one more of these. So, we'll add a changeStatus method. This is gonna be a function that returns this.setState, and then we're gonna send a state object to this, with status.CLOSED as the value. So, instead of just being able to just pass these variables, we can also pass functions as values. And then, we can use them to change the state. So, let's give this a save. And, we'll take a look at it in the browser. And we should see that the resort is OPEN, if I click the Close Resort button, it should change it to CLOSED. So, this is just a simple example of how we can use the context API to set state.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), open (2), closed (2)
> **Code Identifiers:** onclick (2), changestatus (2), setstate (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Working with higher-order components](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=0)** - [Instructor] A higher order component is a function that takes in a component and returns a new component. It provides a way to share data between components through composition. The place I want to get started with this is to get rid of all of our code from the previous lesson and we're going to replace it with our higher order component. Now the component that I wanna render here is gonna be called random users. I'll call it RandomMeUsers, and here we're going to start to create our people list. So the RandomMeUsers is going to take in some data and display it. And the display component is going to be called PeopleList. So const PeopleList should take in some data. From here we want to render an ordered list. So the PeopleList is gonna be a pretty textbook presentation component. It's just gonna render some tags and it's going to load some data. So the data is gonna come from data.results.map. When we map over the results we're going to pass in person and i and these should yield our data for us.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=79)** Let's go ahead and destructure first and last from person.name. We also are going to return list items for each of these. Now each list item should have a key of i, and should display first and last. Okay. So from here, now that we've created our PeopleList we can set about to create our higher order component. So again, PeopleList is just the presentation component, and it's gonna get some data from another component called DataComponent. So DataComponent is goin to take in ComposedComponent and the URL from which we will get our data. And then this should render actually a class. So this pattern is sort of interesting. We're nesting a component inside of another one. So we're returning a DataComponent, which will extend [React](../../Skills/Web%20Development/React.js.md).Component. Now let's take us through a few steps here, so step one is we're gonna create a constructor. Next we're going to stub out componentDidMount. And then finally we will use render. So in the constructor we're going to pass props. We'll also call super and then we'll set up our state. So this.state =
>
> **[2:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=175)** and we're going to use data. We'll instantiate this with just an empty array, and then we're going to create two variables related to loading. So we'll say loading is false when we load the page. And then loaded is false. Loading just means that loading is in progress. Loaded just means that the data is loaded. So let's adjust our render method a bit. Let's return a div. Now inside of this div let's add a jsx expression. We're gonna say this.state.loaded. Now if this is true then we're going to render a ComposedComponent. So we'll say ComposedComponent, and we're gonna push in all the values from state using the spread operator this.state. We'll also push in all the props so ... Spread operator again, this.props. And then we wanna make sure that we close our tag in the appropriate spot. Now the alternative to this is going to be div
>
> **[4:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=255)** loading. So if we have all of our data then we'll load the ComposedComponent. If we don't then we'll just load a div that says loading. All right cool. The final step I wanna take here is we need to actually load the data, that's pretty important. So we're using componentdidMount here. ComponentWillMount is typically where I would have loaded the data in past versions of React, but with new async behavior, it's best to load data in componentDidMount. So the first thing we're gonna to is call this.setState. We're gonna set the loading to true. We then are gonna use [Fetch](../../Skills/Web%20Development/Fetch.md). So fetch is a way that we can make a request for some data. So fetch is a promise. We will use .then and we'll take the response and we'll convert it to [JSON](../../Skills/Web%20Development/JSON.md). And then finally we want to use another then method to take this data and use it to set state. So, what we'll do here is we'll use this.setState to reset a few of these values. First loaded is going to be set to true. We're gonna reset loading to false. And then we're going to provide the data as our third variable here. Okay cool. So we're almost there. We have created our component.
>
> **[5:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=347)** It's a higher order component. Remember that this component takes in a ComposedComponent and a URL. So when we need to use this let's go ahead and do so here on line 54. And 54 is going to actually use the higher order component itself. So here's where it gets interesting. RandomMeUsers. We're gonna render the DataComponent, and the DataComponent is gonna take in two things, right? We're gonna take in the ComposedComponent and the URL. So what's the ComposedComponent? Well, it's the PeopleList. So our presentation component here should be passed in first, PeopleList, and then we need to pass in the URL. So let's hit enter so we can actually see this. Our URL is going to pull from this randomuser website, randomuser.me/api?results=10.
>
> **[6:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=411)** Okay, so let's see how this comes together. We're gonna look at it in our browser. We should see that the loading state happens really quickly at the beginning and then we load our random users from that source. So remember, a higher order component is a function that takes in a component and returns a new component. So that's what we're doing here. Our DataComponent takes in the people list and then we pass in the URL which will provide data to it. So the higher order component is something that you'll see in a lot of react applications, and this pattern is something that you can use all over your apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** url (6), json (1)
> **Definitions:** is a  (4), means that (2)
> **Code Identifiers:** componentdidmount (3), setstate (2)
> **CLI Commands:** make (2)
> **Best Practices:** it's best to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Working with render props](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=0)** - [Narrator] A popular technique when rendering [React](../../Skills/Web%20Development/React.js.md) components is to use a pattern called render props. Now we got a little sneak preview of this when we were looking at the context API. A render prop is a way to share code between React components using a function property. The property defines what is rendered and the component just injects it into the UI. Now if that sounds a little weird, that's totally OK. Let's take a look at it to understand a bit more detail. You'll notice that we're starting out with this display encouragement component being rendered let's go ahead and create it. So we'll first create that display encouragement component and we're just gonna stub this out for now. This is going to return some sort of something. Alright that's a little vague, right? But here's what it'll actually return. It's going to return this component called encouragement. This is going to be another one of these stateless components. This one should return a div and then we're gonna render some data in that div using a render prop. Now the first step we need to take here is we're going to render the encouragement component and we're gonna pass down a property called render. Render is going to use this value pep talk to render in h1. So here we're gonna just return a simple h1
>
> **[1:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=95)** that uses the value pep talk. OK, so how do we access this in the encouragement component? Well, we're gonna access it via render so we will de-structure render from props and we're going to actually call the render function here in this JSX expression within the div and when we call it we're gonna send the value so we'll say pep talk is equal to message. Now message we haven't defined yet let's go ahead and do that this is literally just gonna be a string that says, you got this, so, this will be our message of encouragement for working with render props. Alright so let's give that a save and we'll take a look at it in the browser. Alright so let's take a look at why that might be, oh, we are not closing our encouragement tag, that's something that we should probably do so let's make sure that we close that encouragement tag on line 19. So back to our browser, we should see you got this, everything is working. So alternatively you could do this without ever using the render and you could just render the function as a child. So let me show you what I mean by that. Now the first thing I'm gonna do is I'll actually get rid of all of this render prop sending we're also going to get rid of everything in the render method, we're going to get rid of passing render, and instead let's go ahead and use message, now if there's a message then we'll return the message,
>
> **[3:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=190)** if not, then we'll return null, and just for the sake of styling let's wrap this in an h1. We'll also change our message just to make sure that this is working, so we'll say, you can do anything. More encouragement but also just to prove that this is working. So back to the browser you should see that this is rendering as expected. So a couple different methods to do kinda the same thing but you can choose whatever works best for your project and whatever syntax you most enjoy. Render props are a pretty cool pattern gaining a lot of popularity in React. These allow us to predictably load dynamic data into our React components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), jsx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Render props in the wild: React Apollo](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=0)** - [Announcer] As we saw in the last video render props are a great way to load dynamic data into [React](../../Skills/Web%20Development/React.js.md) applications. Not only can you use render props in your own apps, but you'll probably encounter then when working with popular libraries in the eco-system. For example Apollo Client an amazing tool for working with [GraphQL](../../Skills/Web%20Development/GraphQL.md), has something called React Apollo which provides bindings between your GraphQL service and your React components. You'll notice that we use the query component to display the result of the rates query and map the results to React elements. You'll also notice rendered props being used in the React router as well as downshift. So I definitely encourage you to experiment with render props in your own applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **Cross-References:** as we saw (1), in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [announcer] (1)

#### [Solution: Building a context-based theme system](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=0)** - [Narrator] Now it's time to build the thing that every developer cares about more than anything, which is a way to set a different theme. So we can set light mode and dark mode for our project here. We start by creating the theme context with [react](../../Skills/Web%20Development/React.js.md).createcontext. Then we're creating a class which is going to help us to provide that data to anything that lives inside of it. So we need to create a toggle that's going to go back and forth between light and dark. This is going to call set state. We'll take in the previous state and then we will return an object. Here we'll say theme is previous state.theme. We'll set that equal to if this happens to be light, then we're going to set it to dark, otherwise we'll set it to light. All right, so now inside of our render, we have the value and we're wrapping the props.children with the theme context provider. So from here we're going to create a theme consumer, which is going to use the render props pattern. We're going to call the render function
>
> **[1:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=93)** with the context value. So that'll look like this. We'll use the set of curly braces that are there. We'll pass context, and then we'll say render context. Now from here with our theme provider, we have our theme consumer. This is the render function that's going to be called so that all of that UI will be written under the right conditions. So let's give it a test. And we should see that all of our tests are being passed. We're going to toggle to the correct theme based on the initial state. And then the render prop is also going to receive that correct context value. Nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **UI Navigation:** toggle (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. React Accessibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Web accessibility overview](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=0)** - [Instructor] One of the most important yet overlooked pieces of putting together a web application is accessibility. Accessibility means that we'll create websites to be used by anyone and everyone. As developers, it's not someone else's job to make the web accessible for everyone, it's our job. When working on projects, we should always consider how the choices we make with our user interfaces might be exclusionary. If you have a brick-and-mortar store, the building must be accessible. If you have an online store, the same is true. Not only is this the right thing to do, but, in many countries, accessibility is the law. As Section 508, the U.S. government's accessibility program states, "Agencies must give disabled employees "and members of the public access to information "that is comparable to access available to others." Now, this is a guideline in place for government websites, but this should extend to your own websites. When creating an accessible site, we should keep a few categories in mind. We should think about visual impairments such as blindness, color blindness, and more. We should think about hearing impairments. We should think about motor impairments. This could mean a traumatic injury or, perhaps, tremors. And then, finally, learning impairments, which include memory loss, comprehension, and attention. One of the great things about the [React](../../Skills/Web%20Development/React.js.md) team is that they really care about making React apps accessibly to wide audiences. I encourage you to check out the documentation to learn more about their approach. In the next videos, I'm going to be digging in
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=94)** to some of the accessibility tools and techniques that we should keep in mind when building React apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Viewing React accessibility warnings](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=0)** - [Narrator] Create [React](../../Skills/Web%20Development/React.js.md) App is an amazing tool for building React applications. With a simple command, you can generate an entire React project. Built into that project, you'll also find a linking tool that will help us check our code for accessibility violations. To get started with this, let's make sure that we're in Chapter Five, 05_02, start, and we're going to install Create React App. So, I'm going to run sudo [npm](../../Skills/Web%20Development/npm.md) install -g create-react-app. I'll enter my password. And if you're on a PC, you can just run your command prompt as an administrator to the same thing. Now the next step, now that this is installed globally, is that I can run create-react-app, and then give my name a project. So, I'll call it a11y. So, a11y is just a shorthand for accessibility there are 11 letters between the a and y in accessibility, so therefore we get a11y. So, at this point, we can move into that folder, so I can say cd a11y, and then run npm start. And this should open up my project in a new browser. So there we go, we have our app running on local host 3000. Now the next step that we wanna take is we wanna actually pull open our Source folder, inside of Start, and inside of a11y, and we're gonna make some adjustments
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=94)** here to our app.js file. So the first thing I wanna do, is we're gonna remove the import of the logo. We also are going to make adjustments to our code here in the app, so let's just return our parentheses right now, and we're gonna add some code here. So, I'm gonna add a div, inside of my div I will add a tag with an href of #home and then I'm gonna say that this is going to close and we'll say Cool Link. Finally, we will add an image, with a source of /img/is-an-image.jpg. Great name.
>
> **[2:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=145)** And finally, we'll close that image tag. So, at this point, we should be able to move back our browser, and we see that the image is broken, I'm not too worried about that, and we have Cool Link, but we're noticing an accessibility warning here in the console. So, what it says is that image elements must have an alt prop, either with meaningful text or an empty string for decorative images. So, if this image does convey some sort of meaning, if it's important, then we're going to give our image some alt-text. If it's just a decorative image that doesn't really have an effect on the meaning on the page, we can just leave an empty alt tag, so an empty string here. So, as soon as I do that, we're going to see that all of the warnings have been removed. So, we're seeing this because Create React App is configured with a fantastic tool called [ESLint](../../Skills/Software%20Development/ESLint.md)-plugin-jsx-a11y. This linting tool will watch for and report on any accessibility issues with your code. This tool will raise warnings for a range of accessibility violations, so let's say we removed the link text from our anchor tag, we're gonna see immediately that anchors must have content, and the content must be accessible by a screen reader. So, even though a lot of accessibility testing should happen manually, there's a lot of built-in tools that help us find common bugs like our image, and with our link. You can check out the documentation for ESLink-jsx-a11y to learn more about
>
> **[3:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=239)** all of these warnings and the package itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (7), [npm](../../Skills/Web%20Development/npm.md) (2), [ESLint](../../Skills/Software%20Development/ESLint.md) (1)
> **CLI Commands:** make (3), find (2), npm (2), sudo (1), cd (1)
> **Prerequisites:** install (2)
> **File Paths:** app.js (1)
> **Documentation:** the documentation (1)
> **Tools:** command prompt (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)

#### [Using semantic HTML](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=0)** - [Narrator] When HTML5 was released years ago, it came with a new set of tags that could be used to describe dom elements more semantically. Instead of creating user interfaces with a collection of divs, new tags were introduced to ref common content locks. After analyzing the most common used classes and IDs, a new list of tags was assembled. For example, a div with a class of header would now be header, and a div with an ID of footer could now just be a footer. Here's a collection of many of these new semantic tags. So again, header represents some introductory content, a nav element would contain a list of links to other pages or resources, a section might indicate a generic section of the document and could include a bunch of article tags to indicate a self-contained composition. And then finally, we have aside and the footer. Aside containing some tangentially related content, things like sidebars, pull quotes, etc. And then there's a footer. Now when I teach with this concept, the popular question always come up: does this mean I can't use divs anymore? Of course you can still use divs, but if you're using a div for a tag that might fit into one these semantic categories, it's usually smart to use a semantic tag instead. And the reason for that is because [Semantic Markup](../../Skills/Web%20Development/Semantic%20Markup.md) makes it easier to select elements with CSS or [JavaScript](../../Skills/Software%20Development/JavaScript.md). There are more descriptive meanings for these tags. You can search more easily.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=96)** And finally, and very significantly, there's improved accessibility. So let's take a look at how this might play out in our code. So here, if we're using the app component, you of course don't have to replace every div, but maybe you're creating something like a nav element or a header. You can always replace these tags and these can wrap around elements to describe this stuff in more detail. So there's no limitation when it comes to [react](../../Skills/Web%20Development/React.js.md) with how you can use these semantic tags. I'll encourage you to use them as much as you can, and this will provide more meaning to devices like screen readers and even to search engines. Search engines are ranking higher pages that use semantic tags, so that's a little incentive there as well. So not only will semantic tags make our pages easier to read, they'll make our sites more accessible to a range of different devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Semantic Markup](../../Skills/Web%20Development/Semantic%20Markup.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** html5 (1), css (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [WAI-ARIA roles](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=0)** - [Narrator] The W3C provides a list of accessible rich internet application standards that we can use to make web content usable by people with disabilities. It also provides a list of attributes that can be used to enhance [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md). These are typically grouped into three categories: roles, properties, and states. All of these can be seamlessly used in [React](../../Skills/Web%20Development/React.js.md) components using jsx. Let's take a look at our app component. The app component we're going to replace with a header. Now this is again is the semantic tag that means something specific. It means that it's a header. Let's also add an h1 here. The h1 is going to say Hello World, and we'll replace our a and image tags with something else, so we're going to add a nav and then let's add a form, and the form is gonna be kind of like a search form. The search form will have an input associated with it, so we'll say type equals search, and we'll give the name search. Great, so at this point, we can start to add some of these attributes. Now the first thing we're going to add is a role to the nav, so we're going to say navigation. All of these roles can be found on the website, so if you're looking for something specific, you can find it here under role definitions.
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=94)** Now, the next step we're gonna take is to add a role to our form, which is going to be search, and then we're gonna add one of these properties. This property is going to be prefixed with the aria label, and we're gonna say Search all content. Cool. So, at this point, we can go to our terminal. So, at this point, we will open our terminal and run [npm](../../Skills/Web%20Development/npm.md) start. And it looks like we're getting an error there, that's an easy one to fix. I just need to close that input tag. So, let's give this a save, and we'll check it out in our browser. Now, we should see the Hello World here and we should see our form. So, what's really cool that's going on here, is that we're getting another alert from jsx-a11y. We're seeing no redundant roles. So, our jsx-a11y here is telling us that the element nav has an implicit role of navigation defining this explicitly as redundant and should be avoided. So, we can replace this in Atom, we can just remove it, we no longer need that role. We only need to use these aria attributes if there's no semantic meaning, or if we're witnessing an issue when we're testing with a screen reader. When we're testing with a screen reader, you can look for places where your semantic layout might be leaving details out
>
> **[3:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=188)** that are critical for user understanding. I'd encourage you to learn more about all of the aria roles, states, and properties on the W3C website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Accessibility](../../Skills/Web%20Development/Web%20Accessibility.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** make (1), find (1), npm (1)
> **Tools:** terminal (2), atom (1)
> **Env Vars:** w3c (2)
> **Documentation:** w3c (2)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** kind of like (1)

#### [Accessibility testing](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=0)** - [Narrator] Even though this tool is not specifically for [React](../../Skills/Web%20Development/React.js.md) applications, you can use it literally for anything, I wanted to point out this very, very useful Chrome extension that I would encourage you all to install. It's called aXe and it's from Deque Systems, and if you add this to Chrome, then you can run an accessibility check on any website in Chrome to check for any violations. So, I've added the aXe extension to Chrome, now, what I can do, is if I refresh the browser, so if I open up my developer tools with Command + option + J, I can see that there's another tab that's been added here called aXe. I will click on Analyze, and what this will do is it'll give me a report of any violations, and it will categorize them. So, for example, this says that I have three violations found and 186 that might need review. These are going to be places in the code that I can check out to ensure that I don't have any accessibility violations. So, a couple of things that I'll point out here: I can click on Inspect Node for any of these. This will take me directly to the position in the dom where the problem exists. So, it looks like, if I open up this h3, we don't have any text there. It's being rendered via svg, so that's just a heads up that that could be a problem. All of this can be used literally on any site, so I always like to use it on my own sites
>
> **[1:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=95)** before pushing anything to production. Now, speaking of pushing things to production, you can incorporate aXe into your build pipeline. So, there's an mpm from Deque called axe-core, which is kind of the underlying tool behind the Chrome extension, and what this will do is it'll do automated testing and you can build this into your build pipeline. So, as you run tests, as you minify anything, as you do all of those checks before you push to production, you can run an accessibility check. This is really important stuff to make sure that the maximum number of people can view all of our content. So, aXe does not replace testing with screen readers, and doing some accessibility tests on our own, but it is an excellent supplement to that, and it will point out areas where you might need some improvement. So, definitely check these out: axe-core on mpm, and aXe in the Chrome webstore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Code Identifiers:** axe (6)
> **CLI Commands:** node (1), make (1)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** heads up (1)
> **Prerequisites:** install (1)

#### [Solution: Building an accessible navigation system](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=5)** - [Instructor] Let's improve our form so it is a bit more accessible. If people are using the keyboard to navigate between different elements, they're going to need each one of these inputs to be labeled. We can add a label here that says Name. And the label should be given this attribute called htmlFor. Let's set that to a Name. And we're also going to add to our input here an ID of name. Let's scroll down a little further, and we're going to place a label here. And here we'll say Message. We need to add htmlFor, message,
>
> **[1:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=60)** and then we'll add an ID of message to the text area.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=69)** From here, I can click Test My Code. And now each one of these has been added. But we're missing one, so we need to add to our button a type of submit. So that's easy enough. Let's go ahead and add, type, submit. Now, if we click Test Our Code again, we should be able to see that that test is now passing. So, again, really important. If we're building a form, we want the form to be as accessible as possible when people are using various assistive technologies, or maybe they're interacting based on voice or based on their keyboard alone. So this is a way that we can make this work. We can add labels, and we can make sure that each one of our semantic buttons is given the right type.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** htmlfor (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=0)** - [Eve] Thank you so much for taking this course. From here, there are many different directions that you can head in with your study of [React](../../Skills/Web%20Development/React.js.md) and related tools. If you're interesting in testing, I'd check out Jest. If you want to learn more about how to manage your styles in React, I'd definitely recommend the library Styled Components. If you want to learn more about how to use your React skills to build native apps, I'd definitely look at [React Native](../../Skills/Mobile%20Development/React%20Native.md), it's really cool. And then finally, if you want to learn more about declarative data fetching, I would check out [GraphQL](../../Skills/Web%20Development/GraphQL.md). Now, you don't need any of these things to work with React, of course, but these are some pretty cool related libraries and packages. I'm so glad that you joined me for this course. Now go forth and build something incredible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [React Native](../../Skills/Mobile%20Development/React%20Native.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Speakers:** - [eve] (1)


### Appendix

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the exercise files](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has a set of exercise files that you can download and follow along with, allowing you to work alongside me on the exact same files that I'll be working on. In the exercise files folder, you'll find a folder for each chapter. Within each chapter, you'll find folders for each video and then in each of those, we have a start and a finish. When the video begins, I'll start with the start file, and when the video ends, I'll start with the finish folder. In this course, I'll be using Atom, which is available at [atom.io](https://atom.io). However you can follow along in any text editor or development IDE of your choice. So with that in place, I think we're ready to go. Let's get to the content.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Tools:** atom (2)
> **Exercise Files:** exercise files (2)
> **URLs:** [atom.io](https://atom.io) (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Eve Porcello](../../Instructors/Web%20Development/Eve%20Porcello.md)

## Resources

- Exercise files available

## Skills Covered

- Digital Accessibility
- React.js

## Path Context

### In [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)
← [Microsoft Office Accessibility for Beginners](Microsoft%20Office%20Accessibility%20for%20Beginners.md) | **11 of 12** | [Using Stark for Accessible Design Projects](Using%20Stark%20for%20Accessible%20Design%20Projects.md) →

## Appears In

- [Build for Digital Accessibility](../../Paths/Web%20Development/Learning%20Paths/Build%20for%20Digital%20Accessibility.md)

## Related Courses

_Courses sharing skills:_

- [WordPress- Accessibility](WordPress-%20Accessibility.md) — Digital Accessibility
- [React- Cloud-Powered Apps with Firebase](React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — React.js
- [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](React-%20Testing%20and%20Debugging.md) — React.js

---

[↑ Back to top](#)