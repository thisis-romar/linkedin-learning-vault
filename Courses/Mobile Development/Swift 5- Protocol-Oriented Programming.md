---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: swift-5-protocol-oriented-programming
url: "https://www.linkedin.com/learning/swift-5-protocol-oriented-programming"
duration_minutes: 120
duration: 2h
level: Advanced
updated: 1/15/2020
learners: 1968
skills:
  - Swift (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF5bvF-v4D6OA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578676972352?e=2147483647&amp;v=beta&amp;t=RQOV86o_U0avPB7P0FEWJ2LL0ng3U4ycraOTPPslLM8"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Master Swift]]'
prev_courses:
  - '[[Swift- Delegations and Data Sources]]'
path_nav: '[{"path":"Master Swift","position":4,"total":4,"prev":"Swift- Delegations and Data Sources","next":null}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/swift-programming-language
status: not-started
created: 2026-04-21
---

![Swift 5: Protocol-Oriented Programming](https://media.licdn.com/dms/image/v2/C560DAQF5bvF-v4D6OA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578676972352?e=2147483647&amp;v=beta&amp;t=RQOV86o_U0avPB7P0FEWJ2LL0ng3U4ycraOTPPslLM8)

# Swift 5: Protocol-Oriented Programming

> Take a closer look at protocol-oriented programming (POP), a new paradigm introduced by Apple. In this course, instructor Károly Nyisztor explains what POP is, how it differs from classical approaches, and how to work with it to efficiently develop apps with Swift. Learn about the pillars of POP: protocol extensions, protocol inheritance, and protocol composition. Protocol extensions let you defin

> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming) | 2h | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Károly Nyisztor]]

## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)

## Table of Contents

### Introduction

#### Benefits: Protocol-oriented programming
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=1)** - Most software developers are familiar with object oriented programming concepts, but in Swift we can take a different approach.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=9)** Protocol-oriented programming is a powerful paradigm that can simplify and improve the design of our systems considerably.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=17)** Hello, I am Karoly Nyisztor.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=19)** I have been developing software systems for more than two decades now, and I am passionate about Swift and IOS development.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=26)** I have also authored several books and online courses.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=30)** In this course, I provide an overview of the core protocol-oriented programming concepts, and I show you how to apply them effectively using hands-on coding examples.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=41)** I am going to show you techniques that produce clean, flexible code and improved performance.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=47)** We'll leverage the power of protocol orientation to trade in complex class hierarchies and unwanted legacies for loosely-coupled granular designs.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=57)** We start by taking the deep dive into protocols, and the pillars of protocol-oriented programming.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=63)** Then, we compare the object-oriented approach with the protocol-based way of designing software.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=70)** We'll dedicate a chapter to generics.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=72)** Generics walk hand-in-hand with protocols, and they are deeply-rooted in the language.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=78)** Finally, we'll build a fully functional weather app using a protocol-oriented approach.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=84)** To solidify what you learned from following along, I've included practical challenges and solutions.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=90)** I'm really excited to share what I know about protocol-oriented programming with you.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=95)** All right, let's get started!

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - most (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=1)** - Our course aims to deepen your knowledge of Protocol Oriented Programming techniques and how to build better, more flexible applications.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=9)** I'm going to explain all of the concepts and will provide thorough explanations regarding implementation details and about the sample code we used throughout this course.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=19)** However, since we delve into intermediate topics, prior knowledge about object-oriented software development and some experience in Swift programming is required.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=29)** For example, we're going to work with classes, value types, and closures.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=35)** If you're not familiar with these concepts, check out our Swift Essential Training course.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=41)** To implement the exercises in this course, you will need Xcode 11.1 or later.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=47)** You can download Xcode for free from the Mac App Store.

> [!info]- Semantic Content
>
> **Versions:** 11.1 (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - our (1)


### 1. The Pillars of Protocol Orientation

#### What is protocol-oriented programming?
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=0)** - [Instructor] In June 2015, Apple introduced a new programming paradigm called protocol oriented programming.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=7)** The concept isn't that new at all.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=10)** Protocols have been around for decades.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=13)** Many object oriented programming languages rely on them as a means to define communication contracts between objects.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=20)** Java, C#, or PHP use the term interface instead of protocol.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=26)** In C++ we've got the abstract class.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=30)** The creators of Objective-C and Swift decided to use the term protocol, so protocol is just another name for interface.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=39)** But what exactly is a protocol?
>
> **[0:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=42)** The protocol describes the method and property requirements that need to be implemented by conforming types.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=49)** Although it is possible to implement default behavior in a protocol, we can't instantiate it.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=55)** Protocols serve as blueprints, rather than fully functional types.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=60)** Now, let's talk about protocol orientation.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=63)** When we design a software system we identify the main entities first.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=68)** Then, we model the relationships between these entities.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=72)** At this stage, we can start thinking in base classes and inheritance.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=77)** Alternatively, we can rely on protocols and protocol implementations.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=82)** Swift provides full support for both approaches.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=86)** However, Apple engineers prefer the protocol-based approach and they practice what they preach.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=93)** The Swift standout library has been designed and developed using POP techniques.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=99)** How does it work?
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=100)** "Don't start with a class, start with a protocol."
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=104)** In the protocol oriented approach we start modeling our system with a protocol.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=109)** Swift provides built in support for the protocol oriented paradigm.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=114)** We've got advanced features like protocol extensions, protocol inheritance, and protocol composition.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=121)** Also, we should favor value semantics over reference types.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=126)** That is consider using struts, (mumbles) and Tapas instead of working exclusively with classes.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), abstract (1), class. (1), let (1), class, (1)
> **Env Vars:** php (1), pop (1)
> **CLI Commands:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Introducing the protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=1)** - [Instructor] Protocols stand at the core of POP.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=4)** They model abstraction by describing what the conforming types shall implement.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=9)** Protocol names must begin with a capital letter.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=13)** Apple has clear recommendations regarding protocol naming.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=18)** Protocols that describe what something is should read as nouns.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=22)** For example, collection, UITableViewDataSource, or UITextFieldDelegate.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=29)** Protocols that describe a capability should be named using the suffixes able, ible, or ing.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=35)** Such a Codable, CustomStringConvertible, and NSCoding.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=41)** Let's get started exploring the protocol syntax.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=45)** Open up Xcode and create a playground called protocols.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=57)** Let's make it full screen and I'm going to remove the generated code except the import will need Foundation.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=69)** All right, we declare a protocol called Taggable.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=74)** I'm using the protocol keyword and let's call it Taggable.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=81)** The protocol definition, that is the method and the calculated property requirements go between the curly braces that follow the protocol name.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=90)** We specify variables as usual.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=93)** This protocol has a property called tag of type string.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=98)** And the type should be string.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=101)** Now we got an error.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=103)** Properties declared in a protocol need to have at least a get or.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=108)** I'm going to make the tag property both settable and gettable.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=112)** We specify these by writing get and set after its declaration between curly braces.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=121)** Let's declare a second property called data of type data.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=127)** It's only gettable.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=128)** In other words, it's a read only variable.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=132)** To define an immutable property, declare it as var and use the get specifier.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=138)** In a protocol we can define type property requirements using the static keyword.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=143)** Let's declare a static read only property called counter of type integer.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=149)** And I make it read only.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=153)** Since it's a static property, its value gets shared by all instances.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=158)** Protocols can also define instance and type method requirements.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=163)** Let's add an instance method called update.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=167)** The method takes an argument called data of type data and it returns a Boolean.
>
> **[2:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=173)** If we define the requirement for a method that modifies the instance, it is recommended to market with the mutating keyword.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=182)** Since the update method is probably going to change the instance, let's mark it as mutating.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=188)** The mutating keyword allows value types also to adopt the protocol.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=193)** We can also define static method requirements in a protocol.
>
> **[3:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=197)** So add a static method called incrementCounter.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=205)** This method is supposed to increment the internal counter property.
>
> **[3:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=210)** If you want to restrict confirming types to classes only, we can define the protocol as such by making it inherit from the any object protocol.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=220)** Now, we get the compiler error because of the mutating keyword.
>
> **[3:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=224)** Class methods can always modify the instance.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=227)** Thus, we don't need to use the mutating keyword in class only protocols.
>
> **[3:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=233)** Now think twice before limiting protocol adoption to class types.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=237)** Once you do so, value types won't be able to adopt the protocol.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=242)** Let's remove the restriction we just added.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=247)** And now the compiler error is gone.
>
> **[4:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=249)** Protocols can dictate initializers to be implemented by conforming types.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=254)** The following initializer requirement takes two parameters, tag of type string and data of type data.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=268)** The signature is the same as when declaring initializers in a type.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=273)** However, we don't provide the initializer's body.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=277)** All right, as we saw, defining a protocol is quite similar to defining classes or structures, but some restrictions apply.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=286)** For instance, we can declare constants in the protocol using the let keyword.
>
> **[4:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=292)** Also, default values computed properly, initializer, and method definitions are not allowed in the protocol.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=300)** Since we can't assign default values to the properties defined in the protocol, Swift's type inference engine has no way of working out the type.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=309)** Therefore, we must specify the type of our properties explicitly.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=314)** Adopting protocols is our next topic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), static (5), type. (2), var (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), similar to (1), for instance (1)
> **Code Identifiers:** incrementcounter (1)
> **Env Vars:** pop (1)
> **Cross-References:** as we saw (1)
> **Definitions:** in other words (1)
> **Best Practices:** recommended (1)

