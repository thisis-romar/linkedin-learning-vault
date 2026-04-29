---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: responsible-ai-development-with-github-copilot
url: "https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 11/25/2025
learners: 2356
skills:
  - Responsible AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - GitHub Copilot
exercise_files: true
github: "https://github.com/paiml/responsible-ai-dev"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHLWrdnfFGSJg/learning-public-crop_675_1200/B4EZq34xBdIQAc-/0/1764021703092?e=2147483647&amp;v=beta&amp;t=GfXLEfHc3DJk2jmbjPaI436B1lMRjMpHwDrhrtf6exw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]'
prev_courses:
  - '[[GitHub Copilot for System-Level Development]]'
next_courses:
  - '[[Capstone- Building Production Features with Copilot]]'
path_nav: '[{"path":"GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development","position":3,"total":4,"prev":"GitHub Copilot for System-Level Development","next":"Capstone- Building Production Features with Copilot"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/responsible-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/github-copilot
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Responsible%20AI%20Development%20with%20GitHub%20Copilot.md)

![Responsible AI Development with GitHub Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQHLWrdnfFGSJg/learning-public-crop_675_1200/B4EZq34xBdIQAc-/0/1764021703092?e=2147483647&amp;v=beta&amp;t=GfXLEfHc3DJk2jmbjPaI436B1lMRjMpHwDrhrtf6exw)

# Responsible AI Development with GitHub Copilot

> Explore how to harness the power of GitHub Copilot while ensuring responsible AI development. This course dives into validating AI-generated code, helping you identify security vulnerabilities and logical flaws to strengthen your production code. Learn how to customize Copilot for your team's projects by enforcing coding standards and utilizing custom configurations. Discover the best practices fo

> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot) | 1h 2m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Validating AI-Generated Code]]** (5 videos)
- **[[#2. Customizing Copilot for Your Team]]** (5 videos)
- **[[#3. Staying Current with AI Tools]]** (5 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to AI validation: Why it matters for production code
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=0)** - [Narrator] AI coding tools like GitHub Copilot are incredibly powerful.
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=5)** They can write code faster than you can type.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=8)** They can generate entire functions, classes, even whole files based on a simple comment.
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=15)** But what's important is that AI generated code is not automatically correct.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=21)** Many times it's far from perfect.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=24)** It's not automatically secure, and it's not automatically bug free.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=29)** In fact, one of the biggest mistakes that developers may make is trusting the output too much.
>
> **[0:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=35)** They see code that looks good, runs without errors, and they assume it's fine.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=40)** But good looking and being good are two different things.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=45)** For example, if you're about to ask Copilot to create a function to validate user passwords, maybe it'll generate something simple like, "Return password length &gt;= 8."
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=58)** But is this really secure? Not really.
>
> **[1:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=62)** It doesn't check for any other things such as uppercase letters, lowercase, doesn't prevent common passwords.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=68)** A user could set their password to eight spaces.
>
> **[1:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=70)** It would pass validation.
>
> **[1:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=72)** And you may say, "Well, "maybe I should have been more specific in my prompt."
>
> **[1:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=76)** You're right, but even with a specific prompt, AI can still generate code with subtle bugs, security issues, or logical flaws that aren't obvious at first glance.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=89)** And that's why validation is critical.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=92)** You need to treat AI generated code like you would treat code from any developer.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=97)** Review it, test it, and audit it.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=100)** Models like ChatGPT and Claude are trained on millions of examples of code from GitHub, Stack Overflow, documentation, everywhere.
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=110)** They learn patterns from that training data, but they may not understand what the code actually does.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=118)** They're not reasoning about security implications in certain times.
>
> **[2:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=122)** They may not be thinking about edge cases.
>
> **[2:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=125)** They're predicting what code is likely to come next based on the patterns that they've seen.
>
> **[2:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=131)** And sometimes those patterns are great, best practices, clean code, proper error handling, but also sometimes those patterns include outdated approaches, insecure practices or approaches or code that works in one context but not in yours.
>
> **[2:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=150)** And sometimes the tricky part is AI may make stuff up.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=155)** It may generate code that looks plausible but doesn't actually work.
>
> **[2:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=160)** It can hallucinate.
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=162)** So here we're going to cover what you need to know about validating AI generated code effectively.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=170)** We're going to look at the techniques for verifying AI code with reading and understanding the code, testing it properly, and using tools to catch issues automatically.
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=181)** We'll dive into identifying security vulnerabilities.
>
> **[3:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=185)** We'll look into identifying common security issues that show up in AI generated code.
>
> **[3:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=192)** We'll look at things like SQL injection, cross site scripting, and secure authentication.
>
> **[3:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=198)** You'll learn how to spot these issues and fix them.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=201)** We'll talk about detecting logical flaws and hallucinations as sometimes AI code will generate code that compiles and runs, but doesn't do what you actually need it to do.
>
> **[3:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=214)** We'll experiment with the challenges where you'll be able to audit AI generated code security issues and be able to learn how to identify real vulnerabilities and fix them.
>
> **[3:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=225)** Your job isn't to distrust AI or avoid using it.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), function (1), pass (1)
> **CLI Commands:** make (2)
> **Tools:** github (2)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** sql (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [narrator] (1)


### 1. Validating AI-Generated Code

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Techniques for verifying AI code: Manual and automated approaches
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=0)** - [Instructor] A fundamental challenge with AI generated code is ensuring that it meets basic quality standards.
>
> **[0:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=7)** AI can produce code that compiles and runs, but has linting issues, type errors or style problems that wouldn't pass normal reviews.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=18)** These issues may seem minor, but they can accumulate into technical debt and can hide serious bugs.
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=26)** Here, we're going to look at how to use automated tools in order to catch these issues before they become issues.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=33)** Here we have a simple project that's just meant to add numbers and as you can tell, it's very buggy, so to say.
>
> **[0:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=44)** And a good way to validate files like this is with a Makefile.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=49)** Rather than just having normal documentation, this tells you, line by line, the exact code to execute something so that you can run different tests.
>
> **[0:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=58)** Run lint checkers.
>
> **[1:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=60)** Run type checkers among many other things.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=63)** Here, using it with a deno, we can tell it to use a lint command using deno lint.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=69)** Same with check, deno check, and telling which file that we're attempting to scan.
>
> **[1:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=76)** Same with running the actual project, cleaning up the generated files and all of which we can run if we go into here through make help and this'll be able to give us all of the different commands that we can do.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=91)** So this is very essential for writing tests, being able to lint your code and type check your code in a very efficient and compact manner.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=101)** So firstly, let's run make lint to see what quality issues that we have.
>
> **[1:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=107)** And if you notice here, we have several different linting issues.
>
> **[1:51](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=111)** We have an unused function. We have an unused variable.
>
> **[1:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=115)** We have variables that are never properly reassigned.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=118)** So it overall found three main problems.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=121)** It also tells us exactly what line it's on and what the actual contents of that line were so that we're able to efficiently check it.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=129)** AI often will generate variables that it never actually uses or improperly reassign things.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=137)** These are all style and best practice issues that AI will commonly generate.
>
> **[2:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=142)** So this linter helps catch them automatically so that we don't have to manually review them every single time.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=149)** Now for type checking, we can do so with make check and as it shows, we have several different issues with the parameters, all of them having an implicitly any type.
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=162)** So this type checker helps catches these before the code ever runs.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=166)** And if we try to actually run it, it will indeed run.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=170)** But these linting and type checking issues are much more detectable when you use these specific tools.
>
> **[2:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=177)** So overall, this structure is a good foundation for validating AI generated code.
>
> **[3:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=184)** These automated checks help catch common issues before production.
>
> **[3:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=188)** Linting will find style problems and best practice violations.
>
> **[3:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=193)** Type checking will find actual logic errors where types don't match.
>
> **[3:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=198)** Together, they help form a strong line of defense against low quality or buggy AI code.
>
> **[3:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=204)** So just by doing the simple linting and type checking tests, you'll be surprised by how many issues you might catch with these simple commands.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** pass (1), let (1), function (1), type. (1), match. (1)
> **Best Practices:** best practice (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Identifying security vulnerabilities in AI-generated code
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=0)** - [Instructor] A critical concern with AI generated code is security vulnerabilities.
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=5)** AI models have been drained on massive amounts of code from the internet, including code with security flaws.
>
> **[0:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=12)** They can produce code with SQL injection risks or hard coded credentials without realizing the security implications.
>
> **[0:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=20)** These aren't just quality issues, but rather are vulnerabilities that attackers can and will exploits.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=28)** Here, we're going to be looking at a scanner that can help detect these common vulnerabilities using pattern-based detection.
>
> **[0:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=38)** If we look here at this particular example, this is demonstrating detection for two of the most common security issues with AI generated code, SQL injection, and hard-coded passcodes.
>
> **[0:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=50)** In our file, we're detecting and defining the patterns for SQL injection vulnerabilities with regular expressions.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=57)** These detect dangerous string concatenation in queries as when you concatenate a user input directly into a SQL query using the plus operator, you are allowing that input to become part of the SQL code itself, or an attacker can inject malicious SQL commands.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=75)** Taking a look at this pattern, which normally would be plus user ID.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=80)** Would be query select all from users where plus user, where ID equals plus user ID.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=91)** And for user ID, perhaps the user picks one or one equals one or admin as their user ID, which would return all users or give them administrator capabilities.
>
> **[1:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=107)** So the safest way is to use parameterized queries where the input stays at the data and never actually becomes code.
>
> **[1:56](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=116)** We're also detecting patterns like select with plus and from insert with plus in values, update with plus in set and delete plus in wear.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=129)** All of these indicate string concatenation in SQL.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=133)** We also can detect hard-coded passwords with regular expressions.
>
> **[2:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=138)** We're looking for suspicious variable names.
>
> **[2:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=140)** Says the most common ones that an AI model might call a password such as password API key secret token.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=149)** When these variables are assigned string values directly in code, that's a security risk.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=155)** Credentials should come from environment variables or secure vaults rather than being hard coded.
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=162)** Then down here we're simply scanning the file and reading it line by line to help detect which of these lines may have a potential error.
>
> **[2:52](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=172)** We have exceptions for comment lines and red reject pattern definitions because this would get flagged if I were to scan this file.
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=181)** But normally it'll check every single line and it'll look if that line happens to match the patterns that's being scanned in these defined blocks.
>
> **[3:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=191)** And if it does detect this as a match, then it'll recognize that as a vulnerability and announce it that a vulnerability was found being a SQL injection or a hardcoded passcode.
>
> **[3:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=203)** And here we have our security scanner test file, which has a list of examples of hardcoded passwords and SQL concatenation queries.
>
> **[3:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=215)** All of which should be detected when we scan this file from the security scanner file.
>
> **[3:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=220)** So let's go ahead and run the scanner on our code.
>
> **[3:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=224)** We can do make help to see all of our commands and here if we try to just run the file, we're going to already get for security vulnerabilities that have been found.
>
> **[3:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=235)** Found a hardcoded credential on this line and exactly what line it is, and SQL injection risks.
>
> **[4:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=242)** As you see, we have our hardcoded passwords here and both of our SQL injection risks sitting here.
>
> **[4:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=249)** Similarly to if we do make tests because of these being in the file is going to recognize that there were several different failures with SQL injections in hard-coded passwords.
>
> **[4:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=261)** So if we get rid of these dangerous lines of code, when we do make a run, it's not going to vine any security vulnerabilities.
>
> **[4:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=273)** So this is overall a good example of how to validate AI generated code for security vulnerabilities.
>
> **[4:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=281)** A scanner like this will help catch common issues like SQL injection from string concatenation in hardcoded credentials, and any other security issues that are common with AI.
>
> **[4:54](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=294)** These are just two examples of many common security mistakes that AI makes because it's seen so many examples of insecure code and its data that is trained on.
>
> **[5:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=305)** So you can run a file like this yourself, just a file to create tests specifically for the project you're working on to make sure that your code is truly secure and that your credentials aren't at risk of being detected and found by someone malicious.

