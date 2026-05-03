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
created: 2026-05-03
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

#### [Blockchain and database storage](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=0)** - So we finished up with our supply chain smart contract. And you may be asking yourself, what else is there? What's next? Well, [[Ethereum]] is a great resource for developing standalone apps, you can actually do quite a lot with it. It also lends itself well to integrating with other types of apps. Because if you think about it, even in supply chain, it may be possible or beneficial to use data that exists and is managed outside of the supply chain itself. There's lots of peripheral data that supports the data of the [[Microsoft Products|products]] and the participants on the supply chain. So what if we wanted our Ethereum app to actually be a part of a larger application framework. That's certainly possible. But there's some considerations. So in this last chapter, we're going to talk a little bit about, what does it take to take an Ethereum app and drop it in the midst of legacy apps or even other new traditional types of apps? What are the integration requirements? First off, let's take a look at storage. Most traditional applications use some sort of database to store the core data. Now the database doesn't have to be a relational database system, or a [[NoSQL]] system. It doesn't have to be a [[Big Data]] store. It may just simply be a simple collection of files, flat files. But regardless, centralized [[Data Storage]] is common. When you look at moving from centralized data storage
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=96)** to a de-centralized environment on the [[Blockchain]], there are comparisons and contrasts between the two approaches. First and foremost, is where is your control located? In centralized database environments, you have one authority that controls the central data repository. That authority is typically a system administrator, or database administrator, or dual roles that can limit access into the central repository. So the owner can determine who can get in and who can not. On the other side, when you deal with a public blockchain, you have no central authority. Now you may also say, I've heard about other types of blockchains, right? There's consortium and private blockchains. Yes, that's true. When you move blockchain to a larger type of environment, even with the Ethereum, you can implement private blockchains, which means it's owned by one entity owner, or even consortium blockchains, which is owned, quote unquote, by a collection or a consortium of organizations. And those are all valid as well. However, in blockchain, unless it's a truly private blockchain, you don't have central control over who can access the data in the blockchain. So that's one of the biggest differences. Data format is quite a bit different as well. Because in a database, well, most [[Databases]], you typically have a schema that imposes specific data format requirements. In other words,
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=188)** to add new data to the database or the data repository, it must be in certain format. From blockchain environment, you really don't have any format. It's technically free form. Now the [[Smart Contracts]] do impose some sort of data standard, but you don't have one type of smart contract. You can have lots of different smart contracts that are storing data in lots of different formats. And if it's a public blockchain, you really don't have any control over whose story, what, where, and in what format. Another issue is that of updating data. This is a huge difference between how we store data in a traditional manner and in blockchain. In a traditional data repository environment, you basically follow the CRUD operations. You create data, you can read data. Of course, blockchain does that. But you can also update data, which means if we decide when to change data in a record, I can just go update it and overwrite what was there. That's good because you're economizing space, but you lose the old changes. And then of course, if I want to get rid of data, I can delete that data. In a blockchain environment, all you can do is write, add a new block, and then you can read from that block later on. If you want to modify the data, you have to add another transaction, and probably in a subsequent blocks. So now you have two copies of data, at least on the blockchain. That is bad because it does not economize any storage space. But it's great because now you have an audit trail of all the changes that occurred. They occur within the context of a transaction.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=284)** So that means you also have the transaction header information, i.e. timestamps. So it's great for audit trails. So again, one difference. So if you're keeping track of all the things that blockchain is doing, and you are paying attention to the fact that it's all decentralized, you may be thinking, how fast is that? That's one of the big differences between traditional systems and blockchain systems as well. Today it is. Basically blockchain environments are going to be less reactive. They're going to be slower for several reasons. Number one, we had the decentralized nature of having to copy that... Well, not necessarily copy the data, but distribute the data to many different nodes. They have to process the smart contracts on all the nodes, and they have to validate all the blocks. Additionally, you have the normal network overhead of dealing with a network, whereas in a central environment, you're writing to one highly optimized data repository. Lots of research has been been undertaken in the last three decades on how to make databases faster and faster and faster. And so you've got a lot of very high performance data access in a regular database. Blockchain, we're getting there. It's getting faster, tweaking the consensus mechanisms, tweaking the amount of time between new block ads, and decreasing any weights among all the nodes. So it's getting better, but it's not quite there yet. But just wait.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=375)** Hopefully, one day there'll be on par, databases and blockchain environments. Not done yet. We have more differences in how we contrast storing data in blockchain and non blockchain. What about confidentiality? Protecting confidentiality is harder in a blockchain environment, at least in a public blockchain environment. It's a lot harder. The reason for that is that everybody has access to the data. In a traditional data store, (indistinct)you tip, we have a governing authority that can very dramatically cut down on people that can get in. In other words, they apply access controls. And they can control who gets in to access the data. At least they try to, of course we know about big databases that have been hacked. So it's not perfect, but it's a lot easier than it is in a public blockchain. In a public blockchain, the only way you can really enforce confidentiality is through encryption. Now we hear that blockchains are all encrypted. That's really not true. Blockchains are based on [[Cryptography]]. That's not necessarily encryption. There's other aspects of cryptography, such as hashing. That's why it's such an integral part. If you want to implement confidentiality, you have to implement encryption. That's easy to do. But the problem comes into sharing the keys. If you want someone else to be able to read your encrypted data on the blockchain, you have to make sure that person has access to the key to unlock it. That becomes problematic
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=467)** 'cause then you have the whole key management issue. So it's possible, but it takes a little bit more management. Also, paying for storage. Again, in a database you don't directly pay for storage. Now I say directly, because the organization that owns this massive database has to pay for the care and the feeding of that database. Databases don't just run by themselves forever. You actually have to maintain them. You need personnel to make sure that they're always up and available. You have [[Hardware]] costs, or perhaps if in there in the cloud, you have subscription costs. So there are costs, but not direct data access costs. In a blockchain, on the other side, you have to pay for every access to the blockchain. You have to pay with [[Cryptocurrency]]. What about integrity and transparency? Now I've talked a lot about the negatives of a blockchain. So here's a place where blockchain really shines. Blockchain data has transparent data all across the blockchain, because in public environments, it's all there. You can see anything. You can read anything out of the blockchain. Of course, if it's encrypted and you don't have the key, you can't see that. But everything else you can see. In a traditional database, you have only access to whatever the database owner gives you access to. Integrity. There are some integrity guarantees that are added on to databases and can be fairly strong, but we know we can trust the integrity of blockchain just because of the technology and the consensus algorithm. And the fact that we use hashing that are embedded in the block links,
>
> **[9:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-and-database-storage?u=76281980&t=561)** so that if anybody changes anything, it's obvious. So we get integrity for free in blockchain. And lastly, resilience. Resilience is also something else we get for free in blockchain. Because all of the nodes are all operating. They run the same code. They have the same blockchain locally. And if one node goes out of business or one node stops operating, all the other nodes keep operating. You don't miss a small number of nodes that detached from the network for any reason. On a traditional environment, providing resilience is an expensive endeavor. It costs performance. It costs storage space. And it costs money, just to buy more hardware, or to subscribe to a new cloud image somewhere. It takes effort. And you always want to make sure that it's kept up to date. So providing resilience in a traditional environment is a whole lot harder, but you get it for free in blockchain. So those are just some of the differences between a traditional data repository environment and application that sits on top of that, and how you store data in blockchain. Now just the storage differences are pretty [[Stark (Accessibility Software)|stark]]. But there's also differences in how you write your code and how your code runs. We'll look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (37), [[Databases]] (6), [[Ethereum]] (4), [[Smart Contracts]] (3), [[Data Storage]] (2)
> **CLI Commands:** make (4), node (2)
> **Definitions:** is a  (3), in other words (2), is an  (1)
> **Env Vars:** crud (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Speakers:** - so (1)

#### [Execution and flow in dApps and traditional applications](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=0)** - All right, so we just talked a little bit about how storing data differs between traditional data, repository applications, and [[Blockchain]]. But how about the execution flow of the application itself? When you write traditional applications, they tend to be more centralized in nature, not only from the storage, but also the processing. Now, in the old version of computer architecture, we typically ran everything on one host, so that was very early in the migration toward distribution and [[Decentralization]]. So everything ran on one machine and all the users ran locally on this big machine. Well, we moved away from that fairly quickly into a client server mode, then to n-tier and to more decentralized models, but as we moved away, we still kind of maintain that common touch or central touch, so that we share our data from the common repository, and we make the assumption that we have some level of closeness with other peers that are operating in the same environment. In other words, if you're running an application, it's not uncommon to establish some sort of communication between the components, and maybe even between the peers. This could be through a database, this could be through some other side channel, but there's some level of centralization we can count on, and some sort of central control. On the other side, when we deal with blockchain, we depend on de-centralization,
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=95)** where there is no centralized control. All of the invocations of touchpoints to the blockchain tend to be very asynchronous and detached. In other words, it's more like a web application, where you send a request, you get a response, and then you do something locally, and only when you need to interact with the blockchain do you reach out and ask for more information. The difference between those two means that, in a way, blockchain clients operate kind of as solo artists. They work by themselves and they only reach out when they need to, and it's just a different way of developing an application. It's also one that depends on the fact of an asynchronous, granular invocation, means that you reach out, you grab one piece of data, you do something with it, and then you come back and ask again. That may or may not cause additional delays. If we look into the traditional environment, we typically have the ability that we're connected to a database, and so we can rewrite, rewrite, rewrite very quickly, we can read batches of data, we can put things back in, and having a close access... We're directly connected to the database in a way that makes it easy for us to interact. Again, blockchain, decentralized. We're not connected to the database directly, we have to kind of ask our questions one at a time and have somebody serve it up to us. For that reason, response times tend to be
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/execution-and-flow-in-dapps-and-traditional-applications?u=76281980&t=188)** a little bit longer on the blockchain side. You'll recall, when we deployed to a live network, we had to wait for it for a while before we could actually go out there, and when I say live, I mean, even the Ropsten network that we used. When we deployed out to it, we had to wait until the miners actually mined the blocks and then responded back to us. So there are wait times involved, which we wouldn't see in a traditional environment. For that reason, your [[Smart Contracts]] need to be designed in a way that minimizes these user waits. What you really want to have happen is all of your user I/O is collected after the users submit something and they're ready to move to something else, then you go out and you do something that may take a while to respond back. At that point, hopefully your users have moved on and they're doing something else. Then you can use an event to come back and trigger it, and you could just tell the users, hey, by the way, your previous action was just completed. But try not to make users wait for something to be completed. Like, when we deployed to the Ropsten network, we had to sit there, y'know, drumming on the desk, while we waited for everything to complete. You don't want to do that in most of your application design. So those are just a few things to look at when you start considering the differences between blockchain and a centralized application environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (8), [[Decentralization]] (1), [[Smart Contracts]] (1)
> **Definitions:** in other words (2), means that (2)
> **CLI Commands:** make (2)
> **Speakers:** - all (1)

