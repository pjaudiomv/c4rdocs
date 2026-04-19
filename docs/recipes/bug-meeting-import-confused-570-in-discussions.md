---
id: bug-meeting-import-confused-570-in-discussions
title: "[Bug]: Meeting import: confused #570 in Discussions"
description: "### Contact Details"
sidebar_position: 10
tags: ["recipe", "import-export"]
---

# [Bug]: Meeting import: confused #570 in Discussions

> Import & Export • [Issue #575](https://github.com/code4recovery/12-step-meeting-list/issues/575)

## The question

### Contact Details

os.website.a86@gmail.com

### Website With Issue

al-anon.alateen.on.ca

### What happened?

The field or toggle that is responsible for showing 'part of a group' (or individual meeting) is not part of the import sheet.
Is it possible to include this? I am looking at a mass update of my data (over 300 meetings) and if I can do that using the import feature without having to go back in and adjust that identifier, it would save me a lot of work.

As an in general I feel that the plugin would be better useable for all if any data that determine how a listing is shown in the front end would be accessible, at least via import. I remember somebody saying that the import sheet has not gotten a lot of developer attention and to this day it looks unchanged to me.

My issue is in the Conversations part so if you want more details, let me know.

Thanks for your consideration,
Nicky

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

```shell
I wish the import sheet was able to produce errors or remarks about the out put. There are none.
Compare what the import of the Calendar plugin looks like: it has a preview option where you can change the field mapping. It would be great if that was part of the meetings plugin as well.
```

## The answer

@OSAwebsite,

Please stick to Discussions and leave the Issues feature for developers unless we create an issue from your question. That will help the team keep things organized and plan work.

This issue appears to duplicate #570, for which we provided an answer. Maybe we got it wrong? Or, maybe this is a little different, but still related? In any case, please use that thread to discuss further.

I will offer that it shouldn’t be necessary for you to have a column in the spreadsheet for “Part of a Group” because the importer should detect that if the Group information is completed. This check box is a UI feature to help show what fields you need to complete. This is similar to the dialogue about meeting in person. It isn’t necessary (and actually makes data validation harder) if fields like that are included in an import file.

Duplicates #570.

## Code


```shell
I wish the import sheet was able to produce errors or remarks about the out put. There are none.
Compare what the import of the Calendar plugin looks like: it has a preview option where you can change the field mapping. It would be great if that was part of the meetings plugin as well.
```


---

_Original source: [issue #575](https://github.com/code4recovery/12-step-meeting-list/issues/575)._
