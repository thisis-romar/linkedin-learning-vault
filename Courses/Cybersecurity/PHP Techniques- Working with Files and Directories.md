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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/PHP%20Techniques-%20Working%20with%20Files%20and%20Directories.md)

![PHP Techniques: Working with Files and Directories](https://media.licdn.com/dms/image/v2/C4E0DAQGj8JmjPhirmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614274556817?e=2147483647&amp;v=beta&amp;t=UG_vYIh5xc7hhvK1rF38vblBaacd4SVgMGg26mQ-rnA)

# PHP Techniques: Working with Files and Directories

> Having the knowledge for effectively working with files and directories is important for any programmer looking to go beyond the basics of PHP. With this course, Kevin Skoglund covers the important file skills for any PHP developer to have. He shows how to read from files, write to files, search directories, change permissions, and create forms so that remote users can upload files. He also shares

> [LinkedIn Learning](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories) | 2h 8m | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Work with files and directories in PHP](#work-with-files-and-directories-in-php)
  - [Using the exercise files on GitHub](#using-the-exercise-files-on-github)
- [**1. Working with Files**](#1-working-with-files) (13 videos)
  - [Filesystem basics](#filesystem-basics)
  - [Relative paths and magic constants](#relative-paths-and-magic-constants)
  - [Accessing files](#accessing-files)
  - [Reading from files](#reading-from-files)
  - [Reading line by line](#reading-line-by-line)
  - [File permissions](#file-permissions)
  - [Writing to files](#writing-to-files)
  - [Writing line returns](#writing-line-returns)
  - [Deleting files](#deleting-files)
  - [Moving the file pointer](#moving-the-file-pointer)
  - [Examining file details](#examining-file-details)
  - [Challenge: Create a log file](#challenge-create-a-log-file)
  - [Solution: Create a log file](#solution-create-a-log-file)
- [**2. Working with Directories**](#2-working-with-directories) (7 videos)
  - [Directory basics](#directory-basics)
  - [Creating and deleting directories](#creating-and-deleting-directories)
  - [Accessing directory contents](#accessing-directory-contents)
  - [Skipping directory entries](#skipping-directory-entries)
  - [Pattern matching with glob](#pattern-matching-with-glob)
  - [Challenge: Directory treasure hunt](#challenge-directory-treasure-hunt)
  - [Solution: Directory treasure hunt](#solution-directory-treasure-hunt)
- [**3. Accepting User-Uploaded Files**](#3-accepting-user-uploaded-files) (9 videos)
  - [Configuring PHP for file uploads](#configuring-php-for-file-uploads)
  - [Sending files as form data](#sending-files-as-form-data)
  - [Inspecting uploaded files](#inspecting-uploaded-files)
  - [Moving uploaded files](#moving-uploaded-files)
  - [Handling upload errors](#handling-upload-errors)
  - [Setting file permissions](#setting-file-permissions)
  - [Securing file uploads](#securing-file-uploads)
  - [Challenge: Profile photo](#challenge-profile-photo)
  - [Solution: Profile photos](#solution-profile-photos)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Work with files and directories in PHP](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/work-with-files-and-directories-in-php?u=76281980&t=0)** - [Kevin] This course will teach you how to use [[PHP]] to work with files and directories. We will read from files, write to files, search through directories, change file permissions, and create [[Forms]] so that remote users can upload files. These are important skills for any PHP developer to have. We will start with the basics of the file system. We'll walk through demonstrations of the PHP functions together. There'll be code challenges using some fun, practical examples. You can follow right along with me or sit back and watch. Along the way, I'll share my advice on best practices. You will immediately be able to apply your new skills to your own projects. My name is Kevin Skogland. I'm a web developer who has been using PHP for over 20 years. I'm excited to show you how I use it to work with files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Forms]] (1)
> **CLI Commands:** php (4)
> **Env Vars:** php (4)
> **Speakers:** - [kevin] (1)

#### [Using the exercise files on GitHub](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available in a [[GitHub]] repository. You can find it at this URL. It's a project hosted by the [[LinkedIn]] Learning account and it's called [[PHP]]-techniques-working-with-files-and-directories-2873106. The repository has branches which correspond to each of the videos in the course. You can use the branch pop-up menu to switch to a specific branch and review the code for a specific video. For example, the branch titled 01_03b, would show you the code for chapter one and the third video. Branch names with a B at the end indicate that they contain code as it is at the beginning of the video, branch names ending with E contain its state at the end of the video. You can also download the code to work along with me. If you're a [[Git]] user, you can clone the repository by clicking on the Code button and then click on the clipboard icon to copy the URL. Then you can type git clone and paste in the URL that you copied to your clipboard. You will also notice this is the same URL as the GitHub repository, but with .git at the end. Then you can navigate into the cloned project and check out the branch you want. The branch 01_01b is the start of the course. You don't need to know Git or have a GitHub account to follow along. If you choose the branch that you want,
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/using-the-exercise-files-on-github?u=76281980&t=94)** then you can click the Code button and choose Download Zip, which will download a file containing the code for that branch only. Once it downloads, you can decompress the file and open the project in a text editor to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (4), [[GitHub]] (3), [[LinkedIn]] (1), [[PHP]] (1)
> **CLI Commands:** git (4), find (1), php (1)
> **Env Vars:** url (4)
> **Tools:** github (3)
> **UI Navigation:** switch to (1), click on (1), open the (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Filesystem basics](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=0)** - [Instructor] We'll begin learning to work with files and directories in [[PHP]], by learning about some File system basics. The File system is the part of any computer that keeps files and directories organized. Usually, the File system is going to be on some type of storage media, like a hard drive, and every file or directory on the hard drive has a file path. The file path describes how to find the file. There are two types of file paths, absolute and relative. An absolute path would start at the beginning of the hard drive and list all of the directories that we'd have to go through to locate the file or directory that we are interested in. A relative path is similar, but instead of starting at the root of the hard drive, it's a path relative to another file. All files and directories also have file ownership and permissions, which control access to those files. If you have trouble reading or writing a file, it could be due to the file permissions. Let's begin by looking at three PHP functions, file_exists, is_file, and is_dir. All three of these functions return a Boolean value, either true or false. I'm going to be working in my sites directory, in a directory called PHP_sandbox. You can see I have some assets in there already that I'll be using later on. Right now, I'm going to go into the Atom text editor where I have this open as a project, and I'm going to create a new file in the PHP_sandbox, I'm going to save that as file_basics.php. Let's start by creating a file path inside of here. I'll add some PHP tags,
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=95)** and then inside of those, I'll add a variable for file path, and then I'll set it equal to a string. For me, the contents of that string is going to be /Users and then my username, Leukoagglutinin and then capital Sites and then PHP_sandbox and then file_basics.php. I'll put a semicolon at the end. Your path will certainly be different than mine. I can also click with the command key on the top of the file here and see a list of the path to get to this file. You can see, here is the hard drive and then I've got my Users, KevinsKoglund, Sites, php_sandbox, all the way until I get to that file. And I can do the same thing over here in the regular File system as well. And that'll help you know where the path to this file is. This is an example of an absolute path because the path to the file, starts at the root of the hard drive. Once you have your path, let's try using the file exists function with it, echo, and then we'll use file_exists on that string filepath. And, that's going to return true or false. So I also want to use it as part of a ternary operator. I'll use exists or none. The ternary operator is like a one-line if/else, statement. If this first part returns true, then it will return this value here, exists. If it's not true, then it will return the second value, none. And, let's also add another line here that will just echo back a br tag
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=189)** so the [[HTML]] will look nice. All right, let's test this first example out in Firefox. I'll come to Firefox. And for me the path to this is going to be, local host and then the tilde Kevin Skogland and then PHP underscore sandbox file basics dot PHP. For you that URL may be different. My web server is configured to serve PHP files out of this directory. You can see that it returned exists, which means that file exists returned true. We can try it again with something that we know doesn't exist like file basics two dot PHP. We'll save the file, come back over here and reload it and you'll see that it says none. The file doesn't exist. If you had trouble getting it to exist, then check your file path until you get it right. So file exists is able to take any string and check the File system to tell us if there's a file at that location. I want to be sure to point out, that this string here describes a path on the hard drive and it's not the same as the URL that's used over here in Firefox, even though there are some similarities. The file exists function works with directories too. I'll copy this and paste it here, and let's add up here below file path something called dir path. And dir path is going to be equal to the exact same string that we had here, but let's take away the file name. So now we're just referring to the directory.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/filesystem-basics?u=76281980&t=283)** And so then we can ask it does the directory path exist, dir path. Come back over here and reload the file and you'll see, yes, it does exist. We can also use the other two methods to test whether something is a file or a directory. I'll just copy these two here and paste them in. And now instead of file exists, let's say is_file. So again, the return true or false, depending on whether it is a file. This one will pass in file path. This one will get the directory path. We'll just change this to file or not file, and file or not file. And we can do the same thing, I'll just copy these again and paste them, and we can check with is_dir, to find out if it's a directory or not. Again I have file path here and dir path here, but this time we'll say this is a dir or not dir. Dir is very commonly used for short for directory. We'll save it. Now I'll come back over to Firefox and reload it, and you'll see that tells us that the file path is a file but the directory path is not a file. The file is not a directory, but the directory path is a directory. Just like we'd expect. Now you know how to use an absolute file path, and how to get a PHP to tell you, if it exists in the File system and whether it's a file or directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[HTML]] (1)
> **CLI Commands:** php (10), find (2)
> **Env Vars:** php (8), url (2), html (1)
> **Code Identifiers:** file_exists (2), is_file (2), is_dir (2), file_basics (2), php_sandbox (1)
> **Definitions:** is a  (5), is an  (1), means that (1), short for (1)
> **Tools:** firefox (4), atom (1)
> **File Paths:** file_basics.php (2)
> **Analogies:** just like (1)

#### [Relative paths and magic constants](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=0)** - [Instructor] In the previous movie, we worked with absolute file paths. Now let's take a look at relative paths and something called magic constants. [[PHP]] defines a few values for us, and we call them magic constants, because they're automatically set. We're going to look at two of them. The first is __FILE__. It may be hard to see, but before and after the [[Microsoft Word|word]] FILE in all caps are two underscores. It is _, _, FILE, _, _. The underscores are a tip that it's one of the magic constants. There are several others in PHP, but __FILE__ and __DIR__ are the most useful ones. PHP sets the file magic constant to the absolute path of the current PHP script that's being run. PHP sets the __DIR__ magic constant to the absolute path of the directory of the current PHP script being run. You can also determine the same value for yourself by using the dirname function on the __FILE__ magic constant. Dirname returns the parent directory of any file or directory. All of these will return strings which contain absolute paths. Then we can use relative paths to locate other files based on that location. There are a couple of Unix conventions that are useful for working with relative paths. The first is a single period which represents the current directory. Even more useful, a double period represents the parent directory. This is a Unix console and you can see
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=93)** what a typical file list inside a directory looks like. You see the single period here, that's a reference to the current directory, and the .. is a reference to the parent directory. And then I have the files which are inside that directory. Remember, a path is just a string. If we append a string onto the end of a directory path, then we'll have a new string that's a path to a file in that directory. Or, we could use these Unix conventions and define a relative path. This string says to go to the parent directory to find file.txt. You can also use the PHP dirname function to find out the name of that directory, but this can be faster to write. Let's try this in PHP. Let's make a new file in our project, and we're going to save it as file_relative.php. And let's put our PHP tags in there. And then inside there, let's put echo, and let's use those magic constants, __FILE__, and then I'll append just the string with a br tag, just so we get a nice line return in our [[HTML]]. And then I'll copy that and paste it, and I'll just change that to use __DIR__ for the directory. Let's take a look at these in Firefox. We'll open up Firefox, and I'll change this from file_basics to file_relative. You can see it returned an absolute path
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=186)** to the current running file and to its directory. We already know how to use file_exists. Let's try it here. Let's add another line here, and we'll use echo file_exists, and let's put in that __FILE__, and question mark, we're going to use the ternary operator again with exists and colon none and then a semi-colon at the end, and we'll echo back a br tag just to make it look nice. Let's also do another one where we set the file path to be equal to the directory string, and then we'll append onto it /file_basics.php, and then we can do the same code just to see if it exists. But of course we're going to use $filepath instead of the file. So now it's a relative path from the current directory to file_basics.php. Notice that I put a forward slash in front of the file name. If you look back at the string over here for the directory, you'll see that it does not end in a slash separator. So I need to be sure to add it. All right, so let's save that file. Let's go to Firefox and let's try it out. You can see that it tells me that both of these files exist. Often, when I'm working in PHP, I define a PHP constant of my own, which is a path to the root of the project. And then I can use relative paths from that anchor. You can define that constant by writing out an absolute path or determine it using the __FILE__ and __DIR__
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/relative-paths-and-magic-constants?u=76281980&t=281)** magic constants that we just learned. Relative paths and magic constants are going to be useful for making your PHP code portable, whether it's to other directories or to other file systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (15), [[Microsoft Word|Word]] (1), [[HTML]] (1)
> **CLI Commands:** php (15), find (2), make (2)
> **Env Vars:** php (12), file (2), html (1)
> **Code Identifiers:** file_basics (3), file_relative (2), file_exists (2)
> **File Paths:** file_basics.php (2), file.txt (1), file_relative.php (1)
> **Definitions:** is a  (4)
> **Tools:** firefox (3)
> **UI Navigation:** go to (2)

#### [Accessing files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=0)** - [Instructor] Now that we know how to construct file paths, we're ready to learn how to access files. In [[PHP]], you're most often going to do that with the fopen function. Fopen opens a file so that you can work with it. It doesn't matter if you plan on reading from it or writing to it, you first have to open it. The fopen function returns a file handle. This is a reference to the open file that we can then use to read from it, to write to it and to close it when we're done. If fopen fails to open the file, it'll return false. Notice that fopen takes two arguments. The first is the path to the file that we want to open. The second is the file access mode. Let's talk about what the options are for the mode. The mode is a short string, which is an abbreviation for the way that we want to access the file. If we use R, PHP will open the file in read mode. It will allow us to read from the file starting at the beginning and of course to read the file, it must also exist. In read mode, we won't be able to edit the file. If we use W, PHP will open the file in write mode. Write mode will truncate the file and clear all its data if it already exists and then set us up to write new data at the start of the file. We can't read data from the file while in write mode, only add new data. If we use A, PHP will open the file in append mode. As the name suggests, it doesn't clear out existing data but sets us up to add new data starting at the end of the file.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=94)** Each one of these modes has a variant with a plus sign after it. PHP will open the file in the same way but not restrict reading and writing. You can do both. It can be confusing for beginners to know which one of these you want to use. So let me give you some tips. Use W whenever you're starting a brand new file. Remember that on an existing file, this would clear all data but it's ideal for writing new data. Use R+ anytime you want to both read and write to an existing file. Use R if you want read-only access to a file and use A if you're just adding new data to the end of a file. These four will handle most cases. Let's try it out. I'm going to start by creating a new file in our project. I'm going to save it as file_access.php and inside there, we'll start with our PHP tags and then I'll also define a file path which will be __dir and then append to that the string assets forward slash lorem ipsum dot TXT and the semi-colon at the end. We can see that file over here. It's included in the exercise files but you can use any text file in its place. Let's try opening up the file at that path. We'll start with read mode because it's unlikely to have permissions problems which we'll talk about soon. We know that we'll use the fopen function and we know that that takes two arguments.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=189)** The first is the file path and the second is the mode and we're going to use the read mode. We also know that this returns a file handle. I usually call it dollar sign file when I'm working but I'm going to call it handle just to make it really clear. Then once we have the handle we can check to see if it exists. Remember it returns false if it doesn't exist. So if there's a handle, then else something else. So if we have a handle, let's echo back success and let's put a semi-colon at the end and then down here let's echo could not open file and a semi colon at the end of that. Now I'm going to add one more part after I opened the file and then I'm going to do whatever reading and writing I want to do here. Then at the very end, once I'm done with everything I'm going to add fclose and pass in that handle. The file handle is a reference to the open file and we'll use it anytime we want to refer to that file. PHP would close all open files at the end of the execution of the script but it's a good practice to close files when you're done with them. For one thing, it prevents writing to the file accidentally somewhere else in your code. Let's try this out in Firefox. Save it. I'll open up Firefox and this is going to be file access dot PHP. You'll see it tells me success.
>
> **[4:43](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-files?u=76281980&t=283)** PHP was able to find a file at the file path open it up in read mode, get back a file handle, output the message and then close the file. The procedure that we just did is the basics for accessing any file in PHP. Of course, it'll be a lot more exciting once we know how to read and write to that file. Let's work on that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11)
> **CLI Commands:** php (11), make (1), find (1)
> **Env Vars:** php (10), txt (1)
> **UI Navigation:** open the (5)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** firefox (2)
> **File Paths:** file_access.php (1)
> **Code Identifiers:** file_access (1)

#### [Reading from files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=0)** - [Instructor] Now that we know how to open files, let's learn how to read data from them. There are three techniques for reading files that I want to show you. This movie is going to cover the first two. The first we'll look at is [[PHP]]'s fread function. Fread takes two arguments, the handle of an open file and the number of bytes we want to read. In most character sets, one byte is equal to one character. So you would read the first 20 bytes to get the first 20 characters of the file. The second technique for reading a file is the PHP function file_get_contents. It reads an entire file all at once. Notice that unlike fread, it takes a file path as an argument instead of a file handle. It's like fopen and that's because file_get_contents is a shortcut for opening a file, reading the entire contents and then closing it. Let's try them out. Let's begin by doing a select all and copy of everything that's in file_access.php. Then let's open a new file, paste that in and let's save it as file_read.php. We already have the basics of opening up the file, we're using fopen and if we get back a file handle instead of just echoing success what we want to do is read data from the file. So I'm going to remove this out of here and instead I'll use fread and then we know we want to pass in that file handle and then tell it how many bytes we want to read. I'm going to read 20 bytes
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=94)** and that is the same as 20 characters, bytes/characters. Now this will read them but then what do we want to do with them? We need to catch them in a variable. I'll have a variable here called data. So whatever it reads will be assigned to this variable and then down here, I can just echo back $data and it will output whatever it read from that file. Let's save it and try it in Firefox. Instead of file access I'm now going to go to file_read.php and you can see it returned the first 20 characters out of that lorem ipsum file. Typically, you're going to read characters if you're looking for something. For example, you might look through the file examining its contents for a particular phrase, or for lines that begin with certain characters. If you did want to read the whole file then you could use another PHP function called filesize to find out how many bytes there are and then read them all. For example, we could have bytes equal to filesize and then we'll pass in that same file path. This will tell us the number of bytes in the file at that file path. Once I have this number here, I can take it and just drop it right in here. Save the file. When I come back over to Firefox and reload it, you'll see that it returns the entire file. You will notice that there are no line returns in this output. You can view source on the page and you'll see that there are line returns there
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=187)** but [[HTML]] is not respecting them. PHP has a handy function that can help us. It's called nl2br and we can pass in any string to it and it'll convert any new lines that are in that string into br tags which HTML will respect. We'll save it and now when we reload the HTML page, we get the line returns that we would expect. Now let's try the second way of reading files using the shortcut file_get_contents. I'll comment out this echo line right here for now so that we don't see the output. It will still read the file but the output won't show that lorem ipsum text. So now for the shorter version, we'll set the variable data equal to file_get_contents. We'll pass it in a file path, the same one as before and then we'll simply call echo nl2br on that data. We'll save it, come back over here and reload the page and you'll see me get the exact same thing. It's much easier but it won't always fit your purpose. For example the file might be too large to read all at once or you may want to read parts of the file and do additional processing in PHP. It's important for you to know how to do both. So to recap, we learned how to use the fread function to read a number of bytes from the file. We know how to use the filesize function to find out the number of bytes in the file. Nl2br was a handy function for converting any new line
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-from-files?u=76281980&t=281)** into a HTML br tag and file_get_contents is a handy shortcut that will open a file, read all of its contents and close the file all at once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[HTML]] (4)
> **CLI Commands:** php (8), find (2)
> **Env Vars:** php (5), html (4)
> **Code Identifiers:** file_get_contents (5), file_read (2), file_access (1)
> **Analogies:** for example (3), it's like (1)
> **File Paths:** file_read.php (2), file_access.php (1)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)

#### [Reading line by line](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=0)** - [Instructor] We know how to read characters and how to read an entire file. Often it's useful to read a file one line at a time. The [[PHP]] function fgets returns the next full line from a file. That's one line, all of the texts up until the next line return. It's useful when we want to read a file line by line. Most often you would use it inside a loop. It keeps track of which line is the next line using something called a file pointer which we'll discuss a little later. A classic use would be to read a CSV file where each row contains comma separated values. And then the PHP code can work with each line one at a time. Let's try it. To begin let's switch to fileaccess.php and select all and copy that code again. And then let's open a new file which we will save as file_lines.php and then I'll paste that code in there. I'll also just move this after file read. Instead of working with assetsloremipsum.txt, let's change this to be uspresidents.csv. You'll see that that CSV file is over here in the assets directory. We're going to open up that file just like we did before but this time, instead of reading just a few bites from that file, we're instead going to use fgets and pass in that open file handle and it will then return back to us the next line. Of course, we want to capture that.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=93)** So let's put that inside data. And then down here, we'll put back in our code that uses nl2br on the data as it outputs it. So let's save it. Let's go to Firefox and let's try it out. Instead of file read, I'm going to use file lines. And you see it gives me the first line of that CSV file. So I want to take that and copy it and I'll paste it and I'll just append onto it with the .equals. Now we come back. You'll see I get the second line and then let's try it again. I'll just copy that and paste it. Save it, reload the page. And you'll see, I get the third line of the file. You can see that it kept track of which line it read each time fgets was called. The first call returned the first line, the second call returned the second line. You can put this inside of a loop in order to get all of the lines. Let's try adding a variable here for data. It's going to start out as an empty string. And then every time we're just going to append onto that string until we have all of the lines. So we need a loop to do that. I'm going to use a while loop. I'll move this inside of there. Now, what is my condition on my while loop? A PHP function called feof will return true or false if we're at the end of a file. So it's going to be F as in F open F read F close and then EOF is short for end of file. And we're going to pass in the open file handle
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=188)** and they'll tell us whether or not we're at the end of the file, true or false. So it will return true, if we're at the end of the file that's not what we want in our loop. We want to know when we're not at the end of the file. So I'll put an exclamation point in front to negate it. So while not at the end of the file, keep looping. And every time you loop through, it's going to append another line onto it. Let's save it and try it out. Come over here and reload the page. You can see now it reads every line of the file. Now, this may seem very similar to what we were doing in the last movie, let me demonstrate why it's a little different. It's because we can do additional processing in here. We can do appending like we are now, we can examine it, we can parse it, et cetera. So as an example, instead of just appending this onto data, let's instead change this so that we're getting back the row and then let's take that row and we'll create an array. We'll use the PHP explode function which takes its first argument, the thing that we want to delimit it on which is the comma in this case, and we'll take it a row and they'll turn each one of those elements into an array. And then instead of appending it to anything, let's just echo back dollar sign array. We'll take the first element of the array. We come over here and take a look. It's going to make an array for us out of this. This is going to be the zero element. This'll be the first element. This is the second and so on. So here's the first element of the array,
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/reading-line-by-line?u=76281980&t=281)** the president's first name. And then I'll append a BR tag onto the end of that. Let's save it and let's come over and reload the page. And you can see why it's useful, right? We went through and we grabbed every line. From that line we extracted just the information that we were interested in and then we did something with it. In this case, we just displayed it to the screen but you could easily use it to do something else. Reading files line by line is a useful skill to have in your toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6)
> **Env Vars:** php (4), csv (3), eof (1)
> **CLI Commands:** php (6), make (1)
> **File Paths:** fileaccess.php (1), file_lines.php (1), assetsloremipsum.txt (1), uspresidents.csv (1)
> **UI Navigation:** switch to (1), go to (1)
> **Definitions:** short for (1), is a  (1)
> **Code Identifiers:** file_lines (1)
> **Cross-References:** in the last (1)

#### [File permissions](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=0)** - [Instructor] Before we continue learning about how to work with files in [[PHP]], we need to pause for a moment and learn a bit about file permissions. Frankly, file permissions can be a little bit of a hassle, but it's important to understand them so that they don't get in our way. Files and directories belong to a particular user, and the web server is often a different user than the user that owns a file or directory. Permissions on files and directories determine who can have access to them. You cannot read to a file without having file permissions and you also cannot create or delete a file without directory permissions. So if the permissions aren't set right, they can prevent us from reading or writing a file using PHP. Further complicating matters, setting permissions varies by operating system. If you're using [[Windows]] via the graphic user interface, you can go to a file, choose Properties, choose the Security tab, and click Edit to change the permissions. On macOS, in the graphic user interface, you can select a file or directory, choose Get Info, and then go down to the Sharing and Permission section to set the permissions. Or on Unix, which includes [[Linux]], macOS from the command line, and Windows Subsystem Linux, we can edit permissions from the command line using a command called chmod, short for change the mode of the file. Unix file permissions are written as nine characters, rwx, rwx, rwx. Any of those nine characters can be a dash instead
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=95)** if the permission is not granted. You should look at these nine characters in sets of three. The first three are user permissions. R is for reading permission, w is for the writing permission, and x is for the execute permission, which applies to executable files. The second set are group permissions. Users can be put into different groups and everyone in the group would have permission for the file. The third set are permissions for other, or everyone else in the world. There's a lot more to Unix permissions, but if you just learned this much, we'll be able to use the chmod command. You would use the sudo command first because changing permissions is a privileged action. Then chmod, c-h-m-o-d, then you can see I have ugo for user group other, and then an equal sign, and then rwx for read, write, and execute. This would grant read, write, and execute permissions to the user, the group, and other. You can drop any of those letters out. If you only want to set user permissions, you would leave out the g and the o. If you only want to allow the write permission, you can leave out the r and the x, and so on. Just to give you a feel for it, if I click on my php_sandbox directory, if I select it and I go to the File menu, and I go down to choose Get Info, there's a section on sharing and permissions. You can see that I own the file, and I have read and write permission, and you can see that the staff group
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=187)** and everyone else has read-only permissions. I'm not going to edit the permissions here. Instead, let's go to the Unix command line. From my user directory, I'm going to go into my Sites directory and I'll use ls -la to list the contents of that directory. You can see here's my php_sandbox, and you can see its permissions, read-write-execute, read-write-execute, read-write-execute. It's okay if yours are different. Let's try ls -la and then php_sandbox. Now I'm looking at the contents inside the php_sandbox directory. Here, you can see that my user has read and write permission, but not execute, and the group and other have read-only permissions. The x permission doesn't matter too much unless the file's an executable file. Let's try using that chmod command. I'll use sudo first, then a space then chmod. I'm going to set ugo equal to rwx and then php_sandbox.
>
> **[4:12](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/file-permissions?u=76281980&t=252)** Remember, I'm in my Site's directory currently, so here's the php_sandbox. I'm going to hit return. It's going to ask me for a password. That's the password you use to log in and to install new software. I'll type mine in, and now I'll hit the up arrow to ls -la, and you'll see that php_sandbox now has all those permissions set. Those happened to be the permissions it already had, but we can change it to something else if you want to try that. But notice if I do ls -la php_sandbox, those did not change. I only told it to change the permissions for the upper directory. We can use the same command, but go back and insert a -R for recursive, and that will change all the files and directories inside recursively. It doesn't ask me for a password again since I entered it recently. I'll hit the up arrow, and now you can see all of those files have also been set to have all permissions for user, group, and other. We'll talk more about file permissions later on. For now, I wanted to give you tools so you can make sure you have read and write access to the files so we can continue learning. If you find that you're unable to read a file or unable to write to a file, check its file permissions and try changing them to something that will allow you to read and write.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** chmod (5), ls (4), php (2), sudo (2), make (1)
> **Code Identifiers:** php_sandbox (8), macos (2)
> **UI Navigation:** go to (3), click on (1)
> **Tools:** command line (3)
> **Env Vars:** php (2)
> **Definitions:** short for (1), is a  (1)
> **Prerequisites:** install (1), make sure you have (1)

#### [Writing to files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=0)** - [Instructor] In this movie we'll learn how to write data to files using [[PHP]]. We will learn two techniques. The first, is to use the PHP function fwrite. We learned fread earlier, and this is its counterpart. The first argument is a handle for an open file, we must have a file open for writing first. The second argument is the data that we want to write. It will add that string to the open file, and return the number of bytes that were written, or false if there was an error. You can capture that return value in a variable, but most of the time you don't need to. If you call fwrite more than once, it adds the new data after the previously written data. The second technique is to use the function, file_put_contents. It's similar to file_get_contents that we saw earlier. It's also a shortcut which opens a file, writes the data and closes the file all in one step. It's useful if you just want to write data to a file all at once, and then be done. Note that it will overwrite an existing file. There's an option that you can use to upend instead but I don't recommend it. I recommend using Fopen with the A mode to append data. Let's try them out. Let's make a new file on our project and we're going to save it as file_write.PHP. And let's copy the code that's inside file access.PHP as a starting point. Over and paste that in here. Let's change our file path,
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=93)** I don't want to write to the lorem ipsum file, remember that when we use write mode it will delete all data in an existing file. So instead I will create a new file called, sample file.TXT. That's the file that doesn't exist yet, but write will create it. The first step to writing a file is to open the file. And I'm already doing that here with Fopen, but instead of R for read mode, I'm going to use W for write mode. And I'll make a note here, that that will overwrite any the existing data. We can also use A for append mode to write to the end of a file. If the file opens and we have a file handle, then right here, we can call Fwrite, and then we'll pass in the file handle, and then the data that we want to write as the second argument, I'll put in one, two, three, four, five, six, seven, eight, nine, zero. Let's save the file and let's open up Firefox. I'll change this instead of file lines that PHP is going to be file write.PHP. It succeeded. It did not return any output to the browser because we didn't ask it to. We only told it to write data to the file. Over here, you can see that it did add the file, sample file.TXT. If it failed for you, then check the permissions on the PHP sandbox directory.
>
> **[3:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=185)** Like we discussed in the last movie to make sure that PHP can create new files. If we open that file, you can see that it contains the data that we asked it to write. Let's close it again. And let's add another call to fwrite, I'll put this one, let's put it right before it so we can see the difference fwrite, and we'll do the handle again, this time let's write A, B, C, D, E, F. So now I have a file that's open, I'm going to write something to it, then write something else to it, and then close the file. We'll save it let's come back over here, we'll reload our page, again we don't see any output. If we come look inside sample file.TXT, you'll see that it wrote the data that we asked it to. Notice that it overwrote the previous data. The W mode we'll do that. We could use the A mode if we wanted to upend instead. Also notice that PHP did not add any line returns. We'll discuss how to add those in the next movie. The other technique for writing is file_put_contents. Let's copy this file path here, and let's make a new file, we're going to call this one sample file2.TXT. And let's also create a variable called data, and let's assign some data to it. I'll just say a page of data. We can now open the file, write the data, and close the file in one step by using file_put_contents and then passing in that file path, and the data that we wanted to write.
>
> **[4:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-to-files?u=76281980&t=278)** It's that easy. Let's save it. I'll reload the page in Firefox. We'll see that now we have a second file here as well, sample file2.TXT. Sometimes you will have all the data ready and you can write to it all at once. Other times, you'll want to incrementally write data as you perform additional code processing or make database calls, it's useful to have both skills in your toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9)
> **CLI Commands:** php (9), make (5)
> **Env Vars:** php (9), txt (5)
> **File Paths:** file.txt (3), file2.txt (2), file_write.php (1), access.php (1), write.php (1)
> **Code Identifiers:** file_put_contents (3), file_get_contents (1), file_write (1)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **Tools:** firefox (2)
> **UI Navigation:** open the (2)

#### [Writing line returns](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=0)** - [Instructor] We need to discuss how to write line returns to your files using [[PHP]]. Different operating systems use different standards for line returns. In Unix and MacOS, a line return is represented by a backslash and the letter N. In PHP, you want to always use double quotes with it so that it has its special meaning as a line return. In [[Windows]] however, it is \r\n, two special characters together. This convention goes all the way back to the beginning of DOS and has caused a lot of headaches over the years. Recently, it has begun to change a little. Notepad now supports both and Windows can use [[Linux]] as a sub-system, which also uses \n. So maybe it will change, but for now we need to be mindful of this difference. Let's demonstrate line returns in the file_write.php page that we created in the last movie. I'm going to start by just going right up here and making some notes that Unix/Mac new lines are \n
>
> **[1:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/writing-line-returns?u=76281980&t=65)** and Windows new lines are \r\n, and also double quotes matter. Now, for this data that we have here, instead of just being a page of data, now let's put in the appropriate line return for your system. I'm working on a Mac. So for me, that's going to be \n. So I'll do \n and then let's do 111\n222\n333, we'll do a \n at the end of that. Let's save the file and let's go over to Firefox. I'm already on that file_write.php page from the last movie, so let's just reload that page. And when I do, we come over here and look at sample_file2.txt, you'll see that it output the data and it just put it as all one line. These aren't special characters. They're not line returns like we'd expect. What went wrong? Let's go back and look and remember double quotes matter. You can see I had single quotes around it before. Now let's go back, it'll overwrite that file, and we'll take a look again. And this time you'll see we got the line returns that we expect. So writing line returns is not difficult. It's just a matter of taking the operating system compatibility into consideration and making sure that you use double quotes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Windows]] (3), [[Linux]] (1)
> **CLI Commands:** php (4)
> **File Paths:** file_write.php (2), sample_file2.txt (1)
> **Env Vars:** php (2), dos (1)
> **Code Identifiers:** file_write (2)
> **Cross-References:** in the last (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Deleting files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=0)** - [Instructor] Now that we know how to create files, let's learn how to delete them. Deleting files is easy as long as you keep three things in mind. The first is that you cannot delete an open file. The second is that you need write permission on the directory containing the file in order to delete it. And the third thing to keep in mind is that the name of the [[PHP]] function for deleting a file is a little bit unusual. It is unlink, it's not F delete or file delete or something else you might guess. It can be a little bit hard to remember. If you send a file path to unlink, it will try to delete the file and return true or false. I'll create a new file in the PHP sandbox and I'll call it file_delete.php and I'll add some PHP tags
>
> **[0:54](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=54)** and then inside, a file path. filepath=__DIR__./delete_me.txt.
>
> **[1:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/deleting-files?u=76281980&t=67)** I'll go ahead and also use the file put contents that we just learned. file_put_contents with the file path and let's put some text in there just says delete me. So now we have a file with some contents in it. Can also use echo file_exists on the file path to check and see whether it exists. That'll return true or false. If it's true, will echo back exists. If it's false, then will echo back none. And let's echo a br tag at the end just to make it look nice. Okay, let's try that part out. So let's go over here into Firefox and we're going to call this file delete and there it is. File exists and you can see that it actually created the file for me right here, delete_me.txt. So now that we have the file, let's try deleting it. We can do that by just using unlink and then passing in the file path. Any file path will do. It'll go and delete that file and then let's check and see if it exists again. We'll copy this, bring it down here and save it. Let's go back and reload the page. You can see that it has the file. It exists and then it deletes it. There's none there. And sure enough, if we go over here and look, we see the file that we had created before is now gone. Deleting files is easy as long as you remember to close the file, make sure you have right permissions and use the unlink function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **CLI Commands:** php (4), make (2)
> **Code Identifiers:** delete_me (2), file_delete (1), file_put_contents (1), file_exists (1)
> **File Paths:** file_delete.php (1), __dir__./delete_me.txt (1), delete_me.txt (1)
> **Env Vars:** php (3)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)

#### [Moving the file pointer](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=0)** - [Instructor] As we've been working, you may have noticed that [[PHP]] keeps track of our position inside an open file. For example, when we used fget PHP kept track of which lines had already been returned. When we wrote to a file more than once, PHP kept track of where we left off each time. It does that using the file pointer. The file pointer is similar to the cursor in a [[Microsoft Word|word]] processing application. You can move the file pointer forward, and backwards through the characters in a file, and you can choose a position to start reading or writing from the file. There's one important difference though, unlike the cursor in a word processing program, the file pointer overwrites text. If you choose a position in the middle of a file and write 10 characters of text, PHP would replace the 10 characters that were there before. It does not insert the new characters and shift the old ones over like a word processor does. We're going to look at two PHP functions to help us manage the file pointer. The first function is ftell. Which takes the handle of an open file as an argument and returns the current position of the file pointer, also known as the offset. The offset tells you how many bytes of characters from the beginning of the file until you get to the file pointer's current position. The function fseek takes a file handle as the first argument and an integer for the offset as a second argument. It moves the file pointer to the offset. So ftell reports the offset, fseek changes the offset. Let's see how they work.
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=96)** Before we start writing any PHP, let's go over here to our files and let's just create a copy of our Shakespeare sonnet. I'm just going to duplicate that file and put it in my PHP Sandbox. And I'll rename it as just sonnet.txt. Over here you can take a look at the file, you can see it has a short Shakespeare sonnet, shall I compare thee to a summer's day, thou art more lovely and more temperate, and so on. We're going to use this file to learn about the file pointer. Let's create a PHP file now, close that up, and I'll make a new file and save it as file_pointer.php. Let's add some PHP tags. And a file path to our new file that we just created. It's in the current directory. And from the current directory, I just need to add a forward slash and then sonnet.txt. And we know that we're going to want to open this file. So we'll do what we've done before with handle equals fopen, the file path. And then for the mode, we want to use read and write mode. Now there are a few options that allow us to read and write but the one I recommend is r+. That's going to allow us to read, but also write, it doesn't truncate the file, it positions our file pointer at the beginning of the file. So it's there ready for us to write. So the offset will be zero at the beginning. Then after that, we can write our other code.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=190)** If we have a handle, then what do we want to do? Let's start by using our ftell. Ftell is going to take that file handle, and it will return back the offset which should be zero at the beginning. Let's go ahead and put echo in front of that so we can see what that value is. And let's also add a BR tag to the end just to keep it looking nice. Now, after it reports back the initial position, let's do a read operation. We can do that with fread. And I'll use the handle and let's read 26 characters. Now, normally we'd catch that data after I read it to do something with it, but I'm not interested in that here. So I'm just going to leave it out. I'm not going to be doing anything with that data, I just want to perform a read operation. Now let's go up here and copy this line, and then let's do a write operation. So fwrite, again with the handle and this time let's write the word winter and then I'll paste the ftell in again. And then let's end things with fclose on the handle. Let me just double check my work real quick. I've got all my semi-colons, it all looks good. Let's save it and try it out. I'll go into Firefox. And this time it's going to be called file pointer. So you see I get back three values, zero, 26 and 32. Let's move this over here
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=282)** so we can just see it next to what we're doing. The first ftell is zero. It starts out at the beginning of the file as we'd expect, the offset is zero. Then we read 26 characters. With the end of that read operation, we're now at an offset of 26. When we perform a write operation, we're starting to write at that offset. That's where the cursor is, is at that 26 offset. Then it writes the word winter, and when it tells us the cursor position, it's now at 32. Let's take a look at sonnet.txt and you will see you replaced the word summer with the word winter, it over wrote it. This is the position that we moved it to, right? We read this portion, the cursor was sitting right there. Then we wrote this portion. And so the cursor now is sitting right at that spot when we ended. That is the offset 32. Back in our PHP code, let's try using fseek. So before we close the file, let's just add a line here. And let's fseek, and we know we are currently at position 32. Let's tell it to just jump the file to position 35. And then from there, can have it tell the value again. And I'm going to have it tell one more time but in between those I'm going to write one more thing. Let me just go up here, I'll grab this line, it'll be a little faster than typing it. But instead of writing the word winter, I'm going to write the word eve, E-V-E.
>
> **[6:16](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-the-file-pointer?u=76281980&t=376)** All right, let's save it. Let's go back and reload the page. You can see now it moved the pointer two more times, it jumped it to 35, then it wrote the word eve, and now my pointer is at 38. If we go over here and take a look at the file, you can see that it now replaced day with the word eve. Now I carefully picked edits that were the same size. Summer and winter both have six characters, and day and eve both have three characters. So it ended up working out. If I had chosen, shall I compare thee to a winter's night, then it would not have worked out as well, I would have overwritten two extra characters. I would have overwritten the question mark, and the line return that comes after it. You may be wondering how you would insert or delete characters like you would with a word processor. It turns out that's tricky to do. Usually it's easier to read in all the data, make changes to it, and then replace the data in the file with the new version. If you have a particularly large file, then you may need to make use of a temporary file to keep things organized. Store some data in the temp file, make edits to a portion, store those edits, and then store the [[Representational State Transfer (REST)|rest]]. The main thing I want you to understand is that PHP makes use of the file pointer as it reads and writes data to files. And you can too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (12), [[Microsoft Word|Word]] (12), cursor (6), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** php (12), make (4)
> **Env Vars:** php (11)
> **File Paths:** sonnet.txt (3), file_pointer.php (1)
> **Analogies:** for example (1), similar to (1)
> **Code Identifiers:** file_pointer (1)
> **Tools:** firefox (1)
> **Definitions:** known as (1)

#### [Examining file details](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=0)** - [Instructor] In this movie, we'll learn what [[PHP]] can tell us about various details of files. We've already seen a few PHP functions. We learn about filesize, is_file, and is_dir. To this we can add is_readable, is_writable, and is_executable. Those take a file path as an argument. They'd first make sure the file exists, and then they return true or false based on whether PHP has permission to read, write, or execute the file. Before you try to write to a file, you can check to see if that's allowed. And if not, you can handle it in your PHP code gracefully. We can also examine file times using filemtime, filectime, and fileatime. Mtime is the last modified time. The last time that content was changed. Ctime is the last change time which is the last time that content or [[Metadata]] about the file was changed. It is not created at time as some beginners often believe. Atime is the last access time. The last time there was any read or any change. Each of these functions returns a unix timestamp. Which is the number of seconds since January 1st, 1970. We can use the timestamp as is for comparisons, or we can format it into a string that the user can understand. The PHP function pathinfo is also handy. It takes the file path and breaks it up into its parts. It returns an array with four elements,
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=92)** dirname is the directory name, basename is the file name with its file extension attached. And then it returns the filename and extension as separate items. Or you can just call dirname directly, we've seen that before, or basename, both directly on a file path. Let's give these functions a test drive. Let's start by creating a new page and saving it as file_details.php. And let's add our PHP tags. Then let's add a file path. We'll make that equal to the sonnet that we were just looking at in the last movie, where you can pick any file really. Just want to have a file that we can look at, sonnet.txt. And then let's do is_readable, is_writable, and is_executable. We'll echo back is_readable and put in the file path. That'll return true or false. And then we'll use that as our condition in our if else statement here. If it's true, we'll return back the string readable. If not, we'll return back just no. I'll save some typing by copying this and pasting it twice more. And just changing this from readable to writeable, you can do it with the e or without it, works both ways. I'll do writeable, and is_executable. And over here executable.
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=190)** Let's also just add another line below each one to echo back a br tag, just to keep them nice and tidy. Another extra br tag at the end to separate it from the next thing we'll look at. Let's try these out. I'll go into Firefox, and we'll load up file_details.php. And you see see it comes back and tells me the file is readable, writeable and executable. You may have gotten different results, that's okay. Next, let's do echo filemtime on the file path. We'll also append a br tag onto the end of that. Save it, come back over here and reload. And you'll see that it returns the number of seconds since January 1st, 1970. Now that's great for doing comparisons but we probably want to format it. We can do that using echo strftime. That's going to format the string. For that, we'll use a string that is %m/%d/%Y %H:%M.
>
> **[4:25](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=265)** And that will give me a nicely formatted time. So the second argument, I will now take this filemtime and the path, paste it in there. And then let's also add this br tag at the end, and a semi-colon. And let's copy that. And twice more, we'll do filemtime, ctime and atime. We'll see what each one of those look like. Come back over here and reload the page. And you'll see that it gives me the current times for all three of those, for the modified time, the changed time, and the access time. Let's try pathinfo now. Just grab this br tag, so we can separate it and we'll do path is going to be equal to pathinfo. We want to have that path variable there to catch the array file path. And then once we have those values in the array, let's take a look at what's in them. So we'll do that with echo $path, and it's an associative array. So we can call for them by name, dirname. And let's append onto that, the br tag. And I'll copy that. And in addition to dirname, we'll look at basename, and filename, and extension. There we go. And then let's just put a br tag here. And one last time let's look at just still this one as a starting place. Let's change this to instead be dirname.
>
> **[6:02](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/examining-file-details?u=76281980&t=362)** We've already seen that before but let's go ahead and check it out, dirname on filepath, and basename on filepath. All right, let's save it. Go back over here and reload it. And you can now see, these are the parts of what pathinfo gives me. The first part, let me just move this over so you can see it. Is the directory name, dirname. Here's the base name. I'm also getting those same values down here without going through pathinfo. And then it also helpfully tells me what the file name and the extension are separately. So if you're just interested in extracting the extension from the file, you can do that. Or if you're just interested in getting the file name, you don't have to write some functions to do that yourself, PHP will do that for you. These functions are good tools to have in your toolbox for working with files in PHP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[Metadata]] (1)
> **CLI Commands:** php (10), make (2)
> **Code Identifiers:** is_readable (3), is_executable (3), is_writable (2), file_details (2), is_file (1)
> **Env Vars:** php (8)
> **File Paths:** file_details.php (2), sonnet.txt (1)
> **Cross-References:** in the last (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a log file](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=0)** - [Instructor] It's time for a challenge assignment. In this challenge, I want you to take everything we've learned about working with files and directories and [[PHP]] throughout this chapter and work to create a log file. The idea is that in an application, you very often want to log some information to a log file. And so we want to write a PHP function that will make that easy. The function might be called something like log underscore action, and you can pass in information to it like the action or a message or both. Then inside that function, everything we need to log to the log file would be included. So all we have to do is call log action and we can log information to our log file. The assignment is fairly open-ended in how you actually accomplish that but I will give you a couple of suggestions and reminders. First, choose a file path for the log file. Where is the log file going to be located? You want to make sure that you're able to open the file and of course you'll want to handle any errors that might come up. You'll want to append new entries to the end of the log file while maintaining the old entries. So you don't want to accidentally overwrite the old entries, you want to make sure you're appending onto the end. In the next movie, I'll show you the solution that I came up with. For me, I'm going to do log entries that looks something like this where I have a date time stamp at the beginning and then a dash and then the action that I want to create, and the colon and some optional message that goes after that. In this case log in colon jsmith logged in. It may be helpful for that timestamp
>
> **[1:35](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-create-a-log-file?u=76281980&t=95)** to use the string f time function in PHP. It formats a Unix timestamp according to a format string. Here I've got an example string that you can use. The timestamp would be the second argument, if we leave it blank, then it defaults to the current time. So just using this as is, we return a formatted version of the current time. Spend some time working on this challenge assignment and then in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **CLI Commands:** php (3), make (3)
> **Env Vars:** php (3)
> **Cross-References:** in the next (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a log file](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=0)** - [Instructor] I hope that you were able to come up with a solution for this challenge assignment and that you were able to use [[PHP]] to write information to a log file. In this movie, I'm going to show you the solution that I came up with. I created a new PHP file which I called log_action.php which is going to both define the log action function and then I'm also going to use it down below. In a real application, we could call this log_action from a number of different places but I just wanted to test it out. Inside the log_action function, you can see that I'm setting the file path and I set it equal to the current directory where the log_action script is and appended that onto log.txt. That's the file that doesn't exist over here yet but it will be in the same directory. You could put it somewhere else. It doesn't really matter. Then you can see that I'm opening up the file using that file path and I'm using the a for append because I want to append onto the end. If I'd use w it would have truncated the file, I would have lost all my old log entries. That's definitely not what I want. I can also use r+ and that would allow me to read and write but the file pointer would be at the beginning of the file and I don't want that. I want it to be at the end of the file and append gives me that. Once I have the file handle I can check and make sure it's there. And then I'm figuring out what that time string is. I gave you that information inside the assignment. So it's just giving me the current timestamp as a formatted string. I can then use fwrite to write that
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=93)** then I'm going to write the dash then I'll write the action that I want whatever came in here as action. I'm using ucwords to make it uppercase. and then if there's a message, there may not be it's optional, but if there's a message, then I'm going to put a colon and a space followed by the message. And then last of all, that line return you want to make sure you have a line return at the end so I'm using backslash n because I'm on a Mac and I've got it inside double quotes, that's important. And then last of all I'll close that file. That's it. I open the file. I write a log entry to it and I close it again. Every time I call log_action it'll do that for me. I'll save this. Let's go into Firefox and try it out. In Firefox, let's bring up log_action.php, it doesn't actually output anything here but we can see it did create our log.txt file and there's the information that's in it. Let's go over here and let's reload the page again. You can see that it appended on to the end. So every time I call log_action, it opens up the file and it adds a new line to the end. If you're interested in taking this exercise further, here's a bonus challenge you can try. You can write PHP to read back the contents of the log file. You can have a PHP page which displays the log file contents. You can read it all at once but try reading it line by line because if you do, then you can try displaying only lines which contain certain texts. For example, something like login.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-create-a-log-file?u=76281980&t=187)** The sky is the limit and what kind of features you can add to it. My overall hope is that you're beginning to feel comfortable with the process of reading and writing files using PHP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7)
> **CLI Commands:** php (7), make (3)
> **Code Identifiers:** log_action (7)
> **Env Vars:** php (5)
> **File Paths:** log_action.php (2), log.txt (2)
> **Tools:** firefox (2)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)


### 2. Working with Directories

[↑ Back to Table of Contents](#table-of-contents)

#### [Directory basics](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn to work with directories in [[PHP]], starting with the basics. We've already learned several PHP functions which are related to directories. In the last chapter, we saw dirname, which returns the parent directory of a file or directory, is_dir, which returns true if a path is the path to a directory, file_exists works on directories too, and then is_readable, is_writable, and is_executable can check the directory permissions. In this movie, I want us to look at two more; getcwd, the cwd stands for the current working directory. If you're a Unix user, you might recognize it as being similar to the pwd command, the path to the working directory, and then the function chdir, short for change directory. This is similar to the CD command that Unix and [[Windows]] command line users use in order to change directories. Let's see how we can use them. In our PHP sandbox, let's create a new file and save it as dir_basics.php and we'll put in our PHP tags. And inside here, let's just start by using that get_cwd command. It takes no arguments and let's go ahead and put a br tag after it and echo the whole thing. So we'll just echo that to the command line
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=92)** and see what it gives us. I'll go into Firefox and try it out. I'm inside my PHP sandbox and I'm going to be in dir_basics.php. You can see that it returns my current working directory. Yours may be different. By default, when you run a PHP script, the current working directory is the parent directory of that PHP script. It's the same thing as the magic constant underscore underscore dir underscore underscore. You can specify files and directories relative to this directory or you can change into a different directory. You don't need to change directories, but if you do, then the relative paths may become simpler and easier to manage. It's really a question of coding style. Let's try changing directories. We'll come back over here and after we echo it, let's add in chdir, and then in parentheses, I'm going to say what directory I want to move into. I could provide that in absolute path, a relative path. In this case, I'll just use assets. If we look over here, you'll see that's my assets directory, and I'm just going to move into that directory. So that's relative to the current directory where I am now. Let's copy this line up here so we can see where it moves us into. We'll save and reload it in Firefox. You'll see that now it tells me my current working directory is my assets directory, just like I'd expect. Let's change directories again. I'll just copy these two lines, and here, let's change it into dot dot.
>
> **[3:06](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/directory-basics?u=76281980&t=186)** So I'm saying relative to the current directory where I am, go up to the parent directory. So I was in the assets directory. This would take me up a directory. We'll save it and reload it. And sure enough, you'll see that's what it did, or let's try one more. This time, let's tell it that we want to go from underscore underscore dir, and we'll go into the assets directory again, but we'll do it this way. Save it and reload it and you can see it moved me into that directory. Of course, whenever a PHP script ends, then there is no current working directory anymore. A new PHP script will return to the default and not remember the old one. We can reload this page to see that. If I just reload it, you'll see I was in the assets directory, but back at the beginning, I'm back in the sandbox again. Make sure you understand that once you change directories, that all relative file paths are based on the new location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Windows]] (1)
> **CLI Commands:** php (11), cd (1), make (1)
> **Env Vars:** php (9)
> **Code Identifiers:** dir_basics (2), is_dir (1), file_exists (1), is_readable (1), is_writable (1)
> **Tools:** command line (2), firefox (2)
> **Analogies:** similar to (2), just like (1)
> **File Paths:** dir_basics.php (2)
> **Definitions:** stands for (1), short for (1)

#### [Creating and deleting directories](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=0)** - [Instructor] In this movie we'll learn how to use [[PHP]] to create and delete directories. You can make a new directory with the PHP function, mkdir, short for make directory. You can give the function argument which is an absolute path or a relative path. If you just pass in a name, it would create a directory with that name in the current working directory. It returns true or false and also gives a warning level error if the directory already exists. You may want to use it with the file exists function. If the directory doesn't exist, create it. If it exists, do nothing. The PHP function rmdir does the opposite. It removes a directory. It also takes a directory path and returns true or false. PHP will not delete a directory if it's not empty or if it's open, which we'll learn how to do in the next movie. For now, let's try these functions out. Let's create a new file and save it as dir_create.php. And I'll put my PHP tags inside of it and let's just put mkdir and then we'll just call this temp. You can call it anything you want, but that's it. That's all we're going to put inside there. Let's save it and let's go over to Firefox and let's load it up. So dir_create and it created the directory. If we look over here, you'll see it created a directory called temp in the current working directory.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/creating-and-deleting-directories?u=76281980&t=93)** Of course, to create it, we have to have write permission on the parent directory. So make sure you have that if you had a problem. It's just like we had with files. Let's go back into Firefox and let's run the same script again. I have PHP configured to show warning errors and you can see that it gave me a warning that the directory already exists. So let's go back here and improve this by just saying, if not file exists temp and we will make the directory then. So only make the directory if it doesn't exist. Let's save it. We'll go back and reload the page. You see, we don't get an error anymore because the file already exists. Now let's try deleting it. Let's go ahead and copy this code because we can use the same kind of brackets and say, if the file exists, then remove it. That way we won't try to remove the file if it doesn't exist. So if it exists, remove it. Notice that I changed it to rmdir for removing it. Let's save it. We'll come back, run it. And you'll see that now, the directory is gone. If we run it again, it will both create it and delete it all in one step. So it doesn't reappear. The file doesn't exist, so it creates it. Then it does exist, so it removes it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7)
> **CLI Commands:** php (7), make (5), mkdir (2)
> **Env Vars:** php (6)
> **Warnings:** warning (3)
> **Code Identifiers:** dir_create (2)
> **Tools:** firefox (2)
> **Definitions:** short for (1), is an  (1)
> **File Paths:** dir_create.php (1)

#### [Accessing directory contents](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to list the files and directories which are inside a directory so that we can work with them. We'll be working with three [[PHP]] functions, opendir, readdir and closedir. These are very similar to the PHP functions we use to work with files. Opendir works a lot like fopen. It opens up a directory at the given path and returns a directory handle which we can use to reference the directory. Readdir works like fread and it reads information from the directory. Closedir works like fclose and closes the open directory. Let's try them out. Let's start by creating a new file in our PHP sandbox and we'll save it as dir_access.php. And let's copy everything that's inside file_access.php as a starting point because it's going to be very similar. We'll jump over here, we'll paste in and I can close file access now. Now, let's change this from file path to instead be dir path. That's the path to our directory, and let's just use the current parent directory as our starting path. Instead of having F come before the [[Microsoft Word|word]] open, now we have dir coming after the word open. And then instead of file path, we're going to have dir path and we don't have any kind of mode here. There's no access modes with opendir. It does still return a handle or false if it fails. So we still want to use this if to test whether we got a handle or not.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=92)** And then instead of fclose, we're going to be using closedir on that handle. Let's save it and try this part out. Go over to Firefox and let's do dir_access.php, and we get back success. Let's add some code now to read entries from the open directory. So, I'll remove these and in its place, let's put in readdir and dollar sign handle and let's go ahead and do echo on that. And we'll put a br tag at the end. Now what this will do is read one directory entry every time I call it. So let's go ahead and call it a few different times. I'll copy and paste it, so that I call it five times. Let's save it and let's try it again. You'll see that it returned five entries to us. Notice that it includes an entry for dot, that's a representation for the current directory and dot dot, a representation of the parent directory. Notice also, that the entries are not sorted alphabetically. When working with directories, you can't assume that the contents will be in any order. It gives them to us in the order that the file system has stored them and it doesn't bother to alphabetize them. This is only some of the entries in this directory. We may not always know how many entries there are. So if we want to list them all, we should write a PHP loop that ends when there are no more. One way you could do that is with a basic while loop.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=189)** Here, I'm reading an entry using readdir and assigning it to a variable, injury. And that's also a condition to the loop. As long as readdir returns a value, something which is not false, then the loop will execute. But there is a problem with this. If you run across a file or directory, whose name is the number zero, then it will evaluate to false in PHP and it would exit the loop. And that's not what we want. We can improve it by adding false, not equal, equal, and then putting the previous expression inside parentheses. Now, it will only exit if it returns exactly false. It's a minor point for a rare case, but it is a best practice. So we want to follow it. Let's add the loop to our PHP code. I'll put it right up here. We'll do a while loop and the condition inside it is going to be, if false is not exactly equal to, the injury equals readdir from the handle, then do the loop. And inside the loop, what are we going to do? Well, we know we want to do one of these, except that instead of this, we can replace it with the variable entry 'cause we now set that up above. I'll remove these. So now, as long as it keeps getting back some entry, as long as it's not actually false, it'll keep going through the whole list. Let's save this, go back to Firefox.
>
> **[4:44](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/accessing-directory-contents?u=76281980&t=284)** And we see all of the entries. I'm just listing the files, but, of course, you could do something else with them. You can copy them or examine them or open them for reading and writing. You might put them into an array so that you can sort them. If you decide to use an array, you might be better off using a shortcut. PHP has a function called scandir, which takes a file path and returns an array of the directory entries. It's a shortcut similar to file get contents. It opens the directory, adds all of the entries into an array and closes the directory, all in one step. Let's try it down here. I'll just do echo and the br tag to separate it, and then set an array equal to scandir on the dir path. And then after I have that array, we'll do echo dollar sign array and let's ask it for the third element, just so we can see what that looks like. Save it, come back over here and reload it. And you can see there it is. The third element in the array was assets. Now here, it was in a different position. Position may not be the same between what scandir gives you and what the loop gives you. But the larger point is that once you get this information into an array, then you can work with it as an array. You can sort it, you can scan through it. You can do all sorts of things. Whether you loop through the entries or put them into an array, these functions empower us to examine and move through the file system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[Microsoft Word|Word]] (2)
> **CLI Commands:** php (10)
> **Env Vars:** php (7)
> **File Paths:** dir_access.php (2), file_access.php (1)
> **Code Identifiers:** dir_access (2), file_access (1)
> **Tools:** firefox (2)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)