#### Adopting protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=0)** - [Instructor] If you want to create a type, confirming to a protocol, we must declare and define the matching properties and methods.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=8)** To follow along with me, open the project from the exercise files folder, Chapter 1, 01_03, begin.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=16)** Let's create a structure called tagged data.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=20)** To make it adopt the taggable protocol, add a column after the type's name, and write the protocol's name.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=28)** After this change, we get a compiler error that says, "Type 'TaggedData' does not conform to protocol 'Taggable'."
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=36)** We can rely on auto-complete to add the missing property and method declarations.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=41)** So, let's do that.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=43)** Click the red dot to reveal the details, then click 'Fix.'
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=49)** The code gets generated.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=51)** It has a lot of placeholders and, the implementation is missing, so let's add some code.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=57)** The initializer should initialize the tag and the data properties.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=62)** Self.tag = tag, and self.data = data.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=71)** The update method updates the data property and returns 'true.'
>
> **[1:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=78)** And let's return 'true.'
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=81)** We have to declare the method as mutating, because it modifies the instance's data property.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=89)** The increment counter should increment the value of the static counter property.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=94)** Counter += 1.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=97)** And finally, let's fix the last issue.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=100)** We need to provide the default value for the static counter instance.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=105)** I'm going to initialize it to zero.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=107)** Now, the code should compile just fine.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=110)** The tagged data type conforms to the taggable protocol.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (2), static (2), type, (1), finally, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Conforming to protocols via extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=0)** - [Narrator] Developers often rely on code they do not own.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=4)** That's the case when working with SDKs and third-party libraries.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=8)** I create a new playground called ProtocolConformance.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=14)** Now, let's assume that we want to build a cryptography framework.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=18)** We start with a protocol, but first, I'm going to to remove the generated code, we only need to keep the foundation framework and the rest will be deleted.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=29)** So let's create the protocol, I'm going to call it encrypting, and it defines a single-method requirement, the XOR method.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=43)** It takes a parameter called key of type onsite integer, and it returns option of self.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=52)** We can adopt this protocol in our types easily.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=55)** If I create a structure like TaggedData, Xcode will help out and create the stubs, and I could provide the implementation here.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=68)** Now, what if I want to make the string type conform to the protocol?
>
> **[1:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=75)** We can't change the implementation of the string's structure as we did with the TaggedData type.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=81)** However, we can use a type extension to add new methods or properties to an existing type.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=87)** This approach works even if you don't have access to its source code.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=90)** So, I create the extension for string, and adopt the encrypting protocol here.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=101)** And here's the implementation.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=104)** We need to return a string and I call the initializer that takes the byte's sequence.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=113)** First, I retrieve the string's contents as a collection of UTF-8 codes.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=118)** Then, I'm going to rely on the map array method to combine each element with the provided key it was in the XOR operation.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=127)** Map, and in the closure, I combine each element using XOR with the provided key.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=136)** For encoding, I use UTF-8.
>
> **[2:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=140)** We just enhanced the string type with the new feature, so let's try it out.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=145)** I create a source string, let source equal hello protocol.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=153)** Then, declare a new string called target, and assign the result of performing the XOR method on the source string.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=162)** XOR should be available.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=165)** For key, I use 42.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=167)** Finally, we print a couple of diagnostics strings.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=171)** Print target, if it doesn't exist, I print an error message.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=178)** And we can call XOR on the target using the same key to get back the original string.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=184)** XOR works both ways.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=187)** I use the same key, and if the result is nil, again, I print an error message, failed to decode.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=199)** And let's execute the playground.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=202)** The output shows the encrypted and the decrypted text.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=206)** We're not restricted to adopt protocols in types that we own.
>
> **[3:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=210)** Type extensions let us add protocol requirements to any type, even if you don't have access to its source code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (2), self (1), finally, (1), type, (1)
> **Env Vars:** xor (7), utf (2)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Understanding polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=0)** - Polymorphism is a fundamental object oriented programming concept and it's also essential to protocol oriented programming.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=8)** Polymorphism comes from Greek and means many forms in programming.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=13)** It denotes the ability to provide a single interface to different types.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=17)** To illustrate the concept, I went ahead and created a playground project.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=22)** You can find it in the exercise files for their chapter one or 105 and begin.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=28)** Let's have a look at the shapes playground.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=31)** The shape protocol defines the read-only area properly.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=35)** This is the only property requirement that conforming types must implement.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=40)** I've created several concrete shapes that conform to the shape protocol, square, rectangle, rhombus, and circle.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=49)** Now let's define a variable of type shape VAR shape of type shape.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=56)** We can't instantiate the shape protocol directly.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=59)** However, we can take advantage of the polymorphic behavior and assign any of the concrete types to the shape variable.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=67)** Let's assign the rectangle instance first.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=72)** The width should be 10 and the height say 20.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=76)** Now print out the shapes area.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=79)** Next we assign a circle of radius 10 and we can print out the shapes area as well.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=88)** Note that we've been using the same shape variable.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=91)** First we initialize it with the rectangle.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=95)** Then with the circle instance, now let's assign a rhombus that's provide four for one side and six on the other one, and again, we print the shapes area.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=109)** I'm going to just copy this statement.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=113)** Now, how about grading a list and filling it with instances of type, rectangle, circle, square, and rhombus?
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=121)** VRA, just as the other built in collections can only work with a distinct type.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=126)** That is, we can't insert instances of unrelated types into the same array or dictionary.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=132)** Actually, these types aren't unrelated.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=135)** They all conform to the shape protocol.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=138)** Thus, we can define an array of shape objects like this.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=143)** Let me scroll up a bit.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=146)** So I create the shapes variable, which is an array that stores shapes.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=153)** We can also use the shorthand form.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=157)** I prefer this one, so let's leave it as it is.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=160)** We've instead, she did an empty array of shapes.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=163)** Now let's add some items to it.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=165)** First, I create a square of side C five and I'm going to add it to the array using the uphand method shapes. append square.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=177)** Not this one, but the instance.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=180)** Then I create a rectangle of width five and height 10 and I appended it to our ships or a two and I add another one a circle with a radius of the face with a radius of three and I upend this one too.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=203)** We could add instances of any type that conforms to the shape protocol.
>
> **[3:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=207)** Polymorphism allows us to create the common functionality defined in the protocol without knowing the actual type.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=214)** So we can write a foreign loop like this for shape in shapes, and then print each shapes area and let's execute the playground.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=227)** The console displays the area of each shape.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=229)** From the array.
>
> **[3:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=231)** Polymorphism is useful when we need to access and use unrelated objects through a common interface without having to keep track of their concrete time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (2), type. (2), var (1), type, (1)
> **Env Vars:** var (1), vra (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - polymorphism (1)

#### Protocol inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=0)** - [Instructor] A protocol can inherit from one or more protocols and add new requirements on top of the inherited ones.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=7)** Protocol inheritance is a useful feature that lets us create granular designs.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=12)** Let's open the projects from exercise files Chapter 1 01 06.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=17)** Begin and select the protocol inheritance playground.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=21)** So here's the Taggable protocol.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=24)** Now, let's assume that we want to add new requirements.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=27)** Say we need the ability to save instances to the local storage and restore them later on.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=35)** Also, we need to retrieve the base64 encoded version of the data.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=40)** We could squeeze in all these requirements into Taggable.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=44)** Besides its original requirements, Taggable would also specify persistence and base64 encoding related methods and properties.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=53)** Our protocol would define too many unrelated requirements.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=57)** That's a bad design decision and goes against the single responsibility principle.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=63)** We're going to follow a different strategy.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=66)** We'll create dedicated protocols for each set of requirements.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=71)** First, we create a protocol that defines the persistence-related requirements.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=76)** I'm going to call it TaggedPersistable.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=81)** The TaggedPersistable protocol inherits from Taggable.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=85)** If a type adopts the TaggedPersistable protocol, it has to implement the property and method requirements from both protocols.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=93)** TaggedPersistable adds an initializer requirement.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=96)** The initializer is responsible for loading a previously saved instance from the storage.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=101)** The initializer takes a tag argument of type string.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=107)** This parameter identifies the instance to be restored.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=111)** The contents of parameter represents the location URL.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=116)** I'll just type URL.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=118)** We might encounter various issues when dealing with persistence.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=122)** Missing files, lack of permission, and so on.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=125)** So it's a good idea to mark the initializer as throwable.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=130)** Next, declare the persist method.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=133)** It takes a URL parameter that represents the storage location.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=138)** This method might throw errors, as well, so let's mark it as throwable.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=144)** Protocol inheritance is similar to class inheritance.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=148)** However, protocols aren't limited to single inheritance.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=152)** For example, we could add further requirements to adopters of TaggedPersistable, such as CustomStringConvertible or Equatable.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=162)** A type that conforms to TaggedPersistable needs to implement the requirements for Taggable, CustomStringConvertible, Equatable, and TaggedPersistable.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=172)** Similarly, we create a protocol for the base64 encoding.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=177)** Let's call it TaggedEncodable.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=179)** And it should also inherit from Taggable.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=183)** The protocol defines a single gettable property requirement called base64.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=189)** It's of type string and I make it read only.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=194)** Any new type can decide which protocol to adopt, Taggable if it only needs to hold data that can be tagged, TaggedPersistable if it requires persistence capabilities, or TaggedEncodable if retrieving the base64 encoded string representation of its data is a feature we need.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=213)** We're not limited to adopting a single protocol.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=216)** We could create types that adopt all the three protocols.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), throw (1)
> **Env Vars:** url (3)
> **Analogies:** similar to (1), for example (1), such as (1)
> **UI Navigation:** open the (1), select the (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Adopting multiple protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=0)** - [Instructor] So far, we've worked with types that adopted a single protocol.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=4)** With protocol composition we can create types that conform to multiple protocols.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=9)** Protocol composition is one of the pillars of the protocol oriented programming paradigm.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=15)** Swift, like many other programming languages doesn't allow multiple inheritance for classes.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=20)** However, any type can adapt to multiple protocols.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=24)** Why is this so important?
>
> **[0:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=27)** By conforming to multiple protocols, we can ensure that our types implement the requirements they really need.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=34)** Instead of inheriting unnecessary noise from a class hierarchy, our types can adopt the protocols that are needed for their proper functionality.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=43)** All right, let's see how it works.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=46)** You can follow along with me by opening the starter playground project from the exercise files folder.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=53)** Chapter one, 0107, begin.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=55)** First, I create a structure called my data.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=60)** Let's assume that it has to support persistence and basic 64 end coding.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=65)** All we need to do is make it adopt both the tagged persistable and tagged encodable protocols.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=72)** And let's also add tagged encodable.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=75)** X code can generate the protocol stubs for us.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=80)** Next, I implement the initializer.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=85)** I declare a constant data and initialize it using data in it with contents of, and I provide the URL.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=93)** That data equals data, and we need the initializer, the contents of URL.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=104)** This initializer can throw an error, so we need to call it using the try keyword.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=111)** Then, I call south and into by passing in the tag and the data as arguments.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=120)** Next comes the persist method.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=122)** It uses the right to data instance method to write the contents to the location provided by the URL argument.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=130)** It's a throw over method, so we call it using try.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=135)** Try self.data.write to URL.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=143)** The base 64 property returns the base 64 encoded string representation of the data.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=151)** Return south.data and I'm going to use the base 64 encoded string method.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=159)** And finally, let's implement the initializer.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=164)** It initializes the tag and the data properties.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=169)** We still have a compiler error because we haven't added a custom description.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=174)** That's required because we adopt the custom sting convertible protocol.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=180)** As you can see in the tagged persistable protocol, we also have the custom string convertible.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=187)** Let's return the types name and it's tag properly.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=192)** Return my data and the value of the tag property.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=201)** My data now conforms to multiple protocols.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=205)** Tagged persistable, tagged encodable and custom string convertible.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=211)** We can add as many protocols to the type inheritance list as we need.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=216)** However, as we adopt new protocols, the types implementation keeps growing, making it more and more difficult for us to get an overview.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=225)** Although the type extension wasn't designed to improve code readability, it can help us better organize our code.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=232)** So, let's refactor our structure.
>
> **[3:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=235)** We'll introduce a dedicated type extension for each protocol conformance.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=240)** First, create a dedicated extension for the custom string protocol.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=246)** I scroll down.
>
> **[4:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=251)** Extension my data and custom string convertible.
>
> **[4:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=259)** Now simply cut and paste the definition of the description property from the structure and put it here.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=268)** Similarly, create an extension for the conformance to tagged encodable.
>
> **[4:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=275)** Extension my tagged data and tagged encodable.
>
> **[4:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=281)** And let's move the base 64 property to this extension.
>
> **[4:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=286)** I cut it from here and move it to the extension instead.
>
> **[4:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=292)** Now I can delete the tagged encodable from my data's inheritance list.
>
> **[4:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=299)** Finally, define an extension for the tagged persistable conformance and move over the initializer and the persist method.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=309)** Extension my data tagged persistable should be the protocol, and we move the initializer and the persist method that have to do with the persistence.
>
> **[5:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=326)** And now I can remove the tagged persistable protocol conformance from the inheritance list.
>
> **[5:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=333)** Instead, I add the taggable protocol.
>
> **[5:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=339)** The my data structure's implementation became slimmer.
>
> **[5:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=344)** We capped all the features but our code is better organized and easier to follow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), throw (2), finally, (2), try. (1), self (1)
> **Env Vars:** url (4)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Protocol extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=0)** - [Instructor] Providing default behavior in the protocol could save us a lot of time when implementing the conforming types.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=8)** Although we can't include implementation in the protocol's body, it is possible to provide default method and property implementations in a protocol extension.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=18)** You can open the project from the Exercise Files folder, Chapter 1, 01-08, begin.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=24)** Let's provide the default implementations for the TaggedPersistable protocol first.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=30)** We declare protocol extensions using the extension keyword.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=34)** It's the same syntax we used to create type extensions.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=38)** Let me scroll up, and here's our TaggedPersistable protocol.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=43)** I'm going to put the extension right below it.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=47)** After creating this protocol extension, I'm going to copy and paste the method definitions from the corresponding MyData extension.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=55)** This is where it conforms to a TaggedPersistable, so let's copy the initializer and the persist method.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=63)** Next, we provide default implementation for the TaggedEncodable protocol.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=69)** Extension, TaggedEncodable.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=74)** And now I copy the base64 properties definition from the MyData extension and paste it here.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=85)** With our extensions in place, conforming types don't need to implement the property or method requirement.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=91)** These will be available through the protocol extensions.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=96)** So let's scroll down and remove the two MyData extensions.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=101)** I select both, and let's delete them.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=106)** We need to add back the two protocols to the inheritance list, though.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=112)** TaggedPersistable and TaggedEncodable.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=118)** Now the Playground should compile without errors.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=122)** We can create new types that adopt these protocols with only a few lines of code.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=128)** Here's how to define the structure that conforms to the TaggedPersistable protocol.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=133)** I call it PersistableData and make it conform to TaggedPersistable.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=141)** Xcode added three properties, and the new type is ready.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=147)** I only need to provide an initializer.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=153)** As for description, I provide a simple one, which is simply return the type's name and its tag.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=164)** Now I can initialize a new PersistableData object.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=169)** Let p equals PersistableData, for tag I provide 42, and I create a data object using a repeating byte pattern.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=183)** Now it is possible to calls its persist instance method, for example.
>
> **[3:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=187)** Thanks to the default implementations provided through protocol extensions, we can skip defining the method and property requirements, but that's optional.
>
> **[3:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=196)** If a type needs a different behavior, it can freely replace the default implementation defined in the extension.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), delete (1)
> **UI Navigation:** open the (1), scroll up (1), scroll down (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Removing tight coupling
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=0)** - [Instructor] And here's the chapter challenge.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=8)** Let's have a look at the following playground.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=11)** We have a payment controller class that declared two properties, Amazon service and Etsy service. It has an initializer and the method that calculates how much money we are making on Amazon and Etsy.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=25)** The Amazon service and the assay service types are defined in the services does Swift file.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=31)** Their implementation is straightforward.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=34)** Whenever we sell something on the given platform, the profit gets added to a private variable.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=40)** Amazon service exposes orders placed and Etsy service provides the method items sold for this purpose. Each class has a property that returns the total profit earnings and total sold.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=54)** Now let's go back to the main playground file.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=59)** Do use these classes.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=60)** We first create an Amazon service and an Etsy service instance.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=65)** Then we instantiate the payment controller by passing in the service instances we created, we can simulate sales by calling the corresponding service methods and finally we print the total profit by calling the controllers.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=81)** Calculate earnings method.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=83)** Let's run the playground.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=86)** It does the job.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=88)** However, the current design shows a rephrase.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=91)** However, the current design shows a serious weakness.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=95)** The payment controller class references the Amazon service and the Etsy service types directly.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=102)** That's the sign of tight coupling and that's something we should avoid because it has many drawbacks.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=108)** If we change the public API of any of these service types, we also need to refactor the payment controller.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=116)** Supporting new services increases the maintenance efforts.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=119)** Further, your task is to reduce the coupling by removing the dependencies between the payment controller and the concrete service types.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=128)** Instead of relying on the Amazon service and Etsy service type directly introduce a level of abstraction.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=136)** There are different ways to solve this problem.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=139)** Here are some hints.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=145)** Introduce a public service protocol and define the property and method requirements.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=150)** Adopt the protocol by declaring Amazon service and Etsy service type extensions.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=156)** Hide the concrete types by changing their visibility levels.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=161)** Create a factory method that returns a service protocol based on an identifier.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=165)** Optionally, you can embed the factory method,helper type, and finally remove the concrete service type references from the payment controller.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=176)** Instead rely on the service.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=180)** You should stop the lesson now and download the exercise file.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=183)** Start making the necessary changes.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=186)** Watch the next video after you've implemented your solution, or if you get stuck, good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), public (2), private (1), type, (1)
> **Cross-References:** go back to (1), next video (1)
> **Exercise Files:** download the (1), exercise file (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Removing tight coupling
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=0)** - [Narrator] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=6)** Did you manage to get rid of the tight coupling between the payment controller and the amazon service and etsy service classes?
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=13)** Now, here's how I solved this problem.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=17)** Let's take a look at the two service classes.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=21)** Both classes define the same functionality.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=24)** They defer only in their property and method names.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=28)** By creating a common protocol that defines these requirements, we introduce a level of extraction.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=34)** The first step toward a loosely coupled system.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=38)** So, I create a public protocol called "service".
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=44)** I'm going to declare the property that represents the total profit, first.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=50)** I call it "total", is of type "float", and it is gettable.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=58)** The add method increases the total by the amount provided in the payment argument.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=65)** We need a payment parameter of type "float", and that's our method.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=74)** I have to make it mutating, because it modifies the instance.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=79)** Next, I make the amazon service and etsy service classes adopt the protocol.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=85)** I'm going to do that by declaring some extensions.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=90)** Extension "amazon service", and it conforms to service.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=100)** And, let's provide the missing implementations.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=102)** So, the total property returns the value of the type's earnings property.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=108)** And, the add method delegates the call to the "order placed" method.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=115)** Similarly, I create an extension for etsy service.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=120)** Let's next go and add the missing stubs.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=131)** "Total" returns the value total sold.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=136)** And "add" invokes the "items sold" method.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=141)** Now, I can hide the complete service types.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=144)** I'm going to change their visibility levels to "private".
>
> **[2:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=148)** Amazon service should be private, and the etsy service class as well.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=155)** The class should be private and all its public properties and methods but the initializer.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=161)** I make the initializer file private, because I'll need to be able to invoke it from our factory method.
>
> **[2:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=167)** I make the initializer file private, because I'll need to be able to invoke it from our factory method.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=175)** But, the other methods and properties should be private.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=182)** But, this one... and total sort should also be private.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=193)** Now, the service types are hidden.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=195)** Trying to run the playground triggers a compile error.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=201)** Let's fix this.
>
> **[3:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=203)** So, I go back to the services.swift file.
>
> **[3:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=208)** I declare a public enumeration called "service type".
>
> **[3:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=213)** Public enum service type.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=216)** I add two cases: amazon and etsy.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=221)** We'll use these values to identify the complete service types in the factory method.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=227)** I implement the factory method next.
>
> **[3:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=230)** It's a public method... called "make".
>
> **[3:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=237)** And it takes a single parameter service of type "service type".
>
> **[4:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=242)** The return type is the service protocol.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=246)** The clients don't deal with amazon service or etsy service, anymore.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=250)** They only see the enumeration and the protocol.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=254)** And the implementation is really straightforward.
>
> **[4:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=259)** We check the value of the service argument, and return the appropriate instance.
>
> **[4:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=265)** Case amazon, return... amazon service... and case etsy, return etsy service.
>
> **[4:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=278)** Next, I'm going to refactor the payment controller.
>
> **[4:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=282)** First, I remove the obsolete references.
>
> **[4:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=288)** And, that's gone, too.
>
> **[4:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=290)** I declare a constant that holds the list of services we'll be using.
>
> **[4:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=294)** It's an array of service types.
>
> **[4:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=296)** Note that I'm relying on the protocol, here.
>
> **[5:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=300)** And, let's update the initializer.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=303)** It takes a parameter of type "array of service".
>
> **[5:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=308)** It initializes our services property.
>
> **[5:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=311)** Self.services equals services.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=316)** The calculate earnings method comes next.
>
> **[5:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=319)** I declare a result property of type "float" and initialize it to zero.
>
> **[5:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=326)** Var result of type "float" equals zero.
>
> **[5:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=331)** Then, I iterate through the items of the elements from the services array, and sum up the value of their total property.
>
> **[5:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=340)** Services, and I add to the result variable the value of each service's total property.
>
> **[5:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=349)** And finally, let's return the result.
>
> **[5:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=353)** Alternatively, we could use the "reduce array" method, which shrinks the implementation to one line of code.
>
> **[6:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=361)** Let me uncomment this, and... we can use services.reduce.
>
> **[6:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=371)** The initial result is zero.
>
> **[6:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=373)** In the closure, I sum the previous cause return value, and the next element's total property.
>
> **[6:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=381)** So, that's the previous cause return value.
>
> **[6:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=384)** And, I add the next element's total property.
>
> **[6:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=392)** We're almost done.
>
> **[6:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=394)** Instead of instantiating the amazon service and etsy service classes, I use the factory method.
>
> **[6:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=401)** Make, and for service... I provide the amazon case.
>
> **[6:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=410)** And, instead of instantiating the etsy service, I call make with the service argument set to etsy.
>
> **[7:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=422)** Finally, I need to fix the initialization of the payment controller, too.
>
> **[7:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=428)** For the services argument, I provide an array that contains the two instances: amazon service... and etsy service.
>
> **[7:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=442)** All right, now I can execute the playground.
>
> **[7:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=445)** And, let's fix these compiler problems, too.
>
> **[7:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=449)** We don't have an order placed anymore, because that was part of the amazon service interface, which is now hidden.
>
> **[7:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=457)** Instead, we should call the add method defined in the common service protocol.
>
> **[7:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=466)** Add payment 25, and finally... add payment 12.50.
>
> **[7:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=474)** And, we have to make these variables.
>
> **[7:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=479)** All right, now I can execute the playground.
>
> **[8:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=483)** It should provide the same result as before.
>
> **[8:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=486)** The payment controller class relies on the common protocol.
>
> **[8:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=490)** Since it doesn't have dependencies on any of the actual service classes, changing them doesn't effect the payment controller.
>
> **[8:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=499)** Besides, integrating new services is easy.
>
> **[8:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=502)** The new type needs to adopt the service protocol.
>
> **[8:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=507)** Then, we enhance the service type enumeration and the factory method.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), private (7), public (5), finally, (2), this. (1)
> **CLI Commands:** make (8)
> **Non-Speech:** (typing) (2), (upbeat music) (1)
> **File Paths:** services.swift (1)
> **Versions:** 12.50 (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Prerequisites:** initialization (1)


### 2. Protocol-Oriented Programming

#### Why protocols?
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=0)** - Why are protocols and protocol inheritance preferred over base classes and subclassing?
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=6)** Because, as we'll see, protocols serve as better abstractions than classes.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=13)** Modeling a system using classes implies inheritance.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=17)** What's wrong with inheritance, you might ask?
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=20)** It's been around for a while, and we've been using it to build various software products.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=26)** That's right, inheritance works great until we hit some of its restrictions.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=32)** Let's take a look at both the benefits and the drawbacks of this fundamental object-orientation concept.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=39)** The superclass provides the core functionality.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=42)** It includes all the logic required to satisfy the requirements for that given type.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=49)** If we need more specific behavior, we can add subclasses.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=54)** A subclass can use the default behavior defined in the superclass, completely override or decorate the behavior from the base class.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=64)** Inheritance gives us a lot of flexibility and freedom.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=69)** However, it has some serious limitations too.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=73)** Limitation number one, Swift, like many other programming languages, prohibits multiple inheritance.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=80)** Thus, if our subclass needs functionality from a different superclass, we can't make it work.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=87)** Therefore, we add that feature to our superclass.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=91)** We keep enhancing the base class.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=94)** Eventually, it becomes bloated and hard to maintain.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=98)** Limitation number two, inheritance doesn't work for value types.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=104)** This is a severe limitation since value types became first-class citizens in Swift.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=110)** Protocols solve all these issues.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=113)** Although Swift restricts multiple inheritance, any type can implement multiple protocols.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=119)** That allows for granular designs by creating as many protocols as needed.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=125)** Besides, we're not restricted to classes since value types can also conform to protocols.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=131)** Next, we'll have a look at how programming paradigms evolved.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), while, (1), let (1), type. (1), override (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - why (1)

#### From unstructured code to POP
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=0)** - [Narrator] The way we design and develop software systems was entirely different a couple of decades ago.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=6)** Unstructured programming was the earliest programming paradigm.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=10)** Back then, computer programs used to be massive, continuous chunks of code.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=15)** The code consisted of sequentially ordered instructions.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=19)** Each statement would go into a new line.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=22)** Source code lines were numbered, or identified by a label.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=26)** The following Sinclair BASIC program converts from feet to meters.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=31)** More complex apps consisted of thousands of lines of code.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=35)** To make any changes or improvements, developers had to check the statements line by line.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=42)** As the programs grow, this task becomes increasingly difficult.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=47)** Maintaining, or even understanding, such a code base was challenging.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=52)** Unstructured programming has received much criticism for producing hardly readable, so-called spaghetti code.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=59)** Structured programming languages appeared in the late '50s.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=63)** They rely on subroutines to break down the code into logical steps.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=68)** Each subroutine contains a set of instructions to be carried out.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=72)** The following example shows a program written in C, a popular procedural language.
>
> **[1:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=78)** The main function is the entry point of our program.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=82)** We have a dedicated feet to meters function that performs the feet to meters conversion.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=88)** The main function relies on there being a print function to print text to the console.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=94)** And scan F to ask for user input.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=98)** The feet to meters function gets called to convert the input from feet to meters.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=103)** Structured programming lets us define additional functions as needed.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=108)** To add a new feature for converting pounds to kilograms, we would create a new function.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=114)** Structured programming was a huge leap forward compared to the monolithic code and practices.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=120)** Named functions improved code readability and reduced development times considerably.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=126)** Structured programming seemed to be the ultimate answer to all software development challenges.
>
> **[2:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=132)** However, as the software systems kept growing in complexity, it became clear that breaking down the code into smaller, logical units, can solve all the issues.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=143)** Object-orientation appeared in the '80s.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=146)** Object-oriented languages let us break down the software to smaller, manageable units called objects.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=153)** Each object has a well-defined responsibility.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=156)** The objects in a system interact with each other to provide the expected functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (1)
> **CLI Commands:** make (1)
> **Env Vars:** basic (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)

