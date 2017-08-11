[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Place to share useful tools

[Collection of developer toolkits](https://works-for-me.github.io)

Developers craft their workflows for years carefully selecting tools which suit them best. Here you can share your personal toolkit and discover more great software.


## Contribute a toolkit

1. Add a new folder under [toolkits/](https://github.com/nik-garmash/works-for-me/tree/master/toolkits) directory
1. Describe your toolkit in ```your-name.toolkit``` file (see [Guide](#guide))
1. Make a Pull Request
1. 🚀

## 

- [Guide](#guide)
- [Syntax Cheatsheet](#syntax-cheatsheet)
    - [Author's information](#authors-information-syntax)
    - [Tools](#tools-syntax)
    - [Titles](#titles-syntax)
    - [Links](#links-syntax)
    - [Images](#images-syntax)
- [RSS feed with new toolkits](https://works-for-me.github.io/rss.xml)
- [Commit message convention](#commit-message-convention)


## Guide

Toolkit file should start with little information about yourself, followed by the list of tools you are using.

This is how very minimal toolkit may look like:

```
name: John 🚀 Doe

> Photoshop (http://www.adobe.com/de/products/photoshop.html)
```

Try to copy it into [the playground](https://works-for-me.github.io/playground/playground.html) and see it works.

### Author's information

You can add more information about yourself besides just a name.<br>
Supported lines are:

- name
- occupation
- location
- link — personal blog, twitter, github etc. You can add multiple of those. 

Also, those lines can be followed by some free text about yourself.

```
name: John 🚀 Doe
occupation: Designer
location: Berlin, Germany
link: https://works-for-me.github.io

Something about you …
```

### Tools

After author's information goes the list of your tools.

Each tool starts with ```>``` symbol.

```
> WebStorm
```

It can have optional link and free text description:

```
> WebStorm (https://www.jetbrains.com/webstorm/)

Usefull plugins installed:
• IdeaVim
• Markdown Support
…
```

You can list similar tools in one line:

```
> Slack, Telegram (https://telegram.org)
```


### Titles

Tools can be grouped with a titles to keep things more organised.

Title starts with ```--```.

```
-- Programming
```

Just like with tools, title can be followed by some description.

```
-- Programming

My laptop is MacBook Pro (Retina, 15-inch, Mid 2015), 2,5 GHz Intel Core i7, 16GB of RAM.
```

After a title goes the list of related tools.


### Links

You can leave links to external resources within any free text description (for author's info, tools or titles).

```
Check out my <GitHub (https://github.com/nik-garmash)>
```

Link itself is wrapped with ```<>```, inside are title and URL wrapped with ```()```.


### Images

First, put images next to the ```*.toolkit``` file.

Start a line with ```#``` symbol followed by title and image URL.

```
# My desktop screenshot (./desktop.png)
```

Title is a text which describes what's on the image. It's very important for screen-reader users, do not skip it.

URL is wrapped with ```()``` and it refers to images you put inside your toolkit folder. External URLs are also good if you prefer.


### Comments

```
// some reminder …
```

Such line won't be rendered.


## Syntax cheatsheet

### Author's information syntax

```
name: John 🚀 Doe
occupation: Designer
location: Berlin, Germany
link: https://works-for-me.github.io

Free text description …
```

### Tools syntax

```
> Tool Title
```

```
> Tool Title (https://tool.url)
```

```
> Tool Title (https://tool.url)

Free text description …
```

### Titles syntax

```
-- Groupping title
```

```
-- Groupping title

Free text description …
```

### Links syntax

```
<link title (https://link.url)>
```

```
some text <link title (https://link.url)> more text
```


### Images syntax

```
# Image title (./image.png)
```


## Commit message convention

RSS-feed is based on a commit-messages.

If you are about to commit new toolkit, start commit-message with `new: `

```
new: John Doe (Software Engineer)
```

Commit-message will end up in RSS.

For major updates to existing toolkit, use `update: `, that also goes to RSS.

```
update: Changed IDE
```

If you want to fix some typos or make minor changes, use `fix: `, nobody will see that one.

```
fix: Fixing typos
```
