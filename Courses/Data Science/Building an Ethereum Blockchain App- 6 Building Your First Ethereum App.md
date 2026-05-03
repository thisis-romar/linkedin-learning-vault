---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 8/11/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGu2M7qkDU4hg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525931705?e=2147483647&amp;v=beta&amp;t=TKRXkeIQVC4pLDmFpM-7tfolGqHsLR0LpFMe29wpiTU"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":6,"total":11,"prev":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet","next":"Building an Ethereum Blockchain App- 7 Smart Contracts"},{"path":"Become a Blockchain Developer","position":6,"total":14,"prev":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet","next":"Building an Ethereum Blockchain App- 7 Smart Contracts"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%206%20Building%20Your%20First%20Ethereum%20App.md)

![Building an Ethereum Blockchain App: 6 Building Your First Ethereum App](https://media.licdn.com/dms/image/v2/C560DAQGu2M7qkDU4hg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525931705?e=2147483647&amp;v=beta&amp;t=TKRXkeIQVC4pLDmFpM-7tfolGqHsLR0LpFMe29wpiTU)

# Building an Ethereum Blockchain App: 6 Building Your First Ethereum App

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, sixth in a series of eleven, walks you through building your first Ethereum app in Truffle, using the Solidity programming language. Instructor Michael Solomon shows you how to create and initialize a new directory for y

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app) | 36m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Building Your First Ethereum App**](#1-building-your-first-ethereum-app) (4 videos)
  - [Preparing your first Truffle project](#preparing-your-first-truffle-project)
  - [Writing a simple smart contract](#writing-a-simple-smart-contract)
  - [Compiling your simple smart contract](#compiling-your-simple-smart-contract)
  - [Deploying code and invoking functions](#deploying-code-and-invoking-functions)

### 1. Building Your First Ethereum App

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing your first Truffle project](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=1)** - All right. Now, here's the moment that you've been waiting for. We're ready to start building our very first smart contract in [[Ethereum]]. We're going to be using [[Solidity]] to do that. So, we're going to pull all the pieces. Don't worry, we're going to start slowly and you don't have to have any prior knowledge of programming or Solidity or [[JavaScript]]. We're going to take you through step by step. But how do we do it? Well, we start by doing. Since we are going to be writing code, any experience with writing code in any of the language is helpful, but not absolutely necessary. I'm going to try to give you all of the pieces of the puzzle that you're going to need to start from the very ground floor and then build up from there. So, let's start with the basics. The first thing we need to do is identify our project to Truffle. Remember, Truffle is the framework, like the umbrella that we're operating under. Truffle is going to help keep track of all of the artifacts and the things that we need to move around. So, we need to put things in a place that Truffle can understand them. Now, Truffle organizes its activities into projects, and it uses directories to organize the artifacts into projects. So basically, if you want to create a new Truffle project, you just create a new directory and then ask Truffle to initialize it. And he'll put a few files in there and then we're going to go look and then edit one of those files to change the configuration. So, let's go do that right now. You'll notice that I use [[Powershell]] a lot. So, I went ahead and I pinned the PowerShell icon to my taskbar.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=95)** So, now I'm going to launch PowerShell and it takes me to my default directory. You can create any directory you want, anywhere you want. I like to create a directory called workspace. So, I'm going to say, make directory workspace. And that's where I create all of my sub-directories for my projects. You could call them whatever you want to, but let's cd down to workspace and I'm going to create a new directory for my project, and I'll just call this make directory first project. All right, so now I have a directory first project, and now I'm going to cd down into first project. And now I'm going to tell Truffle to initialize my project. So I'm just going to type truffle init. And that tells Truffle that this project or this directory is now a project and it has some files in it. So if I go look at these files, I see a directory called contracts, that's where my [[Smart Contracts]] are going. Another directory called migrations and test. And then finally I have a truffle-config.js that's a JavaScript file that contains my Truffle configuration. My next step is to edit truffle-config.js. My oh my, what editor should I use? Hey, why don't we just use Visual Studio Code? So the best way to launch Visual Studio Code from within a project is type the [[Microsoft Word|word]] code dot.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=189)** Now dot means the current directory and that launches Visual Studio Code for my current directory. So I'm going to minimize my PowerShell window, and look at what we have now. We now in the explore window, we have my first project, because that's where I started Visual Studio Code. So it knows first project is the current directory, and there's my subdirectory contracts, migrations and test. And of course we see the hover, it pops up and shows me exactly what directory I'm pointing to. And here's truffle-config.js. If I simply click on that guy, looky, looky, it brings it right into the editor. So let's make this a little bit bigger, I'm going to go ahead and go full screen. And now we need to edit the configuration, truffle-config.js so it matches what we really want. So what is it that we really want to do? Well, we're about to write smart contract code, right? And we're going to deploy and test that using our test [[Blockchain]]. Well, didn't we install Ganache for our test blockchain? Yeah, we sure did. So why don't we tell Truffle where Ganache is located? So then when we deploy, Truffle knows where to put the code. Okay, so here's our truffle-config.js. Let's scroll down just a little bit, and notice there's a section here called networks, and one of them says development, but it's in green. The green basically means this is commented out. One of the ways that we can specify comments
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=285)** and solidity is starting the line, or really just starting the comment with two slashes. So if I delete these slashes, watch what's going to happen. Notice that it changes from green to black. And the reason for that is, it's no longer a comment. And so now we have defined a network called development with the host 127.0.0.1, which is local host, and the port 8545. And the network ID is any network. We can specify a network ID. You remember, we saw that in Ganache. Or we can just say this matches any network ID. We're going to leave it alone and make it easy. Is that the right network though? Or the right port? Hmm, maybe not. Hold on, how do we know? Let's go back to Ganache. If I launched Ganache, this is going to bring up our test network. I'm just going to click on quickstart to fire up our blockchain network, and let's see what we have. Oh, wait a second. Remember it's at 7540, so we had two choices. I can go into settings and change it, or I can just simply tell Truffle, "hey, I'm using port 7545." Let's do that. Let's tell Truffle that our development network is not the default, but it is 7545. I'm going to press control S to save it. And now we have defined our Truffle environment
>
> **[6:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=381)** to point to and connect to our Ganache test blockchain network. That's how we pull a project together. We've defined a project, we've initialized it and we've configured it. So we're ready to start writing some code and actually see how this fits together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (4), [[Blockchain]] (4), [[Solidity]] (3), [[JavaScript]] (2), [[Ethereum]] (1)
> **Tools:** powershell (4), visual studio (4)
> **CLI Commands:** make (4), cd (2)
> **File Paths:** truffle-config.js (5)
> **UI Navigation:** click on (2), scroll down (1)
> **Ports:** port 8545 (1), port 7545 (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** go back to (1)

#### [Writing a simple smart contract](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=1)** - Remember that the first step in the [[Ethereum]] [[Software Development]] Life Cycle is to design your software. So, we want to design the [[Smart Contracts]] that are going to provide all the functionality. So, design takes a little bit of time to learn, and you have to write some code to learn how to design well, but we always want to design before we write. [[Blockchain]] application design is different from traditional applications, but there's some similarities as well. We want to pay attention to as many differences as possible. For example, remember you have to pay a fee every time you access blockchain data. So, even when you're just testing your code, you have to pay a fee. That's one of the reasons why we use local blockchains and we use public test blockchains to test our code. We can pre-fund the accounts with free money or Monopoly money. It's not real money, it doesn't really cost us anything in most cases. So, we want to economize how much money we spend through the testing process. So, you test it, you see how much money we spent, how much gas did it use, and you may have to go back and recode to use less gas before you do it for real. So, sometimes when you're used to actually storing a data temporarily in the database for a traditional application, won't work as well here, because storing a data temporarily, of course, it always stays there on the blockchain and you have to pay to do that. So, you may not want to do it that way. Once you write data to the blockchain, remember, you can't change the data
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=93)** and that includes your smart contract code. So, anything that you write bugs at all, if you deploy to the test network or to the live network, especially, it'll always be there. That's the beauty of a local test network or test blockchain that you control. Because if you can take control a local blockchain, you can blow it away anytime you want to and start from scratch. That is one of the advantages. And that means that your local version is not truly immutable because you can just vaporize it anytime you want to. But always remember that once you put something on a public test or the main net blockchain, it's always going to be there. Also remember that whatever data you put out there in testing or in real application runtime, is going to be there for everyone to see. Sometimes during testing, you just throw out some data. You don't really care what it is because it's all local to you, this is for traditional applications. You may use live customer data just to test it. Well, you can't do that anymore if you're going to a public testing blockchain. For your local stuff, sure, you can use whatever data you want. But remember when you go to a public testing blockchain, that data is persistent and it's available to everyone. So, those are some of the things you want to pay attention to. If you do have sensitive data, of course, you want to use encryption, but when you do that, then you have to worry about encryption keys on top of all the other keys. The moral of the story, is that spending time thinking through these issues
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=188)** and designing your applications intelligently will always save you effort and time on the backend. So, now we're ready to write our first program. So, we're learning a new language, why not use the traditional first program? That is the Hello World program. Most developers, when they write their first program in a new language, always write Hello World. It does nothing more than simply echos Hello World to the terminal. And we're going to do that now. It doesn't do anything else other than show us the message, but it's a good starting point to show us the absolute basics of [[Solidity]]. All right, so we're back in Visual Studio Code and we are back where we left it, where we were editing our truffle-config.js. Now, you have to be a little careful about where you place your files to make sure that everything flows together well. By default, truffle wants to see our smart contracts in the contracts folder. So, let's open the contracts folder and we see something already there. That is just the default migrations solidity program that was put there. So, we're not going to worry about that. We want to create a new one. So, let's right mouse click on contracts and choose New File. And let's type in HelloWorld, H-E-L-L-O W-O-R-L-D.sol, and I'm going to use a capital H and a capital W, and that does matter. sol is the extension for solidity code. So, if I press Enter, it opens our new blank file. All right, so I'm going to type really fast and bam!
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=283)** There we go, well, clearly, I just copied and paste it. And you can do the same thing too. If you have the accompanying slides that go along with this material, you can simply copy and paste code without even having to copy and paste the text. You can actually copy the HelloWorld.sol into place, or you can copy the text just like I did. Okay, let's stop or at least slow down for a minute. If you've never written code before, or if you've never written code in solidity, there's some things that may look weird. So, let's take it one step at a time. Let's start with the very first line. The first line says progma solidity and some numbers. progma or pragma is aligned that basically tells solidity what compiler version is valid. The reason this is important for this language, solidity is a brand new language. It hasn't been around all that long and it's undergoing a lot of changes. And as it changes from one version to another, it may support new functionality and not support old functionality. So, the pragma directive is important to tell solidity what version is valid. So, this says greater than or above 0.5.0. So, this means that I want a version five or higher, or basically a version five compiler will work. So, the 5.0 means anything that's bigger than 5.0. So, a 5.1, 5.3, something like that will work. This is telling me that if I have a version 4.24 compiler,
>
> **[6:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=379)** this program will not work and the compiler will refuse to compile this program. This just makes sure that we don't accidentally compile with the wrong compiler and get the wrong functionality. In most cases, you're going to stick really close to whatever version of solidity you're writing for. Now, how do we know that? Well, remember, one of the things that we did, I'm going to open my [[Powershell]] window back up. Remember, when I typed in truffle version? It showed me my solidity version, 0.5.8. That's the compiler that we're using, the truffle's using. So, we know it's 0.5.8. Well, 0.5.0, the major version is five, and so that works. All right, so that's pragma. Next thing we do on line three, is we defined our smart contract name and we use the keyword contract with followed by the name. So, we're basically saying, I'm creating a new smart contract called Hello World. We use the curly braces to show where the element, in this case, the contract starts and notice when I click on the opening curly brace, the closing, the matching closing brace automatically highlights. That is a feature of Visual Studio Code to help us keep track of whether we've closed all our parentheses and our braces properly. So, it's really nice. We can just scroll back or use the arrow keys to move back and forth and when were highlighting
>
> **[7:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=472)** a brace it automatically highlights the matching brace. All right, so contract just defines the contract name. Then we move inside, and we basically have one state variable and one function. The state variable is a variable called helloMessage. It is a string data type, which means that we're going to put characters in it. And the [[Microsoft Word|word]] after it, private just simply means that helloMessage is only available inside this contract. No external functions or external programs can reference the contents of helloMessage. Now, everything that I'm telling you now we're going to come back and we're going to dig into a little bit deeper. I'm just giving you the absolute basics at this point. So, what we've done is we've created a private string called helloMessage, and I'm giving it the value Hello world. And we put that in quotes and that assigns the string value to this variable helloMessage. Solidity very much like [[JavaScript]] uses a semi-colon to terminate all of its statements. So, we see the pragma has a semi-colon, and the variable definition has a semi-colon. The contract doesn't have a semi-colon because it's not a statement, it is a construct. It's actually creating a contract as opposed to an individual statement. All right, the next piece of the puzzle is we define our function. Now, there's a lot going on here, but let me just boil it down for you.
>
> **[9:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=565)** With the function, we give the function a name, we tell a little bit about who can use it, who can call the function, and then what does it return? So, this function has a name getHelloMessage. The two parenthesis here say that I don't pass him any message. Sorry, I just accidentally copied it inside. I can pass input parameters to a function, but I'm not going to do that this time. I don't need to pass in any information. It's public, meaning that anybody outside this contract can call getHelloMessage. view, basically means that it only deals with local values, it doesn't touch the blockchain. And when I call it, I'm going to return a string that comes from my local memory. And if we go inside the body, which is inside the little curly braces, it does one thing, it's simply returns the value of helloMessage. So, we go back, helloMessage has the string Hello world. So, all this function does, is just return Hello world. That's a lot of talking to basically show how we can return one simple little string, but that's how it works. If you followed along, you actually have written your very first simple smart contract. Now, we haven't run it, we haven't seen what it can do yet, but that's the next step. Remember, we designed it and then we wrote it, so now we're ready for the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (11), [[Blockchain]] (10), [[Smart Contracts]] (2), [[Ethereum]] (1), [[Software Development]] (1)
> **Code Identifiers:** hellomessage (7), gethellomessage (2)
> **Versions:** 0.5.0 (2), 5.0 (2), 0.5.8 (2), 5.1 (1), 5.3 (1)
> **Definitions:** is a  (5), means that (3), basically means (1)
> **Tools:** visual studio (2), terminal (1), powershell (1)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **Analogies:** for example (1), just like (1)
> **File Paths:** truffle-config.js (1)

#### [Compiling your simple smart contract](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=1)** - All right, so now you've written your first smart contract. Now what do we do with it? Let's take a look at the steps real quickly. First off we write the source code. You're done with that. Next, we compile the source code that translates it into bytecode that the EVM can execute. The EVM cannot execute source code, so we have to translate it. That's what the compile process is. Then once we compile it and we have bytecode, then we deploy it. That means actually write it to the [[Blockchain]]. And yeah, we have to pay a little bit of gas to do that. Once we write it to the blockchain, then we can actually call or invoke the functions that we've written. So we only had one function, that is get "Hello world." And so we're going to invoke that once we get everything compiled and put on the blockchain. So let's take it one step at a time. We're going to go back into Visual Studio Code and compile our smart contract. All right, so here we are, back in Visual Studio Code to compile a smart contract. Very simple, just simply press the F5 key. And when we compile it, notice we get a message at the bottom saying, compilation completed successfully. Now, if we don't see the output, we can click on output and notice it says problems. Let's take a look at that. And it says no trailing white space, line containing trailing white space. That's 1, 3. So if I click on that, this shows me that I have trailing white space, which is something we really don't want. And that underlying squiggly yellow mess or the yellow underline,
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=94)** tells us there's a problem. It tells us there's an error. So let's backspace a little bit, whoops, wrong one. Control Z to get back there. Let's just backspace and get over that trailing white space. Let's see. Get back over to the very end. And there we go. All right, and notice when I got rid of the trailing white space, and trailing white space basically means extra spaces or tabs at the end of a line, once I got rid of that, the yellow squiggly line went away. So I'm going to press Control S to save it again, and now I'm going to press F5 to compile it, and notice this time, there's no problems. And in the output window, I see compiling using the default compilers [[Solidity]] version 0.5.11. 0.5.11, that's interesting. That's slightly a different version than what Truffle is using. Remember Truffle is using 0.5.8, and the internal Visual Studio Code is using 0.5.11. Now 0.5.8 and 0.5.11 is a very close difference, or very close. It's not that big of a deal, but it's possible that as you move forward and you install new versions, if those numbers start to diverge, or if you want them to be exactly the same, you might need to overwrite your default compiler. In fact, let me show you how to do that. We will go find the right compiler and overwrite it. So this step is not something that you have to do.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=188)** And I'm only showing you this because it's something that you might end up doing at some point, if you run Truffle version and then you see one version, and then you see the compiler version, as we just saw in Visual Studio Code, and they're more than just one or two subversions apart, you probably want to make sure they're harmonized to make sure that your development IDE is using the same compiler that you're going to use when you deploy to the actual blockchain. So let's go back into Visual Studio Code and see how to do that. All right, just to kind of recap. Remember I typed in Truffle version in the [[Powershell]], and I kept bouncing back and forth. But if I just click on this little terminal tab right here, it actually gives me a PowerShell right there, so I don't have to come out of my IDE. That's one of the beauties of having an integrated development environment. So I'm going to drag this up a little bit. There we go. And just for laughs, let's go back and type in Truffle version. I've already done this, but let's just see it right here. All right, that shows us that Solidity is 0.5.8. Click on output and sure enough, 0.5.11. All right, so how do we fix this? Let's go to our web browser and navigate to [https://github.com/ethereum/solc-bin/tree/gh-pages/bin](https://github.com/ethereum/solc-bin/tree/gh-pages/bin).
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=283)** Wow. Clearly you're going to copy this and not just type it in. All right, so basically this is the list of all the Solidity compiler versions. Okay, so now we're on [[GitHub]], and you see this really long list of compilers. What do we want? I'm going to take you back, show you what we're looking for. We're basically going to scroll down to find the right version. We're going to visit that page for one reason only. We just want to copy a string. We're going to take that string, and we're going to put it into a configuration file back in Visual Studio Code. That will tell the extension that we're using for Solidity what version of the compiler to use. So it's kind of complex, but just follow along with me and it'll make sense. All right, so back in GitHub, let's scroll all the way down till we find, solJSON-v0.5.8, and we're looking for +commit after 0.5.8. There we go, right there. Don't click on the file name itself, click on the description next to it. And from this point, I want you to copy the v0.5.8, all the way to the end of that string. Copy it to your clipboard. Cause now we're ready to go back into Visual Studio Code and enter it into a config file. Now remember we're using an extension to support Solidity.
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=376)** So we want to enter that string we just copied as a parameter to a special feature in the setup file for our extension. Phew, that's a lot. Here, click on extensions. We only have one right now. Notice this is the [[Ethereum]] Solidity language plugin or extension by Juan Blanco. And there's a little gear here for managing your settings. Click on that. And I want to come down to the very bottom and choose configure extension settings. Believe it or not, this is the quickest way to get to the [[JSON]] file in which we can set settings for this extension. So click on edit in settings.json. It already has one setting in there. Cause I changed my color theme to visual studio light. Now we're going to add one more parameter and one more setting. And that setting in parentheses is going to be, Solidity.compileUsing, and there we go, we see it already completed it for us. We're going to say remote version. And I'm going to say, in quotes, paste the version that I just copied, and there we go. But we see there's a problem. I even used completion, it actually typed it for me, but there's a problem. So what is the problem here?
>
> **[7:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=468)** Let's see, if we just hover over it, it says expected comma. Okay. Remember we added a second setting, and settings based on JSON have to be separated by a comma. So that means that when we added the second setting, I needed to put a comma after the first one. So as soon as I type the comma, there we go. So we have to be a little careful about that. Kind of sneaky, isn't it? All right, so now we have our settings.json set properly, and now I can close this guy. I can close settings. And at this point, let's try compiling again.
>
> **[8:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=510)** And there we go. Compilation completed successfully, and look at the version now, it's 0.5.8. So what we've done so far, it looks like we've done a lot, but really all we've done is we've compiled our code. Remember we're going to write it. We're going to compile it. Then we're going to deploy and run it. We haven't done that yet. But what we have done is we've learned how to go into our extension settings and change the default compiler to a specific version. So now we know that the compiler we're using inside Solidity and the one that we're using in Truffle have the same version. It's 0.5.8. All right, so we're ready to move to the next step, which is to actually run the smart contract and see that magical phrase, "Hello world."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (8), [[Blockchain]] (4), [[JSON]] (4), [[GitHub]] (3), [[Powershell]] (2)
> **Versions:** 0.5.8 (6), 0.5.11 (4), v0.5.8 (2), version 0 (1), 5.11 (1)
> **Tools:** visual studio (8), github (3), powershell (2), terminal (1)
> **UI Navigation:** click on (9), go to (1), navigate to (1), scroll down (1)
> **CLI Commands:** find (3), make (3)
> **Env Vars:** evm (2), ide (2), json (2)
> **Exercise Files:** source code (3)
> **Definitions:** basically means (1), is a  (1), means that (1)