> [!info]- Semantic Content
>
> **Env Vars:** sql (13), api (1)
> **CLI Commands:** make (4)
> **Code Keywords:** delete (1), match, (1), let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Detecting logical flaws and hallucinations in AI outputs
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=0)** - [Instructor] AI models are very well known to hallucinate.
>
> **[0:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=4)** They can generate code that imports non-existent packages, uses forbidden dependencies, or references libraries that don't actually exist, among many other issues.
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=15)** AI can also create unreachable code after return statements, with a dead code that looks reasonable but won't ever execute.
>
> **[0:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=24)** Here, we're going to look at a simple validator that helps detect just a couple of these logical flaws.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=30)** Here, we're going to be checking if imports are from an approved whitelist, so that it's not making up random imports or using imports that normally we wouldn't want to use in our production environment, outside of ones that we've already predefined; as well as detecting unreachable code that's ultimately never going to be run, and should be removed, or adjusted and fixed, as these are hallucination errors and logical errors that slip past a normal syntax checker, but will ultimately cause significant problems in your development.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=64)** Now, let's take a look at what this detector actually does.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=69)** Here, we have a whitelist of the imports that we want allowed.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=73)** Here, we have the Deno Standard Library, and a CDN for JavaScript modules, as well as our relative imports within our own project files, meaning that anything else outside of this whitelist is going to get flagged as forbidden.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=89)** And this import pattern uses regex to match import statements, so that we're detecting if this import is actually allowed or not.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=97)** So when we find an import, we check if it starts with any of these allowed patterns, if it doesn't, then it's marked as a violation.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=105)** We also have patterns for checking undetectable code.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=109)** These match return, throw, or break statements at the end of a line.
>
> **[1:53](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=113)** And if we find one of these terminators, we're checking if the next line has code, so that if it does, then the code is rendered unreachable, and it comes after a statement that exes the function.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=124)** So once again, we're scanning the file and reading it line by line for its normal static analysis.
>
> **[2:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=130)** And for each line, we're checking for these forbidden imports using our regex patterns, or the unreachable code.
>
> **[2:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=136)** So when we find a violation, then it's going to push that violation back to us, as well as the information with what type of violation it was, the file, the exact line, and the actual code for both the forbidden imports and the unreachable code.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=151)** And here, we have our testing file, which has different issues that are going to be flagged, including an import statement that isn't in our whitelisted imports, alongside code that is unreachable because of this log that is never going to be activated due to being after a return statement.
>
> **[2:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=175)** So when we run these actual tests, and we do make test, it's going to reflect those failures back to us.
>
> **[3:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=183)** And it tells us that it detected a forbidding import, as that test failed, and it detected unreachable code.
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=190)** So if we run it as well, we'll also get these violations reflected, and it tells us of these issues that we need to address.
>
> **[3:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=198)** That we shouldn't be importing this in, that we should be adjusting this to make sure that we handle code that isn't being reached.
>
> **[3:25](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=205)** So that when we fix this properly, then we're going to have no issues and our code is going to be able to run just fine.
>
> **[3:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=211)** So the structure is a solid structure for detecting AI hallucination and logical errors.
>
> **[3:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=218)** Having a validator to keep these potential hallucinations in mind is extremely important because AI can create many subtle bugs that will pass normal checking, but will cause problems long term.
>
> **[3:53](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=233)** So having a scanner like this to detect things such as forbidden dependencies, unreachable code, among many other hallucinations is extremely important for your development workflow so that your code can be properly validated, and smooth sailing as you continue your development process.