#### [Blockchain incorporation design goals](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=0)** - Okay, let me take just a minute to kind of reframe the whole [[Blockchain]] technology discussion. blockchain technology in one important way is the same as [[Cloud Computing]]. And you may think, wow, that's really kind of weird and kind of a stretch, but here's what I mean by that blockchain just like cloud is a term that has a lot of traction and people think it's really cool and hot. And if we could just put that [[Microsoft Word|word]] into our marketing collateral, we're going to make money. So you see, you hear people over and over saying, we're going to get into blockchain technology and I'll have people come to me and ask me, can you help us implement blockchain technology? And what I try to do is ask the question, do you really need blockchain? Because in my opinion, the answer is no more often than it's yes, but in those environments where blockchain is a good fit, it is an incredible fit that how do I know? Let's take a look at a few goals of implementing blockchain technology. And if you can ask yourself these questions and check off, most of them, chances are blockchain is a good fit for you. So first off blockchain can address application shortcomings. So the question you ask yourself is can I get beyond some of the drawbacks and shortcomings of my traditional application by using blockchain technology? Maybe you can, maybe one of the issues you're having is you need to trace changes to data over time. Well, blockchain can absolutely do that. That's a great fit for it.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=93)** Or maybe you want to be able to track the ownership of particular digital assets. Well, that sounds like supply chain, right? That's why supply chain is such a great use case for blockchain technology because it helps enterprises address application shortcomings. Next, what about not just address shortcomings, but can blockchain technology allow you to introduce previously unavailable features? Well, maybe so. In fact, some of those features I just mentioned could be features you can't get to at all in your existing application. So in some cases, blockchain lets us do lots and lots of new things. Also any new technology should enhance the [[User Experience (UX)|user experience]]. Blockchain is so very cool in so many ways, but if it's going to make it harder for your users, it's not something that's going to be successful in your organization long-term so you want to make sure that everything you roll out blockchain or anything else at the end of the day enhances the user experience. So how would it enhance the user experience, maybe providing more detail than they ever had. Think about this. What if we implemented supply chain and we have an app so that any of your produce, and maybe it's a hosted app by a particular grocery store, but if you use their app, you can scan their produce and you could find out exactly where it came from. And when it was shipped, when it was picked, that would be something that would dramatically increase the richness of the user experience.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=188)** blockchain can do that, but make sure that you map your design goals to what blockchain is able to actually deliver. What about reducing operational costs? Even though we talk about the fact that blockchain data and the access to the blockchain has a cost associated with it, you can still dramatically reduce operational costs in two different areas. Number one, you can remove middlemen. This is called disintermediation. If you take middlemen away from the process, they don't need to take their cut anymore. If you can remove the process of a human validating or moving anything along in some sort of process, you will reduce personnel costs and you'll reduce overall charge cost. Additionally, you can decrease operational cost by increasing autonomy and automation. There's lots of different areas for this. And it goes hand in hand with robotics, but it doesn't always have to be dependent on specific robots. [[Smart Contracts]] in and of themselves can make decisions that humans previously made so that both removes middlemen and increases the effectiveness of the whole supply chain. If that's what we're dealing with or the process by automating pieces of it. So you can reduce the operational costs by increasing automation through the use of smart contracts. And lastly, you can also not can, if you implement blockchain, you're almost invariably going to increase auditability
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/blockchain-incorporation-design-goals?u=76281980&t=284)** and the ability to demonstrate compliance with many different regulations or standards. The reason for that is we have a track of every data change that's ever occurred. And programming change with respect to the smart contracts. You automatically get this very rich audit trail with complete non-repudiation. In other words, everything that happens on the blockchain, you can tell when it happened, what the previous edition of that data was, who did it. So you get lots of information. The transactions within each block gives you tons of information. So it dramatically increases auditability. And it makes the auditors, especially when they're doing your compliance audit, very happy because they don't have to work hard to find all this rich information of the history of how your data got to be where it is today. So stay true to your design goals, make sure that blockchain is a good fit because if it's a good fit, it'll probably be a great fit for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (24), [[User Experience (UX)|User experience]] (4), [[Smart Contracts]] (3), [[Cloud Computing]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (6), find (2)
> **Definitions:** is a  (4), is an  (1), is called (1), in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - okay (1)

