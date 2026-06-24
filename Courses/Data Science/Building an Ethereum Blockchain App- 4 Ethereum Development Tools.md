---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-4-ethereum-development-tools
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools"
duration_minutes: 25
duration: 25m
level: Intermediate
updated: 8/10/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEBYWbLkaLD2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628268755040?e=2147483647&amp;v=beta&amp;t=s3N592GvihPDr7VpDQouEPPpSoVfA9T0a_wnu7ncBFc"
linkedin_topic: Data Science
learning_paths:
  - '[Build an Ethereum Blockchain App](../../Paths/Data%20Science/Learning%20Paths/Build%20an%20Ethereum%20Blockchain%20App.md)'
  - '[Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)'
prev_courses:
  - '[Building an Ethereum Blockchain App- 3 Ethereum Development](Building%20an%20Ethereum%20Blockchain%20App-%203%20Ethereum%20Development.md)'
  - '[Building an Ethereum Blockchain App- 3 Ethereum Development](Building%20an%20Ethereum%20Blockchain%20App-%203%20Ethereum%20Development.md)'
next_courses:
  - '[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet](Building%20an%20Ethereum%20Blockchain%20App-%205%20Your%20Ethereum%20Wallet.md)'
  - '[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet](Building%20an%20Ethereum%20Blockchain%20App-%205%20Your%20Ethereum%20Wallet.md)'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":4,"total":11,"prev":"Building an Ethereum Blockchain App- 3 Ethereum Development","next":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet"},{"path":"Become a Blockchain Developer","position":4,"total":14,"prev":"Building an Ethereum Blockchain App- 3 Ethereum Development","next":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%204%20Ethereum%20Development%20Tools.md)