> [!info]- Semantic Content
>
> **Code Keywords:** import, (2), let (1), return, (1), throw (1), function (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** cdn (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Security audit AI-generated code
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=0)** - [Instructor] One of the most dangerous mistakes in AI generated code is accidentally committing API keys and secrets to your repository, which is not a hypothetical problem.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=10)** It happens constantly.
>
> **[0:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=12)** It's very easy to find in many files that have their credentials unfortunately hardcoded or they generate placeholder values.
>
> **[0:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=20)** AI models will often include either example credentials or real credentials in their code that developers forget to replace with proper configuration.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=31)** These secrets can be discovered by attackers who scan public repositories looking for exposed credentials.
>
> **[0:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=37)** There are people and bots that scrape GitHub 24/7, specifically looking for AWS keys, API tokens and database passwords.
>
> **[0:48](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=48)** And once these are found, these credentials can be used to access your systems, steal data or rack up huge bills on your account.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=57)** And if you're developing huge projects or huge chunks of code, it may be easy to accidentally let these hardcoded credentials slip by without you realizing and in order to prevent this, being able to have a scanner that helps detect if these credentials are exposed.
>
> **[1:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=76)** So what I want you to do is to build a secret scanner that will detect hard-coded AWS and Open AI API keys.
>
> **[1:25](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=85)** So your task is to create a spec scanner with the following capabilities.
>
> **[1:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=90)** Firstly, detecting AWS access keys.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=93)** AWS access keys follow a very specific pattern.
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=97)** They all start off with AKIA, followed by exactly 16 alpha numeric characters.
>
> **[1:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=104)** This is how AWS namespace their keys, and your Regex should match this exact pattern.
>
> **[1:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=110)** Similarly with open AI API Keys, they follow the pattern SK- and followed by 48 alpha numeric characters.
>
> **[1:59](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=119)** Open AI keys are always in this format.
>
> **[2:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=121)** Your scanner should do several things.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=124)** Being able to scan individual files with the scan file function that reads the file and searches line by line, should be able to scan directories looking for TypeScript or JS files as you don't want to scan every file type, but specifically your source code.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=141)** Then the secret type should be reported, AWS or open AI along with a file path and the line number for each match.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=149)** This will make it easier for developers to find and fix the issues in real production.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=154)** If secrets are found, exit with code one and if no secrets are found, exit with code zero.
>
> **[2:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=160)** So your builds should fail if secrets are detected, and if not, then your build should continue as normal.
>
> **[2:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=166)** You'll also need to create a make file with these targets.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=170)** You should be able to do a make test so you can run your test suite, make a run so you can execute the scanner on your current directory.
>
> **[2:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=178)** Make lengths to check your code style and syntax.
>
> **[3:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=182)** Then you should have created tests that verify three things.
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=186)** That the AWS key detection works, having a file with an AWS key out in the open and confirms that the scanner finds exactly a match of an AWS type key.
>
> **[3:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=197)** Same with the open AI key detection, making sure that the scanner finds a match of the open AI key, meaning that these tests and runs should fail.
>
> **[3:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=209)** And if these secrets are to be removed and emptied, then the tests and run should complete as normal.
>
> **[3:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=214)** These are very essential techniques for validating AI generated code and a real security tool that can help prevent very catastrophic leaks.
>
> **[3:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=223)** So try building this yourself before watching the solution in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9), make (5), find (2)
> **Env Vars:** aws (9), api (4), akia (1)
> **Code Keywords:** public (1), let (1), this, (1), function (1), type, (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Solution: Security audit AI-generated code with best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=0)** - [Instructor] Now, let's walk through the solution to our secret_scanner.
>
> **[0:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=4)** This scanner will detect hard-coded AWS and OpenAI API keys, using regex pattern matching and static analysis.
>
> **[0:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=13)** It demonstrates the techniques that are essential for validating AI-generated code and preventing breaches.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=18)** We have our projects, our Makefile, and our testing file.
>
> **[0:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=22)** In our Makefile, we can test everything with make test, which runs our test suite to verify that everything works.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=30)** We can build an executable with make build, run the scanner with make run, and make lint and make check for proper code quality.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=39)** And we have our help, where we can run any of these files, or all of them at once.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=45)** In our actual scanner file, this is where we have our logic.
>
> **[0:48](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=48)** So let's go through this, piece by piece.
>
> **[0:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=50)** First, we have just our normal interface being defined, so our data structure that holds types AWS or OpenAI, the file path, the line number, and the actual secret value, making it easier to report findings to the users.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=67)** We have two regex patterns.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=69)** This one matching the letters AKIA, literally, then the 16 characters that are either digits or uppercase letters, with a global g flag so that it's finding all matches in the text and not just the first one, creating a pattern specific to AWS keys.
>
> **[1:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=90)** Then we have our OPENAI_KEY_PATTERN, which matches, sk, and then the 48 alpha-numeric characters that are lowercase, uppercase letters, or digits of all occurrences.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=101)** Then we have our normal scanFile function, which is where we're reading the entire file as text with Deno.readTextFile.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=109)** Then, we're splitting all of the content into lines via new lines, and looping through each line with forEach, going through each line and our idx variable which is tracking which line number that we're actually on.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=124)** So for each line, we're going to use matchAll with our regex patterns.
>
> **[2:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=129)** Meaning that for every line, if we have a match, we push a new secret match object to our results array.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=137)** We record the type, the file path, the line number, and the actual secret value.
>
> **[2:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=143)** Where afterwards, we return our matches, after going through all the lines.
>
> **[2:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=146)** Our scanDirectory function scans the entire directory so that we're looping through all of the entries in the directory.
>
> **[2:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=154)** We check if it's a file, and if the name is ending with a TypeScript or .js ending, so that we're only scanning these files rather than any other images and file types like our Makefile, images, videos, or our ReadMe, et cetera.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=170)** For each code file, we call scanFile and collect all of our results.
>
> **[2:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=175)** So at the CLI level, if secrets are found, then we're going to print an error message with the count and the amount of secrets, where we're going to loop through each violation and print the type and its location.
>
> **[3:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=191)** Then, we exit with code one, as the build should fail if all the secrets are found.
>
> **[3:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=196)** If no secrets are found, then we print a success message and the build can continue as normal.
>
> **[3:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=201)** If we look at the test file, we have many different tests here with our asynchronous functions, with lines that are writing these API keys, AWS, and OpenAI keys to a text file.
>
> **[3:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=214)** So even if it's just a text string that's getting written to a temporary file, the scanner's going to detect it as it reads through the line and sees this AWS or OpenAI key exposed to the public.
>
> **[3:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=227)** So, when we do make...

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), aws (5)
> **Code Keywords:** let (2), function (2), static (1), this, (1), interface (1)
> **Env Vars:** aws (5), api (2), akia (1), openai_key_pattern (1), cli (1)
> **Code Identifiers:** scanfile (2), secret_scanner (1), readtextfile (1), foreach (1), matchall (1)
> **Speakers:** - [instructor] (1)