#### [Integration considerations for incorporating blockchain](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=0)** - So, you've already decided that [[Blockchain]] technology is a good fit for your organization and specific use cases. Once you make that determination, moving forward should be fun, but you want to make sure that you do it in the right way. You don't want to just try to drop a solution in the middle of a traditional application and expect it to work well. You have to plan it well, and to plan it well, you want to really consider the interface, and integration landscape so let's take a look, as we wrap up all this wonderful discussion of [[Ethereum]], at the interface and integration considerations. Here's a few best practices and high-level goals that you want to keep in top of mind. First off, you have to consider the design. Now we've talked a lot about the different design aspects of storage and flow control, but you also want to think about how is this new application component going to fit into my overall structure? What is it going to do, is it going to take away functionality, or replace functionality or hopefully add new functionality? Be aware of [[Decentralization]] in your design. Again, we've talked about this before, but this is one of the things you want to keep in top of mind. Decentralization has caveats with it. So, make sure you're paying attention to timing issues. And the fact that any data that you put in the blockchain is no longer going to be kept inside a silo. That, hopefully, is one of the design features of your application and not one of the drawbacks
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=94)** that you're going to have to encounter. But design upfront for decentralization. All right so, how do we fit things in to an existing application? Even if it's going to be new functionality, you want to carefully document the processes of your existing application, and the processes of your proposed blockchain application, and align those processes as closely as possible. For example, you don't want to roll out a new blockchain feature that pokes a hole in the middle of an existing process. Let's assume that we have an order entry process, and it normally takes one and a half seconds to commit an order, okay, let's say it's a big process. A big, big order one and a half seconds is traditional. Now though, you're going to integrate that order entry process with blockchain, so the orders are being added to the blockchain. Now, if you're using Ethereum, and you write your application to wait for the confirmation, we're talking about 14 or 15 seconds potentially. So, now when you commit an order, if you're not aligning your processes properly, and really thinking it through, you may cause an existing process to hang, or wait until something else happens to complete. So, again, you want to align these processes, so that your new application does not slow down or hopefully, even worse, not break existing processes. Once you determine what you're going to do, and how you're going to do it,
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=188)** you want to do a little bit of a survey to see what services are already out there. Don't reinvent the wheel, don't rewrite something in blockchain just because you can. If there's a perfectly good service that's waiting out there that you can call with an API, maybe it's internal to your organization, or maybe somebody else already wrote it, and you can just invoke it, and it does exactly what you want, and the cost is right, then use that instead. So, make sure you're aware of all the existing services that exist before you haul off, and start writing everything from scratch. One of the big design goals that you need to keep in mind is identity because identity in a blockchain environment is completely different from identity in any other environment. First off, identities are associated with accounts, and there really is no association. There's just an account in Ethereum. So then you want to ask yourself, "Do I map an identity from an existing system "to an Ethereum account, and do I have "a one to many relationship?" In other words, can one identity from my traditional application map to more than one Ethereum account? Those are some questions you have to ask. Do you map 'em in the first place? Do you map one to many, or do you have them restricted? Typically, you want to map in some way, because that's the only way to complete the cycle of non-repudiation. You know what account carried out an action. But if you cannot associate that account
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/integration-considerations-for-incorporating-blockchain?u=76281980&t=283)** with a real identity, then you don't get that richness of being able to audit activities that then span into your traditional application and your traditional data store. So you, typically, want to have some sort of correlation between external entities, i.e. traditional application, and then the internal Ethereum accounts. So, that's something that you'll need to consider, even if you just consider whether you want to map the accounts, how are you going to do it? Where are you going to store the mapping? How are you going to store them securely? And what happens if an external identity ceases to exist? Like what if somebody leaves your organization? Do you remove their user account here? What happens to all the data on the blockchain? Well, you can answer that, nothing happens to the data on the blockchain. Do you store an archive record, or do you just break that link and let the data go orphaned on your blockchain? Again, those are some considerations in identity mapping And lastly, integration [[Design Patterns]] are very, very helpful when you start introducing new application components, especially at the enterprise level. What you want to try to do is develop a strategy so that you reuse the same look and feel of your integration, of your APIs, so that every API doesn't look different, and you don't have to rewrite everything.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (11), [[Ethereum]] (6), [[Decentralization]] (3), [[Design Patterns]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** api (2)
> **Definitions:** is a  (1), in other words (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - so (1)

#### [Interface considerations for incorporating blockchain](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=1)** - So, we're talking a little bit about interfaces. Whenever you integrate an application with another application, you're going to have to integrate the data through some sort of interfaces, not only data, but also functionality. You typically are going to create a layer of services and APIs and API calls to communicate back and forth. So you need to identify these touch points. When does the [[Blockchain]] application need to communicate with your traditional application? And in this model, you're typically going to find that your traditional application is the client and the blockchain application, your [[Smart Contracts]] would be the server side. So you're probably going to initiate your interactions from the client side, from the traditional application side. So at what point do I need to call smart contract functionality? What do you want the interface to do? What data must I provide to this interface? And what data must the interface provide back to me? Now, it sounds like we're just defining an API, which in some cases it kind of is, but don't forget that we can also define events that are emitted from the smart contract side, and that can be trapped or intercepted, subscribed to on the client side. So it's not just about the function calls, but it's also about using the richness of the events that come back, and remember too, events can be searched. So you can look at historical events as well. Okay, so integration has several high level considerations.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=99)** There's a lot of ways in which you can get down in the weeds and it gets really frustrating, confusing, there's a lot of details, but try to think on a higher layer and always every time you have a decision, especially when introducing blockchain, you want to focus on the reliability, the availability and the serviceability of each application component. Everything that you do in blockchain, is it reliable? Is it something that you know is going to work the same way every time with good enough performance, that it will support your existing application? If the answer to that is yes, it's a good starting design. Then, is it serviceable? This is something that's a kind of a big deal in that, even though you have the best API layer, the best smart contract functions, and it does everything you want today, isn't going to do everything you want a month from now or a year from now. As your outside application migrates or matures, and maybe even your smart contracts mature, they may morph into something that provides slightly different functionality. Are you going to be able to service and update those so that it continues to integrate well? Is it going to break old data on the blockchain? And of course, availability. Is it available easily to integrate with your existing system? If you have a 24 7 system, you need to make sure that your blockchain has that level of resilience. We know that blockchains are resilient by design, but you want to make sure that the interface is resilient
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-11-integrating-non-blockchain-apps/interface-considerations-for-incorporating-blockchain?u=76281980&t=195)** and is always available. You don't want your application to just time out waiting on a blockchain, that for some reason is not available. So those are the high level characteristics you want to make sure that you ensure. All right, believe it or not, that's it. We've covered a lot of ground. Basically, you know how to learn all the aspects of what [[Ethereum]] is all about. You know how to build your development environment. You know how to write smart contract code, how to test it, how to deploy it, how to deploy to different types of networks. You pretty much have all the building blocks to go out and start building your own application. We talked about some of the building blocks for designing the right interface to integrate it into an existing application, or you can write your own. Either way, you're ready to take the Ethereum world by storm and go out and have some fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (7), [[Smart Contracts]] (2), [[Ethereum]] (2)
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