---
id: feature-request-add-marijuana-anonymous
title: "[Feature Request]: Add Marijuana Anonymous"
description: "### Contact Details"
sidebar_position: 6
tags: ["recipe", "meetings"]
---

# [Feature Request]: Add Marijuana Anonymous

> Managing Meetings • [Issue #1702](https://github.com/code4recovery/12-step-meeting-list/issues/1702) • _answer by @joshreisner_

## The question

### Contact Details

_No response_

### Requested Feature/Enhancement

https://marijuana-anonymous.org wants to explore switching to TSML 

let's add these meeting types from their meeting finder:

&lt;img width="651" alt="Image" src="https://github.com/user-attachments/assets/2451e566-31c9-4815-ad13-857696dac511" /&gt;

let's skip `Business` for now and try to use the same codes where possible as AA

## The answer

the [hierarchy i recommended above](https://github.com/code4recovery/12-step-meeting-list/issues/1702#issuecomment-3067116030) also grouped Africa, Asia / Pacific, and Europe together, this would help with the list length! also probably South America. or you are welcome to change the name of USA to something that will alphebetize higher, maybe add a flag emoji in front?

you don't need to add an override conditionally - not sure where you got that idea.  just add it to your theme's functions.php as the link suggests. 

```php
$tsml_conference_providers = array_merge($tsml_conference_providers, [
    'ma-online.org' => 'MA Online'
]);
```

for some of these meetings it could be useful to reach out to them and let them know that the meeting finder is changing, and that going forward, for a meeting not to show up as Inactive, it needs to be associated with a valid address and/or URL. let them know it's still fine to withhold access by password protecting like i described above. maybe just start with one meeting and see what the reaction is? https://env-marijuanaanonymousorg-stgredesign.kinsta.cloud/meetings/?type=inactive&meeting=102865-264

alternatively, perhaps it's time to course-correct, if the plugin is not working for you! you could potentially hold off until we figure out a way to add better support for meetings that wish to withhold access, or also you're welcome to customize the software to better fit your needs.

in this case you'd change the code in [TSML UI](https://github.com/code4recovery/tsml-ui) - we can show you how to alter it to meet your needs. you'd essentially just build a new version of it and point your WordPress to use that version instead by adding a new constant to your `wp-config.php`

i'm sorry that it we didn't catch this capability gap sooner in the planning process.

incidentally: we've released the version with MA in it, so you should be able to update the plugin now without fear of losing your local changes.

## Code


```php
$tsml_conference_providers = array_merge($tsml_conference_providers, [
    'ma-online.org' => 'MA Online'
]);
```


---

_Original source: [issue #1702](https://github.com/code4recovery/12-step-meeting-list/issues/1702)._
