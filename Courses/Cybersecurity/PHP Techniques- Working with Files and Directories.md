---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: php-techniques-working-with-files-and-directories
url: "https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories"
duration_minutes: 128
duration: 2h 8m
level: Intermediate
updated: 3/1/2021
learners: 35332
skills:
  - PHP
exercise_files: true
github: "https://github.com/LinkedInLearning/php-techniques-working-with-files-and-directories-2873106"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGj8JmjPhirmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614274556817?e=2147483647&amp;v=beta&amp;t=UG_vYIh5xc7hhvK1rF38vblBaacd4SVgMGg26mQ-rnA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your PHP Skills]]'
prev_courses:
  - '[[Functional Programming with PHP]]'
next_courses:
  - '[[PHP- Creating Secure Websites]]'
path_nav: '[{"path":"Advance Your PHP Skills","position":3,"total":7,"prev":"Functional Programming with PHP","next":"PHP- Creating Secure Websites"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/software-development
  - topic/web-development
  - skill/php
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/PHP%20Techniques-%20Working%20with%20Files%20and%20Directories.md)

![PHP Techniques: Working with Files and Directories](https://media.licdn.com/dms/image/v2/C4E0DAQGj8JmjPhirmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614274556817?e=2147483647&amp;v=beta&amp;t=UG_vYIh5xc7hhvK1rF38vblBaacd4SVgMGg26mQ-rnA)

# PHP Techniques: Working with Files and Directories

> Having the knowledge for effectively working with files and directories is important for any programmer looking to go beyond the basics of PHP. With this course, Kevin Skoglund covers the important file skills for any PHP developer to have. He shows how to read from files, write to files, search directories, change permissions, and create forms so that remote users can upload files. He also shares

> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories) | 2h 8m | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Working with Files]]** (13 videos)
- **[[#2. Working with Directories]]** (7 videos)
- **[[#3. Accepting User-Uploaded Files]]** (9 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Work with files and directories in PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=0)** - [Kevin] This course will teach you how to use PHP to work with files and directories.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=5)** We will read from files, write to files, search through directories, change file permissions, and create forms so that remote users can upload files.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=14)** These are important skills for any PHP developer to have.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=18)** We will start with the basics of the file system.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=20)** We'll walk through demonstrations of the PHP functions together.
>
> **[0:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=24)** There'll be code challenges using some fun, practical examples.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=28)** You can follow right along with me or sit back and watch.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=31)** Along the way, I'll share my advice on best practices.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=34)** You will immediately be able to apply your new skills to your own projects.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=39)** My name is Kevin Skogland.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=40)** I'm a web developer who has been using PHP for over 20 years.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=44)** I'm excited to show you how I use it to work with files.

> [!info]- Semantic Content
>
> **CLI Commands:** php (4)
> **Env Vars:** php (4)
> **Speakers:** - [kevin] (1)

#### Using the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=5)** You can find it at this URL.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=8)** It's a project hosted by the LinkedIn Learning account and it's called php-techniques-working-with-files-and-directories-2873106.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=19)** The repository has branches which correspond to each of the videos in the course.
>
> **[0:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=24)** You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=31)** For example, the branch titled 01_03b, would show you the code for chapter one and the third video.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=40)** Branch names with a B at the end indicate that they contain code as it is at the beginning of the video, branch names ending with E contain its state at the end of the video.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=51)** You can also download the code to work along with me.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=54)** If you're a Git user, you can clone the repository by clicking on the Code button and then click on the clipboard icon to copy the URL.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=64)** Then you can type git clone and paste in the URL that you copied to your clipboard.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=70)** You will also notice this is the same URL as the GitHub repository, but with .git at the end.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=77)** Then you can navigate into the cloned project and check out the branch you want.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=81)** The branch 01_01b is the start of the course.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=87)** You don't need to know Git or have a GitHub account to follow along.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=91)** If you choose the branch that you want, then you can click the Code button and choose Download Zip, which will download a file containing the code for that branch only.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=104)** Once it downloads, you can decompress the file and open the project in a text editor to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), find (1), php (1)
> **Env Vars:** url (4)
> **Tools:** github (3)
> **UI Navigation:** switch to (1), click on (1), open the (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Code Keywords:** switch (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Files

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Filesystem basics
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=0)** - [Instructor] We'll begin learning to work with files and directories in PHP, by learning about some File system basics.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=7)** The File system is the part of any computer that keeps files and directories organized.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=11)** Usually, the File system is going to be on some type of storage media, like a hard drive, and every file or directory on the hard drive has a file path.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=19)** The file path describes how to find the file.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=21)** There are two types of file paths, absolute and relative.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=25)** An absolute path would start at the beginning of the hard drive and list all of the directories that we'd have to go through to locate the file or directory that we are interested in.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=33)** A relative path is similar, but instead of starting at the root of the hard drive, it's a path relative to another file.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=40)** All files and directories also have file ownership and permissions, which control access to those files.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=46)** If you have trouble reading or writing a file, it could be due to the file permissions.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=51)** Let's begin by looking at three PHP functions, file_exists, is_file, and is_dir.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=58)** All three of these functions return a Boolean value, either true or false.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=64)** I'm going to be working in my sites directory, in a directory called PHP_sandbox.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=70)** You can see I have some assets in there already that I'll be using later on.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=74)** Right now, I'm going to go into the Atom text editor where I have this open as a project, and I'm going to create a new file in the PHP_sandbox, I'm going to save that as file_basics.php.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=88)** Let's start by creating a file path inside of here.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=91)** I'll add some PHP tags, and then inside of those, I'll add a variable for file path, and then I'll set it equal to a string.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=103)** For me, the contents of that string is going to be /Users and then my username, Leukoagglutinin and then capital Sites and then PHP_sandbox and then file_basics.php.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=119)** I'll put a semicolon at the end.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=121)** Your path will certainly be different than mine.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=124)** I can also click with the command key on the top of the file here and see a list of the path to get to this file.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=131)** You can see, here is the hard drive and then I've got my Users, KevinsKoglund, Sites, php_sandbox, all the way until I get to that file.
>
> **[2:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=138)** And I can do the same thing over here in the regular File system as well.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=142)** And that'll help you know where the path to this file is.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=145)** This is an example of an absolute path because the path to the file, starts at the root of the hard drive.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=151)** Once you have your path, let's try using the file exists function with it, echo, and then we'll use file_exists on that string filepath.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=163)** And, that's going to return true or false.
>
> **[2:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=165)** So I also want to use it as part of a ternary operator.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=169)** I'll use exists or none.
>
> **[2:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=172)** The ternary operator is like a one-line if/else, statement.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=175)** If this first part returns true, then it will return this value here, exists.
>
> **[3:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=181)** If it's not true, then it will return the second value, none.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=184)** And, let's also add another line here that will just echo back a br tag so the HTML will look nice.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=191)** All right, let's test this first example out in Firefox.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=194)** I'll come to Firefox.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=196)** And for me the path to this is going to be, local host and then the tilde Kevin Skogland and then PHP underscore sandbox file basics dot PHP.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=211)** For you that URL may be different.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=213)** My web server is configured to serve PHP files out of this directory.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=218)** You can see that it returned exists, which means that file exists returned true.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=223)** We can try it again with something that we know doesn't exist like file basics two dot PHP.
>
> **[3:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=229)** We'll save the file, come back over here and reload it and you'll see that it says none.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=233)** The file doesn't exist.
>
> **[3:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=236)** If you had trouble getting it to exist, then check your file path until you get it right.
>
> **[4:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=240)** So file exists is able to take any string and check the File system to tell us if there's a file at that location.
>
> **[4:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=246)** I want to be sure to point out, that this string here describes a path on the hard drive and it's not the same as the URL that's used over here in Firefox, even though there are some similarities.
>
> **[4:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=259)** The file exists function works with directories too.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=262)** I'll copy this and paste it here, and let's add up here below file path something called dir path.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=271)** And dir path is going to be equal to the exact same string that we had here, but let's take away the file name.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=280)** So now we're just referring to the directory.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=283)** And so then we can ask it does the directory path exist, dir path.
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=288)** Come back over here and reload the file and you'll see, yes, it does exist.
>
> **[4:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=293)** We can also use the other two methods to test whether something is a file or a directory.
>
> **[4:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=298)** I'll just copy these two here and paste them in.
>
> **[5:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=301)** And now instead of file exists, let's say is_file.
>
> **[5:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=304)** So again, the return true or false, depending on whether it is a file.
>
> **[5:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=308)** This one will pass in file path.
>
> **[5:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=310)** This one will get the directory path.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=312)** We'll just change this to file or not file, and file or not file.
>
> **[5:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=321)** And we can do the same thing, I'll just copy these again and paste them, and we can check with is_dir, to find out if it's a directory or not.
>
> **[5:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=330)** Again I have file path here and dir path here, but this time we'll say this is a dir or not dir.
>
> **[5:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=338)** Dir is very commonly used for short for directory.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=342)** We'll save it.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=342)** Now I'll come back over to Firefox and reload it, and you'll see that tells us that the file path is a file but the directory path is not a file.
>
> **[5:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=350)** The file is not a directory, but the directory path is a directory.
>
> **[5:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=354)** Just like we'd expect.
>
> **[5:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=356)** Now you know how to use an absolute file path, and how to get a PHP to tell you, if it exists in the File system and whether it's a file or directory.

> [!info]- Semantic Content
>
> **CLI Commands:** php (10), find (2)
> **Code Keywords:** let (8), function (2), else, (1), pass (1)
> **Env Vars:** php (8), url (2), html (1)
> **Code Identifiers:** file_exists (2), is_file (2), is_dir (2), file_basics (2), php_sandbox (1)
> **Definitions:** is a  (5), is an  (1), means that (1), short for (1)
> **Tools:** firefox (4), atom (1)
> **File Paths:** file_basics.php (2)
> **Analogies:** just like (1)

#### Relative paths and magic constants
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=0)** - [Instructor] In the previous movie, we worked with absolute file paths.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=4)** Now let's take a look at relative paths and something called magic constants.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=9)** PHP defines a few values for us, and we call them magic constants, because they're automatically set.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=16)** We're going to look at two of them.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=17)** The first is __FILE__.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=19)** It may be hard to see, but before and after the word FILE in all caps are two underscores.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=25)** It is _, _, FILE, _, _.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=29)** The underscores are a tip that it's one of the magic constants.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=33)** There are several others in PHP, but __FILE__ and __DIR__ are the most useful ones.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=39)** PHP sets the file magic constant to the absolute path of the current PHP script that's being run.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=47)** PHP sets the __DIR__ magic constant to the absolute path of the directory of the current PHP script being run.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=54)** You can also determine the same value for yourself by using the dirname function on the __FILE__ magic constant.
>
> **[1:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=61)** Dirname returns the parent directory of any file or directory.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=65)** All of these will return strings which contain absolute paths.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=70)** Then we can use relative paths to locate other files based on that location.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=75)** There are a couple of Unix conventions that are useful for working with relative paths.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=79)** The first is a single period which represents the current directory.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=84)** Even more useful, a double period represents the parent directory.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=91)** This is a Unix console and you can see what a typical file list inside a directory looks like.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=97)** You see the single period here, that's a reference to the current directory, and the .. is a reference to the parent directory.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=105)** And then I have the files which are inside that directory.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=109)** Remember, a path is just a string.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=112)** If we append a string onto the end of a directory path, then we'll have a new string that's a path to a file in that directory.
>
> **[2:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=120)** Or, we could use these Unix conventions and define a relative path.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=125)** This string says to go to the parent directory to find file.txt.
>
> **[2:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=129)** You can also use the PHP dirname function to find out the name of that directory, but this can be faster to write.
>
> **[2:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=138)** Let's try this in PHP.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=140)** Let's make a new file in our project, and we're going to save it as file_relative.php.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=149)** And let's put our PHP tags in there.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=153)** And then inside there, let's put echo, and let's use those magic constants, __FILE__, and then I'll append just the string with a br tag, just so we get a nice line return in our HTML.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=168)** And then I'll copy that and paste it, and I'll just change that to use __DIR__ for the directory.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=175)** Let's take a look at these in Firefox.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=177)** We'll open up Firefox, and I'll change this from file_basics to file_relative.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=185)** You can see it returned an absolute path to the current running file and to its directory.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=190)** We already know how to use file_exists.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=192)** Let's try it here.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=193)** Let's add another line here, and we'll use echo file_exists, and let's put in that __FILE__, and question mark, we're going to use the ternary operator again with exists and colon none and then a semi-colon at the end, and we'll echo back a br tag just to make it look nice.
>
> **[3:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=217)** Let's also do another one where we set the file path to be equal to the directory string, and then we'll append onto it /file_basics.php, and then we can do the same code just to see if it exists.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=235)** But of course we're going to use $filepath instead of the file.
>
> **[4:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=240)** So now it's a relative path from the current directory to file_basics.php.
>
> **[4:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=245)** Notice that I put a forward slash in front of the file name.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=249)** If you look back at the string over here for the directory, you'll see that it does not end in a slash separator.
>
> **[4:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=254)** So I need to be sure to add it.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=256)** All right, so let's save that file.
>
> **[4:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=257)** Let's go to Firefox and let's try it out.
>
> **[4:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=260)** You can see that it tells me that both of these files exist.
>
> **[4:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=264)** Often, when I'm working in PHP, I define a PHP constant of my own, which is a path to the root of the project.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=271)** And then I can use relative paths from that anchor.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=275)** You can define that constant by writing out an absolute path or determine it using the __FILE__ and __DIR__ magic constants that we just learned.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=283)** Relative paths and magic constants are going to be useful for making your PHP code portable, whether it's to other directories or to other file systems.

> [!info]- Semantic Content
>
> **CLI Commands:** php (15), find (2), make (2)
> **Code Keywords:** let (14), function (2)
> **Env Vars:** php (12), file (2), html (1)
> **Code Identifiers:** file_basics (3), file_relative (2), file_exists (2)
> **File Paths:** file_basics.php (2), file.txt (1), file_relative.php (1)
> **Definitions:** is a  (4)
> **Tools:** firefox (3)
> **UI Navigation:** go to (2)

