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
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 3 Ethereum Development]]'
  - '[[Building an Ethereum Blockchain App- 3 Ethereum Development]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":4,"total":11,"prev":"Building an Ethereum Blockchain App- 3 Ethereum Development","next":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet"},{"path":"Become a Blockchain Developer","position":4,"total":14,"prev":"Building an Ethereum Blockchain App- 3 Ethereum Development","next":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-04-29
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
  - Your Ethereum development toolbox
  - Installing Geth lab
  - Installing Ganache lab
  - Installing Truffle lab
  - Installing Microsoft Visual Studio Code lab (IDE)

### 1. Ethereum Development Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### Your Ethereum development toolbox
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=0)** - So now it's time to start building that Ethereum development toolbox.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=5)** We've talked about it for quite a bit, and now it's time to actually do it.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=9)** So when you go to choose the right set of tools, you may be overwhelmed and say, why are there so many tools?
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=16)** Well, that's actually a good thing.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=18)** Even though it's confusing up front, it gives you many, many options.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=22)** We need the different tools because of several different reasons.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=27)** Number one, we want to work through the software development life cycle, which means we're going to develop code, then we're going to deploy it and run it locally, and then maybe on another test blockchain, and then to the main net.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=42)** And we need tools to help us through all this process.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=46)** Of course, we have to have an EVM runtime environment.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=49)** And every point, at every point, we can choose tools that are both open source or closed source, and we may need tools that are written in a specific language, because we want to modify the tool set.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=62)** So that's why there's so many different choices.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=63)** And again, it's overall a good thing.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=66)** We're going to funnel in and just pick one tool in each category and demonstrate that, but don't let that limit you.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=73)** If you prefer a different tool, than you substitute that one.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=76)** And in fact, you can probably follow through the majority of our tutorial using your own tools.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=81)** But the first time through, let's just stick with the individual tools that we recommend.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=86)** It's a little bit easier that way.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=88)** Now I talk a little bit about open source and closed source.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=92)** Open source community is basically a worldwide group of contributors that want to work together to make software free and better.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=102)** It has lots and lots of contributors.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=104)** Every time we have a new project, and Ethereum is an open source project, and most of the Ethereum tools are open source projects.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=112)** Which means that you've got a, a large pool of developers all over the world that want to contribute to make the product better.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=120)** It also means you've got lots of people to solve problems when bugs are identified, or if there's feature enhancements that you want to implement, you've got a lot of people that can contribute.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=131)** It also gives us the ability to draw from different experience bases.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=136)** You'll find open source software has both GUI and command line interfaces.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=142)** So whatever works best for you.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=144)** There's probably a tool out there that will satisfy the needs that you have to accomplish whatever tasks you're trying to accomplish.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=151)** One of the best places to go in the Ethereum world is the Ethereum website, and that's at [ethereum.org](https://ethereum.org).
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=159)** Let's take a look at the website and see some of the cool things you can find there.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=164)** It's a great place to start using Ethereum, and a great place to come back to over and over again to keep really learning more and more about this great environment.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=173)** All right, so here is [ethereum.org](https://ethereum.org), and you can see it's organized based on the front page, gives us access to beginners.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=182)** If you're brand new to Ethereum, you can start there.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=185)** Then you can also move to the Use, How Do I Use Ethereum, How Do I Learn Ethereum?
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=190)** And the last one, let's just jump right into developers, Developer Resources.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=195)** So we have a lot of resources on how to get started.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=199)** And I'd recommend that you dig through some of these, it's great information.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=202)** And then we have some support of smart contract languages, and of course there's Solidity, which we're going to be using.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=210)** And if you scroll on down, there's lots of developer tools, and you'll recognize some of these.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=215)** We've talked about some and there's lots more here.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=217)** So once you get through the material that we're going to present, always look for more opportunities to learn more.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=225)** And [ethereum.org](https://ethereum.org) is a great place to go.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/your-ethereum-development-toolbox?u=76281980&t=227)** All right, so let's get started actually building our toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **CLI Commands:** make (2), find (2)
> **URLs:** [ethereum.org](https://ethereum.org) (3)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Env Vars:** evm (1), gui (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - so (1)

#### Installing Geth lab
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=1)** - The first tool that we're going to put into our toolbox is the Ethereum client, or the EVM.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=8)** And we're going to use Go Ethereum, or Geth, it's often called, as the Ethereum client that we'll use.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=16)** Geth is written in the Go language and it is a full Ethereum node.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=19)** So it actually gives us access to the entire blockchain.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=23)** In fact, it downloads the entire blockchain and also runs a local copy of the EVM.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=29)** Further, it lets mine ether, it also lets us create transactions and smart contracts, because that's what the EVM does, and it gives us the access to the blockchain, allowing us to examine existing blocks.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=42)** So it's a full featured client for Ethereum. All right.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=47)** So let's go to the Go Ethereum, the Geth website, let's download and install it on our machine.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=53)** So the first thing we're going to do is navigate to geth.[ethereum.org](https://ethereum.org).
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=58)** And this is the official Go Ethereum website.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=62)** I'm going to choose Downloads, and it gets the latest version for each operating system that support it.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=69)** So I'm going to download Geth for Windows, save my file, and as soon as it downloads, we're going to launch it and install it.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=79)** And now it's downloaded.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=80)** All we have to do is launch the downloaded file and install Geth.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=87)** Now I do trust Geth, so I'm going to go ahead and choose more info and run anyway, because I know that this is a program that I can trust.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=97)** And here we go.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=98)** Do you want to allow this app to make changes? Yes, I do.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=104)** Make sure that you read through the New General Public License.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=109)** I've already read it, so I'm going to say yes.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=110)** One thing you want to make sure that you pay attention to, check the box for development tools.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=116)** We want to install the development tools along with Geth, and then choose Next.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=120)** You can change the default install folder, but I'm going to just go ahead and accept the default, and choose Okay or Next.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=131)** And it installs everything.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=134)** So once you install Geth, you can't just click on it from the menu and run it, you actually have to run it from a command-line interface.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=140)** So we can run it either from the command prompt or PowerShell.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=143)** I'm going to use PowerShell.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=145)** So let's launch PowerShell, cd over to the right directory and fire up Geth.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=149)** And in fact, I'm going to fire it up in light mode.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=152)** I'm not going to download the entire blockchain.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=154)** We'll just make our EVM a light node this time.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=158)** So I'm going to click on Start and just type in PowerShell.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=168)** And the first thing I want to do is cd over to the install directory.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=172)** If you notice, the default install directory is Program Files, Geth.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=176)** So I'll do that.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=177)** I'll just type in cd backslash program files Geth,
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=186)** and now we're ready to fire up Geth.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=188)** So I'm just going to type in dot backslash Geth, syncmode, light.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=198)** And that says, to start Geth as our Go Ethereum client as a light node.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=207)** And there we go.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=208)** We see Geth is actually downloading the most recent blocks and he is building our blockchain.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=216)** So now we have the first piece of the puzzle.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-geth-lab?u=76281980&t=218)** We have the first tool in our toolbox, we now are a node on the live Ethereum network.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (4), cd (3)
> **Prerequisites:** install (8)
> **Code Keywords:** let (3), public (1), default, (1), interface (1)
> **Tools:** powershell (4), command prompt (1)
> **Env Vars:** evm (4)
> **UI Navigation:** click on (2), go to (1), navigate to (1)
> **Definitions:** is a  (2)
> **URLs:** [ethereum.org](https://ethereum.org) (1)

#### Installing Ganache lab
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=0)** - So we just downloaded and installed our EVM, or our Ethereum client.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=6)** Now, keep in mind, even though it's a light node, the Ethereum is connected to Mainnet.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=11)** That's really not what we want during development.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=14)** So before we detach our client from Mainnet, we actually have to have another blockchain on our local computer for it to connect to.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=24)** So the next step is to download and install a test blockchain.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=28)** The test blockchain basically helps us build this testing environment so that we can write our smart contract code, then we can deploy it to this test blockchain locally, not impact anybody else, and determine whether it's working correctly or if we have more bugs to fix.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=44)** So let's do that now.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=46)** We're going to use Ganache.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=48)** Ganache is a product that gives us a test blockchain, as well as some utilities to help use deploy contracts to that test blockchain, develop applications and then execute tests again against this local environment.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=63)** All right, so let's go see how we can acquire and install Ganache.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=66)** Let's navigate to www.[trufflesuite.com/ganache](https://trufflesuite.com/ganache).
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=73)** That's where we find Ganache and there's a Download for Windows button.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=77)** Click on that button, and we're going to save this file.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=84)** And notice that there is a link for downloading to other operating systems, but since we're using Windows, we're just going to use that one.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=90)** Now that it's downloaded, I'm going to click on the download link and run Ganache.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=95)** It says do I want to install Ganache?
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=97)** Yes, I do.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=98)** And launch when ready.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=100)** So at this point, we try to install Ganache.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=103)** Oops, looks like we ran into an error.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=105)** Ganache installation failed.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=107)** What is that about?
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=109)** Okay, let's see, the reason is to install this app, enable sideload apps mode.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=113)** Ah, so this is a secure, or actually a new version of Windows that was installed with secure mode enabled, which basically says you cannot just install apps from anywhere, they have to come from the Microsoft Store.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=128)** So let's click on enable sideload apps.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=131)** Yes, I do.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=134)** And here we go.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=135)** Developer feature.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=136)** Microsoft Store apps is our current option but I want to allow sideload apps as well.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=143)** Are you sure you want to do this?
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=144)** Yes, I do.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=146)** And it's warning me, are you sure you want to do this because this allows you to install bad stuff.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=151)** Yeah, I'm sure I do want to do this.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=153)** Choose yes once again and now it allows me to install apps that don't come just from the Microsoft Store.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=161)** All right, let's go back and try this again.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=167)** Click Open File, Install.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=170)** And we should have better results this time, and sure enough, we see the progress bar installs, and it goes pretty quickly.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=181)** And now we see the first splash screen for Ganache.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=185)** Now, the first time, it's going to ask you if it's okay if you turn on analytics.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=189)** And it's your choice as to whether you choose to do so or not.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=193)** I'm going to clean up my desktop to show you what Ganache looks like.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=198)** Now, this is a new interface for Ganache.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=202)** The Quickstart button is similar to the classic Ganache interface, but there's a new option where you can create a new workspace.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=212)** Creating workspaces allow you to create multiple test blockchains, but we're not going to do that right now.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=217)** We're going to keep it simple and click on Quickstart.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=220)** And what's happening right now is I am actually creating and launching a test blockchain.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=227)** One of the things that I get from Ganache is I get 10 addresses by default.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=233)** Notice that I have these 10 addresses, which are accounts.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=237)** Each one has 100 Ether.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=239)** Now, clearly this is not real Ether.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=242)** That would be worth a pretty good bit of money.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=244)** But these test accounts make it possible for me to use these accounts to transfer Ether back and forth to test my software.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=253)** If we go look at Blocks, we see there's only one block, block zero.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=258)** Recognize that?
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=259)** Yep, that is the genesis block.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=262)** As we interact with our test blockchain, we're going to see more and more blocks created, and we'll see transactions for each block.
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=270)** This looks kind like that Ether [scan.io](https://scan.io) that we saw earlier.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=276)** The few things that we need to look at, we have accounts, blocks, transactions, and there's more stuff that's going on.
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=282)** We're not going to spend a lot of time looking at Ganache right now, but it does show you the current block, the current gas price, the gas limit, HARDFORK mnemonic, what the network ID is but most importantly, it shows us the RPC server address.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=300)** What that means is I can connect to this blockchain on my localhost 127.0.0.1 at port 7545.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=313)** The mining status is automining, which means that we don't have to actually mine Ether.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=318)** It automatically provides Ether for us.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=322)** If I go to the settings, it shows me a little bit more information about the settings and here's where I can change the port number if I want to or the network ID.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=332)** I can turn off automining.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=334)** I can define how many accounts I get.
>
> **[5:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=338)** Notice that I said it gave me 10.
>
> **[5:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=340)** I can pre-fund that many accounts when I create a new one.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=344)** I can set certain values on the chain and there's some advanced things I can set a little bit later.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=350)** But the idea is it gives us an entire environment where we can connect to this blockchain and use it to run our tests for our smart contracts.
>
> **[6:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=360)** So now we have a client, we have an Ethereum client, and we have a test blockchain.
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=367)** Now, currently, our Ethereum client is not talking to our test blockchain, but we're going to fix that a little bit later.
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-ganache-lab?u=76281980&t=373)** But let's continue on building our toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), interface (2), else, (1), this. (1), default. (1)
> **Prerequisites:** install (9)
> **UI Navigation:** click on (4), navigate to (1), go to (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** node (1), find (1), make (1)
> **Env Vars:** evm (1), hardfork (1), rpc (1)
> **URLs:** [trufflesuite.com](https://trufflesuite.com) (1), [scan.io](https://scan.io) (1)
> **Warnings:** keep in mind (1), warning (1)

#### Installing Truffle lab
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=0)** - Let's take a brief minute to review the Ethereum software development life cycle.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=5)** Remember, we talked about planning.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=7)** Well, we really don't know enough about what we're doing yet to plan, so we're going to get there.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=12)** The next step is coding and development.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=14)** And again, we're about to do that.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=17)** But once we actually had the tools in place to develop our smart contract code, we need to test that.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=24)** Now we just installed a test blockchain, but we really need to put a framework on top of it that makes it possible for us to conveniently move our smart contract code around, compile it, deploy it, and manage it, and take care of all the internals.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=41)** So let's do that next.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=43)** To do that, we're going to create a testing environment, or a testing suite, or we're going to actually install a testing suite.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=50)** And the one we've chosen is called Truffle.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=52)** You may have heard the word before, and you're going to recognize the website in just a moment.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=56)** It works very well with Ganache because it comes from the same people.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=60)** So we're going to use the Truffle Suite that helps bridge the gap between development, and deployment.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=67)** So let's go see how we can download and install Truffle.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=71)** And actually there's going to be a few extra steps in this one.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=74)** First thing we're going to do is navigate to [TruffleSuite.com](https://TruffleSuite.com).
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=77)** You may recognize this URL because we've been here before.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=81)** In fact, this is where we just got Ganache.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=84)** Let's take a look at what's available.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=86)** We see that from Truffle Suite, we can get Truffle Teams, Truffle, the Truffle Suite, Ganache, and Drizzle.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=94)** If not sure which one of these is, you can scroll down and see.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=98)** Truffle is smart contracts made sweeter.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=101)** That's what we're going to get.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=102)** We already have Ganache, which is a one-click blockchain, makes it really easy to create your own test blockchains.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=108)** And then there's also Drizzle.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=110)** We're not going to be working with Drizzle this time around.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=113)** All right, so let's learn more about Truffle.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=115)** How do we get it?
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=117)** Okay, so the way we install Truffle is we type this command: NPM install Truffle.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=122)** Oh, okay.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=124)** Let's go back into PowerShell.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=131)** All right, and let's type in this command.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=133)** What is it, NPM, well, I'm going to go ahead and cut to the chase.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=138)** If I type in NPM, notice it tells me, I don't recognize this.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=143)** That's because NPM is the Node.js package manager.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=149)** In other words, it means that before we can install Truffle, we have to have Node.js installed.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=155)** That's not obvious, you kind of have to read between the lines.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=159)** So let's navigate to [NodeJS.org](https://NodeJS.org).
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=163)** And from there, we can navigate to the download page.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=167)** So here we have the Windows Installer for Node.js.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=170)** I'm going to click on that, and choose, Save File.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=176)** That downloads pretty fast.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=177)** So now let's launch the Node.js installer, and it gives us a warning saying this is an MSI executable.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=186)** Yes, I trust it.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=187)** I'm going to go ahead and launch this.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=189)** And now we have the Node.js setup wizard.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=193)** After it calculates the requirements, we just click Next.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=197)** Accept the license agreement after we read it.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=202)** Decide if you want to use the default, which I will.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=206)** And simply choose Next, and Install.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=209)** And the Setup Wizard now installs Node dot JS.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=213)** Now Node.js is a development environment.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=218)** I'm going to have to choose Yes for user account control.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=222)** Node.js is a development environment for the JavaScript language.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=226)** So it helps us, it actually provides a runtime for JavaScript, and NPM will install packages for the Node.js environment.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=236)** So Truffle is a JavaScript application, which operates within Node.js, so they all fit together.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=243)** So click Finish here, and we're done.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=245)** So at this point, we've installed Node.js.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=248)** And all I have to do is type NPM install truffle minus G.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=252)** Now if you still had that PowerShell window open, remember it was open under the old environment before you installed Node.js, and you can't just type the command in it, 'cause it won't find it.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=264)** You have to exit out of PowerShell, and launch a new PowerShell.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=275)** Now we can type NPM, install Truffle minus G.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=296)** And the install doesn't take very long, and there you go.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=299)** Now we have Truffle installed.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=301)** Once you've completely installed Truffle, If you want to see what version of Truffle you're running, and just make sure that it installed properly, type in Truffle version.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=313)** And there we go.
>
> **[5:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=314)** This shows us that we have Truffle version 5.0.37 installed.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=319)** And notice that solc-js, that is the solidity compiler for JavaScript, was also installed.
>
> **[5:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=327)** And we have Node in web3 JS version.
>
> **[5:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=329)** So we see that we have it installed properly now, and now we have Truffle.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=334)** So we're close to being finished.
>
> **[5:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=337)** We've got all the pieces in place, except for one.
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-truffle-lab?u=76281980&t=339)** So let's go ahead and finish that last piece, and we'll have a fully operating Ethereum development environment.

