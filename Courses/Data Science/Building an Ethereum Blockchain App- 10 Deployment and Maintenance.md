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
  - Build an Ethereum Blockchain App
  - Become a Blockchain Developer
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
  - skill/software-deployment
status: not-started
created: 2026-04-19
---

![Building an Ethereum Blockchain App: 10 Deployment and Maintenance](https://media.licdn.com/dms/image/v2/C4D0DAQEMwtGaVZxdqA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629737440397?e=2147483647&amp;v=beta&amp;t=rUYNhmFk8KHsqj2J19NKyED83hcXoRsNwAxzRVzBVuo)

# Building an Ethereum Blockchain App: 10 Deployment and Maintenance

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, tenth in a series of eleven, shows you how to use Infura and Truffle to deploy your blockchain app. Instructor Michael Solomon explains the differences between private and public test blockchains, as well as the actual l

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance) | 36m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum
- Software Deployment

## Table of Contents

### 1. Deploying and Maintaining Ethereum Apps

#### Test blockchains
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=1)** - Well, now you pretty much know the entire life cycle almost of software development.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=6)** You know how to design good smart contracts and Dapps.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=10)** You know what it takes to code them, or at least, you're starting to learn what it takes to code good smart contracts.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=17)** Now there's a lot more to solidity that we didn't have a chance to cover in our time together.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=22)** But I hope that you dig deep and learn more and more about the cool language of smart contracts.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=28)** Then you know about the importance of testing and a little bit about deployment.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=32)** Now let's continue the storyline, and let's talk about how we deploy to a network that's not just the default network that we've been setting up to use so far.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=43)** Anyway, we're going to create other networks, or at least, we're going to create connections to other networks.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=49)** Now when I say other network, I mean other networks of other blockchains.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=54)** So we've talked about the development blockchain, and we use Ganache to set up our own private test blockchain, so we can use the term blockchain and network kind of interchangeably.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=66)** Now a local private test blockchain, Ganache, is really convenient.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=71)** It's very helpful.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=73)** But the problem is it's not very realistic.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=75)** For one, in one case or for one reason, automining is turned on by default.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=81)** What that means is that the there's no mining of blocks.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=84)** A block is immediately available as soon as you post transactions, it's immediately on the blockchain.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=91)** Now that's not very realistic, because one of the differences between blockchain development and traditional application development is the fact that blocks take some time to actually make it to the blockchain.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=105)** In Ethereum, it's about once every 14 seconds.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=108)** So that can have a material impact on how well your application performs.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=113)** So you could write a smart contract and test it using Ganache with automining turning on, turned on, and you think it's responding very quickly.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=122)** And that's a great thing.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=123)** But when you deploy it to mainnet, you may find out that, you know what, this delay of adding blocks is really getting in the way, because I'm touching blocks too frequently.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=134)** You won't know that until you turn automining off, which you can do in Ganache.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=140)** So you can simulate a more realistic environment.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=145)** But in all honesty, other test blockchains that are not private and static are more realistic.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=151)** But let's take a look first at how we can reconfigure Ganache to be a little bit more realistic.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=157)** So here's Ganache.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=158)** It's up and running.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=159)** We see I just started it brand new.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=161)** Every account has a balance of 100 ether.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=164)** Let's go over to our settings.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=166)** I'm going to click on the little settings icon.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=168)** And from here, I'm going to go to the SERVER tab.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=175)** So on the SERVER tab, notice there is an AUTOMINE tick box basically, or it's a button.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=182)** If I change that, I turn automine off.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=186)** Now automine on means process transactions instantaneously.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=190)** But if it's off, it's going to wait some number of seconds.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=194)** So if we want to simulate the real live mainnet network or the live Ethereum blockchain network, I might want to change this as something like 14.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=204)** Now when I save this, I'm going to save and restart, it doesn't look much different.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=210)** But what I've done is I've turned automining off.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=216)** Notice that the mining status up here at the top is now 14-second block time.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=221)** Why do I want to do this?
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=222)** Because a 14-second block time is more realistic, and your performance of your smart contracts will be more realistic and more consistent with what you'll find in the real world.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=235)** Okay. But Ganache is not the only choice.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=239)** And even though you can configure some of the features of Ganache to simulate more like a live network, it's not truly a live network.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=247)** That's why we have some other shared test networks that are closer to the live network, such as Ropsten, very popular one in fact.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=257)** In fact, we're going to look at that one here in just a few minutes.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=259)** Ropsten uses the proof of work consensus algorithm, which is like the current mainnet for Ethereum.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=266)** And miners actually do earn a small amount of ether.
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=270)** It's very much smaller than livenet or mainnet, but they actually can earn a little bit of money, so there's some incentive for them to actually get involved and participate in the Ropsten network.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=283)** New blocks are added about every 30 seconds, so it's a little bit less responsive than mainnet.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=288)** And it's supported by both Geth, which is what we've been using, and also Parity, so you can use either environment, either client to connect to the Ropsten network.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=298)** It's really good for observing the effect of mining on your smart contracts.
>
> **[5:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=302)** So as you start testing more towards mainnet, you might want to start with Ganache and then try something like Ropsten before, of course, you go to the mainnet.
>
> **[5:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=312)** Ropsten is not the only choice.
>
> **[5:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=314)** There's also Rinkeby.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=316)** Rinkeby is a little different.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=318)** It's a different type of blockchain.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=319)** It's still Ethereum.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=320)** But what it does is it uses proof of authority consensus algorithm which is a little bit different than proof of work.
>
> **[5:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=327)** It basically means too that before you can earn any ether, you have to prove your existence, and so there's a connection with some real life identity, which is not necessary in some other networks.
>
> **[5:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=338)** New blocks are added about every 15 seconds, which is more consistent with mainnet, with a live network.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=345)** And Ethereum is pre-mined, so there's really no mining that goes on.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=350)** The blocks are already pre-mined, and they're just added every 15 seconds.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=354)** And if you want to interact with the Rinkeby network, then you can just withdraw the ether for Rinkeby from a faucet.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=363)** And in fact, a faucet is a concept that is used by many different test networks.
>
> **[6:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=368)** And the idea is that you just, you want to fill up your cup with ether.
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=373)** On the live network, you actually have to purchase that ether.
>
> **[6:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=377)** So you would have to go through an exchange, take US dollars or whatever your currency is you'll be using and exchange that for ether that's on the livenet.
>
> **[6:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=387)** But on the test networks, you don't actually have to buy the ether.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=390)** What you do is you have a cup, and you want to fill up with ether, you basically go up to their faucet and turn it on.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=395)** That's the concept at least.
>
> **[6:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=397)** And they just give you some free ether.
>
> **[6:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=399)** So when we talk about the concept of faucet, that's what we mean.
>
> **[6:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=402)** Each network has a different approach.
>
> **[6:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=405)** So we'll talk a little bit about each one of those when we start talking about funding our Ethereum accounts.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=411)** Also, Rinkeby is supported by Geth, so we could connect our stuff up to Rinkeby.
>
> **[6:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=417)** But if you're using Parity, the Parity blockchain client, it doesn't work.
>
> **[7:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=423)** It's not compatible.
>
> **[7:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=424)** Another test network is Kovan.
>
> **[7:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=427)** Kovan also uses the PoA consensus algorithm.
>
> **[7:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=430)** New blocks are added more quickly though, about every four seconds instead of a slower add rate.
>
> **[7:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=436)** And it's supported by Parity, but not Geth.
>
> **[7:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=439)** And so if you're using Parity you might want to go that route.
>
> **[7:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=442)** So those are just a few of the test networks that are available.
>
> **[7:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=446)** So we're going to use Ropsten, and I'll show you how to configure for some other ones as well.
>
> **[7:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=452)** But that gives you an idea of how you can make Ganache a little bit more responsive, like a live network, and also gives you some information on some other test networks.
>
> **[7:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=464)** I highly recommend that you use a staged approach.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=467)** When you test, start with Ganache or whatever you use for your private network, then go to a test blockchain network before you go to mainnet.
>
> **[7:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=476)** So that's basically the strategy.
>
> **[7:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/test-blockchains?u=76281980&t=478)** So let's actually roll up our sleeves, get our hands dirty and do some of this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (4), continue (1), default. (1), static (1)
> **UI Navigation:** go to (4), click on (1)
> **Definitions:** is a  (3), is an  (1), basically means (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** server (2), automine (1)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (1)
> **Speakers:** - well (1)

#### The live blockchain: Mainnet
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=0)** - Okay, so we've talked about different types of blockchain networks.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=4)** We've talked about private blockchains and networks, we've talked about public testing blockchain networks, and also MainNet.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=13)** Now, of course, whenever we talk about main net, that is whole enchilada.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=17)** It's the big live Ethereum blockchain.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=20)** That's the final destination, the one that everybody uses.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=24)** So, what are the differences?
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=26)** Part of the differences are important when you're developing, but especially when you're testing and about to deploy, you really want to pay attention to these differences, because if you ignore them, it can come back to haunt you.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=39)** So first off, make sure that you are very well aware that MainNet, the live Ethereum network, uses real money, or at least real cryptocurrency.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=50)** So that means every time you touch that blockchain, you've got to pay some of your Ether to do that.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=59)** That includes just deploying your application.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=61)** So when you are used to testing, you don't really care how much stuff costs.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=66)** Well, that's not true.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=68)** If you're testing well, and you're cognizant of how much things cost, you do care about it, because you know that eventually it's going to cost you real money.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=77)** So don't be lulled into a false sense of security with these easy test networks thinking that it's cheap money.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=85)** Well, that really is, but eventually, it's going to cost you real money.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=88)** So don't forget that, it's a really important account, or a really important topic.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=92)** Before you deploy to any network, whether it's test or live, you have to fund your accounts.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=98)** You've got to get that Ether in there somewhere.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=101)** With test networks, it's very, very easy.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=104)** With live network, you've got to actually exchange and purchase that Ether.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=108)** Okay, that's not the only difference.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=110)** That's just the biggest one.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=111)** Additionally, when you move to public test or especially MainNet, you get more miners and more nodes.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=119)** And that's really important, because the miners are in it to make money, especially on MainNet.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=125)** So they are going to pick the transactions that are most lucrative to them.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=130)** So depending on how you tailor your transactions, you may have more of a delay on MainNet and getting your transactions into a block than you would certainly with Ganache when it's auto-mined.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=143)** So you have to take that into consideration.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=145)** You'll find a little bit more realistic miner behavior on the test networks, like Ropsten and Rinkeby, but it's never going to be quite as much as the live MainNet.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=156)** There may be unexpected delays as well, since there's so many more nodes, we're working across a real live breathing network, which means that these nodes are hanging off the internet.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=168)** And sometimes the bandwidth that these nodes have is not the best bandwidth in the world.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=174)** And so you're getting all kinds of different delays.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=177)** It shouldn't cause major problems as long as most of the network is operating well, but just be aware that more nodes means more stuff to go on.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=187)** So you might, your throughput of your application may not be exactly what you expected when you tested it locally using ganache.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=194)** What else?
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=196)** Unexpected transaction orders.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=198)** Your transaction may not make it into a block as you expected, because again, because miners are trying to make money, they're going to pick transactions that are most lucrative to them.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=207)** So if you're trying to skate by with really cheap transactions, you don't want to spend much gas at all, and you want a low gas price, your transaction may sit for just a minute or so, or, well, when I say a minute, I mean, generically, it may sit for a bit before it's picked up and put into a block.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=224)** So again, on MainNet, the miners dictate more of the overall throughput and the flow than they would on any other network.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=233)** And of course, you've got to have Ether in your account before you even deploy a dApp, I already talked about that, but it bears repeating.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=240)** You've got to fund that account.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=242)** And lastly, but not least, remember that whatever you put out to a public blockchain, whether it's test or especially MainNet, it's immutable, it stays there forever.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=253)** So if you put garbage code out, it's always going to be there.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=256)** So, try to make sure you test as much as you can before you ever hit these public networks.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=262)** All right, that pretty much covers up some of the caveats.
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/the-live-blockchain-mainnet?u=76281980&t=265)** And as long as you're aware of the differences between the public test and the live MainNet network, then you're really ready to start dipping your toe in the water and start pushing these apps out, and deploying to public networks.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), private (1)
> **CLI Commands:** make (5), find (1)
> **Code Identifiers:** dapp (1)
> **Definitions:** means that (1)
> **Best Practices:** don't forget (1)
> **Warnings:** be aware (1)
> **Speakers:** - okay (1)