#### Accessing files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=0)** - [Instructor] Now that we know how to construct file paths, we're ready to learn how to access files.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=5)** In PHP, you're most often going to do that with the fopen function.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=10)** Fopen opens a file so that you can work with it.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=14)** It doesn't matter if you plan on reading from it or writing to it, you first have to open it.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=19)** The fopen function returns a file handle.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=22)** This is a reference to the open file that we can then use to read from it, to write to it and to close it when we're done.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=29)** If fopen fails to open the file, it'll return false.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=33)** Notice that fopen takes two arguments.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=35)** The first is the path to the file that we want to open.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=38)** The second is the file access mode.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=41)** Let's talk about what the options are for the mode.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=44)** The mode is a short string, which is an abbreviation for the way that we want to access the file.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=51)** If we use R, PHP will open the file in read mode.
>
> **[0:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=55)** It will allow us to read from the file starting at the beginning and of course to read the file, it must also exist.
>
> **[1:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=61)** In read mode, we won't be able to edit the file.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=64)** If we use W, PHP will open the file in write mode.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=69)** Write mode will truncate the file and clear all its data if it already exists and then set us up to write new data at the start of the file.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=78)** We can't read data from the file while in write mode, only add new data.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=83)** If we use A, PHP will open the file in append mode.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=87)** As the name suggests, it doesn't clear out existing data but sets us up to add new data starting at the end of the file.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=94)** Each one of these modes has a variant with a plus sign after it.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=98)** PHP will open the file in the same way but not restrict reading and writing.
>
> **[1:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=102)** You can do both.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=104)** It can be confusing for beginners to know which one of these you want to use.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=108)** So let me give you some tips.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=110)** Use W whenever you're starting a brand new file.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=113)** Remember that on an existing file, this would clear all data but it's ideal for writing new data.
>
> **[2:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=120)** Use R+ anytime you want to both read and write to an existing file.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=125)** Use R if you want read-only access to a file and use A if you're just adding new data to the end of a file.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=132)** These four will handle most cases.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=135)** Let's try it out.
>
> **[2:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=138)** I'm going to start by creating a new file in our project.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=141)** I'm going to save it as file_access.php and inside there, we'll start with our PHP tags and then I'll also define a file path which will be __dir and then append to that the string assets forward slash lorem ipsum dot TXT and the semi-colon at the end.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=169)** We can see that file over here.
>
> **[2:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=171)** It's included in the exercise files but you can use any text file in its place.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=175)** Let's try opening up the file at that path.
>
> **[2:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=178)** We'll start with read mode because it's unlikely to have permissions problems which we'll talk about soon.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=184)** We know that we'll use the fopen function and we know that that takes two arguments.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=189)** The first is the file path and the second is the mode and we're going to use the read mode.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=195)** We also know that this returns a file handle.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=199)** I usually call it dollar sign file when I'm working but I'm going to call it handle just to make it really clear.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=207)** Then once we have the handle we can check to see if it exists.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=211)** Remember it returns false if it doesn't exist.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=213)** So if there's a handle, then else something else.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=220)** So if we have a handle, let's echo back success and let's put a semi-colon at the end and then down here let's echo could not open file and a semi colon at the end of that.
>
> **[3:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=236)** Now I'm going to add one more part after I opened the file and then I'm going to do whatever reading and writing I want to do here.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=244)** Then at the very end, once I'm done with everything I'm going to add fclose and pass in that handle.
>
> **[4:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=252)** The file handle is a reference to the open file and we'll use it anytime we want to refer to that file.
>
> **[4:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=259)** PHP would close all open files at the end of the execution of the script but it's a good practice to close files when you're done with them.
>
> **[4:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=267)** For one thing, it prevents writing to the file accidentally somewhere else in your code.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=271)** Let's try this out in Firefox.
>
> **[4:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=273)** Save it.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=274)** I'll open up Firefox and this is going to be file access dot PHP.
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=281)** You'll see it tells me success.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=283)** PHP was able to find a file at the file path open it up in read mode, get back a file handle, output the message and then close the file.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=294)** The procedure that we just did is the basics for accessing any file in PHP.
>
> **[4:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=298)** Of course, it'll be a lot more exciting once we know how to read and write to that file.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=302)** Let's work on that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3), else. (1), pass (1)
> **CLI Commands:** php (11), make (1), find (1)
> **Env Vars:** php (10), txt (1)
> **UI Navigation:** open the (5)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** firefox (2)
> **File Paths:** file_access.php (1)
> **Code Identifiers:** file_access (1)

#### Reading from files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=0)** - [Instructor] Now that we know how to open files, let's learn how to read data from them.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=4)** There are three techniques for reading files that I want to show you.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=7)** This movie is going to cover the first two.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=10)** The first we'll look at is PHP's fread function.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=15)** Fread takes two arguments, the handle of an open file and the number of bytes we want to read.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=21)** In most character sets, one byte is equal to one character.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=25)** So you would read the first 20 bytes to get the first 20 characters of the file.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=30)** The second technique for reading a file is the PHP function file_get_contents.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=34)** It reads an entire file all at once.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=38)** Notice that unlike fread, it takes a file path as an argument instead of a file handle.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=43)** It's like fopen and that's because file_get_contents is a shortcut for opening a file, reading the entire contents and then closing it.
>
> **[0:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=52)** Let's try them out.
>
> **[0:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=55)** Let's begin by doing a select all and copy of everything that's in file_access.php.
>
> **[1:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=61)** Then let's open a new file, paste that in and let's save it as file_read.php.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=69)** We already have the basics of opening up the file, we're using fopen and if we get back a file handle instead of just echoing success what we want to do is read data from the file.
>
> **[1:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=80)** So I'm going to remove this out of here and instead I'll use fread and then we know we want to pass in that file handle and then tell it how many bytes we want to read.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=92)** I'm going to read 20 bytes and that is the same as 20 characters, bytes/characters.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=100)** Now this will read them but then what do we want to do with them?
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=103)** We need to catch them in a variable.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=106)** I'll have a variable here called data.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=108)** So whatever it reads will be assigned to this variable and then down here, I can just echo back $data and it will output whatever it read from that file.
>
> **[1:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=118)** Let's save it and try it in Firefox.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=121)** Instead of file access I'm now going to go to file_read.php and you can see it returned the first 20 characters out of that lorem ipsum file.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=131)** Typically, you're going to read characters if you're looking for something.
>
> **[2:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=134)** For example, you might look through the file examining its contents for a particular phrase, or for lines that begin with certain characters.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=142)** If you did want to read the whole file then you could use another PHP function called filesize to find out how many bytes there are and then read them all.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=152)** For example, we could have bytes equal to filesize and then we'll pass in that same file path.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=160)** This will tell us the number of bytes in the file at that file path.
>
> **[2:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=166)** Once I have this number here, I can take it and just drop it right in here.
>
> **[2:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=172)** Save the file.
>
> **[2:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=173)** When I come back over to Firefox and reload it, you'll see that it returns the entire file.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=179)** You will notice that there are no line returns in this output.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=182)** You can view source on the page and you'll see that there are line returns there but HTML is not respecting them.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=191)** PHP has a handy function that can help us.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=194)** It's called nl2br and we can pass in any string to it and it'll convert any new lines that are in that string into br tags which HTML will respect.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=207)** We'll save it and now when we reload the HTML page, we get the line returns that we would expect.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=213)** Now let's try the second way of reading files using the shortcut file_get_contents.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=218)** I'll comment out this echo line right here for now so that we don't see the output.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=223)** It will still read the file but the output won't show that lorem ipsum text.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=227)** So now for the shorter version, we'll set the variable data equal to file_get_contents.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=235)** We'll pass it in a file path, the same one as before and then we'll simply call echo nl2br on that data.
>
> **[4:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=246)** We'll save it, come back over here and reload the page and you'll see me get the exact same thing.
>
> **[4:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=251)** It's much easier but it won't always fit your purpose.
>
> **[4:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=255)** For example the file might be too large to read all at once or you may want to read parts of the file and do additional processing in PHP.
>
> **[4:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=263)** It's important for you to know how to do both.
>
> **[4:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=266)** So to recap, we learned how to use the fread function to read a number of bytes from the file.
>
> **[4:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=273)** We know how to use the filesize function to find out the number of bytes in the file.
>
> **[4:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=278)** Nl2br was a handy function for converting any new line into a HTML br tag and file_get_contents is a handy shortcut that will open a file, read all of its contents and close the file all at once.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), pass (4)
> **CLI Commands:** php (8), find (2)
> **Env Vars:** php (5), html (4)
> **Code Identifiers:** file_get_contents (5), file_read (2), file_access (1)
> **Analogies:** for example (3), it's like (1)
> **File Paths:** file_read.php (2), file_access.php (1)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)

#### Reading line by line
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=0)** - [Instructor] We know how to read characters and how to read an entire file.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=4)** Often it's useful to read a file one line at a time.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=8)** The PHP function fgets returns the next full line from a file.
>
> **[0:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=13)** That's one line, all of the texts up until the next line return.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=18)** It's useful when we want to read a file line by line.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=21)** Most often you would use it inside a loop.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=23)** It keeps track of which line is the next line using something called a file pointer which we'll discuss a little later.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=30)** A classic use would be to read a CSV file where each row contains comma separated values.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=36)** And then the PHP code can work with each line one at a time.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=40)** Let's try it.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=43)** To begin let's switch to fileaccess.php and select all and copy that code again.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=49)** And then let's open a new file which we will save as file_lines.php and then I'll paste that code in there.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=58)** I'll also just move this after file read.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=62)** Instead of working with assetsloremipsum.txt, let's change this to be uspresidents.csv.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=69)** You'll see that that CSV file is over here in the assets directory.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=74)** We're going to open up that file just like we did before but this time, instead of reading just a few bites from that file, we're instead going to use fgets and pass in that open file handle and it will then return back to us the next line.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=92)** Of course, we want to capture that.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=93)** So let's put that inside data.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=95)** And then down here, we'll put back in our code that uses nl2br on the data as it outputs it.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=104)** So let's save it.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=106)** Let's go to Firefox and let's try it out.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=108)** Instead of file read, I'm going to use file lines.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=113)** And you see it gives me the first line of that CSV file.
>
> **[1:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=116)** So I want to take that and copy it and I'll paste it and I'll just append onto it with the .equals.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=124)** Now we come back.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=125)** You'll see I get the second line and then let's try it again.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=128)** I'll just copy that and paste it.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=130)** Save it, reload the page.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=132)** And you'll see, I get the third line of the file.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=135)** You can see that it kept track of which line it read each time fgets was called.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=140)** The first call returned the first line, the second call returned the second line.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=144)** You can put this inside of a loop in order to get all of the lines.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=148)** Let's try adding a variable here for data.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=152)** It's going to start out as an empty string.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=154)** And then every time we're just going to append onto that string until we have all of the lines.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=159)** So we need a loop to do that.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=160)** I'm going to use a while loop.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=164)** I'll move this inside of there.
>
> **[2:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=166)** Now, what is my condition on my while loop?
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=170)** A PHP function called feof will return true or false if we're at the end of a file.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=177)** So it's going to be F as in F open F read F close and then EOF is short for end of file.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=186)** And we're going to pass in the open file handle and they'll tell us whether or not we're at the end of the file, true or false.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=192)** So it will return true, if we're at the end of the file that's not what we want in our loop.
>
> **[3:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=197)** We want to know when we're not at the end of the file.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=199)** So I'll put an exclamation point in front to negate it.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=203)** So while not at the end of the file, keep looping.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=207)** And every time you loop through, it's going to append another line onto it.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=211)** Let's save it and try it out.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=213)** Come over here and reload the page.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=215)** You can see now it reads every line of the file.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=219)** Now, this may seem very similar to what we were doing in the last movie, let me demonstrate why it's a little different.
>
> **[3:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=224)** It's because we can do additional processing in here.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=227)** We can do appending like we are now, we can examine it, we can parse it, et cetera.
>
> **[3:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=234)** So as an example, instead of just appending this onto data, let's instead change this so that we're getting back the row and then let's take that row and we'll create an array.
>
> **[4:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=248)** We'll use the PHP explode function which takes its first argument, the thing that we want to delimit it on which is the comma in this case, and we'll take it a row and they'll turn each one of those elements into an array.
>
> **[4:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=261)** And then instead of appending it to anything, let's just echo back dollar sign array.
>
> **[4:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=268)** We'll take the first element of the array.
>
> **[4:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=270)** We come over here and take a look.
>
> **[4:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=272)** It's going to make an array for us out of this.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=275)** This is going to be the zero element.
>
> **[4:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=276)** This'll be the first element.
>
> **[4:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=278)** This is the second and so on.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=280)** So here's the first element of the array, the president's first name.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=284)** And then I'll append a BR tag onto the end of that.
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=288)** Let's save it and let's come over and reload the page.
>
> **[4:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=291)** And you can see why it's useful, right?
>
> **[4:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=292)** We went through and we grabbed every line.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=294)** From that line we extracted just the information that we were interested in and then we did something with it.
>
> **[5:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=300)** In this case, we just displayed it to the screen but you could easily use it to do something else.
>
> **[5:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=305)** Reading files line by line is a useful skill to have in your toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (3), pass (2), case, (2), return. (1)
> **Env Vars:** php (4), csv (3), eof (1)
> **CLI Commands:** php (6), make (1)
> **File Paths:** fileaccess.php (1), file_lines.php (1), assetsloremipsum.txt (1), uspresidents.csv (1)
> **UI Navigation:** switch to (1), go to (1)
> **Definitions:** short for (1), is a  (1)
> **Code Identifiers:** file_lines (1)
> **Cross-References:** in the last (1)

#### File permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=0)** - [Instructor] Before we continue learning about how to work with files in PHP, we need to pause for a moment and learn a bit about file permissions.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=8)** Frankly, file permissions can be a little bit of a hassle, but it's important to understand them so that they don't get in our way.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=15)** Files and directories belong to a particular user, and the web server is often a different user than the user that owns a file or directory.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=25)** Permissions on files and directories determine who can have access to them.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=30)** You cannot read to a file without having file permissions and you also cannot create or delete a file without directory permissions.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=38)** So if the permissions aren't set right, they can prevent us from reading or writing a file using PHP.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=45)** Further complicating matters, setting permissions varies by operating system.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=50)** If you're using Windows via the graphic user interface, you can go to a file, choose Properties, choose the Security tab, and click Edit to change the permissions.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=60)** On macOS, in the graphic user interface, you can select a file or directory, choose Get Info, and then go down to the Sharing and Permission section to set the permissions.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=70)** Or on Unix, which includes Linux, macOS from the command line, and Windows Subsystem Linux, we can edit permissions from the command line using a command called chmod, short for change the mode of the file.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=85)** Unix file permissions are written as nine characters, rwx, rwx, rwx.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=92)** Any of those nine characters can be a dash instead if the permission is not granted.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=97)** You should look at these nine characters in sets of three.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=100)** The first three are user permissions.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=103)** R is for reading permission, w is for the writing permission, and x is for the execute permission, which applies to executable files.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=112)** The second set are group permissions.
>
> **[1:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=114)** Users can be put into different groups and everyone in the group would have permission for the file.
>
> **[2:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=120)** The third set are permissions for other, or everyone else in the world.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=124)** There's a lot more to Unix permissions, but if you just learned this much, we'll be able to use the chmod command.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=131)** You would use the sudo command first because changing permissions is a privileged action.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=136)** Then chmod, c-h-m-o-d, then you can see I have ugo for user group other, and then an equal sign, and then rwx for read, write, and execute.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=148)** This would grant read, write, and execute permissions to the user, the group, and other.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=155)** You can drop any of those letters out.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=157)** If you only want to set user permissions, you would leave out the g and the o.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=160)** If you only want to allow the write permission, you can leave out the r and the x, and so on.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=167)** Just to give you a feel for it, if I click on my php_sandbox directory, if I select it and I go to the File menu, and I go down to choose Get Info, there's a section on sharing and permissions.
>
> **[3:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=181)** You can see that I own the file, and I have read and write permission, and you can see that the staff group and everyone else has read-only permissions.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=190)** I'm not going to edit the permissions here.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=191)** Instead, let's go to the Unix command line.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=194)** From my user directory, I'm going to go into my Sites directory and I'll use ls -la to list the contents of that directory.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=203)** You can see here's my php_sandbox, and you can see its permissions, read-write-execute, read-write-execute, read-write-execute.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=212)** It's okay if yours are different.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=214)** Let's try ls -la and then php_sandbox.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=219)** Now I'm looking at the contents inside the php_sandbox directory.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=223)** Here, you can see that my user has read and write permission, but not execute, and the group and other have read-only permissions.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=232)** The x permission doesn't matter too much unless the file's an executable file.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=237)** Let's try using that chmod command.
>
> **[3:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=239)** I'll use sudo first, then a space then chmod.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=244)** I'm going to set ugo equal to rwx and then php_sandbox.
>
> **[4:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=252)** Remember, I'm in my Site's directory currently, so here's the php_sandbox.
>
> **[4:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=257)** I'm going to hit return.
>
> **[4:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=258)** It's going to ask me for a password.
>
> **[4:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=260)** That's the password you use to log in and to install new software.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=265)** I'll type mine in, and now I'll hit the up arrow to ls -la, and you'll see that php_sandbox now has all those permissions set.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=274)** Those happened to be the permissions it already had, but we can change it to something else if you want to try that.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=279)** But notice if I do ls -la php_sandbox, those did not change.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=286)** I only told it to change the permissions for the upper directory.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=290)** We can use the same command, but go back and insert a -R for recursive, and that will change all the files and directories inside recursively.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=302)** It doesn't ask me for a password again since I entered it recently.
>
> **[5:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=306)** I'll hit the up arrow, and now you can see all of those files have also been set to have all permissions for user, group, and other.
>
> **[5:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=314)** We'll talk more about file permissions later on.
>
> **[5:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=316)** For now, I wanted to give you tools so you can make sure you have read and write access to the files so we can continue learning.
>
> **[5:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=324)** If you find that you're unable to read a file or unable to write to a file, check its file permissions and try changing them to something that will allow you to read and write.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (5), ls (4), php (2), sudo (2), make (1)
> **Code Identifiers:** php_sandbox (8), macos (2)
> **Code Keywords:** let (3), continue (2), interface (2), delete (1), return. (1)
> **UI Navigation:** go to (3), click on (1)
> **Tools:** command line (3)
> **Env Vars:** php (2)
> **Definitions:** short for (1), is a  (1)
> **Prerequisites:** install (1), make sure you have (1)

