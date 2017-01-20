### Works For Me

This repository is a nice way to discover new tools by looking at setups which work for other people. And of course you can share your own cozy, carefully-crafted tooling to help others.

Just one thing to have in mind — it's not just about listing all your apps, but highlighting tools that help you do your work better or make your life easier.

### How to add my setup?

1. Fork repo
2. Copy `template.setup` to `setups/` folder and name it after you
3. Fill in new file with setup that works for you
4. Make a Pull Request to main repo

### Syntax

See `setups/` folder for examples. But, overall, syntax is very simple.

`--` separates environments like desktop, mobile, ... or any custom one

`>` indicates tool-line

`//` comment line

After any environment or tool you can add description if you want to highlight some use cases or emphasize features you like.

### Environments

Environment is just a grouping title for a list of tools.
Just find a way to group your tools  you comfortable wit

Bunch of examples:

```
-- Mobile
```

```
-- Work
```

```
-- Video editing
```

```
-- Programming
```

### Tool-line

Your tool can be specified in a such format

```
> Tool's name
```

Also, optional url can be added withing parentheses

```
> Photoshop (http://www.adobe.com/photoshop)
```

And if you have multiple tools for one purpose, just list them with comma

```
> Sublime Text 3 (https://www.sublimetext.com/3), WebStorm (https://www.jetbrains.com/webstorm/)
```