#### Connecting to multiple blockchains and Infura
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=0)** - All right, so now you know you are going to need to access multiple blockchains, multiple blockchain networks.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=7)** So you want to make sure that you set these up.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=10)** And setting them up is kind of a... You've got to hook up the two ends.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=13)** In other words, you need to tell Truffle what network you want to connect to and the credentials for connecting to that network, because each network, or each blockchain, has its own account address.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=26)** An address is only valid for one specific blockchain, 'cause if you think about it, you have to sign up for each one of them.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=32)** We've kind of not really gotten into the whole concept of account and keys, but basically when you create an Ethereum account, all you're doing is you're asking the Ethereum virtual machine to generate, or whatever generator you use, to generate a pair of keys.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=49)** It generates a private key and a public key.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=52)** They're mathematically related.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=54)** Don't worry about the math behind it.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=57)** But your private key is what you have to keep separate and secret, because that's what you're going to use to access your crypto assets, your cryptocurrency, and any other assets that are there.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=69)** Your public key is what you can use to have people put crypto assets into your account.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=76)** And your address is actually part of your public key.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=79)** So that's how they're all related.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=81)** So when we talk about addresses and keys, be aware that the address is part of your public key.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=87)** Anybody can see that, and that's okay.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=89)** But don't ever expose your private key, because that's what you need to control all of your ether, basically, that kind of boils it all down to ground level.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=99)** There are several ways that we can set up access to multiple networks.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=103)** One way is we can create an EVM for each individual network.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=109)** What that means is I can create a local node.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=113)** I can download and install my Ethereum client for each individual network, which means I am a node on multiple networks.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=122)** And that's fine, but it takes a lot of effort.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=125)** You've got to run these multiple nodes.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=126)** You have to keep the blockchain current.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=128)** And I mean you could be a light client, so you don't have to download the whole blockchain.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=133)** Or if you're a full client, you've got a full copy of all the blockchains.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=138)** So that's a lot of stuff to put on one server.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=141)** Another way is you can simply connect to somebody else's infrastructure.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=145)** And there are several services out there that'll provide that for you.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=149)** But what you do is you set up an account, and they have an API that allows you to connect to their EVM for different networks.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=158)** INFURA is one of the providers.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=160)** So let's take a look at how we can set up a free account within INFURA, and let us connect to their infrastructure without having to be our own nodes.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=169)** First I navigate to in [infura.io](https://infura.io).
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=172)** And this is a service that'll allow us to access multiple test networks.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=177)** There's a lot more they do, too, but that's all we care about it at this point.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=180)** So I'm going to click Sign Up to sign up for a new account.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=185)** And I'll sign up under Total Seminars.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=195)** And click Sign Up.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=198)** So once you receive the email, just reply to it, and let's refresh here.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=203)** And there we go.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=204)** And now we're logged in.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=205)** So we're logged in with our free account, and we get three projects.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=210)** A project is basically a separate connection into their infrastructure.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=216)** So all we need to do, let's just create a new project.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=219)** And this project will be called... We'll just call it SupplyChainApp.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=226)** That way it matches what we're actually using it for.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=228)** Project's created, and now I want to view the project.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=231)** And here's where the magic happens.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=234)** Now we get a project ID, which I'm going to copy to my clipboard.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=238)** I'm going to leave this up 'cause we're going to come back later.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=240)** And then we have several different things going on.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=242)** We have a project secret, which can be used for additional authentication, and we get an endpoint, a URL here, which we may need to use a little bit later as well.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=253)** Notice that's for Mainnet, but I also can use Ropsten, and notice that my project ID stays the same, just the endpoint URL changes.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=263)** And there's Kovan, Rinkeby, and Görli, which we haven't talked about Görli.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=269)** I'm going to go back to Mainnet.
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=270)** So that's the first part of the puzzle of creating this throughput, or this network, where we can connect into different blockchain networks.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=278)** So once you have your INFURA account and you've copied that project ID, we're ready to then go configure our local Truffle instance to connect up to INFURA.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/connecting-to-multiple-blockchains-and-infura?u=76281980&t=290)** So in the next episode we'll take a look at exactly how to do that.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), let (4), private (3), for. (1)
> **Env Vars:** infura (4), evm (2), url (2), api (1)
> **Prerequisites:** set up (3), install (1), configure (1)
> **CLI Commands:** node (2), make (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** in other words (1), is a  (1)
> **URLs:** [infura.io](https://infura.io) (1)
> **UI Navigation:** navigate to (1)

#### Configuring Truffle and Infura
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=0)** - Okay, so now you have your Infura account set up.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=4)** That means that you have the link to their infrastructure, but we still have to go back to our local machine and tell Truffle how to connect, or rather where to connect, for different networks.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=17)** You may recall that, in the beginning, we only set up a single network called development.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=22)** Well now we're going to tell Truffle we have more than one, but we've got a little bit of plumbing to do.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=28)** So let's take a look at how we configure Truffle to be able to recognize different networks.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=34)** I'm going to start with a reference that you can go read.
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=37)** It is from [trufflesuite.com](https://trufflesuite.com), so if you go to [trufflesuite.com/tutorials/using-infura-custom-provider](https://trufflesuite.com/tutorials/using-infura-custom-provider), this is where I got all of these instructions from.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=48)** And I'm driving you to this place so that you will have full explanation of what I'm doing.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=54)** So we're just, basically, going to follow through what they recommend.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=57)** The first thing we have to do is we need to install an HDWalletProvider.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=63)** This is a separate package that, basically, helps us establish the link between Truffle and an external provider.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=70)** All right, so let's go over to VS Code and I'm going to tell you about the Truffle config file in a minute, but, before we do that, let's install the provider.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=84)** And, basically, we're just going to use, I'm going to open a terminal and I'm going to use npm install truffle/hdwallet-provider.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=101)** All right, so there's a few errors there, or a few warnings, those are fine, don't worry about those.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=106)** Once you have this installed, you can get rid of the terminal.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=109)** And, at this point, you now need to modify the truffleconfig.js file.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=115)** Now we had a previous version, I just copied over it with the new data that we're going to need.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=120)** And, again, I just got this directly from the website on the tutorial, how to use Infura custom provider.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=128)** And if you scroll down you'll find all the pieces of information here on how you can install it yourself, but instead of going through the installation step-by-step, I'm going to give you the final version.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=142)** So line number one is a constant definition.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=145)** And we basically say, I'm going to use the Truffle HDWalletProvider, that's what I just installed.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=151)** Then we have to define the pneumonic.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=153)** The pneumonic is your pneumonic from your wallet.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=157)** Do you remember when we set up MetaMask and I said, "Here's the pneumonic, it's a bunch of words, make sure you write these down and don't forget them."
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=166)** Well, here's why, you need them here.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=169)** Now, clearly, pasting a pneumonic into a text file, this JS file is a text file, is very dangerous.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=176)** You don't want to do this in a real environment.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=178)** This is the simplest way to do it.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=181)** In a real environment you probably would store it off somewhere and use an API to fetch it as needed, but for right now, to keep things simple, and as long as you control everything in your project file, then it's okay to do it this way.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=195)** This is going to reference Ethereum accounts that are used for testing anyway.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=200)** If you ever had the same account where you have a lot of crypto assets in it, by all means never put your pneumonics in a text file that anyone else can ever see, but in this context it's okay.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=212)** So what I'm going to do is I'm going to go copy my pneumonics that represent my account and paste it right in.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=225)** You'll notice that this is grayed out, or it's blurred out, so you can't actually read it for security purposes.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=231)** Continuing on, we have our module exports and we list our networks.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=235)** Now notice we have three networks, development, ropsten and live.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=239)** You can define more if you want, but we're just going to define these three.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=244)** The first development network is the same as it has been, it talks to ganache, localhost 7545.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=252)** The ropsten network is hard-coded at network_id3, and live is Mainnet, which is network_id1.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=260)** And I'm going to give it some gas and set the gas price of what I'll pay, those are just defaults.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=267)** However, we do have to give a URL to contact each one of these providers.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=273)** We do that from just copying the URL from Infura.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=279)** So let's go to the Infura website and see where that is.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=283)** So we see in Infura, here's my supply chain app.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=286)** If I View Project, notice it gives me the endpoint address for Mainnet.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=292)** If I just copy that, and paste that in for Mainnet, notice if I copy it it'll only give me mainnet.[infura.io](https://infura.io), and so on and so forth, I have to type in https://.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=310)** When I go back to the website and I select Ropsten, It'll also give me the endpoint for Ropsten.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=316)** It's actually the same v3 and key, or actually project ID is the same, it just changes the first part.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=324)** So the idea, here, is that you copy, paste it in, add the https:// and yours should look just like this, of course you're going to have your own project ID.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=336)** So now you have everything configured, and we're ready to deploy to three different networks.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/configuring-truffle-and-infura?u=76281980&t=341)** And, again, you can define some more if you want to, but I'm just going to define the three for now.