#### Writing to files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=0)** - [Instructor] In this movie we'll learn how to write data to files using PHP.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=4)** We will learn two techniques.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=7)** The first, is to use the PHP function fwrite.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=10)** We learned fread earlier, and this is its counterpart.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=14)** The first argument is a handle for an open file, we must have a file open for writing first.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=20)** The second argument is the data that we want to write.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=23)** It will add that string to the open file, and return the number of bytes that were written, or false if there was an error.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=30)** You can capture that return value in a variable, but most of the time you don't need to.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=35)** If you call fwrite more than once, it adds the new data after the previously written data.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=41)** The second technique is to use the function, file_put_contents.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=46)** It's similar to file_get_contents that we saw earlier.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=50)** It's also a shortcut which opens a file, writes the data and closes the file all in one step.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=57)** It's useful if you just want to write data to a file all at once, and then be done.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=62)** Note that it will overwrite an existing file.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=65)** There's an option that you can use to upend instead but I don't recommend it.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=69)** I recommend using Fopen with the A mode to append data.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=73)** Let's try them out.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=76)** Let's make a new file on our project and we're going to save it as file_write.PHP.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=83)** And let's copy the code that's inside file access.PHP as a starting point.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=89)** Over and paste that in here.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=91)** Let's change our file path, I don't want to write to the lorem ipsum file, remember that when we use write mode it will delete all data in an existing file.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=101)** So instead I will create a new file called, sample file.TXT.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=109)** That's the file that doesn't exist yet, but write will create it.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=113)** The first step to writing a file is to open the file.
>
> **[1:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=116)** And I'm already doing that here with Fopen, but instead of R for read mode, I'm going to use W for write mode.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=126)** And I'll make a note here, that that will overwrite any the existing data.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=130)** We can also use A for append mode to write to the end of a file.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=135)** If the file opens and we have a file handle, then right here, we can call Fwrite, and then we'll pass in the file handle, and then the data that we want to write as the second argument, I'll put in one, two, three, four, five, six, seven, eight, nine, zero.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=156)** Let's save the file and let's open up Firefox.
>
> **[2:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=161)** I'll change this instead of file lines that PHP is going to be file write.PHP.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=168)** It succeeded.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=169)** It did not return any output to the browser because we didn't ask it to.
>
> **[2:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=172)** We only told it to write data to the file.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=175)** Over here, you can see that it did add the file, sample file.TXT.
>
> **[3:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=181)** If it failed for you, then check the permissions on the PHP sandbox directory.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=185)** Like we discussed in the last movie to make sure that PHP can create new files.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=190)** If we open that file, you can see that it contains the data that we asked it to write.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=196)** Let's close it again.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=198)** And let's add another call to fwrite, I'll put this one, let's put it right before it so we can see the difference fwrite, and we'll do the handle again, this time let's write A, B, C, D, E, F.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=212)** So now I have a file that's open, I'm going to write something to it, then write something else to it, and then close the file.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=219)** We'll save it let's come back over here, we'll reload our page, again we don't see any output.
>
> **[3:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=225)** If we come look inside sample file.TXT, you'll see that it wrote the data that we asked it to.
>
> **[3:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=230)** Notice that it overwrote the previous data.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=233)** The W mode we'll do that.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=235)** We could use the A mode if we wanted to upend instead.
>
> **[3:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=239)** Also notice that PHP did not add any line returns.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=243)** We'll discuss how to add those in the next movie.
>
> **[4:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=246)** The other technique for writing is file_put_contents.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=249)** Let's copy this file path here, and let's make a new file, we're going to call this one sample file2.TXT.
>
> **[4:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=258)** And let's also create a variable called data, and let's assign some data to it.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=262)** I'll just say a page of data.
>
> **[4:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=266)** We can now open the file, write the data, and close the file in one step by using file_put_contents and then passing in that file path, and the data that we wanted to write.
>
> **[4:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=278)** It's that easy.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=280)** Let's save it. I'll reload the page in Firefox.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=284)** We'll see that now we have a second file here as well, sample file2.TXT.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=290)** Sometimes you will have all the data ready and you can write to it all at once.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=294)** Other times, you'll want to incrementally write data as you perform additional code processing or make database calls, it's useful to have both skills in your toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (2), delete (1), pass (1)
> **CLI Commands:** php (9), make (5)
> **Env Vars:** php (9), txt (5)
> **File Paths:** file.txt (3), file2.txt (2), file_write.php (1), access.php (1), write.php (1)
> **Code Identifiers:** file_put_contents (3), file_get_contents (1), file_write (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Tools:** firefox (2)
> **UI Navigation:** open the (2)

#### Writing line returns
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=0)** - [Instructor] We need to discuss how to write line returns to your files using PHP.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=4)** Different operating systems use different standards for line returns.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=8)** In Unix and MacOS, a line return is represented by a backslash and the letter N.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=14)** In PHP, you want to always use double quotes with it so that it has its special meaning as a line return.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=21)** In Windows however, it is \r\n, two special characters together.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=28)** This convention goes all the way back to the beginning of DOS and has caused a lot of headaches over the years.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=33)** Recently, it has begun to change a little.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=35)** Notepad now supports both and Windows can use Linux as a sub-system, which also uses \n.
>
> **[0:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=42)** So maybe it will change, but for now we need to be mindful of this difference.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=49)** Let's demonstrate line returns in the file_write.php page that we created in the last movie.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=54)** I'm going to start by just going right up here and making some notes that Unix/Mac new lines are \n
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=65)** and Windows new lines are \r\n, and also double quotes matter.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=78)** Now, for this data that we have here, instead of just being a page of data, now let's put in the appropriate line return for your system.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=85)** I'm working on a Mac.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=86)** So for me, that's going to be \n.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=89)** So I'll do \n and then let's do 111\n222\n333, we'll do a \n at the end of that.
>
> **[1:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=99)** Let's save the file and let's go over to Firefox.
>
> **[1:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=102)** I'm already on that file_write.php page from the last movie, so let's just reload that page.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=108)** And when I do, we come over here and look at sample_file2.txt, you'll see that it output the data and it just put it as all one line.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=117)** These aren't special characters.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=119)** They're not line returns like we'd expect.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=121)** What went wrong?
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=122)** Let's go back and look and remember double quotes matter.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=125)** You can see I had single quotes around it before.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=128)** Now let's go back, it'll overwrite that file, and we'll take a look again.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=135)** And this time you'll see we got the line returns that we expect.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=139)** So writing line returns is not difficult.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=141)** It's just a matter of taking the operating system compatibility into consideration and making sure that you use double quotes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), return. (1)
> **CLI Commands:** php (4)
> **File Paths:** file_write.php (2), sample_file2.txt (1)
> **Env Vars:** php (2), dos (1)
> **Code Identifiers:** file_write (2)
> **Cross-References:** in the last (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### Deleting files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=0)** - [Instructor] Now that we know how to create files, let's learn how to delete them.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=5)** Deleting files is easy as long as you keep three things in mind.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=8)** The first is that you cannot delete an open file.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=12)** The second is that you need write permission on the directory containing the file in order to delete it.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=18)** And the third thing to keep in mind is that the name of the PHP function for deleting a file is a little bit unusual.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=26)** It is unlink, it's not F delete or file delete or something else you might guess.
>
> **[0:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=32)** It can be a little bit hard to remember.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=34)** If you send a file path to unlink, it will try to delete the file and return true or false.
>
> **[0:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=42)** I'll create a new file in the PHP sandbox and I'll call it file_delete.php and I'll add some PHP tags
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=54)** and then inside, a file path.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=57)** filepath=__DIR__./delete_me.txt.
>
> **[1:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=67)** I'll go ahead and also use the file put contents that we just learned.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=71)** file_put_contents with the file path and let's put some text in there just says delete me.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=79)** So now we have a file with some contents in it.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=82)** Can also use echo file_exists on the file path to check and see whether it exists.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=89)** That'll return true or false.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=90)** If it's true, will echo back exists.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=93)** If it's false, then will echo back none.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=97)** And let's echo a br tag at the end just to make it look nice.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=103)** Okay, let's try that part out.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=105)** So let's go over here into Firefox and we're going to call this file delete and there it is.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=113)** File exists and you can see that it actually created the file for me right here, delete_me.txt.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=119)** So now that we have the file, let's try deleting it.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=122)** We can do that by just using unlink and then passing in the file path.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=128)** Any file path will do.
>
> **[2:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=129)** It'll go and delete that file and then let's check and see if it exists again.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=132)** We'll copy this, bring it down here and save it.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=136)** Let's go back and reload the page.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=140)** You can see that it has the file.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=142)** It exists and then it deletes it.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=145)** There's none there.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=146)** And sure enough, if we go over here and look, we see the file that we had created before is now gone.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=151)** Deleting files is easy as long as you remember to close the file, make sure you have right permissions and use the unlink function.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (9), let (8), function (2), this, (1)
> **CLI Commands:** php (4), make (2)
> **Code Identifiers:** delete_me (2), file_delete (1), file_put_contents (1), file_exists (1)
> **File Paths:** file_delete.php (1), __dir__./delete_me.txt (1), delete_me.txt (1)
> **Env Vars:** php (3)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)

#### Moving the file pointer
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=0)** - [Instructor] As we've been working, you may have noticed that PHP keeps track of our position inside an open file.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=6)** For example, when we used fget PHP kept track of which lines had already been returned.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=12)** When we wrote to a file more than once, PHP kept track of where we left off each time.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=18)** It does that using the file pointer.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=21)** The file pointer is similar to the cursor in a word processing application.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=26)** You can move the file pointer forward, and backwards through the characters in a file, and you can choose a position to start reading or writing from the file.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=35)** There's one important difference though, unlike the cursor in a word processing program, the file pointer overwrites text.
>
> **[0:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=42)** If you choose a position in the middle of a file and write 10 characters of text, PHP would replace the 10 characters that were there before.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=50)** It does not insert the new characters and shift the old ones over like a word processor does.
>
> **[0:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=56)** We're going to look at two PHP functions to help us manage the file pointer.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=60)** The first function is ftell.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=63)** Which takes the handle of an open file as an argument and returns the current position of the file pointer, also known as the offset.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=71)** The offset tells you how many bytes of characters from the beginning of the file until you get to the file pointer's current position.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=78)** The function fseek takes a file handle as the first argument and an integer for the offset as a second argument.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=85)** It moves the file pointer to the offset.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=88)** So ftell reports the offset, fseek changes the offset.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=93)** Let's see how they work.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=96)** Before we start writing any PHP, let's go over here to our files and let's just create a copy of our Shakespeare sonnet.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=104)** I'm just going to duplicate that file and put it in my PHP Sandbox.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=108)** And I'll rename it as just sonnet.txt.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=112)** Over here you can take a look at the file, you can see it has a short Shakespeare sonnet, shall I compare thee to a summer's day, thou art more lovely and more temperate, and so on.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=121)** We're going to use this file to learn about the file pointer.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=125)** Let's create a PHP file now, close that up, and I'll make a new file and save it as file_pointer.php.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=135)** Let's add some PHP tags.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=139)** And a file path to our new file that we just created.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=143)** It's in the current directory.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=146)** And from the current directory, I just need to add a forward slash and then sonnet.txt.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=155)** And we know that we're going to want to open this file.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=157)** So we'll do what we've done before with handle equals fopen, the file path.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=164)** And then for the mode, we want to use read and write mode.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=170)** Now there are a few options that allow us to read and write but the one I recommend is r+.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=176)** That's going to allow us to read, but also write, it doesn't truncate the file, it positions our file pointer at the beginning of the file.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=184)** So it's there ready for us to write.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=185)** So the offset will be zero at the beginning.
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=188)** Then after that, we can write our other code.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=190)** If we have a handle, then what do we want to do?
>
> **[3:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=197)** Let's start by using our ftell.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=199)** Ftell is going to take that file handle, and it will return back the offset which should be zero at the beginning.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=207)** Let's go ahead and put echo in front of that so we can see what that value is.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=211)** And let's also add a BR tag to the end just to keep it looking nice.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=215)** Now, after it reports back the initial position, let's do a read operation.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=220)** We can do that with fread.
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=222)** And I'll use the handle and let's read 26 characters.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=226)** Now, normally we'd catch that data after I read it to do something with it, but I'm not interested in that here.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=232)** So I'm just going to leave it out.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=233)** I'm not going to be doing anything with that data, I just want to perform a read operation.
>
> **[3:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=238)** Now let's go up here and copy this line, and then let's do a write operation.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=244)** So fwrite, again with the handle and this time let's write the word winter and then I'll paste the ftell in again.
>
> **[4:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=257)** And then let's end things with fclose on the handle.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=262)** Let me just double check my work real quick.
>
> **[4:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=264)** I've got all my semi-colons, it all looks good.
>
> **[4:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=267)** Let's save it and try it out.
>
> **[4:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=269)** I'll go into Firefox.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=271)** And this time it's going to be called file pointer.
>
> **[4:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=276)** So you see I get back three values, zero, 26 and 32.
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=281)** Let's move this over here so we can just see it next to what we're doing.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=284)** The first ftell is zero.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=286)** It starts out at the beginning of the file as we'd expect, the offset is zero.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=290)** Then we read 26 characters.
>
> **[4:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=292)** With the end of that read operation, we're now at an offset of 26.
>
> **[4:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=298)** When we perform a write operation, we're starting to write at that offset.
>
> **[5:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=303)** That's where the cursor is, is at that 26 offset.
>
> **[5:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=306)** Then it writes the word winter, and when it tells us the cursor position, it's now at 32.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=312)** Let's take a look at sonnet.txt and you will see you replaced the word summer with the word winter, it over wrote it.
>
> **[5:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=321)** This is the position that we moved it to, right?
>
> **[5:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=324)** We read this portion, the cursor was sitting right there.
>
> **[5:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=329)** Then we wrote this portion.
>
> **[5:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=331)** And so the cursor now is sitting right at that spot when we ended.
>
> **[5:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=334)** That is the offset 32.
>
> **[5:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=338)** Back in our PHP code, let's try using fseek.
>
> **[5:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=342)** So before we close the file, let's just add a line here.
>
> **[5:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=345)** And let's fseek, and we know we are currently at position 32.
>
> **[5:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=350)** Let's tell it to just jump the file to position 35.
>
> **[5:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=356)** And then from there, can have it tell the value again.
>
> **[5:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=359)** And I'm going to have it tell one more time but in between those I'm going to write one more thing.
>
> **[6:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=365)** Let me just go up here, I'll grab this line, it'll be a little faster than typing it.
>
> **[6:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=371)** But instead of writing the word winter, I'm going to write the word eve, E-V-E.
>
> **[6:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=376)** All right, let's save it.
>
> **[6:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=377)** Let's go back and reload the page.
>
> **[6:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=380)** You can see now it moved the pointer two more times, it jumped it to 35, then it wrote the word eve, and now my pointer is at 38.
>
> **[6:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=390)** If we go over here and take a look at the file, you can see that it now replaced day with the word eve.
>
> **[6:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=397)** Now I carefully picked edits that were the same size.
>
> **[6:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=400)** Summer and winter both have six characters, and day and eve both have three characters.
>
> **[6:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=405)** So it ended up working out.
>
> **[6:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=407)** If I had chosen, shall I compare thee to a winter's night, then it would not have worked out as well, I would have overwritten two extra characters.
>
> **[6:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=415)** I would have overwritten the question mark, and the line return that comes after it.
>
> **[6:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=419)** You may be wondering how you would insert or delete characters like you would with a word processor.
>
> **[7:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=425)** It turns out that's tricky to do.
>
> **[7:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=427)** Usually it's easier to read in all the data, make changes to it, and then replace the data in the file with the new version.
>
> **[7:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=435)** If you have a particularly large file, then you may need to make use of a temporary file to keep things organized.
>
> **[7:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=441)** Store some data in the temp file, make edits to a portion, store those edits, and then store the rest.
>
> **[7:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=447)** The main thing I want you to understand is that PHP makes use of the file pointer as it reads and writes data to files.
>
> **[7:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=454)** And you can too.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), function (2), delete (1)
> **CLI Commands:** php (12), make (4)
> **Env Vars:** php (11)
> **File Paths:** sonnet.txt (3), file_pointer.php (1)
> **Analogies:** for example (1), similar to (1)
> **Code Identifiers:** file_pointer (1)
> **Tools:** firefox (1)
> **Definitions:** known as (1)

