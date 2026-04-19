---
id: bug-critical-error-when-saving-a-meeting
title: "[Bug]: Critical Error when saving a meeting"
description: "### Contact Details"
sidebar_position: 4
tags: ["recipe", "meetings"]
---

# [Bug]: Critical Error when saving a meeting

> Managing Meetings • <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1534">Discussion #1534</a> • _answer by @joshreisner_

## The question

### Contact Details

jesse@lionsharedigital.com

### Website With Issue

https://austinaa.org

### What happened?

When we update a meeting, we are getting a WordPress critical error. It looks like a ton of data is being pulled out and back into memory. We can increase the sites memory but this seems odd for simply editing a meeting. 

Thanks for your help,
Jesse

![Edit-Meeting-“Better-Than-We-Deserve-–-IN-PERSON”-‹-Austin-AA-Hill-Country-Intergroup-—-WordPress-10-01-2024_04_02_PM](https://github.com/user-attachments/assets/5134c81b-a5b1-48a5-a028-1d4a7ac895ec)




### What browsers are you seeing the problem on?

Firefox, Chrome, Safari, Microsoft Edge

### Relevant log output/errors

```shell
[proxy_fcgi:error [pid 2963511:tid 2963631 [client 136.62.253.207:0 AH01071: Got error 'PHP message: PHP Fatal error: Allowed memory size of 268435456 bytes exhausted (tried to allocate 20480 bytes) in /home/641749.cloudwaysapps.com/yjtfyhafuk/public_html/wp-includes/meta.php on line 1194', referer: https://austinaa.org/wp-admin/post.php?post=115739&action=edit
```

## The answer

hey @lionssharedigital - we haven't made any recent changes to this - perhaps this could be caused by another plugin that was updated recently? or something on the host?

not sure as yet we have enough info to investigate - havent encountered any issues when saving on our demo sites or heard other reports

some things to try: deactivate other plugins temporarily, enable WP_DEBUG in `wp-config.php` temporarily, install [Query Monitor](https://wordpress.org/plugins/query-monitor/)

## Code


```shell
[proxy_fcgi:error [pid 2963511:tid 2963631 [client 136.62.253.207:0 AH01071: Got error 'PHP message: PHP Fatal error: Allowed memory size of 268435456 bytes exhausted (tried to allocate 20480 bytes) in /home/641749.cloudwaysapps.com/yjtfyhafuk/public_html/wp-includes/meta.php on line 1194', referer: https://austinaa.org/wp-admin/post.php?post=115739&action=edit
```


---

_Original source: [discussion #1534](https://github.com/code4recovery/12-step-meeting-list/discussions/1534)._
