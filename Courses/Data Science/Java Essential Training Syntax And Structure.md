---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: java-essential-training-syntax-and-structure-16025610
url: "https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610"
level: Beginner
updated: 9/3/2024
learners: 346150
skills:
  - Java
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHJ39iKZdeJeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724878410217?e=2147483647&amp;v=beta&amp;t=SNPFodc0nkml-jZeEtt0KAs-QEAP2ezO9qFoASAhsaY"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started as a Java Developer]]'
  - '[[Java Foundations Professional Certificate by JetBrains]]'
next_courses:
  - '[[Java Essential Training- Objects and APIs]]'
  - '[[Java Essential Training- Objects and APIs]]'
path_nav: '[{"path":"Getting Started as a Java Developer","position":1,"total":10,"prev":null,"next":"Java Essential Training- Objects and APIs"},{"path":"Java Foundations Professional Certificate by JetBrains","position":1,"total":5,"prev":null,"next":"Java Essential Training- Objects and APIs"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Essential%20Training%20Syntax%20And%20Structure.md)

![Java Essential Training Syntax And Structure](https://media.licdn.com/dms/image/v2/D560DAQHJ39iKZdeJeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724878410217?e=2147483647&amp;v=beta&amp;t=SNPFodc0nkml-jZeEtt0KAs-QEAP2ezO9qFoASAhsaY)

# Java Essential Training Syntax And Structure

> Java is one of the most popular programming languages in the world, running on billions of devices across the globe. As such, being able to program in Java is a highly sought-after skill. This course with certified Java developer Angie Jones provides the foundation for learning how to program with the most recent Long-Term-Support (LTS) release, Java 17. Angie shows how to install Java and Intelli

> [LinkedIn Learning](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610) | Beginner | 346K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn the essentials of Java 17](#learn-the-essentials-of-java-17)
  - [CoderPad tour](#coderpad-tour)
  - [Programming and algorithms](#programming-and-algorithms)
- [**1. Getting Started with Java**](#1-getting-started-with-java) (2 videos)
  - [Install IntelliJ Community Edition](#install-intellij-community-edition)
  - [Install the Java Development Kit (JDK)](#install-the-java-development-kit-jdk)
- [**2. Java Basics**](#2-java-basics) (5 videos)
  - [Packages](#packages)
  - [Classes](#classes)
  - [Main method](#main-method)
  - [Reserved words](#reserved-words)
  - [Code Solution: Method names](#code-solution-method-names)
- [**3. Variables**](#3-variables) (7 videos)
  - [Creating variables](#creating-variables)
  - [Primitive data types](#primitive-data-types)
  - [Local variable type inference](#local-variable-type-inference)
  - [Naming variables](#naming-variables)
  - [Modifying variables](#modifying-variables)
  - [Arithmetic operators](#arithmetic-operators)
  - [Code Solution: Fill in the blanks](#code-solution-fill-in-the-blanks)
- [**4. Decision Structures**](#4-decision-structures) (9 videos)
  - [If statements](#if-statements)
  - [If-else statements](#if-else-statements)
  - [If-else-if statements](#if-else-if-statements)
  - [Switch statements](#switch-statements)
  - [Switch expressions](#switch-expressions)
  - [Relational operators](#relational-operators)
  - [Logical operators](#logical-operators)
  - [Short circuit logic](#short-circuit-logic)
  - [Code Solution: Change for a dollar game](#code-solution-change-for-a-dollar-game)
- [**5. Repetition Structures**](#5-repetition-structures) (6 videos)
  - [While loop](#while-loop)
  - [Do while loop](#do-while-loop)
  - [For loop](#for-loop)
  - [Nested loops](#nested-loops)
  - [Break statement](#break-statement)
  - [Code Solution: Roll the die game](#code-solution-roll-the-die-game)
- [**6. Methods**](#6-methods) (7 videos)
  - [Creating methods](#creating-methods)
  - [Calling methods](#calling-methods)
  - [Variable scope](#variable-scope)
  - [Passing data to methods](#passing-data-to-methods)
  - [Returning data from methods](#returning-data-from-methods)
  - [Overloading methods](#overloading-methods)
  - [Code Solution: Calculator](#code-solution-calculator)
- [**7. Objects**](#7-objects) (8 videos)
  - [Defining classes for objects](#defining-classes-for-objects)
  - [Constructors](#constructors)
  - [Instantiating objects](#instantiating-objects)
  - [Objects as method parameters](#objects-as-method-parameters)
  - [Objects as method return types](#objects-as-method-return-types)
  - [Wrapper classes](#wrapper-classes)
  - [Records](#records)
  - [Code Solution: Create a car object](#code-solution-create-a-car-object)
- [**8. Arrays**](#8-arrays) (3 videos)
  - [Arrays](#arrays)
  - [Variable arguments](#variable-arguments)
  - [Code Solution: Generate a bingo card](#code-solution-generate-a-bingo-card)
- [**9. Text Processing**](#9-text-processing) (3 videos)
  - [Strings](#strings)
  - [Text blocks](#text-blocks)
  - [Code Solution: Password validator](#code-solution-password-validator)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn the essentials of Java 17](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/learn-the-essentials-of-java-17?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/learn-the-essentials-of-java-17?u=76281980&t=0)** - [Angie] [[Java]] is one of the world's most popular programming languages. It runs on billions of devices all over the world, making the ability to program in Java a highly sought after skill for enterprise developers. This course provides a comprehensive view of Java 17. I'll teach you all about the Java syntax, data types, decision and repetition structures, as well as objects, a core concept of the Java language. We'll explore each concept together through hands-on coding lessons to help you gain a practical understanding. There are even individual challenges you'll work on by yourself to really cement the knowledge. I'm Angie Jones, a certified Java developer in Java Champion. Join me in this [[LinkedIn]] Learning course as we dive into core Java programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[LinkedIn]] (1)
> **Versions:** java 17 (1)
> **Speakers:** - [angie] (1)

#### [CoderPad tour](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/coderpad-tour?u=76281980)

#### [Programming and algorithms](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/programming-and-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/programming-and-algorithms?u=76281980&t=0)** - [Instructor] Computers are a part of our everyday lives. They're everywhere. We use them at work. We use them at home. We use them while we're out on-the-go. So we're all very familiar with computers, but from a programmer standpoint, a computer is simply a machine that is capable of processing data. Contrary to popular belief, computers are not smart. They're not capable of thinking for themselves, and therefore, they need a program to provide precise instructions on how to do everything. A program, also known as software or code, is a set of instructions that a computer follows to perform a task. Programs were originally written in machine language, a series of zeros and ones, because this is the only language computers understand. People later created more human-friendly programming languages to write in, such as [[Java]]. These languages are translated behind the scenes into machine language, and then interpreted by the computer's [[Hardware]]. In addition to Java, there are many other programming languages as well. An algorithm is a high-level step-by-step guide to complete a task. Given a problem, you can solve that problem using an algorithm. An algorithm can be implemented using
>
> **[1:35](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/programming-and-algorithms?u=76281980&t=95)** a programming language. Let's look at a problem, and then come up with an algorithm to solve it. Let's say we need to calculate an employee's gross pay. To solve this, we will write down the step-by-step instructions on how we would go about doing this. The first step is to get the number of hours the employee worked. Then, we get the hourly pay rate. Next, we multiply the hours and the pay rate. And finally, we would display the result. We can take this algorithm, and then use a programming language such as Java to implement it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Hardware]] (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Java

[↑ Back to Table of Contents](#table-of-contents)

#### [Install IntelliJ Community Edition](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/install-intellij-community-edition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/install-intellij-community-edition?u=76281980&t=0)** - [Angie] For this course, we'll use the free and open source code editor IntelliJ. Go to [jetbrains.com/idea](https://jetbrains.com/idea) and click download.
>
> **[0:14](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/install-intellij-community-edition?u=76281980&t=14)** JetBrains has attempted to detect your operating system. Ensure that the one they've selected is the correct one. For me, it's Mac OS, but we also have [[Windows]] and [[Linux]] here as well. Click the download button under the Community Edition. Once the download has completed, double click to open it. If you're on Mac, drag the application to the Applications folder, and if you're on Windows, follow the prompts to install. After the installation is complete, go to your app and double click to open it. This is our IDE, which stands for integrated development environment, and this is where we'll write all of our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (1)
> **UI Navigation:** go to (2)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Exercise Files:** source code (1)
> **Definitions:** stands for (1)
> **Prerequisites:** install (1)

#### [Install the Java Development Kit (JDK)](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/install-the-java-development-kit-jdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/install-the-java-development-kit-jdk?u=76281980&t=0)** - [Angie] Before writing [[Java]] code, we need to install the Java development kit, often referred to as the JDK. Fortunately, IntelliJ allows us to do this right from within the IDE. In the menu, click file, and then project structure. Under platform settings, click SDKs. Here we can click the plus sign, and then download JDK. In the version, be sure to select 17 for the version. In the vendor dropdown, I recommend choosing the Oracle OpenJDK. Oracle is the owner of Java, and OpenJDK is the free open source version of Java. You can leave the location as is unless you'd like it downloaded to a different location. Click download, and then click OK. Perfect, now we have Java 17 installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5)
> **Env Vars:** jdk (2), ide (1)
> **UI Navigation:** in the menu (1), dropdown (1)
> **Versions:** java 17 (1)
> **Tools:** intellij (1)
> **Prerequisites:** install (1)
> **Speakers:** - [angie] (1)


### 2. Java Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Packages](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/packages?u=76281980&t=0)** - [Instructor] In [[Java]], a package is a folder or container that holds Java files. Let's first create a project so that we can create a package within our project. Within IntelliJ choose to create a new project, select Java as the type and click next. Make sure that you don't have a template selected and click next. Then we need to give it a project name. We'll just call this one Java essentials and click finish.
>
> **[0:37](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/packages?u=76281980&t=37)** Now on the left, you'll see the project view. This is where all of our files live. So far we don't have much because this is a new project but we can add things to this source folder. Source code is also a term that's used for programs. So under the source folder, we can right click, hover over new, and then choose to add a new package. Again, a package is a special folder in Java that holds one or more Java files. You can have multiple packages within a project. In fact, you should, depending on the relationship between the code. So we want to make packages for the logical grouping of related Java files. Okay. We're ready to create our first package. As you can see we're prompted to give the package a name. For Java packages, the convention is that the packages should be all lowercase. This is not a rule. Meaning your programs won't break if you don't follow this, however, this is a convention. And when I say convention throughout the course, this means this is what's been adopted and accepted by Java programmers worldwide. Following these conventions makes it easy for you to know what's what within your program as well as other programmers who have read or edit your code. Let's go ahead and give it a package name.
>
> **[2:13](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/packages?u=76281980&t=133)** We're going to call this gross_calculator as that's the logical name for a folder that will hold all of our files that we create in this section of the course. We can hit Enter or press OK if you have that button. And then if we expand this source folder, notice, now we do have a new package which is called gross_calculator. Notice there's a little circle icon on here to denote a package. Great job creating your first package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (9)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** gross_calculator (2)
> **Exercise Files:** template (1), source code (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Classes](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/classes?u=76281980&t=0)** - [Instructor] Packages contain [[Java]] files, also known as classes. Let's create a new class. Right-click on the package, select New and choose Java Class. By convention, Java classes start with an uppercase letter. We're going to make a class that will implement a gross pay algorithm. So let's name our class something that is reflective of the task that it needs to do. GrossPayCalculator. Notice here I'm using three words in the class name. However, there are no spaces. That's because Java does not allow spaces in the name of a class. Also notice that although the class name contains three different words and they're all together, each [[Microsoft Word|word]] begins with an uppercase letter. Capitalizing the first letter in each word helps with readability and it's also a convention within Java. After naming the class, click Enter and notice we now have a new class. This is our Java file. Notice the name in the open tab, GrossPayCalculator.java. All Java files end with a Java extension. Now I'm going to double-click this tab just so that it makes it bigger in our editor. Notice that the very first line of the Java file
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/classes?u=76281980&t=94)** is a package declaration. If your Java file is within a package, which ours is, then the first line must declare what package that is, followed by a semicolon. The declaration simply consists of the word package followed by the exact name that we named our package here. Then the next statement must be the class declaration. So within a Java file, you have a Java class. The Java class is declared as public class GrossPayCalculator. And there's two curly braces. In Java, the curly braces are used to encompass a block of code. Yay, we have our very first Java class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (16), [[Microsoft Word|Word]] (3)
> **UI Navigation:** right-click (1), double-click (1)
> **Definitions:** known as (1), is a  (1)
> **File Paths:** grosspaycalculator.java (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Main method](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/main-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/main-method?u=76281980&t=0)** - [Angie] Any code added between these two braces will belong to the [[Java]] class. The curly braces encompass a block of code. Inside of this class, we're going to create a method, which is another block of code. In order to run any code from within a Java class, It must be inside of a method. To create the method, we'll say public static void main. And we'll also add a set of curly braces here. The method we've added is called the main method, which is the entry point for running a program in Java. When we execute this class, it's going to first look for the main method within this class, and this is the starting point of the program. It has to be defined just like this. Methods also have this set of curly braces. So everything that exists between these curly braces will belong to this main method. Let's add a print statement inside of the main method just to see it execute. To print a line in Java, we use the command system.out.println, and inside of a set of parentheses, we specify what we would like to print. In programming, printing "Hello World" is a common first task, so let's do that.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/main-method?u=76281980&t=94)** Within quotation marks, we'll type "Hello World." And at the end of this line, we add a semicolon. A statement is essentially one instruction. So this is one statement that's saying to printing a string, which is a Java construct for text, to the console. And the semicolon is used to end a statement in Java. Every statement ends with a semicolon. Great, now we have a class with a main method that contains one statement. Let's run this class. To run this program for the first time, right click anywhere within the program, and then choose this option to run. Notice a console window now opens and it prints out the sentence "Hello World" just like we asked it to. Congrats. We have our first Java program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (2)
> **Speakers:** - [angie] (1)

#### [Reserved words](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/reserved-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/reserved-words?u=76281980&t=0)** - [Instructor] Looking at this code, notice some of the words here are in a different color. The exact color varies depending on your editor and theme, but in my case, I'm referring to the words in orange. We have package, public, class, static and void. All of these are examples of reserved words. Reserved words are words that a programming language has decided means something specific within the language, and therefore, cannot be used to name things within our program. So we couldn't name something class or public or package because these words are reserved and can only be used for what [[Java]] has designated them for. There are dozens of reserved words. As we build more things together, I want you to pay attention to the colors. Anytime you type something and it turns orange or whatever color the reserved words are in your editor, make a note to yourself that this is another reserved [[Microsoft Word|word]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Method names](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-method-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-method-names?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-method-names?u=76281980&t=5)** - [Instructor] In this challenge, your task was to change the methodName variable to reflect the method's name. The name of the method is main, so we'll change the value of the methodName variable to be main. Let's run this. Awesome.

> [!info]- Semantic Content
>
> **Code Identifiers:** methodname (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating variables](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980&t=0)** - [Instructor] Let's implement the algorithm to calculate an employee's gross pay. Here within the main method, I have the algorithm steps commented out. A comment is something for the human programmers to read, not the computers. So the computer will ignore lines that are commented out and will not try to process them. To comment out a line, you simply add these two slashes to the beginning of the line and that will turn it into a comment. We don't need these comments within our program. However, they will serve as guidance to help us remember the steps as we program this algorithm. The first step is to get the number of hours worked. Let's say this value is 40. We'd like to store this value as a variable so that it's clear what the value is for and also so that we can use it later in the program. A variable is essentially a memory location that stores data. In fact, variables can store all sorts of data. So let's call our variable hours and then we'll put an equal sign to store this information inside of the variable. And finally, on the right side of the equal sign, we specify the value of the variable. And we'll end this statement with a semicolon. Notice the variable hours is red here
>
> **[1:37](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980&t=97)** which indicates a compilation error. By hovering over the red code we can see an error message. It says it cannot resolve the symbol hours. This means [[Java]] has no idea what hours is because we have not declared it. Programming languages are either dynamically typed or statically typed. Dynamically typed programming languages such as [[JavaScript]] determine the data type of a variable at run time. Meaning while the program is running. Therefore in these types of languages, the programmer doesn't need to specify the data type of a variable. However, Java is a statically typed programming language which means it expects its variables to be declared before they can be assigned values. Because in statically type languages, the data type is checked at compile time. Because this is our first time using the hours variable, we must declare its data type. Different types of data use different amounts of memory. So you must use the proper data type for any variable you declare. This data type is based on the type of data it must store. 40 is a whole number, also known as an integer. In Java, the reserved [[Microsoft Word|word]] int is used
>
> **[3:13](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980&t=193)** as the primitive data type for integer values. So again, we declare this variable with a data type of int. We've given it a name of hours. And then we put an equal sign followed by the data that it holds. This is a variable declaration. Okay. The next step in our algorithm is to get the hourly pay rate. Let's say that the pay rate is $25.50. Because this value is using a decimal number, we need a data type that can handle decimal numbers. Double is one such data type. We can declare this variable as double. We'll call pay rate and we'll say it equals 25.50;.
>
> **[4:08](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980&t=248)** Next we want to multiply the hours in the pay rate and we're going to also store this in a variable. So what should be the data type of this variable? Well, we're multiplying an integer by a decimal number. The result could very well be a decimal number. So that's the data type that we want to use to hold this result. So we'll say double. We'll call this variable gross pay and we'll set it equal to the variable hours times the variable pay rate semicolon. Now we want to display the result. So we use system.out.println to print. And we'll prefix this with a string, let's say gross pay. And then we're going to append the variable. So we'll use this plus sign which will allow us to add this variable to the string. And we'll say grossPay semicolon. Now let's run our program. If this is your first time running this class, right click anywhere within the class and choose the run option. Or if you've already run this class before, you can simply click this play button and it'll run again. Perfect. As you can see the gross pay calculator works.
>
> **[5:42](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-variables?u=76281980&t=342)** Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[JavaScript]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (3), known as (1)
> **Versions:** 25.50 (2)
> **Code Identifiers:** grosspay (1)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Primitive data types](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/primitive-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/primitive-data-types?u=76281980&t=0)** - [Angie] Primitive data types are the most basic data types and are provided by [[Java]]. Here are the eight primitive data types in Java, as well as their default values, size, type, and an example. For integral values, meaning whole numbers without decimals, there are four choices. Byte, short, int, and long. The difference between them is the size of the memory location. For example, the byte data type is 8-bit, which means the largest number it can hold is 256. Whereas the long data type is 64-bit, which means it can hold integral values up to 9.2 quintillion and some change. For decimal numbers there are two choices, float and double. Variables declared as float can hold up to seven decimal digits, whereas variables declared as double are more precise, as they can hold up to 16 decimal digits. Boolean values will either be true or false. That's the only type of data a boolean can hold, and true or false can also be represented by the numbers one and zero, where one is true and zero is false. And finally, char is used to hold a single character. Char variable values are placed in single quotation marks,
>
> **[1:40](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/primitive-data-types?u=76281980&t=100)** as double quotation marks are reserved for strings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Versions:** 9.2 (1)
> **Analogies:** for example (1)
> **Speakers:** - [angie] (1)

#### [Local variable type inference](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/local-variable-type-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/local-variable-type-inference?u=76281980&t=0)** - [Angie] While [[Java]] is a statically typed language, it offers type inference for local variables, which means we can declare a variable as VAR and Java will infer the data type based on what is assigned to the variable. Let's take a look at an example. As opposed to using boolean as the data type for the variable isWaterWet, we can use the [[Microsoft Word|word]] VAR. When using VAR, you must initialize the variable at the time of declaration. Otherwise, Java is unable to infer what the data type should actually be. Type inferences only allows for local variables. Local variables are variables that are declared within a method. You cannot use VAR for declaring a global variable, which is a variable that is defined at the class level outside of the methods of the class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** var (4)
> **Definitions:** is a  (2)
> **Code Identifiers:** iswaterwet (1)
> **Speakers:** - [angie] (1)

#### [Naming variables](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/naming-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/naming-variables?u=76281980&t=0)** - [Instructor] In our GrossPayCalculator program, notice, we name these variables hours and payRate to represent the information that they're holding. If we need to use these variables later on or revisit this program a year from now, it will be clear what these variables represent. Sometimes, programmers are in a hurry and will use abbreviated words or even a single letter, such as h for hours or r for rate. This is discouraged because it makes your code less understandable to others, and even to your future self. Please be descriptive when you're naming your variables, methods, class, and packages. Anything that you name in programming, be descriptive of what it represents, because whenever you look at this again, you don't want to have to guess or dig around to figure out what it represents. Also, when you're collaborating with other programmers, they may have to update your program later. So it's very helpful when things are named appropriately. That's my friendly advice. There are a few conventions for naming variables in [[Java]]. For example, variables should start with a lowercase letter. And they should use camel case when containing more than one [[Microsoft Word|word]]. There are also some hard rules when naming variables. For example, you cannot use spaces in variable names. So just like with class names,
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/naming-variables?u=76281980&t=96)** you can write all of the words together, but use camel case. That means that each separate word of the variable name should begin with an uppercase letter, except the very first word. You can use numbers within variable names. However, the numbers cannot be the very first character of the variable name. You can also add special characters, like dollar sign or underscore, but there are some special characters that are not allowed, like dash, for example. You cannot use Java's reserved words to name your variables, as these already have a specified meaning in Java. So just be careful when you're naming your variables. If you run into any issues, the compiler will let you know if a variable name is not valid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microsoft Word|Word]] (3)
> **Analogies:** for example (3), such as (1), just like (1)
> **Code Identifiers:** payrate (1)
> **Definitions:** means that (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Modifying variables](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/modifying-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/modifying-variables?u=76281980&t=0)** - [Instructor] When writing our GrossPayCalculator program, we specify the values for hours and for pay rate. By doing this, we hard coded the values, meaning they will be the same every time this program is executed. However, for most variables, as the term implies, the value should vary. If we want this to be a program that anyone can use to calculate their gross pay, then we need to modify it. So instead of hard coding the value for hours, let's instead set the variable to a default value of zero and then ask the user to enter the number of hours worked. We can do this by saying System.out.println. How many hours did you work? When given a default value to a variable, this is known as initialization. We have initialized the hours variable with a value of zero. Now to read data from the user, we can use a scanner. We declare it as Scanner scanner equals new Scanner and inside parentheses, we'll say System.in. And notice the red here. If we hover over Scanner, we notice IntelliJ is telling us we need to import this Scanner class in order to use it. Yay, this is our first exposure with classes from other packages. [[Java]] comes bundled with several classes and if we ever need to use a class
>
> **[1:33](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/modifying-variables?u=76281980&t=93)** that exists in another language, we must first add a line to import that class. Notice when I click import class, we now have a import statement here. Scanner lives in the java.util package, which contains lots of nice utility classes like this one. Now, we can use this Scanner object to read input from the users and store that in our existing variable hours. When we type scanner dot, notice, IntelliJ presents us with available options. Many of these start with the [[Microsoft Word|word]] next, followed by some data type. You'll always choose the one that matches the data type that you're expecting as input. In our case, hours is an int, so we'll choose nextInt. Awesome, you've now modified the value of hours from the default value of zero to whatever the user has input. Let's do the same for payRate. We'll initialize payRate with a value of zero and then we'll prompt the user for their payRate. Against the prompt, we'll say System.out.println. And print the message. Since we have already declared Scanner above on line 12, we don't need to declare it again. We can just use it to get the input. payRate is a double.
>
> **[3:09](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/modifying-variables?u=76281980&t=189)** So we'll say scanner.nextDouble to change the value of this variable. That's it for input. So let's go ahead and close the scanner since we don't need to read anymore input. We can do so by saying scanner.close. The [[Representational State Transfer (REST)|rest]] of the program remains the same. Let's run it. Notice the prompt here. And we can enter any number for hours now. So let's say we worked 30 hours and the pay rate is we'll say 8 US dollars and 25 cents.
>
> **[3:51](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/modifying-variables?u=76281980&t=231)** Voila, our program still works with the modified variables. Great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** payrate (4), nextint (1), nextdouble (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Tools:** intellij (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Arithmetic operators](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arithmetic-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arithmetic-operators?u=76281980&t=0)** - [Angie] [[Java]] provides five operators for basic math calculations. These operators work with any numeric values, which includes the data types byte, short, int, long, float, and double. The plus symbol is used to add two numeric values together. The plus symbol has an overloaded use in Java. It's also used to append a value to a string, which is text. The other operators only work with numeric values. The minus symbol is used to subtract a value from another. The asterisk symbol is used to multiply two values together. The slash is used to divide one value by another, and the percent symbol is called the modulo operator, and is used to compute the remainder of dividing one value by another. For example, 5 modulo 2 would be 1, because that is the remainder of dividing 5 by 2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [angie] (1)

#### [Code Solution: Fill in the blanks](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-fill-in-the-blanks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-fill-in-the-blanks?u=76281980&t=0)** - [Instructor] Your task for this challenge was to create a fill in-the-blank story program where the blanks are filled by variables. We begin the story with "On a" white space, and we use a plus operator to append the adjective variable to this drink. Then after adding another plus operator, we append a white space to separate the words, then add the next variable, which is season after another plus operator. We continue with the story with space day, comma. I drank a minimum of space. Then another plus operator to append our final variable, which is number of coffees. We finish the story with space cups of coffee, period. Once we run test my code, we see that we print out on a cold day comma, I drink a minimum of four cups of coffee.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Decision Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [If statements](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-statements?u=76281980&t=0)** - [Educator] Oftentimes programs have to make decisions. So we need to provide different paths of execution within our code. To do this, we use what's called decision structures. The If statement is the most common decision structure in programming. It works as a quick detour within the program. If a certain situation occurs, the program executes a specified block of code and then returns to the main path of execution. Let's look at an example. Let's say we have a team of salespeople, all of whom make a standard rate of US$1,000 a week. For any of them who make more than 10 sales that week, they get an additional bonus of US$250. So the main path of the program would be to pay a salesperson US$1,000 since everyone gets this, no matter what. However, at some point we need to check to see if the condition was met of the salesperson making more than 10 sales. If it's met, then we need to add more to their payment. Here we have a class called SalaryCalculator, and in its main method we have the main path of the program. We initialize variables for salary, bonus, and quota. We've prompted the user to enter the number of sales an employee made for the week.
>
> **[1:33](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-statements?u=76281980&t=93)** Now here on line 26 is where we want to introduce an If statement that will determine if we should add the bonus to this employee's payment based on the number of sales they made. To program an If statement, you write the [[Microsoft Word|word]] if, which is a reserved word in [[Java]], then you follow if with an open parentheses and a closed parentheses. Inside of the set of parentheses is the condition to evaluate. This condition must be an expression that resolves to a boolean value which is true or false. So our expression will be sales greater than quota. Next, we add a set of curly braces to enclose this as a block of code. Everything inside out of these braces will be executed if the condition sales is greater than quota results to true. If the condition results to false, then the code inside of these braces will not execute. So if the employee made more than 10 sales, we want to add a bonus of US$250 to their salary. Inside of the curly braces we'll update the salary variable with the bonus by saying salary equals whatever is already in salary plus the bonus. A quick note about the curly braces for decision structures:
>
> **[3:10](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-statements?u=76281980&t=190)** they are meant to encompass zero or more statements. However, if we only have one statement, technically we don't need the curly braces. It would still work without them. Okay. Excellent job. To test our code, let's run the program in debug mode so that we can see it step by step. I'll go ahead and add a break point right here on the If statement. To run in debug mode, we can right-click anywhere within the class and instead of run, we can select debug. When it asks how many sales, let's enter 10, and notice here, the program has halted because we put a break point there and we can see this condition results to false because 10 is not greater than 10. So this will not execute this line of code. If we continue running the program, then notice, the output is US$1,000. Okay, let's run again, but this time we do want to go inside of the If statement. So we'll say 15 this time and notice here, we can see that the condition does result to true, which means that it will go inside of here and add the bonus and we can see that in the result here where the pay is US$1,250. Great job with If statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Java]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [educator] (1)

#### [If-else statements](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-statements?u=76281980&t=0)** - [Instructor] The if-else statement is a decision structure that works as two separate paths within a program. With the if statement, we take a quick detour when a condition is met, but then we return to the main path of the program. However, with the if-else statement, it differs in that it has two distinct paths and the program will either go down one path or the other. After this branch-off is completed, then the program returns to the main path. Let's look at an example of if-else where we have two different situations to consider, those who have met their quota and those who have not. All salespeople are expected to make at least 10 sales each week. For those who do, they receive a congratulatory message. For those who don't, they are informed of how many sales they were short. In this new class called QuotaChecker, we initialize the quota as 10. We ask the user how many sales they made this week. Then we have an if statement that says if the sales are greater than or equal to the quota then we give them a message letting them know that they've met their quota. To add an alternative path, we use the reserve [[Microsoft Word|word]] else followed by a set of curly braces. Notice the else clause doesn't have parentheses
>
> **[1:33](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-statements?u=76281980&t=93)** for the condition because it's not needed. The condition that's specified with the if statement is the condition for this entire decision structure, which includes both the if and the else. So what this is saying is if this condition is true, go inside of the if block and execute the statements there. else, if this condition is false, go inside of the else block and execute the statements there. Each of these paths represents a branch. Inside of the else statement, we'll let them know that they were short and by how much, so we'll create a variable named salesShort and we'll set it equal to the quota minus the number of sales. Then we'll print the message. So we'll say system.out.println. You did not make your quota. You were and then we can add in the variable here, salesShort, sales short. Awesome work. Now we know how to work with two alternate branches within our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** salesshort (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [If-else-if statements](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-if-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-if-statements?u=76281980&t=0)** - [Instructor] The if-else-if statement is used when there are more than two possible paths. For example, if situation A occurs, let's go down one path. Else if situation B occurs, let's go down another path. Else if situation C occurs, let's go down a different path. Let's look at an example. Given a numeric test score, let's figure out the letter grade for that test score. In this program, we've asked the user to enter their test score. Now, we want to determine the grade. We have five grades we can choose from, A, B, D, or F. So that's five different possible paths. So far, we've looked at if and if-else. So it really only covers two paths at max. What do we do when we have something like five different paths, we can use the if-else-if decisions structure. Let's first declare a char variable to hold the grade value. We don't know what the value of grade is yet. So we'll use the if-else-if decision structure to decide on the value for grade. We start off with an if statement, and we can say, if the score is the less than 60, we'll update the grade variable to equal F. In the if-else decision structure,
>
> **[1:38](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-if-statements?u=76281980&t=98)** you only need to evaluate one condition to determine which of the two paths should be executed. However, with an if-else-if decision structure, you specify conditions for every branch, except, possibly, the last one. So here, not only are we going to say else, but we say else if. Then we can add a condition for this block of code. So we'll say, if the score is less than 70, then the grade is D. So far, we have two conditions. The first condition will be evaluated. If it is true, no other conditions of this decision structure will be evaluated. The program will return to its main path. However, if the condition is false, the program moves on to the next condition to evaluate in this decision structure. Unlike with a plain else statement, it doesn't execute this block of code by default if the first condition is false. Instead, it evaluates the second condition, and determines if it's true or false. Okay. We've covered two of the five conditions. Let's add another else if. This time with the condition of the score being less than 80. So we'll see else if, the score is less than 80, then we'll assign C to grade.
>
> **[3:18](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/if-else-if-statements?u=76281980&t=198)** In order for this branch to be executed, all other conditions that have already been processed as part of this decision structure must be false, and this particular condition must be true. The fourth branch that we'll add is else if, the score is less than 90, and we'll assign B to grade. Now, finally, if it's anything other than one of these conditions where we've covered scores of 90 and below, then the grade is equal to A. So we don't need a condition on this last branch. We can simply add the last else. That way, all of our bases are covered. Here, we'll say the grade equals A. If I were to add a condition on else, it would be okay. However, if the score happens to be anything that I didn't think of as the programmer, then none of these conditions would've been met, and none of the branches executed.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Switch statements](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-statements?u=76281980&t=0)** - [Instructor] The switch statement is a decision structure that solves a problem in a similar way that the if-else-if decision structure does. It's ideal for cases when you have more than two paths. The difference between the if-else-if and the switch statement is that if-else-if checks if the condition is true, whereas the switch statement checks for equality. In this example, we'll have a user enter their grade, and then, using a switch statement, print a message based on the student's letter grade. In this new grade message class, we've already asked the user to enter their letter grade, and we've scanned that in, and stored it inside of this grade variable, and we've also declared a variable for message, but we don't know the value of this message just yet. To determine which message to print, we'll use the switch decision structure. In order to invoke this, we type switch, a set of parentheses, and a set of curly braces. Inside of the parentheses, we give it the variable that we wanted to evaluate. Note, we're not passing an expression, like in the if-else-if structure, we're passing a variable. And in this case, it's grade, which is a string. Inside of the switch statement, we enter a number of cases.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-statements?u=76281980&t=94)** And each case is a possible path. So we can say that in the case that grade equals A, then we put a colon, and anything that we want to happen in this case. For example, we can state that, in the case that grade equals A, we want the message to be excellent job. To do so, we'll save message = Excellent job. Notice, we don't use curly braces for cases, instead, we use the colon to begin, and then you can add however many statements you need to in the case. And when you're done with that case, you terminate it with the reserve [[Microsoft Word|word]] break. Here are the four other cases which cover all of the valid values for grade. But what if the user enters something other than one of these valid values for grade. If we don't have a case declare for it, then nothing will occur. So in the switch statement, it's a good practice to also have a default case that handles anything that was not explicitly covered by one of the cases. The default case is denoted by the reserved word default, and then a colon. Then you add your statements, and the break, just like we did with the other cases.
>
> **[3:14](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-statements?u=76281980&t=194)** Just like the if-else-if, only one of these will be invoked. The first one that is true. So if the grade is equal to A, then A will be executed. Once the statements in case A have been executed, the entire switch statement will terminate. It will not even evaluate the [[Representational State Transfer (REST)|rest]] of the cases. Control will be returned to the main path of the program. However, the switch statement allows what's called a fall-through. Fall-throughs occur when you eliminate the break statement at the end of a case. Let's say the value of grade was A. It would execute case A, however, because case A does not have a break statement, it would continue on to execute case B, as well, even though grade doesn't even equal B. In fact, it will keep going through all of the cases until it reaches a break statement. Sometimes, that's by design, as in the case of A and B here, where we may want to print the same message. But many times, it's because the programmer forgot to put a break statement. So be very careful to include a break statement when you want the switch decision structure to stop. Most times, it's better to use an if-else-if decision structure because it allows for a range of conditions, not just equality.
>
> **[4:48](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-statements?u=76281980&t=288)** Also, you don't have to remember the break statements. However, there are some cases where you might want to use the switch, and that's perfectly fine, as well. It's up to you to decide which is best for the problem you're solving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (2), for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Switch expressions](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-expressions?u=76281980&t=0)** - [Instructor] Switch expressions are similar to switch statements. However, they allow you to directly assign a value when a case is matched. In this example, we're using switch statements to assign a value to the variable message. Switch expressions provide a simpler way to do this. As opposed to declaring message on a standalone line, we could actually initialize it with the result from a switch expression. We can add an equal sign after message and move the switch structure to the right side of the equal sign. Also, we can simplify the cases by replacing :message= with just an arrow, which we type using dash and a greater than sign. This means the same thing, which is, if grade is A for example, a sign, excellent job to the message, variable. Let me do that for the [[Representational State Transfer (REST)|rest]] of the cases as well. Another nice thing about switch expressions is that they do not need a break statement as there is no fall through like with switch statements. So we can delete the break statements here as well. Finally, we place a semicolon after the closing curly brace. Much more streamlined, right?
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/switch-expressions?u=76281980&t=96)** While unintentional fall throughs can lead to errors, there are valid instances where you want to execute the same code from multiple cases. You can do this with switch expressions by listing all applicable cases delimited by a comma. For example, if we wanted to use the same message for both grades A and grade B, we could place a comma after case A and specify case B as well. While switch expressions are perfect for assignments, sometimes it takes a bit of computation to get to the value you'd like to assign. Switch expressions allow you to include more than just the assignment in your cases. To do so, you'd enclose all of the case statements inside of a set of curly braces after the arrow as we see in this example. Notice when doing this, the final line of the case must yield a value to be assigned to the result variable. When determining whether to use a switch statement or a switch expression, remember that switch expressions are great when you need to assign a value, and switch statements are better when you only need to invoke statements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Relational operators](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/relational-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/relational-operators?u=76281980&t=0)** - [Angie] Relational operators are symbols used within conditions. Let's look at examples of [[Java]]'s six relational operators within boolean expressions. The greater than operator evaluates if the number on the left of the symbol is greater than the number on the right. In this example, our expression asks, is two greater than three? And this results to false. The less than operator evaluates if the number on the left is less than the number on the right. Is two less than three? Yes it is. So this results to true. The greater than or equal operator evaluates if the number on the left is either greater than or equal to the number on the right. Four is greater than or equal to four, so this results to true. The less than or equal operator evaluates if the number on the left is either less than or equal to the number on the right. Four is not less than or equal to three, so this results to false. The equal to operator is two equal signs. In Java, the single equal sign is used for assignment, like when we assign a value to a variable. So you cannot use the single equal sign in a condition to compare values.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/relational-operators?u=76281980&t=94)** Instead, you use the double equal sign. Here, we ask if three is equal to two, and that results to false. Finally, to evaluate that a value is not equal to another value, we have the not equal to operator, which is denoted by an exclamation mark and an equal sign. Three is not equal to two, so this expression results to true. The relational operators can be used on any of the primitive data types, with one exception. Greater than, less than, greater than or equal to, and less than or equal to, cannot be used with boolean operands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Speakers:** - [angie] (1)

#### [Logical operators](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/logical-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/logical-operators?u=76281980&t=0)** - [Instructor] Logical operators are used to combine conditions in order to get one resulting Boolean value. They are often used in decision structures when the condition to execute is a bit more complex. For example, if we had a scenario where a person must make at least 30,000 US dollars and have been working at their current job for at least two years in order to qualify for a loan, we'd need our if statement to evaluate both of these conditions to determine if the user qualifies. There are three logical operators in [[Java]]. The first logical operator is AND. Its symbol is two ampersands. The AND operator combines two separate conditions and both conditions must be true in order for the entire condition to be true. Next is the OR operator. Its symbol is two pipes. The OR operator combines two conditions and at least one of those conditions must be true in order for the entire condition to be true. Finally, the NOT operator has an exclamation point as its symbol. The NOT operator works on a single condition and negates the Boolean value of that condition. So the condition itself must be false in order for the resulting condition to be true. Let's look at a couple of examples.
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/logical-operators?u=76281980&t=96)** For the AND operator, we have two conditions. One is less than or equal to two and four is less than or equal to five. The first condition is one is less than or equal to two. By itself, that's a Boolean expression and results to true. By using the and operator, we're saying both of these conditions must be true, so we look at the second condition. Four is not equal to five, which is also true. So the resulting value will be true. For the OR operator, in this example, we have two conditions. Three is equal four or six is greater than one. The first condition, three is equal to four, is false but then the next condition, six is greater than one, is true. With the OR operator, only one of the conditions must be true in order for the entire value to result to true. The NOT operator takes the opposite value of the condition. Here we have two is not equal to three. Well, two equals three is false. But the NOT operator negates this, so the value is false and the negation of that value results to true. Here's an example of the AND logical operator within an if-else decision structure.
>
> **[3:11](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/logical-operators?u=76281980&t=191)** The first condition asks if the person's salary is greater than or equal to the salary required to qualify for the loan. Even if this is true, that in and of itself is not enough to qualify for the loan. The second condition must also be met, which evaluates if the number of years the person's worked is greater than or equal to the required number of years to qualify for the loan. Only if both of these conditions are true will the person qualify for the loan. Logical operators are a great way to simplify your program by eliminating the need for nested if statements to evaluate conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Short circuit logic](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/short-circuit-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/short-circuit-logic?u=76281980&t=0)** - [Instructor] The and and or logical operators are used to combine two conditions into one. For the and operators, both conditions must be true, so if the very first condition of an and statement is false, it does not bother to evaluate the second condition. There's no need to, because both would need to be true in order for the entire condition to be true. It will look at the first condition and if it's false, the entire condition will be false, so this saves a bit of computational time. Likewise, with the or operator, if the first condition is true, then it doesn't bother to evaluate the second condition. This is known as short circuiting, where the evaluation of the condition ends once it's clear what the final result will be. In this example, we have three standalone conditions that need to be combined into one. The program will work these from left to right. So we start with false and true, this evaluates to false, so the program will not evaluate any of the other conditions of this if statement because there's no way this can result to true. In this example, the program first evaluates true or false. Because the first condition is already true, there's no need to evaluate the second operand
>
> **[1:33](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/short-circuit-logic?u=76281980&t=93)** of this condition since this is using an or operator, we only need one condition to be true for the entire condition to result to true. So, this does indeed results are true and the program moves on to evaluate the [[Representational State Transfer (REST)|rest]] of the first operation with the second condition. The next evaluation takes the result of the first operation which was true and uses the and operator. This condition is true and true. While the first condition is true, the and operator requires both conditions to be true so it cannot short circuit here, instead, evaluates the second condition. Both conditions are true, therefore, the entire condition becomes true and in the IF is printed. It's great to be aware of how short circuiting works so that you can order your conditions in the most efficient way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** known as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Change for a dollar game](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-change-for-a-dollar-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-change-for-a-dollar-game?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-change-for-a-dollar-game?u=76281980&t=5)** - [Instructor] In this challenge, your task was to make a game where the objective is to enter enough change to equal exactly $1 US. You were already provided with the values of each coin. So the next step is to calculate a sum based on the quantity that was provided. Because we're dealing with decimal numbers, I created a variable of type double and named it total. I then multiplied each coin's value by the quantity that was passed in. So we have here the number of pennies time penny, the number of nickels time nickel, the number of dimes times dime, and the number of quarters time quarter. We then use an if decision structure to determine if the total equals exactly $1 US. And if so, the user wins the game. So we changed the variable won to true, and then finally we return this value.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Repetition Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [While loop](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/while-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/while-loop?u=76281980&t=0)** - [Instructor] Loops are structures that cause a block of code to repeat. In most cases, when you need your code to repeat the same statement more than once, it's best to enclose them within a loop. This eliminates the redundancy of copying and pasting those same statements over and over again. Let's look at a problem that will require a loop to solve. Each store employee makes 15 US dollars an hour. Write a program that allows a manager to enter the number of weekly hours worked for each employee and calculate their pay. Do not allow for overtime. We'll need to calculate the salary for employees based on how many hours they have worked. This one says our program cannot allow for overtime, which means we need to validate the input. In this GrossPayInputValidator program, we know that the payRate is $15 and the maxHours is 40. We ask the employer to enter the number of hours the employee worked this week. We read that input in and store it in the hoursWorked variable. Finally, we go ahead and calculate what the gross would be and print that out. However, since our program is not supposed to allow overtime, we have to verify that what the user has entered is valid input. We could check to make sure that hoursWorked is not greater than 40, however, what if they enter the wrong input again? Or a third time or a fourth time? How will we know once it's valid?
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/while-loop?u=76281980&t=94)** We could accomplish this by putting the block of code that reads and validates input inside of a while loop. So after we get the input, let's go ahead and say validate input here. To create a while loop, we write the [[Microsoft Word|word]] while and then inside of a set of parentheses, we add a condition. If this condition is true, it will go inside of the loop, which is denoted by a set of curly braces. So what condition should cause us to go inside of the loop? Well, we can say if the hoursWorked is greater than the maxHours, then we'll go inside. This means the input that they've provided is greater than what's allowed, so we want to loop the following statements. So inside of the loop, let's go ahead and let the user know that what they provided was invalid, and so we can say invalid entry. Your hours must be between 1 and 40. Try again. And then we'll update our hoursWorked variable with the input that they provide. Once the enclosed statements have been executed, the program will exit the loop and return to the top of the loop to reevaluate the condition to determine if it needs to execute again.
>
> **[3:08](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/while-loop?u=76281980&t=188)** hoursWorked has been updated, so now its new value will be compared to maxHours. If the condition is still true, meaning they enter something greater than 40 yet again, it will go back inside of the loop. hoursWorked will be updated again. It'll come back to the top of the loop to test the condition again. Once the user inputs valid data, this condition will become false and the loop will not be entered. Instead, the program will continue. Let's test our program. So we can enter 56, which is obviously greater than 40 and notice, we get the error message. How about let's try 43. Yep, still the error message and then let's try one under 40 and this time, we exited the loop and our print out is here. An important note is that if you're using variables within the condition of your loop, it's essential that the value of at least one of those variables has the possibility of being updated within the loop. Otherwise the condition could always result in true, therefore causing what's called an infinite loop, meaning the loop will run over and over again until the program eventually crashes. The key points about while loops are that they are controlled by a condition and will continue to run while that condition remains true. The condition is tested before the loop is entered,
>
> **[4:42](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/while-loop?u=76281980&t=282)** so there's a chance that the loop will never execute. And it's best to use a while loop when you may or may not need to repeatedly execute a block of code based on the state of the condition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** hoursworked (6), maxhours (3), payrate (1)
> **Best Practices:** it's best to (2)
> **CLI Commands:** make (1)
> **Warnings:** important note (1)
> **Speakers:** - [instructor] (1)

#### [Do while loop](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/do-while-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/do-while-loop?u=76281980&t=0)** - [Instructor] A do while loop is very similar to a while loop, except it checks the condition after execution as opposed to before. This means that a do while loop executes at least once. Note that do while loops are rarely used as the while loop will usually meet your needs. However, it's still good to know about do while and how it works. In this problem, we're asked to write a program that allows a user to enter two numbers and calculate the sum. The program should repeat these actions until the user indicates they are done. To create a do while loop, we'll write the [[Microsoft Word|word]] do, followed by a set of curly braces. Notice, there's no condition here because the do while loop doesn't check the condition until after the loop has been run one time. All statements that we want to execute go inside of the curly braces and at the end of the loop, we add the word while and a condition will go inside of that set of parentheses. We end the loop with a semicolon. For the problem we're solving, the condition should be whether the user want to run the program again. So let's create a variable that we'll call runAgain and we'll set this equal to zero initially. And for our condition, we can say if runAgain equals to one, then we'll want to run this loop again.
>
> **[1:37](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/do-while-loop?u=76281980&t=97)** Inside of our loop, we'll ask the user for the first and second numbers. So we'll do a System.out.println and we'll say Enter the first number. And we'll read this into a variable called number1. Great, and we can just copy this and do the same for the second number. So we'll say enter the second number and we'll store this in a variable called number2. Next, we'll sum these two numbers up. So we'll say double sum equals number1 plus number2 and then we'll print out the sum. So System.out.println the sum is, and we'll add the sum here. Great. Now, we can't forget to update the variable runAgain since it controls the loop. So let's ask the user if they want to start over. We'll say System.out.println would you like to start over? Enter one for yes, two for no. And then we'll go ahead and read their value back into the runAgain variable. So we'll say scanner.nextInt. Awesome.
>
> **[3:13](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/do-while-loop?u=76281980&t=193)** Let's run it. Notice, before we even do anything, the program has already entered the do while loop. We'll go ahead and enter two for the first number, three for the second number and the sum is five. It asks us would we like to start over? Let's say yes so that the loop repeats again. Great. This time, we'll say three and four and then we'll stop the loop by entering two. The key points to remember are just like the while loop, the do while loop is also controlled by a condition. That condition is tested after the completion of the loop. So the loop will always run at least once. It's best to use the do while loop when the loop should run at least one time and based on the condition, may need to repeat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Code Identifiers:** runagain (4), nextint (1)
> **Analogies:** similar to (1), just like (1)
> **Definitions:** means that (1)
> **Best Practices:** it's best to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [For loop](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/for-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/for-loop?u=76281980&t=0)** - [Instructor] The for loop differs from other loops in that it's count controlled as opposed to condition controlled. Count control means the for loop executes a specified number of times. In this problem, we will write a program for a cashier that will scan a given number of items and tally the cost. On line 18, we've stored the number of items the cashier would like to scan and on line 20, we've initialized the total price as zero. Now we can create a for loop that will accumulate the price of each item. We start the for loop by writing the [[Microsoft Word|word]] for and a set of parentheses. Within the parentheses of a for loop exists three statements. The very first statement initializes a variable that we'll use to count the number of times the loop has been executed so far. We end this statement with a semicolon. I is a common variable name for an incrementer within the for loop. Also, when we're using loops in programming, it is common to start with the number zero as opposed to the number one as the loop has not yet been run. The next statement within our for loop is the condition that will end this loop. We'll say keep looping while I is less than the quantity. We also end this statement with as semicolon.
>
> **[1:37](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/for-loop?u=76281980&t=97)** So if I is starting at zero and the user entered three for the quantity, then we'd iterate when I is zero, one and two. So that will be three times the same as the quantity. The final statement of the for loop is to update the counter. Remember, we're using I as a counter for how many times the loop has been executed so we want to add one to I. We can do that by using the common shorthand I plus plus. This final statement does not end with the semicolon. Next, we add a set of curly braces to enclose all statements that should be run as part of the loop. Inside of the loop, we'll ask for the price of an individual item and then we'll add it to the total price. So we'll say enter the cost of the item and let's go ahead and read that in. Great! And then for the total, we'll say total equals whatever the total already is plus the new price. After the loop has executed the specified number of times, we can print the total outside of the loop as we only want to print this once. So we'll close our scanner outside of the loop
>
> **[3:16](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/for-loop?u=76281980&t=196)** and we'll go ahead and print the total. Your total is and we'll append the total. Awesome. Let's go ahead and run this in debug mode. So I'll put a break point in the first statement inside the loop. And to run and debug, we'll right click anywhere and choose debug. So it asks us to enter the number of items we'd like to scan. Let's say four. And notice here, quantity is four and I is initially set to zero. Great. Now it asks us to enter the cost of the item and let's go ahead and say 20. Now, it's gone through here. It's updated the total. You can see that here in the debugger. So now the total is 20. The quantity is four and I has now become one. Awesome. Let's run again so it's back inside of the loop this time. We're going to enter the cost let's say 30 and let's look at our values. I has become two. The 20 was added to the 30 to make 50 for the total and quantity remains the same. Perfect. Let's keep going. And we'll say 10 this time and notice I is now three and then a final time, we'll say 25 and notice we've gotten outside of the loop this time.
>
> **[4:55](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/for-loop?u=76281980&t=295)** The key points to remember about for loops are that they're count controlled, meaning they will run a specified number of times. The condition is tested before the loop is entered and it's best to use when you know exactly how many times the loop should be executed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Nested loops](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/nested-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/nested-loops?u=76281980&t=0)** - [Instructor] Sometimes, your repetitive tasks also contain repetitive subtasks. In this case, you need a loop inside of a loop. These are known as nested loops. In this problem, we need to find the average test scores for each student in the class. We know there are 24 students in the class, and that there's four tests that have been given. We need to loop through all 24 of the students, and since we know how many times we need to iterate, we can use a for loop. So we'll say, let's process all students, and we'll do so with this for loop where we initialize i to zero. We'll say i is less than the number of students. So keep going while i is less than the number of students, and then increment i by one each time the loop is run. Each iteration of the loop will focus on one student. Now that we have an individual student inside of this loop, we need to look at all four of their tests, which means we're going to need another loop. Since we know how many tests there are, a for loop would be best for this as well. So we'll say process a student's tests scores. Now, as we're making this for loop, we have to be careful. We cannot use the same variable, i
>
> **[1:35](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/nested-loops?u=76281980&t=95)** because it's being used to count the outer loop. So we need to use a totally different variable to control the inner loop. We can call this one j. And we would like this one to run for the number of tests. And then, we'll say j plus, plus. Great. Because we need to calculate each student's grades separately, and we don't want it to be overwritten on every iteration, we'll declare a variable called total before we get inside of the inner loop. So we'll say double total equals zero. Then inside of the inner loop, we'll go ahead and ask for each of the scores, and add it to the total. So let's say, enter the score for test number, and let's go ahead and put a number here. So each time this iterates, we can say not j because j starts with zero. So we'll say j plus one. That way, it'll print really nicely to the console. And we'll go ahead and read this into a variable called score. We'll say scanner.nextDouble, and then we can update the total. Great, after all test scores have been entered for the student, we'll break outside of the inner loop,
>
> **[3:08](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/nested-loops?u=76281980&t=188)** and we'll calculate the average for this particular student. So let's say, double average equals the total divided by the number of tests. And then we'll go ahead and print that out. So System.out.println, and we'll say the test average for student number. And again, we'll go ahead and say i plus one, so that it prints one, two, three, four, five, et cetera. And we'll say is, and then put the average here. Awesome. Now, we're done with this, let's go ahead and run it to see it in action. For the first student, we'll enter their score. So let's say 80, 75, 50 and 100. Our program calculates their average at 76.25. Notice it's prompting us for the second student now, and it will continue this for all 24 students, computing the average of all four of their test scores. While this example demonstrates nested for loops, you can nest any kinds of loops together, such as two while loops, or a while loop within a for loop. It all depends on the problem you're trying to solve.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** nextdouble (1)
> **Versions:** 76.25 (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Break statement](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/break-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/break-statement?u=76281980&t=0)** - [Angie] Sometimes you may need to get out of a loop regardless of what the condition is. We can use the break statement for this. We're going to create a program that searches a string to determine if it contains the letter A. So far, I have prompted the user to enter text and have stored that text within the string. Now, we're going to use a For Loop to search the text. So we'll say for, and we'll initialize I as zero, and our condition should indicate to loop until we've reached the end of the string. So we'll say I is less than, and strings have a convenience method called length, which will return the number of characters in the string. And then finally, we'll say i++ to increment the loop. Inside of the loop, let's go ahead and store the letter we're currently working on in a variable. And we'll call this currentLetter, and we'll say text.charAt, and specify the index, which will be I. So this will give us the current letter that we were working on inside of the string. Now let's do a quick check to see if the letter equals lowercase or uppercase A. So we can say if current letter equals uppercase A,
>
> **[1:39](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/break-statement?u=76281980&t=99)** or the current letter equals lowercase a, and basically if either of these conditions is true, then we'll update letterFound to be true. Now, once we find the letter A, there's no reason to continue the loop. So to be efficient, we'll terminate the loop using the reserved [[Microsoft Word|word]] break. When the program encounters the break keyword, it will discontinue looping regardless of what iteration it is on or whether the loop's condition has been meant. The break statement can be used in any type of loop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** currentletter (1), charat (1), letterfound (1)
> **CLI Commands:** find (1)
> **Speakers:** - [angie] (1)

#### [Code Solution: Roll the die game](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-roll-the-die-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-roll-the-die-game?u=76281980&t=0)** - [Instructor] For this challenge, your task was to exercise loops by creating a roll the die game. The objective of this game is to travel the entire game board of 20 spaces within five die rolls. Because we know the number of times that the loop needs to execute, a for loop is the best option. We set the counter i to begin at zero to continue while it's less than or equal to the max rolls allowed, and we increment by one on each iteration of the loop. Inside of the loop, we simulate a roll of the dye by randomly selecting a number between one and six, then advancing the player on the game board by that number. We use if-else statements to determine the player's status. The first condition uses the equality operator to check if the player has reached the last space on the game board. If so, the player wins and we return the appropriate message. If that's not true, we check another condition to determine if the player has exceeded the number of spaces provided. By comparing the values using the greater than operator, this case results in the player losing the game, so we return that message. The last else clause uses the and logical operator to combine two conditions. It checks to see if the player is on their last role and hasn't advanced the entire game board.
>
> **[1:33](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-roll-the-die-game?u=76281980&t=93)** If this is true, the too low message is returned.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating methods](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-methods?u=76281980&t=0)** - [Instructor] In [[Java]], methods are subtasks within a class that are used to break a complex problem into small manageable pieces. Methods perform a specific task and can help eliminate redundancy and code. Other programming languages have different names for these such as functions or modules. But in Java, they're known as methods. We've already created one method in every program that we've written so far. And that's the main method. We've also made calls to other methods, such as the ones in the scanner class to input data and the ones in the system class to output data. This is a method whose task is to calculate two numbers and return a sum. Let's examine the parts of a method. The very first line of the method is called the header. The first [[Microsoft Word|word]] in a method header is the access modifier. Access modifiers indicate who is allowed access to use this method. Public means any code from any class can use this method. Having an access modifier is not required. If one is not specified, then it means that this method is only accessible by classes within the same package. The next part of the header is a non-access modifier. Valid non-access modifiers include static, final, abstract and synchronized. Not every method requires one of these modifiers.
>
> **[1:35](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-methods?u=76281980&t=95)** Next is the return type. The return type indicates the data type of the value that the method will return back to the code that calls it. Every method is required to specify a return type. For this method, it will return the sum of two numbers and it has indicated that the sum will be of data type int. Any other method that happens to use this method knows exactly what to expect. Even if nothing will be returned, the method must still indicate that by using void as the return type. We see this in our main method. It's also important to note that a method can only return one value. Next in the method header is the name of the method. Every method is required to have a name and you should name your methods to reflect the tasks that they are designed to do. By convention, they should begin with a verb like we see here, calculate. And optionally, adjectives or nouns can follow such as sum. By convention, method names should also begin with a lowercase letter. One deviation from this convention is from methods that return a boolean data type. By convention, their method names typically ask a question such as is sum negative? After the method name comes a set of parentheses. This is required for all methods. Although the parentheses can be empty
>
> **[3:11](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/creating-methods?u=76281980&t=191)** if no external data is needed for the task that the method needs to complete. Alternatively, the parentheses are used to hold list of all the data that should be supplied to this method if it were to be called. This is known as a parameter list and it's formatted as a comma delimitated list of input into the method. In this example, we need two numbers in order to calculate a sum. So we specify that in the parameter list. If any program were to call us to calculate the sum of two numbers, they'd have to give us the two numbers as parameters. Every method has a signature. The signature consists of the name of the method and the method's parameter list. A method's signature must be unique within a class as this is how it is identified. After the method's header comes the method's body which is contained within a set of curly braces. The body consists of zero or more statements that are to be executed should this method be called. If the method has specified a return type as anything other than void, the method must include a return statement that returns a value which matches the return type specified in the header. Return is a reserved word in Java. This is the anatomy of a method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (3), known as (2), is called (1)
> **Analogies:** such as (4)
> **Prerequisites:** required to (2)
> **Speakers:** - [instructor] (1)

#### [Calling methods](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/calling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/calling-methods?u=76281980&t=0)** - [Instructor] A method is not executed unless it is called. Let's write a program that defines a method to greet a user by name, and then we will call this method from our main method. All methods must be contained within the scope of a class, but it doesn't matter the order that the methods are defined in. For example, here we have the greetUser method after the main method, but it could also exist before the main method. Methods execute in the order in which they are called. The greetUser method prompts a user for their name, and then it reads and stores it inside of this name variable and finally prints a greeting using the name. If we were to run this program, notice, nothing happens. This is because methods only execute if they are called. While the greetUser method is defined, it has not been called. When you run a [[Java]] application, the program starts off in the main method. It's the only method that does not have to be explicitly called. So this is our starting point. To execute the greetUser method, we can call it by name from the main method or any other method inside or outside of this class. To do so, we need to type the method's name, so let's say greetUser. The greetUser method has not specified any parameters,
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/calling-methods?u=76281980&t=94)** so we'll follow our call with an empty set of parentheses and a semicolon. Now when we run this class, we see that the greetUser method is now indeed called.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** greetuser (7)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Variable scope](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-scope?u=76281980&t=0)** - [Instructor] Variables are only valid within the scope in which they are defined. And by scope, you can think of it as the immediate curly braces that a variable was declared in is the limit to where it can be utilized. For example, in method1, we have declared a variable named myVariable. Because this variable was defined within the curly braces of method1, this method is the only place in which it can be used. If we try to reference myVariable from method2, we get a compilation error indicating that the symbol cannot be resolved. This is because myVariable is not known outside of the scopre of method1 and therefore cannot be referenced anywhere but within method1. Scope can be even narrower than the method level. We could also limit a variable's scope to any block of code. For example, here on line four, we defined the myVariable variable within an if decision structure. Remember, a variable scope is determined by the curly braces in which the variable is defined. So myVariable is only known within that if block. And that's the only place it can be referenced. So even though line six is within the same method as myVariable, it is outside of its scope and therefore cannot reference it.
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-scope?u=76281980&t=96)** Variables defined within methods, including within blocks, such as loops and decision structures are known as local variables. Variables defined outside of methods are known as global variables. The scope of a global variable is the entire class as the immediate curly braces a global variable is defined within belongs to the class. Global variables can be referenced from anywhere in the class, including within the class's methods. Variables can have the same name if they are within a different scope. myVariable in method1 is a totally different variable in memory location than myVariable in method2 because both of these variables are local to their respective methods. When a global variable and a local variable have the same name, the one with the lesser scope is used when referenced. On line two, we declared myVariable at the class level, so this variable is global. Within method1 on line five, we reference myVariable. At this point, the only variable with this name within scope is the global variable so that is what's used. However, on line six, we introduce a new variable that happens to have the same name
>
> **[3:08](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-scope?u=76281980&t=188)** as the global variable. So on line seven, when we reference myVariable, the compiler must determine which of these two variables are we referring to? Because the local variable, myVariable, has lesser scope than the global variable myVariable, the local variable is used. In method2, when we reference myVariable on line 11, it uses the global one because that is the only variable with that name within the scope of method2. When we update the value of myVariable on line 12, it knows we are referring to the global variable and the same is true on line 13 when we print the value of this variable. If you are within a local scope, and explicitly want to reference the global variable as opposed to the local one that will be used by default, you can do so by using the reserved [[Microsoft Word|word]] this. On line six, when we use the variable name by itself, the compiler will use the local variable by this name. But on line seven, if we want to reference the global version of myVariable, we preface the variable's name with this dot. And this will let the compiler know that we want to use the version that belongs to this class. When deciding whether to declare a variable globally or locally, consider where within your program
>
> **[4:43](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-scope?u=76281980&t=283)** does that variable need to be referenced. If you only need the variable within a small limited scope, a local variable is best. However, if you need to reference the variable across multiple methods, a global scope would meet this need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** myvariable (16)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Passing data to methods](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/passing-data-to-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/passing-data-to-methods?u=76281980&t=0)** - [Instructor] Many times methods require external data to complete its task. They receive this data via a parameter list. Let's write a method that determines if a user is qualified for a loan or not based on their salary and credit score. In the main method, we get the user's salary and credit score. Now we need to create method that determines if the user is qualified for a loan. Outside of the main method, we can declare a new method. So we'll say public static void and we'll call this method isUserQualified. In order to determine if the user is qualified for the loan, this method needs the salary and credit score of the user. However, those variables were defined in the main method and therefore are out of scope and cannot be accessed from our new method. Since we need this information within the isUserQualified method, we can declare so by listing these as parameters. The parameter list requires a data type and a name for each variable. So we'll see int_creditScore and double_salary. Inside of the isUserQualified method, we'll add two local variables, one for the required salary and one for the required credit score. So we'll say double requiredSalary equals 25,000 and then int_ requiredCreditScore equals 700.
>
> **[1:39](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/passing-data-to-methods?u=76281980&t=99)** Perfect. Then we'll add an if statement that checks if the condition is met and print a qualification message if so. So we'll say if the credit score is greater than or equal to the required credit score and if the salary is greater than or equal to the required salary, then great. They qualify and we can let them know. So we'll say congrats, you've been approved. Nice. Otherwise, we'll let let them know, sorry, you've been declined. Great. Now that our method is defined and implemented, we must call it if we wanted to execute. We can do so from within our main method. We call the method by writing its name and passing it in any arguments that were specified in it's parameter list. The method isUserQualified is asking us to pass an integer variable followed by a double variable. So we can pass in our credit score followed by the salary. Notice that the salary and credit score variable names happen to be the same in both the main and the isUserQualified methods and this okay because they're within two different scopes. So even though they coincidentally have the same name, they are different variables with different memory locations. This will work just fine, even if the names were different.
>
> **[3:13](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/passing-data-to-methods?u=76281980&t=193)** And to illustrate this, let's go ahead and change the variable names in the main method to actual salary and actual credit score. So we'll change it here when we call as well and here.
>
> **[3:32](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/passing-data-to-methods?u=76281980&t=212)** Nope. There are no errors here as this is perfectly fine. Another thing to note is the order in which arguments are passed to methods. The order of the arguments must match the order of the parameter list. So we could not pass an actual salary and then actual credit score because the method isUserQualified specifies to call it with an integer followed by a double. This is how the compiler knows which argument value to assign to which parameters.

> [!info]- Semantic Content
>
> **Code Identifiers:** isuserqualified (6), double_salary (1), requiredsalary (1), requiredcreditscore (1)
> **Speakers:** - [instructor] (1)

#### [Returning data from methods](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/returning-data-from-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/returning-data-from-methods?u=76281980&t=0)** - [Instructor] Often the role of a method is to perform a task and then return the result of that task. Let's refactor this isUserQualified method to return a boolean value of true or false and have another method notify the user. If a method is going to return a value, it must indicate that in its header. IsUserQualified currently has a return type of void, meaning it does not return anything. Let's change this to boolean. Within the if block, if the conditions are met we can add a statement that returns true. Likewise, if the condition is not met, we can return false. Now let's revisit the main method. When calling a method that returns a value, you can receive that value and store it into a variable although this is not required. We've already done this without even knowing it. On line 18, we call it the next double method and stored it's return value into the actual salary variable. Let's do same when calling isUserQualified. We'll store this inside of a boolean variable that we'll call qualified. From here, we can do whatever we'd like with this information such as passing it into a new method and having that method notify the user. Notice this notifyUser method. This method has indicated
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/returning-data-from-methods?u=76281980&t=94)** that a boolean value must be passed in when calling it. And then inside of the notifyUser method is logic to print the appropriate notification based on the value of isQualified. let's call the notifyUser method from the main method. We'll take the qualified variable that get its value from isUserQualified and we'll go ahead and pass that into the notifyUser method. Now let's go ahead and run this so that we can see how the data is returned and then passed into other methods. So I'm going to right click and read this in debug mode so that we can see the values. So our salary will say is 30,000 and then our credit score is let's say 400. So we're about to call the isUserQualified method. So the boolean variable qualify does not have a value yet. Once we call that method, notice now the qualify equals false. So we're going to pass false into notifyUser. So now we're inside of notifyUser and notice that isQualified is false because qualified equals false and that value was passed into this variable. So this is checking. If isQualified is equal to true, it is not true and therefore we will print out Sorry, you've been declined.

> [!info]- Semantic Content
>
> **Code Identifiers:** notifyuser (6), isuserqualified (4), isqualified (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Overloading methods](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/overloading-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/overloading-methods?u=76281980&t=0)** - [Instructor] Within a class, you can have multiple methods that have the same name, but different signatures. This is known as overloading. Within this month class, we have two methods that are both called getMonth. A method signature consists of its name, and its parameter list. One of the methods takes an integer for the month, and the other takes a string version of the month. This is perfectly legal. In fact, you can have as many overloaded methods as you want, but they have to differ by the parameter list. That's how the compiler knows which method you're referring to when calling it. You'll send the argument to match the parameter list of the method you're attempting to call. If you try to define overloaded methods with the same parameter list, you get a compilation error stating, that the method is already defined. For example, if we add a third overloaded method that takes a string but the argument name is different, this will still cause an error because it has the exact same signature as the second method. Overloaded methods are a great way to provide similar methods that vary slightly. It's a cleaner approach to handle various use cases, without relying on a bunch of messy, conditional logic all within one method.

> [!info]- Semantic Content
>
> **Code Identifiers:** getmonth (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Calculator](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-calculator?u=76281980&t=0)** - [Instructor] For this task, your challenge was to implement the add, subtract, and multiply and divide methods of a calculator app. Let's take a look at the calculate numbers method, which accepts two integers, first number and second number, and then performs a series of operations on those numbers and returns a final result. Notice how the value of the initial calculation is stored in a variable called result, and then that result is used in subsequent operations. Also, notice how each operation is scoped to its own method, focusing on a single task. In the add method, let's return the sum of num1 plus num2. In the subtract method, we'll say num1 minus num2. In the multiply method, we'll say num1 times num2. And finally, in the divide method, we'll say, num1 divided by num2, and let's go ahead and test this. Great. We see that it worked.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining classes for objects](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980&t=0)** - [Instructor] Objects are structures which contain data in the form of fields and methods. These fields and methods can be utilized in other classes by creating an object. Let's write a class that describes the fields and methods of a rectangle. If we think of a rectangle as not just a class but as an object, we can think of characteristics that a rectangle would have as well as actions that could be performed on a rectangle. For example, a rectangle has a length and a width. So we can declare these as global variables are also known as fields. Let's say double length and then double width. Now that we have the fields of a rectangle, what are some actions that can be taken on these fields? Well, we can calculate the perimeter in the area of a rectangle. So these would methods within the class. So let's define those now. We can say double calculate perimeter. And in this method, we'll say return two times the length plus two times the width. And then for the area we can say double calculate area and inside of here we'll return length times width. Notice that this class does not have a main method.
>
> **[1:40](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980&t=100)** We're not interested in executing any of the methods inside of this class itself. This class is made to be a general representation. So if I were to represent a general rectangle object, it would have a length and a width and you'd be able to calculate the perimeter in the area. This blueprint is meant to be a generalized shell that we can later make more specific in other classes. Let's talk about some of the other components of a class. We have fields however we have no values for them. For example, if someone were to call this calculate perimeter method, we have no idea what the value of length is, or the value of width. So we have to provide some methods that will allow whoever's using the rectangle class as an object to set the length and the width to what it is that they want it to be. There are a couple of ways that we can go about doing this. One way is to provide getter and setter methods for each of the fields. We can create a method that will allow anyone who wants to use a rectangle object to get or set the length and the width. To do so, let's say double get length and here we'll simply return the length and for the setter method, we'll say void set length and this will take in a value for length
>
> **[3:18](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980&t=198)** which is local to this method. So we'll assign it to the global length of this class. And we can do the same thing for width. So let's say double get with and return the width.
>
> **[3:39](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980&t=219)** And then a setter void set width. We take the width and set the local instance to the global one. Awesome. Another thing about classes is that they should provide encapsulation. Encapsulation is one of the key principles of object oriented programming. It specifies that the data of a class which are fields should be private and the behavior of the class which are the methods can be public to other classes to use. To encapsulate our class, let's add private access modifiers to our fields and public access modifiers to the methods we like to expose. So we'll say private on the length field, private on the width field, public on the methods that allow us to calculate and then also public on the getters and the setters.
>
> **[4:55](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/defining-classes-for-objects?u=76281980&t=295)** Great, now our class is properly encapsulated. Protected is another access modifier. If anything is marked as protected, it means that only other classes within the same package can access it. It's similar to having no access modifier at all. Okay, so this class is a representation or a blueprint of a rectangle.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), means that (1), is a  (1)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Constructors](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/constructors?u=76281980&t=0)** - [Instructor] In addition to using setter methods to assign values to fields of a class, you can also use a constructor. Constructor are used to initialize an object or set up its state in some way. All objects have a constructor. And the very first type of constructor is the default constructor. This is a default constructor. The default constructor is known as such because it does not have a parameter list. This means, if someone wanted to create a rectangle object, and they did not want to set the length or the width just yet, then they could use this constructor without passing in any values. The default constructor is typically used to assign default values to fields. In [[Java]], a default constructor is always defined implicitly. So even if you don't declare it explicitly, as we have done here, it still exists by default under the covers. Essentially, it's a blank constructor that does nothing. Let's dissect this constructor. Constructors start with an access modifier. So we have public. There's no return type on constructors because they're not a method, even though they kind of act like one. Then you follow the access modifier with the name of the constructor. The constructor's name must be the exact same name as the class.
>
> **[1:35](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/constructors?u=76281980&t=95)** So this constructor is called rectangle. We follow with a set of parentheses that can optionally have a list of parameters. And then the curly braces for a body. In the case of an explicit default constructor, which is what we have here, we want to provide default values for the fields of the class. So we can set the length to zero, and we'll do the same for the width. You can have as many constructors as you like. All of their names must be exactly as the class name, and what differs is the parameters that they accept. Let's create another constructor for those who would like to create a rectangle object, and they actually do know the length and the width. So we'll again say public Rectangle. And this time, we can add the length and the width as parameters. So we'll say double length and double width. And to set the fields, we'll simply call the setter methods, and pass them the parameters that were passed in. So we can say setLength, and passing the length, and setWidth, and passing the width. Awesome. Now we've provided ways to set up the state of any given rectangle by providing constructors to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** is a  (1), known as (1), is called (1)
> **Code Identifiers:** setlength (1), setwidth (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Instantiating objects](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/instantiating-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/instantiating-objects?u=76281980&t=0)** - [Instructor] Given this Rectangle class, let's create two objects to calculate the area of two rooms. We'll do so in this HomeAreaCalculator class. To create a new object, you must create an instance of the class that the object is based upon. In our case, we want to create a room object based on the Rectangle class. So we will instantiate the Rectangle class in order to do so. We start by specifying the data type of the object. Objects do not use primitive data type, such as int or Boolean. Instead, they use classes as their data types. In our cases, our object's type will be Rectangle. Next, we give the object a name. Since we're using this object to model a room, let's call it room1 and we'll add an equal sign. Now we create an instance by using the reserved [[Microsoft Word|word]] new, followed by the constructor of the class we're creating the object based upon. But if we look over in the Rectangle class, there are two constructors here. Let's go ahead and call the default one, which does not take any parameters. So we'll say Rectangle with empty set of parentheses and then a semicolon. Awesome, we have just created an object.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/instantiating-objects?u=76281980&t=94)** You can use the dot operator with any object to see the options available to use. So we type the object's name, which is room1 and a dot. Notice, we have a list of all of the methods that are available to us from this Rectangle object. Let's set the width of room1 by calling setWidth, and passing 25 as the value. And we can also set the length and let's do that by saying setLength and we'll pass in 50. Now that the length and width have meaningful values, we can perform any calculations we want to, such as calculating the area. So to do so, let's say double areaOfRoom1 equals and we can say room1.calculateArea. Awesome. Let's create one more room object. This time we'll use the constructor that accepts the length and the width as values. So we'll say Rectangle room2 equals new Rectangle and this time, we'll pass in values. Awesome. Note here that I only pass in the numbers 30 and 75 and these labels, length and width were applied by IntelliJ. What's great about using this constructor is we've essentially done the same thing as lines 11 through 13 but all within one line.
>
> **[3:11](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/instantiating-objects?u=76281980&t=191)** To calculate the area of this room, we'll say double areaOfRoom2 and we'll use our room2 object to call calculateArea. As you can see, we've used the Rectangle class to model physical rooms. The Rectangle class, like many classes, doesn't care how we use it. In our cases, the Rectangle class is used as a blueprint for any type of rectangle and what we've chosen to use it for is to represent a room within a house, which happens to also be a type of rectangle. So a class is essentially a definition that's used as a blueprint to create specific objects for your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** calculatearea (2), setwidth (1), setlength (1), areaofroom1 (1), areaofroom2 (1)
> **Analogies:** such as (2)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Objects as method parameters](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-parameters?u=76281980&t=0)** - [Instructor] Just like variables with primitive data types, we can use objects as the arguments for methods as well. In this example, we define two Rectangle objects to represent rooms within a house, the kitchen and the bathroom. We've instantiated the room objects by calling the Rectangle constructor and passing in values for the length and the width. Now let's calculate the total area. We'll create a method to do so. This method will return a double value for the area and will accept two Rectangle objects. So we'll say public static and we'll put double as the return type. We'll name the method calculateTotalArea and we'll accept two Rectangle objects. So we specify the data type, which is Rectangle, and then we give it a name, so we'll say rectangle1, and then the next object is also a Rectangle, and we'll call this one rectangle2. Inside of the method, we can use the dot operator on the objects that were passed in to call their calculate area methods. And then we'll return the sum of both. So we can say return rectangle1.calculateArea plus rectangle2.calculateArea. Great, now in our main method, let's call this method and pass in our kitchen and our bathroom. So we can say double_area equals calculateTotalArea
>
> **[1:40](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-parameters?u=76281980&t=100)** and we'll pass in the kitchen and then we'll pass in the bathroom. Now let's print the total area. So we can say print the total area is and then go ahead and append the area. Perfect, let's give this a run. Awesome, this is how to accept objects as method parameters.

> [!info]- Semantic Content
>
> **Code Identifiers:** calculatetotalarea (2), calculatearea (2), double_area (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Objects as method return types](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-return-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-return-types?u=76281980&t=0)** - [Instructor] What if we wanted to create a method that returns the length and width of a rectangle? Well, methods can only return one value. We can solve for this by having the method return an object instead. And from that object, we can then retrieve the length and the width. Let's refactor the creation of the kitchen and bathroom objects. Instead of hard coding the values for the length and width, we'll call a method that will get these values as input and return a created object to us. So instead of saying new Rectangle, let's call getRoom and same here. getRoom. Now let's look into this getRoom method. It asked the user for the length and the width. We can modify this method to return an object. Let's set the return type as the type of object we'll return, which in our case, is rectangle. Now that we have the length and the width, we can instantiate a rectangle object using this data and return it. So we'll say return_new Rectangle and we'll pass in the length and the width. Notice the instantiation of this object is not stored within a variable within the getRoom method. Instead, we are assigning it to the room objects
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/objects-as-method-return-types?u=76281980&t=96)** within the main method. Let's go ahead and run this. So for our kitchen, we'll say the length is 200 and the width is 400. And then, for the bathroom, we'll say the length is 300 and the width is 700.

> [!info]- Semantic Content
>
> **Code Identifiers:** getroom (4), return_new (1)
> **Speakers:** - [instructor] (1)

#### [Wrapper classes](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/wrapper-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/wrapper-classes?u=76281980&t=0)** - [Instructor] All primitive data types can also be expressed as objects via the use of wrapper classes. Here, we have two variables, number1 and number2. Number1 has a data type of int, which is primitive. And number2 has a data type of integer which is a wrapper class for the primitive data type int. This makes number2 an object. The benefit of using wrapper classes, as opposed to primitive data types, is the ability to utilize convenience methods that are available in the wrapper class. Wrapper classes exist for all primitive data types. Let's take a look inside of the integer wrapper class. The integer wrapper class is filled with helpful methods for working with integers. For example, there are fields for MIN_VALUE and MAX_VALUE which will return the minimum and maximum values for an integer memory space. There are the compare and compareto methods to compare integer values. There are methods that will allow you to convert an integer into other data types, such as doubleValue and flowValue, and even this parseint method which will take a numeric value, represented as a string, and convert it into an actual integer. If you are ever working with a primitive integer variable
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/wrapper-classes?u=76281980&t=94)** and you want to turn it into an integer object to take advantage of these convenience methods, you can use the value of method. This method, and most of the others I've discussed are available in the other wrapper classes as well. I encourage you to check out the [[Java]] docs to see what else is available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** doublevalue (1), flowvalue (1)
> **Env Vars:** min_value (1), max_value (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Records](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/records?u=76281980&t=0)** - [Instructor] A Record is a special type of [[Java]] class. That is great for simple objects that will only need fields and methods to access those fields. Here is a record that serves as a model for an account. Notice that instead of the [[Microsoft Word|word]] class, we use the word record. Also, the fields are defined in the class declaration within a set of parentheses followed by a set of curly braces. That's it. This simple declaration creates a record with these fields. You don't need to create any getter or setter methods. All of that is done for you under the covers. However, if you want to add additional methods you can do so within the curly braces. Records can be instantiated just like classes. In this example, account is the name of the record and we use the new keyword, then called the constructor, passing in all of the values. Records are immutable. This means at the fields of a record are final and their value cannot be changed once initialized. So there are no setter methods generated for records. With records, you do have accessor methods. However, they do not start with the word get, instead the accessor method name is the same as the field name. Notice account.balance is called rather than account.get balance. Records are great for modeling simple domain classes
>
> **[1:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/records?u=76281980&t=96)** where you want to set the state of the object once and then be able to access the state later in a program. These types of classes are common referred to as POJOs, or Plain old Java objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Java]] (2)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Create a car object](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-need-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-need-name?u=76281980&t=0)** - [Instructor] In this challenge, your task is to build a car. You were provided with the car class, which serves as a blueprint containing the attributes of a car. In the buildsCar method, this method accepts details about a specific car, allowing you to construct an instance of the car class. In fact, let's go ahead and do that now. So we create an object of type car, and we can name it Car as well. And to create an instance of the car class, we'll use the new keyword, and we'll call the car constructor, which accepts the make and the model. So now we have a car, and we have the make and the model specified. However, we also need to include the year and the color. We can do that by calling the car setter methods. So we can say car.setYear, and we'll pass in the year, and then car.setColor, and we'll pass in the color. Finally, we'll go ahead and return the car object. And let's go ahead and test this. Great, it worked.

> [!info]- Semantic Content
>
> **Code Identifiers:** buildscar (1), setyear (1), setcolor (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Arrays

[↑ Back to Table of Contents](#table-of-contents)

#### [Arrays](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arrays?u=76281980&t=0)** - [Instructor] Variables are capable of holding a single value. Arrays are special variables that act as containers which can hold multiple values. Here's a typical variable which is declared as a string and can hold a single value. But what if we want to represent a collection of variables as one entity? For example, what about all six of the hockey team players that are currently on the ice? We can do so within an array. This is the declaration for an array. The first part is the data type that the array holds. And while the array is capable of holding multiple values, all values must be of the same data type. The square brackets indicate that this is not just a string data type, but this will be an array of strings. The bracket can appear after the data type or after the variable name itself. Speaking of name, that's the next part of the declaration. We name arrays just as we would any other variable. The name is followed by an equal sign. And then we use the new keyword. Followed by the data type, again, followed by a number inside of another set of brackets. The number inside of the brackets represents the length of the array. Meaning, how many values can this array store. Once the length is declared, it's fixed. Meaning, it cannot be lengthened to hold more values. If I were to draw a picture of what an array looks like,
>
> **[1:38](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arrays?u=76281980&t=98)** it will resemble something like this. There are six slots here because that's the length we specified. And each of them are able to hold a single value. The numbered labels at the bottom represent the indices of each space within the array. It's like an address. Each index point to one of the elements inside of the array. Notice that the indices begin with zero, and index zero represents the first element of the array. Each element in an array works as an individual variable. It can be read or set by accessing its index. We can assign values to an element of the array by specifying the elements index. For example, we assigned Bob as the first element of the array by indicating the array's name, followed by the index. The second element of the array will be Luke, and so on. Alternatively, if you know all values of the arrays elements, you can use curly braces as a shortcut to initialize the array when declaring it, and special a comma to limited list of values. This will create the new array with the length equal to the number of values specified within the curly braces. And then we'll assign those values to those appropriate elements. To read the value of an element, you simply use the array's name,
>
> **[3:11](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/arrays?u=76281980&t=191)** in the index of the element that you like. Arrays are often processed via four loops. For example, if we wanted to the players array to determine if Chad was a member of the team, we could do so by checking each element of the array until we found Chad or until we reached the end of the array. Arrays are very useful in programming when you need to represent a collection of variables as one entity.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), picture (1), it's like (1)
> **Speakers:** - [instructor] (1)

#### [Variable arguments](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-arguments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-arguments?u=76281980&t=0)** - [Instructor] Just like objects and variables, you can also pass arrays into methods and have methods return them. In fact, you've seen this before with the main method. When a method explicitly specifies an array must be passed in, it requires the calling method to first create an array to send in. However, notice there is no length specified in the parameter. So even if the caller wanted to send only one value, they still need to put it inside of an array. Variable arguments, also often referred to as varargs, allows you to be a bit more flexible with the arguments that you send in. For example, let's say we wanted to create a method that calculates the sum for any amount of integers. You may want to send two numbers, or three, or four, or 100. We could do so by specifying the data type of the parameter as always, but then using three dots and then a variable name. This is a variable argument, and it means that you can pass in zero or more integers into this method. For example, we are calling this method four times, each with a different list of arguments. In the first one, we're not sending anything, which is fine. In the second one, we're sending two arguments, also fine. In the third one, we're sending five arguments, perfectly fine.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/variable-arguments?u=76281980&t=94)** And in the last one, we're sending an actual array with four values. This is also okay. As you can see, this offers a lot of flexibility. So how do we implement the calculateSum method to handle these various cases? We can do so with a For Loop. Whether the values were sent as an explicit array or as individual integers, the parameter itself is treated as an array. So this will loop through every element in the array and take whatever is already in the sum variable and add the new value to it, then store the result back into the sum variable. When we print the sum, we get zero for the first call where we didn't pass in any values, six for the second run, 30 for the third run, and 20 for the fourth run. There are a couple of additional things to know about varargs. A method can have additional parameters, however, only one of those parameters is allowed to be a vararg parameter. When a method does have other parameters, the varargs parameter must be last. Great job learning about variable arguments. You can save yourself a lot of boiler plate coding with this one.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), just like (1)
> **Code Identifiers:** calculatesum (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Generate a bingo card](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-need-name-23120866?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-need-name-23120866?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-need-name-23120866?u=76281980&t=5)** - [Instructor] In this challenge, your task is to create a five by five bingo card where each column contains a specific range of integers for that column. Let's start with the generateColumn method. So, we want to generate random numbers, so we have this random object here. We also have an array called column that can hold five integers, and an integer to keep count of how many elements have been added to the array. Now, while the count is less than the number of entries needed in the array, we create a random number that is within the range allowed for this column. We have a condition here, which calls the elementExists method to determine if this array already contains this number. If it doesn't, we proceed to add the number to the array and increase the count. And then finally, for this method, we return the populated array. Now, let's look at the getBingoCard method. The Bingo Card needs to have five columns, so we create five different arrays here, one for each column. And to populate these columns, we call the generateColumn method and pass in the range of valid integers for that column. When executed, we have this beautiful five by five bingo card.

> [!info]- Semantic Content
>
> **Code Identifiers:** generatecolumn (2), elementexists (1), getbingocard (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 9. Text Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Strings](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980&t=0)** - [Tutor] Strings are not a primitive data type. And they are also not a wrapper class. A string is an object that is a sequence of characters but much like the wrapper classes, the string class provides a lot of helpful convenience methods. This string declaration is equivalent to creating an array of characters and sending it to the string constructor. Which means you can access a string just like you would in an array of characters and each character is an element in an array. Let's go through a few examples where we'll manipulate strings. In the first problem we'll write a method that counts the number of words in a string and prints each one on a new line. Here in the main method, we're making a call to count words which has not been implemented yet. And we're sending the string, I love [[Java]]. In order to split a string you have to determine a token that you like to split the string on. In our case, we have a whitespace between each [[Microsoft Word|word]]. So if we want to count the number of words we can split the string using the whitespace as a divider. The string class already has a useful utility method for this called split, which takes a delimiter, which is what the string will be split on. And it returns an array of strings. So let's say string array will name this one words equals and we'll use our string object,
>
> **[1:38](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980&t=98)** use the dot operator and call split, passing in the delimiter which is a whitespace. Now that we have the array, we can use the link field to get the number of elements in the array, or in other words the number of words in the string. So we'll say int number of words equals words dot length. Now let's create a message with the number of words. So we'll say string message equals. And the string class contains a convenience method named format. Format allows us to use placeholders within strings. So we can say your text contains and we are going to use this placeholder percent d, which is a placeholder for digits. And then we'll finish with words and we will fill in that placeholder with our second argument here, which would be the value for the placeholder. So that would be number of words. Then we can print the number of words. So let's say system dot out dot println, message.
>
> **[2:57](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980&t=177)** Finally, we need to print the words. Since we have an array here, we can use a for loop. So we'll say for int i equals zero. I is less than the number of words. And then i plus plus, and inside of here we simply print words with the index. Okay, let's go ahead and run it. As we can see here, our program successfully identified and printed the three words. Perfect. Let's look at one more example, where we create a method that prints a given string backwards. For example, if given the words stop, it prints pots. We have a reverse string method defined here but we've not implemented yet but let's go ahead and make a call to that method. So we'll say reverse string and we'll pass in, stop. Now looking in the reverse string method, while we don't have an array of strings this time, we remember that a string is an array of characters. So we can still use a for loop to process each character. But this time we want to loop from the back to the front of the array because we need to print the string in reverse order. So let's go ahead and create our for loop. And we'll initialize i to the last character of the string by saying text dot length, minus one,
>
> **[4:36](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980&t=276)** we're subtracting one because array indices begin with zero. So the last index would be the number of characters minus one. Okay. And then we'll set the condition to i is greater than or equal to zero, which means we've gotten to the beginning of the array. And then finally, instead of saying i plus plus, we're actually going to say i minus minus because we are counting backwards. Inside of the loop, let's go ahead and print out each letter. So we'll say system dot out dot print, not println, print because we want to stay on the same line. And inside of here, we'll use text dot. We can use the chart at method from the string class, which will return the character at the index specified. So we'll give i as the index. Okay. Let's comment out this one and we'll go ahead and run this program, and perfect, we see that the string was indeed printed backwards. Nicely done. Another important note about strings and all other objects is that you should compare them using the equals method as opposed to the equal equal operator. The equal equal operator compares the memory locations whereas the equals method compares the values. There's a lot more utility methods within the string class.
>
> **[6:13](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/strings?u=76281980&t=373)** I encourage you to check out the Javadoc for the string class to see what else may come in handy for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is an  (3), is a  (3), in other words (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** make (1)
> **Warnings:** important note (1)
> **Speakers:** - [tutor] (1)

#### [Text blocks](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/text-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/text-blocks?u=76281980&t=0)** - [Instructor] Representing multiple lines of texts within a string can be very tedious. Notice how all of the quotation marks need to be escaped. New line characters are needed for each line break and plus signs are needed to join each line. Text blocks allow you to use three quotation marks to open and close a big block of text. With text blocks, text cannot begin on the same line as the opening quote or you'll get a compilation error. A new line must be after the opening quotes. This particular example is legal but it is not the preferred way. The preferred way is to have both the opening and closing quotes aligned on their own respective lines with the text block in between. While still strings, text blocks provides a more readable approach to dealing with long complex strings such as [[JSON]] or our [[SQL]] queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[SQL]] (1)
> **Env Vars:** json (1), sql (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Code Solution: Password validator](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-password-validator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-password-validator?u=76281980&t=0)** - [Instructor] In this method, we need to validate that a proposed password meets security requirements. Here's what I came up with. I first set a Boolean variable called isValid to True. We'll then check each of the requirements and if any of them are not met, we can change this variable to false. For the first requirement, I check the number of characters in the password by using the length method. If there are less than eight characters, the password is not valid. To determine if the password contains any uppercase letters, I compare the password as is with a version of the password that is all lowercase. If these are equal, I know that the password does not contain any uppercase letters and therefore is not valid. To determine if the password contains any special characters, I use the matches method and passing a pattern that only contains alphanumeric characters. If the password matches this pattern, then I know there are not any special characters here and the password is not valid. To check if the password contains the username, I need to compare them in the same case, so I temporarily make them both uppercase and then I use the contains method to see if the password indeed contains the username. If so, the password is not valid.
>
> **[1:34](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/code-solution-password-validator?u=76281980&t=94)** And then finally, I use the equals method to check if the new password is identical to the old one. If so, the new password is invalid.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** isvalid (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-essential-training-syntax-and-structure-16025610/next-steps?u=76281980&t=0)** - [Angie] Congratulations, you've made it to the end of the course. If this was your first time working with [[Java]], I encourage you to create a new program of your own. This will help you retain what you've learned by using the knowledge you've just gained while it's still fresh. As you work on your program, consider revisiting videos as you implement each concept. If you're ready to keep learning, check out my other Java 17 Essentials course, which builds upon the knowledge you've gained in this course. There are also many other course offerings here on [[LinkedIn]] Learning. Just search for Java in the top bar. Thanks so much for taking this course. If you'd like to keep in contact, you can follow me on LinkedIn or on Twitter where my handle is techgirl1908.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[LinkedIn]] (2)
> **Versions:** java 17 (1)
> **Speakers:** - [angie] (1)


## Resources

- Exercise files available

## Skills Covered

- Java

## Path Context

### In [[Getting Started as a Java Developer]]
**1 of 10** | [[Java Essential Training- Objects and APIs]] →

### In [[Java Foundations Professional Certificate by JetBrains]]
**1 of 5** | [[Java Essential Training- Objects and APIs]] →

## Part of

- [[Java Foundations Professional Certificate by JetBrains]]

## Appears In

- [[Getting Started as a Java Developer]]
- [[Java Foundations Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)