#### Designing with classes: First try
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=0)** - [Instructor] In Swift, you can follow the object-oriented way of thinking or try to adopt the new protocol-oriented approach.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=7)** You can even rely on generic and functional programming.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=12)** Swift blurs the line between the various programming paradigms.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=16)** In the following videos, I'll walk you through some examples that show the benefits of the protocol-oriented programming over the class-based approach.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=24)** Let's say that we need to create types that fulfill the following requirements.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=29)** Store data along with a unique identifier, provide file system storage and restoration capabilities, and return a Base64-encoded representation.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=41)** Let's open up Xcode.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=43)** I create a new playground called Tagged Data.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=49)** Let me clean up the generated code, and I'm going to make it full screen.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=55)** We need the foundation framework, as usual, and let's implement a class-based solution first.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=64)** I start by declaring a class called Tagged Data.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=68)** Next, I add to properties that represent the identifier, the tech property of type string and data of type data.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=80)** We also need to implement an initializer.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=83)** It takes two parameters, the tag and the data.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=87)** And let's initialize our properties.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=91)** We just fulfilled the first requirement.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=93)** We have a type that can store an identifier data pair.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=97)** Now let's add the local persistent feature.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=101)** I create a method called Persist.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=105)** The Persist method rides the contents of the data to the location specified by the URL argument.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=111)** So we need a URL argument.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=115)** Type URL.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=117)** And the method will simply use the Data Write Instance method.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=125)** Write URL.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=126)** And since this method can throw an error, we have to call it using Try.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=131)** Also the Persist method has to be marked with the throws key word.
>
> **[2:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=137)** Next, I create a convenience initializer to load the data from Persistence.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=141)** The initializer takes two parameters, the tag and the URL that represents the storage location.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=150)** Tag of type String and we need the URL.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=159)** This initializer relies on the data types innate contents of method.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=164)** This method might throw an error so we call it using Try.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=171)** If we get the valid data object we call the tag data initializer with a tag and the data arguments.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=178)** I need to mark this initializer as throw (mumbles) two.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=182)** And I make it a convenience initializer.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=185)** Finally lets add a calculated property that returns the Base64-encoded string representation of the data.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=193)** I call it Base64-encoded String.
>
> **[3:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=196)** I call it Base64-encoded String.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=201)** It should be a string.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=204)** And I call the datas Base64-encoded String Instance method.
>
> **[3:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=210)** All right so, we just implemented all the requirements.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=214)** Although this approach works, it goes against the single responsibility principle.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=219)** One of the five basic software engineering principles known as Solid.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=225)** I talk about these principles and more in my course iOS Development: Architecture.
>
> **[3:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=231)** The Single Responsibility Principle states that every class should have responsibility over a single part of the functionality provided by the software.
>
> **[4:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=241)** And that responsibility should be entirely encapsulated by the class.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=246)** In short, a class should have one well defined purpose.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=250)** However our TaggedData Class does more than one thing.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=254)** It holds data along with a unique identifier, it stores and loads data from the file system and it returns the Base64-encoded representation of the data.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=266)** A tag with too many responsibilities is often called a "God" Object.
>
> **[4:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=271)** As more and more types depend on the "God" Object, the system becomes tightly coupled and maintaining or enhancing such a system is difficult.
>
> **[4:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=281)** We need to find a better way to support the requirements.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=284)** So, let's try a more granular design.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), throw (3), try. (2), class. (1)
> **Env Vars:** url (6)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** ios (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Designing with classes: Subclassing
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=0)** - We've seen that embedding all the features in a class is not a viable solution.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=5)** God Objects with too many responsibilities lead to coupling.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=9)** Tight coupling is the root of severe problems in object oriented systems, so we should do our best to avoid it.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=17)** We're going to refactor the tagged data class and breakout some of the functionality into subclasses.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=23)** So I create a new playground page called "SubClasses."
>
> **[0:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=31)** And lets rename the previous playground page to "GodObject."
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=35)** Next I select the taggeddataclasses declaration including the tag and data properties and the initializer code and copy it or to our newly created page.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=48)** Command C and I switch here, command V.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=55)** Let's close our classes declaration.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=58)** Now we have a class with one ratified responsibility.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=62)** It works some data that can be identified using a tag.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=66)** Next we implement the local persistent feature.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=70)** This time we rely on subclassing instead of adding this feature to the tag data class.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=76)** I'm going to to create a subclass of tagged data called "PersistentTaggedData," it's a subclass of TaggedData.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=85)** Now switch to the GodObject playground page and select the persist and the convince initializer methods.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=94)** And let's move it.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=97)** And let's paste it here.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=100)** The PersistentTaggedData subclass has a single responsibility, it handles data persistence.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=106)** So far, so good.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=108)** There is one requirement left.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=109)** The Base64 encoding of data, we follow the same pattern as before.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=115)** Let's create another tagged data subclass called "TaggedDataWithEncoding."
>
> **[2:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=123)** And should be a subclass of tagged data.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=126)** And now let's switch over to the GodObject playground page and I'm going to copy the based64EncodingString declaration, and let's paste it here.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=138)** We finished redesigning the original GodObject.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=142)** Instead of the monolithic class, we have separate subclasses.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=145)** And each subclass, has one well defined responsibility.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=149)** We comply with the single responsibility principle, which is great.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=153)** However, there are further issues with this code.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=156)** For instance, what if we need a type that supports both persistence and base64 encoding ?
>
> **[2:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=164)** I create a class called "PresistentBase64Encoded" and make it inherit from PersistentTaggedData and TaggedDataWithEncoding.
>
> **[2:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=175)** We got an error.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=176)** Swift doesn't support multiple inheritance.
>
> **[2:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=179)** So this approach won't work.
>
> **[3:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=182)** We could squeeze all the functionalities into a baseclass but that would lead the to the GodObject problem we just solved.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=189)** Another issue with subclassing, is that we can't use with value types.
>
> **[3:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=195)** If you tired to create a structure, let's call it "Tagged," we can't make it inherit from "TaggedData."
>
> **[3:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=204)** Besides as we add new requirements, the number of subclasses increases, leading to tagged exposure and other common pit fall of object oriented systems.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=214)** It appears that we're stuck, but now worries.
>
> **[3:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=217)** Rotos comes to the rescue.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (3), class. (1), class, (1)
> **UI Navigation:** select the (2), switch to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** based64encodingstring (1)
> **Analogies:** for instance (1)
> **Speakers:** - we (1)

