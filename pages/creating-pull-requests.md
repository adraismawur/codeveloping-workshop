### Hello
If you are seeing this before having created any issues or new branches, you are getting ahead of things.

If you did so intentionally, that's okay, but this exercise does assume there are open issues on GitHub, and that there are two branches to create pull requests on.
So you may need to create new ones to follow along entirely.

# Creating pull requests

At this point, on your fork, we should see that there are two issues, and two new branches besides the master branch were added.

[![After creating issues and stuff](images/after-issues.png)](/images/after-issues.png)

In order to merge this back into the master branch, we need to create some pull requests.

This is a much nicer way of working than we did in the "resolving merge conflicts" exercise, and it can be done entirely on github!
To start, go to the "Pull requests" tab on github, next to the "issues" tab.

If there are existing pull requests, you will see them here.
But now there are none.
To make one, click on "New Pull request"

This will open up a page that might seem intimidating at first.
It is important to know a few things going forward:

- A pull request always has a _source_ repository, and a _target_ repository.
    - GitHub refers to these as the _head_ repository, and the _base_ repository
- A pull request also always has a _source_ branch, and a _target_ branch.
    - GitHub refers to these as the _compare_ branch and the _base_ branch.
- When you create a new pull request on a fork of an existing repository (like you are doing right now), the default target repository is the _original repository you forked from_
- You're free to mess around with this interface as long as you don't click "Create pull request"
    - Even if you do, you get to review your pull request before you submit it.

[![Pull request branches](images/pull-request-branches.png)](/images/pull-request-branches.png)

It is important to know how this works because it's easy to accidentally submit a pull request to the original repository.
If that happens anyway, don't worry I won't get mad.
But for now, we just want to make a pull request for your own copy of the repository.

In order to do that, change the target repository to `your-username\codeveloping-workshop`.
Once you do, you will see that the interface changes to be much simpler all of a sudden.
Proceed with the exercise:

## Exercise

### Creating a new pull request

Select the branch you just worked on as a source branch, and leave master as the target branch.
Click "Create pull request".
You will be taken to another screen where you can fill in some details.
It is nice to describe what the pull request changes, but in particular if you are addressing an issue, you can link this pull request to that issue.

In the description box, type a hash symbol (#) and GitHub will show you a list of isssues that are currently open.
Each issue on github has a number, and can be referred to by that number prefixed with a # symbol.

The really cool thing about this is that if you add a [closing keyword](https://docs.github.com/articles/closing-issues-using-keywords) before this number, GitHub assumes that the pull request you are currently working on will fix that particular issue, and closes it along with it.

Try writing `closes #1` or `closes #2` in the description depending on the GitHub issue you are addressing, then press "Create pull request".

Now you have finally created the pull request, and it is time to check eachother's work.

### Reviewing

GitHub has a built-in system for reviews as well, making the entire process of codeveloping much easier.
In the top-right of your new issue, assign your teammate as a reviewer for the pull request.

They should receive an email asking them to review the changes you have made in this pull request.
Once you receive this email, open the pull request and go to the "Files Changed" tab:

This tab is the easiest way to see what changes have been made on this source branch compared to the target branch.

The changes you have made to the repository are very small, and may not involve changing the content of files at all (e.g. renaming a file).
If there were changes that you disagreed with, it is possible to comment on code directly, or in general by clicking "Review changes" in the top right and writing a comment.

For now it should suffice to simply approve the pull request.

[![Review changes](/images/review-changes.png)](images/review-changes.png)

Once your pull request is approved, it can be merged into the main branch.

[![Changes approved](/images/changes-approved.png)](images/changes-approved.png)

Once you are done approving and merging pull requests, note that there are no longer any open issues on your repository!
These have automatically been closed along with your pull requests.

You may also be able to see in the history of the repository that there are two new commits that were made by merging these pull requests into the master branch.

### Pulling the updates back onto your machine

Now you will want to get the updated version of the code back into your computer so that you have the latest version of the website.
To do so, first you will need to checkout the `master` branch on your computer using `git checkout master`.

Git may say that the master branch is up to date with `origin/master`, meaning that it does not know of the changes quite yet.
Since you know that there are changes to be pulled, use `git pull` to get them from the online repository.

Once you are done, you can proceed to "Contributing to a repository".
