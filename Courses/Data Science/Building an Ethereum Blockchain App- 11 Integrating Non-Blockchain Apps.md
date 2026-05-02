---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps"
duration_minutes: 32
duration: 32m
level: Intermediate
updated: 8/25/2021
learners: 5294
skills:
  - Software Integration
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGLbdUj13DFng/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629737907530?e=2147483647&amp;v=beta&amp;t=nHR05oydI0A59mbjG8gmXaveqvFCOm7E5dEprnF9mI0"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]]'
  - '[[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]]'
next_courses:
  - null
  - '[[Blockchain for Developers- Hyperledger Fabric on Azure]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":11,"total":11,"prev":"Building an Ethereum Blockchain App- 10 Deployment and Maintenance","next":null},{"path":"Become a Blockchain Developer","position":11,"total":14,"prev":"Building an Ethereum Blockchain App- 10 Deployment and Maintenance","next":"Blockchain for Developers- Hyperledger Fabric on Azure"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/software-integration
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%2011%20Integrating%20Non-Blockchain%20Apps.md)

![Building an Ethereum Blockchain App: 11 Integrating Non-Blockchain Apps](https://media.licdn.com/dms/image/v2/C4D0DAQGLbdUj13DFng/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1629737907530?e=2147483647&amp;v=beta&amp;t=nHR05oydI0A59mbjG8gmXaveqvFCOm7E5dEprnF9mI0)

# Building an Ethereum Blockchain App: 11 Integrating Non-Blockchain Apps

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, last in a series of eleven, shows you how to integrate apps into blockchain that weren’t originally created with blockchain. Instructor Michael Solomon steps you through some special instructions and considerations for w

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps) | 32m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Integrating Non-Blockchain Apps with Ethereum**](#1-integrating-non-blockchain-apps-with-ethereum) (5 videos)
  - [Blockchain and database storage](#blockchain-and-database-storage)
  - [Execution and flow in dApps and traditional applications](#execution-and-flow-in-dapps-and-traditional-applications)
  - [Blockchain incorporation design goals](#blockchain-incorporation-design-goals)
  - [Integration considerations for incorporating blockchain](#integration-considerations-for-incorporating-blockchain)
  - [Interface considerations for incorporating blockchain](#interface-considerations-for-incorporating-blockchain)

### 1. Integrating Non-Blockchain Apps with Ethereum

[↑ Back to Table of Contents](#table-of-contents)

#### Blockchain and database storage
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=0)** - So we finished up with our supply chain smart contract.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=5)** And you may be asking yourself, what else is there?
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=7)** What's next?
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=8)** Well, Ethereum is a great resource for developing standalone apps, you can actually do quite a lot with it.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=16)** It also lends itself well to integrating with other types of apps.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=20)** Because if you think about it, even in supply chain, it may be possible or beneficial to use data that exists and is managed outside of the supply chain itself.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=33)** There's lots of peripheral data that supports the data of the products and the participants on the supply chain.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=39)** So what if we wanted our Ethereum app to actually be a part of a larger application framework.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=47)** That's certainly possible.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=49)** But there's some considerations.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=51)** So in this last chapter, we're going to talk a little bit about, what does it take to take an Ethereum app and drop it in the midst of legacy apps or even other new traditional types of apps?
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=64)** What are the integration requirements?
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=66)** First off, let's take a look at storage.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=70)** Most traditional applications use some sort of database to store the core data.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=76)** Now the database doesn't have to be a relational database system, or a NoSQL system.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=81)** It doesn't have to be a big data store.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=83)** It may just simply be a simple collection of files, flat files.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=88)** But regardless, centralized data storage is common.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=93)** When you look at moving from centralized data storage to a de-centralized environment on the blockchain, there are comparisons and contrasts between the two approaches.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=103)** First and foremost, is where is your control located?
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=107)** In centralized database environments, you have one authority that controls the central data repository.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=116)** That authority is typically a system administrator, or database administrator, or dual roles that can limit access into the central repository.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=126)** So the owner can determine who can get in and who can not.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=130)** On the other side, when you deal with a public blockchain, you have no central authority.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=136)** Now you may also say, I've heard about other types of blockchains, right?
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=139)** There's consortium and private blockchains.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=142)** Yes, that's true.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=144)** When you move blockchain to a larger type of environment, even with the Ethereum, you can implement private blockchains, which means it's owned by one entity owner, or even consortium blockchains, which is owned, quote unquote, by a collection or a consortium of organizations.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=163)** And those are all valid as well.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=164)** However, in blockchain, unless it's a truly private blockchain, you don't have central control over who can access the data in the blockchain.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=174)** So that's one of the biggest differences.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=176)** Data format is quite a bit different as well.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=179)** Because in a database, well, most databases, you typically have a schema that imposes specific data format requirements.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=188)** In other words, to add new data to the database or the data repository, it must be in certain format.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=195)** From blockchain environment, you really don't have any format.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=199)** It's technically free form.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=201)** Now the smart contracts do impose some sort of data standard, but you don't have one type of smart contract.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=209)** You can have lots of different smart contracts that are storing data in lots of different formats.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=214)** And if it's a public blockchain, you really don't have any control over whose story, what, where, and in what format.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=221)** Another issue is that of updating data.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=224)** This is a huge difference between how we store data in a traditional manner and in blockchain.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=230)** In a traditional data repository environment, you basically follow the CRUD operations.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=235)** You create data, you can read data.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=237)** Of course, blockchain does that.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=239)** But you can also update data, which means if we decide when to change data in a record, I can just go update it and overwrite what was there.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=246)** That's good because you're economizing space, but you lose the old changes.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=251)** And then of course, if I want to get rid of data, I can delete that data.
>
> **[4:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=255)** In a blockchain environment, all you can do is write, add a new block, and then you can read from that block later on.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=262)** If you want to modify the data, you have to add another transaction, and probably in a subsequent blocks.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=267)** So now you have two copies of data, at least on the blockchain.
>
> **[4:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=271)** That is bad because it does not economize any storage space.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=275)** But it's great because now you have an audit trail of all the changes that occurred.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=281)** They occur within the context of a transaction.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=284)** So that means you also have the transaction header information, i.e. timestamps.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=288)** So it's great for audit trails.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=290)** So again, one difference.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=292)** So if you're keeping track of all the things that blockchain is doing, and you are paying attention to the fact that it's all decentralized, you may be thinking, how fast is that?
>
> **[5:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=302)** That's one of the big differences between traditional systems and blockchain systems as well.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=308)** Today it is.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=310)** Basically blockchain environments are going to be less reactive.
>
> **[5:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=314)** They're going to be slower for several reasons.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=317)** Number one, we had the decentralized nature of having to copy that... Well, not necessarily copy the data, but distribute the data to many different nodes.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=326)** They have to process the smart contracts on all the nodes, and they have to validate all the blocks.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=333)** Additionally, you have the normal network overhead of dealing with a network, whereas in a central environment, you're writing to one highly optimized data repository.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=344)** Lots of research has been been undertaken in the last three decades on how to make databases faster and faster and faster.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=352)** And so you've got a lot of very high performance data access in a regular database.
>
> **[5:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=358)** Blockchain, we're getting there.
>
> **[6:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=360)** It's getting faster, tweaking the consensus mechanisms, tweaking the amount of time between new block ads, and decreasing any weights among all the nodes.
>
> **[6:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=372)** So it's getting better, but it's not quite there yet.
>
> **[6:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=374)** But just wait.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=375)** Hopefully, one day there'll be on par, databases and blockchain environments.
>
> **[6:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=380)** Not done yet.
>
> **[6:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=381)** We have more differences in how we contrast storing data in blockchain and non blockchain.
>
> **[6:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=387)** What about confidentiality?
>
> **[6:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=389)** Protecting confidentiality is harder in a blockchain environment, at least in a public blockchain environment.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=395)** It's a lot harder.
>
> **[6:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=396)** The reason for that is that everybody has access to the data.
>
> **[6:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=400)** In a traditional data store, (indistinct)you tip, we have a governing authority that can very dramatically cut down on people that can get in.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=411)** In other words, they apply access controls.
>
> **[6:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=414)** And they can control who gets in to access the data.
>
> **[6:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=418)** At least they try to, of course we know about big databases that have been hacked.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=421)** So it's not perfect, but it's a lot easier than it is in a public blockchain.
>
> **[7:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=426)** In a public blockchain, the only way you can really enforce confidentiality is through encryption.
>
> **[7:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=432)** Now we hear that blockchains are all encrypted.
>
> **[7:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=435)** That's really not true.
>
> **[7:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=436)** Blockchains are based on cryptography.
>
> **[7:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=439)** That's not necessarily encryption.
>
> **[7:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=441)** There's other aspects of cryptography, such as hashing.
>
> **[7:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=444)** That's why it's such an integral part.
>
> **[7:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=447)** If you want to implement confidentiality, you have to implement encryption.
>
> **[7:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=452)** That's easy to do.
>
> **[7:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=453)** But the problem comes into sharing the keys.
>
> **[7:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=457)** If you want someone else to be able to read your encrypted data on the blockchain, you have to make sure that person has access to the key to unlock it.
>
> **[7:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=466)** That becomes problematic 'cause then you have the whole key management issue.
>
> **[7:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=469)** So it's possible, but it takes a little bit more management.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=473)** Also, paying for storage.
>
> **[7:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=474)** Again, in a database you don't directly pay for storage.
>
> **[7:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=478)** Now I say directly, because the organization that owns this massive database has to pay for the care and the feeding of that database.
>
> **[8:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=486)** Databases don't just run by themselves forever.
>
> **[8:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=488)** You actually have to maintain them.
>
> **[8:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=490)** You need personnel to make sure that they're always up and available.
>
> **[8:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=494)** You have hardware costs, or perhaps if in there in the cloud, you have subscription costs.
>
> **[8:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=499)** So there are costs, but not direct data access costs.
>
> **[8:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=504)** In a blockchain, on the other side, you have to pay for every access to the blockchain.
>
> **[8:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=509)** You have to pay with cryptocurrency.
>
> **[8:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=512)** What about integrity and transparency?
>
> **[8:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=514)** Now I've talked a lot about the negatives of a blockchain.
>
> **[8:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=516)** So here's a place where blockchain really shines.
>
> **[8:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=519)** Blockchain data has transparent data all across the blockchain, because in public environments, it's all there.
>
> **[8:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=526)** You can see anything.
>
> **[8:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=528)** You can read anything out of the blockchain.
>
> **[8:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=530)** Of course, if it's encrypted and you don't have the key, you can't see that.
>
> **[8:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=533)** But everything else you can see.
>
> **[8:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=534)** In a traditional database, you have only access to whatever the database owner gives you access to.
>
> **[9:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=542)** Integrity.
>
> **[9:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=543)** There are some integrity guarantees that are added on to databases and can be fairly strong, but we know we can trust the integrity of blockchain just because of the technology and the consensus algorithm.
>
> **[9:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=556)** And the fact that we use hashing that are embedded in the block links, so that if anybody changes anything, it's obvious.
>
> **[9:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=564)** So we get integrity for free in blockchain.
>
> **[9:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=567)** And lastly, resilience.
>
> **[9:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=570)** Resilience is also something else we get for free in blockchain.
>
> **[9:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=574)** Because all of the nodes are all operating.
>
> **[9:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=577)** They run the same code.
>
> **[9:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=578)** They have the same blockchain locally.
>
> **[9:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=582)** And if one node goes out of business or one node stops operating, all the other nodes keep operating.
>
> **[9:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=589)** You don't miss a small number of nodes that detached from the network for any reason.
>
> **[9:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=595)** On a traditional environment, providing resilience is an expensive endeavor.
>
> **[10:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=600)** It costs performance.
>
> **[10:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=601)** It costs storage space.
>
> **[10:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=603)** And it costs money, just to buy more hardware, or to subscribe to a new cloud image somewhere.
>
> **[10:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=609)** It takes effort.
>
> **[10:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=611)** And you always want to make sure that it's kept up to date.
>
> **[10:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=614)** So providing resilience in a traditional environment is a whole lot harder, but you get it for free in blockchain.
>
> **[10:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=621)** So those are just some of the differences between a traditional data repository environment and application that sits on top of that, and how you store data in blockchain.
>
> **[10:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=633)** Now just the storage differences are pretty stark.
>
> **[10:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=637)** But there's also differences in how you write your code and how your code runs.
>
> **[10:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=640)** We'll look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (39), [[Blockchain]] (37), database (13), [[Databases]] (6), [[Ethereum]] (4)
> **CLI Commands:** make (4), node (2)
> **Definitions:** is a  (3), in other words (2), is an  (1)
> **Env Vars:** crud (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Speakers:** - so (1)

#### Execution and flow in dApps and traditional applications
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=0)** - All right, so we just talked a little bit about how storing data differs between traditional data, repository applications, and blockchain.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=9)** But how about the execution flow of the application itself?
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=13)** When you write traditional applications, they tend to be more centralized in nature, not only from the storage, but also the processing.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=22)** Now, in the old version of computer architecture, we typically ran everything on one host, so that was very early in the migration toward distribution and decentralization.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=35)** So everything ran on one machine and all the users ran locally on this big machine.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=41)** Well, we moved away from that fairly quickly into a client server mode, then to n-tier and to more decentralized models, but as we moved away, we still kind of maintain that common touch or central touch, so that we share our data from the common repository, and we make the assumption that we have some level of closeness with other peers that are operating in the same environment.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=70)** In other words, if you're running an application, it's not uncommon to establish some sort of communication between the components, and maybe even between the peers.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=79)** This could be through a database, this could be through some other side channel, but there's some level of centralization we can count on, and some sort of central control.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=89)** On the other side, when we deal with blockchain, we depend on de-centralization, where there is no centralized control.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=98)** All of the invocations of touchpoints to the blockchain tend to be very asynchronous and detached.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=107)** In other words, it's more like a web application, where you send a request, you get a response, and then you do something locally, and only when you need to interact with the blockchain do you reach out and ask for more information.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=120)** The difference between those two means that, in a way, blockchain clients operate kind of as solo artists.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=128)** They work by themselves and they only reach out when they need to, and it's just a different way of developing an application.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=135)** It's also one that depends on the fact of an asynchronous, granular invocation, means that you reach out, you grab one piece of data, you do something with it, and then you come back and ask again.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=149)** That may or may not cause additional delays.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=153)** If we look into the traditional environment, we typically have the ability that we're connected to a database, and so we can rewrite, rewrite, rewrite very quickly, we can read batches of data, we can put things back in, and having a close access... We're directly connected to the database in a way that makes it easy for us to interact.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=174)** Again, blockchain, decentralized.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=177)** We're not connected to the database directly, we have to kind of ask our questions one at a time and have somebody serve it up to us.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=185)** For that reason, response times tend to be a little bit longer on the blockchain side.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=191)** You'll recall, when we deployed to a live network, we had to wait for it for a while before we could actually go out there, and when I say live, I mean, even the Ropsten network that we used.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=202)** When we deployed out to it, we had to wait until the miners actually mined the blocks and then responded back to us.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=208)** So there are wait times involved, which we wouldn't see in a traditional environment.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=213)** For that reason, your smart contracts need to be designed in a way that minimizes these user waits.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=221)** What you really want to have happen is all of your user I/O is collected after the users submit something and they're ready to move to something else, then you go out and you do something that may take a while to respond back.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=235)** At that point, hopefully your users have moved on and they're doing something else.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=240)** Then you can use an event to come back and trigger it, and you could just tell the users, hey, by the way, your previous action was just completed.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=249)** But try not to make users wait for something to be completed.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=253)** Like, when we deployed to the Ropsten network, we had to sit there, y'know, drumming on the desk, while we waited for everything to complete.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=261)** You don't want to do that in most of your application design.
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=265)** So those are just a few things to look at when you start considering the differences between blockchain and a centralized application environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (8), data (5), application (5), database (4), [[Decentralization]] (1)
> **Definitions:** in other words (2), means that (2)
> **CLI Commands:** make (2)
> **Speakers:** - all (1)

