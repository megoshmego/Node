can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 


0:04
so now that we have it installed
0:05
hopefully it worked out for you if not
0:08
definitely uh
0:08
reach out to a ta or a mentor if you're
0:10
having trouble
0:12
but now that we have it installed what
0:13
do we do with it how do we actually use
0:15
node
0:16
well if you recall how we use python
0:18
where
0:19
from our terminal we have two main
0:21
options one is to open up
0:23
the python repl the interactive shell
0:26
where i can
0:27
run python code and have it evaluated
0:29
and printed out immediately
0:30
and the other is to execute a file with
0:33
python
0:34
i don't have a python file in here but
0:36
if i had app.py
0:38
this would run app.py as python it would
0:41
execute it
0:42
well we have the same exact pattern with
0:44
node
0:45
we'll start with this interactive reple
0:47
we just type node
0:48
hit enter and that opens up our node
0:51
shell
0:51
if i can spell it correctly here we go
0:55
now the cursor changes here or the
0:57
prompts changes
0:58
and i can type javascript code one plus
1:01
one
1:02
we get two um we have strings
1:06
we have booleans we have the same syntax
1:09
that we already know
1:10
we could make an array we'll call this
1:13
nums
1:14
equals one two three four five we have
1:17
nums and we can do things like nums dots
1:20
uh pop nums.push
1:24
so it's javascript i guess this isn't
1:27
conclusive proof that it is javascript
1:30
but
1:30
the javascript syntax i've shown you so
1:32
far works both in the browser and
1:34
in node so this is one way that we can
1:36
run node or to use
1:37
node it's not that common just like with
1:40
python we usually write our code in a
1:42
separate file and then
1:43
execute that file this node rebel is
1:46
useful for debugging for testing things
1:48
out
1:49
and that's pretty much it to get out of
1:51
here there's a couple different options
1:53
all of the meta commands like
1:57
help start with a period so dot help dot
2:00
clear
2:01
dot exit instead of quits which always
2:03
throws me off
2:04
another option though that i usually do
2:06
is just ctrl d
2:08
to get out of there it's too it's too
2:10
difficult to keep track of quits
2:12
and exits between python and node and
2:14
all the other languages with their own
2:16
repos
2:17
next let's write some code in a
2:18
javascript file and
2:20
execute it with node rather than just
2:22
opening up the repl
2:24
so we'll go over to my text editor i
2:26
have a new file
2:27
it ends in js just like a regular
2:30
javascript file that we run in our
2:31
browser
2:32
this is treated exactly the same from
2:35
the editor there is no difference it's
2:36
just dot js
2:38
but we're going to execute it using node
2:40
on the server side
2:42
so we do have console.log if you're
2:44
wondering
2:45
the console does exist when we print
2:48
something with console.log
2:49
it's not printed to the browser console
2:51
though it's printed to our terminal
2:54
like when we do print in python but if
2:56
we run this file in the browser
2:58
we know console.log prints out in the
3:00
developer terminal the
3:02
javascript console in chrome or whatever
3:04
browser we're using
3:05
so let's do console.log um one plus four
3:09
i guess that's really stupid this is all
3:11
going to be stupid but hello from
3:13
node and we'll start with that
3:16
okay let's run this file so my file is
3:20
there
3:20
and i just run node and then first node
3:23
file.js
3:24
hello from node it's working we can
3:27
define a function
3:29
let's do a function called uh annoying
3:33
greet let's use an arrow function here
3:39
and we'll loop a couple times
3:42
how many times should we loop here four
3:45
let's do let i equals zero i
3:48
less than ten i plus plus
3:52
we will console.log hello from node
3:55
let's just copy that line
3:57
so now we've got an arrow function a
3:59
loop and console.log
4:01
nothing revolutionary but we'll run this
4:04
and i never executed my function
4:07
so a bit anticlimactic there let's try
4:09
running it again
4:11
now we're getting 10 console.logs or
4:13
whatever that number is
4:15
anyway we've got a lot of console.logs
4:17
so those are the two ways of using node
4:20
open up the repl with just node or
4:23
execute a file with node and then the
4:25
name of a file
4:27
a javascript file so we're not going to
4:28
execute a python file with node
4:30
we are going to execute dot js files
4:33
all right so very important stuff not
4:36
that exciting i recognize
4:37
but we're going to build upon it it's
4:39
crucial that we know how to actually
4:40
execute a file with node
4:42
next we're going to talk about npm node
4:45
package manager
4:46
a really nice tool for importing or
4:49
downloading libraries and modules to use
4:52
with node
4:58
you