### 2. Customizing Copilot for Your Team

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using copilot-instructions.md for project-specific guidance
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=1)** - [Host] One of the most powerful features of GitHub Copilot is the ability to give it custom instructions for your project.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=8)** And the way you do this is through a file called copilot-instructions.md.
>
> **[0:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=14)** This file lives in your repository and tells Copilot about your coding standards, your project conventions, and how things should be structured.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=23)** And once you set this up, Copilot automatically follows these rules every time and generates code for you.
>
> **[0:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=29)** So, let's show how to set this up and how to use it effectively.
>
> **[0:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=32)** First thing we need to do is create the file in the right location.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=36)** And it's important because it has to be in a specific place for Copilot to recognize it.
>
> **[0:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=41)** Here I am in VS Code with my projects open and at the root of my repository, I need to create a .github folder.
>
> **[0:48](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=48)** If you already have this folder, maybe through GitHub Actions workflow, you can skip the step, but if you don't have it, just create a new folder called .github.
>
> **[0:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=57)** Now, inside that .github folder, you're going to want to create a new file called copilot-instructions.md.
>
> **[1:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=65)** Now, we want to add actual instructions.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=67)** That's it for the structure.
>
> **[1:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=69)** The instructions are written in markdown format, and they're just natural language.
>
> **[1:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=73)** So, you're just telling copilot how you want your code to look.
>
> **[1:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=77)** So, we're just going to add some basic coding standards.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=80)** I'm going to start with the header.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=81)** Just Project Coding Standards.
>
> **[1:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=83)** And then I'll add a few simple rules.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=86)** We're going to use TypeScript for all new files.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=93)** We're going to prefer async/await over .then for promises.
>
> **[1:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=102)** We want to always include error handling with try/catch blocks.
>
> **[1:52](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=112)** And we want to add JSDoc comments for all functions and classes.
>
> **[2:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=120)** So, pretty standard rules, but you can customize this however you want.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=124)** You can specify naming conventions, file structures, which libraries to prefer, architectural patterns, whatever makes sense for your project.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=133)** So, now we want to save the file and Copilot now knows about these rules.
>
> **[2:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=138)** Anytime I'm working in this repository, Copilot will try and follow these guidelines.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=144)** So, to see it in action, we're going to create a new TypeScript file.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=149)** We're going to do one here outside of the github.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=151)** And we're going to call it api-client.ts.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=155)** We're just going to create something, something simple to create a function to fetch user data from an API.
>
> **[2:48](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=168)** And I'll hit enter and let Copilot generate the code.
>
> **[2:52](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=172)** And as it generates, it's following the proper instructions that we, specifically, requested.
>
> **[3:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=180)** Doing it in TypeScript for new files, including error handling, including try and catch blocks and using async functions.
>
> **[3:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=190)** And this is the power of custom instructions.
>
> **[3:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=192)** Without that file, Copilot may have generated this in a, significantly, different way, such as maybe plain JavaScript, used .then instead of async and wait.
>
> **[3:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=203)** It might not have included all of the error handling, but because we told it our standards, it follows them automatically.
>
> **[3:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=213)** We can also verify it in the Copilot chat.
>
> **[3:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=216)** We can ask, what coding standards should I follow in this project?
>
> **[3:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=223)** And it'll reflect it back to us from the Copilot instructions.
>
> **[3:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=226)** Use TypeScript for new files.
>
> **[3:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=227)** Prefer async/await.
>
> **[3:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=229)** Always include error handling with try/catch and JSDoc comments for all functions.
>
> **[3:54](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=234)** So, you can always ask Copilot to remind you of your project standards.
>
> **[3:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=237)** So, you can always ask Copilot chat to remind you of your project standards.
>
> **[4:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=241)** And a few things to keep in mind.
>
> **[4:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=242)** The file should be named exactly copilot-instructions.md and should be and the root of your github folder.
>
> **[4:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=249)** And keep your instructions clear and specific.
>
> **[4:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=252)** So, nothing too vague like, write good code.
>
> **[4:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=255)** Say, specifically, what you want to see in your code and how, exactly, you want your code to be implemented and written and structured, as the more specific you are, the better Copilot can follow your rules.
>
> **[4:27](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=267)** And you can update this file anytime.
>
> **[4:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=269)** As your project evolves or your standards change, just edit the markdown file and save it.
>
> **[4:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=275)** Copilot will pick up the changes immediately.
>
> **[4:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=278)** And that's the basics of using copilot-instructions.
>
> **[4:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=281)** It's one of the most valuable features for team projects because it ensures everyone's code follows the same standards, even when Copilot is writing it.