#### Blockchain incorporation design goals
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=0)** - Okay, let me take just a minute to kind of reframe the whole blockchain technology discussion.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=6)** blockchain technology in one important way is the same as Cloud computing.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=11)** And you may think, wow, that's really kind of weird and kind of a stretch, but here's what I mean by that blockchain just like cloud is a term that has a lot of traction and people think it's really cool and hot.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=23)** And if we could just put that word into our marketing collateral, we're going to make money.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=28)** So you see, you hear people over and over saying, we're going to get into blockchain technology and I'll have people come to me and ask me, can you help us implement blockchain technology?
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=38)** And what I try to do is ask the question, do you really need blockchain?
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=44)** Because in my opinion, the answer is no more often than it's yes, but in those environments where blockchain is a good fit, it is an incredible fit that how do I know?
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=55)** Let's take a look at a few goals of implementing blockchain technology.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=59)** And if you can ask yourself these questions and check off, most of them, chances are blockchain is a good fit for you.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=67)** So first off blockchain can address application shortcomings.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=71)** So the question you ask yourself is can I get beyond some of the drawbacks and shortcomings of my traditional application by using blockchain technology?
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=82)** Maybe you can, maybe one of the issues you're having is you need to trace changes to data over time.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=90)** Well, blockchain can absolutely do that.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=92)** That's a great fit for it.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=93)** Or maybe you want to be able to track the ownership of particular digital assets.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=99)** Well, that sounds like supply chain, right?
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=101)** That's why supply chain is such a great use case for blockchain technology because it helps enterprises address application shortcomings.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=110)** Next, what about not just address shortcomings, but can blockchain technology allow you to introduce previously unavailable features?
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=119)** Well, maybe so.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=120)** In fact, some of those features I just mentioned could be features you can't get to at all in your existing application.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=127)** So in some cases, blockchain lets us do lots and lots of new things.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=132)** Also any new technology should enhance the user experience.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=137)** Blockchain is so very cool in so many ways, but if it's going to make it harder for your users, it's not something that's going to be successful in your organization long-term so you want to make sure that everything you roll out blockchain or anything else at the end of the day enhances the user experience.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=155)** So how would it enhance the user experience, maybe providing more detail than they ever had.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=161)** Think about this.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=162)** What if we implemented supply chain and we have an app so that any of your produce, and maybe it's a hosted app by a particular grocery store, but if you use their app, you can scan their produce and you could find out exactly where it came from.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=179)** And when it was shipped, when it was picked, that would be something that would dramatically increase the richness of the user experience.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=188)** blockchain can do that, but make sure that you map your design goals to what blockchain is able to actually deliver.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=196)** What about reducing operational costs?
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=200)** Even though we talk about the fact that blockchain data and the access to the blockchain has a cost associated with it, you can still dramatically reduce operational costs in two different areas.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=211)** Number one, you can remove middlemen.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=214)** This is called disintermediation.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=217)** If you take middlemen away from the process, they don't need to take their cut anymore.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=223)** If you can remove the process of a human validating or moving anything along in some sort of process, you will reduce personnel costs and you'll reduce overall charge cost.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=235)** Additionally, you can decrease operational cost by increasing autonomy and automation.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=242)** There's lots of different areas for this.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=245)** And it goes hand in hand with robotics, but it doesn't always have to be dependent on specific robots.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=251)** Smart contracts in and of themselves can make decisions that humans previously made so that both removes middlemen and increases the effectiveness of the whole supply chain.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=264)** If that's what we're dealing with or the process by automating pieces of it.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=269)** So you can reduce the operational costs by increasing automation through the use of smart contracts.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=275)** And lastly, you can also not can, if you implement blockchain, you're almost invariably going to increase auditability and the ability to demonstrate compliance with many different regulations or standards.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=291)** The reason for that is we have a track of every data change that's ever occurred.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=296)** And programming change with respect to the smart contracts.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=301)** You automatically get this very rich audit trail with complete non-repudiation.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=307)** In other words, everything that happens on the blockchain, you can tell when it happened, what the previous edition of that data was, who did it.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=316)** So you get lots of information.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=317)** The transactions within each block gives you tons of information.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=321)** So it dramatically increases auditability.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=324)** And it makes the auditors, especially when they're doing your compliance audit, very happy because they don't have to work hard to find all this rich information of the history of how your data got to be where it is today.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=335)** So stay true to your design goals, make sure that blockchain is a good fit because if it's a good fit, it'll probably be a great fit for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (24), data (5), application (4), [[User Experience (UX)|User experience]] (4), [[Smart Contracts]] (3)
> **CLI Commands:** make (6), find (2)
> **Definitions:** is a  (4), is an  (1), is called (1), in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - okay (1)