#### [Skipping directory entries](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=0)** - [Instructor] One common question is how to skip over directory entries especially since every directory contains entries for the.and.dot at the start. One easy way to skip entries in [[PHP]] is to write a conditional statement inside the loop, which calls continue. If the Boolean expression evaluates to true continue tells PHP to ignore everything else in the loop, and immediately jump to the next iteration. In our dir access dot PHP page. Let's add some code to skip some of the entries. Right here, we'll put in code that says, skip the.and.dot files and we'll do that with if and then a Boolean expression and then continue. So what should our Boolean expression be? Well, if entry is equal to a dot or if entry is equal to.dot, then skip over it. Let's save it. We'll go back to Firefox or reload this page. You can see now it skipped over.and.dot or we could skip over all dot files, skip all dot files. Anything that starts with a.at the beginning those are frequently configuration files and things we may not be interested in. You can see, I have one here dot DS store which is something the Mac operating system uses. Let's just copy this line up above
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=96)** but the conditional will change. Now I'm going to use stripos that's a PHP function that will scan through a string entry looking for another string in this case a dot and it will return an integer for its position or false if it doesn't find it. So I'm going to say if it's exactly equal to zero the position is zero with zero index, just like an array. So if the position of the string period is right at the beginning, then continue. We'll save it. We'll come back over here and reload. You'll see that dot file disappeared. We could do other things. Let's try copying this and let's skip all directories, right? We have a directory listing right here. Here's assets. Let's tell it not to look at assets anymore. We'll take this out and our Boolean now will be is dir and we can use dollar sign entry, even better though is to append the full path on there. So it would actually be dir path and then join that with the entry and I know that I'm working with dir path cause that's what I started with here. So I'm going to put whatever the directory path is followed by the entry. Now because I'm in the same current working directory, it would work without dir path, but it won't work in all cases. So I'm going to go ahead and write it this way. We've come back over here and you'll see now assets disappeared. This assets is different. That's coming up from down here
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/skipping-directory-entries?u=76281980&t=188)** where we have this array. You could change the Boolean expression to suit your needs. It could skip all files. It could skip files, if the file extension isn't an image file. This technique for skipping entries in the directory is flexible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4)
> **CLI Commands:** php (4), find (1)
> **Env Vars:** php (4)
> **Cross-References:** go back to (1), coming up (1)
> **Tools:** firefox (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Pattern matching with glob](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=0)** - [Instructor] There's a completely different technique for working with directory entries in [[PHP]] which is powerful and worth knowing about. We can use something called glob, G-L-O-B to do pattern matching. You call the PHP function glob and you pass in a pattern as an argument. It returns an array of all paths to files and directories that match that pattern. It returns an array of entries, but those entries may be in several directories, not just in one. It's a good way to scan for files or directories that match a pattern. To write a pattern, we need to learn the syntax. Any regular character will match the same character in the file name but there are a few special characters. They aren't the same as regular expressions but it's a similar idea. The question mark is a wild card that matches any one character. If you know regular expressions it's the same as a single dot any character. If we use the asterisk, it represents any zero or more characters. It's like saying, "I don't care what might or might not be in this part of the path." It's similar to the regular expression version with a dot and an asterisk after it. We can use square brackets to match any character inside the set, or put an exclamation point at the start to not match any character in the set. And if we want our pattern to match a literal question mark asterisk or bracket, we can put a backslash in front of it to take away its special meaning. Let's try an example.
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=94)** Let's create a new file and let's call it da_glob.php, I'll put my php tags inside of it. And let's start out by just calling glob and we're going to catch whatever it returns to us. I'll come back to the pattern in a moment whenever it returns to us, I'm going to catch in entries because it returns in array to us. And then let's take a look at what's inside that array using a foreach loop. And in that foreach loop, we'll save for entries as entry. So that'll then give us an entry that we can look at and br tag at the end. So we'll get the same effect as we had before. We'll get all of the entries and we'll list them with br tags one after another. Now what should we put in here as our pattern? To start with, let's do file_????? and then five question marks and then dot php. All of the regular characters like F-I-L-E those are going to match the exact characters over here. So you can see it's going to match F-I-L-E. The question mark is going to be any one character. So I'm looking for five characters in a row and then .php. Let's try it out. We'll save it. We'll go over to Firefox. Let's try da_glob.php. You'll see there're two of them, file_lines and file_write.
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=187)** It didn't match all the other ones though because they had a different number of characters. This requires it must be five characters. It doesn't care what the five characters are but there must be five characters. If I instead use the asterisk that says, "I don't care what the characters are," it could be nothing or it could be a million characters file_ and then something .php. So let's save it. We'll come back over here. And you'll see now we get everything that starts with the [[Microsoft Word|word]] file. If we try and example with character sets, we could put a character set around F now it'll match anything with file. If I put a T there and that'll match anything with file or tile. Now there's a kind of a contrived example cause I don't have anything in my directory called tile but it works the same way. We can come over here and we reload it and get the same results. You could also for example, do asterisk .txt, it's very common. I don't care what the file name is, I care about its extension. I'm looking for anything that it's the .txt file, I'll save it. I'll come back over here and reload and you'll see that it returned four to me. If we look over here you'll see these four files that are right here at the bottom. Notice it did not return these to me because it's looking at the path and the path it did not include directory changes in that. That's an important point. It's anything except the change of directory. If I want to look in another directory
>
> **[4:41](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/pattern-matching-with-glob?u=76281980&t=281)** I can do the star/star. Now this will say anything that's nested in any directory regardless of its name, that ends in .txt. So I'll save it, I'll reload it and you'll see here now return anything that's in the assets directory. So I am getting back those two files, but I'm no longer getting these because they don't match. Their path doesn't have that slash in front of it. The glob function is a powerful tool for scanning the file system for matching entries across many directories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (8), [[Microsoft Word|Word]] (1)
> **CLI Commands:** php (8)
> **Code Identifiers:** da_glob (2), file_lines (1), file_write (1)
> **Analogies:** it's like (1), similar to (1), for example (1)
> **File Paths:** da_glob.php (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (2)
> **Tools:** firefox (1)

#### [Challenge: Directory treasure hunt](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=0)** - [Instructor] It's time for another challenge assignment. This is an opportunity for you to use the techniques we've learned in the last two chapters. For this challenge, you're going to go on a treasure hunt. You will use the directory called Treasure Hunt, which is included in the exercise files. Your challenge is to write a [[PHP]] script, which will loop through all of the entries inside that directory. And you'll examine the file contents looking for the string, treasure. There's going to be more than one. Each time you find one, output the file path to [[HTML]]. At the end you'll have a list of all of the treasure locations. Let me give you a few tips to help you out. The first is start by just focusing on the current working directory. There's going to be a lot of nested directories, but just put those out of your mind to begin with and get something that works just for the current directory, that'll give you a lot of the tools that you'll need from there. Then you can start working with the nested directories after that. It's not necessary, but you may find it helpful to write some custom PHP functions, which perform some of the basic tasks. Let me give you an idea of what the files or directories look like. Inside the main treasure hunt directory, you'll find a number of other directories as well as some files. And then in each of those directories, you'll find more files and more directories and so on. So you'll see that they're nested. You'll need to loop through all of these
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-directory-treasure-hunt?u=76281980&t=92)** and try to find out which ones of these files contain the [[Microsoft Word|word]] treasure. Inside some of those files, you'll find some random words, but in a few of them, you'll find the word treasure, and that's what you're looking for. You want to scan those files and then record the file path every time you find the word treasure. Good luck with your treasure hunt, and then in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[PHP]] (2), [[HTML]] (1)
> **CLI Commands:** find (8), php (2)
> **Env Vars:** php (2), html (1)
> **Cross-References:** in the last (1), in the next (1)
> **Prerequisites:** you'll need (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Directory treasure hunt](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=0)** - [Narrator] I hope that you were successful on your treasure hunt if not, don't worry in this movie, I'm going to walk you through the process that I went through and you can follow along and try again on your own. The first thing I did was I created a new [[PHP]] file called treasure underscore Hunter dot PHP. You can see it here and inside there I defined a couple of functions. We'll come back to those and then you can see I defined the hunt path that is based on the current directory of the script that's the PHP sandbox and I upended that to assets and treasure hunt. That's this directory right here. So that's the path that I'm going to be hunting through and then I told it to pass that path into the walk directory function and that's it and it did everything from there. Let's take a look at walk directory and what it does. Walk directory has two jobs. The first is to go through the entries inside a directory. The second job is to look at that and determine if it's a directory or a file and if it's a directory, it walks that directory. If it's a file, it examines it and we'll see that with the examine file function. Here you can see I've got a handle the calls opendir on the dir path, check to see if that handle exists while it exists while it's not false I'm going to go through it. You can see here I'm skipping all entries that have dots at the beginning and then I'm just going to look at those other entries and see the entry path is the dir path plus the entry
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=92)** that gives me the full path for this and I need that so that I can call is dir on it. So it'll call is dir on that full path to tell me if it's a directory or not. If it's a directory, well, then I just call walk directory on it again. So we'll walk that directory. This is called recursion. We use walk directory to go through a directory every time we find a directory, we call walk directory again, it goes through all the entries and calls walk directory again and so on. Every time it finds something that's not a directory though, it does something different. It examines the file. So let's stop and take a look at what examine file does now. Down here in examine file, it takes a file path. It opens up that file path. It does that in read only mode gets the file handle then it calls F read and it checks the first eight characters of the file to see if the [[Microsoft Word|word]] treasure is there. Now I put treasure right at the beginning. If we had buried it in the file, well then we can go through and scan the file looking for the word treasure but we made it easy. It's right there at the beginning. So treasury equals eight bytes or characters. So we'll check that. We'll get it as data. If the data is equal to the word treasure, then echo found treasure and the file path where we found it and then regardless of whether we found treasure or not we're going to close up that file and move along. So just to go back up here, every time we come to an entry if it's a directory, we'll scan it also, if it's a file, we'll check to see if we find treasure inside of that file. Let's take a look at the results and it's going to be called
>
> **[3:07](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-directory-treasure-hunt?u=76281980&t=187)** treasure Hunter dot PHP. You can see the return back six entries. There were six treasures to be found. You can see here that inside the treasure hunt directory inside jungle, inside cave, inside pile of bones dot TXT there was a treasure. Notice that it's looking inside nested directories. Here we just found one in jungle waterfall. Here's one in campsite, campfire and so on. If you weren't able to come up with a solution, I hope that you'll take a few minutes and go back and try again. This is a useful skill it's useful in PHP to be able to go through a set of nested files and directories on a file system, looking for something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Microsoft Word|Word]] (3)
> **CLI Commands:** php (5), find (2)
> **Env Vars:** php (5), txt (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Accepting User-Uploaded Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Configuring PHP for file uploads](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=0)** - [Instructor] In this chapter, we're going to learn how to work with user uploaded files. In the previous chapters, we worked with files and directories that already existed on the web server. [[PHP]] can also allow users to upload files via a web form. Those users could be the general public but can also be site administrators who are working inside a [[Content Management]] system. They might be uploading images, PDFs, calendars or other documents. Let's start by seeing how PHP is configured to allow file uploads. The PHP settings related to file uploads are in the PHP dot INI file. That's the configuration file PHP reads when it first starts up. There are several settings to take note of the default settings are probably correct but it's good to know what to look for if they're not. The most important is file uploads. This determines whether any uploads are allowed at all. So of course you want it to be set to on. The next is upload tmp dir. You can set this to the path of a directory where PHP can initially store it's uploaded files. If it's set to null, it will use the systems default temporary directory and most of the time that works just fine. Then there is a post max size and upload max file size. You can increase these values if you need them to be larger and then max execution time, max input time and memory limit are not directly related to file uploads but they may need to be adjusted if you find that you run into problems. Remember that PHP has the PHP info function.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/configuring-php-for-file-uploads?u=76281980&t=92)** It will tell you where your PHP dot INI file is located and the settings related to file uploads. If you put this in a PHP file and load in a browser you can see your current settings. In most cases, the default values should already allow PHP upload files of a reasonable size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Content Management]] (1)
> **Env Vars:** php (11), ini (2)
> **CLI Commands:** php (11), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Sending files as form data](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=0)** - [Instructor] In this movie, we'll learn how to create an [[HTML]] form which is appropriate for uploading files. This is going to be pure HTML. There's no [[PHP]] here. This is what a minimum form looks like. It starts with the form tag. It has an action. The page that the form will submit its data to, and then the form method is post because it will be a post request, and then notice that there's an attribute for something called ENC type, which is short for enclosure type. It's value is multipart/form-data. This parameter must be included in any form that's going to upload a file. You don't need it if you're not uploading a file, but if you're uploading a file, you do. It's part of the HTML specification. On the next line, I have an input tag of type file. It includes a name attribute. This is the name that we'll use to reference the uploaded data. You can have more than one of these on a form. You might have upload one and upload two or you might have profile photo and background photo. You can name them anything you'd like, and then there's an input to submit the form. As I said, this is the minimum form. Of course, the form can have many other fields on it. You can have text inputs and select options and everything else. This is what it would look like just though for uploading a file. Let's try it out. I'm going to create a new file in my PHP sandbox and I will save it as upload_form.php. I'm using the PHP file extension
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=96)** even though it will only contain HTML right now. Let's put in that HTML. We'll start with opening an HTML tag. We'll put in a head tag and a title tag which will say file upload. Close our title tag. Close up the head tag. We'll put in a body tag, and then I'll skip a line here and we'll put our form. I'll come back to the form in a second. For now let's just close the form and finish with the [[Representational State Transfer (REST)|rest]] of our HTML, body and close HTML. All right, let's come back up here to our form now. Our form needs to have an action. That action is where it's going to be sent. We'll call that page upload.php. That will do the form processing for us. The method is going to be equal to post, and then we're going to use that ink type for enclosure type, and it's going to be multipart/form-data. Got to make sure we have that. After that, we'll put in an input of type file. That'll give us a button that will allow us to select a file from our file system for uploading. We'll give it a name. The name can be absolutely anything we want. It's how we're going to refer to this uploaded file once it's uploaded. So I'm going to call it file upload. You'll just want to name it something that makes sense. And then, of course, we'll need an input of type equals submit,
>
> **[3:10](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/sending-files-as-form-data?u=76281980&t=190)** and I like to always name my submit buttons and give them a value of upload, and there we go. That's the minimum that we need for a form. Let's view our form in Firefox. Over here in Firefox, we'll go to upload form.php and there it is. You can see we need probably a br tag here. I'll add that. There we go. So now we have our browse for choosing a file. That allows us choose from the file system and upload to actually upload the file when we're ready. Now that we have a working form, let's work on the form processing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[PHP]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** html (8), php (3), enc (1)
> **CLI Commands:** php (6), make (1)
> **File Paths:** upload_form.php (1), upload.php (1), form.php (1)
> **Tools:** firefox (2)
> **Code Identifiers:** upload_form (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)