> [!info]- Semantic Content
>
> **Code Keywords:** async (4), let (2), await (2), function (1)
> **Tools:** github (7), vs code (1)
> **File Paths:** copilot-instructions.md (3), api-client.ts (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [host] (1)

#### Enforcing team coding standards with custom configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=0)** - Previously we set up basic custom instruction for copilot, but in a real team environment, you need more than just basic rules.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=8)** You need comprehensive coding standards that cover style, naming conventions, error handling, and documentation.
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=15)** Here, we're going to show how to build a complete set of team level coding standards that ensures everyone on your team, including copilot, writes consistent high quality code.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=25)** We're going to go back to our copilot instructions markdown file and make it fully useful for a production team.
>
> **[0:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=32)** It has some basic rules now, but we want to organize this into something much more comprehensive.
>
> **[0:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=39)** So we're going to organize this into clear sections.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=43)** We're going to want to have code style.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=45)** And for here, we're going to do use two spaces for in- for indentation.
>
> **[0:54](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=54)** Some other simple maximum line length is going to be 80 characters.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=63)** Always use single quotes for strings and always use semicolons at the end of statements.
>
> **[1:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=72)** Fairly simple enough for good general code style.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=75)** Then we're going to do naming conventions for variables and functions.
>
> **[1:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=81)** We should be using Camel case for classes and other components.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=86)** We should use Pascal case giving us proper good recommendations here.
>
> **[1:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=90)** For conscience, we're going to do upper snake case and then private method.
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=95)** We're going to to have a sample prefix with an underscore.
>
> **[1:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=99)** We can include other things such as error handling statements like all asynchronous functions unless you try and catch log errors properly for debugging and provide meaningful error messages.
>
> **[2:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=123)** Then documentation.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=124)** And again, this can, these are just simple examples.
>
> **[2:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=127)** You can, these can always be adjusted to your style and what your team is focusing on and the overall style that your team wants to go for.
>
> **[2:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=138)** They saw comments.
>
> **[2:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=139)** Now our copilot instructions are significantly more expanded in much more product- projuction- and production ready than the current standards that we had before.
>
> **[2:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=150)** So we can test these with a few different scenarios and see how copilot follows these rules.
>
> **[2:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=156)** If we go back and re-ask the coding standards, it should give us a much significantly greater updated list than what it did before.
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=163)** Now, let's create a simple function to ask copilot to create a function to validate user email.
>
> **[2:53](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=173)** And when we do so, it's following our standards.
>
> **[2:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=175)** It's following our Camel case format properly.
>
> **[2:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=178)** It's including very detailed comments.
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=181)** It's following our syntax with semicolons and spaces being added.
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=187)** And we can test this with something more complex too, with every single one of our standards being ensured that's being followed.
>
> **[3:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=195)** So we can create a user service class with a method to fetch user data.
>
> **[3:27](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=207)** And when we do this following our Pascal case, making sure that it includes very detailed comments, ensuring that there semicolon is always at the end of it, once again with our syntax.
>
> **[3:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=218)** And as we continue to do this, it explicitly follows every single one of our instructions.
>
> **[3:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=226)** And showing why this matters is pretty important.
>
> **[3:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=227)** Start writing code without these instructions consistent across a team, then that's going to be inconsistent with our team standards.
>
> **[3:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=235)** If five different developers wrote this function, you would get five different implementations.
>
> **[3:59](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=239)** So every developer on the team gets code that follows the same standards.
>
> **[4:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=244)** If you're not relying on people remembering the conventions as copilot will make sure that to enforce them, and that's a very efficient way to enforce team coding standards with copilot.
>
> **[4:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=254)** Key is being comprehensive and specific, spelling out exactly in very large detail which practices are truly best for your team.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), private (1), for. (1), let (1), case, (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - previously (1)

#### Challenge: Enforce a custom rule in your codebase
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=0)** - [Instructor] Being able to efficiently write instructions to your Copilot instruction file can help enforce good specific coding habits.
>
> **[0:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=7)** And here you're going to start writing instructions on your own to try and enforce a specific code pattern that a lot of teams might prefer.
>
> **[0:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=14)** Your team has decided that instead of writing nested if statements to check conditions, you should use early returns as a good, much cleaner format.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=23)** So instead of doing nested if statements over and over and over again, we're doing guard clauses with early returns instead.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=36)** So there's much flatter and much easier to read, and each condition is checked and we exit early if it fails, so that the actual logic isn't nested inside of multiple blocks.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=47)** So here's what I want you to do.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=49)** Add a custom instruction to your copilot-instructions.md file that tells Copilot to use guard clauses with early returns instead of nested if statements.
>
> **[1:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=60)** Then test it by asking Copilot to generate a function that validates something with multiple conditions.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=68)** For example, to create a function to validate user registration that checks username, email and password requirements, and see if Copilot uses guard clauses instead of nested ifs.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=79)** If it doesn't, try making your instructions more specific, maybe by adding an example, showing the pattern that you want.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=86)** The goal is to practice writing clear instructions that enforce a specific coding pattern.
>
> **[1:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=91)** So go ahead and try grading a well-crafted instruction and testing out how Copilot executes it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2)
> **File Paths:** copilot-instructions.md (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: Enforce a custom rule with Copilot configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=0)** - [Instructor] Now, let's look at the solution.
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=1)** I'm going to show you the progression from a vague instruction to a properly effective one, because that's the actual process you should go when setting up these rules.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=10)** Now, normally, we're going to do Code Structure here, you might want to write something simple, such as Avoid nested if statements and Use early returns.
>
> **[0:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=23)** And in most cases, that might be fine, but the instructions may be too vague at times to where it may not be helpful or abide by the instructions every single time.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=36)** So instead, we're going to try and be more specific.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=40)** So instead of this, we're going to do Use guard clauses with early returns instead of nested if statements.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=49)** Then, Check for error conditions first and exit early.
>
> **[0:56](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=56)** Then, Keep the happy path at the lowest indentation level.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=63)** So now, if I want to go and generate the same function, create a function to process an order that checks if order exists, has items, and customer is verified.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=79)** So if we go and do that, then as you see, it's abiding by our rules.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=84)** Instead of using nested if statements, it uses the clean guard clauses with a flat structure, which is exactly what we want.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=93)** And we can continue testing it out with more complex reasoning, such as create a function to calculate shipping cost that validates address, weight, and delivery options.
>
> **[1:48](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=108)** And if we go ahead and do this, then we should still get our proper structure with multiple guard clauses, checking all of the required conditions, and then starting to develop the actual calculation logic down here.
>
> **[2:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=126)** No nesting, completely flat.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=128)** And what makes this instruction work is that we're being specific about the pattern.
>
> **[2:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=132)** Being as clear as possible in your instructions helps yield better results.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=137)** And that's just a very simple and efficient way to help enforce coding standards within your project.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (2), let (1), continue (1), yield (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Testing custom configurations: Validation and effectiveness
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=0)** - [Instructor] So you've created your Copilot instructions file and added all of your team's coding standards.
>
> **[0:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=5)** And everything looks good, but how do you know it's actually working consistently every time?
>
> **[0:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=11)** Simply, you need to test it.
>
> **[0:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=13)** Not just with one example, but systematically, across different scenarios.
>
> **[0:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=17)** Because what works for one type of function may not work for another, and what works in JavaScript might not translate to Python or Go.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=25)** So here, we're going to show a practical approach to testing your custom configurations and making sure that they work the way you expect.
>
> **[0:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=33)** So we're not actually testing Copilot itself, but we're testing whether our instructions are clear and specific enough to get consistent results.
>
> **[0:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=42)** First off, we're going to try generating the same function multiple times, and see if we get consistent results.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=49)** So we're going to write a simple instruction, create a function to validate user login that checks username and password.
>
> **[1:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=61)** And if we do this here, creating everything consistently, giving the right format, in syntax.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=67)** And we can undo this and try it again, and we get the continuous same pattern again and again.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=74)** It's not fluking or going out of bounds of the rules, it's following the proper syntax that we specifically requested it.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=80)** We can also try different types of functions and see if the rule still applies.
>
> **[1:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=84)** Let's say we want to do data processing instead of validation.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=89)** We're going to create a function to process payment that checks account balance and transaction limits.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=101)** So, it's still following our instructions specifically.
>
> **[1:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=105)** It's following the proper Camel case, it's keeping our if statements flat.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=109)** And we can continue to make this more complex to make sure that it's still continuing to be specific, so such as create a function to generate a report that validates data range, user permissions,
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=128)** and data availability.
>
> **[2:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=132)** So even with more complex logic, it's still following the examples of our syntax, our guard clause patterns, and everything else that we've specifically applied.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=144)** What we can also do is ask Copilot chat to review our code and see if it's following our standards.
>
> **[2:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=150)** So let's say we're going to write a code that's just function processOrder(order) here.
>
> **[2:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=158)** And we're going to do a bunch of nested if statements.
>
> **[2:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=164)** Do if (order), if (order.items.length &gt; 0).
>
> **[2:51](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=171)** Then another if statement, if (order.customer.verified), return "Order processed."
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=181)** And then we're going to go to our Copilot chat and ask... We're going to do this with GPT-5.
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=189)** We're going to ask, "Does this code follow our project's coding standards?"
>
> **[3:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=196)** And it'll tell us that, "No, it does not follow the project standards."
>
> **[3:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=199)** It's missing a lot, it's missing the comments, it's missing the TypeScript types and exports, nested ifs instead of guard clauses, unsafe property items, using inconsistent indentation, and no semicolons or error logging.
>
> **[3:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=213)** And it tells us what we should try and do instead.
>
> **[3:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=217)** So overall, a good way to stress test these instructions is by going through a multitude of tests by generating the same function multiple times, testing different scenarios, edge cases.
>
> **[3:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=229)** And asking Copilot itself to review your code against your standards, so that even if it generates code that it may not have fully stuck by the instructions for, you can always re-ask Copilot to review your code and see if it truly fits against your standards.
>
> **[4:05](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=245)** If there's inconsistency, that might be a signal to help refine your instructions instead.
>
> **[4:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=250)** You can always continue to keep improving your custom instructions as you discover new edge cases, new patterns, and always having a way to test them is key to ensure consistency.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), if ( (3), let (2), continue (2), case, (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** processorder (1)
> **Env Vars:** gpt (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Staying Current with AI Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Choosing the right LLM for your development needs
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=0)** - [Instructor] Choosing the right LLM is extremely important for the task that you're trying to accomplish.
>
> **[0:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=6)** GitHub Copilot supports multiple AI models from different providers, including OpenAI, Anthropic, Google, and xAI.
>
> **[0:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=16)** If you open up your Copilot settings, you'll see this list of models available to you.
>
> **[0:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=22)** But the natural question is, which one should you actually use?
>
> **[0:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=26)** And it really depends on what you're trying to accomplish.
>
> **[0:30](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=30)** And GitHub has actually done a very good job of categorizing these models by task area.
>
> **[0:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=36)** So let's see how we should think about model selection.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=40)** LLMs can be used for a wide array of things.
>
> **[0:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=43)** We have general purpose coding and writing, your everyday coding work, writing functions, generating boiler plates, creating documentations, et cetera.
>
> **[0:53](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=53)** For this, it's recommended by GitHub to use models like GPT-4.1, your GPT-5, GPT-5 Mini, or Grok Code Fast 1.
>
> **[1:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=64)** What's nice about these models is that they're fast, still accurate, and work well across different languages and frameworks.
>
> **[1:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=72)** GPT-5 Mini in particular is what Copilot calls the most reliable default for coding and writing tasks.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=80)** For fast help with simple or repetitive tasks, when you need a quick answer, such as fixing a syntax error, explaining what a line of code does, you don't need deep reasoning, but more so just fast and accurate responses.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=94)** Here, it's more recommended to use the Claude models, 4.5 or Sonnet.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=100)** These models are optimized for speed and responsiveness, so you'll get fast answers without needing unnecessary depth.
>
> **[1:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=109)** When thinking about deep reasoning or debugging, when you're dealing with complex issues, architectural decisions, or refactoring large code bases, debugging tricky multi-file problems, this is where you need the models that can really think through problems step by step.
>
> **[2:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=127)** Here, GitHub recommends that you would use GPT-5 Mini for deep reasoning with factor responses, or the normal GPT-5 for complex reasoning in code analysis.
>
> **[2:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=140)** Sonnet provides performance and practicality.
>
> **[2:24](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=144)** Claude Opus and Gemini Pro may be better for advanced reasoning across long contexts.
>
> **[2:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=151)** If you're working with visuals, diagrams, screenshots, UI components, and want models with multimodal support, this is where you rely on GPT-5 Mini, Claude Sonnet, or Gemini.
>
> **[2:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=165)** So how do you actually choose in practice?
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=170)** Again, it all depends on the task at hand.
>
> **[2:53](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=173)** But a solid, reliable default can be starting off with models like GPT-5 Mini or 4.1, or Claude Sonnet, which are reliable, fast, and work well for the majority of large coding tasks.
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=189)** When you're working on something complex like refactoring a large module or debugging a tricky architectural issue, this is when switching to a higher-level model may benefit you, like GPT-5 or Claude Opus.
>
> **[3:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=203)** So don't necessarily reach for the model that you believe is the smartest, but use the right model that's suitable for the right tasks.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (9), llm (1)
> **Tools:** github (4)
> **Code Keywords:** let (1), this, (1), module (1)
> **Versions:** 4.1 (2), 4.5 (1)
> **Best Practices:** recommended (2)
> **Code Identifiers:** xai (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Comparing model performance: Benchmarking and quality metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=0)** - [Speaker] Previously, we looked at what's recommended for which models to use for different tasks, but how do these models actually compare when you test them side by side?
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=10)** There are many ways to answer that question.
>
> **[0:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=12)** We can look at benchmark scores from leaderboards, like artificial analysis.
>
> **[0:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=18)** We can look at metrics like speed, context window size, and pricing, as well as being able to do our own practical tests to see how they perform on real-coding tasks.
>
> **[0:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=31)** Starting off with benchmarks, if we pull up some examples, we can see the performance metrics for all of these different AI models.
>
> **[0:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=40)** Firstly, looking at intelligence scores, which is a metric that combines several different benchmarks.
>
> **[0:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=46)** GPT-five scores the highest while models like Claude Sonnet comes in at a second, Gemini Pro follows closely behind and Grok Code trailing furthermore, so you might assume, okay, I should just use GPT-five for everything since it has the highest score.
>
> **[1:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=66)** But intelligence score is just one dimension.
>
> **[1:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=70)** There's many other factors to consider when choosing the right model.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=75)** For example, context window size, Claude sonnet 4.5 and Gemini 2.5 Pro both have million token context windows, meaning that they can look at your entire code base at once.
>
> **[1:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=89)** GPT-five models have about 400,000 tokens, which is still very good and Grok with 256,000 tokens.
>
> **[1:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=99)** Why does this matter?
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=101)** If you're working on a large scale project and you need the model to understand how different parts of your code interact, that larger context window is significantly more valuable as the model is able to see more of your code at once and give stronger recommendations.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=118)** But benchmarks themselves don't always tell the whole story, and this is something that's very easy for you to test out.
>
> **[2:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=126)** If you ask a simple command or request of each model to do the same task.
>
> **[2:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=131)** You can understand the differences in how they respond, whether it be differences in time and clarity of the code among many other factors.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=141)** So higher intelligence scores don't always mean better for your specific use case.
>
> **[2:27](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=147)** Many developers prefer different models for different reasons, and making sure that you take note of your context window in terms of the project that you're working on is something that's extremely important.
>
> **[2:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=161)** If you're working with large files or need to reference in multiple parts of your code base, then taking in that context window is very important for your project.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=170)** And there's a real trade-off between speed and quality.
>
> **[2:54](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=174)** Grok might be perfect for auto-complete simple repetitive tasks where you need fast responses as it can generate code in the blink of an eye.
>
> **[3:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=184)** But for complex debugging or refactoring, you may want to slow down and have more thoughtful models like Claude Sonnet or GPT-five.
>
> **[3:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=194)** So ultimately, the best model depends on what you're doing, but all of them indeed have different performances for different tasks.
>
> **[3:23](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=203)** So benchmarks and leaderboards are very good starting points in testing out these models with your actual workflow is able to help, you understand which one will fit the best kind, and being able to test these models with your actual workflow will help you understand which fits the best kinds of tasks that you typically do.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4)
> **Versions:** 4.5 (1), 2.5 (1)
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [speaker] (1)

