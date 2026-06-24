---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: swift-delegations-and-data-sources-2018
url: "https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018"
duration_minutes: 66
duration: 1h 6m
level: Intermediate
updated: 3/21/2018
learners: 1968
skills:
  - Swift (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGSfsJszIFFgA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794475117?e=2147483647&amp;v=beta&amp;t=JvupRiD4BQ3oY8JubP-06zOO0zwBsenWbr_vFTHcd4Q"
linkedin_topic: Mobile Development
learning_paths:
  - '[Master Swift](../../Paths/Mobile%20Development/Learning%20Paths/Master%20Swift.md)'
prev_courses:
  - '[Swift 5 Essential Training](Swift%205%20Essential%20Training.md)'
next_courses:
  - '[Swift 5- Protocol-Oriented Programming](Swift%205-%20Protocol-Oriented%20Programming.md)'
path_nav: '[{"path":"Master Swift","position":3,"total":4,"prev":"Swift 5 Essential Training","next":"Swift 5- Protocol-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/swift-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Swift-%20Delegations%20and%20Data%20Sources.md)

![Swift: Delegations and Data Sources](https://media.licdn.com/dms/image/v2/C4E0DAQGSfsJszIFFgA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794475117?e=2147483647&amp;v=beta&amp;t=JvupRiD4BQ3oY8JubP-06zOO0zwBsenWbr_vFTHcd4Q)

# Swift: Delegations and Data Sources

> Have you ever been frustrated getting data from one storyboard scene to another using delegates? If so, then this concise course is for you. Discover how to work with delegates and data sources, two essential—but tricky—concepts that can confuse even seasoned iOS developers. Get the foundation you need to understand delegates and the theory of how they work. View examples demonstrating the steps t

> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018) | 1h 6m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. The Basics of Classes and MVC**](#1-the-basics-of-classes-and-mvc) (4 videos)
  - [What is a class?](#what-is-a-class)
  - [Model](#model)
  - [View](#view)
  - [Controller](#controller)
- [**2. Delegation**](#2-delegation) (7 videos)
  - [Destination view controllers in code](#destination-view-controllers-in-code)
  - [Destination view controllers in storyboards](#destination-view-controllers-in-storyboards)
  - [Delegates in theory](#delegates-in-theory)
  - [Delegates in iOS code](#delegates-in-ios-code)
  - [Delegates in iOS storyboards](#delegates-in-ios-storyboards)
  - [Contexts in watchOS](#contexts-in-watchos)
  - [Delegates in watchOS](#delegates-in-watchos)
- [**3. Data Sources**](#3-data-sources) (2 videos)
  - [Data sources](#data-sources)
  - [Delegates and data sources in Apple methods](#delegates-and-data-sources-in-apple-methods)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=0)** - [Steven] I think the most frustrating thing for me to learn in iOS was the concept of delegates. For the longest time they just didn't make sense to me. You may be one of those people who is frustrated. How to get data from one storyboard scene or view controller to another using delegates? In this course I'm going to give you the foundation you need to understand delegates, the theory of how they work, and some hands-on examples in an [Xcode](../../Skills/Mobile%20Development/Xcode.md) project and Playground of building a delegate to send data between two view controllers. I'll cover the differences in delegates for coding UI and for storyboards. I'll look at the differences between iOS and watchOS. I'll also cover delegates relative the data source. I'll finish up with an example of APIs that use data sources. Let's get started on the fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **Code Identifiers:** ios (2), watchos (1)
> **CLI Commands:** make (1)
> **Speakers:** - [steven] (1)

#### [What you should know](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, I'm assuming you've used [Xcode](../../Skills/Mobile%20Development/Xcode.md) and [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) before. I'll assume a lot of you are beginners. You might also be experienced developers coming from languages that don't use delegates and you haven't gotten the mindset for them yet. We'll be using a lot of arrays, so I'll assume you have the basics of arrays down. There will be some WatchOS code. If you don't know WatchOS, don't worry. I'll walk you through it. Beyond that, I'll be going through most of what you need to know.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **Speakers:** - [instructor] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] If you have access to the exercise files, you can follow along with the same project I'll be using on screen. I'll be doing two projects, alternating between the two. The first is the [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) Playground, which you will write from scratch as we proceed through the course. The second is an ordering app for the Huli Pizza Company, except there's some delegates and data sources still to add to the beverages and desserts, so the app doesn't work perfectly. Through the course, we'll add those delegates to make a fully functional app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. The Basics of Classes and MVC

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a class?](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=0)** - [Instructor] Delegates make a lot more sense if you have some basic theory. If you already know everything you want to ever know about classes and view controllers, then you can skip this chapter, but you might learn something along the way. While we use classes in [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), it's good to review what they actually are. A class is a collection of data, which we call properties and actions we can do to those properties, which we call methods. In [Xcode](../../Skills/Mobile%20Development/Xcode.md), open up a new [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) playground. And you can pick a blank playground for iOS and hit Next. And I'm going to save it on the Desktop for the moment. At the bottom, you'll see the Run button. Hold it down and select Manually Run so that we don't have to worry about this giving us lots of error messages while we're working. And go ahead and delete everything there. And go ahead and add the libraries we'll need for this. The first one will be import UIKit. Second one will be import PlaygroundSupport. Under that, I'm going to add a class, which I'm going to call Colors. Now, Colors has both properties and methods. So I'm going to start with a property called colorName. So let colorName equal and I'm going to put an array here. Red,
>
> **[1:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=92)** green, blue, and purple. Okay, so that's one property. I'm going to make another property called color. I'm going to make another array and this one, I'm going to make of UIColor, so it's the actual colors. And I'll just use a UIColor.red, UIColor.green, UIColor.blue, and UIColor.purple. So I have these two as properties. Now, properties and methods are either public or private. A public method of a property is one that is classes other than the defining class can see and use. Private means the property or method is only usable and visible within the defining class. For example, I can make this color private by putting the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) 'private' in front of it. Now, other classes won't be able to see it. Meanwhile, colorName up here is still public. I'm going to add one more thing to this. That's a variable. So it'll be a property that can be changed. And we're going to call that colorIndex. I'm just going to make that zero for now, which will keep track of our colors for us. And so, I can have properties like this. I can also add some methods. I do that with the func keyword
>
> **[3:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=187)** and then, I can put one that says name. And I can add a parameter of index, which will be an integer and I will return from that my string of my colorName. This is essentially what will be otherwise known as a getter in other languages. Like so. And I'll make one more. For color, and again, I'll call an index for a parameter of Int. And this returns the UIColor. Return and this'll be color. Again, just put an index. All right, so this is essentially what we have for a class. Now, I want to show you a few things about this class that are important, okay. One very important thing that we want to look into. We tend not to like other people messing with our insights and that is a good programming practice too. In general, it's best to leave what is public by other classes to a necessary minimum, like our color class here. Under the class, make an instance of the class. So let's call let colors equals Colors. I'm just going to instantiate like that. So now, let us try to assign a color. Let myColor equal
>
> **[4:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=279)** colors. And if I want to assign the colors from my color array here, I can't, it's not there in this auto-complete, because it's private. I'm not allowed to use it. Try one more thing. Try doing color number one. If you go ahead and you run that, you're going to get an error. It doesn't exist. It only exists, this color or method here only exists within the class. The only way to get this to work right is I've got to do colors, so that I'm saying in the class colors, there's this method color. Now, if I run that, that works. And there's my color. Okay, enclose the console there. This is what's known as encapsulation. It keeps the insides of the class to itself and nothing can change it from the outside of the class. You must refer to the class to get the value or function. This will be key to understanding why we need delegates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (8)
> **Code Identifiers:** colorname (4), ios (1), colorindex (1), mycolor (1)
> **Definitions:** is a  (2), known as (2)
> **Analogies:** for example (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Model](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=0)** - [Instructor] A term heard often when working with [Xcode](../../Skills/Mobile%20Development/Xcode.md) is MVC. MVC stands for model-view-controller. It's not an exclusive term to Xcode projects. It's a pattern of programming, a good organization of any program or application in a graphics-rich environment, and arguably any environment that interacts with a user. MVC separates the major parts of an application. Why is it important? With model-view-controller, you only change one part completely, the view, and possibly some of the controller. The code handling your data never changes between the versions, saving a lot of time and effort. The parts of our program that deal with information we want to process is called the model. A pizza shop ordering system has a list of data giving us information about each person's order. There may be other links to that data with more data about each customer and about each pizza. In the pizza ordering system, this is our model, the collection of all the data we will use in the ordering system. It does not in any way interact with a user. It does not display anything or does it ask for input. The Colors class is another example of the model. We have color information but nowhere to put the color information, nor any devices to input the color. There is no user input or output here. Models make calculations, convert data, or manipulate from a color to a string, but there is no user interaction here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (2)
> **Env Vars:** mvc (3)
> **Definitions:** stands for (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [View](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=0)** - [Instructor] If the model does nothing with interaction, where is all the user interaction? That's happening in the view. Let's add a view to our playground. Under the class, add this, and give yourself a little bit more room, so I'm adding a couple extra lines here, to soup this up a little, and I'm going to start with let view equal UIView, and I'm going to use the one for frame, so I can make a frame here, and CGRect, let me just the integer one, and that will be zero, zero, width of 400, and I'll make a height of 600. And that makes us a view, and we're going to do a PlaygroundPage.current.liveView equals the view, and that displays the view on our live view that we'll use to see what we're doing here. Now I can change the background color to orange. So I can do view.backgroundColor equals UIColor.orange, go ahead and run this, and if I check my live view, I've got an orange box now. That's a view, but it's kind of boring. So I'm going to close up my live view again, and I'm going to add a little bit more code here. And so what I'm going to do is add a button. So let button equal UIButton, this is also going to have a frame,
>
> **[1:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=96)** and it will CGRect again, I'll just use the integer version again. Zero, tab zero, I'm going to make the width 200, and the height 400, okay. And after that, I'm going to set a title on the button, and it'll, title will be Color Choice, for normal state. And I can set a background color on the button too, and I'll make it dark gray. And now I can take this view and add it to my super view by using view addSubview(button). Okay, go ahead and run this. Pop open the live view, and you can see our large gray button with an orange background. For most codes we do things like this. Add subviews to the root view. Now you may be tempted to use the color instance above our view in the view. This color's here. This is what MVC is trying to avoid. The reason why is rather simple. If I keep my model separate from my view, which contains my user interface, if I change the model, I don't have to change the user interface. Conversely, if I change the user interface, I don't have to change the model.
>
> **[3:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=188)** Keeping them separate, and you are free to make changes much easier. The model never interacts with the view, the view never interacts directly with the data. The view is what the user sees and interacts with. It doesn't interact with anything else to keep things easy to change. Because of that, the colors class up here and the view down here are not talking to each other. We need something that does.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Identifiers:** liveview (1), backgroundcolor (1), addsubview (1)
> **Env Vars:** mvc (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Controller](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=0)** - [Narrator] The view and the model don't talk to each other. The heart of the model view controller, connects these two so they do. Called the controller, it coordinates what happens in the model and what happens in the view. Go ahead and stop the app. Close up the live view for the moment. And you'll notice something about my code here. This view I kept out of a class. You can make classes of UI View, but they're a bit complicated. Most of the subclasses of UI View, we use regularly already made for us. For example, UI Button. Now, controllers have identifiers for both the view and the controller. We can make this for example, appear just below my colors. So let's use this, 'cause I'm going to make another class. And I'm going to call it View Controller. Like that. Now, it's going to contain two properties. Or two variables, really. One is colors, which would be my colors. And one would be my view. Like that. Now I have variables for both of these in one class, and that would be my controller. I can access both of them and move them appropriately. So that anything that happens in the model, can be reflected in the view. Anything that happens in the view, can change the model.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=95)** This is a controller at its most basic. Now that would be an ideal case. But [Xcode](../../Skills/Mobile%20Development/Xcode.md) changes this around a bit. There's a class called view controller, which is the controller with a built-in view property. We change this view controller I have here to look like this. UI view controller class. And I don't need the view. Now, to handle the view and to configure it, use a special method view did load to load the components of the view if you're doing it programmatically. For the story we will discuss later, the storyboard does much of this work for you. I'll take much of the code I wrote and paste it directly into view did load to configure the button. So I can take from view background color, down to add sub-view. I'm going to hit command X. Tap it up here. Command V. And there it all is. I'm going to do one more thing here, and move the button declaration out of view did load, so I can use it in the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this class. So I'm going to hit command X here. And then command V just under colors. And then down on the bottom here, I'm going to comment out this view and I'm going to make my live view a view controller. And I'm going to hit run. You'll see that it runs runs fine here. And I get my app running over here in the live view.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=191)** So everything's the same as before. Okay, go ahead and stop that. Close up the live view. And scroll up to view controller so you can see it well. Now, the controller can use both the view and the model. So let's make a color change of the background every time the user presses a button. First of all, I'll add to this account. So, above colors I make another variable, and set it to zero. And then, above view did load here ... I'll make change color, and I'll increment it by one plus equals one. To count, and then view. Background color ... equals colors ... dot color count. So here I am using my model. For actions, I need to fancy this up a little bit. I'm going to add IB Action up front here, and make this act like a button. And then in change color, I'm going to change this to sender UI button.
>
> **[4:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=278)** So this is exactly the same thing as we'll see in a little bit when we drag things into the storyboard. And then I come down here, I'm going to add the target to the button. So button, add target ... Target is self. Action is a selector. And the selector is change color. 'Kay. And that'll be for UI control event of touch-up inside. Now go ahead and run this. You can click the button. And the color changes. Now notice we've got to index out of range. So, we have a bug in our program. And I'm going to go close this up. And my program bug is right here, is that I just used count. What I'm going to do is one more step. And I'm going to do a percent, colors, dot color name, dot count. This way it'll cycle through all the counts, all of the colors here and only do the number of colors we have. Go ahead and run that. Hit your button.
>
> **[6:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=377)** And now it'll cycle through colors. We're doing two things at the same time here. By pushing this button and changing the background here, that's view stuff. Where I'm getting the color from is model stuff. So model view controller or MVC is a modular way of connecting different functions of an application together. And at its center is a view controller.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (4)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Env Vars:** mvc (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [narrator] (1)


### 2. Delegation

[↑ Back to Table of Contents](#table-of-contents)

#### [Destination view controllers in code](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=0)** - [Instructor] You've been looking at a single controller, but no app is a single controller, but a large number of them, and they need to talk to each other. How does the MVC clusters communicate between each other? That's what we'll answer next. In the exercise file for this video, you'll find a code snippet for color chooser. Select and copy the class, then close it back up, and above view controller, paste it. This is another view controller using the same model colors. For the view, instead of a button, it is a segmented control, with the color choices from the color model we made earlier. Right now, all it does is change its own background color. I want my view controller to open the color chooser when I press the button. In that situation, we'll call color chooser a destination controller. There are several ways to navigate from one controller to another. I'll start with the simplest in code, a modal presentation. Go to the view controller class. Comment out what we had in the color chooser action. So, comment out the count, and view dot background color. Notice we are getting rid of the protection we have for the overflow situation. Really, this overflow is a model, not a controller thing to do. So go up to the model, and we'll fix it. This should be index, percent. For color name, it should be
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=95)** color name dot count. And for the color, it should be index, mod, color dot count. Pop down to the action. Now to put a few more extra lines in here. We're going to start by getting the color chooser. I'll say let vc equals color chooser vc, like that. You now have the object, which is this other controller. You can present this other controller with the present method. Present vc, animated true, completion nil. Run this. You can get to the color chooser by pressing the button, and you can see the red, green, blue, and purple buttons on top. If I press blue, I get blue. If I press green, press red, press purple. I get my same color, but I can't get back to my view controller. For that, I need something else. So close that up. Shut it down. And go back to chooser in color chooser. And then, after we put the background color in, we're going to dismiss this view. So I'm going to do dismiss, true, completion nil, like so.
>
> **[3:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=193)** Now if you run that, push the button, click red, and we get back here. Click blue, we get back here. It working okay. Now, I have an instance of color chooser in my view controller. It points to the destination. I can also change values here. So before I present it, I can also do vc. And so, I have the whole view controller. I can actually get to some of the other things in the view controller, like current color, which sets the current color, and I can change that to count, since this is an integer. So that all works right. Now I can go ahead and run this, and whatever my current color is, is the color that's there. Right now, the only color I can get is red. So the background changes, and the selected color on top changes with it. So we've moved data from one view controller, the source, to the destination. That looks like another way of doing the same thing with storyboards.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** open the (1), go to (1)
> **CLI Commands:** find (1)
> **Env Vars:** mvc (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Destination view controllers in storyboards](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=0)** - [Narrator] Other than code, you may be using storyboards. Instead of writing your code in viewDidLoad, you make scenes on the storyboard dragging and dropping other views into the superview of your controller. You can find an example project in the exercise files. On this storyboard there are plenty of scenes. Each of the scenes is a different view controller. Notice the lines between the scenes. In [Xcode](../../Skills/Mobile%20Development/Xcode.md), we have what are known are segues. Segues point from one view controller to another. When we move from one controller to the next, the segue tells the system to open up this particular view controller, which then opens up its view model. To get a segue on the storyboard, you usually control drag from a button to another scene. If I [Zoom](../../Skills/Software%20Development/Zoom.md) down here a little there's no segue between the desserts button and the desserts view controller. Control drag from desserts to the controller. The segue highlights, and I release the mouse button. I get a menu of the type of segue. If you're using a navigation controller for navigation, as we are here, use a show segue. Open the attributes and click on the segue, and in its attributes set the identifier to desserts. The identifier is a string that makes it easy to identify this segue in the next step.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=95)** Close up the attributes, open the navigator, and go to the main view controller. Go to the bottom of this code. Up to now, a segue has said nothing about the view controller class for the desserts controller. Apple includes a method, prepare for segue, in the view controller class, which you use to access the destination controller. You can have then many segues from one view controller. Take look at main view controllers prepare for segue method. You'll see we have one for beverage, one for order table, and one for pizza. You have to identify the correct one with the identifier you typed in the attributes. The segue parameter is a UI storyboard segue object with a property identifier. The if clause identifies this segue. Let's add an entry here for desserts like these others. So above the beverage one, I'm going to add if segue.identifier == "desserts"{
>
> **[2:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=176)** Another property of UI storyboard segue is destination which gives a pointer to the destination controller which returns a UI view controller. So I can start this by saying let vc =segue.destination
>
> **[3:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=196)** Now this is giving a generic UI view controller. We want the dessert view controller, so I'm going to add as to downcast, and then put DessertViewController VC is now a link to my destination view controller of dessert view controller. I can set properties, such as my last selection, since this is a dessert view controller. So I'm going to do VC, and one of those is last selection. And I'm going to put the ordered items, last selection. So this is a way of taking my last selection of our menu on this menu ordering app and putting it on the dessert controller so you know what you last ordered before you ordered your dessert. Now over in the destination view controller, which is dessert, you can format the last selection you got from the main view controller and set it on the dessert selections labeled text property. So I can go over here to dessert view controller. Here's last selection which is empty right now, but if I go down to viewDidLoad because I just changed it, I can now do this, and say that dessert selection, at the top of my UI, I can change
>
> **[4:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=285)** that text to be what I last selected. Okay, go ahead and run this code. You'll see on the front of this app that the Huli Pizza Company gives away free Huli Chips with any order, so we have the Huli Chips here, so that'll be our last order. I can hit the desserts button, and it does send the segue over, and you can see on the top here it says Small Huli Chips. So it's working this way. When we press the Duke Pie, it shows up Duke Pie here. But when I press done, it's not yet showing up in our label here of list of things that we've currently ordered. The question for both the color chooser and the menu ordering is now the same. How do you get something back from the destination?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **UI Navigation:** open the (2), go to (2), click on (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** viewdidload (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### [Delegates in theory](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=0)** - [Instructor] You moved objects to the destination controller. How do you move it from the destination to the source? That's what delegates are for. When we press duke pi in the app, we need a method to return a value. With an encapsulated class you can't do that. There's no way to send that revised model back to the original controller without breaking encapsulation or NVC. The new view controller does not know anything about the class that called it. We can't send objects backwards the same way we sent them forwards. This is the problem that delegates and protocols solve by being sneaky. Imagine a special class, one that is a skeleton of a class. It declares methods in this class, but never implements them. These are protocols. We make a protocol class as a method we'll call when we finish the controller. That method will have parameters you pass back to the original view controller. In the destination view controller, make an instance of this protocol as a property of the destination class. With the property of our protocol type, use its methods in the destination controller. Nothing is defined yet. We've just called the skeleton. Since protocols are skeletons, any other class can make them part of their own class with a requirement. We adopt a protocol in the original calling class. As soon as a protocol gets adopted
>
> **[1:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=93)** you flesh out the skeleton and write code for that protocol function. You code the required methods in the adopted class's code. If the source controller adopts the destination controller's protocol, it then implements the method used inside the source controller, which has parameters that come from the destination. In this sneaky way we get the data back, placing it where it belongs. This is a delegate, a function called in one class but running in another, which allows legal sharing of data. I stated the delegate was an instance of the protocol in the destination controller. I didn't state where the delegate was. Your last and important step is doing that. Make sure you tell the adopting class where you fleshed out the delegate function. That's the theory. Let's see what it looks like in the two examples.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Env Vars:** nvc (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Delegates in iOS code](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=0)** - [Lecturer] Now that you have some theory about delegates, let's get practical. Making a delegate to change the background color of this source ViewController. The first step is to define a protocol. I'll do that at the top of my code. You define a protocol the same as a class. Just use protocol instead of a class. So I'll type protocol, and I'll call it ColorChooser and traditionally we put delegate on the end so we know it's a delegate. Then you put your braces. Inside the protocol, will be the skeleton of the function. No code, just the name of the function and any parameters. I'll make one called selected color, that has an integer to represent the color. So going to do func selectedColor, color, and that'll be an Int. Head down to the ColorChooser. In my properties, I'll declare a property delegate and I'll make it the type of my protocol. I'll make it optional so it can be nil when not used. In the chooser, before I dismiss the ViewController, I'll call the selected color method of the delegate, setting the current color as the color of the function. So I'll use delegate and I can call its method selectedColor, and that will be the current color. I've sent the color to the protocol.
>
> **[1:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=96)** Next I'll receive it in the source controller. In ViewController, I adopt the delegate by placing the class after ViewController. So go down to ViewController and where it says UIViewController here, you put ColorChooserDelegate, like that. Now [Xcode](../../Skills/Mobile%20Development/Xcode.md) will give me an error. Click on that error to look at it. It says type ViewController does not conform to protocol ColorChooserDelegate. Which is a long way of saying you need to implement that method that we had in ColorChooserDelegate. Now you can have a fix here that says do you want to add the protocol stubs? And I'll go ahead and do that, and there's SelectedColor all ready for some code. Usually I stick this at the bottom, but for this one example I'll stick it at the top 'cause I like my delegates on the bottom of my Viewcontrollers. Inside the function I'll change the count and update the background. Count equals color, and view.backgroundColor equals colors.color, and for the index I'll put color. Now the last step is an important one. When you start with delegates you will forget it. Delegate is currently set to nil. When you try to call a delegate like this you will get an unwrapping nil value error.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=191)** You must assign a class where the fleshed-out delegate method resides. That class is ViewController. Before I present the chooser I assign delegate to this ViewController, otherwise known as self. So down here, when I present it, I'm going to go here, I'm going to put vc 'cause that's color chooser, and I'm going to pick the delegate and assign it to self. With all that in place, you can run this code. Head over to the live view, click the button, we get our red screen. I'll pick blue, and blue comes back as my background. Same thing with green. You've gone through the steps in code for delegate. Since we've done it once, let's do it one more time for the storyboards, and see the variations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** selectedcolor (2), backgroundcolor (1)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [lecturer] (1)

#### [Delegates in iOS storyboards](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=0)** - [Narrator] Delegates in storyboards are not that much different than in code. I'll finish getting the desserts controller working to show you the few differences for a storyboard. Go to dessert view controller and at the very top of the code, above the class add the protocol for dessert view controller delegate. Here I'll add one method: did choose dessert. That has one parameter, dessert of type, order item. In the properties for the dessert view controller I'll declare a property delegate. That will be the type of my protocol. Dessert view controller delegate. Again I'll make it optional, and I'll set it's value to null. Head down to the done button code. We'll get rid of this console so we can see more. And in here, above the pop view controller, add delegate, did choose dessert, and our order item will be dessert. This code will run a function, which I don't know what it does yet, but will have a dessert value when I'm trying to communicate outside the controller. All right, now we'll go to the receiver here, at main view controller. Towards the top, you'll see I adopted several delegates replacing the delegate name after the sub-class declaration. At the end of the list,
>
> **[1:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=93)** place dessert view controller delegate. And I'll get that error message again. This time, I'll drop down to the bottom of my code where my delegates are. And you'll see I already have two for choose beverage and select pizza. And I'll go ahead and I'll put did choose dessert here. You can see in this beverage delegate, I did two things. First of all, I added the beverage to my order items and then I updated my table of ordered items. I'm going to do the same thing with the dessert, but only with desserts. So I'm going to do orderedItems.add and I want to make sure I've got the right add because there are two of those, add, order item, and then it'll be dessert, and then order table VC, update table, and we just did those, order items, and update it with that new set of items. So I've moved a value from desserts to main, almost. Again, don't forget that last step. I need to tell the dessert controller where this fleshed out function is. I have accessed the destination controller in prepare. Go there, tell the dessert controller that the function it's looking for is right here by using self. So, in here after I've defined VC, I'm going to do VC, and delegate is now one of my options here, equals, self.
>
> **[3:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=192)** This is one of the most common errors, forgetting to set the delegate. Try running the app now. Tap desserts, I'm going to pick up that Duke Pie, there. And I'll hit done, and now the Duke Pie is there. I'm hungry for dessert, so I'm going to go for a hot fudge sundae, too, and there's all my calories listed on my order sheet. Delegates are sneaky ways of moving data between controllers that shouldn't share data. I call them sneaky, but they're the most used and the best way to move data between view controllers. When you need to move data, the first thought you should have is for setting up a delegate.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** ordereditems (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)

#### [Contexts in watchOS](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=0)** - [Narrator] You've seen delegates at work in iOS for a phone. The pattern remains relatively the same for a watch, however, watchOS has a difference that I'd like to show you. You'll find the app we've been working with is a watchOS app as well. In [Xcode](../../Skills/Mobile%20Development/Xcode.md), towards the bottom of the navigator, you'll see a few folders we haven't opened yet. Opening them, you'll find the WatchKit app and the WatchKit extension. For our purposes, the WatchKit app contains the views, and the WatchKit extension contains the model and controllers. For more about watchOS, take a look at the course Learning Apple watchOS four App Development. There's a small change in language here. In watchOS, controllers are known as interface controllers. The watch storyboard shows the same dessert order application. I've yet to connect the segue. Control drag from the dessert button to the selection list interface. Select a push segue. Select the segue. Open the attributes, and change the identifier to dessert. That segue, however, doesn't work like segues in iOS. Select the main interface controller. Look at awake with context. It receives a context of optional type any, that this controller uses to configure itself. Here's the big difference between iOS and watchOS.
>
> **[1:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=94)** There is no assigning values to destination controllers. You don't get the destination controller in watchOS that assign values like iOS. You send it in a context. Context can be anything, but most often, there are dictionaries so you can send multiple values to the destination. To send by a context for a segue, use the context for segue method, which I'm going to add right above awake. Inside the context for segue, I usually declare the context first using a dictionary of string for the key, and any for the value. So I'm going to do var context. It returns an any, so my dictionary will actually be an optional, and inside it I'm going to have a string for a key, and any for a value. And I'm going to set that to nil. Like it's cousin prepare for segue, you check the identifier for the segue. If segueIdentifier equals dessert,
>
> **[2:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=170)** if this is the correct identifier, I'll assign the dictionary payload to the context. Context equals in this case, my payload is selection.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=184)** And the value will be the string dessert. Then after the if, I'll return the context. In the destination, I'll take that dictionary in the awake method, and get back my values. Since it's a dictionary, I have a bit of work to do. So head over to dessert interface controller, and you'll find the awake with context on the bottom here, so the first thing I'm going to do is unwrap my dictionary, since it's an optional. If let contextDictionary equals context,
>
> **[3:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=226)** and I'm going to cast it here too, and if it's the wrong cast, this will fail. And I won't go into the if statement. So I can check my type and check if I actually have a dictionary. Then I'll check if I have the entries I'm looking for in the right type. If let selection equals context dictionary selection,
>
> **[4:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=263)** again I'll optionally cast this, so I can see if I'm actually in the right type, as string. And do what I have to with that value, which in this case, I'm just going to set a text value. So I'm going to do this, take my label, my selected label that I have, And I'm going to just set the text on it. And I've set up my context. watchOS is a bit more difficult to send values than iOS. Which makes sending delegates a little more interesting too. Now let's look at using a delegate in watchOS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **Code Identifiers:** watchos (9), ios (5), segueidentifier (1), contextdictionary (1)
> **CLI Commands:** find (3)
> **UI Navigation:** select the (2), open the (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [narrator] (1)

#### [Delegates in watchOS](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=0)** - Instead of getting a class and sending properties like we do in iOS, watchOS requires sending values through Context. This is the big change. To send the delegate, you need to send it with a context. Let's see this in action by finishing the delegate for the watch project. Hop over to the Desserts Interface Controller and once there we'll make a protocol. So slide up to the top, and above the class we'll start a protocol. And I'm going to call it Desserts Interface Controller Delegate and it'll have one required function and that is did Finish Selecting Dessert. And that'll be an item of type OrderItem. So we have a protocol. Now we'll go into the interface controller to our properties, and I'm going to add the delegate declaration. So it'll be var delegate Desserts Interface Controller Delegate. That's going to be optional, and it'll have a value of nil. Now I can use this and so find the button pressed method, right here,
>
> **[1:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=92)** and above the pop, which is a watch version of dismiss, add the delegate method call. So we'll do delegate, didFinishSelectingDessert item. And the order item is going to be orderItem, which we configured above it. Now go to the main interface controller, and again we're going to adopt the delegate, like we have in the past. And so this is DessertsInterfaceControllerDelegate, right here, click that, should give us our error. Open the error and save ourselves some time to and use fix to get what we need. I'm going to do a command x here and I want to move it down to the bottom of my class. I like to keep my delegates on the bottom. Okay, now in the delegate itself, orderItem equals item. And there's my transfer. So I've taken what's in the destination and brought it over to the source. And along with that I'm going to go ahead and reflect that change. Dessert Selection Label dot setText, and that'll be orderItem dot itemString. Okay, by now most of that should be familiar,
>
> **[3:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=187)** even if you know nothing about watchOS. What's different is a sign of the delegate. The easy part is up here in context for segue. To assign the delegate, I just add another dictionary entry. I put delegate and self. That's not too hard. But now we're going to have to go back to the DessertsInterfaceController and do one more step. So in awake with Context I'm now going to unwrap that and get that entry from the dictionary. So underneath the if let selection, I'm going to put if let delegate equals contextDictionary and then I'm going to look for the delegate entry by putting the key delegate, and that is a DessertsInterfaceController delegate. If that exists then self.delegate equals a local delegate. Okay. So now we have everything set up properly for this. Change over to the WatchKit app, delegate and data sources, and set it to iPhone 8 Plus Apple Watch Series 3. Go ahead and run, and everything should load.
>
> **[4:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=282)** It says your selection. I can hit dessert, pick a Duke Pie, and I get Duke Pie. I can do it again. Hula Hot Fudge sounds good too, and there comes Hula Hot Fudge. And it has read that delegate. The key change for watchOS is using a Context instead of a destination view controller to tell the app where the delegate's method implementation is. To do so, you make a dictionary of String:Any and have as one of your entries, the delegate. Unwrap that context in awake with Context. By casting Context as the dictionary then extracting the delegate location from the dictionary you set the delegate. As far as using delegates, everything else is the same as iOS.

> [!info]- Semantic Content
>
> **Code Identifiers:** watchos (3), orderitem (3), ios (2), didfinishselectingdessert (1), settext (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - instead (1)


### 3. Data Sources

[↑ Back to Table of Contents](#table-of-contents)

#### [Data sources](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=0)** - [Instructor] So far, we've used protocols for delegates. There's one other common use for protocols that's related to delegates called data sources. Even if you never implement a data source, you will be using them all the time, so it's important to understand them. Data sources solve another problem with encapsulation and inaccessible properties. Go to my playground and the color chooser. And let's go up to our model here of colors, and I want to talk about a few things here. Let's take a look again. Let's suppose that instead of a let we have a var here for the color names. And instead of private we have var here. So these are two perfectly big and normal properties. There's dozens of ways, given the code we've got, that anyone setting these methods could crash this class. Now, another developer could change the data tapes on you, such as turn a UI color into a string, or have a mismatch in the sizes of the arrays. So how do I hold on to the [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md)? Now, for some customization situations, the best way to do this is to use a data source, which is another type of protocol. A data source is a function that defines the data in a class. You write the function to return the data you want to use. So we can make another protocol here, and I'm going to put it right next to my color chooser delegate, make some space.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=95)** Protocol. Color. Chooser. Data source. And this time I'll actually put three in here. Func, number of colors, and that's going to return an integer. Func, name of color for index,
>
> **[2:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=131)** and I'm going to put an integer in here too. And this will return a string. Func, color of color for index.
>
> **[2:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=147)** Again, we'll make it an integer, the parameter. And that will return our UI color. Now notice something interesting here. I'm not returning an array, I'm returning an individual value. This way all of the responsibility of making the arrays work right will not fall to the class colors, it'll fall to the class that's calling colors and used in adopting the data source. So all of the errors are no longer color's responsibility, which is the whole point of a data source. Now, as I also said here, we're returning a value, and my general rule for what's the difference between a data source and a delegate is delegates don't return values, they only take values in a parameter. And data sources return values. That's a general rule, it doesn't always work and I'll give you an exception a little later. Now that I have this protocol, just like a delegate, I can declare it. And I'll declare it a data source and use color chooser data source, make that optional, make it nil. And now I can use it in my code. Now if you go down to our functions for here, we had two methods. I'm going to change those. I'm going to comment them out. 'Cause they were using internal things.
>
> **[4:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=240)** And now I can use these two external things. So what I'm going to do here is I'm going to start with making a color index, and that's going to be equal to the index from this function, mod my data source dot number of colors. Instead of using color count, I'm using number of colors. So the user, or the person who's calling this, the class that's calling this, gets to pick how many colors are going to be in here. And then once you do that, you're going to do the return. And we'll do data source dot name of color for that color index. And then once I'm done with that, I can do the same thing down here for color. And that'll be again, color index equals index, data source dot number of colors.
>
> **[5:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=306)** So we got color index, index, mod data source, number of colors, just like before, and then we can just return the data source version of color of color. And again that's going to be the color index. So colors are now no longer taking responsibility for the data. It's just reading them and processing them. Now, since they're doing that, these two things are redundant, and they also need to be somewhere completely different. So copy them, and they're now part of the color chooser view controller and the view controller. So paste them into both. Now it's time to adopt the protocol, and I'm going to start in the view controller. And you adopt it the same way you adopted the delegate. Color chooser data source is adopted in the class declaration. We get an error message. You can hit fix to get those. Again, I don't like these up here, so I'm going to copy all these. I'm going to slide down to the bottom of my code here.
>
> **[6:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=387)** I'm going to paste them here. And I got that, and that's all good. Now I can get rid of this. They're not redundant. And now I can fill out these. So number of colors, I'm just going to return that array color names count. The name of the color, I'm going to return. Color name, index. And the color of color, I'm going to return color index. So there's our three data source methods that we would need here. And you'll notice again, I'm only returning a single value in here, which is a common thing you'll see in delegates. This way whatever else is going on, it's not the fault of the protocol. So you have to take care of it here, you'll get your errors here, you won't get them further down the code where you don't want people playing. And of course, go back to view did load. And you need to set the data source. So colors dot data source equals self. So that's one. I got to do the same thing over here in color chooser. So in color chooser I'm going to put, again, color chooser data source. And it again gives me that error message,
>
> **[8:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=480)** but it's going to be the exact same data sources, so I'm going to just copy these and pop them to the end of my code. Now all I have to do is go to view did load, colors dot data source equals self. So I make sure I tell it where it is. So that's all the code that you're going to write. And now you've got it all set up. You can go ahead and run this, and you will get a fatal error. And here's an example of those fatal errors that you'll get if you forget to put the data source equals self in here. And we do have one. It's all the way down here, I intentionally did this. We have colors, color one. This was assuming, before we had a data source, that we could put a direct value in here. And we need to get rid of this, so I'm just going to comment out both of these lines. Outside of a class, it's very very hard to adopt a delegate or a data source. And with that done, I'll close up the console again, run this, the error disappears. Looks like we've got code running. I'll pop this up. We got a button. We push the button, we get colors. I push one of my buttons and the color shows up. Working exactly the same way as we did before.
>
> **[9:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=573)** Generally, you won't pass an object with data sources or do what we did here with a model. Generally you'll be using that on UI. And doing it to different kinds of user interface elements. And the reason for that, as you can see here, is that it might not be the same everywhere with what your data source will look like. I just copied and pasted, so it worked fine. So that's not the best place to use this. However, it is used very often in user interfaces. And let's go take a look now at that use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **CLI Commands:** make (6)
> **Analogies:** just like (2), such as (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Best Practices:** general rule (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### [Delegates and data sources in Apple methods](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=0)** - I've shown you the workings of a data source. The prime place you'll see data sources is for user interface controls, many already in the APIs. Knowing how they work will give you insight into using them. Let's look at an example of this in the Huli Pizza order app. Head over to the app, and go to the storyboard. If you [Zoom](../../Skills/Software%20Development/Zoom.md) out the storyboard a little bit, you'll see towards the bottom, there's one that's for beverages, and I'll zoom in on that. You'll see this beverage scene uses a picker. Pickers are one of many controls that use data sources as delegates. This picker is not yet implemented. So we'll add data sources to implement it. So go to the BeverageViewController. I've already implemented the delegate for you. But go ahead and implement the data source. So at the end of UIPickerViewDelegate, you'll put UI... PickerViewDataSource. Once again, we get that little error, that says we do not conform to protocol. I'm going to go ahead and create the stubs. I'm again going to cut them out, with the Command + X. And you'll see further down the code, I've already made a mark for where to put them. And I'll put a Command + V here, so I put them in the right place. Now, a picker uses an array of arrays to work, which I called pickerComponents, if you look at the top here. Each of the spinning wheels on the picker is a separate component.
>
> **[1:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=93)** That component is an array, usually strings, that make up the selections on that picker wheel. Like the color chooser, the data source wants to know how many components and how many rows in each component. For the number of components, I return a count of picker components. So I'm just going to return pickerComponents.count. For the number of rows in component, I have the component number as a parameter. So I return the count of the component, return pickComponents[component].count.
>
> **[2:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=133)** While I consider a data source, and the equivalent in table views is a data source, there's one more method to implement, which is grouped with the delegates, but really should be a data source. Underneath the data sources we've got so far, add one more. pickerView, title for row. This one takes the picker component and returns it. So what we're going to do is just do, return pickerComponents, and I have the component, and the row, like so. Now head to viewDidLoad. Make sure you set the data source to self. beveragePicker.dataSource equals self. Okay, build and run. And if you forgot to turn back to the watch, you can slide over on the phone, click the icon, click on beverages, and you'll see we have a nice picker that has small, regular, large, and different drinks. I am going to to go for a root beer. Press done. And there's my root beer, appearing on my menu. There's a lot more delegate and data source-based classes in both watchOS and iOS. The most common you're looking at right now, a table view. I just wanted to give you a sample of one of them.
>
> **[3:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=227)** You can find out about these and more in some of the other courses available in the library. What I want to emphasize is the three things you want to do when you use most of these. Whenever a delegate or data source is involved in an API, do three things: adopt the protocol in the class definition, set the delegate or data source to the object involved to self, and then write the required methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2)
> **Code Identifiers:** pickercomponents (3), pickcomponents (1), pickerview (1), viewdidload (1), beveragepicker (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** api (1)
> **Speakers:** - i (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=0)** - [Instructor] I hope I cleared up some of the confusion about delegates and data sources. For some, this is one of the hardest concepts to understand. Once you do, you open up a lot of powers and opportunities with iOS and watchOS. Here's a few places I'd suggest exploring next: Apple's documentation for some of the classes that use delegates and data sources, such as UITableViewController, UIPickerView, that we've already discussed, and the documentation for UIImagePickerView for the basic camera and photo library functions. The more you read some of your favorite UI kit documentation, you may find there's extra power coming from a delegate. I encourage you to play with the sample demo. Take it apart, change parts of it, and see what happens. I put a lot of cool delegates and techniques in them. The best way to learn about delegates and data sources is to use them, and this is a great training ground. Take a look at the watchOS and other courses I mention throughout the course. You'll find in my Learning Apple watchOS 4 App Development course, several other examples of delegates for the Apple Watch, including how to use a delegate to read the digital crown. For many iOS topics you can follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) at Steven Lipton, or on Twitter @Steve Lipton.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** watchos (3), ios (2)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Steven Lipton](../../Instructors/Mobile%20Development/Steven%20Lipton.md)

## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)

## Path Context

### In [Master Swift](../../Paths/Mobile%20Development/Learning%20Paths/Master%20Swift.md)
← [Swift 5 Essential Training](Swift%205%20Essential%20Training.md) | **3 of 4** | [Swift 5- Protocol-Oriented Programming](Swift%205-%20Protocol-Oriented%20Programming.md) →

## Appears In

- [Master Swift](../../Paths/Mobile%20Development/Learning%20Paths/Master%20Swift.md)

## Related Courses

_Courses sharing skills:_

- [Swift 5- Protocol-Oriented Programming](Swift%205-%20Protocol-Oriented%20Programming.md) — Swift (Programming Language)
- [Programming For Non Programmers Ios 17 And Swift 5](Programming%20For%20Non%20Programmers%20Ios%2017%20And%20Swift%205.md) — Swift (Programming Language)
- [Swift 5 Essential Training](Swift%205%20Essential%20Training.md) — Swift (Programming Language)

---

[↑ Back to top](#)