> [!info]- Semantic Content
>
> **Prerequisites:** install (4), set up (3), configure (1)
> **Code Keywords:** let (4), from. (1), module (1), this, (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** npm (1), find (1), make (1)
> **URLs:** [trufflesuite.com](https://trufflesuite.com) (2), [infura.io](https://infura.io) (1)
> **Env Vars:** url (2), api (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** go to (2), scroll down (1)

#### Funding your account lab
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=0)** - Okay, so the last step before we actually deploy our code to any individual network is making sure that we funded the accounts for those networks.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=11)** So we need to make sure that we have ether in each one of our accounts.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=15)** We're going to use MetaMask to access each one of the accounts.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=18)** So let's see how we can fund each one individually, we'll start with the easiest blockchain network to fund.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=25)** And that is Ganache.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=27)** When we started up Ganache, every account, we have 10 of them, every account gets 100 ether.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=34)** Now, why is that?
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=35)** And is that enough?
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=36)** Well, so far it's been enough, but let's go back into our settings and notice when we click on accounts and keys, there we go.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=45)** We have a total of 10 accounts to generate.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=49)** That's why we get 10.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=50)** Every time we launch Ganache and every account gets default, 100 ether.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=56)** So if you want to change that, you can just change it right here.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=59)** And that way you were funding all 10 accounts.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=63)** That's the easiest one.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=64)** All right, so I'm going to get out of Ganache.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=70)** So now let's go into MetaMask.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=72)** Let's click on the little MetaMask here, and we see that we have several accounts or really one account so far multiple networks.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=80)** So the main Ethereum network, we have a balance of 0.2374 ether.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=86)** Now, how did that get there?
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=87)** Well, we actually transferred ether.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=92)** from an existing account, a live real account to this account.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=96)** And the way we did it, we just simply copied to the clipboard, the public address or the public key, which is actually the address.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=104)** And we just set it to that address.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=107)** And so we did this earlier today as a matter of fact.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=110)** All right, so let's look at some other networks.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=112)** What about Robsten?
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=113)** With Robsten though, we have zero ether.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=115)** So this is going to be a problem.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=117)** We need ether in order to deploy to the Robsten test network, to fund our account from Robsten.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=124)** We need to go to the Robsten Ethereum Faucet, and it's just at faucet.robson.be, and we need to enter our Testnet account address.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=133)** All right, so let's go back to Robsten in MetaMask.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=140)** And click account one, copy to clipboard.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=144)** Now we go back to the faucet.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=149)** We paste in this address and say, send me test ether.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=154)** All right, so that gives me the transaction ID and tells me that it was sent to my account.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=159)** So let's go back to MetaMask.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=164)** And this may take a few minutes, cause remember it's several seconds, at least until a new block is added.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=171)** The other way that you can fund your account is directly from within MetaMask.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=178)** So we could do is choose deposit, scroll down and click on test faucet.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=182)** And that gives me a direct connection noticed right here.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=184)** I can click on request one ether from faucet and that initiates a new transaction as well.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=191)** That's a really easy way.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=193)** And we can see, we already have one.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=195)** That's been... there we go.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=196)** We have two.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=197)** So that was actually from the first manual deposit and our third one is pending.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=205)** So if we just watch this, it's just a few seconds and we can actually move, see where it moves from initial to pending or from pending to success.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=214)** There we go.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=217)** And actually that was our second ether.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=219)** So we have two ether.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=220)** So now you know how to fund a Ganache account.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=224)** It's in the local configuration.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=226)** You know how to fund a public test account.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=229)** We use Robsten.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=230)** You can also use other ones, but we use a faucet and you know that you have to physically buy ether to fund your main net account.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=240)** So now, regardless of what type of test blockchain environment you use, you know how to fund it.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/funding-your-account-lab?u=76281980&t=246)** And now we're ready to actually deploy our code wherever we want and then run it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (3), default, (1), this, (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Versions:** 0.2374 (1)
> **Speakers:** - okay (1)