#### Cost-benefit analysis of models: ROI and budget planning
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=0)** - [Instructor] Understanding how GitHub Copilot charges you is critical to using it effectively and staying within your budget.
>
> **[0:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=8)** You might think it works like OpenAI's API or Anthropic's API, where you pay per token, input tokens, output tokens, adding them up and paying for what you use.
>
> **[0:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=21)** But Copilot doesn't exactly work the same.
>
> **[0:25](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=25)** Copilot uses a system of premium requests with model multipliers, and making sure you understand the system is important so that you don't blow through your budget without realizing it.
>
> **[0:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=38)** There are generally about five different tiers for Copilot plans, three of them for individual and two of them for business.
>
> **[0:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=47)** Copilot Free costs nothing.
>
> **[0:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=50)** You get about 50 premium requests per month and you have access to a limited set of models, GPT-4.1, 5 Mini, and Sonnet 3.5.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=63)** This is great if you're just trying out Copilot and want to get ahold of it.
>
> **[1:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=68)** But you can also upgrade to Copilot Pro, which costs $10 a month.
>
> **[1:14](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=74)** You're able to get 300 premium requests a month, and you have access to all of the premium models.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=80)** With Pro+, you're able to get 1,500 premium requests per month, five times more than Pro, and have full access to all models, including the most advanced ones.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=92)** So, if you need the best models frequently, this might be the best option.
>
> **[1:38](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=98)** If you're running a business, you can use the Business tier for $19 per user, per month, getting the same as normal Pro requests, and Enterprise, costing $39 per user, where each user gets 1,000 premium requests and more advanced enterprise features.
>
> **[1:56](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=116)** But here's the important thing.
>
> **[1:58](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=118)** If you run out of premium requests, you can buy more for $0.04 per request.
>
> **[2:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=124)** But depending on what you're working on, those can add up significantly, quickly, as we'll see in a minute.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=133)** Not all models cost the same number of premium requests, though.
>
> **[2:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=137)** Each model has what's called a multiplier.
>
> **[2:21](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=141)** GPT-5 Mini and 4.1 have a 0 multiplier, meaning that they don't use any premium requests.
>
> **[2:29](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=149)** So, if you're on a paid plan, you have essentially unlimited interaction.
>
> **[2:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=155)** Haiku 4.5 has a 0.33 multiplier, meaning each interaction costs about 1/3 of a premium request.
>
> **[2:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=165)** Grok Code has a 0.25 multiplier, meaning that it costs about 1/4 of a request.
>
> **[2:54](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=174)** Models like Sonnet 4, Sonnet 3.5, GPT-5, and Gemini Pro all have a 1x multiplier, meaning that each interaction costs one premium request.
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=187)** And models like Opus 4.1 have a 10x multiplier, meaning that each interaction would cost 10 requests.
>
> **[3:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=196)** So, if you're choosing the right model, keeping in mind how many requests you have is important for making sure that you don't run out of requests.
>
> **[3:27](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=207)** For example, let's say you really love to use Claude Opus.
>
> **[3:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=211)** You think it's the best model, so you use it for everything.
>
> **[3:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=215)** Let's say you use up all of your requests with your plan using Claude Opus, but you're only maybe a couple weeks into the month, and you need to keep working.
>
> **[3:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=225)** So, you use it about 270 more times, let's say.
>
> **[3:51](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=231)** That would be 2,700 additional premium requests at $0.04, meaning that would be $108 extra on top of your $10 base fee, compared to a model that doesn't use premium requests, which will be less powerful, but gives you a much greater amount of requests, offering a noticeably different experience compared to normal API pricing.
>
> **[4:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=259)** If you were using OpenAI's API directly with GPT-4.0 Mini, for example, the cost would be about $0.15 per input and $0.60 per output per million tokens.
>
> **[4:31](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=271)** So, if you use 100 million tokens in a month, that's about $15 to $60 a month in API costs.
>
> **[4:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=279)** Copilot Pro is able to give you this essentially unlimited usage for $10 a month integrated within VS Code, GitHub, and all of your development tools, and affordable other models at a much lower cost than if you were using the API, meaning that it's more cheap and cost effective to use Copilot than the API directly.
>
> **[5:04](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=304)** But being careful about each model and its cost implications is extremely important to be aware of as you're developing, making sure that you're able to choose the model that best suits your tasks.
>
> **[5:16](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=316)** But also, making sure that you keep costs in mind and understand which is the most cost effective will significantly help your workflow and production as you navigate AI development.