#### Integration considerations for incorporating blockchain
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=0)** - So, you've already decided that blockchain technology is a good fit for your organization and specific use cases.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=8)** Once you make that determination, moving forward should be fun, but you want to make sure that you do it in the right way.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=14)** You don't want to just try to drop a solution in the middle of a traditional application and expect it to work well.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=20)** You have to plan it well, and to plan it well, you want to really consider the interface, and integration landscape so let's take a look, as we wrap up all this wonderful discussion of Ethereum, at the interface and integration considerations.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=36)** Here's a few best practices and high-level goals that you want to keep in top of mind.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=41)** First off, you have to consider the design.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=44)** Now we've talked a lot about the different design aspects of storage and flow control, but you also want to think about how is this new application component going to fit into my overall structure?
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=57)** What is it going to do, is it going to take away functionality, or replace functionality or hopefully add new functionality?
>
> **[1:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=65)** Be aware of decentralization in your design.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=70)** Again, we've talked about this before, but this is one of the things you want to keep in top of mind.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=75)** Decentralization has caveats with it.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=78)** So, make sure you're paying attention to timing issues.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=81)** And the fact that any data that you put in the blockchain is no longer going to be kept inside a silo.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=88)** That, hopefully, is one of the design features of your application and not one of the drawbacks that you're going to have to encounter.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=95)** But design upfront for decentralization.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=100)** All right so, how do we fit things in to an existing application?
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=105)** Even if it's going to be new functionality, you want to carefully document the processes of your existing application, and the processes of your proposed blockchain application, and align those processes as closely as possible.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=121)** For example, you don't want to roll out a new blockchain feature that pokes a hole in the middle of an existing process.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=130)** Let's assume that we have an order entry process, and it normally takes one and a half seconds to commit an order, okay, let's say it's a big process.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=138)** A big, big order one and a half seconds is traditional.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=141)** Now though, you're going to integrate that order entry process with blockchain, so the orders are being added to the blockchain.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=149)** Now, if you're using Ethereum, and you write your application to wait for the confirmation, we're talking about 14 or 15 seconds potentially.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=159)** So, now when you commit an order, if you're not aligning your processes properly, and really thinking it through, you may cause an existing process to hang, or wait until something else happens to complete.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=173)** So, again, you want to align these processes, so that your new application does not slow down or hopefully, even worse, not break existing processes.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=182)** Once you determine what you're going to do, and how you're going to do it, you want to do a little bit of a survey to see what services are already out there.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=193)** Don't reinvent the wheel, don't rewrite something in blockchain just because you can.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=199)** If there's a perfectly good service that's waiting out there that you can call with an API, maybe it's internal to your organization, or maybe somebody else already wrote it, and you can just invoke it, and it does exactly what you want, and the cost is right, then use that instead.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=214)** So, make sure you're aware of all the existing services that exist before you haul off, and start writing everything from scratch.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=222)** One of the big design goals that you need to keep in mind is identity because identity in a blockchain environment is completely different from identity in any other environment.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=236)** First off, identities are associated with accounts, and there really is no association.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=241)** There's just an account in Ethereum.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=243)** So then you want to ask yourself, "Do I map an identity from an existing system "to an Ethereum account, and do I have "a one to many relationship?"
>
> **[4:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=255)** In other words, can one identity from my traditional application map to more than one Ethereum account?
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=262)** Those are some questions you have to ask.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=264)** Do you map 'em in the first place?
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=266)** Do you map one to many, or do you have them restricted?
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=270)** Typically, you want to map in some way, because that's the only way to complete the cycle of non-repudiation.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=277)** You know what account carried out an action.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=280)** But if you cannot associate that account with a real identity, then you don't get that richness of being able to audit activities that then span into your traditional application and your traditional data store.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=294)** So you, typically, want to have some sort of correlation between external entities, i.e. traditional application, and then the internal Ethereum accounts.
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=304)** So, that's something that you'll need to consider, even if you just consider whether you want to map the accounts, how are you going to do it?
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=310)** Where are you going to store the mapping?
>
> **[5:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=312)** How are you going to store them securely?
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=315)** And what happens if an external identity ceases to exist?
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=320)** Like what if somebody leaves your organization?
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=322)** Do you remove their user account here?
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=325)** What happens to all the data on the blockchain?
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=328)** Well, you can answer that, nothing happens to the data on the blockchain.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=331)** Do you store an archive record, or do you just break that link and let the data go orphaned on your blockchain?
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=339)** Again, those are some considerations in identity mapping And lastly, integration design patterns are very, very helpful when you start introducing new application components, especially at the enterprise level.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=353)** What you want to try to do is develop a strategy so that you reuse the same look and feel of your integration, of your APIs, so that every API doesn't look different, and you don't have to rewrite everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (12), [[Blockchain]] (11), [[Ethereum]] (6), data (5), [[Decentralization]] (3)
> **CLI Commands:** make (4)
> **Env Vars:** api (2)
> **Definitions:** is a  (1), in other words (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - so (1)

#### Interface considerations for incorporating blockchain
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=1)** - So, we're talking a little bit about interfaces.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=4)** Whenever you integrate an application with another application, you're going to have to integrate the data through some sort of interfaces, not only data, but also functionality.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=15)** You typically are going to create a layer of services and APIs and API calls to communicate back and forth.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=24)** So you need to identify these touch points.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=26)** When does the blockchain application need to communicate with your traditional application?
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=31)** And in this model, you're typically going to find that your traditional application is the client and the blockchain application, your smart contracts would be the server side.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=42)** So you're probably going to initiate your interactions from the client side, from the traditional application side.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=49)** So at what point do I need to call smart contract functionality?
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=54)** What do you want the interface to do?
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=56)** What data must I provide to this interface?
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=59)** And what data must the interface provide back to me?
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=63)** Now, it sounds like we're just defining an API, which in some cases it kind of is, but don't forget that we can also define events that are emitted from the smart contract side, and that can be trapped or intercepted, subscribed to on the client side.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=81)** So it's not just about the function calls, but it's also about using the richness of the events that come back, and remember too, events can be searched.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=90)** So you can look at historical events as well.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=94)** Okay, so integration has several high level considerations.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=99)** There's a lot of ways in which you can get down in the weeds and it gets really frustrating, confusing, there's a lot of details, but try to think on a higher layer and always every time you have a decision, especially when introducing blockchain, you want to focus on the reliability, the availability and the serviceability of each application component.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=123)** Everything that you do in blockchain, is it reliable?
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=126)** Is it something that you know is going to work the same way every time with good enough performance, that it will support your existing application?
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=135)** If the answer to that is yes, it's a good starting design.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=139)** Then, is it serviceable?
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=141)** This is something that's a kind of a big deal in that, even though you have the best API layer, the best smart contract functions, and it does everything you want today, isn't going to do everything you want a month from now or a year from now.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=156)** As your outside application migrates or matures, and maybe even your smart contracts mature, they may morph into something that provides slightly different functionality.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=167)** Are you going to be able to service and update those so that it continues to integrate well?
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=172)** Is it going to break old data on the blockchain?
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=176)** And of course, availability.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=179)** Is it available easily to integrate with your existing system?
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=183)** If you have a 24 7 system, you need to make sure that your blockchain has that level of resilience.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=189)** We know that blockchains are resilient by design, but you want to make sure that the interface is resilient and is always available.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=196)** You don't want your application to just time out waiting on a blockchain, that for some reason is not available.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=204)** So those are the high level characteristics you want to make sure that you ensure.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=209)** All right, believe it or not, that's it.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=212)** We've covered a lot of ground.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=214)** Basically, you know how to learn all the aspects of what Ethereum is all about.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=220)** You know how to build your development environment.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=223)** You know how to write smart contract code, how to test it, how to deploy it, how to deploy to different types of networks.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=231)** You pretty much have all the building blocks to go out and start building your own application.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=236)** We talked about some of the building blocks for designing the right interface to integrate it into an existing application, or you can write your own.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=246)** Either way, you're ready to take the Ethereum world by storm and go out and have some fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (13), [[Blockchain]] (7), data (5), api (3), [[Smart Contracts]] (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** api (3)
> **Cross-References:** we talked about (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - so (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Software Integration
- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] | **11 of 11**

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] | **11 of 14** | [[Blockchain for Developers- Hyperledger Fabric on Azure]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] — Blockchain, Ethereum

---

[↑ Back to top](#)