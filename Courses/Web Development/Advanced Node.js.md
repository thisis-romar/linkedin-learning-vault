---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-node-js
url: "https://www.linkedin.com/learning/advanced-node-js"
duration_minutes: 123
duration: 2h 3m
level: Advanced
updated: 6/26/2018
learners: 112061
skills:
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEkGHoMiYtbGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619131629488?e=2147483647&amp;v=beta&amp;t=qHgIr23hW0rrmcXESXfbW0r0y_ZoCbXjvCU2XHqwFT4"
linkedin_topic: Web Development
learning_paths:
  - Advance your Node.js Skills
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/node-js
status: not-started
created: 2026-04-20
---

![Advanced Node.js](https://media.licdn.com/dms/image/v2/C4E0DAQEkGHoMiYtbGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619131629488?e=2147483647&amp;v=beta&amp;t=qHgIr23hW0rrmcXESXfbW0r0y_ZoCbXjvCU2XHqwFT4)

# Advanced Node.js

> Learn advanced techniques for asynchronous programming and data streaming in Node.js. In this course, instructor Alex Banks shows how to use asynchronous patterns such as callbacks, promises, and async/await to manage processes and enforce sequential, parallel, and concurrent execution. He then reviews streams, a critical feature for reading and writing data from Node applications. He introduces t

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js) | 2h 3m | Advanced | 112K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Alex Banks]]

## Resources

- Exercise files available

## Skills Covered

- Node.js

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=1)** - [Alex] Welcome to Advanced Node.js I'm Alex Banks.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=5)** Node.js is a run time environment for Javascript.
>
> **[0:08](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=8)** It has become wildly popular.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=10)** And it has proven that it can handle the needs of large scale distributed applications at places like Netflix and PayPal.
>
> **[0:17](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=17)** In this class we'll examine a few techniques and patterns that will help us work efficiently with asynchronist code.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=22)** We'll start out by looking at the callback pattern in Promises.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=26)** We'll learn how to run processes in sequence in parallel or concurrently using Promises.
>
> **[0:32](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=32)** After that we'll move on to the heart of the course and the heart of Node.js the stream interface.
>
> **[0:37](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=37)** We'll examine what types of streams are available of Node.js And we'll also look at how streams can make your applications way more efficient.
>
> **[0:45](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=45)** Finally we'll take a look at how we can use all of these techniques together when building http servers.
>
> **[0:51](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=51)** We'll build a web server that is capable of streaming video content to the client.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=55)** We will also modify our web server to collect data in files via the upload stream.
>
> **[1:00](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=60)** When you're finished with this course you should have an understanding of how to work with callbacks Promises and streams to make your application and code base super efficient.
>
> **[1:09](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=69)** I'm excited.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/welcome?u=76281980&t=70)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (2)
> **File Paths:** node.js (4)
> **Code Keywords:** interface (1), super (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [alex] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=0)** - [Instructor] This is an advanced Node.js class.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=3)** It doesn't mean that what we're learning here is gonna be super hard.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=5)** It just means that I've designed this course with the expectation that you're already familiar with Node.js, Javascript, and how to build Node applications and web servers.
>
> **[0:14](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=14)** I want to take the knowledge that you already have and expand it to include different techniques.
>
> **[0:19](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=19)** If you are not familiar with Node.js or you have not built a Node.js app or even installed Node.js in your development environment this course is probably not for you.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=28)** I wouldn't start here.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=29)** First, you need to understand Javascript.
>
> **[0:31](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=31)** The language of Node.js We have a ton of great courses on Javascript.
>
> **[0:36](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=36)** I would consider starting off with [[JavaScript Essential Training]] with Morton Rand Hendrickson.
>
> **[0:41](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=41)** You also want to make sure that you are comfortable building basic applications with web servers and Node.js Now if you're not, you can take my course.
>
> **[0:48](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=48)** Node.js essentials.
>
> **[0:49](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=49)** This will cover everything that you need to know to get started in Node.js And it will prepare you quite well for this course.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=55)** We're using the latest Javascript syntax in this course.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=58)** Specifically we use arrow functions a lot.
>
> **[1:00](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=60)** Destructuring quite a bit and a few constant lit modifiers.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=64)** If this syntax scares you consider taking Switching to ES6 in Node.js with Ryan Lewis.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=70)** This will get you ready for the latest syntax that's used in Node.js applications.
>
> **[1:14](https://www.linkedin.com/learning/advanced-node-js/what-you-should-know?u=76281980&t=74)** If you're comfortable with Node at a beginner's level then you're ready to improve your skills with this advanced Node.js course.

> [!info]- Semantic Content
>
> **CLI Commands:** node (14), make (1)
> **File Paths:** node.js (12)
> **Code Keywords:** class. (1), super (1)
> **Definitions:** is an  (1), means that (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course has a set of exercise files that you could download and follow along with, which will allow you to work alongside of me with the exact same content that I'll be working on.
>
> **[0:08](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=8)** In the exercise files folder, you'll find folders for each chapter in this course and a corresponding sub-folder for each video lesson.
>
> **[0:16](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=16)** When the video begins, I'll start with the files found in the start folder.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=20)** And when the video ends, what we've built will be found in the finished folder.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=24)** Sometimes the chapter folders will have assets that you need to test your code.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=28)** For example, in chapter two, we have a powder-day.mp4 movie and some sample text.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=33)** Feel free to use these files or you can also use your own files.
>
> **[0:36](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=36)** We'll be working with text files and mp4 videos in this class.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=40)** Throughout the course I'll be using the Atom text editor which is available at [atom.io](https://atom.io).
>
> **[0:45](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=45)** However, you can follow along in any text editor or development IDE of your choice.
>
> **[0:49](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=49)** Additionally, you might want to consider upgrading Node.js.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=53)** By running node-v command in the terminal, you can see what your current version of Node.js is.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=58)** If you're using something like four or six, I would strongly recommend upgrading to eight or even 10.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=64)** Some of the features of this course are brand new and only available with Node.js 10.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=70)** Well, that's all we need for setup.
>
> **[1:11](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?u=76281980&t=71)** Let's go ahead and begin this advanced Node.js course.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), find (1)
> **File Paths:** node.js (4)
> **Tools:** atom (2), terminal (1)
> **Code Keywords:** class. (1), let (1)
> **Exercise Files:** exercise files (2)
> **URLs:** [atom.io](https://atom.io) (1)
> **Env Vars:** ide (1)
> **Analogies:** for example (1)


### 1. Asynchronous Patterns

#### Callback pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=0)** - [Instructor] The think about node.js is it's asynchronous, there's only one thread and how effective our applications are at sharing the single thread across multiple processes is up to us.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=10)** In this next section, we will review essential techniques and patterns for working with asynchronous code, the first and most basic technique that is core to node.js is the callback pattern.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=20)** A callback is a block of instructions wrapped in a function so that it can be invoked when an asynchronous operation has completed.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=26)** Lets go ahead and look at some code.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=28)** So I'm gonna go into our exercise files under chapter one, under chapter one one and I'm gonna go ahead and grab the start folder and I'm gonna drag that start folder over to my code editor so I'm gonna drag it over to Atom and we will open that folder in Atom.
>
> **[0:43](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=43)** Also go back to the files and drag the start folder over my terminal so that we can open that location in the terminal as well.
>
> **[0:50](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=50)** Now I want the terminal in my code editor to be side by side, I can do so with the mac by holding the green button and then releasing my terminal window on the right side of the screen and then selecting my code editor for the left side of the screen.
>
> **[1:03](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=63)** I'll close out some of these extra files here and we're looking at our first example, the index.js that's within that start folder.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=70)** I can actually collapse, hide and show the files in the project menu in Atom by holding command backslash, so command backslash will toggle my file menu.
>
> **[1:22](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=82)** So before we can discuss callbacks, let's take a look at some synchronous code.
>
> **[1:25](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=85)** So here we have a little application that has a hide string function and what it will do is it will replace the string that we sent to the function with Xs.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=93)** So I can come out here to my terminal I'll clear the current screen and then by typing node dot I'm telling node.js to run the default index dot js file within the start folder and I can see my result hello world replaced with Xs.
>
> **[1:47](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=107)** This code is synchronous, the hide string function is executed immediately on the current thread.
>
> **[1:53](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=113)** The result, the hidden string is returned from the function using the return keyword.
>
> **[1:58](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=118)** Returning the result of a function like this is referred to as direct style.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=121)** Whenever we return a value from a JavaScript function we are working with code synchronously using direct style.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=127)** So I'll go ahead and just add one more line console dot log and so we know when our program has ended and again I'll go ahead and run this over here in the start folder by typing node dot and we can see that we see the Xs before we see the end being logged to the console.
>
> **[2:26](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=146)** Now direct style is not the only way that we can return values from functions.
>
> **[2:30](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=150)** Let's go ahead and modify the hide string function to pass its value back using something called continuation passing style or CPS.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=158)** Now to do so, we're not going to use the return keyword, what we're gonna do is take in another function as an argument, so the hide string function is now gonna take in the string and a function that we can use to pass the value of the hidden string back to the consumer.
>
> **[2:52](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=172)** So I'm gonna go ahead and type done and I'm gonna go ahead and surround the results of the string that replaced with the done method so we're actually passing the hidden string back via a function.
>
> **[3:02](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=182)** Now using continuation passing style looks a little bit different, we're gonna get rid of setting hidden equal to what was returned from the function and instead we're gonna capture the hidden variable via the arguments of the function that we pass as the second argument to hide string.
>
> **[3:18](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=198)** So I'll go ahead and move this console log here within this function too.
>
> **[3:24](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=204)** There we go and what you're gonna notice is when we come over to the terminal and then we go ahead and save this.
>
> **[3:29](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=209)** When we come over to the terminal, we're gonna run it and our results are the same so we see our hidden string, hello world, Xed out and we also see end showing up second.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=219)** You may be saying to yourself, that hide string function looks like its using a callback.
>
> **[3:43](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=223)** This is sorta true but if we wanted to get really technical about definitions, a callback needs to be asynchronous.
>
> **[3:49](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=229)** This code is still operating synchronously.
>
> **[3:52](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=232)** So we're using a function to pass the data back but we're still operating synchronously, meaning that the entire thread has executed in order when we call hide string, the value's passed back to hidden and that is executed immediately.
>
> **[4:05](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=245)** So to have a callback, we actually need to introduce some asynchronicity into our hide string code.
>
> **[4:12](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=252)** Now I can do this by invoking a process dot next tick.
>
> **[4:17](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=257)** So process dot next tick tells node.js to invoke the function that we send to next tick on the next loop.
>
> **[4:25](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=265)** So this is going to be on the next node.js loop and it won't happen synchronously.
>
> **[4:33](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=273)** Let's go ahead and go over here to the terminal window and run our code.
>
> **[4:36](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=276)** And now you can see the word end shows up before the Xs and that's because all of our code is executed and then we're actually passing the results back in the next tick or the next loop.
>
> **[4:48](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=288)** So our hidden string is being logged in the next tick or the next loop after our end string has been logged.
>
> **[4:55](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=295)** So this is a callback, specifically the done function is the callback.
>
> **[4:59](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=299)** Now that the hide string has a done function to handle the results, it can wait to execute that done function whenever it's ready.
>
> **[5:06](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=306)** Because we wait until the next tick to pass the results back to the done function, that's the key that makes it a callback.
>
> **[5:11](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=311)** So now we have to keep track to when specific lines of code execute.
>
> **[5:15](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=315)** We did not want the log hidden until we get a result from the hide string method.
>
> **[5:19](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=319)** Our code no longer executes the order that it appears on the page, it executes when it is ready.
>
> **[5:25](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=325)** As JavaScript developers, it's up to us to keep track of when our code is executing.
>
> **[5:30](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=330)** I'm gonna go ahead and replace the code that we see here, the index, with another example, a delay function.
>
> **[5:36](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=336)** So we will add a delay that we can pass a number in seconds and a callback so within the delay function what we'll do is we'll call a set time out this is another way to introduce asynchronicity into our code and we will invoke the callback function after the number of seconds times 1000.
>
> **[6:00](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=360)** So now, we can actually use this delay method to create some asynchronicity within our code.
>
> **[6:05](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=365)** So console dot log starting delays and then we'll go ahead and use the delay function and we will delay for two seconds and then this callback function will be invoked after our two second delay.
>
> **[6:24](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=384)** And if I save this and clear the terminal and run the same file again so we see starting delays and then after two seconds we see two seconds.
>
> **[6:33](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=393)** So you can see how callbacks can be used to handle asynchronous code.
>
> **[6:37](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=397)** The callback is not invoked until it's ready, until we wait two seconds.
>
> **[6:41](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=401)** Now we can sequentially execute delays using callbacks.
>
> **[6:45](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=405)** All we have to do is further ness delay calls within the callback so I'll go ahead and delay for another second and I'll go ahead and do a log here three seconds and we'll go ahead and be good and put some semicolons in this code even though I typically do not use them.
>
> **[7:08](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=428)** We'll go ahead and add another delay as well we'll delay for another second and console dot log four seconds.
>
> **[7:20](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=440)** Alright there we go so I'm gonna go ahead and save my file and let's go ahead and come to the terminal and run it so we can see we're starting delays we wait two seconds, three seconds, four seconds.
>
> **[7:30](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=450)** So using callbacks we can supply code to execute when something happens.
>
> **[7:34](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=454)** The above code is an example of sequential execution with callbacks.
>
> **[7:38](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=458)** When the first delay has completed, we log a message and execute the next delay.
>
> **[7:41](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=461)** By repeating this pattern, we're able to execute the console logs sequentially when it is time for each log.
>
> **[7:48](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=468)** However we create some pretty nasty looking code as well as a specific anti pattern called callback hell or pyramid of doom.
>
> **[7:56](https://www.linkedin.com/learning/advanced-node-js/callback-pattern?u=76281980&t=476)** In the next lessons we will examine some techniques for dealing with callback hell.

> [!info]- Semantic Content
>
> **Code Keywords:** function (27), pass (6), let (4), this. (1)
> **Tools:** terminal (10), atom (3)
> **CLI Commands:** node (7)
> **File Paths:** node.js (5), index.js (1)
> **Cross-References:** in the next (3), go back to (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** cps (1)
> **UI Navigation:** toggle (1)

#### Resolving promises
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=0)** - [Instructor] A promise is an object that can be used to represent the eventual completion of an a asynchronous operation.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=5)** Let's take a look at how we handled asynchronicity within the last lesson using callbacks.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=10)** So here we have a delay function that creates a delay that waits a certain number of seconds and then invokes a callback.
>
> **[0:16](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=16)** I come over to the terminal and run this.
>
> **[0:18](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=18)** This is our code from the last lesson.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=20)** We can see the end first tick console log appears first, because that is all of the processing on the first tick.
>
> **[0:27](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=27)** And then we can see our asynchronous callback working.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=29)** The delay has ended gets logged to the console after a second, so after some time has passed.
>
> **[0:34](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=34)** Now promises are another way that we can deal with asynchronicity within our code.
>
> **[0:39](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=39)** So I'm gonna go ahead and create the exact same function using a promise.
>
> **[0:45](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=45)** This time we're not gonna pass a callback to the delay function, all we need are the seconds.
>
> **[0:50](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=50)** We're gonna use a promise object to actually handle our callback.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=55)** So the idea behind a promise is that we can wait for an asynchronous operation to complete, and then we can resolve the promise, or we can say that that operation has completed successfully.
>
> **[1:05](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=65)** So our promise constructor here is actually gonna take a function, where we do the work of the promise.
>
> **[1:11](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=71)** And this function is gonna be passed a function called resolves, and it's also gonna be passed another function called rejects.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=79)** So the resolves function will be invoked once we have a successful resolution to the promise, and the rejects function, we can invoke that if something goes wrong.
>
> **[1:27](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=87)** So let's just start with the resolves function.
>
> **[1:29](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=89)** We'll go ahead and call our setTimeout.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=92)** And what we want to do is, opposed to using that callback, we're gonna use the resolves.
>
> **[1:37](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=97)** So once we have a successful completion of this promise, we will go ahead and invoke that within the setTimeout, and then we can go ahead and use the seconds times 1000, just like we do inside of our callback function here.
>
> **[1:51](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=111)** So now that we have a promise, using a promise is a little bit different.
>
> **[1:54](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=114)** We don't have to pass a callback method.
>
> **[1:56](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=116)** In fact, all we have to do is invoke the delay function.
>
> **[2:00](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=120)** And once we invoke the delay function, our promise will wait one second, and then it will pass the successful resolution of the promise to a .then method.
>
> **[2:09](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=129)** So any handler that we wire up inside of this then method will be invoked next.
>
> **[2:14](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=134)** The then method takes in functions.
>
> **[2:16](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=136)** So what we're gonna do, once we're done with this, is console.log, the delay has ended.
>
> **[2:30](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=150)** So here we've actually done the exact same thing that we did with our callback, but this time with a promise.
>
> **[2:35](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=155)** I'm gonna go over here to the terminal, node dot to run the code, we can see that the first tick is logged to the console first, and then we see the delay has ended.
>
> **[2:45](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=165)** So we have some asynchronous code.
>
> **[2:47](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=167)** So in this case, we have our setTimeout, and it's invoking the resolves method after however many seconds have been passed to our delay function.
>
> **[2:55](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=175)** What I'm gonna go ahead and do is, instead of invoking the resolves method directly, is I'm gonna use a arrow function inside of my setTimeout.
>
> **[3:03](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=183)** So we can see that the first argument of the setTimeout here is a function, and the second argument are the number of seconds that we want the timeout to wait for.
>
> **[3:11](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=191)** So I can also pass data via this resolves method.
>
> **[3:15](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=195)** So if I wanted to pass the message, the long delay has ended, I can do so.
>
> **[3:22](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=202)** And what happens is this message will then be passed to the function that we send to the .then method.
>
> **[3:28](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=208)** So instead of logging the message directly, I can just go ahead and say console log, message.
>
> **[3:34](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=214)** So let's go ahead and save this, and I will go ahead and run the code here again.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=219)** And we get end first tick, and then we get to see our message that has been passed back.
>
> **[3:44](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=224)** One other little trick is the .then method is set to take in functions.
>
> **[3:48](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=228)** So here's a function that passes the value for message, and then we log that value.
>
> **[3:53](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=233)** Well console log does the same thing.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=235)** Console log takes the first argument and logs it to the console.
>
> **[3:59](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=239)** So we can actually just add the console log function to the then chain.
>
> **[4:03](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=243)** So as long as we add a function to this chain, it will go ahead and operate.
>
> **[4:07](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=247)** So let me go ahead and run this again, node dot, and first tick, and we then we see our messages being logged to the console.
>
> **[4:15](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=255)** Now I called this a chain, because we can actually add other .then methods.
>
> **[4:20](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=260)** So after we do the console log, then we can console log something else if we want.
>
> **[4:25](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=265)** Let's just go ahead and say, log hello world.
>
> **[4:30](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=270)** So now we're able to delay for one second, then log the message that we receive from the promise to the console, then we'll log another message to the console.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=279)** So these then methods give us a nice way of dealing with our code.
>
> **[4:44](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=284)** So end our first tick, then the long delay was ended, and then we actually see a hello world.
>
> **[4:49](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=289)** Now the neat thing about these then methods is you can also return data.
>
> **[4:52](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=292)** So let's say that this then method returned a 42.
>
> **[4:55](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=295)** Well the 42 just becomes the argument that's passed to the next then method.
>
> **[5:00](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=300)** So I can say hello world, then we can go ahead and write this number to the console.
>
> **[5:05](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=305)** So we'll clear the current terminal screen and run it one more time.
>
> **[5:09](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=309)** So we end first tick, oops, ah, I'm using single quotes, as opposed to back ticks.
>
> **[5:15](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=315)** So if you want to use a template string, you need to remember to use back ticks, so that we can place that number in the string.
>
> **[5:21](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=321)** Let's go to the terminal and try this again, node dot, end first tick, the long delay has ended, hello world 42.
>
> **[5:29](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=329)** So this is a basic introduction to promises.
>
> **[5:31](https://www.linkedin.com/learning/advanced-node-js/resolving-promises?u=76281980&t=331)** They give us a nice way to handle what happens when a promise succeeds, using a chain of then functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), let (7), pass (5), this, (2), this. (1)
> **Code Identifiers:** settimeout (5)
> **Tools:** terminal (4)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** node (3)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)