#### Examining file details
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=0)** - [Instructor] In this movie, we'll learn what PHP can tell us about various details of files.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=6)** We've already seen a few PHP functions.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=9)** We learn about filesize, is_file, and is_dir.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=14)** To this we can add is_readable, is_writable, and is_executable.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=20)** Those take a file path as an argument.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=22)** They'd first make sure the file exists, and then they return true or false based on whether PHP has permission to read, write, or execute the file.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=31)** Before you try to write to a file, you can check to see if that's allowed.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=34)** And if not, you can handle it in your PHP code gracefully.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=38)** We can also examine file times using filemtime, filectime, and fileatime.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=45)** Mtime is the last modified time.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=47)** The last time that content was changed.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=50)** Ctime is the last change time which is the last time that content or metadata about the file was changed.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=58)** It is not created at time as some beginners often believe.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=63)** Atime is the last access time.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=65)** The last time there was any read or any change.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=69)** Each of these functions returns a unix timestamp.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=72)** Which is the number of seconds since January 1st, 1970.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=76)** We can use the timestamp as is for comparisons, or we can format it into a string that the user can understand.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=84)** The PHP function pathinfo is also handy.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=87)** It takes the file path and breaks it up into its parts.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=90)** It returns an array with four elements, dirname is the directory name, basename is the file name with its file extension attached.
>
> **[1:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=99)** And then it returns the filename and extension as separate items.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=104)** Or you can just call dirname directly, we've seen that before, or basename, both directly on a file path.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=111)** Let's give these functions a test drive.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=115)** Let's start by creating a new page and saving it as file_details.php.
>
> **[2:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=123)** And let's add our PHP tags.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=128)** Then let's add a file path.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=133)** We'll make that equal to the sonnet that we were just looking at in the last movie, where you can pick any file really.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=139)** Just want to have a file that we can look at, sonnet.txt.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=143)** And then let's do is_readable, is_writable, and is_executable.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=148)** We'll echo back is_readable and put in the file path.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=153)** That'll return true or false.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=156)** And then we'll use that as our condition in our if else statement here.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=160)** If it's true, we'll return back the string readable.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=164)** If not, we'll return back just no.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=168)** I'll save some typing by copying this and pasting it twice more.
>
> **[2:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=171)** And just changing this from readable to writeable, you can do it with the e or without it, works both ways.
>
> **[2:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=178)** I'll do writeable, and is_executable.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=185)** And over here executable.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=190)** Let's also just add another line below each one to echo back a br tag, just to keep them nice and tidy.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=199)** Another extra br tag at the end to separate it from the next thing we'll look at.
>
> **[3:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=204)** Let's try these out.
>
> **[3:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=205)** I'll go into Firefox, and we'll load up file_details.php.
>
> **[3:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=211)** And you see see it comes back and tells me the file is readable, writeable and executable.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=215)** You may have gotten different results, that's okay.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=218)** Next, let's do echo filemtime on the file path.
>
> **[3:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=225)** We'll also append a br tag onto the end of that.
>
> **[3:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=230)** Save it, come back over here and reload.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=233)** And you'll see that it returns the number of seconds since January 1st, 1970.
>
> **[3:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=238)** Now that's great for doing comparisons but we probably want to format it.
>
> **[4:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=242)** We can do that using echo strftime.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=249)** That's going to format the string.
>
> **[4:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=251)** For that, we'll use a string that is %m/%d/%Y %H:%M.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=265)** And that will give me a nicely formatted time.
>
> **[4:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=267)** So the second argument, I will now take this filemtime and the path, paste it in there.
>
> **[4:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=274)** And then let's also add this br tag at the end, and a semi-colon.
>
> **[4:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=280)** And let's copy that.
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=282)** And twice more, we'll do filemtime, ctime and atime.
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=288)** We'll see what each one of those look like.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=290)** Come back over here and reload the page.
>
> **[4:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=293)** And you'll see that it gives me the current times for all three of those, for the modified time, the changed time, and the access time.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=302)** Let's try pathinfo now.
>
> **[5:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=304)** Just grab this br tag, so we can separate it and we'll do path is going to be equal to pathinfo.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=312)** We want to have that path variable there to catch the array file path.
>
> **[5:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=317)** And then once we have those values in the array, let's take a look at what's in them.
>
> **[5:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=321)** So we'll do that with echo $path, and it's an associative array.
>
> **[5:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=326)** So we can call for them by name, dirname.
>
> **[5:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=329)** And let's append onto that, the br tag.
>
> **[5:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=334)** And I'll copy that.
>
> **[5:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=335)** And in addition to dirname, we'll look at basename, and filename, and extension.
>
> **[5:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=346)** There we go.
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=347)** And then let's just put a br tag here.
>
> **[5:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=351)** And one last time let's look at just still this one as a starting place.
>
> **[5:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=357)** Let's change this to instead be dirname.
>
> **[6:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=362)** We've already seen that before but let's go ahead and check it out, dirname on filepath, and basename on filepath.
>
> **[6:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=374)** All right, let's save it.
>
> **[6:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=375)** Go back over here and reload it.
>
> **[6:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=376)** And you can now see, these are the parts of what pathinfo gives me.
>
> **[6:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=381)** The first part, let me just move this over so you can see it.
>
> **[6:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=384)** Is the directory name, dirname.
>
> **[6:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=386)** Here's the base name.
>
> **[6:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=387)** I'm also getting those same values down here without going through pathinfo.
>
> **[6:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=391)** And then it also helpfully tells me what the file name and the extension are separately.
>
> **[6:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=395)** So if you're just interested in extracting the extension from the file, you can do that.
>
> **[6:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=400)** Or if you're just interested in getting the file name, you don't have to write some functions to do that yourself, PHP will do that for you.
>
> **[6:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=407)** These functions are good tools to have in your toolbox for working with files in PHP.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (1)
> **CLI Commands:** php (10), make (2)
> **Code Identifiers:** is_readable (3), is_executable (3), is_writable (2), file_details (2), is_file (1)
> **Env Vars:** php (8)
> **File Paths:** file_details.php (2), sonnet.txt (1)
> **Cross-References:** in the last (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a log file
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=0)** - [Instructor] It's time for a challenge assignment.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=7)** In this challenge, I want you to take everything we've learned about working with files and directories and PHP throughout this chapter and work to create a log file.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=16)** The idea is that in an application, you very often want to log some information to a log file.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=23)** And so we want to write a PHP function that will make that easy.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=26)** The function might be called something like log underscore action, and you can pass in information to it like the action or a message or both.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=33)** Then inside that function, everything we need to log to the log file would be included.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=38)** So all we have to do is call log action and we can log information to our log file.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=43)** The assignment is fairly open-ended in how you actually accomplish that but I will give you a couple of suggestions and reminders.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=50)** First, choose a file path for the log file.
>
> **[0:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=52)** Where is the log file going to be located?
>
> **[0:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=55)** You want to make sure that you're able to open the file and of course you'll want to handle any errors that might come up.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=60)** You'll want to append new entries to the end of the log file while maintaining the old entries.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=66)** So you don't want to accidentally overwrite the old entries, you want to make sure you're appending onto the end.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=72)** In the next movie, I'll show you the solution that I came up with.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=76)** For me, I'm going to do log entries that looks something like this where I have a date time stamp at the beginning and then a dash and then the action that I want to create, and the colon and some optional message that goes after that.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=88)** In this case log in colon jsmith logged in.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=93)** It may be helpful for that timestamp to use the string f time function in PHP.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=98)** It formats a Unix timestamp according to a format string.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=101)** Here I've got an example string that you can use.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=104)** The timestamp would be the second argument, if we leave it blank, then it defaults to the current time.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=110)** So just using this as is, we return a formatted version of the current time.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=117)** Spend some time working on this challenge assignment and then in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **CLI Commands:** php (3), make (3)
> **Code Keywords:** function (4), pass (1)
> **Env Vars:** php (3)
> **Cross-References:** in the next (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a log file
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=0)** - [Instructor] I hope that you were able to come up with a solution for this challenge assignment and that you were able to use PHP to write information to a log file.
>
> **[0:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=13)** In this movie, I'm going to show you the solution that I came up with.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=18)** I created a new PHP file which I called log_action.php which is going to both define the log action function and then I'm also going to use it down below.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=29)** In a real application, we could call this log_action from a number of different places but I just wanted to test it out.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=35)** Inside the log_action function, you can see that I'm setting the file path and I set it equal to the current directory where the log_action script is and appended that onto log.txt.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=46)** That's the file that doesn't exist over here yet but it will be in the same directory.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=50)** You could put it somewhere else.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=51)** It doesn't really matter.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=53)** Then you can see that I'm opening up the file using that file path and I'm using the a for append because I want to append onto the end.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=60)** If I'd use w it would have truncated the file, I would have lost all my old log entries.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=66)** That's definitely not what I want.
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=68)** I can also use r+ and that would allow me to read and write but the file pointer would be at the beginning of the file and I don't want that.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=75)** I want it to be at the end of the file and append gives me that.
>
> **[1:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=78)** Once I have the file handle I can check and make sure it's there.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=81)** And then I'm figuring out what that time string is.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=84)** I gave you that information inside the assignment.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=86)** So it's just giving me the current timestamp as a formatted string.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=90)** I can then use fwrite to write that then I'm going to write the dash then I'll write the action that I want whatever came in here as action.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=100)** I'm using ucwords to make it uppercase.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=104)** and then if there's a message, there may not be it's optional, but if there's a message, then I'm going to put a colon and a space followed by the message.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=113)** And then last of all, that line return you want to make sure you have a line return at the end so I'm using backslash n because I'm on a Mac and I've got it inside double quotes, that's important.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=122)** And then last of all I'll close that file.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=124)** That's it.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=125)** I open the file.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=126)** I write a log entry to it and I close it again.
>
> **[2:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=129)** Every time I call log_action it'll do that for me.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=132)** I'll save this.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=133)** Let's go into Firefox and try it out.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=136)** In Firefox, let's bring up log_action.php, it doesn't actually output anything here but we can see it did create our log.txt file and there's the information that's in it.
>
> **[2:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=150)** Let's go over here and let's reload the page again.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=152)** You can see that it appended on to the end.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=155)** So every time I call log_action, it opens up the file and it adds a new line to the end.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=162)** If you're interested in taking this exercise further, here's a bonus challenge you can try.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=167)** You can write PHP to read back the contents of the log file.
>
> **[2:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=172)** You can have a PHP page which displays the log file contents.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=176)** You can read it all at once but try reading it line by line because if you do, then you can try displaying only lines which contain certain texts.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=184)** For example, something like login.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=187)** The sky is the limit and what kind of features you can add to it.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=190)** My overall hope is that you're beginning to feel comfortable with the process of reading and writing files using PHP.

> [!info]- Semantic Content
>
> **CLI Commands:** php (7), make (3)
> **Code Keywords:** let (4), function (2), else. (1), this. (1), try. (1)
> **Code Identifiers:** log_action (7)
> **Env Vars:** php (5)
> **File Paths:** log_action.php (2), log.txt (2)
> **Tools:** firefox (2)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)


