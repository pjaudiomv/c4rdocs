---
id: troubleshooting
title: Troubleshooting
description: Errors, bugs, things that aren’t working.
sidebar_position: 14
tags: ["troubleshooting"]
---
# Troubleshooting

Errors, bugs, things that aren’t working.

_62 questions — sourced from GitHub discussions & issues._


### Why am I seeing 404 error on all meeting pages? {#why-am-i-seeing-404-error-on-all-meeting-pages}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

webmaster@area82aa.org

### Website With Issue

https://area82aa.org/meetings/

### What happened?

Suddenly all of my meeting pages no longer exist - individual meeting pages and the main meetings page. I've tried deactivating all of my plug ins as well as my themes and none of them are causing this bug. 

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Firefox, Chrome, Safari

### Relevant log output/errors

```shell
Failed to load resource: the server responded with a status of 404 ()
```

**Answer** _by @tech2serve_

This is most likely not a bug with TSML. The two most common reasons for this issue are permalinks or a change by the webmaster or host provider that affected the links.

For the permalinks, it is often not clear why Wordpress experiences this, but luckily it is an easy fix. Navigate to Settings-&gt;Permalinks, and then simply scroll down and click "Save Changes". This refreshes Wordpress links that affect TSML, and often resolves page not found issues.

If that doesn't fix your issue, take a look at why your site is loading from a "temp.domains"

&lt;img width="538" alt="image" src="https://user-images.githubusercontent.com/31904316/133624556-018dcece-879d-438c-84e9-cbae9b8f1a87.png"&gt;

I'm not saying this won't work, or that it would cause problems, but it strikes me as unorthodox and does have your site going from secure pages to unsecured. There may be a better way to arrange you data.

Let me know if these steps resolve your issues.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/527">Discussion #527</a></div>

</details>


### Meeting showing as inactive when it shouldn't do {#meeting-showing-as-inactive-when-it-shouldn-t-do}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
A meeting in my directory is displaying "Temporarily Inactive" but it shouldn't do.
Is also having issues with saving the meetings after I've edited them or made any changes.

Web Host has upgraded the PHP version used - when is this issue going to be fixed to support newer versions of PHP because the plugin is unusable at the moment?

**To Reproduce**
Steps to reproduce the behavior:
1. Go to: https://www.ddauk.org/meetings/hows-your-head-topic-discussion-meeting-face-to-face/
2. Meeting is showing "Temporarily Inactive" when it shouldn't do



**Expected behavior**
Not display: "Temporarily Inactive".
Allow me to save whenever I've made changes to the listing.

**Screenshots**
If applicable, add screenshots to help explain your problem.
https://paste.pics/DF942

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]
MacOS Big Sur: 11.5.1 (20G80)
Safari: Version 14.1.2 (16611.3.10.1.3)

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

**Answer** _by @joshreisner_

Hi @nextlevelwebdesign to give a little context on what is going on: the plugin uses addresses to distinguish between online and in-person meetings, and it allows you to use approximate addresses, like London, or England, for online meetings.

This is relevant because it looks like the address for your meeting is "Africa" which the plugin, understandably, considers an approximate location. Having a specific address or geographic point is necessary for the plugin to consider it an in-person meeting.

There is a secondary problem which is that we use Google to get the corrected address for every meeting, this store inside a shopping mall is a tricky one.

I recommend using `Ariel Way, London W12 7GF, UK` as the address for the meeting, I think this will produce the result you want.

PHP version should not be a factor here.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/490">Discussion #490</a></div>

</details>


### widget compatibility with WP 5.8 {#widget-compatibility-with-wp-5-8}

<details>
<summary>Show question &amp; answer</summary>

**Question**

There appears to be a compatibility problem with widgets since WP 5.7 - I am seeing the issue reported by many people in other plugin forums. I didn't notice it until now, but the "Upcoming Meetings" function no longer works.

It will throw errors when I look at widgets. Error example: "The "tsml_widget_upcoming" block was affected by errors and may not function properly. Check the developer tools for more details."

Other widgets sometimes continue working on the sites despite errors, but in the case of TSML they are not. In my case for TSML the broken widget seems to be "Upcoming Meetings."

Sometimes the simpler ones (like "custom HTML" widgets) can be fixed by just removing and re-creating them as blocks.

Unfortunately, that is not working for this problem. Re-creating it just brings back the errors. Any help is appreciated.

**Answer** _by @Grateful-Viv_

Try using the classic widget plugin. I found when upgrading to 5.8 that the new widget blocks broke most of my html widgets as it tried to convert them to these ugly blocks. It didn’t just affect tsml. Once broken you will have to redo it unless you can restore from backup.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/523">Discussion #523</a></div>

</details>


### Urgent request: leave the meeting time alone when I change the day {#urgent-request-leave-the-meeting-time-alone-when-i-change-the-day}

<details>
<summary>Show question &amp; answer</summary>

**Question**

This has bitten me in the backside more than once and I would like to enter an urgent change request:

Whenever I change the day of a meeting, the times jumps to 12am. This makes no sense to me whatsoever.
Sometimes a group changes their meeting day, but the time usually stays the same. Sometimes the day is given to me in error so I want to be quick and adjust it and then I often miss the time change.

I would like the time, if there is one entered already, to stay the same, even when I change the day. It is very easy to miss and I don't see the reason why it would be changed if all I do is adjust the day....

Pretty please?
Nicky

**Answer** _by @kiyote33_

Hi Nicky,
I tend to agree with you. I can't think of a reasonable explanation why it would be necessary to change the meeting time when altering the meeting day. It may be that no one ever brought it up before. We will discuss and if the team agrees with us, then this discussion topic will get transferred to the issues list for action.  Thanks for bringing it up...

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/652">Discussion #652</a></div>

</details>


### Meeting finder not defaulting to the current day {#meeting-finder-not-defaulting-to-the-current-day}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We're having an issue on some computers where the day doesn't default to the current day. Also, when the day is changed, the meeting information doesn't update. The weird thing is that it doesn't happen on every computer all the time. My phone app (Android) and computer (MS) tend to work all the time (only had two instances where the day was not current). Our intergroup office's computer (MS) will never have the default day.
Is anyone else having this same issue?
lbardiv@gmail.com

**Answer** _by @joshreisner_

there are two things that could cause this: 

1) do you have a caching plugin installed? that can make the meeting finder show the previous day (or earlier). one way to address this is to uninstall the plugin, or force the cache somehow to refresh.

2) is the wordpress timezone set correctly?

we might be able to say more if you share your website URL with us

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1005">Discussion #1005</a></div>

</details>


### WordPress not sending email {#wordpress-not-sending-email}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I got a report from user that the feedback feature on the listing details page does not work.
She tells me the code she get is this:
"Error: Could not instantiate mail function."

I just tried to use it myself and it does seem to be unresponsive.
I am on version 3.14.8 on Wordpress 6.1, on a Mac. My user is on Windows.
I tested it in Safari and Chrome, neither work.

Feels like a bug? It would be appreciated if this could be corrected asap, as many of my users use this option to notify us about changed.

Thanks!

Nicky
al-anon.alateen.on.ca

**Answer** _by @97eighty_

@OSAwebsite, One method you might use to verify the proper mail function is to add a new user to WordPress. WordPress will send out an email in this process. This would verify that the native WordPress mail is functioning correctly. The 12 Step plugin uses this same method to send mail. For security, many hosting companies turn native SMTP access off and suggest using your mail system to send mail. A good plugin for this is https://wordpress.org/plugins/post-smtp/. This plugin will allow you to send mail through your own account and can help in testing. This problem is definitely a WordPress and hosting issue.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1011">Discussion #1011</a></div>

</details>


### Warning: Undefined array key {#warning-undefined-array-key}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Josh and Dev Team...

Our site is throwing the error messages below. It was first noticed today.

It's probably something simple or obvious, but I can't figure it out.

* https://santabarbaraaa.com/
* TSML Version 3.14.9
* Wordpress version: 6.1.1
* I tried deactivating all plugins except TSML but that the errors persisted

