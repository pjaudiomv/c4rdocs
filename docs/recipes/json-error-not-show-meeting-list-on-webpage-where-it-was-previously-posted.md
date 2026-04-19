---
id: json-error-not-show-meeting-list-on-webpage-where-it-was-previously-posted
title: json error, not show meeting list on webpage where it was previously posted
description: "### Contact Details"
sidebar_position: 15
tags: ["recipe", "troubleshooting"]
---

# json error, not show meeting list on webpage where it was previously posted

> Troubleshooting • <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1063">Discussion #1063</a> • _answer by @tim-rohrer_

## The question

### Contact Details

valleyscaa@gmail.com

### Website With Issue

trivalleyaa.org/meetings

### What happened?

initially I went in to change my widgets, and one widget is for the Meeting Page top and botton where I had info posted with links,
I could not do anything in the entire widgets section, it was locked with lots of error messages along the top of the widget working page.Many mentioned Json error but I do not read code so did not know what it was about. I deleted the text in the Meeting Page Top box and the Meeting Page footer box. And deleted many other boxes in the Widget sections and was able to fix the sidebar widget. However, the TSML would not repopulate.
In addition, I am having a similar posting of TSML meetings on a new site I am building. The meetings show up on the Meeting Sidebar in the WP Dashboard, but not on a website page.
Any suggestions would be very helpful.

### What browsers are you seeing the problem on?

Firefox, Chrome, Safari

### Relevant log output/errors

```shell
Sorry, but I did have a json validation error for the second site. Json syntax error
```

## The answer

I’m not fully following your description of your issue, so we may need a few back and forths.

First, I see your meetings here: https://trivalleyaa.org/?post_type=tsml_meeting

So your first concern is that you don’t see the meeting list, you may need to rebuild the link to it, or perhaps update the permalinks (General—&gt;Permalinks—Save).

Any new instances of the Upcoming Meetings widget need to be created in a Wordpress Legacy Widget block. Try that and see if you’re able to get them back.

## Code


```shell
Sorry, but I did have a json validation error for the second site. Json syntax error
```


---

_Original source: [discussion #1063](https://github.com/code4recovery/12-step-meeting-list/discussions/1063)._
