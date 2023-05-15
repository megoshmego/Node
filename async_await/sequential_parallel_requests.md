can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 

0:00
(gentle music)
0:04
- [Instructor] So one last topic I'd like to end on here,
0:07
has to do with our final refactored version.
0:10
We're making three separate requests,
0:12
but the way that we're doing it right now
0:13
is not very efficient.
0:15
We are doing them sequentially, so one request,
0:18
we're making it, and we're awaiting it,
0:20
before we even send off the next request.
0:23
So these are not dependent on one another.
0:26
If they were, then we definitely need
0:27
to do them in sequence,
0:29
but we're just getting three independent Pokemon.
0:31
There is nothing that we need from the first request
0:33
to make the second request.
0:35
So sending them one after another is slowing us down.
0:38
We're waiting for this to finish before this goes,
0:41
and then we're waiting for that to finish before this goes.
0:43
And let's say we were trying to fetch
0:45
the 52 original Pokemon.
0:47
Wait, I think I completely just made up 52.
0:50
What is the number?
0:51
Whatever the number is, maybe it's 100,
0:53
I can't remember.
0:54
Let's say we're trying to catch
0:55
or trying to fetch 50 Pokemon.
0:58
If we did it this way,
0:59
where we awaited each request,
1:01
we're going to be waiting for quite a while.
1:04
It probably won't be that bad,
1:05
but there might be a rate limit on the API anyway.
1:08
Or if we're working with some API that is slow
1:10
or our users internet is slow.
1:12
That can make a huge difference.
1:14
If one request has to come back before the next
1:17
and that's repeated 50 times.
1:19
So instead we can make these requests in parallel.
1:22
And the way that we do that,
1:23
at least one option is to not await them immediately.
1:28
We send off the three requests with axios.get,
1:31
and then we await them once the requests have been sent off.
1:35
So await is going to pause execution,
1:38
here, we're pausing before we even initialize
1:41
that axios.get request before we send off that request.
1:45
Versus here, we send them all and then we await
1:49
each one of those variables.
1:51
So I'll just copy this over
1:57
and let's try it.
1:58
Let's go with catchSomeOfEmParallel,
2:01
rather than in series.
2:03
So catchSomeOfEmParallel.
2:06
You're probably not going to notice a difference anyway,
2:08
in speed, visually at least,
2:11
but it is happening much faster.
2:15
We are not waiting for the first one to come back before we
2:17
make the second request and we're not waiting for the second
2:20
one to come back before we make the third request.
2:22
We are sending them all at once and then we're waiting for
2:25
them to come back,
2:26
but they might come back right at the same time or
2:28
a split second later.
2:30
But if we had an API that was taking a second per request,
2:33
here, all these requests are sent at the same time
2:35
and they come back, It might be a total of one second
2:38
or one point something seconds, versus up here,
2:41
we're waiting for one second and then making the next
2:44
request waiting for a full second.
2:46
If that's how slow the API is or how slow the internet is.
2:49
So that can be very, very slow.
2:51
Now there's another option for how we do this
2:54
to send requests in parallel or just to,
2:57
it doesn't have to be requests,
2:58
but anytime you're asynchronous operations,
3:00
if you don't want them to be sequential,
3:02
you could also use Promise.all.
3:04
So here's a version using Promise.all,
3:07
we don't have to make separate variables like we did here to
3:09
store the promise and then await that promise.
3:12
We can just use Promise.all and await
3:14
that master promise, not a technical term,
3:17
but I think it's a good description,
3:19
and it's a little shorter, it's easier to read.
3:22
So I'll copy it over, and if we run this,
3:26
it does the exact same thing.
3:28
It's all too quick for us to really notice
3:30
a difference anyway, these two versions are following
3:33
the same principle of sending parallel requests.
3:35
We are not waiting for one thing to finish
3:37
before we start the next.
3:39
This is just a shorter way of doing it
3:40
using Promise.all.
3:42
And that's it, we have now conquered async and awaits.
3:46
We will see a lot more async functions in the next section
3:50
and onwards as we transition to Node.
3:52
And we talk about creating our own servers
3:55
with Express, a framework we'll see.
3:57
there are lots of things that are asynchronous,
3:59
like connecting to a database,
4:01
like validating a user or creating, hashing a password
4:05
rather that can take a good amount of time,
4:07
connecting to a database and selecting something
4:10
or inserting something.
4:11
In Python, we didn't really have to worry about that,
4:14
those things do take time.
4:15
In Python, those asynchronous operations,
4:17
those things that take time, weren't a problem.
4:20
We didn't have to await them.
4:21
We didn't have to at least explicitly await them,
4:24
but in Node we will be using async and await
4:27
all over the place.
4:28
So that's why we're talking about it now
4:30
it's not just about making client side Ajax calls.
4:33
We'll use async and await a lot, pretty much
4:36
from here on out in Node.
4:38
So next step, we will start talking about Node.
4:41
(gentle music continues)