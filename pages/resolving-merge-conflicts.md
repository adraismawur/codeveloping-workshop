# Merge conflicts

When actively working on code as a team, there may be times where you are working on the same code.
GIT is very clever about figuring out what the differences between files are.
But if a change has been made on the same line in a file, GIT can usually not figure out how to proceed without human intervention.

In order to demonstrate this, we will introduce merge conflicts between your branches.

## Practical exercise

To prepare, please run the following command in the directory of the workshop repostory:

`git config --local pull.rebase false`

This is needed to avoid a warning later on.

We will add two items to the page listing of our website.
These pages already exist, and just need to be added to the `pages/listing.txt` file.

Decide who is person 1 and who is person 2, then do the following:

### Person 1 tasks
1. Open `pages/listing.txt`
2. Replace  `# change this` with `working-with-issues.md`
3. Commit your work
4. Push your commit


### Person 2 tasks

1. Open `pages/listing.txt`
2. Replace `# change this` with `working-with-pull-requests.md`
3. Commit your work
4. Push your commit

### Oh no

Whoever completes their task first gets to watch the other get an error from git saying that their branch is behind.
That person now needs to first pull the changes to their computer using `git pull`.

This should start the merge conflict.

### Structure of a merge conflict

The idea behind resolving merge conflicts is that there is an incoming change (from the person that finished first), and a current change (from the person who finished second).
You need to decide what to keep or remove in order to achieve a desired result.

This is what a conflict typically looks like.
GIT has added the `>`, `<` and `=` characters. Everything in-between is done by humans:

```
introduction.md
resolving-merge-conflicts.md
<<<<<<< HEAD
working-with-pull-requests.md
=======
working-with-issues.md
>>>>>>> f424d28c9d1666a84601bc23e97c5e8496543d63

```

Here we can se that there is a _current change_:

```
<<<<<<< HEAD
working-with-pull-requests.md
=======
```

This is the _current_ change because it is _currently present_ on that person's machine.
As opposed to the _incoming change_:

```
=======
working-with-issues.md
>>>>>>> f424d28c9d1666a84601bc23e97c5e8496543d63
```

This is the change that the person who finished first introduced and is now incoming from the repository on GitHub.
You can even see the commit it is coming from (starting with f424d).

### Solving a merge conflict

Work together to solve this merge conflict:
1. Edit the file to resolve the conflict, preserving both changes to the file.
    - When you are done editing the file, there should be no more `>`, `<` or `=` characters remaning in the `pages/listing.txt` file.
2. Once you are done, you can run `git commit` to finish this merge.
3. Then you should be able to again push using `git push`.
4. Verify that the work as you expect it is on your GitHub repository fork.

Once you are done, go to `working-with-issues.md`

