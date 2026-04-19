---
id: bug-2
title: "[Bug]:"
description: "### Contact Details"
sidebar_position: 14
tags: ["recipe", "performance"]
---

# [Bug]:

> Performance & Caching • [Issue #1730](https://github.com/code4recovery/12-step-meeting-list/issues/1730) • _answer by @joshreisner_

## The question

### Contact Details

technology@nm-aa.org

### Website With Issue

www.nm-aa.org

### What happened?

Unable to refresh one of our central offices to our area website. Cannot refresh Albuquerque Central Office. I am able to refresh Santa Fe CO. I have included a screenshot of the error

&lt;img width="1208" height="816" alt="Image" src="https://github.com/user-attachments/assets/b83eeeae-d9ba-44b6-8ce8-5585a0865497" /&gt;

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

```shell
WP_Error Object
(
    [errors] => Array
        (
            [http_request_failed] => Array
                (
                    [0] => cURL error 28: Failed to connect to www.albuquerqueaa.org port 443 after 10002 ms: Timeout was reached
                )

        )

    [error_data] => Array
        (
        )

    [additional_data:protected] => Array
        (
        )

)
```

## The answer

to me, this sounds like albuquerqueaa.org has blocked nm-aa.org - some firewall software may have identitified it as a bot. i can confirm albuquerqueaa.org's feed is up and should be importable

have you turned on automatic imports? i wonder if it was importing too frequently and made ABQ suspicious

i would reach out to the ABQ web servant and see if they can add your IP (35.209.237.176) to an allowlist on sitelock or whatever they're using

i'm going to move this issue to a discussion - we ask people to make discussions rather than issues until we can identify a specific action to take

## Code


```shell
WP_Error Object
(
    [errors] => Array
        (
            [http_request_failed] => Array
                (
                    [0] => cURL error 28: Failed to connect to www.albuquerqueaa.org port 443 after 10002 ms: Timeout was reached
                )

        )

    [error_data] => Array
        (
        )

    [additional_data:protected] => Array
        (
        )

)
```


---

_Original source: [issue #1730](https://github.com/code4recovery/12-step-meeting-list/issues/1730)._