#### The benefits of thinking in protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=0)** - [Instructor] Now let's revamp our design using a protocol-oriented approach.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=4)** I'm going to remove this line to get rid of the compiler error, and let's create a Playground page and name it Protocols.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=17)** The protocol-oriented approach works by creating a protocol.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=21)** We're going to forget classes and focus on protocols.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=25)** We'll create dedicated protocols for each major feature.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=30)** Let's clean up the generated code, and we'll start with the protocol taggable.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=39)** It declares two property requirements, tag and data.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=43)** Both are gettable and settable.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=46)** Data, that's dot data also get set.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=51)** The protocol also declares an initializer requirement.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=56)** It has two parameters, the tag and the data.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=59)** Conforming types must implement all these properties and the initializer declared in the taggable protocol.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=66)** Next, I create a protocol that declares the requirements needed to persist the data.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=71)** Let's name it TaggedPersistable.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=76)** It declares the initializer requirement that takes a tag parameter and a URL.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=84)** URL of type URL.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=86)** And the persist method for data storage in the file system, we need to provide a URL.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=94)** And this method can also throw an error.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=97)** The protocol for Base64 encoding requirements is tagged and codable.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=104)** It declares a single read-only property requirement.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=108)** It should be of type string and it's read-only.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=113)** So I mark it as gettable.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=116)** We've got three protocols, but they don't provide any functionality.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=121)** We can provide default behavior to any method or computed property requirement of a protocol using protocol extensions.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=129)** Without this feature, conforming types would need to implement, basically, the same logic over and over again.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=136)** That would mean a lot of redundant code.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=138)** Let's implement a default implementation for the tagged persistable methods.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=142)** Start by declaring a protocol extension.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=145)** The code is the same that we used in the class-based examples, so we can copy the implementation from the subclasses Playground page.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=154)** But, first, I'm going to create the extension.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=160)** Now let's switch Playground pages, and I need the initializer and the persist method from the persistent tagged data class.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=171)** We don't need the convenience keyword.
>
> **[2:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=174)** Let's also define the default behavior for the tagged and codable's Base64 encoded property.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=180)** Again, I create an extension and the implementation is straightforward.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=188)** I call the datas base64encodedstring instance method.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=192)** We can adopt any or all of these protocols easily.
>
> **[3:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=196)** Assuming that we need a type that encapsulates some data in a tag, we'd write the following, the class MyTaggedData.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=206)** It adopts the taggable protocol.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=211)** Let Xcode create the stabs and the initializer.
>
> **[3:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=217)** We initialize the data and the tag properties.
>
> **[3:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=222)** It also works with structures.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=225)** We don't even need to provide the initializer, since a memberwise initializer gets automatically generated for structures.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=234)** Now we can instantiate the new type, but, first, I'm going to remove the class, because it will collide with the my tag data structure definition, and let's create a constant, let taggedData = MyTaggedData.
>
> **[4:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=257)** Let's call the tag first, and the data, I instantiate it with the repeating pattern.
>
> **[4:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=267)** If the type needs persistence features, we can make it conform to the tagged persistable protocol and we can use the data persistence feature right away.
>
> **[4:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=285)** First, I create a URL that points to the document's directory.
>
> **[4:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=290)** I'm using the file manager's URL's for method, and we need the first value from the array.
>
> **[5:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=301)** Now I can create the URL by appending path component MyData.
>
> **[5:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=312)** And now I can call the tech data's persist method.
>
> **[5:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=316)** Now, what if we also need to Base64 encode the data?
>
> **[5:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=320)** Just add tagged and codable protocol conformance, and we can retrieve the Base64-encoded string representation without further modifications.
>
> **[5:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=331)** I create a string and assign the tag data's Base64 encoded property.
>
> **[5:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=339)** The best part is that we didn't have to write a single line of code to support data persistence and Base64 encoding in the MyTaggedData type.
>
> **[5:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=348)** All we need is to make our types adopt the tagged persistable or tagged encodable protocols, or both if we need all the features.
>
> **[5:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=357)** The protocol-oriented design leads to a better and more flexible system.
>
> **[6:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=362)** Besides, we avoided all the pitfalls of the class-based solutions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), throw (1), switch (1), class. (1), type, (1)
> **Env Vars:** url (7)
> **CLI Commands:** make (2)
> **Code Identifiers:** taggeddata (1)
> **Speakers:** - [instructor] (1)

