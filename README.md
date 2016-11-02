### Works For Me

This repository is a nice way to discover new tools by looking at setups which work for other people. And of course you can share your own cozy, carefully-crafted tooling to help others.

It's not just about listing apps, but about highlighting tools that help to make your work better or make your life easier.

### How to add my setup?

You can do this in 4 easy steps:

* Fork repo
* Copy `template.setup` to `setups/` folder and name it after you
* Fill in new file with setup that works for you
* Make a Pull Request to main repo

### Syntax

See `setups/` folder for examples. But, overall, syntax is very simple.

`--` separates environments like desktop, mobile, ... or any custom one

`>` indicates tool-line

After any environment or tool you can add description if you want highlight some use cases or emphasize features you like.

### Environments

Environment is just a grupping title for a list of tools.

### Item-line

Your tool can be specified in a such format

```
type: name
```

Also, optional url can be added withing parentheses

```
type: name (url)
```

And if you have multiple tools for one purpose, just list them with comma

```
type: name (url), name, name (url)
```