### 2. Working with Directories

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Directory basics
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn to work with directories in PHP, starting with the basics.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=7)** We've already learned several PHP functions which are related to directories.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=11)** In the last chapter, we saw dirname, which returns the parent directory of a file or directory, is_dir, which returns true if a path is the path to a directory, file_exists works on directories too, and then is_readable, is_writable, and is_executable can check the directory permissions.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=31)** In this movie, I want us to look at two more; getcwd, the cwd stands for the current working directory.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=39)** If you're a Unix user, you might recognize it as being similar to the pwd command, the path to the working directory, and then the function chdir, short for change directory.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=51)** This is similar to the CD command that Unix and Windows command line users use in order to change directories.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=58)** Let's see how we can use them.
>
> **[1:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=61)** In our PHP sandbox, let's create a new file and save it as dir_basics.php and we'll put in our PHP tags.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=75)** And inside here, let's just start by using that get_cwd command.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=81)** It takes no arguments and let's go ahead and put a br tag after it and echo the whole thing.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=90)** So we'll just echo that to the command line and see what it gives us.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=93)** I'll go into Firefox and try it out.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=96)** I'm inside my PHP sandbox and I'm going to be in dir_basics.php.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=104)** You can see that it returns my current working directory.
>
> **[1:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=108)** Yours may be different.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=109)** By default, when you run a PHP script, the current working directory is the parent directory of that PHP script.
>
> **[1:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=116)** It's the same thing as the magic constant underscore underscore dir underscore underscore.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=122)** You can specify files and directories relative to this directory or you can change into a different directory.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=128)** You don't need to change directories, but if you do, then the relative paths may become simpler and easier to manage.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=135)** It's really a question of coding style.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=137)** Let's try changing directories.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=139)** We'll come back over here and after we echo it, let's add in chdir, and then in parentheses, I'm going to say what directory I want to move into.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=149)** I could provide that in absolute path, a relative path.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=152)** In this case, I'll just use assets.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=154)** If we look over here, you'll see that's my assets directory, and I'm just going to move into that directory.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=159)** So that's relative to the current directory where I am now.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=163)** Let's copy this line up here so we can see where it moves us into.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=167)** We'll save and reload it in Firefox.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=170)** You'll see that now it tells me my current working directory is my assets directory, just like I'd expect.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=176)** Let's change directories again.
>
> **[2:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=178)** I'll just copy these two lines, and here, let's change it into dot dot.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=186)** So I'm saying relative to the current directory where I am, go up to the parent directory.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=191)** So I was in the assets directory.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=193)** This would take me up a directory.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=196)** We'll save it and reload it.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=198)** And sure enough, you'll see that's what it did, or let's try one more.
>
> **[3:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=202)** This time, let's tell it that we want to go from underscore underscore dir, and we'll go into the assets directory again, but we'll do it this way.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=213)** Save it and reload it and you can see it moved me into that directory.
>
> **[3:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=217)** Of course, whenever a PHP script ends, then there is no current working directory anymore.
>
> **[3:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=222)** A new PHP script will return to the default and not remember the old one.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=227)** We can reload this page to see that.
>
> **[3:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=229)** If I just reload it, you'll see I was in the assets directory, but back at the beginning, I'm back in the sandbox again.
>
> **[3:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=236)** Make sure you understand that once you change directories, that all relative file paths are based on the new location.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (1), default, (1), case, (1)
> **CLI Commands:** php (11), cd (1), make (1)
> **Env Vars:** php (9)
> **Code Identifiers:** dir_basics (2), is_dir (1), file_exists (1), is_readable (1), is_writable (1)
> **Tools:** command line (2), firefox (2)
> **Analogies:** similar to (2), just like (1)
> **File Paths:** dir_basics.php (2)
> **Definitions:** stands for (1), short for (1)

#### Creating and deleting directories
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=0)** - [Instructor] In this movie we'll learn how to use PHP to create and delete directories.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=5)** You can make a new directory with the PHP function, mkdir, short for make directory.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=12)** You can give the function argument which is an absolute path or a relative path.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=17)** If you just pass in a name, it would create a directory with that name in the current working directory.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=22)** It returns true or false and also gives a warning level error if the directory already exists.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=29)** You may want to use it with the file exists function.
>
> **[0:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=32)** If the directory doesn't exist, create it.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=34)** If it exists, do nothing.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=37)** The PHP function rmdir does the opposite.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=41)** It removes a directory.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=43)** It also takes a directory path and returns true or false.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=46)** PHP will not delete a directory if it's not empty or if it's open, which we'll learn how to do in the next movie.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=53)** For now, let's try these functions out.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=58)** Let's create a new file and save it as dir_create.php.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=64)** And I'll put my PHP tags inside of it and let's just put mkdir and then we'll just call this temp.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=74)** You can call it anything you want, but that's it.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=76)** That's all we're going to put inside there.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=77)** Let's save it and let's go over to Firefox and let's load it up.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=81)** So dir_create and it created the directory.
>
> **[1:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=87)** If we look over here, you'll see it created a directory called temp in the current working directory.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=93)** Of course, to create it, we have to have write permission on the parent directory.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=98)** So make sure you have that if you had a problem.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=100)** It's just like we had with files.
>
> **[1:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=102)** Let's go back into Firefox and let's run the same script again.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=106)** I have PHP configured to show warning errors and you can see that it gave me a warning that the directory already exists.
>
> **[1:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=113)** So let's go back here and improve this by just saying, if not file exists temp and we will make the directory then.
>
> **[2:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=127)** So only make the directory if it doesn't exist.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=130)** Let's save it.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=131)** We'll go back and reload the page.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=133)** You see, we don't get an error anymore because the file already exists.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=136)** Now let's try deleting it.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=137)** Let's go ahead and copy this code because we can use the same kind of brackets and say, if the file exists, then remove it.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=145)** That way we won't try to remove the file if it doesn't exist.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=149)** So if it exists, remove it.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=151)** Notice that I changed it to rmdir for removing it.
>
> **[2:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=155)** Let's save it.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=156)** We'll come back, run it.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=159)** And you'll see that now, the directory is gone.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=162)** If we run it again, it will both create it and delete it all in one step.
>
> **[2:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=166)** So it doesn't reappear.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=167)** The file doesn't exist, so it creates it.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=170)** Then it does exist, so it removes it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (4), delete (3), pass (1)
> **CLI Commands:** php (7), make (5), mkdir (2)
> **Env Vars:** php (6)
> **Warnings:** warning (3)
> **Code Identifiers:** dir_create (2)
> **Tools:** firefox (2)
> **Definitions:** short for (1), is an  (1)
> **File Paths:** dir_create.php (1)

#### Accessing directory contents
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to list the files and directories which are inside a directory so that we can work with them.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=7)** We'll be working with three PHP functions, opendir, readdir and closedir.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=14)** These are very similar to the PHP functions we use to work with files.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=18)** Opendir works a lot like fopen.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=21)** It opens up a directory at the given path and returns a directory handle which we can use to reference the directory.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=28)** Readdir works like fread and it reads information from the directory.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=34)** Closedir works like fclose and closes the open directory.
>
> **[0:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=38)** Let's try them out.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=41)** Let's start by creating a new file in our PHP sandbox and we'll save it as dir_access.php.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=49)** And let's copy everything that's inside file_access.php as a starting point because it's going to be very similar.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=57)** We'll jump over here, we'll paste in and I can close file access now.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=62)** Now, let's change this from file path to instead be dir path.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=66)** That's the path to our directory, and let's just use the current parent directory as our starting path.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=72)** Instead of having F come before the word open, now we have dir coming after the word open.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=77)** And then instead of file path, we're going to have dir path and we don't have any kind of mode here.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=83)** There's no access modes with opendir.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=85)** It does still return a handle or false if it fails.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=88)** So we still want to use this if to test whether we got a handle or not.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=92)** And then instead of fclose, we're going to be using closedir on that handle.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=98)** Let's save it and try this part out.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=101)** Go over to Firefox and let's do dir_access.php, and we get back success.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=111)** Let's add some code now to read entries from the open directory.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=115)** So, I'll remove these and in its place, let's put in readdir and dollar sign handle and let's go ahead and do echo on that.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=128)** And we'll put a br tag at the end.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=131)** Now what this will do is read one directory entry every time I call it.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=137)** So let's go ahead and call it a few different times.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=139)** I'll copy and paste it, so that I call it five times.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=143)** Let's save it and let's try it again.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=147)** You'll see that it returned five entries to us.
>
> **[2:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=150)** Notice that it includes an entry for dot, that's a representation for the current directory and dot dot, a representation of the parent directory.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=159)** Notice also, that the entries are not sorted alphabetically.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=164)** When working with directories, you can't assume that the contents will be in any order.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=168)** It gives them to us in the order that the file system has stored them and it doesn't bother to alphabetize them.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=175)** This is only some of the entries in this directory.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=177)** We may not always know how many entries there are.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=179)** So if we want to list them all, we should write a PHP loop that ends when there are no more.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=185)** One way you could do that is with a basic while loop.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=189)** Here, I'm reading an entry using readdir and assigning it to a variable, injury.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=195)** And that's also a condition to the loop.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=198)** As long as readdir returns a value, something which is not false, then the loop will execute.
>
> **[3:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=205)** But there is a problem with this.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=207)** If you run across a file or directory, whose name is the number zero, then it will evaluate to false in PHP and it would exit the loop.
>
> **[3:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=216)** And that's not what we want.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=218)** We can improve it by adding false, not equal, equal, and then putting the previous expression inside parentheses.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=226)** Now, it will only exit if it returns exactly false.
>
> **[3:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=231)** It's a minor point for a rare case, but it is a best practice.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=235)** So we want to follow it.
>
> **[3:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=238)** Let's add the loop to our PHP code.
>
> **[4:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=240)** I'll put it right up here.
>
> **[4:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=241)** We'll do a while loop and the condition inside it is going to be, if false is not exactly equal to, the injury equals readdir from the handle, then do the loop.
>
> **[4:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=261)** And inside the loop, what are we going to do?
>
> **[4:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=263)** Well, we know we want to do one of these, except that instead of this, we can replace it with the variable entry 'cause we now set that up above.
>
> **[4:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=271)** I'll remove these.
>
> **[4:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=273)** So now, as long as it keeps getting back some entry, as long as it's not actually false, it'll keep going through the whole list.
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=281)** Let's save this, go back to Firefox.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=284)** And we see all of the entries.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=286)** I'm just listing the files, but, of course, you could do something else with them.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=290)** You can copy them or examine them or open them for reading and writing.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=294)** You might put them into an array so that you can sort them.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=297)** If you decide to use an array, you might be better off using a shortcut.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=302)** PHP has a function called scandir, which takes a file path and returns an array of the directory entries.
>
> **[5:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=309)** It's a shortcut similar to file get contents.
>
> **[5:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=312)** It opens the directory, adds all of the entries into an array and closes the directory, all in one step.
>
> **[5:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=320)** Let's try it down here.
>
> **[5:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=322)** I'll just do echo and the br tag to separate it, and then set an array equal to scandir on the dir path.
>
> **[5:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=334)** And then after I have that array, we'll do echo dollar sign array and let's ask it for the third element, just so we can see what that looks like.
>
> **[5:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=344)** Save it, come back over here and reload it.
>
> **[5:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=347)** And you can see there it is.
>
> **[5:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=348)** The third element in the array was assets.
>
> **[5:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=351)** Now here, it was in a different position.
>
> **[5:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=354)** Position may not be the same between what scandir gives you and what the loop gives you.
>
> **[5:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=359)** But the larger point is that once you get this information into an array, then you can work with it as an array.
>
> **[6:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=366)** You can sort it, you can scan through it.
>
> **[6:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=368)** You can do all sorts of things.
>
> **[6:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=370)** Whether you loop through the entries or put them into an array, these functions empower us to examine and move through the file system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), this, (2), this. (1), case, (1), function (1)
> **CLI Commands:** php (10)
> **Env Vars:** php (7)
> **File Paths:** dir_access.php (2), file_access.php (1)
> **Code Identifiers:** dir_access (2), file_access (1)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)