#### [Inspecting uploaded files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=0)** - [Instructor] In the previous movie, we learned how to create a basic [[HTML]] form that will upload files. In this movie, we'll learn to use [[PHP]] to inspect the values that are submitted by that form. PHP has many super globals. You should already know two of them; get and post. PHP has another one for files. That's dollar sign, underscore, and then in all caps, FILES. It's an array of form data submitted using file inputs. Each file input in the form will be an entry that uses the file input name attribute as a key. For example, we used file underscore upload in our last example, so the data would be in the super global for files, and then in square brackets, you would put the string for file underscore upload. What's in that data? It contains another array, and that array has the name, which is the original file name, the type, that's the MIME type, such as image/png, the size of the file being uploaded in bytes, and temp name, that's a temporary file name that's on the server, and then error, which is the error code if there are any. Let's use PHP to take a look at these. The form that we created before, we'll submit to upload.php, so that's the page we need to create. upload.php, and I'm going to add my PHP tags, and then I like to check and see if a form
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=94)** was a post request that was submitted. So I'm going to use if is set, and then if the super global for post contains submit, then we'll know that this was a submitted form, and if that's true, then we want to process the form data. For now, we're just going to inspect those with print_r around the super global for files, and then the data we want to look at is file upload. Remember, that's the name that we used back over here on our form was file upload. So that's the name we're going to use to refer to it. In addition, in order to get print_r to look nice on HTML, I'm also going to just echo some pre-tags here around it. That'll just make sure that it looks good. Copy that. Put a closing tag right here. Let's load this in Firefox. I'm already on my upload_form.php page. Let's now browse and pick a file. I'm just going to pick from the PHP sandbox my log file to start with. So I'll use that and I'll click upload. This is the array that stored in these super global for files with the key file_upload. You can see the name is log.txt. The name of the file that we uploaded. The type is text/plane. That's it's mime type. The temp name is the name of the temporary file.
>
> **[3:09](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=189)** That's where this file exists right now on the file system. So when it was uploaded, that's where PHP put it. That file is inside private/var/temp/, and then that's a temporary file name that it assigned to it. Yours is certainly going to be different than mine, and then you can see that it says that the error was zero, that in a case that there was no error, and the size of the file that uploaded was 242 bytes. Now, as I said, this is where the file exists right now. That means that we can use PHP to actually read that file in that current temp position. Let's come here and try it out. Right after this. Let's just say that we want to get the data from the file using file get contents. We know that we can pass it our path and the path is going to be the file upload and then square brackets after that, temp, tmp_name, that's where we're going to read in the data from, and I'll just echo back nl2br on the data. We'll go back to Firefox and I will just reload the page and it'll ask me if I want to resend the form data. I'll do that. You can also hit the back button and resubmit the page, but you see that now it actually created a new location for this temp file. It's a little bit different than it was, and you can see that it read the contents of that file. So that file does exist at that location and we can read its contents.
>
> **[4:42](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/inspecting-uploaded-files?u=76281980&t=282)** Now, of course, this uploaded file is still in a temporary directory. If we want to keep this file, we probably want to move it to somewhere permanent, and we'll learn to do that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[HTML]] (2)
> **CLI Commands:** php (11), make (1)
> **Env Vars:** php (8), html (2), files (1), mime (1)
> **File Paths:** upload.php (2), upload_form.php (1), log.txt (1)
> **Code Identifiers:** upload_form (1), file_upload (1), tmp_name (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** firefox (2)
> **Analogies:** for example (1), such as (1)

#### [Moving uploaded files](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=0)** - We know how to use [[PHP]] to upload a file to a temporary location. Now, let's learn how to store it somewhere permanent. To do that, we will use a PHP function called move_uploaded_file. It takes two arguments: the path to the temporary file and the path to its destination. It's called move_uploaded_file because it doesn't move just any file. It also verifies that the file is a valid upload file which was recently uploaded via a post request. This is a good security measure that restricts the action to uploaded files only. Note that this will overwrite any file that's already at that destination. So you may want to pair it with the check for file exists if you want to prevent overriding. I'm going to start by creating a new directory for our completed downloads. So I'll come over here, make a new folder, which I'll call uploads, and I will put that into my PHP sandbox. And then I'm going to click on it and check the permissions on it using get info. You can see that I, the creator of the file have read and write privileges, but the owner and everyone else do not. And PHP is definitely not going to be running as me. So I want to make sure I have read and write permissions there. If you need help setting yours, you can go back and review where we discussed it in chapter one I'm going to keep working in upload.php. Let's go back to Firefox and you'll notice that the temp file name is not the same as the original file name.
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=92)** PHP assigns it a temporary name. It doesn't even have a file extension. So I'm definitely going to want to rename it. You can give it a new name or you can use the original file name. I'm going to go back into upload.php, and up at the top, let's just set a variable for upload_dir, which is going to be equal to the current directory for this script plus /uploads. That's the file that I just created. Now, I have a variable that will allow me to refer to that. Instead of all of this processing that we did here before, let's take all of that out, and instead, when we go to process it, let's find the temp path. We know that value is stored inside files, and file_upload, and we know that it's called tmp_name. We know that the file name itself, the original file name, is stored, and I'll just copy all of this, because it's going to be very similar. It's going to be in that same location, but it's going to be called just name, right? We saw that back over here. It's just called name. So that gives me that value. I'm also going to follow a best practice here and put base name on it. This is a good security precaution in case the user had some kind of tricky file name that was meant to do something to my file system, to set this to some value that I don't like. This'll ensure that it does just get the file base name. And then where are we going to store it?
>
> **[3:04](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=184)** What is that destination? I'm going to call it target_path. And the target path is going to be equal to the upload dir that we had above, and then a forward slash, and then the file name. Now again, you could name it anything you want. I'm going to go ahead and keep that same file name that it had originally. All right, so now that we have our values, let's use move_uploaded_file: move_uploaded_file; takes two arguments. The first will be the temp path. We've set that value. And the second is the destination, which I've assigned to target path. Now, in addition to that, move_uploaded_file returns true or false. So we can put it inside an if statement and if it succeeds, echo file upload succeeded.
>
> **[3:57](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/moving-uploaded-files?u=76281980&t=237)** And if not, come down here, else, and I'll just copy this. Save a little typing. File upload failed. So let's try it out. I'll save that. We'll go into Firefox. I'm going to hit the back arrow so that we get our upload form again. I'll just go ahead and reload that page. This time I'm going to browse and I'm going to pick my sonnet, sonnet.TXT. I'll click open and upload. File upload succeeded. And if I come over here and look, inside my uploads directory, you see sonnet.TXT. Now, of course, in this example, I uploaded a file from my local computer to my local computer, but you can imagine that this is a public webpage and the upload is coming from a different remote computer. So to review the whole process, we have an [[HTML]] form that uploads to a PHP page. That PHP page then uses the file's super global to inspect the values, and then move_uploaded_file moves the file from the temporary location to its permanent location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9), [[HTML]] (1)
> **CLI Commands:** php (9), make (2), find (1)
> **Code Identifiers:** move_uploaded_file (6), upload_dir (1), file_upload (1), tmp_name (1), target_path (1)
> **Env Vars:** php (7), txt (2), html (1)
> **File Paths:** upload.php (2), sonnet.txt (2)
> **Definitions:** is a  (4)
> **Cross-References:** we discussed (1), go back to (1)
> **Tools:** firefox (2)

