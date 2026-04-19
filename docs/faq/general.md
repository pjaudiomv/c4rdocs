---
id: general
title: General
description: Other Q&A not fitting elsewhere.
sidebar_position: 15
tags: ["general"]
---
# General

Other Q&A not fitting elsewhere.

_107 questions — sourced from GitHub discussions & issues._


### Links to meeting pages reference old domain name {#links-to-meeting-pages-reference-old-domain-name}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We recently migrated our staging site (staging.al-anon-ak.org) to live (al-anon-ak.org). When we go to the meetings page, https://al-anon-ak.org/meetings/, all the links on that page reference the old url. (e.g. staging.al-anon-ak.org, not al-anon-ak.org). I ran a search replace on the database and this did not fix it. I cannot see anywhere in the website itself that references staging.al-anon-ak.org. Please assist.

**Answer** _by @honorcoding_

I don't know what fixed it. I did everything that was recommended, but 
none of that seemed to work. Then all of the sudden it was working. I 
think it might have been some lingering cache somewhere. I really have 
no idea.


On 9/1/2021 1:59 PM, Tech2Serve wrote:
&gt;
&gt; Hi @honorcoding &lt;https://github.com/honorcoding&gt; —
&gt;
&gt; Can you right up what you did to fix this? Or if one of 
&gt; @lovethecodelabs &lt;https://github.com/lovethecodelabs&gt;’ answers worked, 
&gt; mark that as the correct answer? This will help others who may have 
&gt; the similar issue.
&gt;
&gt; Thanks!
&gt;
&gt; —
&gt; You are receiving this because you were mentioned.
&gt; Reply to this email directly, view it on GitHub 
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/discussions/516#discussioncomment-1268875&gt;, 
&gt; or unsubscribe 
&gt; &lt;https://github.com/notifications/unsubscribe-auth/AVMYBCVQRQDAXXSLKHI3XKLT72O3LANCNFSM5DAVDRCQ&gt;.
&gt; Triage notifications on the go with GitHub Mobile for iOS 
&gt; &lt;https://apps.apple.com/app/apple-store/id1477376905?ct=notification-email&mt=8&pt=524675&gt; 
&gt; or Android 
&gt; &lt;https://play.google.com/store/apps/details?id=com.github.android&referrer=utm_campaign%3Dnotification-email%26utm_medium%3Demail%26utm_source%3Dgithub&gt;. 
&gt;
&gt;
-- 
John Schultz
Honor Coding
907-350-4520
***@***.***

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/516">Discussion #516</a></div>

</details>


### 'Submit Request' button is missing/chopped off after clicking Request a Change to this listing {#submit-request-button-is-missing-chopped-off-after-clicking-request-a-change-to-}

<details>
<summary>Show question &amp; answer</summary>

**Question**