#### Highlighting the differences
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=0)** - Let's summarize the benefits of the protocol oriented approach over the class-based design.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=5)** Starting with the class that implements all requirements leads to the so-called god-object.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=11)** A class that has too many responsibilities.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=15)** Having such classes introduces tight-coupling, a severe decease of object oriented systems.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=21)** As more and more objects depend on each other code changes will tend to spread across the code base.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=28)** Fixing bugs or adding new features becomes a tedious, error prone task.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=34)** Subclassing helps us solve the god-object problem and we manage to create a granular design; however, subclassing might lead to another problem known as type explosion.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=47)** Besides, inheritance doesn't work with value types.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=51)** The protocol based design addresses all the issues without side effects.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=56)** The result in design is flexible and it works perfectly with both classes and value types.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=63)** By adopting multiple protocols, we can create types that fulfill as many requirements as needed.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=70)** Default implementations eliminate or reduce the amount of client code significantly.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=76)** Next, we dive into generics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), implements (1)
> **Definitions:** known as (1)
> **Speakers:** - let (1)


### 3. Generics

#### The importance of generics
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=0)** - [Instructor] Although this course is about protocol-oriented programming, we can't avoid talking about generics.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=6)** Generics are deeply rooted in the language.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=9)** We usually don't even notice that we're relying on them.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=12)** Whenever we encounter protocols, we'll often also see generics.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=17)** As an example, the built-in Swift collection types conform to the collection protocol and several other protocols as well.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=26)** Besides, they are also implemented as generic types.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=30)** The dictionary, the array and the set, are all defined as generic types.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=36)** So, why do we use generics?
>
> **[0:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=38)** In short, generics can save us from typing similar code over and over again.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=44)** I show you what that means through a practical example.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=48)** Let's assume that we need a function that tests whether two values are equal.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=54)** We could come up with the following solution.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=57)** This implementation is straightforward and we can test it by typing equals and for the left hand side argument, I provide three and right hand side, let's say, four.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=74)** It's redone for us.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=75)** Great.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=76)** However, our function has a severe limitation.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=79)** We can't use it to compare two double values.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=84)** We got the compiler error.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=86)** Cannot convert value of type double to expected argument type int.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=91)** No problem.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=92)** We can define a new function that works with double types.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=96)** I copy it's definition and change the type of the parameters to double.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=107)** And now it works.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=108)** Problem solved, right?
>
> **[1:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=111)** We've covered int And double, but how about the following.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=115)** I define two float types.
>
> **[1:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=119)** Let pi, and I provide the type explicitly.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=124)** That's required because Swift infers floating point numbers to double.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=131)** And the second one also a float, equals 2.71.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=142)** And let's invoke equals again with pi and e.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=147)** Again we get a compiler error.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=150)** We end up creating yet another function that accepts float types.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=159)** It should work now.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=160)** Let's try it out.
>
> **[2:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=162)** Yep.
>
> **[2:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=163)** Later on we may need to compare further types, strings, dates, and so on.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=169)** Implementing an equals function for each new type leads to as many similar functions and a lot of code repetition.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=177)** The strategy goes against the DRY, Don't Repeat Yourself principle, which states that we should eliminate duplication in logic via extraction, and that's precisely the issue that generics solve.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5)
> **Env Vars:** dry (1)
> **Versions:** 2.71 (1)
> **Speakers:** - [instructor] (1)

#### Defining generic functions and methods
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=0)** - [Instructor] Implementing a new function for every type leads to a lot of redundant code.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=5)** To avoid code duplication, we can combine all the different functions into a single generic function.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=12)** Let's see how.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=14)** I create a new playground page called Using Generics.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=20)** And let's rename the previous one too without generics.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=25)** To create the gener, replace.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=28)** To create the generic function, we need to provide at least one place holder type.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=34)** The place holder type must appear right after the functions' name between angle brackets.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=41)** So I declare the equals function and I provide the place holder type between angle brackets.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=48)** We could have used any other identifier.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=51)** Capital T is just a popular way to refer to generic place holders.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=55)** We can use this place holder type in the argument list or anywhere in the functions body.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=60)** So let's define the functions parameters.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=64)** The left hand side argument of type T and right hand side also of type T, and return the a Boolean here.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=75)** Now let's implement it.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=77)** We return the result of comparing the two arguments.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=81)** Now, our code doesn't compile.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=84)** That's because Swift doesn't know how to compare the two objects of place holder type.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=89)** A type needs to conform to the equator where protocol to test whether its instances are equal.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=96)** We can enforce this requirement by applying the type constraint on the place holder type.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=101)** A type constraint specifies that the type conforms to a particular protocol or inherits from a specific class.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=108)** Here's how to apply it.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=110)** The syntax is simple.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=112)** We place a constraint after the place holder, separated by a colon.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=117)** And it should conform to equatable.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=121)** Now the function accepts instances of types that adopt the equatable protocol.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=126)** Most basic built-in Swift types conform to the equatable protocol.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=130)** The string type is one of them.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=133)** So, the function should work with string instances.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=136)** Let's give it a try by comparing two strings equals and let's say A, B, C, D and D, C, B.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=146)** Yeah, it's false as expected.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=149)** Next, compare two double values.
>
> **[2:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=152)** Double.pi and 3.14, It returned false.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=160)** The function returned false because double pi has higher precision than the right hand argument.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=165)** We could also pass in data instances.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=168)** So let's initialize two data constance, D1 and D2 using the data repeating initializer.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=176)** 10 ones and the same for D2 and I can call the equals function with the two data instances.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=188)** This should return true.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=192)** our generic function works with most basic types from the Swift standard library as they conform to the equatable protocol.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=200)** Generic functions prevent cluttering our code with functions that only differ by the type of their parameters.
>
> **[3:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=206)** By avoiding code duplication, we keep our code clean and prevent maintenance problems.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), let (7), type. (3), class. (1), pass (1)
> **Versions:** 3.14 (1)
> **Speakers:** - [instructor] (1)