#### [Handling upload errors](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=0)** - [Instructor] We've seen how to handle file uploads in [[PHP]]. Let's consider what to do if there's an upload error PHP will detect upload errors and store it in the files super global array for the upload. It stores an integer value the number zero through eight. PHP also has constants defined that are equal to these values. In this chart, the first column is the constant name, and the second column is the actual error value. These are interchangeable though because they have the same value. In the third column, I've put a simple explanation of the error. In the first row, there's an entry for zero which indicates there was no error at all. That's useful because our PHP can check to see if the error code is zero, or if it's greater than zero. Errors one and two are triggered if the file exceeds the maximum file size, error three is for a partial upload, error four is when there's no uploaded file, error five doesn't exist anymore so we don't need to worry about that. Error six appears if there's not a temporary directory to store the uploaded file. Error seven is when PHP can't write to the temporary directory, usually due to a lack of permissions. Error eight is when a file upload is stopped by an extension, something you usually won't need to worry about. If you get an error, you can simply tell the user that something went wrong and not be specific about it. Or you can convert these error messages into text that's suitable for display to the user, it's your choice. At the top of my upload .PHP file
>
> **[1:36](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=96)** I'm going to paste in a custom PHP function. You can pause the movie if you want to copy it down, or it's included in the exercise files for movies after this one. This function is called upload error and takes one argument, and that is the error. That's going to be the status code that was returned in that file, super global. You can see that it sets upload errors equal to an array which is equal to those values we just saw in that chart. We have the constants that PHP has on this side, and then a plain text message on the right. Down here you'll see that it'll take that error and it'll return the value that corresponds inside that upload errors array. Let's go down into our form processing and let's check for that error. So let's first just set the error equal to, and we know what it's going to be, it's going to be very similar to this. I'm going to copy this and paste it in, but instead of temp name, we're going to ask it for error. So that'll get the value and set it here to an easy to use variable, then let's say if there is an error that is greater than zero, remember zero means there's no problem at all, then we have an error, so we're going to display it. We'll call upload_error, our new function, and we'll pass in that error. Else, there's not a problem in which case we will do this form processing right here. There we go.
>
> **[3:11](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/handling-upload-errors?u=76281980&t=191)** Now it's a little difficult for us to trigger an error on purpose. I suppose you could remove the temporary directory or change its permissions, or you could upload a file that's super large. But I'm not going to do that. We know we have code in place, that handles whatever error PHP might tell us about here. Let's save it and let's test it one more time to make sure that it still works when there is no error. I'll go back to Firefox, I'll hit the Back button so we get our upload form again, and I will browse and choose the sonnet again, click Open and upload. The file upload succeeded. Notice that it did overwrite. That is an important point. When we upload it overwrites the file that's already at that destination location. But it did work, there were no errors, but if there had been we were prepared to handle them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (9)
> **CLI Commands:** php (9), make (1)
> **Env Vars:** php (9)
> **Definitions:** is an  (2), is called (1)
> **Code Identifiers:** upload_error (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)
> **Exercise Files:** exercise files (1)

