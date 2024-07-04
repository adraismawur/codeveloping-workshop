# Issues

Issues can be used to track work items, request features, report bugs, and whatever else that involves work on a repository on platforms like GitHub or GitLab.
Issues are an integral part of developing in an open source repository, and you can expect to receive new issues on software projects you work on using these platforms.

In this exercise, you are going to create a couple of issues as practice.

## Exercise

### Creating an issue

Creating an issue is very simple, and is done by navigating to the issues tab on your repository and clicking the "new issue" button in the top right:

[![Issues tab](/images/issues.png)](images/issues.png)

All repositories that allow non-contributors, maintainers or owners to create issues will have this button in this location.
Other platforms that have an issue feature will work in a similar way.

### Describing the issue

For maintainers and contributors of a repository, it can be difficult to understand, reproduce and fix issues that other people submit.
For this reason it is important to describe your issue well.

The first thing is the title of the issue.
Ideally this makes it immediately clear what the core of the issue is.
But it does not need to describe the entire problem.


There are two issues that can be created to proceed in this workshop.

❗Decide which of you handles "issue 1" and who handles "issue 2".
Only open your own issue.

<hr>

<details>
<summary>Click here for a description of Issue 1</summary>

The first issue is that you added a contributing-to-a-repository page to the listing, but it's blank.
This is because the filename is missing its .md extension.

From the perspective of the user, all they know is that there is a page that looks like it has no content, so some ways to phrase this may be:

- missing content
- contributing-to-a-repository.md is missing content
- why can't I see the article
- contributing to repository page should be there but it isn't why

</details>

<hr>

<details>
<summary>Click here for a description of Issue 2</summary>

This second issue is that there ought to be a page on creating pull requests, but it's missing from the listing.

From the perspective of the user, they may have been told there would be a page with this content, but they can't see it.
Some ways they may phrase this are:

- missing article
- creating-pull-requests not showing in list
- where is the creating pull requests thing
- please add the pull requests page

</details>

<hr>

Obviously some of these are phrased better than others.
For this exercise, prefix your title with "Issue 1" or "Issue 2" so that your teammate can easily find it.

Beyond the title, the content of the issue is also extremely important.
Both of the issues described above can be regarded as bugs, as they imply something is missing that should be there.

With bugs, it is important to describe:
- What _exact_ error/issue you are dealing with
- What steps you can take to _reproduce_ the issue
- What you are expecting to see, if you know
- What you are seeing instead

These are very typical items to see in a bug report.
There is an optional section at the end of this page that describes how you can help users describe their bugs in these terms.

Create an issue on the github repository for the issue assigned to you, describing the issue to the best of your ability.

#### Working on the issues

Once you have created your issues, open your teammate's issue **on GitHub**.
See if you can understand the problem by looking at their description.

When you feel like you understand the problem, create a new branch on your machine where you solve the problem using `git branch hotfix/issue-1` or `git branch hotfix/issue-2`.

Make a commit on this branch fixing the problem, and then push this branch using `git push -u origin hotfix/issue-1` or `git push -u origin hotfix/issue-2`

##### Stuck?
If you get stuck, remember that all you have to work in these exercises is the /pages folder in your repository.
Both issues can be solved by rooting around in there.

Further hints:

<details>
<summary>Hint 1</summary>
Each line in listing.txt is a page that shows up as a link on the left side of the website.
</details>


<details>
<summary>Hint 2</summary>
A link to a page will show up regardless of whether a page with that file name exists
</details>


<details>
<summary>Hint 3</summary>
Remember that lines starting with a # are comments and are ignored by the website.
</details>

Once you are finished, [click here](index.html?page=creating-pull-requests.md)