> [!info]- Semantic Content
>
> **Versions:** 4.1 (3), 3.5 (2), 0.04 (2), 4.5 (1), 0.33 (1)
> **Env Vars:** api (7), gpt (4)
> **Code Keywords:** let (3)
> **Tools:** github (2), vs code (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Next steps and continuous learning: Advanced topics and expertise
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=0)** - [Instructor] Now, we've discussed a lot how to choose models, compare their performance, understand their costs, and how to work with Copilot and stay up to date in the AI space.
>
> **[0:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=13)** But the question is, what do you do with this knowledge and how do you take what you've learned and best apply it to your own work?
>
> **[0:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=22)** The best way to take in what you've learned is to experiment in your actual projects.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=28)** Understanding this in your real workflow is extremely important to help continue developing your knowledge and continuously learning more about responsible AI development and how it can significantly boost your workflow.
>
> **[0:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=44)** Experimenting with different models, seeing which one truly fits best for the work that you're doing, noticing their differences in how they handle work, how they handle styles, being able to use instructions to your benefit to fine-tune all of these models to create exactly what you want to.
>
> **[1:03](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=63)** Instead of relying just on benchmarks or on people's opinions, you can have your own experience and base it off of that to determine what works well for you.
>
> **[1:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=75)** Finding out what plans work for you, too, in terms of cost tracking.
>
> **[1:19](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=79)** If you're wanting to get Copilot or upgrade Copilot, understanding your usage stats with AI strongly connected into your workflow will help you get a greater grasp on what plans might make sense to you.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=94)** Whether you want to stick with free or stick with Pro or upgrade to Pro+ or integrate it within a business setting with Enterprise or Business, knowing your usage and optimizing your costs based on actual data to choose the right plan for you is extremely efficient in figuring out cost in exactly what you need to maximize that workflow.
>
> **[1:59](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=119)** And also, just continuing to look at what's coming next in AI tooling, as AI is always continuously improving.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=128)** Diving deep into other areas of AI, such as AI agents with Copilot, like the Copilot coding agent that can work more autonomously, which is powerful, but also needs supervision.
>
> **[2:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=140)** And also, thinking about how to roll all of these tools out if you're part of a team, how you train your team and establish standards.
>
> **[2:28](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=148)** How to measure whether or not AI tools are making you more productive.
>
> **[2:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=152)** It's easy to feel like you're moving faster, but making sure that you're shipping the load that you want to, shipping the quality of work that you want to, even if it feels faster, is important to determine whether or not it's impacting your work in the correct ways, and fine-tuning that to make sure that it can actually help contribute to your work in a meaningful way, in a way that doesn't hinder you, and develop a sense where AI helps most and where it doesn't.
>
> **[3:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=182)** You may find that AI is amazing for certain issues and development processes, but not quite as much for others, so that you can focus its efforts in specific areas and learn to keep adapting as models evolve.
>
> **[3:17](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=197)** As AI is constantly developing and changing, new models will come out, previous models might get removed, and new features will get added.
>
> **[3:28](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=208)** So, trying out new things, staying up to date with the AI space is all a very important on how you stay relevant in the AI workflow.
>
> **[3:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=219)** So, overall, experimenting in real projects, tracking your costs, and optimizing, learning what's next, and measuring your productivity will help your workflow significantly so that you can use AI in a responsible manner and be able to efficiently implement it within your workflow and your production.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** continue (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Community resources and support: Documentation, forums, and contributions
> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=0)** - [Instructor] It's easy to get stuck sometimes.
>
> **[0:02](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=2)** Hit weird errors, see unexpected behaviors, or just wondering if you're using the tools the correct way.
>
> **[0:10](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=10)** And when that happens, you need to know where to get help and support.
>
> **[0:15](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=15)** Finding answers to your questions and tapping into the knowledge of many developers who are figuring this out too.
>
> **[0:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=22)** The first step is always starting with official documentation.
>
> **[0:27](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=27)** It saves a lot of time.
>
> **[0:28](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=28)** As for GitHub Copilot, you just go to docs.[github.com/copilot](https://github.com/copilot), and you'll be able to read extremely comprehensive documentation from troubleshooting guides, feature references, model comparisons, and countless other things.
>
> **[0:45](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=45)** When you hit an issue, you can search through the docs.
>
> **[0:49](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=49)** Many common problems are documented with solutions, their support pages for specific models.
>
> **[0:55](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=55)** If you are using cloud models, anthropic has documentation.
>
> **[0:59](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=59)** Gemini has Googled AI's documentation, which are all also listed in Copilots documentation within.
>
> **[1:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=67)** You can also go to GitHub's community discussion at [github.com/community](https://github.com/community) where there's Copilot sections where you can ask questions and report issues.
>
> **[1:18](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=78)** You can search before asking too.
>
> **[1:20](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=80)** If someone else has already had your problem, there's most likely already a solution.
>
> **[1:26](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=86)** You may get official responses or confirmation that something's known as a bug and is being worked on.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=92)** And if you're hitting what seems like a bug or unexpected behavior, you can check these discussions to see if others might be seeing it too.
>
> **[1:40](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=100)** For other community knowledge in real experience, branching out further online is also very helpful.
>
> **[1:47](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=107)** Joining communities such as through Reddit or Discord can help you be able to find quick answers or search through old discussions or threads easily.
>
> **[1:57](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=117)** You'll be able to talk directly with other people, making sure that you're specific and understanding on what you're trying to accomplish, what's happening, what you've already tried.
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=128)** And similar with places and sites such as Stack Overflow too.
>
> **[2:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=133)** All of these are wonderful resources to get help and understand any issues that may be going on, any questions that may be happening.
>
> **[2:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=142)** And having that community to gain support from will overall strongly help your knowledge on AI development, and how to use it responsibly and understand its efficiency and its potential, and its issues.
>
> **[2:39](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=159)** You can learn from others on how they're using these tools.
>
> **[2:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=162)** You'll see workflows.
>
> **[2:43](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=163)** So overall recapping, starting with official documentation is a perfect place to start.
>
> **[2:50](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=170)** You can check form discussions such as GitHub, Reddit for realtime help.
>
> **[2:56](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=176)** You can check other places like Discord or Stack Overflow as there's a strong abundance of places to ask questions, to find a community of developers that you can discuss all of this with, and learn from and contribute back into that community as well as.
>
> **[3:13](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=193)** A community continues to grow every single day, and it's significantly helpful for any problem that you may have or any question that may arise.
>
> **[3:22](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=202)** So you'll never run out of communities, resources, or support to go to when you feel lost or may need a little assistance.

> [!info]- Semantic Content
>
> **Tools:** github (5), discord (2)
> **Documentation:** stack overflow (2), the docs (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (2)
> **URLs:** [github.com](https://github.com) (2)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Pragmatic AI Labs]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/responsible-ai-dev)

## Skills Covered

- Responsible AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- GitHub Copilot

## Path Context

### In [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]
← [[GitHub Copilot for System-Level Development]] | **3 of 4** | [[Capstone- Building Production Features with Copilot]] →

## Appears In

- [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]

## Related Courses

_Courses sharing skills:_

- [[Azure AI for Developers- Content Safety and Responsible AI]] — Artificial Intelligence (AI), Responsible AI, Large Language Models (LLM)
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)