---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: java-object-oriented-programming-2
url: "https://www.linkedin.com/learning/java-object-oriented-programming-2"
duration_minutes: 122
duration: 2h 2m
level: Beginner
updated: 11/13/2023
learners: 58687
skills:
  - Object-Oriented Programming (OOP)
  - Java
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQG6dQ0gh0wiAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622221555885?e=2147483647&amp;v=beta&amp;t=xMXtc5_DxQJ4qpstpY5PpuaGtxpJcodx_K7fEjknnHg"
linkedin_topic: Data Science
learning_paths:
  - '[Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)'
prev_courses:
  - '[Java Essential Training- Objects and APIs](../Software%20Development/Java%20Essential%20Training-%20Objects%20and%20APIs.md)'
next_courses:
  - '[Java- Data Structures](Java-%20Data%20Structures.md)'
path_nav: '[{"path":"Java Foundations Professional Certificate by JetBrains","position":3,"total":5,"prev":"Java Essential Training- Objects and APIs","next":"Java- Data Structures"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/object-oriented-programming-oop
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Object-Oriented%20Programming.md)

![Java Object-Oriented Programming](https://media.licdn.com/dms/image/v2/C4D0DAQG6dQ0gh0wiAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622221555885?e=2147483647&amp;v=beta&amp;t=xMXtc5_DxQJ4qpstpY5PpuaGtxpJcodx_K7fEjknnHg)

# Java Object-Oriented Programming

> Are you familiar with Java but want to get the most out of your Java programs? In this course, Kathryn Hodge teaches the basics of object-oriented programming in Java, so you can write code that’s secure, scalable, and easier to troubleshoot. Kathryn begins by showing how object-oriented principles are embedded into the Java language from the first code file you create. She looks at how classes, i

> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2) | 2h 2m | Beginner | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why learn about object-oriented programming in Java](#why-learn-about-object-oriented-programming-in-java)
  - [What is object orientation?](#what-is-object-orientation)
- [**1. Classes and Objects in Java**](#1-classes-and-objects-in-java) (7 videos)
  - [Using classes as blueprints](#using-classes-as-blueprints)
  - [Building objects with a constructor](#building-objects-with-a-constructor)
  - [Using concrete instances for application logic](#using-concrete-instances-for-application-logic)
  - [Understanding the difference between class and instance members](#understanding-the-difference-between-class-and-instance-members)
  - [Exploring a built-in Java class](#exploring-a-built-in-java-class)
  - [Challenge: Build an employee class](#challenge-build-an-employee-class)
  - [Solution: Build an employee class](#solution-build-an-employee-class)
- [**2. Encapsulation in Java**](#2-encapsulation-in-java) (6 videos)
  - [What is encapsulation?](#what-is-encapsulation)
  - [Discovering access modifiers](#discovering-access-modifiers)
  - [Implementing encapsulation with access modifiers](#implementing-encapsulation-with-access-modifiers)
  - [Exploring encapsulation in Java string class](#exploring-encapsulation-in-java-string-class)
  - [Challenge: Banking application](#challenge-banking-application)
  - [Solution: Banking application](#solution-banking-application)
- [**3. Inheritance in Java**](#3-inheritance-in-java) (6 videos)
  - [What is inheritance?](#what-is-inheritance)
  - [Leveraging different types of inheritance](#leveraging-different-types-of-inheritance)
  - [Using inheritance to reduce code duplication](#using-inheritance-to-reduce-code-duplication)
  - [Discovering inheritance in foundational Java classes](#discovering-inheritance-in-foundational-java-classes)
  - [Challenge: Reduce redundant code with inheritance](#challenge-reduce-redundant-code-with-inheritance)
  - [Solution: Reduce redundant code with inheritance](#solution-reduce-redundant-code-with-inheritance)
- [**4. Polymorphism in Java**](#4-polymorphism-in-java) (8 videos)
  - [What is polymorphism?](#what-is-polymorphism)
  - [Writing reusable algorithms with runtime polymorphism](#writing-reusable-algorithms-with-runtime-polymorphism)
  - [Exploring different forms in a single object](#exploring-different-forms-in-a-single-object)
  - [Accessing specific object forms with instanceof](#accessing-specific-object-forms-with-instanceof)
  - [Writing flexible code with compile-time polymorphism](#writing-flexible-code-with-compile-time-polymorphism)
  - [Exploring how built-in Java classes use polymorphism](#exploring-how-built-in-java-classes-use-polymorphism)
  - [Challenge: Reduce complexity with polymorphism](#challenge-reduce-complexity-with-polymorphism)
  - [Solution: Reduce complexity with polymorphism](#solution-reduce-complexity-with-polymorphism)
- [**5. Abstraction in Java**](#5-abstraction-in-java) (6 videos)
  - [What is abstraction?](#what-is-abstraction)
  - [Using abstract classes in Java to reduce code complexity](#using-abstract-classes-in-java-to-reduce-code-complexity)
  - [Using interfaces in Java to provide conformity](#using-interfaces-in-java-to-provide-conformity)
  - [Discovering abstraction in Java source code](#discovering-abstraction-in-java-source-code)
  - [Challenge: Leverage abstraction to write simpler applications](#challenge-leverage-abstraction-to-write-simpler-applications)
  - [Solution: Leverage abstraction to write simpler applications](#solution-leverage-abstraction-to-write-simpler-applications)
- [**Conclusion**](#conclusion) (2 videos)
  - [Identifying code smells and anti-patterns in OOP code](#identifying-code-smells-and-anti-patterns-in-oop-code)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why learn about object-oriented programming in Java](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=0)** - [Instructor] Are you familiar with [Java](../../Skills/Software%20Development/Java.md) but want to write code that's reusable and maintainable? Then this is the course for you. I'll show you how to use the object oriented programming model to write code that's secure, scalable and easier to troubleshoot. We'll start by exploring what object orientation means and show how it's embedded into the Java language from the first code file you create. Then we'll discover how classes, instances and constructors embody the idea of representing objects in code. We'll also explore how built-in Java libraries leverage object orientation behind and scenes. In this course we'll try get away from the abstract and focus on concrete practical examples that make the theoretical idea of object orientation real. The best design model to follow will depend on what you're building but it's essential to recognize that Java is an object oriented language. Hi, my name is Kathryn and I'm a software engineer. Okay, ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [What is object orientation?](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=0)** - [Instructor] Everything we see, hear and experience in everyday life can be represented in code. In fact, it can be represented in a variety of different ways, depending on how the program's designed. [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) is a programming model that can help make your code more flexible, reusable and easier to maintain. It's based around writing code that's modeled around objects and data. For example, if we wanted to represent a tree in code we could give it a height, trunk diameter, and anything else we wanted to know about the tree. These would be attributes, or data points of the tree. We could also give the tree a behavior, the ability to grow and this could change the value of its height and possibly other attributes. If these attributes and behaviors about the tree were contained in a single unit, we could say that it's organized around the tree object rather than a specific action or behavior. That's what makes this object-oriented. Object-oriented programming comes with its own set of four pillars that define object-oriented design, abstraction, inheritance, encapsulation, and polymorphism. We'll explore each of these principles throughout the course. We'll also look at how to achieve these principles in our custom programs, as well as how the [Java](../../Skills/Software%20Development/Java.md) source code uses these concepts to reduce complexity and encourage code reusability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Classes and Objects in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Using classes as blueprints](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=0)** - [Instructor] Almost anything in real life can be represented in code, but how well something is represented is up to us in what we decide to program. Classes in [Java](../../Skills/Software%20Development/Java.md) give us a way to model or represent physical objects in code via a blueprint. A blueprint, or class, contains a set of attributes and behaviors that define an object. Let's design a tree object in code using a class. The attributes might be height, trunk diameter, and maybe even tree type. Every tree has these properties or attributes, but their values might not be the same. That's what makes this Class a blueprint. It contains the definition of what a Class should be. As for the behaviors, growing could be a behavior for the tree. It's an action that the tree takes, rather than an attribute representing the current state of the tree. Let's create a blueprint for a tree using a Class in Java. I'm on a Mac, so I'll go ctrl click, and this will allow me to create a new Java Class. We'll call this Tree. And our IDE sets up this Class as an empty Class named Tree. A Class doesn't have to have attributes or behaviors, it could be completely empty as we see here. It could also just have attributes, or just have behaviors. However, most of the time, a given class will have both. Let's add some code to the Tree Class
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=95)** so that it actually represents a tree. Starting with the attributes, we'll have a height and trunk diameter. These will have the data type double, meaning they can be represented by decimal values. While we could represent the type of Tree with a string, we'll represent it with its own enum here called TreeType. To create an enum, we'll ctrl click on the source folder, select New Java Class, and then Enum. We'll call this enum TreeType. An enum is a special type that represents a group of constants. Here, we'll want those constants to be different TreeTypes. These are the only values we can give to a variable with the tree data type. By using an enum, no one can create a macaroni tree, or a money tree, which would be the case, if we used a string. The only TreeTypes that can exist are those listed in the enum Class. To use this enum, all we have to do is use the data type TreeType for a given attribute or variable, which is what we've done here. Now our Class has attributes. Let's add the grow behavior to finish up our definition of a tree. A behavior is represented by a function. Our function will return void, and be called grow. In the implementation,
>
> **[3:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=187)** we'll access the height, and trunk diameter of the tree, and increment them accordingly. To keep things simple, we'll say all trees will grow 10 feet in height, and one inch in diameter when this behavior is used. However, you could use the type attribute, or other data to inform how much the tree grows. There are many different ways a tree can be represented in code. Great. Now we've combined the attributes and behaviors related to a tree into a single unit, the Tree Class. Remember it's a blueprint, because we're only defining the attributes and behaviors of a tree. We haven't created any trees yet. Our Class says, "If we wanted to create a tree, this is how it would be represented in our program."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Env Vars:** ide (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Building objects with a constructor](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=0)** - [Instructor] Classes only represent a general blueprint but they become more tangible when you use a constructor to bring your blueprint to life. To create trees from our tree class we'll need to add a special type of function called a constructor to construct our tree objects. To create a constructor, we'll use the class name tree. We don't need a return type because the name of the function, tree, counts as the return type as well, since tree is the class name. This classifies it as a constructor. To build a tree we'll need to know what its height, diameter and tree type should be. This means we'll need to add inputs to the constructor so that we can construct a custom tree with the appropriate height, diameter and type. Of course, the body of the function doesn't do anything yet. We'll need to set up the tree we're building with the appropriate values. Using the, this keyword, we access the tree we're in the midst of creating, and set the height, trunk and type on the left equal to the inputted values on the right. When this constructor is used, it will create a tree with the inputted height, trunk, and tree type values, let's try it. To keep our tree class separate from the program we want to execute, we'll create a new class called main. This will contain our main method
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=97)** where we'll execute the program from. To create a tree we'll use the constructor, tree with the inputs 25 for the height, 5 for the diameter and our tree will be an oak tree. In addition to using the name of the constructor we'll also need to add the new keyword. This will create a new tree from our tree class. So, right now, we create the tree but then we throw it away, we don't save it in a variable anywhere. To save it we'll create a tree variable called myFavoriteOakTree. We've created our first tree. If we write myFavoriteOakTree, we'll be able to see all of the attributes, as well as the behaviors we can use on the tree. To start off, we'll just print out the tree's type. We'll use system.out.println and run the program. And it's an oak tree. By adding a constructor to our tree class and using the constructor in a main method we were able to create our first tree in code.

> [!info]- Semantic Content
>
> **Code Identifiers:** myfavoriteoaktree (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (typing) (1)

#### [Using concrete instances for application logic](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=0)** - [Instructor] With our first tree created in code we can begin to write out some application logic. Let's create a program that prints a message if the tree is taller than a 100 feet. All right if then access the height of the oak tree. And if it's greater than 100 feet we'll print out a message. We say my favorite oak tree is an instance of the tree class. It was created from the tree class using the tree constructor and it has all of the attributes and behaviors of a tree. Let's create another tree instance. This tree will be a little shorter and a little wider and it will be a maple tree. Then we'll add logic to print out if that tree is tall. My favorite maple tree, we can access that height attribute again and print out the message if it's tall. Now, it might be hard to tell between the two print statements in the console. So let's add the tree type to the message. While we could hard-code oak and maple directly into the string. Let's dynamically use the instance to resolve the tree type. Let's run the code. It looks like the oak tree is tall but no message from the maple tree.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=94)** So it must not be tall enough to warrant a print statement. The maple tree is also an instance of the tree class meaning it has tree attributes and tree behaviors. However, the values of these attributes differ from the oak tree. These two trees could be the same height or a different height, but the values of these attributes are independent and represent the current state of that tree. However, if we added a new attribute or behavior to the tree class it would affect both the maple tree and the oak tree because these are instances of the tree class. If you change the blueprint it affects the instances created with that blueprint. Now let's say we wanted to add a behavior to the tree class then announced if the tree was tall. We've already written the code to do this for our oak and maple tree in the main method, but we can add it to the tree class to make this code usable by all trees. To add this behavior, we'll create a function in the tree class. Since we're only printing to the console we'll have it returned nothing or void. Then we'll call it, announced tall tree. For our implementation, we can copy one of the if statements from our main class into this function. Of course, we see a bit of red because the oak tree does not exist in this context.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=189)** When a given tree uses this behavior will want to access that trees height, and that trees type. To do that, we'll replace my favorite oak tree. The key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) this, will use the height and tree type of whatever tree is using this behavior. To use this function as my favorite oak tree, we'll call it in our main method. All we have to do is write the name of the tree variable, myFavoriteOakTree and then use the behavior by name with the parentheses. Since our new behavior announces when a tree is tall we can delete the duplicate code from earlier. We can also do the same with our maple tree. Reusing the functionality that's built into the tree class. That's so much cleaner. Let's run the code and we get the same output. With the tree blueprint. We're able to define a series of attributes and behaviors that are reusable. And with the instances, we're able to keep track of various trees with their current states. By using classes and instances in this way we're able to bind state and behavior into one unit. This not only makes our program readable to other software developers but also maintainable for when new trees come along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** myfavoriteoaktree (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the difference between class and instance members](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=0)** - [Instructor] So far, we've created a class blueprint and built instances using a constructor. We can continue to organize our code by using static and non-static members. In fact, we've already been writing code that's non-static. Non-static members are parts of a class that are accessible via an instance and belong to that instance. This means you'll need to create an instance in order to access a non-static member. In our Tree example, the height, trunk and treeType are all examples of non-static members. Or specifically, non-static attributes. You'll have to create a tree in order to access the values of these attributes. The announceTallTree behavior is also a non-static member. It's a non-static method that uses an instance's height and treeType in order to announce whether the tree is tall. We could also refer to these non-static members as instance members because you have to create an instance in order to use it or access it. So what about a static member? A static member is accessible via the class and belongs to the class. It should be an attribute or behavior that's not based on a particular instance, but rather belongs to all of the instances of that class. Height, trunkDiameter and treeType can all vary between different instances, making them non-static members. One static attribute we can create
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=95)** in our Tree class is trunk color. Every Tree instance should have this specific trunk color, whether it's a super tall maple tree or an oak tree that's just been planted. To create a static trunk color attribute, we'll use the keyword static and also give it the data type Color. For the name, we'll call it TRUNK_COLOR and give the value of a new color using the Color constructor with the appropriate values to create the color brown. We just created our first static attribute or class attribute, TRUNK_COLOR. In order to access its value, we'll go to our Main class and use the class name to access it. This is different from our non-static members because we use the class name, rather than a specific instance name to access the static attribute. Now, just like we can have non-static instance-based behaviors, we can also have static class behaviors. Static behaviors or static methods do not rely on a given instance's members. Rather, they only rely on class members. Let's add a static behavior to our Tree class called announceTree. To create it, we'll use the keyword static, and all it's going to do is print out a message. Look out for that tree. Notice, it does not rely on any instance methods or instance attributes in its implementation.
>
> **[3:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=188)** If it did, we'd get an error saying that the attribute cannot be referenced from a static context. It also wouldn't make sense because all trees aren't of a certain type. It varies based on the instance. If we wanted to use the treeType attribute in this method, we'd have to make this a non-static function. If it did, we'd get an error saying that the attribute cannot be referenced from a static context. It also wouldn't make sense because all trees aren't of a certain type. It varies based on the instance. If we wanted to use the treeType attribute, we'd have to make this function a non-static method. However, we could add the TRUNK_COLOR to this implementation since TRUNK_COLOR is a static attribute. We could write it as Tree.TRUNK_COLOR or simply TRUNK_COLOR since we're in the Tree class. To use the static method, we simply use the class name and access the behavior. Let's try it in our Main class. Tree.announceTree. You might notice that our Main method is also static and that's because it doesn't rely on any instance members of the Main class. Typically, if a given method does not rely on instance members, it should be static. By organizing our code with static and non-static members, we're able to make it easier for others to contribute and make changes.
>
> **[4:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=282)** With this implementation, it's very clear that the TRUNK_COLOR is a property of the class, while height, trunkDiameter and treeType vary depending on the instance.

> [!info]- Semantic Content
>
> **Code Identifiers:** treetype (6), trunkdiameter (2), announcetree (2), announcetalltree (1)
> **Env Vars:** trunk_color (7)
> **CLI Commands:** make (6)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Exploring a built-in Java class](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of classes and instances, we'll explore the implementation of a built in [Java](../../Skills/Software%20Development/Java.md) class. One class we've already seen is the color class. We used it by importing Java dot EWT dot color into our tree class and had color represent the color of our tree trunk. While we could look at the documentation to learn more about the color class, one of my favorite tips is to use an IDE to click into the class. I'm using the IntelliJ IDE to write my Java code but there are many other IDEs that also support this feature. To see the source code of the color class, we can command click into the class and go right to the source. This class has around 1200 lines of code including the comments, but let's take a look around and see what concepts we recognize. The color class has a few static attributes or class attributes. These attributes allow us to easily set a default color for a given variable. Just like we used our trunk color in a previous lesson, we can use the white from the color class. Here, we use the static attribute to generate a default white color. Going back to the color class, let's keep looking around. We have defaults for almost every common color which makes them easy to reference. In addition to the static attributes,
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=97)** the color class also has a few non-static attributes whose values vary depending on the instance. These attributes have to do with representing a given color value and most of them have been given defaults that can be overwritten using the constructor or another behavior from the class. Each of these attributes have a fairly verbose comment that gives more details on what the attribute represents. If these interest you, I encourage you to take some time to read through these comments and get a better understanding of the color class. This class also has several behaviors. There's a static method to test whether a given color range is valid with red, green, blue and alpha values. We also have the constructor we use to create our trunk color along with other ways to construct Java colors. As for the instance methods, there are ways to retrieve the amount of green, red and blue in a given color. There are also ways to create a new color based on the current color, with the brighter and darker methods. To use the features of the built in color class, we do exactly what we did with our tree class. To use an instance method, we simply use the instance name and the name of the method. Let's create a default blue. Then to create a brighter blue,
>
> **[3:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=191)** we can take the default and use the brighter functionality.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=200)** With the instance name and a dot, the IDE automatically pops up with the available instance methods. This is one of the benefits to using an IDE as well as organizing your code with instances in classes. We can also directly command click on the instance method and be taken directly to its implementation, wherever it may live. This can help you become more familiar with the code a given program is using. Ultimately, exploring the Java source code is a great way to get more familiar with how to code in Java. With both our tree class and the color class, we saw how to bind state and behavior by using classes and instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6)
> **Env Vars:** ide (4), ewt (1)
> **Exercise Files:** source code (2)
> **Documentation:** the documentation (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Challenge: Build an employee class](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=5)** - [Instructor] It's time to practice representing objects in code by creating an employee with [Java](../../Skills/Software%20Development/Java.md). In this challenge, you'll represent an employee in Java by creating an employee class. The class should have attributes for the employee's name, age, salary and location. Feel free to get creative and add more attributes if you'd like. The employee class should also have a raise behavior that raises the employee's salary. Whether this behavior has a parameter or not is up to you. As a part of this challenge you'll have to determine which members if any, should be static versus non-static. Once you've created your employee class you should create another class for building your employee instances. In the main function of the main class create at least two employees and give one employee a raise then print out the salaries of both employees to ensure the raise took effect. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Build an employee class](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's represent an employee, in [Java](../../Skills/Software%20Development/Java.md), with a class. We'll create a new class, call it employee, and give it the appropriate attributes. We'll say it has a name that's a string, a location that's also a string, a double salary, and an age that's an int. These will all be non-static attributes, because they vary based on each employee instance. One might say, all employees are based in a single location, in which case the location might be static. Another option is to make an enum for the location, so there are only a set of places where a given employee might work from. It's all up to you on how you want to represent an employee object in code. To create employees, we'll need a constructor. We'll write Employee, and we'll want to create a custom employee with given name, location, salary, and age attributes, so we'll need to pass those in as parameters, then we'll set up our employee.
>
> **[1:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=79)** We'll also add a raise salary function that increases a given employees salary by 20%. We could add a parameter, to this function, where the user provides a given percentage to raise the salary, or change the function to increment the salary a constant amount, say $10,000. Since our requirements were not very specific as to how much to raise the salary, the implementation is up to you. With the employee class finished, let's create some employees and code. We'll create a main class, with the main method and create two employees. Using the constructor we'll create one employee, Sally Roberts, the location will be Los Angeles and Sally will make $70,000 a year. Sally is also 34. For the second employee we'll have Matt Johnson who will be based in New York, make $65,000 a year and be 32. We'll give employee two a raise. So we'll access the instance and use the raise salary behavior, then we'll print out the salaries of each employee. Let's run the code. We see that the second employee has a salary of 78,000, up from 65,000.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=175)** The first employee's salary remains the same. In our Java class, we were able to implement a core concept in object oriented programming by combining the attributes and behaviors of an employee into a single reusable unit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Encapsulation in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What is encapsulation?](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=0)** - [Instructor] Encapsulation is one of the forming principles in [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md). It refers to the idea of binding an object state and behavior together into one unit. In other words, encapsulation is about wrapping data and code acting on that data together. This may sound familiar and it should. In the last chapter, we bound together data and methods in the form of a [Java](../../Skills/Software%20Development/Java.md) class. Now we're giving this idea a formal name, encapsulation. While we saw the beginnings of how to perform encapsulation by pure organization of the code, in this chapter, we'll expand upon that concept, as well as look at some of the benefits of this approach. One benefit is we can prevent classes from being tightly coupled. This means we can easily modify one class, either in the data it contains or its behaviors, without affecting the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program. However, this can only happen if we have a clear interface between the class and the rest of the program. Everything can't have direct access. We'll need to restrict some of the components of a given class. In the last chapter, we directly accessed the tree type attribute along with other attributes of the tree class. If the name of this attribute or the way it's stored changed, the classes using this attribute would likely need to change to. To make our program more robust to changes, we can make class's attributes hidden
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=94)** from other classes using encapsulation. The data would still be accessible but only indirectly through the methods of the class. This would allow us to create specific pathways for the classes to communicate without making them heavily dependent on each other. By preventing other classes from having direct access to certain attributes, our programs become more secure and less error prone because when a given change has to be made, it will result in less code changed. Furthermore, with more restricted access, it's less likely than an attribute would be overwritten with an invalid value or null unexpectedly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (2)
> **Definitions:** refers to (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Discovering access modifiers](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=0)** - In [Java](../../Skills/Software%20Development/Java.md), we can achieve encapsulation by using access modifiers. Different access modifiers determine where certain variables and methods can be accessed in your code. In other words, they allow you to restrict to the scope of specific functionality in your program. The three different access modifiers in Java are private, protected, and public. We use these key words on pieces of a given class to give it a certain access or visibility level. Private variables and methods are only visible in the class that they live in. Protected variables and methods are visible to the package and all subclasses. Public members are accessible everywhere within the program. If no modifiers provided, it's only visible to the package it lives in. In the main class, the main method has the public access modifier. This allows it to be invoked by the JVM or Java Virtual Machine in order to execute a program. In the tree class, we didn't add any access modifiers, making each member only visible to its own package. Let's try adding an access modifier. We'll make our static attribute protected, our instance attributes private and our methods public including the constructor. Most of the time, each attribute and behavior of the class
>
> **[1:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=93)** will have an access modifier that's either private or public. In fact, if we look at the color class, these are the two main access modifiers used throughout the class. So what's the effect of adding these access modifiers? Looking at our main class, the methods still work, because we've given those the public access modifier, but we can no longer print out each attribute directly. With our printouts, we directly access the tree type, height and trunk attributes. Since we made these attributes private, this code will no longer work, because we've restricted the access of these attributes to only the tree class. If we want other classes to still have access to this attribute data, we'll need to create an indirect way for them to access it. This will allow us to achieve true encapsulation in our programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)
> **Definitions:** in other words (1)
> **Speakers:** - in (1)

#### [Implementing encapsulation with access modifiers](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=0)** - [Narrator] With encapsulation we want to make data hidden from other classes so they cannot use it directly. However, we still want it to be accessible indirectly through a clear pathway. in [Java](../../Skills/Software%20Development/Java.md), one way we can achieve encapsulation for our attributes is to declare each attribute as private then write public methods to get and set the value of each attribute. With this, other classes will still be able to access the hidden data, but they can only do so through a public method of a given class. Let's continue working with our tree class and create three public methods that retrieve each attribute value. To make the first, we'll write public, double for the return type and we'll have it be getHeightFt and this will retrieve the height feet attribute. We'll also create a method for the trunk diameter then as we type it in, you'll notice our IDE comes up with some code completion. And it fills in the code for us writing a public method to access a private attribute is a pretty common practice. Given what we're writing our IDE can predict that's what we're going to do. We'll also create one for the tree type. We call these three methods getters because they allow us to get the value of a given attribute. Let's use these getters in our main class.
>
> **[1:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=96)** You might notice that our printouts still won't work. These attributes are private so we cannot access them directly. However we can access them indirectly using the getters. So instead of myfavoritemapletree.treetype we'll use the get tree type method on that instance. The same goes for our height and our trunk diameter. Let's run the program and we see our attributes in the console. These getters allow us to retrieve the attributes but the attribute values can only be modified within the class. This means we can't change the height or any other attribute directly in the main class with a hard coded value. Instead, we'd have to use the grow method inside of the tree class on that instance. That's the only way we can modify the height and diameter. And both of these values can only increase according to the implementation of grow. So if we wanted to increase the size of our maple tree we would use the grow method with myfavoritemapletree.grow. This encapsulates our attributes and how they can change to the tree class only. The height will never be set to negative one unexpectedly. The implementation of how a tree can be modified lives in the tree class only. If we wanted to allow other classes
>
> **[3:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=191)** to set a particular value to one of these attributes we would create a setter. A setter is just like a getter method but it allows you to set the value for that attribute. Let's create a setter for trunk diameter. The body of the method looks pretty similar to our constructor except all we do is set the trunk diameter attribute to the inputted value. Now our trunk diameter can be modified through the setter or through the grow method but our height can still only be modified through the grow method. So what about tree type? Well we have a getter for tree type to retrieve the value there is no way to modify the value once the tree is created and that's done on purpose. Have you ever seen an Oak tree turn into a maple tree or vice versa? I think not. By using access modifiers in this way we can encapsulate what it means to be a tree and restrict the ways a tree can change in a single unit, the tree class making our programs more scalable and secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** ide (2)
> **Code Identifiers:** getheightft (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Exploring encapsulation in Java string class](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=0)** - With the good foundation of encapsulation, we can begin to explore how the [Java](../../Skills/Software%20Development/Java.md) programming language, uses encapsulation in some of its built-in classes. Exploring more examples will help you better understand this object oriented principle, and recognize the scenarios it should be used in. One common Java class that uses encapsulation, is the string class. To find out more about the string class, we'll click into it using our IDE. I'm on a Mac, so I'll do Command Click, but it may be different on your machine. This class is pretty large at over 3000 lines, but we'll break it into parts and work through it, to see how it uses encapsulation. A string is made up of characters, and those character values actually live in the form of bytes and a byte array. This is all hidden away from us and the way we use strings in everyday programs. This means, even if things inside the string class change, it won't affect the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program, as long as the input, output and result of the public behaviors stay the same. There are a few other private attributes in this class, but we'll be focusing on this value attribute. With Control + F or Command F, we can see how it's used throughout this class. The string class has several constructors, and ways to initialize a given instance. So these first few methods will be about
>
> **[1:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=93)** setting up the value attribute with its initial value. One common instance method in the string class, is the length method, which retrieves the number of characters in the string. This is a public method, so we're able to use it outside the string class. To use it, we can go to our main class, use our string variable, and run Dot Length. In running this method, we don't need to know anything about how the string works, or how it stores its values behind the scenes. In fact, strings used to char array for the value attribute and tell Java nine. In the JDK enhancement proposal 254 or GEP 254 Java nine introduced compact strings, which used a byte array instead of a char array for the value storage. If the internal array was exposed outside the string class with a public modifier, then this change would have been much harder to make, because it would have affected any programs that used to this attribute. With encapsulation, we can achieve loose coupling, and that's what enabled the Java developers to make this change without significantly impacting other Java programs. This value array is also used in several other public instance methods, as a way to retrieve data from it. IsEmpty, charAt, all of these are common methods
>
> **[3:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=186)** we use to work with strings, and we work with them using public methods that access private methods or private attributes. However, you won't find any methods in this class, that modify the value array and that's because strings are immutable. With the value array as private and access to it only available through public methods, we can fully encapsulate this attribute in the behaviors that change it, to the string class only.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** ide (1), jdk (1), gep (1)
> **Code Identifiers:** charat (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### [Challenge: Banking application](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=5)** - [Instructor] Let's practice using encapsulation. In this challenge, you'll put your encapsulation skills to the test by modifying a [Java](../../Skills/Software%20Development/Java.md) program to use this object oriented principle. We'll start off with a bank account class. It has two attributes, owner and balance. Your job is to add behavior to this program so that the owner and balance attributes can be encapsulated in the bank account class while still being accessible to other classes indirectly. Specifically you should add a withdrawal method as well as the deposit method. You might also add a few getters to retrieve the balance or the owner of the account. In order to create a new bank account instance, you'll also need to add a constructor to the class. Once you've set up your bank account class, create a main class that creates a bank account. Withdraw a certain amount from the bank account and then print out the resulting balance to the console. The attributes of the bank account class should not be directly accessible. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Banking application](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=0)** - [Instructor] To add encapsulation to this [Java](../../Skills/Software%20Development/Java.md) program, the first thing we'll do is make the owner and balance attributes private. Then we'll make these indirectly accessible through public behaviors.
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=25)** In order to create a BankAccount, we need a constructor. With this constructor, we'll input an owner, as well as a startingBalance. For the balance, the user may input an invalid value, such as a negative number. To combat against this, we'll take the max of the startingBalance and zero. This will set the balance to whichever number's higher, either the startingBalance or zero, forcing the balance to be set as a positive number. Now for the setters. We'll make the owner of the BankAccount immutable for now, so no setter is needed. But what about the balance? For the balance, the user should be able to withdraw and deposit money. So instead of creating a setter, we'll create deposit and withdrawal methods that act as setters to modify the balance attribute value. Starting off with that deposit method, we'll make this a public method that returns a double and takes in an amount. If the amount is greater than zero, we'll add it to the balance and return the added value. Otherwise, nothing will be added because we don't want to add a negative amount to the balance, so we'll return zero. The withdraw method will be very similar. We'll create a public method that returns a double and takes in an amount.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=122)** If the amount is greater than the balance, then we won't withdraw because there's not enough funds in the account. Instead, we'll return zero. Great, now we can use our BankAccount class to create a BankAccount instance. Let's create a Main class for our Main method. Then we'll create our instance. We'll use the BankAccount class and the constructor and we'll say this is Wonder Woman's account. And the startingBalance will be 1,000. Then we'll withdraw 500, deposit 5,000, and then withdraw another 2,000. At the end, we'll display the owner and resulting balance. Notice, we're not accessing the attributes directly. We're using the public methods to access then indirectly. Let's run the code. We started off with 1,000, then took away 500, leaving us with 500, then we deposited 5,000, giving us a balance of 5,500. Then when you deposit another 2,000, we're left with 3,500. Let's see what we get in our console. Wonder Woman, 3,500. There are so many different ways
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=215)** you could write this program. The deposit and withdrawal methods don't have to return anything. That's just a design choice we've made here. You could also add an ID attribute or other attributes and behaviors that better represent a bank account in code. The important thing is that the implementation should encapsulate the owner and balance attributes in the BankAccount class while making them accessible through public methods. This encapsulation allows us to include safety checks whenever the balance is modified, either through the withdrawal method or deposit method. We also get the bonus side effect of the owner being immutable after account creation. To add on to this program, you could extend the functionality to include account transfers or create an owner class that allows owners to have multiple bank accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** startingbalance (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Inheritance in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What is inheritance?](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=0)** - [Instructor] Another key object-oriented principle is Inheritance. Inheritance allows us to create class hierarchies where classes inherit properties and behaviors from other classes. With Inheritance, we have two main players, the subclass and the superclass. We call the class that inherits the properties the subclass or child class. The class that's being inherited from is called the superclass or the parent class. In Inheritance, the child class inherits properties from the parent class, or the subclass inherits properties from the superclass. For example, let's say we have an employee class. The class has name, ID, and salary attributes. Now what if we wanted to represent a salesperson in code? A salesperson would also have a name, ID, and salary, but they might also have a commission percentage or other attributes and behaviors. While we could create a fresh new class for the salesperson with name, ID, and salary attributes, we could also use Inheritance to help reduce code in our program. Since a salesperson is an employee and will have all of the attributes and behaviors of an employee, we can have the salesperson class inherit from the employee class. This allows us to avoid duplicating the code from the employee class in the salesperson class.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=94)** Instead, we would just create a new class with the custom functionality of a salesperson, inheriting the employee functionality from the employee class. This is beneficial because if there's ever something we want to add to the employee class, it will automatically affect our salesperson because a salesperson is an employee. We call the relationship between the salesperson and the employee an is a relationship because the salesperson should have all the functionality that the employee has. However, the reverse is not true. Not all employees are salespersons. This is what makes the employee class the superclass and the salesperson class the subclass. Ultimately, inheritance allows for code reusability because we can write the common properties and functionality in one class and have other classes with unique features inherit from it. This also makes our code more scalable because we can write the common functionality once and then have whatever class needs the functionality inherit from it.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is called (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging different types of inheritance](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=0)** - Inheritance can be applied in many different ways, and it's important to choose the right form for your use case. With the employee-salesperson example, we were using single-level inheritance. The employee was the superclass and the salesperson was its only subclass. We can extend this inheritance example by adding additional types of employees. We could add an analyst class. Instead of receiving commission on sales, an analyst receives bonuses each year depending on their performance. An analyst is also an employee, but an analyst is not a salesperson. This type of inheritance is called hierarchical inheritance, where one parent class has many subclasses, and this is also supported in [Java](../../Skills/Software%20Development/Java.md). Another type of inheritance we have is multi-level inheritance. A class can inherit from one class, but also be the parent of another class. Let's say we add a person class to the mix an employee is a person, an analyst is a person, and a salesperson is a person. We can have the employee class inherit from the person class, and in turn, the analyst and salesperson will also inherit from the person class indirectly. Since the name attribute is more of a person attribute rather than an employee attribute, we can move that over to the person class. With this structure,
>
> **[1:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=92)** attributes and behaviors dealing with a person live in the person class, while details associated with the employee live in the employee class. There are a few other types of inheritance, including multiple inheritance and hybrid inheritance, but they are not supported in Java. Multiple inheritance can cause unnecessary complexity, especially in casting, constructor chaining. and other Java operations. There are very few scenarios where multiple or hybrid inheritance are actually needed, so it's been removed entirely for simplicity. Ultimately, in Java, a class can only have one super class, but it can have multiple subclasses. If you want a class to have several super classes, one option is what we've shown here with multi-level inheritance, where a given class inherits from multiple classes indirectly. Later on in the course, we'll also encounter interfaces and abstract classes, which are other ways classes can share code. However, understanding the different [Forms](../../Skills/Web%20Development/Forms.md) of inheritance available to you in Java can help you design better systems that reduce code for your use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Definitions:** is a  (3), is called (1)
> **Speakers:** - inheritance (1)

#### [Using inheritance to reduce code duplication](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=0)** - [Instructor] In [Java](../../Skills/Software%20Development/Java.md), we can achieve inheritance by using the keyword extends. The subclass will use this keyword with the superclass in its class definition to inherit all the properties and behaviors of the superclass. Let's take a look at an example in Java. Here we have a Salesperson class with name, salary, age and commissionPercentage attributes. We have a constructor, getter methods and methods to raise the salary and commission. In addition to the Salesperson class, we also have the Analyst class. An Analyst has some of the attributes and behaviors as the Salesperson class but some are different. For example, an Analyst has the concept of an AnnualBonus, which does not exist for the Salesperson class. But the Analyst also has the same name, age and salary attributes and behaviors. Instead of having the name, age and salary code duplicated across two classes, we can create an Employee class that holds this common code and both classes can inherit from this common Employee class. To do that, we'll create a new class called Employee and copy over the appropriate code. This includes the getters and the raiseSalary method. We'll also need to create a constructor that initializes a given employee instance. Every employee will have a name, salary and age.
>
> **[1:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=101)** In turn, we'll also remove the name, age and salary code from the Salesperson and Analyst classes. To have the Salesperson class inherit from the Employee class, we'll use the keyword extends. We'll say the Salesperson class extends the Employee class. Now our Salesperson has all of the attributes and behaviors of an employee. The Salesperson class only contains code that is associated with the salesperson making it easier to iterate upon and modify. There's one more thing we have to do to finish this implementation. We need to modify the constructor. Instead of setting up the name, age and salary attributes in the Salesperson constructor, we'll set them up with the Employee constructor. To access the employee's constructor, we use the keyword super, which refers to the superclass's constructor. The Employee constructor takes in a name, salary and age, and that's what we have here. The commissionPercentage still refers to the Salesperson class. So we'll keep it set up right here in the Salesperson constructor. Great, we've reduced the duplicate code in the Salesperson class. Now let's set up our Analyst so that it inherits from the Employee. The Analyst class will extend the Employee class and use the super constructor
>
> **[3:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=194)** to set up the name, salary and age. To fix the error with the salary and getAnnualBonus, we'll need to change the access modifier of the attribute in the Employee class. Currently, the access modifier is private. To make this attribute available to its subclass, we'll make it protected instead. Going back to our Analyst class, the error has gone away. Another option, instead of using the keyword this, you can use the keyword super to designate that this property is coming from the superclass. But either implementation works. Great, now the name, age and salary code is in one place, the Employee class, rather than spread and duplicated across multiple classes. If you want to continue with this example, try adding a Person class that the Employee inherits from. The Person class would contain the name and age attributes and behaviors, while the Employee class would contain the members associated with the salary. With this implementation, if we ever need to modify the behavior of an Employee, it would affect both the Analyst and the Salesperson. If we didn't use inheritance, we would have to change code in two places, the Salesperson and Analyst classes, creating more work, more tests and more room for error. Inheritance can not only make your programs more secure, but it can also make it easier
>
> **[4:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=288)** to change your program later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (4)
> **Code Identifiers:** commissionpercentage (2), raisesalary (1), getannualbonus (1)
> **Prerequisites:** set up (3)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Discovering inheritance in foundational Java classes](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=0)** - [Instructor] With a good foundation of inheritance, we can begin to explore how the [Java](../../Skills/Software%20Development/Java.md) programming language uses inheritance. Exploring more examples will help you better understand this object-oriented concept and recognize the scenarios it should be used in. One common Java class is the Stack class. Stack is the data structure and while we won't be exploring [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) too much in this course, we'll explore how this class uses inheritance to inherit behaviors and attributes from its superclass. Here we have a stack of characters and we've added a few characters to the stack with the push method. Then we've removed the characters with the pop method. When the characters are removed, they'll be removed in reverse order, meaning t will be removed, then a, then c. Running the code, we'll see cat displayed in reverse order. That's what makes this a stack. We can plop things on top and remove them in order of last added. To see how the stack works in code, we can click into it with Command + click on Mac. The Stack class extends the Vector class. This means that the Stack is the subclass and Vector is the superclass. The Stack class inherits functionality from the Vector class. Let's see what inherits. And it looks like the Vector also inherits functionality.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=94)** We'll explore the AbstractList class later on in the course but let's see what Stack directly inherits from Vector.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=108)** The Stack class has no attributes, only a few behaviors and many of these behaviors use functionality from the Vector class. Let's take a look at the push behavior. Push uses a method called addElement and this method's implementation actually lives in the Vector class. It's used by the Vector, as well as the Stack. The unique behavior of the Stack comes in the pop method where when an item is removed, it's removed at a specific place in the Vector, at the end, rather than just anywhere in the Vector. The actual implementation of the removal is done in the Vector class with removeElementAt. So a Stack is very similar to a Vector but it provides additional functionality so that you can work with an object as a stack. You can easily add and remove items from the top of the stack. While the removeElementAt and addElement methods could be duplicated in the Stack class, we take advantage of the already tested implementation in the Vector class. With this code, we can decide to work with a vector directly or work with the stack that has a few extra behaviors included. This implementation gives us flexibility on the type of data structure we can use, while also reducing duplicate code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Code Identifiers:** addelement (2), removeelementat (2)
> **CLI Commands:** cat (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Reduce redundant code with inheritance](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=0)** (upbeat chiming music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=5)** - [Instructor] One common error when using the ArrayList class is sometimes you might try to retrieve an item that's at an invalid index. To avoid this, usually you'll add an if statement in order to check that the index is valid before retrieving the item from the list. However, sometimes those checks can get annoying and another developer might forget to do the check. To provide a foolproof way of accessing items in a given list, we want to create a ModArrayList class with a getUsingMod method that takes in an index and retrieves an item from the list at that index. If the index is invalid, then the implementation should use the mod operation and mod the index based on the length of the list. If the index is negative, then it should be made positive. If you're unfamiliar with mod, mod is similar to division. However, it returns the remainder rather than the quotient when given two numbers of the same sign as input, so either both positive or both negative. This means if someone uses the method with index four and the list only has three items, the first item would be returned because four mod three equals one. That's the remainder of four divided by three. The ModArrayList class should have all the functionality of an ArrayList with the additional functionality of the getUsingMod method. While you could write lots of code
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=99)** in the ModArrayList class to have it work the same as an ArrayList, I encourage you to use inheritance to avoid adding redundant code. Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** getusingmod (2)
> **Analogies:** similar to (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat chiming music) (1)

#### [Solution: Reduce redundant code with inheritance](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=161)** In addition to modding the size, we'll also want to make the index positive. To do that, we can use math.abs to make this index positive. Great, we have a valid index. Now we can just use the ArrayList functionality to retrieve the item. Since the get method is an instance method, we'll use the keyword this.get and pass in that validIndex. Whatever this returns is what we'll want to return from the function. Our implementation of getUsingMod is complete. Let's use it on our list in the Main function. We'll use it with a valid index, say one. We'll also try with a negative index, -2. And a large index, say 40. We'll also print these out to the console. The item at index one is 10. The item at a positive index 2 is 20. And since 40 is divisible by 4 with a remainder zero, it should retrieve the item at index zero. Let's run it. And we get the output we're expecting. Inheritance allowed us to use the ArrayList functionality and focus on the core implementation of the mod in our ModArrayList class. We didn't have to worry about how the retrieval actually happens
>
> **[4:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=255)** because the ArrayList class does it for us. We just had to calculate the correct index. Furthermore, while we could have written all of the ArrayList functionality ourselves, it's unproductive. It's better to reuse and enhance what we've already written so we can reduce the amount of code required, preventing bugs and mistakes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** validindex (1), getusingmod (1)
> **Definitions:** is an  (1)


### 4. Polymorphism in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What is polymorphism?](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=0)** - [Instructor] Polymorphism is the ability for an object or function to take many [Forms](../../Skills/Web%20Development/Forms.md). Depending on the context and situation, the form may be different, making your code more flexible and reducing complexity. In fact, we've already started using it in this course, even if we didn't realize it. If we look at our example from the previous challenge, the ModArrayList instance takes a few different forms. When we use its getUsingMod functionality, we are using it in the form of a ModArrayList. However, when we use the add functionality, we're using it as an array list. In fact, if we click into the add functionality, it won't take me to the ModArrayList class, rather the ArrayList class. This is where that functionality is defined. The idea that an object can use functionality from different classes depending on the context is a key idea that's essential to understanding polymorphism. [Java](../../Skills/Software%20Development/Java.md) supports two types of polymorphism, runtime polymorphism and compile-time polymorphism. We'll be exploring both in this chapter. Polymorphism will not only help us reduce complexity in our Java programs, making them easier to understand, but they'll also help us write more reusable code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** getusingmod (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Writing reusable algorithms with runtime polymorphism](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=0)** - [Instructor] Let's explore how to implement polymorphism in [Java](../../Skills/Software%20Development/Java.md). We'll look at a similar example to our ModArrayList but this time, we'll create an OddArrayList that will only contain odd numbers. We'll want it to have all of the functionality of an ArrayList. So we'll extends ArrayList. We also know it will only contain odd whole numbers, so we can have it extended with the integer data type. In order to make it so that only odd numbers can be added to the list, we'll need to override some of the ArrayList functionality. Methods like the constructor, add, addAll, set, and replaceAll will need to be modified so that only odd numbers are added. To override the function implementations, we'll need to match the method signatures from the ArrayList exactly. We can still use the original functionality with the keyword super to access the original implementation. Let's take a look at how this works. To override the add method, we'll use the @Override annotation. Then we'll write out the signature for the add method. This comes from the ArrayList class. From here, we can implement the modified add functionality. To start, we'll check to see if the item is odd, using the mod operator. If the absolute value of the element has a remainder one when divided by two,
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=95)** then the item must be odd and can be added to our list. The actual implementation of adding an item already lives in the ArrayList class. So we'll access its implementation with the super keyword and then add the element. We'll continue to do this for all of the other methods. First checking if the item is odd and then leveraging the already implemented functionality from the ArrayList class. Since the odd check functionality will be the same for all of these methods, we can separate it out into its own public static function. Then we'll use it in each function we're overriding.
>
> **[2:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=145)** Next, we'll override the addAll methods, which lets you add collections to your ArrayList.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=156)** In the implementation, we use some of the Java Streams functionality introduced in newer versions of Java. If this interests you, I encourage you to check out some of our Java Streams and Java collection courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. Next, we'll modify the set functionality so that only valid elements can be inserted. If the item is not valid, we'll return the minimum value for an integer. For the replaceAll method, we'll run the operation and then immediately remove the invalid elements. The last method we need to create is the constructor. We'll have it take in a series of numbers and this will become an array for us to use in our implementation. Then we'll use the ArrayList constructor with the keyword super and then pass in the array with the odd numbers only. Let's try this out in a separate Main class.
>
> **[3:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=223)** In the Main method, we initialize our OddArrayList with numbers. Then we create a regular ArrayList and add items to that. The oddListy has all of the functionality of the ArrayList class, including those methods we haven't overridden. When we print out the lists, the OddArrayList should only have odd numbers while the regular ArrayList should have all of the numbers added. Let's run the program. Two and four were filtered out of the OddArrayList and this is as expected. With inheritance, we were able to reuse the functionality of a given class. Then we added onto to it by creating new methods in the new class. With runtime polymorphism, we not only reused the functionality of a given class but we override it with new functionality as needed while leveraging the superclass's implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** addall (2), replaceall (2), oddlisty (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Exploring different forms in a single object](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=0)** - [Teacher] Depending on the context, a given instance can take many different [Forms](../../Skills/Web%20Development/Forms.md). With the odd listy, it takes the form of an odd ArrayList when the add method is used, only adding odd numbers. The other list, listy, takes the form of an ArrayList, adding all of the numbers to the list. Now what happens when we use the size method on both of these lists? Both of these take the form of an ArrayList since Odd ArrayList doesn't have a custom implementation for the size. We can leverage this to create common functionality that can work with both types of lists. For example, let's say we wanted to create a universal function that adds a random number to any integer ArrayList regardless of if it's odd or regular. We can create a function called addRandomNumber and have its input be an ArrayList. To generate the random number, we'll use the random class to create a random instance. Then we'll use it in call nextInt. This will generate a random whole number. We don't want the number to be too big so we'll put a bound on it. A thousand. The number we generate will be between zero and 999. To add the number, we'll use the add method on our list since it is an ArrayList. Then we're done.
>
> **[1:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=92)** An item is added to the list. Let's try this with our oddListy and Listy instances. We're able to do this because oddListy and Listy are both ArrayLists. They both have all the functionality of an ArrayList, including that add functionality. However, the implementations of each add algorithm are different and are determined at runtime based on the instances original type, hence why it's called runtime polymorphism. With this program, we should get three and the output for both of the sizes. Let's run it. Sometimes we get two in the printout for oddListy. This means a number was not added to the list in our function. When we run the add random number function with our oddListy, the add functionality in the oddArrayList class is used. This means if nextInt outputs an even number, although we tactically call the add function, it does not add the item to the list. To fix this, we can modify our add random number implementation so that a number is always added. We consider a number to be added if the ArrayList size increases by one. So let's create a variable called original size and give it the value of the list size.
>
> **[3:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=188)** Then we'll wrap our number generation in our list addition into a while loop where the code continues to run until the list size equals the original list size plus one. If we've run our code again, it works as expected. We can even print out the contents of the list to ensure the odd list only has odd numbers. Let's run the code again. With runtime polymorphism we were able to override the add method functionality so that only odd numbers are added to odd ArrayLists. By having our random add number function taken an ArrayList rather than the more specific odd ArrayList, we were also able to create common functionality. This functionality can be used for a variety of different instance types as long as they extend the ArrayList class, making our code more reusable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Code Identifiers:** oddlisty (4), nextint (2), addrandomnumber (1), oddarraylist (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [teacher] (1)

#### [Accessing specific object forms with instanceof](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=0)** - [Instructor] With the OddArrayList class, we created a very specific condition. An item is added depending on whether it's odd or not. We can broaden this class by making it a condition ArrayList where items are added based on a given condition. Let's rename this class to ConditionArrayList. We'll left click on the name, hover over Refactor and rename the references. This is a feature of IntelliJ. Now, since items will be added based on a condition, we'll need to include that condition in the constructor. This condition will be a predicate, something that takes in a value and returns true or false. The predicate could be whether or not the number is positive, whether it's divisible by three or whatever we want. It's defined on creation and that's what we filter our list on. Now, since we'll want to access this predicate in a variety of instance methods, we should make this predicate an instance variable and then we can set it up in our constructor. We'll call it condition. Then in the constructor, we'll set this.condition equal to the inputted predicate. If we scroll down, the isOdd function no longer makes sense. In fact, we could change this to isEligible
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=94)** so that we can see if an item is eligible before adding it. Then we'll use the predicate in our implementation. If the predicate returns true, then the implementation will use our predicate. If the predicate returns true, then the item must be eligible. The isEligible method now needs to be non-static because it's using an instance variable. We can make it non-static by removing that static keyword. This will also require a few other changes in the class file so that the isEligible method is used in the this keyword context. Let's try it out in our Main class. In the Main method, the ConditionArrayList is much more reusable. We have an oddListy and an evenListy with the appropriate conditions. We also have a regular ArrayList. With each condition ArrayList, we provide a condition, since we don't provide a series of numbers, both lists start off as empty. Now, sometimes, we might want to access a specific form of a given instance if it has unique behavior. In our addRandomNumber function, we use the size of the list in order to determine if a number has been added. What if this method is overridden and does not act as expected?
>
> **[3:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=187)** To ensure an item is eligible before adding it, we should use the predicate in our ConditionArrayList. However, our input has the form of an ArrayList. If a given instance is a ConditionArrayList, we can access its unique functionality with the instanceof operator. We'll write if the input is an instanceof the ConditionArrayList, then we'll cast it to a ConditionArrayList and use its unique functionality. With this form, we can see if the int n is eligible. If not, we'll continue to loop until it finally is. Then we'll add the eligible number to the list. If a given ArrayList is not a ConditionArrayList, then the if statement will be skipped and the item is just added. Let's use this function with each list. Let's run it. Even items are added to the even list, odd to the odd and any to the regular ArrayList. With the instanceof operator, we can safely cast an object to a more specific form and use more nuanced functionality.

> [!info]- Semantic Content
>
> **Code Identifiers:** iseligible (3), isodd (1), oddlisty (1), evenlisty (1), addrandomnumber (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Writing flexible code with compile-time polymorphism](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=0)** - [Instructor] [Java](../../Skills/Software%20Development/Java.md) also supports compile-time polymorphism to make your code faster and cleaner. With compile-time polymorphism we can have more than one method with the same name, let's take a look. With the ConditionArrayList, we can create a new list with a predicate. In this case, the condition is if the number isDivisibleByThree. We can also create a ConditionArrayList by providing a series of numbers, in addition to the predicate. Only those that satisfy the condition will be added to the list. We're able to use the constructor in this way, because the second input to our constructor is a variable argument. You can input zero numbers, one number, or as many as you want. However, they do have to be in a series or array format. If you want to add another list or collection to the ConditionArrayList, it's currently not possible. In fact, when we try we get an error saying it cannot resolve the constructor, and that's because there's no constructor that takes in a list. To solve this issue, we can implement compile-time polymorphism with method overloading. What we'll do is add another constructor with the same name, but give it a different set of parameters. With this, it will have to have the same name and return type or else the method wouldn't be overloaded, it would just be a different method.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=98)** Since an array list works a little differently, we'll need to modify some of the implementation for streaming through the lists contents. We'll write super(arrayList), we'll stream through the contents and filter based on the predicate. We'll also need to add that as a parameter.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=125)** Great, we've overloaded the constructor method by adding a second method signature with different parameters. This will allow us to construct a ConditionArrayList with a predicate and an array list. If you ever want to have multiple ways to create or manipulate an object with different sets of inputs, method overloading provides a way and we'll see this in our main method. Going back to that main class, the error has gone away. We've used compile-time polymorphism to initialize our ConditionArrayList in different ways. In fact, since a ConditionArrayList is another form of an array list, we can further this by initializing the instance with a different ConditionArrayList. For example, let's say we had another predicate, isDivisibleBySix. We could use this predicate and create a new ConditionArrayList from our divisibleByThree array list.
>
> **[3:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=193)** So how does Java decide which constructor to use? It's based on the inputs type and the number of parameters used at compile time, hence compile-time polymorphism. We can continue to expand our overloaded constructor by having one call the other. Instead of having our constructor take in an array list, it can take in a list which is a more basic form. We can use that because this form guarantees that the stream method, which is used on the list, will be implemented. In fact, it simplifies our implementation because now we are dealing with a more basic object, a plain list, rather than the more nuanced and complex array list. We don't use functionality specific to an array list, so why should that be the inputs type. From here, we can have the other constructor use this functionality by calling it directly. Now the filtering, as well as the setting up of the condition, is all done in one place making our implementation more maintainable and leaving less room for error. Furthermore, the overloaded constructor makes our code more flexible, giving us more ways to use the same functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** isdivisiblebythree (1), arraylist (1), isdivisiblebysix (1), divisiblebythree (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Exploring how built-in Java classes use polymorphism](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=0)** - [Instructor] The [Java](../../Skills/Software%20Development/Java.md) programming language uses both runtime and compile-time polymorphism under the hood, let's take a look at the ArrayList class. The ArrayList class has two methods with the name addAll, but they have different sets of parameters. The first addAll takes in one parameter, a collection. In the implementation, it adds all the elements from that collection to the end of the ArrayList. Scrolling down, we can see that the second addAll takes in two parameters, the index and the collection. We want to add all the elements to the list, but the index allows us to specify a specific location to add them. We could add the items at the beginning of the list, the end of the list, or somewhere in the middle, and we'd specify where, using that index. The first implementation assumes we want to add the collection to the end, but the second implementation gives us a little more control over where we add the items, this is compile-time polymorphism. We have two options for adding the items in a collection to the list. It's not a question of which implementation is better, in fact both are needed. Using the first implementation removes complexity because we want to add items, but it doesn't really matter where. The second implementation gives us specificity when needed, allowing us to be more specific on where we add the item.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=99)** The ArrayList class also has examples of runtime polymorphism. In the class definition, we see that the ArrayList class extends abstract class. One of the methods that the ArrayList class overrides is the add method, with the index and element parameters. This implementation is specific to the ArrayList class.
>
> **[2:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=130)** In the abstract list class we can find the same method signature, however, the implementation is very different, it throws an exception. This forces the ArrayList class to override the method with an implementation, and this is done on purpose. It's a pattern that requires subclasses to override certain methods, forcing runtime polymorphism, otherwise, when called, the add method will return an exception. So which polymorphism is better to use? Both options make your code more flexible by providing multiple ways to use similar functionality. Overloaded methods are faster because they are bonded during compile-time, which is an earlier phase than runtime. They also keep everything in one place, while with overridden methods you might be jumping all over the place in your code. Ultimately, it depends on your use case and you'll likely need both. Sometimes you just want another way to input into the same functionality, in that case you'll probably use compile-time polymorphism. Other times you might want to change a few method implementations, but keep the same core functionality, in that case runtime polymorphism would be a good place to start. Both are core concepts in polymorphism, and they're used throughout the Java programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** addall (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Reduce complexity with polymorphism](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=0)** - [Instructor] Let's practice leveraging polymorphism in [Java](../../Skills/Software%20Development/Java.md) to reduce application complexity. Let's say you want to add a series of contacts to your phone. For some contacts, you have a name, phone number and email. For others, you just have a name and phone number. There are also a few where you only have a name and an email address. In this challenge, you'll create a program that allows you to create contact instances in a variety of ways. After creating a contact instance, you should print it out to the console. In the printout, display the information about the contact. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Reduce complexity with polymorphism](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=0)** - [Instructor] To start off we'll create a contact class to represent a contact we might add in our phone. The contact we'll have name, phone number, and email address attributes. All three will be strings. We can represent the phone number as a numerical type, but then we'd have to use a fairly large number. For simplicity we use a string. A given contact could also have a bunch of different phone numbers and email addresses so we could make these lists. But in this example, we'll just say a contact can have one phone number and one email address. For this challenge, we want to be able to create our contacts with different sets of inputs. Sometimes, we'll have access to just a name and a phone number, other times, a name and an email and sometimes all the data. To do this, we'll need to implement compile time polymorphism and overload our constructor. We'll create one constructor that sets up all of the attributes. So this is when we would have all of the data available.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=78)** Then we'll create a constructor that just sets up the name and the phone number. We'll have one more constructor for when the name and email address are available. Hmm, now we have a problem, that's because the phone number and email address are of the same type. We have a duplicate constructor rather than another way to construct the object. If we call this constructor, the program can't tell which one we're using since both have the same number of arguments and the same type of arguments. One option is to just have a constructor with the name and you setters to directly set the email address and phone number attributes. However, if we want to use compile time polymorphism, we'll need to change the data type of either the phone number or the email address. Let's say we want to pull out the country code for a given phone number and make it its own attribute. In doing that, we would be enhancing the way we represent a phone number in our program. We could add a country code attribute to this class, but it really has to do with the phone number rather than the full contact. To keep the phone number data together, we can create a phone number class that encapsulates the number and the country code. Let's create a new class called phone number. We'll give it country code and phone number attributes. We could present the country code with a string,
>
> **[2:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=177)** but country codes are not large as phone numbers. So we'll use an (indistinct) If you want to further enhance this class, you can add in an area code. For the constructor, sometimes we may initialize a phone number with just the number and other times, with the country code separately. So let's create two constructors to represent that. In the second case, the implementation is fairly straightforward. We just set the country code and the phone number attributes as expected. If you wanted to enhance this program, you could also add additional air checking. You could check if the phone number only contains digits, or if the country code is valid, but we'll keep this as is for now. Back to the first constructor, the phone number could include the country code, or it could not include the country code. And the cases where it does include the code, we know the number of digits and the phone number must be greater than 10. Since the phone number is a string, it's super easy to get the length. If there are more than 10 digits then the last 10 digits, represent the phone number and whatever digits are in the beginning, must be the country code. To grab the country code, we'll grab a sub string of the phone number starting at zero and going to the length of minus 10
>
> **[4:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=268)** Then to grab the core phone number, we'll get the digits following the country code. If the inputted phone number does not include a country code, we'll assume the country code is one and we'll set that up in our L's case. Now that we have our phone number class set up, we'll modify the data type and the contact class. And the error with our constructor goes away. Let's use this overloaded method in our main class.
>
> **[5:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=312)** We've created a few contacts. We have contacts that are initialized with a name and phone number, name, and email address as well as one with all three attributes. By creating an overloaded constructor, we've reduced complexity because we only have to input the values we want to initialize in the method. Then we print out all the contacts to the console. Let's run the code. Hmm, we get references to the contact objects, but we can't see the actual data. If we want to see what the phone number is as well as the name and email address, we'll need to override the two string method. To do this, we'll go to our class and write public and the two string method pops up for us. We'll want to display the name, phone number and email address in the console. So we'll leave all of these checked. If we click okay, the IDE will generate the code to override the two string function. Here, we're using runtime polymorphism to override the default object two string functionality and we provide a more specific implementation for the contact class. Let's do the same for the phone number class. It pops up again, two string, we'll write public. It pops up for us. We'll want to display the phone number and the country code. So we'll click okay, and it's generated.
>
> **[6:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=407)** Let's run the program again. We can see the data for each contact in the console. This completes the challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** we call this (1), is a  (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Abstraction in Java

[↑ Back to Table of Contents](#table-of-contents)

#### [What is abstraction?](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=0)** - [Instructor] In [Software Development](../../Topics/Software%20Development.md) we use abstraction to hide implementation complexity. This complexity could be from an algorithm, EPI or design. And the goal of abstraction is to generalize the features of a given system. If a software product uses abstraction it should be able to provide a user with an example input, output in a broad description of what the system does without going into the technical details. Consider someone making coffee with a pod coffee machine. The person knows they need to provide the machine with water and the specific coffee pod but they don't know exactly how the coffee is made. They don't need to know how the coffee machine works internally in order to brew a fresh cup of coffee. Someone else created the pod coffee machine to hide all the details of exactly how the coffee is made. If you want to make a cup of coffee, you just interact with the simple interface, providing the inputs and you get your output, a cup of coffee. You can do all of this without having any knowledge of the coffee machine's internal implementation. Looking at abstraction and [Java](../../Skills/Software%20Development/Java.md) specifically, we have abstract classes and interfaces and we'll be looking at these in more detail in later lessons. When systems are abstract, it's easier for engineers to add code contributions because they don't have to know every single detail of each system they're working with. They just need to know the inputs, the outputs
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=95)** and a general idea of what the system does. This allows engineers to focus on what features they want to add to the application without getting bogged down in the details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** brew (1), make (1)
> **Env Vars:** epi (1)
> **Speakers:** - [instructor] (1)

#### [Using abstract classes in Java to reduce code complexity](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=0)** - [Instructor] An abstract class allows us to add abstraction to our [Java](../../Skills/Software%20Development/Java.md) programs. It's like a template for a class where some of the functionality is not implemented yet. This means you cannot instantiate an abstract class but other classes can extend the abstract class and implement the appropriate functionality. One way we might use abstract classes in Java is for reading a file. Let's say you want to read a file in several different ways. Some hold secret messages, some have information we want to redact. So it's important to be able to retrieve the contents of a file in different ways. To start off, we'll create an abstract file reader class. This class will have the basic operations for interacting with the file and retrieving the files contents. It will also have one attribute called file path. It will have the data type path which is built into Java. Once it's set, it will not change for the instance. So that's why we've added the keyword final. For the constructor, we'll have the user input a string which represents the file path. Then in the constructor, we'll convert this into a path object and we'll set it equal to our file path attribute. We can add additional error handling here to make sure the file path is valid, but we'll keep this simple for now.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=95)** Then we'll add a getter for the user to retrieve the path
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=104)** For this abstract class, we'll include a key algorithm called read file. This will read the file and turn the output into a list of strings. For the implementation, we'll iterate through the lines of the file on the file path. For each line, we'll parse it. This will be a custom method we'll create in a minute. Then we'll collect the parsed results into a list that we returned to the user. For the parse line implementation, this really shouldn't be done in the base class since other classes will always override this method with different implementations. The base parsing would be no parsing at all. To force the subclasses to implement parse line, we can make this method abstract by adding the keyword abstract. You may have noticed now we have some errors. That's because we need to make the base file reader class abstract. Classes with abstract methods must be denoted as abstract with the abstract keyword. Now, since there's no implementation for the parse line method, we cannot instantiate an instance of the abstract file reader class. Instead, we'll need to create a subclass that extends abstract file reader in order to use it. Let's say someone is sending us a numerical secret message and they've placed it in the contents of a file,
>
> **[3:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=199)** to retrieve the message, we just need to look at the numbers and filter out all of the other letters and symbols. To do this, we can create a digits only file reader. This will be a concrete class that extends abstract file reader. As a part of that extension, it will need to implement parse line. We'll also need to create a constructor. That's because we need some way to get the abstract file reader access to a file path. For the parse line implementation, we'll replace all of the non-numerical characters with the empty string. We'll use a regular expression. Let's try using this in a separate main class.
>
> **[4:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=254)** We'll create a file reader with a file message.txt.
>
> **[4:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=263)** We're finding our code with IntelliJ. So the message file is in the IntelliJ's project folder. Let's read the file and point out its contents. Let's run it. And there's our secret message. So what makes the abstract file reader class useful? One major reason is that this class allows us to place the file reader algorithm in one place. Other concrete file reader classes can use the algorithm without worrying about the implementation. They just have to override the parse line method. With the abstract file reader, we can easily create functionality that reads the file and converts its contents to all uppercase, lowercase or whatever we want. All we need to do is create a new class that extends the abstract file reader class and implements the parse line functionality. In other subclasses, we also have the functionality to continue adding custom methods. Ultimately, there's a bunch of different ways you can read a file in your program but one of the main goals you should have in contributing to a code base is writing code that's easy to read and easy to contribute to. With this implementation, if there's ever a new type of file reader that needs to be created, a new engineer can just extend the abstract file reader class.
>
> **[5:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=357)** It's that easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3)
> **CLI Commands:** make (3)
> **Tools:** intellij (2)
> **File Paths:** message.txt (1)
> **Exercise Files:** template (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Using interfaces in Java to provide conformity](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=0)** - [Instructor] Another way we can add abstraction to our [Java](../../Skills/Software%20Development/Java.md) programs is through interfaces. An interface is a set of method signatures for to-be-implemented functionality. It's kind of like a specification for a set of behavior without the implementation. So like an abstract class, an interface cannot be instantiated. Let's take a look at an example. Here we have an event interface. Any class that wants to use the event interface must implement the getTimeStamp and process methods and return the appropriate type. To use an interface, another class implements it, using the implements keyword. Let's create a class that uses this interface. We'll call it PasswordChangeEvent. This event is created when a user changes their password. To have it use the event interface, we'll use the keyword implements. Of course, we aren't done yet. In order for this class to properly implement the event interface, it must have implementations for all of the specifications. Those are the getTimeStamp and process methods. We can hover over the error and click implement methods. IntelliJ will create basic implementations for us. There's debate in the software community on whether to use @Override. It's technically not overriding any default functionality but since the specifications are defined somewhere else,
>
> **[1:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=96)** it's added here. Let's add some attributes to this class. We'll add a timestamp and a customer ID. These should not change after they're set by the constructor. So we have the keyword final. Speaking of that constructor, we'll have it take in an id. For the timestamp, we'll want to create it dynamically. If we wanted to enhance the class, we could also create another constructor that takes in a timestamp in case the event was created at an earlier time. Now onto the methods. Let's return out timestamp attribute with getTimeStamp. Then in process, we'll print out a custom message for processing this customer's event. Let's create two more types of events. We'll create MissedPaymentEvent and AccountTransferEvent.
>
> **[2:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=171)** For the MissedPaymentEvent, most of the code will look pretty similar. The main difference is that we process the event in a different way. Same goes for AccountTransferEvent. Similar attributes but a different implementation for process. The getTimeStamp signature forces each class to have a timestamp attribute that marks the timestamp when the event was created. So although we can't define attributes in the interface, this is one way to get around that. Let's go to our Main class and create some instances.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=215)** Here we have three events. One with each type with the different IDs. Now, since all of these are events, we can put them together in an event array. This mixes a little bit with the polymorphism principle, since we're classifying them as event objects, rather than their specific type. From here, we can iterate through the events array and process each event individually. Using the event interface here abstracts away the actual implementation of how an event is processed. All we know is that this functionality will take each event and process it after printing the timestamp that was created. This reduces complexity and makes your code easier to read. Furthermore, by using the event interface, if we ever want all events to have another method specification, we can just add it to the interface. Adding a new spec to the interface forces all of the classes that implement the interface to conform and implement the new method as well. This provides conformity for all of your event classes and makes it fairly straightforward to add a new type of event. All the developer has to do is use the event interface and implement the specified methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Code Identifiers:** gettimestamp (4)
> **Documentation:** specification (2), spec (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Discovering abstraction in Java source code](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=0)** - [Instructor] To find some more examples of abstraction, We can look at the [Java](../../Skills/Software%20Development/Java.md) source code. Java uses abstract classes and interfaces to reduce complexity. Let's jump in. We've taken a look at the ArrayList class a few times now. In its definition, we see it extends AbstractList, which is an abstract class. It also implements a few interfaces. In Java, a class can only extend one other class, but it can implement several interfaces. Let's take a look at the AbstractList class. This extends Abstract Collection because a list is a specific type of collection. Going into Abstract Collection, we see a few abstract methods as well as a few methods that are already implemented. For example, is empty takes whatever the size returns and checks if it's zero. This is a base algorithm that is the same for all collections. Many of the implemented methods use the abstract methods in order to calculate various things such as whether the collection contains a given item or for converting the collection into an array. When another class extends this class and implements the iterator in size functionality, it will get all of these other collection [Algorithms](../../Skills/Software%20Development/Algorithms.md) for free without worrying about their implementation. The abstract class also has an add method
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=97)** that throws an unsupported operation exception. If another class extends this class, then they could override this method and enhance their class with the add functionality. Let's take a look at collection. The interface that Abstract Collection uses. Interfaces can extend other interfaces. This means whatever implements the collection interface must also implement all the functionality in the Iterable interface. These are separated out because a given object might be Iterable, but not necessarily a collection. However, here, all collections are Iterable. Scrolling down, all of the methods are things that the Abstract Collection implements or makes abstract for a subclass to implement. Inside of Iterable, we see the iterator specification. Let's take a step back and go to our ArrayList. The ArrayList extends AbstractList which extends Abstract Collection. This gives the ArrayList access to various functionality in AbstractList and in Abstract Collection. We can also say that the ArrayList implements the Iterable and collections interface because it's superclass up the chain implements these interfaces. At the ArrayList level, we only have to override or implement functionality that is specifically associated
>
> **[3:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=190)** with the ArrayList. Things that should work with any type of list or collection, should live in the AbstractList and Abstract Collection classes. For functionality that's unique to the ArrayList type, we use abstraction to leave the implementation up to this class. We abstract away the details to the concrete type while promising certain functionality such as the size method. The implementation just might be different depending on the concrete list or collection. This is a common pattern in the Java source code. First, create an interface with method specifications then create an abstract class that implements the interface with base implementations and some abstract methods. At the ArrayList level, we only have to override or implement functionality that is specifically associated with the ArrayList. Anything that should work with any type of list or collection should live in the AbstractList or Abstract Collection classes. And this is a common pattern in the Java source code. First, create an interface with method specifications then create an abstract class that implements the interface with base implementations and some abstract methods. Finally, create a concrete class that implements the abstract methods. With this pattern, we get base implementations for free on the concrete class level, and complexity is reduced, by leaving the specific unique details
>
> **[4:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=285)** to the concrete class. I encourage you to explore more of the Java source code to see this pattern in other built-in Java classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (7), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (4), is an  (1)
> **Exercise Files:** source code (4)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Leverage abstraction to write simpler applications](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=5)** - [Instructor] In this challenge, you'll practice using abstraction to reduce application complexity and code duplication. Earlier in the chapter, we created an event interface with two method specifications. We had three different classes extend this interface, password change event, missed payment event, and account transfer event. All three of these classes have duplicated code for the get timestamp method. They also have the same attributes, create a timestamp and ID. Can you refractor this code so that the get timestamp functionality and the attributes live in one place? Note, all of the duplicated code has to do with what it means to be an event rather than a specific missed payment or password change event. Given this refactoring, the code in the main class should not change significantly. We should still be able to work with the events as event objects. In this challenge, I encourage you to play around with abstract classes and consider using the abstraction pattern we saw in the [Java](../../Skills/Software%20Development/Java.md) source code. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Leverage abstraction to write simpler applications](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=0)** - [Instructor] Let's reduce complexity and code duplication in our event program. We started off with the event interface and this will remain the same. However, instead of each custom event class implementing the interface, we'll have an abstract event class that implements event. Before the timestamp and ID attributes were duplicated across each event. Here, we've put the attributes in a single place, the abstract event class. The implementation of getTimestamp was also duplicated, so we've put it in this common class. Now this is an abstract class, so we can not create instances from it directly, rather other event classes we'll extend this class with more functionality. In that extension the abstract method process will need to be implemented. Let's take a look at how the password change event has changed. Instead of implementing the event interface, this class extends abstract event. In its constructor, it calls AbstractEvents constructor, which handles the setup of the created timestamp and ID attributes. This class also overrides the process method with the custom implementation specific to the PasswordChangeEvents. With this implementation, all of the logic regarding any event lives in the abstract event class,
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=94)** while logic regarding to the specific event lives in its appropriate class. Since the abstract class implements the event interface, and the specific class extends it, PasswordChangeEvent also implements the event interface indirectly. This means in our main method, we can still classify PasswordChangeEvent as a general event, while using its custom process functionality. The other event classes look pretty similar, with MissedPayment, we see it extends the AbstractEvent class and implements the abstract method with the custom implementation. For the account transfer class, it also extends abstract event and implements the process method with a unique implementation. By using interfaces and abstract classes, we're able to remove duplicate code, and simplify the custom event implementations. If an engineer wants to add a new type of event, all they have to do is extend abstract event, and implement the custom functionality. This makes it clear that data and functionality belonging to all events should live in the abstract event class, or event interface, while items associated with specific events should live in their own concrete classes.

> [!info]- Semantic Content
>
> **Code Identifiers:** gettimestamp (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying code smells and anti-patterns in OOP code](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=0)** - [Instructor] When used correctly, [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) or OOP can be a great tool for writing maintainable and efficient code. However, developers may accidentally introduce issues known as code smells. Code smells are indicators or warning signs in your code that suggest potential problems. They do not necessarily indicate a bug, but rather areas where your code could be improved. One example of this is class bloat. Class bloat happens when a class becomes too large and handles many responsibilities. A large class can be challenging to maintain and understand because you might not understand the side effects it has or what could break by changing it. It's important to consider refactoring it into smaller classes when your team has bandwidth. This is also the case for long methods. A given software application should have many small components, each with their own independent responsibilities. Large components can be difficult to read and understand. Another example of a code smell is a god object. A god object is a class that knows and does too much. It often has many attributes and methods, making it a single point of failure for the application. This could be seen in combination with class bloat. One of the five solid principles of object-oriented programming in design is the single responsibility principle.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=95)** This states that a class or module should have a single, well-defined responsibility or job within a software system, encapsulating a single piece of functionality. It should not be responsible for multiple unrelated tasks. By following this principle, your code will avoid having these code smells relating to large classes. The last code smell we'll cover is called feature envy. This happens when a method in one class has a strong interest in the internal details or attributes of another class, more so than in its own class. If a given method frequently accesses or manipulates the properties of another class, it creates excessive coupling, making the two classes less independent. There's a few options to fix this. One is to move the method over to the class it envies. Another is to create an interface to better define a contract between the two classes, so the one relies less on the internal details of the other. Which refactoring option you choose will depend on the design of your code base and the scenario. Ultimately, identifying code smells early and creating a plan to address them can help you maintain a high standard of code quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2)
> **Definitions:** is a  (2), known as (1), is called (1)
> **Env Vars:** oop (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=0)** - [Kathryn] Congratulations! You finished the course. Now you know how to use object oriented programming to write code that's reusable, secure and maintainable. As a part of this course, you discovered the four pillars of object oriented programming, encapsulation, abstraction, polymorphism and inheritance. You leveraged these to reduce complexity and duplicate code in your applications. You also explored [Java](../../Skills/Software%20Development/Java.md) source code and witnessed how Java uses object oriented programming behind the scenes. Thank you for watching this course. I really enjoyed creating it to help you discover how object oriented programming works in Java. Good luck. And I hope the knowledge you've gained in this course comes in handy whenever you're building Java programs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Exercise Files:** source code (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [Kathryn Hodge](../../Instructors/Software%20Development/Kathryn%20Hodge.md)

## Resources

- Exercise files available

## Skills Covered

- Object-Oriented Programming (OOP)
- Java

## Path Context

### In [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)
← [Java Essential Training- Objects and APIs](../Software%20Development/Java%20Essential%20Training-%20Objects%20and%20APIs.md) | **3 of 5** | [Java- Data Structures](Java-%20Data%20Structures.md) →

## Part of

- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

## Appears In

- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

## Related Courses

_Courses sharing skills:_

- [Practice It- Java](../Software%20Development/Practice%20It-%20Java.md) — Java
- [Hands-On Introduction- Java](../Software%20Development/Hands-On%20Introduction-%20Java.md) — Java
- [Learning Java 17](../Software%20Development/Learning%20Java%2017.md) — Java
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Java
- [Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More](Advanced%20Java-%20Hands-on%20with%20Streams%2C%20Lambda%20Expressions%2C%20Collections%2C%20Generics%20and%20More.md) — Java

---

[↑ Back to top](#)