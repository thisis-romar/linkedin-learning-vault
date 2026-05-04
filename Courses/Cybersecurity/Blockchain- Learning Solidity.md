---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: blockchain-learning-solidity-22873764
url: "https://www.linkedin.com/learning/blockchain-learning-solidity-22873764"
duration_minutes: 68
duration: 1h 8m
level: Intermediate
updated: 10/3/2023
learners: 129846
skills:
  - Solidity
  - Blockchain
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHUJvpNCRtrIQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696014871160?e=2147483647&amp;v=beta&amp;t=JcBanBnYhQ35mO9wiZmn2eibKhKvYvmELFI2eIyZwYc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)'
prev_courses:
  - '[Blockchain for Developers- Hyperledger Fabric on Azure](Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md)'
next_courses:
  - '[Blockchain Programming in iOS Using Swift](Blockchain%20Programming%20in%20iOS%20Using%20Swift.md)'
path_nav: '[{"path":"Become a Blockchain Developer","position":13,"total":14,"prev":"Blockchain for Developers- Hyperledger Fabric on Azure","next":"Blockchain Programming in iOS Using Swift"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - skill/solidity
  - skill/blockchain
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Blockchain-%20Learning%20Solidity.md)

![Blockchain: Learning Solidity](https://media.licdn.com/dms/image/v2/D560DAQHUJvpNCRtrIQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696014871160?e=2147483647&amp;v=beta&amp;t=JcBanBnYhQ35mO9wiZmn2eibKhKvYvmELFI2eIyZwYc)

# Blockchain: Learning Solidity

> In this course, learn about Solidity, the programming language used with the blockchain platform Ethereum. Instructor Emmanuel Henri takes you through the Solidity ecosystem and concepts, then shows how to apply them to build your very first application. Emmanuel starts by covering the basics of blockchain and smart contracts and details Solidity's foundations and basic syntax. Learn about units a

> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764) | 1h 8m | Intermediate | 130K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Blockchain: Learning Solidity](#blockchain-learning-solidity)
  - [Course prerequisites](#course-prerequisites)
- [**1. Introduction and Setup**](#1-introduction-and-setup) (4 videos)
  - [Introduction to Solidity](#introduction-to-solidity)
  - [Introduction to smart contracts](#introduction-to-smart-contracts)
  - [The Ethereum virtual machine](#the-ethereum-virtual-machine)
  - [Installing the Solidity compiler](#installing-the-solidity-compiler)
- [**2. Solidity Basics**](#2-solidity-basics) (8 videos)
  - [Solidity syntax basics](#solidity-syntax-basics)
  - [Basic syntax of a contract](#basic-syntax-of-a-contract)
  - [Types in Solidity](#types-in-solidity)
  - [Units and global variables](#units-and-global-variables)
  - [Other special variables](#other-special-variables)
  - [Functions overview](#functions-overview)
  - [Operators in Solidity](#operators-in-solidity)
  - [Conditionals in Solidity](#conditionals-in-solidity)
- [**3. Your First Contract**](#3-your-first-contract) (4 videos)
  - [Set the initial variables](#set-the-initial-variables)
  - [Add your modifiers](#add-your-modifiers)
  - [Finalize the functions](#finalize-the-functions)
  - [Test your contract](#test-your-contract)
- [**4. Solidity Considerations**](#4-solidity-considerations) (2 videos)
  - [Review the style guide](#review-the-style-guide)
  - [Documentation](#documentation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue learning Solidity](#continue-learning-solidity)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain: Learning Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/blockchain-learning-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/blockchain-learning-solidity?u=76281980&t=0)** - [Manny] [Blockchain](../../Skills/Data%20Science/Blockchain.md) has become a buzzword over the past few years. In this course, we're going to cover [Solidity](../../Skills/Data%20Science/Solidity.md), the programming language used with [Ethereum](../../Skills/Data%20Science/Ethereum.md), a blockchain platform for programmers. Learning Solidity can be daunting at first, so I'll make sure to simplify its syntax as much as possible so you can get the most out of it while learning to use it. We'll first go through some of the basics of blockchain and [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md). Then we'll go through Solidity's foundations and basic syntax to give you solid footing. Finally, we'll go deeper into advanced objects such as source mappings and more. Hi, I'm Manny Henri, and it'll be my pleasure to bring you on this blockchain journey with the programming language Solidity. So if you're ready to explore Solidity, open up your browser and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (5), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (4), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [manny] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/course-prerequisites?u=76281980&t=0)** - Being an introduction to [Solidity](../../Skills/Data%20Science/Solidity.md), you don't need to have any prior experience with the language. However, having some experience using [Blockchain](../../Skills/Data%20Science/Blockchain.md) or at least understanding the basics of what blockchain is and how it works will help you. Also, some experience with [Ethereum](../../Skills/Data%20Science/Ethereum.md) may help, but if not, no problem. Think of this course as the basis of the language to be able to program decentralized apps later. You can develop with Solidity on Mac, [Windows](../../Glossary/Service/Windows.md), or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), so the environment you use won't have any impact on learning the language, and in most cases, you can use the web-based [Remix](../../Glossary/Framework/Remix.md) environment, which we'll explore later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (2), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (2), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Speakers:** - being (1)


### 1. Introduction and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/introduction-to-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/introduction-to-solidity?u=76281980&t=0)** - [Instructor] [Solidity](../../Skills/Data%20Science/Solidity.md) is a high-level language inspired by [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), C++, and [JavaScript](../../Skills/Software%20Development/JavaScript.md). So if you've had some experience with any of these languages, you'll have a head start and feel right at home with Solidity. It is a language aimed at building [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) of any kind. As we go through the syntax, you'll have several examples of what we can build with Solidity. If you want some examples, do a quick search on [Google](../../Glossary/Service/Google.md) for dApp like so. So you go on Google. You can do either Solidity apps or D-A-P-P for dApp (keyboard clicking) with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) example. And you can go and find a few examples. I know there's a lot on [GitHub](../../Skills/Software%20Development/GitHub.md). Take a look at these examples. If you ever wonder what dApp stands for, it is decentralized application, a dApp. So in other words, [Ethereum](../../Skills/Data%20Science/Ethereum.md) is the platform to build dApp, and Solidity is the language, like we're seeing here. Solidity supports types, inheritance, and libraries and aimed at the Ethereum Virtual Machine, or EVM, as many call it. You can install a compiler for Mac, [Windows](../../Glossary/Service/Windows.md), or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or even try it on the web with [Remix](../../Glossary/Framework/Remix.md). So for example, if you want to see what are the compilers, you can go to Install and follow the instructions here. So either you install the compiler on your operating system, or you can use Remix here. Solidity also has many plugins and extensions
>
> **[1:33](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/introduction-to-solidity?u=76281980&t=93)** for many of the most popular IDEs and editors such as Intelligent ID, Visual Studio, and its sibling VS Code, which is what we're going to use, Atom, and many more. Once you're ready to build your own dApp, you can install any of these plugins. So for example, for us, we're going to use Visual Studio Code. Go into the extensions if you're using the same. Search for Solidity, and install this one here. You're going to have syntax highlighting and a whole bunch of things that comes with the support. So take some time to install whatever extensions you're going to be using to code your own Solidity or your own dApp, and also take some time to search on Google some dApp examples that people have built.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (9), [Google](../../Glossary/Service/Google.md) (3), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (2), [Remix](../../Glossary/Framework/Remix.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Code Identifiers:** dapp (8)
> **Prerequisites:** install (6)
> **Tools:** visual studio (2), github (1), vs code (1), atom (1)
> **Definitions:** is a  (2), stands for (1), in other words (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** python (1), find (1)
> **Env Vars:** evm (1)

#### [Introduction to smart contracts](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/introduction-to-smart-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/introduction-to-smart-contracts?u=76281980&t=0)** - [Instructor] A smart contract is basically code or an automated process that handles a transaction in between two parties without a middleman. Now, that may sound like a mouthful for some of you. So let me show you a simple example so it makes a bit more sense. Let's say, for example, you'd like to have your will handled by a smart contract. You could define the specific conditions of this contract through code, and upon your death, this program, and not a third party, would handle your will. For example, you could write out a condition that your grandson receives 10% of your heritage but only if he is enrolled into university and is 21 years of age or older. And add as many rules in the smart contract as you wish. The smart contract or the code would handle your affairs without the need of a middleman. So you deposit your inheritance into the smart contract, most likely into a [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md), and until your condition of death and any other conditions are met, will the contract execute. This, in its simplest form, constitutes a smart contract, and anywhere a transaction needs to happen in between two parties, you could use a smart contract, putting you in full control of these transactions and automating it. Use in examples of [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) are growing rapidly daily, and all you need to do to see the examples, go back to the list of dApps I showed you earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) (1), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (1)
> **Analogies:** for example (2)
> **Code Identifiers:** dapps (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [The Ethereum virtual machine](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/the-ethereum-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/the-ethereum-virtual-machine?u=76281980&t=0)** - [Instructor] [Ethereum](../../Skills/Data%20Science/Ethereum.md) itself is a programmable [Blockchain](../../Skills/Data%20Science/Blockchain.md), versus having a specific use, like Bitcoin, therefore, provides a powerful environment for any programmers to build really cool stuff with the smart contract paradigm we explained earlier. Like any blockchain environment, Ethereum offers a peer-to-peer network, so transactions are safe and proven across the network. At the heart of this system is the EVM, or the Ethereum virtual Machine. This is where all your [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) are executed. It is completely isolated and has no access to file systems or processes. So each node in the system runs the EVM so it can maintain consensus across the network. And as per Ethereum's documentation, Ethereum is best suited for applications that automate direct interaction between peers or facilitate coordinated group action across the network. So if we recap how all these pieces fit together, Ethereum is the environment. The EVM executes the transactions. [Solidity](../../Skills/Data%20Science/Solidity.md) is the language to program smart contracts, commonly called dApp. And finally, there is you, the programmer, who can use all these pieces to create your own application, leveraging this peer-to-peer network and programming language. So in a sense, in this course, we'll explore the syntax of the Solidity language. So when you review all this information,
>
> **[1:33](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/the-ethereum-virtual-machine?u=76281980&t=93)** think about how you would use these technologies to create your own contracts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethereum](../../Skills/Data%20Science/Ethereum.md) (6), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (2), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (2), [Solidity](../../Skills/Data%20Science/Solidity.md) (2)
> **Env Vars:** evm (3)
> **CLI Commands:** node (1)
> **Code Identifiers:** dapp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Installing the Solidity compiler](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/installing-the-solidity-compiler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/installing-the-solidity-compiler?u=76281980&t=0)** - [Instructor] Although we won't use the compiler in this course, as we'll focus on the code examples with VS Code, you can either use [Remix](../../Glossary/Framework/Remix.md), which is an online environment, or still use the compiler. In any case, go to install. And as we explored a little bit earlier, and I want to explore a little bit more further on this video, these are the options for you. The first one is Remix. This is the online environment and you can click here to access it. So this is a full online environment as if you had the compiler installed for you. And basically you can start writing contracts directly here and test the code that we're going to go through in this course, with the compiler doing all its work for you. That's one option. What it would do if you're considering other options and you're just getting started, I would scroll down to the Docker area. Docker, in my opinion, if you're familiar with it, is the simplest way to install and get started with a local environment. Also, I would avoid the node [npm](../../Skills/Web%20Development/npm.md) install, 'cause at this point it doesn't include all of [Solidity](../../Skills/Data%20Science/Solidity.md)'s feature. Otherwise, if you'd like to control what you install and not quite familiar with Docker, make sure you visit the Prerequisites section in each of the operating system, for example, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), macOS, and go through all the instructions step-by-step. Or if you want to download binaries, you can do that too. And if you prefer taking baby steps,
>
> **[1:32](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/installing-the-solidity-compiler?u=76281980&t=92)** then again I would strongly advise to use Remix, the online environment where everything is done for you. So before moving on to the next video make sure to select your environment where you'll follow along with us as we give examples of the syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Remix](../../Glossary/Framework/Remix.md) (3), [npm](../../Skills/Web%20Development/npm.md) (1), [Solidity](../../Skills/Data%20Science/Solidity.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (3), make (2), node (1), npm (1)
> **Prerequisites:** install (4), getting started (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** macos (1)
> **Cross-References:** next video (1)
> **Tools:** vs code (1)


### 2. Solidity Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Solidity syntax basics](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=0)** - [Instructor] So let's get started with our first syntax in [Solidity](../../Skills/Data%20Science/Solidity.md) and show you the base layout and syntax of a file. So I'm back in VSCode, and again, if you don't have the extension, please make sure that you do install it so you can have syntax check and all these nice features that comes with this package here. So let's go and start our first file. So what I'm going to do first is create a folder inside of my desktop, and I'm going to call this DAPP, and then I'm going to drag and drop it inside of VSCode.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=43)** And then I have my folder open right here. So I'm going to create my first file, and this first file is going to be called sample, or we can call this first DAPP if you want,
>
> **[1:01](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=61)** or whatever it is that you want, and the extension for the file is dot SOL, like so. And you'll see this little icon if you're writing this right. So you always start your syntax with importing Solidity. So I'm just going to type a note here, import Solidity, and we're going to go ahead and import with pragma Solidity.
>
> **[1:35](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=95)** And then you need to write the version number. So for this one, what we're going to do is follow what they do in [Remix](../../Glossary/Framework/Remix.md) and import in between 8.2 or nine, like so.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=112)** So 0.90, like so, and then semicolon. So now that we have Solidity import, I'm going to show you how to import files from other programs or packages. So again, we're just going through the syntax. We're not going to create a full program, we're just going through the syntax. So this is the syntax to import from another file. So you can import a file name like so. It's very similar to importing in [JavaScript](../../Skills/Software%20Development/JavaScript.md) or any of the C-based language. You can import this way, too, by doing import as symbol name from file name.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=166)** So you can import as the symbol from symbol name a package that's inside file name. That's another way of doing it. And FIY, if you're seeing errors, it's because we're already have imported file name here. And another way of importing could be symbol one, so basically importing multiple classes from a specific package. So let's say we're importing from file name again, and inside of file name, there are multiple classes that you can import. You could just import these classes from this specific package here. So symbol one could be one of the classes that you're importing and you can import it as alias. So you can use this class as alias later on inside of your contract, or you can just import a specific symbol class that you will use later on. So you could use it symbol down here like so.
>
> **[3:54](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=234)** Okay. So far, so good. Now, the first thing that we're going to do now is, what is the syntax of a contract? It's very, very simple. So let's just write a note, your first contract, and this is how the syntax of a contract starts. Contract, and you would call it whatever you want. In this case, I'm going to call it simple contract. Then we open curly braces, and this is where your contract code would go, and we're going to add some contract code in the following videos, but this is basically the syntax, and I'm going to check what's happening here. It's just as expected. Oh, I didn't have my semicolon here, that's why there's a problem here. Okay. And this is a reserved [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), so I'm going to call it alies.
>
> **[4:58](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/solidity-syntax-basics?u=76281980&t=298)** And it gives me... Yeah, file name is imported multiple times. That I was expecting. Okay, so we can do file name two here, file name three here, just to make sure we don't get little errors like this. So this is basically how it would work. You import first Solidity, then you can import a couple of files here as needed, and then you can start your first contract here. So this is how the syntax starts. Play with the syntax, have fun with it, and then move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (6), [Remix](../../Glossary/Framework/Remix.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** dapp (2), sol (1), fiy (1)
> **CLI Commands:** make (2)
> **Versions:** 8.2 (1), 0.90 (1)
> **Cross-References:** next video (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Basic syntax of a contract](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980&t=0)** - [Instructor] Contracts in [Solidity](../../Skills/Data%20Science/Solidity.md) are very similar to classes in object-oriented languages. They can contain state variables, functions, events, struct types, and enum types. And as we go through the syntax, we'll explore each one. So let's explore our example that we got started previously and expand on it. So just as a FYI, if you wonder why we're still having an error here, it's because it can't find the file name. We don't have any file name here. So two things you could do. Either you leave as is and you're okay with the error or you can just comment the whole thing and keep the code as an example. At least the file doesn't have that error here. All right, so once we have that, let's go ahead and start building our contract. So what we're going to do in this simple contract first, we're going to state a variable. So let me show you how to do this. And again, I'm going to write a note for all of these so you can have references if you ever go back to this code. So to state a variable, first, you have to declare what it is. So in this case, we're going to state a variable integer. So in this case, I would do uint as my integer and then declare what is the name of that variable. So storeData. So now that we have a variable, we can start working with this variable. One other thing that we could use is a modifier. So a modifier is a conditional,
>
> **[1:33](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980&t=93)** so check if something or a variable has a particular number. So let's go ahead and do modifier is a conditional, first, just for your notes. And then let's go ahead and do it. So modifier, this is the syntax and we're going to call this one onlyData, which looks like a function, open curly braces. And then inside of it, we require some data that we need to check. And this data that we check is storeData and not storeDate. So let me check and change this to storeData. And I am checking that storeData is either equal or higher than zero.
>
> **[2:26](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980&t=146)** And then we need to do this quick syntax here. And you want to make sure that this is within this one here. And then we can close this. There you go. So basically, this modifier will check that our value that we store in data is equal or higher than zero. So this is a conditional. So now that we have a conditional to check, we can write a function and this is what we're going to do next. And functions in Solidity looks very, very similar to [JavaScript](../../Skills/Software%20Development/JavaScript.md). So you'll recognize a lot of the things from JavaScript here. So function and then we set what are the variables that we're going to use inside of our function. In this case, we're going to need to use an integer, x. So we're going to pass an integer x. And your function can be public or private, which means that if it's private, it won't be accessible outside of that class. And then we can pass the integer that we pass here to storeData in this function. So let's say we passed an integer of minus two inside of that function, when the conditional checks for that particular storeData, it's going to return a false
>
> **[4:01](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980&t=241)** because it's not equal or higher than zero. And then what we could do is have an event that will take all this and create an event where we have a notification or something that tells us that we have storeData above or equal to zero. So in this case, this is an event and we have an event sent.
>
> **[4:32](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/basic-syntax-of-a-contract?u=76281980&t=272)** And an event takes an address from. So again, we're transacting in between people. So there's an event that is sent from somebody and this is what we have here, an address from, an address to, so somebody else with an integer that has storeData. So we can have an event with the information that is above zero 'cause it has to be above zero to be able to have this event to occur. And there's an address from and address to. So basically, that event would need those parameters in order to be executed. So there you have it, you have more stuff inside of a contract and you created a foundation of a contract. So play around with this. I would suggest that from time to time, you pause the video in this course and you go into the documentation and you explore further some of these things that I'm exploring 'cause I'm doing an introduction to Solidity. If you want to get a little bit more experience for these things, explore the documentation further on the elements that I'm exploring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Code Identifiers:** storedata (8), onlydata (1), storedate (1)
> **Definitions:** is a  (4), means that (1), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Documentation:** the documentation (2)
> **Env Vars:** fyi (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### [Types in Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=0)** - [Instructor] [Solidity](../../Skills/Data%20Science/Solidity.md) is a statically typed language. In other words, each variable types must be specified. So let's take a look at the major types. So what I'm going to do in VS Code, I'm going to remove all the code in the contract and I'm going to replace it with the types. If you want to keep this, you can comment the code or create a brand new file. So the first type that I want to add is a string. And this one, you need to declare the type first, in this case string. Then, what is the name of the variable? In this case its "name", And then declare whatever is the value that goes into the variable, in this case I'm going to put my name. Another type is the integer. We've explored this one a little bit in the previous videos. So I'm going to type a note, integer or integers. And again, you declare it like we've done before, uint, like so, and then you name it, so for example, storedata, and then you declare what that number is. In this case, we're going to put 34. There's another type that is called Boolean. And you're probably starting to see some similarities with every other languages here. So Boolean, you declare it by saying bool,
>
> **[1:35](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=95)** and then atrueorfalse value, (keyboard keys clicking)
>
> **[1:44](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=104)** and I'm just going to put aTrueOrFalseValue. So that's the name of my Boolean. And then I would assign it a value. In this case, I would say, false. So if you're very familiar with [JavaScript](../../Skills/Software%20Development/JavaScript.md), with C, C++, any of these languages, [Java](../../Skills/Software%20Development/Java.md), when you're going to look at this, it's going to be very, very similar, and you're going to be quick to assimilate all the syntax from Solidity. Now this is something that is particular for Solidity, an address. So an address, you declare it first, walletAddress,
>
> **[2:33](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=153)** and then you assign in a value. So usually the wallet addresses are x-codes such as this, and it has a whole bunch of numbers and characters and it looks similar to this. So if you have an error like this, it's basically how I'm starting it. So you can change the code and take a look at the documentation to write the exact code, I'm just giving you an example. Usually the address is procured by [Ethereum](../../Skills/Data%20Science/Ethereum.md). So, you will see what is the actual value. Now the next one that we have, and again this is familiar to all the other languages, are arrays. So arrays, you declare what is the type of array. So in this case, if I have an array of strings, you would declare string this way and then add the characters here to make it an array, and then an array of names, and so on and so forth, and then you could declare value if you want, put the values in. Or just declare your array and then add the named afterwards or add the values afterwards. Now we have also a type of struct which is what it's called. And a struct is like an object in JavaScript, for example. So for example, we declare our struct, and this struct is a struct of User, and then we open the curly braces and then we can add values inside of it.
>
> **[4:08](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=248)** So for example, we would declare, okay, so this user has a name which is a string. So we would say first name for example, and then we would declare last name, which is also a string, and then you could declare, okay, so we're going to have an age, so it's an integer, and so on so forth. So this is like an object in JavaScript. So basically you're declaring a bunch of values that are part of a struct, which is a struct of User. And then we have enums. So enums is very similar to a struct but the major difference here is that you're not declaring ahead of time what is going to be the values for this one. So you could do enum userType and then have a buyer and then a seller, and these could be actual objects too. So these could also be structs that you're putting inside of your enum here. So buyer, seller could be the users. And then the final one that I want to explore with you is mappings. So mappings are basically a function that maps multiple things, pretty much like a map function in JavaScript. So, if I do, for example, the code,
>
> **[5:42](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=342)** it'll make sense to you. So mapping, let's say I have address, and it's a function that uses an integer
>
> **[5:57](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/types-in-solidity?u=76281980&t=357)** which is public, and then balances. So basically it would map all the addresses with a number to the balances. Let's say we pass a string of addresses inside of the mappings, it would map it out inside of that function. So I'm going to save this. So, there are a few other types with Solidity, some of which aren't fully supported yet. But for more information, go back to the documentation, and explore further the types before moving on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Java](../../Skills/Software%20Development/Java.md) (1), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1)
> **Analogies:** for example (6), similar to (2), such as (1)
> **Definitions:** is a  (5), in other words (1), is called (1)
> **Code Identifiers:** atrueorfalsevalue (1), walletaddress (1), usertype (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (2)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)

#### [Units and global variables](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980&t=0)** - [Instructor] There are a few globally available variables and units in [Solidity](../../Skills/Data%20Science/Solidity.md). So let's explore a few of them. So what I'm going to do, again, I'm going to erase some of the code here. If you want to keep it, you can comment the code or you can create a brand new file. So I'm just going to delete these functions right here like so. And what I'm going to do is start putting the values that are reserved. So the first one, which is the most, well, the first few ones, which are the most important ones are the ether, the gwei and the wei. So these are the currencies, hold on, let me just make sure, ether. Gwei and wei. So these are the currencies of the system. So basically, for example, if you want to set a Boolean, so let's just for the sake of an example isEqual. So let's set a Boolean if one ether,
>
> **[1:15](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980&t=75)** and it's not if, it's this is a true fact, FYI. An ether is equal to one to the 18th wei.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980&t=89)** So if you don't know what that is here in math, that means that there's 18 zeros after the one. So you often see this in on calculators when the numbers reach outside of the screen. So one ether is equal to one to the 18th. So basically 18, zeros after one like so. So these are the currencies of the ether. The gwei is half of that value. So it's about nine here as opposed to 18. But you would have to write gwei here. So these are the currencies that you have to use when there's transactions inside of the [Ethereum](../../Skills/Data%20Science/Ethereum.md). But these are reserve variables. So if you use these variables, ether, gwei or wei, you're going to have errors and your contract is not going to work. There's also time units that are reserves and let's go ahead and put those. The time units are, and let me just put another comment on top, seconds, minutes, hours, days and weeks. We used to have years, but the problem with years is years can change every time we have an extra day on February. So this value is not predictable. So it could change and be variable over the years. So they decided to remove that one.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980&t=182)** So these are the time units that you cannot use as a variable. So if you put or declare a variable called minutes, it's going to throw you an error. So let's say, for example, we go ahead and do something like the same example as above, isTime. So I can't, we could do something like this and I'm writing these to give you a little bit more syntax, and I forgot my semicolon here. So one hours would equal to 60 minutes and FYI, these variables are always plural, even when you just put one. And that would be this particular Boolean. So if you go, and again, you do any comparison and as you should probably know, one hour is equals 60 minutes, one second is equal to one second. So if you just put one like this, this is one second. One minute equals to 60 seconds, one hour or hours equals to 60 minutes. One day, the days variable equals to 24 hours and one week equals to seven days. So as you know, the time in reality is the same for the variables here. So whenever you use these, those are specified in the system.
>
> **[4:37](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/units-and-global-variables?u=76281980&t=277)** You can't use them for a variable inside of your application. So you want to be sure that if you want to create a variable that contains minutes, you have to rename it to something else. So for example, you could declare an integer that is called minutee or something like that and then pass a variable of 60 inside of that. And that would be your variable that you declare for a minute, a variable that you need in your application but you can't use these because they're reserved. Okay? So if you want, as an exercise, I would go ahead and practice a little bit more of that syntax here. So you could do one day equals to 24 hours and so on, so forth. And practice the syntax of a Boolean or practice the syntax of anything that we've done so far. So practice the syntax of everything that we worked on so far before you move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (1), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1)
> **Analogies:** for example (3)
> **Code Identifiers:** isequal (1), istime (1)
> **Env Vars:** fyi (2)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Other special variables](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/other-special-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/other-special-variables?u=76281980&t=0)** - [Instructor] In [Solidity](../../Skills/Data%20Science/Solidity.md), there are a few special functions and variables you can use, such as messages, block, and transaction. In this case, these are variables but we'll focus on the functions on the next video. So, the first thing I'm going to do is erase what I have in here inside of my file. Feel free to keep it, it's up to you. And then what I'm going to do is work from the contract here. So, the first thing I want to do is the variable block, or basically the class block which takes variables. Let's go ahead. So, the first thing is block and this is part of the [Blockchain](../../Skills/Data%20Science/Blockchain.md), FYI. These are variables that are part of the blockchain. So, it starts like this, "block." and then you see what's available in this particular class. So, for example, we could use an add a number variable, or for example, what we could do is add a difficulty to our block or we could use coinbase, which is basically a function within this particular class here. But in most cases, these are actual variables. Another thing that I want to teach you here is about comments. We've been doing comments this way so far and there's another way to do comments in Solidity and this is going to look familiar for the experienced programmers. You do "/* your comment here". So, you can do multiple lines with this way and then do "*/" like this. The next one is message.
>
> **[1:35](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/other-special-variables?u=76281980&t=95)** So, the message class, which you can write this way, "msg.", has multiple elements, so you can add a sender as a variable, you can add data or value, and you can add all of these things here. So, for example, value as a variable. Now the last one that I want to talk about is transaction. So, transaction is basically the transaction itself. So, it has a class and you can add an origin to it. And if you want to explore the other thing, there's also gas, the gas price. So, these are the variables that you can add with these specific ones. So, Solidity is a constantly evolving language so always go back to the documentation to see the latest updates to the variables available in the language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (3), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (2)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** next video (1), go back to (1)
> **Env Vars:** fyi (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Functions overview](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/functions-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/functions-overview?u=76281980&t=0)** - [Instructor] Let's take a look at the basic syntax of a function in [Solidity](../../Skills/Data%20Science/Solidity.md). In Solidity, your functions can take input as parameters like most programming languages, but where it differs from most is you can have functions return multiple outputs. Let me demonstrate. So what I'm going to do here is, again, erase all this. You can keep it or take a look at the exercise files. So I'm going to start by doing the keyword function, like so, and this is very familiar to experienced developers. This is the way it was in [JavaScript](../../Skills/Software%20Development/JavaScript.md). So let's say you want to call this function calcs. Then what you could do is pass parameters. So in this case, we need to declare two parameters. One is going to be, well, actually both of them are going to be integers, but I want to have an integer, _a, as a parameter. I want to have a unit, that's going to be _b. And these are both integers. I want this function to be public, I want it to be pure. And then the way it works is basically as follows. So usually what you would do is open up curly braces to do a function in other languages, but this is not how it works in Solidity. So the way it works is that you do your return, or returns, right here.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/functions-overview?u=76281980&t=94)** What are you going to return? So what do you expect as a return? You declare your values and your parameters. So in this case, I am declaring that I want an integer which I would call o_sum. And then another integer that I would call o_product. If you're familiar with math you know where I'm going with this. And this is where you would open up your curly braces, like so. So here what you would do is what you want to return is the o_sum, so let's go and do the o_sum equals _a plus _b.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/functions-overview?u=76281980&t=143)** And this is the first for the sum of those two numbers. So if you pass numbers here, you're going to have a sum. You want to have a product as well, right? So the product is _a multiply by _b.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/functions-overview?u=76281980&t=160)** And you have your product. And I see a little mistake here. This is you u integer, that I'm trying to declare, and not unit, a little typo here. So this is how you would do a function. So you pass your parameters, you declare what you're expecting to be passed inside of your parameters and then you could return more than one element. So you declare what you return, or returns, with what you expect as the return value, so an integer sum and an integer product. And then you execute your transactions or your expressions inside of the curly braces, like so. So feel free to play with the functions, change the function to declare more than two, or change the parameters of your function or the integer that you're passing through, or even test the function and move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** o_sum (3), o_product (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Operators in Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980&t=0)** - [Instructor] Now let's take a look at the operators available with examples. So I'm going to delete the functions here and start with my first operator. So the arrhythmic operators are basically the same as any other programming languages and we use two of them in the previous video. So there's the plus, the minus, the multiply, divide. This is the modulus. You have the plus plus which basically is an increment or a decrement. So let me give you an example like we've done in a previous video. You declare an integer A equals two and then again an integer B equals three
>
> **[1:01](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980&t=61)** and then an integer C, which is A
>
> **[1:13](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980&t=73)** plus B. You can do A divided by B. You can do all of these operators, modulus and so on so forth. There are also the logical operators, and again this is very similar to a lot of languages. There's the exclamation point, which means not equal. There's the and which means basically this one and this one. So for example if we're doing a conditional an IF statement which we'll do very soon, and in this conditional statement you're doing this value and this value must be present in order for this statement to be true, then you can use this. Then you have this one, which basically mean OR, this one means equal and this one means not equal. So for example, we could set a Boolean, hasMoney equals not false. Let me just make my semicolon here. And finally, you have the Bitwise operator or operators in plural.
>
> **[2:49](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980&t=169)** So you have these here but you have the and which mean Bitwise and, you have this one which means Bitwise or, you have this one which means Bitwise X and or, you have this one which means Bitwise, not, finally you have these two, and these two means a left shift. And let me just make sure this is a left shift and this is a right shift. So I should have done the opposite just to make it clear for you guys. So this is a left shift and this is a right shift. So let me give you an example. So let's say I create a byte one as a value which is the contract value. Again, these are Bitwise. If you're not familiar with Bitwise, research it on the web. And Bitwise would be 0x02 or Bitwise 0x.
>
> **[3:56](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/operators-in-solidity?u=76281980&t=236)** And I did O and not a zero, x zero one. So just as a note for those that are really curious about Bitwise, they've never heard of it. And this is the first time. This basically Bitwise means that you are working at a level that involves individual bits which are the smallest units of data in a computing system. So you have to do this when you do contracts and work with [Solidity](../../Skills/Data%20Science/Solidity.md) and Coinbase and things like that. So be familiar with the Bitwise operator if you plan on doing work with Bitwise solidity and DAPs and so on and so forth. So to see all the possible operators for each type find the type you're using in the documentation and see the operators available and explore a bit further. So I would recommend that you do that now before we move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (2)
> **Definitions:** is a  (4), is an  (1), means that (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (2), similar to (1)
> **Cross-References:** previous video (2)
> **Code Identifiers:** hasmoney (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Conditionals in Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=0)** - [Instructor] If you have experience in other languages this will be the easiest part to learn, as [Solidity](../../Skills/Data%20Science/Solidity.md) has your typical conditionals: if, for loop, et cetera. The only conditional not available that you may have seen in other languages are switch statements and go to. So let's explore a few. Again, I'm going to clean my screen right here and then I will start with an if statement. (keyboard clicks) And it's very familiar to [JavaScript](../../Skills/Software%20Development/JavaScript.md) people or any other programming language, it's very, very familiar. So let's say if a equals 2, execute the statement,
>
> **[0:49](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=49)** "execute this code," else, then "execute this code." So if this is true, so if a equals 2, then it will execute this code here. Otherwise execute this code, as simple as this. The next one is for checking the condition first. (keyboard clicks) So basically while, so if you're familiar with while, same thing. If a is larger or equal to zero, then, "execute this code."
>
> **[1:42](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=102)** The next one, and again, this is very familiar to most of you guys, "do run this code "until the condition is false." For example, do, "execute this code,"
>
> **[2:08](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=128)** while a is larger or equal to zero.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=138)** So basically this code will run, at the very least once, before it checks the condition. So it's going to run once, checks the condition, if it's still true, it's going to run again. And then if this condition is false it's going to exit out of the conditional. The next one is a for loop. So for, as long as i, so basically a for loop is going to run the number of times that the condition in the parameters are set. So for example, we start at zero for i, then i needs to be larger or equal to 50, and then run i++. So in other words, what's going to happen is this particular code that we're going to put here is going to execute around 51 times. So it's going to run the first time and then every single time it runs it's going to add plus one to the i. So i is going to be 1, 2, 3, 4, 5 until 50. So it's going to run 50 times plus the zero, so 51 times. So this is actually the code that's going to run for the for loop. So if you want to have a very specific number of times that your code runs, or you want to have very specific parameters here that you want your for loop conditional to run, this is how you would do it. So what I would do is now play with this code here. So put specific code inside
>
> **[3:51](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/conditionals-in-solidity?u=76281980&t=231)** and test your loops and move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (2)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Your First Contract

[↑ Back to Table of Contents](#table-of-contents)

#### [Set the initial variables](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/set-the-initial-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/set-the-initial-variables?u=76281980&t=0)** - [Instructor] Okay, so now that we've got a good overview of the [Solidity](../../Skills/Data%20Science/Solidity.md) syntax, let's create a simple contract to put the syntax to work. We'll do this over the remaining of this chapter and what we're going to do, you have two choices right now. If you set up the compiler inside of your computer and you're working off VS Code, feel free to continue in VS Code. I'm going to go over to [Remix](../../Glossary/Framework/Remix.md) where I can actually test the code when I'm done. So let's go ahead and just close VS Code. And now I'm going to go to Remix. If you don't know how to go to Remix, you actually go to Solidity and you can search directly in [Google](../../Glossary/Service/Google.md) for Solidity Remix and then click on Remix [Ethereum](../../Skills/Data%20Science/Ethereum.md) IDE. And once you're here, you have two choices. You can either create a new workspace or use the one that we have here with all the examples here. I tend to create a brand new workspace or I create a brand new file. So I'm going to create a brand new workspace and I'm going to call Basic, Basic - 1. Just leave it as is, perfect. And now what I'm going to do in this workspace, I'm just going to close all these things here, and literally create a new file right here. And I'm going to call this SimpleContract.sol
>
> **[1:32](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/set-the-initial-variables?u=76281980&t=92)** And this is where we're going to write our code. So first of all we're going to write some very specific code here to make sure we don't get any errors when we run our test. And it goes like this because we don't have a license. So what I'm going to do is just simply write that note here so we can test later on. And if you do have a license, if you want to get a license to actually use contracts, go to Solidity and look at the documentation. And I'll go UNLICENSED, like so. Okay, now, the very first thing, you need to make sure that you have a version of Solidity running. And what I'm going to do is run this version for the sake of the example and then I'm going to create my first contract which is the class. And I'm going to call it InheritanceContract which is basically what we discussed in our example. A contract that will allow us to give money to somebody that inherit our money once we actually die. So the variables that we need to declare are first an address which will be payable and will be public as the recipient, right? The recipient of the inheritance.
>
> **[3:06](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/set-the-initial-variables?u=76281980&t=186)** We also need to declare another variable which is going to be the owner of the contract. And then a variable which is public, is the owner deceased? So this is a little bit morbid but this is going with the example that I showed earlier. Now we're going to need to create a constructor to have all these things properly set inside of our class. So if you're familiar with constructors they're very similar to the ones in a class in [JavaScript](../../Skills/Software%20Development/JavaScript.md) or any other languages for that matter. And _recipient. (keyboard clicks) And here we have the owner where we declare a message to the sender as part of what we have. We have the recipient, _recipient, oh, little mistake here. (keyboard clicks) isOwnerDeceased equals, declare value, false. So basically what we've done here, we've declared our value and then we've assigned a value to the constructor. So the owner is basically the msg.sender, so basically the person that's sending the message.
>
> **[4:40](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/set-the-initial-variables?u=76281980&t=280)** The recipient is the _recipient and is owner dead is set as false. So we're not dead yet. (chuckles) So what we're going to do is leave it at that for this video and we'll keep working on it on the next one where we'll actually set our conditionals. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (5), [Remix](../../Glossary/Framework/Remix.md) (5), [Google](../../Glossary/Service/Google.md) (1), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** go to (4), click on (1)
> **Tools:** vs code (3)
> **CLI Commands:** make (2)
> **Env Vars:** ide (1), unlicensed (1)
> **Code Identifiers:** isownerdeceased (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)

#### [Add your modifiers](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/add-your-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/add-your-modifiers?u=76281980&t=0)** - [Instructor] All right, so now we need to set our conditions of the contract with the modifiers. Let's get to it. So if you remember, when we explore the modifiers, the way to declare a modifier is simply by writing modifier, and then you name what is the name of your modifier. Yeah, let's type it properly, owner, onlyOwner. So this modifier or this conditional require a condition, and the condition is that the message that sender as an owner. So we absolutely need to have an owner. And in this case, let's go ahead and write the message. I'm just going to close it here. "Only contract owner can access this function."
>
> **[1:06](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/add-your-modifiers?u=76281980&t=66)** So this is going to be the message that will be thrown at the person if there's no owner, period. And then on the underscore. Now the next conditional, and FYI, if we have errors here, wait a bit because sometimes it takes a while to compile and check the code. So if you see an error here and then you move on the error should disappear. Also, another source of an error could be that you're not finished with the code. So up until we finish the code, if there's no red lines here, we should be fine. If there are any red lines, check the message just to validate that there's no typos or something you forgot and go over the code. Alright, so the next one, onlyRecipient. So that's the other conditional, which means that if we don't match any of these conditionals, the functions or the features of this specific contract are not going to be executed. So let's go add and create the second one. So we require, again, message.sender. So we're basically inserting a message or sending a message if we don't have an owner. So here, and I need to do double equals here. Little typo on my part. Need to have a recipient, right?
>
> **[2:40](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/add-your-modifiers?u=76281980&t=160)** So we declare the recipient up here, and if we don't have a recipient, then this message will display. So, "Only designated recipient can access this function."
>
> **[3:01](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/add-your-modifiers?u=76281980&t=181)** Like so, whoop! It's an underscore, not a plus. There you go. And these are the conditionals. Like I explained, we need to have these two conditions met in order to execute the features that we're going to code in the next video. So explore a little bit of that code, if you don't understand some of these parts, go back to the documentation and then move along to the next video where we finish her code.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1), go back to (1), next video (1)
> **Code Identifiers:** onlyowner (1), onlyrecipient (1)
> **Env Vars:** fyi (1)
> **Documentation:** the documentation (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Finalize the functions](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=0)** - [Instructor] So let's finalize our functions of our contract. So below the modifier and the conditionals we're going to start by writing our first function. And again, you declare function by saying function. And what we're going to do is write the first function, declareDeceased, I know it's morbid as an example but this is going with the example that we've set earlier in our little examples in the first few videos. external onlyOwner. So basically, right now, we're declaring that the person is deceased, therefore the person can actually receive the amount that was set in the contract and therefore execute the contract. So we require, first of all, that isOwnerDeceased,
>
> **[0:57](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=57)** and it's conditional, so "Owner has not been declared deceased."
>
> **[1:10](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=70)** So basically it checks first that the owner is deceased. So if it's not, it's going to throw that message. That's the first thing. It also require, as part of the condition, an address,
>
> **[1:28](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=88)** this with a balance. So we need a balance. So if there's zero in the amount, well, it's not going to pass. So we need a balance of at least above zero. And if not, "No funds "available for withdrawal." So it's going to check on these two conditions, and if they're met, the recipient will be transferred a value. So what is the balance that we have, like so.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=143)** And let's make sure that we've put an address here and we close it out here. Let me explain this code here. (keyboard clicks) So basically this is the function that's called declareDeceased, and it's going to run. And when it runs it will check on two things. Is the owner of the contract deceased? If not, it's going to spit out that message here. Then it's going to require an address with a balance. So basically it's going to check if the owner of the contract has a balance of above zero, so basically the operator here. If not, then no funds are available for withdrawal. And then if these conditions are met, then the recipient, the person that receives the amount from the contract, will get the money transferred to his balance, or from the balance too. And then in the same contract we'll have a fallback. Do a fallback function to receive payment, (keyboard clicks) receive, external payable.
>
> **[3:45](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/finalize-the-functions?u=76281980&t=225)** So basically this fallback is if there's no recipients, if this person is deceased, we have a fallback. And if there's no recipient to receive the money then this is where the fallback would execute. And this is pretty much our function here. So if you take a look at it and you don't see any red lines, or if you see a red line actually, check what is the message and rewrite your code or take a look at the exercise files to make sure that your code is written exactly like us. And once you've checked these things and everything is good and dandy, let's move on to the next video where we actually test our contract in [Remix](../../Glossary/Framework/Remix.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Remix](../../Glossary/Framework/Remix.md) (1)
> **Code Identifiers:** declaredeceased (2), onlyowner (1), isownerdeceased (1)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Test your contract](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/test-your-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/test-your-contract?u=76281980&t=0)** - [Instructor] So, now we can test our contract. So, if you don't have any errors in your code here, no red lines, you can move on to test the contract. I already did that offline but I'm going to show you what I did. So, what you do is click on this tab here, the Compilation tab. So, what you can do is compile the contract. If there's no errors, if you don't get any messages, you can go ahead and run the script here. One of the messages that I had in the past is the license. I didn't have a license. You need to create a account, blah, blah, blah. But I didn't have that. So, for most of you, that's not going to be the case either. And this is why I added this little line of code here. It was giving me a message that I needed to add this line of code, I added it, and now it's working. So, what you can do after that is compile and run script. If you get a green check right here, you're all set to go. Now what you can do is go into the "Deploy & run transactions", which is where the fun begins and where you can actually do some transactions with the contract you just created. So, what you can do is set a value for your contract right here. So, let's say for example, I want to do $1,000, well not $1,000 but 1,000 Wei. So, again, we're talking about crypto, rephrase. So, again, we're talking about cryptocurrencies. You can change to any other ones, the Ether, Wei, and so on and so forth. So, 1,000 Ether is again worth a lot more than Wei and Gwei. And Finney, they're actually,
>
> **[1:35](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/test-your-contract?u=76281980&t=95)** I think Finney is on its way out because I've looked at the documentation and they don't recommend to use it. So, I stopped using it altogether. So, you set the value, you select your contract, so in this case it is the "InheritanceContract", which is the name of our contract right here. You could choose whatever else you have if you have more contracts. So, if we were to go into here, change the workspace to default, and look at the contracts here, you would have the other contracts. These guys here. We haven't compiled them and this is why you don't see them in the testing area here. But if you had compiled and checked your code and it did everything we just did for "InheritanceContract", you would be able to use them here. So, let's go back to our workspace and let's go here, compile, make sure we have our file selected, compile, all good, and then go here. So, let's set our value back again, 1,000 Wei. You select your contract and then you deploy to the address recipient. So, remember you have to declare your recipient here. So, we're going to get a message like this if we don't have a recipient. So, you want to make sure you have a recipient. In this particular case, I do not have a recipient because I don't have somebody with an account like this that I can add in here.
>
> **[3:10](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/test-your-contract?u=76281980&t=190)** So, if I did, I would put it here and then I would deploy. And that's basically how it would work. I deploy to this address the amount that I set in here and therefore you're all good. And it would check, am I dead? Am I deceased? If that's the case, then it would go on to here. Do I have more Wei than zero in my account? If that's the case, then it would go ahead and execute the transaction. And that's pretty much how a contract works very quickly. There's more complex contracts that you can build. And there's like complete apps that you can build with [Solidity](../../Skills/Data%20Science/Solidity.md), but this is a quick example to show you from code to an actual contract that works how it works. So, keep playing with it, change the code, deploy again. And if you can find a recipient that you have this specific address to, even better. And go ahead and play and then move on to the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** make sure you have (1)


### 4. Solidity Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Review the style guide](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/review-the-style-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/review-the-style-guide?u=76281980&t=0)** - [Instructor] There are like, in any other languages, coding conventions for [Solidity](../../Skills/Data%20Science/Solidity.md), and let's briefly review the major ones. In general, you want to use four spaces, and spaces are preferred over indentations. Always surround top level blocks of code with two black lines. All your import statements should be done at the top of your file. Avoid extra white space in your expressions. So these are the general rules to follow, and in most cases, will resemble what you're used to if you've coded in other languages. And finally, to review more of these rules, you can always refer back to the documentation at this link. And once you get on this page, scroll down until you find the style guide and click on it, and go through the style guide right here, like so. And you're going to find all the information on the style guide and the conventions used in this programming language. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Documentation](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/documentation?u=76281980&t=0)** - [Instructor] [Solidity](../../Skills/Data%20Science/Solidity.md) is a language that constantly evolves. Therefore, I highly recommend to always come back to the documentation when working with this language. And I'd like to highlight a few areas. So the first area is Solidity in depth right here. So all the things that we've explored today, the Cheatsheet and all these elements, this is where you want to spend most of your time exploring further what we introduce to you in this course. For example, if you want to know more about Types, then explore this area here. The other area is the Security area, and you can find it after this section here. This is really worth exploring so you understand what are the best practices around security and apply them to your contracts. The other one that you want to spend a little bit of time is the Common Patterns, which is right here. So this is an area you should spend some time to understand what are the common patterns developers have tested and used in the industry. So you can scroll and find some common patterns in here. And, finally, explore the [Ethereum](../../Skills/Data%20Science/Ethereum.md) documentation. And, finally, explore the Ethereum docs so you can find them by doing Ethereum docs. And go here and go through the Ether, Intro to DAPPs and so on so forth.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/documentation?u=76281980&t=94)** And explore everything about Ethereum. If you want to develop with Solidity, with Ethereum and create your first apps, you need to be well versed in these things. So exploring some of the tutorials, the docs, Learn by Coding, you can explore that area as well, will help you immensely to become a better Solidity developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethereum](../../Skills/Data%20Science/Ethereum.md) (5), [Solidity](../../Skills/Data%20Science/Solidity.md) (4)
> **CLI Commands:** find (3)
> **Documentation:** the documentation (1), the docs (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue learning Solidity](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/continue-learning-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-learning-solidity-22873764/continue-learning-solidity?u=76281980&t=0)** - [Instructor] Thanks for joining me in this first step in learning [Solidity](../../Skills/Data%20Science/Solidity.md) and its syntax. You could continue exploring Solidity syntax by going through the language documentation and finding other areas to practice, such as common patterns and more. Also, you could go through any of our courses on the [Ethereum](../../Skills/Data%20Science/Ethereum.md) or [Blockchain](../../Skills/Data%20Science/Blockchain.md) development and create your own dapp. We have a few courses to help you with that in our library. And finally, if you got lost somewhere along the way in this course from your lack of blockchain knowledge or simply want a refresher on blockchain, visit any of our basic courses on the subject and then come back to this course later on. Thanks for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Blockchain](../../Skills/Data%20Science/Blockchain.md) (3), [Solidity](../../Skills/Data%20Science/Solidity.md) (2), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- Solidity
- Blockchain

## Path Context

### In [Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)
← [Blockchain for Developers- Hyperledger Fabric on Azure](Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md) | **13 of 14** | [Blockchain Programming in iOS Using Swift](Blockchain%20Programming%20in%20iOS%20Using%20Swift.md) →

## Appears In

- [Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps](../Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%2011%20Integrating%20Non-Blockchain%20Apps.md) — Blockchain
- [Building an Ethereum Blockchain App- 10 Deployment and Maintenance](../Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%2010%20Deployment%20and%20Maintenance.md) — Blockchain
- [Building an Ethereum Blockchain App- 9 Testing Ethereum Apps](../Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%209%20Testing%20Ethereum%20Apps.md) — Blockchain
- [Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp](../Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%208%20Supply%20Chain%20Smart%20Contract%20dApp.md) — Blockchain
- [Building an Ethereum Blockchain App- 7 Smart Contracts](../Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%207%20Smart%20Contracts.md) — Blockchain

---

[↑ Back to top](#)