#### [Deploying code and invoking functions](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=1)** - All right, so now we're ready to reach out and touch the [[Blockchain]] for the very first time. Now of course, we're only going to be reaching out and touching our local Ganache test blockchain, but still, this is the first time we've actually kind of gone through the whole process. So, let's see how that works. We're going to jump back into Visual Studio Code to drive the process. So I'm going to clean things up just a little bit. I'm going to click back on the Explorer, and there we go, we can see our contract code. Now, the next thing we want to do is we want to go to a terminal and ask Truffle to deploy our code. So we're going to type, truffle deploy -- reset. And the reset just basically makes sure that everything is starting over again. All right, now, a lot of things just happened. Notice there were two deployments and it gave us a final cost of Ether, so we actually reached out and we touched the blockchain. Well, did we really? Let's take a look at Ganache. Oh, well look at that, the very first address no longer has 100 Ether, it has 99.99 Ether. So apparently we used the first address to place our code on the blockchain. Well let's look at that, let's look at blocks. Whoops, look at this now. We have five blocks, the Genesis block and four additional blocks, each one has one transaction. So let's look at this last block. And we see here that we have transaction,
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=96)** we have single transaction from one address to the contract address. That basically means we've deployed a smart contract, and that's how much gas was used. It looks like a lot of gas, but remember that's in Gwei, which is a really, really, really tiny unit. So we can see that we're interacting with our blockchain here. All right, so let's go back and now let's see if we can run our code. In the blockchain environment, it's not really easy to simply type in a command and run code. What you have to do, since it's a decentralized, kind of detached asynchronous type of environment, is you deploy your code to the blockchain, which we already did. Then what you have to do is we're going to start up a Truffle console, and then we're going to actually issue line commands one at a time to invoke our functions. It's kind of tedious, and we'll learn a better way later on, but for right now, we're going to have to be typing some commands. So let's jump back in, let's launch our console, and let's see if we can get that "Hello world" to come back to us. So the first thing we want to do is launch the console.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=168)** All right, now we're in Truffle, connected to the development network. Do you remember back in our truffle-config.js file? In fact, let's look at it really quickly here. Notice the networks. We define networks and we give them a name. And so we have a network called Development. And so that's what Truffle is telling us that we're connected to. So it's nice. It kind of reminds us where we are. If you start typing any of these commands, and they give you weird messages back, chances are you forgot to start the Truffle console. In other words if you type it just at the regular like first project console, you'll get weird stuff back. Make sure you always go into the console and you get this Truffle development prompt first before you continue. But once you're there, let's invoke our function.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=225)** So what I'm going to do is I'm going to invoke a function on the object, helloworld.deployed, which basically is a pointer to where we deployed our actual "Hello world" smart contract. If I successfully connect to it or find it, then I'm going to invoke, or I'm going to create an instance of my function.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=267)** So what I'm doing here is, I'm actually reaching out and I'm asking, where is my "Hello world" contract deployed to. If I can find it, then I want to return a pointer to the instance of that contract. All right, so we get a lot of things back. And basically you can get an error message or you get a bunch of [[JSON]] back, so I'm going to scroll up a little bit and we can see that we have some [[Metadata]]. We have, there's our metadata, here's our bytecode. This is the actual compiled code for "Hello world." It doesn't make much sense to us, but this is gold to the EVM. All right, so now we have this pointer to our actual code. Next, what I want to do is invoke the actual function. So remember our object, or our smart contract, is called "Hello world," and our function is called get helloMessage. So the way that I invoke my function,
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=334)** is I type this. Helloworld.deployed. If I find that, then I want to get an instance and return an instance, not of the actual method, but, or rather, the object, but an instance of get helloMessage. And when I type that in, I get that message, "Hello world." I'll bet you right now you're sitting there going, what in the world did it take so much work to get a stupid little message displayed on the screen? And I agree with you. Once you get the hang of reaching out and grabbing an instance of a smart contract and then grabbing an instance of, or rather invoking each function, it's a little bit more palatable, but just a little bit. We're going to move beyond that. Not at first, but I am going to show you better ways that are much more, much easier for the user or for you yourself to interact with. Clearly we would never want a user to have to go through anything like this, but remember, you've got to crawl before you can walk. And boy, we're crawling right now, but what you've done, think about it. You've built an entire development toolbox, and now we've put it together. We've configured it. We've written an actual smart contract. We've deployed it to the blockchain. We've instantiated it, and we've actually run blockchain code. It's pretty cool, actually. One last thing that I want
>
> **[7:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=425)** to take a look at before we close out is to go back and let's look at Ganache and let's see what's happened. Cause we know we had five blocks before we did anything, and then we actually invoked some codes. So let's see what's changed. So now that we've actually run some code, let's go back and look at Ganache. All right, so we're back to 99.99 Ether, and our blocks, hm, isn't that interesting? There's still only five blocks. I wonder why that is. Think about what we did. We only touched the blockchain when we deployed our code. You remember that the actual smart contract code doesn't really touch anything except memory? And that's the beauty of it. If you're only working in memory, it's all free. So just displaying the "Hello world," didn't touch the blockchain. In fact, the only time we went to the blockchain was to [[Fetch]] the code to run, and that's free. Running the code is free as long as you don't touch the blockchain for data. So in this case, we didn't add any new blocks, because we didn't add any new data. So you've been through the whole cycle at least once. Now you're ready to get your hands dirtier and write some code that does more than just simply throws a message up on the screen. We're moving ahead and you're learning a lot. So stick with it, and have some more fun with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (13), [[Metadata]] (2), [[JSON]] (1), [[Fetch]] (1)
> **Definitions:** is a  (2), is called (2), basically means (1), in other words (1)
> **CLI Commands:** find (3), make (2)
> **Code Identifiers:** hellomessage (2)
> **Env Vars:** json (1), evm (1)
> **Versions:** 99.99 (2)
> **Tools:** visual studio (1), terminal (1)
> **UI Navigation:** go to (1), scroll up (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] | **6 of 11** | [[Building an Ethereum Blockchain App- 7 Smart Contracts]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] | **6 of 14** | [[Building an Ethereum Blockchain App- 7 Smart Contracts]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum

---

[↑ Back to top](#)