#### Working with generic types
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=0)** - [Instructor] Generic types solve a similar problem as generic functions.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=5)** Generic types can work with any type and not only with a particular class, structure or enumeration.
>
> **[0:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=12)** That's why the built-in Swift collection types, the array, the set and the dictionary, are implemented as generic collections.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=20)** Now, imagine that we need the wrapper that can hold values of various types.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=25)** Strings, integers, dates, you name it.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=28)** This playground contains some pre-defined structures.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=32)** You can open the project from the exercise files folder, chapter 3, 0303, begin.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=38)** Without generics, we end up having a wrapper for each type.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=43)** We've got a StringWrapper for string types, and IntWrapper for integers, and a DateWrapper for dates.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=50)** The number of dedicated wrapper types increases with each new type that we need to support.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=56)** Besides, with every added type, we duplicate code.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=60)** The code becomes a maintenance nightmare, even choosing the right wrapper type is challenging.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=66)** Generics are here to help us.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=69)** Let's remove these wrappers.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=72)** And start implementing our generic solution.
>
> **[1:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=75)** I define a wrapper structure that can work with any type.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=81)** Let's call it Wrapper.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=84)** The placeholder appears right after the type's name within angled brackets.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=89)** This placeholder type can be used anywhere within the type's definition.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=94)** We're going to use it to define the storage property.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=98)** Let's also add an initializer that takes an argument of placeholder type.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=103)** It takes a single parameter called value of type T.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=108)** And we initialize the storage property.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=112)** Using the generic version is straight forward.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=115)** Create a constant called piWrapped, and initialize it with the value Double.pi.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=122)** And here comes our wrapper, I provide the type for the placeholder, should be Double, and initialize it with the value Double.pi.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=135)** In most cases, we can even skip the placeholder type, the compiler is able to figure out the type based on the provided value.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=143)** So, let's use the shorter form.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=148)** Now, create a new instance that wraps a string.
>
> **[2:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=151)** I don't provide the type.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=154)** let stringWrapped equals Wrapper, and I just pass in a string.
>
> **[2:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=164)** I don't specify the type.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=165)** Swift type-inference engine can figure it out based on the value, which is a string.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=171)** Our wrapper also works with an object of type Date.
>
> **[2:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=176)** And I create a Date instance.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=178)** We can apply type constraints to generic types.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=181)** To define a type constraint, place the class or the protocol after the placeholder type separated by a colon.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=188)** For example, we could limit the wrapper type to values that adopt the Equatable protocol.
>
> **[3:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=194)** Now, the wrapper structure will be able to wrap only types that conform to the Equatable protocol.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=201)** The playground will compile without problems since all the types we used, double, string and date, conform to Equatable.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (5), let (5), type, (2), class, (1), pass (1)
> **Code Identifiers:** piwrapped (1), stringwrapped (1)
> **Analogies:** imagine (1), for example (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Placeholder types in protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=0)** - So far, we've looked at the benefits of generic types and functions and how to use them.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=6)** How 'about protocols?
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=8)** I've gone ahead and created the new playground page called Associated Types.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=13)** I added the definition of the Taggable Protocol.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=16)** You can find the project in the Exercise Five, chapter three, o three o four, begin further.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=23)** The Taggable Protocol defines requirements for any tag that can hold binary data and uses a tag to identify it.
>
> **[0:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=31)** Now, wouldn't it be great to create a protocol that's not restricted to the data type?
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=36)** Swift allows us to declare a place for the types in protocols.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=40)** Let's see how.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=41)** I declare an associated type next.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=44)** The associated type key word lets us define the place for the name for a type within a protocol.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=50)** I'm going to call it Content.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=53)** The actual type is unknown until a confirming type provides it.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=58)** Next, I replace the type of the data property with a place order type.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=64)** And finally, let's re-factor the initializer.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=69)** Now, we can create some adopting types.
>
> **[1:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=71)** Let's start with a tag double structure.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=76)** It adopts the Taggable Protocol.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=80)** I need to provide the missing properties.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=83)** Tag type string, and data of type, double.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=90)** The next type is a structure that works with date types.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=94)** I copy and paste.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=96)** I copy and paste the tags double and re-name it to tagged date.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=103)** Instead of double, let's use date.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=107)** We could create further structures or classes and assign any built-in or custom type to the data property.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type. (1), finally, (1), type, (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### Using generics with protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=0)** - [Instructor] We can adopt protocols in generic types too.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=4)** Let's create a generic structure called GenericTagged.
>
> **[0:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=8)** I provide the placeholder type and make it adopt the Taggable protocol.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=19)** We can provide that type when creating an instance of this generic structure.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=23)** So let's create a constant called taggedDouble.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=28)** I've typed GenericTagged, and I provide the type, which is double, between angle brackets.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=39)** And let's initialize it with a tag called pi, and the value Double.pi for the data.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=48)** We could even delete the type, because Swift's type inference engine can figure it out without our help.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=55)** I'm going to remove the type, and it should combine just fine.
>
> **[1:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=62)** We can also add type and strength to an associated type in the protocol.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=67)** For example, we can restrict the data property to types that conform to Equatable.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=73)** Now, after this change, we need to update the generic tag structure as well.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=79)** And the placeholder type has to conform to the Equatable protocol.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=83)** Now, the structure conforms to the taggable protocol.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=89)** Generics are super useful and Swift makes it easy for us to implement and use generic types and functions.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=96)** We can also make our protocols work with associated types.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=100)** Protocol-oriented programming wouldn't be as flexible and elegant without generics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (3), delete (1), super (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** taggeddouble (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Implementing a generic stack
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=5)** - [Instructor] The stack is a sequential container that provides a last-in, first-out access.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=10)** We can push new items onto the top of the stack.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=14)** Accessing the most recently added element is possible using peek, or pop.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=19)** Your task is to implement a generic stack that exposes the following methods and properties.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=25)** Push, adds the element to the top of the stack.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=29)** Pop, returns and removes the top element from the stack.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=34)** The method should return nil if the stack is empty.
>
> **[0:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=37)** Peek, returns the top element or nil if the stack is empty.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=42)** Count, returns the number of elements in the stack, and isEmpty returns a Boolean value indicating whether the stack has no elements.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=53)** Now, some hints.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=54)** You should start by defining the protocol.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=57)** The count and isEmpty properties should be read only.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=61)** The methods that modify the instance should be declared as mutating.
>
> **[1:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=65)** Then, create the stack type that adopts the protocol.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=69)** You can use an array as the underlying storage.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=72)** All right, now pass the course and give it a try.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=76)** Watch the next video after you've implemented your solution.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=80)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), try. (1)
> **Code Identifiers:** isempty (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Implementing a generic stack
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=0)** - [Narrator] So, how did it go?
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=7)** Hopefully, you managed to implement your array-based stack.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=11)** You can follow along with me and check out my solution.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=16)** First, I import the foundation framework.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=19)** We'll need it for the various built-in data types.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=23)** Now, let's define the protocol.
>
> **[0:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=25)** It is public, and I call it stack protocol.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=32)** Our stack needs to work with any type.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=35)** Therefore, I introduce a placeholder type for the elements, using the associated type keyword, and I call the placeholder E, for elements.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=46)** Next, I'm going to define the method requirements.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=50)** First, the push method.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=53)** Since pushing new elements into the stack's internal storage will modify the instance, I mark the method as mutating.
>
> **[1:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=61)** The method takes a single argument, I'm going to call it item, of type E.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=68)** The pop method returns, and removes, the top element from the stack.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=73)** This method should also be declared as mutating, since it removes an element from the internal storage.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=80)** Pop might return null if the stack is empty, so the return type should be optional.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=86)** The peak method returns the top element.
>
> **[1:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=89)** However, since it doesn't remove the element from the stack, it doesn't need to be mutating.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=95)** The return type is optional for the same reason as in the case of the pop method.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=100)** Our stack might be empty, so, we can't return anything but null.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=105)** The count property returns the number of elements in the stack.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=110)** Its type is integer, and it needs to be read only.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=115)** We don't want clients to change its value.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=118)** Finally, I add the isn't property.
>
> **[2:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=122)** It's a Boolean, and it should also be get (mumbles).
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=128)** Clients can only read it.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=130)** Now, given this protocol, let's create the stack type.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=135)** I declare it as a public structure called stack.
>
> **[2:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=140)** It needs to be generic, so I provide the placeholder type T.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=146)** Stack adopts the stack protocol.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=149)** Next, I add the method and property requirements defined in the protocol.
>
> **[2:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=154)** Let's copy them over from the protocol.
>
> **[2:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=157)** I've got several compiler errors.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=159)** First, I need to replace the associated type E with the placeholder type T.
>
> **[2:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=166)** Also, here, and we're done.
>
> **[2:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=170)** Now, I can start adding the missing implementation.
>
> **[2:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=173)** First, let's implement the push method.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=177)** This method adds a new element to the top of the stack.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=181)** I'll use an array to store the stack's elements.
>
> **[3:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=185)** I make it a private property to prevent clients from accessing it directly.
>
> **[3:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=190)** Private verse, let's call it storage, and I initialize it to an array with a placeholder type.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=200)** Now I can complete the implementation of the push method, but first, let's make it public to get rid of this compiler error.
>
> **[3:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=208)** Now, I call the array's append method to add the item to the storage.
>
> **[3:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=213)** Storage.append, and I append the item argument.
>
> **[3:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=219)** Next comes the pop method.
>
> **[3:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=222)** It should return the last element and remove it from the stack.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=226)** Let's make this method public, too, and now comes the implementation part.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=232)** The underlying storage is an array, which simplifies the implementation.
>
> **[3:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=237)** I can call the array's pop, last instance method that does exactly what we need.
>
> **[4:02](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=242)** It removes and returns the last element of the array.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=246)** Storage.poplast.
>
> **[4:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=250)** Know that I am not using return here.
>
> **[4:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=252)** Swift 5.1 no longer requires the return keyword in single expression functions, but it's not a mistake if you add it.
>
> **[4:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=261)** The peak method returns the top element without removing it.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=266)** I mark it as public, and now let's implement it.
>
> **[4:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=270)** I rely on the array's last property to return the most recently added element.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=277)** I can omit the return keyword, also, here, thanks to the implicit return introduced in Swift 5.1.
>
> **[4:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=284)** What's left?
>
> **[4:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=285)** The count property returns the array's count.
>
> **[4:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=288)** I also make it public, and return the internal storage's count property, and return the number of elements in the internal storage.
>
> **[5:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=304)** And finally, let's implement the is empty property.
>
> **[5:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=307)** I make it public, and it returns the value of the array's matching property.
>
> **[5:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=314)** Now, I can create a stack as follows.
>
> **[5:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=317)** I'm going to call it string stack, I provide the type, it's a stack that will contain strings, and let's initialize it.
>
> **[5:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=328)** Now we have an empty stack that's ready to accept strings.
>
> **[5:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=333)** We can push strings into it, and let's print some messages like, after popping a value, stringstack.pop.
>
> **[5:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=350)** So, this should remove the element that we added recently, which is Swift.
>
> **[5:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=358)** Its return type is optional, so let's provide something for the case it's empty.
>
> **[6:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=366)** Now, if I run.
>
> **[6:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=368)** Now, if I execute the playground, indeed, it returns Swift.
>
> **[6:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=373)** Let's pop again, and, finally, I call peak, which doesn't remove the element, and now, I print the stack's count property.
>
> **[6:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=390)** Yeah, we only have one element left because we called pop twice, meaning that it returned Swift, and the comma, and the only element left is Hello.
>
> **[6:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=402)** So, how does your solution compare to mine?

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), public (7), type. (3), finally, (3), private (2)
> **CLI Commands:** make (5)
> **Versions:** 5.1 (2)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Implement the Weather App Using POP