#### Rejecting promises
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=0)** - [Instructor] In the last lesson, we introduced the Promise object and saw how it could be used to handle asynchronous code.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=5)** What we didn't implement with this Promise object is what happens if something goes wrong.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=10)** So within the Promise itself, we get to send it the code that it will invoke and anywhere this code can cause an error.
>
> **[0:16](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=16)** I can actually throw a new error and we'll call this error ar.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=22)** So let's just assume that an error happens anywhere within our Promise.
>
> **[0:25](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=25)** That means when we come over here to run the code, I do note that, oh, we see an error.
>
> **[0:31](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=31)** Well that makes sense because we threw an error.
>
> **[0:32](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=32)** Let me go ahead and drag this out so we can see this full error here.
>
> **[0:36](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=36)** What you'll notice is we see an unhandled Promise rejection, that means that an error has occurred within a Promise but we didn't handle it.
>
> **[0:44](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=44)** If I look at this Promise that I invoked in the last lesson, we can see several then methods but there is nothing here to handle an error.
>
> **[0:51](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=51)** Within Promises, we can handle the error or when something goes wrong using a catch.
>
> **[0:56](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=56)** So I'm going to go ahead and chain a catch method onto here and when we do the catch method, our error itself will be passed, so I'll go ahead and console.log and here we're going to go ahead and place the error and we'll go ahead and output the error.message So now when I go ahead and save this, come over to the terminal, clear the screen and run the current script, we notice that we don't see a huge error because we handled the error that has occurred in the Promise, we've wired up a function to deal with that error.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=92)** Now we're just logging it to the console here but we can easily add this error to a reporter or do something else with the object.
>
> **[1:39](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=99)** Now the neat thing about Promise is that we don't have to have an error to have a rejection.
>
> **[1:44](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=104)** We can simply invoke the rejects method anytime we want.
>
> **[1:48](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=108)** So if I were going to say, if (seconds > 3), I can simply call rejects to reject the Promise.
>
> **[1:57](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=117)** When I reject this Promise, I'm going to actually pass a new error and in this error, we will output the number of seconds is too long, so that's our new error message.
>
> **[2:09](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=129)** So if an error occurs, then it can be handled with the catch method but also if we invoke rejects, we can pass an error to that catch method.
>
> **[2:18](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=138)** Let's go out to the terminal and run our file, so we can see that we ended the first tick and we have the long delay has ended and hello world is returning 42, that is because we've only waited one second but what happens when we wait four seconds?
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=154)** So I'm going to go ahead and send four to the delay and run this code and we end the first tick because we are dealing with an asynchronous action and then we see that four is too long so we rejected the Promise based on the value for the seconds argument.
>
> **[2:49](https://www.linkedin.com/learning/advanced-node-js/rejecting-promises?u=76281980&t=169)** So if an error occurs, we can handle it with that catch method but also if we reject the Promise for any reason, we can also handle that with the catch method.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), throw (1), catch. (1), this, (1)
> **Cross-References:** in the last (2)
> **Tools:** terminal (2)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### The promisify function
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=0)** - [Instructor] Both promises and callbacks can be used to handle asynchronicity within JavaScript.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=5)** Promises make the code a little bit nicer, so Node JS comes with a way to quickly convert callback functions into promises.
>
> **[0:12](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=12)** I'm inside of the exercise files for chapter one, chapter one, lesson four, and in the start folder, our Index dot JS has our delay function that uses callbacks.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=22)** This delay function also incorporates errors.
>
> **[0:25](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=25)** So the Node JS rule is that errors are always passed to the callback function as the first argument.
>
> **[0:30](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=30)** So when the time is two seconds, and we go ahead and run this script by type Node dot, we can see that the two second delay is over.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=38)** We are simply just logging the message, and we can see that the callback is called and passes the message as the second argument.
>
> **[0:44](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=44)** This means that an error hasn't occurred because the error is null.
>
> **[0:48](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=48)** If we actually up the time to, say, four seconds, and then call this function, then we have an error.
>
> **[0:54](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=54)** So the rule is that we pass the error as the first argument to the callback, so in this case, if errors are passed as the first argument, we can assume that they are errors and handle them.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=64)** Now, if our callback functions are all structured like this, where they pass the error as the first argument to the callback, and they pass any additional values as second, or third, or fourth arguments to the callback, then we can quickly convert these functions into promises using a utility that ships with Node JS.
>
> **[1:21](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=81)** Let's go ahead and go to the top of this script and add a var for promisify.
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=90)** So promisify is a function that we can use to convert callback functions into promises.
>
> **[1:35](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=95)** You can find it in the util package that ships with the Node JS core.
>
> **[1:41](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=101)** So now that I have this promisify function, what I can do is use this delay function, but turn it into a promise.
>
> **[1:48](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=108)** Var promise delay equals promisify, and we'll go ahead and send it the delay function.
>
> **[1:59](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=119)** So now, we can actually use this method as a promise.
>
> **[2:02](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=122)** So I'll go ahead and call promise, delay dot two dot then, we'll go ahead and just call it console dot log, so the console log will handle whatever this promise resolves to.
>
> **[2:15](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=135)** We'll just log it to the console.
>
> **[2:17](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=137)** So if I come over here into the terminal and do node dot, we see that the two second delay is over.
>
> **[2:21](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=141)** I can also throw a dot catch, and we can grab our error, and I can go ahead and console dot log that as error and we'll go ahead and put the error dot message to the console, so let's go ahead and save that, and then I can come back over to my terminal, and we'll go ahead and run this script again with node dot, oh, and the two second delay is over, I didn't up it to a number like five that will cause an error, so we will now invoke this promise delay with five, give that a shot, and we see error, error message.
>
> **[2:59](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=179)** So I've made a second mistake here.
>
> **[3:00](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=180)** This is a common mistake that I make.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=181)** We're not using single quotes when we do template strings, we're using backticks, so let me go ahead and make sure I surround that string with backticks so that we can see the error message.
>
> **[3:11](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=191)** We'll go ahead and clear my terminal and we'll try this one more time.
>
> **[3:15](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=195)** There we go.
>
> **[3:16](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=196)** The five second delay is too long.
>
> **[3:17](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=197)** So this utility promisify is very useful and very effective.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=201)** Let's take a look at how we can use the same utility with the Node JS file system.
>
> **[3:27](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=207)** So I'm gonna go ahead and just delete all of this code, and I'm also gonna pull in the var fs.
>
> **[3:33](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=213)** So we'll say fs equals require.
>
> **[3:35](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=215)** The fs, that's our file system module, and our file system module, all of the functions use callbacks, but let's say we want it to create a writefile function that uses a promise instead of a callback.
>
> **[3:49](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=229)** So I can promisify fs writefile because it follows that Node JS pattern.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=235)** And the errors that occur in the writefile are passed at the first argument to the callback, and if any errors do not occur, any other data is passed at the second, third, or fourth arguments to the callback.
>
> **[4:04](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=244)** So this promisify utility will know how to automatically convert that writefile function into a promise, so now I can call writefile, and we'll say sample dot text, and the value that we will write to the file is this is a sample, and we don't have to use a callback, because now it's a promise, so when the file has been successfully written, we'll log a message to the console that says file successfully created, and if anything goes wrong, we can handle that with our error method, error creating file.
>
> **[4:49](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=289)** Go ahead and cap that with a semicolon, and then we can go ahead and give this a shot.
>
> **[4:53](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=293)** We'll run this by typing node dot, it says file successfully created, and then when I do LS we can see that we have a sample dot text file.
>
> **[5:02](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=302)** In fact, I can do command backslash within atom, and we can take a look at that file and we can see that we wrote the sample file.
>
> **[5:09](https://www.linkedin.com/learning/advanced-node-js/the-promisify-function?u=76281980&t=309)** So the promisify method that's found in the utilities module is a great tool for turning callback functions into promises so that they're a little bit easier to work with.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), pass (3), var (3), module (3)
> **CLI Commands:** node (10), make (3), find (1), ls (1)
> **Definitions:** is a  (4), is called (1), means that (1)
> **Tools:** terminal (3), atom (1)
> **Exercise Files:** exercise files (1), template (1)
> **UI Navigation:** go to (1)
> **Warnings:** common mistake (1)
> **Speakers:** - [instructor] (1)

#### Sequential execution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=0)** - [Instructor] In the first lesson, we introduced sequential execution with callbacks and we saw how nesting too many callbacks can create an anti-pattern called callback hell or the pyramid of doom.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=10)** Let's take a deeper look at this anti-pattern.
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=13)** So inside of our example file, inside of chapter one, chapter one lesson five, the index.js has this huge pyramid of doom.
>
> **[0:21](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=21)** So what's going on here is we're using a couple resources.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=24)** We're using the file system.
>
> **[0:25](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=25)** We're gonna write and delete the file.
>
> **[0:27](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=27)** And then on line two, we are actually setting up a function that will cause the computer to beep.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=33)** So if we write the standard output, this \xO7 code, that will actually cause the MacOS to beep, so we will hear a beep when we run this.
>
> **[0:41](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=41)** Now this doStuffSequentially is one function, but this function has a lotta callbacks.
>
> **[0:47](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=47)** So on line five we see that the function is starting, that's the first step.
>
> **[0:50](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=50)** And then on line six, we're gonna set a timeout.
>
> **[0:52](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=52)** We can't see how long that timeout is all the way down 'til line 30.
>
> **[0:56](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=56)** That looks crazy.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=58)** And then when the timeout is done, we're gonna write waiting and then we're gonna set another timeout and wait some more.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=64)** And then we're gonna write a file.
>
> **[1:05](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=65)** And when that file has been written successfully, we'll go ahead and beep.
>
> **[1:09](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=69)** We'll log that the file has been created.
>
> **[1:11](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=71)** So you can see that we have a lot of sequential steps all nested within callbacks and it makes it really hard to work with.
>
> **[1:18](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=78)** Let's go ahead and go to the terminal and take a look at what the output looks like.
>
> **[1:22](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=82)** So I'm gonna call node., we see that we're starting, waiting, everything is processing sequentially.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=88)** We heard the beep, we heard another beep.
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=90)** So we created a .txt file, we removed a .txt file and then we called sequential execution complete.
>
> **[1:36](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=96)** So all of these things are happening in order, yes, but this code would be a nightmare to maintain or edit.
>
> **[1:42](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=102)** So let's take a look at how Promises can help us resolve this anti-pattern.
>
> **[1:47](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=107)** So the first thing we're gonna do is we are also going to include our promisify utility.
>
> **[1:58](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=118)** And now that we have our promisify utility, what I wanna do is make sure that our writeFile, is fs.writeFile.
>
> **[2:09](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=129)** So we wanna turn writeFile into a promise.
>
> **[2:11](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=131)** We also wanna turn unlink, this will actually delete a file, into a promise.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=140)** So we have unlink and writeFile as promises.
>
> **[2:23](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=143)** We have our beep function.
>
> **[2:24](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=144)** We can keep that as a function.
>
> **[2:26](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=146)** What we're gonna do is create a delay promise.
>
> **[2:29](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=149)** So this is our delay promise from earlier to give the seconds.
>
> **[2:36](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=156)** That will return a new promise.
>
> **[2:39](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=159)** We're not gonna handle the rejects on this promise, 'cause we're just gonna call a setTimeout and resolve.
>
> **[2:48](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=168)** So we'll resolve that after a certain number of seconds has passed.
>
> **[2:54](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=174)** So that's our same delay promise from earlier.
>
> **[2:56](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=176)** So now we have promises.
>
> **[2:57](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=177)** We have writeFile, unlink, and delay.
>
> **[3:00](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=180)** So let's take a look at how we can execute things sequentially as promises.
>
> **[3:04](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=184)** So I'm just gonna modify this, doStuffSequentially, and turn it into a promise.
>
> **[3:11](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=191)** So it'll still be a function.
>
> **[3:15](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=195)** And instead of returning a new promise, what I'm gonna do is invoke promise.resolve.
>
> **[3:20](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=200)** So that will create a new promise object, but it will automatically resolve it.
>
> **[3:25](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=205)** Now the point of doing this, is I can then chain up the sequential steps using then methods.
>
> **[3:30](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=210)** So the very first step was to actually log to the console that we're starting.
>
> **[3:35](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=215)** So there's our first.
>
> **[3:37](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=217)** And then in the next then method, what I'm gonna do here is return a promise.
>
> **[3:42](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=222)** So at this point we can delay for one second.
>
> **[3:45](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=225)** So when I return a promise inside of a then method, that means that the then method will wait for this delay before invoking the next .then method.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=235)** So in this case we can go ahead and we'll just return the message waiting and then we'll go ahead and console.log that message.
>
> **[4:06](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=246)** So remember in our thenables if a function returns something it can be used in the next thenable.
>
> **[4:11](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=251)** And the reason we're using console.log as opposed to taking in the message and console logging the message, is because just adding the console.log function will do the same thing, because message is the first argument that would be sent to this function.
>
> **[4:27](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=267)** If you add it like this, be careful not to invoke it.
>
> **[4:29](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=269)** We want to wait to invoke console.log until the waiting message has been displayed.
>
> **[4:34](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=274)** So then that takes us through here.
>
> **[4:36](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=276)** So it looks like then we have another delay.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=279)** So I will go ahead and call delay.
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=282)** And this time our delay is for two seconds.
>
> **[4:45](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=285)** So after this delay what I can do is write the file.
>
> **[4:50](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=290)** So since we have a promise, we can simply return that promise write.File.
>
> **[4:56](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=296)** And we'll write file.txt and then go ahead and say it's a Sample File.
>
> **[5:04](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=304)** So we will wait for node.js to write the file before invoking the next then.
>
> **[5:09](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=309)** So in this case, we'll go ahead and just add the beep.
>
> **[5:12](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=312)** So then we will add a beep and then after we beep we can go ahead and return the message, file.txt created.
>
> **[5:24](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=324)** And then after we do that we can console.log that message.
>
> **[5:30](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=330)** Then we'll go ahead and do another delay.
>
> **[5:34](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=334)** So we'll delay for three seconds.
>
> **[5:36](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=336)** After we delay for three seconds, we will then delete the file.
>
> **[5:41](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=341)** So we can call an unlink, file.txt.
>
> **[5:46](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=346)** And after we have deleted the file, we will go ahead and beep again.
>
> **[5:50](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=350)** So we're following the same process that's in this pyramid of doom.
>
> **[5:55](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=355)** And then after we beep, we will go ahead and just say file.txt removed and that .then(console.log) and if anything goes wrong, we wanna handle it.
>
> **[6:09](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=369)** So we're gonna add one catch method to catch anything that goes wrong.
>
> **[6:13](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=373)** And we will go ahead and take that error.
>
> **[6:16](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=376)** So something else we can do is throw the error.
>
> **[6:18](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=378)** So I could say error, console.error and then throw the error in there.
>
> **[6:26](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=386)** And again, just like our earlier console.log, all the catch function needs is a function as the argument.
>
> **[6:31](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=391)** So this will actually do the exact same thing.
>
> **[6:34](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=394)** If I just pass it the console.error, it will then throw that first error argument up to the console.
>
> **[6:40](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=400)** So there is another way to handle things sequentially.
>
> **[6:44](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=404)** And this time using Promises, we can see that our code is much cleaner, much easier to organize.
>
> **[6:51](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=411)** Everything's happening in order.
>
> **[6:53](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=413)** Let's go out to our terminal and give this a shot, node dot.
>
> **[6:57](https://www.linkedin.com/learning/advanced-node-js/sequential-execution?u=76281980&t=417)** So we can see that we're starting, waiting, things are happening sequentially, just like they were in the pyramid of doom, although it is much easier to manage this.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (5), delete (3), this, (3), throw (3)
> **Code Identifiers:** writefile (5), dostuffsequentially (2), xo7 (1), settimeout (1)
> **File Paths:** file.txt (4), index.js (1), node.js (1)
> **CLI Commands:** node (3), make (1)
> **Cross-References:** in the next (2)
> **Tools:** terminal (2)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** just like (2)

#### Sequential execution with async/await
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=0)** - [Instructor] Promises give us a nice way to organize what happens by chaining together .then handlers.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=5)** We use this technique to compose promise chains that can execute sequentially.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=10)** But what if you don't want to compose functions in a chain?
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=13)** What happens when you just want to write code?
>
> **[0:15](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=15)** All we really need to do is wait for the result of one promise to complete before running some more code.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=20)** Do we always have to encapsulate code bits in tiny functions?
>
> **[0:23](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=23)** The answer is no.
>
> **[0:25](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=25)** JavaScript provides us a way to work with promises using code that appears synchronous, but is in fact asynchronous.
>
> **[0:31](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=31)** The solution is async functions.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=33)** Inside of an async function, you can await for a promise to complete.
>
> **[0:37](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=37)** Let's look at how we can modify the current sequentially executed promise chain using async and await.
>
> **[0:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=43)** So the doStuffSequentially function, to get started I'm just gonna go ahead and delete these last lines of code, the last .thens that we added to the doStuffSequentially function.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=53)** And what I'm gonna go ahead and do is I need to make this into an async function.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=57)** So you make an async function, simply by typing async right in front of the function declaration.
>
> **[1:03](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=63)** And I'm gonna get rid of this Promise.resolve call, and we will operate this function right between the brackets.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=70)** So what an async function allows us to do is write code that appears synchronous.
>
> **[1:14](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=74)** So we can write code line-by-line, and we can tell certain lines to wait for a result before executing any further.
>
> **[1:21](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=81)** So I'll just go ahead and add a console.log starting.
>
> **[1:24](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=84)** Seems to be the first thing that we have.
>
> **[1:26](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=86)** And now, inside of an async function, I can use the await key word, with a promise.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=92)** So this await will await a delay of one second.
>
> **[1:36](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=96)** So before we execute any code found on line 13 and beyond, we will wait for the delay promise to be resolved.
>
> **[1:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=103)** So I'll go ahead and console.log waiting.
>
> **[1:49](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=109)** And then we can await another delay.
>
> **[1:54](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=114)** And I'll go ahead and await a writeFile.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=121)** So this works with any promise.
>
> **[2:02](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=122)** And we've created a writeFile promise using the utilities promisify function.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=127)** So we will write some sample text to this file.
>
> **[2:14](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=134)** And when we're done writing the file, we'll go ahead and beep.
>
> **[2:17](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=137)** We can just invoke that as a function.
>
> **[2:21](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=141)** So file.txt created.
>
> **[2:25](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=145)** And then after we create that file, we'll go ahead and await another delay.
>
> **[2:30](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=150)** We'll wait for three seconds.
>
> **[2:32](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=152)** And then we will await the unlink promise, file.txt.
>
> **[2:37](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=157)** So we're doing the exact same thing that we did with the thenables, but notice this code looks a little bit more synchronous.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=163)** It's a little cleaner to edit.
>
> **[2:52](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=172)** There we go.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=173)** So now I can get rid of this entire .then chain, because the doStuffSequentially function will still operate sequentially.
>
> **[2:59](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=179)** It still uses promises, but as opposed to wiring up every handler and additional then statements, we can actually write the code line-by-line and just call certain lines to wait.
>
> **[3:08](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=188)** Let's go ahead and run this and see what happens in our terminal.
>
> **[3:14](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=194)** And here we see roughly the same results.
>
> **[3:18](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=198)** Now since we didn't see this in the last lesson, I'm gonna go ahead and open up my files.
>
> **[3:23](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=203)** So here's my project folder.
>
> **[3:24](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=204)** I got there by typing command backslash.
>
> **[3:27](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=207)** Let's go ahead and run it again, just so we can see that file getting created.
>
> **[3:31](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=211)** And being removed.
>
> **[3:33](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=213)** So there's file.txt.
>
> **[3:35](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=215)** One of the benefits of writing code this way is we can handle errors with tryCatch blocks.
>
> **[3:40](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=220)** That will allow us to specify what errors we want to handle exactly.
>
> **[3:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=223)** Like, for instance, I could put a try, and catch block around this writeFile and beep.
>
> **[4:00](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=240)** And I can handle the error that way.
>
> **[4:02](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=242)** So now if anything goes wrong with writing the file, we can go ahead and add that error, or we can actually create a new error, if we wanted to.
>
> **[4:08](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=248)** We could surround the entire function in a tryCatch block if we wanted to.
>
> **[4:13](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=253)** That would be available to us, as well.
>
> **[4:15](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=255)** And then finally, if we wanted to keep the doStuffSequentially function working the exact way it did in the past, it would need to return a promise.
>
> **[4:22](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=262)** So all we need to do is return Promise.resolve.
>
> **[4:29](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=269)** And now in this case, the return is not direct style.
>
> **[4:32](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=272)** So because we're in a asynchronous function, all of these lines that have awaits are gonna wait before processing any further, so we will wait for the file to be unlinked before we return a resolved promise.
>
> **[4:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=283)** And just returning that promise resolve, allows me to then dot chain extra thenables on here, or use the doStuffSequentially within its own async await function.
>
> **[4:53](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=293)** Now, I do want to delete this and actually show one more quick example.
>
> **[5:00](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=300)** So there is one more thing that I want to show you about asynchronous functions before we move on, and that is that we can also obtain data from them.
>
> **[5:08](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=308)** So let's say that we wanted to use a read directory promise.
>
> **[5:11](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=311)** We can go ahead and create one up here, readdir.
>
> **[5:16](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=316)** And the readdir will read our directory, because we're gonna promisify the fs.readdir method.
>
> **[5:27](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=327)** So if I were to execute this promise, readdir, and say .then, I would actually get the files as an argument passed to the thenable, because the read directory promise is gonna read directory and then give me a result.
>
> **[5:43](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=343)** So we can also obtain the data that would be resolved in a promise in an async await function, too.
>
> **[5:49](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=349)** I'll give you an example.
>
> **[5:50](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=350)** We'll go ahead an create an async function, async function start.
>
> **[5:55](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=355)** And when we go ahead and start this program, we will get the files by saying var files equal the result of await.
>
> **[6:05](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=365)** So we're still using the promise.
>
> **[6:08](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=368)** Go ahead and read the files in the current directory.
>
> **[6:10](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=370)** And then I can go ahead and log those results.
>
> **[6:15](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=375)** So because the readdir is a promise, we are still waiting for it to be resolved before moving to line 14.
>
> **[6:22](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=382)** Any data that the readdir promise would return, we can actually set using an equal sign, because line 13 is going to await for readdir to resolve and return its results.
>
> **[6:32](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=392)** So let's go ahead and give this a shot.
>
> **[6:34](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=394)** I can clear out my current terminal, type node dot one more time.
>
> **[6:38](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=398)** Oops, I better call start.
>
> **[6:40](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=400)** So we put it in an asynchronous function called start, and then forgot to invoke it.
>
> **[6:44](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=404)** So let me go ahead and add that and try this one more time, over in the terminal, node dot.
>
> **[6:50](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=410)** And we can see that we have two files in the current directory.
>
> **[6:53](https://www.linkedin.com/learning/advanced-node-js/sequential-execution-with-async-await?u=76281980&t=413)** So asynchronous functions give us a really nice way to organize our code in a more manageable fashion.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), await (13), async (12), let (6), delete (2)
> **Code Identifiers:** dostuffsequentially (5), writefile (3), trycatch (2)
> **CLI Commands:** make (2), node (2)
> **File Paths:** file.txt (3)
> **Tools:** terminal (3)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### Parallel execution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=0)** - [Narrator] In the last few lessons, we discussed sequential execution.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=3)** But promises also come with some functions that allow us to resolve them at the same time.
>
> **[0:08](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=8)** We can make a bunch of asynchronous requests at once and obtain a series of asynchronous results faster, because these requests will not have to execute in order, or wait for the previous request to be completed.
>
> **[0:19](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=19)** When we're resolving several promises at the same time, it's referred to as parallel execution.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=24)** Let's go ahead and take a look at our sample.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=26)** Now we still have some of the same code that we created in the last few lessons.
>
> **[0:30](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=30)** Using the file system and promise of file utility, we've created promises for writeFile, unlink, and readdir.
>
> **[0:36](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=36)** We also have a beep function on line six that will cause a beep to occur, and then we have a delay function that will return a custom promise that will wait for a certain number of seconds.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=46)** We can create a single promise that will resolve several promises at once using promise.all.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=53)** So promise.all will take in an array of promises to resolve.
>
> **[0:59](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=59)** So we'll go ahead and writeFile.
>
> **[1:01](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=61)** And go ahead and write a readme.md, and we can go ahead and write a hello world message in that file.
>
> **[1:09](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=69)** We'll write a second file.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=72)** We'll go ahead and write a readme.txt.
>
> **[1:15](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=75)** Also write a hello world message.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=79)** And let's go ahead and write a third file and actually let me make sure I spell writeFile correctly across all three of these.
>
> **[1:25](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=85)** And the third file will be a readme.json, and we'll just go ahead and put in a hello world as json in this file.
>
> **[1:36](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=96)** Great.
>
> **[1:37](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=97)** So now the promise all returns a single promise that will be invoked once all of these promises have resolved.
>
> **[1:44](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=104)** So we can then handle the result of all three of these file writes in one place.
>
> **[1:48](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=108)** Let's go ahead and return a readdir.
>
> **[1:53](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=113)** And we will just go ahead and console.log whatever the results are from the read directory.
>
> **[2:00](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=120)** So this code will wait for all three write file promises to resolve before reading the directory and logging its results.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=127)** So I'm gonna come over here to my terminal and run this by typing node.
>
> **[2:12](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=132)** And we can see that we have a list of files that are in that directory.
>
> **[2:16](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=136)** Now if I wanted to remove these files I can use my unlink promise.
>
> **[2:19](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=139)** So I'll just go ahead and replace these with unlinks.
>
> **[2:22](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=142)** And all we have to send the unlink promise is the file name.
>
> **[2:27](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=147)** To really get a sense of how this works I'll go ahead and add another promise, a delay.
>
> **[2:31](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=151)** So we will delay for three seconds.
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=154)** So now we have three unlinks which will remove the files, and a delay.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=158)** So we're gonna wait three seconds because it will take three seconds for all of these promises to resolve.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=163)** So let's go ahead and go over to our terminal.
>
> **[2:46](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=166)** Node.
>
> **[2:48](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=168)** And we can see that we have a pause, and then we see the files that are in the directory.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=173)** Readme.json, readme.md, and readme.txt no longer there because they have been removed.
>
> **[3:00](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=180)** So let's consider a bunch of long processes.
>
> **[3:03](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=183)** Let's say that we had a delay, five, a delay, two, and a delay, we'll do another delay five.
>
> **[3:15](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=195)** So here we have some promises and a couple of them, the first and last one, are gonna take quite a while to resolve.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=201)** So I can go ahead and run this in my terminal, and what we're gonna notice is we're not gonna read the content of the directory until that last promise has resolved.
>
> **[3:30](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=210)** So until all five of them are resolved.
>
> **[3:32](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=212)** But there is something else that we can do.
>
> **[3:34](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=214)** We can also execute promises in parallel by using promise.race.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=219)** So promise.race still creates a single promise, but instead of waiting for all of the promises to be resolved before the single promise is resolved, we're only going to wait for the first promise to be resolved.
>
> **[3:49](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=229)** So let's go over here and try to run this.
>
> **[3:51](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=231)** Node.
>
> **[3:53](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=233)** And what you'll notice is we still have a two second delay, but then we see the results of that promise before it has completed.
>
> **[3:59](https://www.linkedin.com/learning/advanced-node-js/parallel-execution?u=76281980&t=239)** So promise.all and promise.race give us a way to execute promises in parallel.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (2), this. (1)
> **File Paths:** readme.md (2), readme.txt (2), readme.json (2)
> **CLI Commands:** node (3), make (2)
> **Code Identifiers:** writefile (3)
> **Cross-References:** in the last (2), we discussed (1)
> **Tools:** terminal (3)
> **Speakers:** - [narrator] (1)

#### Concurrent tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=0)** - [Instructor] So so far we've looked at a couple of ways to execute asynchronous tasks sequentially.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=5)** We also looked at a way that we can execute asynchronous task as promises in parallel.
>
> **[0:09](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=9)** But what happens if we want to combine both sequential and parallel operations?
>
> **[0:14](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=14)** Sometimes your promises may contain large tasks that eat a lot of resources or take a lot of time to process.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=20)** Running everything at once can be too costly, but running one task at a time may take too long.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=26)** A possible solution for this is to create a task queue that can run a specified number of tasks concurrently at the same time.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=33)** Let's implement a promise queue that can run a specified number of promises at the same time.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=38)** For this example I'm inside of our exercise files under chapter one, chapter one, less eight and within the start folder you'll see that we have the delay promise that we created that will create a promise that will delay for a specified number of seconds.
>
> **[0:51](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=51)** So here we have a list of tasks and we're using the delay function because we're acting like some of these tasks take really long, like on line 13 we're gonna delay for 10 seconds, a few of them are only three seconds, some of them are four seconds.
>
> **[1:03](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=63)** We can use delays or read files, write files, fetch, any promise would be able to go inside of this task list.
>
> **[1:11](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=71)** So what we need to do is we need to make a concurrent task queue.
>
> **[1:15](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=75)** And what I'm gonna go ahead and do is create var delay queue and we're gonna call this a new promise queue.
>
> **[1:27](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=87)** And we'll pass in the task that we wanna execute.
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=90)** And then the next thing that we're gonna pass in is how many tasks we wanna execute at once.
>
> **[1:35](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=95)** Let's say that we only wanted to execute two tasks concurrently at the same time.
>
> **[1:40](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=100)** And then we would tell our delay queue to run.
>
> **[1:44](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=104)** Now you're probably wondering where our delay queue is, whether or not we need to install an NPM, no, we're actually gonna build this promise queue.
>
> **[1:51](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=111)** So I'm gonna come up here and just create a new class and we'll call it the promise queue.
>
> **[1:59](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=119)** And inside of this promise queue we'll have a couple of functions.
>
> **[2:02](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=122)** So we will have a constructor and our constructor, right, this is function that we evoke here on line 26 so we know that it needs to take the task, I'm gonna call the task the promises, it also needs to take a concurrent count, how many tasks we should run at the same time.
>
> **[2:24](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=144)** We'll go ahead and default this to one in case it's not supplied.
>
> **[2:27](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=147)** We're also gonna need a little getter, we're gonna do a getter for a run another and this will tell us whether or not we're gonna run another task.
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=154)** And then we also need to add our run method.
>
> **[2:39](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=159)** So, this is gonna be our class for our promise queue, our delay queue is gonna be an instance of the promise queue, let's go ahead and write the code.
>
> **[2:46](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=166)** So in the constructor I just wanna save a bunch of variables to this instance, we'll say this dot concurrent equals our concurrent count.
>
> **[2:57](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=177)** This dot total is gonna be the total number of promises that we have, we can find that in promises dot length.
>
> **[3:05](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=185)** So we also need a to do list.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=187)** So this dot to do are the promises that we need to do.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=190)** So these are the ones that need to be invoked.
>
> **[3:13](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=193)** We'll be removing tasks from this list.
>
> **[3:16](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=196)** We're also gonna need an array to hold this dot running, or the current task that we are running.
>
> **[3:22](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=202)** So we'll have an array of those and then we're gonna have another array, this dot complete and this will hold the completed tasks.
>
> **[3:29](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=209)** So these are basically three arrays.
>
> **[3:31](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=211)** The first one is an array of promises, that's our to do list, that's the tasks that we've passed into this function.
>
> **[3:37](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=217)** So as we start running these tasks we're gonna move tasks from the to do list two at a time to the running list and as they're completed we're gonna move them from the running list to the complete list.
>
> **[3:45](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=225)** So we're just gonna manage these lists so that we can get all of the tasks completed running them concurrently two at a time because we've specified two as the number of tasks that we want to run at once.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=235)** So for run another, this is gonna tell us whether it's time to run another task.
>
> **[3:59](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=239)** I'm gonna go ahead and return this dot running dot length.
>
> **[4:06](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=246)** So I wanna make sure that this dot running dot length is less than this dot concurrent.
>
> **[4:10](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=250)** So we wanna make sure that this dot running dot length doesn't have any more than two tasks at a time and we also wanna make sure that there's still items in the to do list, this dot to do dot length will tell us that.
>
> **[4:22](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=262)** So here we just have a Boolean value that's gonna return from this run another getter and it will tell us whether we can run another task or not.
>
> **[4:29](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=269)** So let's go ahead and run our tasks concurrently.
>
> **[4:31](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=271)** We will do this in the run function.
>
> **[4:34](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=274)** So we'll go ahead and say, while this dot run another.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=279)** So while run another returns true we will go ahead and run another task.
>
> **[4:43](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=283)** So let's go ahead and grab our promise from the to do list.
>
> **[4:51](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=291)** So this dot to do dot shift will remove the promise from the to do list and set it as the variable on line 34.
>
> **[5:00](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=300)** And then I'm gonna go ahead and run it.
>
> **[5:01](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=301)** So we, by pulling the promise out I can say promise dot then and once this promise is resolved we can go ahead and say this dot complete dot push, this dot running dot shift.
>
> **[5:15](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=315)** So again, the shift moves it out of the current list.
>
> **[5:18](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=318)** So we've moved the promise from the to do list and we're gonna actually also put that promise this dot running dot push into the running list.
>
> **[5:30](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=330)** So we've removed a promise from the to do list, we've pushed it into the running list and then when it's complete we're removing it from the running list and pushing it into the complete list.
>
> **[5:39](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=339)** Now the only other thing that we need to do is when this promise is complete we wanna make sure that we invoke this dot run again.
>
> **[5:47](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=347)** So here is our promise queue that can run a certain number of promises concurrently.
>
> **[5:52](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=352)** The only problem is is we can't visualize this queue just yet, so we're gonna actually need to add some more code in order to do that.
>
> **[6:00](https://www.linkedin.com/learning/advanced-node-js/concurrent-tasks?u=76281980&t=360)** And we'll do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), pass (2), var (1)
> **CLI Commands:** make (5), npm (1), find (1)
> **Env Vars:** npm (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Logging concurrent tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=0)** - [Voice Over] In the last video, we created a promise queue.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=3)** Let's set up a way to visualize this queue in the console.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=7)** What I wanna do is install an NPM called log update.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=10)** So I'm gonna come over here to the terminal and type NPM install log update.
>
> **[0:16](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=16)** And what log update is gonna do is it's gonna allow us to keep the updates that we wanna log to the console in the same place.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=24)** So they will over write each other as opposed to seeing continuous console logs scroll down our terminal.
>
> **[0:30](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=30)** So I'm gonna come up here to line one, and I'm gonna make sure I import that.
>
> **[0:34](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=34)** Log update equals require log update.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=40)** So we'll use that to manage the console log.
>
> **[0:42](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=42)** And then I'm gonna create another variable called to X.
>
> **[0:44](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=44)** And what to X is gonna do is it's just going to return a capital X.
>
> **[0:49](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=49)** So what we're gonna do is take every item in the queue and we're gonna represent it with a capital X.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=53)** So I will use that to X function inside of my logs.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=57)** So I'm gonna go ahead and create one more function inside of my promise queue and that is one to graph the task.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=64)** So I'm just gonna come over here into my graph task and I'm gonna go grab these lists.
>
> **[1:08](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=68)** So we'll take a list at the to do list, the running list, and the complete list.
>
> **[1:13](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=73)** And we will grab these from this instance.
>
> **[1:17](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=77)** So just a little bit of destructuring there.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=79)** We're gonna go ahead and grab those three lists, so that we can log them to the console.
>
> **[1:23](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=83)** So we're gonna use the log update, and I'm gonna use a template string.
>
> **[1:27](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=87)** The nice thing about template strings is they honor white space, so I can kinda really make these logs stand out.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=92)** So let's take a look at what's in our to do list.
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=94)** So our to do list will be an array, our running list will represent as an array, and our complete list will represent as an array in this log.
>
> **[1:43](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=103)** And what we're gonna do is just take these lists, and display a series of X's.
>
> **[1:47](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=107)** So I will go ahead and say to do dot map, to X, and I can go ahead and just copy this code right here and I will paste it in running and complete, and replace this with running, and replace this last one with complete.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=127)** So we're actually gonna go ahead and graph the task within our run method.
>
> **[2:10](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=130)** I wanna graph these tasks when we call the run method, so when we push anything into running, we'll call this dot graph task.
>
> **[2:18](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=138)** And we also want to invoke graph task after we move anything into the complete array.
>
> **[2:22](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=142)** So I will also call this dot graph task.
>
> **[2:25](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=145)** All right.
>
> **[2:26](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=146)** So now we've completed our promise queue.
>
> **[2:29](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=149)** It should give us information on which of our tasks are actually running, and which ones are complete.
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=154)** And here's our task list that we sent to that promise queue.
>
> **[2:37](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=157)** Let's go ahead and watch this work.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=158)** I'm gonna go over to the terminal and type node dot.
>
> **[2:41](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=161)** And we can see that we have a lot of tasks to do, two at a time are running.
>
> **[2:45](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=165)** As those promises resolve, we remove tasks from the to do list to the running list, and then to the complete list.
>
> **[2:52](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=172)** So this promise queue class we created will work would any array of promises.
>
> **[2:57](https://www.linkedin.com/learning/advanced-node-js/logging-concurrent-tasks?u=76281980&t=177)** And it's a queue that we can use to help manage running tasks concurrently in our node JS services.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), make (2), node (2)
> **Code Keywords:** let (3), function (2), require (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** npm (2)
> **Exercise Files:** template (2)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)


### 2. Advanced Streams

#### Why streams?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=0)** - [Instructor] Streams are very important to Node.js and as an Node.js developer, you're going to want to know your way around the stream interface.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=7)** To exemplify how streams work in Node.js, we're going to use an analogy.
>
> **[0:11](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=11)** Consider a very large bucket of water.
>
> **[0:15](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=15)** So you have a giant bucket of water and let's say you have to move this giant bucket of water into another giant bucket.
>
> **[0:21](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=21)** So, we'll refer to our bucket of water as the source and the bucket that we need to move the water to as the destination.
>
> **[0:27](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=27)** Now, if you wanted to build a business around moving water from the source to the destination, you're going to need some space.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=33)** So there we go.
>
> **[0:34](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=34)** Your business has a factory and in that factory, you have an empty, giant bucket with a B on it.
>
> **[0:39](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=39)** That stands for buffer.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=40)** So when it's times for you to actually move the water from the source to the destination, you can pull the water into your factory, pour all of it into your buffer bucket, and pull the destination bucket into the factory, and pour all of the water in your buffer bucket into the destination.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=55)** There's a solution.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=57)** But there's got be a better way, and there is.
>
> **[1:00](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=60)** A hose.
>
> **[1:02](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=62)** What if we were able to hook a hose up to the source bucket and pipe all of the water through the hose to the destination bucket?
>
> **[1:09](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=69)** We will have created a stream, and water will move bit by bit from the source to the destination bucket.
>
> **[1:15](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=75)** Now, in Node.js, we're not in the business of moving water, we're in the business of moving data, but we have a similar problem to solve.
>
> **[1:22](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=82)** Let's take a look at a couple examples.
>
> **[1:25](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=85)** So I'm inside of chapter two, chapter two, lesson one.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=88)** Within the start folder, you'll notice there's a couple of files.
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=90)** We have stream.js file, a buffer.js file, and a little mp4 movie of a powder-day here in Lake Tahoe.
>
> **[1:39](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=99)** So let's start off by taking a look at the buffer.js file.
>
> **[1:42](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=102)** Now again, what we're trying to do is move data from a source to a destination.
>
> **[1:47](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=107)** The source is the powder-day.mp4 video, and we've declared a reference to that on line three, and the destination is going to be a HTTP response.
>
> **[1:55](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=115)** The actual data is getting sent to the destination on line 12 when we end the response.
>
> **[2:00](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=120)** So, we're creating a HTTP server that runs on Port 3000 and it's how we get the file that matters.
>
> **[2:06](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=126)** So we're using the FS.read file, which is going to read the entire contents of the MP4 video into a single variable.
>
> **[2:13](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=133)** That variable is data, so that's our buffer, and we're sending the entire data back on line 12, once we have the entire contents of the movie loaded.
>
> **[2:22](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=142)** So let's take a look at what this does to memory.
>
> **[2:25](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=145)** We're gonna come over to my desktop, and I have my activity monitor open.
>
> **[2:29](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=149)** And you can find that simply by searching for activity monitor.
>
> **[2:32](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=152)** And what we're gonna be checking is the memory.
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=154)** So I'm gonna go to the memory tab, and I'm gonna do a search for any node processes.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=158)** So we don't have any running now, but we're about to start one.
>
> **[2:41](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=161)** I'm gonna come over to my terminal, and I'm gonna go ahead and start the node process for buffer.js by typing node
>
> **[2:47](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=167)** - -trace _gc buffer .js.
>
> **[2:52](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=172)** The trace gc command is gonna go ahead and trace garbage collection on this process, so we can see how our garbage collector is working.
>
> **[2:59](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=179)** So great, now that we have this running on localhost:3000, you can actually see in the activity monitor, we have a node process.
>
> **[3:05](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=185)** We're using memory, awesome.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=187)** So let's go ahead and go to a web browser, and make some requests for our server.
>
> **[3:12](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=192)** So here, it's running on localhost:3000.
>
> **[3:14](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=194)** I have five browser tabs open, and I'm gonna make five requests.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=199)** I'm turning the sound off in each request.
>
> **[3:23](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=203)** There we go, so.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=206)** Request four, and then let's make one more.
>
> **[3:28](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=208)** Request five.
>
> **[3:30](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=210)** There we go.
>
> **[3:31](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=211)** So we have five requests running, all getting the video.
>
> **[3:35](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=215)** So let's take a look at what's happening.
>
> **[3:36](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=216)** So inside of the terminal window, you're gonna notice two types of garbage collection.
>
> **[3:42](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=222)** We have Scavenge, and we have Mark-sweep.
>
> **[3:44](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=224)** And you're gonna notice that we have actually, a lot of these Mark-sweeps.
>
> **[3:47](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=227)** So this Mark-sweep is actually a much bigger deal because Mark-sweep is gonna stop your node process to clean up a lot of garbage.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=235)** The Scavenge doesn't clean up as much garbage.
>
> **[3:57](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=237)** We're also gonna notice that we're using 157 megabytes of memory.
>
> **[4:02](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=242)** So, that's how we handle this with the buffer.
>
> **[4:04](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=244)** I'm gonna go ahead and give this a stop, by hitting control+C.
>
> **[4:08](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=248)** And we'll go ahead and clear the screen.
>
> **[4:10](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=250)** We'll also notice our node process disappear in the activity monitor.
>
> **[4:14](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=254)** So let's go ahead and take a look at the stream example.
>
> **[4:17](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=257)** So, the only difference in the stream example is on line eight, we're creating a read stream with the file system.
>
> **[4:23](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=263)** So that will read this file bit by bit, and send those bits to the client as soon as they get them.
>
> **[4:29](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=269)** So let's go ahead and try this again.
>
> **[4:31](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=271)** Let's come back out to our terminal.
>
> **[4:33](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=273)** And this time, we're gonna node
>
> **[4:35](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=275)** - -trace _gc stream.js.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=279)** And we have that running in localhost:3000.
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=282)** So I'll come over here to localhost, and we're gonna make the same five requests.
>
> **[4:47](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=287)** One, two, three, four, and five.
>
> **[5:01](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=301)** So what you'll notice is we have some Scavenge garbage collection, but we don't have any Mark-sweeps.
>
> **[5:07](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=307)** And again, Scavenge is a quicker version of the garbage collector that runs on a smaller bit of memory.
>
> **[5:13](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=313)** You can almost think of it as like your short-term memory for your application.
>
> **[5:16](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=316)** The Mark-sweep is a bigger deal, and we don't see any of those.
>
> **[5:19](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=319)** Additionally, if we come over to the activity monitor, you will notice that we're only using 40 megabytes of memory.
>
> **[5:26](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=326)** So that's significantly less memory.
>
> **[5:28](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=328)** And the reason is we aren't loading the entire contents of each video file before we're sending it, we're sending it bit by bit.
>
> **[5:35](https://www.linkedin.com/learning/advanced-node-js/why-streams?u=76281980&t=335)** So, in order to create performant applications, streams are absolutely essential.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), make (4), find (1)
> **Code Keywords:** let (10), interface (1)
> **File Paths:** node.js (4), buffer.js (3), stream.js (2)
> **Ports:** :3000 (3), port 3000 (1)
> **URLs:** [localhost:3000](https://localhost:3000) (3)
> **Env Vars:** http (2), mp4 (1)
> **Tools:** terminal (3)
> **Definitions:** is a  (2), stands for (1)

#### Readable streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=0)** - [Instructor] In the last lesson we discovered why streams are important.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=3)** In the next several lessons we're going to take a look at the various types of streams that you can use with nodejs.
>
> **[0:09](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=9)** We're going to start with readable streams.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=10)** Now, a readable stream reads data from a source and then feeds it into a pipeline bit by bit.
>
> **[0:16](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=16)** For instance, we can create a readable stream that can read from a source array.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=20)** I'm inside of chapter two, chapter two lesson one, inside of the start folder, and in your index.js file you'll find a sample array of strings.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=28)** These are local mountain peaks here in the Sierra.
>
> **[0:31](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=31)** So what we're gonna do is we're gonna create a particular type of stream that can read the data from the array and then pass it along chunk by chunk.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=40)** So, let's see what that would look like.
>
> **[0:42](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=42)** I'm gonna go ahead and create a new instance of our peak stream, and we're gonna use the new StreamFromArray class, and we'll pass it the peaks.
>
> **[0:54](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=54)** Now streams implement the event emitter, which means they can raise events.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=58)** So we can listen for particular events.
>
> **[1:00](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=60)** On a read stream we wanna listen for data events.
>
> **[1:05](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=65)** So whenever a data event is raised, a little bit of data is passed to the callback function.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=70)** We'll call that a chunk.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=72)** And what we'll do is we'll just take a look at what a chunk of data looks like by logging it.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=79)** Another important read stream event is end.
>
> **[1:23](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=83)** When the stream is finished reading, an end event will be raised.
>
> **[1:26](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=86)** And when this is over we'll just go ahead and console that log, done.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=92)** Great.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=93)** So now all we have to do is implement the class StreamFromArray.
>
> **[1:37](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=97)** So, we're actually going to create a readable stream, so the first thing I'm gonna do is get my readable stream from the stream module, and now I'm going to go down here and create our new class, StreamFromArray, and this is gonna extend the readable stream.
>
> **[2:03](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=123)** So we are actually going to create a readable stream.
>
> **[2:05](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=125)** It will inherit that interface.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=127)** Whenever we extend the readable stream, we want to implement a read function.
>
> **[2:11](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=131)** So the read function is what happens when this stream reads a chunk of data.
>
> **[2:15](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=135)** So within this function, we want to read one line of the array, and then pass it on.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=140)** So to that we're going to need to create a constructor, and take in our array, so when we set up our peak stream, we pass in the peaks.
>
> **[2:30](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=150)** I'm gonna invoke super, that actually invokes the readable stream, so it sets up our stream object, and then I'm gonna go ahead and add some values to this object, this.array is gonna be the array that was passed here, and then we're gonna go ahead and make sure that we're starting off at zero.
>
> **[2:44](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=164)** So the index, or the first item that we want to read, is zero.
>
> **[2:49](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=169)** So, within the read method, what we want to do, is we actually want to push chunks of data into the stream by invoking this.push.
>
> **[2:57](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=177)** So the first thing I need to do is get a chunk of data.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=181)** I'm gonna go ahead and create a chunk, and my chunk will be this.array at this.index.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=187)** There we go.
>
> **[3:09](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=189)** And instead of pushing data I'll go ahead and push this chunk in here.
>
> **[3:12](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=192)** And then, what we also wanna do is make sure that we increment this.index.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=199)** So now we have a stream that will read from the array, but how do we know when the stream is over?
>
> **[3:25](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=205)** So in order to do that we need to make sure the index isn't out of bounds, so I'm going to say, if this.index is less than or equal to this.array.length
>
> **[3:37](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=217)** then we know it's in bounds, and we can use the index to grab an item from the array.
>
> **[3:43](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=223)** Otherwise, it's out of bounds, which means that we've already read all of the data in the array, so we want to notify this readable stream that it's over.
>
> **[3:50](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=230)** So I'm going to go ahead and say this.push null, and by pushing null, or nothing, into our stream, that will signal to the readable that the stream is over.
>
> **[4:00](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=240)** So let's go ahead and save our application, and then we will go out here and start it by running node .
>
> **[4:07](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=247)** So you can see that we're reading our array, bit by bit, and all of these little buffers are the chunks.
>
> **[4:12](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=252)** That means that this stream is operating in binary mode, so it's reading each line of this array, and each chunk is showing us the binary data.
>
> **[4:20](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=260)** Now, streams have two modes, binary mode and object mode, and when they're in binary mode, we can actually read data as binary or we can read it as a string.
>
> **[4:30](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=270)** So in order to read this data as a string, all we need to do is set the encoding type to UTF-8.
>
> **[4:35](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=275)** I'm gonna go ahead and set it here, when I invoke the super readable class.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=279)** So I can pass options in, and then coding is one of those options, and we can go ahead and pass in UTF-8, there we go, and I'll go ahead and save this, and let's go out to our terminal and run this one more time, and there we can see that all of our chunks are now strings.
>
> **[4:56](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=296)** So, when data is raised, we're gonna go ahead and console log each of these chunks and their strings.
>
> **[5:02](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=302)** Now, there is one other type of mode, and that's object mode.
>
> **[5:05](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=305)** So we can pass binary data through a read stream, we can also pass string data by sending the encoding type, and I can also specify whether the object mode of our readable stream is on.
>
> **[5:17](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=317)** So, when the stream is in object mode, it can actually pass any type of JavaScript object.
>
> **[5:22](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=322)** So what I'm going to do is I'm gonna actually make the chunk a JavaScript object.
>
> **[5:26](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=326)** So down here inside of the read function, just go ahead and give it a little object, and we'll say data, and that will be our chunk, and then we'll also pass forward the index.
>
> **[5:40](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=340)** So now when we invoke this read stream, we're still reading from the source array, but now we are sending the data out of this readable stream as an object.
>
> **[5:48](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=348)** Let's go over here to our terminal, and I will clear this, and type node .
>
> **[5:53](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=353)** Whoops, looks like I'm missing something, I accidentally put semicolons here inside of my JSON, silly me, let me go ahead and add commas, there, and then let's try this again, so from the terminal, I'll type clear, and then node ., and now you can see that each bit of our stream, each bit of our array, is being read and then passed into the object.
>
> **[6:14](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=374)** Now, when our object stream is over, notice that that's handled just a little but differently, pushing null does end the object event, but it also does send us one more object, so just bear that in mind.
>
> **[6:25](https://www.linkedin.com/learning/advanced-node-js/readable-streams?u=76281980&t=385)** So readable streams can read data from any type of source and then feed it to anyone who is listening, chunk by chunk.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (10), this. (8), let (6), function (5), class, (2)
> **CLI Commands:** make (4), node (3), find (1)
> **Env Vars:** utf (2), json (1)
> **Tools:** terminal (3)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (2)
> **File Paths:** index.js (1)
> **Analogies:** for instance (1)

#### Using readable streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=0)** - [Instructor] In the last lesson we saw how we can create classes that extend stream dot readable to build our own readable streams.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=7)** Now, sometimes you'll build your own readable streams, but most of the time you're going to use already existing stream types.
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=13)** You've already been doing this.
>
> **[0:14](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=14)** Node JS comes with all types of readable streams.
>
> **[0:17](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=17)** Http requests on the server and a response on the client, they're readable streams.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=22)** The file system has readable streams.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=24)** Zipping and unzipping uses readable streams.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=26)** TCP sockets, process stdin, not to mention the many MPMs that implement readable streams.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=33)** So let's go ahead and implement our own instance of a readable stream that already exists.
>
> **[0:37](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=37)** We're going to go ahead and use the create readStream from the file system.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=40)** So, I'm inside of an empty index dot js.
>
> **[0:43](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=43)** You'll find this inside of your exercise files for lesson two.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=46)** Lesson two, chapter three within the start folder.
>
> **[0:48](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=48)** And I'm going to start just by requiring the fs module.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=53)** So here's our file system module.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=55)** And then I'm going to go ahead and create an instance of a new stream.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=57)** We'll call it the readStream.
>
> **[0:59](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=59)** And I can use fs.createReadStream to create a readStream to a file.
>
> **[1:05](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=65)** Now, I just have to put the location of the file in.
>
> **[1:08](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=68)** So I included a video under chapter two within your exercise files.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=72)** So let me go ahead and back out of the start folder, back out of the chapter two lesson three folder, and load powder-day.mp4.
>
> **[1:21](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=81)** So we're going to go ahead and create a readStream to a video file.
>
> **[1:25](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=85)** So now that we have a readStream, we want to listen for the same events.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=88)** readStream.on and when a data event is raised, that's when a chunk of data is going to be passed to the call back handler.
>
> **[1:39](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=99)** So we'll go ahead and console log it.
>
> **[1:43](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=103)** Reading little chunk, we'll do a little slash n and then I will go ahead and do chunk.
>
> **[1:53](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=113)** So we can see that chunk and see what it looks like.
>
> **[1:56](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=116)** We also use the end event.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=121)** So again, on any stream instance we can listen for an end event and that will tell us that the stream is over.
>
> **[2:08](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=128)** So I'll go ahead and console log readStream finish.
>
> **[2:19](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=139)** Great and another event that we really should be listening for, on read streams, are error events.
>
> **[2:24](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=144)** So, I can also wire that up on error.
>
> **[2:28](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=148)** Then, if an error occurs, it will be passed to this call back handler and we're just going to go ahead and throw that on the console.
>
> **[2:37](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=157)** Console log an error has occurred.
>
> **[2:42](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=162)** And then we can console error, the error.
>
> **[2:47](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=167)** Alright, so now we're using an existing readable stream but you know that the interface is exactly like the one that we created.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=173)** We're listening for specific events.
>
> **[2:55](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=175)** The data event, the end event, and the error event.
>
> **[2:58](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=178)** Let's go out to the terminal and type node dot.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=181)** And we can see that we're reading little chunk and all of our chunks are these binary buffers.
>
> **[3:06](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=186)** And all of this is just little binary bits of our video.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=190)** That's great.
>
> **[3:11](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=191)** So, if we wanted to see the size of each of these bits instead of the binary tag out there, we can actually just look for chunked out length.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=199)** So this will actually give us the size.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=201)** Instead of doing that I'll change this to size.
>
> **[3:25](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=205)** And I can come over here and run this again by typing node dot.
>
> **[3:28](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=208)** And now we can see the size of each of these little bits.
>
> **[3:31](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=211)** So here's our whole video being streamed from beginning to end, bit by bit by bit until the stream has finished.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=219)** So actually Node JS has read streams everywhere.
>
> **[3:41](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=221)** Standard input or stdin is a read stream.
>
> **[3:46](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=226)** So that's why we can listen for data events.
>
> **[3:48](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=228)** And with standard input, just like with every other stream, each chunk of data is actually being passed to this call back handler.
>
> **[3:57](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=237)** So, if a stream is in binary mode and it's not utf8, don't worry, we can still get the text of the chunk if the chunk is a string simply by invoking toString.
>
> **[4:09](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=249)** I'm also going to invoke it trim, just to get rid of any leading or trailing spaces and we'll go ahead and log this chunk just to see what it looks like.
>
> **[4:19](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=259)** I will actually call this echo, and let's save this.
>
> **[4:24](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=264)** Come out to our terminal, clear everything.
>
> **[4:26](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=266)** Oh, one other thing I'm going to do is comment outline six here just so that we don't see all of those chunk lengths inside of the terminal.
>
> **[4:34](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=274)** So node dot to run the file.
>
> **[4:35](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=275)** So our readStream has finished.
>
> **[4:37](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=277)** But, stdin is still open.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=279)** So if I type hello, you'll see the echo world, you'll see the echo.
>
> **[4:44](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=284)** So you'll notice that this stream is a little bit different.
>
> **[4:46](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=286)** We're still sending data chunk by chunk, but we have to ask for the next chunk.
>
> **[4:52](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=292)** So this stream is in non-flowing mode.
>
> **[4:55](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=295)** When a stream is in flowing mode, it automatically pushes each chunk of data into the pipeline.
>
> **[5:00](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=300)** Non-flowing streams mean that we have to ask for the data.
>
> **[5:04](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=304)** So we can actually enter any stream into non-flowing or flowing mode.
>
> **[5:08](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=308)** So let's take the readStream, this is currently in flowing mode, and by invoking pause on it, we are now creating our readStream as a non-flowing mode stream.
>
> **[5:19](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=319)** So that means we're going to have to ask for bits of data.
>
> **[5:22](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=322)** I'm actually going to do this right here inside of process standard input.
>
> **[5:25](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=325)** So if I want to ask for a bit of data, I can call readStream dot read.
>
> **[5:33](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=333)** Anytime we have any type of input from standard input, we can actually tell our readStream to read one chunk of data.
>
> **[5:39](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=339)** So let's go ahead and comment on comment line six.
>
> **[5:42](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=342)** I'll come back over here to the terminal.
>
> **[5:44](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=344)** Control c to stop that.
>
> **[5:45](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=345)** Clear and then node dot.
>
> **[5:48](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=348)** And what you'll notice is, we haven't read any of the video.
>
> **[5:51](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=351)** We don't see the chunk links.
>
> **[5:52](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=352)** But as I hit enter, I'm asking for one little bit of the video, one bit at a time.
>
> **[5:59](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=359)** So I have, by pausing the readStream, made it enter into non-flowing mode.
>
> **[6:04](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=364)** So I'm going to hit Control c one more time to stop this.
>
> **[6:06](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=366)** And what we're going to do is, we're going to listen inside a process stdin.
>
> **[6:11](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=371)** Encase the text and we'll go ahead and call this chunk dot toString dot trim is equal to the word finish.
>
> **[6:24](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=384)** Then we can actually enter any stream back into flowing mode by typing readStream of the name of the stream resume.
>
> **[6:32](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=392)** So pause enters it into non-flowing mode and resume will convert it back into flowing mode.
>
> **[6:37](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=397)** So let's see what happens.
>
> **[6:38](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=398)** Let's go over here to our terminal.
>
> **[6:39](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=399)** Type node dot to run the application.
>
> **[6:41](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=401)** So every time I hit enter, I'm reading one small chunk of the video.
>
> **[6:44](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=404)** But, if I type finish and hit enter, the stream enters back into flowing mode and begins to push the rest of the chunks of the video automatically.
>
> **[6:54](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=414)** Readable streams are everywhere.
>
> **[6:56](https://www.linkedin.com/learning/advanced-node-js/using-readable-streams?u=76281980&t=416)** Learning to work with readable streams is an essential skill for a Node JS developer.

> [!info]- Semantic Content
>
> **Code Identifiers:** readstream (14), tostring (2), createreadstream (1)
> **Code Keywords:** let (8), this. (3), module (2), for, (1), throw (1)
> **CLI Commands:** node (8), find (1)
> **Tools:** terminal (5)
> **Definitions:** is a  (3), is an  (1)
> **Exercise Files:** exercise files (2)
> **Env Vars:** tcp (1)
> **Cross-References:** in the last (1)

#### Writable streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=0)** - [Instructor] What are we gonna do with all of this data that we've been reading with these readable streams?
>
> **[0:04](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=4)** I hope we're gonna do more than just log it to the console.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=7)** This is where the readable streams counterpart comes in handy, the writeable stream.
>
> **[0:11](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=11)** Writeable streams represent a destination for incoming data.
>
> **[0:15](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=15)** Writeable streams can be used to capture the data from a readable source and do something with it.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=20)** Just like readable streams, writeable streams are everywhere.
>
> **[0:23](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=23)** HTTP client request and server responses are writeable streams.
>
> **[0:27](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=27)** The file system has writeable streams.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=29)** Process.stdout and stderr, they're writeable streams.
>
> **[0:33](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=33)** And just like readable streams, writeable streams are published in countless NPMs.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=38)** So let's go ahead and take a look at what it looks like to use a writeable stream.
>
> **[0:42](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=42)** Inside of our index.js we have here a readable stream setup.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=46)** Now this is in your lesson files under chapter two, chapter two lesson four, and this is similar to the file that we created earlier.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=53)** The big difference is is I'm actually de structuring the create read stream function from the file system as we require it.
>
> **[1:01](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=61)** And the reason that I'm doing this is I also want to create a write stream.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=64)** So I'm gonna go ahead and grab create write stream and I don't want to have to type fs. over and over and over again.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=72)** So let's go ahead and create that write stream.
>
> **[1:15](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=75)** Call it the writeStream and we can use this method to do so, the create write stream method.
>
> **[1:20](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=80)** And if we're reading from a file using the file system's create read stream then we're gonna write to a file when we use the file system's create write stream.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=88)** So the goal of this lesson is actually to create a copy of this video.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=93)** So we'll go ahead and create a copy called copy.mp4 and place that in the local directory.
>
> **[1:38](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=98)** So read streams are designed to read bits of data once chunk at a time whereas write streams are designed to write bits of data one chunk at a time.
>
> **[1:46](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=106)** So here on line seven instead of logging the data that we're reading to the console let's write it to our write stream.
>
> **[1:55](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=115)** So we will write a chunk.
>
> **[1:57](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=117)** So a binary chunk of our video file will get written one chunk at a time.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=121)** Now when our read stream is over we also want to let our write stream know that no more data is coming.
>
> **[2:07](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=127)** So I'm gonna go ahead and write writeStream.end.
>
> **[2:14](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=134)** And writeable streams also have events we might want to listen for.
>
> **[2:18](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=138)** So I can go ahead and add some of those.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=140)** writeStream dot on close.
>
> **[2:23](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=143)** So when this write stream is over and it's closed I can go ahead and write a message to the console without using console.log because process standard output or stdout is also a write stream.
>
> **[2:35](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=155)** In fact console log just wraps around process.stdout to write your streams.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=163)** So we'll go ahead and say file copied, great.
>
> **[2:46](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=166)** So here we have hooked up a writeable stream to write chunks of data as our readable stream reads it.
>
> **[2:52](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=172)** And when our readable stream has ended we will end our writeable stream and we will handle and close event on our writeable stream and write the final message file copied.
>
> **[3:00](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=180)** Let's go ahead and try to run this so we'll go over to our terminal and type node dot.
>
> **[3:05](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=185)** And we see file copied.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=187)** So I don't see a file.
>
> **[3:08](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=188)** If I type LS we can see the copy.mp4 there, but I wanna make sure the copy works so I'm gonna type open dot and this will actually open the current folder and I can see the copy there so I can double click on the copy and make sure that we have created, yes we have, a working copy of our mp4.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/writable-streams?u=76281980&t=206)** Writeable streams are very important and we definitely want to understand how to use these types of streams.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), require (1), for. (1)
> **CLI Commands:** make (2), node (1), ls (1)
> **Code Identifiers:** writestream (3)
> **Analogies:** just like (2), similar to (1)
> **UI Navigation:** open the (1), click on (1)
> **File Paths:** index.js (1)
> **Env Vars:** http (1)
> **Tools:** terminal (1)