![image](https://user-images.githubusercontent.com/62483893/210024628-d25bc065-543d-4cc9-8b99-bef705d3b024.png)

**Answer** _by @joshreisner_

hm! sounds like you have a meeting without a time and WP_DEBUG mode set to on, so its complaining. not sure why it's not rendering the whole list though! 

we can fix that on our end, but in the meantime you might want to check if you need that appointment meeting. looks like the meeting in question is https://santabarbaraaa.com/meetings/sb-aa-convention-planning-meeting - could you try removing that? 

another thing you can do to hide the warning is set `WP_DEBUG` to `false` in your `wp-config.php`

finally you could try switching the user interface to TSML UI

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1025">Discussion #1025</a></div>

</details>


### Scrolling not working {#scrolling-not-working}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,

New here and new to basic plugin knowledge,

In the state scroll down box, members on safari/mac cannot scroll down. I will post pictures. Can anyone help please?
![image](https://github.com/code4recovery/12-step-meeting-list/assets/134229710/65bfaeda-eebc-489c-bd09-acfeaf61a6ec)


Also, the search seems inconsistent, when typing in "Texas" the search is not pulling from all of the meetings and says no meetings were found even though there are plenty of Texas meetings. Is there any way for the search bar to pull from all of the meeting information?

![image](https://github.com/code4recovery/12-step-meeting-list/assets/134229710/6b8a1200-5371-4d8f-8a76-3915437d5ca5)


url is https://heroinanonymous.org/meetings/

**Answer** _by @kiyote33_

So I was able to replicate the issue as soon as the Bodega theme was installed, before installing any of the other plugins. As I don't have a license for that theme, can you advise if there are any updates available? I went ahead and installed all of the required plugins for the Bodega theme and there wasn't any change on the behavior of the dropdown regions list scrolling. When testing against all the other themes, they behaved correctly which confirmed my thinking that it's the Bodega theme causing the problem. Looking at the Developer Console on the meetings page, I'm seeing this error: "**bodega.test/wp-content/themes/bodega/img/logo.png:1     Failed to load resource: net::ERR_NAME_NOT_RESOLVED**". Looks like some theme developer code that should have been removed before releasing the theme. I would think you should contact the Envato Market team to get a patch or fix for this issue.  Hope this helps resolve your issue.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1140">Discussion #1140</a></div>

</details>


### Feedback Emails separated by a comma {#feedback-emails-separated-by-a-comma}

<details>
<summary>Show question &amp; answer</summary>

**Question**

User Feedback Emails are configured with two recipients.
![image](https://github.com/code4recovery/12-step-meeting-list/assets/97912656/2c47aa65-d429-445b-bf71-60d86ddcc1f8)

When clicking on Update Meeting Info
![image](https://github.com/code4recovery/12-step-meeting-list/assets/97912656/f2818ad2-a634-4dce-9b11-81fc72326579)

I get an email email with the recipient addresses separated by a comma
altwebcoord@aavirginia.org,webcoord@aavirginia.org
In Outlook, this gives me a problem. I know to replace it with a semi-colon.  But, I'm worried about end users.

If this is a WP issue, I apologise. Also, I think I remember the Update Meeting Info button used to generate form that the user could fill out.

Please comment at your convenience.  Thanks!

David

**Answer** _by @joshreisner_

hi @dcfnet yes the TSML UI appearance only has the capability of forming a `mailto` link because it is frontend-only. some sites i know have set up a feedback form on a page with gravity forms (or similar) and then pointed the update meeting info button to that address using these instructions: https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20set%20a%20custom%20%22update%20meeting%20info%22%20button%20in%20tsml%20ui%3F

using commas appears to still be the [recommended way to specify multiple recipients](https://blog.hubspot.com/website/html-mailto) in a `mailto` link. i don't have access to outlook unfortunately to confirm that there's an issue there, but if you're concerned about your users you could also create a single email alias like `feedback@aavirginia.org` that forwards to both recipients

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1215">Discussion #1215</a></div>

</details>


### Meeting Types {#meeting-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Folks, 

We have a meeting Queer ideas of Fun that we have marked as LGBTQ. On our website, it is picking that up, but on the app, it is not. Can you help me out? Is this a global issue 
&lt;img width="485" height="442" alt="image" src="https://github.com/user-attachments/assets/53ac874a-0936-4bda-9bc0-826b3a1aa23c" /&gt;
&lt;img width="1125" height="2436" alt="image" src="https://github.com/user-attachments/assets/98d9b0c4-eea5-4b19-811c-2cd52741628e" /&gt;

**Answer** _by @SIA-WEBSUP_

Hey @ATLCOTech,

Assuming this is the feed the meeting guide app is reading ( [link ](https://atlantaaa.org/wp-admin/admin-ajax.php?action=meetings)), they should be picking up that type:

&lt;img width="723" height="663" alt="image" src="https://github.com/user-attachments/assets/10e71a0e-a2a6-446e-b91c-fc3b7dffa8f4" /&gt;



Did you just add the type to the meeting? The meeting guide app reads feeds every 12 hours or so.

If you only just added the type, perhaps they haven't picked it up yet?

If you did add this type more than 12 hours ago, follow up directly with the meeting app support team ( appsupport@aa.org )

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1742">Discussion #1742</a></div>

</details>


### Created a stanging site, feed now not working on the main domain {#created-a-stanging-site-feed-now-not-working-on-the-main-domain}

<details>
<summary>Show question &amp; answer</summary>

**Question**

created a staging site until it was developed to launch to the public.  We launched last week but now the feed still contains the stanging url insted of the main url.  any suggestions?  thank you!

**Answer** _by @brianw-area24_

I'm noticing a couple things when I look at the "Public Feed" URL you provided, and when I import this feed into my test site:

- Most (all) the meetings have both Regions and Sub Regions. The Regions appear to have the city/town, and the Sub Regions have "SD", "SD 57105", etc
- I'm seeing more meetings than I'd expect outside of South Dakota. For example https://area63aa.org/meetings/https-us04web-zoom-us-j-897492804/, this meeting looks like it should be in Sturgis, but the address is San Jose, CA
- Some of the other information doesn't appear to be in the correct fields

I'm not seeing the image you tried to attach. That might be helpful. Can you try again?

I'm also curious, how did you get the meetings into this site? Did they come from CSV file(s)? Feed(s) on the Imports & Settings page? Other?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/731">Discussion #731</a></div>

</details>


### Meeting page not working {#meeting-page-not-working}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Greetings

I just reinstalled the plugin and now when I goto my meeting page it doesnt show up "page not found"

Any ideas?

Thanks

http://lucasg11.sg-host.com/meetings/

**Answer** _by @lovethecodelabs_

Resave permalinksOn Sep 11, 2022 9:59 AM, eflashlogistics ***@***.***&gt; wrote:
Greetings
I just reinstalled the plugin and now when I goto my meeting page it doesnt show up "page not found"
Any ideas?
Thanks
http://lucasg11.sg-host.com/meetings/

—Reply to this email directly, view it on GitHub, or unsubscribe.You are receiving this because you are subscribed to this thread.Message ID: ***@***.***&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/918">Discussion #918</a></div>

</details>


### Meeting Notes auto generating {#meeting-notes-auto-generating}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello, I am having a problem in which meeting notes are being automatically entered for each meeting but I am not writing anything in on some of them, I don't want the text to appear on every single meeting. How do I disable this?

This is what it looks like when I am editing.
![Editing_Meeting](https://user-images.githubusercontent.com/88159477/150002008-c1e73aa6-b0fd-49fa-b02b-99a8eafbe0c0.JPG)

This is what shows up, the circled area is the section  ant removed.
![Meeting_Preview](https://user-images.githubusercontent.com/88159477/150002006-45c74f5a-6fa3-44c9-afc2-5a879a1cc153.JPG)

**Answer** _by @Grateful-Viv_

If it’s not an open AA meeting, then uncheck open as a type.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/647">Discussion #647</a></div>

</details>


### tsml_scan_data_source Cron Job {#tsml-scan-data-source-cron-job}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I'm running into an issue where tsml_scan_data_source() is a part of our scheduled actions in WP_control, and it seems to be running daily per the date stamps, but it's not actually refreshing the Data source in TSML. Any ideas on what might be happing?

**Answer** _by @joshreisner_

hi @Nickjones818 - i believe that job only scans the data source and notifies you by email if there's a change, it doesn't actually refresh the data source automatically

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/748">Discussion #748</a></div>

</details>


### WordPress caught an error with one of your plugins, 12 Step Meeting List. {#wordpress-caught-an-error-with-one-of-your-plugins-12-step-meeting-list}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I cannot login or access meeting plugin when activated Wordpress email said this plugin is causing a fatal error. I can login in when deactivated. my hosting said contact developer the site is aameetingspahrump.org site with plugin activated but cannot get in to change anythig

**Answer** _by @Alanwr2024_

I fixed it, by updating my php verson from 7.2 to 8.4 thank you

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1598">Discussion #1598</a></div>

</details>


### "Data Source Changes Detected" notifications persist even after refresh {#data-source-changes-detected-notifications-persist-even-after-refresh}

<details>
<summary>Show question &amp; answer</summary>

**Question**

![image](https://github.com/user-attachments/assets/018f941c-ebe5-4be3-b7c1-a0c850158a27)

For this (woodbridge VA) website we have two meetings that continue to show up in the "Data Source Changes Detected" emails even after the data source has been refreshed
- https://woodbridgeaa.org/meetings/?meeting=real-alcoholic-womens-big-book
- https://woodbridgeaa.org/meetings/?meeting=winners-circle

I've tried two methods to fix this 
- Refreshing the data source
- Deleting the meetings and then refreshing the data source

This is also an issue for meetings from several data sources on https://aavirginia.org/meetings/. I can provide the list of meetings there if you need it :)

**Answer** _by @joshreisner_

ah that's super helpful thanks - the `entity` field that appears changed for these meetings does contain an apostrophe. we'll push an update soon that should resolve it 🤞

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1599">Discussion #1599</a></div>

</details>


### TypeError: e is undefined --  Error When Loading Meetings Page {#typeerror-e-is-undefined-error-when-loading-meetings-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi, I am getting an error when loading the meetings page: TypeError: e is undefined. 

So far to troubleshoot, I have tried disabling ALL plugins and leaving only the 12 step meeting list enabled, same result. Also I have tried disabling the theme and enabling a vanilla theme, same result. Does anyone have experience with this, and can suggest how to proceed?  thanks. -- note the site link is https://naranonontario.com/meetings

**Answer** _by @lu-onthenet_

Changed the program to drug addicts anonymous and the selection changes.
That allows an entry under 'type'.
Now the page works!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1623">Discussion #1623</a></div>

</details>


### [Bug]: Meeting list not displaying showing following error "Timezone -04:00 is not valid. Please use one like Europe/Rome." {#bug-meeting-list-not-displaying-showing-following-error-timezone-04-00-is-not-va}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

joebryanmarketing@gmail.com

### Website With Issue

https://capecodaa.net/meetings/

### What happened?

Hi,

Contacted by user that the meeting list was no longer displaying. When you go to the page you get the following error message.
https://capecodaa.net/meetings/
![Timezoneerrormessage](https://github.com/code4recovery/12-step-meeting-list/assets/130705835/556419f7-3804-456b-8515-e7f7ace85084)

Timezone -04:00 is not valid. Please use one like Europe/Rome.

The problem only appears on desktop browsers, when I tested the site on my mobile phone it still appears to be working correctly.

Really not sure what the issue is, please advise.
Thanks in advance,
Joe Bryan

### What browsers are you seeing the problem on?

Firefox, Chrome

### Relevant log output/errors

```shell
Timezone -04:00 is not valid. Please use one like Europe/Rome.
```

**Answer** _by @joshreisner_

yes judging by your site name, your timezone should be set to `America/New_York` - this way daylight savings will work properly 

in the future please [create a discussion](https://github.com/code4recovery/12-step-meeting-list/discussions) rather than filing a new ticket, thanks!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1435">Issue #1435</a></div>

</details>


### json error, not show meeting list on webpage where it was previously posted {#json-error-not-show-meeting-list-on-webpage-where-it-was-previously-posted}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

valleyscaa@gmail.com

### Website With Issue

trivalleyaa.org/meetings

### What happened?

initially I went in to change my widgets, and one widget is for the Meeting Page top and botton where I had info posted with links,
I could not do anything in the entire widgets section, it was locked with lots of error messages along the top of the widget working page.Many mentioned Json error but I do not read code so did not know what it was about. I deleted the text in the Meeting Page Top box and the Meeting Page footer box. And deleted many other boxes in the Widget sections and was able to fix the sidebar widget. However, the TSML would not repopulate.
In addition, I am having a similar posting of TSML meetings on a new site I am building. The meetings show up on the Meeting Sidebar in the WP Dashboard, but not on a website page.
Any suggestions would be very helpful.

### What browsers are you seeing the problem on?

Firefox, Chrome, Safari

### Relevant log output/errors

```shell
Sorry, but I did have a json validation error for the second site. Json syntax error
```

**Answer** _by @tim-rohrer_

I’m not fully following your description of your issue, so we may need a few back and forths.

First, I see your meetings here: https://trivalleyaa.org/?post_type=tsml_meeting

So your first concern is that you don’t see the meeting list, you may need to rebuild the link to it, or perhaps update the permalinks (General—&gt;Permalinks—Save).

Any new instances of the Upcoming Meetings widget need to be created in a Wordpress Legacy Widget block. Try that and see if you’re able to get them back.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1063">Discussion #1063</a></div>

</details>


### Firefox .pdf meeting list output error {#firefox-pdf-meeting-list-output-error}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The latest versions of Firefox (Windows & Android) may have a bug that causes .pdf printed output of meeting lists to display one column per page, rather than two.

Could someone consider verifying this, perform some error isolation, and work with developers at Firefox (if need be)?

The error does not occur using Edge, Chrome, or Opera.

Thanks in advance.

**Answer** _by @kiyote33_

Hi @John-L,
I've tested this on Firefox version 112.0.2 and while the PDF Meeting List does default in a single column, it is a simple matter to click on the tools menu and change the Spreads option from No Spreads to Odd Spreads which will give you the desired two column display. As this is not a Code For Recovery issue but a feature of Firefox I will be closing this discussion.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1136">Discussion #1136</a></div>

</details>


### Updating meetings {#updating-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,
Is it only me or does anyone else having problem with updating and creating new meetings?

When I try to update a meeting the button "update" is grayed out and when I try to create a new meeting the "publish" button doesn't work. The meeting is sat as "draft". I have tried to check the box in the meeting list and choose "edit" from the drop down menu and set published from there but without any luck.

**Answer** _by @tim-rohrer_

What is the website URL? Have you set up a MapBox mapping token?

If it is for an existing site that used to work, when did things stop working?

I believe whatever issue you're facing is limited to your site at this time, so let's focus on trying to find what data is likely not valid.

Most often this occurs because the address is not geocoding, or some other field isn't validating. For example, if you're entering an online meeting, you need to put in a valid conference url.

In the case of the plugin failing to geocode the address, it is often because the admin is trying to put something into the address field besides a valid address. 

If you provide some screen shots or addition data on what you're trying to enter, we can help you better. 

If we're sure the data is valid, then we'll have to dig further.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1181">Discussion #1181</a></div>

</details>


### Data Source issue {#data-source-issue}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I have a meeting on our Intergroup site aaspokane.org that syncs with area92aa.org.  The meeting "The Way Out Group Spokane" is correct on both sites.  It continues to appear as a meeting that needs to sync daily.  I have deleted it from both sites and added it to aaspokane.org without affecting this issue.  Not a big deal because the meeting is correct on both sites, but it would be nice not to get emails

**Answer** _by @kiyote33_

Hi Dan,
There's probably some slight difference in the way the meetings are stored in their respective database. Probably some hidden character that can't be discerned by the naked eye. You're in luck though as we will be publishing a major maintenance release which we hope will resolve or at least provide more information as to why the meeting is showing up on the change detected email. Hang in there for a few days, and let us know if the upcoming 3.15 release fixes this issue for you.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1496">Discussion #1496</a></div>

</details>


### Error message on website after using PDF Generator {#error-message-on-website-after-using-pdf-generator}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We've just started using the PDF generator on our website ct-aa.org.  We just got this error message.  Has anyone ever gotten this before?
![Error Message](https://github.com/user-attachments/assets/1d17b8e1-9e38-4645-a227-b0f235860e82)

Because the site is down I can't confirm the software versions.

**Answer** _by @joshreisner_

i'm not seeing that error, i checked a few hours ago as well
&lt;img width="1609" alt="Screenshot 2024-10-26 at 4 16 51 PM" src="https://github.com/user-attachments/assets/dcf8380a-d995-4317-8615-bd92d2e77342"&gt;

i don't think using the PDF generator should add any special burden on the website. i'm able to generate a PDF of your meetings without any issues.

are you still seeing the error on your end? when i am dealing with a website that is experiencing intermittent issues i'll set up a free monitor at uptimerobot.com, this can tell you how often the site goes down and for how long

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1552">Discussion #1552</a></div>

</details>


### Possible Bug? WP Page name being replaced by Meeting name in List view {#possible-bug-wp-page-name-being-replaced-by-meeting-name-in-list-view}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello,

I noticed something the other day that I am trying to understand. In my header, I have a div with a class called inner_title. The inner_title is usually the WP Page name across every single page on my site, except for the page with the 12-Step-Meeting-List Plugin List view. In this case, the inner_title is the first meeting on the list. When I click into an individual meeting, the inner_title changes to the appropriate meeting name, as expected. 

The expected outcome when you click on my WP Page name Meetings and see the list view is that the inner_title would also be Meetings and not the name of the first meeting on the list. Any Thoughts?

**Answer** _by @steve970_

It's hard to share a URL since I am on a local dev. environment.

On Mon, Dec 2, 2024 at 10:49 AM George Kovats ***@***.***&gt;
wrote:

&gt; Hi @steve970 &lt;https://github.com/steve970&gt; can you share a URL for the
&gt; issue you're seeing?
&gt;
&gt; —
&gt; Reply to this email directly, view it on GitHub
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/discussions/1579#discussioncomment-11439590&gt;,
&gt; or unsubscribe
&gt; &lt;https://github.com/notifications/unsubscribe-auth/ACQELVEE36EIOG2AJHZ3VR32DSMRRAVCNFSM6AAAAABS3WXWIOVHI2DSMVQWIX3LMV43URDJONRXK43TNFXW4Q3PNVWWK3TUHMYTCNBTHE2TSMA&gt;
&gt; .
&gt; You are receiving this because you were mentioned.Message ID:
&gt; &lt;code4recovery/12-step-meeting-list/repo-discussions/1579/comments/11439590
&gt; @github.com&gt;
&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1579">Discussion #1579</a></div>

</details>


### Excessive CPU seconds per hour {#excessive-cpu-seconds-per-hour}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I have a website that often nearly exceeds (sometimes does exceed) the monthly allowable CPU Seconds. Right now the site has reached 80% of the limit and it is only April 10.  When it reaches 100% the site will be inaccessible.  I believe it to be related to the TSML plugin as the meetings page is by far the most visited page of the website.  I have several other sites using the plugin and do not run into this issue.  Anyone have any suggestions?
![CPU Seconds by day 2026-04-10 102200](https://github.com/user-attachments/assets/7d0fb766-56c2-4d4b-bc30-1c9962322b1d)

**Answer** _by @joshreisner_

an upvote for checking the access log to see if there's a pattern in the traffic. if it's a single IP that's hammering the site then banning them might be a good option. if it's a number of IPs, then cloudflare or a wordpress plugin like wordfence can impose rate-limiting that might help get this down.

i'd also be interested to know what all these console warnings are about - it looks like in elementor is requesting some fonts ~1000 times on each page request, that could be adding up

&lt;img width="1728" height="1084" alt="Screenshot 2026-04-10 at 2 22 25 PM" src="https://github.com/user-attachments/assets/34a7a981-38c0-4db3-8c08-c4195a41079c" /&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1916">Discussion #1916</a></div>

</details>


### distance filtering not working after reload {#distance-filtering-not-working-after-reload}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Discussed in https://github.com/code4recovery/12-step-meeting-list/discussions/1751

in legacy UI, distance filtering is working, but if you share the URL the distance filtering is lost

this is because we are strict-comparing a string to a number in the distance dropdown, so the right item is not selected, so ajax query is not working

we should cast the input as numeric, but also check that it is in the distances array. if it's not, we should default it to the regular distance default, which i believe is `2` (km or mi)

**Answer** _by @joshreisner_

hello @wamotechservices that's is a different issue - TSML UI does not support displaying districts in the dropdown, although you can search for them and find them on meeting detail pages. you may want to switch back to Legacy UI, or create your own method of navigating to districts using searches.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1753">Issue #1753</a></div>

</details>


### Locations / Contacts {#locations-contacts}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We have started using the plugin recently for the new NA website in the Netherlands, and we are **very grateful** for being able to use it!  https://www.nanederland.nl/meetings/ We are using Legacy UI at this time and have the TSML Xtras installed.

First: I'm not the webmaster but the fairly technical operations guy :)

The questions we have:
Locations: Since locations are "entities" that can be reused, we would expect a menu option that would allow editing of locations.  
Contacts (group): same thing. 

I'm not saying that it's not working, just wondering if we are missing a setting /extra plugin.

In service, Ewout

**Answer** _by @anchovie91471_

Hi Ewout! We're glad you're finding the plugin useful!

Yes, TSML doesn't include the Groups/Locations as separate screens in the menu, even though they are technically WP entities. They can, however, be edited on a related meeting edit screen, and, being that they are entities, they are changed for every associated meeting.

This is an experimental feature in TSML Xtras that isn't available yet, but may be on the roadmap.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1242">Discussion #1242</a></div>

</details>


### restored meetings not displaying. {#restored-meetings-not-displaying}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
See [comment on #55](https://github.com/code4recovery/12-step-meeting-list/pull/55#issuecomment-576020308). after deleting a meeting and restoring it meeting does not automatically reappear. I have to hit update for it to show up again.

**To Reproduce**
Steps to reproduce the behavior:
1. Trash a meeting
2. verify meeting is gone on site.
3. Restore from trash
4. meeting is still gone.

**Expected behavior**
Meeting automatically reappears.

On version `3.4.22` Siteground/Bluehost shared hosting

**Answer** _by @joshreisner_

For faster performance, we have a JSON cache of the meeting data. My guess is that when a meeting is un-trashed, that the cache is not getting updated. 

I think we probably just need to add a callback for the `wp_untrash_post` hook and run `tsml_cache_rebuild()` inside of it.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/56">Issue #56</a></div>

</details>


### Don't use PHP Anonymous Functions {#don-t-use-php-anonymous-functions}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Users with PHP &lt; 5.3 will get the following error when trying to update the plugin:

```
Parse error: syntax error, unexpected T_FUNCTION in /home/content/82/14032682/html/meetings/wp-content/plugins/12-step-meeting-list/includes/functions.php on line 499 
```

This is due to some code I checked in on 11/22 in b07e113

**Answer** _by @joshreisner_

I would guess 95% of sites running it are on 5.x. Let's look and see if we can release an update that requires 5.6+ so that users like Greg who have a lower version don't see the update and can continue to run the existing version.

Also we should finalize our geocoding plan first if a segment of users won't get updates anymore.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/60">Issue #60</a></div>

</details>


### cannot update plugin {#cannot-update-plugin}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am trying to update the plugin but in the Plugin page on my wordpress site it gives me this error, can you tell me how to get past this?

Update Failed: The package could not be installed. PCLZIP_ERR_MISSING_FILE (-4) : Missing archive file '/tmp/12-step-meeting-list.3.6.2-ir5TVE.tmp'

**Answer** 

This sounds like a permission issue, or has to do with how you're installing the plugin. I've upgraded sites using Wordress's plugin page without a problem.

Please use our [Wordpress Plugin Support Page](https://wordpress.org/support/plugin/12-step-meeting-list/) for user-related help issues, and reserve this area for confirmed bug reports and feature requests. 

Thanks.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/85">Issue #85</a></div>

</details>


### Include Meeting/group ID in "request change to this listing" default email {#include-meeting-group-id-in-request-change-to-this-listing-default-email}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

**Answer** _by @OSAwebsite_

Many in my membership use the quick comment email ("Request a change to this listing") to communicated changes in the COVID crisis. This is a fantastic tool to do so. I am wondering if it would be possible to include, in the email it auto-generates, the ID of the listing.
I am using the plugin for an Al-Anon Area site. There is currently no field/entry box for the WSO ID (AA equivalent: GSO ID) a.k.a. the group ID so I have this information in the meeting details.

My request is this:
can we either create an entry box for this ID and show it in this 'Request a change' email, or, alternatively, can we include the meeting information in this email? Both will do me fine.

A new entry box is probably going to be more work than including the meeting details.

Thanks,
Nicky

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/112">Issue #112</a></div>

</details>


### Meetings are blank {#meetings-are-blank}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
Moved this over from the WP site (https://wordpress.org/support/topic/meetings-are-blank/#post-13170261)

I am updating dozens of meetings who are moving back to being in person. While I was at it I upgraded the plug-in version. When I click on any meeting on any day there is no content. I am unsure why. 


**To Reproduce**
Steps to reproduce the behavior:
1. Go to https://www.vancouveraa.org/meetings/?tsml-day=0
2. Click on any meeting link
5. See that page is blank

**Expected behavior**
Page should show meeting info

**Screenshots**
![image](https://user-images.githubusercontent.com/66804755/88468181-95af5980-ce94-11ea-91d7-a2d9f7b71500.png)


**Desktop (please complete the following information):**
 - OS: Win10
 - Browser Tried both Firefox and Chrome current versions

**Answer** 

Hi @scottvanwa2,

Thanks for moving the discussion over here.

I just tried looking at your meeting list and I'm now getting this:

&lt;img width="730" alt="image" src="https://user-images.githubusercontent.com/31904316/88468432-c72e2200-cea0-11ea-9843-59215ce50a8e.png"&gt;

This is almost always due to an issue with permalinks. Have you tried going into the permalinks page and re-saving the settings?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/134">Issue #134</a></div>

</details>


### Meeting Search Page not working properly {#meeting-search-page-not-working-properly}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When you use the search page not all fields are working and when you change a second field, all the other fields return to default.


**To Reproduce**
1. Go to the meeting search page
2. If you click on the day option, you can not change to anything but Wednesday.
3. If you click on an other field, it will change to your selection; but, if you click on another field it will return your original selection to its default value.

**Expected behavior**
1. I expect the day menu allow me to select an option besides Wednesday.
2. I expect the field menu selection to remain when performing a search

**Desktop (please complete the following information):**
 - Windows 10
 - Firefox
 - Version 81.0.  The same problem occurs in Chrome version 85.0.4183.121.

**Answer** 

It appears the issue you're experiencing is likely related to the SuperFish plugin that is throwing errors on your site. Please disable that, and see if you continue to have troubles with TSML.

&lt;img width="1423" alt="image" src="https://user-images.githubusercontent.com/31904316/95368773-2eeaeb00-089c-11eb-8927-c07b50067df5.png"&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/175">Issue #175</a></div>

</details>


### Version 3.9.2 Problems {#version-3-9-2-problems}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Version 3.9.2 froze my back end on the live site. Restoring backup until I can figure it out. Refreshing permalinks was not possible since once the update was made, I could no longer get to anything in the back end.

Worked fine on the staging site however.

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

**Answer** _by @district6wc_

I just updated this plug-in and am having the same issue.  I am unable to get to wp-admin dashboard.  The webpage comes up blank.  I had to call GoDaddy and they renamed the folder for now and this deactivated the plugin.  This file contains all the meetings in my district that I entered manually.  Please help!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/205">Issue #205</a></div>

</details>


### Is there anyway to use this plugin for our Squarespace site? Any help would be appreciated. {#is-there-anyway-to-use-this-plugin-for-our-squarespace-site-any-help-would-be-ap}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

**Answer** _by @97eighty_

@saludapictureman At first glance SquareSpace offers a Premium offering which has the ability to create Code Blocks to add your own JavaScript. See: https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-HTML-CSS-and-JavaScript. 

With this option you may be able to use the React interface. Instructions for setup are here: https://github.com/code4recovery/react

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/221">Issue #221</a></div>

</details>


### Display issue on the autofill search field {#display-issue-on-the-autofill-search-field}

<details>
<summary>Show question &amp; answer</summary>

**Question**

There’s a display issue since v 3.9.4 on the list that appears below the search field as you start typing. 

**Issue:**
![image](https://user-images.githubusercontent.com/61430063/105205384-e35c0480-5b4d-11eb-8058-521d4906d3dd.png)

**Expected behavior:**
![image](https://user-images.githubusercontent.com/61430063/105205806-4f3e6d00-5b4e-11eb-99b3-95d340d2296f.png)

**Answer** 

Please provide standard information like website link (Houston, TX?), Wordpress versions, theme, other plugins, etc. 

My quick suspicion is that this is related to another plugin causing issues with jQuery Migrate. Once I have your website link I can see if I can duplicate the issue. If I'm not able to duplicate (which if it is aahouston.org, another our members already reported he cannot duplicate the issue on three different browsers) it, then please try different browsers/computers to see if the issue goes away.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/270">Issue #270</a></div>

</details>


### PayPal username not working {#paypal-username-not-working}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When I enter our group PayPal user name, it links to a blank PayPal page and not the correct group page.
![60E6DA2B-B346-44E4-86D3-4DB670621245](https://user-images.githubusercontent.com/2553727/113450845-55f72500-93c6-11eb-81a4-99e5509560a2.jpeg)
![EC371F28-529C-4319-BBAD-DA92D5E2E558](https://user-images.githubusercontent.com/2553727/113450847-57285200-93c6-11eb-8e03-516db78f2045.jpeg)
![665E5D7B-BAEF-463B-B8FF-715F7EAA91A9](https://user-images.githubusercontent.com/2553727/113450848-57285200-93c6-11eb-8bfe-1fc622dde50e.jpeg)

**Answer** 

I confess I don't personally use this feature, but am pretty sure right now the issue is that you don't have the right PayPal page/username

&lt;img width="1225" alt="image" src="https://user-images.githubusercontent.com/31904316/113455086-c5c1db80-93d7-11eb-98e2-c82321dbb932.png"&gt;

Let's start by confirming the correct PayPal.me user page.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/309">Issue #309</a></div>

</details>


### Odd Upcoming Issue {#odd-upcoming-issue}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
Day 2 Upcoming Missing Result(s).

**To Reproduce**
Steps to reproduce the behavior:
1. https://aa-stlawrenceny.org/meetings/?tsml-day=2&tsml-time=upcoming --&gt; no results!
2. https://aa-stlawrenceny.org/meetings/?tsml-day=3&tsml-time=upcoming --&gt; has results!

This is at 10:42 PM. There are no meetings until noon on the next day which is day (3).

**Expected behavior**
There should be results!!!

**Possible Explanation**

```
&lt;?php
if (!empty($arguments['time'])) \{
    $this-&gt;time = is_array($arguments['time']) ? array_map('sanitize_title', $arguments['time']) : array(sanitize_title($arguments['time']));
    if (in_array('upcoming', $this-&gt;time)) \{
        $this-&gt;now = current_time('H:i');
    \}
\}
//callback function to pass to array_filter
public function filter_time($meeting)
\{
    if (!isset($meeting['time'])) \{
        return false;
    \}

    foreach ($this-&gt;time as $time) \{
        if ($time == 'morning') \{
            return (strcmp('04:00', $meeting['time']) &lt;= 0 && strcmp('11:59', $meeting['time']) &gt;= 0);
        \} elseif ($time == 'midday') \{
            return (strcmp('11:00', $meeting['time']) &lt;= 0 && strcmp('16:59', $meeting['time']) &gt;= 0);
        \} elseif ($time == 'evening') \{
            return (strcmp('16:00', $meeting['time']) &lt;= 0 && strcmp('20:59', $meeting['time']) &gt;= 0);
        \} elseif ($time == 'night') \{
            return (strcmp('20:00', $meeting['time']) &lt;= 0 || strcmp('04:59', $meeting['time']) &gt;= 0);
        \} elseif ($time == 'upcoming') \{
            return (strcmp($this-&gt;now, $meeting['time']) &lt;= 0);
        \}
    \}
\}
```

I won't comment on whether using `strcmp` and times makes sense. IMHO these would be better handled as DateTime or Carbon instances.

That said, it could just be there are no meetings on Tuesday after 10:44PM and there will be upcoming meetings shown after midnight (or should I say early on in the morning).

But that's ODD to me.

@joshreisner  wrote some of this code according to git blame; what's the code meant to be doing?

**Answer** _by @joshreisner_

👍 I agree. We're getting rid of this view in the new version of the meeting finder we're working on and showing all the meetings sorted by upcoming as the default view: https://react.meetingguide.org 

This way the next meeting is always at the top of the list (unless you filter to show specific days).

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/372">Issue #372</a></div>

</details>


### Publish Date not Changing with Edit {#publish-date-not-changing-with-edit}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
when changes are made by our meeting editor to a meeting and published again, the publish date is not changing.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to meeting record and make an edit
2. Click on "Update"
3. Scroll down to '....'
4. See error

**Expected behavior**
The publish date used to update automatically. Now we are doing it manually There was an option to manually update with one click.  Now that option is gone and each field (month, day, year and time) must be manually updated. 

**Screenshots**
![image](https://user-images.githubusercontent.com/72042564/123148458-7e1e7f00-d41d-11eb-8462-e8314425eec3.png)

**Desktop (please complete the following information):**
 - OS: Windows 10 PC
 - Browser [Firefox]



**Additional context**
I am also on a PC and the update feature works fine for me. As of yesterday Meeting Editor has a custom WP role and can only access the TSML plugin.  However, she said this issue has been ongoing for quite some time.

**Answer** _by @97eighty_

@A46webchair A quick look at our code doesn't show that we update this field directly. This is a function of WordPress. I suggest manually looking at the post_date, post_modified fields in your database to see if they are updating properly.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/386">Issue #386</a></div>

</details>


### Notify when a meeting is deleted or unpublished {#notify-when-a-meeting-is-deleted-or-unpublished}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

cherijones@cyberservices.com

### Website With Issue

https://kc-aa.org

### What happened?

no notification when a meeting is closed

### TSML Version

Latest (default)

### Wordpress Version

Other (Identify version in text above)

### What browsers are you seeing the problem on?

Firefox

### Relevant log output/errors

```shell
unknown
```

**Answer** _by @joshreisner_

@CheriJones this all looks correct! It's just not a feature we currently have. Does seem like an oversight. I don't recall it coming up before though.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/503">Issue #503</a></div>

</details>


### [Bug]: PDF generator button open window with error {#bug-pdf-generator-button-open-window-with-error}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

petermixt@gamil.com

### Website With Issue

aalaroundup.org

### What happened?


https://pdf.code4recovery.org/?json=https%3A%2F%2Faalaroundup.org%2Fwp-admin%2Fadmin-ajax.php%3Faction%3Dmeetings

returns: We can’t connect to the server at pdf.code4recovery.org.

-pds

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Firefox

### Relevant log output/errors

_No response_

**Answer** _by @petermixt_

gets to the generator page then... Returns a new error...
![Screenshot 2021-10-03 at 17-27-43 PDF Generator](https://user-images.githubusercontent.com/38595503/135778871-5ce966aa-15bc-4eee-a77a-94f0016739dc.png)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/544">Issue #544</a></div>

</details>


### [Bug]: Meeting back button leading to 404 error instead of meeting page {#bug-meeting-back-button-leading-to-404-error-instead-of-meeting-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

_No response_

### Website With Issue

_No response_

### What happened?

The return button on a specific meeting page lead to an empty page.
![image](https://user-images.githubusercontent.com/46719148/137519427-4fd9384c-6cad-49a5-b3d9-279f19db2544.png)
Thanks again :)

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

_No response_

### Relevant log output/errors

_No response_

**Answer** _by @Carlsans_

I would suggest the removal of the meeting folder alltogether ex:
https://aa89.org/wordpress/meetings/?post_type=tsml_meeting
would become :
https://aa89.org/wordpress/?post_type=tsml_meeting
solved it for me :)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/553">Issue #553</a></div>

</details>


### Meeting time should not reset to default when day of week changes {#meeting-time-should-not-reset-to-default-when-day-of-week-changes}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Discussed in https://github.com/code4recovery/12-step-meeting-list/discussions/652

&lt;div type='discussions-op-text'&gt;

&lt;sup&gt;Originally posted by **OSAwebsite** January 22, 2022&lt;/sup&gt;
This has bitten me in the backside more than once and I would like to enter an urgent change request:

Whenever I change the day of a meeting, the times jumps to 12am. This makes no sense to me whatsoever.
Sometimes a group changes their meeting day, but the time usually stays the same. Sometimes the day is given to me in error so I want to be quick and adjust it and then I often miss the time change.

I would like the time, if there is one entered already, to stay the same, even when I change the day. It is very easy to miss and I don't see the reason why it would be changed if all I do is adjust the day....

Pretty please?
Nicky&lt;/div&gt;

**Answer** _by @OSAwebsite_

Okidoki!


-
Yours in service,
Nicky D
Ontario South Website Coordinator
al-anon.alateen.on.ca

*This too will pass...*


On Thu, Mar 3, 2022 at 2:20 PM brianw-area24 ***@***.***&gt;
wrote:

&gt; I'm working on another issue how, and this is the next one on the list.
&gt; Hopefully it will make the next release.
&gt;
&gt; —
&gt; Reply to this email directly, view it on GitHub
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/issues/688#issuecomment-1058402740&gt;,
&gt; or unsubscribe
&gt; &lt;https://github.com/notifications/unsubscribe-auth/AOIWBFZAZPPWKJYQF7FWVO3U6EGJBANCNFSM5OHMSEFA&gt;
&gt; .
&gt; Triage notifications on the go with GitHub Mobile for iOS
&gt; &lt;https://apps.apple.com/app/apple-store/id1477376905?ct=notification-email&mt=8&pt=524675&gt;
&gt; or Android
&gt; &lt;https://play.google.com/store/apps/details?id=com.github.android&referrer=utm_campaign%3Dnotification-email%26utm_medium%3Demail%26utm_source%3Dgithub&gt;.
&gt;
&gt; You are receiving this because you commented.Message ID:
&gt; ***@***.***&gt;
&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/688">Issue #688</a></div>

</details>


### Wordfence Blocking Imports {#wordfence-blocking-imports}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

sgibson71@gmail.com

### Website With Issue

https://pa-al-anon.org/

### What happened?

Running the meeting finder on a site along with Wordfence.  Everything seems fine for a period of time and then after about a week imports start to stall and take FOREVER to run.  Through trial and error we have found that deactivating Wordfence resets the issue and the imports will run normally for a period of time.  Not sure if this is a Meeting Finder issue or something Wordfence is doing wrong.  If you have any ideas I'd be interested in hearing them.

Thanks for developing this amazing tool - yours in service, Scott


### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Firefox, Chrome, Safari, Microsoft Edge

### Relevant log output/errors

_No response_

**Answer** _by @sgibson71_

This is what our chairperson had to say:

On average, I would say we do about 10 imports per week. Marge in group
records does 5-7 a week, and many of them require some manual overrides by
Lori or me, which we do with another load. So many days, there are two
loads done. Marge often starts her about 10 in the morning. Lori or I will
usually do the second load in the evening sometime. Each load right now is
416 meetings. And no, we've never experienced the problem while WordFence
is deactivated. If the load is having a problem, as soon as I deactivate
WordFence, the load immediately takes off and finishes in its usual 3-5
minutes. I can then reactivate WordFence and right now, we appear to be
good for a week. The slowdown also appears gradually, hitting a
"knee-in-the-curve" by Monday.

&lt;http://www.avg.com/email-signature?utm_medium=email&utm_source=link&utm_campaign=sig-email&utm_content=webmail&gt;
Virus-free.
www.avg.com
&lt;http://www.avg.com/email-signature?utm_medium=email&utm_source=link&utm_campaign=sig-email&utm_content=webmail&gt;
&lt;#DAB4FAD8-2DD7-40BB-A1B8-4E2AA1F9FDF2&gt;

On Wed, Apr 27, 2022 at 1:17 PM 97eighty ***@***.***&gt; wrote:

&gt; @sgibson71 &lt;https://github.com/sgibson71&gt; How often and how many imports
&gt; do you do? Does the problem ever occur with WordFence deactivated?
&gt;
&gt; —
&gt; Reply to this email directly, view it on GitHub
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/issues/791#issuecomment-1111265740&gt;,
&gt; or unsubscribe
&gt; &lt;https://github.com/notifications/unsubscribe-auth/ASEV4OYCILA2A6FRSOUM5WDVHFZCNANCNFSM5UPJAA4Q&gt;
&gt; .
&gt; You are receiving this because you were mentioned.Message ID:
&gt; ***@***.***&gt;
&gt;


-- 

*MOBILE:* (717) 333-4277
*WEB: *www.axiomwebworks.com

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/791">Issue #791</a></div>

</details>


### restore tsml_link function for the enhanced feedback plugin {#restore-tsml-link-function-for-the-enhanced-feedback-plugin}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

tetrick.d@gmail.com

### Website With Issue

aacolumbia.org/meetings

### What happened?

Version 3.16.7 auto updated yesterday. When selecting a meeting info returned to user states "There has been a critical error on this website." 

To view the error https://aacolumbia.org/meetings/lunch-box/ 
![aacolumbiaerror1216](https://github.com/user-attachments/assets/75c2f4b9-bf7e-4892-b3e2-6caea842731f)


### What browsers are you seeing the problem on?

Chrome, Microsoft Edge

### Relevant log output/errors

_No response_

**Answer** _by @joshreisner_

hmm, we're not seeing any errors on detail pages on our demo site, eg https://demo.code4recovery.org/meetings/spiritual-progress-group-monday-1205

would you be able to enable `WP_DEBUG` temporarily to see what the error is? go to `wp-config.php` and change this to `true` 

```php
define('WP_DEBUG', true);
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1592">Issue #1592</a></div>

</details>


### Remove / adjust Github issue templates {#remove-adjust-github-issue-templates}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

_No response_

### Requested Feature/Enhancement

Let's take out the weird github issue templates that we use, and ideally just add a message at the top of the "New Issue" form that says:

&gt; ✋🛑 Stop! This form is only for the Code for Recovery TSML team - please [Create a Discussion](https://github.com/code4recovery/12-step-meeting-list/discussions/new?category=q-a) to get help from our support rotation.

**Answer** _by @tim-rohrer_

I have no objection. This simplifies things. And perhaps the wording will be better seen. Many users seemed to ignore the request to open Discussions vice issue, but the icons might help :-)

I know some orgs have figured out how to hide Issues from the general users. Last I tried, I couldn't figure that out.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1732">Issue #1732</a></div>

</details>


### New Twenty Twenty Two Theme not yet supported by TSML {#new-twenty-twenty-two-theme-not-yet-supported-by-tsml}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The new Block themes supported by wordpress 5.9 and newer works differently than all classic themes we are use to. Without an intervening code injection, we get a **"Deprecated: Theme without header.php is deprecated since version 3.0.0 with no alternative available. Please include a header.php template in your theme.**" error message.

**Answer** _by @joshreisner_

I notice that the `[tsml_ui]` shortcode doesn't seem to work with the Twenty Twenty theme. I get a blank page with a console log that says `Could not find a div#tsml-ui in your HTML.`

I found that changing this line

```
wp_enqueue_script('tsml_ui', $js);
```
in shortcodes.php makes it work again. This tells it to include the script in the footer.

```
wp_enqueue_script('tsml_ui', $js, [], false, true);
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/713">Discussion #713</a></div>

</details>


### JSON: Syntax Error - Malformed JSON {#json-syntax-error-malformed-json}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I get the attached error message when I attempt to add a data source

Another user I know has no problems with same JSON

Help please


![JSON-Error-Message](https://user-images.githubusercontent.com/78445180/194159896-6b71ebd3-a5e8-4c3e-94d2-a9620f30605d.jpg)

**Answer** _by @joshreisner_

if you put the URL through jsonlint.com or meetingguide.org/validate does it work?

this can happen if the site has sitelock enabled. they have to 'whitelist' your URL to allow it, otherwise it shows a non-JSON error message, triggering the error

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/946">Discussion #946</a></div>

</details>


### User Feedback Emails Form - Sender email {#user-feedback-emails-form-sender-email}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello all, 
- Regarding the meeting feedback form
- When a user fills it out the form and sends it it sends us an email
- previously, when we answered that email, the recipient was the email of the person who had filled the form. 

Since last update, this is not the case anymore, the recipient is wordpress@alcoholics-anonymous.eu. 

Upon checking, the headers do not contain the "reply-to: intial.senders@email.com"

This also is a problem due to the fact we have an autoresponder which now only goes to wordpress@alcoholics-anonymous.eu

Please advise, 

Thanks, 

Julien

**Answer** _by @joshreisner_

Hi @julien-paris - we haven't made any changes to this area of the plugin in a long time, so I don't think it's related to a plugin update. We are still attaching the `Reply-To:` header to the emails from the plugin, but there are a lot of stages that come afterward that we don't control.

Are you using a plugin to send emails from your site? I just sent a test email.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1040">Discussion #1040</a></div>

</details>


### Tawk.to Chat Bot and Affiliation {#tawk-to-chat-bot-and-affiliation}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi! Does anyone have any experience strength and hope on feedback from the groups on using chat bots? We have 1 group who feels there is an issue of affiliation (see screen shot at the bottom). 
![image](https://github.com/code4recovery/12-step-meeting-list/assets/147879274/126a9af2-3b94-465c-84f9-27862d5df849)

**Answer** _by @joshreisner_

hi @ATLCOTech it might be good to get a little more info about the specific objection, perhaps they don't like the way the chat feature is branded and has the message at the bottom? you might ask if they like the presentation of the chat feature on https://aasfmarin.org/ or https://aasanjose.org better? the use a different service which is a little more discreet

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1410">Discussion #1410</a></div>

</details>


### Cannot publish a meeting "Sorry you are not allowed to edit this item: website." "A post type mismatch has been detected." {#cannot-publish-a-meeting-sorry-you-are-not-allowed-to-edit-this-item-website-a-p}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

jessica.ruth@hotmail.co

### Website With Issue

fairbanksaa.org

### What happened?

I entered everything in for the  Sunday Morning Serenity Group meeting, and hit publish. I ended up with an error message. The  name of the  tab was "Sorry, you are not allowed to edit this item: fairbanksaa.org" and in the  window it read "A post type mismatch has been detected." Here are the  screenshots:

&lt;img width="1567" alt="Image" src="https://github.com/user-attachments/assets/8fb83dfe-5523-44c5-b106-f834f99150b9" /&gt;

&lt;img width="1559" alt="Image" src="https://github.com/user-attachments/assets/56ce9825-3f99-4624-8af6-b0284b65b3ce" /&gt;

&lt;img width="1562" alt="Image" src="https://github.com/user-attachments/assets/d40e2ed2-4f6c-4917-9b82-d25c99a418a7" /&gt;

&lt;img width="1571" alt="Image" src="https://github.com/user-attachments/assets/a73cab21-1a58-4d31-8f65-c66e909d0c9e" /&gt;

&lt;img width="1745" alt="Image" src="https://github.com/user-attachments/assets/e8951803-5cae-4558-9cb5-9a6e6484109f" /&gt;

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

```shell

```

**Answer** _by @joshreisner_

i'm with @tim-rohrer  - i've never seen this type of issue before. are you able to see the Users page in WordPress? if so, what's your user profile? i wonder if changing it to `Administrator` would fix it.

also wonder what other plugins your site might have installed? this might help us reproduce the issue

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1617">Discussion #1617</a></div>

</details>


### Space at the top of the chart {#space-at-the-top-of-the-chart}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The meeting finder is being crowded by the website header. (https://ct-aa.org/meetings/?tsml-day=0&tsml-distance=&tsml-mode=me. All the other pages are fine.  Can I add space at the top of the chart to solve that problem?

**Answer** _by @gkovats_

I see the large header up top and how it takes over roughly half the screen
![image](https://github.com/user-attachments/assets/51dd797e-d8c3-412e-948e-8f30cc51d305)

But that header is on other pages. Not sure how adding more space would help, but if you can add some CSS to the page you can target the meeting finder easily:
```html
&lt;style&gt;
#tsml \{ margin-top: 5rem; \}
&lt;/style&gt;
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1697">Discussion #1697</a></div>

</details>


### Tech Sharing Session [TSS] - Demo GitHub workshop for us non-techy volunteers. {#tech-sharing-session-tss-demo-github-workshop-for-us-non-techy-volunteers}

<details>
<summary>Show question &amp; answer</summary>

**Question**

TSS started from the TIAA forum to have workshops on what we do and help support volunteers coming and asking questions. The topic of GitHub is interesting to us, but most of us are nervous and do not know how to use GitHub. It does not have to be about Code4Recovery, but it might be helpful. As an amateur to know a little on how you use GitHub for Code4Recovery: projects, issues, discussion, etc... I was first directed to GitHub through TIAA, since I didn't know to come here first with my plugin problem.

I would like to know what you think and if there would be a volunteer here that is familiar with GitHub to do a workshop. We only do workshops quarterly now, and have April, July, Oct available on the 4th Tuesday of the month. 

Personally, I will be rotating on at the end of 2026, and I would like to know what I should be passing on to my incoming chair. I am in Area 39, and we are not looking for techy people but techy enough to catch on build a knowledge base our website admins, without always starting from scratch. Hopeful that this workshop we could help build interest for your team of trusted servants at Code4Recovery. - April

**Answer** _by @tim-rohrer_

Thanks April. This is something we could discuss internally about supporting this. 

Are you thinking the audience for such a workshop would be developers or people looking for help?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1851">Discussion #1851</a></div>

</details>


### Open Feedback Form in same window {#open-feedback-form-in-same-window}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Added $tsml_feedback_url to my child theme functions.php and pointed it to a "update meeting"-form.  And that seems to work not as expected.

 I ran into several issues and I don't know how to approach nor solve it. Any help would be appreciated.
 
 - The update-form opens in a new tab. In html it would be target="_self" to open a link in the same windows. How do open the form in the same windows after clicking on the [Update meeting info] in the left down corner on the single meetings page?
 
 - It seems I can only pass 1 parameter to populate form fields. Whenever I try to use more than 1 the form does not open, but the single meetingspage opens in a new window displaying the same single meeting page in the legacy interface. When I click on update meeting in that new window it throws me a 404.
 
Thanks in advance. I appreciate it!

**Answer** _by @MarcelCarels_

Solved half of the issues :)

This code added to child themes function.php opens the form in the same window. And only affects the [Update Meeting info]-button.

```
add_action('wp_footer', function () \{
?&gt;
&lt;script&gt;
document.addEventListener('DOMContentLoaded', function () \{
  function fixFeedbackLinks() \{
    document.querySelectorAll('a[target="_blank"]').forEach(function(el) \{
      if (el.href && el.href.includes('SLUG-OF-FORM-PAGE')) \{
        el.setAttribute('target', '_self');
      \}
    \});
  \}

  // First run
  fixFeedbackLinks();

  // TSML is a SPA → reapply on changes
  const observer = new MutationObserver(fixFeedbackLinks);
  observer.observe(document.body, \{ childList: true, subtree: true \});
\});
&lt;/script&gt;
&lt;?php
\});

$tsml_feedback_url = '../SLUG-OF-FORM-PAGE';
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1905">Discussion #1905</a></div>

</details>


### broken link {#broken-link}

<details>
<summary>Show question &amp; answer</summary>

**Question**

added pdf generator. can't find meeting list info. reverts to home page
Coigaa.org please help

**Answer** 

I assume you're talking about the plugin 12 Step Meeting PDF. That plugin is maintained by a different author and you'll need to contact him through his support site.

If you're talking about 12 Step Meeting List plugin PDF page, please provide specific steps you take to reproduce the issue, along with a run down of your website versions and other info, and we can reopen the issue.

Thanks.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/336">Issue #336</a></div>

</details>


### Research stale permalink issue {#research-stale-permalink-issue}

<details>
<summary>Show question &amp; answer</summary>

**Question**

we find that when people transfer a site to a new host (and maybe other situations) permalinks need to be refreshed

until this is done it means that the `/meetings` page is not working

then with just clicking "save changes" the page starts working

why is this? do other plugins have this problem? for example does [the events calendar](https://wordpress.org/plugins/the-events-calendar/)'s `/events` page also go down?

**Answer** _by @joshreisner_

this should be fixed now by https://github.com/code4recovery/12-step-meeting-list/pull/1291

thanks @gkovats !!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1266">Issue #1266</a></div>

</details>


### Error deleting plugin {#error-deleting-plugin}

<details>
<summary>Show question &amp; answer</summary>

**Question**

a user in #1341 reported an issue deleting the plugin, and i saw that too when trying it on our dev site:

&lt;img width="806" alt="Screenshot 2024-02-07 at 5 01 51 PM" src="https://github.com/code4recovery/12-step-meeting-list/assets/1551689/5a45d7ab-7f08-4a1b-afd4-81dc4e26de59"&gt;

**Answer** _by @joshreisner_

this should be fixed now in `3.14.30` (just released). thanks @gkovats !

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1342">Issue #1342</a></div>

</details>


### Update "Tested Up To" WordPress version 6.5 {#update-tested-up-to-wordpress-version-6-5}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

waynep@code4recovery.org

### Website With Issue

https://test-wp-65.local

### What happened?

Please update the readme with tested up to 6.5 (RC2) on the next tsml release. One peculiarity noted: the Author role has the same Admin access as the Editor role. Expected it to have the same lack of access permissions to TSML Admin as the Subscriber and Contributor roles. Research showed the current behavior was the same in version 6.3 and possibly before.

### What browsers are you seeing the problem on?

Firefox, Chrome, Opera, Microsoft Edge

### Relevant log output/errors

_No response_

**Answer** _by @dvcb_

Encountered no problems testing 3.14.32 on two sites using WP 6.5 RC3. Did not have time to explore the role permission issue seen by @kiyote33

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1390">Issue #1390</a></div>

</details>


### [Bug]: unable to publish Updated greyed out {#bug-unable-to-publish-updated-greyed-out}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

feedback@navienna.com

### Website With Issue

https://www.navienna.com

### What happened?

This bug is encountered via the backend.

![image](https://github.com/user-attachments/assets/390d40d2-fae7-4e2a-a381-de20a1fb7188)
While updating an existing meeting, there is no error message printed to indicate why the Update button is deactivated.

Kind Regards,
Jason D

### What browsers are you seeing the problem on?

_No response_

### Relevant log output/errors

_No response_

**Answer** _by @joshreisner_

yes, thanks @gkovats !

this fix has been released in `3.16.13`

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1614">Issue #1614</a></div>

</details>


### Syntax error when updating {#syntax-error-when-updating}

<details>
<summary>Show question &amp; answer</summary>

**Question**

https://www.fayaa.org/ reporting an error when updating the plugin:

&lt;img width="862" alt="Image" src="https://github.com/user-attachments/assets/1cbd696d-ce57-4f97-a9db-19a5012937a3" /&gt;

**Answer** _by @joshreisner_

right - thank you so much for joining github! yes i think contacting your hosting provider and getting them to resolve is the way forward here. i would ask for `7.4` or above because this is what wordpress prefers, but we support down to `7.2`

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1618">Issue #1618</a></div>

</details>


### [Bug]: One Page Theme Missing - Dead Link on Wordpress.org Plugin Site {#bug-one-page-theme-missing-dead-link-on-wordpress-org-plugin-site}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

johnd@slaafws.org

### Website With Issue

https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20run%20this%20as%20my%20main%20website%20homepage%3F:~:text=Also%20check%20out%20our%20One%20Page%20Meeting%20List%20theme.

### What happened?

// Screen Capture:
// ![Image](https://github.com/user-attachments/assets/e97337cc-54a8-4986-bc79-d44f13efe772)

See: https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20run%20this%20as%20my%20main%20website%20homepage%3F:~:text=Also%20check%20out%20our%20One%20Page%20Meeting%20List%20theme.

Links to this page which no longer exists: https://github.com/code4recovery/one-page-meeting-list

~jd

### What browsers are you seeing the problem on?

_No response_

### Relevant log output/errors

```shell

```

**Answer** _by @gkovats_

Fixed! https://github.com/code4recovery/one-page-meeting-list
Thanks @joshreisner !

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1698">Issue #1698</a></div>

</details>


### Contacts not showing {#contacts-not-showing}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi everyone, here is a video which will illustrate what seems to be a bug with contacts not showing. 
https://www.loom.com/share/bac5bf14c9644d04b1f06b8083be2b78

**Answer** _by @kiyote33_

Hi Julien, I'm looking into this, but looking at the code it appears by-design that the contacts only display for logged-in users. I will attempt to confirm this with the rest of the team, and get back to you soon.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/884">Discussion #884</a></div>

</details>

