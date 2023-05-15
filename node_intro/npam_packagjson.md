can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 


0:00
(upbeat music)
0:04
- [Tutor] Next up,
0:05
we get to talk about one of my favorite parts of working
0:07
with Node-npm.
0:09
So npm stands for Node Package Manager,
0:12
and it's a tool that we use to fetch or install,
0:15
whatever dependencies we need for a given application.
0:18
There is a massive ecosystem in Node or around Node,
0:22
of thousands of different packages
0:24
and libraries just like we had in Python.
0:26
But what's great about npm,
0:28
is that the experience of downloading those packages
0:31
of managing dependencies,
0:33
and sharing dependencies with other developers,
0:36
is built-in to Node rather than Python,
0:39
where we had to make virtual environment.
0:41
And we had to pip freeze,
0:43
and manually make the requirements at TXT file,
0:46
and keep it updated.
0:47
Npm is just smoother to use,
0:50
but it accomplishes the same goal.
0:52
We might be using express,
0:54
which we will be later on in this course,
0:56
it's a framework to make applications,
0:59
to make web apps and start up a server.
1:01
We might be using express on one project,
1:03
where we're just starting from scratch.
1:04
We want the latest version,
1:06
but somewhere else on our machine,
1:07
we might have a project using a version of express
1:10
from two years ago.
1:11
Or we might have 20 or a hundred different dependencies,
1:15
that are all older versions.
1:17
So we don't wanna install everything globally,
1:19
just like with pip,
1:21
we didn't wanna install every...
1:22
You know, Flask or SQLAlchemy globally,
1:24
and always use the same version,
1:26
if we're working on someone else's code,
1:28
we're downloading that code,
1:30
we need to get the correct dependencies,
1:31
we look at the requirements .txt.
1:34
In Node,
1:35
we can do the same thing,
1:36
but npm just makes it easier.
1:37
We can specify different versions of packages.
1:39
We can specify exactly which packages,
1:42
a given project requires,
1:43
and we can easily fetch them all,
1:45
with just a single command.
1:47
So npm is great.
1:49
It stands for Node Package Manager,
1:51
just one more time.
1:52
And we have a command line tool called npm,
1:55
that comes with Node.
1:56
So you don't need to install this separately,
1:58
if you go to your terminal.
2:00
Assuming you have Node installed,
2:02
you should be able to type npm-v,
2:04
and see something there.
2:06
So again, it comes with Node.
2:07
You don't need to do anything else to install npm.
2:10
And so,
2:12
you can view a lot of the different packages,
2:14
that are available on npmjs.com.
2:17
I'm looking at the most popular packages,
2:20
most depended upon.
2:22
So things like react,
2:23
which we'll see later on.
2:24
Request,
2:25
which we use to make HTTP requests, simplifies the process.
2:30
Moment-js,
2:31
which is used for dates,
2:32
and working with dates.
2:33
Express,
2:34
which we'll see later on.
2:35
React-dom,
2:36
we'll work with.
2:38
Axios, so axios works both in the client side and in Node.
2:43
So we'll be using this,
2:44
and there's a bunch of packages here.
2:46
You can scroll through them.
2:47
You can search for different packages.
2:49
This is just a website
2:50
that we can go to view different packages,
2:53
but then to actually install them,
2:55
we need to use npm from the command line.
2:58
Oh!
2:59
And one thing that you can do,
3:00
is you can create and publish packages using npm.
3:04
So if we made some...
3:06
Let's say a weather client,
3:07
some easy tool in Node that exposed weather data,
3:12
and we wanted other developers to use it in their projects,
3:14
we thought it might be useful.
3:16
We can use npm to publish our own package,
3:18
that other people can use.
3:20
We can also make private or proprietary packages,
3:23
although I think that costs money these days.
3:26
You have to register for an account.
3:28
So we'll be working with open source stuff,
3:29
every single tool,
3:30
whether it's react or express,
3:33
they're all open source,
3:34
but that is an option.
3:35
So the first command that we'll see is called npm init.
3:39
So npm init is going to create a special file for us,
3:43
called package.json.
3:44
And the package.json,
3:46
is a file that inside of every Node project,
3:50
specifies the dependencies.
3:51
So that has a particular name,
3:53
and you can think of this as the Node equivalent
3:56
of requirements .txt,
3:58
except it's a json file.
4:00
We can take a look at a package.json.
4:04
Here's an application on GitHub.
4:06
There's a package.json here. It's a Node app.
4:09
And inside of it, we have json.
4:11
It includes things like a metadata,
4:14
the name of the package,
4:15
a version of the package, scripts,
4:18
we'll learn about that later and then dependencies.
4:21
So this package,
4:22
or this application depends on express, sockjs,
4:27
It has to do with web sockets, chalk, ejs, debug,
4:32
and you can see the specific versions like readline
4:35
must be 0.0.7.
4:38
Chalk must be around 1.0.0,
4:41
and other different syntaxes
4:43
that we can use to specify that debug,
4:46
the package debug must be exactly this version,
4:49
or it must be greater than 1.2,
4:52
but we'll get into that later.
4:53
So package.json files are very very important,
4:57
when we are working with Node.
4:59
Pretty much every Node application that you look at.
5:01
So package.json files,
5:03
are a critical part of working with Node applications,
5:07
especially if you plan on sharing your code.
5:10
I'm looking at a different repo,
5:12
for a tool called the create-react-app,
5:14
something we'll see later on.
5:15
There is a package.json file.
5:18
And inside of it,
5:19
there are a whole bunch of dependencies listed.
5:22
There's other information here as well.
5:24
Again,
5:25
we'll come back to scripts,
5:26
but this is really the crucial aspect,
5:28
different dependencies,
5:30
what are the packages that are needed,
5:31
and what versions of each of those packages are required.
5:36
And eventually,
5:37
if I clone this repository,
5:38
if I download this code,
5:39
I can install all of these dependencies
5:42
with a single command,
5:43
just like we can do with pip.
5:45
Pip installed dash r requirements .txt,
5:48
it's the same idea.
5:50
But what's nice about npm,
5:51
is that I don't have to put this in here myself,
5:54
I don't have to do a pip freeze and create this file.
5:58
We start by running npm init,
6:00
and this is going to ask us a bunch of questions.
6:03
It will ask us,
6:04
what's the name of your project?
6:06
Who's the author name?
6:07
What license do you want to put this code out under?
6:11
So if we try running that in our terminal,
6:13
just in a empty...
6:15
I guess it's not empty,
6:15
but a new directory that has one JavaScript file,
6:18
one Node file.
6:19
I'll run npm in it,
6:22
and it tells me,
6:23
This utility
6:24
will walk you through creating a package.json file.
6:26
It only covers the most common items,
6:28
and tries to guess sensible defaults.
6:30
So package name,
6:31
I'll call it first.
6:34
I think you're not allowed to use uppercase letters anymore.
6:36
Let's just check,
6:37
first package or firstApp.
6:40
Yep.
6:41
So I'll do first-app lowercase.
6:43
Version of default to 1.0.0,
6:46
don't really care about a description.
6:48
We'll learn more about entry point later on.
6:50
So I'm just gonna hit enter,
6:51
hit enter, hit enter.
6:53
I don't need keywords.
6:54
Author, sure.
6:55
I'll just put my name there.
6:57
License.
6:57
I'll go with the default ISC.
7:00
And it asked me,
7:00
Is this okay?
7:02
I'll hit enter, to default to yes.
7:04
And I now have a brand new file here,
7:07
called package.json.
7:09
So I don't have to manually touch package.json.
7:12
Like when I say touch,
7:13
I mean, I don't have to create it.
7:15
I use npm init and if we take a look,
7:18
it just fills out some basic information at this point,
7:21
that I specified.
7:22
So name, version, description is empty.
7:25
Main, we'll worry about that later.
7:27
Author, license.
7:28
We still don't have anything pertaining to dependencies,
7:31
but we don't have any dependencies for our application.
7:34
So that's why nothing showing up here.
7:36
If we wanted to install axios,
7:39
which as we've already talked about,
7:40
is a tool that works in the client side.
7:42
It works in the browser to make requests,
7:44
but it also works in Node.
7:46
So we have a package called axios.
7:48
I can install it,
7:49
with npm install axios.
7:52
That's the name of the package.
7:53
Just like with pip,
7:54
we have to install a particular package name.
7:57
If I wanted to install...
7:59
Let's just pick one of these, bluebird.
8:02
We go to the docs,
8:04
you'll see some instructions on the GitHub repo,
8:07
or here, it just shows you the name, which is bluebird,
8:11
and you run that command.
8:12
So we have to make sure we're using a valid name,
8:14
that matches what we're looking for.
8:16
And if we want axios,
8:18
we'll do npm install axios.
8:20
So I'm gonna just clear this here,
8:22
and then run npm install, axios.
8:24
We can also do npm i axios.
8:28
So it goes and fetches the information from axios,
8:32
and if I look at my code now,
8:34
my package.json file,
8:36
now has a dependencies property in the json,
8:39
and it has axios set to greater than 0.19.2.
8:44
Now I can change this,
8:45
I can install a very specific version if I wanted to,
8:48
instead of just getting the latest,
8:50
or the latest stable version.
8:52
But that's not really something we need to worry about
8:54
at this point,
8:55
but I installed something,
8:56
and not only did it add dependencies axios
8:59
to my package.json,
9:01
I now have a new folder here,
9:03
that was not created before.
9:04
It's called node_modules.
9:07
This is where the actual packages are installed.
9:10
So if we look at node_modules,
9:12
it contains axios.
9:14
Now axios happens to have other dependencies,
9:18
and so those are installed here too.
9:20
Now you might also see,
9:21
there is another file called package-lock.json.
9:25
Package-lock.json, has a little more information.
9:29
So I said that this application requires
9:32
or depends on axios.
9:34
And when I ran npm install,
9:36
the dependency,
9:37
the version that was listed is anything greater than 0.19.2.
9:42
My package.lock or package-lock.json,
9:46
actually specifies the exact version of axios
9:49
that I'm using, which is 0.19.2.
9:52
And it also lists the various dependencies for axios.
9:56
So axios, depends on something called follow-redirects,
10:01
and a particular version 1.5.10.
10:04
Follow-redirects depends on debug.
10:08
So debug,
10:09
is required and it wants 3.1.0 as the version,
10:13
and it requires ms.
10:15
And so we have ms here as well.
10:17
So there's a chain of dependencies,
10:19
just installing axios, resulted in four different packages
10:24
being installed in my folder here,
10:26
in node_modules,
10:27
and my package-lock.json, reflects all of those packages
10:32
and all of their versions that are required.
10:35
So the package-lock.json,
10:36
is something that we don't really touch.
10:38
You don't need to touch.
10:39
You shouldn't be touching it
10:40
Node or npm will update it when appropriate package.json
10:45
is something that we can edit.
10:47
So I can make changes here,
10:49
and we will see how to do that later on.
10:51
But at this point,
10:52
we've seen that we can install different packages.
10:55
Let's do one more example.
10:57
There is a package that I like it called faker.
11:02
We won't be using it just yet,
11:03
but if we take a look at it,
11:05
we can use it to come up with the fake data,
11:07
like fake usernames,
11:09
fake addresses, fake emails, fake colors,
11:12
fake business names,
11:13
all sorts of things.
11:15
And all we need to do is run npm install or npm i,
11:18
and then the package name is faker.
11:20
And assuming we're running this in a directory
11:23
that we've already initialized package.json inside of,
11:27
I just run npm i faker.
11:30
And it will go and get the latest version.
11:33
And if I look at my package.json,
11:36
it shows faker is now a dependency greater than 4.1.0.
11:40
My package-lock.json, also reflects that.
11:44
Where are you faker?
11:45
I doesn't have any other dependencies unlike axios.
11:49
And it says the specific version is 4.1.0.
11:52
Also in our node_modules directory,
11:55
we do have faker.
11:56
For some reason in VS Code,
11:58
it's not showing up,
11:59
but if we look at node_modules in our command line,
12:01
you can see faker right there.
12:04
We can take a look at some of the files in their,
12:06
CD into faker,
12:08
and we have some different files
12:09
that are associated with faker.
12:11
So we have that code now,
12:13
in that node_modules directory.
12:16
So there's kind of a lot we've seen,
12:17
we started with npm inits,
12:19
which is going to ask us some questions.
12:21
It initializes a package.json,
12:23
and then we can install different packages,
12:26
using npm install or npm i,
12:29
and then the name of the package.
12:32
And then the package.json it's automatically updated,
12:34
the node_modules folder.
12:36
The very first dependency we installed
12:37
will create node_modules,
12:39
and the files and the code for that one package,
12:43
all go inside of node_modules.
12:44
So it's very important that we don't track node_modules,
12:48
with Git.
12:49
You don't wanna be pushing this node_modules folder,
12:51
if you have a hundred dependencies,
12:54
that's a lot of code,
12:55
a lot of files that you do not need to push up to GitHub.
12:58
As long as you push your package.json,
13:00
users and developers and friends,
13:02
whoever co-workers, will be able to see the dependencies
13:06
and in the next video,
13:07
we'll see how you can install all relevant
13:09
or all required dependencies for a given project.
13:13
So do not track your node_modules directory,
13:16
add it to gitignore,
13:17
but do track package.json.
13:20
And one more thing,
13:21
just before I end this video,
13:22
if you don't wanna go through that whole survey,
13:24
when you're setting up...
13:25
But I guess, it's not a survey,
13:26
but you don't wanna go through the questionnaire.
13:28
Is that the same as the survey? Okay.
13:30
If you don't wanna type all the questions and answers,
13:32
and you just want an empty package.json,
13:35
you can use npm init--yes.
13:38
So if I made some new directory here,
13:41
lemme get out or faker.
13:42
I don't want to be changing anything in node_modules.
13:44
Those are the dependencies I'm using.
13:47
You pretty much should never edit anything in node_modules.
13:50
I'm gonna go make a new directory.
13:52
I'll call it, take 2.
13:55
Cd into there and then run npm init--yes.
14:01
And there we go.
14:02
It just quickly makes me a package.json.
14:05
It uses the defaults for the name,
14:08
and for everything else.
14:10
Like the author is just an empty string.
14:12
Keyword is empty.
14:13
The license is ISC.
14:15
Description is empty.
14:16
Version is 1.0.0.
14:18
It does, Interesting. Huh?
14:20
It actually uses the name of the folder, which is Take 2.
14:23
Even though that's an invalid name,
14:26
it's supposed to be a lowercase name as we saw earlier.
14:30
But anyway,
14:30
- -yes is a quick way to make a package.json,
14:33
if you don't care about all of this metadata,
14:35
and then I can go and install something else.
14:38
So that's the first part of npm,
14:41
in the next video,
14:42
we'll see how we can install all dependencies
14:45
required for some project that we've downloaded.
14:47
So if I give you a solution,
14:49
and you download that solution,
14:51
the package.json file contains the dependencies,
14:54
but the repository does not contain my node_modules
14:57
directory.
14:58
So you'll need to install all of the dependencies
15:00
and it's super easy thanks to npm.
15:02
(upbeat music)