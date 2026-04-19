---
id: bug
title: "[Bug]:"
description: "### Contact Details"
sidebar_position: 8
tags: ["recipe", "development"]
---

# [Bug]:

> Development & Hooks • [Issue #593](https://github.com/code4recovery/12-step-meeting-list/issues/593) • _answer by @masterlifter_

## The question

### Contact Details

masterlifterpro@gmail.com

### Website With Issue

https://secularrecoverygroup.org

### What happened?

**12 step Plugin update failed** 

  | 12 Step Meeting ListDeactivate \| Resume | Manage a list of recovery meetings 						Version **3.12.1** \| By Code for Recovery \| View details This plugin failed to load properly and is paused during recovery mode.An error of type E_ERROR was caused in line 9 of the file /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php. Error message: Uncaught  TypeError: array_key_exists(): Argument #2 ($array) must be of type  array, bool given in  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php:9 Stack trace: #0  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php(32):  tsml_db_update_remove_all_approximate_location_cache() #1 /home/courtney/public_html/wp-includes/class-wp-hook.php(303):  \{closure\}('') #2 /home/courtney/public_html/wp-includes/class-wp-hook.php(327):  WP_Hook-&gt;apply_filters(NULL, Array) #3 /home/courtney/public_html/wp-includes/plugin.php(470):  WP_Hook-&gt;do_action(Array) #4 /home/courtney/public_html/wp-admin/admin.php(175):  do_action('admin_init') #5 /home/courtney/public_html/wp-admin/index.php(10):  require_once('/home/courtney/...') #6 \{main\}   thrown
-- | -- | --




### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Firefox

### Relevant log output/errors

```shell
An error of type E_ERROR was caused in line 9 of the file /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php. Error message: Uncaught  TypeError: array_key_exists(): Argument #2 ($array) must be of type  array, bool given in  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php:9 Stack trace: #0  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php(32):  tsml_db_update_remove_all_approximate_location_cache() #1 /home/courtney/public_html/wp-includes/class-wp-hook.php(303):  {closure}('') #2 /home/courtney/public_html/wp-includes/class-wp-hook.php(327):  WP_Hook->apply_filters(NULL, Array) #3 /home/courtney/public_html/wp-includes/plugin.php(470):  WP_Hook->do_action(Array) #4 /home/courtney/public_html/wp-admin/admin.php(175):  do_action('admin_init') #5 /home/courtney/public_html/wp-admin/index.php(10):  require_once('/home/courtney/...') #6 {main}   thrown
-- | -- | --
```

## The answer

Changed this domain back to **PHP 7.4** and it corrected the update error. But...........is there a fix I can do to enable the use of this plugin with **PHP 8.0**..?? ( Obviously more desirable than regressing to PHP 7.4)

## Code


```shell
An error of type E_ERROR was caused in line 9 of the file /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php. Error message: Uncaught  TypeError: array_key_exists(): Argument #2 ($array) must be of type  array, bool given in  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/database_updates.php:9 Stack trace: #0  /home/courtney/public_html/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php(32):  tsml_db_update_remove_all_approximate_location_cache() #1 /home/courtney/public_html/wp-includes/class-wp-hook.php(303):  {closure}('') #2 /home/courtney/public_html/wp-includes/class-wp-hook.php(327):  WP_Hook->apply_filters(NULL, Array) #3 /home/courtney/public_html/wp-includes/plugin.php(470):  WP_Hook->do_action(Array) #4 /home/courtney/public_html/wp-admin/admin.php(175):  do_action('admin_init') #5 /home/courtney/public_html/wp-admin/index.php(10):  require_once('/home/courtney/...') #6 {main}   thrown
-- | -- | --
```


---

_Original source: [issue #593](https://github.com/code4recovery/12-step-meeting-list/issues/593)._