#### Skipping directory entries
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=0)** - [Instructor] One common question is how to skip over directory entries especially since every directory contains entries for the.and.dot at the start.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=10)** One easy way to skip entries in PHP is to write a conditional statement inside the loop, which calls continue.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=18)** If the Boolean expression evaluates to true continue tells PHP to ignore everything else in the loop, and immediately jump to the next iteration.
>
> **[0:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=27)** In our dir access dot PHP page.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=30)** Let's add some code to skip some of the entries.
>
> **[0:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=34)** Right here, we'll put in code that says, skip the.and.dot files and we'll do that with if and then a Boolean expression and then continue.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=49)** So what should our Boolean expression be?
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=51)** Well, if entry is equal to a dot or if entry is equal to.dot, then skip over it.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=64)** Let's save it.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=65)** We'll go back to Firefox or reload this page.
>
> **[1:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=69)** You can see now it skipped over.and.dot or we could skip over all dot files, skip all dot files.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=79)** Anything that starts with a.at the beginning those are frequently configuration files and things we may not be interested in.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=84)** You can see, I have one here dot DS store which is something the Mac operating system uses.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=91)** Let's just copy this line up above but the conditional will change.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=98)** Now I'm going to use stripos that's a PHP function that will scan through a string entry looking for another string in this case a dot and it will return an integer for its position or false if it doesn't find it.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=117)** So I'm going to say if it's exactly equal to zero the position is zero with zero index, just like an array.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=124)** So if the position of the string period is right at the beginning, then continue.
>
> **[2:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=129)** We'll save it.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=130)** We'll come back over here and reload.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=132)** You'll see that dot file disappeared.
>
> **[2:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=134)** We could do other things.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=135)** Let's try copying this and let's skip all directories, right?
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=142)** We have a directory listing right here.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=144)** Here's assets.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=146)** Let's tell it not to look at assets anymore.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=149)** We'll take this out and our Boolean now will be is dir and we can use dollar sign entry, even better though is to append the full path on there.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=159)** So it would actually be dir path and then join that with the entry and I know that I'm working with dir path cause that's what I started with here.
>
> **[2:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=169)** So I'm going to put whatever the directory path is followed by the entry.
>
> **[2:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=173)** Now because I'm in the same current working directory, it would work without dir path, but it won't work in all cases.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=179)** So I'm going to go ahead and write it this way.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=182)** We've come back over here and you'll see now assets disappeared.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=185)** This assets is different.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=187)** That's coming up from down here where we have this array.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=190)** You could change the Boolean expression to suit your needs.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=193)** It could skip all files.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=195)** It could skip files, if the file extension isn't an image file.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=199)** This technique for skipping entries in the directory is flexible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), continue (4), function (1)
> **CLI Commands:** php (4), find (1)
> **Env Vars:** php (4)
> **Cross-References:** go back to (1), coming up (1)
> **Tools:** firefox (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Pattern matching with glob
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=0)** - [Instructor] There's a completely different technique for working with directory entries in PHP which is powerful and worth knowing about.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=7)** We can use something called glob, G-L-O-B to do pattern matching.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=14)** You call the PHP function glob and you pass in a pattern as an argument.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=19)** It returns an array of all paths to files and directories that match that pattern.
>
> **[0:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=24)** It returns an array of entries, but those entries may be in several directories, not just in one.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=30)** It's a good way to scan for files or directories that match a pattern.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=35)** To write a pattern, we need to learn the syntax.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=39)** Any regular character will match the same character in the file name but there are a few special characters.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=45)** They aren't the same as regular expressions but it's a similar idea.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=49)** The question mark is a wild card that matches any one character.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=53)** If you know regular expressions it's the same as a single dot any character.
>
> **[0:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=59)** If we use the asterisk, it represents any zero or more characters.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=64)** It's like saying, "I don't care what might or might not be in this part of the path."
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=68)** It's similar to the regular expression version with a dot and an asterisk after it.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=74)** We can use square brackets to match any character inside the set, or put an exclamation point at the start to not match any character in the set.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=83)** And if we want our pattern to match a literal question mark asterisk or bracket, we can put a backslash in front of it to take away its special meaning.
>
> **[1:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=91)** Let's try an example.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=94)** Let's create a new file and let's call it da_glob.php, I'll put my php tags inside of it.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=105)** And let's start out by just calling glob and we're going to catch whatever it returns to us.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=112)** I'll come back to the pattern in a moment whenever it returns to us, I'm going to catch in entries because it returns in array to us.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=119)** And then let's take a look at what's inside that array using a foreach loop.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=124)** And in that foreach loop, we'll save for entries as entry.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=132)** So that'll then give us an entry that we can look at and br tag at the end.
>
> **[2:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=139)** So we'll get the same effect as we had before.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=141)** We'll get all of the entries and we'll list them with br tags one after another.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=146)** Now what should we put in here as our pattern?
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=149)** To start with, let's do file_?????
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=151)** and then five question marks and then dot php.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=157)** All of the regular characters like F-I-L-E those are going to match the exact characters over here.
>
> **[2:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=164)** So you can see it's going to match F-I-L-E.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=167)** The question mark is going to be any one character.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=170)** So I'm looking for five characters in a row and then .php.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=175)** Let's try it out.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=176)** We'll save it.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=177)** We'll go over to Firefox.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=180)** Let's try da_glob.php.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=184)** You'll see there're two of them, file_lines and file_write.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=187)** It didn't match all the other ones though because they had a different number of characters.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=191)** This requires it must be five characters.
>
> **[3:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=194)** It doesn't care what the five characters are but there must be five characters.
>
> **[3:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=199)** If I instead use the asterisk that says, "I don't care what the characters are," it could be nothing or it could be a million characters file_ and then something .php.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=212)** So let's save it.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=213)** We'll come back over here.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=214)** And you'll see now we get everything that starts with the word file.
>
> **[3:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=219)** If we try and example with character sets, we could put a character set around F now it'll match anything with file.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=227)** If I put a T there and that'll match anything with file or tile.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=232)** Now there's a kind of a contrived example cause I don't have anything in my directory called tile but it works the same way.
>
> **[3:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=238)** We can come over here and we reload it and get the same results.
>
> **[4:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=243)** You could also for example, do asterisk .txt, it's very common.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=249)** I don't care what the file name is, I care about its extension.
>
> **[4:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=252)** I'm looking for anything that it's the .txt file, I'll save it.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=256)** I'll come back over here and reload and you'll see that it returned four to me.
>
> **[4:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=260)** If we look over here you'll see these four files that are right here at the bottom.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=265)** Notice it did not return these to me because it's looking at the path and the path it did not include directory changes in that.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=275)** That's an important point.
>
> **[4:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=276)** It's anything except the change of directory.
>
> **[4:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=279)** If I want to look in another directory I can do the star/star.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=284)** Now this will say anything that's nested in any directory regardless of its name, that ends in .txt.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=290)** So I'll save it, I'll reload it and you'll see here now return anything that's in the assets directory.
>
> **[4:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=297)** So I am getting back those two files, but I'm no longer getting these because they don't match.
>
> **[5:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=302)** Their path doesn't have that slash in front of it.
>
> **[5:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=306)** The glob function is a powerful tool for scanning the file system for matching entries across many directories.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (2), pass (1), match. (1)
> **CLI Commands:** php (8)
> **Code Identifiers:** da_glob (2), file_lines (1), file_write (1)
> **Analogies:** it's like (1), similar to (1), for example (1)
> **File Paths:** da_glob.php (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (2)
> **Tools:** firefox (1)

#### Challenge: Directory treasure hunt
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=0)** - [Instructor] It's time for another challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=8)** This is an opportunity for you to use the techniques we've learned in the last two chapters.
>
> **[0:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=13)** For this challenge, you're going to go on a treasure hunt.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=17)** You will use the directory called Treasure Hunt, which is included in the exercise files.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=22)** Your challenge is to write a PHP script, which will loop through all of the entries inside that directory.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=29)** And you'll examine the file contents looking for the string, treasure.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=33)** There's going to be more than one.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=35)** Each time you find one, output the file path to HTML.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=39)** At the end you'll have a list of all of the treasure locations.
>
> **[0:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=44)** Let me give you a few tips to help you out.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=46)** The first is start by just focusing on the current working directory.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=51)** There's going to be a lot of nested directories, but just put those out of your mind to begin with and get something that works just for the current directory, that'll give you a lot of the tools that you'll need from there.
>
> **[1:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=61)** Then you can start working with the nested directories after that.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=65)** It's not necessary, but you may find it helpful to write some custom PHP functions, which perform some of the basic tasks.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=74)** Let me give you an idea of what the files or directories look like.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=77)** Inside the main treasure hunt directory, you'll find a number of other directories as well as some files.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=82)** And then in each of those directories, you'll find more files and more directories and so on.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=88)** So you'll see that they're nested.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=90)** You'll need to loop through all of these and try to find out which ones of these files contain the word treasure.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=98)** Inside some of those files, you'll find some random words, but in a few of them, you'll find the word treasure, and that's what you're looking for.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=105)** You want to scan those files and then record the file path every time you find the word treasure.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=111)** Good luck with your treasure hunt, and then in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), php (2)
> **Code Keywords:** let (2), for. (1)
> **Env Vars:** php (2), html (1)
> **Cross-References:** in the last (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Directory treasure hunt
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=0)** - [Narrator] I hope that you were successful on your treasure hunt if not, don't worry in this movie, I'm going to walk you through the process that I went through and you can follow along and try again on your own.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=17)** The first thing I did was I created a new PHP file called treasure underscore Hunter dot PHP.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=23)** You can see it here and inside there I defined a couple of functions.
>
> **[0:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=28)** We'll come back to those and then you can see I defined the hunt path that is based on the current directory of the script that's the PHP sandbox and I upended that to assets and treasure hunt.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=39)** That's this directory right here.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=41)** So that's the path that I'm going to be hunting through and then I told it to pass that path into the walk directory function and that's it and it did everything from there.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=50)** Let's take a look at walk directory and what it does.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=54)** Walk directory has two jobs.
>
> **[0:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=56)** The first is to go through the entries inside a directory.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=60)** The second job is to look at that and determine if it's a directory or a file and if it's a directory, it walks that directory.
>
> **[1:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=68)** If it's a file, it examines it and we'll see that with the examine file function.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=73)** Here you can see I've got a handle the calls opendir on the dir path, check to see if that handle exists while it exists while it's not false I'm going to go through it.
>
> **[1:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=82)** You can see here I'm skipping all entries that have dots at the beginning and then I'm just going to look at those other entries and see the entry path is the dir path plus the entry that gives me the full path for this and I need that so that I can call is dir on it.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=97)** So it'll call is dir on that full path to tell me if it's a directory or not.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=101)** If it's a directory, well, then I just call walk directory on it again.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=105)** So we'll walk that directory.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=107)** This is called recursion.
>
> **[1:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=109)** We use walk directory to go through a directory every time we find a directory, we call walk directory again, it goes through all the entries and calls walk directory again and so on.
>
> **[1:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=118)** Every time it finds something that's not a directory though, it does something different.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=122)** It examines the file.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=125)** So let's stop and take a look at what examine file does now.
>
> **[2:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=128)** Down here in examine file, it takes a file path.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=132)** It opens up that file path.
>
> **[2:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=134)** It does that in read only mode gets the file handle then it calls F read and it checks the first eight characters of the file to see if the word treasure is there.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=144)** Now I put treasure right at the beginning.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=146)** If we had buried it in the file, well then we can go through and scan the file looking for the word treasure but we made it easy.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=152)** It's right there at the beginning.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=153)** So treasury equals eight bytes or characters.
>
> **[2:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=156)** So we'll check that.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=157)** We'll get it as data.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=158)** If the data is equal to the word treasure, then echo found treasure and the file path where we found it and then regardless of whether we found treasure or not we're going to close up that file and move along.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=170)** So just to go back up here, every time we come to an entry if it's a directory, we'll scan it also, if it's a file, we'll check to see if we find treasure inside of that file.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=182)** Let's take a look at the results and it's going to be called treasure Hunter dot PHP.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=191)** You can see the return back six entries.
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=193)** There were six treasures to be found.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=196)** You can see here that inside the treasure hunt directory inside jungle, inside cave, inside pile of bones dot TXT there was a treasure.
>
> **[3:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=204)** Notice that it's looking inside nested directories.
>
> **[3:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=207)** Here we just found one in jungle waterfall.
>
> **[3:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=210)** Here's one in campsite, campfire and so on.
>
> **[3:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=213)** If you weren't able to come up with a solution, I hope that you'll take a few minutes and go back and try again.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=218)** This is a useful skill it's useful in PHP to be able to go through a set of nested files and directories on a file system, looking for something.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5), find (2)
> **Code Keywords:** let (3), function (2), pass (1)
> **Env Vars:** php (5), txt (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Accepting User-Uploaded Files

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Configuring PHP for file uploads
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn how to work with user uploaded files.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=4)** In the previous chapters, we worked with files and directories that already existed on the web server.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=9)** PHP can also allow users to upload files via a web form.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=14)** Those users could be the general public but can also be site administrators who are working inside a content management system.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=21)** They might be uploading images, PDFs, calendars or other documents.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=26)** Let's start by seeing how PHP is configured to allow file uploads.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=31)** The PHP settings related to file uploads are in the PHP dot INI file.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=36)** That's the configuration file PHP reads when it first starts up.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=40)** There are several settings to take note of the default settings are probably correct but it's good to know what to look for if they're not.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=48)** The most important is file uploads.
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=51)** This determines whether any uploads are allowed at all.
>
> **[0:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=53)** So of course you want it to be set to on.
>
> **[0:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=56)** The next is upload tmp dir.
>
> **[0:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=59)** You can set this to the path of a directory where PHP can initially store it's uploaded files.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=64)** If it's set to null, it will use the systems default temporary directory and most of the time that works just fine.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=71)** Then there is a post max size and upload max file size.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=75)** You can increase these values if you need them to be larger and then max execution time, max input time and memory limit are not directly related to file uploads but they may need to be adjusted if you find that you run into problems.
>
> **[1:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=88)** Remember that PHP has the PHP info function.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=92)** It will tell you where your PHP dot INI file is located and the settings related to file uploads.
>
> **[1:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=99)** If you put this in a PHP file and load in a browser you can see your current settings.
>
> **[1:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=103)** In most cases, the default values should already allow PHP upload files of a reasonable size.

> [!info]- Semantic Content
>
> **Env Vars:** php (11), ini (2)
> **CLI Commands:** php (11), find (1)
> **Code Keywords:** public (1), let (1), function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Sending files as form data
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to create an HTML form which is appropriate for uploading files.
>
> **[0:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=7)** This is going to be pure HTML.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=9)** There's no PHP here.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=11)** This is what a minimum form looks like.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=14)** It starts with the form tag.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=16)** It has an action.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=17)** The page that the form will submit its data to, and then the form method is post because it will be a post request, and then notice that there's an attribute for something called ENC type, which is short for enclosure type.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=31)** It's value is multipart/form-data.
>
> **[0:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=36)** This parameter must be included in any form that's going to upload a file.
>
> **[0:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=41)** You don't need it if you're not uploading a file, but if you're uploading a file, you do.
>
> **[0:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=45)** It's part of the HTML specification.
>
> **[0:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=48)** On the next line, I have an input tag of type file.
>
> **[0:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=52)** It includes a name attribute.
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=54)** This is the name that we'll use to reference the uploaded data.
>
> **[0:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=58)** You can have more than one of these on a form.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=60)** You might have upload one and upload two or you might have profile photo and background photo.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=66)** You can name them anything you'd like, and then there's an input to submit the form.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=71)** As I said, this is the minimum form.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=73)** Of course, the form can have many other fields on it.
>
> **[1:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=76)** You can have text inputs and select options and everything else.
>
> **[1:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=80)** This is what it would look like just though for uploading a file.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=83)** Let's try it out.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=85)** I'm going to create a new file in my PHP sandbox and I will save it as upload_form.php.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=95)** I'm using the PHP file extension even though it will only contain HTML right now.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=100)** Let's put in that HTML.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=101)** We'll start with opening an HTML tag.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=104)** We'll put in a head tag and a title tag which will say file upload.
>
> **[1:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=112)** Close our title tag.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=115)** Close up the head tag.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=117)** We'll put in a body tag, and then I'll skip a line here and we'll put our form.
>
> **[2:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=123)** I'll come back to the form in a second.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=125)** For now let's just close the form and finish with the rest of our HTML, body and close HTML.
>
> **[2:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=135)** All right, let's come back up here to our form now.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=137)** Our form needs to have an action.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=140)** That action is where it's going to be sent.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=141)** We'll call that page upload.php.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=144)** That will do the form processing for us.
>
> **[2:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=147)** The method is going to be equal to post, and then we're going to use that ink type for enclosure type, and it's going to be multipart/form-data.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=159)** Got to make sure we have that.
>
> **[2:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=161)** After that, we'll put in an input of type file.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=167)** That'll give us a button that will allow us to select a file from our file system for uploading.
>
> **[2:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=172)** We'll give it a name.
>
> **[2:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=173)** The name can be absolutely anything we want.
>
> **[2:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=176)** It's how we're going to refer to this uploaded file once it's uploaded.
>
> **[2:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=179)** So I'm going to call it file upload.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=183)** You'll just want to name it something that makes sense.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=185)** And then, of course, we'll need an input of type equals submit, and I like to always name my submit buttons and give them a value of upload, and there we go.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=200)** That's the minimum that we need for a form.
>
> **[3:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=202)** Let's view our form in Firefox.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=206)** Over here in Firefox, we'll go to upload form.php and there it is.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=212)** You can see we need probably a br tag here.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=215)** I'll add that.
>
> **[3:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=217)** There we go.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=218)** So now we have our browse for choosing a file.
>
> **[3:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=221)** That allows us choose from the file system and upload to actually upload the file when we're ready.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=227)** Now that we have a working form, let's work on the form processing.

> [!info]- Semantic Content
>
> **Env Vars:** html (8), php (3), enc (1)
> **Code Keywords:** let (6), type, (2), type. (1), else. (1)
> **CLI Commands:** php (6), make (1)
> **File Paths:** upload_form.php (1), upload.php (1), form.php (1)
> **Tools:** firefox (2)
> **Code Identifiers:** upload_form (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)