#### Weather app design
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=0)** - [Instructor] We aim to implement a simple, yet functional weather app using protocol-oriented programming principles.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=7)** The app will display weather information for a given location by getting the data using web services.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=14)** The weather app follows the Model-View-ViewModel architecture, in short MVVM.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=21)** The MVVM architecture separates the user interface from business logic by introducing three components.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=27)** The View, which consists of visual elements, text fields, labels, switches, and so on.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=34)** The View is concerned with tasks related to presenting the data such as layout, font type, color, and animation.
>
> **[0:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=43)** The ViewModel represents the state of the UI.
>
> **[0:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=47)** We'll talk about it later.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=50)** The Model is the application state and defines the logic to manage that state.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=56)** The View depends on the ViewModel.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=59)** And the ViewModel has a reference to the Model.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=63)** However, this dependency is unidirectional.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=66)** The ViewModel doesn't hold the reference to the View.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=69)** And the Model doesn't know about the ViewModel.
>
> **[1:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=73)** The View is completely decoupled from the Model.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=77)** This design provides a clean separation of concerns and promotes testability and reusability.
>
> **[1:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=83)** The ViewModel propagates Model changes to the View.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=88)** It uses connections called data bindings.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=92)** With data binding, the View reacts to ViewModel changes automatically with no additional coding.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=99)** We're going to rely on SwiftUI and the combined framework to implement the MVVM architecture.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=105)** Here's a high-level overview of the weather apps design.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=109)** The View displays the current weather information and allows the user to enter a location.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=115)** The ViewModel uses a data provider.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=118)** The Model to fetch weather information.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=121)** We'll make it conform to the ObservableObject protocol to enable data binding.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=126)** The Model component provides weather information.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=129)** We're going to fetch weather data from the internet using web services.
>
> **[2:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=134)** We encapsulate the required initialization steps, network cause and data conversions into dedicated controller types.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=142)** We'll rely on built-in protocols to decode the JSON payloads.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=147)** So this is our high-level design.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=150)** Now let's switch to Xcode.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), type, (1), let (1), switch (1)
> **Env Vars:** mvvm (3), json (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Defining the UI using SwiftUI
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=0)** - [Instructor] Open up Xcode and create a new iOS project.
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=6)** Select Single View App, and enter WeatherApp as the Product Name.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=13)** We'll use SwiftUI, but we don't need Core Data, nor Unit Tests, and let's proceed.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=21)** SwiftUI is a new paradigm, and you will need some time to wrap your ahead around it even if you've implemented several iOS apps already.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=30)** SwiftUI lets us lay out user-interfaces in a declarative way.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=34)** Now, select the ContentView.swift file.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=39)** There are two structures.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=41)** Content view conforms to the view protocol.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=44)** The body property defines the view's content.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=48)** Rephrase.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=49)** Content view conforms to the view protocol.
>
> **[0:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=53)** The body property defines the view's content, layout, and behavior.
>
> **[0:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=58)** The generated code has a text view that displays the text, "Hello World!"
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=63)** The content view preview structure conforms to the preview provider protocol.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=68)** Xcode uses the types that adopt the preview provider protocol to generate previews.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=74)** This feature only works with MacOS Catalina.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=77)** We're going to define the views of our app within the content view structure.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=81)** Now, let's revisit our goal.
>
> **[1:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=84)** We build an app that retrieves current weather for a location.
>
> **[1:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=88)** The user interface will be clean and simple.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=91)** We'll use a TextField to enter the location's name.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=95)** And we display the weather information in a Text view.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=99)** Now, let's start by deleting the text view and create a TextField instead.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=106)** The TextField takes two parameters, a title and a binding.
>
> **[1:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=111)** The title is the placeholder string.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=114)** Let's display, "Enter city".
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=118)** The second parameter is the binding.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=121)** The binding acts as a reference to a mutable state.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=125)** It needs to refer to a property marked explicitly with a state property wrapper.
>
> **[2:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=130)** This annotation tells SwiftUI to keep the value of the property between UI updates.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=136)** When the state value changes, the view gets refreshed.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=139)** So, let's declare a state property.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=143)** I make it private.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=145)** It needs to be a variable, and let's call it input, of type string.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=153)** And I initialize it to an empty string.
>
> **[2:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=156)** This variable represents the text entered by the user in the TextField.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=161)** Now, finish the TextField initialization.
>
> **[2:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=165)** I need to use the dollar graphics to access a binding to a state variable.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=171)** $input.
>
> **[2:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=173)** Next, I display the input using a Text view, and I simply print the input.
>
> **[3:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=180)** Now, let's embed the two views in a vertical stack.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=184)** Vstack, and let's close it.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=189)** If we ran the app, it should display what we type and mirror it in the TextView.
>
> **[3:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=200)** As I type, it is mirrored in the TextView.
>
> **[3:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=204)** All right, now let's improve the appearance of our UI.
>
> **[3:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=209)** I'm going to add a divider between the TextField and the Text view.
>
> **[3:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=215)** This will display a horizontal line as a visual separator between the UI elements.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=220)** And I set the TextField's font to the title text style.
>
> **[3:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=225)** .font, and it should be title.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=229)** For Text, I use a smaller body font.
>
> **[3:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=234)** Finally, I apply a default padding to the entire vertical stack.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=240)** This prevents our views from touching the edges of the main view.
>
> **[4:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=244)** Now, let's hit run, and see what we did here.
>
> **[4:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=247)** Yeah, it looks much cleaner.
>
> **[4:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=251)** All right, it looks much better now, but we're not done yet.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=255)** We'll come back and add more logic once we implement the missing pieces.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (1), private (1), type, (1), finally, (1)
> **Code Identifiers:** ios (2)
> **File Paths:** contentview.swift (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### The WebServiceController protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=0)** - [Instructor] We've implemented the basic UI for our app.
>
> **[0:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=3)** The next logical step is to start feeding it with data.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=7)** So let's continue with the model layer.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=10)** We'll be relying on web services to retrieve accurate weather information.
>
> **[0:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=14)** There are various weather web services available, both free and paid.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=20)** We're going to use two web services provided by [openweathermap.org](https://openweathermap.org) and [weatherstack.com](https://weatherstack.com).
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=28)** Both services return their response in JSON format, but the payload structure and contents are different.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=35)** Although the APIs are incompatible, we need to integrate them seamlessly into our application.
>
> **[0:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=42)** We start by creating the service protocol that defines the common method requirements and the expected results and errors.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=50)** Then we'll define dedicated controllers for each web service.
>
> **[0:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=55)** These controllers need to expose the API defined by the service protocol.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=60)** Thus we won't have to deal with different, incompatible interfaces in our application code.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=66)** Now let's go back to Xcode.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=70)** I create a group called Model, and I add a new Swift file that will hold the definition of the service protocol.
>
> **[1:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=80)** It will be a Swift file, and I call it WebServiceController.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=87)** But now let's create a public protocol with the same name, public protocol WebServiceController.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=98)** We need a method for fetching the weather information.
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=101)** Let's call it fetchweatherData.
>
> **[1:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=109)** The method needs a parameter which allows callers to provide the name of the city.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=115)** It should be a string.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=118)** This method is supposed to fetch data from the internet.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=121)** Such long running tasks should be implemented as asynchronous methods.
>
> **[2:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=126)** Swift makes it easy to implement asynchronous behavior.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=129)** Instead of returning a value, we use a completion handler.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=133)** Completion handlers are blocks of code that gets executed when the asynchronous method finishes.
>
> **[2:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=140)** The method should return a description of the current weather conditions for the specified location.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=146)** To keep it simple, I'm going to use a string.
>
> **[2:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=149)** It is optional, because we might not receive a valid response always.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=153)** Speaking of issues, the completion handler should also include an error.
>
> **[2:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=158)** Various problems may occur, we access the network after all, so it's a good habit to create dedicated error types that are specific to the given context.
>
> **[2:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=169)** In Swift, we can model related error conditions using enumerations, so let's create a public enumeration called web service controller error, public enum WebServicecontrollererror.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=186)** I make it adopt the error protocol.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=189)** The error protocol doesn't define any requirements.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=192)** However, by conforming to it, we make it clear that our enumeration represents an error.
>
> **[3:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=199)** Since the error protocol doesn't dictate any method or property requirements, it leaves us a lot of room for creativity.
>
> **[3:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=207)** Let's try to cover the main issues that may, rephrase.
>
> **[3:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=210)** Let's try to cover the main issues that might occur.
>
> **[3:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=214)** First, we may have an invalid URL, so I'm going to add a case for it.
>
> **[3:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=222)** The invalid URL case includes the URL string as an associated value.
>
> **[3:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=227)** The returned response, rephrase, the returned response could also be invalid.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=232)** For example, the JSON payload may be malformed or the server might return an HTML page instead of a JSON string and so on.
>
> **[4:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=241)** To report such issues, I introduced the invalid payload case.
>
> **[4:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=246)** This case includes the original Fetch URL.
>
> **[4:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=249)** By providing the URL, callers can identify the origin of the unexpected content.
>
> **[4:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=255)** And finally, for everything else, I use a generic case called forwarded.
>
> **[4:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=262)** The forwarded case includes the original error.
>
> **[4:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=266)** Now that we have a dedicated error, let's complete the declaration of the fetch weather data method.
>
> **[4:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=273)** The second parameter is a WebServicecontrollererror.
>
> **[4:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=277)** But first, let me fix this typo.
>
> **[4:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=280)** It should be camel case.
>
> **[4:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=282)** So controller with a big C, capital C.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=289)** The error is optional.
>
> **[4:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=290)** Upon successful completion, it will be near.
>
> **[4:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=294)** And this is the final signature of our fetch weather data method, rephrase.
>
> **[4:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=299)** And this is the final signature of our fetch weather data method.
>
> **[5:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=303)** We established the mapping between the web service calls and the rest of our application.
>
> **[5:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=309)** Now it's time to integrate our first real weather API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), public (4), case. (2), continue (1), enum (1)
> **Env Vars:** url (5), json (3), api (2), html (1)
> **CLI Commands:** make (2)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1), [weatherstack.com](https://weatherstack.com) (1)
> **Code Identifiers:** fetchweatherdata (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Working with a third-party API
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=0)** - [Instructor] We're going to fetch real weather data using the Open Weather Map web service.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=5)** Open [openweathermap.org](https://openweathermap.org) and navigate to the API page.
>
> **[0:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=11)** For our app, we're only interested in the current weather data.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=15)** Let's see its documentation.
>
> **[0:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=18)** We'll use the API that returns weather data by city name.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=22)** The syntax is simple.
>
> **[0:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=24)** We must provide the city name and the API key as query parameters.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=29)** To make it work, you will need an API key.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=32)** To obtain the key, you will need to sign up.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=35)** The process is straightforward and the steps are described in the "how to start" section.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=41)** After registration, it takes a couple of hours until the API key gets activated.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=46)** So please go ahead and get that set up.
>
> **[0:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=50)** We'll pick up in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Implementing the OpenWeatherMap controller
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=0)** - In this video, we integrate the open weather map API and fetch live weather information.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=7)** We need a new file created in the model group and name it OpenWeatherMapController.Swift.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=16)** Let's declare the class next.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=19)** Class OpenweatherMapController.
>
> **[0:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=22)** And it should adopt the WebServiceController protocol.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=27)** Exco generates the steps for us, which is a single method requirement.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=32)** First, we need to configure the web service endpoint.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=36)** Let's have a look at the API documentation.
>
> **[0:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=39)** Go to API and current weather data.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=44)** We're going to use the API that accepts unit parameters.
>
> **[0:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=48)** So search for Units format.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=51)** And here's the API call we've been looking for.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=57)** Let's put it here for now.
>
> **[1:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=60)** Now I create a constant called endpoint and assign it the string will just copy it.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=68)** We need to make a couple of changes to create a URL out of this string.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=72)** First, let's make it a valid URL by pre pending HTTPS.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=77)** And I'm going to to replace London with the value of the city argument.
>
> **[1:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=82)** We also have to supply the API key, I create on a numeration that holds the key as a static string and make it private.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=92)** We don't want anybody else to access it.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=95)** And I add a static property.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=99)** You should paste your own OpenWeatherMap's key here.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=103)** As mentioned in the previous video, you can obtain an API key after a quick registration.
>
> **[1:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=108)** So now we can add the app ID parameter.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=112)** And we just put in here the API key.
>
> **[1:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=116)** App ID equals an R API key.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=121)** The city argument may contain invalid characters.
>
> **[2:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=125)** I create a safe URL by calling the adding percent encoding string instance method.
>
> **[2:11](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=131)** I use the guard statement to catch the potential issues.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=136)** Guard let safeURLstring equals and I call end point, Adding Percentage Encoding.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=148)** The characters should belong to the URL Query Allowed Character Set.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=153)** If the safe URL string could be created, we can try to instantiate the endpoint URL.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=159)** That, endpoint URL, equals, and I call the URL initializer that takes a string.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=172)** If any of these calls fail, invoke the completion handler with NIL for weather description and the error is set to invalidate URL and the endpoint set as associated value.
>
> **[3:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=184)** So near for better information and the error should be WebServiceControllererror.invalidURL and the endpoint and I return.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=198)** Now we've got a compiler error, escaping closure captures non escaping parameter completion handler.
>
> **[3:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=205)** A closure is set to escape a function if it gets called after the function returns.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=211)** The compiler is right since the method will return before the actual network call complete.
>
> **[3:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=216)** So the closure escapes the fetch weather data methods body.
>
> **[3:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=221)** A closure that is passed as an argument to a function is non escaping by default.
>
> **[3:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=226)** We need to market exclusively with escaping, to indicate that it is allowed to escape.
>
> **[3:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=232)** We need to change the method signature in both the protocol and also here.
>
> **[4:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=240)** I'm going to switch to the protocol and, now it's right .

> [!info]- Semantic Content
>
> **Env Vars:** api (9), url (9), https (1), nil (1)
> **Code Keywords:** let (5), function (3), static (2), for. (1), private (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** safeurlstring (1), invalidurl (1)
> **UI Navigation:** go to (1), switch to (1)
> **File Paths:** openweathermapcontroller.swift (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### Completing the OpenWeatherMap controller
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=0)** - Let's continue the implementation of the OpenWeatherMap controller.
>
> **[0:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=4)** For networking, we'll use a URL dataTask.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=9)** Let dataTask, and I'm going to use the URL sessions initializer that takes a URL and the completionHandler.
>
> **[0:20](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=20)** For URL, I provide endpointURL, and we're going to implement the completionHandler.
>
> **[0:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=27)** We have a data parameter, a response, and an error.
>
> **[0:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=33)** If there is an error, we're going to wrap it in our dedicated error type and pass it back to the caller.
>
> **[0:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=38)** So, let's check whether there was an error.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=41)** It should be nil, or else we call our completionHandler.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=45)** I'm using guard to check if it's nil, and if it's not nil, we invoke the completionHandler.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=54)** I provide nil for the weather information and webServiceControllerError forwarded, and I include the error.
>
> **[1:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=67)** And exit the method call.
>
> **[1:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=69)** The return response shouldn't be nil either, otherwise, I invoke the completionHandler and provide the invalidPayload error.
>
> **[1:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=77)** Guard let responseData equals data, and if it's nil, then we call the completionHandler, and supply our webServiceControllerError.invalidPayload and the endpointURL, and hit Return.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=99)** Next, we're going to process the response.
>
> **[1:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=102)** Bars and json data is beyond the scope of this course.
>
> **[1:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=105)** The json data to Swift's structures mappings are defined in the OenWeatherMap data Swift file.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=112)** I'm going to add it to our project.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=114)** Right-click on the Model group, and choose Add Files, and select JSONMappers.
>
> **[2:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=124)** Instead of adding folders, we create groups.
>
> **[2:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=129)** And here are codable structures.
>
> **[2:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=133)** Now, I'm going to copy and paste the data passing logic.
>
> **[2:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=138)** First, we create a json decoder.
>
> **[2:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=141)** We use it to decode the json response into the Swift structures.
>
> **[2:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=145)** If the decoding succeeds, we pass in the weather description to the completionHandler.
>
> **[2:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=150)** Otherwise, we call the completionHandler with the appropriate error.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=155)** And finally, let's not forget to call dataTask resume.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=160)** All right, we're done for now.