#### [Setting file permissions](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=0)** - [Instructor] Now that we know how to upload files, I want us to revisit the subject of file permissions. This time, we'll learn how to set file permissions using [[PHP]]. When we talked about file permissions earlier, we are mostly concerned with ensuring that PHP could access files created by other users. But what about the other way around? How can we make sure that other users can access files uploaded through PHP? The web server may run as a different user, and users may not have permission to access files that PHP creates, but PHP can set the owner and the permissions as needed. Let me demonstrate. Earlier, I uploaded a file that was sonnet.txt originally, and you can see it here in the uploads directory as sonnet.txt. If we go into the Unix console, you'll see that they have different owners and different permissions. Here's sonnet.txt, it's owned by Kevin Skoglund, and everyone has read, write, and execute permissions. Here's uploads sonnet.txt. You can see its owner is _www, and the owner has read and write privileges, but everyone else only has read privileges. Yours may be different than mine. The point is to understand that the owner of the uploaded file has some permissions, while everyone else does not. PHP provides several useful functions. chown will change the owner of a file or directory, chgrp will change the group of a file or directory, and chmod will change the permissions.
>
> **[1:33](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=93)** We saw chmod earlier. It was a Unix command to change permissions. PHP uses the same name for its function. You can only change the owner of a file if the user, in this case PHP, has been given admin or sudo privileges. Group or permissions can be changed as long as PHP is the owner of the file. Most of the time, you won't need to change the owner or the group. It's mostly the permissions that you'll want to adjust. We saw earlier that file permissions can be thought of as nine characters in sets of three; user permissions, group permissions, and permissions for everyone else. And each has a read, write, and execute permission; r, w, and x. This table has the three groups at the top; user, group, and other, and the three types of permissions on the left; read, write, and execute. A permission is either enabled or disabled. If it's enabled, then we put a single letter abbreviation in the grid r, w, x. If it's disabled, you can see I have a dash. When we put those together, we get a nine character string. Here, the user can read, write, execute, the group can read and write, and everyone else can only read. We call this alpha notation. Alpha notation is not the only way to represent permissions. There's also something called octal notation. Unix will accept both, but PHP will only accept octal notation. So we need to learn how it works. Imagine that every r is equal to four,
>
> **[3:08](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=188)** every w is equal to two, and every x is equal to one. Now, we have the same chart and it looks like this. If we take each of those values and we add them up going down each column, you get the numbers seven, six, and four. So the alpha notation rwxrw-r-- is equal to the octal notation 0764. It may seem weird to have a zero at the start, but this is an octal number. It's not a string and it's not a regular integer. The zero is necessary. We could change the permissions on our uploaded file right here inside upload.php. But I'm going to go ahead and make a new file for it instead, just so that you'll have it for reference. And I'm going to save that file as upload_chmod.php. And so there I'll put my PHP tags. And let's set the file path that we want to be working with. And I'm just going to hard code that in as the directory and then inside uploads and then sonnet.txt. If you uploaded a different file, then of course you'll want to change it to whatever file you have uploaded. And then if the file exists at the file path, always a good idea to check for that, then we will call chmod on the file path, and we will set it's permissions equal to something.
>
> **[4:46](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/setting-file-permissions?u=76281980&t=286)** Now, what should we set it equal to? We know that it needs to start with a zero. Again, it's an actual number, not a string or an integer. And then you can put anything you want here. 777 would mean that it has all of the permissions, so everyone can read, write, or execute. Execute doesn't really matter on most files, so we could just have 766, that takes away the execute permission, it's just read and write. Maybe you want to allow the group to read and write, but maybe everyone else can only read, then it would be 764. I'm going to set it at 766. That gives the owner all permissions and allows everyone else to read and write. Let's save it and try it out. I'll go back into Firefox, and it's going to be called upload underscore C-H-M-O-D chmod. That didn't output anything to us, but it did change our permissions. If I go back into Unix, at the up arrow and take a look at that file again, you can see that it's changed. Now, it is 766, read, write, and execute, and then four and two for read and write, adds up to six for each of those. Now, PHP will have full access to the file, and so will my logged in user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (14)
> **CLI Commands:** php (14), chmod (4), make (2), chown (1), sudo (1)
> **Env Vars:** php (12)
> **File Paths:** sonnet.txt (5), upload.php (1), upload_chmod.php (1)
> **Definitions:** we call this (1), is an  (1)
> **Code Identifiers:** upload_chmod (1)
> **Cross-References:** we talked about (1)
> **Tools:** firefox (1)

