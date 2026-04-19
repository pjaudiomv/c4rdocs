---
id: bug-php-error-e-trim
title: "[Bug]: PHP error e trim"
description: "### Contact Details"
sidebar_position: 12
tags: ["recipe", "meetings"]
---

# [Bug]: PHP error e trim

> Managing Meetings • [Issue #1673](https://github.com/code4recovery/12-step-meeting-list/issues/1673) • _answer by @joshreisner_

## The question

### Contact Details

SLACK

### Website With Issue

eatingdisordersanonymous.org

### What happened?

Since an update circa January 1, 2025, the meeting list page on the EDA website is not displaying to end users and is giving slightly different errors on different browsers as follows:

Safari TypeError: undefined is not an object (evaluating 'e.trim')
Firefox TypeError: e is undefined
Chrome TypeError: Cannot read properties of undefined (reading 'trim')

When we go to check meetings as WP admin, everything looks ok until you go to add or edit a meeting:

![Image](https://github.com/user-attachments/assets/97d9356b-b1bc-405d-91eb-e02f56323741)

Unfortunately, I have not been able to reproduce this in a development environment. Below is a stack trace from SiteGround, our Wordpress servicer.

We're still using v3.16.6 because updates trigger the bug, but otherwise:

WordPress version 6.8
Active theme: Enfold (version 5.1.2)
PHP version 8.2.28

### What browsers are you seeing the problem on?

Safari, Chrome, Firefox

### Relevant log output/errors

```shell
An error of type E_ERROR was caused in line 137 of the file /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php. Error message: Uncaught TypeError: count(): Argument #1 ($value) must be of type Countable|array, null given in /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php:137
Stack trace:
#0 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/includes/template.php(1456): {closure}(Object(WP_Post), Array)
#1 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/edit-form-advanced.php(721): do_meta_boxes(Object(WP_Screen), 'normal', Object(WP_Post))
#2 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/post.php(206): require('/home/customer/...')
#3 {main}
  thrown
```

## The answer

thanks @gkovats 🙌 

@gobborg it will be in the next release, but fyi we have a lot of changes on `main` that we're working on, so a release is not imminent - my recommendation for now is to edit your site's `variables.php` to make the same change in this PR

## Code


```shell
An error of type E_ERROR was caused in line 137 of the file /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php. Error message: Uncaught TypeError: count(): Argument #1 ($value) must be of type Countable|array, null given in /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php:137
Stack trace:
#0 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/includes/template.php(1456): {closure}(Object(WP_Post), Array)
#1 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/edit-form-advanced.php(721): do_meta_boxes(Object(WP_Screen), 'normal', Object(WP_Post))
#2 /home/customer/www/staging9.eatingdisordersanonymous.org/public_html/wp-admin/post.php(206): require('/home/customer/...')
#3 {main}
  thrown
```


---

_Original source: [issue #1673](https://github.com/code4recovery/12-step-meeting-list/issues/1673)._
