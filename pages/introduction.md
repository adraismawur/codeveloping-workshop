# Introduction

Looks like you have successfully cloned the repository and are now looking at the introduction.

## The website

This repository contains an example website we'll be working on.
All the content of this website is in the html/js/css files here, and in the markdown files under /pages

Unfortunately, directly opening the index.html does not work.
So in order to run a small webserver on your machine, please open a terminal and navigate to where you put the workshop code, and run the following command:

```bash
python -m http.server
```

You should not need to install anything other than python for this to work.

After running this in a terminal, you should be able to navigate to http://localhost:8000.
From there you can read the rest of this introduction


### How the website works

From here on you should be reading this in a webpage, not in a text editor or something else.

This website displays markdown files (simple text files that look nice) and displays a list of those files on the left side of the screen.

In order to do this, it reads a special text file at `pages/listing.txt`.
Each line in this file corresponds to a markdown file under `pages/`.
Lines starting with # are ignored as comments.

In these exercises, the files under this `pages/` directory are all that you will need to edit.

If you really feel like it and are familiar with web development, you can edit the `index.js` or `index.html` later on.

The first exercise will be `resolving-merge-conflicts.md`.
Go there by clicking the navigation item on the left.
More exercises will appear as you do stuff.