> [!info]- Semantic Content
>
> **CLI Commands:** node (13), npm (7), find (1), make (1)
> **Code Keywords:** let (10), this. (2), default, (1)
> **Prerequisites:** install (10), setup (2)
> **File Paths:** node.js (11)
> **Env Vars:** npm (7), url (1), msi (1)
> **Definitions:** is a  (4), is called (1), in other words (1), means that (1), is an  (1)
> **UI Navigation:** navigate to (3), scroll down (1), click on (1)
> **Tools:** powershell (4)

#### Installing Microsoft Visual Studio Code lab (IDE)
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=1)** - All right, so we're ready for the final component.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=3)** This is like the topper on the cake.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=5)** This pulls everything together.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=8)** And that is the method or the tool set that we're going to use to actually enter code that will become smart contracts.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=15)** Now, we can use a boring source code editor.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=18)** But we're going to use something bigger and better.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=21)** We're going to use an integrated development environment, IDE.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=25)** An IDE is kind of like a super text editor.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=28)** What it does is it integrates a lot of little tools together to help us save time and write better code.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=35)** It allows us to be more productive because it does a lot for us.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=41)** It gives us automatic code completion, automatic syntax help or ready syntax help without having to go anywhere else.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=49)** We've chosen one of the best IDEs out there, especially ones for free, called Microsoft Visual Studio Code.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=56)** Now, if you've used Visual Studio in the past, you may have looked at it as a commercial product.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=61)** And that's still out there.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=63)** But Visual Studio Code is a free product that's available not only for Windows but also for most operating systems.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=70)** So, download this IDE and install it and you'll find that running code is a whole lot more fun.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=77)** Let's take a look at how we do that.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=79)** All right, the first thing we do is we navigate to code.[visualstudio.com](https://visualstudio.com) and we see a little snapshot of what we're in for.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=87)** Pretty cool stuff, huh?
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=89)** First thing we want to do is download Visual Studio Code.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=91)** So click on the Download button and we see the different versions.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=95)** We want Windows.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=101)** And there we go. It said, "Here, save the file."
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=104)** And as soon as it saves, we're going to launch it.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=107)** So I'm going to click on my downloads.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=110)** And click on my Visual Studio Code installer.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=114)** And accept the agreement after reading it, of course.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=119)** And I'm just going to use the default.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=124)** And I'll just call it, of course, Visual Studio Code.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=128)** And I am going to just use the default.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=132)** You can add open with code action to the Windows Explorer and directory context menu if you want.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=139)** You can also create a desktop icon.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=140)** But I'm going to just keep it really generic and choose Install.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=148)** All right, that's it.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=149)** And I'm going to go ahead and launch Visual Studio Code.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=152)** And there it is.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=154)** So now we have Visual Studio Code installed.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=158)** But to really use the advantages for Solidity, we need to install at least one extension.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=164)** So let's install the Solidity language extensions for Visual Studio Code and it'll make the IDE even that much more useful.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=172)** So inside VS Code, I'm going to click on the Extensions button.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=178)** And I can search over the hundreds and hundreds of extensions.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=181)** I'm just going to type in Solidity.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=185)** And the first one that pops up is from Juan Blanco.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=188)** That's the one we want so I click the Install button.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=191)** And what this does, it actually automatically installs the Solidity extension.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=197)** So what happens is once this installs, we'll be able to open Solidity Smart Contract Code and we get all of these extra features.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=207)** We get the syntax highlighting.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=208)** We get the compiler integration.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=210)** We get all these cool things that we see listed down here at the very bottom.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=216)** One more thing that I do want to change, and this is totally up to your preference, is the look and feel.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=221)** Right now, the default is a dark theme.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=224)** If you like that, fine.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=226)** But there are other themes available.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=228)** Maybe you'd like a light theme or something in between.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=230)** Let's take a look at how we can change the overall look and feel of VS Code.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=235)** So if we choose File, Preferences, Color Theme, or you could just press Control-K, Control-T.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=243)** And it shows us the different themes.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=245)** So we have light themes.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=247)** And now I have a different look and feel.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=249)** So that is your IDE.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=251)** It's now fully installed and ready to go.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=254)** We don't have any code for it yet but we're going to change that very, very soon.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=258)** If you want to play around with the look and feel of Visual Studio Code, go ahead, play with it.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=263)** It's easy to change things up and make it look just the way that you want.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-4-ethereum-development-tools/installing-microsoft-visual-studio-code-lab-ide?u=76281980&t=267)** Well, at this point, our toolbox is full and it's ready for us to reach in, grab a tool, and actually start using it.

> [!info]- Semantic Content
>
> **Tools:** visual studio (10), vs code (2)
> **Code Keywords:** let (3), default. (2), super (1), else. (1), for. (1)
> **Env Vars:** ide (5)
> **Prerequisites:** install (5)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 3 Ethereum Development]] | **4 of 11** | [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 3 Ethereum Development]] | **4 of 14** | [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] →

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