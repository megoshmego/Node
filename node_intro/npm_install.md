can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 

0:00
(vibrant music)
0:04
- [Instructor] All right, so to install a package,
0:06
if we are actually creating an application,
0:09
we need some new dependency.
0:11
We use npm install package name.
0:13
And we've already seen what that does.
0:15
It updates our package.json.
0:17
It also downloads the code
0:18
and puts it in a local node modules folder.
0:21
So no virtual environments required.
0:24
We don't have to deal with any of that.
0:25
We don't have to activate a virtual environment,
0:27
deactivate it, switch between them.
0:29
It's super simple.
0:30
It's just a node modules folder
0:32
in our given application directory.
0:34
And our app will look to node modules automatically
0:37
to try and find axios or faker or react
0:40
or whatever we're trying to use.
0:42
And so we can have different versions
0:44
in each application we create.
0:46
And we'll see how we import
0:47
and use those libraries later on.
0:49
And just remember, never add your node modules directory
0:54
using git, you don't want to track it.
0:55
I mean, it's not the end of the world.
0:57
It's not a security issue.
0:59
It's just a lot of content,
1:00
a lot of files that are not going to change
1:02
that you do not need to upload to GitHub.
1:05
Users and developers can easily download dependencies
1:09
when they clone your files using this command.
1:12
So if we clone an existing project,
1:14
it doesn't have node modules,
1:15
there's no packages installed,
1:17
but it does have a package.json,
1:19
and that lists all of the dependencies.
1:22
If we run npm install without a package name,
1:25
you can also install multiple packages
1:27
by separating them with spaces.
1:29
But if we just run npm install nothing,
1:31
then npm will look at the package.json
1:34
and go through each dependency and download it,
1:37
install it, and put it in node modules.
1:40
So this is similar to pip install dash r
1:43
with a requirements.txt file, except it's shorter,
1:46
for one thing, and we also don't have to specify
1:49
the name of the file.
1:50
We don't have to make requirements.txt,
1:52
we don't have to keep requirements.txt up do date
1:55
like we do with, well, in Python where we do pip freeze
1:59
and then we update requirements.
2:01
Instead we just install a package.
2:02
It automatically is updated in our package.json.
2:06
Super easy.
2:07
So if I wanted to do a quick example,
2:11
we'll do this application here.
2:12
It's called node chat, it's a relatively simple application,
2:15
a chat app, and I'm going to clone this.
2:19
So copy this URL.
2:21
It does have a package.json as you can see here.
2:24
It's kind of short.
2:26
And I'm gonna clone it.
2:27
So let's go to a different directory here
2:30
that's not inside of a git repo and I'll run git clone.
2:36
Alrighty, so I'll cd into that.
2:39
And I have all the files.
2:41
There's no node modules,
2:42
but we do have our package.json
2:45
and it has seven or eight different dependencies
2:48
that we need to go and install
2:50
in order to run this application.
2:52
Now if we look at the documentation,
2:54
just the read me file here,
2:56
it says we need to clone the repo, run npm install,
2:59
that's what we're about to do,
3:00
and then to start the app we need to run npm start.
3:04
We'll learn more about npm starts
3:05
and how we can add different commands
3:07
other than install later on.
3:09
So we're not doing that, but we do need to run this
3:12
to actually start the application.
3:13
And if I try it right now,
3:15
we don't have any dependencies installed.
3:17
We're missing modules.
3:18
Node modules is missing.
3:20
Did you mean to install?
3:21
Yes, I should install.
3:23
So npm install nothing, just npm install
3:28
and you'll see that it starts to install
3:30
each required package.
3:32
Looks like there are some pretty small packages
3:34
so it was pretty short.
3:35
If we do an ls here, we now have node modules.
3:38
If we look at node modules,
3:41
there's a lot of packages here, wow!
3:43
So all of those were installed for me
3:45
with that single command.
3:46
So I'm gonna back out again,
3:48
and now I'm gonna try starting my app.
3:51
And we may get a different error.
3:53
Nope, we don't.
3:54
That's always good.
3:55
And that's all we need to do.
3:57
We have the dependencies, the app is running now,
3:59
and it says port 3000.
4:01
So we can go to local host 3000
4:03
if we want to view it.
4:05
That's not really the point of this video,
4:07
but it's good to show it does work.
4:09
We have a chat app.
4:10
So I'll open this in two windows and I'll choose a username.
4:13
How about just Colt,
4:15
connect, I'll enter my message,
4:18
send, it shows up here.
4:20
And then if I connect over here as chicken
4:24
and we say balk, balk,
4:28
send, that message shows up here and here,
4:32
there's no refreshing involved.
4:33
It's a simple real-time application.
4:35
But anyway, that's not the point.
4:37
The point was that we could install dependencies very easily
4:40
with one command, npm install,
4:43
assuming we have a package.json.
4:45
Now if you don't have a package.json,
4:47
then npm install is going to be very confused
4:49
and it will tell you
4:50
it doesn't know what you're trying to install.
4:52
But we commonly do this
4:54
when we are downloading some application
4:56
someone else created.
4:57
You'll do this a lot if you're trying to run the solutions
5:00
that we've written for different projects and exercises.
5:03
We're not going to include node modules,
5:05
so you will clone or download the entire project
5:08
and then run npm install
5:10
and npm will look at package.json,
5:13
find all dependencies, get the correct versions,
5:15
put them in node modules.
5:17
And then you could add on your own dependencies
5:19
with npm install and then the name of a package,
5:23
like, we'll do faker again.
5:27
And that will be added to package.json.
5:30
So that's pretty much it.
5:31
Well cat package dot, there we go.
5:34
And now we have faker in there
5:35
and faker is in node modules,
5:38
somewhere in here, there we go.
5:41
So npm is a much better experience in my opinion,
5:44
compared to the equivalent process in Python.
5:47
At the end of the day, we have the same outcome.
5:50
We can have separate dependencies
5:52
in a per project or on a per project basis,
5:56
but npm just makes easier.
5:58
The package.json interface,
6:00
and I guess it's not really an interface,
6:02
but the process is just better.
6:04
You don't have to create a text file
6:07
and pip freeze and update that file.
6:10
Npm install just automatically adds any dependencies
6:13
to that file,
6:14
assuming that you install them
6:15
after a package.json file has been created,
6:18
which we initialized with npm init.
6:22
And so now that we have that out of the way,
6:23
it's time to actually move on
6:24
to talk about node and what we do
6:27
now that we have some dependencies,
6:28
now that we can run a file with node,
6:30
let's actually build stuff.
6:32
