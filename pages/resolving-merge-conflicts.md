# Merge conflicts

When actively working on code as a team, there may be times where you are working on the same code.
GIT is very clever about figuring out what the differences between files are.
But if a change has been made on the same line in a file, GIT can usually not figure out how to proceed without human intervention.

In order to demonstrate this, we will introduce merge conflicts between your branches.

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

The idea behind resolving merge conflicts is that there is an incoming change (from the person that finished first), and a current change (from the person who finished second).
You need to decide what to keep or remove in order to achieve a desired result.