> [!info]- Semantic Content
>
> **Code Identifiers:** completionhandler (8), datatask (3), endpointurl (2), webservicecontrollererror (2), invalidpayload (2)
> **Code Keywords:** let (5), pass (2), continue (1), return. (1), finally, (1)
> **Env Vars:** url (4)
> **UI Navigation:** right-click (1)
> **Definitions:** is an  (1)
> **Speakers:** - let (1)

#### Introducing the view model
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=0)** - [Instructor] We can now fetch current weather data using the OpenWeatherMap service and we've also got the user interface.
>
> **[0:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=7)** So, let's connect the dots.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=10)** The missing piece is the view model.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=13)** It acts as a padding between the model and the view without referencing the view.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=19)** We'll introduce a new class that represents the view model.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=23)** First, add a new group and call it ViewModel.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=29)** Then create a new swift file called WeatherViewModel.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=36)** Now let's declare the ViewModel class.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=41)** WeatherViewModel adopts the observable object protocol to enable data binding.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=46)** Next, I declare a property called the weatherInfo and initialize it to an empty string.
>
> **[0:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=54)** A market with the published property wrapper.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=59)** This allows Swift to observe this property and update the view whenever this property changes.
>
> **[1:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=66)** The view model exposes a method to fetch the weather information.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=70)** It relies on the model that is the open weather map controller to provide this functionality.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=76)** Let's create a private property weatherService and initialize it.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=85)** Next, I add the method that fetches the current weather for a given city.
>
> **[1:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=90)** It has a single parameter called city of type string.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=94)** We'll use the weather service fetch weather data method.
>
> **[1:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=100)** The first parameter should be the city.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=103)** Now let's implement the completion handler.
>
> **[1:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=106)** We have the info and the error arguments and let's do some error handling.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=112)** The error should be nil and the return weather information needs to be valid too.
>
> **[1:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=117)** So let's check them first.
>
> **[2:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=120)** Error should be nil and the weather information should be valid.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=128)** Otherwise, we update the weatherInfo property with an error message and leave the method.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=136)** And I provide an error message that does "Could not retrieve weather information for the city." and return.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=147)** As you may remember, changing the published property triggers UI updates, since the completion handler are executes in the background, it is crucial to switch to the main UI thread whenever we update the weatherInfo property.
>
> **[2:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=161)** So I'm going to dispatch this call to the main queue.
>
> **[2:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=166)** If the weather data has been fetched successfully, we can assign it to the published property.
>
> **[2:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=172)** Again, we need to perform this update in the main way thread.
>
> **[2:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=177)** Self weatherInfo should be equal to weatherInfo.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=181)** We're done with the view model.
>
> **[3:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=183)** We need to make some adjustments in our view.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=186)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (1), class. (1), private (1), return. (1)
> **Code Identifiers:** weatherinfo (5), weatherservice (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Presenting weather data
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=0)** - [Instructor] We've implemented the model and the view model.
>
> **[0:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=3)** In this video, we're going to add the missing link that allows the view to reflect changes in the model.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=10)** The view model conforms to the observable object protocol and has a published property.
>
> **[0:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=16)** SwiftUI can observe this property, and that happens almost automatically.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=21)** Let's switch to the content view.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=23)** We need to tell SwiftUI which type has the data it should observe.
>
> **[0:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=28)** As we know, that's the weather view model class.
>
> **[0:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=32)** Let's create the new property with the view model and initialize it.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=40)** To allow SwiftUI to observe the published properties, we've got to mark the property using the observed object property wrapper.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=49)** Bear in mind that you can only use the observed object with a type that conforms to the observable object protocol.
>
> **[0:56](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=56)** And we're done with the data binding part.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=59)** Next, update the text view at line 23 to display the weather view model's weather info instead of the input text.
>
> **[1:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=68)** Whenever the published data changes, the view gets updated.
>
> **[1:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=72)** There's only one thing left.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=74)** We need to trigger the fetching of weather information and pass in the city name entered by the user.
>
> **[1:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=81)** I'm going to change the TextField's initializer.
>
> **[1:25](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=85)** We'll use the TextField onEditingChanged unCommit method.
>
> **[1:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=91)** The text should stay the same, Enter city, the data binding is still input, and leave onEditingChanged empty, and implement interface and provide the unCommit closure.
>
> **[1:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=110)** This closure gets called when the user hits the Return key.
>
> **[1:54](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=114)** First, I'm going to check if there's a valid input.
>
> **[1:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=118)** If not, self.input is empty, and if the user provided some text, that's called the weather view model's fetch method, and I pass in the input.
>
> **[2:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=135)** Note that we're not returning the weather information here.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=139)** The fetch method updates the published weather info property, which in turn, will automatically update the text view.
>
> **[2:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=147)** Let's run the app.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=155)** Excellent, we have a functional weather application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), switch (1), class. (1), interface (1)
> **Code Identifiers:** oneditingchanged (2), uncommit (2)
> **UI Navigation:** switch to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Integrating a fallback service
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=0)** (gently chiming bells)
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=5)** - Web services are not guaranteed to function all of the time, they may fail for various reasons; such as timeout issues, or authentication problems.
>
> **[0:15](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=15)** We can try to avoid this problem by using multiple services.
>
> **[0:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=19)** If one service fails, we switch to another one.
>
> **[0:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=23)** Your task is to enhance the weather app with such a Fallback Strategy.
>
> **[0:29](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=29)** Editors, please remove the transition from the slides to this X code view.
>
> **[0:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=34)** I added a new web service controller that allows us to fetch weather information using the weather stack API.
>
> **[0:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=45)** The corresponding code, the birth structures can be found in the Jason Mappers Group.
>
> **[0:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=51)** Not that I had to add the weather's tech domain to the app transport security exception domains.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=59)** The free plan doesn't include SSL.
>
> **[1:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=63)** There is HTTPS connections, and the iOS security policy denies HTTP connections by default.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=70)** To access HTTP resources, we need to white list the given domain.
>
> **[1:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=76)** Your task is to implement a fallback strategy if the open weather map web service call fails, far back to the weather stack service.
>
> **[1:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=86)** Now here are some hints: You should add a new initializer requirement to the web service controller protocol.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=98)** The initializer takes an optional web service controller parameter that can be used to pass in the far back service.
>
> **[1:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=104)** Also add a computed property requirement.
>
> **[1:47](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=107)** The property represents the far back service and should be gettable, the far back service can be near.
>
> **[1:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=115)** Next, implement the new initializer and the property requirements in the conforming types.
>
> **[2:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=121)** Then invoke the far back services, fetch weather data method from the data tasks completion handler.
>
> **[2:07](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=127)** If the call returns an error or the payload is invalid, and finally, make sure to set the open weather map controllers far back service when initializing it in the weather view model.
>
> **[2:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=139)** The far back service should be a Weather Tech instance though whether sexual don't have a fallback service.
>
> **[2:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=146)** All right, now give it a try.
>
> **[2:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=148)** Jack, the next video with my solution when you are done, or if you get stuck.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), switch (1), default. (1), pass (1), finally, (1)
> **Env Vars:** http (2), api (1), ssl (1), https (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Cross-References:** next video (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Speakers:** - web (1)

#### Solution: Integrating a fallback service
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=0)** - [Narrator] Welcome back!
>
> **[0:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=6)** Hopefully, you have managed to come up with an elegant solution.
>
> **[0:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=10)** Let me show you one way to approach this problem.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=13)** Here's the Web Service Controller.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=17)** I'm going to add an initializer requirement first.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=21)** The fallback service parameter is a Web Service Controller and it's optional.
>
> **[0:26](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=26)** By making it optional, we allow callers to set it to nil.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=30)** This indicates that the controller doesn't have a fallback service.
>
> **[0:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=35)** Next, I add the fallback service computed property.
>
> **[0:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=40)** It's a type Web Service Controller, and it can be nil.
>
> **[0:44](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=44)** So I make it optional.
>
> **[0:46](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=46)** Now and lets make it gettable only.
>
> **[0:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=49)** Clients are not supposed to set its value.
>
> **[0:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=52)** And now, I am going to switch to the open ethernet controller, the Swift file.
>
> **[0:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=59)** I add the fallback service property first.
>
> **[1:04](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=64)** I declare it as a constant to make it immutable.
>
> **[1:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=70)** Next comes the initializer.
>
> **[1:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=74)** I provide a default nil value for the fallback service parameter.
>
> **[1:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=79)** And all it does is setting the fallback service property.
>
> **[1:27](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=87)** Now I'm going to incorporate the fallback logic into the fetch weather data method.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=93)** Let's have a look at the data desk's completion handler.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=98)** We might receive an error, so let's cover this case first.
>
> **[1:43](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=103)** If the error is not nil, I try to use the fallback service instead of calling the completion handler with the forwarded error.
>
> **[1:52](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=112)** First, let's see if we have a fallback service if let fallback equals self fallback service and then I call the fallback's fetch weather data method.
>
> **[2:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=128)** I pass in the city and the completion handler.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=136)** If there is no fallback service, we have no other choice but return the error to the caller via the completion handler.
>
> **[2:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=144)** I apply the same logic also if the return data is nil.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=155)** Let's clean up the code a bit.
>
> **[2:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=160)** And I have to move this return, also here.
>
> **[2:48](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=168)** If we try to build our app right now, it won't compile.
>
> **[2:51](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=171)** That's because the weather stack controller doesn't conform to the updated Web Service Controller protocol yet.
>
> **[2:58](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=178)** So, let's perform the necessary changes.
>
> **[3:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=181)** Basically, we will repeat the same steps as we did in the previous case.
>
> **[3:06](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=186)** So we'll need the fallback service property, then the initializer.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=192)** I provide the default value of nil and initialize the fallback service property.
>
> **[3:18](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=198)** And next I'm going to integrate the fallback logic.
>
> **[3:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=202)** To save us some time, I just copy and paste what we already implemented from the open weather map controller.
>
> **[3:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=212)** So I replace this part.
>
> **[3:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=215)** I make some final adjustments in the view model class.
>
> **[3:40](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=220)** To use the fallback strategy, I pass in a weather stack controller instance to the open weather map controller initializer.
>
> **[3:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=229)** And here we need a weather stack controller instance.
>
> **[3:55](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=235)** The weather stack controller doesn't have a fallback service; however, our design is flexible.
>
> **[4:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=241)** We could add a third web service and use it as a fallback for the weather stack controller and so on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), switch (1), self (1), return, (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=1)** - Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=3)** I hope you enjoyed it.
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=5)** Now, you've got the taste of how powerful protocols can be.
>
> **[0:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=9)** If you're interested in more Swift content, you should check my other courses.
>
> **[0:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=13)** Practical Design Patterns in Swift delves into the most popular design patterns and Swift programming best practices.
>
> **[0:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=21)** iOS Development: Architecture explores the fundamental concepts behind modern iOS application design and architecture.
>
> **[0:30](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=30)** And if you'd like to build more secure iOS apps, check out my iOS Development: Security course.
>
> **[0:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=36)** You can find me on LinkedIn, Twitter, YouTube and my blog.
>
> **[0:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=41)** Thanks again for watching.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (4)
> **CLI Commands:** find (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Master Swift]]
← [[Swift- Delegations and Data Sources]] | **4 of 4**

## Appears In

- [[Master Swift]]

## Related Courses

_Courses sharing skills:_

- [[Swift- Delegations and Data Sources]] — Swift (Programming Language)
- [[Programming For Non Programmers Ios 17 And Swift 5]] — Swift (Programming Language)
- [[Swift 5 Essential Training]] — Swift (Programming Language)

---

[↑ Back to top](#)