#### Inspecting uploaded files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=0)** - [Instructor] In the previous movie, we learned how to create a basic HTML form that will upload files.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=6)** In this movie, we'll learn to use PHP to inspect the values that are submitted by that form.
>
> **[0:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=12)** PHP has many super globals.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=14)** You should already know two of them; get and post.
>
> **[0:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=17)** PHP has another one for files.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=21)** That's dollar sign, underscore, and then in all caps, FILES.
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=25)** It's an array of form data submitted using file inputs.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=30)** Each file input in the form will be an entry that uses the file input name attribute as a key.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=37)** For example, we used file underscore upload in our last example, so the data would be in the super global for files, and then in square brackets, you would put the string for file underscore upload.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=50)** What's in that data?
>
> **[0:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=51)** It contains another array, and that array has the name, which is the original file name, the type, that's the MIME type, such as image/png, the size of the file being uploaded in bytes, and temp name, that's a temporary file name that's on the server, and then error, which is the error code if there are any.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=75)** Let's use PHP to take a look at these.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=79)** The form that we created before, we'll submit to upload.php, so that's the page we need to create.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=86)** upload.php, and I'm going to add my PHP tags, and then I like to check and see if a form was a post request that was submitted.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=97)** So I'm going to use if is set, and then if the super global for post contains submit, then we'll know that this was a submitted form, and if that's true, then we want to process the form data.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=117)** For now, we're just going to inspect those with print_r around the super global for files, and then the data we want to look at is file upload.
>
> **[2:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=129)** Remember, that's the name that we used back over here on our form was file upload.
>
> **[2:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=133)** So that's the name we're going to use to refer to it.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=136)** In addition, in order to get print_r to look nice on HTML, I'm also going to just echo some pre-tags here around it.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=144)** That'll just make sure that it looks good.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=146)** Copy that.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=148)** Put a closing tag right here.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=151)** Let's load this in Firefox.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=154)** I'm already on my upload_form.php page.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=157)** Let's now browse and pick a file.
>
> **[2:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=160)** I'm just going to pick from the PHP sandbox my log file to start with.
>
> **[2:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=166)** So I'll use that and I'll click upload.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=168)** This is the array that stored in these super global for files with the key file_upload.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=175)** You can see the name is log.txt.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=177)** The name of the file that we uploaded.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=180)** The type is text/plane.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=182)** That's it's mime type.
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=184)** The temp name is the name of the temporary file.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=189)** That's where this file exists right now on the file system.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=191)** So when it was uploaded, that's where PHP put it.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=195)** That file is inside private/var/temp/, and then that's a temporary file name that it assigned to it.
>
> **[3:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=202)** Yours is certainly going to be different than mine, and then you can see that it says that the error was zero, that in a case that there was no error, and the size of the file that uploaded was 242 bytes.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=215)** Now, as I said, this is where the file exists right now.
>
> **[3:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=218)** That means that we can use PHP to actually read that file in that current temp position.
>
> **[3:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=224)** Let's come here and try it out.
>
> **[3:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=226)** Right after this.
>
> **[3:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=228)** Let's just say that we want to get the data from the file using file get contents.
>
> **[3:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=235)** We know that we can pass it our path and the path is going to be the file upload and then square brackets after that, temp, tmp_name, that's where we're going to read in the data from, and I'll just echo back nl2br on the data.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=256)** We'll go back to Firefox and I will just reload the page and it'll ask me if I want to resend the form data.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=265)** I'll do that.
>
> **[4:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=266)** You can also hit the back button and resubmit the page, but you see that now it actually created a new location for this temp file.
>
> **[4:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=273)** It's a little bit different than it was, and you can see that it read the contents of that file.
>
> **[4:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=277)** So that file does exist at that location and we can read its contents.
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=282)** Now, of course, this uploaded file is still in a temporary directory.
>
> **[4:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=287)** If we want to keep this file, we probably want to move it to somewhere permanent, and we'll learn to do that in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** super (5), let (5), type, (2), type. (1), private (1)
> **CLI Commands:** php (11), make (1)
> **Env Vars:** php (8), html (2), files (1), mime (1)
> **File Paths:** upload.php (2), upload_form.php (1), log.txt (1)
> **Code Identifiers:** upload_form (1), file_upload (1), tmp_name (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** firefox (2)
> **Analogies:** for example (1), such as (1)

#### Moving uploaded files
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=0)** - We know how to use PHP to upload a file to a temporary location.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=4)** Now, let's learn how to store it somewhere permanent.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=8)** To do that, we will use a PHP function called move_uploaded_file.
>
> **[0:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=13)** It takes two arguments: the path to the temporary file and the path to its destination.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=18)** It's called move_uploaded_file because it doesn't move just any file.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=23)** It also verifies that the file is a valid upload file which was recently uploaded via a post request.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=30)** This is a good security measure that restricts the action to uploaded files only.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=35)** Note that this will overwrite any file that's already at that destination.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=39)** So you may want to pair it with the check for file exists if you want to prevent overriding.
>
> **[0:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=46)** I'm going to start by creating a new directory for our completed downloads.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=49)** So I'll come over here, make a new folder, which I'll call uploads, and I will put that into my PHP sandbox.
>
> **[0:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=59)** And then I'm going to click on it and check the permissions on it using get info.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=64)** You can see that I, the creator of the file have read and write privileges, but the owner and everyone else do not.
>
> **[1:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=71)** And PHP is definitely not going to be running as me.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=74)** So I want to make sure I have read and write permissions there.
>
> **[1:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=77)** If you need help setting yours, you can go back and review where we discussed it in chapter one I'm going to keep working in upload.php.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=86)** Let's go back to Firefox and you'll notice that the temp file name is not the same as the original file name.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=92)** PHP assigns it a temporary name.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=94)** It doesn't even have a file extension.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=96)** So I'm definitely going to want to rename it.
>
> **[1:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=99)** You can give it a new name or you can use the original file name.
>
> **[1:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=104)** I'm going to go back into upload.php, and up at the top, let's just set a variable for upload_dir, which is going to be equal to the current directory for this script plus /uploads.
>
> **[1:59](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=119)** That's the file that I just created.
>
> **[2:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=121)** Now, I have a variable that will allow me to refer to that.
>
> **[2:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=125)** Instead of all of this processing that we did here before, let's take all of that out, and instead, when we go to process it, let's find the temp path.
>
> **[2:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=136)** We know that value is stored inside files, and file_upload, and we know that it's called tmp_name.
>
> **[2:28](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=148)** We know that the file name itself, the original file name, is stored, and I'll just copy all of this, because it's going to be very similar.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=157)** It's going to be in that same location, but it's going to be called just name, right?
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=162)** We saw that back over here.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=163)** It's just called name.
>
> **[2:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=165)** So that gives me that value.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=167)** I'm also going to follow a best practice here and put base name on it.
>
> **[2:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=171)** This is a good security precaution in case the user had some kind of tricky file name that was meant to do something to my file system, to set this to some value that I don't like.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=180)** This'll ensure that it does just get the file base name.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=183)** And then where are we going to store it?
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=184)** What is that destination?
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=186)** I'm going to call it target_path.
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=188)** And the target path is going to be equal to the upload dir that we had above, and then a forward slash, and then the file name.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=198)** Now again, you could name it anything you want.
>
> **[3:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=200)** I'm going to go ahead and keep that same file name that it had originally.
>
> **[3:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=204)** All right, so now that we have our values, let's use move_uploaded_file: move_uploaded_file; takes two arguments.
>
> **[3:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=212)** The first will be the temp path.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=214)** We've set that value.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=215)** And the second is the destination, which I've assigned to target path.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=220)** Now, in addition to that, move_uploaded_file returns true or false.
>
> **[3:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=225)** So we can put it inside an if statement and if it succeeds, echo file upload succeeded.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=237)** And if not, come down here, else, and I'll just copy this.
>
> **[4:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=245)** Save a little typing. File upload failed.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=249)** So let's try it out.
>
> **[4:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=250)** I'll save that. We'll go into Firefox.
>
> **[4:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=254)** I'm going to hit the back arrow so that we get our upload form again.
>
> **[4:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=256)** I'll just go ahead and reload that page.
>
> **[4:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=259)** This time I'm going to browse and I'm going to pick my sonnet, sonnet.TXT.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=265)** I'll click open and upload. File upload succeeded.
>
> **[4:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=269)** And if I come over here and look, inside my uploads directory, you see sonnet.TXT.
>
> **[4:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=275)** Now, of course, in this example, I uploaded a file from my local computer to my local computer, but you can imagine that this is a public webpage and the upload is coming from a different remote computer.
>
> **[4:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=287)** So to review the whole process, we have an HTML form that uploads to a PHP page.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=294)** That PHP page then uses the file's super global to inspect the values, and then move_uploaded_file moves the file from the temporary location to its permanent location.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1), this, (1), else, (1), this. (1)
> **CLI Commands:** php (9), make (2), find (1)
> **Code Identifiers:** move_uploaded_file (6), upload_dir (1), file_upload (1), tmp_name (1), target_path (1)
> **Env Vars:** php (7), txt (2), html (1)
> **File Paths:** upload.php (2), sonnet.txt (2)
> **Definitions:** is a  (4)
> **Cross-References:** we discussed (1), go back to (1)
> **Tools:** firefox (2)

#### Handling upload errors
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=0)** - [Instructor] We've seen how to handle file uploads in PHP.
>
> **[0:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=3)** Let's consider what to do if there's an upload error PHP will detect upload errors and store it in the files super global array for the upload.
>
> **[0:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=14)** It stores an integer value the number zero through eight.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=19)** PHP also has constants defined that are equal to these values.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=23)** In this chart, the first column is the constant name, and the second column is the actual error value.
>
> **[0:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=30)** These are interchangeable though because they have the same value.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=33)** In the third column, I've put a simple explanation of the error.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=37)** In the first row, there's an entry for zero which indicates there was no error at all.
>
> **[0:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=42)** That's useful because our PHP can check to see if the error code is zero, or if it's greater than zero.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=49)** Errors one and two are triggered if the file exceeds the maximum file size, error three is for a partial upload, error four is when there's no uploaded file, error five doesn't exist anymore so we don't need to worry about that.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=62)** Error six appears if there's not a temporary directory to store the uploaded file.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=66)** Error seven is when PHP can't write to the temporary directory, usually due to a lack of permissions.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=72)** Error eight is when a file upload is stopped by an extension, something you usually won't need to worry about.
>
> **[1:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=79)** If you get an error, you can simply tell the user that something went wrong and not be specific about it.
>
> **[1:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=85)** Or you can convert these error messages into text that's suitable for display to the user, it's your choice.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=93)** At the top of my upload .PHP file I'm going to paste in a custom PHP function.
>
> **[1:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=100)** You can pause the movie if you want to copy it down, or it's included in the exercise files for movies after this one.
>
> **[1:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=106)** This function is called upload error and takes one argument, and that is the error.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=111)** That's going to be the status code that was returned in that file, super global.
>
> **[1:56](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=116)** You can see that it sets upload errors equal to an array which is equal to those values we just saw in that chart.
>
> **[2:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=124)** We have the constants that PHP has on this side, and then a plain text message on the right.
>
> **[2:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=131)** Down here you'll see that it'll take that error and it'll return the value that corresponds inside that upload errors array.
>
> **[2:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=141)** Let's go down into our form processing and let's check for that error.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=145)** So let's first just set the error equal to, and we know what it's going to be, it's going to be very similar to this.
>
> **[2:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=151)** I'm going to copy this and paste it in, but instead of temp name, we're going to ask it for error.
>
> **[2:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=158)** So that'll get the value and set it here to an easy to use variable, then let's say if there is an error that is greater than zero, remember zero means there's no problem at all, then we have an error, so we're going to display it.
>
> **[2:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=175)** We'll call upload_error, our new function, and we'll pass in that error.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=182)** Else, there's not a problem in which case we will do this form processing right here.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=190)** There we go.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=191)** Now it's a little difficult for us to trigger an error on purpose.
>
> **[3:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=195)** I suppose you could remove the temporary directory or change its permissions, or you could upload a file that's super large.
>
> **[3:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=201)** But I'm not going to do that.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=203)** We know we have code in place, that handles whatever error PHP might tell us about here.
>
> **[3:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=210)** Let's save it and let's test it one more time to make sure that it still works when there is no error.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=215)** I'll go back to Firefox, I'll hit the Back button so we get our upload form again, and I will browse and choose the sonnet again, click Open and upload.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=227)** The file upload succeeded.
>
> **[3:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=228)** Notice that it did overwrite.
>
> **[3:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=231)** That is an important point.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=232)** When we upload it overwrites the file that's already at that destination location.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=237)** But it did work, there were no errors, but if there had been we were prepared to handle them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), super (3), function (3), this. (1), pass (1)
> **CLI Commands:** php (9), make (1)
> **Env Vars:** php (9)
> **Definitions:** is an  (2), is called (1)
> **Code Identifiers:** upload_error (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)

#### Setting file permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=0)** - [Instructor] Now that we know how to upload files, I want us to revisit the subject of file permissions.
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=5)** This time, we'll learn how to set file permissions using PHP.
>
> **[0:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=10)** When we talked about file permissions earlier, we are mostly concerned with ensuring that PHP could access files created by other users.
>
> **[0:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=18)** But what about the other way around?
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=20)** How can we make sure that other users can access files uploaded through PHP?
>
> **[0:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=25)** The web server may run as a different user, and users may not have permission to access files that PHP creates, but PHP can set the owner and the permissions as needed.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=37)** Let me demonstrate.
>
> **[0:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=40)** Earlier, I uploaded a file that was sonnet.txt originally, and you can see it here in the uploads directory as sonnet.txt.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=49)** If we go into the Unix console, you'll see that they have different owners and different permissions.
>
> **[0:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=55)** Here's sonnet.txt, it's owned by Kevin Skoglund, and everyone has read, write, and execute permissions.
>
> **[1:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=62)** Here's uploads sonnet.txt.
>
> **[1:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=64)** You can see its owner is _www, and the owner has read and write privileges, but everyone else only has read privileges.
>
> **[1:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=72)** Yours may be different than mine.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=74)** The point is to understand that the owner of the uploaded file has some permissions, while everyone else does not.
>
> **[1:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=81)** PHP provides several useful functions.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=84)** chown will change the owner of a file or directory, chgrp will change the group of a file or directory, and chmod will change the permissions.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=93)** We saw chmod earlier.
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=95)** It was a Unix command to change permissions.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=97)** PHP uses the same name for its function.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=101)** You can only change the owner of a file if the user, in this case PHP, has been given admin or sudo privileges.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=110)** Group or permissions can be changed as long as PHP is the owner of the file.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=115)** Most of the time, you won't need to change the owner or the group.
>
> **[1:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=118)** It's mostly the permissions that you'll want to adjust.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=122)** We saw earlier that file permissions can be thought of as nine characters in sets of three; user permissions, group permissions, and permissions for everyone else.
>
> **[2:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=132)** And each has a read, write, and execute permission; r, w, and x.
>
> **[2:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=138)** This table has the three groups at the top; user, group, and other, and the three types of permissions on the left; read, write, and execute.
>
> **[2:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=146)** A permission is either enabled or disabled.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=149)** If it's enabled, then we put a single letter abbreviation in the grid r, w, x.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=154)** If it's disabled, you can see I have a dash.
>
> **[2:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=157)** When we put those together, we get a nine character string.
>
> **[2:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=161)** Here, the user can read, write, execute, the group can read and write, and everyone else can only read.
>
> **[2:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=167)** We call this alpha notation.
>
> **[2:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=171)** Alpha notation is not the only way to represent permissions.
>
> **[2:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=174)** There's also something called octal notation.
>
> **[2:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=177)** Unix will accept both, but PHP will only accept octal notation.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=182)** So we need to learn how it works.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=185)** Imagine that every r is equal to four, every w is equal to two, and every x is equal to one.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=192)** Now, we have the same chart and it looks like this.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=196)** If we take each of those values and we add them up going down each column, you get the numbers seven, six, and four.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=206)** So the alpha notation rwxrw-r-- is equal to the octal notation 0764.
>
> **[3:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=216)** It may seem weird to have a zero at the start, but this is an octal number.
>
> **[3:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=221)** It's not a string and it's not a regular integer.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=223)** The zero is necessary.
>
> **[3:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=227)** We could change the permissions on our uploaded file right here inside upload.php.
>
> **[3:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=233)** But I'm going to go ahead and make a new file for it instead, just so that you'll have it for reference.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=237)** And I'm going to save that file as upload_chmod.php.
>
> **[4:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=244)** And so there I'll put my PHP tags.
>
> **[4:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=249)** And let's set the file path that we want to be working with.
>
> **[4:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=253)** And I'm just going to hard code that in as the directory and then inside uploads and then sonnet.txt.
>
> **[4:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=262)** If you uploaded a different file, then of course you'll want to change it to whatever file you have uploaded.
>
> **[4:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=267)** And then if the file exists at the file path, always a good idea to check for that, then we will call chmod on the file path, and we will set it's permissions equal to something.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=286)** Now, what should we set it equal to?
>
> **[4:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=288)** We know that it needs to start with a zero.
>
> **[4:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=290)** Again, it's an actual number, not a string or an integer.
>
> **[4:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=294)** And then you can put anything you want here.
>
> **[4:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=295)** 777 would mean that it has all of the permissions, so everyone can read, write, or execute.
>
> **[5:01](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=301)** Execute doesn't really matter on most files, so we could just have 766, that takes away the execute permission, it's just read and write.
>
> **[5:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=310)** Maybe you want to allow the group to read and write, but maybe everyone else can only read, then it would be 764.
>
> **[5:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=320)** I'm going to set it at 766.
>
> **[5:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=322)** That gives the owner all permissions and allows everyone else to read and write.
>
> **[5:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=327)** Let's save it and try it out.
>
> **[5:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=330)** I'll go back into Firefox, and it's going to be called upload underscore C-H-M-O-D chmod.
>
> **[5:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=341)** That didn't output anything to us, but it did change our permissions.
>
> **[5:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=345)** If I go back into Unix, at the up arrow and take a look at that file again, you can see that it's changed.
>
> **[5:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=352)** Now, it is 766, read, write, and execute, and then four and two for read and write, adds up to six for each of those.
>
> **[6:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=362)** Now, PHP will have full access to the file, and so will my logged in user.

