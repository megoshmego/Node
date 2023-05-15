can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 



Skip navigation




Avatar image


0:09 / 6:52

Transcript


0:00
(bright music)
0:04
- [Instructor] All right.
0:05
So now that we've talked about promises,
0:07
we can revisit async functions.
0:09
Something that we talked
0:10
about pretty much in parsing
0:12
very early on just to enable us
0:14
to make Ajax requests
0:15
but we didn't really explain
0:16
how it works.
0:17
What's going on.
0:18
And the reason for that is
0:19
that async functions are built
0:21
on top of promises.
0:23
So we have promises down,
0:24
now let's cover async and await.
0:26
So there are a couple of goals.
0:28
We wanna start with the async keyword.
0:30
And then we'll also understand
0:31
what the await keyword does.
0:33
We'll learn how to use them together
0:35
to manage async code.
0:37
And we'll see how to refactor code
0:38
that uses callbacks,
0:39
code that's based on promises
0:41
to use async await.
0:43
So let's start with this async keyword.
0:46
Before we go into details
0:47
as you saw on the very first slide here,
0:51
ES2017 async functions,
0:54
that ES2017 part is important.
0:56
async and await are relatively
0:58
new keywords in JavaScript.
1:00
They have not been part
1:00
of the spec for very long.
1:02
So just wanted to point that out
1:03
before we go any further.
1:05
Okay, so this async keyword
1:07
is part of ES2017.
1:09
We can make any function,
1:11
a async function
1:12
by just putting async
1:14
in front of the function declaration.
1:15
We'll see that in a moment.
1:17
And this allows us to write code
1:20
that looks synchronous
1:21
even if it isn't
1:22
and we'll see how that works in a bit
1:24
but let's start by focusing
1:25
on this part.
1:26
An async function
1:27
always returns a promise.
1:29
So if we define some function over here,
1:32
function, say hi,
1:35
which will just return, hello,
1:37
very simple.
1:39
And I run say, hi, no surprise,
1:42
we get the string, hello.
1:44
Now, if I simply put async
1:46
in front of this function declaration
1:48
that one keyword
1:50
and I refresh the page over here
1:53
and I run say hi,
1:55
now I'm getting a promise.
1:57
So I never said return a promise,
1:59
I said, return the string.
2:01
But because that async keyword is there,
2:03
this entire say hi function
2:05
is always going to return a promise
2:07
and that promise has
2:08
a resolved value of hello.
2:11
So the function,
2:12
the async function has wrapped
2:14
my return value in a resolved promise.
2:18
And if I wanted to do something
2:20
after this function finished,
2:22
well, I could do a dot then, right?
2:25
So say, hi dot then.
2:28
And then we could
2:29
console dot log that message
2:32
console dot log message.
2:35
Now, this is not really
2:36
anything that would warrant
2:38
an asynchronous function.
2:40
It happens immediately
2:41
but just so you can see how it works
2:43
it returns a promise,
2:44
just like any other promise.
2:45
It happens to be resolved immediately.
2:47
It's never really pending
2:49
but it is a promise it's resolved.
2:50
So the callback from dot then
2:52
will be executed
2:53
and it will be past that resolved value
2:56
which we saw earlier was hello.
2:59
So now it's constant logging, hello.
3:01
Okay, so you can think of it,
3:03
the async function as just returning
3:06
a resolved promise
3:07
with whatever that value is
3:09
that we are returning.
3:11
So if I were to rewrite this,
3:13
we could do function, say, hi
3:17
I'll comment this one out.
3:19
And then we could return.
3:20
There's an easy way to resolve
3:23
or to return a resolved promise
3:25
capital P promise dot resolve.
3:27
We could also make
3:28
a new promise like this
3:31
and then just resolve it immediately.
3:36
Resolve hello.
3:40
I think that's what I had.
3:42
And if we refresh the page,
3:44
we get the exact same output.
3:46
But the easiest way,
3:47
if we were just trying
3:48
to do this very quickly
3:49
is return promise dot resolve hello.
3:54
So however we arrive at it,
3:56
whether we are returning promise dot resolve
3:59
or returning a full new promise
4:01
with a resolve and reject function
4:03
and we're calling resolve,
4:05
it doesn't really matter
4:05
because we're not actually
4:06
going to do this.
4:08
Async functions do it for us automatically.
4:10
An async function knows
4:12
to create a promise
4:13
and to resolve it
4:14
if we return something.
4:17
But what about rejecting a promise?
4:19
When would a promise be rejected?
4:21
The automatically generated promise
4:23
coming from an async function.
4:24
Inside of an async function,
4:26
if we return anything,
4:27
it doesn't matter what it is,
4:29
it will be returned
4:30
or wrapped in a resolved promise
4:32
that will be returned.
4:33
But if you want that promise
4:34
to be rejected,
4:36
you simply throw an error
4:37
inside of the async function.
4:39
So for example,
4:40
you just throw anything,
4:42
that promise that is returned
4:44
as long as we have
4:45
that async keyword there
4:46
that promise will be a rejected promise.
4:49
So we could have another function.
4:51
We'll call it oops,
4:54
and we'll make it an async function.
4:58
And we will throw bad idea.
5:03
Okay, then if we call oops,
5:07
we chain on a dot then,
5:09
it's not going to be called
5:11
but we could just try it,
5:12
console dot log message.
5:16
And we could also chain
5:17
on a dot catch and error
5:22
and we'll console dot log inside catch
5:27
and then also the error.
5:31
Let's see what we get
5:32
inside catch bad idea.
5:34
This hello is coming
5:35
from our first async function.
5:37
Actually, it's not an async function
5:38
at the moment
5:40
but now it is.
5:42
So when you throw something
5:44
inside of an async function,
5:45
that promise that it generates automatically
5:48
will be rejected with that value.
5:50
If we instead returned this,
5:53
now the promise is resolved.
5:55
And so we're just printing out bad idea.
5:58
So I'll update this to say inside then.
6:03
And there we go inside then bad idea.
6:05
We go back to throw,
6:08
now inside catch bad idea.
6:11
So at the moment you might be wondering
6:12
why is this useful?
6:14
If we're just using this async keyword
6:17
to generate a resolved
6:18
or rejected promise,
6:20
it's not that hard for us
6:22
to do it on our own
6:23
as we saw here.
6:24
If we want to just generate
6:25
a resolved promise
6:27
we have this promised out resolve.
6:28
I don't need the async keyword.
6:30
If I want a projected promise,
6:32
I can do promise dot reject.
6:34
So what is the point of async functions?
6:37
Well, that is coming up
6:39
in the next video
6:40
because we need to talk
6:41
about the second keyword
6:42
the partner in crime with async,
6:44
the await keyword.
6:46
(bright music)