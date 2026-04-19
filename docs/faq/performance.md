---
id: performance
title: Performance & Caching
description: Load times, caching, large datasets.
sidebar_position: 13
tags: ["performance"]
---
# Performance & Caching

Load times, caching, large datasets.

_4 questions — sourced from GitHub discussions & issues._


### "Update Meeting Info" button disappeared {#update-meeting-info-button-disappeared}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The "Update Meeting Info" button on the meeting detail page disappeared. The button was last used on May 22nd, so something must have changed since then. I noticed the button was missing after updating Gravity Forms plugin on the staging site. We use Gravity Forms for a contact form for meeting changes. But that update isn't the cause and I haven't updated it on the production site yet anyway. The button is missing from both the production and staging sites.

Sample meeting:
[https://sussexaa.org/meetings/?meeting=seaside-open-discussion](url)

Wordpress: 6.8.1
TSML: 3.16.18

"User Feedback Emails" are set in TSML settings, that hasn't changed.

Things I have tried:
Deactivate all plugins that were updated since May 22nd.
Switch to a different theme (2025).
Cleared cache (server & browser).

I didn't develop this site, so I don't know what else to look for. Any ideas?

**Answer** _by @joshreisner_

ok should be fixed now ✅  - you may need to refresh your browser

&lt;img width="467" alt="Screenshot 2025-06-01 at 7 54 03 AM" src="https://github.com/user-attachments/assets/86983926-5ce7-421a-81c8-f7e18f722777" /&gt;

<div class="c4r-source">Source: [Discussion #1685](https://github.com/code4recovery/12-step-meeting-list/discussions/1685)</div>

</details>


### [Bug]: {#bug}

<details>
<summary>Show question &amp; answer</summary>

**Question**

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

**Answer** _by @joshreisner_

to me, this sounds like albuquerqueaa.org has blocked nm-aa.org - some firewall software may have identitified it as a bot. i can confirm albuquerqueaa.org's feed is up and should be importable

have you turned on automatic imports? i wonder if it was importing too frequently and made ABQ suspicious

i would reach out to the ABQ web servant and see if they can add your IP (35.209.237.176) to an allowlist on sitelock or whatever they're using

i'm going to move this issue to a discussion - we ask people to make discussions rather than issues until we can identify a specific action to take

<div class="c4r-source">Source: [Issue #1730](https://github.com/code4recovery/12-step-meeting-list/issues/1730)</div>

</details>


### ?tsml-day=0 - Choosing Sunday from drop down shows no meetings found {#tsml-day-0-choosing-sunday-from-drop-down-shows-no-meetings-found}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
Good afternoon. 

Seeing an issue when choosing SUNDAY from the drop down page, no results are found. Simply refreshing the page then shows the meetings. 

**To Reproduce**
Steps to reproduce the behavior:
1. Go to https://www.upstateintergroup.org/meetings/
2. Click on DAY - change to SUNDAY
3. Behold, no results
4. REFRESH PAGE - Behold, Results. 

Using Enfold Theme. 
PHP 7.3
WP 5.6 (Just updated today to see if that corrected the issue. It did not. : (
No site cache tools installed

Let me know what else I can do to provide context.

**Answer** 

I just looked at your complete meeting list and also didn't see any Sunday meetings. 

Please check the backend admin page and search for any Sunday meetings in your database. They may be missing.

Let me know.

<div class="c4r-source">Source: [Issue #257](https://github.com/code4recovery/12-step-meeting-list/issues/257)</div>

</details>


### Cloudflare CDN - frequent intermittant problems {#cloudflare-cdn-frequent-intermittant-problems}

<details>
<summary>Show question &amp; answer</summary>

**Question**

&lt;img width="403" alt="ErrorMessage" src="https://github.com/user-attachments/assets/64dda978-0d37-46a1-adc0-7c7e23c41c21" /&gt;
Ever since our provider migrated our site and began to use the **Cloudflare CDN** Our meeting finder page has been going up and down . An ancient version of the page that I can't even find in wordpress is displayed.  Our provider tells us that :

Firespring support: 
We've asked that the Meetings page be excluded from the cache in a couple of places. We'll continue to keep an eye on it to monitor for improvement.

The problem continues. Does anyone have any advice

**Answer** _by @joshreisner_

it's hard to know without being able to reproduce the issue. i'm assuming this is the correct version:

&lt;img width="1728" alt="Screenshot 2025-05-26 at 6 32 49 PM" src="https://github.com/user-attachments/assets/5ac97591-5889-44d5-b497-1580f66f352e" /&gt;

next time it happens, can you take a screenshot? that might tell us something. also check the javascript console to see if there are any errors

the image you attached says "the any type meeting feature is down" - is that related?

<div class="c4r-source">Source: [Discussion #1681](https://github.com/code4recovery/12-step-meeting-list/discussions/1681)</div>

</details>

