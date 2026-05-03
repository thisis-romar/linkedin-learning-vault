---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-10-deployment-and-maintenance
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 8/25/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
  - Software Deployment
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEMwtGaVZxdqA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629737440397?e=2147483647&amp;v=beta&amp;t=rUYNhmFk8KHsqj2J19NKyED83hcXoRsNwAxzRVzBVuo"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]]'
  - '[[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]]'
  - '[[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":10,"total":11,"prev":"Building an Ethereum Blockchain App- 9 Testing Ethereum Apps","next":"Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps"},{"path":"Become a Blockchain Developer","position":10,"total":14,"prev":"Building an Ethereum Blockchain App- 9 Testing Ethereum Apps","next":"Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
  - skill/software-deployment
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%2010%20Deployment%20and%20Maintenance.md)

![Building an Ethereum Blockchain App: 10 Deployment and Maintenance](https://media.licdn.com/dms/image/v2/C4D0DAQEMwtGaVZxdqA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629737440397?e=2147483647&amp;v=beta&amp;t=rUYNhmFk8KHsqj2J19NKyED83hcXoRsNwAxzRVzBVuo)

# Building an Ethereum Blockchain App: 10 Deployment and Maintenance

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, tenth in a series of eleven, shows you how to use Infura and Truffle to deploy your blockchain app. Instructor Michael Solomon explains the differences between private and public test blockchains, as well as the actual l

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance) | 36m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Deploying and Maintaining Ethereum Apps**](#1-deploying-and-maintaining-ethereum-apps) (6 videos)
  - [Test blockchains](#test-blockchains)
  - [The live blockchain: Mainnet](#the-live-blockchain-mainnet)
  - [Connecting to multiple blockchains and Infura](#connecting-to-multiple-blockchains-and-infura)
  - [Configuring Truffle and Infura](#configuring-truffle-and-infura)
  - [Funding your account lab](#funding-your-account-lab)
  - [Deploying to the live blockchain](#deploying-to-the-live-blockchain)

### 1. Deploying and Maintaining Ethereum Apps

[↑ Back to Table of Contents](#table-of-contents)

#### [Test blockchains](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=1)** - Well, now you pretty much know the entire life cycle almost of [[Software Development]]. You know how to design good [[Smart Contracts]] and Dapps. You know what it takes to code them, or at least, you're starting to learn what it takes to code good smart contracts. Now there's a lot more to [[Solidity]] that we didn't have a chance to cover in our time together. But I hope that you dig deep and learn more and more about the cool language of smart contracts. Then you know about the importance of testing and a little bit about deployment. Now let's continue the storyline, and let's talk about how we deploy to a network that's not just the default network that we've been setting up to use so far. Anyway, we're going to create other networks, or at least, we're going to create connections to other networks. Now when I say other network, I mean other networks of other blockchains. So we've talked about the development [[Blockchain]], and we use Ganache to set up our own private test blockchain, so we can use the term blockchain and network kind of interchangeably. Now a local private test blockchain, Ganache, is really convenient. It's very helpful. But the problem is it's not very realistic. For one, in one case or for one reason, automining is turned on by default. What that means is that the there's no mining of blocks. A block is immediately available as soon as you post transactions, it's immediately on the blockchain. Now that's not very realistic,
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=92)** because one of the differences between blockchain development and traditional [[Application Development]] is the fact that blocks take some time to actually make it to the blockchain. In [[Ethereum]], it's about once every 14 seconds. So that can have a material impact on how well your application performs. So you could write a smart contract and test it using Ganache with automining turning on, turned on, and you think it's responding very quickly. And that's a great thing. But when you deploy it to mainnet, you may find out that, you know what, this delay of adding blocks is really getting in the way, because I'm touching blocks too frequently. You won't know that until you turn automining off, which you can do in Ganache. So you can simulate a more realistic environment. But in all honesty, other test blockchains that are not private and static are more realistic. But let's take a look first at how we can reconfigure Ganache to be a little bit more realistic. So here's Ganache. It's up and running. We see I just started it brand new. Every account has a balance of 100 ether. Let's go over to our settings. I'm going to click on the little settings icon. And from here, I'm going to go to the SERVER tab. So on the SERVER tab, notice there is an AUTOMINE tick box basically, or it's a button. If I change that,
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=183)** I turn automine off. Now automine on means process transactions instantaneously. But if it's off, it's going to wait some number of seconds. So if we want to simulate the real live mainnet network or the live Ethereum blockchain network, I might want to change this as something like 14. Now when I save this, I'm going to save and restart, it doesn't look much different. But what I've done is I've turned automining off. Notice that the mining status up here at the top is now 14-second block time. Why do I want to do this? Because a 14-second block time is more realistic, and your performance of your smart contracts will be more realistic and more consistent with what you'll find in the real world. Okay. But Ganache is not the only choice. And even though you can configure some of the features of Ganache to simulate more like a live network, it's not truly a live network. That's why we have some other shared test networks that are closer to the live network, such as Ropsten, very popular one in fact. In fact, we're going to look at that one here in just a few minutes. Ropsten uses the proof of work consensus algorithm, which is like the current mainnet for Ethereum. And miners actually do earn a small amount of ether. It's very much smaller than livenet or mainnet, but they actually can earn a little bit of money,
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=277)** so there's some incentive for them to actually get involved and participate in the Ropsten network. New blocks are added about every 30 seconds, so it's a little bit less responsive than mainnet. And it's supported by both Geth, which is what we've been using, and also Parity, so you can use either environment, either client to connect to the Ropsten network. It's really good for observing the effect of mining on your smart contracts. So as you start testing more towards mainnet, you might want to start with Ganache and then try something like Ropsten before, of course, you go to the mainnet. Ropsten is not the only choice. There's also Rinkeby. Rinkeby is a little different. It's a different type of blockchain. It's still Ethereum. But what it does is it uses proof of authority consensus algorithm which is a little bit different than proof of work. It basically means too that before you can earn any ether, you have to prove your existence, and so there's a connection with some real life identity, which is not necessary in some other networks. New blocks are added about every 15 seconds, which is more consistent with mainnet, with a live network. And Ethereum is pre-mined, so there's really no mining that goes on. The blocks are already pre-mined, and they're just added every 15 seconds. And if you want to interact with the Rinkeby network, then you can just withdraw the ether for Rinkeby from a faucet. And in fact, a faucet is a concept that is used by many different test networks. And the idea is that you just,
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=370)** you want to fill up your cup with ether. On the live network, you actually have to purchase that ether. So you would have to go through an exchange, take US dollars or whatever your currency is you'll be using and exchange that for ether that's on the livenet. But on the test networks, you don't actually have to buy the ether. What you do is you have a cup, and you want to fill up with ether, you basically go up to their faucet and turn it on. That's the concept at least. And they just give you some free ether. So when we talk about the concept of faucet, that's what we mean. Each network has a different approach. So we'll talk a little bit about each one of those when we start talking about funding our Ethereum accounts. Also, Rinkeby is supported by Geth, so we could connect our stuff up to Rinkeby. But if you're using Parity, the Parity blockchain client, it doesn't work. It's not compatible. Another test network is Kovan. Kovan also uses the PoA consensus algorithm. New blocks are added more quickly though, about every four seconds instead of a slower add rate. And it's supported by Parity, but not Geth. And so if you're using Parity you might want to go that route. So those are just a few of the test networks that are available. So we're going to use Ropsten, and I'll show you how to configure for some other ones as well. But that gives you an idea of how you can make Ganache a little bit more responsive, like a live network, and also gives you some information on some other test networks.
>
> **[7:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=464)** I highly recommend that you use a staged approach. When you test, start with Ganache or whatever you use for your private network, then go to a test blockchain network before you go to mainnet. So that's basically the strategy. So let's actually roll up our sleeves, get our hands dirty and do some of this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (11), [[Ethereum]] (6), [[Smart Contracts]] (5), [[Software Development]] (1), [[Solidity]] (1)
> **UI Navigation:** go to (4), click on (1)
> **Definitions:** is a  (3), is an  (1), basically means (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** server (2), automine (1)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - well (1)

#### [The live blockchain: Mainnet](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=0)** - Okay, so we've talked about different types of [[Blockchain]] networks. We've talked about private blockchains and networks, we've talked about public testing blockchain networks, and also MainNet. Now, of course, whenever we talk about main net, that is whole enchilada. It's the big live [[Ethereum]] blockchain. That's the final destination, the one that everybody uses. So, what are the differences? Part of the differences are important when you're developing, but especially when you're testing and about to deploy, you really want to pay attention to these differences, because if you ignore them, it can come back to haunt you. So first off, make sure that you are very well aware that MainNet, the live Ethereum network, uses real money, or at least real [[Cryptocurrency]]. So that means every time you touch that blockchain, you've got to pay some of your Ether to do that. That includes just deploying your application. So when you are used to testing, you don't really care how much stuff costs. Well, that's not true. If you're testing well, and you're cognizant of how much things cost, you do care about it, because you know that eventually it's going to cost you real money. So don't be lulled into a false sense of security with these easy test networks thinking that it's cheap money. Well, that really is, but eventually, it's going to cost you real money. So don't forget that, it's a really important account, or a really important topic.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=92)** Before you deploy to any network, whether it's test or live, you have to fund your accounts. You've got to get that Ether in there somewhere. With test networks, it's very, very easy. With live network, you've got to actually exchange and purchase that Ether. Okay, that's not the only difference. That's just the biggest one. Additionally, when you move to public test or especially MainNet, you get more miners and more nodes. And that's really important, because the miners are in it to make money, especially on MainNet. So they are going to pick the transactions that are most lucrative to them. So depending on how you tailor your transactions, you may have more of a delay on MainNet and getting your transactions into a block than you would certainly with Ganache when it's auto-mined. So you have to take that into consideration. You'll find a little bit more realistic miner behavior on the test networks, like Ropsten and Rinkeby, but it's never going to be quite as much as the live MainNet. There may be unexpected delays as well, since there's so many more nodes, we're working across a real live breathing network, which means that these nodes are hanging off the internet. And sometimes the bandwidth that these nodes have is not the best bandwidth in the world. And so you're getting all kinds of different delays. It shouldn't cause major problems as long as most of the network is operating well, but just be aware that more nodes
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=184)** means more stuff to go on. So you might, your throughput of your application may not be exactly what you expected when you tested it locally using ganache. What else? Unexpected transaction orders. Your transaction may not make it into a block as you expected, because again, because miners are trying to make money, they're going to pick transactions that are most lucrative to them. So if you're trying to skate by with really cheap transactions, you don't want to spend much gas at all, and you want a low gas price, your transaction may sit for just a minute or so, or, well, when I say a minute, I mean, generically, it may sit for a bit before it's picked up and put into a block. So again, on MainNet, the miners dictate more of the overall throughput and the flow than they would on any other network. And of course, you've got to have Ether in your account before you even deploy a dApp, I already talked about that, but it bears repeating. You've got to fund that account. And lastly, but not least, remember that whatever you put out to a public blockchain, whether it's test or especially MainNet, it's immutable, it stays there forever. So if you put garbage code out, it's always going to be there. So, try to make sure you test as much as you can before you ever hit these public networks. All right, that pretty much covers up some of the caveats. And as long as you're aware of the differences between the public test and the live MainNet network, then you're really ready to start dipping your toe in the water and start pushing these apps out,
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=278)** and deploying to public networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Ethereum]] (2), [[Cryptocurrency]] (1)
> **CLI Commands:** make (5), find (1)
> **Code Identifiers:** dapp (1)
> **Definitions:** means that (1)
> **Best Practices:** don't forget (1)
> **Warnings:** be aware (1)
> **Speakers:** - okay (1)

#### [Connecting to multiple blockchains and Infura](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=0)** - All right, so now you know you are going to need to access multiple blockchains, multiple [[Blockchain]] networks. So you want to make sure that you set these up. And setting them up is kind of a... You've got to hook up the two ends. In other words, you need to tell Truffle what network you want to connect to and the credentials for connecting to that network, because each network, or each blockchain, has its own account address. An address is only valid for one specific blockchain, 'cause if you think about it, you have to sign up for each one of them. We've kind of not really gotten into the whole concept of account and keys, but basically when you create an [[Ethereum]] account, all you're doing is you're asking the Ethereum virtual machine to generate, or whatever generator you use, to generate a pair of keys. It generates a private key and a public key. They're mathematically related. Don't worry about the math behind it. But your private key is what you have to keep separate and secret, because that's what you're going to use to access your crypto assets, your [[Cryptocurrency]], and any other assets that are there. Your public key is what you can use to have people put crypto assets into your account. And your address is actually part of your public key. So that's how they're all related. So when we talk about addresses and keys, be aware that the address is part of your public key. Anybody can see that, and that's okay. But don't ever expose your private key, because that's what you need
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=93)** to control all of your ether, basically, that kind of boils it all down to ground level. There are several ways that we can set up access to multiple networks. One way is we can create an EVM for each individual network. What that means is I can create a local node. I can download and install my Ethereum client for each individual network, which means I am a node on multiple networks. And that's fine, but it takes a lot of effort. You've got to run these multiple nodes. You have to keep the blockchain current. And I mean you could be a light client, so you don't have to download the whole blockchain. Or if you're a full client, you've got a full copy of all the blockchains. So that's a lot of stuff to put on one server. Another way is you can simply connect to somebody else's infrastructure. And there are several services out there that'll provide that for you. But what you do is you set up an account, and they have an API that allows you to connect to their EVM for different networks. INFURA is one of the providers. So let's take a look at how we can set up a free account within INFURA, and let us connect to their infrastructure without having to be our own nodes. First I navigate to in [infura.io](https://infura.io). And this is a service that'll allow us to access multiple test networks. There's a lot more they do, too, but that's all we care about it at this point. So I'm going to click Sign Up to sign up for a new account. And I'll sign up under Total Seminars.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=195)** And click Sign Up. So once you receive the email, just reply to it, and let's refresh here. And there we go. And now we're logged in. So we're logged in with our free account, and we get three projects. A project is basically a separate connection into their infrastructure. So all we need to do, let's just create a new project. And this project will be called... We'll just call it SupplyChainApp. That way it matches what we're actually using it for. Project's created, and now I want to view the project. And here's where the magic happens. Now we get a project ID, which I'm going to copy to my clipboard. I'm going to leave this up 'cause we're going to come back later. And then we have several different things going on. We have a project secret, which can be used for additional authentication, and we get an endpoint, a URL here, which we may need to use a little bit later as well. Notice that's for Mainnet, but I also can use Ropsten, and notice that my project ID stays the same, just the endpoint URL changes. And there's Kovan, Rinkeby, and Görli, which we haven't talked about Görli. I'm going to go back to Mainnet. So that's the first part of the puzzle of creating this throughput, or this network, where we can connect into different blockchain networks. So once you have your INFURA account and you've copied that project ID, we're ready to then go configure our local Truffle instance to connect up to INFURA.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=290)** So in the next episode we'll take a look at exactly how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[Ethereum]] (3), [[Cryptocurrency]] (1)
> **Env Vars:** infura (4), evm (2), url (2), api (1)
> **Prerequisites:** set up (3), install (1), configure (1)
> **CLI Commands:** node (2), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** in other words (1), is a  (1)
> **URLs:** [infura.io](https://infura.io) (1)
> **UI Navigation:** navigate to (1)

#### [Configuring Truffle and Infura](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=0)** - Okay, so now you have your Infura account set up. That means that you have the link to their infrastructure, but we still have to go back to our local machine and tell Truffle how to connect, or rather where to connect, for different networks. You may recall that, in the beginning, we only set up a single network called development. Well now we're going to tell Truffle we have more than one, but we've got a little bit of plumbing to do. So let's take a look at how we configure Truffle to be able to recognize different networks. I'm going to start with a reference that you can go read. It is from [trufflesuite.com](https://trufflesuite.com), so if you go to [trufflesuite.com/tutorials/using-infura-custom-provider](https://trufflesuite.com/tutorials/using-infura-custom-provider), this is where I got all of these instructions from. And I'm driving you to this place so that you will have full explanation of what I'm doing. So we're just, basically, going to follow through what they recommend. The first thing we have to do is we need to install an HDWalletProvider. This is a separate package that, basically, helps us establish the link between Truffle and an external provider. All right, so let's go over to VS Code and I'm going to tell you about the Truffle config file in a minute, but, before we do that, let's install the provider. And, basically, we're just going to use, I'm going to open a terminal and I'm going to use [[npm]] install truffle/hdwallet-provider.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=101)** All right, so there's a few errors there, or a few warnings, those are fine, don't worry about those. Once you have this installed, you can get rid of the terminal. And, at this point, you now need to modify the truffleconfig.js file. Now we had a previous version, I just copied over it with the new data that we're going to need. And, again, I just got this directly from the website on the tutorial, how to use Infura custom provider. And if you scroll down you'll find all the pieces of information here on how you can install it yourself, but instead of going through the installation step-by-step, I'm going to give you the final version. So line number one is a constant definition. And we basically say, I'm going to use the Truffle HDWalletProvider, that's what I just installed. Then we have to define the pneumonic. The pneumonic is your pneumonic from your wallet. Do you remember when we set up MetaMask and I said, "Here's the pneumonic, it's a bunch of words, make sure you write these down and don't forget them." Well, here's why, you need them here. Now, clearly, pasting a pneumonic into a text file, this JS file is a text file, is very dangerous. You don't want to do this in a real environment. This is the simplest way to do it. In a real environment you probably would store it off somewhere and use an API to [[Fetch]] it as needed, but for right now, to keep things simple, and as long as you control everything in your project file, then it's okay to do it this way.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=195)** This is going to reference [[Ethereum]] accounts that are used for testing anyway. If you ever had the same account where you have a lot of crypto assets in it, by all means never put your pneumonics in a text file that anyone else can ever see, but in this context it's okay. So what I'm going to do is I'm going to go copy my pneumonics that represent my account and paste it right in. You'll notice that this is grayed out, or it's blurred out, so you can't actually read it for security purposes. Continuing on, we have our module exports and we list our networks. Now notice we have three networks, development, ropsten and live. You can define more if you want, but we're just going to define these three. The first development network is the same as it has been, it talks to ganache, localhost 7545. The ropsten network is hard-coded at network_id3, and live is Mainnet, which is network_id1. And I'm going to give it some gas and set the gas price of what I'll pay, those are just defaults. However, we do have to give a URL to contact each one of these providers. We do that from just copying the URL from Infura. So let's go to the Infura website and see where that is. So we see in Infura, here's my supply chain app. If I View Project, notice it gives me
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=288)** the endpoint address for Mainnet. If I just copy that, and paste that in for Mainnet, notice if I copy it it'll only give me mainnet.[infura.io](https://infura.io), and so on and so forth, I have to type in https://. When I go back to the website and I select Ropsten, It'll also give me the endpoint for Ropsten. It's actually the same v3 and key, or actually project ID is the same, it just changes the first part. So the idea, here, is that you copy, paste it in, add the https:// and yours should look just like this, of course you're going to have your own project ID. So now you have everything configured, and we're ready to deploy to three different networks. And, again, you can define some more if you want to, but I'm just going to define the three for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Fetch]] (1), [[Ethereum]] (1)
> **Prerequisites:** install (4), set up (3), configure (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** npm (1), find (1), make (1)
> **URLs:** [trufflesuite.com](https://trufflesuite.com) (2), [infura.io](https://infura.io) (1)
> **Env Vars:** url (2), api (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** go to (2), scroll down (1)

#### [Funding your account lab](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=0)** - Okay, so the last step before we actually deploy our code to any individual network is making sure that we funded the accounts for those networks. So we need to make sure that we have ether in each one of our accounts. We're going to use MetaMask to access each one of the accounts. So let's see how we can fund each one individually, we'll start with the easiest [[Blockchain]] network to fund. And that is Ganache. When we started up Ganache, every account, we have 10 of them, every account gets 100 ether. Now, why is that? And is that enough? Well, so far it's been enough, but let's go back into our settings and notice when we click on accounts and keys, there we go. We have a total of 10 accounts to generate. That's why we get 10. Every time we launch Ganache and every account gets default, 100 ether. So if you want to change that, you can just change it right here. And that way you were funding all 10 accounts. That's the easiest one. All right, so I'm going to get out of Ganache. So now let's go into MetaMask. Let's click on the little MetaMask here, and we see that we have several accounts or really one account so far multiple networks. So the main [[Ethereum]] network, we have a balance of 0.2374 ether. Now, how did that get there? Well, we actually transferred ether. from an existing account,
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=93)** a live real account to this account. And the way we did it, we just simply copied to the clipboard, the public address or the public key, which is actually the address. And we just set it to that address. And so we did this earlier today as a matter of fact. All right, so let's look at some other networks. What about Robsten? With Robsten though, we have zero ether. So this is going to be a problem. We need ether in order to deploy to the Robsten test network, to fund our account from Robsten. We need to go to the Robsten Ethereum Faucet, and it's just at faucet.robson.be, and we need to enter our Testnet account address. All right, so let's go back to Robsten in MetaMask. And click account one, copy to clipboard. Now we go back to the faucet. We paste in this address and say, send me test ether. All right, so that gives me the transaction ID and tells me that it was sent to my account. So let's go back to MetaMask. And this may take a few minutes, cause remember it's several seconds, at least until a new block is added. The other way that you can fund your account is directly from within MetaMask. So we could do is choose deposit, scroll down and click on test faucet. And that gives me a direct connection noticed right here. I can click on request one ether from faucet
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=187)** and that initiates a new transaction as well. That's a really easy way. And we can see, we already have one. That's been... there we go. We have two. So that was actually from the first manual deposit and our third one is pending. So if we just watch this, it's just a few seconds and we can actually move, see where it moves from initial to pending or from pending to success. There we go. And actually that was our second ether. So we have two ether. So now you know how to fund a Ganache account. It's in the local configuration. You know how to fund a public test account. We use Robsten. You can also use other ones, but we use a faucet and you know that you have to physically buy ether to fund your main net account. So now, regardless of what type of test blockchain environment you use, you know how to fund it. And now we're ready to actually deploy our code wherever we want and then run it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (2), [[Ethereum]] (2)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Versions:** 0.2374 (1)
> **Speakers:** - okay (1)

#### [Deploying to the live blockchain](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=0)** - All right, we're almost done. All we have left to do is compile our [[Smart Contracts]] and then deploy them. We've defined three separate networks, and we can compile for specific network and deploy to that network, or we can compile for everything and then deploy out to individual networks at any time. Now, keep in mind in the truffle environment, I typically use the [[Microsoft Word|word]] deploy. However, the word migrate is just the same, so we can use the command migrate or deploy, it's the same command you can interchange, whichever one speaks to you. So that's what we're going to do next. I'm going to show you how to compile your code, and then deploy it to specific environments. And by the way, the migrate or the deploy command, what it does, is he just looks through the migrations folder and runs each of that [[JavaScript]]. So we'll look at that first, show you what's going to happen and then we'll do it. So this is our truffle config file, it's the same that we just left it a few moments ago. Let's take a look at migrations. Notice initial migrations, there's some housekeeping, that actually migrates, or actually defines the migrations.sol which is a default or a provided smart contract. And the ones we coded our ERC 20 token and supply chain, so those are the only ones, even though we have more contracts defined, we're only going to deploy these two. So the deploy or the migrate command is going to look through the migrations folder
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=94)** and run each one of these JavaScript files one by one in order, that's why I have it named one and then two, and those are the contracts that will be deployed. So that way you can be working on a lot of contracts, but you only deploy the ones you really want to. Okay, so we're going to do this from a terminal. I'm going to open a new terminal and here we go. The first thing I'm going to do, truffle, compile. And notice that only compiled one contract, he'll compile the ones that need to be compiled. If you really want to compile all of them, you can simply say truffle, compile all or dash dash all. And there you go, see compiled all of them. If you want to compile for a specific network, you can say compile all dash dash network development.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=157)** And likewise, we could say, let's say ropsten cause we've defined that one as well. And it's going to basically do the same thing. All right, so now we're ready to deploy, so let's try to deploy our code. Let's go into truffle, deploy or migrate either one, to the network, oops, spelled it wrong, to the network development. This is going to be to our ganache network. I just launched ganache, so we see that every account has 100 ether. So when I deploy to my development network, it's going to be the same thing as when we deployed the last time we deployed. Now, you notice the flashing down there and it sure is taking a long time. Earlier, it didn't take any time at all for us to deploy our application. The reason for that remember is we changed the ganache network, the [[Blockchain]] to be a non auto mining. In other words, we turned auto mining off and we said that blocks will take 14 seconds to the mined. So what's happening is, we're adding transactions to blocks, but those blocks are not getting mined until the end of 14 seconds. That's why deploying takes longer using ganache with auto mining turned off.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=253)** So we kind of can expect that when we deploy to a test network or the live network, it's going to be a little slower because we have mining going on, all right? Let's go back and see what's happened now. And there we go it's finally finished. Several things are going on here. Number one, we have total deployments are three, and there's a cost 0.1 ether cost. Let's go back to ganache. And there we go, we see that our primary account has been hit 4.1 ether basically. So this shows us that sure enough, it costs to deploy. All right, well, let's continue the fund. Let's deploy to ropsten. And you notice, it goes through the entire process again, because he's compiling, making sure everything is up to date saying the network is up to date, and then he is deploying to the network that we've chosen. Now, you may notice that it didn't take all that much time and it appears as though it didn't do much work. It just simply said, network is up to date. So what's with that? Well, I will tell you in preparing for this demo, we actually deployed to ropsten and we haven't changed anything in our smart contract. And so what ropsten is telling us is, hey, it's already there, it's online, it's up to date. So here's what we have to do. Let's actually go back and reset, so that I can show you how it actually pushes new code out. All right, so I'm going to add an option here. I'm going to use reset
>
> **[5:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=349)** and let's issue the same command again. So what reset does, and you may have noticed I used that earlier. Reset basically assumes that everything is new, and so it actually pushes out a new copy of the same thing. It replaces things, but it does it as if it were a new smart contract. Now I could have also gone in and made a change to our contracts. It actually changed the source code so that they would recompile and then be pushed out as new versions. But I went ahead and just simply said, hey, let's go ahead and reset everything. So you can see that we're spending time actually sending this out to the ropsten network. And it's taking some time because those blocks are not going to be mined even as quickly as in ganache. We can even see this first block has been been there for 32 seconds now. All right, so we're done. So we see that we've deployed to the ropsten test network. Now let's just go take a quick look at our account in MetaMask. Look at our ropsten balance. It's not two anymore, we've decremented the balance a little bit. So we see that we're actually spending our fake money on the ropsten test network to deploy our code. So that shows that we're really interacting with the right account. So now you know how to define multiple networks and how to deploy to multiple networks. I didn't actually go through the whole process of deploying to the live network to main negative, it's exactly the same. We've got them set up properly, you just simply say,
>
> **[7:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=443)** truffle deploy, give the network name and boom, it takes care of everything. So that's all that it takes. Once you hook it up, you've got your inferior account, you have your [[Ethereum]] accounts and you you've defined the truffle config JavaScript, so that they're all linked up, it's very, very easy. Now, you know the entire process of [[Software Development]] from the very beginning, all the way through deployment, and you even saw how easy it is to redeploy, to deploy additional versions of smart contracts. So, that pretty much wraps it up as far as the software development life cycle in Ethereum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Smart Contracts]] (2), [[Microsoft Word|Word]] (2), [[Ethereum]] (2), [[Software Development]] (2)
> **Versions:** 0.1 (1), 4.1 (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** erc (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Warnings:** keep in mind (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum
- Software Deployment

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] | **10 of 11** | [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] | **10 of 14** | [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] — Blockchain, Ethereum

---

[↑ Back to top](#)