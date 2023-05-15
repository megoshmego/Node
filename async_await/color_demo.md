can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 

07
which works in conjunction with the async keyword.
0:10
And these two together are very powerful,
0:13
they allow us to write code that looks synchronous,
0:16
that looks like one thing happens
0:18
and it waits for that thing to finish
0:20
before the next thing happens,
0:21
but there are actually asynchronous operations
0:24
behind the scenes.
0:25
But we don't actually have to touch promises,
0:27
we don't need .ven's,
0:28
we don't have to work with callbacks.
0:29
So let's see how it works.
0:31
When we have an async function,
0:32
we've declared a function as async,
0:34
we can put the await keyword in there.
0:37
And whenever we do put the await keyword in that function,
0:40
it will pause the execution of that async function.
0:43
So it doesn't pause the execution of JavaScript,
0:46
we have other things going on,
0:47
they're gonna continue to run.
0:52
But inside of that function,
0:54
the next line of code will not be run
0:56
until whatever we are awaiting finishes up.
0:59
So we use await with something that returns a promise,
1:03
we will await an axios.get or an axios.post,
1:07
or a jQuery. some promise method,
1:10
or some method we've written
1:11
like our animation change color thing
1:13
from a couple videos ago that returned a promise.
1:17
So await is going to pause the execution
1:20
of the async function until something finishes up.
1:24
So waits for the promise to resolve,
1:26
and it extracts its resolved value.
1:28
So I'll show you this in just a bit.
1:31
And then as soon as that promise has been resolved,
1:33
that await is done awaiting,
1:35
and the next line resumes,
1:37
the code picks up on the very next line
1:39
and continues to run.
1:41
So you can think of await as kind of like a pause button
1:44
for that one function, not for JavaScript in general,
1:48
life goes on outside the async function.
1:50
But for that one function,
1:52
the next line of code will not run
1:53
until whatever you're awaiting has resolved.
1:57
So here's an example,
1:58
we have an async function called getStarWarsData,
2:01
surprise we're using that swapi API again.
2:04
And we start by printing starting!,
2:07
just to show you where we are,
2:09
then we call axios.get which returns a promise.
2:13
Usually, we need to chain on a .then, a .catch,
2:17
but we're not doing that, instead, we're awaiting it.
2:20
So when that promise is resolved, this line will run.
2:24
But until that point, this line does not run,
2:27
this line does not run,
2:28
we're just waiting here, it's pausing,
2:30
it's awaiting the resolution of this promise.
2:33
And notice that we're creating a variable,
2:36
that's one of the nicest parts of using await,
2:38
whatever the result value is of this promise
2:41
will be stored in movieData.
2:43
And then execution resumes, we print out all done!.
2:47
And we print out the movieData.data.
2:49
So let's try it.
2:51
I'll just comment out some of this other stuff.
2:54
Let's make our own function getStarWarsData(),
2:59
I think it's films that we're getting.
3:02
And then in here, I already have axios included.
3:05
So I'm gonna call axios.get this URL.
3:13
And that returns a promise, as we've seen before,
3:15
if I just paste that in over here, we get a promise,
3:18
it's pending at the beginning,
3:19
and then it eventually finishes, it's resolved.
3:22
So if I were to not use the await keyword,
3:26
or the async keyword
3:27
and I just do a console.log("STARTING!")
3:32
and then console.log("ENDING!")
3:37
And I run this code, get StarWarsFilms(),
3:43
we get STARTING!, ENDING! and then our request finishes,
3:46
there is no awaiting.
3:47
If I put an async keyword here first,
3:50
that still won't do much for me,
3:52
our code runs in the same order.
3:54
And all that happens
3:55
is that we get a promise returned from this function,
3:58
but the promise
3:59
is not really
4:00
going to have anything useful in it.
4:02
If we try that again,
4:03
I run getStarWarsFilms(),
4:05
we get a resolved promise,
4:07
where the resolved value is undefined.
4:10
We didn't return anything.
4:11
But now if I add the await keyword in here, just like that.
4:19
I try running it, we get STARTING!
4:22
and I don't know if we could see there is a pause there,
4:25
one more time.
4:27
ENDING! did not print out until the request finished.
4:31
So our request only takes like half a second maybe,
4:34
maybe a little less, however long it takes there is a pause.
4:38
We don't see ENDING! until after this has finished.
4:41
If I get rid of await, one more time.
4:44
You see STARTING! and ENDING! immediately printed.
4:47
And then we get our little XHR message here.
4:50
So that is just awaiting it.
4:52
But usually if we're making a request,
4:54
we want the data and what axios.get returns is a promise
4:59
that promise will be resolved, hopefully.
5:01
And it will be resolved with a object
5:04
containing information about the response,
5:06
the data, the response headers, the status code.
5:09
So that resolved value
5:11
is automatically going to be available to me
5:13
when I await a promise and I can store it in a variable.
5:16
So we'll just call this res for response.
5:21
And then why don't we console.log(res) at the end.
5:26
So I'm gonna run it STARTING!, ENDING!,
5:30
and then my data is printed out.
5:32
So res has data in it, what else do we have?
5:35
Status code, headers, basic axios stuff we've seen before.
5:40
So this keyword is very magical.
5:42
It makes our code look like this happens
5:45
and then this happens
5:46
and then this happens, and this happens.
5:47
And that is the actual order.
5:49
But in normal JavaScript,
5:51
without async and await, we know what happens,
5:54
we know that JavaScript just moves right along.
5:56
It doesn't care that this takes time.
5:58
Without that await keyword, it doesn't pause.
6:00
It just prints this out immediately.
6:02
It would try and print out res but raise would be undefined.
6:05
And then eventually that promise resolves,
6:07
but we're not doing anything with it.
6:09
Behind the scenes,
6:10
remember that this is all based upon promises.
6:13
This is known as syntactic sugar for promises.
6:16
It's a nice wrapper on top of promises
6:20
that makes things easier, shorter, more succinct,
6:22
cleaner to look at, and easier to follow.
6:25
But behind the scenes, it all hinges upon promises.
6:28
So we could rewrite this without an async function
6:31
as something like this right here,
6:34
we make our first request,
6:35
and then we chain on the .then
6:38
and in here, we would have our res.
6:41
It'll do a function where we console.log("ENDING")
6:46
and then we console.log(res)
6:51
and then at the beginning,
6:52
we would console.log("STARTING!").
6:55
So this isn't wrapped in a function,
6:57
but I could put it in a function.
6:58
And at this point, it doesn't look much shorter.
7:01
But it is easier to follow.
7:03
First of all, we know that this happens,
7:05
then this happens as long as you're using await,
7:07
then this, then this, here we've got this additional .ven,
7:10
we've got a function that we're passing in.
7:13
But where it really becomes magical and really nice
7:15
is when we add in multiple requests
7:18
or multiple asynchronous operations,
7:20
not just requests, and we can await them all
7:23
within one given async function.
7:25
So we don't need five different .ven's,
7:27
we don't need to return a promise.
7:29
Instead, we can do it all in one function.
7:31
That is what we'll see next
7:32
but let's just verify that this does work.
7:35
There we go STARTING!, ENDING,
7:37
and then we get the data printed out.
7:40
should probably just print out the data itself.
7:44
And is it gonna finish?
7:45
Why are you taking so long?
7:49
Okay, well, who knows why that took so long.
7:51
But there we go, we're getting the data.
7:54
So to conclude this intro to async and await,
7:57
we still have more to talk about.
7:58
But we've now seen the two keywords together.
8:01
Async declares a function as an asynchronous function
8:05
and it will return a promise that will be resolved
8:07
if we return a value from our function
8:10
and that promise will be rejected
8:12
if we throw something in there.
8:14
But also, when we use the await keyword,
8:16
await is going to pause execution of our function.
8:20
until some promise is resolved.
8:23
So the promise that we're awaiting
8:25
is coming from axios, axios.get
8:27
returns a promise it starts out as pending.
8:29
Eventually, it's resolved, hopefully.
8:31
We still haven't talked about what happens
8:33
if we have a promise that's rejected,
8:35
if something goes wrong with our requests
8:37
we're not handling that.
8:38
But that will come soon.
8:40
So we can now write code that looks synchronous.
8:43
We don't have to worry about promises.
8:44
We don't have to write .then,
8:46
we don't have to do anything that looks like a promise.
8:49
Instead, we use async and await together
8:51
and it just shortens up our code
8:53
and makes it just more logical to follow.
8:55
Even though .ven and promises
8:57
are a huge improvement upon callbacks.
8:59
It still is a good amount of additional syntax in clutter
9:03
that is no longer necessary
9:05
as long as we use async and await.
9:07
But they use promises, so you have to understand them,
9:10
which is why we just spent so long talking about promises.
9:12
So next up, we'll get more practice.
9:14
(light hearted music)