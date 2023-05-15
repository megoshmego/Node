can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 



Skip navigation




Avatar image


0:00 / 13:25

Transcript


0:00
(bright upbeat music)
0:04
- [Instructor] Next up, we'll take a look
0:05
at another built-in module,
0:06
that we get for free with Node called File System
0:10
or fs for short.
0:12
So fs gives us access to the local file system.
0:15
We can do things like open files, read data from files,
0:19
write to files, change permissions,
0:22
there's a lot of things that we can do.
0:24
I'm just gonna show you how to read a file
0:26
and write to a file.
0:27
So we'll come back to fs in just a moment,
0:30
but I wanna start with just a quick discussion
0:32
of callbacks in Node.
0:34
There is a certain pattern that lots of different callbacks
0:36
that we write need to follow.
0:38
So many of the built-in modules,
0:40
many libraries we might import,
0:42
use a lot of asynchronous callbacks.
0:44
So here's an example.
0:46
We're about to see how to read a file,
0:48
Spoiler alert, you do it like this,
0:50
where you pass in a callback function.
0:52
Now this callback function will run
0:54
when that file reading has completed,
0:57
or if there was an error.
0:59
And I wanna focus on that error first.
1:02
That error that comes at the beginning of the callback,
1:04
the first parameter,
1:06
this is a really common pattern in Node,
1:08
the error-first pattern.
1:10
So the first parameter will be error.
1:13
And if things go right, there will be no error.
1:15
It will be no,
1:17
but if something did go wrong,
1:19
you'll find error has the error information.
1:21
It has an object that contains different data
1:25
and values about that error.
1:26
So this is common, not just with the fs module,
1:30
not just with the file system,
1:32
but many other libraries and built-in tools in Node
1:35
expect you to write a callback
1:37
where the first parameter will be an error.
1:39
And most of the time,
1:41
assuming you're doing something that usually works,
1:43
error will be no, but if there is an error,
1:46
then you need to check to see
1:48
if error or if there is an error, do this.
1:51
So a pattern like this is pretty common.
1:53
If error, we'll handle the error,
1:55
otherwise things are good.
1:57
As far as handling the errors in the browser,
2:02
we show something in the DOM,
2:04
some sort of alert, a pop-up,
2:05
or we could print to the console.
2:07
In Node, we log to the console, or we exit the program
2:11
with process.exit and an error code,
2:14
as we've already seen.
2:16
So back to fs.
2:17
In order to use fs, we need to require it,
2:20
but you don't have to install it,
2:22
You don't need to download it, no NPM installed.
2:24
We have access to it, but we do need to require it.
2:27
So let's do that now, just in our console.
2:29
Just open up Node, we'll do const fs equals require fs.
2:35
And if we look at fs, there's a lot of stuff here.
2:39
A ton of methods.
2:40
We're really just gonna see two of them,
2:42
but you can see there's things like, let's see,
2:46
make a directory through Node, open a directory,
2:49
read a file, write a file, watch a file,
2:54
get stats about things, change permissions,
2:57
chown, chown, I think it's chown, change ownership.
3:03
Chmod, and a whole bunch of others.
3:06
We were on the docs earlier, looking at process right here.
3:10
If you just go for fs, File System,
3:13
you get a nice table of contents, lots of stuff to see here,
3:16
but we're just going to concern ourselves
3:18
with reading and writing files.
3:20
The method we'll use to read a file is readFile
3:24
and readFile accepts three different arguments.
3:26
The first is the path to the file that we want to read,
3:29
relative to the current directory that the Node file
3:33
is inside of, where the script is being executed.
3:36
And then encoding is this second argument.
3:39
And this specifies how the file should be interpreted
3:43
if JavaScript should try and interpret it.
3:45
So for text files, we'll almost always use utf8 encoding,
3:49
for other files like binary file types, things like images,
3:53
you can omit that argument, you can read more about it here
3:56
if we go to read file, here we go, read file.
4:01
And we can pass in that encoding as one of the options.
4:05
And somewhere over here, it mentions it.
4:07
If no encoding is specified,
4:09
then the raw buffer is returned.
4:11
But if we're reading texts, we'll use utf8,
4:14
like they show here.
4:16
And then we pass in a callback as the third argument,
4:18
which follows that pattern we just discussed,
4:20
the error-first callback.
4:22
So error will be the first parameter
4:24
and then data will be the second parameter.
4:26
So I have a file over here, poem.txt,
4:30
it's in the same directory as this app.js file
4:33
that I'm working with.
4:34
So they're right next to each other.
4:36
If I want to read that file,
4:38
I'm going to import or require fs, File System.
4:43
Then I will do an fs.readFile.
4:46
And then the first parameter is the path
4:48
to get to that file, relative to where I am right now.
4:52
So it's pretty simple, if we're in the same directory,
4:54
we can just type the name of the file.
4:57
So from here, it's just poem.txt,
5:01
and then the encoding will be utf8, and then a callback.
5:05
Now we can do an error function,
5:06
which we haven't been doing.
5:07
So why not? Let's do that.
5:09
Error is the first parameter, and then data is the second.
5:14
And then in here, we can check if error,
5:17
usually it's no, if everything goes well,
5:19
but if there is error, why don't we console.log error,
5:25
and then we'll also print out the error object itself,
5:29
and then we'll call process.kill with an error code,
5:33
anything that's not zero.
5:35
Otherwise, we'll just print out data.
5:38
So console.log, "DATA", and then we'll print out data.
5:45
So let's see how it works, or if it works.
5:48
Over here, I'll clear my console, oh, I'm in Node,
5:51
let me get out of here.
5:53
(keyboard clicking)
5:54
Okay, I've got my file, node app.js, there we go.
5:59
DATA To see a World in a Grain of Sand
6:01
And a Heaven in a Wild Flower,
6:03
Hold Infinity in the Palm of your hand.
6:06
Great poem, although there's some extra lines in there,
6:09
empty lines, you can see them printing out.
6:11
So if I delete that, there we go.
6:13
We're getting those lines from that TXT file.
6:16
Now, if I were to try and read a file that didn't exist,
6:20
like this podem.txt,
6:23
the same callback runs,
6:25
but this time an error is passed into our callback,
6:28
and we're looking for it.
6:30
If error, yes, there was an error.
6:32
We're going to print it out and you'll see,
6:34
we print out error, the text error in all caps,
6:37
and then an error object.
6:38
And it contains things I can error code, a path,
6:42
and then other information about the error.
6:45
And then we're just process.killing.
6:47
There are also synchronous versions
6:50
to these different methods, like read file,
6:52
where you can use try and catch.
6:54
So instead of passing an asynchronous callback in,
6:57
you would just use try and catch,
6:59
and the operation will error out and trigger that catch.
7:02
But this is definitely far more common in Node.
7:05
We use callbacks all the time
7:07
and yes, we can use error functions.
7:10
Okay, so I'm going to go back to poem.txt.
7:14
Now let's talk about writing to a file.
7:17
So to write to a file, surprise, surprise,
7:19
we have a method called write file.
7:21
It's very similar,
7:22
except we have an additional argument to pass in,
7:24
which is the data we want to write.
7:27
So we start with the path,
7:28
which file are we trying to write to,
7:30
then the data,
7:31
this is what we want to output to the file,
7:34
encoding, same idea as before,
7:37
if we're working with text files, we'll use utf8,
7:40
almost always.
7:41
And then a callback function that will run
7:43
when our file writing is complete,
7:45
or if there's an error
7:47
and it follows the same error-first pattern.
7:50
So here's an example.
7:52
We'll write to this file, ./files/output.txt,
7:57
and then we're writing this content here,
7:59
this string, utf8 encoding,
8:01
and then our callback function.
8:03
This time, we don't have any data that we'll be using,
8:06
so it will just add error as the single parameter.
8:09
And I guess it's technically error-first.
8:12
It's just error-only as well.
8:14
We'll print out the error, if there is an error,
8:16
otherwise, we'll print out successfully wrote to file.
8:20
So let's do the same thing.
8:21
I think I have a line of the poem that I'd like to add.
8:25
Let's go with const
8:27
line,
8:29
there it is.
8:29
"And eternity in an hour",
8:32
then I'm going to call fs.writeFile,
8:35
and I want to write that to the poem.txt file.
8:38
So same file, same directory, poem.txt.
8:42
The data is just called line and then I'll do utf8,
8:47
and then my callback function, I'll do an error function
8:50
or an error function again.
8:52
Check if there's an error,
8:55
we will console.log the error,
8:57
(keyboard clicking)
8:59
and then same thing, process.kill.
9:02
Otherwise, we will just console.log "IT WORKED".
9:09
So here's what our poem looks like right now.
9:11
Three lines, if all goes well, it should have a new line.
9:15
Here we go.
9:16
Let's try running our file.
9:19
It says it worked.
9:20
We can look at our file here,
9:21
let's do cat poem.txt.
9:24
Oh no!
9:26
What happened?
9:27
Well, let's take a look.
9:29
We totally overwrote everything that was there.
9:32
So it did work, we did write to the file,
9:35
but just like we've seen in Python,
9:37
there's a difference between appending to a file
9:39
and writing over, or just replacing the contents of a file.
9:43
If we go back to the docs, we look at writeFile,
9:46
the documentation for file system.
9:49
You'll see that under options,
9:51
there is this flag that we can pass in.
9:54
And this is just like with Python,
9:56
we could pass in different flags for file modes.
9:59
And if we look at their list of supported flags
10:02
let me zoom out,
10:03
we have a bunch of different modes we can pass in.
10:06
So 'a', that's actually what we want,
10:08
open file for appending.
10:10
The file is created if it does not exist.
10:12
'r' will open a file for reading.
10:14
There's these different modes.
10:15
We don't really need to go into them,
10:17
but if we pass in 'a' as the flag, go back here,
10:21
the default is 'w' for write,
10:23
so it just overwrites everything.
10:26
We need to pass in flag of 'a', but how do we do that?
10:29
If we look at what it's expecting,
10:31
it's expecting file and then data,
10:33
and then optionally, options.
10:35
But so far, our options has just been utf8,
10:39
but it looks like options can include
10:42
up to three different possible key value pairs.
10:46
And it could either be an object or a string.
10:49
If we're just going to pass one option in,
10:51
we could just pass in utf8 and a it's smart enough
10:54
to figure out that we're specifying encoding.
10:56
But if we want to specify encoding and flag,
11:00
we need to pass in an object.
11:02
So that's what I'm gonna do here.
11:04
I'll put an object here, key value pairs,
11:07
and this will be encoding.
11:09
And then comma, flag will be append mode 'a',
11:14
and I've reset my file back to what we had before.
11:17
I'm hoping to append the same line, let's see if it works.
11:21
So I'm gonna try running it again, says it works.
11:25
What's in our file?
11:26
There we go.
11:27
So we should have added in a new line,
11:29
but we're at least appending,
11:31
we're not overwriting everything.
11:34
Now, if you just wanna append to a file,
11:36
there's actually an easier way.
11:38
If you don't want to do this and have to deal with a flag,
11:40
we could use a different method called append file,
11:44
append file.
11:45
We don't need to specify any of this stuff.
11:48
We can still specify the encoding,
11:50
but we don't need an object.
11:52
And we'll do the same thing.
11:53
How about we append the line, "APPEND ME!!!",
11:57
and let's use a new line character.
12:01
Okay, let's see if that works.
12:04
Run it again.
12:06
Look at the file, and now we have append me at the very end.
12:10
Alrighty.
12:11
So that is the basics of reading and writing to a file,
12:15
reading from, writing to a file.
12:18
Asynchronous methods, we pass in a callback
12:20
as the last parameter.
12:21
That callback will be executed
12:23
when the operation is finished or if there's an error.
12:26
So if we try to read from a file that doesn't exist,
12:29
appending or writing to a file that doesn't exist
12:32
won't give us an error.
12:34
For example, if I do podem.txt,
12:37
and I try running this,
12:39
(keyboard clicking)
12:41
it still says it worked,
12:42
but now it made me a file called podem.txt.
12:46
But reading a file definitely will generate an error
12:49
if we're trying to read something that's not there.
12:51
And there are other errors you could run into, of course.
12:53
And the common pattern is just to check for error
12:57
in your callback.
12:58
And if there are multiple parameters to that callback,
13:00
the first one will commonly be the error.
13:03
That is not standardized across every single thing in Node,
13:06
but it is a very common pattern.
13:09
So we've saw read file, write file, also append file.
13:12
But we can also get by without append file
13:15
if we pass in a flag to our write file options right there.
13:20
(bright upbeat music)
