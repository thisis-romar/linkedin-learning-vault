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
  - Build for Digital Accessibility
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/digital-accessibility
  - skill/react-js
status: not-started
created: 2026-04-20
---

![React: Components, Context, and Accessibility](https://media.licdn.com/dms/image/v2/D560DAQGZpDB3TmKYsA/learning-public-crop_675_1200/B56ZbF5SkzGgAY-/0/1747076852693?e=2147483647&amp;v=beta&amp;t=a2mR-X04ae0V5iUmry6EIX13ITVQmPN_QgoBvxlk3XI)

# React: Components, Context, and Accessibility

> Once you've mastered the foundations of the React framework and its supporting architecture, you can start taking advantage of more sophisticated features that enable faster and more accessible applications. In this course, learn about the enhancements found in React 16 and how to leverage key features to build better React apps. Explore advanced components and patterns that can help you structure

> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility) | 1h 27m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Eve Porcello]]

## Resources

- Exercise files available

## Skills Covered

- Digital Accessibility
- React.js

## Table of Contents

### Introduction

#### React components, context, and accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980&t=0)** - Once you get beyond the React basics, it's time to explore ways to handle state management and accessibility with more precision.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980&t=8)** Hi, I'm Eve Porcello.
>
> **[0:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980&t=10)** I'm a software engineer and an instructor, and in this course, we're going to take a closer look at advanced component creation, the Context API, and best practices for accessibility to build faster, more modern applications.
>
> **[0:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/react-components-context-and-accessibility?u=76281980&t=24)** Build applications that serve your next million users well.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - once (1)


### 1. What’s New in React

