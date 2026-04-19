---
id: bug-sync-import-regions-hierarchy-not-working
title: "[Bug]: Sync/Import - Regions hierarchy not working"
description: "### Contact Details"
sidebar_position: 11
tags: ["recipe", "import-export"]
---

# [Bug]: Sync/Import - Regions hierarchy not working

> Import & Export • [Issue #809](https://github.com/code4recovery/12-step-meeting-list/issues/809) • _answer by @joshreisner_

## The question

### Contact Details

ecomm.cer@aamail.org

### Website With Issue

https://alcoholics-anonymous.eu/meetings/

### What happened?

Bug report submitted by CER (Julien) and Berlin (Soren) following extensive testing

As an admin, I am setting up data sources to be pulled into the CER (Continental European Region) website;
I set a parent region;
**Expected behavior**
copies of the source regions should be created or re-used under the selected parent region, regardless of whether they previously exist outside of the parent region or not.

**What happened**

2 issues arise: 

1.a. when I select a parent region wihch **does not** exist in the source website, the regions of the source website become a top-level region in the CER website
1.b. when I select a parent region whch **does** exist in the source website, the regions of the source website become a top-level region in the CER website

2. in both scenarios above, the regions are marked with 0 meetings associated. And in meeting list, the meetings are not associated with the correct region. they are "regionless", until i manually re-save them, in which case they then are associated with their region. 

**Context** 
This has been tested both with "Change detection" on and off. 
The bug also happens with other data sources. 
We have tested both with the region existing and not yet existing
We tested with Berlin as a parent region.
We also tested with Germany as a parent region - which does not exist on the Berlin website.
Both sides using the latest TSML version 3.14.3
The data source: https://www.alcoholics-anonymous-berlin.de/wp-admin/admin-ajax.php?action=meetings&key=39eca0e9954989d7080c24284097fd05

Please don't hesitate to request a zoom/TeamViewer session  in order to dig in. 

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

```shell
Example meeting: 
Geocoded:  
Object
approximate: "no"
city: "Berlin"
formatted_address: "Jungstraße 26, 10247 Berlin, Germany"
latitude: 52.5113636
longitude: 13.4659246
status: "cache"
[[Prototype]]: Object
```

## The answer

as per discussion just now with @kiyote33, parent region is not being set on imported records, we need to add some code above this line: https://github.com/code4recovery/12-step-meeting-list/blob/main/includes/ajax.php#L387

## Code


```shell
Example meeting: 
Geocoded:  
Object
approximate: "no"
city: "Berlin"
formatted_address: "Jungstraße 26, 10247 Berlin, Germany"
latitude: 52.5113636
longitude: 13.4659246
status: "cache"
[[Prototype]]: Object
```


---

_Original source: [issue #809](https://github.com/code4recovery/12-step-meeting-list/issues/809)._
