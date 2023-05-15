can you please evaluate the following transcript for important terms, ideas , and give a simple demonstration of the concepts for review? 



0:00
(Upbeat music)
0:04
- [Instructor] Next step, I'd like to talk about GitHub
0:06
for a little bit.
0:07
We've seen how to get our own code up on GitHub,
0:10
how to pull down from GitHub,
0:11
but we haven't talked about collaboration.
0:13
Often when we work with other developers on projects,
0:16
especially open source projects,
0:18
we won't have permission just to push whatever we want up
0:21
to the official repository.
0:23
So there's a different workflow
0:24
that we're going to cover in this video
0:26
that involves something called pull Requests.
0:28
Here's an example repository, it's called faceswap.
0:32
It is some code, I think it's all Python,
0:34
and it helps you make these faceswaps, these deep fakes.
0:38
If I wanted to get this code on my machine,
0:40
it is open source, it's on GitHub,
0:42
I can clone it.
0:43
So here's a new command.
0:45
We can just copy this URL, click that button or Command+C.
0:49
And then a very important thing to note
0:51
is that you do not wanna clone a repository
0:53
into another repository.
0:56
Right now I'm inside of my playlist repository.
0:59
So I'm going to back out and then I'll make a new directory.
1:02
I'll call this one, Deep Fake, and then CD
1:05
into that, type git status again, just to make sure, okay.
1:10
Now we can run, git clone and then paste that URL.
1:14
And this will probably take awhile.
1:15
I think it's a pretty large repository.
1:18
So it's going to go and fetch all of those pieces,
1:21
all of the files, all of the information,
1:23
all of the commit history
1:24
all the git history, everything and put it
1:27
in a folder on my machine and I'll have everything
1:31
but I won't be able to push up changes.
1:34
That would be pretty crazy.
1:35
If somebody puts an open source project
1:36
on GitHub and anybody could change it without permission,
1:40
that doesn't really work.
1:41
As you saw, I had to give Cody access.
1:43
I had to give him collaborator permission to allow him
1:46
to push code directly to the repository.
1:48
So we're gonna talk about a really common workflow
1:50
that involves something called pull Requests.
1:53
But first, let me just show you what we ended up with.
1:56
If CD into faceswap, there's a ton of files.
2:00
If I type git log, tons and tons of commits
2:03
I mean, I could be scrolling for long, long time.
2:06
Looks like there's how many?
2:08
914 commits.
2:10
So I have all of that here, but remember I can not push up.
2:13
So if I wanna make changes, I wanna try and contribute
2:16
to an open source project.
2:18
What I need to do is make a pull request
2:20
and the workflow for that is a little different.
2:23
What we do is we actually fork a repository.
2:27
There's a button right here.
2:28
This makes you your own copy on GitHub.
2:32
So it takes the exact current state of this application
2:35
or of this repo, it makes you your own version
2:38
and you have permission to do whatever you want
2:40
to that version.
2:41
Then you can make changes, push them up to your version,
2:43
to your fork, and then you can make a request to FaceSwap,
2:47
for example, the devs, you write a little explanation
2:50
on GitHub.
2:51
I'll show it to you in a moment and then they can reject it
2:54
or accept it and merge it in.
2:56
All right, so let's take a look
2:58
at how this works.
3:00
I have a much simpler repository open.
3:02
This is actually a demo repo from GitHub called Spoon-Knife.
3:06
The point is that you're supposed to fork it.
3:09
It doesn't really have any meaningful content in here,
3:11
it's just an educational repository that we can use instead
3:15
of trying to fork and make changes
3:17
to that faceswap, which was a massive project.
3:18
And we don't wanna bother the developers
3:21
with something useless.
3:22
We're going to fork this repository.
3:24
So I'm gonna click Fork right now
3:28
and I'm gonna fork it to my account.
3:30
It will take a moment and it's making a copy for us.
3:34
Like I said, exactly the same state, just our version.
3:37
We can do whatever we want with this.
3:39
We can add 1000 files.
3:41
We can do anything, and this is the basic workflow,
3:43
we fork, we clone our fork.
3:45
So we don't clone the original, we clone the fork
3:48
and notice how the URL says Colt/Spoon-Knife.
3:51
Forked from github/spoon-knife.
3:54
So now we're going to clone it.
3:56
And again we don't wanna do it inside of an existing repo.
3:59
So we're going to run, get clone and then paste
4:02
that URL, Colt/Spoon-Knife or whatever your fork is.
4:06
And then we should have a spoon knife directory
4:10
and we should now have a repository and a couple of files.
4:13
So I'm gonna make a change or two very quickly.
4:16
Okay, here's what we have, an index HTML,
4:19
a read me and styles.css.
4:21
Let's just go in and make everything purple.
4:24
Well, at least the background color purple for star.
4:28
So we'll go with purple, fantastic choice of color.
4:30
If I may say so myself, we're going to commit that change.
4:33
So github styles going to commit.
4:37
We'll go with, make everything purple.
4:40
Okay, and then we need to push.
4:42
So just double check, we have our remote,
4:45
which we automatically get when we clone a repository.
4:48
We cloned it from this URL,
4:50
so it sets that as the origin for us.
4:52
So now we run a git push-you origin master.
4:56
We're pushing the master branch up to our fork.
4:59
Oh, I misspelled it there.
5:01
Gave myself a little heart attack.
5:03
And then if I go back to my fork on GitHub,
5:06
we should see that my changes here.
5:08
If I just go to Commits, make everything purple,
5:11
now shows up, awesome.
5:12
So we still haven't actually changed
5:15
the original in any way, and we haven't attempted to.
5:18
We've just updated our fork.
5:20
So they're out of sync and it tells me this,
5:22
this branch is one commit ahead
5:24
of the actual original spoon knife.
5:27
If I do wanna propose these changes, fingers crossed.
5:31
Hopefully the generous developers will accept my suggestion
5:34
of making everything purple.
5:36
I can click on pull Requests right here.
5:39
So I'll click that and notice the screen is going to change.
5:43
I'm now looking at github/spoon-knife
5:45
not colt/spoon-knife, and I can compare the changes.
5:50
And I don't know, I think I messed up some
5:52
of the spacing with my VS code editor when I saved it,
5:56
updated spacing to be tabs,
5:58
but you can see my changes here.
6:00
Everything else is the same.
6:01
It looks like this was all removed and re-added
6:04
but this is really the only new line.
6:06
So background color set it to purple
6:08
and I'm going to click Create pull Request.
6:13
Then all I do is add in a comment
6:15
to explain what this Commit is
6:18
why I'm trying to contribute it.
6:20
You can read the guidelines which I highly recommend you do.
6:22
if you plan on actually contributing,
6:24
and then we would just click Create pull Request,
6:26
and then we just wait and hopefully it's accepted.
6:29
And if it is, those changes will become part
6:32
of the original repository.
6:34
If it's not, then we still have our own changes.
6:36
We're just making a suggestion to keep things simple,
6:39
I just had us make changes to the master branch
6:42
and make a pull request from our Forks Master.
6:45
But what a lot of open source reposts want you
6:47
to do is make a topic branch.
6:49
So here's React.
6:50
This is the official react repository.
6:52
If we look at pull requests, there's quite
6:54
a few open pull requests.
6:56
There's over 8,000 closed requests.
6:58
Let's take a look at one of them like this pull request
7:00
that was made and you'll see that it was not made
7:03
from this developer, Chris Dobby's master branch,
7:07
it was from a topic branch called dev tools 16924,
7:11
it looks like.
7:12
The mechanics are absolutely the same,
7:13
it's just a different pattern to follow
7:16
on these larger projects.
7:17
Topic branches can help make it cleaner
7:19
and easier to understand pull requests.
7:21
We can see that this particular pull request
7:23
has 171 additions, 21 deletions,
7:26
and that's pretty much it, it's open,
7:28
it's waiting for some action to be taken.
7:30
And lastly, let's take a look at the other side
7:32
of this experience of actually accepting
7:35
or rejecting a pull request.
7:37
So while I was recording this I had Ellie,
7:39
one of my friends and co-instructor,
7:42
I had him make a pull request to the playlist repository
7:45
that we've been working with.
7:47
If I go to the pull request tab,
7:48
I see one new pull request.
7:51
Here it is, adding Ellie's favorite song.
7:53
It's a good one.
7:54
I'm sure it's some sort of troll here.
7:57
so we can take a look at his code.
7:59
If we go to Commit, let's see what he did,
8:03
say you will.
8:04
Oh okay, It's actually not a sarcastic one.
8:06
Thank you Ellie.
8:07
Say you will by Fleetwood Mac has been added in.
8:10
In his version, he forked it as you can see.
8:13
It's coming from his master branch of his fork.
8:16
Now, if I want to accept it,
8:17
I can click Review Changes and decide to comment.
8:21
If I want some more discussion and give feedback.
8:24
If I want to approve, I can do it right here.
8:27
So that's what I'm going to do now.
8:29
And click Submit.
8:31
I probably should have added a message.
8:32
And then I'm going to click Merge pull Request,
8:35
confirm merge and now you can see Colt approved
8:38
these changes.
8:40
I merged the Commit.
8:41
Let's go back and take a look at what we have
8:44
on the master branch playlist.txt.
8:47
We now have that Fleetwood Mac song
8:49
but on my version, I don't have that.
8:51
If I just do git log on my local version,
8:53
I have nothing with Ellie.
8:56
So if I want to get that, I need to pull that change down.
8:59
It's only on GitHub, I'm working on the relaxing branch.
9:02
So I'm gonna git checkout master, once again, misspelled it.
9:06
And then I'm going to pull from origin.
9:08
So git pull origin master.
9:12
And there we go.
9:13
We have one file changed, one insertion.
9:16
If I type git log, we can now see adding my favorite song.
9:20
That's coming from Ellie.
9:22
And here it is, we now have Ellie's contribution.
9:25
He forked it.
9:26
He cloned it.
9:27
He made us change.
9:28
He pushes change to his fork.
9:29
He made a pull request.
9:30
I accepted it.
9:31
That was merged in.
9:32
That was on GitHub.
9:33
So then I pulled it down to my local repository
9:35
and now I have it.
9:37
(soft music)
