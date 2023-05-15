can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 


(bright music)
0:04
- [Instructor] Now that we can install a package,
0:06
Let's talk about how we actually use them in a file.
0:09
How do we import or require some dependency
0:12
so that we can use it?
0:13
In Python,
0:14
we saw that we would do things like import X from some file.
0:18
Or just import a module.
0:20
We don't use the import keyword
0:22
when we're working with Node.
0:23
Instead we use require.
0:26
So I have a new file, guestList.js.
0:30
We just installed a couple different packages
0:32
including faker, which we can see in our package.json.
0:36
All that we need to do to access faker is require it.
0:41
Just like this.
0:42
So we don't have to write some path to get to it.
0:44
We don't have to reference node modules,
0:46
even though that's where it is.
0:48
Node is just gonna look inside
0:49
of Node modules automatically.
0:51
And then we'll save this to a variable like faker.
0:55
So if you take a look at how it works
0:57
on the docs for faker,
0:59
they do pretty much the exact same thing.
1:01
They use var,
1:02
but faker equals require faker.
1:04
And then that gives us access to this faker object
1:08
that has a bunch of methods on it.
1:10
So we could try one like find name.
1:13
Faker.name.findName.
1:15
So we have required faker.
1:17
And then faker.name.findsName.
1:20
And then why don't we just console.log that?
1:24
There's our parentheses.
1:26
And now we can execute this code.
1:28
So faker, once again, just generates random data for us.
1:31
That can be useful when we're starting out,
1:33
we need some fake information.
1:34
Here it doesn't really offer much.
1:36
We're just printing a fake name.
1:38
Let's run this.
1:39
So the name of that file is
1:42
guestLtist.
1:44
And there we go,
1:45
Esta Homenick, Homenick?
1:47
And we're getting a fake name every single time.
1:50
So we're doing that thanks to faker.
1:53
We require it.
1:54
Same thing with Axios.
1:56
I have installed Axios.
1:58
We'll talk more about using Axios,
1:59
but you can see it's here.
2:01
If I wanted to import it,
2:02
it's just const axios equals require axios.
2:07
Now you can give this name anything that you want,
2:10
assuming it's a valid name or identifier in JavaScript.
2:13
But usually you wanna to go with the name
2:15
of the package you're importing.
2:17
But technically we could call this one faker
2:19
and this one axios.
2:20
It's just a variable that will hold the contents
2:22
coming from this package.
2:24
So I'm not gonna do much with Axios.
2:26
Why don't we just console.log axios to start?
2:29
And there we go.
2:30
You can see there's a bunch of methods.
2:32
Things like get, axios.get.
2:35
Axios.post.
2:37
That's all you need to do to import a library or a package
2:40
once you have installed it with npm install.
2:42
Assuming it's in your node_modules directory.
2:45
So we have axios.
2:46
We have faker.
2:47
I can require them simply by require
2:50
and then the name of the package.
2:52
(bright music)