For some reason the grey box to submit your change request has been cut off and is barely visible.
![changebox](https://user-images.githubusercontent.com/72889483/134724971-9fad5727-d1d6-41ef-9f0e-1aa8311a952c.jpg)


Any ideas how to fix?

**Answer** _by @namdrino_

I was able to fix it via CSS.  Thanks anyways !

On Sat, Sep 25, 2021 at 11:07 AM Adam Hardman ***@***.***&gt;
wrote:

&gt; Thanks for the help.  So the problem happens in both Safari on Mac as well
&gt; as iOS.  I don't think it's a font size issue.  You can see the issue live
&gt; by going to https://birminghamaa.org/wp/meetings/early-risers/ and
&gt; clicking Request a Change to this Listing.    Theme is called Solar
&gt; Energy.   Next step I'll open up a debugging console and see if any errors
&gt; show.
&gt;
&gt; On Fri, Sep 24, 2021 at 9:29 PM Tech2Serve ***@***.***&gt;
&gt; wrote:
&gt;
&gt;&gt; To each @kiyote33 &lt;https://github.com/kiyote33&gt;, we’re going to need
&gt;&gt; more information to help answer this.
&gt;&gt;
&gt;&gt; In my Safari, when I increased the font size, my theme (responsive) made
&gt;&gt; the entire block bigger, and the submit button was still present.
&gt;&gt;
&gt;&gt; If playing with the font size doesn’t fix things, please let us know what
&gt;&gt; theme you’re using, and open up a debugging console to see if any errors
&gt;&gt; are thrown. Sometimes weird things like this occur with Wordpress because
&gt;&gt; of conflicts with other plugins.
&gt;&gt;
&gt;&gt; Please let us know. We’d like to help you get this sorted out.
&gt;&gt;
&gt;&gt; —
&gt;&gt; You are receiving this because you authored the thread.
&gt;&gt; Reply to this email directly, view it on GitHub
&gt;&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/discussions/533#discussioncomment-1382509&gt;,
&gt;&gt; or unsubscribe
&gt;&gt; &lt;https://github.com/notifications/unsubscribe-auth/ARMDJC4MYNLDRDF4N2NZBI3UDUXXLANCNFSM5EWQY6DQ&gt;
&gt;&gt; .
&gt;&gt; Triage notifications on the go with GitHub Mobile for iOS
&gt;&gt; &lt;https://apps.apple.com/app/apple-store/id1477376905?ct=notification-email&mt=8&pt=524675&gt;
&gt;&gt; or Android
&gt;&gt; &lt;https://play.google.com/store/apps/details?id=com.github.android&referrer=utm_campaign%3Dnotification-email%26utm_medium%3Demail%26utm_source%3Dgithub&gt;.
&gt;&gt;
&gt;&gt;
&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/533">Discussion #533</a></div>

</details>


### How to list groups with several meetings? {#how-to-list-groups-with-several-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi!

What would be the proper way of listing several meetings held by the same AA group?

In Finland we don't list meetings per se, but groups. One group might have several meetings on different days.

How should these be entered to the system?

For example: Group Number One has two meetings, one on Mondays at 17 o'clock and another on Saturdays at 16 o'clock.

I guess they should be are separate entries to database. How to tell the db that these meetings have the same name, ie. the same group arranges these both meetings?

One solution would be adding the weekday after the name: "Group Number One Monday" and "Group Number One Saturday". But what if they change the meeting day from Saturday to Sunday? The name should be changed as well, also perhaps the URL too, and I think it would be confusing.

I have just come across this plugin and it seems wonderful. I have only superficial understanding of it, so maybe there is already a solution for this kind of situation.

**Answer** _by @tech2serve_

Hello!

TSML expects each meeting to be entered separately, but you absolutely can then associate them with a Group. 

Scroll towards the bottom of the edit meeting page and you'll see a block titled Contact Information. Select "Part of a group" and then enter the group name. After you complete and publish that meeting, move onto the next meeting for that Group. As you enter the second meeting, simply add the same group name for it, and you should the other information from the group populate.

It should be that easy!

If you have troubles, let us know and we can provide screen caps.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/599">Discussion #599</a></div>

</details>


### Rollback TSML {#rollback-tsml}

<details>
<summary>Show question &amp; answer</summary>

**Question**

It seems as though this plug-in is causing some issues with my server and is causing CPU spikes. I don’t know if anyone else is having the same issues but I would like to roll back to a version before 3.12. Is there a repository somewhere in which I could do that?

**Answer** _by @kiyote33_

Funny. I answered this question just last week when asked by Nicky in Ontario. If you install WP Rollback from the wordpress plugin directory, it will add a rollback option to the plugins in your installed list.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/620">Discussion #620</a></div>

</details>


### TSML update not appearing on website in browser of person making the change. {#tsml-update-not-appearing-on-website-in-browser-of-person-making-the-change}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We’re on wordpress and use the Twelve Step Meeting List plugin to manage our meetings. In the last week we started noticing that when we update a meeting, the person making the change doesn’t see the update on the website but others on other devices will see the update. We cleared the cookies on the browser making the change and then we see the update. This seems to be recent behavior (like the last week or 2) by the plugin - we used to make the change and the person making the change would immediately see the change on the website.

Is anyone else experiencing this? Any insights?

(I originally opened a question in TIAA - dup is here -  https://discourse.tiaa-forum.org/t/twelve-step-meeting-list-plugin/7452)

**Answer** _by @brianw-area24_

I'm in agreement with the answers on TIAA, and don't know that I can add a lot, other than a little more about the changes that were made.

In version 3.14, we changed the feed that's used by TSML UI to display the meetings. With this change, the feed comes from a file stored on the web server, thus bypassing the overhead of WordPress each time the feed is used. Version 3.14.1 fixed a bug by making a unique filename for the feed. This was needed because without this fix, on multisite installations of WordPress, each site was using the same file and therefore would display the same meetings. With 3.14.1, each site on multisite installations use a different file, therefore only display meetings from that site.

A side effect of this is that the browser cache may need to be cleared when meeting changes are made.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/779">Discussion #779</a></div>

</details>


### Only some meeting populate when looking at all days {#only-some-meeting-populate-when-looking-at-all-days}

<details>
<summary>Show question &amp; answer</summary>

**Question**

On our site, we're limited to 20 items that feed for some reason with your plug-in creator.
How do I increase that. See this page for example. I have 33 items i want to display, but only 20 appear. https://aadistrict15mi.com/meetings/

**Answer** _by @joshreisner_

huh, sorry about that! TSML UI renders meetings in batches of 10 as you scroll down the page so as not to overload the browser when there are a lot of meetings.

but for some reason, on your site, the scroll event is not firing properly when you reach the bottom. 

are you able to add custom CSS on your site? if so, try adding this:

```
body.tsml-ui \{
  height: auto;
  min-height: 100%;
\}
```

this should only affect the pages that TSML UI is on and hopefully allow the infinite scroller to work properly

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/799">Discussion #799</a></div>

</details>


### Usage statistics? {#usage-statistics}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I report website traffic at our monthly Intergroup meeting, including how much traffic the Meeting List page has gotten. Is there any way to measure how many hits we've had through the smartphone app or maybe how many user phones have accessed the JSON file, if that makes sense? Thanks!

Theron

**Answer** _by @tim-rohrer_

TSML doesn't track any usage statistics. 

But, tracking page views is something you can do with other Wordpress plugins. Companies like Automattic might be of use to you. I've not worked extensively with any of these so you're better off just doing some searching and experimenting.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/860">Discussion #860</a></div>

</details>


### Updating/Adding Types {#updating-adding-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I  would like to change the description for "Outdoor Meeting" to simply "Outdoor" since when it is selected from the dropdown, it displays as "Outdoor Meeting Meetings" and I think it looks weird.

![Outdoor-Meeting-Meetings](https://user-images.githubusercontent.com/62247421/190265848-a2031026-4ba8-4d18-9e18-237ba0e234dc.png)

To do this would I add the following to my child's functions.php?

```
if (function_exists('tsml_custom_types')) \{
		tsml_custom_types(array(
			'OUT' =&gt; 'Outdoor',
		));
	\}
```
And if I want to add a Promises type, how would I do this? Could it be on the same line such as 

```
if (function_exists('tsml_custom_types')) \{
		tsml_custom_types(array(
			'OUT' =&gt; 'Outdoor', 'PRO' =&gt; 'Promises',
	        ));
	\}
```
 Or something else? 

Finally, where can I see the list of types in use so I don't accidently replace an existing type?

**Answer** _by @joshreisner_

Yes that code looks good. I might put each type on a different line, but it should work either way so long as there's a comma separating.

Full list of types: https://github.com/code4recovery/spec#meeting-types

Looks like TSML has a bug and `Outdoor Meeting` should just be `Outdoor` (among other tweaks) - I've created a ticket: https://github.com/code4recovery/12-step-meeting-list/issues/924

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/923">Discussion #923</a></div>

</details>


### New meeting request page {#new-meeting-request-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there a "Request a new meeting" page? I used the "meeting list feedback" plugin and it works great for requesting changes to existing meetings. It also has a "New meeting" option, but you have to navigate to an existing meeting's details page. Is there a way to have a "Request a new meeting" form on its own page?

**Answer** _by @kiyote33_

Hi @marvabban Mark,
Unfortunately, at this time there is not a separate New Meeting page, we simply transform the same page depending on whether or not the user is making a "New" or "Change" request. What others with the same issue have done is to employ one of the widgets (like "Meeting Detail Bottom") to post a how-to information message on navigating to and using the radio buttons to make your request type choice. 
Hope this helps...

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/953">Discussion #953</a></div>

</details>


### PDF generator {#pdf-generator}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am trying to understand the description of the PDF generator in the plugin.
I failed... 

I am not sure what to do with the URL that I am given.
I have never worked with Google docs.
Is there an 'explain it to me as if I were a 9 year old' version that I can follow step by step in an easier way?

Thanks!

**Answer** _by @anchovie91471_

@OSAwebsite , I am one of the maintainers of PDF. I would be happy to take a look at what you are proposing as a potential enhancement. Could you mock up what you suggest and post it in the PDF issues? https://github.com/code4recovery/pdf/issues

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1142">Discussion #1142</a></div>

</details>


### User Feedback Emails {#user-feedback-emails}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Has anyone been getting feedback on errors when trying to send an update with the "Request a change to this listing" function, I am getting "Could not initiate mail function" and a few members have reported the same?

**Answer** _by @joshreisner_

Hi! This message comes from WordPress - it is telling you it's not able to send emails. See this topic for more info: https://github.com/code4recovery/12-step-meeting-list/discussions/1085

Setting up a SMTP plugin is probably your best next step, see @anchovie91471 's answer there

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1147">Discussion #1147</a></div>

</details>


### Tooltip -&gt; meeting types {#tooltip-meeting-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We do get some questions for explanation of meeting types. Not only from newcomers. We can add a page to the website explaining the types, another more convenient solution would be tooltips. 

Thanks in advance for any suggestions! 🙏

**Answer** _by @joshreisner_

hi we have a thing for this called a "type description" - you can read more about how to customize those here: https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20update%20the%20type%20descriptions%3F

we have a few built in descriptions for AA, but probably not for NA

we can talk about what the right UI is for these - tooltips typically don't work well on mobile, where we see most of our users, but there are probably improvements we can make in how we show them

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1319">Discussion #1319</a></div>

</details>


### Wordfence Security reports vulnerability after last plugin update {#wordfence-security-reports-vulnerability-after-last-plugin-update}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello
We use Wordefence Security and it reports a vulnerability after we just updated the plugin. WP version is 6.4.3. See:
https://www.wordfence.com/threat-intel/vulnerabilities/wordpress-plugins/12-step-meeting-list/12-step-meeting-list-31426-missing-authorization
No functionality issues seen.
Thanks

**Answer** _by @dvcb_

@DCO84770 We've been in touch with Wordfence about this erroneous report.  They updated their database this morning to correct the problem. We've confirmed that at least one site using Wordfence Pro is no longer reporting a vulnerability. Please try doing another full Wordfence scan and let us know if the problem persists.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1343">Discussion #1343</a></div>

</details>


### What is the code for "Business Owners" type? {#what-is-the-code-for-business-owners-type}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am trying to update the description for the Business owner" type, but I cannot find the code for that type in the list of meeting codes https://github.com/code4recovery/spec#meeting-types

I am guessing it was added at some point and not included in the list.

Does anyone know the code so I can update the description?

Thank you so much!

**Answer** _by @joshreisner_

that spec is currently just for AA - looks like the "Business Owner" type you're referring to for Debtors Anonymous is `B`

you can see the complete list here: https://github.com/code4recovery/12-step-meeting-list/blob/main/includes/variables.php#L925-L942

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1360">Discussion #1360</a></div>

</details>


### Can "Update Meeting Info" button be a web link? {#can-update-meeting-info-button-be-a-web-link}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Our meetings come via a TSML feed from a [BMLT server](https://bmlt.app). We also use the [BMLT workflow](https://bmlt.app/bmlt-workflow/) Wordpress plugin, which allows our users to request meeting updates via a form on our site. We would like to change the "Update Meeting Info" button to open the request form in a new tab (rather than opening a mailto: link in a new tab). Is there any way to do this?

**Answer** _by @SIA-WEBSUP_

See if this answers your questions;
- [Can I set a custom “Update Meeting Info” button in TSML UI? ](https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20set%20a%20custom%20%22update%20meeting%20info%22%20button%20in%20tsml%20ui%3F)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1831">Discussion #1831</a></div>

</details>


### How to configure the "Request a change to this listing" form? {#how-to-configure-the-request-a-change-to-this-listing-form}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Are there instructions somewhere on how to configure the "Request a change to this listing" form on the meeting detail page?

I've searched and couldn't find any information.

Thanks!

**Answer** _by @kiyote33_

Hi @toddjsaunders 
Thanks for providing the theme information. I was able to replicate your issue after installing your theme, which for some reason messed with our CSS.  I was able to get around it by inserting some override CSS which you can see in the following image:
![image](https://user-images.githubusercontent.com/57125427/152212735-a03b5889-4cc1-471b-a60e-99a5468774c8.png)
Hope this works for you. Let me know if we can be of any more help to you...

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/658">Discussion #658</a></div>

</details>


### Meeting meets twice a month {#meeting-meets-twice-a-month}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there any way to show a meeting meets on the 2nd and 4th Thursday, other than putting that in the notes?

**Answer** _by @kiyote33_

Hi @WoodieFL, You've already hit on our suggested answer to this question. Our plugin was designed to list reoccurring weekly meetings, and other than putting something in the Notes about your by-weekly meet there isn't anything else we can suggest.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/761">Discussion #761</a></div>

</details>


### Montly Meetings {#montly-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Greetings

We have a monthly speaker meeting and am curious how we can list it just for the fourth Saturday of the month?

Thanks!

**Answer** _by @kiyote33_

The 12 Step Meeting List is designed to list weekly meetings. If you have a regular meeting on the other Saturdays, you might mention your Speaker Meeting in the Notes field, much like many groups who note their birthday meetings on a particular week of the month.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/919">Discussion #919</a></div>

</details>


### Adding a 12 step program to the 12 step programs list {#adding-a-12-step-program-to-the-12-step-programs-list}

<details>
<summary>Show question &amp; answer</summary>

**Question**

How can we get the program Underearners Anonymous listed as an option on the 12-step meeting list plugin? Thanks

**Answer** _by @joshreisner_

hi @Underearners-Anonymous 

your program has been added in yesterday's release `3.14.17`

our plugin handles in-person and online based on data entered, not by adding specific types to the meetings manually -- we implemented it this way to reduce confusion when the information says one thing but the types say another. 

we are happy to add more types for you in the future, or you may add them to your site directly by [following the instructions here](https://wordpress.org/plugins/12-step-meeting-list/#my%20meeting%20type%20isn%27t%20listed%21)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1164">Discussion #1164</a></div>

</details>


### Once a month meetings {#once-a-month-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello! Do we have a way to list meetings only once a month? Our speaker meeting is only once a month. Thank you!

**Answer** _by @SIA-WEBSUP_

@eflashlogistics , the TSML plug-in is geared towards weekly AA meetings. Normally AA entities publish their monthly service meetings or a speaker exchanges on separate page from the AA meetings and not using the plugin.

Please see the following thread for more info: https://github.com/code4recovery/12-step-meeting-list/discussions/919

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1326">Discussion #1326</a></div>

</details>


### Availability of "towns within x miles of a given town" API {#availability-of-towns-within-x-miles-of-a-given-town-api}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I'm considering writing a batch application to generate meeting lists. 

Is there an API entrypoint that provides the subject function callable via JavaScript within this package? Thanks.

**Answer** _by @joshreisner_

hi @John-L you should be able to use TSML to help you with that. looks like the ct-aa.org JSON feed is unrestricted, which helps, otherwise step 1 would have been to get the sharing key from them. Instead, your base JSON URL looks like [https://ct-aa.org/wp-admin/admin-ajax.php?action=meetings](https://ct-aa.org/wp-admin/admin-ajax.php?action=meetings)

Step 2 is you get the latitude and longitude of the center point of the town you want to center the PDF on, eg Hartford CT. There are a lot of services you can use. We're developing a new one right now at [https://geo.code4recovery.org](https://geo.code4recovery.org) which can help me know that the center point for Hartford is 41.7658043, -72.6733723

Then you can append these query params to the base JSON feed: `&mode=location&distance=10&latitude=41.7658043&longitude=-72.6733723` You can adjust latitude and longitude values for each. In some cases you may also want to tweak the `distance` parameter

Then, optionally, step 4 is to use our PDF service to generate the PDF https://pdf.code4recovery.org - you paste in the URL you generated, and set your settings, and off you go.

Extra credit is you can bookmark the URL to our PDF generator for each of the 11 PDFs with the JSON feed already applied like this: [https://pdf.code4recovery.org/?json=https%3A%2F%2Fct-aa.org%2Fwp-admin%2Fadmin-ajax.php%3Faction%3Dmeetings%26mode%3Dlocation%26distance%3D10%26latitude%3D41.7658043%26longitude%3D-72.6733723](https://pdf.code4recovery.org/?json=https%3A%2F%2Fct-aa.org%2Fwp-admin%2Fadmin-ajax.php%3Faction%3Dmeetings%26mode%3Dlocation%26distance%3D10%26latitude%3D41.7658043%26longitude%3D-72.6733723) so you don't have to go through that process again and can just click Generate

Here's what the default settings look like for Hartford: 
[4.25x11_day-region-grouped_2025-06-07_directory.pdf](https://github.com/user-attachments/files/20639258/4.25x11_day-region-grouped_2025-06-07_directory.pdf)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1691">Discussion #1691</a></div>

</details>


### Quarter hour {#quarter-hour}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I have a request to show a meeting as starting at 8:45. Is there a snippet to use per meeting or something I can do to achieve this?

Thanks in advance,

Wendy
dunning.wendy@gmail.com

**Answer** _by @SIA-WEBSUP_

@wendydunning,

You can enter any time you like in the edit boxes. The dropdown lists 'hours' and 'half-hour' start times, but you're not limited to these choices:

&lt;img width="826" height="588" alt="Image" src="https://github.com/user-attachments/assets/d1a7dd16-0bfe-4b86-ad29-11a53d659288" /&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1853">Discussion #1853</a></div>

</details>


### Scheduling refresh {#scheduling-refresh}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello

I might be missing something, but I have to come in daily and refresh my data source.  Is there a way to schedule this or automate it?  My updates come from a separate JSON and then I have to update it daily.  
Thanks.

**Answer** _by @joshreisner_

HI @cohawkeye are you talking about refreshing your JSON feed in WordPress on the Import & Settings page?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/417">Discussion #417</a></div>

</details>


### Meetings page is empty {#meetings-page-is-empty}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I deactivated the plugin then re-activated, and the meetings page is now blank. 
I see this has happened to another group here: 
https://wordpress.org/support/topic/meeting-page-disappeared/

Please advise. 
This is pretty urgent.

**Answer** _by @julien-paris_

ISSUE RESOLVED: this came from a group which had the same problem: 
**Resolution: Resave permalinks**
Thanks, 
Julien

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/676">Discussion #676</a></div>

</details>


### Meetings missing {#meetings-missing}

<details>
<summary>Show question &amp; answer</summary>

**Question**

After Wordpress upgrade, my meetings page is blank. Meetings are listed on the adming page, but when I go to "Where's My Info?
Your public meetings page is [right here](https://kerncountyaa.com/meetings/). Link that page from your site's nav menu to make it visible to the public." there are no meetings shown. How do I connect the page to the data?

**Answer** _by @kiyote33_

This seems to be a common problem after WordPress upgrades, with a likely solution being to resave the **Settings Permalinks.**  Give that a try...

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/699">Discussion #699</a></div>

</details>


### Remove Header Link {#remove-header-link}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am a self-teaching AA website developer and have been working with this app - love it! I can't seem to remove the link from the header of the page. I've looked everywhere! Site is https://aaseiowa.com/meetings/. I want the top header on every page but want to remove the link just below. Thank you!!!!!!! 
![2022-03-18 11_12_14-Meetings - AA SE Iowa](https://user-images.githubusercontent.com/101887014/159040721-035aa56d-c1b9-427b-bc5f-3d7dc643e013.png)

**Answer** _by @joshreisner_

i helped her over here in this thread on TiAA: https://discourse.tiaa-forum.org/t/beginner-help-needed/7365/6

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/742">Discussion #742</a></div>

</details>


### Wrong day displayed for Sunday meetings {#wrong-day-displayed-for-sunday-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am seeing  some weird behaviour of the meeting list.   The meetings that are on Sunday display as being on Monday.  If I select to just show sunday meetings it shows the correct meetings but labels them as Monday

&lt;img width="917" alt="Screenshot 2022-09-05 at 09 43 21" src="https://user-images.githubusercontent.com/112857352/188407798-f461d11c-560e-433e-ac92-5f12f531b1c8.png"&gt;

&lt;img width="420" alt="Screenshot 2022-09-05 at 09 46 32" src="https://user-images.githubusercontent.com/112857352/188408202-c619e510-507b-42ba-af28-6c86395fca2d.png"&gt;

&lt;img width="837" alt="Screenshot 2022-09-05 at 09 48 15" src="https://user-images.githubusercontent.com/112857352/188408540-1c90188d-2927-4d96-af03-09f65361093d.png"&gt;

The site is aaportugal.net

Any help/hints greatly appreciated.   Derek

**Answer** _by @DerekDen_

Restarting Safari after I cleared the cache was needed.  It's now fine.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/903">Discussion #903</a></div>

</details>


### Implementation of Distance Display in Kilometers for Users in Poland {#implementation-of-distance-display-in-kilometers-for-users-in-poland}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

lukasz.czulak@gmail.com

### Requested Feature/Enhancement

Hi

I have noticed that in the current version of the "12-step-meeting-list" project, distances are displayed only in miles. I would like to request the implementation of an option to display distances in kilometers, which is the standard in Poland. This change would significantly facilitate the use of the application for users from my country, where the metric system is commonly used.

I suggest that users be given the option to select the unit of distance (miles or kilometers) in the application settings. This flexibility would not only improve the usability of the application in Poland but also in other countries where the metric system is used.

Thank you in advance for considering this proposal, and I look forward to its favorable consideration.

Sincerely,
cZuLi

**Answer** _by @dougie-wougie_

I use miles, but I did see it in the setting. 
![CleanShot 2023-11-29 at 04 56 29](https://github.com/code4recovery/12-step-meeting-list/assets/58369176/e7671895-a2d6-4898-9a42-ce4aab1bfb5c)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1272">Discussion #1272</a></div>

</details>


### Ability to add a Turbobridge URL {#ability-to-add-a-turbobridge-url}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi everyone! 
we use TurboBridge as a phone service for our meetings. It has both a phone number and a web link. 
I would like the ability to add the URL, but it does not recognize TurboBridge. May I have help with this? 

Example of meeting with TurboBridge:
https://chroniceaters.org/meetings/?meeting=bbsg-retire-at-night-9

TurboBridge webcall URL: 
https://turbobridge.com/webcall-conf.html

Thank you for your attention! 
Tatiana T., Chronic Compulsive Eaters Anonymous

**Answer** _by @SIA-WEBSUP_

@taniacherry ,  there is a way for you to add a custom online meeting provide

- see: https://github.com/code4recovery/12-step-meeting-list/discussions/1230

will this solution suffice for you?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1679">Discussion #1679</a></div>

</details>


### Security Risk? {#security-risk}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Greetings,
Regarding the basic PDF schedule, would there be an administrative security risk if the links to the pdf's were published and accessible to visitors of our website?

**Answer** _by @joshreisner_

I can't think of one, but can you be more specific about what type of risk you're thinking of?

Also are you referring to the PDF service at pdf.code4recovery.org, or in your WordPress plugin?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/511">Discussion #511</a></div>

</details>


### AA Ride Share App {#aa-ride-share-app}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello, good morning. I'm Teresa from Cali... I created a sober ride share app that is only based out of Orange County at the moment. I'm hoping to get some feedback on it, and possibly some ideas on how to spread the word and find an effective way to input data for meetings nationwide... here is the URL, at the moment it's suggested to download onto your home screen to use like an app, I am also considering developing it into an apple app for itunes if the idea is admired.

https://sober-ride-share.replit.app

Please comment with feedback and ideas! Thanks!

**Answer** _by @joshreisner_

Thanks Teresa, this looks really awesome, and fills a very real need. It was great to talk on the phone with you last night.

We need to figure out how to get you more meeting data, and also potentially a way for your app to share data with other apps or websites (such as which meetings have rides available).

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1893">Discussion #1893</a></div>

</details>


### Meeting list by day {#meeting-list-by-day}

<details>
<summary>Show question &amp; answer</summary>

**Question**

My members have asked if there is a way to have the meeting list populate for the day (weekday) it is opened. Right now it seems to populate by the last day it was opened. And when I clicked on the dropdown to select my today, it did not go anywhere when I clicked on Enter. Any help would be appreciated.

**Answer** _by @tech2serve_

Hi @trivalleyaa,

Is this your website? https://trivalleyaa.org/

The expected behavior is for the current day's meetings to be shown. Check out our [demo site](https://demo.code4recovery.org/meetings) for TSML.

When a website shows the incorrect day, as yours is doing, it is usually stems from one of two causes:

1) Server side cache needs to be cleared,
2) There is an error on the site or some other plugin causing the problem. 

For the first one, please work with your hosting provider to determine how to clear the cache if you don't already know how. If the day then shows properly, you know you've found the source of the problem, but you may need to work on finding the real cause. For one site I know of, the problem was the plugin the hosting company used for caching. 

To explore the second possibility, please open a dev console and watch for errors, and then try and resolve them. I do see missing graphics on your home page, but not too much exciting on the meeting page so...

Please start with these two steps, and keep us posted.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/730">Discussion #730</a></div>

</details>


### Adding new meeting types {#adding-new-meeting-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Greetings. I added to the functions.php for two new meeting types. I am only getting one. Is there a proper way to write this statement? 

if (function_exists('tsml_custom_types')) \{
    tsml_custom_types(array(
        'XYZ' =&gt; 'Young Adults',
    ));
\}
if (function_exists('tsml_custom_types')) \{
    tsml_custom_types(array(
        'XYZ' =&gt; 'Literature Study',
    ));
\}

**Answer** _by @brianw-area24_

If you're doing an AA web site, then I recommend using the existing types whenever possible, because they match what is used by the Meeting Guide Application, or you could get unintended consequences. Best case, your types just won't show up Meeting Guide, and worst case, they will have and incorrect type in Meeting Guide. For example using LS for 'Literature Study' would go into Meeting Guide as 'Living Sober', because LS is a predefined type. On way to prevent this is to us something like MY as a prefix, so you'd have MYYA and MYLS. If you're not going connect with Meeting Guide, or have your meetings imported by other sites, then this isn't as much of a consideration

As for hiding types, the form for adding/editing meetings should only show the meeting types that are being used on your site, so effectively, the rest are hidden. There is a link on the form where you can toggle between seeing or not seeing the types that aren't in use. Also, the dropdown field on the meetings page should only show types that being used.

The codes used by the different fellowships are in code, probably the easiest place to see them are on GitHub, at https://github.com/code4recovery/12-step-meeting-list/blob/main/includes/variables.php, starting at line 571, continuing through the end of the file.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/869">Discussion #869</a></div>

</details>


### Switching from private to public for contact info {#switching-from-private-to-public-for-contact-info}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi, I have just tried to switch our site to have public contact info (was previously private), and no change occurs on the listings.  Have I missed some other change I need to do?.

Our site is aaportugal.net

&lt;img width="420" alt="Screenshot 2022-09-16 at 11 00 45" src="https://user-images.githubusercontent.com/112857352/190614199-9087703c-6296-40b4-a161-e2409f064b66.png"&gt;
&lt;img width="946" alt="Screenshot 2022-09-16 at 11 00 04" src="https://user-images.githubusercontent.com/112857352/190614206-b2edd995-ab28-4cca-8ce4-89220e76c924.png"&gt;
&lt;img width="383" alt="Screenshot 2022-09-16 at 10 59 17" src="https://user-images.githubusercontent.com/112857352/190614207-46cd9f18-de4d-41ed-ab6a-bc1d6f1f4cd5.png"&gt;

in fellowship, Derek

**Answer** _by @joshreisner_

Hi @DerekDen - support in TSML UI is coming soon, probably within the next week or so. https://github.com/code4recovery/tsml-ui/issues/253

For the time being, if you prefer, you can switch to the "Legacy UI"

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/925">Discussion #925</a></div>

</details>


### 12 Step Meeting Wordpress Plugin - and PDF generator {#12-step-meeting-wordpress-plugin-and-pdf-generator}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am a newbie to website building and wordpress.  I inherited an antiquated website that was created with HTML about 20 years ago and I am tasked with developing a new website using wordpress.

One of the most important parts of the new website is the meeting list and I am using 12 step meeting plugin - which is fantastic!  I have successfully installed the plugin and have entered all the relevant data.  I also want the user to be able to generate a PDF of the meeting schedule - using the PDF generator in the plugin and I want to have a link on the home page for the pdf meeting list but I cannot figure out where (the url) for the pdf meeting list is.

can someone help me with this?

site = d48-wp-2023.district48aa.org

**Answer** _by @joshreisner_

hi @jlabenberg - our PDF generation system is accessed from the import / export page of the plugin. it's designed for site admins to generate a printed list, not for individual users to generate on-the-fly PDFs

many offices print new lists periodically, for example monthly - one approach you can take is to upload that PDF as a static asset to WordPress and link to it from your site navigation, or from a special page, eg "latest printed list (apr 1)" 

we recommend against putting the link on the meeting list page itself, as some offices do. this prioritizes the edge case of wanting to print a list over the very common use case of simply needing to find a meeting

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1114">Discussion #1114</a></div>

</details>


### Supporting timezones in the Wordpress plugin {#supporting-timezones-in-the-wordpress-plugin}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,
I'm experimenting with the TSML wordpress plugin for Debtors Anonymous Australasia: https://debtorsanonymous.asia/meetings/

We've got meetings in multiple timezones and I can't figure out how to specify the timezone for a particular meeting. 

e.g. https://debtorsanonymous.asia/meetings/?meeting=carlisle-perth-da should be in Perth time but it shows the meeting in Sydney time (which is the default timezone for my wordpress instance)

Is there documentation for this?

**Answer** _by @joshreisner_

hi @jeznag sorry, the short answer is no, you currently can't specify time zone on the TSML meeting entry screen -- we have an [open issue](https://github.com/code4recovery/12-step-meeting-list/issues/930) to address this.

the plugin was originally designed for - and mainly serves - smaller regions within a single time zone. there are a few tz-spanning service entities ([example](http://alcoholics-anonymous.eu/meetings/)) that do use it to list meetings, they must use the "Legacy UI" because that isn't timezone-aware like the newer "TSML UI" is. so that's one alternative: switch to Legacy UI and leave it to users to interpret the timezones.

there is another possible alternative, which is to enter your meetings in a google sheet with a timezone column, TSML UI can either connect to this directly directly or through a proxy we developed. more info on using TSML UI without the plugin is here: https://tsml-ui.code4recovery.org/

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1157">Discussion #1157</a></div>

</details>


### Thinkin' out loud {#thinkin-out-loud}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I created and maintain an H&I site and our AA Convention site. Can the meeting app be used for panels and convention schedules? Any suggestions? I have it working but just looking at optimum solutions. 

d

**Answer** _by @joshreisner_

thanks for the vote of confidence! we would not recommend TSML for other uses than listing weekly recovery meetings but like @kiyote33 noted, it's open source software so developers are welcome to adapt it to other purposes

i hear good things about [the events calendar](https://theeventscalendar.com/) and i know other event management systems have been discussed on the tiaa forum. if it were between TSML and time.ly i would choose time.ly 👍

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1176">Discussion #1176</a></div>

</details>


### Alateen "Type" on backend appearing as "Young Person" on frontend {#alateen-type-on-backend-appearing-as-young-person-on-frontend}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Do you know why when tagging a type on the WordPress backend i.e. "Alateen", it appears as "young Person" on the website.

View link: 
https://staging.al-anon.org.au/find-a-meeting/?type=young-people&search=alateen

Our users will be looking for "Alateen" meetings on this page and searching for alateen so we want to make this clear by using the same terminology.

Please confirm if this is possible.

Cheers,
Natalie

**Answer** _by @joshreisner_

&lt;img width="794" alt="Screenshot 2023-10-27 at 7 32 41 AM" src="https://github.com/code4recovery/12-step-meeting-list/assets/1551689/29f7cc30-f5d1-428f-92fa-7e6d95d7c425"&gt;

hi @nataliefaith2 - do you have `Melbourne` selected at WordPress Dashboard &gt; Settings?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1241">Discussion #1241</a></div>

</details>


### Generating printable file for meeting directory. {#generating-printable-file-for-meeting-directory}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello!
I am the office manager for the AA central office in St. Louis. (aastl.org) Most of the content here is WAAAY beyond me, so thanks for reading my novice-level question! We have a WordPress website, with the TSML plugin for our meeting directory.

I recall that at our annual intergroup/central office seminar, last fall in Cincinatti, we were told that the TSML plugin would soon include a way of generating a printable file for paper meeting directories. Has this project been completed?

I have a volunteer helping me to create a paper/printed directory, and I need to let her know if that project is complete, or still in the works? 

Thank you!

**Answer** _by @thessnake03_

The only bad question is one that doesn't get asked.

You can export your current meetings as a pdf. In the WordPress dashboard, go to Meetings, then import/export. Click the 'Generate PDF' button.

![screenshot_2024-07-23_at_4.18.23___pm.png](https://github.com/user-attachments/assets/c73bbad6-fa8d-4a32-8bb1-40debef2dbb9)

Hope that helps

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1473">Discussion #1473</a></div>

</details>


### Update meeting info {#update-meeting-info}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello!
I have been using the newer interface for meetings for some time. Recently I am getting notifications from members that the page that opens when option is clicked is blank. -- If this has been addressed before I apologize. This organization has a distinct format they would like the changes to be requested with. I have a page on the website dedicated to this end. Is there a way in the newer user interface to point to that form?  I've seen something regarding changing things in the theme. I am afraid to edit these things without directions specific to the site. I don't have a child theme though I don't mind repeating changes after updates. 
The site is "https://alanonva.com -- the form in question that I would like the Update link to point to is "https://alanonva.com/nvsc-group-record-change/".  If this is too much to ask I understand - I only know enough about all this to be dangerous! For the time being I have reverted to the Legacy UI in the hope that that form will at least appear. 
Thanks for any input. You guys are equal parts intelligent and talented, but mostly just awesome. 
Wendy

**Answer** _by @SIA-WEBSUP_

@wendydunning, firstly, I believe you are using a secondary plugin, [Meeting Feedback Enhancement](https://wordpress.org/plugins/12-step-meeting-list-feedback-enhancement/) that is hooking into that button.

I would deactivate this secondary plugin first and make sure you are getting the 'vanilla' update forms in Legacy UI. In TSML UI , I think the default behavior is starting an email to the default admin email set on the TSML admin screen.

Then, if everything looks good there, you can customize where the "Update Meeting Info" button takes you by following the instructions found in the README. 
- see: [Can I set a custom “Update Meeting Info” button in TSML UI?](https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20set%20a%20custom%20%22update%20meeting%20info%22%20button%20in%20tsml%20ui%3F)

Please report back either way if this works for you!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1749">Discussion #1749</a></div>

</details>


### New Meeting - Sip of Sobriety {#new-meeting-sip-of-sobriety}

<details>
<summary>Show question &amp; answer</summary>

**Question**

GM folks, 

Question. Atlanta added a new meeting "[Sip of Sobriety](https://atlantaaa.org/meetings/sip-of-sobriety?search=sip)" in Flowery Branch 4 days ago. It's showing on our site but not on the app.  

You may notice there is a Sip**s** of Sobriety (plural) in Buford, but that's not the group in question. Any thoughts? 
&lt;img width="491" height="750" alt="image" src="https://github.com/user-attachments/assets/a14cb551-fbc4-4d3f-afaf-18bc21439a40" /&gt;

**Answer** _by @SIA-WEBSUP_

@ATLCOTech , you should follow up with the meeting guide app team directly at [appsupport@aa.org](mailto:appsupport@aa.org). 

All the meetings in questions ( _Sip of Sobriety_ in Flowery Branch and _Sips of Sobriety_ in Buford ) appear in your [feed](https://atlantaaa.org/wp-admin/admin-ajax.php?action=meetings), so if a meeting you just added hasn't yet  appeared in the app, it's safe to assume that meeting guide app hasn't pulled the feed since new meeting was added.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1794">Discussion #1794</a></div>

</details>


### Search bar don’t work {#search-bar-don-t-work}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello, the search for meetings don’t work on our website https://russianspeakingaa.org/meetings/?tsml-day=any If I write any city - it shows zero results while there are meetings on the website in this city.  For example, Chicago. 
What can be the reason? 
Looks like it works on windows, but don’t work on iOS, mobile, iPhone 
We will appreciate any help

**Answer** _by @SIA-WEBSUP_

@badbyetomorrow-lgtm, 

Looking at the console log, I suspect there may an issue with one of the other plugins, specifically SitegroundOptimizer.

&lt;img width="1224" height="265" alt="image" src="https://github.com/user-attachments/assets/c1c3e087-e2d0-4a4e-b24e-fdc635256c72" /&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1850">Discussion #1850</a></div>

</details>


### Plugin Check "Escape Output" Warnings {#plugin-check-escape-output-warnings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Running WordPress's own Plugin Check plugin shows a lot of warnings.

![Screenshot 2024-11-16 at 08-03-16 Plugin Check ‹ Code for Recovery — WordPress](https://github.com/user-attachments/assets/59564382-ef95-483c-b5dc-f7d47e9e7268)

**Answer** _by @joshreisner_

going to close this - merged three PRs that handle all of the "Escape Output" warnings. there are many new ones that have popped up in the meantime however. we can document in new issues and handle them in new PRs

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1569">Issue #1569</a></div>

</details>


### how to integrate 12 step meeting finder in react js {#how-to-integrate-12-step-meeting-finder-in-react-js}

<details>
<summary>Show question &amp; answer</summary>

**Question**

i need to display all the 12 step meeting list that happen near by user, so plese refer any doc  for guidence..

**Answer** _by @joshreisner_

hi, we do have a react-based meeting finder called TSML UI

in our FAQ we do have items on:
* [enable "Near Me" mode](https://github.com/code4recovery/tsml-ui#enable-near-me-mode)
* [importing into react applications](https://github.com/code4recovery/tsml-ui#can-i-import-tsml-ui-from-npm-for-use-in-a-nextjs-or-gatsby-project) (it's not possible to do that yet)

instructions on how to embed it via HTML are here: https://tsml-ui.code4recovery.org/

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1065">Discussion #1065</a></div>

</details>


### Feedback on AA Mtg List use on recoverydharma.org {#feedback-on-aa-mtg-list-use-on-recoverydharma-org}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I recently began RD and am volunteering as well. I was tapped to help fix mtg mgmt and the website. It was clear after some research using this plugin was the way to go, especially since the site ran on WP.  Thanks to the 12 step meeting list team who created and maintained this with the community. It truly is going to help ease non profit management of RD mtgs and help people find meetings which is the real win.

The site use a devi theme and some custom work done by others. I am open to constructive feedback on the [implementation](https://recoverydharma.org/meetings/) of the plugin and anything else Wordpress/site relevant that could help the community.

Thanks again!

**Answer** _by @joshreisner_

nice job! i helped out with the refuge recovery website many years ago so it's great to see the plugin serving this community again

looks like the appearance on mobile could be an area of focus going forward - there's a gap to the left and right of the list caused by a css rule coming from the theme `.container \{ width: 80%; \}` - would be great to get this edge-to-edge to use the full real estate on small screens. 

also if there's a way to get the meeting list to appear above the fold that would help get orient users on the page

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1382">Discussion #1382</a></div>

</details>


### Change title {#change-title}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there any way I can change the `&lt;h1&gt;` title of the meeting list page and also the `&lt;title&gt;` tag?

**Answer** _by @joshreisner_

&lt;img width="1265" alt="Screenshot 2024-05-22 at 7 19 46 AM" src="https://github.com/code4recovery/12-step-meeting-list/assets/1551689/9a0c5806-2eb1-4265-b437-8c8bdb19e8fc"&gt;

the text that reads "Meetings in Campbell" in this screenshot? what did you want it to say?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1426">Discussion #1426</a></div>

</details>


### Link to PDF document? {#link-to-pdf-document}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is it possible to link to a PDF document in a meeting listing? HTML is removed from the Meeting Information Notes.

**Answer** _by @anchovie91471_

It isn't. The notes are stripped, I believe, because they are used in the meeting finder app, which doesn't allow HTML. Allowing for code in the notes would be a security issue most likely.

What sort of PDF are you trying to link to? It's possible to create a custom template override if you use the Legacy UI.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1659">Discussion #1659</a></div>

</details>


### Temporary Closed Meetings {#temporary-closed-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Y'all, 
Question, we have a meeting that will be temporarily closed while they repave the parking lot. Is it better to mark them as Temporary Closed or put them in draft mode?

**Answer** _by @SIA-WEBSUP_

@ATLCOTech,

This really comes down to personal preference of whoever maintains the list or the group conscience of your AA entity

IMHO, if the closure is short and you’re confident the meeting will resume, I’d mark it Temporarily Closed (TC) rather than Draft/Private. In our area we use TC for:
- Short-term closures (like your parking-lot repaving example)
- Seasonal meetings during their off-season

### Pros of using TC / Cons of using *Draft* or *Private*
- TC keeps the meeting visible (clearly labeled as “Temporarily Closed”) so people know it exists and will return.
- TC keeps the meeting in exports/feeds/backups and preserves its stable ID/URL.


### Things to consider
- marking meetings as *Draft* or *Private* hides it on the meeting list 
- BUT, it also excludes it from exports/feeds—so a backup done during that window won’t include it.
- You could add a short note with dates/reason, e.g., “Closed Sept 8–12 for parking-lot repaving; resumes Sept 13.”

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1741">Discussion #1741</a></div>

</details>


### Display current day on meeting list page as default {#display-current-day-on-meeting-list-page-as-default}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When TSML page is displayed it shows "Any Day".  How to show current day ( Saturday or Friday etc) when viewed .   https://bowlinggreenaa.org/meetings/

**Answer** _by @joshreisner_

thanks @pjaudiomv - one thing that came up when talking to @One-Rook about this in person was their computer's time was not set correctly, so they were seeing unexpected meetings at the top of the list

most people see the next meeting in time at the top, which is typically more useful than the today view - since that view starts at the beginning of the day and ends and the end of the day

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1826">Discussion #1826</a></div>

</details>


### Increase "upcoming" timelimit {#increase-upcoming-timelimit}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello,
My idea is: When "upcoming" time is selected in list to display meetings which start at the top of the hour for up to 10 minutes (+/-) into the hour. Let people join meetings in progress.

Thanks!

**Answer** _by @joshreisner_

I think the quickest way to do this is to update this line of that file: https://github.com/code4recovery/12-step-meeting-list/blob/master/includes/filter_meetings.php#L79

```
$this-&gt;now = current_time('H:i');
```

I think you just want to subtract 10 minutes from now basically

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/107">Issue #107</a></div>

</details>


### user interface is supposed to use an ajax call to retrieve the meeting list upon delimiter selection.  It currently doesn't. {#user-interface-is-supposed-to-use-an-ajax-call-to-retrieve-the-meeting-list-upon}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We received the following for https://nc23.org/meetings/. Any guidance is appreciated.

_The mobile meeting finder site's user interface is supposed to use an ajax call to retrieve the meeting list upon delimiter selection.  It currently doesn't._

**Answer** 

Hey @onemooresam, I'm unclear what you're asking.

Can you elaborate what is meant by "mobile meeting finder"? Are you referring to TSML when viewed using a mobile device? Or the Meeting Guide app? Or something else.

Please have the originator help us understand what user experience isn't being met.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/147">Issue #147</a></div>

</details>


### Upcoming Meetings Widget Pull Multiple Days? {#upcoming-meetings-widget-pull-multiple-days}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey , just wondering if there is a way to have the Upcoming Meetings widget pull meetings for say, 2-3 days out. The Alano club only has one or two a day, so it would be beneficial to see more there.

Thanks
Alex

**Answer** 

The short answer is no. We discussed it in the past, but the purpose of the widget is for people to quickly see remaining meetings that day. We do provide the option for you to add a message, if there are no additional meetings, stating someone should look at the complete meeting list for next day options, or whatever you want the message to say.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/151">Issue #151</a></div>

</details>


### Return of "Mandatory Closing" time {#return-of-mandatory-closing-time}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When creating a new meeting, it again will not permit the entry of a blank ending time.
If editing an existing entry it does appear to permit leaving the close time empty.
Using latest versions of Wordpress & plug ins.
Cory Billard
Webmaster
Nassau Intergroup

PS - why has this board become so obnoxious to use all of a sudden

**Answer** 

I just tested using the beta version 3.8.0, and I did not having any trouble adding a meeting without an ending time (I left it blank). I then added an ending time to another meeting, updated it, and confirmed the meeting included an ending time. Next, I edited that meeting and remove the end time, and updated the meeting. Back on the front end, no end time is shown for the meeting.

So, it appears that perhaps the problem you're experiencing is related to either Wordpress itself (we've not tested extensively with the Wordpress 5.5 series) or something else with your setup.

Can you provide a screen cast or at least screen caps of what you're experiencing when you try and remove the ending time and update the meeting?

We're also looking for beta testers if you're willing to help out in that regard?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/164">Issue #164</a></div>

</details>


### Want to query to display certain meetings {#want-to-query-to-display-certain-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Simple question I hope.  I have a query to separate records from the Meeting room database.  This is what I put into my WordPress site: **https://sca-recovery.org/WP/meetings/?tsml-day=any&tsml-type=ONL

This is fine if I want records where the type is equal to ONL.  I would like to construct a query that gives me everything NOT equal to ONL.  I tried "&lt;&gt;"  but that does not seem to work in WordPress.  Is there another symbol for NOT Equal I can use?

Thanks for your help.

Greg

**Answer** 

Regrettably, Wordpress doesn't support that type of search.

We will be working on some changes for how we handle attendance options (i.e., in-person, online only, hybrid), but no promise on a timeline.

I'm going to close this under the assumption I've answered the question (even if it isn't what you were hoping to hear :-) ).

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/212">Issue #212</a></div>

</details>


### Seems to be stuck at 79% syncing {#seems-to-be-stuck-at-79-syncing}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi guys... When I refresh the meetings, I am stuck with 79% syncing. Is there any way for me to successfully sync it? 

Also, is there a way to automate the refresh instead of manually clicking the button, it will automatically sync at the background let's say every week? 
![Screen Shot 2020-11-12 at 4 44 30 PM](https://user-images.githubusercontent.com/11605367/98917737-b49b2f80-2507-11eb-92aa-b2e15719b806.jpg)

**Answer** 

Hey @volaer —

At first blush, this appears to be something conflicting on your site. Please start by opening a debugging/JavaScript console so you can monitor for errors while running tests. 

Disable other plugins to see if the problem persists.

If you’re running Wordpress 5.5, please ensure you have the Enable jQuery Migrate Helper plugin installed and active.

Clear your browser cache. And if you have access to website cache, clear that as well. 

Report back with your findings and we’ll go from there.

There is no automatic update process. A friend in Europe developed the potential capability but then he disappeared, and we’ve not been able to get it to work. And unfortunately, none of us seem to have time to focus on it right now.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/218">Issue #218</a></div>

</details>


### Adding the plugin adds "Archives" to the meeting page {#adding-the-plugin-adds-archives-to-the-meeting-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Description**
For several sites that have added the 12-step-meeting-list plugin the word "Archives" has been added to the page title.

**Expected behavior**
The ability to edit or remove the title after adding the plugin.

**Screenshots**
![gebaca org](https://user-images.githubusercontent.com/8882864/105620346-e276dd00-5db0-11eb-8ddb-5706b6224c60.PNG)
![aca-arizona org](https://user-images.githubusercontent.com/8882864/105620359-0e925e00-5db1-11eb-846c-7ba8fba887f3.PNG)

**Answer** _by @97eighty_

@jeremyscarlson In looking at the demos It appears that this is the archive title the theme is generating. You might try a custom function placed in your themes functions.php.

Something like:

```
function jc_tsml_archive_title($title)\{
    if ( is_post_type_archive('tsml_meeting') )\{
        $title = 'Meetings;
        return $title;
    \}
    return $title;
\} 
add_filter( 'pre_get_document_title', 'jc_tsml_archive_title', 9999 );

```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/271">Issue #271</a></div>

</details>


### show in-progress meetings {#show-in-progress-meetings}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I would like to be able to show meetings that are currently in progress using the "tsml_next_meetings" short-code. So it doesn't disappear from the list until the end of the meeting.

I love the plug-in. Thanks for your service.

**Answer** _by @97eighty_

@matt-williamson I've had requests to make this work too. Some attendees arriving 5 minutes late were having difficulty getting into virtual meetings by going to the front page. I solved this by writing my own shortcode and changing the date outside of tsml. The solution, I believe, is to add some attributes to the shortcode. I've been wanting to tackle this for the upcoming UI for tsml. Perhaps now's a good time.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/277">Issue #277</a></div>

</details>


### Is it possible to restrict the search autocomplete to one country only? {#is-it-possible-to-restrict-the-search-autocomplete-to-one-country-only}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am website administrator for AA Victoria in Melbourne, Australia. Love this plugin, it has made my job so much easier. Please carry on 'keeping it simple'. The search box doesn't allow the user to see the autocomplete fully so we get locations in the wrong Countries! Is it possible to restrict the search autocomplete to one country only?

**Answer** _by @joshreisner_

Hey! So Google has something called a "places autocomplete" but this is not that -- this is a normal geocoding request. If you type in "Newport" into the search then TSML will geocode that and save it to the cache. 

When you search the Google Geocoding API for "Newport" with no other parameters it returns two results, the first in Rhode Island and the second in Tennessee. Your network location is not relevant, so a VPN won't affect this.

There are options that can be passed to the geocoder. We have code in our `tsml_geocode_google` function to bias the geocoder to the map viewport, they are here: https://github.com/code4recovery/12-step-meeting-list/blob/4a4b530c692319cf020315abe9c6219f04f37654/includes/functions.php#L634-L637

I would first check to make sure that is working. Another option would be to look into region biasing, in this case finding an option to pass `&region=au` to the geocoder. More info on that is here: https://developers.google.com/maps/documentation/geocoding/requests-geocoding#RegionCodes

Are you using Google as your geocoder? It might be good to clear your geocoding cache and see if you can capture the URL of the geocoding request that's fired to see what exactly is getting sent.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/278">Issue #278</a></div>

</details>


### Changing/adding text for 'Request a change to this listing' feature on Meeting Detail page {#changing-adding-text-for-request-a-change-to-this-listing-feature-on-meeting-det}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi.  Quick question - is there a way I can modify the text displayed after hitting 'Request a change to this listing' feature on the Meeting detail page.  Right now it says "Use this form to submit a change to the meeting information above."  I would like to add some additional text to clearly specify the information needed when updating a listing.  Thanks.

**Answer** _by @brianw-area24_

This may do what you need to do. It allows you to put text there, but I don't think you can add html, so it's somewhat limiting. But it's easy to do. 

Many themes allow you to add additional CSS to your site. With the theme on my test site, in the WordPress dashboard, I went to Appearance -&gt; Customize -&gt; Additional CSS and added the follow line of code:

`form#feedback li.list-group-item-warning:after \{content:"Be sure to include ..."; display:block; font-size:0.8rem; color:#000000; \}`

Of course you can change the content, and other CSS styles to change the look of it. Experiment a little and see if this will work for you.

Brian W.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/282">Issue #282</a></div>

</details>


### How to connect Site Meeting with App {#how-to-connect-site-meeting-with-app}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,

I am new to this plugin and having some challenges with integration. Just have few questions.

I used this plugin for one of the newly develop AA group and the meeting list is already on the website. How will I be able to connect my site to the App?  

Is there something I need to do?

Noob here

**Answer** 

Hey @BKDesigns10,

This is a good reminder that we need to get a new video made showing how to do this, or get it added to our FAQ.

The process is pretty simple. On your settings page, you should see fields down and to the right that look like this:

&lt;img width="275" alt="image" src="https://user-images.githubusercontent.com/31904316/107557069-25a1c000-6ba7-11eb-9b17-dfa08022fe13.png"&gt;

Type in "Meeting Guide" and click "Add". That creates the necessary key for AAWS/GSO to add your meetings to Meeting Guide.  You should probably also send them an email (appsupport@aa.org) to help coordinate and make sure everything is working.

Good luck!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/283">Issue #283</a></div>

</details>


### Al-Anon Types alteration/addition in Variable.php {#al-anon-types-alteration-addition-in-variable-php}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Please consider adding LBGTQ+ Type.
Consider removal of existing Types covered by above Type.

'LGBTQ' =&gt; __('LGBTQ+', '12-step-meeting-list'),


Additional items to Consider altering/adding:
'PG' =&gt; __('Parent/Grandparent Focus', '12-step-meeting-list'),
'WS' =&gt; __('Workshop Meeting', '12-step-meeting-list'),

For Future reopenings of physical meetings as COVID rules begin lightening up.
'SD' =&gt; __('Open with Social Distance Rules', '12-step-meeting-list'),


Appreciate everything this plugin has done for the community!

**Answer** 

Hey @playpusoffury,

Since TSML, with program set to Al-Anon, isn't feeding a central meeting app like AA is, there is really no reason you can't use a child theme and the custom meeting types configuration to set types however you wish. 

Please see our FAQ under the Wiki page for steps on how to create your own meeting types. 

Creating a child theme for your website is beyond the scope or our help community here, but there are bunches of tutorials on Wordpress for how to do that.

Good luck!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/290">Issue #290</a></div>

</details>


### 12 Step Meeting List Plug-in Display Issues {#12-step-meeting-list-plug-in-display-issues}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The meeting list is presenting with huge letters and not rendering the meeting information when you click on it.  The site was updated to Word Press 5.7.1. As far as I know I did not make any changes.  Will I need to back out this version of WordPress? Has this happened to anyone else?
Link to the site - Vermont AA - http://aavt.org/meetings/

![meeting list](https://user-images.githubusercontent.com/83615246/117093239-60db0780-ad2e-11eb-8518-767acc66fe65.GIF)

**Answer** 

Hi--

First, I assume you're talking about 12 Step Meeting List Plugin so I've edited the title to reflect that.

Second, if the link in your Google drive is an image to show the issue, please post the image here. I don't want to follow links to Google or somewhere else to look at examples.

I have looked at the Vermont AA website and I don't know what is going on. I do know we have a lot of people using Wordpress 5.7.1, so I don't believe that is the issue directly.

What I'm seeing on your site is that it doesn't even appear the `/meetings` url is even being loaded correctly, and you have something like Google Tag Manager loaded?

&lt;img width="501" alt="image" src="https://user-images.githubusercontent.com/31904316/117072370-f1492600-acf5-11eb-8472-cc80ff8ab914.png"&gt;

Try disabling that plugin and other plugins to see if your issues resolve.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/331">Issue #331</a></div>

</details>


### WordPress 5.7 {#wordpress-5-7}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I would like to update the WordPress version from 5.5 to 5.7.  Is the 12-step-meeting-list compatible with the latest version?

**Answer** _by @brianw-area24_

Yes, you shouldn't have any problem with this upgrade. Many sites have already done this upgrade, and they are working great.

Where we have seen issues is sites that are running the Gutenberg plugin. If you are running that plug, then we recommend that you disable it.

I'm closing this issue, however we'll reopen it if necessary.

Brian W

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/339">Issue #339</a></div>

</details>


### Downloads, links in meeting notes {#downloads-links-in-meeting-notes}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Some meetings have supporting documentation e.g. Meeting Format, 12-steps, meeting preamble, PDFs etc etc.
There is no way currently to upload documents and link to them from the meeting page. Similarly, hyperlinks can't be embedded (that I know of) in the notes field. It might be useful when e.g. a meeting has a link to a document on a shared host somewhere else e.g. Google Drive.

I would like the ability to add hyperlinks, text and url, (ideally) to the Notes section.
A different approach could be a list of documents, containing the link and link text to be displayed on each meeting.

One workaround used was to create a separate page for that meeting and then link it in the 'web' field, which then appears as a link in the contact section. This isn't ideal as it means creating a new page for each meeting that requires additional documents and then linking that and putting an explanatory note in the notes field.

Another workaround is, when there is only one document to be linked, link it in the Contact Information section. There is currently no way to supply text for a hyperlink, so the link will always show the full URL, which may require further explanation in the notes section.

Supporting documentation can be important for some meetings. An example of one meeting where a workaround was used instead of linking documents directly can be seen at

https://www.adultchildrenofalcoholics.co.uk/meetings/leeds-tuesday/?tsml-day=any&tsml-query=leeds
http://www.adultchildrenofalcoholics.co.uk/leeds-meeting-documents/

Regards,

**Answer** 

Hi @iandstevenson,

These ideas are not likely to be implemented into the 12 Step Meeting List plugin for a couple of reasons. Many groups have a separate page on their website they use for meeting format information, and instructions in the notes work quite nicely as well. In fact, the notes can be quite extensive.

Links inside of notes/text fields create potential issues with the Meeting Guide app (security reasons), and so support in the plugin is very limited, and not in notes. 

Good luck, and thank you for your service to your local AA community.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/344">Issue #344</a></div>

</details>


### Update to 3.10.0 from 3.1.13 {#update-to-3-10-0-from-3-1-13}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Thank you for your reply.

I have a site that has version 3.1.13. There isn't a prompt to "update now". How can I update to 3.10.0? I'm concerned about losing data if I "deactivate" and/or delete.

![NOcentralOffice](https://user-images.githubusercontent.com/68346976/119021569-319adc00-b965-11eb-8ad0-520bf8d13b28.png)

Thank you,
Richard

**Answer** 

Hi @rstelma/Richard--

This is a great question, and one that I'm not sure I have the ability or bandwidth to test out ahead of time. I am a bit surprised you don't have an update now button but it may be because of the organization name change? ::shrugs:: 

Since you're updating from such an old version, I strongly suggest you make multiple backup copies of your data before doing anything. This can be done through whole site backups to be sure (outside of the scope of our Code for Recovery issues page) and by exporting your database to a CSV (Meetings -&gt; Import & Settings -&gt; "...download your meetings...") file:

![image](https://user-images.githubusercontent.com/31904316/119068719-5d8c8080-b9aa-11eb-97ed-4104d65bbf2c.png)

The `Deactivate` button _**should not**_ delete any data, but if you explicitly click "Delete" the plugin **will delete your data**. So, don't click delete unless the steps below don't work. To be safe, I would be prepared to be required to import a new database from your csv file. 

![image](https://user-images.githubusercontent.com/31904316/119069512-e1933800-b9ab-11eb-95af-39c6c6febad1.png)


With backups in place, I am hopeful you can simply deactivate the plugin, and then install 12 Step Meeting List over it (Plugins-&gt;Add New) and the necessary database and code changes should apply. We have not changed the folder in which the plugin resides, so unless you (or a previous admin) did on your site, I think the installer will just overwrite the older version.

Again, please make sure you have good backups in place.

Please keep us posted on how this goes for you.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/346">Issue #346</a></div>

</details>


### Yoast and Archive {#yoast-and-archive}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey all,

I just did some searching on here, and I see that Yoast has been problematic as an SEO, does that still remain the case?  I'm using Elation theme for aacolumbia.org, and just recently seeing that the meeting title comes up as "Archive" on the tab.  I've seen the other plug-in fix for that, but curious if it's really related still to yoast.  If it is, do you all recommend a "better" SEO plugin?  

As always I appreciate everything you guys do and your help.

**Answer** 

I would assume so as we've not really done anything different. As far as the meeting title page, issue #271 provides some suggestions and customizations you might try to resolve that issue. It is theme specific (and only a small number at that) so we've not tried address it.

We don't offer specific suggestions for SEO plugins. Just don't have the time to research and test them. :-)

Are you a member of TIAA Forums? You might open a topic there to converse with others using the TSML to see if they have found a good alternative to Yoast.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/367">Issue #367</a></div>

</details>


### Notification emails not sending to select addresses {#notification-emails-not-sending-to-select-addresses}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Published a new site yesterday (June 22, 2021). Our meeting editor is not receiving notifications from the new site. I (webchair@nm-aa.org) are receiving them fine but meeting@nm-aa.org and meetings@nm-aa.org are not.  Domain has not changed. I am sure I probably missed a setting somewhere.  Any ideas?

![image](https://user-images.githubusercontent.com/72042564/123138198-fed77e00-d411-11eb-977e-2fbab4aced5d.png)

**Answer** _by @97eighty_

@A46webchair 
This is likely a mail server issue. Check the final destination of the meeting@ and meetings@ email addresses. Are these forwards? If so, then possibly the final mail server is blocking or sending to SPAM.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/385">Issue #385</a></div>

</details>


### [Feature Request]: Expand tsml_feedback_url to include additional template variables {#feature-request-expand-tsml-feedback-url-to-include-additional-template-variable}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

_No response_

### Requested Feature/Enhancment

Our existing template variables include \{\{slug\}\} and \{\{id\}\} only. This PR proposes adding additional variables \{\{title\}\}, \{\{dow\}\}, \{\{start\}\}. 

Or consider supporting any meta field?

'tsml_meeting' =&gt; '"day", "time", "end_time", "types", "group_id", "website", "website_2", "email", "phone", "mailing_address", "venmo", "square", "paypal", "last_contact", "attendance_option", "conference_url", "conference_url_notes", "conference_phone", "conference_phone_notes", "data_source"' . (current_user_can('edit_posts') ? ', "contact_1_name", "contact_1_email", "contact_1_phone", "contact_2_name", "contact_2_email", "contact_2_phone", "contact_3_name", "contact_3_email", "contact_3_phone"' : ''),


### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

**Answer** _by @joshreisner_

so a fully loaded URL would look more-or-less like:

```
$tsml_feedback_url = "/feedback?slug=\{\{slug\}\}&id=\{\{id\}\}&name=\{\{name\}\}&day=\{\{day\}\}&time=\{\{time\}\}&end_time=\{\{end_time\}\}&types=\{\{types\}\}&notes=\{\{notes\}\}&conference_url=\{\{conference_url\}\}&conference_url_notes=\{\{conference_url_notes\}\}&conference_phone=\{\{conference_phone\}\}&conference_phone_notes=\{\{conference_phone_notes\}\}&location=\{\{location\}\}&formatted_address=\{\{formatted_address\}\}&region=\{\{region\}\}&location_notes=\{\{location_notes\}\}&group=\{\{group\}\}&group_notes=\{\{group_notes\}\}&district=\{\{district\}\}&website=\{\{website\}\}&email=\{\{email\}\}&phone=\{\{phone\}\}&venmo=\{\{venmo\}\}&square=\{\{square\}\}&paypal=\{\{paypal\}\}";
```

this isn't so bad. i think if we include this example (or similar) in the readme this is pretty easy to implement. i was briefly considering suggested appending all the fields automatically but i think there will always be someone who needs to make adjustments

feel like some of the other fields like individual contacts and `last_contact` are more for internal office use and probably aren't needed

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/849">Issue #849</a></div>

</details>


### [Feature Request]: Adding Recovery Club to General / Program / Select the recovery program your site targets here: {#feature-request-adding-recovery-club-to-general-program-select-the-recovery-prog}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

pcshost@gmail.com

### Requested Feature/Enhancement

Adding "Recovery Club" to General / Program / Select the recovery program your site targets here. I'm redoing a few recovery club websites and this is a good plug in for them. Though they house many different 12 step / non 12 step org's as opposed to one specific. Not sure if you track that so I thought I'd bring it up. Thanks for your service! -- John

Different 
![Meeting-ProgramAdd — WordPress](https://github.com/code4recovery/12-step-meeting-list/assets/54480908/991adb0b-19eb-43c3-98dd-f4a3172a686b)

**Answer** _by @anchovie91471_

For clarification, it sounds like you’d like to be able to select the fellowship at the individual meeting level instead of globally?

Does this track?

I don’t think having “recovery club” as a global setting would necessarily accomplish anything, based on the way the plugin is organized.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1221">Issue #1221</a></div>

</details>


### Distance sorting alphanumerically {#distance-sorting-alphanumerically}

<details>
<summary>Show question &amp; answer</summary>

**Question**

see comment here: https://github.com/code4recovery/12-step-meeting-list/discussions/1613#discussioncomment-11936485

not quite sure why this is happening. in public.js it should be `parseFloat`ing the value it's sorting on

https://github.com/code4recovery/12-step-meeting-list/blob/main/assets/src/public.js#L848

**Answer** _by @joshreisner_

i think this might not have been working [for a while](https://github.com/code4recovery/12-step-meeting-list/commit/a33ac8eabd6d6d97f35f0e5ac01d45b5736d9890#diff-bc8d94d2de0035552d77295f70622087fc10fc852e0d68e6ee65d40604bf3d41)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/1619">Issue #1619</a></div>

</details>


### Put Back "Open" or "Closed" Word in the Bullet List in the Meeting Detail {#put-back-open-or-closed-word-in-the-bullet-list-in-the-meeting-detail}

<details>
<summary>Show question &amp; answer</summary>

**Question**

It's great that in v3.11.2 the text for open and closed meetings has been expanded (see #330), but am wondering whether you can put back the word open or closed in the bullet list displayed in the meeting detail page. 

Thanks

**Answer** _by @tech2serve_

They show up on my site:

&lt;img width="320" alt="image" src="https://user-images.githubusercontent.com/31904316/125335077-fe3f5280-e300-11eb-8776-c22e3f1c495c.png"&gt;

&lt;img width="308" alt="image" src="https://user-images.githubusercontent.com/31904316/125335209-24fd8900-e301-11eb-9d52-7975f056a5d2.png"&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/442">Discussion #442</a></div>

</details>


### Wordpress search / TSML connection {#wordpress-search-tsml-connection}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,
I wondered how site owners using TSML - handle the gap between "Wordpress search" not able to see TSML - data?

Looking at searches it definitely looks like our site members don't understand the disconnect.

Wonder if i could borrow some thoughts.

IF

Kate F

**Answer** _by @tim-rohrer_

Hi Kate,

So the Wordpress search on my dev site works fine for finding meetings. What is your site URL? Assuming you've tested yourself, what results are you seeing?

If it isn't working for meetings, have you check to see if the Wordpress search finds other material on your site? The problem could be with your theme or Wordpress. You might have better luck in the help area for one of those.

You can also look in your browser's dev console to see if any errors are thrown.

Yis, Tim

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/895">Discussion #895</a></div>

</details>


### Ability to use HTML in notes section {#ability-to-use-html-in-notes-section}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I think this might be more of a feature request but I would like to be able to use some basic html in the notes, for example strong, ital, and linking urls I am providing for more info on specific meetings.

**Answer** _by @joshreisner_

we don't allow HTML in these fields for security reasons, and to maintain field appearance in Meeting Guide, which also doesn't support HTML in notes fields.

we do however have several URL fields such as group website, and support line breaks in the notes field. also we support UTF-8 characters, so emoji and other symbols should be ok.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/948">Discussion #948</a></div>

</details>


### Separate Open or Closed from other types {#separate-open-or-closed-from-other-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Would it be possible for a future release to make open or closed type separate from the other types with the default being open? AA meetings are either open or closed and they can’t be both (as the current plugin allows).

**Answer** _by @joshreisner_

i dont think we can assume that every  administrator knows the open/closed status of every meeting.

if we start adding the open type whenever closed is not indicated we could have some unexpected results

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/993">Discussion #993</a></div>

</details>


### How can I eliminate forward slashes before apostrophes? {#how-can-i-eliminate-forward-slashes-before-apostrophes}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I've been working on getting the forms correct (see #823) and whenever there is an apostrophe, it throws in a forward slash such as `Women\'s Big Book Study` or `St. Peter\'s Church`. Is there a quick way to globally strip these slashes out?

**Answer** _by @joshreisner_

thanks, yes i think the stripslashes function should work for you. try replacing
```
	$meetingName = rgget( 'meetingName' );
```
with
```
	$meetingName = stripslashes(rgget( 'meetingName' ));
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1072">Discussion #1072</a></div>

</details>


### Moving from subdomain to domain {#moving-from-subdomain-to-domain}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Due to host provider increasing the cost of wildcard SSL 3x, we need to move our Wordpress site from the subdomain wp.nwpi.net to the domain. This seems straight forward but wanted to ask if there will be any issues with TSML.

Thanks for the great work by code4recovery.

John

**Answer** _by @joshreisner_

great! you should be fine, but here are some suggestions anyway:

* go to settings &gt; permalinks and click 'save changes'
* go to a single meeting and click 'update'
* let the meeting guide app support know about the change

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1076">Discussion #1076</a></div>

</details>


### To get meeting links in flutter mobile app {#to-get-meeting-links-in-flutter-mobile-app}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello team,

I want to implement this plugin into flutter mobile app, so some of my questions are :-
1) Is it possible to use the wordpress plugin into flutter mobile app.
2) If yes, then how can i fetch the list of meeting links (step by step configure)

**Answer** _by @joshreisner_

The plugin itself runs on PHP so it needs a server for that, but we have a way to embed just the front-end in a webview using TSML UI:

https://tsml-ui.code4recovery.org/
https://github.com/code4recovery/tsml-ui

You can add some HTML to a screen on your app and customize it to point to a JSON feed or Google Sheet and you should have a working app

@tiptop96 do you have any pointers? Thanks

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1108">Discussion #1108</a></div>

</details>


### Glitch Found {#glitch-found}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When editing an individual meeting, in the "Contact Information" section, there is a sub-section called "Contacts". There you can input names, emails and phone numbers of folks who are designated as the contact for that meeting. 

We discovered that when you have a phone number, but no contact name, then the meeting does not appear in the meeting listing on the front-end of the site.

We got around this by temporary filling the name field with the word "Contact". 

This appears to be a glitch. If it was intentional, then it is not a good idea, because it causes confusion. 

Just wanted to let folks know, so you can fix for the next update.

**Answer** _by @kiyote33_

I don't think this is so much a glitch, but an unexpected way of posting a group contact phone number. By design, when a group wants a contact phone number to display for their meeting listing they simply fill in the Phone field. The image below show's the intended way to post a group's phone number along with the new work around you discovered. 
![image](https://user-images.githubusercontent.com/57125427/233470144-7584fcf2-0aa4-4cdd-a469-2511571771fe.png)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1117">Discussion #1117</a></div>

</details>


### Change /meetings/ URL {#change-meetings-url}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We've had the same URL to our meetings search page for about 15 years and I'm hoping we don't have to change it:

CURRENTLY: site.com/find-a-meeting/
to this
NEW URL: site.com/meetings/

It's the most popular page on our website. Is there a way to change the /meetings/ URL of the main page via a Permalink or .htaccess rewrite?

**Answer** _by @anchovie91471_

By adding this to your theme's function.php file, it will change your /meetings/ page url:

$tsml_slug = 'find-a-meeting';

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1205">Discussion #1205</a></div>

</details>


### How meetings register their meeting {#how-meetings-register-their-meeting}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi. I wanted to find out how a meeting can register their meeting. There does not seem to be a form for a new meeting to submit and looking at the documention I'm struggling to find an overlook of how this process of registering/updating meetings works etc. Can someone point me to right direction?

**Answer** _by @joshreisner_

hi @virtualtom this should just be the `functions.php` for your active wordpress theme. i believe you then need to update a meeting for it to apply this URL to your meetings. let us know if that doesn't work (and send us your website url). thanks!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1216">Discussion #1216</a></div>

</details>


### Today's Meeting starting time {#today-s-meeting-starting-time}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello!

I am wanting to see if there is a way to tweak the timing of meetings shown with the link for today's meetings (?post_type=tsml_meeting).  We use this to show today's meetings, but it is only showing the upcoming meetings, so it doesn't show meetings that have already started.  Is there a way for it to show all meetings that started within the last hour as well as those upcoming?
I hope this makes sense.
Thank you!

**Answer** _by @joshreisner_

it should be doing that -- see https://aasanjose.org/meetings as an example

there is a yellow "15 meetings in progress" banner right now.

are your meeting end times set? what's the link again?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1228">Discussion #1228</a></div>

</details>


### Abstract 7th Tradition {#abstract-7th-tradition}

<details>
<summary>Show question &amp; answer</summary>

**Question**

On the meeting details page the area for venmo, paypal, etc has a section title called "7th Tradition". Can this be made a variable vs hardcoded in template so it can be adjusted to "Donations" for non AA recovery use?

**Answer** _by @joshreisner_

yah it's a good callout - we've removed this label already from TSML UI.

if you wanted to make this change now you could make a copy of single-meetings.php and add it to your theme and make the change yourself. https://wordpress.org/plugins/12-step-meeting-list/#how%20can%20i%20override%20the%20meeting%20list%20or%20detail%20pages%3F

i think if we were to make this change on our end we would not want to add it customization option so much as a global change. perhaps we would call it "Group Contributions" (since people in AA don't like the word "Donations") or just remove the label entirely

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1381">Discussion #1381</a></div>

</details>


### Twilio {#twilio}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi is anyone familiar with Twilio? The previous web/tech committee used it and I have been unable to get them to return my calls and cannot figure out how to use this platform. Can anyone help the Atlanta Central Office in using this platform?

**Answer** _by @anchovie91471_

My district uses it for notifications when people sign up to speak at a
correctional facility or treatment center. It's very confusing and they are
terrible about answering tickets, etc., but I do have some experience with
it.

Anthony B.

On Tue, Mar 12, 2024 at 9:21 AM Mark Just ***@***.***&gt; wrote:

&gt; Hi is anyone familiar with Twilio? The previous web/tech committee used it
&gt; and I have been unable to get them to return my calls and cannot figure out
&gt; how to use this platform. Can anyone help the Atlanta Central Office in
&gt; using this platform?
&gt;
&gt; —
&gt; Reply to this email directly, view it on GitHub
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/discussions/1386&gt;,
&gt; or unsubscribe
&gt; &lt;https://github.com/notifications/unsubscribe-auth/ACF42JJA24ZJ3I53C3RYLOLYX4FO7AVCNFSM6AAAAABESK3NKWVHI2DSMVQWIX3LMV43ERDJONRXK43TNFXW4OZWGM3DGMRVGY&gt;
&gt; .
&gt; You are receiving this because you are subscribed to this thread.Message
&gt; ID: ***@***.***&gt;
&gt;


-- 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*Anthony Baggett* || President // Founder
104 N Broadway St.

#2

Tupelo, MS 38804


c. &lt;http://goog_2089110092&gt;662.610.0728 &lt;6626100728&gt;


*BustedSpring.com &lt;http://bustedspring.com/&gt;*- - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - -

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1386">Discussion #1386</a></div>

</details>


### Meeting in ical format {#meeting-in-ical-format}

<details>
<summary>Show question &amp; answer</summary>

**Question**

At our Central Office, I would like the meetings to be in .ical or a similar format to create a Google calendar of all the meetings. When the phone rings and we give out the next meeting, it would be nice to look at a calendar. It would be a nice feature. 

D

**Answer** _by @joshreisner_

hi @12steprecovery 

we have a feature with our TSML UI appearance where members can add individual meetings to their calendars ([example](https://aasanjose.org/meetings/a-vision-for-you-2))

&lt;img width="704" height="702" alt="Screenshot 2026-04-04 at 8 10 56 AM" src="https://github.com/user-attachments/assets/ff739cec-95d4-4e83-a186-2bea437ae2e8" /&gt;

we don't yet have a way for members to subscribe to ALL the meetings on the website in a single calendar feed - as per the original request - we think this might be more of an edge-case

also, we recommend sites use a different mechanism for listing service / business meetings - TSML is really just for recovery. one option that many WP sites use is https://theeventscalendar.com

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1420">Discussion #1420</a></div>

</details>


### Creatives In Recovery Meeting {#creatives-in-recovery-meeting}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Team, 

QQ for ya. We have a meeting in Covington KY, Creatives in Recovery, that was deleted from AA Cincinnati 8/27 at 5:22 but is still showing up on the MG app. Can you please tell us who else has this listed so we can get it removed?
![image](https://github.com/user-attachments/assets/cef2bb73-79b5-4e94-a75c-5515f81fda5c)

**Answer** _by @joshreisner_

ok sounds good. in general, you can just scroll down on the listing a little to see which service entity provided it

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1530">Discussion #1530</a></div>

</details>


### Question Mark the Mysterian {#question-mark-the-mysterian}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The open category tag (along with a few others) displays a question mark that, when clicked, mentions that "open meetings are available to anyone interested in Alcoholics Anonymous, Non Alcohollics ...."
 
 I there any way to cutomize the text? 
 Is there a way for us to add these kind of tool tips to our own Categories? 
 
 Thanks 
Scott T
Recovery Dharma
 

![Qmark](https://github.com/user-attachments/assets/89726e53-05f7-4923-bb37-3468066d6b1f)

**Answer** _by @SIA-WEBSUP_

@ricovSlasner ,

I believe the short answer is that yes, you should be able to override the  **type descriptions** for the existing types or set new ones for any custom types you may have added.

Here are two discussions threads that would be pertinent to your question:
- [Changing Categories with TSML #1642](https://github.com/code4recovery/12-step-meeting-list/discussions/1642)
- [Meeting Notes auto generating #647](https://github.com/code4recovery/12-step-meeting-list/discussions/647)

I'm going to test out the solution suggested in #647 and report back.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1663">Discussion #1663</a></div>

</details>


### No longer receiving "Change Detection" emails {#no-longer-receiving-change-detection-emails}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Dear friends,**

At some point, over the last few months, I stopped receiving _Change Detection_ emails. I'm not aware of any changes we've made on our site that would have caused this. 

[area59aa.org](url)

Any assistance would be appreciated.

In fellowship,

**Scott Fritzinger** • Web Servant Area 59 • [webservant@area59aa.org](url)

&lt;img width="1230" alt="Screenshot 2025-06-10 at 10 06 42 AM" src="https://github.com/user-attachments/assets/7fc58714-4076-4d2b-a526-cd995f0f288b" /&gt;

**Answer** _by @joshreisner_

i've encountered a situation where the web host needed to be configured to use external SMTP, otherwise it would attempt local delivery. you might ask the hosting company?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1695">Discussion #1695</a></div>

</details>


### Curated data feeds {#curated-data-feeds}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We would like to share a list of our meetings with a partner organization.  
Is it possible to have more than one feed?  Our public feed is already being used by a sister organization and we don't want to cut them off. 
thanks

**Answer** _by @SIA-WEBSUP_

Custom fields are not part of the JSON feed.

The CSV export does include the custom fields. If your meeting list didn't change much, you could export it as a CSV, filter it however you like and share with your 'partner organization' that way.

Another option is to filter it by some unique identifier in the notes field.

Let's say you put ShareMeWithOutsidePartnerOganization in the notes field of the meetings you want to share...the following should filter the feed down to just the meeting with that string

    https://yoursite.org/wp-admin/admin-ajax.php?action=meetings&query=ShareMeWithOutsidePartnerOganization

Note that query checks for the search string in all the following fields:
- ```['name', 'notes', 'location', 'location_notes', 'formatted_address', 'group', 'group_notes', 'region', 'sub_region', 'district', 'sub_district']```

so be careful that you don't use some search term that is used by a meeting you don't wish to include in one of those fields.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1786">Discussion #1786</a></div>

</details>


### Change notification email to user {#change-notification-email-to-user}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I would like to send a change notification email to the user that submits the change form.  Is there a field designation code that identifies the contact email field that I can add to the list of emails that go out when a change is made?

**Answer** _by @schedules000_

Yes. After the change is made so they know the change has been made. If the
contact’s email field had an identification code it could be listed with
the emails of people who get notified the change has been made.

*Area 11 Schedules Chair*




On Sun, Oct 26, 2025 at 11:29 AM Tim Rohrer ***@***.***&gt;
wrote:

&gt; Or, do you mean after the change has been made?
&gt;
&gt; —
&gt; Reply to this email directly, view it on GitHub
&gt; &lt;https://github.com/code4recovery/12-step-meeting-list/discussions/1798#discussioncomment-14785438&gt;,
&gt; or unsubscribe
&gt; &lt;https://github.com/notifications/unsubscribe-auth/BODEYHBSDAWPNROXTFIUCDT3ZTSEBAVCNFSM6AAAAACKD5PTXKVHI2DSMVQWIX3LMV43URDJONRXK43TNFXW4Q3PNVWWK3TUHMYTINZYGU2DGOA&gt;
&gt; .
&gt; You are receiving this because you authored the thread.Message ID:
&gt; &lt;code4recovery/12-step-meeting-list/repo-discussions/1798/comments/14785438
&gt; @github.com&gt;
&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1798">Discussion #1798</a></div>

</details>


### See Meeting Notes - Does not show up in the "Meetings In Progress" {#see-meeting-notes-does-not-show-up-in-the-meetings-in-progress}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey team, we received reports and have confirmed that any meetings with the "See Meeting Notes" attribute do not appear in the list of "Meetings In Progress" Should we seek to override this locally, or is this something worth changing overall?

**Answer** _by @SIA-WEBSUP_

@MA-Creative-Designer,

For context, this is all of a piece with [https://github.com/code4recovery/12-step-meeting-list/discussions/1738](https://github.com/code4recovery/12-step-meeting-list/discussions/1738) and [https://github.com/code4recovery/12-step-meeting-list/discussions/1837](https://github.com/code4recovery/12-step-meeting-list/discussions/1837).

In TSML-UI, any meeting with no conference info (e.g., Zoom link) *and* no physical address is treated as `inactive`.

You've overloaded this `inactive` state to mean `see meeting notes for contact info to obtain the conference info or address.` But the workarounds simply change how `inactive` meetings are displayed. Under the hood TSML / TSML-UI still see those meetings as `inactive`.

Because of that, the “in progress” count won’t include them.

I don’t think it’s something you’ll be able to change purely locally, since TSML-UI is a single global JS bundle served from the C4R server.

I’ll bring this up with the TSML-UI development team to see if we can better support you here. But I suspect we won't be able to make a change here without affecting everyone else who uses `inactive` in the conventional sense.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1849">Discussion #1849</a></div>

</details>


### API {#api}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I'm told that my chatbot needs to pull information from an API in order to answer questions about meetings.  Does code4recovery have an API, and if so, how do I give the chatbot access to it?  We use the Jotform Chatbot.  Thanks.

**Answer** _by @joshreisner_

hi @schedules000 thanks for following up [on your earlier discussion](https://github.com/code4recovery/12-step-meeting-list/discussions/1848) about training the jotform plugin

sounds like it still hasn't been cracked yet. to connect what @kiyote33 said to your problem, your own site should ideally be able to function as an API for the plugin, since that's where the data is. your meeting data feed is available here: https://ct-aa.org/wp-admin/admin-ajax.php?action=meetings - is there a way to use that to train the jotform chatbot? please see the spec doc that @kiyote33 linked above for how to decode that format

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1875">Discussion #1875</a></div>

</details>


### Adding DDA to list of programs {#adding-dda-to-list-of-programs}

<details>
<summary>Show question &amp; answer</summary>

**Question**

In settings -&gt; general -&gt; Program: Dual Diagnosis Anonymous (DDA) is not mentioned. Could it be added to the list?

&lt;img width="435" height="400" alt="afbeelding" src="https://github.com/user-attachments/assets/93bbcfd0-ff00-4536-98f7-22badbf35ae7" /&gt;

**Answer** _by @joshreisner_

thanks - a couple questions

 [here is the default set](https://github.com/code4recovery/spec) - any you think should be removed? (the language types get added automatically, so don't worry about those)

* still need `Dual Diagnosis`?
* is `DDA Only` like `Closed`?
* is `Book Study` a replacement for `Big Book`?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1876">Discussion #1876</a></div>

</details>


### Automating JSON Feeds {#automating-json-feeds}

<details>
<summary>Show question &amp; answer</summary>

**Question**

A [request was made](https://wordpress.org/support/topic/automating-json-feeds/) in the support forums to have the plugin automatically update JSON feeds coming into the parent/top level site.

**Answer** _by @wokat_

Hi all.

I've started work on this, as I did not find a matching branch:
https://github.com/aa-berlin/12-step-meeting-list/tree/add-cron-tasks

The state right now is:

- Little testing, but seems to work
- Naive refactoring that simply has the cron task do what the "Refresh"-Button does: Delete every meeting, reimport
- Cron task currently updates until it has run a certain hard-coded percentage of `max_execution_time`, but could probably just extend runtime?
- Added a locking mechanism; lock-breaking automatic based on start of execution and assumed max. possible run time of originator (assumption: has same predefined runtime as current process)
- Have no clue where to define "functions", so tried to leave unchanged code in place for sake of the history

I would suggest that we (or "I" :joy:) finish the following tasks before a pull-requests:

- Make schedule of import cron configurable
- Reuse local post-ids to allow for relating to posts, so update existing post of a meeting

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/42">Issue #42</a></div>

</details>


### Port to Joomla? {#port-to-joomla}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello,
Great project you have created. Have you ever thought of porting this to Joomla? There are lots of sites (fellowships) that would benefit from your project.
-pds

**Answer** _by @joshreisner_

Hi @petermixt -- we picked WordPress because of the level of adoption in AA, it's always been way ahead of all the others. Of the sites that list meetings on AA Near You, only 20 are on Joomla, as opposed to 374 on WordPress. Wix (35) is the next highest, followed by GoDaddy Website Builder.

@FlipperPA is right, we're moving toward a front-end based system that is platform agnostic. It'll be possible for us to remove most of the frontend from this WP plugin, and it'll just become a way for administrators to manage the list.

If you wanted to build a Joomla extension for managing a list of meetings you would not need to do much frontend work at all. Just produce a file that meets the [spec](https://github.com/code4recovery/spec) and use the react project on your site. (Or you could just use Google Docs).

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/59">Issue #59</a></div>

</details>


### Mixed Meeting Types {#mixed-meeting-types}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Do you have a solution for mixed meeting types? 
We have a mix of NA AA Recovery and such.
http://02ba63c.netsolhost.com/clydebailey/meetings/?tsml-day=any

**Answer** 

Not directly. The best bet is probably to create your own custom types (see the FAQ as part of the Wiki). 

Just remember that custom types will not be recognized by GSO's Meeting Guide if that is important to you.

If I haven't answered your question, we can reopen the issue.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/228">Issue #228</a></div>

</details>


### How to Configure/View within WP {#how-to-configure-view-within-wp}

<details>
<summary>Show question &amp; answer</summary>

**Question**

A very beginner question:  I have the plug-in installed, but not sure how to configure/view the Plug-in within the WP site.

Thanks!

**Answer** 

In your admin page for Wordpress, you should see a "Meetings" options:

&lt;img width="156" alt="image" src="https://user-images.githubusercontent.com/31904316/108612108-e5aeba00-73aa-11eb-9569-aa5b8b896779.png"&gt;

All plugin specific settings are under the "Import and Settings" page, right hand side. 

Please check out [our FAQ](https://github.com/code4recovery/12-step-meeting-list/wiki/Frequently-Asked-Questions). You will need to enable a mapping key (Mapbox is easiest), but other than that, the default settings should be okay.

Explore, play and you'll learn.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/288">Issue #288</a></div>

</details>


### Require a Meeting Title {#require-a-meeting-title}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When people are entering meetings, the Meeting Title should be required. Currently it can be left blank.

See: https://kellenmace.com/require-post-title-for-custom-post-type/

**Answer** _by @joshreisner_

If you don't enter a title when you're creating the meeting, then the slug is numeric, which I expect would confuse people.

![Screen Shot 2021-08-09 at 7 17 40 AM](https://user-images.githubusercontent.com/1551689/128722161-8c5a53b8-a0d5-439b-8afb-9023b6f9f889.png)

The problem with leaving it blank, as we do now, is that there's nothing to click on:

![Screen Shot 2021-08-09 at 7 18 32 AM](https://user-images.githubusercontent.com/1551689/128722579-aad8d0d0-0f0f-4ab1-a2ff-6a0a971a80b4.png)

WordPress handles this by having a default title in the list, which would be one option

![Screen Shot 2021-08-09 at 7 19 59 AM](https://user-images.githubusercontent.com/1551689/128722646-fd6ca45b-9398-4b90-a7a1-4865648144d9.png)

I like what we do when you import a meeting without a title, which is suggest one in the format `&lt;LOCATION&gt; &lt;DAY&gt;s at &lt;TIME&gt;`. That would be my vote on what to do in this case. Not require the title with javascript, but when it's empty fill in a title with that format.

&lt;img width="724" alt="Screen Shot 2021-08-09 at 7 22 26 AM" src="https://user-images.githubusercontent.com/1551689/128722819-8c422a41-7e09-4728-84c7-10dc47f06a7b.png"&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/343">Issue #343</a></div>

</details>


### Refresh browser before city changes {#refresh-browser-before-city-changes}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When I select a different city from my dropdown, often the city doesn't change and I have to refresh the browser before the city changes.  https://arkansascentraloffice.org/meetings/
Wilma

**Answer** _by @joshreisner_

It's working for me in Safari on mac. 

One issue that I do see is that regions seem to be listed twice, with themselves as their own parent. Are you importing from CSV? 

![Screen Shot 2021-06-25 at 9 41 11 AM](https://user-images.githubusercontent.com/1551689/123458234-a92ddd80-d599-11eb-8eab-26738bd383cb.png)

I wonder if there are issues with region and sub-region in the CSV that are causing this.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/384">Issue #384</a></div>

</details>


### Widget on WordPress Dashboard {#widget-on-wordpress-dashboard}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

_No response_

### Requested Feature/Enhancment

Add a widget to the WordPress Dashboard. Initially, this widget should show information about the new Code for Recovery web site, including a call out to the new Donate option.

It is anticipated that the information in this widget could change quite often with new releases, and may even go away in some releases if we don't have anything we need to highlight.

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

**Answer** _by @97eighty_

@brianw-area24 Good idea. Had a thought. What about pulling a page or feed from the code4recovery website? This way it can be updated by the website group and populated in the dashboard.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/issues/595">Issue #595</a></div>

</details>


### WIBNI there was the ability to search by group name? {#wibni-there-was-the-ability-to-search-by-group-name}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Perhaps you'd consider adding the ability to find meetings given the group name, or a portion of the name.

Thanks. Great plug-in.

**Answer** _by @joshreisner_

seems to be working for me! 

https://code4recovery.org/meetings?tsml-day=3&tsml-query=test
https://code4recovery.org/meetings?tsml-day=3&tsml-query=tes

could you share the example that's not working for you?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1135">Discussion #1135</a></div>

</details>


### WP Dashboard for the plugin add sort for City {#wp-dashboard-for-the-plugin-add-sort-for-city}

<details>
<summary>Show question &amp; answer</summary>

**Question**

On the five columns displayed in the meetings from the dashboard. Four can be sorted. Can a sort be added to "City?"

**Answer** _by @mattbylett_

Thanks Dougle - There's a bit going on right now and I just wanted to acknowledge we've received this request and I'll take it back to the team for feedback.  I'm just new so not 100% sure of the process for this.  We'll get back to you

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1186">Discussion #1186</a></div>

</details>


### Website button label {#website-button-label}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there a way to change the label of the website button to something like "Meeting script" rather than the start of the actual URL?

**Answer** _by @k8fish3r_

I've changed TSML Legacy — buttons on "meeting detail view" via Javascript. 

Definitely appreciate ideas on customizing buttons on "detail view" on TSML UI.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1568">Discussion #1568</a></div>

</details>


### Printing Meeting Books With Multiple towns {#printing-meeting-books-with-multiple-towns}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We are able to print meeting books for the entire state, and for a single town.  Is it possible to print a meeting books with two or three towns together?  Thanks.

**Answer** _by @joshreisner_

hi @schedules000 if we created a form on the tsml import / export page where you could select multiple regions with checkboxes for the pdf would that be a good solution?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1624">Discussion #1624</a></div>

</details>


### Timezone Changes for All Meetings When a Non-Geographic Meeting is Edited {#timezone-changes-for-all-meetings-when-a-non-geographic-meeting-is-edited}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When a meeting marked as Non-Geographic is edited, the timezone for multiple other meetings also marked as non geographic unexpectedly changes.

It is sometimes able to be resolved by fixing one meeting that is non geographic that got changed and the other meetings all change back to the proper timezone. 

Has this happened to anyone here?

**Answer** _by @joshreisner_

not sure how this got closed - reopening - anyway there isn't really a concept of a "non-geographic" meeting in TSML - every meeting has to have an `Address` to be listed, even if that is an approximate location

locations have timezones and are unique by `Address` so what i'm guessing is happening is you're editing the timezone and it's changing the timezone on that location. what i'd recommend is to have a separate "location" for each timezone

eg 

location name: ET Online Meetings
location addres: New York
timezone: New York

location name: PT Online Meetings
location address: California
timezone: Los Angeles

etc

hope that helps!

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1824">Discussion #1824</a></div>

</details>


### tsml as MCP server {#tsml-as-mcp-server}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Has anyone had the idea of giving the ability for an AI to use the meeting list ? It would allow chatbots to acceed meeting list. Just wondering if someone did that because I could.

**Answer** _by @pjaudiomv_

I wrote one as a prototype (generated with AI) https://www.npmjs.com/package/@pjaudiomv/tsml-mcp-server

```
npm install -g @pjaudiomv/tsml-mcp-server
TSML_WORDPRESS_URL=https://mywordpress.org tsml-mcp-server
```

example claude config

```json
\{
  "mcpServers": \{
    "tsml": \{
      "command": "tsml-mcp-server",
      "env": \{
        "TSML_WORDPRESS_URL": "https://your-wordpress-site.org"
      \}
    \}
  \}
\}
```
&lt;img width="722" height="521" alt="Screenshot 2025-11-08 at 11 42 39 AM" src="https://github.com/user-attachments/assets/c81aa11c-934e-4a9a-8212-836c91488bdd" /&gt;
&lt;img width="719" height="664" alt="Screenshot 2025-11-08 at 11 42 05 AM" src="https://github.com/user-attachments/assets/24d706df-8e34-4d67-b253-5ddf72c514d1" /&gt;

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1825">Discussion #1825</a></div>

</details>


### "Miles from me" searches {#miles-from-me-searches}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The options for "miles from me" searches are 1,2,5,10,25,50 and 100 miles.  I would like to print a book with meetings 15 miles from me.  Can I add 15 miles to the choices.   Thanks.

**Answer** _by @SIA-WEBSUP_

@schedules000,

Are you planning on using the pdf service available at https://pdf.code4recovery.org to produce a printable meeting list?

If so, I doubt very much if you can pass in `mode=me` to that service, since the server wouldn't know where you are located.

However, you could use  `mode=location` and pass in a latitude and longitude.
So for me, located at **latitude**=40.6830393 & **longitude**=-73.4388201, where the nearest intergroup is Nassau Intergroup, 

- [https://nassauintergroup.org/.../**distance=1**&llatitude=40.6830393&longitude=-73.4388201](https://nassauintergroup.org/wp-admin/admin-ajax.php?action=meetings&mode=location&distance=1&latitude=40.6830393&longitude=-73.4388201)  yields 4 meetings
- [https://nassauintergroup.org/.../**distance=10**&llatitude=40.6830393&longitude=-73.4388201](https://nassauintergroup.org/wp-admin/admin-ajax.php?action=meetings&mode=location&distance=10&latitude=40.6830393&longitude=-73.4388201) yields 260 meetings
- [https://nassauintergroup.org/.../**distance=15**&llatitude=40.6830393&longitude=-73.4388201](https://nassauintergroup.org/wp-admin/admin-ajax.php?action=meetings&mode=location&distance=15&latitude=40.6830393&longitude=-73.4388201) yields 567 meetings
- [https://nassauintergroup.org/.../**distance=100**&llatitude=40.6830393&longitude=-73.4388201](https://nassauintergroup.org/wp-admin/admin-ajax.php?action=meetings&mode=location&distance=100&latitude=40.6830393&longitude=-73.4388201) yields 646 meetings = ALL meetings in this feed

*note that you can pass in `distance` as any number

Would using this method serve your needs?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1843">Discussion #1843</a></div>

</details>


### Chatbot Connection {#chatbot-connection}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Do you have any experience linking a chatbot to the meeting finder so the chatbot can give meeting information when asked?   We are using the Jotform chatbot app.

**Answer** _by @joshreisner_

hi @schedules000 i don't see it on https://ct-aa.org/ - do you have a demo of this somewhere? have you had success training it on other content on the website?

we don't have any experience with this - reading the documentation a little it looks like [you can add knowledge](https://www.jotform.com/help/how-to-add-extra-information-to-your-agents-knowledge-base/) for the chatbot - is that how you tried uploading a CSV?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1848">Discussion #1848</a></div>

</details>