#### Deploying to the live blockchain
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=0)** - All right, we're almost done.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=2)** All we have left to do is compile our smart contracts and then deploy them.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=6)** We've defined three separate networks, and we can compile for specific network and deploy to that network, or we can compile for everything and then deploy out to individual networks at any time.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=18)** Now, keep in mind in the truffle environment, I typically use the word deploy.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=24)** However, the word migrate is just the same, so we can use the command migrate or deploy, it's the same command you can interchange, whichever one speaks to you.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=34)** So that's what we're going to do next.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=36)** I'm going to show you how to compile your code, and then deploy it to specific environments.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=43)** And by the way, the migrate or the deploy command, what it does, is he just looks through the migrations folder and runs each of that JavaScript.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=52)** So we'll look at that first, show you what's going to happen and then we'll do it.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=55)** So this is our truffle config file, it's the same that we just left it a few moments ago.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=59)** Let's take a look at migrations.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=62)** Notice initial migrations, there's some housekeeping, that actually migrates, or actually defines the migrations.sol which is a default or a provided smart contract.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=76)** And the ones we coded our ERC 20 token and supply chain, so those are the only ones, even though we have more contracts defined, we're only going to deploy these two.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=88)** So the deploy or the migrate command is going to look through the migrations folder and run each one of these JavaScript files one by one in order, that's why I have it named one and then two, and those are the contracts that will be deployed.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=104)** So that way you can be working on a lot of contracts, but you only deploy the ones you really want to.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=109)** Okay, so we're going to do this from a terminal.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=113)** I'm going to open a new terminal and here we go.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=116)** The first thing I'm going to do, truffle, compile.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=124)** And notice that only compiled one contract, he'll compile the ones that need to be compiled.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=129)** If you really want to compile all of them, you can simply say truffle, compile all or dash dash all.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=138)** And there you go, see compiled all of them.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=141)** If you want to compile for a specific network, you can say compile all dash dash network development.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=157)** And likewise, we could say, let's say ropsten cause we've defined that one as well.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=163)** And it's going to basically do the same thing.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=170)** All right, so now we're ready to deploy, so let's try to deploy our code.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=176)** Let's go into truffle, deploy or migrate either one, to the network, oops, spelled it wrong, to the network development.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=194)** This is going to be to our ganache network.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=198)** I just launched ganache, so we see that every account has 100 ether.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=203)** So when I deploy to my development network, it's going to be the same thing as when we deployed the last time we deployed.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=214)** Now, you notice the flashing down there and it sure is taking a long time.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=220)** Earlier, it didn't take any time at all for us to deploy our application.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=224)** The reason for that remember is we changed the ganache network, the blockchain to be a non auto mining.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=233)** In other words, we turned auto mining off and we said that blocks will take 14 seconds to the mined.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=239)** So what's happening is, we're adding transactions to blocks, but those blocks are not getting mined until the end of 14 seconds.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=247)** That's why deploying takes longer using ganache with auto mining turned off.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=253)** So we kind of can expect that when we deploy to a test network or the live network, it's going to be a little slower because we have mining going on, all right?
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=265)** Let's go back and see what's happened now.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=266)** And there we go it's finally finished.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=269)** Several things are going on here.
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=270)** Number one, we have total deployments are three, and there's a cost 0.1 ether cost.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=276)** Let's go back to ganache.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=278)** And there we go, we see that our primary account has been hit 4.1 ether basically.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=284)** So this shows us that sure enough, it costs to deploy.
>
> **[4:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=289)** All right, well, let's continue the fund.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=292)** Let's deploy to ropsten.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=298)** And you notice, it goes through the entire process again, because he's compiling, making sure everything is up to date saying the network is up to date, and then he is deploying to the network that we've chosen.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=311)** Now, you may notice that it didn't take all that much time and it appears as though it didn't do much work.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=317)** It just simply said, network is up to date.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=319)** So what's with that?
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=320)** Well, I will tell you in preparing for this demo, we actually deployed to ropsten and we haven't changed anything in our smart contract.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=328)** And so what ropsten is telling us is, hey, it's already there, it's online, it's up to date.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=334)** So here's what we have to do.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=336)** Let's actually go back and reset, so that I can show you how it actually pushes new code out.
>
> **[5:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=343)** All right, so I'm going to add an option here.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=345)** I'm going to use reset and let's issue the same command again.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=353)** So what reset does, and you may have noticed I used that earlier.
>
> **[5:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=357)** Reset basically assumes that everything is new, and so it actually pushes out a new copy of the same thing.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=363)** It replaces things, but it does it as if it were a new smart contract.
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=370)** Now I could have also gone in and made a change to our contracts.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=375)** It actually changed the source code so that they would recompile and then be pushed out as new versions.
>
> **[6:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=379)** But I went ahead and just simply said, hey, let's go ahead and reset everything.
>
> **[6:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=383)** So you can see that we're spending time actually sending this out to the ropsten network.
>
> **[6:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=389)** And it's taking some time because those blocks are not going to be mined even as quickly as in ganache.
>
> **[6:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=396)** We can even see this first block has been been there for 32 seconds now.
>
> **[6:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=400)** All right, so we're done.
>
> **[6:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=402)** So we see that we've deployed to the ropsten test network.
>
> **[6:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=406)** Now let's just go take a quick look at our account in MetaMask.
>
> **[6:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=412)** Look at our ropsten balance.
>
> **[6:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=415)** It's not two anymore, we've decremented the balance a little bit.
>
> **[6:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=419)** So we see that we're actually spending our fake money on the ropsten test network to deploy our code.
>
> **[7:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=425)** So that shows that we're really interacting with the right account.
>
> **[7:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=428)** So now you know how to define multiple networks and how to deploy to multiple networks.
>
> **[7:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=434)** I didn't actually go through the whole process of deploying to the live network to main negative, it's exactly the same.
>
> **[7:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=440)** We've got them set up properly, you just simply say, truffle deploy, give the network name and boom, it takes care of everything.
>
> **[7:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=447)** So that's all that it takes.
>
> **[7:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=448)** Once you hook it up, you've got your inferior account, you have your Ethereum accounts and you you've defined the truffle config JavaScript, so that they're all linked up, it's very, very easy.
>
> **[7:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=462)** Now, you know the entire process of software development from the very beginning, all the way through deployment, and you even saw how easy it is to redeploy, to deploy additional versions of smart contracts.
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-10-deployment-and-maintenance/deploying-to-the-live-blockchain?u=76281980&t=475)** So, that pretty much wraps it up as far as the software development life cycle in Ethereum.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), continue (1), new, (1)
> **Versions:** 0.1 (1), 4.1 (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** erc (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Warnings:** keep in mind (1)


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