#### Rendering arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=0)** - [Instructor] To get started, let's take a look at our exercise files.
>
> **[0:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=3)** In chapter one lesson two, you'll find the HTML file set up and ready to go.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=8)** We're going to be writing most of our code here not to get bogged down in JavaScript tooling, but to instead focus on these important concepts.
>
> **[0:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=17)** The file is set up with Babel to compile ES.Next syntax and JSX into JavaScript that the browser can read.
>
> **[0:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=25)** We're also going to include React and React dom.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=28)** All of our code will be written here in this script tag where we've indicated that we're going to transpile, or compile everything that's inside of this script tag.
>
> **[0:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=37)** Now in previous versions of React, we were only able to render one root element.
>
> **[0:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=42)** In other words, everything had to be nested inside of one tag.
>
> **[0:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=46)** In React 16, we can render arrays.
>
> **[0:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=49)** So let's take a look at what this might look like.
>
> **[0:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=51)** The first step is we're going to use react dom without render.
>
> **[0:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=57)** We're going to render this component called greetings.
>
> **[1:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=63)** And this component should be mounted to the root element here on line eight.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=67)** So get element by ID, root.
>
> **[1:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=71)** The next step is we're going to actually create the greetings component.
>
> **[1:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=74)** So here on line 11, I'm going to create a component called greetings.
>
> **[1:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=81)** This is going to be a function component that simply returns an array.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=90)** Now this array is going to have a few different items here, so we'll say li and we'll say key of one.
>
> **[1:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=99)** This will say hello.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=103)** And then we'll copy and paste these to add a few more greetings.
>
> **[1:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=106)** So key two, this will say hey, and this will say yo, and it'll also have a key of three.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=117)** Great.
>
> **[1:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=118)** So at this point we can give that a save, and we can go over to the browser and run this.
>
> **[2:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=127)** And we should see that these components aren't rendering as expected, really, because we need to add commas between them.
>
> **[2:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=133)** So let's do that on line 13 and 14.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=137)** So once we give that a save, we are actually going to be rendering this array, so it looks like all of these are rendering as expected and we are able to render this array.
>
> **[2:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=148)** Now this becomes even nicer when rendering dynamic data.
>
> **[2:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=151)** Here on line 11, I'm going to create a simple array called data, and this is gonna have a few different greetings in it.
>
> **[2:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=162)** So the first one, we've seen this before, will say hello.
>
> **[2:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=166)** We'll give it an ID of one.
>
> **[2:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=168)** And then again, we'll copy and paste these to use our other greetings.
>
> **[2:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=175)** Feel free to use whatever greeting seems right to you today.
>
> **[2:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=179)** And we'll also say yo and three.
>
> **[3:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=184)** Now instead of just rendering this flat array, we're going to actually map over the data.
>
> **[3:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=190)** So the first step here is we need to pass the data to the component, so we'll say data equals data.
>
> **[3:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=198)** And now this is accessible in the greetings component via props.
>
> **[3:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=202)** So we could say props or we can destructure this and use data.
>
> **[3:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=211)** Now we're going to replace this return with another return which will map over the data in props, and it's going to return an item for each of our greetings.
>
> **[3:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=221)** So let's go ahead and return a list item.
>
> **[3:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=230)** And we're gonna pull the key from item.ID.
>
> **[3:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=237)** And then the text that will display is item.greeting.
>
> **[4:02](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=242)** Okay, so this adds a little bit more flexibility as our data set grows or shrinks, we should always render the right number of list items.
>
> **[4:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=251)** So once we hit save, we should see nothing really changed.
>
> **[4:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=255)** If we say hi there, we should be able to refresh and see that dynamic data appearing.
>
> **[4:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=264)** So this is a big deal.
>
> **[4:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/rendering-arrays?u=76281980&t=265)** At React Conf in 2017, they announced that we would be able to start rendering arrays, and everybody exploded in excitement and clapping and it was a big deal, so this allows us to render something beyond just one element and it allows us to display dynamic content in that array if we so choose.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1), this. (1), pass (1)
> **Env Vars:** html (1), jsx (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Versions:** react 16 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### setState() changes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=0)** - [Narrator] One of the ways that we can change data in our application is to use set state.
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=5)** We're gonna take a look at how set state has functioned for awhile and then we're also going to look at how we can pass instead of an object, a function, to set state.
>
> **[0:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=15)** So the first place I wanna start here is let's get rid of our previous data in our previous component we also are going to be rendering a menu component instead.
>
> **[0:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=25)** Now the menu component is going to be responsible for rendering a menu, so we'll make this a class component.
>
> **[0:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=38)** And this should have, of course, a render method, we're also going to set up some initial state so I'll add the constructor.
>
> **[0:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=47)** Now the constructor always takes in props.
>
> **[0:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=50)** And we can call super with those props as well.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=54)** The next step is I want to initialize our state so we'll say this dot state will give meal a value of spaghetti and then within our render we're going to return the following.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=69)** Now what we should return is, at this point, just the div.
>
> **[1:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=74)** Let's add another component here on line 11.
>
> **[1:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=78)** This component is going to be responsible just for rendering an h1, so, it's gonna be called now eating and this will take in some props and return an h1.
>
> **[1:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=91)** So a pretty simple stateless functional component here that displays props dot meal.
>
> **[1:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=97)** Now this component is going to be rendered in the menu so we'll add it here to line 23 so now eating should also take a property called meal and it's going to be set to the value of this dot state dot meal passing that value down the tree to the now eating component.
>
> **[1:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=118)** Cool, let's take a look at that in our browser.
>
> **[2:02](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=122)** We should see the spaghetti value is being pulled from state and passed down as props to now eating.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=129)** The next step is I'm going to add a method, a custom method here called add side dish.
>
> **[2:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=134)** Now add side dish is going to set the state so we'll call this dot set state and traditionally how set state calls have worked is we pass it an object that contains new information to overwrite whatever's in state so we'll say spaghetti and salad.
>
> **[2:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=152)** So now the way that we'll trigger that function is we're gonna add a button so right next to our now eating component, let's do this, we're gonna just add a JSX expression here, we're gonna check to see that this dot state dot meal equals spaghetti.
>
> **[3:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=180)** And if it does, we're going to render a button.
>
> **[3:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=183)** Now the button should have the text displaying as add side dish.
>
> **[3:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=189)** The button will have an on click that maps to this dot add side dish.
>
> **[3:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=198)** Excellent, and then the else condition here will just return null, so, we don't want the button to be clicked again after it's clicked once basically.
>
> **[3:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=207)** Now finally we need to bind this so we will use this dot add side dish equals this add side dish dot bind this.
>
> **[3:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=218)** Okay, now let's take a look back at our browser we should refresh to see... Let's see what our error is.
>
> **[3:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=228)** Oh cool, looks like we didn't terminate our JSX expression.
>
> **[3:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=233)** Actually, we did, but it's here on line 31.
>
> **[3:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=236)** So let's put that on line 32 after the whole thing is done.
>
> **[4:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=241)** Nice, and now I'm gonna click add side dish and we should see spaghetti and salad.
>
> **[4:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=247)** So let's look at how we might re-factor this using set state and a function.
>
> **[4:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=253)** So right now we're taking in this object.
>
> **[4:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=257)** Now if we ever wanted to refer back to what the past state was it might be a little tricky to do so it's much more simple if we do use the function here.
>
> **[4:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=267)** So to this dot set state we're going to instead pass in a function.
>
> **[4:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=272)** So the function is gonna have the argument previous state.
>
> **[4:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=277)** This is gonna return the following, we'll say return meal and now we're gonna use a template string to use the previous state dot meal and we'll just concatenate that with and salad, perfect.
>
> **[4:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=295)** So let's take a look at that.
>
> **[4:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=297)** We refresh, I add my side dish, and that will work correctly.
>
> **[5:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=301)** So we're able to capture that previous state value and since set state is asynchronous we can work with it this way.
>
> **[5:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=309)** Now the final little re-factor I wanna do here is sometimes you'll see our class properties instead of using the constructor you may see them as static properties so I'm gonna actually replace the constructor with state as a static property, so we'll say state equals this object.
>
> **[5:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=332)** And then we're gonna get rid of everything else.
>
> **[5:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=335)** Now you'll notice that I'm about to delete the binding for add side dish.
>
> **[5:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=339)** That's okay, we're gonna get around this by simply binding add side dish with an arrow function.
>
> **[5:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=346)** So we're gonna say add side dish equals a function and this should all work correctly, the arrow function is gonna bind this for us.
>
> **[5:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=356)** We refresh, we see the same UI, I say add side dish, and everything is working as expected.
>
> **[6:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/setstate-changes?u=76281980&t=364)** So that is just a tiny re-factor, it's a little less boiler plate to skip using the constructor but you can use any method that you'd like to construct your components.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (9), pass (3), static (2), super (1)
> **Env Vars:** jsx (2)
> **CLI Commands:** make (1)
> **UI Navigation:** in the menu (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### How to use CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that will appear when you click on the challenge links in the courses table of contents.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=8)** Each challenge includes instructions and a couple of code editors that you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=16)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=24)** We recommend using a desktop browser for the best experience with these code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=34)** The code challenge has four areas: instructions up here on the top left, a code editor for your answer in the top right, another code editor where you can see how your code is used down here in this test code panel, and then a console for output as well as the render because this challenge is using React.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=54)** You can use these drag handles to allocate space as you'd like.
>
> **[0:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=58)** And to get even more horizontal space for the code editors, you can always collapse the courses table of contents on the left.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=67)** Each challenge has instructions that include a description of the challenge and the challenges parameters and desired result.
>
> **[1:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=75)** So what we can do here is we can create our answer.
>
> **[1:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=80)** We're trying to find the largest number in an array, so we can say return Math.max and then push in all of these numbers.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=90)** That looks good.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=92)** Now we'll drag this handle here for a moment.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=96)** We'll see that the largest number is 19, this is the React component that's being rendered.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=101)** But if I want to test the code like that, the console is going to open in a moment and we'll see those test results.
>
> **[1:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=111)** So all we need to do to run that again, we just click test my code, and here you'll see a message indicating whether your code returned a correct result.
>
> **[2:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=121)** Now the code editor down here in the lower right is how our code is going to be used.
>
> **[2:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=127)** So we can change this code to experiment with various different test cases.
>
> **[2:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=133)** We also can compare that to what we're writing up here, and if we were to write something incorrect, like maybe I remove the spread operator there on line six, we'll see that those tests, when I click test my code, will start to fail.
>
> **[2:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=148)** So regardless of whether your answer is successful, you'll see messages in the console output on the lower left, and then if any of those messages are too long to fit in that area, you can always scroll sideways to see the whole thing.
>
> **[2:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/how-to-use-coderpad?u=76281980&t=163)** When you've finished each code challenge, return to the courses table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Solution: Implementing array-based state updates
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=0)** - [Instructor] Now that we have our task list scaffolded here, we can create our handleAddTask function that's going to add these values every time I click on Add Task.
>
> **[0:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=17)** So let's go ahead and replace those comments with this.
>
> **[0:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=23)** We'll say const newTask, and we'll set that equal to New Task.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=29)** And then we'll place the this.state.count value right here, make sure that semicolon is the outside of those back ticks.
>
> **[0:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=41)** Then we'll call this.setState.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=45)** We'll take in the previous state.
>
> **[0:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=52)** And then we want to return an object.
>
> **[0:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=55)** So we need to wrap that in a set of parentheses and we'll say tasks.
>
> **[1:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=64)** And then we'll push in our previous State.tasks and add the newTask.
>
> **[1:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=72)** And then we'll also set the count to whatever the prevState.count was, plus one.
>
> **[1:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=82)** Next, we want to render the tasks.
>
> **[1:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=86)** So in our unordered list, we will map over the values that are in state.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=92)** this.state.tasks.map.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=96)** And then we will pass task and index in here.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=101)** And then we will return a list item.
>
> **[1:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=106)** Each list item should have the task here, and then each one should have a key that is set to the index.
>
> **[1:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=119)** So now, if I test the code, I should be able to see in the console that both of these are working correctly.
>
> **[2:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=128)** We're going to be able to add a task when the button is clicked, and then we're also going to be able to render an empty list initially.
>
> **[2:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-array-based-state-updates?u=76281980&t=139)** Nice, so a nice little combination of being able to work with the spread operator and to create a new state for a couple different values at the same time.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), function (1), let (1), const (1), pass (1)
> **Code Identifiers:** newtask (2), handleaddtask (1), setstate (1), prevstate (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Advanced Components

#### Compound components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=0)** - [Instructor] Compound components allow you to create and use components that share a state.
>
> **[0:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=4)** Let's go ahead and take our now eating and menu components out of here and instead we're going to render this display component.
>
> **[0:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=14)** The display component is going to display something based on a truthy or falsy variable, so let's do this, we're gonna say if truthy is true, we'll set that default argument there, and then finally we will pass in children.
>
> **[0:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=33)** The next step is we're going to use another one of those in line if else, we're gonna check to see if truthy is true, now if it is, then we're going to call this function react.children.only so what this is gonna do is it's going to make sure that children only has one child and then it's going to return it, the other option is just to return null, so if there are no children then we'll return null.
>
> **[1:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=64)** We'll also setup here a value for h, let's go ahead and set that to 18, and we're also going to use if truthy, we're gonna pass down this property so we'll say, age is greater than or equal to, 18, so our display component we're gonna want to render some sort of a child here, so let's go ahead and render an h1, this h1 should say you can vote, that's US rules there, now if this is true, if this evaluates as true, we're gonna go ahead
>
> **[1:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=113)** and display this, if not then we won't render anything.
>
> **[1:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=116)** So let's give that a save, we're gonna look at it in the browser, and we're gonna see that we can indeed vote.
>
> **[2:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=121)** What if we changed this value to say 12.
>
> **[2:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=128)** We're gonna see nothing.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=129)** So this is an example of using a compound component where sharing some state information between the display component and any children, so this h1 particular.
>
> **[2:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=142)** If you're interested in learning more about react.children or other ways to manipulate elements with react APIs, just check out the docs and you'll be able to see all of the methods that are available on react.children.
>
> **[2:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/compound-components-2?u=76281980&t=157)** Here's the one that we used react.children.only.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), pass (2), else, (1), function (1)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Uncontrolled components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=0)** - [Instructor] In this video we'll take a look at one way to build a form using an uncontrolled component.
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=5)** With an uncontrolled component you'll use dom elements directly to build your form.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=9)** And then to capture input values we'll use refs.
>
> **[0:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=12)** So let's first get rid of this display stuff from before instead we're going to render a component called encouragement form, this is gonna encourage us to keep programming, and, we'll say encouragement form extends react component, of course this is gonna render something we will render a form.
>
> **[0:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=49)** Now the form should have a label and inside of that label we will add the label text so we'll say send an encouraging message
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=67)** and we'll add the input at this level as well.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=69)** So this will have a type of text, and then we'll use the ref, we'll use input, then we'll say this.input equals input.
>
> **[1:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=85)** So this is gonna allow us to capture whatever the value is that is entered into that field.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=90)** Now finally we want to add a button here, our button is simply going to wrap around a submit bit of text, cool so let's see what this looks like in the browser we should see send an encouraging message, and if we type anything it just clears it out, so let's figure out how we can grab this input value and we're gonna do this using a custom method.
>
> **[2:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=120)** Alright so first things first, let's use handle submit and handle submit is going to do the following so we're gonna create a function here that's gonna take in the events, and it's going to alert this.input.value, we'll also use prevent default here so prevent default is just gonna prevent the browser's default behavior, so that we can see this alert running.
>
> **[2:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=154)** So the final step here is I need to make sure that his handle submit method is added to our form itself so we're gonna add on submit this will map to this.handlesubmit, since we used this arrow function we don't have to bind this which is pretty nice.
>
> **[2:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=173)** So once I give that a save and refresh, and I send another encouraging message like, you're doing great, this should alert me that I'm doing great and that this value has been captured.
>
> **[3:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/uncontrolled-components?u=76281980&t=191)** So this is one way that we can handle creating forms with react, in the next lesson we're gonna look at how we can do this with components instead of working with the dom directly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (3), function (2), extends (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Controlled components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=0)** - [Narrator] We just looked at uncontrolled components and how we can use refs to capture values from inputs.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=6)** In this video, we'll look at controlled components.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=8)** A controlled input accepts a value as a prompt and also uses a call back to change a value.
>
> **[0:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=15)** So, let's make some adjustments to our form here.
>
> **[0:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=19)** Right now, we have our handleSubmit function, let's stub out a few more things that we're gonna need.
>
> **[0:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=26)** So the first thing here is state.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=28)** So, our state property is going to have a value called Message, and the initial state will be just an empty string.
>
> **[0:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=38)** Next, we want to create something called handleChange.
>
> **[0:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=42)** And handleChange is gonna be another function that does something in a second.
>
> **[0:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=48)** So, we looked at how to add a ref to an input, let's actually get rid of this though.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=54)** Instead, we're going to use the value this.state.message, and then when something changes, we're going to call this.handleChange.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=69)** Okay, so let's create our handleChange function.
>
> **[1:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=74)** This is going to also set the state.
>
> **[1:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=78)** And what this will do, is it's going to reset the state of our message value by using Message e.target.value.
>
> **[1:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=91)** Okay. And then finally, let's alert this as well, let's grab the state.value, this.state.message.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=103)** Okay, at this point, let's see what this looks like in our browser.
>
> **[1:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=107)** We'll refresh, and then we'll send another encouraging message, let's say, you are smarter than you even know.
>
> **[1:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=119)** Submit, and this page will tell me that.
>
> **[2:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=123)** So by using a controlled component, the data is pushed to the form component.
>
> **[2:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=128)** This means that it always has the current value of the input without having to ask for it with a reference.
>
> **[2:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=134)** This way the state and the inputs are always in sync.
>
> **[2:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=138)** And this can make tasks like validation simpler, because all of the data is accessible via the component state.
>
> **[2:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=145)** So, this is a controlled component.
>
> **[2:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/controlled-components-2?u=76281980&t=147)** It differs slightly because we're not using a ref and instead we're just changing state with our handleChange and handleSubmit events.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), this. (3), finally, (1)
> **Code Identifiers:** handlechange (5), handlesubmit (2)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### Solution: Creating a compound component system
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=0)** - [Instructor] It is time to create our toggle that has a few different static methods as part of the class.
>
> **[0:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=11)** So here on line 17, we want to render children when the toggle state is true.
>
> **[0:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=18)** So let's go ahead and point this arrow at an expression here.
>
> **[0:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=24)** We'll check to see if the property on is true.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=28)** If so, we'll return children, otherwise we'll return null.
>
> **[0:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=33)** Same goes for this one for toggling off.
>
> **[0:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=37)** Let's simplify this a little bit and we'll say not on, and we'll return children.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=45)** Or if that's not true, we'll return null.
>
> **[0:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=51)** Then we're going to render our button.
>
> **[0:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=56)** So we'll return a button and this button element is going to display toggle and it'll have a property called on click, which will be set to toggle.
>
> **[1:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=77)** Now let's replace everything that's in this little expression here.
>
> **[1:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=85)** And we're going to say react.children.map.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=92)** This.props.children, and then we'll take in a callback function here.
>
> **[1:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=99)** This callback function is going to take in whatever the child element is and we'll return react that clone element.
>
> **[1:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=112)** And then we'll take in the child.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=117)** And then the second argument here will be an object where the first value is on.
>
> **[2:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=124)** And then toggle is set to this.toggle.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=129)** Okay, so now all of that should live within our div.
>
> **[2:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=134)** So now I can click on test my code.
>
> **[2:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=144)** And it's not seeing on defined.
>
> **[2:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=146)** We just need to add that inside of our render.
>
> **[2:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=150)** So we'll say const on, set that equal to this.state.
>
> **[2:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=155)** Alright, that's a little better.
>
> **[2:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=158)** Now if we run our tests...
>
> **[2:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=167)** Now we're still seeing this error that on is not defined.
>
> **[2:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=170)** And so we need to check this out inside of the component.
>
> **[2:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=176)** We actually need to add this property to both the on and off functions.
>
> **[3:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=183)** Now, after we pass that and we run the code, we should see that our tests are running as expected.
>
> **[3:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=192)** Nice.
>
> **[3:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-creating-a-compound-component-system?u=76281980&t=193)** So we've built out a class that's going to handle this toggle, and then we can display those elements within our component.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (3), function (2), static (1), class. (1)
> **UI Navigation:** toggle (7), click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Enhanced Components

