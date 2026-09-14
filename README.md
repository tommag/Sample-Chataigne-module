# Sample-Chataigne-module
This is a sample Chataigne custom module. More info about Chataigne : https://benjamin.kuperberg.fr/chataigne

To create a custom module, download this repository (as a ZIP, or `git clone --depth 1`) then place the folder inside your `<Documents>/Chataigne/modules` folder.

Avoid using GitHub's "Fork" button for this: GitHub only lets you have one fork per repository per account, so if you ever want to build a second custom module from this template, you won't be able to fork it again until you detach your first fork from the network (Settings > Danger Zone > "Leave fork network", a one-way action with no undo). A plain clone (with or without history) sidesteps that limit entirely, and you can still wire it up to this repository later if you want to track upstream changes:

```
git clone --depth 1 https://github.com/tommag/Sample-Chataigne-module.git my-module
cd my-module
rm -rf .git && git init
git remote add upstream https://github.com/tommag/Sample-Chataigne-module.git
```

You may want to check out the custom module documentation here : https://bkuperberg.gitbook.io/chataigne-docs/modules/custom-modules/making-your-own-module