![Building an Ethereum Blockchain App: 4 Ethereum Development Tools](https://media.licdn.com/dms/image/v2/C560DAQEBYWbLkaLD2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628268755040?e=2147483647&amp;v=beta&amp;t=s3N592GvihPDr7VpDQouEPPpSoVfA9T0a_wnu7ncBFc)

# Building an Ethereum Blockchain App: 4 Ethereum Development Tools

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, fourth in a series of eleven, goes in-depth on the tools you need to develop your code. Instructor Michael Solomon walks you through the tools you’ll need from your Ethereum development toolbox, such as the blockchain cl

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools) | 25m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Ethereum Development Tools**](#1-ethereum-development-tools) (5 videos)
  - [Your Ethereum development toolbox](#your-ethereum-development-toolbox)
  - [Installing Geth lab](#installing-geth-lab)
  - [Installing Ganache lab](#installing-ganache-lab)
  - [Installing Truffle lab](#installing-truffle-lab)
  - [Installing Microsoft Visual Studio Code lab (IDE)](#installing-microsoft-visual-studio-code-lab-ide)

### 1. Ethereum Development Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Your Ethereum development toolbox](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=0)** - So now it's time to start building that [Ethereum](../../Skills/Data%20Science/Ethereum.md) development toolbox. We've talked about it for quite a bit, and now it's time to actually do it. So when you go to choose the right set of tools, you may be overwhelmed and say, why are there so many tools? Well, that's actually a good thing. Even though it's confusing up front, it gives you many, many options. We need the different tools because of several different reasons. Number one, we want to work through the [Software Development](../../Topics/Software%20Development.md) life cycle, which means we're going to develop code, then we're going to deploy it and run it locally, and then maybe on another test [Blockchain](../../Skills/Data%20Science/Blockchain.md), and then to the main net. And we need tools to help us through all this process. Of course, we have to have an EVM runtime environment. And every point, at every point, we can choose tools that are both open source or closed source, and we may need tools that are written in a specific language, because we want to modify the tool set. So that's why there's so many different choices. And again, it's overall a good thing. We're going to funnel in and just pick one tool in each category and demonstrate that, but don't let that limit you. If you prefer a different tool, than you substitute that one. And in fact, you can probably follow through the majority of our tutorial using your own tools. But the first time through, let's just stick with the individual tools that we recommend. It's a little bit easier that way. Now I talk a little bit about open source and closed source. Open source community is basically
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=94)** a worldwide group of contributors that want to work together to make software free and better. It has lots and lots of contributors. Every time we have a new project, and Ethereum is an open source project, and most of the Ethereum tools are open source projects. Which means that you've got a, a large pool of developers all over the world that want to contribute to make the product better. It also means you've got lots of people to solve problems when bugs are identified, or if there's feature enhancements that you want to implement, you've got a lot of people that can contribute. It also gives us the ability to draw from different experience bases. You'll find open source software has both GUI and command line interfaces. So whatever works best for you. There's probably a tool out there that will satisfy the needs that you have to accomplish whatever tasks you're trying to accomplish. One of the best places to go in the Ethereum world is the Ethereum website, and that's at [ethereum.org](https://ethereum.org). Let's take a look at the website and see some of the cool things you can find there. It's a great place to start using Ethereum, and a great place to come back to over and over again to keep really learning more and more about this great environment. All right, so here is [ethereum.org](https://ethereum.org), and you can see it's organized based on the front page, gives us access to beginners. If you're brand new to Ethereum, you can start there. Then you can also move to the Use,
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=186)** How Do I Use Ethereum, How Do I Learn Ethereum? And the last one, let's just jump right into developers, Developer Resources. So we have a lot of resources on how to get started. And I'd recommend that you dig through some of these, it's great information. And then we have some support of smart contract languages, and of course there's [Solidity](../../Skills/Data%20Science/Solidity.md), which we're going to be using. And if you scroll on down, there's lots of developer tools, and you'll recognize some of these. We've talked about some and there's lots more here. So once you get through the material that we're going to present, always look for more opportunities to learn more. And [ethereum.org](https://ethereum.org) is a great place to go. All right, so let's get started actually building our toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethereum](../../Skills/Data%20Science/Ethereum.md) (12), [Software Development](../../Topics/Software%20Development.md) (1), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (1), [Solidity](../../Skills/Data%20Science/Solidity.md) (1)
> **CLI Commands:** make (2), find (2)
> **URLs:** [ethereum.org](https://ethereum.org) (3)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** evm (1), gui (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - so (1)

#### [Installing Geth lab](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=1)** - The first tool that we're going to put into our toolbox is the [Ethereum](../../Skills/Data%20Science/Ethereum.md) client, or the EVM. And we're going to use Go Ethereum, or Geth, it's often called, as the Ethereum client that we'll use. Geth is written in the Go language and it is a full Ethereum node. So it actually gives us access to the entire [Blockchain](../../Skills/Data%20Science/Blockchain.md). In fact, it downloads the entire blockchain and also runs a local copy of the EVM. Further, it lets mine ether, it also lets us create transactions and [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md), because that's what the EVM does, and it gives us the access to the blockchain, allowing us to examine existing blocks. So it's a full featured client for Ethereum. All right. So let's go to the Go Ethereum, the Geth website, let's download and install it on our machine. So the first thing we're going to do is navigate to geth.[ethereum.org](https://ethereum.org). And this is the official Go Ethereum website. I'm going to choose Downloads, and it gets the latest version for each operating system that support it. So I'm going to download Geth for [Windows](../../Glossary/Service/Windows.md), save my file, and as soon as it downloads, we're going to launch it and install it. And now it's downloaded. All we have to do is launch the downloaded file and install Geth. Now I do trust Geth, so I'm going to go ahead and choose more info and run anyway, because I know that this is a program that I can trust.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=97)** And here we go. Do you want to allow this app to make changes? Yes, I do. Make sure that you read through the New General Public License. I've already read it, so I'm going to say yes. One thing you want to make sure that you pay attention to, check the box for development tools. We want to install the development tools along with Geth, and then choose Next. You can change the default install folder, but I'm going to just go ahead and accept the default, and choose Okay or Next. And it installs everything. So once you install Geth, you can't just click on it from the menu and run it, you actually have to run it from a command-line interface. So we can run it either from the command prompt or [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). I'm going to use PowerShell. So let's launch PowerShell, cd over to the right directory and fire up Geth. And in fact, I'm going to fire it up in light mode. I'm not going to download the entire blockchain. We'll just make our EVM a light node this time. So I'm going to click on Start and just type in PowerShell.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=168)** And the first thing I want to do is cd over to the install directory. If you notice, the default install directory is Program Files, Geth. So I'll do that. I'll just type in cd backslash program files Geth,
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=186)** and now we're ready to fire up Geth. So I'm just going to type in dot backslash Geth, syncmode, light. And that says, to start Geth as our Go Ethereum client as a light node. And there we go. We see Geth is actually downloading the most recent blocks and he is building our blockchain. So now we have the first piece of the puzzle. We have the first tool in our toolbox, we now are a node on the live Ethereum network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethereum](../../Skills/Data%20Science/Ethereum.md) (10), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (5), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (4), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** node (4), make (4), cd (3)
> **Prerequisites:** install (8)
> **Tools:** powershell (4), command prompt (1)
> **Env Vars:** evm (4)
> **UI Navigation:** click on (2), go to (1), navigate to (1)
> **Definitions:** is a  (2)
> **URLs:** [ethereum.org](https://ethereum.org) (1)

#### [Installing Ganache lab](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=0)** - So we just downloaded and installed our EVM, or our [Ethereum](../../Skills/Data%20Science/Ethereum.md) client. Now, keep in mind, even though it's a light node, the Ethereum is connected to Mainnet. That's really not what we want during development. So before we detach our client from Mainnet, we actually have to have another [Blockchain](../../Skills/Data%20Science/Blockchain.md) on our local computer for it to connect to. So the next step is to download and install a test blockchain. The test blockchain basically helps us build this testing environment so that we can write our smart contract code, then we can deploy it to this test blockchain locally, not impact anybody else, and determine whether it's working correctly or if we have more bugs to fix. So let's do that now. We're going to use Ganache. Ganache is a product that gives us a test blockchain, as well as some utilities to help use deploy contracts to that test blockchain, develop applications and then execute tests again against this local environment. All right, so let's go see how we can acquire and install Ganache. Let's navigate to www.[trufflesuite.com/ganache](https://trufflesuite.com/ganache). That's where we find Ganache and there's a Download for [Windows](../../Glossary/Service/Windows.md) button. Click on that button, and we're going to save this file. And notice that there is a link for downloading to other operating systems, but since we're using Windows, we're just going to use that one. Now that it's downloaded,
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=91)** I'm going to click on the download link and run Ganache. It says do I want to install Ganache? Yes, I do. And launch when ready. So at this point, we try to install Ganache. Oops, looks like we ran into an error. Ganache installation failed. What is that about? Okay, let's see, the reason is to install this app, enable sideload apps mode. Ah, so this is a secure, or actually a new version of Windows that was installed with secure mode enabled, which basically says you cannot just install apps from anywhere, they have to come from the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Store. So let's click on enable sideload apps. Yes, I do. And here we go. Developer feature. Microsoft Store apps is our current option but I want to allow sideload apps as well. Are you sure you want to do this? Yes, I do. And it's warning me, are you sure you want to do this because this allows you to install bad stuff. Yeah, I'm sure I do want to do this. Choose yes once again and now it allows me to install apps that don't come just from the Microsoft Store. All right, let's go back and try this again. Click Open File, Install. And we should have better results this time, and sure enough, we see the progress bar installs, and it goes pretty quickly. And now we see the first splash screen for Ganache. Now, the first time, it's going to ask you
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=187)** if it's okay if you turn on analytics. And it's your choice as to whether you choose to do so or not. I'm going to clean up my desktop to show you what Ganache looks like. Now, this is a new interface for Ganache. The Quickstart button is similar to the classic Ganache interface, but there's a new option where you can create a new workspace. Creating workspaces allow you to create multiple test blockchains, but we're not going to do that right now. We're going to keep it simple and click on Quickstart. And what's happening right now is I am actually creating and launching a test blockchain. One of the things that I get from Ganache is I get 10 addresses by default. Notice that I have these 10 addresses, which are accounts. Each one has 100 Ether. Now, clearly this is not real Ether. That would be worth a pretty good bit of money. But these test accounts make it possible for me to use these accounts to transfer Ether back and forth to test my software. If we go look at Blocks, we see there's only one block, block zero. Recognize that? Yep, that is the genesis block. As we interact with our test blockchain, we're going to see more and more blocks created, and we'll see transactions for each block. This looks kind like that Ether [scan.io](https://scan.io) that we saw earlier. The few things that we need to look at, we have accounts, blocks, transactions,
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=280)** and there's more stuff that's going on. We're not going to spend a lot of time looking at Ganache right now, but it does show you the current block, the current gas price, the gas limit, HARDFORK mnemonic, what the network ID is but most importantly, it shows us the RPC server address. What that means is I can connect to this blockchain on my localhost 127.0.0.1 at port 7545. The mining status is automining, which means that we don't have to actually mine Ether. It automatically provides Ether for us. If I go to the settings, it shows me a little bit more information about the settings and here's where I can change the port number if I want to or the network ID. I can turn off automining. I can define how many accounts I get. Notice that I said it gave me 10. I can pre-fund that many accounts when I create a new one. I can set certain values on the chain and there's some advanced things I can set a little bit later. But the idea is it gives us an entire environment where we can connect to this blockchain and use it to run our tests for our [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md). So now we have a client, we have an Ethereum client, and we have a test blockchain. Now, currently, our Ethereum client is not talking to our test blockchain, but we're going to fix that a little bit later.
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=373)** But let's continue on building our toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Blockchain](../../Skills/Data%20Science/Blockchain.md) (12), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (4), [Windows](../../Glossary/Service/Windows.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (1)
> **Prerequisites:** install (9)
> **UI Navigation:** click on (4), navigate to (1), go to (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** node (1), find (1), make (1)
> **Env Vars:** evm (1), hardfork (1), rpc (1)
> **URLs:** [trufflesuite.com](https://trufflesuite.com) (1), [scan.io](https://scan.io) (1)
> **Warnings:** keep in mind (1), warning (1)

#### [Installing Truffle lab](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=0)** - Let's take a brief minute to review the [Ethereum](../../Skills/Data%20Science/Ethereum.md) [Software Development](../../Topics/Software%20Development.md) life cycle. Remember, we talked about planning. Well, we really don't know enough about what we're doing yet to plan, so we're going to get there. The next step is coding and development. And again, we're about to do that. But once we actually had the tools in place to develop our smart contract code, we need to test that. Now we just installed a test [Blockchain](../../Skills/Data%20Science/Blockchain.md), but we really need to put a framework on top of it that makes it possible for us to conveniently move our smart contract code around, compile it, deploy it, and manage it, and take care of all the internals. So let's do that next. To do that, we're going to create a testing environment, or a testing suite, or we're going to actually install a testing suite. And the one we've chosen is called Truffle. You may have heard the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) before, and you're going to recognize the website in just a moment. It works very well with Ganache because it comes from the same people. So we're going to use the Truffle Suite that helps bridge the gap between development, and deployment. So let's go see how we can download and install Truffle. And actually there's going to be a few extra steps in this one. First thing we're going to do is navigate to [TruffleSuite.com](https://TruffleSuite.com). You may recognize this URL because we've been here before. In fact, this is where we just got Ganache. Let's take a look at what's available. We see that from Truffle Suite, we can get Truffle Teams, Truffle, the Truffle Suite, Ganache, and Drizzle. If not sure which one of these is,
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=96)** you can scroll down and see. Truffle is [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) made sweeter. That's what we're going to get. We already have Ganache, which is a one-click blockchain, makes it really easy to create your own test blockchains. And then there's also Drizzle. We're not going to be working with Drizzle this time around. All right, so let's learn more about Truffle. How do we get it? Okay, so the way we install Truffle is we type this command: [npm](../../Skills/Web%20Development/npm.md) install Truffle. Oh, okay. Let's go back into [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). All right, and let's type in this command. What is it, NPM, well, I'm going to go ahead and cut to the chase. If I type in NPM, notice it tells me, I don't recognize this. That's because NPM is the [Node.js](../../Skills/Web%20Development/Node.js.md) package manager. In other words, it means that before we can install Truffle, we have to have Node.js installed. That's not obvious, you kind of have to read between the lines. So let's navigate to [NodeJS.org](https://NodeJS.org). And from there, we can navigate to the download page. So here we have the [Windows](../../Glossary/Service/Windows.md) Installer for Node.js. I'm going to click on that, and choose, Save File. That downloads pretty fast. So now let's launch the Node.js installer, and it gives us a warning saying this is an MSI executable. Yes, I trust it.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=187)** I'm going to go ahead and launch this. And now we have the Node.js setup wizard. After it calculates the requirements, we just click Next. Accept the license agreement after we read it. Decide if you want to use the default, which I will. And simply choose Next, and Install. And the Setup Wizard now installs Node dot JS. Now Node.js is a development environment. I'm going to have to choose Yes for user account control. Node.js is a development environment for the [JavaScript](../../Skills/Software%20Development/JavaScript.md) language. So it helps us, it actually provides a runtime for JavaScript, and NPM will install packages for the Node.js environment. So Truffle is a JavaScript application, which operates within Node.js, so they all fit together. So click Finish here, and we're done. So at this point, we've installed Node.js. And all I have to do is type NPM install truffle minus G. Now if you still had that PowerShell window open, remember it was open under the old environment before you installed Node.js, and you can't just type the command in it, 'cause it won't find it. You have to exit out of PowerShell, and launch a new PowerShell. Now we can type NPM, install Truffle minus G.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=296)** And the install doesn't take very long, and there you go. Now we have Truffle installed. Once you've completely installed Truffle, If you want to see what version of Truffle you're running, and just make sure that it installed properly, type in Truffle version. And there we go. This shows us that we have Truffle version 5.0.37 installed. And notice that solc-js, that is the [Solidity](../../Skills/Data%20Science/Solidity.md) compiler for JavaScript, was also installed. And we have Node in web3 JS version. So we see that we have it installed properly now, and now we have Truffle. So we're close to being finished. We've got all the pieces in place, except for one. So let's go ahead and finish that last piece, and we'll have a fully operating Ethereum development environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (11), [npm](../../Skills/Web%20Development/npm.md) (7), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Ethereum](../../Skills/Data%20Science/Ethereum.md) (2)
> **CLI Commands:** node (13), npm (7), find (1), make (1)
> **Prerequisites:** install (10), setup (2)
> **File Paths:** node.js (11)
> **Env Vars:** npm (7), url (1), msi (1)
> **Definitions:** is a  (4), is called (1), in other words (1), means that (1), is an  (1)
> **UI Navigation:** navigate to (3), scroll down (1), click on (1)
> **Tools:** powershell (4)

#### [Installing Microsoft Visual Studio Code lab (IDE)](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=1)** - All right, so we're ready for the final component. This is like the topper on the cake. This pulls everything together. And that is the method or the tool set that we're going to use to actually enter code that will become [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md). Now, we can use a boring source code editor. But we're going to use something bigger and better. We're going to use an integrated development environment, IDE. An IDE is kind of like a super text editor. What it does is it integrates a lot of little tools together to help us save time and write better code. It allows us to be more productive because it does a lot for us. It gives us automatic code completion, automatic syntax help or ready syntax help without having to go anywhere else. We've chosen one of the best IDEs out there, especially ones for free, called [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Visual Studio Code. Now, if you've used Visual Studio in the past, you may have looked at it as a commercial product. And that's still out there. But Visual Studio Code is a free product that's available not only for [Windows](../../Glossary/Service/Windows.md) but also for most operating systems. So, download this IDE and install it and you'll find that running code is a whole lot more fun. Let's take a look at how we do that. All right, the first thing we do is we navigate to code.[visualstudio.com](https://visualstudio.com) and we see a little snapshot of what we're in for. Pretty cool stuff, huh? First thing we want to do is download Visual Studio Code. So click on the Download button
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=93)** and we see the different versions. We want Windows. And there we go. It said, "Here, save the file." And as soon as it saves, we're going to launch it. So I'm going to click on my downloads. And click on my Visual Studio Code installer. And accept the agreement after reading it, of course. And I'm just going to use the default. And I'll just call it, of course, Visual Studio Code. And I am going to just use the default. You can add open with code action to the Windows Explorer and directory context menu if you want. You can also create a desktop icon. But I'm going to just keep it really generic and choose Install. All right, that's it. And I'm going to go ahead and launch Visual Studio Code. And there it is. So now we have Visual Studio Code installed. But to really use the advantages for [Solidity](../../Skills/Data%20Science/Solidity.md), we need to install at least one extension. So let's install the Solidity language extensions for Visual Studio Code and it'll make the IDE even that much more useful. So inside VS Code, I'm going to click on the Extensions button. And I can search over the hundreds and hundreds of extensions. I'm just going to type in Solidity. And the first one that pops up is from Juan Blanco.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=188)** That's the one we want so I click the Install button. And what this does, it actually automatically installs the Solidity extension. So what happens is once this installs, we'll be able to open Solidity Smart Contract Code and we get all of these extra features. We get the syntax highlighting. We get the compiler integration. We get all these cool things that we see listed down here at the very bottom. One more thing that I do want to change, and this is totally up to your preference, is the look and feel. Right now, the default is a dark theme. If you like that, fine. But there are other themes available. Maybe you'd like a light theme or something in between. Let's take a look at how we can change the overall look and feel of VS Code. So if we choose File, Preferences, Color Theme, or you could just press Control-K, Control-T. And it shows us the different themes. So we have light themes. And now I have a different look and feel. So that is your IDE. It's now fully installed and ready to go. We don't have any code for it yet but we're going to change that very, very soon. If you want to play around with the look and feel of Visual Studio Code, go ahead, play with it. It's easy to change things up and make it look just the way that you want. Well, at this point, our toolbox is full and it's ready for us to reach in, grab a tool, and actually start using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Solidity](../../Skills/Data%20Science/Solidity.md) (5), [Windows](../../Glossary/Service/Windows.md) (3), [Smart Contracts](../../Skills/Data%20Science/Smart%20Contracts.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** visual studio (10), vs code (2)
> **Env Vars:** ide (5)
> **Prerequisites:** install (5)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)


## Instructor

- [Michael Solomon](../../Instructors/Data%20Science/Michael%20Solomon.md)

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [Build an Ethereum Blockchain App](../../Paths/Data%20Science/Learning%20Paths/Build%20an%20Ethereum%20Blockchain%20App.md)
← [Building an Ethereum Blockchain App- 3 Ethereum Development](Building%20an%20Ethereum%20Blockchain%20App-%203%20Ethereum%20Development.md) | **4 of 11** | [Building an Ethereum Blockchain App- 5 Your Ethereum Wallet](Building%20an%20Ethereum%20Blockchain%20App-%205%20Your%20Ethereum%20Wallet.md) →

### In [Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)
← [Building an Ethereum Blockchain App- 3 Ethereum Development](Building%20an%20Ethereum%20Blockchain%20App-%203%20Ethereum%20Development.md) | **4 of 14** | [Building an Ethereum Blockchain App- 5 Your Ethereum Wallet](Building%20an%20Ethereum%20Blockchain%20App-%205%20Your%20Ethereum%20Wallet.md) →

## Appears In

- [Build an Ethereum Blockchain App](../../Paths/Data%20Science/Learning%20Paths/Build%20an%20Ethereum%20Blockchain%20App.md)
- [Become a Blockchain Developer](../../Paths/Cybersecurity/Learning%20Paths/Become%20a%20Blockchain%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps](Building%20an%20Ethereum%20Blockchain%20App-%2011%20Integrating%20Non-Blockchain%20Apps.md) — Blockchain, Ethereum
- [Building an Ethereum Blockchain App- 10 Deployment and Maintenance](Building%20an%20Ethereum%20Blockchain%20App-%2010%20Deployment%20and%20Maintenance.md) — Blockchain, Ethereum
- [Building an Ethereum Blockchain App- 9 Testing Ethereum Apps](Building%20an%20Ethereum%20Blockchain%20App-%209%20Testing%20Ethereum%20Apps.md) — Blockchain, Ethereum
- [Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp](Building%20an%20Ethereum%20Blockchain%20App-%208%20Supply%20Chain%20Smart%20Contract%20dApp.md) — Blockchain, Ethereum
- [Building an Ethereum Blockchain App- 7 Smart Contracts](Building%20an%20Ethereum%20Blockchain%20App-%207%20Smart%20Contracts.md) — Blockchain, Ethereum

---

[↑ Back to top](#)