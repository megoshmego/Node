can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 




Skip navigation




Avatar image


0:01 / 5:53

Transcript


0:00
(upbeat music)
0:04
- So just like we can add async methods
0:06
to stand alone objects, to a plain old JavaScript object.
0:10
POJO P-O-J-O we can also add instance methods
0:14
to classes that are asynchronous.
0:16
So it's pretty much the exact same syntax.
0:18
We use the async keyword in front of the method name
0:22
and that creates an asynchronous instance method
0:24
that each instance will have access to.
0:27
So if we want it to use the Pokemon API
0:29
this is a decent use case for it.
0:32
So we get define a Pokemon class
0:34
and then add our a constructor here.
0:38
We'll expect an id to be passed in.
0:40
We'll set this.id to be id.
0:43
And so we'll create a new Pokemon bypassing
0:46
in like how about 56 and then we'll have a method.
0:51
How about just get info
0:54
something like that, which will be async get info.
0:58
And we'll use this.id
1:01
in conjunction with this URL where we add
1:04
on the ID at the end to get information about one Pokemon.
1:08
So the API is set up in a restful way, Pokemon slash
1:12
and then id here, dollar sign, curly braces
1:17
this.id why do I keep typing percent?
1:20
It's supposed to be a dollar sign.
1:22
(laughs) here we go.
1:23
And we'll get that.
1:24
That should give us information about one Pokemon.
1:27
We will await that
1:28
and we'll go with response again, and then we'll start
1:32
by just console.logging response.
1:36
Okay. So let's try this.
1:38
Let's make a new Pokemon.
1:40
Open up my console and then Pokemon of how about 45.
1:50
So that just makes us the new Pokemon itself.
1:52
No API calls involved.
1:54
It just adds a single property called id.
1:57
But let's now go to the beginning here and save it
2:00
to a variable we'll call this P and then P.gets info.
2:06
Eventually that promise from Axios is resolved
2:09
and we get our response inside of data.
2:12
There's a lot of stuff here.
2:14
Let's take name vileplume, I don't know if I know that one.
2:19
I used to be really into Pokemon.
2:20
So vileplume.
2:22
Is there anything else that you'd want to store
2:26
types poison and grass?
2:30
Yeah, maybe we'll get the types.
2:32
So poison and grass out of types, which is an array.
2:36
okay, what else do we have moves?
2:40
I think we'll just not deal with moves at the moment.
2:43
There's a lot to moves.
2:45
And is there anything else that would be interesting?
2:47
There's different forms for certain Pokemon?
2:51
I guess we've got just an image.
2:54
There's a way to get an image for each Pokemon sprites.
2:56
I think it is.
2:58
Maybe we'll do with an image, let's see.
3:00
Let's just start with the name.
3:02
So that is res.data.name.
3:05
So I could now save that this.name equals rez.data.name.
3:11
Now, if I were to do the exact same thing, P.get info
3:17
and we look at P and now has a name of vialplume.
3:22
And then for types, I think it was rez.data.
3:26
I want to say types, which was an array.
3:29
So for let's type of rez.data.types,
3:35
let's just console that log type.
3:37
See what we have going on
3:42
Do this one more time, get info.
3:45
And then we look at P okay, there we go.
3:48
So within each type, which is an object
3:51
we also have a type property with a name.
3:54
So that's what I'd like to get poison.
3:56
And the other type was grass.
4:00
So I would like for each Pokemon to have a types array
4:04
so we could do this.types.
4:06
We could probably just initialize it up here.
4:10
If we want it to, it has an empty array
4:12
and then we can push each type in there.
4:15
So this.types.push
4:18
and then type.type.name.
4:21
Is that really what it is, type is this .type.name.
4:25
All right.
4:27
It's not the prettiest line there.
4:29
But let's see what this does.
4:30
Let's work with a different Pokemon.
4:33
So how about a 98 and then P.get info.
4:40
Let's look at P we've got id 98.
4:44
Name is crabby types is water.
4:46
I guess crabby is just a water Pokemon.
4:49
Let's do the same thing
4:50
for vileplume, which we know has two types.
4:53
So we'll go with vile and then vile.get info.
5:00
And We look at vile, types has two entries in it,
5:04
poison and grass name is vileplume.
5:07
And I think that's enough for now.
5:08
If you wanted to add onto this, you could definitely do.
5:13
I mean, there's so many things you could do.
5:14
You could work with the moves and actually battle Pokemon.
5:17
You could also just get an image URL
5:20
for each Pokemon and then add a method that would display
5:23
or render your Pokemon in the browser and the Dom.
5:28
But really the point was just to show
5:30
that we can have an asynchronous instance method.
5:32
You just use the async keyword.
5:34
Use a weight in there, just like any other async function.
5:37
It just happens to be in a class.
5:39
So that's it.
5:40
Next we're going to talk about
5:41
handling errors in async functions.
5:44
Something we have conveniently ignored for now,
5:46
or until now.
5:47
(upbeat music)