#### Working with fragments
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=0)** - [Instructor] When we're working on a React project, it's really common to use a component to return multiple elements.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=6)** Maybe you're returning a collection of list items, or maybe some rows for a table, but with some of the rendering rules surrounding React, this may mean adding a ton of additional nodes to the DOM.
>
> **[0:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=18)** We have some CSS set up for you here in the style tag.
>
> **[0:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=22)** And next let's go ahead and create an app component.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=28)** So we'll make a function component to make this happen here on line 22.
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=32)** We'll say const App, this should return a header.
>
> **[0:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=41)** Within the header we want to return a nav.
>
> **[0:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=46)** And then the nav element should have four links, so, a href, a slash, and this is our Home route, and we'll just copy and paste these so that we have four nice links.
>
> **[1:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=65)** So this one would be called About, Services, and Contact.
>
> **[1:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=77)** Okay, so now that this is created, we will add this to the DOM by using ReactDOM.render.
>
> **[1:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=86)** This should render the App component right there to the root.
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=94)** So document.getElementById, root.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=101)** Okay, so now that this is created, let's give that a save and take a look at it in the browser.
>
> **[1:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=108)** We should see the Home, About, Services, and Contact links up here in the header.
>
> **[1:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=113)** Now there might be a point where we want to break this component apart and render just the links in their own component.
>
> **[2:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=120)** So let's go ahead and do this.
>
> **[2:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=121)** We're going to create another component, and this one will be called NavItems.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=129)** Now NavItems will be another function component.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=137)** Now NavItems will be a function component that simply returns these links.
>
> **[2:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=142)** So we're gonna paste this here, and then we should replace the links with the actual component name.
>
> **[2:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=154)** So we'll say NavItems should render in the nav.
>
> **[2:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=158)** Now let's take a look at this in the browser.
>
> **[2:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=161)** Alright, well it looks like there's some sort of a problem here.
>
> **[2:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=163)** I'm gonna open our console, and we should see that adjacent JSX elements must be wrapped in an enclosing tag.
>
> **[2:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=171)** Now this is an error that you'll see quite a bit when working on React apps, and the popular way to fix it is we're just gonna wrap everything in an enclosing tag.
>
> **[3:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=181)** So instead of just rendering these anchor tags here, we're going to render a div that wraps around them.
>
> **[3:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=194)** Now if I refresh this, we see that the content is rendering, we no longer have an error in the console, but a couple things are wrong here.
>
> **[3:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=204)** So, first of all we have a nav element that has a div as a child, and then a bunch of a tags, so our nav item is no longer semantically correct.
>
> **[3:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=215)** And obviously what's worse here is that our CSS is broken, and it looks really bad.
>
> **[3:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=220)** So to get around this, we could add a fragment.
>
> **[3:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=223)** A React fragment is going to allow us to wrap our a tags in an enclosing fragment without adding anything extra to the DOM.
>
> **[3:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=233)** So let's just replace the div with React.Fragment.
>
> **[3:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=239)** Now if I give that a save and refresh, we should see that our CSS is back.
>
> **[4:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=246)** If we look at our React developer tools, we should see that our app wraps around the header, nav, and NavItems.
>
> **[4:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=256)** There's no extra div, or section, or anything like this.
>
> **[4:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=260)** We're just rendering those elements because we can get away with it because of this fragment.
>
> **[4:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=267)** Another option that you'll see is we can replace React.Fragment with a short syntax.
>
> **[4:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=272)** So, we can get rid of everything that's inside of this tag and just use these brackets.
>
> **[4:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=280)** And if we go back, we should see that this is still working.
>
> **[4:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=284)** The same thing is happening.
>
> **[4:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=286)** So this is just a shorthand syntax for a React fragment.
>
> **[4:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=289)** You don't necessarily need to use that, but that's always at your disposal.
>
> **[4:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=294)** Now I should note that since we're using Babel 7, this is gonna work okay.
>
> **[4:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=299)** If you're using some other tools, this syntax may not work, but it'll alert you to that right away in your console if it doesn't, and then you can always revert back to React fragment.
>
> **[5:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-fragments?u=76281980&t=310)** React fragments are fantastic when you have a few elements to inject into a component that may be siblings, but when you don't want to add extra elements to the DOM.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), this. (2), this, (2), const (1)
> **Env Vars:** dom (4), css (3), jsx (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** getelementbyid (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Using keyed fragments
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=0)** - [Instructor] In the last video we looked at fragments and how these can be used to return multiple elements.
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=5)** Let's take a look at another example where we'll render items from an array.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=9)** So here's some data for a list of skiing and snowboarding related definitions.
>
> **[0:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=15)** We're going to pass this data down to the app component via props.
>
> **[0:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=19)** So here in line 42 we'll just pass this to the app component as props, skiDictionary equals skiDictionary.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=29)** Then we'll put together our component.
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=32)** We're going to create a description list, a description list is an HTML tag that describes a list of terms.
>
> **[0:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=37)** So let's go ahead and adjust our app component, we'll no longer be rendering this header, but instead we're going to take in props and we're going to return the following, so let's get rid of these tags.
>
> **[0:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=56)** We're going to return a definition list DL and the definition list should wrap around a mapping of props, so we'll say props.skiDictionary.map.
>
> **[1:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=71)** We're going to take in a term and for each one of these terms we should return two tags, so DT again the term itself, so we will use term.name pulling from that data and secondly we'll return DD term definition.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=96)** Okay once we save this we should refresh and we'll see that familiar error again that we're trying to return adjacent JSX elements and we need to make some adjustments.
>
> **[1:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=110)** So here's another place where fragments come in handy.
>
> **[1:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=114)** Instead of returning these DT and DD items we'll just return a fragment, and you can use react.fragment or that shortened syntax like I'm using here.
>
> **[2:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=126)** And as simple as that we should be able to see that this is working, awesome.
>
> **[2:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=132)** Now we still do have one more warning that we want to clear, the dreaded key warning this one is a pretty simple one to fix so let's go ahead and do it.
>
> **[2:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=141)** We're going to add this directly to the fragment.
>
> **[2:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=144)** Now a little bit of a tricky thing here is I can't add it to the shortened syntax I need to add it to react.fragment.
>
> **[2:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=152)** So that's something that we can handle we'll say key term.id alright so we can add react.fragment as the closing tag and we should see if we take a look at our console again that our warning has been cleared, excellent.
>
> **[2:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-keyed-fragments?u=76281980&t=172)** So the rule about adding keys to dynamic children helps react render intelligently and a react fragment saves us from adding unnecessary tags to the (mumbles).

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2)
> **Code Identifiers:** skidictionary (3)
> **Warnings:** warning (3)
> **Env Vars:** html (1), jsx (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### New component lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=0)** - [Instructor] Whenever you create a React component, there are several life cycle methods that you can use to execute code at particular moments in the life span of a component.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=9)** Now if you have the life cycle methods that we have used in the past will be deprecated in React 17.
>
> **[0:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=15)** For that reason, I'm just going to talk about the ones that will work in the foreseeable future and some new ones that were introduced with React 16.
>
> **[0:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=23)** The most recognizable and the most used method of the component life cycle is Render.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=28)** Render is called when the component is first mounted, but it's also called when new props come in or when Set State is called.
>
> **[0:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=35)** The mounting life cycle also includes the following: we have the constructor, this is called before the component is mounted and is a place to initialize state.
>
> **[0:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=46)** We also have getDerivedStateFromProps in the mounting life cycle.
>
> **[0:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=51)** This is invoked right after the component is constructed.
>
> **[0:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=55)** And then finally we have component DidMount, which is called right after the component is mounted.
>
> **[1:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=61)** This is a really good place to load data or make network requests.
>
> **[1:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=66)** We also have the UpdatingLifeCycle.
>
> **[1:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=68)** This includes the following: now getDerivedStateFromProps we saw in the mounting life cycle, but it also fires when the component receives new props.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=79)** shouldComponentUpdate if this returns false then Render and componentDidUpdate won't be called.
>
> **[1:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=85)** We're gonna take a closer look at this one in particular in the next lesson.
>
> **[1:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=89)** We also have render as part of the UpdatingLifeCycle also when the data changes, we call Render again.
>
> **[1:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=95)** getSnapshotBeForeUpdate is going to be called right before the most recently rendered output is rendered.
>
> **[1:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=102)** Here we can't read the dom but we can capture a value for use later and then finally componentDidUpdate is invoked right after the update, so this can be used to operate on the dom once that update has occurred.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=117)** Now the UnmountingLifeCycle only has one method on it and that is componentWillUnmount.
>
> **[2:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=124)** This is invoked right before the component is unmounted and it's a great time to do some cleanup.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=129)** You can cancel at request of the network, reset timers and all those types of clean up tasks.
>
> **[2:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=136)** So the react component life cycle has really undergone some change over time.
>
> **[2:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/new-component-lifecycle?u=76281980&t=140)** We have new methods to make use of and all of these have to do with changes to Reacts handling of asynchronous information.