#### Backpressure
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=0)** - [Instructor] Sometimes the data coming from a readable stream is too fast for a writable stream to handle.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=5)** Using our water bucket example, imagine pouring water into the hose.
>
> **[0:09](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=9)** So we're pouring water from our source bucket to our destination.
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=13)** Now let's say we're pouring the water too fast and the hose begins to back up, what should we do, should we keep pouring the water in?
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=20)** Well doing that will cause an overflow and we'll loose all of our water.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=24)** Instead what we actually want to do is stop pouring water in until it's drained.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=29)** So here we have the hose, it's full, our source has stopped pouring water in until all that water can make it to the destination and then we'll start pouring water in from our source again.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=38)** And again once our hose has been full we'll stop pouring the water in and we'll repeat this process until all of the water pipes through the hose from our source to our destination.
>
> **[0:48](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=48)** Whenever we actually have a full hose, this is referred to as back pressure, and how much water our hose can handle is referred to as the high water mark.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=57)** By setting a large high water mark essentially what you're doing is creating a very big hose that can handle all of the water that's passed to it.
>
> **[1:06](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=66)** Let's take a look at this in a code example.
>
> **[1:10](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=70)** In the last lesson we built a writable stream that we can use to actually copy the data from powder day to our copy.
>
> **[1:16](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=76)** And what we have going on here is a little bit of back pressure.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=79)** We can't see that it's happening in the terminal but if we were to take a look at memory we could see back pressure causing problems.
>
> **[1:26](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=86)** What we're gonna do is actually handle that.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=88)** I'm inside of our exercise files, I'm in chapter two, lesson five looking at the start folder and here's the file that we created in the last lesson.
>
> **[1:36](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=96)** Our writestream.write method will let us know whether the hose is full or not.
>
> **[1:40](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=100)** It will return a true or false value as to whether it can handle more data.
>
> **[1:45](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=105)** I can capture that value as a result.
>
> **[1:48](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=108)** If this result is false that means that our hose is full.
>
> **[1:54](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=114)** What I wanna do is say if we don't have a result then our hose is full so I need to tell our read stream to stop pouring water in it.
>
> **[2:03](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=123)** So we can pause the read stream so we're not gonna actually read any more data until our hose drains.
>
> **[2:10](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=130)** We'll do a little console log here just so we can see that we have back pressure.
>
> **[2:16](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=136)** So how do we know when to start pouring data in again?
>
> **[2:19](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=139)** Well we can listen for a drain event on the write stream.
>
> **[2:24](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=144)** When our write stream drains this function will fire and we can handle that event with this callback.
>
> **[2:35](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=155)** Console.log, drain, and we'll also tell our read stream to resume.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=163)** This process will continue until all of the data has been passed from our read stream to our write stream.
>
> **[2:48](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=168)** Let's take a look.
>
> **[2:50](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=170)** So I'm coming over here to the terminal and we'll type node dot.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=173)** And what you'll notice is we have a lot of back pressure.
>
> **[2:56](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=176)** Every time there was back pressure instead of creating more memory or taking up more memory now we simply pause the read stream until the write steam can handle that much data.
>
> **[3:08](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=188)** Now when we create the write stream we have the ability to decide how thick our hose is.
>
> **[3:13](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=193)** We can do that by setting the high water mark.
>
> **[3:16](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=196)** In the options right after the file I can send an object of options and I'm going to set the high water mark.
>
> **[3:25](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=205)** Now if I set this to some arbitrary number then we can allow for a larger hose so that's how many bites we'll have in our high water mark or how many bits we'll have.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=219)** Let's go ahead and try to run this again.
>
> **[3:41](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=221)** So node dot, so because we have a larger hose we don't have as much back pressure.
>
> **[3:46](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=226)** Again if I were to set this very large we won't see any back pressure at all because our internal buffers for the write stream have enough space to handle all of the video.
>
> **[3:57](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=237)** Again without setting this high water mark we don't want to take up too much memory with our application so we can handle that through handling back pressure.
>
> **[4:06](https://www.linkedin.com/learning/advanced-node-js/backpressure?u=76281980&t=246)** That means pausing our read stream until our write stream is ready to handle more data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), continue (1)
> **CLI Commands:** node (2), make (1)
> **Cross-References:** in the last (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), means that (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Piping streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=0)** - [Instructor] You may be thinking to yourself that streams seem fun, but there's an awful lot of code that you have to use to implement a stream, and you have to worry about back pressure that seems a little complicated.
>
> **[0:10](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=10)** Well I'm looking at our copy file that we created in the last lesson, and this is inside of the index.js file, found under chapter two, chapter two, lesson six, within the start folder.
>
> **[0:20](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=20)** And what I'm gonna say is, we can actually just delete all of these handlers, because we don't need them.
>
> **[0:26](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=26)** And I'm gonna delete this reference to a high water mark, because we also don't need it.
>
> **[0:30](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=30)** I can pipe a read stream to a write stream, simply by typing readStream.pipe(writeStream).
>
> **[0:39](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=39)** So again, what we're doing is the same thing.
>
> **[0:41](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=41)** Instead of wiring up a bunch of listeners to listen for chunks of data and then pass those chunks of data into the write stream, the pipe method is doing it for us.
>
> **[0:49](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=49)** The pipe method also automatically handles back pressure for us.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=53)** The only thing that we didn't do is wire up an air listener, so I can just do this on the end of a pipe method.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=58)** So when any error occurs, we can handle it by logging it to the console.
>
> **[1:07](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=67)** So now we have the same program.
>
> **[1:09](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=69)** I can come over here to the start folder and type node dot.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=72)** And when I do a ls, you can see that we have our copy.mp4.
>
> **[1:16](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=76)** So any read stream can be piped to any write stream.
>
> **[1:20](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=80)** So we'll take a look at a little sample of this.
>
> **[1:22](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=82)** I'm gonna get rid of our read stream here in the code, we don't need it.
>
> **[1:26](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=86)** I'm also gonna change the write stream to write to something called file.txt, so we're gonna write to a text file.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=93)** And where should we get the data from?
>
> **[1:36](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=96)** Well let's use process.stdin, so a standard input can pipe, remember, any read stream can pipe to any write stream.
>
> **[1:46](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=106)** So now, we're gonna go ahead and pipe data from standard input to a text file.
>
> **[1:51](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=111)** So let me come over here to the terminal, and I will type node dot, and I don't see anything happen right away, but if I type hello world, this data is actually being piped to a text file.
>
> **[2:03](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=123)** Command + backslash will open up my menu here, and I can see there's a file.txt.
>
> **[2:08](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=128)** So the write stream's still open, because process standard input is still open.
>
> **[2:12](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=132)** That means I can pipe more text into, whoops, this writable.
>
> **[2:23](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=143)** Pretty cool, so I'm gonna go ahead and close out this program now.
>
> **[2:27](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=147)** And instead of creating my text file from typing data directly into standard input, what I'm gonna go ahead and do is use a Unix pipe to actually pipe the data.
>
> **[2:37](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=157)** So within my terminal, I can type echo hello world.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=163)** So instead of repeating it back to us, what I wanna do is, I wanna take this data and send it into my program.
>
> **[2:51](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=171)** And I can do so with a Unix pipe.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=173)** And now I can say node dot, and what happens is, our program starts and finishes, and what we've done is, we've actually just piped that hello world directly into the file.
>
> **[3:06](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=186)** So something else that I can do is, instead of echoing the text to get it into the file using the Unix pipe, I can also just copy a file.
>
> **[3:14](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=194)** So I'll go ahead and cat ../ ../, so in the chapter two folder, I have a sample.txt file for you to use.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=201)** And I can go ahead and pipe that into my program with a Unix pipe, using standard input.
>
> **[3:28](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=208)** And when I run that, we can take a look at our file text, and you will notice that it has copied all of the text from the sample.txt file into our file.txt.
>
> **[3:38](https://www.linkedin.com/learning/advanced-node-js/piping-streams?u=76281980&t=218)** So the pipe function allows us to pipe data from any readable stream to any writable stream.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (2), pass (1), this. (1), function (1)
> **File Paths:** file.txt (3), sample.txt (2), index.js (1)
> **CLI Commands:** node (3), ls (1), cat (1)
> **Code Identifiers:** readstream (1), writestream (1)
> **Tools:** terminal (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Duplex streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=0)** - A duplex stream is a stream that implements both a readable and a writable.
>
> **[0:05](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=5)** These streams allow data to pass through.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=7)** Readable streams will pipe data into a duplex stream, and the duplex stream can also write that data.
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=13)** So duplex stream represent the middle sections of pipelines.
>
> **[0:17](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=17)** I'm looking at the code that we created in the last lesson where we pipe from out read stream.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=22)** Which is reading a video, powder-day.mp4, to our write stream, which is creating a copy of that video.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=29)** What we're gonna go ahead and do is implement a duplex stream here.
>
> **[0:32](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=32)** Now this is inside of your lesson files under chapter two.
>
> **[0:35](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=35)** Chapter two lesson seven, and within the start folder.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=38)** So in order to do this, we're gonna go ahead and grab the most basic type of duplex stream, which is a pass through.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=46)** And we can get that from our stream module.
>
> **[0:54](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=54)** And what we can do is create a new pass through stream called report.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=64)** And when I say they represent the middle sections of a pipe line, that means that we can put them in between readables and writables.
>
> **[1:12](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=72)** So a duplex stream can be piped between a readable and a writable.
>
> **[1:16](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=76)** So it means that this duplex stream can receive data from our read stream and then send that data to our write stream.
>
> **[1:23](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=83)** So what would be the point of implementing a pass through stream if we wanted to see something about the data or report on it?
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=90)** A typical duplex stream doesn't change anything about the data.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=93)** There's a type of duplex stream called transform streams, which we will cover in greater detail in the next lesson, and technically the pass through is a transform stream, but we're just gonna use it as a basic duplex stream in this example.
>
> **[1:45](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=105)** So what I'm gonna do is create a total variable equal to zero, and then the report has an on data event because it's a readable and a writable stream.
>
> **[1:56](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=116)** So I can listen for when data comes into this report stream and get that data chunk by chunk.
>
> **[2:05](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=125)** So what I'm gonna go ahead and do is increment our total so we can see how much data has passed through.
>
> **[2:15](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=135)** Woops and I should spell total correctly.
>
> **[2:17](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=137)** And then we'll also go ahead and console log how many bytes of data have currently passed through by logging our total.
>
> **[2:31](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=151)** There we go.
>
> **[2:32](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=152)** So now we can actually see some reporting on how many bytes are passing through our duplex stream.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=158)** So I'm gonna come over here to the terminal and type node, dot, and we can see that all of these bytes have passed through the stream.
>
> **[2:45](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=165)** So we still get the copy.
>
> **[2:47](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=167)** We've still copied the file, but the, woops, but the pass through has provided some reporting.
>
> **[2:54](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=174)** So duplex streams help us compose streams into pipelines.
>
> **[2:59](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=179)** Let's say we actually want to slow this whole thing down.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=181)** We can create another type of duplex steam called throttle.
>
> **[3:05](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=185)** So we'll create something called throttle, and here's an instance of it, and we will go ahead and send it 10 milliseconds.
>
> **[3:14](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=194)** So let's say we want it to slow this whole thing down.
>
> **[3:18](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=198)** So we'll add throttle to our pipeline.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=201)** So we're gonna start with the read stream, and that's gonna be passed through the throttle duplex stream, and then passed through the report duplex stream, and then eventually we'll get to our write stream where the file copy is made.
>
> **[3:34](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=214)** So in order to do this, we need to create a new throttle type and we're gonna create a duplex stream type.
>
> **[3:44](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=224)** So class throttle extends duplex.
>
> **[3:51](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=231)** When we implement a duplex stream we have to put a read and a write method because it has both.
>
> **[3:58](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=238)** So what we're gonna go ahead and do is add a constructor as well, and the constructor will take in the number of milliseconds that we should delay.
>
> **[4:06](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=246)** So I'm gonna go ahead and invoke the super and then we'll say this.delay = ms, and then I'm gonna go ahead and come over to my write side and grab the chunk, and the encoding, and the callback.
>
> **[4:26](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=266)** So what we'll do is we will this.push(chunk).
>
> **[4:30](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=270)** So we will actually write the chunks of data as they're received, and what we'll do is call the callback to let us know that, that write has been completed.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=279)** So in order to actually have a delay here, what I wanna do is I wanna set a timeout around this callback.
>
> **[4:45](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=285)** So I'm gonna call setTimeout, and we will invoke the callback when the timeout is finished and the timeout is going to be this.delay.
>
> **[4:56](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=296)** Now the other thing that we want to implement here is another method called final.
>
> **[5:03](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=303)** And final means that we are getting no more data from the read stream, so we also want to clear out our write stream.
>
> **[5:08](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=308)** I'm gonna go ahead and call this.push(null) so that we can see that the write stream has ended.
>
> **[5:15](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=315)** Now I'm not gonna do anything on the read side.
>
> **[5:18](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=318)** We're just gonna currently read the data as it comes into this throttle, and then we shall throttle it.
>
> **[5:23](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=323)** So we're going to write one chunk at a time, but we're gonna make the chunk delay for a little bit.
>
> **[5:29](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=329)** So let's go ahead and save this and watch it run.
>
> **[5:31](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=331)** So coming over to the terminal we'll type node, dot, and now you can see the bytes have really slowed down.
>
> **[5:38](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=338)** That's because we have sent our stream through a throttle and then we're actually seeing those bytes because we've also sent our stream through a report.
>
> **[5:46](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=346)** So if I were to take this pass through throttle and set it to 100 milliseconds, and save it.
>
> **[5:53](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=353)** Come over here, clear out our terminal.
>
> **[5:55](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=355)** Node, dot, one more time.
>
> **[5:57](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=357)** Now we can see that we've really throttled our stream and we are only allowing it to write bytes really slow.
>
> **[6:03](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=363)** So duplex streams are a necessary component when you want to compose streams into complex pipelines.
>
> **[6:09](https://www.linkedin.com/learning/advanced-node-js/duplex-streams?u=76281980&t=369)** The duplex stream implements both a readable and a writable side, and therefore they represent the center parts of a pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), let (4), this. (4), implements (2), this, (2)
> **Definitions:** is a  (3), means that (3)
> **CLI Commands:** node (3), make (1)
> **Tools:** terminal (3)
> **Cross-References:** in the last (1), in the next (1)
> **Code Identifiers:** settimeout (1)
> **Speakers:** - a (1)

#### Transform streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=0)** - [Instructor] In the last lesson, I mentioned transform streams.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=3)** Transform streams are a special type of duplex stream.
>
> **[0:07](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=7)** Instead of simply passing the data to the read in to the write in, transform streams change the data.
>
> **[0:14](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=14)** Transform streams are the center pipe pieces that can be used to transform data from readable streams before they are sent to writable streams.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=22)** So I'm in just a blank index.js file, this file is found inside of your start folder, under chapter two lesson eight, and I'm going to go ahead and just create a new transform stream by pulling out our transform type.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=38)** From our stream module, and what we're going to go ahead and do, is create a new class called replace text.
>
> **[0:48](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=48)** And this is going to be a transform stream, so we're going to extend transform type.
>
> **[0:56](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=56)** Transform streams have different methods, instead of write we are actually going to use the transform method.
>
> **[1:03](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=63)** Now, it looks similar to the write method in that it gets a chunk in the encoding, of that chunk and a callback function.
>
> **[1:14](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=74)** And what we're going to go ahead and do is also add a constructor.
>
> **[1:20](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=80)** And in the constructor we'll go ahead and get a character.
>
> **[1:24](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=84)** Invoke the super, which is our actual transform stream type that we are invoking to set up the transform stream, and then we will set this dot replace Char to the character that's coming in.
>
> **[1:40](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=100)** So what we want to do is we're actually going to transform the data chunk by chunk, so I'm going to create a new variable, called transform chunk, and we're going to go ahead and take the chunk of data that's sent to this stream, we're going to turn it into a string, assuming that it already is a string, and then using the strings replace method, we're going to go ahead and replace all of the text, with this dot replace Char.
>
> **[2:10](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=130)** And I'll go ahead and I will put some of the stuff on separate lines so that we can see it, there we go.
>
> **[2:17](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=137)** So we're just chaining a two string, and then we are going to replace on that string.
>
> **[2:22](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=142)** So I actually haven't done the replace yet, notice these two slashes, they represent a regular expression, so basically I want to replace all the lower case alphabet, all the uppercase alphabet, and we'll separate these with pipes, also any digits.
>
> **[2:37](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=157)** And adding the G will make sure that we replace that globally.
>
> **[2:40](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=160)** So what we're going to do is whatever replace character is sent to the constructor, when we create a new transform stream, will be used to replace any text found in these chunks.
>
> **[2:51](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=171)** So then all I need to do is then push my transform chunk.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=181)** And invoke the callback.
>
> **[3:04](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=184)** So here, we have a chunk of data coming into the transform method and we're changing it, before we push it out of this stream.
>
> **[3:13](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=193)** The last method that we can implement is the flush method.
>
> **[3:17](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=197)** And the flush method will get a callback.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=199)** So once our read stream has stopped, we can still push more stuff into a transform stream.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=206)** So I'll go ahead and say more stuff is being passed.
>
> **[3:33](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=213)** And I'll go ahead and invoke the callback.
>
> **[3:37](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=217)** And then let me go ahead and place a semicolon at the end of this line.
>
> **[3:41](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=221)** Great, so there's our transform type for replace texts let's go ahead and use it.
>
> **[3:45](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=225)** So I'm going to go ahead and create a variable called xStream.
>
> **[3:50](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=230)** And we will set that to a new replace text.
>
> **[3:56](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=236)** And we will go ahead and throw an X there, that's why we call it the xStream.
>
> **[3:59](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=239)** So any text should be replaced with X's.
>
> **[4:02](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=242)** And let's just try this on process, dot standard input, and remember, we can add this transform stream to any pipeline.
>
> **[4:11](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=251)** So we'll just go ahead and pipe in the xStream, and we will pipe this to standard output.
>
> **[4:19](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=259)** A write stream, so here's our little pipeline, so from standard input through the xStream transform stream, to standard output, so I'll go ahead and save this, and come over to the terminal, and I will type node dot, and now when I type hello world, and send that through standard input, it gets piped through my transform stream, and all I can see is, are X's.
>
> **[4:43](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=283)** So you can see that only the characters or digits are being replaced, and again, this replace text stream can actually work for anything, I can go ahead and replace all of my text with two X's.
>
> **[4:54](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=294)** We'll actually do two capital X's, and save that.
>
> **[4:58](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=298)** Come out here to the terminal, stop the program.
>
> **[5:01](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=301)** Node dot to run it again, now again, hello world.
>
> **[5:04](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=304)** Now we replace each of those characters with two X's.
>
> **[5:09](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=309)** And we can see that happening here.
>
> **[5:12](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=312)** Transform streams are the last stream type available on Node.js that we've covered.
>
> **[5:16](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=316)** Now there are a lot of transform streams out there, Node.js comes with a zlib package, that's a transform stream that can be used to zip incoming data from the read stream, and send compressed data to the write stream.
>
> **[5:29](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=329)** Crypto is an NPM package that has transform streams that can encrypt data chunk by chunk, and then pass encrypted data to the write stream, or decrypt data from a read stream, and pass the decrypted data to the write stream.
>
> **[5:41](https://www.linkedin.com/learning/advanced-node-js/transform-streams?u=76281980&t=341)** So transform streams are an essential part of the stream family.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (2), pass (2), module (1), function (1)
> **CLI Commands:** node (4), make (1), npm (1)
> **Code Identifiers:** xstream (4)
> **File Paths:** node.js (2), index.js (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** npm (1)
> **Cross-References:** in the last (1)


### 3. HTTP Streaming

#### Streaming to the browser
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=0)** - [Voice Over] Thus far, we've taken a closer look at how node JS handles asynchronous processes with callbacks, promises, and streams.
>
> **[0:08](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=8)** Now it's time to put our knowledge to work by implementing a web server that handles upload and download streams.
>
> **[0:13](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=13)** And node JS streams are everywhere.
>
> **[0:15](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=15)** And the idea is that you wanna stream everything.
>
> **[0:18](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=18)** So let's go ahead and get started building an HTTP server that can stream a video to the web browser.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=24)** So I'm inside of the exercise files under chapter three, chapter three lesson one.
>
> **[0:29](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=29)** And within the start folder, we have a blank index JS.
>
> **[0:32](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=32)** And we're just gonna go ahead and create our server from scratch here.
>
> **[0:35](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=35)** So the first thing I'm gonna go ahead and do is I'm gonna destructure the create server function from the HTTP module.
>
> **[0:45](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=45)** And then we're gonna stream a video to the server, so I'm also gonna pull out the create read stream method from the file system.
>
> **[0:58](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=58)** And then finally, we're gonna stream a video file, so let me go ahead and add a reference to that file, so the file name.
>
> **[1:04](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=64)** And this video file is found in the root of chapter three, so we'll get out of the start folder, out of chapter three lesson one, and we'll look for a file called powder day dot MP4.
>
> **[1:14](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=74)** And you can use any MP4 file that you like.
>
> **[1:17](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=77)** If you have an MP4 video laying around, I suggest that you try to stream that.
>
> **[1:21](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=81)** So I'm gonna go ahead and create a new web server, using the create server function.
>
> **[1:28](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=88)** And the create server function takes in a callback that it will send the request and the response to, so we can handle any request for our web server inside of this function.
>
> **[1:38](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=98)** And I will quickly just chain on a listen command, so we'll tell our web server to listen at port 3000.
>
> **[1:44](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=104)** And then we'll go ahead and let ourselves know that it's running, so console log server running, and I'll go ahead and put the port in there as well.
>
> **[1:54](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=114)** 3000.
>
> **[1:56](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=116)** All right.
>
> **[1:57](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=117)** So all requests will be handled right here.
>
> **[2:00](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=120)** And what we wanna do within this callback handler is send a video back.
>
> **[2:03](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=123)** So the first thing we need to do is take the response, and tell it in the header that we have a successful response by setting a status code of 200, and that our content type is a video.
>
> **[2:15](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=135)** An MP4 video.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=140)** So that will tell the browser to use the correct video component to handle the stream that's gonna be coming from local host 3000.
>
> **[2:26](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=146)** So all we need to do is create a read stream.
>
> **[2:30](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=150)** And send it our file name.
>
> **[2:33](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=153)** And now because the response is a stream, we can simply pipe our read stream to the response.
>
> **[2:39](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=159)** So there we go.
>
> **[2:39](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=159)** There's the code necessary for streaming a video to the browser.
>
> **[2:43](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=163)** Let's test it out.
>
> **[2:44](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=164)** So I'm gonna come over here to the terminal, and run our file.
>
> **[2:47](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=167)** It's the index so I can run it with a node dot.
>
> **[2:50](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=170)** We see we have our server running on 3000.
>
> **[2:53](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=173)** So I can come in here and hit the server, and we see our video.
>
> **[2:58](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=178)** So it looks like we have our ski video streaming to the server.
>
> **[3:02](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=182)** This is good news.
>
> **[3:03](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=183)** What we wanna do is add a subtle improvement.
>
> **[3:06](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=186)** We should tell the web browser how long the video is, and we can do that through the headers.
>
> **[3:12](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=192)** So I'm gonna come over here to the terminal and stop the app.
>
> **[3:16](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=196)** Clear the screen.
>
> **[3:17](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=197)** Get ready to run it the next time.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=199)** And I can get information about how big our video file is using the stat function from the file system.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=206)** But the stat function uses callback handlers.
>
> **[3:28](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=208)** So just like we did in the first chapter of this course, what I wanna do is convert the stat function to a promise.
>
> **[3:35](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=215)** So I'm gonna need to pull out my promisify function from the util module.
>
> **[3:43](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=223)** And now I can create a new function that will return a promise using stat.
>
> **[3:47](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=227)** So I'll create a function called file info, 'cause that's what stat does, is give us information about the file, and we will promisify our stat function.
>
> **[3:59](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=239)** All right, so now that we have a promise, we can use this to make our code look nice.
>
> **[4:03](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=243)** The first thing I wanna do is make the callback handler for the create server an asynchronous function.
>
> **[4:08](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=248)** So we'll add the a sync in front of that.
>
> **[4:11](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=251)** And by making this an asynchronous function, we can use the a sync await code, so that means I can get the size of the file by destructuring an await call to file info.
>
> **[4:24](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=264)** And I can just send it the file name.
>
> **[4:26](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=266)** And what this will do is it will actually calls the code to wait.
>
> **[4:30](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=270)** We won't execute lines nine or ten until this promise file info has been resolved, and the only variable we need from that promise is the file size.
>
> **[4:37](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=277)** So we can take that variable and add it to our headers, under the content length key.
>
> **[4:45](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=285)** And I can just add the size like so.
>
> **[4:48](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=288)** Great, so now we're telling our web browser how long the video is that we're sending.
>
> **[4:54](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=294)** So lemme come over here to the terminal and run this again.
>
> **[4:57](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=297)** And we can go ahead and make a request for local host 3000.
>
> **[5:01](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=301)** There we go, we see our video.
>
> **[5:03](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=303)** Now we're displaying this using the HTML five video component.
>
> **[5:07](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=307)** The browser knows to use that because any requests to local host 3000 returns an MP4 video.
>
> **[5:13](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=313)** But the problem is, if we request I don't know, something else out here on this play head, a future point in this video, it doesn't handle that.
>
> **[5:21](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=321)** So these are called range requests.
>
> **[5:23](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=323)** And what we need to do is make our video respond to range requests.
>
> **[5:27](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=327)** This is very important because if I actually go over here into Safari, and go into local host 3000, we don't see a video at all.
>
> **[5:33](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=333)** And the reason is that Safari requires that we handle these range requests.
>
> **[5:37](https://www.linkedin.com/learning/advanced-node-js/streaming-to-the-browser?u=76281980&t=337)** So in the next lesson, we're gonna go ahead and handle the range requests to make our video respond for requests of shorter clips or a future clip.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (4), module (2), await (2), finally, (1)
> **CLI Commands:** make (5), node (3)
> **Env Vars:** mp4 (5), http (2), html (1)
> **Tools:** terminal (3), safari (2)
> **Definitions:** is a  (2)
> **Ports:** port 3000 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### Handling range requests
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=0)** - [Instructor] So far, we've made a small HTTP server that can stream an MP4 video to the browser.
>
> **[0:06](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=6)** But our streams only work in Firefox and Chrome.
>
> **[0:08](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=8)** They don't work in Safari and we can't skip ahead.
>
> **[0:11](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=11)** We cannot request the different range.
>
> **[0:14](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=14)** For our video to work in Safari, we have to implement range requests.
>
> **[0:17](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=17)** And this will also allow us to skip ahead to different starting points using the HTML5 video player.
>
> **[0:23](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=23)** So let's go ahead and implement these range requests.
>
> **[0:25](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=25)** I'm inside of chapter three, chapter three, lesson two.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=28)** And in the Start folder, you'll find an index file that has the server that we left off creating.
>
> **[0:32](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=32)** So you can start there or you can continue working with the file from the last chapter.
>
> **[0:37](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=37)** Now, these range requests are actually handled via the headers.
>
> **[0:40](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=40)** So if we wanna see what a range request looks like, we need to get this range variable from the headers.
>
> **[0:47](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=47)** So req.headers or request headers.
>
> **[0:50](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=50)** Range will let us know if we have a request range.
>
> **[0:53](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=53)** And we'll go ahead and log that.
>
> **[1:00](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=60)** And we'll take a look at what our range looks like.
>
> **[1:03](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=63)** And I can come over here to the terminal and node dot to run our server.
>
> **[1:07](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=67)** And then we can come over here to the browser and hit localhost:3000.
>
> **[1:13](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=73)** And then I'll go ahead and click somewhere out here on the bar.
>
> **[1:16](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=76)** Notice we're not skipping ahead when I make that click.
>
> **[1:19](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=79)** But what I've done is I've sent a range request.
>
> **[1:21](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=81)** So let's take a look at what that might look like.
>
> **[1:24](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=84)** And here, inside of the terminal, you see that there is a first range request for undefined.
>
> **[1:30](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=90)** That undefined request is the request that the browser makes for the favorite icon that has nothing to do with the video, so obviously, it doesn't have a range header.
>
> **[1:37](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=97)** But when I make a request for our video, notice that we have a range header.
>
> **[1:41](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=101)** So we have this bytes equals zero through.
>
> **[1:44](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=104)** And this should give us the range that we wanna request, bytes zero through the full video or bytes halfway through the video to the end of the video, so on and so forth.
>
> **[1:53](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=113)** So in order to handle range requests, we need to parse this header.
>
> **[1:57](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=117)** So I'm gonna go ahead and stop the server.
>
> **[1:59](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=119)** Clear it out.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=121)** And let's get started implementing these range requests.
>
> **[2:04](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=124)** So what we need to do is we need to make sure that we have a range request to deal with.
>
> **[2:08](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=128)** I'm gonna get rid of this console.log here and just check for the range variable.
>
> **[2:12](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=132)** So if we have a range, we will handle the range request.
>
> **[2:16](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=136)** Otherwise we're just gonna go ahead and send the video back.
>
> **[2:19](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=139)** So I will take everything from our writeHead response to where we're streaming the fileName back to the client and just place that within the else statement.
>
> **[2:29](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=149)** So if we don't have a range request, we'll just go ahead and send the full video back.
>
> **[2:32](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=152)** But if we do have a range request, we wanna handle it.
>
> **[2:34](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=154)** And the first thing we need to do is parse the start and end ranges.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=158)** So I'm gonna go ahead and create a couple of variables here.
>
> **[2:41](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=161)** So we use some array destructuring.
>
> **[2:44](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=164)** And I will get the first value of the array that's gonna be returned and I will set that to start.
>
> **[2:49](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=169)** And the second value of the array that will be returned will be our end value.
>
> **[2:54](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=174)** So I'm gonna go ahead and take our range, which is a string, and I'm gonna replace that byte string.
>
> **[3:00](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=180)** So I wanna make sure our range doesn't contain that, so we'll do a regular expression that looks for bytes or bytes equal.
>
> **[3:08](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=188)** And we will replace it with nothing, with an empty string.
>
> **[3:12](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=192)** So the range header is a string and it says bytes equal from the start position to the end position, and both of these positions are separated with a hyphen.
>
> **[3:20](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=200)** So what I'm gonna do is I'm gonna split this into an array and I'm gonna split it on the hyphen.
>
> **[3:25](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=205)** This array will have two values, a start and end value.
>
> **[3:29](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=209)** The start value should be the first value in the array and the end value should be the second value.
>
> **[3:33](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=213)** So we pulled both of those values out of here just by destructuring them.
>
> **[3:37](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=217)** And then I wanna make sure that these values are integers because it starts out as a string.
>
> **[3:41](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=221)** So we'll go ahead and do start equals parseInt just to make sure this variable is the integer and we'll parse it as a base 10 int.
>
> **[3:49](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=229)** And then we're gonna take our end value.
>
> **[3:51](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=231)** Now, the end value isn't necessarily always gonna be present because as we make range requests, we're actually making a request from a starting position through the rest of the video, so it might not always be there.
>
> **[4:02](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=242)** So what I wanna do is search for the end value.
>
> **[4:05](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=245)** Did we have an end value?
>
> **[4:06](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=246)** And if we did, I'll go ahead and make sure that's an integer and we can parse that, so we'll go ahead and parse the end value as a base 10.
>
> **[4:14](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=254)** Otherwise if we don't have an end value, we're gonna set up our own end value and the end value is gonna be the size of the video.
>
> **[4:21](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=261)** So we'll take our size variable and subtract one from it.
>
> **[4:25](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=265)** So the end value will be the end of the entire video.
>
> **[4:29](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=269)** So now that we have start and end values, what we can do is write our response header to respond to the range request.
>
> **[4:36](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=276)** So we'll do res.writeHead.
>
> **[4:39](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=279)** And when we do writeHead this time, we will do 206.
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=282)** And what 206 means is partial content.
>
> **[4:45](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=285)** So we're gonna be streaming a part of the video, not a full video, so that will let the browser know that we are handling this range request.
>
> **[4:53](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=293)** So I'm gonna add a Content-Range key and in this Content-Range, we're gonna specify what the byte range is.
>
> **[4:58](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=298)** So we'll say bytes and we'll take our start value and we will subtract it from our end value and then we can go ahead and divide that by our size value.
>
> **[5:14](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=314)** So we're telling the browser in this header what the bytes are that we're gonna start with, what we're gonna end with, and the size, the current full size of the video.
>
> **[5:23](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=323)** I'm also gonna add an Accept-Range as header.
>
> **[5:28](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=328)** And we wanna know that we're working with bytes, so we're gonna accept ranges as bytes.
>
> **[5:32](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=332)** And then we will also add our Content-Length.
>
> **[5:37](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=337)** Now, our Content-Length isn't just the full size of the video.
>
> **[5:40](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=340)** What it is is actually the end value minus the start value and plus one.
>
> **[5:46](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=346)** So now, we have our Content-Length.
>
> **[5:48](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=348)** If there is a range request, we will actually get our Content-Length by calculating the end value minus the start value.
>
> **[5:55](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=355)** And if the range request doesn't have an end value, that end value will be the full size of the video.
>
> **[5:59](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=359)** This actually tells the browser what is the size of each chunk that we're gonna be sending in this range.
>
> **[6:05](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=365)** So now, I'm gonna go ahead and just specify our Content-Type and this is video/mp4.
>
> **[6:14](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=374)** All right, so we've written the header for the range request.
>
> **[6:17](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=377)** Now, it's time to actually stream the video file.
>
> **[6:20](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=380)** So I'm gonna go ahead and create a ReadStream to the fileName.
>
> **[6:23](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=383)** But we're not gonna create a stream for the full video.
>
> **[6:26](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=386)** When I create this ReadStream, I'm gonna send some additional options.
>
> **[6:29](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=389)** So the second argument that I can add here are additional options and they include a start and end values.
>
> **[6:35](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=395)** So I can create a ReadStream that only streams part of the file, starting at the start point and ending at the requested end point.
>
> **[6:43](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=403)** So this will actually handle our range request.
>
> **[6:45](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=405)** All I need to do is now pipe this to our response and we should be good to go.
>
> **[6:50](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=410)** So I'll go ahead and save this code here and we'll go into the terminal window and type node dot to run it.
>
> **[6:57](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=417)** We have a server running on localhost:3000.
>
> **[6:59](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=419)** Let's take a look at it.
>
> **[7:01](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=421)** So here's our video.
>
> **[7:03](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=423)** And can I skip ahead?
>
> **[7:05](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=425)** Yes, I can skip to different points of the video.
>
> **[7:07](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=427)** So we are handling range requests.
>
> **[7:12](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=432)** And we can also go ahead and give this a test out on Safari.
>
> **[7:14](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=434)** Does this work in Safari now?
>
> **[7:16](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=436)** Going to localhost:3000.
>
> **[7:18](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=438)** Yes, it does.
>
> **[7:18](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=438)** So Safari requires that we handle these range requests and because we are, our video now works.
>
> **[7:27](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=447)** So now, our video handles range requests and we also introduced some stream options that we can add to file streams, specifically setting up a smaller piece of the stream using start and end values.
>
> **[7:38](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=458)** So now, we've streamed video content to the browser.
>
> **[7:42](https://www.linkedin.com/learning/advanced-node-js/handling-range-requests?u=76281980&t=462)** In the next two lessons, we're gonna go ahead and stream content from the browser.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), node (2), find (1)
> **Tools:** safari (5), terminal (3), firefox (1)
> **Code Keywords:** let (6), continue (1)
> **Code Identifiers:** writehead (3), filename (2), parseint (1)
> **Definitions:** is a  (4)
> **URLs:** [localhost:3000](https://localhost:3000) (3)
> **Ports:** :3000 (3)
> **Env Vars:** http (1), mp4 (1), html5 (1)

#### Forking and uploading streams
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=0)** - [Instructor] The HTTP response object is a writable stream and the HTTP request object is a readable stream.
>
> **[0:06](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=6)** We can use the request stream as a source.
>
> **[0:09](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=9)** To get started let's clean up our code a bit.
>
> **[0:11](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=11)** In this lesson our server's gonna handle multiple requests so we're only handling one video request here in range request.
>
> **[0:18](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=18)** What I actually want to do is take all of our code that's inside of this asynchronous handler, and I'm gonna cut the entire function out just by cutting that to the clipboard and I will create a function for this, we'll call it respondWithVideo, so our server still has a little respondWithVideo function, I can just paste the function in.
>
> **[0:37](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=37)** So respondWithVideo is our async function that takes in a request and a response and then goes ahead and sends our one video file that we're loading.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=46)** So what I'm gonna do is add a new callback handler, so a new function in here, that takes a request and a response.
>
> **[0:55](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=55)** And we're gonna basically check some variables on the request to see how we should respond.
>
> **[1:01](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=61)** So the first thing we're gonna do is if the request URL is equal to slash video then we'll go ahead and keep the code that we wrote for the last lesson.
>
> **[1:13](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=73)** So when the request URL is equal to slash video, we'll go ahead and respond with video and pass along the request and the response.
>
> **[1:24](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=84)** So otherwise what we're gonna do is we're gonna display a form.
>
> **[1:27](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=87)** So I'm going to send a response where I write a head and our header will be a 200.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=93)** And this form is gonna be in HTML so our content type is HTML, text HTML.
>
> **[1:45](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=105)** And for brevity we should serve an HTML file with a full HTML/HTML and doc type.
>
> **[1:50](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=110)** But for brevity in this lesson, I'm just gonna go ahead and respond with the form that we need to send in order to upload a file.
>
> **[1:57](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=117)** So when we do our res end response I'm just gonna simply add a little HTML blob that represents our form.
>
> **[2:05](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=125)** So we'll take in the form and then we're gonna set the encoding type attribute, the enctype to multipart form data.
>
> **[2:12](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=132)** And that means when we respond with this form our data will be encoded as multipart form data which is required in order to upload files.
>
> **[2:19](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=139)** So we'll also make this form send a post method.
>
> **[2:23](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=143)** So the method equals post.
>
> **[2:25](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=145)** And then finally we'll give it an action or where this form should actually send the data, and we're just gonna send it directly to the server.
>
> **[2:32](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=152)** So we'll do slash to let us know that we wanna do the root.
>
> **[2:36](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=156)** And we're gonna send the results of this form to the homepage.
>
> **[2:40](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=160)** So there we go.
>
> **[2:42](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=162)** What I'm gonna do is add an input type, and we're gonna set that equal to file.
>
> **[2:46](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=166)** So we're gonna use a little file input type here.
>
> **[2:48](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=168)** We'll give it a name, upload file, and a button to upload the file.
>
> **[2:54](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=174)** So I'll do a little button slash button and we will write upload file with the button.
>
> **[3:01](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=181)** So now when we start our server we should see a form at the homepage.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=187)** So if I come over here to localhost 3000 we see our form.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=190)** If we want to see our video now we do slash video and there we go, our video is still streaming, still handling range requests from the video route.
>
> **[3:21](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=201)** So what we wanna do is upload a file, but first let's write the code that will actually handle uploading the file.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=206)** So I'm gonna come into my createServer handler here, and I'm gonna change this if statement into an else if, because I'm gonna put another if statement in front of that.
>
> **[3:39](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=219)** So we have another if statement and then we'll check to see if the request is for a video.
>
> **[3:43](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=223)** Otherwise we'll surf the homepage.
>
> **[3:45](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=225)** So if the request.method is equal to post that means we are actually uploading our video.
>
> **[3:53](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=233)** So the form down here we set the method to post.
>
> **[3:55](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=235)** So when we click the upload file button we'll be sending a post request that will contain our form contents.
>
> **[4:02](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=242)** And what I'm gonna do is I'm gonna do a couple things here.
>
> **[4:03](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=243)** I'm gonna take the request and I'm gonna pipe it to the response.
>
> **[4:07](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=247)** So the request is a readable stream, which means we can pipe that to a writeable stream.
>
> **[4:13](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=253)** The response is a writable stream.
>
> **[4:14](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=254)** So we'll just see the contents of our uploaded file.
>
> **[4:17](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=257)** But we can also fork our streams.
>
> **[4:19](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=259)** All we need to do is call request pipe and we can pipe it to other places as well.
>
> **[4:24](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=264)** Why don't we try to send this to the response and process dot standard output, another writeable stream.
>
> **[4:30](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=270)** In fact, I can go ahead and send this to a file, too.
>
> **[4:33](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=273)** So we'll create a third WriteStream, and this WriteStream will write our upload.file.
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=282)** Great.
>
> **[4:44](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=284)** So let's go ahead and see our upload request streaming in action.
>
> **[4:48](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=288)** I'm gonna go ahead and come over here to the terminal, stop the current server.
>
> **[4:52](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=292)** Node dot to run our changes.
>
> **[4:55](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=295)** And then we'll come over here to localhost 3000 and I'm gonna choose a file.
>
> **[5:01](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=301)** So if I go to the desktop and take a look at my exercise files for chapter three, I have a couple sample files here.
>
> **[5:08](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=308)** I'm gonna choose the text file for now.
>
> **[5:10](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=310)** So we're going to go ahead and upload our text file.
>
> **[5:12](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=312)** So sample.txt.
>
> **[5:13](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=313)** And I'll click open and upload the file.
>
> **[5:17](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=317)** Woops and it looks like we have a problem.
>
> **[5:20](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=320)** So initially our server ran, but we have some sort of a problem.
>
> **[5:23](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=323)** Let's go ahead and take a look at that.
>
> **[5:25](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=325)** Okay, so I see I have a reference error.
>
> **[5:27](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=327)** CreateWriteStream is not a find.
>
> **[5:28](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=328)** And that is because up here at the top we have not included createWriteStream.
>
> **[5:34](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=334)** I always forget to do that so I'll go ahead and add that here.
>
> **[5:36](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=336)** And since we're including a couple things from the file system I can go ahead and just place all of this on its own line so we can see everything that we need from the file system clearly.
>
> **[5:45](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=345)** So let's go ahead and try this again.
>
> **[5:47](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=347)** I'll come over here to the terminal.
>
> **[5:48](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=348)** Clear and then type node dot.
>
> **[5:51](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=351)** And let's go ahead and make a request for our localhost 3000.
>
> **[5:55](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=355)** And then I'm gonna choose my file.
>
> **[5:56](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=356)** I'm gonna choose that sample text file again.
>
> **[5:58](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=358)** Just a bunch of Lorem ipsum text.
>
> **[6:01](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=361)** And then when I upload the file we get to see that the request has actually been streamed to the response.
>
> **[6:07](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=367)** So here is what was uploaded.
>
> **[6:09](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=369)** We also see that inside of the standard output, so our uploaded file's been sent to standard output.
>
> **[6:15](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=375)** And in fact, I bet you we can take a look and, yep, there's an upload file.
>
> **[6:19](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=379)** So if we take a look at that we also wrote the request to the file.
>
> **[6:22](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=382)** So we did three things with one request stream, simply by piping that request stream to different writeStreams.
>
> **[6:30](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=390)** Now one of the reasons that we're uploading the file first, as opposed to the video, is to see a problem that we have to deal with.
>
> **[6:37](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=397)** So whenever we have multipart form data what actually happens is our response streams the file that we uploaded, so the contents of whatever the file is, be that a text file or a binary file, it gets streamed as text and then these form boundaries.
>
> **[6:51](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=411)** So we see this WebKitFormBoundary.
>
> **[6:54](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=414)** That gives us information about the file.
>
> **[6:55](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=415)** We can see the file name there and the content type of the file, so on and so forth.
>
> **[6:59](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=419)** So we actually have to parse this response.
>
> **[7:02](https://www.linkedin.com/learning/advanced-node-js/forking-and-uploading-streams?u=76281980&t=422)** And instead of doing the heavy lifting of doing that, in the next lesson we're gonna look at an MPM that will help us parse these form data responses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (6), this, (1), async (1), pass (1)
> **Env Vars:** html (7), http (2), url (2), mpm (1)
> **Code Identifiers:** respondwithvideo (3), createserver (1), createwritestream (1), writestreams (1)
> **CLI Commands:** make (2), node (2), find (1)
> **Definitions:** is a  (4)
> **Tools:** terminal (2)
> **File Paths:** sample.txt (1)
> **Cross-References:** in the next (1)

#### Parsing multipart/form-data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=0)** - [Instructor] In the last lesson we actually added an upload stream to our http server, so we can actually upload files.
>
> **[0:06](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=6)** And we took our upload request stream and we piped it to several different writable streams.
>
> **[0:11](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=11)** So, in this lesson, we're actually gonna handle parsing the multi-part form data and we're gonna use an npm to do that.
>
> **[0:18](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=18)** The work to parse multi-part requests has been done many times over and it's been published to many different npms, so there's a lot of options when it comes to parsing a multi-part form data request.
>
> **[0:28](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=28)** Since we're streaming experts, I've decided to use an npm that also supports streams.
>
> **[0:34](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=34)** All right, so I'm gonna come over to my terminal, and before I install multi-party I just want to npm init to create a package.json and I can send it a dash-y just to answer all the questions as yes and then I get a package.json file in my root.
>
> **[0:46](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=46)** It's always a good idea to have a package.json file once you start installing things with nmp, so I'm gonna go ahead and do an nmp install multiparty.
>
> **[0:56](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=56)** And there we go.
>
> **[0:57](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=57)** So now that I have multiparty I'm ready to implement it to help me parse this form.
>
> **[1:01](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=61)** So I can come over here to my server and go to the top of the file and make sure that we include multiparty.
>
> **[1:07](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=67)** (keyboard sound) And once we have multiparty, we can use it, so we're going to use it when the file is being uploaded.
>
> **[1:17](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=77)** We're gonna use it in this section, so I'm no longer just going to pipe our request stream to standard output and to a file and to the browser What we're gonna do is use multiparty here, so I'm going to create a new variable within this if statement called "form."
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=92)** And we'll do a new multiparty dot form.
>
> **[1:37](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=97)** And then what we're gonna do is we're gonna take the form and we're going to parse the request.
>
> **[1:43](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=103)** So now the form will actually parse our multiparty request and it will give us any files that are inside that upload request as parts.
>
> **[1:50](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=110)** It will also give us any form data.
>
> **[1:51](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=111)** So if we actually had a form where users were inserting text and filling that out, all of that would come inside of the same request stream and this multiparty will simply parse it off.
>
> **[2:01](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=121)** We only have one value in our form and that's the upload file, so we're gonna go ahead and validate that by listening for a part event.
>
> **[2:08](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=128)** So if I take our multiparty form and add on part, what happens is, as multiparty parses our request, when they find a file or a form field, that's going to be sent as a part.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=140)** So I can take that and handle it within this callback function.
>
> **[2:23](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=143)** So when we find a part, what do we want to do with it?
>
> **[2:25](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=145)** Well the neat thing about multiparty is a part is a readable stream.
>
> **[2:29](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=149)** So when we find a part, what we're actually going to do is just upload it. So I'll take the part and I'll pipe it to a create write stream.
>
> **[2:38](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=158)** What we're going to do here is use the file name itself when we create the write stream.
>
> **[2:42](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=162)** So I'm gonna go ahead and just upload it to the current directory for now and we will take the part dot filename.
>
> **[2:51](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=171)** And I need to make sure I use backticks instead of single quotes. There we go.
>
> **[2:57](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=177)** So in addition to actually giving us the file contents as a stream, the multiparty also parses out the filename of the upload file.
>
> **[3:05](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=185)** So we're simply gonna move it to the current directory.
>
> **[3:08](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=188)** Now once we actually have the upload completed, we're gonna go ahead and listen for an on close event.
>
> **[3:13](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=193)** So I'm just chaining that on there.
>
> **[3:15](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=195)** Let me get rid of this semicolon, actually, to do that.
>
> **[3:17](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=197)** So we have part dot pipe dot on close.
>
> **[3:19](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=199)** It's all one line of code thus far.
>
> **[3:22](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=202)** And when this closes, I'm gonna go ahead and handle that inside of a callback function here.
>
> **[3:26](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=206)** So when the part closes we'll just go ahead and let our users know that the file upload was successful.
>
> **[3:32](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=212)** So we'll write ahead with a 200 and we will let them know that the content type for this message is going to be text, html text.
>
> **[3:44](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=224)** And then we will just end the response by sending a heading one.
>
> **[3:49](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=229)** So we're just gonna send an html part, you really should be sending full pages, but for brevity we're gonna go ahead and say that the file was uploaded and then we can actually grab that file part, part dot filename slash h one.
>
> **[4:05](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=245)** Now I made my common mistake, which is single quotes as opposed to backticks.
>
> **[4:10](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=250)** Also, I'm using a template string here so that we can get the filename.
>
> **[4:14](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=254)** I need to be sure to use backticks. There we go.
>
> **[4:17](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=257)** So let's go ahead and save it.
>
> **[4:19](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=259)** Now we are handling our file upload with multiparty.
>
> **[4:21](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=261)** And we're just simply gonna upload the file and let the user know that the file upload was successful.
>
> **[4:26](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=266)** So I could come over here to the terminal, I'll clear out what I have and then run our application by typing node dot. Then come over here to the browser and make a request for localhost 3000.
>
> **[4:37](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=277)** And this time when I upload the file I'm actually gonna upload our "Powder Day" video.
>
> **[4:41](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=281)** So I will choose a larger file, I'll go ahead and open that and then I'll click upload file, and then you can see here that we have our file uploaded, powder day dot mp4.
>
> **[4:52](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=292)** If I come over here to our terminal and stop the server, I should be able to open the current folder by typing open dot.
>
> **[5:00](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=300)** If you're on a PC, you can type explore dot and it will do the same thing.
>
> **[5:05](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=305)** And look at this, it looks like I have a copy of my powder day mp4. Let's see if that's a working copy that was just uploaded. Yes it is.
>
> **[5:17](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=317)** So, it looks like, by using multiparty, to help us parse our multipart requests, we can actually take the part, which represents the file itself, and because that's a readable stream, pipe it to any readable stream that we choose to use.
>
> **[5:31](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=331)** So, that actually concludes our little server project here.
>
> **[5:34](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=334)** So we are successfully able to stream videos to the client on this video server.
>
> **[5:40](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=340)** And handle range requests, as well as handle upload files.
>
> **[5:43](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=343)** So, we're able to actually stream data from the client.
>
> **[5:46](https://www.linkedin.com/learning/advanced-node-js/parsing-multipart-form-data?u=76281980&t=346)** And we can see that we're doing that here with an npm called multiparty. Let me just go ahead and add this last little semicolon here before we stop.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), make (3), find (3), node (1)
> **Code Keywords:** let (7), function (2), this, (1)
> **File Paths:** package.json (3)
> **Tools:** terminal (3)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **Cross-References:** in the last (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=0)** - [Alex] Thank you for joining me for Advanced Node.js.
>
> **[0:03](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=3)** I hope you can use this knowledge to build Node.js applications that work more efficiently, and I also hope that you stream everything everywhere you can from here on out.
>
> **[0:12](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=12)** If you're looking for more opportunities to improve your Node skills, I've created a course on design patterns in Node.js.
>
> **[0:18](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=18)** Design patterns are proven techniques for implementing highly reusable code.
>
> **[0:22](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=22)** They are foundational to most NPM libraries.
>
> **[0:24](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=24)** If you're interested in learning how to implement popular design patterns with Node.js, I'd recommend this course.
>
> **[0:30](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=30)** This course covers many of the popular Gang of Four design patterns that are used in many languages that support object oriented programming.
>
> **[0:38](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=38)** This course will help improve your node.js skills, as well as your architectural vocabulary.
>
> **[0:42](https://www.linkedin.com/learning/advanced-node-js/next-steps?u=76281980&t=42)** Again, thank you for taking this course, and I wish you luck on all your coding adventures.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), npm (1)
> **File Paths:** node.js (5)
> **Env Vars:** npm (1)
> **Speakers:** - [alex] (1)


## Path Context

### In [[Advance your Node.js Skills]]
← [[Node.js- Microservices]] | **7 of 8** | [[Advanced Node.js- Scaling Applications]] →

## Appears In

- [[Advance your Node.js Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Node.js- Debugging and Performance Tuning]] — Node.js
- [[Node.js- Design Patterns]] — Node.js

---

[↑ Back to top](#)