#### [Securing file uploads](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=0)** - [Instructor] In this movie, we will discuss the security concerns around user uploaded files. My top recommendation is to require a user to log in before they can upload files. Don't let anonymous users upload. Then you'll know if a user abuses their file upload privileges. You can block the user or escalate the issue to other authorities. Users tend to follow the rules better when they know their identity is attached to their actions. Even files by logged in users may contain copyrighted material, offensive content or malware. The user may not realize it. So you should give some thought to whether files will become immediately public or go through a review process. You should also be cautious about opening uploaded files. Opening simple image files is usually fine, but malware can be embedded in executable files or in files that allow macros or scripting like [[Microsoft Word|Word]] or [[Microsoft Excel|Excel]] files. It helps to validate the file type and file extension of uploaded files to make sure that they match your expectations. If you're expecting an image, only allow image files. If you're expecting a PDF, only allow PDF files. It's also smart to limit the maximum file size. You don't want users to use up all the hard drive space on your server because they picked really large files to upload. Remember, [[PHP]] gives you this information in an array. You can look at the file name to see the file extension. You can get the file type and size using the upload data. PHP has a global maximum file size
>
> **[1:34](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/securing-file-uploads?u=76281980&t=94)** which is set in the PHP INI file. You can also set a smaller limit on a particular form by adding a hidden input tag for MAX_FILE_SIZE in all caps. And then you set a value in bytes. If the file upload is larger than that value, then PHP will automatically add an error of type two. For example, a form to upload to PDF might have a maximum of four megabytes while a form for uploading an image is limited to half a megabyte. There's no single recipe for securing your file uploads but these items provide good guidelines to use when you decide what makes sense for your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Microsoft Word|Word]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** php (4), pdf (3), ini (1), max_file_size (1)
> **CLI Commands:** php (4), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Profile photo](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=5)** - [Instructor] It's time for another challenge assignment. In this challenge, you'll use what we've learned about file uploading to create a real world website feature. Your [[PHP]] code shall allow a user to upload a profile photo. You'll create a file upload form, and then a page that will process the form data and upload the file. Once you have a basic working version, try to incorporate some of the techniques and best practices we've learned. Display any upload errors. Validate that the file type is an image file. Make sure that the file size is less than one megabyte or so. Set the file permissions on the uploaded file to allow everyone to read and write the file. And as extra credit, think about how you would customize the file name if you wanted it to be something different than the original file name. You can try this challenge from scratch if you want or you can use the templates that I've added to the exercise files to get you started. In the exercise files, I've added a directory for user, and inside there, you'll see there's a directory called images. That's a place to hold the uploaded image files, and then two PHP pages, profile.php and uploadphoto.php. There's also an image in the assets directory called profile_larry.jpg. This is an image that you can upload for the profile image. Let's look at profile.php. This is mostly an [[HTML]] page.
>
> **[1:38](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=98)** At the top, I'm setting a few variables and these are meant to simulate the kind of data that you might normally get from a database. Here's the username and the name of the image file. Further down, you can see that it echoes the user's name and then displays the profile image if it exists. So here's just putting an image tag, and then after it, we'll either get a link to add an image or edit the existing image. Those both go to the same place, uploadphoto.php. In uploadphoto.php, we define the upload error function that we used before. There's an array of acceptable image types and then we have our form processing. We'll come back to that in a moment. Let's skip down. Here you'll see we have the HTML page and this contains a form. The form, though, is incomplete. You will need to fill it in. Notice that the action is going to submit to the same PHP page. If the request is a get request, it'll show this form. But up here, if it's a post request, then it will do the form processing. Inside the form processing section, it will be up to you to fill in this code too. I've given you some code comments to suggest items to include. So we go to the PHP sandbox for userprofile.php. This is the page that we see with the username at the top and there's no profile image right now. When I click add an image, it takes me to the uploadphoto.php page
>
> **[3:13](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/challenge-profile-photo?u=76281980&t=193)** and then allows me to choose a file. I'm going to go into my assets and choose that profile_larry.jpg image. I'll click upload. It says profile photo was uploaded. I click back to profile and now we see that profile image. It says edit image, which will take me back to the form if I wanted to change it to something else. It's a simple photo upload, but it demonstrates the process well. Spend some time trying to complete the challenge assignment on your own. When you're ready, in the next movie, I'll show you the solution that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[HTML]] (2)
> **CLI Commands:** php (11), make (1)
> **File Paths:** uploadphoto.php (4), profile.php (2), userprofile.php (1)
> **Env Vars:** php (4), html (2)
> **Definitions:** is an  (2), is a  (1)
> **Code Identifiers:** profile_larry (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** exercise files (2)

#### [Solution: Profile photos](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=0)** - [Instructor] I hope that you were able to complete the profile photo challenge assignment. If not, don't worry. And this movie I'm going to walk you through the solution that I came up with. For this challenge assignment we didn't need to make any changes to the profile.[[PHP]] page that I created before. All it's doing is displaying an image if it exists, and not displaying, if it doesn't exist. All the work is really being done on upload photo .PHP. We have the form that we needed to fill in correctly which is down here. Let's take a look at that. We had a form, we already had an action for it. It uploads to itself, and you can see that the method needs to be set to post, and the ink type must be set to multi-part/form-data. Then I included a hidden file type for max_file_size which told it to make the value about a megabyte. That's a little bit smaller than a megabyte but it's close enough to use a round number. And then I needed an input of type file and I needed to give a name to it. I stuck with the same name we've been using which is file_upload. You could have named it something else. And then we're going to submit that with the Upload button. Once that's submitted it's going to just submit to itself this time it will be a post request and in the post super global, we should have a value for submit. And if that set, we know it's a post request
>
> **[1:32](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=92)** and we have form processing to do. So, let's look at that form processing. I went ahead and just got all of these values that I needed out of that super global. So you can see they're all pulling values out of files, file upload. So now I have the file name, I have the temporary path, the type, the size, and the error. And I'm calling base name on that file name because that's the best practice. Then once I had those values and easy to use variables, then I'm set about checking to see where there any upload errors. If error is greater than zero, then we know there was and so I'm going to use that upload error function to show the user of the error, I'm just going to send that to the variable message because then down here, you can see if there is a message, if something is set, it'll just output it for the user to see. And then it'll redisplay the form. So they'll have a chance to fix the problem as well. So instead of just echoing out I'm going to set message to it, then I'm going to validate the file type, so I'm going to use in array for that. If the type that was sent in, is in the array for image types that's up here, then I'll know that it's valid. If it's not in the array, then it's going to to output the message, file must be an image file. It'll check the file size. Now it'll already use this max file size here and return an error if it's a gigabyte, but I can also check it here using size. So you could set that as well. Both of them work.
>
> **[3:03](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/solution-profile-photos?u=76281980&t=183)** It's not a bad idea to have both of them. And then I can finally say, okay everything passed those inspections, I'm ready now to upload the file. So the target path is going to be equal to the image directory, and the file name. Now we could choose a new file name if desired here, we don't have to use the file name they provided. That was the extra credit assignment. You could put it to be something else, maybe it's the name of the user. If this is a social networking website, maybe it's set to be the username. Right now, I'm just going to stick with the original file name that was provided, then I'm going to use move uploaded file to move it from its temporary location, to its permanent location, and finally use some more on it to change its file permissions to 0766. I hope you were able to come up with a solution on your own. If not, spend a few minutes, going back over your coding getting a working version. It's important to understand how all these steps fit together into one overall file upload process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2)
> **CLI Commands:** make (2), php (2)
> **Code Identifiers:** max_file_size (1), file_upload (1)
> **Env Vars:** php (2)
> **Definitions:** is a  (2)
> **File Paths:** profile.php (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/php-techniques-working-with-files-and-directories/next-steps?u=76281980&t=0)** - [Kevin] Thank you for taking "[[PHP]] Files and Directories" with me. We've learned to use PHP to store information in files, to read data back from files, to search directories, and to allow users to upload files from a web form. The PHP manual has details on all of the file and directory functions that we've learned. You can search for them, or you can refer to the pages on file system or dir. For anyone interested in using PHP to resize, crop, or manipulate image files, the manual also has pages on using PHP with the GD Library and with ImageMagick. The best way to learn is to use these techniques in your own projects. Running into a roadblock and then learning how to get past it will deepen your understanding of the concepts and the techniques that we've learned. Until next time, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5)
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