> [!info]- Semantic Content
>
> **Code Identifiers:** getderivedstatefromprops (2), componentdidupdate (2), shouldcomponentupdate (1), getsnapshotbeforeupdate (1), componentwillunmount (1)
> **Definitions:** is called (4), is a  (2)
> **CLI Commands:** make (2)
> **Versions:** react 17 (1), react 16 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Solution: Implementing a fragment-based layout
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=0)** - [Instructor] Fragments are these magical little containers that we can use to avoid having to add unnecessary elements to the dom.
>
> **[0:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=13)** So we have our class for notifications here.
>
> **[0:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=16)** We've already set some initial state properties.
>
> **[0:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=20)** Now we need to handle updating with componentDidMount and ComponentDidUpdate.
>
> **[0:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=27)** So here in componentDidMount.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=29)** So once the component is added to the dom, we're going to call this.setState and then we're going to say previous and return this new object that says updates previous.updates plus one.
>
> **[0:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=53)** Okay.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=54)** From here we can add our ComponentDidUpdate function.
>
> **[0:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=59)** So once this occurs inside of the component lifecycle, we're going to say, if prevState.notifications
>
> **[1:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=73)** is not equal to this.state.notifications, then we want to call this.setState.
>
> **[1:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=88)** And then we'll return updates previous updates plus one.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=96)** Nice.
>
> **[1:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=98)** From here we need to create this little method called handle add.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=103)** This is going to create a new note and here we'll say notification this.state.count, this.setState should take in a previous value and we'll say notifications, push in any previous notifications and the new note.
>
> **[2:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=138)** And then we'll also change the count while we're at it.
>
> **[2:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=141)** Previous count plus one.
>
> **[2:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=145)** Alright.
>
> **[2:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=146)** Now what we can do inside of our render, this is where we get to make the magic happen where we're actually using the fragment.
>
> **[2:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=155)** So in the unordered list we're going to say this.state.notifications.map note an index.
>
> **[2:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=173)** Then we're going to add a list item here.
>
> **[2:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=175)** So we'll say li.
>
> **[2:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=178)** And then inside of the list item, let's go ahead and add our note.
>
> **[3:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=186)** So it looks like we're using one too many sets of curly braces there.
>
> **[3:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=193)** That looks slightly better, but we also need to close that.
>
> **[3:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=197)** Excellent.
>
> **[3:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=199)** So now if we test our code, this is telling us that we need a unique key.
>
> **[3:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=205)** So for each one of these list items, let's go ahead and create that.
>
> **[3:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=209)** We're going to set the key as index.
>
> **[3:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=213)** So let's test the code again, and it looks like everything is passing.
>
> **[3:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=220)** Now if you want to avoid the div here, you can remove that and instead use the shorthand for our React fragment here.
>
> **[3:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=234)** And it looks like all of our tests are now passing.
>
> **[3:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=238)** So again, this fragment helps us to not have to use wrapping divs where we don't actually need them.
>
> **[4:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=245)** So if you don't need it, you can use a fragment.
>
> **[4:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-implementing-a-fragment-based-layout?u=76281980&t=248)** And then we're using the component lifecycle to set our state and make sure that we're displaying the correct number of notifications.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (6), let (3), function (1)
> **Code Identifiers:** setstate (3), componentdidmount (2), prevstate (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. React Patterns

#### Understanding the context API
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=0)** - [Instructor] In React applications we create nested component trees to compose our user interfaces.
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=5)** In early React apps sometimes you'd see state everywhere.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=9)** This made it really easy to get some data quickly, but having state all over your app made it difficult to keep those values in sync.
>
> **[0:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=17)** The common ideology then became, hey, instead of putting state everywhere, let's only put it at the root.
>
> **[0:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=23)** Then we can pass down state data to components via props.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=29)** So this starts out fairly straightforward.
>
> **[0:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=31)** We can create a parent component that renders a child component.
>
> **[0:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=35)** Let's go ahead and do this.
>
> **[0:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=36)** So here on line 11 I'm going to create a component called resort.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=45)** This is gonna have some state, which is just the name of the resort.
>
> **[0:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=55)** And then we're gonna render something.
>
> **[0:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=57)** So let's render a div that just displays that name.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=69)** All right and then we're going to go ahead and render this resort.
>
> **[1:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=75)** Perfect.
>
> **[1:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=77)** Next up let's create that child component.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=79)** So this is gonna be called Lift.
>
> **[1:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=83)** And this is just a stateless component that will render a div.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=90)** This div, let's just say trail here.
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=94)** We're also gonna create an additional child component.
>
> **[1:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=98)** You might guess what it is based on what I just typed.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=101)** So let's create a trail component.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=103)** This is gonna be called const Trail and we'll take in some props, and then we should render the following.
>
> **[1:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=119)** Okay.
>
> **[2:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=121)** So at this point what we wanna do is here in our Lift, let's render the Trail component.
>
> **[2:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=130)** And we're gonna pass down the properties here so we'll say props.name.
>
> **[2:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=139)** We also want to, instead of rendering this.state.name, we're gonna render the actual Lift and we'll pass down this.state.name for that resort name.
>
> **[2:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=153)** Okay.
>
> **[2:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=154)** So this should be okay.
>
> **[2:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=156)** We should be able to see this in our browser.
>
> **[2:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=162)** Cool, so we have Snowtooth Montain.
>
> **[2:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=164)** If we take a look at our React developer tools, we should see our Resort wrapping around our Lift which wraps our trail.
>
> **[2:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=173)** We have to explicitly pass down props from one component to another, all the way up and down the tree.
>
> **[2:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=178)** So Resort passes to Lift, passes to Trail.
>
> **[3:02](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=182)** Now passing data from one component to another all the way up and down the tree can sometimes be time consuming.
>
> **[3:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=189)** It's sort of like taking a train with a lot of stops from San Francisco to DC.
>
> **[3:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=194)** Popular state management solutions like Redux and MobEx have emerged to solve these problems.
>
> **[3:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=200)** But in React 16.3 the team announced a new context API.
>
> **[3:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=204)** Context is how we pass data down to child components without having to pass it all the way down the tree.
>
> **[3:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=211)** This is sort of like taking a plain old way across the country.
>
> **[3:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=215)** When we create context these values are accessible all the way down the tree.
>
> **[3:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/understanding-the-context-api?u=76281980&t=219)** So in the next video I'll show you how we can adjust our little app to use context.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (6), this. (3), const (1)
> **Env Vars:** api (1)
> **Versions:** react 16 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using context
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=0)** - [Instructor] Let's take a closer look at how we can use context to pass data down to our child components.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=6)** The first step is we're going to create a context value, which will be called Context, and this is going to use a function called createContext from the react package.
>
> **[0:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=19)** Next, we're gonna create a provider.
>
> **[0:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=21)** So, the provider is gonna be responsible for passing data down to the children.
>
> **[0:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=26)** So class Provider extends React.Component.
>
> **[0:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=34)** Now, instead of using state in the resort component, we're gonna move this.
>
> **[0:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=38)** Let's just cut and paste this into the provider, and this will set up our initial state that can be passed down.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=45)** Next, we wanna render something.
>
> **[0:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=47)** What we'll render in this case is the context provider.
>
> **[0:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=53)** This is a tag Context.Provider that will wrap around this.props.children.
>
> **[1:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=60)** So, Context.Provider and then any children will be displayed right here.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=67)** Okay.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=69)** Now the thing I'm missing here on line 19 is I need to pass in a value.
>
> **[1:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=74)** So this value is going to be what we pass down to these props children.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=79)** We're gonna use state is this.state.
>
> **[1:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=84)** This means that this information will be passed down.
>
> **[1:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=88)** Since we've done this, we can make a few adjustments to our other components.
>
> **[1:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=91)** Instead of rendering props.name, we'll get rid of that more on the trail component in a second.
>
> **[1:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=97)** Let's also get rid of the passing of the name to the trail and the state to the name.
>
> **[1:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=104)** Okay.
>
> **[1:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=106)** From here, once I have created the provider, I'm gonna need to wrap our div here in the resort in the provider tag.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=117)** So provider is going to provide all this information.
>
> **[2:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=124)** Then we can give that a little tab over.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=129)** Okay.
>
> **[2:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=130)** This is gonna be responsible for passing that data, and now I need to consume it with the trail component.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=137)** In the trail component we already have a div.
>
> **[2:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=140)** This div is going to wrap around Context.Consumer.
>
> **[2:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=146)** This component will consume the data from the provider, and using a pattern called render props, which we'll talk about more in a later video, we're going to actually render a function as a child here.
>
> **[2:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=162)** This is gonna take in whatever the context is and it's going to return some UI.
>
> **[2:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=168)** What it will return in this case is just a paragraph that'll say, this is the context, and we'll render context.state.name.
>
> **[3:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=180)** Okay.
>
> **[3:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=181)** Let's give our file a save and we'll check it out in the browser.
>
> **[3:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=188)** Awesome.
>
> **[3:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=189)** It looks like our Snowtooth Mountain context is being rendered, meaning that this can be used in absolutely any component within the tree.
>
> **[3:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=198)** As long as our provider is wrapping around the appropriate text that we'll need to render things to, we can pass it all the way down from lift and then to trail.
>
> **[3:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=210)** This is how we start to work with context in our applications.
>
> **[3:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=214)** We can pass down data without having to do so explicitly in all of these components.
>
> **[3:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-context?u=76281980&t=220)** In the next video, I'll show you how to set state using context.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), this. (3), function (2), extends (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** createcontext (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Referencing context in stateless functional components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=0)** - [Narrator] In the last lesson, we looked at how the provider can pass data to a child component that uses the consumer.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=6)** In this video, we'll take a look at how to change state using the context API.
>
> **[0:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=12)** The first place I want to start is I want to add another state variable.
>
> **[0:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=16)** So, we're gonna set up a value called status, which we'll set to OPEN.
>
> **[0:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=22)** So this will mean the resort is open, closed, or perhaps on hold.
>
> **[0:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=27)** The next step is I want to adjust the trail component a little bit.
>
> **[0:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=31)** So, right now, we are rendering our consumer, and then we render this one paragraph tag, let's actually render a little bit more here.
>
> **[0:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=39)** So, let's render a div, and this div is going to wrap around this paragraph.
>
> **[0:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=47)** Now, we're displaying the context here, let's also display the status, so we'll say the resort is context.state.status,
>
> **[1:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=65)** and then finally, we want to add a button.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=69)** So, here's where things get interesting.
>
> **[1:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=70)** The button is going to be responsible for taking the status and changing it to closed.
>
> **[1:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=76)** So, our button will be called Close Resort, and we're gonna add an onClick method here, which will say onClick equals, something we haven't created yet, but we will in just a second, context.changeStatus.
>
> **[1:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=93)** Okay, so from here, what we can do is actually adjust these values that are in our context provider.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=101)** So, the first step I'll take here, is let's hit a return on our values, and we're gonna add one more of these.
>
> **[1:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=109)** So, we'll add a changeStatus method.
>
> **[1:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=112)** This is gonna be a function that returns this.setState, and then we're gonna send a state object to this, with status.CLOSED as the value.
>
> **[2:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=126)** So, instead of just being able to just pass these variables, we can also pass functions as values.
>
> **[2:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=132)** And then, we can use them to change the state.
>
> **[2:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=136)** So, let's give this a save.
>
> **[2:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=138)** And, we'll take a look at it in the browser.
>
> **[2:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=142)** And we should see that the resort is OPEN, if I click the Close Resort button, it should change it to CLOSED.
>
> **[2:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/referencing-context-in-stateless-functional-components?u=76281980&t=149)** So, this is just a simple example of how we can use the context API to set state.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), finally, (1), function (1), this. (1)
> **Env Vars:** api (2), open (2), closed (2)
> **Code Identifiers:** onclick (2), changestatus (2), setstate (1)
> **Cross-References:** in the last (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Working with higher-order components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=0)** - [Instructor] A higher order component is a function that takes in a component and returns a new component.
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=5)** It provides a way to share data between components through composition.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=9)** The place I want to get started with this is to get rid of all of our code from the previous lesson and we're going to replace it with our higher order component.
>
> **[0:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=20)** Now the component that I wanna render here is gonna be called random users.
>
> **[0:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=27)** I'll call it RandomMeUsers, and here we're going to start to create our people list.
>
> **[0:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=36)** So the RandomMeUsers is going to take in some data and display it.
>
> **[0:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=41)** And the display component is going to be called PeopleList.
>
> **[0:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=46)** So const PeopleList should take in some data.
>
> **[0:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=52)** From here we want to render an ordered list.
>
> **[0:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=55)** So the PeopleList is gonna be a pretty textbook presentation component.
>
> **[0:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=59)** It's just gonna render some tags and it's going to load some data.
>
> **[1:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=63)** So the data is gonna come from data.results.map.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=67)** When we map over the results we're going to pass in person and i and these should yield our data for us.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=79)** Let's go ahead and destructure first and last from person.name.
>
> **[1:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=85)** We also are going to return list items for each of these.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=92)** Now each list item should have a key of i, and should display first and last.
>
> **[1:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=103)** Okay.
>
> **[1:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=104)** So from here, now that we've created our PeopleList we can set about to create our higher order component.
>
> **[1:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=111)** So again, PeopleList is just the presentation component, and it's gonna get some data from another component called DataComponent.
>
> **[1:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=119)** So DataComponent is goin to take in ComposedComponent and the URL from which we will get our data.
>
> **[2:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=127)** And then this should render actually a class.
>
> **[2:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=130)** So this pattern is sort of interesting.
>
> **[2:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=132)** We're nesting a component inside of another one.
>
> **[2:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=135)** So we're returning a DataComponent, which will extend React.Component.
>
> **[2:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=143)** Now let's take us through a few steps here, so step one is we're gonna create a constructor.
>
> **[2:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=152)** Next we're going to stub out componentDidMount.
>
> **[2:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=159)** And then finally we will use render.
>
> **[2:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=163)** So in the constructor we're going to pass props.
>
> **[2:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=166)** We'll also call super and then we'll set up our state.
>
> **[2:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=171)** So this.state = and we're going to use data.
>
> **[2:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=179)** We'll instantiate this with just an empty array, and then we're going to create two variables related to loading.
>
> **[3:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=186)** So we'll say loading is false when we load the page.
>
> **[3:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=191)** And then loaded is false.
>
> **[3:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=195)** Loading just means that loading is in progress.
>
> **[3:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=198)** Loaded just means that the data is loaded.
>
> **[3:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=202)** So let's adjust our render method a bit.
>
> **[3:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=206)** Let's return a div.
>
> **[3:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=213)** Now inside of this div let's add a jsx expression.
>
> **[3:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=216)** We're gonna say this.state.loaded.
>
> **[3:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=220)** Now if this is true then we're going to render a ComposedComponent.
>
> **[3:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=224)** So we'll say ComposedComponent, and we're gonna push in all the values from state using the spread operator this.state.
>
> **[3:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=235)** We'll also push in all the props so ... Spread operator again, this.props.
>
> **[4:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=241)** And then we wanna make sure that we close our tag in the appropriate spot.
>
> **[4:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=246)** Now the alternative to this is going to be div
>
> **[4:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=255)** loading.
>
> **[4:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=258)** So if we have all of our data then we'll load the ComposedComponent.
>
> **[4:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=263)** If we don't then we'll just load a div that says loading.
>
> **[4:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=268)** All right cool.
>
> **[4:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=269)** The final step I wanna take here is we need to actually load the data, that's pretty important.
>
> **[4:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=275)** So we're using componentdidMount here.
>
> **[4:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=277)** ComponentWillMount is typically where I would have loaded the data in past versions of React, but with new async behavior, it's best to load data in componentDidMount.
>
> **[4:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=289)** So the first thing we're gonna to is call this.setState.
>
> **[4:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=294)** We're gonna set the loading to true.
>
> **[4:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=299)** We then are gonna use fetch.
>
> **[5:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=301)** So fetch is a way that we can make a request for some data.
>
> **[5:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=306)** So fetch is a promise.
>
> **[5:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=307)** We will use .then and we'll take the response and we'll convert it to JSON.
>
> **[5:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=315)** And then finally we want to use another then method to take this data and use it to set state.
>
> **[5:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=321)** So, what we'll do here is we'll use this.setState to reset a few of these values.
>
> **[5:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=331)** First loaded is going to be set to true.
>
> **[5:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=335)** We're gonna reset loading to false.
>
> **[5:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=339)** And then we're going to provide the data as our third variable here.
>
> **[5:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=343)** Okay cool.
>
> **[5:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=344)** So we're almost there.
>
> **[5:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=346)** We have created our component.
>
> **[5:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=347)** It's a higher order component.
>
> **[5:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=349)** Remember that this component takes in a ComposedComponent and a URL.
>
> **[5:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=354)** So when we need to use this let's go ahead and do so here on line 54.
>
> **[6:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=361)** And 54 is going to actually use the higher order component itself.
>
> **[6:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=366)** So here's where it gets interesting.
>
> **[6:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=368)** RandomMeUsers.
>
> **[6:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=370)** We're gonna render the DataComponent, and the DataComponent is gonna take in two things, right?
>
> **[6:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=376)** We're gonna take in the ComposedComponent and the URL.
>
> **[6:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=379)** So what's the ComposedComponent?
>
> **[6:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=381)** Well, it's the PeopleList.
>
> **[6:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=383)** So our presentation component here should be passed in first, PeopleList, and then we need to pass in the URL.
>
> **[6:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=392)** So let's hit enter so we can actually see this.
>
> **[6:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=398)** Our URL is going to pull from this randomuser website, randomuser.me/api?results=10.
>
> **[6:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=411)** Okay, so let's see how this comes together.
>
> **[6:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=415)** We're gonna look at it in our browser.
>
> **[7:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=420)** We should see that the loading state happens really quickly at the beginning and then we load our random users from that source.
>
> **[7:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=428)** So remember, a higher order component is a function that takes in a component and returns a new component.
>
> **[7:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=434)** So that's what we're doing here.
>
> **[7:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=435)** Our DataComponent takes in the people list and then we pass in the URL which will provide data to it.
>
> **[7:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-higher-order-components?u=76281980&t=442)** So the higher order component is something that you'll see in a lot of react applications, and this pattern is something that you can use all over your apps.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (7), pass (4), function (2), const (1)
> **Env Vars:** url (6), json (1)
> **Definitions:** is a  (4), means that (2)
> **Code Identifiers:** componentdidmount (3), setstate (2)
> **CLI Commands:** make (2)
> **Best Practices:** it's best to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Working with render props
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=0)** - [Narrator] A popular technique when rendering React components is to use a pattern called render props.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=6)** Now we got a little sneak preview of this when we were looking at the context API.
>
> **[0:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=10)** A render prop is a way to share code between React components using a function property.
>
> **[0:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=17)** The property defines what is rendered and the component just injects it into the UI.
>
> **[0:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=22)** Now if that sounds a little weird, that's totally OK.
>
> **[0:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=26)** Let's take a look at it to understand a bit more detail.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=29)** You'll notice that we're starting out with this display encouragement component being rendered let's go ahead and create it.
>
> **[0:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=36)** So we'll first create that display encouragement component and we're just gonna stub this out for now.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=45)** This is going to return some sort of something.
>
> **[0:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=50)** Alright that's a little vague, right?
>
> **[0:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=52)** But here's what it'll actually return.
>
> **[0:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=55)** It's going to return this component called encouragement.
>
> **[1:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=60)** This is going to be another one of these stateless components.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=67)** This one should return a div and then we're gonna render some data in that div using a render prop.
>
> **[1:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=75)** Now the first step we need to take here is we're going to render the encouragement component and we're gonna pass down a property called render.
>
> **[1:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=84)** Render is going to use this value pep talk to render in h1.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=92)** So here we're gonna just return a simple h1 that uses the value pep talk.
>
> **[1:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=100)** OK, so how do we access this in the encouragement component?
>
> **[1:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=104)** Well, we're gonna access it via render so we will de-structure render from props and we're going to actually call the render function here in this JSX expression within the div and when we call it we're gonna send the value so we'll say pep talk is equal to message.
>
> **[2:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=124)** Now message we haven't defined yet let's go ahead and do that this is literally just gonna be a string that says, you got this, so, this will be our message of encouragement for working with render props.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=137)** Alright so let's give that a save and we'll take a look at it in the browser.
>
> **[2:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=143)** Alright so let's take a look at why that might be, oh, we are not closing our encouragement tag, that's something that we should probably do so let's make sure that we close that encouragement tag on line 19.
>
> **[2:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=156)** So back to our browser, we should see you got this, everything is working.
>
> **[2:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=161)** So alternatively you could do this without ever using the render and you could just render the function as a child.
>
> **[2:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=168)** So let me show you what I mean by that.
>
> **[2:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=170)** Now the first thing I'm gonna do is I'll actually get rid of all of this render prop sending we're also going to get rid of everything in the render method, we're going to get rid of passing render, and instead let's go ahead and use message, now if there's a message then we'll return the message, if not, then we'll return null, and just for the sake of styling let's wrap this in an h1.
>
> **[3:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=198)** We'll also change our message just to make sure that this is working, so we'll say, you can do anything.
>
> **[3:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=205)** More encouragement but also just to prove that this is working.
>
> **[3:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=210)** So back to the browser you should see that this is rendering as expected.
>
> **[3:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=214)** So a couple different methods to do kinda the same thing but you can choose whatever works best for your project and whatever syntax you most enjoy.
>
> **[3:43](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=223)** Render props are a pretty cool pattern gaining a lot of popularity in React.
>
> **[3:48](https://www.linkedin.com/learning/react-components-context-and-accessibility/working-with-render-props?u=76281980&t=228)** These allow us to predictably load dynamic data into our React components.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3), this, (2), return. (1), pass (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (1), jsx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Render props in the wild: React Apollo
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=0)** - [Announcer] As we saw in the last video render props are a great way to load dynamic data into React applications.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=6)** Not only can you use render props in your own apps, but you'll probably encounter then when working with popular libraries in the eco-system.
>
> **[0:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=14)** For example Apollo Client an amazing tool for working with GraphQL, has something called React Apollo which provides bindings between your GraphQL service and your React components.
>
> **[0:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=26)** You'll notice that we use the query component to display the result of the rates query and map the results to React elements.
>
> **[0:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=34)** You'll also notice rendered props being used in the React router as well as downshift.
>
> **[0:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/render-props-in-the-wild-react-apollo?u=76281980&t=41)** So I definitely encourage you to experiment with render props in your own applications.

