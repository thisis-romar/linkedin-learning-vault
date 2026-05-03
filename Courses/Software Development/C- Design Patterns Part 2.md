---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-design-patterns-part-2-8579116
url: "https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116"
duration_minutes: 124
duration: 2h 4m
level: Intermediate
updated: 4/20/2021
learners: 20727
skills:
  - Software Design Patterns
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/c-design-patterns-part-2-2873342"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGZvQHGYeZ0Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1618509686303?e=2147483647&amp;v=beta&amp;t=-V2x7OIgWecnWnjKybTAgqbBAuCo0DAfpNvn0dk2DW0"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started as a C- Developer]]'
prev_courses:
  - '[[C- Design Patterns Part 1]]'
next_courses:
  - '[[Nail Your C- Interview]]'
path_nav: '[{"path":"Getting Started as a C- Developer","position":8,"total":9,"prev":"C- Design Patterns Part 1","next":"Nail Your C- Interview"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-design-patterns
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Design%20Patterns%20Part%202.md)

![C#: Design Patterns Part 2](https://media.licdn.com/dms/image/v2/C4E0DAQGZvQHGYeZ0Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1618509686303?e=2147483647&amp;v=beta&amp;t=-V2x7OIgWecnWnjKybTAgqbBAuCo0DAfpNvn0dk2DW0)

# C#: Design Patterns Part 2

> Design patterns in C# can save you a lot of time, as you don’t have to recreate code that has already been proven. In this course, instructor Richard Goforth explains what design patterns are and how you can recognize and implement five C# patterns: Observer, Builder, Command, Proxy, and Chain of Responsibility. For each pattern, Richard gives a definition, at least one example of how to implement

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116) | 2h 4m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Object-oriented design patterns in C#, part 2](#object-oriented-design-patterns-in-c-part-2)
  - [Using the exercise files and installing .NET SDK](#using-the-exercise-files-and-installing-net-sdk)
- [**1. Observer**](#1-observer) (5 videos)
  - [Observer pattern definition](#observer-pattern-definition)
  - [Simple event delegate observer implementation in C#](#simple-event-delegate-observer-implementation-in-c)
  - [Using INotifyPropertyChanged to observe model changes in C#](#using-inotifypropertychanged-to-observe-model-changes-in-c)
  - [Challenge: Replace a direct call with the Observer pattern](#challenge-replace-a-direct-call-with-the-observer-pattern)
  - [Solution: Replace a direct call with the Observer pattern](#solution-replace-a-direct-call-with-the-observer-pattern)
- [**2. Builder**](#2-builder) (6 videos)
  - [Builder pattern definition](#builder-pattern-definition)
  - [Simple builder implementation in C#](#simple-builder-implementation-in-c)
  - [Explore the ApplicationBuilder pattern being used in an enterprise MVC application](#explore-the-applicationbuilder-pattern-being-used-in-an-enterprise-mvc-application)
  - [Implement the Builder pattern in an MVC application](#implement-the-builder-pattern-in-an-mvc-application)
  - [Challenge: Fluent order builder](#challenge-fluent-order-builder)
  - [Solution: Fluent order builder](#solution-fluent-order-builder)
- [**3. Command**](#3-command) (5 videos)
  - [Command pattern definition](#command-pattern-definition)
  - [Simple Command pattern implementation in C#](#simple-command-pattern-implementation-in-c)
  - [Implement a data update command in a C# MVC application](#implement-a-data-update-command-in-a-c-mvc-application)
  - [Challenge: Undo with the Command pattern](#challenge-undo-with-the-command-pattern)
  - [Solution: Undo with the Command pattern](#solution-undo-with-the-command-pattern)
- [**4. Proxy**](#4-proxy) (5 videos)
  - [Proxy pattern definition](#proxy-pattern-definition)
  - [Simple proxy file access in C#](#simple-proxy-file-access-in-c)
  - [Caching data service proxy with MVC in C#](#caching-data-service-proxy-with-mvc-in-c)
  - [Challenge: Proxy Facade](#challenge-proxy-facade)
  - [Solution: Proxy Facade](#solution-proxy-facade)
- [**5. Chain of Responsibility**](#5-chain-of-responsibility) (6 videos)
  - [Chain of Responsibility pattern definition](#chain-of-responsibility-pattern-definition)
  - [Simple Chain of Responsibility exception handling in C#](#simple-chain-of-responsibility-exception-handling-in-c)
  - [ASP.NET Core request pipeline as a Chain of Responsibility](#aspnet-core-request-pipeline-as-a-chain-of-responsibility)
  - [Add a filter to the ASP.NET core Chain of Responsibility](#add-a-filter-to-the-aspnet-core-chain-of-responsibility)
  - [Challenge: Chain of Responsibility grocery list](#challenge-chain-of-responsibility-grocery-list)
  - [Solution: Chain of Responsibility grocery list](#solution-chain-of-responsibility-grocery-list)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Object-oriented design patterns in C#, part 2](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/object-oriented-design-patterns-in-c-sharp-part-2?u=76281980)

#### [Using the exercise files and installing .NET SDK](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/using-the-exercise-files-and-installing-dot-net-sdk?u=76281980)


### 1. Observer

[↑ Back to Table of Contents](#table-of-contents)

#### [Observer pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/observer-pattern-definition?u=76281980)

#### [Simple event delegate observer implementation in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/simple-event-delegate-observer-implementation-in-c-sharp?u=76281980)

#### [Using INotifyPropertyChanged to observe model changes in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/using-inotifypropertychanged-to-observe-model-changes-in-c-sharp?u=76281980)

#### [Challenge: Replace a direct call with the Observer pattern](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/challenge-replace-a-direct-call-with-the-observer-pattern?u=76281980)

#### [Solution: Replace a direct call with the Observer pattern](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/solution-replace-a-direct-call-with-the-observer-pattern?u=76281980)


### 2. Builder

[↑ Back to Table of Contents](#table-of-contents)

#### [Builder pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/builder-pattern-definition?u=76281980)

#### [Simple builder implementation in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/simple-builder-implementation-in-c-sharp?u=76281980)

#### [Explore the ApplicationBuilder pattern being used in an enterprise MVC application](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/explore-the-applicationbuilder-pattern-being-used-in-an-enterprise-mvc-application?u=76281980)

#### [Implement the Builder pattern in an MVC application](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/implement-the-builder-pattern-in-an-mvc-application?u=76281980)

#### [Challenge: Fluent order builder](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/challenge-fluent-order-builder?u=76281980)

#### [Solution: Fluent order builder](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/solution-fluent-order-builder?u=76281980)


### 3. Command

[↑ Back to Table of Contents](#table-of-contents)

#### [Command pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/command-pattern-definition?u=76281980)

#### [Simple Command pattern implementation in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/simple-command-pattern-implementation-in-c-sharp?u=76281980)

#### [Implement a data update command in a C# MVC application](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/implement-a-data-update-command-in-a-c-sharp-mvc-application?u=76281980)

#### [Challenge: Undo with the Command pattern](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/challenge-undo-with-the-command-pattern?u=76281980)

#### [Solution: Undo with the Command pattern](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/solution-undo-with-the-command-pattern?u=76281980)


### 4. Proxy

[↑ Back to Table of Contents](#table-of-contents)

#### [Proxy pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/proxy-pattern-definition?u=76281980)

#### [Simple proxy file access in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/simple-proxy-file-access-in-c-sharp?u=76281980)

#### [Caching data service proxy with MVC in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/caching-data-service-proxy-with-mvc-in-c-sharp?u=76281980)

#### [Challenge: Proxy Facade](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/challenge-proxy-facade?u=76281980)

#### [Solution: Proxy Facade](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/solution-proxy-facade?u=76281980)


### 5. Chain of Responsibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Chain of Responsibility pattern definition](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/chain-of-responsibility-pattern-definition?u=76281980)

#### [Simple Chain of Responsibility exception handling in C#](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/simple-chain-of-responsibility-exception-handling-in-c-sharp?u=76281980)

#### [ASP.NET Core request pipeline as a Chain of Responsibility](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/asp-dot-net-core-request-pipeline-as-a-chain-of-responsibility?u=76281980)

#### [Add a filter to the ASP.NET core Chain of Responsibility](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/add-a-filter-to-the-asp-dot-net-core-chain-of-responsibility?u=76281980)

#### [Challenge: Chain of Responsibility grocery list](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/challenge-chain-of-responsibility-grocery-list?u=76281980)

#### [Solution: Chain of Responsibility grocery list](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/solution-chain-of-responsibility-grocery-list?u=76281980)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-sharp-design-patterns-part-2-8579116/next-steps?u=76281980)


## Instructor

- [[Richard Goforth]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-design-patterns-part-2-2873342)

## Skills Covered

- Software Design Patterns
- C#

## Path Context

### In [[Getting Started as a C- Developer]]
← [[C- Design Patterns Part 1]] | **8 of 9** | [[Nail Your C- Interview]] →

## Appears In

- [[Getting Started as a C- Developer]]

## Related Courses

_Courses sharing skills:_

- [[C- Design Patterns Part 1]] — C#, Software Design Patterns
- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[JavaScript- Patterns]] — Software Design Patterns
- [[C++ Design Patterns- Structural]] — Software Design Patterns

---

[↑ Back to top](#)