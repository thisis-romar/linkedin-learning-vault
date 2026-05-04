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
  - '[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)'
prev_courses:
  - '[GitHub Copilot for System-Level Development](GitHub%20Copilot%20for%20System-Level%20Development.md)'
next_courses:
  - '[Capstone- Building Production Features with Copilot](Capstone-%20Building%20Production%20Features%20with%20Copilot.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Responsible%20AI%20Development%20with%20GitHub%20Copilot.md)

![Responsible AI Development with GitHub Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQHLWrdnfFGSJg/learning-public-crop_675_1200/B4EZq34xBdIQAc-/0/1764021703092?e=2147483647&amp;v=beta&amp;t=GfXLEfHc3DJk2jmbjPaI436B1lMRjMpHwDrhrtf6exw)

# Responsible AI Development with GitHub Copilot

> Explore how to harness the power of GitHub Copilot while ensuring responsible AI development. This course dives into validating AI-generated code, helping you identify security vulnerabilities and logical flaws to strengthen your production code. Learn how to customize Copilot for your team's projects by enforcing coding standards and utilizing custom configurations. Discover the best practices fo

> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot) | 1h 2m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to AI validation: Why it matters for production code](#introduction-to-ai-validation-why-it-matters-for-production-code)
- [**1. Validating AI-Generated Code**](#1-validating-ai-generated-code) (5 videos)
  - [Techniques for verifying AI code: Manual and automated approaches](#techniques-for-verifying-ai-code-manual-and-automated-approaches)
  - [Identifying security vulnerabilities in AI-generated code](#identifying-security-vulnerabilities-in-ai-generated-code)
  - [Detecting logical flaws and hallucinations in AI outputs](#detecting-logical-flaws-and-hallucinations-in-ai-outputs)
  - [Challenge: Security audit AI-generated code](#challenge-security-audit-ai-generated-code)
  - [Solution: Security audit AI-generated code with best practices](#solution-security-audit-ai-generated-code-with-best-practices)
- [**2. Customizing Copilot for Your Team**](#2-customizing-copilot-for-your-team) (5 videos)
  - [Using copilot-instructions.md for project-specific guidance](#using-copilot-instructionsmd-for-project-specific-guidance)
  - [Enforcing team coding standards with custom configurations](#enforcing-team-coding-standards-with-custom-configurations)
  - [Challenge: Enforce a custom rule in your codebase](#challenge-enforce-a-custom-rule-in-your-codebase)
  - [Solution: Enforce a custom rule with Copilot configuration](#solution-enforce-a-custom-rule-with-copilot-configuration)
  - [Testing custom configurations: Validation and effectiveness](#testing-custom-configurations-validation-and-effectiveness)
- [**3. Staying Current with AI Tools**](#3-staying-current-with-ai-tools) (5 videos)
  - [Choosing the right LLM for your development needs](#choosing-the-right-llm-for-your-development-needs)
  - [Comparing model performance: Benchmarking and quality metrics](#comparing-model-performance-benchmarking-and-quality-metrics)
  - [Cost-benefit analysis of models: ROI and budget planning](#cost-benefit-analysis-of-models-roi-and-budget-planning)
  - [Next steps and continuous learning: Advanced topics and expertise](#next-steps-and-continuous-learning-advanced-topics-and-expertise)
  - [Community resources and support: Documentation, forums, and contributions](#community-resources-and-support-documentation-forums-and-contributions)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AI validation: Why it matters for production code](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=0)** - [Narrator] AI coding tools like [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) are incredibly powerful. They can write code faster than you can type. They can generate entire functions, classes, even whole files based on a simple comment. But what's important is that AI generated code is not automatically correct. Many times it's far from perfect. It's not automatically secure, and it's not automatically bug free. In fact, one of the biggest mistakes that developers may make is trusting the output too much. They see code that looks good, runs without errors, and they assume it's fine. But good looking and being good are two different things. For example, if you're about to ask [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) to create a function to validate user passwords, maybe it'll generate something simple like, "Return password length &gt;= 8." But is this really secure? Not really. It doesn't check for any other things such as uppercase letters, lowercase, doesn't prevent common passwords. A user could set their password to eight spaces. It would pass validation. And you may say, "Well, "maybe I should have been more specific in my prompt." You're right, but even with a specific prompt, AI can still generate code with subtle bugs, security issues, or logical flaws that aren't obvious at first glance. And that's why validation is critical. You need to treat AI generated code
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=94)** like you would treat code from any developer. Review it, test it, and audit it. Models like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and Claude are trained on millions of examples of code from [GitHub](../../Skills/Software%20Development/GitHub.md), Stack Overflow, documentation, everywhere. They learn patterns from that training data, but they may not understand what the code actually does. They're not reasoning about security implications in certain times. They may not be thinking about edge cases. They're predicting what code is likely to come next based on the patterns that they've seen. And sometimes those patterns are great, best practices, clean code, proper error handling, but also sometimes those patterns include outdated approaches, insecure practices or approaches or code that works in one context but not in yours. And sometimes the tricky part is AI may make stuff up. It may generate code that looks plausible but doesn't actually work. It can hallucinate. So here we're going to cover what you need to know about validating AI generated code effectively. We're going to look at the techniques for verifying AI code with reading and understanding the code, testing it properly, and using tools to catch issues automatically. We'll dive into identifying security vulnerabilities. We'll look into identifying common security issues
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/introduction-to-ai-validation-why-it-matters-for-production-code?u=76281980&t=189)** that show up in AI generated code. We'll look at things like [SQL](../../Skills/Data%20Science/SQL.md) injection, cross site scripting, and [Secure Authentication](../../Skills/Web%20Development/Secure%20Authentication.md). You'll learn how to spot these issues and fix them. We'll talk about detecting logical flaws and hallucinations as sometimes AI code will generate code that compiles and runs, but doesn't do what you actually need it to do. We'll experiment with the challenges where you'll be able to audit AI generated code security issues and be able to learn how to identify real vulnerabilities and fix them. Your job isn't to distrust AI or avoid using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (2)
> **Tools:** github (2)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** sql (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - [narrator] (1)


### 1. Validating AI-Generated Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Techniques for verifying AI code: Manual and automated approaches](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=0)** - [Instructor] A fundamental challenge with AI generated code is ensuring that it meets basic quality standards. AI can produce code that compiles and runs, but has linting issues, type errors or style problems that wouldn't pass normal reviews. These issues may seem minor, but they can accumulate into technical debt and can hide serious bugs. Here, we're going to look at how to use automated tools in order to catch these issues before they become issues. Here we have a simple project that's just meant to add numbers and as you can tell, it's very buggy, so to say. And a good way to validate files like this is with a Makefile. Rather than just having normal documentation, this tells you, line by line, the exact code to execute something so that you can run different tests. Run lint checkers. Run type checkers among many other things. Here, using it with a deno, we can tell it to use a lint command using deno lint. Same with check, deno check, and telling which file that we're attempting to scan. Same with running the actual project, cleaning up the generated files and all of which we can run if we go into here through make help and this'll be able to give us all of the different commands that we can do. So this is very essential for writing tests,
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=94)** being able to lint your code and type check your code in a very efficient and compact manner. So firstly, let's run make lint to see what quality issues that we have. And if you notice here, we have several different linting issues. We have an unused function. We have an unused variable. We have variables that are never properly reassigned. So it overall found three main problems. It also tells us exactly what line it's on and what the actual contents of that line were so that we're able to efficiently check it. AI often will generate variables that it never actually uses or improperly reassign things. These are all style and best practice issues that AI will commonly generate. So this linter helps catch them automatically so that we don't have to manually review them every single time. Now for type checking, we can do so with make check and as it shows, we have several different issues with the parameters, all of them having an implicitly any type. So this type checker helps catches these before the code ever runs. And if we try to actually run it, it will indeed run. But these linting and type checking issues are much more detectable when you use these specific tools. So overall, this structure is a good foundation for validating AI generated code. These automated checks help catch common issues before production.
>
> **[3:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/techniques-for-verifying-ai-code-manual-and-automated-approaches?u=76281980&t=188)** Linting will find style problems and best practice violations. Type checking will find actual logic errors where types don't match. Together, they help form a strong line of defense against low quality or buggy AI code. So just by doing the simple linting and type checking tests, you'll be surprised by how many issues you might catch with these simple commands.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Best Practices:** best practice (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Identifying security vulnerabilities in AI-generated code](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=0)** - [Instructor] A critical concern with AI generated code is security vulnerabilities. AI models have been drained on massive amounts of code from the internet, including code with security flaws. They can produce code with [SQL](../../Skills/Data%20Science/SQL.md) injection risks or hard coded credentials without realizing the security implications. These aren't just quality issues, but rather are vulnerabilities that attackers can and will exploits. Here, we're going to be looking at a scanner that can help detect these common vulnerabilities using pattern-based detection. If we look here at this particular example, this is demonstrating detection for two of the most common security issues with AI generated code, SQL injection, and hard-coded passcodes. In our file, we're detecting and defining the patterns for SQL injection vulnerabilities with regular expressions. These detect dangerous string concatenation in queries as when you concatenate a user input directly into a SQL query using the plus operator, you are allowing that input to become part of the SQL code itself, or an attacker can inject malicious SQL commands. Taking a look at this pattern, which normally would be plus user ID. Would be query select all from users where plus user, where ID equals plus user ID. And for user ID, perhaps the user picks one
>
> **[1:36](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=96)** or one equals one or admin as their user ID, which would return all users or give them administrator capabilities. So the safest way is to use parameterized queries where the input stays at the data and never actually becomes code. We're also detecting patterns like select with plus and from insert with plus in values, update with plus in set and delete plus in wear. All of these indicate string concatenation in SQL. We also can detect hard-coded passwords with regular expressions. We're looking for suspicious variable names. Says the most common ones that an AI model might call a password such as password API key secret token. When these variables are assigned string values directly in code, that's a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). Credentials should come from environment variables or secure vaults rather than being hard coded. Then down here we're simply scanning the file and reading it line by line to help detect which of these lines may have a potential error. We have exceptions for comment lines and red reject pattern definitions because this would get flagged if I were to scan this file. But normally it'll check every single line and it'll look if that line happens to match the patterns that's being scanned in these defined blocks.
>
> **[3:11](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=191)** And if it does detect this as a match, then it'll recognize that as a vulnerability and announce it that a vulnerability was found being a SQL injection or a hardcoded passcode. And here we have our security scanner test file, which has a list of examples of hardcoded passwords and SQL concatenation queries. All of which should be detected when we scan this file from the security scanner file. So let's go ahead and run the scanner on our code. We can do make help to see all of our commands and here if we try to just run the file, we're going to already get for security vulnerabilities that have been found. Found a hardcoded credential on this line and exactly what line it is, and SQL injection risks. As you see, we have our hardcoded passwords here and both of our SQL injection risks sitting here. Similarly to if we do make tests because of these being in the file is going to recognize that there were several different failures with SQL injections in hard-coded passwords. So if we get rid of these dangerous lines of code, when we do make a run, it's not going to vine any security vulnerabilities. So this is overall a good example of how to validate AI generated code for security vulnerabilities. A scanner like this will help catch common issues
>
> **[4:44](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/identifying-security-vulnerabilities-in-ai-generated-code?u=76281980&t=284)** like SQL injection from string concatenation in hardcoded credentials, and any other security issues that are common with AI. These are just two examples of many common security mistakes that AI makes because it's seen so many examples of insecure code and its data that is trained on. So you can run a file like this yourself, just a file to create tests specifically for the project you're working on to make sure that your code is truly secure and that your credentials aren't at risk of being detected and found by someone malicious.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (13), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1)
> **Env Vars:** sql (13), api (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Detecting logical flaws and hallucinations in AI outputs](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=0)** - [Instructor] AI models are very well known to hallucinate. They can generate code that imports non-existent packages, uses forbidden dependencies, or references libraries that don't actually exist, among many other issues. AI can also create unreachable code after return statements, with a dead code that looks reasonable but won't ever execute. Here, we're going to look at a simple validator that helps detect just a couple of these logical flaws. Here, we're going to be checking if imports are from an approved whitelist, so that it's not making up random imports or using imports that normally we wouldn't want to use in our production environment, outside of ones that we've already predefined; as well as detecting unreachable code that's ultimately never going to be run, and should be removed, or adjusted and fixed, as these are hallucination errors and logical errors that slip past a normal syntax checker, but will ultimately cause significant problems in your development. Now, let's take a look at what this detector actually does. Here, we have a whitelist of the imports that we want allowed. Here, we have the Deno Standard Library, and a CDN for [JavaScript](../../Skills/Software%20Development/JavaScript.md) modules, as well as our relative imports within our own project files, meaning that anything else outside of this whitelist is going to get flagged as forbidden. And this import pattern uses regex to match import statements,
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=93)** so that we're detecting if this import is actually allowed or not. So when we find an import, we check if it starts with any of these allowed patterns, if it doesn't, then it's marked as a violation. We also have patterns for checking undetectable code. These match return, throw, or break statements at the end of a line. And if we find one of these terminators, we're checking if the next line has code, so that if it does, then the code is rendered unreachable, and it comes after a statement that exes the function. So once again, we're scanning the file and reading it line by line for its normal static analysis. And for each line, we're checking for these forbidden imports using our regex patterns, or the unreachable code. So when we find a violation, then it's going to push that violation back to us, as well as the information with what type of violation it was, the file, the exact line, and the actual code for both the forbidden imports and the unreachable code. And here, we have our testing file, which has different issues that are going to be flagged, including an import statement that isn't in our whitelisted imports, alongside code that is unreachable because of this log that is never going to be activated due to being after a return statement. So when we run these actual tests, and we do make test, it's going to reflect those failures back to us. And it tells us that it detected a forbidding import,
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/detecting-logical-flaws-and-hallucinations-in-ai-outputs?u=76281980&t=186)** as that test failed, and it detected unreachable code. So if we run it as well, we'll also get these violations reflected, and it tells us of these issues that we need to address. That we shouldn't be importing this in, that we should be adjusting this to make sure that we handle code that isn't being reached. So that when we fix this properly, then we're going to have no issues and our code is going to be able to run just fine. So the structure is a solid structure for detecting AI hallucination and logical errors. Having a validator to keep these potential hallucinations in mind is extremely important because AI can create many subtle bugs that will pass normal checking, but will cause problems long term. So having a scanner like this to detect things such as forbidden dependencies, unreachable code, among many other hallucinations is extremely important for your development workflow so that your code can be properly validated, and smooth sailing as you continue your development process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** cdn (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Security audit AI-generated code](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=0)** - [Instructor] One of the most dangerous mistakes in AI generated code is accidentally committing API keys and secrets to your repository, which is not a hypothetical problem. It happens constantly. It's very easy to find in many files that have their credentials unfortunately hardcoded or they generate placeholder values. AI models will often include either example credentials or real credentials in their code that developers forget to replace with proper configuration. These secrets can be discovered by attackers who scan public repositories looking for exposed credentials. There are people and bots that scrape [GitHub](../../Skills/Software%20Development/GitHub.md) 24/7, specifically looking for AWS keys, API [Tokens](../../Skills/Web%20Development/Tokens.md) and database passwords. And once these are found, these credentials can be used to access your systems, steal data or rack up huge bills on your account. And if you're developing huge projects or huge chunks of code, it may be easy to accidentally let these hardcoded credentials slip by without you realizing and in order to prevent this, being able to have a scanner that helps detect if these credentials are exposed. So what I want you to do is to build a secret scanner that will detect hard-coded AWS and Open AI API keys. So your task is to create a spec scanner with the following capabilities. Firstly, detecting AWS access keys.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=93)** AWS access keys follow a very specific pattern. They all start off with AKIA, followed by exactly 16 alpha numeric characters. This is how AWS namespace their keys, and your Regex should match this exact pattern. Similarly with open AI API Keys, they follow the pattern SK- and followed by 48 alpha numeric characters. Open AI keys are always in this format. Your scanner should do several things. Being able to scan individual files with the scan file function that reads the file and searches line by line, should be able to scan directories looking for TypeScript or JS files as you don't want to scan every file type, but specifically your source code. Then the secret type should be reported, AWS or open AI along with a file path and the line number for each match. This will make it easier for developers to find and fix the issues in real production. If secrets are found, exit with code one and if no secrets are found, exit with code zero. So your builds should fail if secrets are detected, and if not, then your build should continue as normal. You'll also need to create a make file with these targets. You should be able to do a make test so you can run your test suite, make a run so you can execute the scanner on your current directory. Make lengths to check your code style and syntax. Then you should have created tests that verify three things. That the AWS key detection works,
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-security-audit-ai-generated-code?u=76281980&t=189)** having a file with an AWS key out in the open and confirms that the scanner finds exactly a match of an AWS type key. Same with the open AI key detection, making sure that the scanner finds a match of the open AI key, meaning that these tests and runs should fail. And if these secrets are to be removed and emptied, then the tests and run should complete as normal. These are very essential techniques for validating AI generated code and a real security tool that can help prevent very catastrophic leaks. So try building this yourself before watching the solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **CLI Commands:** aws (9), make (5), find (2)
> **Env Vars:** aws (9), api (4), akia (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Security audit AI-generated code with best practices](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=0)** - [Instructor] Now, let's walk through the solution to our secret_scanner. This scanner will detect hard-coded AWS and [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) keys, using regex pattern matching and static analysis. It demonstrates the techniques that are essential for validating AI-generated code and preventing breaches. We have our projects, our Makefile, and our testing file. In our Makefile, we can test everything with make test, which runs our test suite to verify that everything works. We can build an executable with make build, run the scanner with make run, and make lint and make check for proper code quality. And we have our help, where we can run any of these files, or all of them at once. In our actual scanner file, this is where we have our logic. So let's go through this, piece by piece. First, we have just our normal interface being defined, so our data structure that holds types AWS or OpenAI, the file path, the line number, and the actual secret value, making it easier to report findings to the users. We have two regex patterns. This one matching the letters AKIA, literally, then the 16 characters that are either digits or uppercase letters, with a global g flag so that it's finding all matches in the text and not just the first one, creating a pattern specific to AWS keys. Then we have our OPENAI_KEY_PATTERN,
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=92)** which matches, sk, and then the 48 alpha-numeric characters that are lowercase, uppercase letters, or digits of all occurrences. Then we have our normal scanFile function, which is where we're reading the entire file as text with Deno.readTextFile. Then, we're splitting all of the content into lines via new lines, and looping through each line with forEach, going through each line and our idx variable which is tracking which line number that we're actually on. So for each line, we're going to use matchAll with our regex patterns. Meaning that for every line, if we have a match, we push a new secret match object to our results array. We record the type, the file path, the line number, and the actual secret value. Where afterwards, we return our matches, after going through all the lines. Our scanDirectory function scans the entire directory so that we're looping through all of the entries in the directory. We check if it's a file, and if the name is ending with a TypeScript or .js ending, so that we're only scanning these files rather than any other images and file types like our Makefile, images, videos, or our ReadMe, et cetera. For each code file, we call scanFile and collect all of our results. So at the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) level, if secrets are found, then we're going to print an error message with the count and the amount of secrets, where we're going to loop through each violation
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-security-audit-ai-generated-code-with-best-practices?u=76281980&t=187)** and print the type and its location. Then, we exit with code one, as the build should fail if all the secrets are found. If no secrets are found, then we print a success message and the build can continue as normal. If we look at the test file, we have many different tests here with our asynchronous functions, with lines that are writing these API keys, AWS, and OpenAI keys to a text file. So even if it's just a text string that's getting written to a temporary file, the scanner's going to detect it as it reads through the line and sees this AWS or OpenAI key exposed to the public. So, when we do make...

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** make (6), aws (5)
> **Env Vars:** aws (5), api (2), akia (1), openai_key_pattern (1), cli (1)
> **Code Identifiers:** scanfile (2), secret_scanner (1), readtextfile (1), foreach (1), matchall (1)
> **Speakers:** - [instructor] (1)


### 2. Customizing Copilot for Your Team

[↑ Back to Table of Contents](#table-of-contents)

#### [Using copilot-instructions.md for project-specific guidance](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=1)** - [Host] One of the most powerful features of [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) is the ability to give it custom instructions for your project. And the way you do this is through a file called [copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md)-instructions.md. This file lives in your repository and tells Copilot about your coding standards, your project conventions, and how things should be structured. And once you set this up, Copilot automatically follows these rules every time and generates code for you. So, let's show how to set this up and how to use it effectively. First thing we need to do is create the file in the right location. And it's important because it has to be in a specific place for Copilot to recognize it. Here I am in VS Code with my projects open and at the root of my repository, I need to create a .[GitHub](../../Skills/Software%20Development/GitHub.md) folder. If you already have this folder, maybe through GitHub Actions workflow, you can skip the step, but if you don't have it, just create a new folder called .github. Now, inside that .github folder, you're going to want to create a new file called copilot-instructions.md. Now, we want to add actual instructions. That's it for the structure. The instructions are written in markdown format, and they're just natural language. So, you're just telling copilot how you want your code to look. So, we're just going to add some basic coding standards. I'm going to start with the header. Just Project Coding Standards. And then I'll add a few simple rules. We're going to use TypeScript for all new files. We're going to prefer async/await
>
> **[1:37](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=97)** over .then for promises. We want to always include error handling with try/catch blocks. And we want to add JSDoc comments for all functions and classes. So, pretty standard rules, but you can customize this however you want. You can specify naming conventions, file structures, which libraries to prefer, architectural patterns, whatever makes sense for your project. So, now we want to save the file and Copilot now knows about these rules. Anytime I'm working in this repository, Copilot will try and follow these guidelines. So, to see it in action, we're going to create a new TypeScript file. We're going to do one here outside of the github. And we're going to call it api-client.ts. We're just going to create something, something simple to create a function to [Fetch](../../Skills/Web%20Development/Fetch.md) user data from an API. And I'll hit enter and let Copilot generate the code. And as it generates, it's following the proper instructions that we, specifically, requested. Doing it in TypeScript for new files, including error handling, including try and catch blocks and using async functions. And this is the power of custom instructions.
>
> **[3:12](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=192)** Without that file, Copilot may have generated this in a, significantly, different way, such as maybe plain [JavaScript](../../Skills/Software%20Development/JavaScript.md), used .then instead of async and wait. It might not have included all of the error handling, but because we told it our standards, it follows them automatically. We can also verify it in the Copilot chat. We can ask, what coding standards should I follow in this project? And it'll reflect it back to us from the Copilot instructions. Use TypeScript for new files. Prefer async/await. Always include error handling with try/catch and JSDoc comments for all functions. So, you can always ask Copilot to remind you of your project standards. So, you can always ask Copilot chat to remind you of your project standards. And a few things to keep in mind. The file should be named exactly copilot-instructions.md and should be and the root of your github folder. And keep your instructions clear and specific. So, nothing too vague like, write good code. Say, specifically, what you want to see in your code and how, exactly, you want your code to be implemented and written and structured, as the more specific you are, the better Copilot can follow your rules. And you can update this file anytime. As your project evolves or your standards change, just edit the markdown file and save it. Copilot will pick up the changes immediately. And that's the basics of using copilot-instructions. It's one of the most valuable features for team projects because it ensures everyone's code
>
> **[4:46](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/using-copilot-instructions-md-for-project-specific-guidance?u=76281980&t=286)** follows the same standards, even when Copilot is writing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (19), [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Tools:** github (7), vs code (1)
> **File Paths:** copilot-instructions.md (3), api-client.ts (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [host] (1)

#### [Enforcing team coding standards with custom configurations](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=0)** - Previously we set up basic custom instruction for [copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), but in a real team environment, you need more than just basic rules. You need comprehensive coding standards that cover style, naming conventions, error handling, and documentation. Here, we're going to show how to build a complete set of team level coding standards that ensures everyone on your team, including copilot, writes consistent high quality code. We're going to go back to our copilot instructions markdown file and make it fully useful for a production team. It has some basic rules now, but we want to organize this into something much more comprehensive. So we're going to organize this into clear sections. We're going to want to have code style. And for here, we're going to do use two spaces for in- for indentation. Some other simple maximum line length is going to be 80 characters. Always use single quotes for strings and always use semicolons at the end of statements. Fairly simple enough for good general code style. Then we're going to do naming conventions for variables and functions. We should be using Camel case for classes and other components. We should use Pascal case giving us proper good recommendations here. For conscience, we're going to do upper snake case
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=94)** and then private method. We're going to to have a sample prefix with an underscore. We can include other things such as error handling statements like all asynchronous functions unless you try and catch log errors properly for debugging and provide meaningful error messages. Then documentation. And again, this can, these are just simple examples. You can, these can always be adjusted to your style and what your team is focusing on and the overall style that your team wants to go for. They saw comments. Now our copilot instructions are significantly more expanded in much more product- projuction- and production ready than the current standards that we had before. So we can test these with a few different scenarios and see how copilot follows these rules. If we go back and re-ask the coding standards, it should give us a much significantly greater updated list than what it did before. Now, let's create a simple function to ask copilot to create a function to validate user email. And when we do so, it's following our standards. It's following our Camel case format properly. It's including very detailed comments. It's following our syntax with semicolons and spaces being added.
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/enforcing-team-coding-standards-with-custom-configurations?u=76281980&t=187)** And we can test this with something more complex too, with every single one of our standards being ensured that's being followed. So we can create a user service class with a method to [Fetch](../../Skills/Web%20Development/Fetch.md) user data. And when we do this following our Pascal case, making sure that it includes very detailed comments, ensuring that there semicolon is always at the end of it, once again with our syntax. And as we continue to do this, it explicitly follows every single one of our instructions. And showing why this matters is pretty important. Start writing code without these instructions consistent across a team, then that's going to be inconsistent with our team standards. If five different developers wrote this function, you would get five different implementations. So every developer on the team gets code that follows the same standards. If you're not relying on people remembering the conventions as copilot will make sure that to enforce them, and that's a very efficient way to enforce team coding standards with copilot. Key is being comprehensive and specific, spelling out exactly in very large detail which practices are truly best for your team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (8), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - previously (1)

#### [Challenge: Enforce a custom rule in your codebase](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=0)** - [Instructor] Being able to efficiently write instructions to your [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) instruction file can help enforce good specific coding habits. And here you're going to start writing instructions on your own to try and enforce a specific code pattern that a lot of teams might prefer. Your team has decided that instead of writing nested if statements to check conditions, you should use early returns as a good, much cleaner format. So instead of doing nested if statements over and over and over again, we're doing guard clauses with early returns instead. So there's much flatter and much easier to read, and each condition is checked and we exit early if it fails, so that the actual logic isn't nested inside of multiple blocks. So here's what I want you to do. Add a custom instruction to your copilot-instructions.md file that tells Copilot to use guard clauses with early returns instead of nested if statements. Then test it by asking Copilot to generate a function that validates something with multiple conditions. For example, to create a function to validate user registration that checks username, email and password requirements, and see if Copilot uses guard clauses instead of nested ifs. If it doesn't, try making your instructions more specific, maybe by adding an example, showing the pattern that you want. The goal is to practice writing clear instructions that enforce a specific coding pattern. So go ahead and try grading a well-crafted instruction
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/challenge-enforce-a-custom-rule-in-your-codebase?u=76281980&t=94)** and testing out how Copilot executes it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (6)
> **File Paths:** copilot-instructions.md (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Enforce a custom rule with Copilot configuration](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=0)** - [Instructor] Now, let's look at the solution. I'm going to show you the progression from a vague instruction to a properly effective one, because that's the actual process you should go when setting up these rules. Now, normally, we're going to do Code Structure here, you might want to write something simple, such as Avoid nested if statements and Use early returns. And in most cases, that might be fine, but the instructions may be too vague at times to where it may not be helpful or abide by the instructions every single time. So instead, we're going to try and be more specific. So instead of this, we're going to do Use guard clauses with early returns instead of nested if statements. Then, Check for error conditions first and exit early. Then, Keep the happy path at the lowest indentation level. So now, if I want to go and generate the same function, create a function to process an order that checks if order exists, has items, and customer is verified. So if we go and do that, then as you see, it's abiding by our rules. Instead of using nested if statements, it uses the clean guard clauses with a flat structure, which is exactly what we want.
>
> **[1:33](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/solution-enforce-a-custom-rule-with-copilot-configuration?u=76281980&t=93)** And we can continue testing it out with more complex reasoning, such as create a function to calculate shipping cost that validates address, weight, and delivery options. And if we go ahead and do this, then we should still get our proper structure with multiple guard clauses, checking all of the required conditions, and then starting to develop the actual calculation logic down here. No nesting, completely flat. And what makes this instruction work is that we're being specific about the pattern. Being as clear as possible in your instructions helps yield better results. And that's just a very simple and efficient way to help enforce coding standards within your project.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Testing custom configurations: Validation and effectiveness](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=0)** - [Instructor] So you've created your [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) instructions file and added all of your team's coding standards. And everything looks good, but how do you know it's actually working consistently every time? Simply, you need to test it. Not just with one example, but systematically, across different scenarios. Because what works for one type of function may not work for another, and what works in [JavaScript](../../Skills/Software%20Development/JavaScript.md) might not translate to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or Go. So here, we're going to show a practical approach to testing your custom configurations and making sure that they work the way you expect. So we're not actually testing Copilot itself, but we're testing whether our instructions are clear and specific enough to get consistent results. First off, we're going to try generating the same function multiple times, and see if we get consistent results. So we're going to write a simple instruction, create a function to validate user login that checks username and password. And if we do this here, creating everything consistently, giving the right format, in syntax. And we can undo this and try it again, and we get the continuous same pattern again and again. It's not fluking or going out of bounds of the rules, it's following the proper syntax that we specifically requested it. We can also try different types of functions and see if the rule still applies. Let's say we want to do [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) instead of validation. We're going to create a function to process payment that checks account balance and transaction limits.
>
> **[1:41](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=101)** So, it's still following our instructions specifically. It's following the proper Camel case, it's keeping our if statements flat. And we can continue to make this more complex to make sure that it's still continuing to be specific, so such as create a function to generate a report that validates data range, user permissions,
>
> **[2:08](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=128)** and data availability. So even with more complex logic, it's still following the examples of our syntax, our guard clause patterns, and everything else that we've specifically applied. What we can also do is ask Copilot chat to review our code and see if it's following our standards. So let's say we're going to write a code that's just function processOrder(order) here. And we're going to do a bunch of nested if statements. Do if (order), if (order.items.length &gt; 0). Then another if statement, if (order.customer.verified), return "Order processed."
>
> **[3:01](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/esting-custom-configurations-validation-and-effectiveness?u=76281980&t=181)** And then we're going to go to our Copilot chat and ask... We're going to do this with GPT-5. We're going to ask, "Does this code follow our project's coding standards?" And it'll tell us that, "No, it does not follow the project standards." It's missing a lot, it's missing the comments, it's missing the TypeScript types and exports, nested ifs instead of guard clauses, unsafe property items, using inconsistent indentation, and no semicolons or error logging. And it tells us what we should try and do instead. So overall, a good way to stress test these instructions is by going through a multitude of tests by generating the same function multiple times, testing different scenarios, edge cases. And asking Copilot itself to review your code against your standards, so that even if it generates code that it may not have fully stuck by the instructions for, you can always re-ask Copilot to review your code and see if it truly fits against your standards. If there's inconsistency, that might be a signal to help refine your instructions instead. You can always continue to keep improving your custom instructions as you discover new edge cases, new patterns, and always having a way to test them is key to ensure consistency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** processorder (1)
> **Env Vars:** gpt (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Staying Current with AI Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing the right LLM for your development needs](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=0)** - [Instructor] Choosing the right LLM is extremely important for the task that you're trying to accomplish. [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) supports multiple AI models from different providers, including OpenAI, Anthropic, [Google](../../Glossary/Service/Google.md), and xAI. If you open up your [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) settings, you'll see this list of models available to you. But the natural question is, which one should you actually use? And it really depends on what you're trying to accomplish. And [GitHub](../../Skills/Software%20Development/GitHub.md) has actually done a very good job of categorizing these models by task area. So let's see how we should think about model selection. LLMs can be used for a wide array of things. We have general purpose coding and writing, your everyday coding work, writing functions, generating boiler plates, creating documentations, et cetera. For this, it's recommended by GitHub to use models like [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md).1, your GPT-5, GPT-5 Mini, or Grok Code Fast 1. What's nice about these models is that they're fast, still accurate, and work well across different languages and frameworks. GPT-5 Mini in particular is what Copilot calls the most reliable default for coding and writing tasks. For fast help with simple or repetitive tasks, when you need a quick answer, such as fixing a syntax error, explaining what a line of code does, you don't need deep reasoning, but more so just fast and accurate responses.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=94)** Here, it's more recommended to use the Claude models, 4.5 or Sonnet. These models are optimized for speed and responsiveness, so you'll get fast answers without needing unnecessary depth. When thinking about deep reasoning or debugging, when you're dealing with complex issues, architectural decisions, or refactoring large code bases, debugging tricky multi-file problems, this is where you need the models that can really think through problems step by step. Here, GitHub recommends that you would use GPT-5 Mini for deep reasoning with factor responses, or the normal GPT-5 for complex reasoning in code analysis. Sonnet provides performance and practicality. Claude Opus and [Gemini](../../Skills/Software%20Development/Gemini.md) Pro may be better for advanced reasoning across long contexts. If you're working with visuals, diagrams, screenshots, UI components, and want models with multimodal support, this is where you rely on GPT-5 Mini, Claude Sonnet, or Gemini. So how do you actually choose in practice? Again, it all depends on the task at hand. But a solid, reliable default can be starting off with models like GPT-5 Mini or 4.1, or Claude Sonnet, which are reliable, fast, and work well for the majority of large coding tasks.
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/choosing-the-right-llm-for-your-development-needs?u=76281980&t=189)** When you're working on something complex like refactoring a large module or debugging a tricky architectural issue, this is when switching to a higher-level model may benefit you, like GPT-5 or Claude Opus. So don't necessarily reach for the model that you believe is the smartest, but use the right model that's suitable for the right tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** gpt (9), llm (1)
> **Tools:** github (4)
> **Versions:** 4.1 (2), 4.5 (1)
> **Best Practices:** recommended (2)
> **Code Identifiers:** xai (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Comparing model performance: Benchmarking and quality metrics](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=0)** - [Speaker] Previously, we looked at what's recommended for which models to use for different tasks, but how do these models actually compare when you test them side by side? There are many ways to answer that question. We can look at benchmark scores from leaderboards, like artificial analysis. We can look at metrics like speed, context window size, and pricing, as well as being able to do our own practical tests to see how they perform on real-coding tasks. Starting off with benchmarks, if we pull up some examples, we can see the [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) for all of these different AI models. Firstly, looking at intelligence scores, which is a metric that combines several different benchmarks. GPT-five scores the highest while models like Claude Sonnet comes in at a second, [Gemini](../../Skills/Software%20Development/Gemini.md) Pro follows closely behind and Grok Code trailing furthermore, so you might assume, okay, I should just use GPT-five for everything since it has the highest score. But intelligence score is just one dimension. There's many other factors to consider when choosing the right model. For example, context window size, Claude sonnet 4.5 and Gemini 2.5 Pro both have million token context [Windows](../../Glossary/Service/Windows.md), meaning that they can look at your entire code base at once. GPT-five models have about 400,000 [Tokens](../../Skills/Web%20Development/Tokens.md), which is still very good
>
> **[1:35](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=95)** and Grok with 256,000 tokens. Why does this matter? If you're working on a large scale project and you need the model to understand how different parts of your code interact, that larger context window is significantly more valuable as the model is able to see more of your code at once and give stronger recommendations. But benchmarks themselves don't always tell the whole story, and this is something that's very easy for you to test out. If you ask a simple command or request of each model to do the same task. You can understand the differences in how they respond, whether it be differences in time and clarity of the code among many other factors. So higher intelligence scores don't always mean better for your specific use case. Many developers prefer different models for different reasons, and making sure that you take note of your context window in terms of the project that you're working on is something that's extremely important. If you're working with large files or need to reference in multiple parts of your code base, then taking in that context window is very important for your project. And there's a real trade-off between speed and quality. Grok might be perfect for auto-complete simple repetitive tasks where you need fast responses as it can generate code in the blink of an eye. But for complex debugging or refactoring, you may want to slow down
>
> **[3:09](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/comparing-model-performance-benchmarking-and-quality-metrics?u=76281980&t=189)** and have more thoughtful models like Claude Sonnet or GPT-five. So ultimately, the best model depends on what you're doing, but all of them indeed have different performances for different tasks. So benchmarks and leaderboards are very good starting points in testing out these models with your actual workflow is able to help, you understand which one will fit the best kind, and being able to test these models with your actual workflow will help you understand which fits the best kinds of tasks that you typically do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** gpt (4)
> **Versions:** 4.5 (1), 2.5 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [speaker] (1)

#### [Cost-benefit analysis of models: ROI and budget planning](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=0)** - [Instructor] Understanding how [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) charges you is critical to using it effectively and staying within your budget. You might think it works like OpenAI's API or Anthropic's API, where you pay per token, input [Tokens](../../Skills/Web%20Development/Tokens.md), output tokens, adding them up and paying for what you use. But [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) doesn't exactly work the same. Copilot uses a system of premium requests with model multipliers, and making sure you understand the system is important so that you don't blow through your budget without realizing it. There are generally about five different tiers for Copilot plans, three of them for individual and two of them for business. Copilot Free costs nothing. You get about 50 premium requests per month and you have access to a limited set of models, [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md).1, 5 Mini, and Sonnet 3.5. This is great if you're just trying out Copilot and want to get ahold of it. But you can also upgrade to Copilot Pro, which costs $10 a month. You're able to get 300 premium requests a month, and you have access to all of the premium models. With Pro+, you're able to get 1,500 premium requests per month, five times more than Pro, and have full access to all models, including the most advanced ones.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=92)** So, if you need the best models frequently, this might be the best option. If you're running a business, you can use the Business tier for $19 per user, per month, getting the same as normal Pro requests, and Enterprise, costing $39 per user, where each user gets 1,000 premium requests and more advanced enterprise features. But here's the important thing. If you run out of premium requests, you can buy more for $0.04 per request. But depending on what you're working on, those can add up significantly, quickly, as we'll see in a minute. Not all models cost the same number of premium requests, though. Each model has what's called a multiplier. GPT-5 Mini and 4.1 have a 0 multiplier, meaning that they don't use any premium requests. So, if you're on a paid plan, you have essentially unlimited interaction. Haiku 4.5 has a 0.33 multiplier, meaning each interaction costs about 1/3 of a premium request. Grok Code has a 0.25 multiplier, meaning that it costs about 1/4 of a request. Models like Sonnet 4, Sonnet 3.5, GPT-5, and [Gemini](../../Skills/Software%20Development/Gemini.md) Pro all have a 1x multiplier, meaning that each interaction costs one premium request.
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=187)** And models like Opus 4.1 have a 10x multiplier, meaning that each interaction would cost 10 requests. So, if you're choosing the right model, keeping in mind how many requests you have is important for making sure that you don't run out of requests. For example, let's say you really love to use Claude Opus. You think it's the best model, so you use it for everything. Let's say you use up all of your requests with your plan using Claude Opus, but you're only maybe a couple weeks into the month, and you need to keep working. So, you use it about 270 more times, let's say. That would be 2,700 additional premium requests at $0.04, meaning that would be $108 extra on top of your $10 base fee, compared to a model that doesn't use premium requests, which will be less powerful, but gives you a much greater amount of requests, offering a noticeably different experience compared to normal API pricing. If you were using OpenAI's API directly with GPT-4.0 Mini, for example, the cost would be about $0.15 per input and $0.60 per output per million tokens. So, if you use 100 million tokens in a month, that's about $15 to $60 a month in API costs. Copilot Pro is able to give you
>
> **[4:42](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/cost-benefit-analysis-of-models-roi-and-budget-planning?u=76281980&t=282)** this essentially unlimited usage for $10 a month integrated within VS Code, [GitHub](../../Skills/Software%20Development/GitHub.md), and all of your development tools, and affordable other models at a much lower cost than if you were using the API, meaning that it's more cheap and cost effective to use Copilot than the API directly. But being careful about each model and its cost implications is extremely important to be aware of as you're developing, making sure that you're able to choose the model that best suits your tasks. But also, making sure that you keep costs in mind and understand which is the most cost effective will significantly help your workflow and production as you navigate AI development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (8), [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (2), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Versions:** 4.1 (3), 3.5 (2), 0.04 (2), 4.5 (1), 0.33 (1)
> **Env Vars:** api (7), gpt (4)
> **Tools:** github (2), vs code (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Next steps and continuous learning: Advanced topics and expertise](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=0)** - [Instructor] Now, we've discussed a lot how to choose models, compare their performance, understand their costs, and how to work with [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) and stay up to date in the AI space. But the question is, what do you do with this knowledge and how do you take what you've learned and best apply it to your own work? The best way to take in what you've learned is to experiment in your actual projects. Understanding this in your real workflow is extremely important to help continue developing your knowledge and continuously learning more about [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) development and how it can significantly boost your workflow. Experimenting with different models, seeing which one truly fits best for the work that you're doing, noticing their differences in how they handle work, how they handle styles, being able to use instructions to your benefit to fine-tune all of these models to create exactly what you want to. Instead of relying just on benchmarks or on people's opinions, you can have your own experience and base it off of that to determine what works well for you. Finding out what plans work for you, too, in terms of cost tracking. If you're wanting to get Copilot or upgrade Copilot, understanding your usage stats with AI strongly connected into your workflow will help you get a greater grasp on what plans might make sense to you.
>
> **[1:34](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=94)** Whether you want to stick with free or stick with Pro or upgrade to Pro+ or integrate it within a business setting with Enterprise or Business, knowing your usage and optimizing your costs based on actual data to choose the right plan for you is extremely efficient in figuring out cost in exactly what you need to maximize that workflow. And also, just continuing to look at what's coming next in AI tooling, as AI is always continuously improving. Diving deep into other areas of AI, such as [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) with Copilot, like the Copilot coding agent that can work more autonomously, which is powerful, but also needs supervision. And also, thinking about how to roll all of these tools out if you're part of a team, how you train your team and establish standards. How to measure whether or not AI tools are making you more productive. It's easy to feel like you're moving faster, but making sure that you're shipping the load that you want to, shipping the quality of work that you want to, even if it feels faster, is important to determine whether or not it's impacting your work in the correct ways, and fine-tuning that to make sure that it can actually help contribute to your work in a meaningful way, in a way that doesn't hinder you, and develop a sense where AI helps most and where it doesn't. You may find that AI is amazing for certain issues and development processes,
>
> **[3:07](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/next-steps-and-continuous-learning-advanced-topics-and-expertise?u=76281980&t=187)** but not quite as much for others, so that you can focus its efforts in specific areas and learn to keep adapting as models evolve. As AI is constantly developing and changing, new models will come out, previous models might get removed, and new features will get added. So, trying out new things, staying up to date with the AI space is all a very important on how you stay relevant in the AI workflow. So, overall, experimenting in real projects, tracking your costs, and optimizing, learning what's next, and measuring your productivity will help your workflow significantly so that you can use AI in a responsible manner and be able to efficiently implement it within your workflow and your production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (5), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Community resources and support: Documentation, forums, and contributions](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=0)** - [Instructor] It's easy to get stuck sometimes. Hit weird errors, see unexpected behaviors, or just wondering if you're using the tools the correct way. And when that happens, you need to know where to get help and support. Finding answers to your questions and tapping into the knowledge of many developers who are figuring this out too. The first step is always starting with official documentation. It saves a lot of time. As for [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md), you just go to docs.[github.com/copilot](https://github.com/copilot), and you'll be able to read extremely comprehensive documentation from troubleshooting guides, feature references, model comparisons, and countless other things. When you hit an issue, you can search through the docs. Many common problems are documented with solutions, their support pages for specific models. If you are using cloud models, anthropic has documentation. [Gemini](../../Skills/Software%20Development/Gemini.md) has Googled AI's documentation, which are all also listed in Copilots documentation within. You can also go to [GitHub](../../Skills/Software%20Development/GitHub.md)'s community discussion at [github.com/community](https://github.com/community) where there's [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) sections where you can ask questions and report issues. You can search before asking too. If someone else has already had your problem, there's most likely already a solution. You may get official responses or confirmation that something's known as a bug and is being worked on.
>
> **[1:32](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=92)** And if you're hitting what seems like a bug or unexpected behavior, you can check these discussions to see if others might be seeing it too. For other community knowledge in real experience, branching out further online is also very helpful. Joining communities such as through Reddit or Discord can help you be able to find quick answers or search through old discussions or threads easily. You'll be able to talk directly with other people, making sure that you're specific and understanding on what you're trying to accomplish, what's happening, what you've already tried. And similar with places and sites such as Stack Overflow too. All of these are wonderful resources to get help and understand any issues that may be going on, any questions that may be happening. And having that community to gain support from will overall strongly help your knowledge on AI development, and how to use it responsibly and understand its efficiency and its potential, and its issues. You can learn from others on how they're using these tools. You'll see workflows. So overall recapping, starting with official documentation is a perfect place to start. You can check form discussions such as GitHub, Reddit for realtime help. You can check other places like Discord or Stack Overflow as there's a strong abundance of places to ask questions, to find a community of developers
>
> **[3:06](https://www.linkedin.com/learning/responsible-ai-development-with-github-copilot/community-resources-and-support-documentation-forums-and-contributions?u=76281980&t=186)** that you can discuss all of this with, and learn from and contribute back into that community as well as. A community continues to grow every single day, and it's significantly helpful for any problem that you may have or any question that may arise. So you'll never run out of communities, resources, or support to go to when you feel lost or may need a little assistance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Tools:** github (5), discord (2)
> **Documentation:** stack overflow (2), the docs (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (2)
> **URLs:** [github.com](https://github.com) (2)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)


## Instructor

- [Pragmatic AI Labs](../../Instructors/Artificial%20Intelligence%20(AI)/Pragmatic%20AI%20Labs.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/responsible-ai-dev)

## Skills Covered

- Responsible AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- GitHub Copilot

## Path Context

### In [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)
← [GitHub Copilot for System-Level Development](GitHub%20Copilot%20for%20System-Level%20Development.md) | **3 of 4** | [Capstone- Building Production Features with Copilot](Capstone-%20Building%20Production%20Features%20with%20Copilot.md) →

## Appears In

- [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)

## Related Courses

_Courses sharing skills:_

- [Azure AI for Developers- Content Safety and Responsible AI](Azure%20AI%20for%20Developers-%20Content%20Safety%20and%20Responsible%20AI.md) — Artificial Intelligence (AI), Responsible AI, Large Language Models (LLM)
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI), GitHub Copilot
- [Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [LLM Foundations- Building Effective Applications for Enterprises](LLM%20Foundations-%20Building%20Effective%20Applications%20for%20Enterprises.md) — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)