> [!info]- Semantic Content
>
> **Cross-References:** as we saw (1), in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [announcer] (1)

#### Solution: Building a context-based theme system
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=0)** - [Narrator] Now it's time to build the thing that every developer cares about more than anything, which is a way to set a different theme.
>
> **[0:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=13)** So we can set light mode and dark mode for our project here.
>
> **[0:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=20)** We start by creating the theme context with react.createcontext.
>
> **[0:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=24)** Then we're creating a class which is going to help us to provide that data to anything that lives inside of it.
>
> **[0:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=34)** So we need to create a toggle that's going to go back and forth between light and dark.
>
> **[0:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=40)** This is going to call set state.
>
> **[0:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=42)** We'll take in the previous state and then we will return an object.
>
> **[0:50](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=50)** Here we'll say theme is previous state.theme.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=54)** We'll set that equal to if this happens to be light, then we're going to set it to dark, otherwise we'll set it to light.
>
> **[1:07](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=67)** All right, so now inside of our render, we have the value and we're wrapping the props.children with the theme context provider.
>
> **[1:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=83)** So from here we're going to create a theme consumer, which is going to use the render props pattern.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=90)** We're going to call the render function with the context value.
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=94)** So that'll look like this.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=96)** We'll use the set of curly braces that are there.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=101)** We'll pass context, and then we'll say render context.
>
> **[1:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=109)** Now from here with our theme provider, we have our theme consumer.
>
> **[1:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=115)** This is the render function that's going to be called so that all of that UI will be written under the right conditions.
>
> **[2:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=123)** So let's give it a test.
>
> **[2:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=129)** And we should see that all of our tests are being passed.
>
> **[2:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=132)** We're going to toggle to the correct theme based on the initial state.
>
> **[2:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=137)** And then the render prop is also going to receive that correct context value.
>
> **[2:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-a-context-based-theme-system?u=76281980&t=143)** Nice.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this. (1), pass (1), let (1)
> **UI Navigation:** toggle (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. React Accessibility

#### Web accessibility overview
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=0)** - [Instructor] One of the most important yet overlooked pieces of putting together a web application is accessibility.
>
> **[0:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=6)** Accessibility means that we'll create websites to be used by anyone and everyone.
>
> **[0:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=12)** As developers, it's not someone else's job to make the web accessible for everyone, it's our job.
>
> **[0:17](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=17)** When working on projects, we should always consider how the choices we make with our user interfaces might be exclusionary.
>
> **[0:24](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=24)** If you have a brick-and-mortar store, the building must be accessible.
>
> **[0:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=28)** If you have an online store, the same is true.
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=32)** Not only is this the right thing to do, but, in many countries, accessibility is the law.
>
> **[0:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=37)** As Section 508, the U.S. government's accessibility program states, "Agencies must give disabled employees "and members of the public access to information "that is comparable to access available to others."
>
> **[0:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=49)** Now, this is a guideline in place for government websites, but this should extend to your own websites.
>
> **[0:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=57)** When creating an accessible site, we should keep a few categories in mind.
>
> **[1:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=61)** We should think about visual impairments such as blindness, color blindness, and more.
>
> **[1:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=66)** We should think about hearing impairments.
>
> **[1:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=68)** We should think about motor impairments.
>
> **[1:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=70)** This could mean a traumatic injury or, perhaps, tremors.
>
> **[1:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=73)** And then, finally, learning impairments, which include memory loss, comprehension, and attention.
>
> **[1:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=81)** One of the great things about the React team is that they really care about making React apps accessibly to wide audiences.
>
> **[1:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=88)** I encourage you to check out the documentation to learn more about their approach.
>
> **[1:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/web-accessibility-overview?u=76281980&t=92)** In the next videos, I'm going to be digging in to some of the accessibility tools and techniques that we should keep in mind when building React apps.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** public (1), finally, (1)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Viewing React accessibility warnings
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=0)** - [Narrator] Create React App is an amazing tool for building React applications.
>
> **[0:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=4)** With a simple command, you can generate an entire React project.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=8)** Built into that project, you'll also find a linking tool that will help us check our code for accessibility violations.
>
> **[0:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=15)** To get started with this, let's make sure that we're in Chapter Five, 05_02, start, and we're going to install Create React App.
>
> **[0:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=26)** So, I'm going to run sudo npm install -g create-react-app.
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=32)** I'll enter my password.
>
> **[0:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=35)** And if you're on a PC, you can just run your command prompt as an administrator to the same thing.
>
> **[0:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=40)** Now the next step, now that this is installed globally, is that I can run create-react-app, and then give my name a project.
>
> **[0:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=49)** So, I'll call it a11y.
>
> **[0:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=52)** So, a11y is just a shorthand for accessibility there are 11 letters between the a and y in accessibility, so therefore we get a11y.
>
> **[1:04](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=64)** So, at this point, we can move into that folder, so I can say cd a11y, and then run npm start.
>
> **[1:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=73)** And this should open up my project in a new browser.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=79)** So there we go, we have our app running on local host 3000.
>
> **[1:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=83)** Now the next step that we wanna take is we wanna actually pull open our Source folder, inside of Start, and inside of a11y, and we're gonna make some adjustments here to our app.js file.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=96)** So the first thing I wanna do, is we're gonna remove the import of the logo.
>
> **[1:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=101)** We also are going to make adjustments to our code here in the app, so let's just return our parentheses right now, and we're gonna add some code here.
>
> **[1:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=113)** So, I'm gonna add a div, inside of my div I will add a tag with an href of #home and then I'm gonna say that this is going to close and we'll say Cool Link.
>
> **[2:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=133)** Finally, we will add an image, with a source of /img/is-an-image.jpg. Great name.
>
> **[2:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=145)** And finally, we'll close that image tag.
>
> **[2:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=148)** So, at this point, we should be able to move back our browser, and we see that the image is broken, I'm not too worried about that, and we have Cool Link, but we're noticing an accessibility warning here in the console.
>
> **[2:41](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=161)** So, what it says is that image elements must have an alt prop, either with meaningful text or an empty string for decorative images.
>
> **[2:49](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=169)** So, if this image does convey some sort of meaning, if it's important, then we're going to give our image some alt-text.
>
> **[2:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=177)** If it's just a decorative image that doesn't really have an effect on the meaning on the page, we can just leave an empty alt tag, so an empty string here.
>
> **[3:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=186)** So, as soon as I do that, we're going to see that all of the warnings have been removed.
>
> **[3:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=192)** So, we're seeing this because Create React App is configured with a fantastic tool called ESLint-plugin-jsx-a11y.
>
> **[3:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=201)** This linting tool will watch for and report on any accessibility issues with your code.
>
> **[3:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=206)** This tool will raise warnings for a range of accessibility violations, so let's say we removed the link text from our anchor tag, we're gonna see immediately that anchors must have content, and the content must be accessible by a screen reader.
>
> **[3:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=222)** So, even though a lot of accessibility testing should happen manually, there's a lot of built-in tools that help us find common bugs like our image, and with our link.
>
> **[3:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/viewing-react-accessibility-warnings?u=76281980&t=235)** You can check out the documentation for ESLink-jsx-a11y to learn more about all of these warnings and the package itself.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2), npm (2), sudo (1), cd (1)
> **Code Keywords:** let (3), finally, (2), this, (1), raise (1)
> **Prerequisites:** install (2)
> **File Paths:** app.js (1)
> **Documentation:** the documentation (1)
> **Tools:** command prompt (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)

