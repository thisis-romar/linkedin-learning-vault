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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Swift%205-%20Protocol-Oriented%20Programming.md)

![Swift 5: Protocol-Oriented Programming](https://media.licdn.com/dms/image/v2/C560DAQF5bvF-v4D6OA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578676972352?e=2147483647&amp;v=beta&amp;t=RQOV86o_U0avPB7P0FEWJ2LL0ng3U4ycraOTPPslLM8)

# Swift 5: Protocol-Oriented Programming

> Take a closer look at protocol-oriented programming (POP), a new paradigm introduced by Apple. In this course, instructor Károly Nyisztor explains what POP is, how it differs from classical approaches, and how to work with it to efficiently develop apps with Swift. Learn about the pillars of POP: protocol extensions, protocol inheritance, and protocol composition. Protocol extensions let you defin

> [LinkedIn Learning](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming) | 2h | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Benefits: Protocol-oriented programming](#benefits-protocol-oriented-programming)
  - [What you should know](#what-you-should-know)
- [**1. The Pillars of Protocol Orientation**](#1-the-pillars-of-protocol-orientation) (10 videos)
  - [What is protocol-oriented programming?](#what-is-protocol-oriented-programming)
  - [Introducing the protocol](#introducing-the-protocol)
  - [Adopting protocols](#adopting-protocols)
  - [Conforming to protocols via extensions](#conforming-to-protocols-via-extensions)
  - [Understanding polymorphism](#understanding-polymorphism)
  - [Protocol inheritance](#protocol-inheritance)
  - [Adopting multiple protocols](#adopting-multiple-protocols)
  - [Protocol extensions](#protocol-extensions)
  - [Challenge: Removing tight coupling](#challenge-removing-tight-coupling)
  - [Solution: Removing tight coupling](#solution-removing-tight-coupling)
- [**2. Protocol-Oriented Programming**](#2-protocol-oriented-programming) (6 videos)
  - [Why protocols?](#why-protocols)
  - [From unstructured code to POP](#from-unstructured-code-to-pop)
  - [Designing with classes: First try](#designing-with-classes-first-try)
  - [Designing with classes: Subclassing](#designing-with-classes-subclassing)
  - [The benefits of thinking in protocols](#the-benefits-of-thinking-in-protocols)
  - [Highlighting the differences](#highlighting-the-differences)
- [**3. Generics**](#3-generics) (7 videos)
  - [The importance of generics](#the-importance-of-generics)
  - [Defining generic functions and methods](#defining-generic-functions-and-methods)
  - [Working with generic types](#working-with-generic-types)
  - [Placeholder types in protocols](#placeholder-types-in-protocols)
  - [Using generics with protocols](#using-generics-with-protocols)
  - [Challenge: Implementing a generic stack](#challenge-implementing-a-generic-stack)
  - [Solution: Implementing a generic stack](#solution-implementing-a-generic-stack)
- [**4. Implement the Weather App Using POP**](#4-implement-the-weather-app-using-pop) (10 videos)
  - [Weather app design](#weather-app-design)
  - [Defining the UI using SwiftUI](#defining-the-ui-using-swiftui)
  - [The WebServiceController protocol](#the-webservicecontroller-protocol)
  - [Working with a third-party API](#working-with-a-third-party-api)
  - [Implementing the OpenWeatherMap controller](#implementing-the-openweathermap-controller)
  - [Completing the OpenWeatherMap controller](#completing-the-openweathermap-controller)
  - [Introducing the view model](#introducing-the-view-model)
  - [Presenting weather data](#presenting-weather-data)
  - [Challenge: Integrating a fallback service](#challenge-integrating-a-fallback-service)
  - [Solution: Integrating a fallback service](#solution-integrating-a-fallback-service)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Benefits: Protocol-oriented programming](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=1)** - Most software developers are familiar with object oriented [[Programming Concepts]], but in [[Swift (Programming Language)|Swift]] we can take a different approach. Protocol-oriented programming is a powerful paradigm that can simplify and improve the design of our systems considerably. Hello, I am Karoly Nyisztor. I have been developing software systems for more than two decades now, and I am passionate about Swift and [[iOS Development]]. I have also authored several books and online courses. In this course, I provide an overview of the core protocol-oriented programming concepts, and I show you how to apply them effectively using hands-on coding examples. I am going to show you techniques that produce clean, flexible code and improved performance. We'll leverage the power of protocol orientation to trade in complex class hierarchies and unwanted legacies for loosely-coupled granular designs. We start by taking the deep dive into protocols, and the pillars of protocol-oriented programming. Then, we compare the object-oriented approach with the protocol-based way of designing software. We'll dedicate a chapter to generics. Generics walk hand-in-hand with protocols, and they are deeply-rooted in the language. Finally, we'll build a fully functional weather app using a protocol-oriented approach. To solidify what you learned from following along, I've included practical challenges and solutions. I'm really excited to share what I know about protocol-oriented programming with you.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/benefits-protocol-oriented-programming?u=76281980&t=95)** All right, let's get started!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming Concepts]] (2), [[Swift (Programming Language)|Swift]] (2), [[iOS Development]] (1)
> **Env Vars:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - most (1)

#### [What you should know](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-you-should-know?u=76281980&t=1)** - Our course aims to deepen your knowledge of Protocol Oriented Programming techniques and how to build better, more flexible applications. I'm going to explain all of the concepts and will provide thorough explanations regarding implementation details and about the sample code we used throughout this course. However, since we delve into intermediate topics, prior knowledge about object-oriented [[Software Development]] and some experience in [[Swift (Programming Language)|Swift]] programming is required. For example, we're going to work with classes, value types, and closures. If you're not familiar with these concepts, check out our Swift Essential Training course. To implement the exercises in this course, you will need [[Xcode]] 11.1 or later. You can download Xcode for free from the Mac App Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2), [[Xcode]] (2), [[Software Development]] (1)
> **Versions:** 11.1 (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)
> **Speakers:** - our (1)


### 1. The Pillars of Protocol Orientation

[↑ Back to Table of Contents](#table-of-contents)

#### [What is protocol-oriented programming?](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=0)** - [Instructor] In June 2015, Apple introduced a new programming paradigm called protocol oriented programming. The concept isn't that new at all. Protocols have been around for decades. Many object oriented programming languages rely on them as a means to define communication contracts between objects. [[Java]], C#, or [[PHP]] use the term interface instead of protocol. In C++ we've got the abstract class. The creators of Objective-C and [[Swift (Programming Language)|Swift]] decided to use the term protocol, so protocol is just another name for interface. But what exactly is a protocol? The protocol describes the method and property requirements that need to be implemented by conforming types. Although it is possible to implement default behavior in a protocol, we can't instantiate it. Protocols serve as blueprints, rather than fully functional types. Now, let's talk about protocol orientation. When we design a software system we identify the main entities first. Then, we model the relationships between these entities. At this stage, we can start thinking in base classes and inheritance. Alternatively, we can rely on protocols and protocol implementations. Swift provides full support for both approaches. However, Apple engineers prefer the protocol-based approach and they practice what they preach.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/what-is-protocol-oriented-programming?u=76281980&t=93)** The Swift standout library has been designed and developed using POP techniques. How does it work? "Don't start with a class, start with a protocol." In the protocol oriented approach we start modeling our system with a protocol. Swift provides built in support for the protocol oriented paradigm. We've got advanced features like protocol extensions, protocol inheritance, and protocol composition. Also, we should favor value semantics over reference types. That is consider using struts, (mumbles) and Tapas instead of working exclusively with classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (4), [[Java]] (1), [[PHP]] (1)
> **Env Vars:** php (1), pop (1)
> **CLI Commands:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introducing the protocol](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=1)** - [Instructor] Protocols stand at the core of POP. They model abstraction by describing what the conforming types shall implement. Protocol names must begin with a capital letter. Apple has clear recommendations regarding protocol naming. Protocols that describe what something is should read as nouns. For example, collection, UITableViewDataSource, or UITextFieldDelegate. Protocols that describe a capability should be named using the suffixes able, ible, or ing. Such a Codable, CustomStringConvertible, and NSCoding. Let's get started exploring the protocol syntax. Open up [[Xcode]] and create a playground called protocols.
>
> **[0:57](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=57)** Let's make it full screen and I'm going to remove the generated code except the import will need Foundation. All right, we declare a protocol called Taggable. I'm using the protocol keyword and let's call it Taggable. The protocol definition, that is the method and the calculated property requirements go between the curly braces that follow the protocol name. We specify variables as usual. This protocol has a property called tag of type string. And the type should be string. Now we got an error. Properties declared in a protocol need to have at least a get or. I'm going to make the tag property both settable and gettable. We specify these by writing get and set after its declaration between curly braces. Let's declare a second property called data of type data. It's only gettable. In other words, it's a read only variable. To define an immutable property, declare it as var and use the get specifier. In a protocol we can define type property requirements using the static keyword. Let's declare a static read only property called counter of type integer. And I make it read only.
>
> **[2:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=153)** Since it's a static property, its value gets shared by all instances. Protocols can also define instance and type method requirements. Let's add an instance method called update. The method takes an argument called data of type data and it returns a Boolean. If we define the requirement for a method that modifies the instance, it is recommended to market with the mutating keyword. Since the update method is probably going to change the instance, let's mark it as mutating. The mutating keyword allows value types also to adopt the protocol. We can also define static method requirements in a protocol. So add a static method called incrementCounter. This method is supposed to increment the internal counter property. If you want to restrict confirming types to classes only, we can define the protocol as such by making it inherit from the any object protocol. Now, we get the compiler error because of the mutating keyword. Class methods can always modify the instance. Thus, we don't need to use the mutating keyword in class only protocols. Now think twice before limiting protocol adoption to class types. Once you do so, value types won't be able to adopt the protocol. Let's remove the restriction we just added. And now the compiler error is gone.
>
> **[4:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=249)** Protocols can dictate initializers to be implemented by conforming types. The following initializer requirement takes two parameters, tag of type string and data of type data.
>
> **[4:28](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-protocol-2?u=76281980&t=268)** The signature is the same as when declaring initializers in a type. However, we don't provide the initializer's body. All right, as we saw, defining a protocol is quite similar to defining classes or structures, but some restrictions apply. For instance, we can declare constants in the protocol using the let keyword. Also, default values computed properly, initializer, and method definitions are not allowed in the protocol. Since we can't assign default values to the properties defined in the protocol, [[Swift (Programming Language)|Swift]]'s type inference engine has no way of working out the type. Therefore, we must specify the type of our properties explicitly. Adopting protocols is our next topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (1), similar to (1), for instance (1)
> **Code Identifiers:** incrementcounter (1)
> **Env Vars:** pop (1)
> **Cross-References:** as we saw (1)
> **Definitions:** in other words (1)
> **Best Practices:** recommended (1)

#### [Adopting protocols](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=0)** - [Instructor] If you want to create a type, confirming to a protocol, we must declare and define the matching properties and methods. To follow along with me, open the project from the exercise files folder, Chapter 1, 01_03, begin. Let's create a structure called tagged data. To make it adopt the taggable protocol, add a column after the type's name, and write the protocol's name. After this change, we get a compiler error that says, "Type 'TaggedData' does not conform to protocol 'Taggable'." We can rely on auto-complete to add the missing property and method declarations. So, let's do that. Click the red dot to reveal the details, then click 'Fix.' The code gets generated. It has a lot of placeholders and, the implementation is missing, so let's add some code. The initializer should initialize the tag and the data properties. Self.tag = tag, and self.data = data. The update method updates the data property and returns 'true.' And let's return 'true.' We have to declare the method as mutating, because it modifies the instance's data property. The increment counter should increment the value of the static counter property.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-protocols?u=76281980&t=94)** Counter += 1. And finally, let's fix the last issue. We need to provide the default value for the static counter instance. I'm going to initialize it to zero. Now, the code should compile just fine. The tagged data type conforms to the taggable protocol.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Conforming to protocols via extensions](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=0)** - [Narrator] Developers often rely on code they do not own. That's the case when working with SDKs and third-party libraries. I create a new playground called ProtocolConformance. Now, let's assume that we want to build a [[Cryptography]] framework. We start with a protocol, but first, I'm going to to remove the generated code, we only need to keep the foundation framework and the [[Representational State Transfer (REST)|rest]] will be deleted. So let's create the protocol, I'm going to call it encrypting, and it defines a single-method requirement, the XOR method. It takes a parameter called key of type onsite integer, and it returns option of self. We can adopt this protocol in our types easily. If I create a structure like TaggedData, [[Xcode]] will help out and create the stubs, and I could provide the implementation here. Now, what if I want to make the string type conform to the protocol? We can't change the implementation of the string's structure as we did with the TaggedData type. However, we can use a type extension to add new methods or properties to an existing type. This approach works even if you don't have access to its source code. So, I create the extension for string,
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=95)** and adopt the encrypting protocol here. And here's the implementation. We need to return a string and I call the initializer that takes the byte's sequence. First, I retrieve the string's contents as a collection of UTF-8 codes. Then, I'm going to rely on the map array method to combine each element with the provided key it was in the XOR operation. Map, and in the closure, I combine each element using XOR with the provided key. For encoding, I use UTF-8. We just enhanced the string type with the new feature, so let's try it out. I create a source string, let source equal hello protocol. Then, declare a new string called target, and assign the result of performing the XOR method on the source string. XOR should be available. For key, I use 42. Finally, we print a couple of diagnostics strings. Print target, if it doesn't exist, I print an error message. And we can call XOR on the target using the same key to get back the original string. XOR works both ways. I use the same key, and if the result is nil, again,
>
> **[3:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/conforming-to-protocols-via-extensions?u=76281980&t=194)** I print an error message, failed to decode. And let's execute the playground. The output shows the encrypted and the decrypted text. We're not restricted to adopt protocols in types that we own. Type extensions let us add protocol requirements to any type, even if you don't have access to its source code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Xcode]] (1)
> **Env Vars:** xor (7), utf (2)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Understanding polymorphism](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=0)** - Polymorphism is a fundamental object oriented programming concept and it's also essential to protocol oriented programming. Polymorphism comes from Greek and means many [[Forms]] in programming. It denotes the ability to provide a single interface to different types. To illustrate the concept, I went ahead and created a playground project. You can find it in the exercise files for their chapter one or 105 and begin. Let's have a look at the shapes playground. The shape protocol defines the read-only area properly. This is the only property requirement that conforming types must implement. I've created several concrete shapes that conform to the shape protocol, square, rectangle, rhombus, and circle. Now let's define a variable of type shape VAR shape of type shape. We can't instantiate the shape protocol directly. However, we can take advantage of the polymorphic behavior and assign any of the concrete types to the shape variable. Let's assign the rectangle instance first. The width should be 10 and the height say 20. Now print out the shapes area. Next we assign a circle of radius 10 and we can print out the shapes area as well. Note that we've been using the same shape variable. First we initialize it with the rectangle.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=95)** Then with the circle instance, now let's assign a rhombus that's provide four for one side and six on the other one, and again, we print the shapes area. I'm going to just copy this statement. Now, how about grading a list and filling it with instances of type, rectangle, circle, square, and rhombus? VRA, just as the other built in collections can only work with a distinct type. That is, we can't insert instances of unrelated types into the same array or dictionary. Actually, these types aren't unrelated. They all conform to the shape protocol. Thus, we can define an array of shape objects like this. Let me scroll up a bit. So I create the shapes variable, which is an array that stores shapes. We can also use the shorthand form. I prefer this one, so let's leave it as it is. We've instead, she did an empty array of shapes. Now let's add some items to it. First, I create a square of side C five and I'm going to add it to the array using the uphand method shapes. append square. Not this one, but the instance. Then I create a rectangle of width five and height 10 and I appended it to our ships or a two
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/understanding-polymorphism?u=76281980&t=192)** and I add another one a circle with a radius of the face with a radius of three and I upend this one too. We could add instances of any type that conforms to the shape protocol. Polymorphism allows us to create the common functionality defined in the protocol without knowing the actual type. So we can write a foreign loop like this for shape in shapes, and then print each shapes area and let's execute the playground. The console displays the area of each shape. From the array. Polymorphism is useful when we need to access and use unrelated objects through a common interface without having to keep track of their concrete time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** var (1), vra (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - polymorphism (1)

#### [Protocol inheritance](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=0)** - [Instructor] A protocol can inherit from one or more protocols and add new requirements on top of the inherited ones. Protocol inheritance is a useful feature that lets us create granular designs. Let's open the projects from exercise files Chapter 1 01 06. Begin and select the protocol inheritance playground. So here's the Taggable protocol. Now, let's assume that we want to add new requirements. Say we need the ability to save instances to the local storage and restore them later on. Also, we need to retrieve the base64 encoded version of the data. We could squeeze in all these requirements into Taggable. Besides its original requirements, Taggable would also specify persistence and base64 encoding related methods and properties. Our protocol would define too many unrelated requirements. That's a bad design decision and goes against the single responsibility principle. We're going to follow a different strategy. We'll create dedicated protocols for each set of requirements. First, we create a protocol that defines the persistence-related requirements. I'm going to call it TaggedPersistable. The TaggedPersistable protocol inherits from Taggable. If a type adopts the TaggedPersistable protocol, it has to implement the property and method requirements from both protocols.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=93)** TaggedPersistable adds an initializer requirement. The initializer is responsible for loading a previously saved instance from the storage. The initializer takes a tag argument of type string. This parameter identifies the instance to be restored. The contents of parameter represents the location URL. I'll just type URL. We might encounter various issues when dealing with persistence. Missing files, lack of permission, and so on. So it's a good idea to mark the initializer as throwable. Next, declare the persist method. It takes a URL parameter that represents the storage location. This method might throw errors, as well, so let's mark it as throwable. Protocol inheritance is similar to class inheritance. However, protocols aren't limited to single inheritance. For example, we could add further requirements to adopters of TaggedPersistable, such as CustomStringConvertible or Equatable. A type that conforms to TaggedPersistable needs to implement the requirements for Taggable, CustomStringConvertible, Equatable, and TaggedPersistable. Similarly, we create a protocol for the base64 encoding. Let's call it TaggedEncodable. And it should also inherit from Taggable. The protocol defines a single gettable property requirement called base64.
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-inheritance?u=76281980&t=189)** It's of type string and I make it read only. Any new type can decide which protocol to adopt, Taggable if it only needs to hold data that can be tagged, TaggedPersistable if it requires persistence capabilities, or TaggedEncodable if retrieving the base64 encoded string representation of its data is a feature we need. We're not limited to adopting a single protocol. We could create types that adopt all the three protocols.

> [!info]- Semantic Content
>
> **Env Vars:** url (3)
> **Analogies:** similar to (1), for example (1), such as (1)
> **UI Navigation:** open the (1), select the (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Adopting multiple protocols](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=0)** - [Instructor] So far, we've worked with types that adopted a single protocol. With protocol composition we can create types that conform to multiple protocols. Protocol composition is one of the pillars of the protocol oriented programming paradigm. [[Swift (Programming Language)|Swift]], like many other programming languages doesn't allow multiple inheritance for classes. However, any type can adapt to multiple protocols. Why is this so important? By conforming to multiple protocols, we can ensure that our types implement the requirements they really need. Instead of inheriting unnecessary noise from a class hierarchy, our types can adopt the protocols that are needed for their proper functionality. All right, let's see how it works. You can follow along with me by opening the starter playground project from the exercise files folder. Chapter one, 0107, begin. First, I create a structure called my data. Let's assume that it has to support persistence and basic 64 end coding. All we need to do is make it adopt both the tagged persistable and tagged encodable protocols. And let's also add tagged encodable. X code can generate the protocol stubs for us. Next, I implement the initializer. I declare a constant data and initialize it using data in it with contents of, and I provide the URL. That data equals data, and we need the initializer,
>
> **[1:41](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=101)** the contents of URL. This initializer can throw an error, so we need to call it using the try keyword. Then, I call south and into by passing in the tag and the data as arguments. Next comes the persist method. It uses the right to data instance method to write the contents to the location provided by the URL argument. It's a throw over method, so we call it using try. Try self.data.write to URL.
>
> **[2:23](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=143)** The base 64 property returns the base 64 encoded string representation of the data. Return south.data and I'm going to use the base 64 encoded string method. And finally, let's implement the initializer. It initializes the tag and the data properties. We still have a compiler error because we haven't added a custom description. That's required because we adopt the custom sting convertible protocol. As you can see in the tagged persistable protocol, we also have the custom string convertible. Let's return the types name and it's tag properly. Return my data and the value of the tag property.
>
> **[3:21](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=201)** My data now conforms to multiple protocols. Tagged persistable, tagged encodable and custom string convertible. We can add as many protocols to the type inheritance list as we need. However, as we adopt new protocols, the types implementation keeps growing, making it more and more difficult for us to get an overview. Although the type extension wasn't designed to improve code readability, it can help us better organize our code. So, let's refactor our structure. We'll introduce a dedicated type extension for each protocol conformance. First, create a dedicated extension for the custom string protocol. I scroll down. Extension my data and custom string convertible.
>
> **[4:19](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/adopting-multiple-protocols?u=76281980&t=259)** Now simply cut and paste the definition of the description property from the structure and put it here. Similarly, create an extension for the conformance to tagged encodable. Extension my tagged data and tagged encodable. And let's move the base 64 property to this extension. I cut it from here and move it to the extension instead. Now I can delete the tagged encodable from my data's inheritance list. Finally, define an extension for the tagged persistable conformance and move over the initializer and the persist method. Extension my data tagged persistable should be the protocol, and we move the initializer and the persist method that have to do with the persistence. And now I can remove the tagged persistable protocol conformance from the inheritance list. Instead, I add the taggable protocol. The my data structure's implementation became slimmer. We capped all the features but our code is better organized and easier to follow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **Env Vars:** url (4)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Protocol extensions](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=0)** - [Instructor] Providing default behavior in the protocol could save us a lot of time when implementing the conforming types. Although we can't include implementation in the protocol's body, it is possible to provide default method and property implementations in a protocol extension. You can open the project from the Exercise Files folder, Chapter 1, 01-08, begin. Let's provide the default implementations for the TaggedPersistable protocol first. We declare protocol extensions using the extension keyword. It's the same syntax we used to create type extensions. Let me scroll up, and here's our TaggedPersistable protocol. I'm going to put the extension right below it. After creating this protocol extension, I'm going to copy and paste the method definitions from the corresponding MyData extension. This is where it conforms to a TaggedPersistable, so let's copy the initializer and the persist method. Next, we provide default implementation for the TaggedEncodable protocol. Extension, TaggedEncodable. And now I copy the base64 properties definition from the MyData extension and paste it here. With our extensions in place, conforming types don't need to implement the property or method requirement. These will be available through the protocol extensions.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=96)** So let's scroll down and remove the two MyData extensions. I select both, and let's delete them. We need to add back the two protocols to the inheritance list, though. TaggedPersistable and TaggedEncodable. Now the Playground should compile without errors. We can create new types that adopt these protocols with only a few lines of code. Here's how to define the structure that conforms to the TaggedPersistable protocol. I call it PersistableData and make it conform to TaggedPersistable. [[Xcode]] added three properties, and the new type is ready. I only need to provide an initializer. As for description, I provide a simple one, which is simply return the type's name and its tag. Now I can initialize a new PersistableData object. Let p equals PersistableData, for tag I provide 42, and I create a data object using a repeating byte pattern. Now it is possible to calls its persist instance method, for example. Thanks to the default implementations provided
>
> **[3:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/protocol-extensions?u=76281980&t=190)** through protocol extensions, we can skip defining the method and property requirements, but that's optional. If a type needs a different behavior, it can freely replace the default implementation defined in the extension.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (1)
> **UI Navigation:** open the (1), scroll up (1), scroll down (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Removing tight coupling](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=0)** - [Instructor] And here's the chapter challenge. Let's have a look at the following playground. We have a payment controller class that declared two properties, Amazon service and Etsy service. It has an initializer and the method that calculates how much money we are making on Amazon and Etsy. The Amazon service and the assay service types are defined in the services does [[Swift (Programming Language)|Swift]] file. Their implementation is straightforward. Whenever we sell something on the given platform, the profit gets added to a private variable. Amazon service exposes orders placed and Etsy service provides the method items sold for this purpose. Each class has a property that returns the total profit earnings and total sold. Now let's go back to the main playground file. Do use these classes. We first create an Amazon service and an Etsy service instance. Then we instantiate the payment controller by passing in the service instances we created, we can simulate sales by calling the corresponding service methods and finally we print the total profit by calling the controllers. Calculate earnings method. Let's run the playground. It does the job. However, the current design shows a rephrase. However, the current design shows a serious weakness.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=95)** The payment controller class references the Amazon service and the Etsy service types directly. That's the sign of tight coupling and that's something we should avoid because it has many drawbacks. If we change the public API of any of these service types, we also need to refactor the payment controller. Supporting new services increases the maintenance efforts. Further, your task is to reduce the coupling by removing the dependencies between the payment controller and the concrete service types. Instead of relying on the Amazon service and Etsy service type directly introduce a level of abstraction. There are different ways to solve this problem. Here are some hints. Introduce a public service protocol and define the property and method requirements. Adopt the protocol by declaring Amazon service and Etsy service type extensions. Hide the concrete types by changing their visibility levels. Create a factory method that returns a service protocol based on an identifier. Optionally, you can embed the factory method,helper type, and finally remove the concrete service type references from the payment controller. Instead rely on the service. You should stop the lesson now and download the exercise file. Start making the necessary changes. Watch the next video after you've implemented your solution,
>
> **[3:09](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-removing-tight-coupling?u=76281980&t=189)** or if you get stuck, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **Cross-References:** go back to (1), next video (1)
> **Exercise Files:** download the (1), exercise file (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Removing tight coupling](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=0)** - [Narrator] Welcome back. Did you manage to get rid of the tight coupling between the payment controller and the amazon service and etsy service classes? Now, here's how I solved this problem. Let's take a look at the two service classes. Both classes define the same functionality. They defer only in their property and method names. By creating a common protocol that defines these requirements, we introduce a level of extraction. The first step toward a loosely coupled system. So, I create a public protocol called "service". I'm going to declare the property that represents the total profit, first. I call it "total", is of type "float", and it is gettable. The add method increases the total by the amount provided in the payment argument. We need a payment parameter of type "float", and that's our method. I have to make it mutating, because it modifies the instance. Next, I make the amazon service and etsy service classes adopt the protocol. I'm going to do that by declaring some extensions. Extension "amazon service",
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=93)** and it conforms to service. And, let's provide the missing implementations. So, the total property returns the value of the type's earnings property. And, the add method delegates the call to the "order placed" method. Similarly, I create an extension for etsy service. Let's next go and add the missing stubs. "Total" returns the value total sold. And "add" invokes the "items sold" method. Now, I can hide the complete service types. I'm going to change their visibility levels to "private". Amazon service should be private, and the etsy service class as well. The class should be private and all its public properties and methods but the initializer. I make the initializer file private, because I'll need to be able to invoke it from our factory method. I make the initializer file private, because I'll need to be able to invoke it from our factory method. But, the other methods and properties should be private. But, this one... and total sort should also be private.
>
> **[3:13](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=193)** Now, the service types are hidden. Trying to run the playground triggers a compile error. Let's fix this. So, I go back to the services.[[Swift (Programming Language)|swift]] file. I declare a public enumeration called "service type". Public enum service type. I add two cases: amazon and etsy. We'll use these values to identify the complete service types in the factory method. I implement the factory method next. It's a public method... called "make". And it takes a single parameter service of type "service type". The return type is the service protocol. The clients don't deal with amazon service or etsy service, anymore. They only see the enumeration and the protocol. And the implementation is really straightforward. We check the value of the service argument, and return the appropriate instance. Case amazon, return... amazon service... and case etsy, return etsy service. Next, I'm going to refactor the payment controller. First, I remove the obsolete references. And, that's gone, too.
>
> **[4:50](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=290)** I declare a constant that holds the list of services we'll be using. It's an array of service types. Note that I'm relying on the protocol, here. And, let's update the initializer. It takes a parameter of type "array of service". It initializes our services property. Self.services equals services. The calculate earnings method comes next. I declare a result property of type "float" and initialize it to zero. Var result of type "float" equals zero. Then, I iterate through the items of the elements from the services array, and sum up the value of their total property. Services, and I add to the result variable the value of each service's total property. And finally, let's return the result. Alternatively, we could use the "reduce array" method, which shrinks the implementation to one line of code. Let me uncomment this, and... we can use services.reduce. The initial result is zero. In the closure, I sum the previous cause return value, and the next element's total property. So, that's the previous cause return value.
>
> **[6:24](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=384)** And, I add the next element's total property. We're almost done. Instead of instantiating the amazon service and etsy service classes, I use the factory method. Make, and for service... I provide the amazon case. And, instead of instantiating the etsy service, I call make with the service argument set to etsy. Finally, I need to fix the initialization of the payment controller, too. For the services argument, I provide an array that contains the two instances: amazon service... and etsy service. All right, now I can execute the playground. And, let's fix these compiler problems, too. We don't have an order placed anymore, because that was part of the amazon service interface, which is now hidden. Instead, we should call the add method defined in the common service protocol. Add payment 25, and finally... add payment 12.50. And, we have to make these variables.
>
> **[7:59](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-removing-tight-coupling?u=76281980&t=479)** All right, now I can execute the playground. It should provide the same result as before. The payment controller class relies on the common protocol. Since it doesn't have dependencies on any of the actual service classes, changing them doesn't effect the payment controller. Besides, integrating new services is easy. The new type needs to adopt the service protocol. Then, we enhance the service type enumeration and the factory method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (8)
> **Non-Speech:** (typing) (2), (upbeat music) (1)
> **File Paths:** services.swift (1)
> **Versions:** 12.50 (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Prerequisites:** initialization (1)


### 2. Protocol-Oriented Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [Why protocols?](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=0)** - Why are protocols and protocol inheritance preferred over base classes and subclassing? Because, as we'll see, protocols serve as better abstractions than classes. Modeling a system using classes implies inheritance. What's wrong with inheritance, you might ask? It's been around for a while, and we've been using it to build various software [[Microsoft Products|products]]. That's right, inheritance works great until we hit some of its restrictions. Let's take a look at both the benefits and the drawbacks of this fundamental object-orientation concept. The superclass provides the core functionality. It includes all the logic required to satisfy the requirements for that given type. If we need more specific behavior, we can add subclasses. A subclass can use the default behavior defined in the superclass, completely override or decorate the behavior from the base class. Inheritance gives us a lot of flexibility and freedom. However, it has some serious limitations too. Limitation number one, [[Swift (Programming Language)|Swift]], like many other programming languages, prohibits multiple inheritance. Thus, if our subclass needs functionality from a different superclass, we can't make it work. Therefore, we add that feature to our superclass. We keep enhancing the base class.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/why-protocols?u=76281980&t=94)** Eventually, it becomes bloated and hard to maintain. Limitation number two, inheritance doesn't work for value types. This is a severe limitation since value types became first-class citizens in Swift. Protocols solve all these issues. Although Swift restricts multiple inheritance, any type can implement multiple protocols. That allows for granular designs by creating as many protocols as needed. Besides, we're not restricted to classes since value types can also conform to protocols. Next, we'll have a look at how programming paradigms evolved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (3), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - why (1)

#### [From unstructured code to POP](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=0)** - [Narrator] The way we design and develop software systems was entirely different a couple of decades ago. Unstructured programming was the earliest programming paradigm. Back then, computer programs used to be massive, continuous chunks of code. The code consisted of sequentially ordered instructions. Each statement would go into a new line. Source code lines were numbered, or identified by a label. The following Sinclair BASIC program converts from feet to meters. More complex apps consisted of thousands of lines of code. To make any changes or improvements, developers had to check the statements line by line. As the programs grow, this task becomes increasingly difficult. Maintaining, or even understanding, such a code base was challenging. Unstructured programming has received much criticism for producing hardly readable, so-called spaghetti code. Structured programming languages appeared in the late '50s. They rely on subroutines to break down the code into logical steps. Each subroutine contains a set of instructions to be carried out. The following example shows a program written in C, a popular procedural language. The main function is the entry point of our program. We have a dedicated feet to meters function that performs the feet to meters conversion. The main function relies on there being a print function to print text to the console.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/from-unstructured-code-to-pop?u=76281980&t=94)** And scan F to ask for user input. The feet to meters function gets called to convert the input from feet to meters. Structured programming lets us define additional functions as needed. To add a new feature for converting pounds to kilograms, we would create a new function. Structured programming was a huge leap forward compared to the monolithic code and practices. Named functions improved code readability and reduced development times considerably. Structured programming seemed to be the ultimate answer to all [[Software Development]] challenges. However, as the software systems kept growing in complexity, it became clear that breaking down the code into smaller, logical units, can solve all the issues. Object-orientation appeared in the '80s. Object-oriented languages let us break down the software to smaller, manageable units called objects. Each object has a well-defined responsibility. The objects in a system interact with each other to provide the expected functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** basic (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)

#### [Designing with classes: First try](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=0)** - [Instructor] In [[Swift (Programming Language)|Swift]], you can follow the object-oriented way of thinking or try to adopt the new protocol-oriented approach. You can even rely on generic and [[Functional Programming]]. Swift blurs the line between the various programming paradigms. In the following videos, I'll walk you through some examples that show the benefits of the protocol-oriented programming over the class-based approach. Let's say that we need to create types that fulfill the following requirements. Store data along with a unique identifier, provide file system storage and restoration capabilities, and return a Base64-encoded representation. Let's open up [[Xcode]]. I create a new playground called Tagged Data. Let me clean up the generated code, and I'm going to make it full screen. We need the foundation framework, as usual, and let's implement a class-based solution first. I start by declaring a class called Tagged Data. Next, I add to properties that represent the identifier, the tech property of type string and data of type data. We also need to implement an initializer. It takes two parameters, the tag and the data. And let's initialize our properties. We just fulfilled the first requirement.
>
> **[1:33](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=93)** We have a type that can store an identifier data pair. Now let's add the local persistent feature. I create a method called Persist. The Persist method rides the contents of the data to the location specified by the URL argument. So we need a URL argument. Type URL. And the method will simply use the Data Write Instance method. Write URL. And since this method can throw an error, we have to call it using Try. Also the Persist method has to be marked with the throws key [[Microsoft Word|word]]. Next, I create a convenience initializer to load the data from Persistence. The initializer takes two parameters, the tag and the URL that represents the storage location. Tag of type String and we need the URL.
>
> **[2:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=159)** This initializer relies on the data types innate contents of method. This method might throw an error so we call it using Try. If we get the valid data object we call the tag data initializer with a tag and the data arguments. I need to mark this initializer as throw (mumbles) two. And I make it a convenience initializer. Finally lets add a calculated property that returns the Base64-encoded string representation of the data. I call it Base64-encoded String. I call it Base64-encoded String. It should be a string. And I call the datas Base64-encoded String Instance method. All right so, we just implemented all the requirements. Although this approach works, it goes against the single responsibility principle. One of the five basic software engineering principles known as Solid. I talk about these principles and more in my course [[iOS Development]]: Architecture. The Single Responsibility Principle states that every class should have responsibility over a single part of the functionality provided by the software. And that responsibility should be entirely encapsulated by the class. In short, a class should have one well defined purpose. However our TaggedData Class does more than one thing.
>
> **[4:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-first-try?u=76281980&t=254)** It holds data along with a unique identifier, it stores and loads data from the file system and it returns the Base64-encoded representation of the data. A tag with too many responsibilities is often called a "God" Object. As more and more types depend on the "God" Object, the system becomes tightly coupled and maintaining or enhancing such a system is difficult. We need to find a better way to support the requirements. So, let's try a more granular design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2), [[Functional Programming]] (1), [[Xcode]] (1), [[Microsoft Word|Word]] (1), [[iOS Development]] (1)
> **Env Vars:** url (6)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** ios (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Designing with classes: Subclassing](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=0)** - We've seen that embedding all the features in a class is not a viable solution. God Objects with too many responsibilities lead to coupling. Tight coupling is the root of severe problems in object oriented systems, so we should do our best to avoid it. We're going to refactor the tagged data class and breakout some of the functionality into subclasses. So I create a new playground page called "SubClasses." And lets rename the previous playground page to "GodObject." Next I select the taggeddataclasses declaration including the tag and data properties and the initializer code and copy it or to our newly created page. Command C and I switch here, command V. Let's close our classes declaration. Now we have a class with one ratified responsibility. It works some data that can be identified using a tag. Next we implement the local persistent feature. This time we rely on subclassing instead of adding this feature to the tag data class. I'm going to to create a subclass of tagged data called "PersistentTaggedData," it's a subclass of TaggedData. Now switch to the GodObject playground page and select the persist and the convince initializer methods. And let's move it.
>
> **[1:37](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=97)** And let's paste it here. The PersistentTaggedData subclass has a single responsibility, it handles data persistence. So far, so good. There is one requirement left. The Base64 encoding of data, we follow the same pattern as before. Let's create another tagged data subclass called "TaggedDataWithEncoding." And should be a subclass of tagged data. And now let's switch over to the GodObject playground page and I'm going to copy the based64EncodingString declaration, and let's paste it here. We finished redesigning the original GodObject. Instead of the monolithic class, we have separate subclasses. And each subclass, has one well defined responsibility. We comply with the single responsibility principle, which is great. However, there are further issues with this code. For instance, what if we need a type that supports both persistence and base64 encoding ? I create a class called "PresistentBase64Encoded" and make it inherit from PersistentTaggedData and TaggedDataWithEncoding. We got an error. [[Swift (Programming Language)|Swift]] doesn't support multiple inheritance. So this approach won't work. We could squeeze all the functionalities into a baseclass but that would lead the to the GodObject problem we just solved. Another issue with subclassing, is that we can't
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/designing-with-classes-subclassing?u=76281980&t=192)** use with value types. If you tired to create a structure, let's call it "Tagged," we can't make it inherit from "TaggedData." Besides as we add new requirements, the number of subclasses increases, leading to tagged exposure and other common pit fall of object oriented systems. It appears that we're stuck, but now worries. Rotos comes to the rescue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1)
> **UI Navigation:** select the (2), switch to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** based64encodingstring (1)
> **Analogies:** for instance (1)
> **Speakers:** - we (1)

#### [The benefits of thinking in protocols](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=0)** - [Instructor] Now let's revamp our design using a protocol-oriented approach. I'm going to remove this line to get rid of the compiler error, and let's create a Playground page and name it Protocols.
>
> **[0:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=17)** The protocol-oriented approach works by creating a protocol. We're going to forget classes and focus on protocols. We'll create dedicated protocols for each major feature. Let's clean up the generated code, and we'll start with the protocol taggable. It declares two property requirements, tag and data. Both are gettable and settable. Data, that's dot data also get set. The protocol also declares an initializer requirement. It has two parameters, the tag and the data. Conforming types must implement all these properties and the initializer declared in the taggable protocol. Next, I create a protocol that declares the requirements needed to persist the data. Let's name it TaggedPersistable. It declares the initializer requirement that takes a tag parameter and a URL. URL of type URL. And the persist method for [[Data Storage]] in the file system, we need to provide a URL. And this method can also throw an error. The protocol for Base64 encoding requirements is tagged and codable. It declares a single read-only property requirement. It should be of type string and it's read-only.
>
> **[1:53](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=113)** So I mark it as gettable. We've got three protocols, but they don't provide any functionality. We can provide default behavior to any method or computed property requirement of a protocol using protocol extensions. Without this feature, conforming types would need to implement, basically, the same logic over and over again. That would mean a lot of redundant code. Let's implement a default implementation for the tagged persistable methods. Start by declaring a protocol extension. The code is the same that we used in the class-based examples, so we can copy the implementation from the subclasses Playground page. But, first, I'm going to create the extension. Now let's switch Playground pages, and I need the initializer and the persist method from the persistent tagged data class. We don't need the convenience keyword. Let's also define the default behavior for the tagged and codable's Base64 encoded property. Again, I create an extension and the implementation is straightforward. I call the datas base64encodedstring instance method. We can adopt any or all of these protocols easily. Assuming that we need a type that encapsulates some data in a tag, we'd write the following, the class MyTaggedData. It adopts the taggable protocol.
>
> **[3:31](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=211)** Let [[Xcode]] create the stabs and the initializer. We initialize the data and the tag properties. It also works with structures. We don't even need to provide the initializer, since a memberwise initializer gets automatically generated for structures. Now we can instantiate the new type, but, first, I'm going to remove the class, because it will collide with the my tag data structure definition, and let's create a constant, let taggedData = MyTaggedData.
>
> **[4:17](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=257)** Let's call the tag first, and the data, I instantiate it with the repeating pattern. If the type needs persistence features, we can make it conform to the tagged persistable protocol and we can use the data persistence feature right away.
>
> **[4:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-benefits-of-thinking-in-protocols?u=76281980&t=285)** First, I create a URL that points to the document's directory. I'm using the file manager's URL's for method, and we need the first value from the array. Now I can create the URL by appending path component MyData. And now I can call the tech data's persist method. Now, what if we also need to Base64 encode the data? Just add tagged and codable protocol conformance, and we can retrieve the Base64-encoded string representation without further modifications. I create a string and assign the tag data's Base64 encoded property. The best part is that we didn't have to write a single line of code to support data persistence and Base64 encoding in the MyTaggedData type. All we need is to make our types adopt the tagged persistable or tagged encodable protocols, or both if we need all the features. The protocol-oriented design leads to a better and more flexible system. Besides, we avoided all the pitfalls of the class-based solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Xcode]] (1)
> **Env Vars:** url (7)
> **CLI Commands:** make (2)
> **Code Identifiers:** taggeddata (1)
> **Speakers:** - [instructor] (1)

#### [Highlighting the differences](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/highlighting-the-differences?u=76281980&t=0)** - Let's summarize the benefits of the protocol oriented approach over the class-based design. Starting with the class that implements all requirements leads to the so-called god-object. A class that has too many responsibilities. Having such classes introduces tight-coupling, a severe decease of object oriented systems. As more and more objects depend on each other code changes will tend to spread across the code base. Fixing bugs or adding new features becomes a tedious, error prone task. Subclassing helps us solve the god-object problem and we manage to create a granular design; however, subclassing might lead to another problem known as type explosion. Besides, inheritance doesn't work with value types. The protocol based design addresses all the issues without side effects. The result in design is flexible and it works perfectly with both classes and value types. By adopting multiple protocols, we can create types that fulfill as many requirements as needed. Default implementations eliminate or reduce the amount of client code significantly. Next, we dive into generics.

> [!info]- Semantic Content
>
> **Definitions:** known as (1)
> **Speakers:** - let (1)


### 3. Generics

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of generics](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=0)** - [Instructor] Although this course is about protocol-oriented programming, we can't avoid talking about generics. Generics are deeply rooted in the language. We usually don't even notice that we're relying on them. Whenever we encounter protocols, we'll often also see generics. As an example, the built-in [[Swift (Programming Language)|Swift]] collection types conform to the collection protocol and several other protocols as well. Besides, they are also implemented as generic types. The dictionary, the array and the set, are all defined as generic types. So, why do we use generics? In short, generics can save us from typing similar code over and over again. I show you what that means through a practical example. Let's assume that we need a function that tests whether two values are equal. We could come up with the following solution. This implementation is straightforward and we can test it by typing equals and for the left hand side argument, I provide three and right hand side, let's say, four. It's redone for us. Great. However, our function has a severe limitation. We can't use it to compare two double values. We got the compiler error. Cannot convert value of type double to expected argument type int. No problem.
>
> **[1:32](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=92)** We can define a new function that works with double types. I copy it's definition and change the type of the parameters to double. And now it works. Problem solved, right? We've covered int And double, but how about the following. I define two float types. Let pi, and I provide the type explicitly. That's required because Swift infers floating point numbers to double. And the second one also a float, equals 2.71.
>
> **[2:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-importance-of-generics?u=76281980&t=142)** And let's invoke equals again with pi and e. Again we get a compiler error. We end up creating yet another function that accepts float types. It should work now. Let's try it out. Yep. Later on we may need to compare further types, strings, dates, and so on. Implementing an equals function for each new type leads to as many similar functions and a lot of code repetition. The strategy goes against the DRY, Don't Repeat Yourself principle, which states that we should eliminate duplication in logic via extraction, and that's precisely the issue that generics solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2)
> **Env Vars:** dry (1)
> **Versions:** 2.71 (1)
> **Speakers:** - [instructor] (1)

#### [Defining generic functions and methods](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=0)** - [Instructor] Implementing a new function for every type leads to a lot of redundant code. To avoid code duplication, we can combine all the different functions into a single generic function. Let's see how. I create a new playground page called Using Generics. And let's rename the previous one too without generics. To create the gener, replace. To create the generic function, we need to provide at least one place holder type. The place holder type must appear right after the functions' name between angle brackets. So I declare the equals function and I provide the place holder type between angle brackets. We could have used any other identifier. Capital T is just a popular way to refer to generic place holders. We can use this place holder type in the argument list or anywhere in the functions body. So let's define the functions parameters. The left hand side argument of type T and right hand side also of type T, and return the a Boolean here. Now let's implement it. We return the result of comparing the two arguments. Now, our code doesn't compile. That's because [[Swift (Programming Language)|Swift]] doesn't know how to compare the two objects of place holder type. A type needs to conform to the equator where protocol to test whether its instances are equal.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=96)** We can enforce this requirement by applying the type constraint on the place holder type. A type constraint specifies that the type conforms to a particular protocol or inherits from a specific class. Here's how to apply it. The syntax is simple. We place a constraint after the place holder, separated by a colon. And it should conform to equatable. Now the function accepts instances of types that adopt the equatable protocol. Most basic built-in Swift types conform to the equatable protocol. The string type is one of them. So, the function should work with string instances. Let's give it a try by comparing two strings equals and let's say A, B, C, D and D, C, B. Yeah, it's false as expected. Next, compare two double values. Double.pi and 3.14, It returned false. The function returned false because double pi has higher precision than the right hand argument. We could also pass in data instances. So let's initialize two data constance, D1 and D2 using the data repeating initializer. 10 ones and the same for D2 and I can call the equals function with the two data instances. This should return true.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-generic-functions-and-methods?u=76281980&t=192)** our generic function works with most basic types from the Swift standard library as they conform to the equatable protocol. Generic functions prevent cluttering our code with functions that only differ by the type of their parameters. By avoiding code duplication, we keep our code clean and prevent maintenance problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (3)
> **Versions:** 3.14 (1)
> **Speakers:** - [instructor] (1)

#### [Working with generic types](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=0)** - [Instructor] Generic types solve a similar problem as generic functions. Generic types can work with any type and not only with a particular class, structure or enumeration. That's why the built-in [[Swift (Programming Language)|Swift]] collection types, the array, the set and the dictionary, are implemented as generic collections. Now, imagine that we need the wrapper that can hold values of various types. Strings, integers, dates, you name it. This playground contains some pre-defined structures. You can open the project from the exercise files folder, chapter 3, 0303, begin. Without generics, we end up having a wrapper for each type. We've got a StringWrapper for string types, and IntWrapper for integers, and a DateWrapper for dates. The number of dedicated wrapper types increases with each new type that we need to support. Besides, with every added type, we duplicate code. The code becomes a maintenance nightmare, even choosing the right wrapper type is challenging. Generics are here to help us. Let's remove these wrappers. And start implementing our generic solution. I define a wrapper structure that can work with any type. Let's call it Wrapper. The placeholder appears right after the type's name within angled brackets. This placeholder type can be used anywhere within the type's definition.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=94)** We're going to use it to define the storage property. Let's also add an initializer that takes an argument of placeholder type. It takes a single parameter called value of type T. And we initialize the storage property. Using the generic version is straight forward. Create a constant called piWrapped, and initialize it with the value Double.pi. And here comes our wrapper, I provide the type for the placeholder, should be Double, and initialize it with the value Double.pi. In most cases, we can even skip the placeholder type, the compiler is able to figure out the type based on the provided value. So, let's use the shorter form. Now, create a new instance that wraps a string. I don't provide the type. let stringWrapped equals Wrapper, and I just pass in a string. I don't specify the type. Swift type-inference engine can figure it out based on the value, which is a string. Our wrapper also works with an object of type Date. And I create a Date instance. We can apply type constraints to generic types. To define a type constraint, place the class or the protocol after the placeholder type separated by a colon.
>
> **[3:08](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-generic-types?u=76281980&t=188)** For example, we could limit the wrapper type to values that adopt the Equatable protocol. Now, the wrapper structure will be able to wrap only types that conform to the Equatable protocol. The playground will compile without problems since all the types we used, double, string and date, conform to Equatable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2)
> **Code Identifiers:** piwrapped (1), stringwrapped (1)
> **Analogies:** imagine (1), for example (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Placeholder types in protocols](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=0)** - So far, we've looked at the benefits of generic types and functions and how to use them. How 'about protocols? I've gone ahead and created the new playground page called Associated Types. I added the definition of the Taggable Protocol. You can find the project in the Exercise Five, chapter three, o three o four, begin further. The Taggable Protocol defines requirements for any tag that can hold binary data and uses a tag to identify it. Now, wouldn't it be great to create a protocol that's not restricted to the data type? [[Swift (Programming Language)|Swift]] allows us to declare a place for the types in protocols. Let's see how. I declare an associated type next. The associated type key [[Microsoft Word|word]] lets us define the place for the name for a type within a protocol. I'm going to call it Content. The actual type is unknown until a confirming type provides it. Next, I replace the type of the data property with a place order type. And finally, let's re-factor the initializer. Now, we can create some adopting types. Let's start with a tag double structure. It adopts the Taggable Protocol. I need to provide the missing properties. Tag type string, and data of type, double. The next type is a structure that works with date types. I copy and paste.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/placeholder-types-in-protocols?u=76281980&t=96)** I copy and paste the tags double and re-name it to tagged date. Instead of double, let's use date. We could create further structures or classes and assign any built-in or custom type to the data property.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### [Using generics with protocols](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=0)** - [Instructor] We can adopt protocols in generic types too. Let's create a generic structure called GenericTagged. I provide the placeholder type and make it adopt the Taggable protocol. We can provide that type when creating an instance of this generic structure. So let's create a constant called taggedDouble. I've typed GenericTagged, and I provide the type, which is double, between angle brackets. And let's initialize it with a tag called pi, and the value Double.pi for the data. We could even delete the type, because [[Swift (Programming Language)|Swift]]'s type inference engine can figure it out without our help. I'm going to remove the type, and it should combine just fine. We can also add type and strength to an associated type in the protocol. For example, we can restrict the data property to types that conform to Equatable. Now, after this change, we need to update the generic tag structure as well. And the placeholder type has to conform to the Equatable protocol. Now, the structure conforms to the taggable protocol. Generics are super useful and Swift makes it easy for us to implement and use generic types and functions.
>
> **[1:36](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/using-generics-with-protocols?u=76281980&t=96)** We can also make our protocols work with associated types. Protocol-oriented programming wouldn't be as flexible and elegant without generics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (2)
> **CLI Commands:** make (2)
> **Code Identifiers:** taggeddouble (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Implementing a generic stack](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-implementing-a-generic-stack?u=76281980&t=5)** - [Instructor] The stack is a sequential container that provides a last-in, first-out access. We can push new items onto the top of the stack. Accessing the most recently added element is possible using peek, or pop. Your task is to implement a generic stack that exposes the following methods and properties. Push, adds the element to the top of the stack. Pop, returns and removes the top element from the stack. The method should return nil if the stack is empty. Peek, returns the top element or nil if the stack is empty. Count, returns the number of elements in the stack, and isEmpty returns a Boolean value indicating whether the stack has no elements. Now, some hints. You should start by defining the protocol. The count and isEmpty properties should be read only. The methods that modify the instance should be declared as mutating. Then, create the stack type that adopts the protocol. You can use an array as the underlying storage. All right, now pass the course and give it a try. Watch the next video after you've implemented your solution. Good luck.

> [!info]- Semantic Content
>
> **Code Identifiers:** isempty (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Implementing a generic stack](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=0)** - [Narrator] So, how did it go? Hopefully, you managed to implement your array-based stack. You can follow along with me and check out my solution. First, I import the foundation framework. We'll need it for the various built-in data types. Now, let's define the protocol. It is public, and I call it stack protocol. Our stack needs to work with any type. Therefore, I introduce a placeholder type for the elements, using the associated type keyword, and I call the placeholder E, for elements. Next, I'm going to define the method requirements. First, the push method. Since pushing new elements into the stack's internal storage will modify the instance, I mark the method as mutating. The method takes a single argument, I'm going to call it item, of type E. The pop method returns, and removes, the top element from the stack. This method should also be declared as mutating, since it removes an element from the internal storage. Pop might return null if the stack is empty, so the return type should be optional. The peak method returns the top element. However, since it doesn't remove the element from the stack, it doesn't need to be mutating.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=95)** The return type is optional for the same reason as in the case of the pop method. Our stack might be empty, so, we can't return anything but null. The count property returns the number of elements in the stack. Its type is integer, and it needs to be read only. We don't want clients to change its value. Finally, I add the isn't property. It's a Boolean, and it should also be get (mumbles). Clients can only read it. Now, given this protocol, let's create the stack type. I declare it as a public structure called stack. It needs to be generic, so I provide the placeholder type T. Stack adopts the stack protocol. Next, I add the method and property requirements defined in the protocol. Let's copy them over from the protocol. I've got several compiler errors. First, I need to replace the associated type E with the placeholder type T. Also, here, and we're done. Now, I can start adding the missing implementation. First, let's implement the push method. This method adds a new element to the top of the stack. I'll use an array to store the stack's elements. I make it a private property to prevent clients from accessing it directly.
>
> **[3:10](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=190)** Private verse, let's call it storage, and I initialize it to an array with a placeholder type. Now I can complete the implementation of the push method, but first, let's make it public to get rid of this compiler error. Now, I call the array's append method to add the item to the storage. Storage.append, and I append the item argument. Next comes the pop method. It should return the last element and remove it from the stack. Let's make this method public, too, and now comes the implementation part. The underlying storage is an array, which simplifies the implementation. I can call the array's pop, last instance method that does exactly what we need. It removes and returns the last element of the array. Storage.poplast. Know that I am not using return here. [[Swift (Programming Language)|Swift]] 5.1 no longer requires the return keyword in single expression functions, but it's not a mistake if you add it. The peak method returns the top element without removing it. I mark it as public, and now let's implement it. I rely on the array's last property to return the most recently added element. I can omit the return keyword, also, here, thanks to the implicit return introduced in Swift 5.1. What's left?
>
> **[4:45](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=285)** The count property returns the array's count. I also make it public, and return the internal storage's count property, and return the number of elements in the internal storage. And finally, let's implement the is empty property. I make it public, and it returns the value of the array's matching property. Now, I can create a stack as follows. I'm going to call it string stack, I provide the type, it's a stack that will contain strings, and let's initialize it. Now we have an empty stack that's ready to accept strings. We can push strings into it, and let's print some messages like, after popping a value, stringstack.pop. So, this should remove the element that we added recently, which is Swift. Its return type is optional, so let's provide something for the case it's empty. Now, if I run. Now, if I execute the playground, indeed, it returns Swift. Let's pop again, and, finally, I call peak, which doesn't remove the element,
>
> **[6:22](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-implementing-a-generic-stack?u=76281980&t=382)** and now, I print the stack's count property. Yeah, we only have one element left because we called pop twice, meaning that it returned Swift, and the comma, and the only element left is Hello. So, how does your solution compare to mine?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (5)
> **CLI Commands:** make (5)
> **Versions:** 5.1 (2)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Implement the Weather App Using POP

[↑ Back to Table of Contents](#table-of-contents)

#### [Weather app design](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=0)** - [Instructor] We aim to implement a simple, yet functional weather app using protocol-oriented programming principles. The app will display weather information for a given location by getting the data using web services. The weather app follows the Model-View-ViewModel architecture, in short MVVM. The MVVM architecture separates the user interface from business logic by introducing three components. The View, which consists of visual elements, text fields, labels, switches, and so on. The View is concerned with tasks related to presenting the data such as layout, font type, color, and animation. The ViewModel represents the state of the UI. We'll talk about it later. The Model is the application state and defines the logic to manage that state. The View depends on the ViewModel. And the ViewModel has a reference to the Model. However, this dependency is unidirectional. The ViewModel doesn't hold the reference to the View. And the Model doesn't know about the ViewModel. The View is completely decoupled from the Model. This design provides a clean separation of concerns and promotes testability and reusability. The ViewModel propagates Model changes to the View. It uses connections called data bindings. With data binding, the View reacts to ViewModel
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/weather-app-design?u=76281980&t=95)** changes automatically with no additional coding. We're going to rely on SwiftUI and the combined framework to implement the MVVM architecture. Here's a high-level overview of the weather apps design. The View displays the current weather information and allows the user to enter a location. The ViewModel uses a data provider. The Model to [[Fetch]] weather information. We'll make it conform to the ObservableObject protocol to enable data binding. The Model component provides weather information. We're going to fetch weather data from the internet using web services. We encapsulate the required initialization steps, network cause and data conversions into dedicated controller types. We'll rely on built-in protocols to decode the [[JSON]] payloads. So this is our high-level design. Now let's switch to [[Xcode]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[JSON]] (1), [[Xcode]] (1)
> **Env Vars:** mvvm (3), json (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Defining the UI using SwiftUI](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=0)** - [Instructor] Open up [[Xcode]] and create a new iOS project. Select Single View App, and enter WeatherApp as the Product Name. We'll use SwiftUI, but we don't need Core Data, nor Unit Tests, and let's proceed. SwiftUI is a new paradigm, and you will need some time to wrap your ahead around it even if you've implemented several iOS apps already. SwiftUI lets us lay out user-interfaces in a declarative way. Now, select the ContentView.[[Swift (Programming Language)|swift]] file. There are two structures. Content view conforms to the view protocol. The body property defines the view's content. Rephrase. Content view conforms to the view protocol. The body property defines the view's content, layout, and behavior. The generated code has a text view that displays the text, "Hello World!" The content view preview structure conforms to the preview provider protocol. Xcode uses the types that adopt the preview provider protocol to generate previews. This feature only works with MacOS Catalina. We're going to define the views of our app within the content view structure. Now, let's revisit our goal. We build an app that retrieves current weather for a location. The user interface will be clean and simple. We'll use a TextField to enter the location's name.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=95)** And we display the weather information in a Text view. Now, let's start by deleting the text view and create a TextField instead. The TextField takes two parameters, a title and a binding. The title is the placeholder string. Let's display, "Enter city". The second parameter is the binding. The binding acts as a reference to a mutable state. It needs to refer to a property marked explicitly with a state property wrapper. This annotation tells SwiftUI to keep the value of the property between UI updates. When the state value changes, the view gets refreshed. So, let's declare a state property. I make it private. It needs to be a variable, and let's call it input, of type string. And I initialize it to an empty string. This variable represents the text entered by the user in the TextField. Now, finish the TextField initialization. I need to use the dollar graphics to access a binding to a state variable. $input. Next, I display the input using a Text view, and I simply print the input. Now, let's embed the two views in a vertical stack. Vstack, and let's close it. If we ran the app, it should display what we type
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/defining-the-ui-using-swiftui?u=76281980&t=192)** and mirror it in the TextView. As I type, it is mirrored in the TextView. All right, now let's improve the appearance of our UI. I'm going to add a divider between the TextField and the Text view. This will display a horizontal line as a visual separator between the UI elements. And I set the TextField's font to the title text style. .font, and it should be title. For Text, I use a smaller body font. Finally, I apply a default padding to the entire vertical stack. This prevents our views from touching the edges of the main view. Now, let's hit run, and see what we did here. Yeah, it looks much cleaner. All right, it looks much better now, but we're not done yet. We'll come back and add more logic once we implement the missing pieces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Xcode]] (2), [[Swift (Programming Language)|Swift]] (1)
> **Code Identifiers:** ios (2)
> **File Paths:** contentview.swift (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [The WebServiceController protocol](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=0)** - [Instructor] We've implemented the basic UI for our app. The next logical step is to start feeding it with data. So let's continue with the model layer. We'll be relying on web services to retrieve accurate weather information. There are various weather web services available, both free and paid. We're going to use two web services provided by [openweathermap.org](https://openweathermap.org) and [weatherstack.com](https://weatherstack.com). Both services return their response in [[JSON]] format, but the payload structure and contents are different. Although the APIs are incompatible, we need to integrate them seamlessly into our application. We start by creating the service protocol that defines the common method requirements and the expected results and errors. Then we'll define dedicated controllers for each web service. These controllers need to expose the API defined by the service protocol. Thus we won't have to deal with different, incompatible interfaces in our application code. Now let's go back to [[Xcode]]. I create a group called Model, and I add a new [[Swift (Programming Language)|Swift]] file that will hold the definition of the service protocol. It will be a Swift file, and I call it WebServiceController. But now let's create a public protocol with the same name, public protocol WebServiceController.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=98)** We need a method for fetching the weather information. Let's call it fetchweatherData. The method needs a parameter which allows callers to provide the name of the city. It should be a string. This method is supposed to [[Fetch]] data from the internet. Such long running tasks should be implemented as asynchronous methods. Swift makes it easy to implement asynchronous behavior. Instead of returning a value, we use a completion handler. Completion handlers are blocks of code that gets executed when the asynchronous method finishes. The method should return a description of the current weather conditions for the specified location. To keep it simple, I'm going to use a string. It is optional, because we might not receive a valid response always. Speaking of issues, the completion handler should also include an error. Various problems may occur, we access the network after all, so it's a good habit to create dedicated error types that are specific to the given context. In Swift, we can model related error conditions using enumerations, so let's create a public enumeration called web service controller error, public enum WebServicecontrollererror. I make it adopt the error protocol. The error protocol doesn't define any requirements.
>
> **[3:12](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=192)** However, by conforming to it, we make it clear that our enumeration represents an error. Since the error protocol doesn't dictate any method or property requirements, it leaves us a lot of room for creativity. Let's try to cover the main issues that may, rephrase. Let's try to cover the main issues that might occur. First, we may have an invalid URL, so I'm going to add a case for it. The invalid URL case includes the URL string as an associated value. The returned response, rephrase, the returned response could also be invalid. For example, the JSON payload may be malformed or the server might return an [[HTML]] page instead of a JSON string and so on. To report such issues, I introduced the invalid payload case. This case includes the original Fetch URL. By providing the URL, callers can identify the origin of the unexpected content. And finally, for everything else, I use a generic case called forwarded. The forwarded case includes the original error. Now that we have a dedicated error, let's complete the declaration of the fetch weather data method. The second parameter is a WebServicecontrollererror. But first, let me fix this typo. It should be camel case. So controller with a big C, capital C.
>
> **[4:49](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/the-webservicecontroller-protocol?u=76281980&t=289)** The error is optional. Upon successful completion, it will be near. And this is the final signature of our fetch weather data method, rephrase. And this is the final signature of our fetch weather data method. We established the mapping between the web service calls and the [[Representational State Transfer (REST)|rest]] of our application. Now it's time to integrate our first real weather API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (5), [[Swift (Programming Language)|Swift]] (4), [[JSON]] (3), [[Xcode]] (1), [[HTML]] (1)
> **Env Vars:** url (5), json (3), api (2), html (1)
> **CLI Commands:** make (2)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1), [weatherstack.com](https://weatherstack.com) (1)
> **Code Identifiers:** fetchweatherdata (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Working with a third-party API](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/working-with-a-third-party-api?u=76281980&t=0)** - [Instructor] We're going to [[Fetch]] real weather data using the Open Weather Map web service. Open [openweathermap.org](https://openweathermap.org) and navigate to the API page. For our app, we're only interested in the current weather data. Let's see its documentation. We'll use the API that returns weather data by city name. The syntax is simple. We must provide the city name and the API key as query parameters. To make it work, you will need an API key. To obtain the key, you will need to sign up. The process is straightforward and the steps are described in the "how to start" section. After registration, it takes a couple of hours until the API key gets activated. So please go ahead and get that set up. We'll pick up in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** api (5)
> **CLI Commands:** make (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the OpenWeatherMap controller](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=0)** - In this video, we integrate the open weather map API and [[Fetch]] live weather information. We need a new file created in the model group and name it OpenWeatherMapController.[[Swift (Programming Language)|Swift]]. Let's declare the class next. Class OpenweatherMapController. And it should adopt the WebServiceController protocol. Exco generates the steps for us, which is a single method requirement. First, we need to configure the web service endpoint. Let's have a look at the API documentation. Go to API and current weather data. We're going to use the API that accepts unit parameters. So search for Units format. And here's the API call we've been looking for. Let's put it here for now. Now I create a constant called endpoint and assign it the string will just copy it. We need to make a couple of changes to create a URL out of this string. First, let's make it a valid URL by pre pending HTTPS. And I'm going to to replace London with the value of the city argument. We also have to supply the API key, I create on a numeration that holds the key as a static string and make it private. We don't want anybody else to access it.
>
> **[1:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=95)** And I add a static property. You should paste your own OpenWeatherMap's key here. As mentioned in the previous video, you can obtain an API key after a quick registration. So now we can add the app ID parameter. And we just put in here the API key. App ID equals an R API key. The city argument may contain invalid characters. I create a safe URL by calling the adding percent encoding string instance method. I use the guard statement to catch the potential issues. Guard let safeURLstring equals and I call end point, Adding Percentage Encoding. The characters should belong to the URL Query Allowed Character Set. If the safe URL string could be created, we can try to instantiate the endpoint URL. That, endpoint URL, equals, and I call the URL initializer that takes a string. If any of these calls fail, invoke the completion handler with NIL for weather description and the error is set to invalidate URL and the endpoint set as associated value. So near for better information and the error should be WebServiceControllererror.invalidURL
>
> **[3:14](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/implementing-the-openweathermap-controller?u=76281980&t=194)** and the endpoint and I return. Now we've got a compiler error, escaping closure captures non escaping parameter completion handler. A closure is set to escape a function if it gets called after the function returns. The compiler is right since the method will return before the actual network call complete. So the closure escapes the fetch weather data methods body. A closure that is passed as an argument to a function is non escaping by default. We need to market exclusively with escaping, to indicate that it is allowed to escape. We need to change the method signature in both the protocol and also here. I'm going to switch to the protocol and, now it's right .

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[Swift (Programming Language)|Swift]] (1)
> **Env Vars:** api (9), url (9), https (1), nil (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** safeurlstring (1), invalidurl (1)
> **UI Navigation:** go to (1), switch to (1)
> **File Paths:** openweathermapcontroller.swift (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### [Completing the OpenWeatherMap controller](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=0)** - Let's continue the implementation of the OpenWeatherMap controller. For networking, we'll use a URL dataTask. Let dataTask, and I'm going to use the URL sessions initializer that takes a URL and the completionHandler. For URL, I provide endpointURL, and we're going to implement the completionHandler. We have a data parameter, a response, and an error. If there is an error, we're going to wrap it in our dedicated error type and pass it back to the caller. So, let's check whether there was an error. It should be nil, or else we call our completionHandler. I'm using guard to check if it's nil, and if it's not nil, we invoke the completionHandler. I provide nil for the weather information and webServiceControllerError forwarded, and I include the error. And exit the method call. The return response shouldn't be nil either, otherwise, I invoke the completionHandler and provide the invalidPayload error. Guard let responseData equals data, and if it's nil, then we call the completionHandler, and supply our webServiceControllerError.invalidPayload and the endpointURL, and hit Return.
>
> **[1:39](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/completing-the-openweathermap-controller?u=76281980&t=99)** Next, we're going to process the response. Bars and [[JSON]] data is beyond the scope of this course. The json data to [[Swift (Programming Language)|Swift]]'s structures mappings are defined in the OenWeatherMap data Swift file. I'm going to add it to our project. Right-click on the Model group, and choose Add Files, and select JSONMappers. Instead of adding folders, we create groups. And here are codable structures. Now, I'm going to copy and paste the data passing logic. First, we create a json decoder. We use it to decode the json response into the Swift structures. If the decoding succeeds, we pass in the weather description to the completionHandler. Otherwise, we call the completionHandler with the appropriate error. And finally, let's not forget to call dataTask resume. All right, we're done for now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Swift (Programming Language)|Swift]] (3)
> **Code Identifiers:** completionhandler (8), datatask (3), endpointurl (2), webservicecontrollererror (2), invalidpayload (2)
> **Env Vars:** url (4)
> **UI Navigation:** right-click (1)
> **Definitions:** is an  (1)
> **Speakers:** - let (1)

#### [Introducing the view model](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=0)** - [Instructor] We can now [[Fetch]] current weather data using the OpenWeatherMap service and we've also got the user interface. So, let's connect the dots. The missing piece is the view model. It acts as a padding between the model and the view without referencing the view. We'll introduce a new class that represents the view model. First, add a new group and call it ViewModel. Then create a new [[Swift (Programming Language)|swift]] file called WeatherViewModel. Now let's declare the ViewModel class. WeatherViewModel adopts the observable object protocol to enable data binding. Next, I declare a property called the weatherInfo and initialize it to an empty string. A market with the published property wrapper. This allows Swift to observe this property and update the view whenever this property changes. The view model exposes a method to fetch the weather information. It relies on the model that is the open weather map controller to provide this functionality. Let's create a private property weatherService and initialize it. Next, I add the method that fetches the current weather for a given city. It has a single parameter called city of type string.
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/introducing-the-view-model?u=76281980&t=94)** We'll use the weather service fetch weather data method. The first parameter should be the city. Now let's implement the completion handler. We have the info and the error arguments and let's do some error handling. The error should be nil and the return weather information needs to be valid too. So let's check them first. Error should be nil and the weather information should be valid. Otherwise, we update the weatherInfo property with an error message and leave the method. And I provide an error message that does "Could not retrieve weather information for the city." and return. As you may remember, changing the published property triggers UI updates, since the completion handler are executes in the background, it is crucial to switch to the main UI thread whenever we update the weatherInfo property. So I'm going to dispatch this call to the main queue. If the weather data has been fetched successfully, we can assign it to the published property. Again, we need to perform this update in the main way thread. Self weatherInfo should be equal to weatherInfo. We're done with the view model. We need to make some adjustments in our view. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[Swift (Programming Language)|Swift]] (2)
> **Code Identifiers:** weatherinfo (5), weatherservice (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Presenting weather data](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=0)** - [Instructor] We've implemented the model and the view model. In this video, we're going to add the missing link that allows the view to reflect changes in the model. The view model conforms to the observable object protocol and has a published property. SwiftUI can observe this property, and that happens almost automatically. Let's switch to the content view. We need to tell SwiftUI which type has the data it should observe. As we know, that's the weather view model class. Let's create the new property with the view model and initialize it. To allow SwiftUI to observe the published properties, we've got to mark the property using the observed object property wrapper. Bear in mind that you can only use the observed object with a type that conforms to the observable object protocol. And we're done with the data binding part. Next, update the text view at line 23 to display the weather view model's weather info instead of the input text. Whenever the published data changes, the view gets updated. There's only one thing left. We need to trigger the fetching of weather information and pass in the city name entered by the user. I'm going to change the TextField's initializer. We'll use the TextField onEditingChanged unCommit method. The text should stay the same, Enter city,
>
> **[1:34](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=94)** the data binding is still input, and leave onEditingChanged empty, and implement interface and provide the unCommit closure. This closure gets called when the user hits the Return key. First, I'm going to check if there's a valid input. If not, self.input is empty, and if the user provided some text, that's called the weather view model's [[Fetch]] method, and I pass in the input. Note that we're not returning the weather information here. The fetch method updates the published weather info property, which in turn, will automatically update the text view. Let's run the app.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/presenting-weather-data?u=76281980&t=155)** Excellent, we have a functional weather application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2)
> **Code Identifiers:** oneditingchanged (2), uncommit (2)
> **UI Navigation:** switch to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Integrating a fallback service](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=0)** (gently chiming bells)
>
> **[0:05](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=5)** - Web services are not guaranteed to function all of the time, they may fail for various reasons; such as timeout issues, or authentication problems. We can try to avoid this problem by using multiple services. If one service fails, we switch to another one. Your task is to enhance the weather app with such a Fallback Strategy. Editors, please remove the transition from the slides to this X code view. I added a new web service controller that allows us to [[Fetch]] weather information using the weather stack API. The corresponding code, the birth structures can be found in the Jason Mappers Group. Not that I had to add the weather's tech domain to the app transport security exception domains. The free plan doesn't include SSL. There is HTTPS connections, and the iOS security policy denies HTTP connections by default. To access HTTP resources, we need to white list the given domain. Your task is to implement a fallback strategy if the open weather map web service call fails, far back to the weather stack service. Now here are some hints: You should add a new initializer requirement to the web service controller protocol. The initializer takes an optional web service controller
>
> **[1:42](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/challenge-integrating-a-fallback-service?u=76281980&t=102)** parameter that can be used to pass in the far back service. Also add a computed property requirement. The property represents the far back service and should be gettable, the far back service can be near. Next, implement the new initializer and the property requirements in the conforming types. Then invoke the far back services, fetch weather data method from the data tasks completion handler. If the call returns an error or the payload is invalid, and finally, make sure to set the open weather map controllers far back service when initializing it in the weather view model. The far back service should be a Weather Tech instance though whether sexual don't have a fallback service. All right, now give it a try. Jack, the next video with my solution when you are done, or if you get stuck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2)
> **Env Vars:** http (2), api (1), ssl (1), https (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Cross-References:** next video (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Speakers:** - web (1)

#### [Solution: Integrating a fallback service](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=0)** - [Narrator] Welcome back! Hopefully, you have managed to come up with an elegant solution. Let me show you one way to approach this problem. Here's the Web Service Controller. I'm going to add an initializer requirement first. The fallback service parameter is a Web Service Controller and it's optional. By making it optional, we allow callers to set it to nil. This indicates that the controller doesn't have a fallback service. Next, I add the fallback service computed property. It's a type Web Service Controller, and it can be nil. So I make it optional. Now and lets make it gettable only. Clients are not supposed to set its value. And now, I am going to switch to the open ethernet controller, the [[Swift (Programming Language)|Swift]] file. I add the fallback service property first. I declare it as a constant to make it immutable. Next comes the initializer. I provide a default nil value for the fallback service parameter. And all it does is setting the fallback service property. Now I'm going to incorporate the fallback logic into the [[Fetch]] weather data method. Let's have a look at the data desk's completion handler.
>
> **[1:38](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=98)** We might receive an error, so let's cover this case first. If the error is not nil, I try to use the fallback service instead of calling the completion handler with the forwarded error. First, let's see if we have a fallback service if let fallback equals self fallback service and then I call the fallback's fetch weather data method. I pass in the city and the completion handler.
>
> **[2:16](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=136)** If there is no fallback service, we have no other choice but return the error to the caller via the completion handler. I apply the same logic also if the return data is nil.
>
> **[2:35](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/solution-integrating-a-fallback-service?u=76281980&t=155)** Let's clean up the code a bit. And I have to move this return, also here. If we try to build our app right now, it won't compile. That's because the weather stack controller doesn't conform to the updated Web Service Controller protocol yet. So, let's perform the necessary changes. Basically, we will repeat the same steps as we did in the previous case. So we'll need the fallback service property, then the initializer. I provide the default value of nil and initialize the fallback service property. And next I'm going to integrate the fallback logic. To save us some time, I just copy and paste what we already implemented from the open weather map controller. So I replace this part. I make some final adjustments in the view model class. To use the fallback strategy, I pass in a weather stack controller instance to the open weather map controller initializer. And here we need a weather stack controller instance. The weather stack controller doesn't have a fallback service; however, our design is flexible. We could add a third web service and use it as a fallback for the weather stack controller and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/swift-5-protocol-oriented-programming/next-steps?u=76281980&t=1)** - Congratulations on finishing this course. I hope you enjoyed it. Now, you've got the taste of how powerful protocols can be. If you're interested in more [[Swift (Programming Language)|Swift]] content, you should check my other courses. Practical [[Design Patterns]] in Swift delves into the most popular design patterns and Swift programming best practices. [[iOS Development]]: Architecture explores the fundamental concepts behind modern iOS application design and architecture. And if you'd like to build more secure iOS apps, check out my iOS Development: Security course. You can find me on [[LinkedIn]], Twitter, YouTube and my blog. Thanks again for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Swift (Programming Language)|Swift]] (3), [[Design Patterns]] (2), [[iOS Development]] (2), [[LinkedIn]] (1)
> **Code Identifiers:** ios (4)
> **CLI Commands:** find (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Károly Nyisztor]]

## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)

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