can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 


Transcript


0:00
(gentle music)
0:04
- All right, so next,
0:05
we're gonna talk about some of the distinctions between
0:08
node and browser-based JavaScript.
0:11
And one of those is something called process.
0:14
So in node, every single node script,
0:16
you run you'll have access automatically
0:19
to something called process.
0:21
You don't have to import it.
0:22
You don't have to do anything fancy.
0:23
You don't download it, It's just there.
0:25
And that is not something we have access to in the browser.
0:29
Process is a global object that has some methods on it,
0:32
different properties that are useful for managing
0:34
the currently running script.
0:37
So we can do things like access environment variables.
0:40
We can view any command line arguments that were passed in.
0:43
We can kill a script, we can exit in different ways.
0:47
So this is not stuff that you'll be doing all the time.
0:50
But the first exercise that you're going to do is actually
0:54
to build a command line script.
0:55
So no web development involved,
0:57
you'll be building a command line tool and you'll need
1:00
to make use of process.
1:02
So you can find out more about process on the node docs.
1:05
If you just go to node ducks and scroll down,
1:09
look for process, you can see here,
1:11
there's a couple of different methods, different properties.
1:14
And again, these all have
1:15
to do with the currently running script.
1:17
So process.env is the first thing we'll see,
1:21
which allows us to access environment
1:23
variables that we've set.
1:24
So in Python, we had a similar tool
1:27
that we used when we deployed
1:28
to Heroku and we wanted to have process or not process.
1:32
We wanted to have environment variable setup.
1:34
This is pretty common,
1:36
especially if you're doing anything involving APIs or secret
1:39
keys, process.env.
1:42
and then some environment variable name.
1:45
So it's an object I his process.env is an object.
1:48
And then it contains key value pairs for the environment,
1:50
variable name and then a value.
1:53
So if we wanted to add a secret key or some sort
1:57
of environment variable, we can do that.
1:59
That's not a node specific thing
2:01
as we've already seen before.
2:02
Let me clear my console here
2:04
and add some environment variable.
2:06
We'll call this color and we'll set it equal to pink.
2:10
Okay, and let's do one more export.
2:15
What's another one, I guess SECRET=
2:19
How about 'I like purple'.
2:23
Okay, so now we have two environment
2:24
variables and in node we can
2:27
access those environment variables.
2:29
If I just open up node here,
2:30
I can do this in a file as well.
2:32
I have access to process right off the bat.
2:34
I don't have to do anything fancy.
2:36
And if we look at process.env,
2:40
there's quite a few different environment variables I have
2:43
set up here and one of them is color.
2:46
And another one for you keep going down.
2:48
What did I do secret?
2:49
Where are you?
2:50
Here It is I like purple.
2:52
Now there are other environment variables that are
2:55
persisting from things like when we worked in flask and I
2:58
set up an environment variable for FLASK_ENV,
3:01
that's coming from my bash profile.
3:03
So all of those environment variables
3:05
are available here in process.
3:07
Now on your machine, they're going to be different.
3:09
That's the point of environment variables.
3:12
So you can access them using process.env.
3:15
Now, another tool that we have,
3:17
another object that's created for us,
3:19
it's actually in array is called process.argv.
3:24
So argv represents any command line arguments that were
3:27
passed when we executed a script.
3:30
So in a bit in the first exercise,
3:32
you'll be writing a command line tool where you will pass
3:35
arguments to a particular script.
3:38
Actually, things like NPM, which we use, well,
3:41
we've only used a couple of times,
3:42
but we will use all the time.
3:44
NPM install will not flask axios.
3:48
We've already done axios.
3:50
Let's just do faker again.
3:51
I'm not gonna hit enter.
3:53
Here, this is actually a node script that I'm running.
3:57
NPM is actually a node script.
3:59
You can view the source code online.
4:01
It just has been alias so you don't have to type node.
4:04
And well, that's beyond the scope
4:06
of what I want to talk about here,
4:07
but we're actually passing in three different arguments,
4:10
install, axios and faker.
4:13
And the script for NPM in the source code.
4:16
You can see it use argv to figure out what packages need
4:20
to be installed.
4:21
So for us, since we're not going to alias anything,
4:24
we would run a script like this node and then NPM.js.
4:29
If that was the script you created,
4:31
or how about just print.js,
4:34
and then different arguments like, hello, goodbye.
4:39
Each argument here will be accessible,
4:42
will be added to process.argv and you'll be using
4:45
this in your first exercise.
4:47
So this has nothing to do with web development specifically.
4:50
We're just seeing how you can set up a command line command.
4:54
How you can set up a tool
4:55
that you can pass information into.
4:57
So let's try it.
4:59
Here I just have a simple little snippet
5:01
of code that is going
5:02
to loop over process.argv and then print out each argument
5:08
along with the index of I.
5:10
What's interesting is that the first value,
5:13
the first element in argv is the path to node.
5:16
So wherever node is on your machine,
5:18
the second value is the path
5:20
to your scripts that you're running.
5:22
The third would be any arguments.
5:24
The fourth would be additional arguments.
5:26
So if we just print out everything in process.argv
5:30
I'll make a new script here.
5:33
What should I call this, I'll just go with printArgs.js,
5:37
and we'll loop over process.argv.
5:40
So why don't we just do four let arg of processed.argv.
5:49
We will console.log(arg).
5:53
All right, so let's try running this.
5:55
It's called printArgs.
5:57
There it is, If I just run node printArgs,
6:01
the first two arguments
6:03
are the path to node on this machine.
6:05
And then the second argument is the actual path to the file
6:09
I executed the script.
6:11
So now if I pass in some other stuff like,
6:13
hello, pink, goodbye, lol.
6:16
Those are each specific arguments they're added to argv
6:21
inside of the process object
6:22
and I have access to them in my script.
6:24
So we can use argv whenever we're writing any type
6:27
of command line script,
6:29
whether it's something that has to do with get something
6:32
that has to do with NPM or starting up a server,
6:35
or let's say we were creating our own version of ls.
6:39
So we could have node ls.js,
6:43
and then we could pass in different flags
6:45
like dash a and dash l we would be able
6:47
to look for those flags in argv.
6:50
And again, you can eventually learn
6:53
to set up your own commands where
6:55
you don't have to type node.
6:57
You don't have to type a file name, like,
6:59
you know, print arg.js.
7:01
We could define a command that our command line would
7:04
recognize as print, just like it recognizes NPM,
7:08
or it recognizes PSQL those aren't native built-in tools
7:13
that you get for free with every single terminal we had
7:16
to install those.
7:17
And something like NPM,
7:19
as I've already mentioned, is implemented
7:20
It's written with node and it just has some fancy stuff set
7:23
up so that you don't have to type node
7:26
and then a file name.
7:27
We can just use NPM.
7:29
But for now we'll be doing things like node
7:31
and then myscript.js,
7:34
and then whatever arguments you want to pass in,
7:37
those will each be available in argv.
7:40
(gentle music)