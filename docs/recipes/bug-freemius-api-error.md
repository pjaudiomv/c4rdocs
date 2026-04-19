---
id: bug-freemius-api-error
title: "[Bug]: Freemius API error"
description: "### Contact Details"
sidebar_position: 7
tags: ["recipe", "development"]
---

# [Bug]: Freemius API error

> Development & Hooks • [Issue #540](https://github.com/code4recovery/12-step-meeting-list/issues/540)

## The question

### Contact Details

webmaster@area72aa.org

### Website With Issue

https://area72aa.org/wp-admin/post.php?post=740613&action=edit&classic-editor

### What happened?

A bug happened!
Attempting to update a group, though it may have been just updated a minute earlier, so nothing may have changed - received the following error,
```
Oops... Your server is blocking the access to Freemius' API, which is crucial for GF Square synchronization. Please contact your host to whitelist api.freemius.com, wp.freemius.com
Error received from the server:NULL
```

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

```shell
Just the onscreen error returned,
Oops... Your server is blocking the access to Freemius' API, which is crucial for GF Square synchronization. Please contact your host to whitelist api.freemius.com, wp.freemius.com
Error received from the server:NULL
```

## The answer

Based on the information, I'd say it is a bug or issue with Freemius.  Grab error messages out of the console. If any of them say TSML, we can look at them here, but otherwise I suggest contacting them.

TSML doesn't use Freemius, and this message segment would indicate to me something with Wordpress or your site. `Your server is blocking the access to Freemius' API`

## Code


```text
### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors
```


---

_Original source: [issue #540](https://github.com/code4recovery/12-step-meeting-list/issues/540)._
