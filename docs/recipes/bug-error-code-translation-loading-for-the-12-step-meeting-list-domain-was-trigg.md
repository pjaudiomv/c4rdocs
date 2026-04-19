---
id: bug-error-code-translation-loading-for-the-12-step-meeting-list-domain-was-trigg
title: "[Bug]: Error code: \"Translation loading for the 12-step-meeting-list domain was triggered too early.\""
description: "### Contact Details"
sidebar_position: 5
tags: ["recipe", "languages"]
---

# [Bug]: Error code: "Translation loading for the 12-step-meeting-list domain was triggered too early."

> Languages & Translation • [Issue #1582](https://github.com/code4recovery/12-step-meeting-list/issues/1582) • _answer by @joshreisner_

## The question

### Contact Details

bekkarut2@gmail.com

### Website With Issue

nai.is

### What happened?

When I updated to the newest WordPress version this error popped up and it won't go away. 
![image](https://github.com/user-attachments/assets/df1eb1aa-8dd5-4c43-87e9-5d36604fcb4a)


### What browsers are you seeing the problem on?

Firefox

### Relevant log output/errors

```shell
Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the 12-step-meeting-list domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the init action or later. Please see Debugging in WordPress for more information. (This message was added in version 6.7.0.) in /var/www/html/nai.is/wp-includes/functions.php on line 6114
```

## The answer

typically people access `wp-config.php` through their hosting control panel or SFTP, so you might need to speak to someone. this setting should be off for sites in production, because it's a security hazard, so definitely try to get that resolved!

i haven't heard of any issues between woocommerce and our plugin. could you be more specific about what the issue is that you're seeing?

## Code


```shell
Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the 12-step-meeting-list domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the init action or later. Please see Debugging in WordPress for more information. (This message was added in version 6.7.0.) in /var/www/html/nai.is/wp-includes/functions.php on line 6114
```


---

_Original source: [issue #1582](https://github.com/code4recovery/12-step-meeting-list/issues/1582)._