#### Using semantic HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=0)** - [Narrator] When HTML5 was released years ago, it came with a new set of tags that could be used to describe dom elements more semantically.
>
> **[0:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=8)** Instead of creating user interfaces with a collection of divs, new tags were introduced to ref common content locks.
>
> **[0:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=16)** After analyzing the most common used classes and IDs, a new list of tags was assembled.
>
> **[0:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=21)** For example, a div with a class of header would now be header, and a div with an ID of footer could now just be a footer.
>
> **[0:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=31)** Here's a collection of many of these new semantic tags.
>
> **[0:35](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=35)** So again, header represents some introductory content, a nav element would contain a list of links to other pages or resources, a section might indicate a generic section of the document and could include a bunch of article tags to indicate a self-contained composition.
>
> **[0:54](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=54)** And then finally, we have aside and the footer.
>
> **[0:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=57)** Aside containing some tangentially related content, things like sidebars, pull quotes, etc.
>
> **[1:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=63)** And then there's a footer.
>
> **[1:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=66)** Now when I teach with this concept, the popular question always come up: does this mean I can't use divs anymore?
>
> **[1:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=73)** Of course you can still use divs, but if you're using a div for a tag that might fit into one these semantic categories, it's usually smart to use a semantic tag instead.
>
> **[1:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=82)** And the reason for that is because semantic markup makes it easier to select elements with CSS or JavaScript.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=90)** There are more descriptive meanings for these tags.
>
> **[1:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=93)** You can search more easily.
>
> **[1:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=96)** And finally, and very significantly, there's improved accessibility.
>
> **[1:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=102)** So let's take a look at how this might play out in our code.
>
> **[1:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=107)** So here, if we're using the app component, you of course don't have to replace every div, but maybe you're creating something like a nav element or a header.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=117)** You can always replace these tags and these can wrap around elements to describe this stuff in more detail.
>
> **[2:06](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=126)** So there's no limitation when it comes to react with how you can use these semantic tags.
>
> **[2:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=132)** I'll encourage you to use them as much as you can, and this will provide more meaning to devices like screen readers and even to search engines.
>
> **[2:21](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=141)** Search engines are ranking higher pages that use semantic tags, so that's a little incentive there as well.
>
> **[2:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-semantic-html?u=76281980&t=148)** So not only will semantic tags make our pages easier to read, they'll make our sites more accessible to a range of different devices.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), self (1), let (1)
> **CLI Commands:** make (2)
> **Env Vars:** html5 (1), css (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### WAI-ARIA roles
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=0)** - [Narrator] The W3C provides a list of accessible rich internet application standards that we can use to make web content usable by people with disabilities.
>
> **[0:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=11)** It also provides a list of attributes that can be used to enhance web accessibility.
>
> **[0:16](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=16)** These are typically grouped into three categories: roles, properties, and states.
>
> **[0:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=22)** All of these can be seamlessly used in React components using jsx.
>
> **[0:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=27)** Let's take a look at our app component.
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=32)** The app component we're going to replace with a header.
>
> **[0:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=36)** Now this is again is the semantic tag that means something specific.
>
> **[0:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=39)** It means that it's a header.
>
> **[0:42](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=42)** Let's also add an h1 here.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=45)** The h1 is going to say Hello World, and we'll replace our a and image tags with something else, so we're going to add a nav and then let's add a form, and the form is gonna be kind of like a search form.
>
> **[1:02](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=62)** The search form will have an input associated with it, so we'll say type equals search, and we'll give the name search.
>
> **[1:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=75)** Great, so at this point, we can start to add some of these attributes.
>
> **[1:19](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=79)** Now the first thing we're going to add is a role to the nav, so we're going to say navigation.
>
> **[1:26](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=86)** All of these roles can be found on the website, so if you're looking for something specific, you can find it here under role definitions.
>
> **[1:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=94)** Now, the next step we're gonna take is to add a role to our form, which is going to be search, and then we're gonna add one of these properties.
>
> **[1:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=106)** This property is going to be prefixed with the aria label, and we're gonna say Search all content. Cool.
>
> **[1:56](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=116)** So, at this point, we can go to our terminal.
>
> **[2:01](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=121)** So, at this point, we will open our terminal and run npm start.
>
> **[2:10](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=130)** And it looks like we're getting an error there, that's an easy one to fix.
>
> **[2:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=135)** I just need to close that input tag.
>
> **[2:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=138)** So, let's give this a save, and we'll check it out in our browser.
>
> **[2:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=142)** Now, we should see the Hello World here and we should see our form.
>
> **[2:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=147)** So, what's really cool that's going on here, is that we're getting another alert from jsx-a11y.
>
> **[2:34](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=154)** We're seeing no redundant roles.
>
> **[2:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=156)** So, our jsx-a11y here is telling us that the element nav has an implicit role of navigation defining this explicitly as redundant and should be avoided.
>
> **[2:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=166)** So, we can replace this in Atom, we can just remove it, we no longer need that role.
>
> **[2:53](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=173)** We only need to use these aria attributes if there's no semantic meaning, or if we're witnessing an issue when we're testing with a screen reader.
>
> **[3:02](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=182)** When we're testing with a screen reader, you can look for places where your semantic layout might be leaving details out that are critical for user understanding.
>
> **[3:11](https://www.linkedin.com/learning/react-components-context-and-accessibility/wai-aria-roles?u=76281980&t=191)** I'd encourage you to learn more about all of the aria roles, states, and properties on the W3C website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), else, (1)
> **CLI Commands:** make (1), find (1), npm (1)
> **Tools:** terminal (2), atom (1)
> **Env Vars:** w3c (2)
> **Documentation:** w3c (2)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** kind of like (1)

#### Accessibility testing
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=0)** - [Narrator] Even though this tool is not specifically for React applications, you can use it literally for anything, I wanted to point out this very, very useful Chrome extension that I would encourage you all to install.
>
> **[0:12](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=12)** It's called aXe and it's from Deque Systems, and if you add this to Chrome, then you can run an accessibility check on any website in Chrome to check for any violations.
>
> **[0:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=25)** So, I've added the aXe extension to Chrome, now, what I can do, is if I refresh the browser, so if I open up my developer tools with Command + option + J, I can see that there's another tab that's been added here called aXe.
>
> **[0:45](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=45)** I will click on Analyze, and what this will do is it'll give me a report of any violations, and it will categorize them.
>
> **[0:52](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=52)** So, for example, this says that I have three violations found and 186 that might need review.
>
> **[0:59](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=59)** These are going to be places in the code that I can check out to ensure that I don't have any accessibility violations.
>
> **[1:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=68)** So, a couple of things that I'll point out here: I can click on Inspect Node for any of these.
>
> **[1:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=74)** This will take me directly to the position in the dom where the problem exists.
>
> **[1:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=78)** So, it looks like, if I open up this h3, we don't have any text there.
>
> **[1:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=83)** It's being rendered via svg, so that's just a heads up that that could be a problem.
>
> **[1:30](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=90)** All of this can be used literally on any site, so I always like to use it on my own sites before pushing anything to production.
>
> **[1:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=98)** Now, speaking of pushing things to production, you can incorporate aXe into your build pipeline.
>
> **[1:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=104)** So, there's an mpm from Deque called axe-core, which is kind of the underlying tool behind the Chrome extension, and what this will do is it'll do automated testing and you can build this into your build pipeline.
>
> **[1:58](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=118)** So, as you run tests, as you minify anything, as you do all of those checks before you push to production, you can run an accessibility check.
>
> **[2:08](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=128)** This is really important stuff to make sure that the maximum number of people can view all of our content.
>
> **[2:14](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=134)** So, aXe does not replace testing with screen readers, and doing some accessibility tests on our own, but it is an excellent supplement to that, and it will point out areas where you might need some improvement.
>
> **[2:28](https://www.linkedin.com/learning/react-components-context-and-accessibility/accessibility-testing?u=76281980&t=148)** So, definitely check these out: axe-core on mpm, and aXe in the Chrome webstore.

> [!info]- Semantic Content
>
> **Code Identifiers:** axe (6)
> **CLI Commands:** node (1), make (1)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** heads up (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Solution: Building an accessible navigation system
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=5)** - [Instructor] Let's improve our form so it is a bit more accessible.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=9)** If people are using the keyboard to navigate between different elements, they're going to need each one of these inputs to be labeled.
>
> **[0:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=18)** We can add a label here that says Name.
>
> **[0:23](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=23)** And the label should be given this attribute called htmlFor.
>
> **[0:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=31)** Let's set that to a Name.
>
> **[0:33](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=33)** And we're also going to add to our input here an ID of name.
>
> **[0:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=40)** Let's scroll down a little further, and we're going to place a label here.
>
> **[0:47](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=47)** And here we'll say Message.
>
> **[0:51](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=51)** We need to add htmlFor, message,
>
> **[1:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=60)** and then we'll add an ID of message to the text area.
>
> **[1:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=69)** From here, I can click Test My Code.
>
> **[1:15](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=75)** And now each one of these has been added.
>
> **[1:18](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=78)** But we're missing one, so we need to add to our button a type of submit.
>
> **[1:25](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=85)** So that's easy enough.
>
> **[1:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=87)** Let's go ahead and add, type, submit.
>
> **[1:31](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=91)** Now, if we click Test Our Code again, we should be able to see that that test is now passing.
>
> **[1:38](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=98)** So, again, really important.
>
> **[1:40](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=100)** If we're building a form, we want the form to be as accessible as possible when people are using various assistive technologies, or maybe they're interacting based on voice or based on their keyboard alone.
>
> **[1:55](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=115)** So this is a way that we can make this work.
>
> **[1:57](https://www.linkedin.com/learning/react-components-context-and-accessibility/solution-building-an-accessible-navigation-system?u=76281980&t=117)** We can add labels, and we can make sure that each one of our semantic buttons is given the right type.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1), type. (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** htmlfor (2)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=0)** - [Eve] Thank you so much for taking this course.
>
> **[0:03](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=3)** From here, there are many different directions that you can head in with your study of React and related tools.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=9)** If you're interesting in testing, I'd check out Jest.
>
> **[0:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=13)** If you want to learn more about how to manage your styles in React, I'd definitely recommend the library Styled Components.
>
> **[0:22](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=22)** If you want to learn more about how to use your React skills to build native apps, I'd definitely look at React Native, it's really cool.
>
> **[0:29](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=29)** And then finally, if you want to learn more about declarative data fetching, I would check out GraphQL.
>
> **[0:36](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=36)** Now, you don't need any of these things to work with React, of course, but these are some pretty cool related libraries and packages.
>
> **[0:44](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=44)** I'm so glad that you joined me for this course.
>
> **[0:46](https://www.linkedin.com/learning/react-components-context-and-accessibility/next-steps?u=76281980&t=46)** Now go forth and build something incredible.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [eve] (1)


### Appendix

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has a set of exercise files that you can download and follow along with, allowing you to work alongside me on the exact same files that I'll be working on.
>
> **[0:09](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=9)** In the exercise files folder, you'll find a folder for each chapter.
>
> **[0:13](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=13)** Within each chapter, you'll find folders for each video and then in each of those, we have a start and a finish.
>
> **[0:20](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=20)** When the video begins, I'll start with the start file, and when the video ends, I'll start with the finish folder.
>
> **[0:27](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=27)** In this course, I'll be using Atom, which is available at [atom.io](https://atom.io).
>
> **[0:32](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=32)** However you can follow along in any text editor or development IDE of your choice.
>
> **[0:37](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=37)** So with that in place, I think we're ready to go.
>
> **[0:39](https://www.linkedin.com/learning/react-components-context-and-accessibility/using-the-exercise-files?u=76281980&t=39)** Let's get to the content.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Tools:** atom (2)
> **Exercise Files:** exercise files (2)
> **Code Keywords:** let (1)
> **URLs:** [atom.io](https://atom.io) (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Build for Digital Accessibility]]
← [[Microsoft Office Accessibility for Beginners]] | **11 of 12** | [[Using Stark for Accessible Design Projects]] →

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Accessibility]] — Digital Accessibility
- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js

---

[↑ Back to top](#)