> [!info]- Semantic Content
>
> **CLI Commands:** php (14), chmod (4), make (2), chown (1), sudo (1)
> **Env Vars:** php (12)
> **File Paths:** sonnet.txt (5), upload.php (1), upload_chmod.php (1)
> **Code Keywords:** let (3), function (1), else. (1), this. (1)
> **Definitions:** we call this (1), is an  (1)
> **Code Identifiers:** upload_chmod (1)
> **Cross-References:** we talked about (1)
> **Tools:** firefox (1)

#### Securing file uploads
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=0)** - [Instructor] In this movie, we will discuss the security concerns around user uploaded files.
>
> **[0:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=6)** My top recommendation is to require a user to log in before they can upload files.
>
> **[0:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=13)** Don't let anonymous users upload.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=15)** Then you'll know if a user abuses their file upload privileges.
>
> **[0:19](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=19)** You can block the user or escalate the issue to other authorities.
>
> **[0:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=23)** Users tend to follow the rules better when they know their identity is attached to their actions.
>
> **[0:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=29)** Even files by logged in users may contain copyrighted material, offensive content or malware.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=35)** The user may not realize it.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=37)** So you should give some thought to whether files will become immediately public or go through a review process.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=43)** You should also be cautious about opening uploaded files.
>
> **[0:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=47)** Opening simple image files is usually fine, but malware can be embedded in executable files or in files that allow macros or scripting like Word or Excel files.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=57)** It helps to validate the file type and file extension of uploaded files to make sure that they match your expectations.
>
> **[1:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=63)** If you're expecting an image, only allow image files.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=66)** If you're expecting a PDF, only allow PDF files.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=70)** It's also smart to limit the maximum file size.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=74)** You don't want users to use up all the hard drive space on your server because they picked really large files to upload.
>
> **[1:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=80)** Remember, PHP gives you this information in an array.
>
> **[1:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=84)** You can look at the file name to see the file extension.
>
> **[1:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=86)** You can get the file type and size using the upload data.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=92)** PHP has a global maximum file size which is set in the PHP INI file.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=97)** You can also set a smaller limit on a particular form by adding a hidden input tag for MAX_FILE_SIZE in all caps.
>
> **[1:47](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=107)** And then you set a value in bytes.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=110)** If the file upload is larger than that value, then PHP will automatically add an error of type two.
>
> **[1:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=117)** For example, a form to upload to PDF might have a maximum of four megabytes while a form for uploading an image is limited to half a megabyte.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=126)** There's no single recipe for securing your file uploads but these items provide good guidelines to use when you decide what makes sense for your website.

> [!info]- Semantic Content
>
> **Env Vars:** php (4), pdf (3), ini (1), max_file_size (1)
> **CLI Commands:** php (4), make (1)
> **Code Keywords:** require (1), let (1), public (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Profile photo
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=5)** - [Instructor] It's time for another challenge assignment.
>
> **[0:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=8)** In this challenge, you'll use what we've learned about file uploading to create a real world website feature.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=15)** Your PHP code shall allow a user to upload a profile photo.
>
> **[0:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=20)** You'll create a file upload form, and then a page that will process the form data and upload the file.
>
> **[0:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=27)** Once you have a basic working version, try to incorporate some of the techniques and best practices we've learned.
>
> **[0:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=33)** Display any upload errors.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=35)** Validate that the file type is an image file.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=39)** Make sure that the file size is less than one megabyte or so.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=43)** Set the file permissions on the uploaded file to allow everyone to read and write the file.
>
> **[0:49](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=49)** And as extra credit, think about how you would customize the file name if you wanted it to be something different than the original file name.
>
> **[0:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=57)** You can try this challenge from scratch if you want or you can use the templates that I've added to the exercise files to get you started.
>
> **[1:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=66)** In the exercise files, I've added a directory for user, and inside there, you'll see there's a directory called images.
>
> **[1:14](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=74)** That's a place to hold the uploaded image files, and then two PHP pages, profile.php and uploadphoto.php.
>
> **[1:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=83)** There's also an image in the assets directory called profile_larry.jpg.
>
> **[1:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=89)** This is an image that you can upload for the profile image.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=93)** Let's look at profile.php.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=96)** This is mostly an HTML page.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=98)** At the top, I'm setting a few variables and these are meant to simulate the kind of data that you might normally get from a database.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=105)** Here's the username and the name of the image file.
>
> **[1:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=110)** Further down, you can see that it echoes the user's name and then displays the profile image if it exists.
>
> **[1:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=118)** So here's just putting an image tag, and then after it, we'll either get a link to add an image or edit the existing image.
>
> **[2:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=126)** Those both go to the same place, uploadphoto.php.
>
> **[2:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=130)** In uploadphoto.php, we define the upload error function that we used before.
>
> **[2:17](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=137)** There's an array of acceptable image types and then we have our form processing.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=142)** We'll come back to that in a moment.
>
> **[2:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=143)** Let's skip down.
>
> **[2:24](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=144)** Here you'll see we have the HTML page and this contains a form.
>
> **[2:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=149)** The form, though, is incomplete.
>
> **[2:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=152)** You will need to fill it in.
>
> **[2:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=154)** Notice that the action is going to submit to the same PHP page.
>
> **[2:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=159)** If the request is a get request, it'll show this form.
>
> **[2:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=163)** But up here, if it's a post request, then it will do the form processing.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=168)** Inside the form processing section, it will be up to you to fill in this code too.
>
> **[2:53](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=173)** I've given you some code comments to suggest items to include.
>
> **[2:58](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=178)** So we go to the PHP sandbox for userprofile.php.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=183)** This is the page that we see with the username at the top and there's no profile image right now.
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=188)** When I click add an image, it takes me to the uploadphoto.php page and then allows me to choose a file.
>
> **[3:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=196)** I'm going to go into my assets and choose that profile_larry.jpg image.
>
> **[3:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=202)** I'll click upload.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=203)** It says profile photo was uploaded.
>
> **[3:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=206)** I click back to profile and now we see that profile image.
>
> **[3:29](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=209)** It says edit image, which will take me back to the form if I wanted to change it to something else.
>
> **[3:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=215)** It's a simple photo upload, but it demonstrates the process well.
>
> **[3:40](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=220)** Spend some time trying to complete the challenge assignment on your own.
>
> **[3:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=223)** When you're ready, in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **CLI Commands:** php (11), make (1)
> **File Paths:** uploadphoto.php (4), profile.php (2), userprofile.php (1)
> **Env Vars:** php (4), html (2)
> **Code Keywords:** let (2), function (1), include. (1), else. (1)
> **Definitions:** is an  (2), is a  (1)
> **Code Identifiers:** profile_larry (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (2)

#### Solution: Profile photos
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=0)** - [Instructor] I hope that you were able to complete the profile photo challenge assignment.
>
> **[0:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=9)** If not, don't worry.
>
> **[0:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=11)** And this movie I'm going to walk you through the solution that I came up with.
>
> **[0:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=16)** For this challenge assignment we didn't need to make any changes to the profile.PHP page that I created before.
>
> **[0:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=22)** All it's doing is displaying an image if it exists, and not displaying, if it doesn't exist.
>
> **[0:27](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=27)** All the work is really being done on upload photo .PHP.
>
> **[0:31](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=31)** We have the form that we needed to fill in correctly which is down here.
>
> **[0:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=35)** Let's take a look at that.
>
> **[0:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=37)** We had a form, we already had an action for it.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=39)** It uploads to itself, and you can see that the method needs to be set to post, and the ink type must be set to multi-part/form-data.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=50)** Then I included a hidden file type for max_file_size which told it to make the value about a megabyte.
>
> **[1:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=60)** That's a little bit smaller than a megabyte but it's close enough to use a round number.
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=65)** And then I needed an input of type file and I needed to give a name to it.
>
> **[1:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=70)** I stuck with the same name we've been using which is file_upload.
>
> **[1:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=73)** You could have named it something else.
>
> **[1:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=75)** And then we're going to submit that with the Upload button.
>
> **[1:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=80)** Once that's submitted it's going to just submit to itself this time it will be a post request and in the post super global, we should have a value for submit.
>
> **[1:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=90)** And if that set, we know it's a post request and we have form processing to do.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=94)** So, let's look at that form processing.
>
> **[1:37](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=97)** I went ahead and just got all of these values that I needed out of that super global.
>
> **[1:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=101)** So you can see they're all pulling values out of files, file upload.
>
> **[1:45](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=105)** So now I have the file name, I have the temporary path, the type, the size, and the error.
>
> **[1:51](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=111)** And I'm calling base name on that file name because that's the best practice.
>
> **[1:55](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=115)** Then once I had those values and easy to use variables, then I'm set about checking to see where there any upload errors.
>
> **[2:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=122)** If error is greater than zero, then we know there was and so I'm going to use that upload error function to show the user of the error, I'm just going to send that to the variable message because then down here, you can see if there is a message, if something is set, it'll just output it for the user to see.
>
> **[2:20](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=140)** And then it'll redisplay the form.
>
> **[2:22](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=142)** So they'll have a chance to fix the problem as well.
>
> **[2:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=145)** So instead of just echoing out I'm going to set message to it, then I'm going to validate the file type, so I'm going to use in array for that.
>
> **[2:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=153)** If the type that was sent in, is in the array for image types that's up here, then I'll know that it's valid.
>
> **[2:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=162)** If it's not in the array, then it's going to to output the message, file must be an image file.
>
> **[2:48](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=168)** It'll check the file size.
>
> **[2:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=170)** Now it'll already use this max file size here and return an error if it's a gigabyte, but I can also check it here using size.
>
> **[3:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=180)** So you could set that as well.
>
> **[3:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=182)** Both of them work.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=183)** It's not a bad idea to have both of them.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=185)** And then I can finally say, okay everything passed those inspections, I'm ready now to upload the file.
>
> **[3:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=192)** So the target path is going to be equal to the image directory, and the file name.
>
> **[3:18](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=198)** Now we could choose a new file name if desired here, we don't have to use the file name they provided.
>
> **[3:23](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=203)** That was the extra credit assignment.
>
> **[3:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=205)** You could put it to be something else, maybe it's the name of the user.
>
> **[3:30](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=210)** If this is a social networking website, maybe it's set to be the username.
>
> **[3:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=214)** Right now, I'm just going to stick with the original file name that was provided, then I'm going to use move uploaded file to move it from its temporary location, to its permanent location, and finally use some more on it to change its file permissions to 0766.
>
> **[3:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=230)** I hope you were able to come up with a solution on your own.
>
> **[3:52](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=232)** If not, spend a few minutes, going back over your coding getting a working version.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=237)** It's important to understand how all these steps fit together into one overall file upload process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (2), type, (2), else. (1), function (1)
> **CLI Commands:** make (2), php (2)
> **Code Identifiers:** max_file_size (1), file_upload (1)
> **Env Vars:** php (2)
> **Definitions:** is a  (2)
> **File Paths:** profile.php (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=0)** - [Kevin] Thank you for taking "PHP Files and Directories" with me.
>
> **[0:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=4)** We've learned to use PHP to store information in files, to read data back from files, to search directories, and to allow users to upload files from a web form.
>
> **[0:15](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=15)** The PHP manual has details on all of the file and directory functions that we've learned.
>
> **[0:21](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=21)** You can search for them, or you can refer to the pages on file system or dir.
>
> **[0:26](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=26)** For anyone interested in using PHP to resize, crop, or manipulate image files, the manual also has pages on using PHP with the GD Library and with ImageMagick.
>
> **[0:39](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=39)** The best way to learn is to use these techniques in your own projects.
>
> **[0:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=43)** Running into a roadblock and then learning how to get past it will deepen your understanding of the concepts and the techniques that we've learned.
>
> **[0:50](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=50)** Until next time, happy coding.

> [!info]- Semantic Content
>
> **CLI Commands:** php (5)
> **Env Vars:** php (5)
> **Speakers:** - [kevin] (1)


## Instructor

- [[Kevin Skoglund]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/php-techniques-working-with-files-and-directories-2873106)

## Skills Covered

- PHP

## Path Context

### In [[Advance Your PHP Skills]]
← [[Functional Programming with PHP]] | **3 of 7** | [[PHP- Creating Secure Websites]] →

## Appears In

- [[Advance Your PHP Skills]]

## Related Courses

_Courses sharing skills:_

- [[Essential Statamic for PHP and Laravel Developers]] — PHP
- [[Essential Jigsaw for PHP and Laravel Developers]] — PHP
- [[Advanced PHP- Debugging Techniques]] — PHP
- [[PHP Techniques- Pagination]] — PHP
- [[PHP- User Authentication]] — PHP

---

[↑ Back to top](#)