---
id: types-filters
title: Types, Regions & Custom Fields
description: Meeting types, regions, custom taxonomies and meta.
sidebar_position: 7
tags: ["types-filters"]
---
# Types, Regions & Custom Fields

Meeting types, regions, custom taxonomies and meta.

_59 questions — sourced from GitHub discussions & issues._


### In-person and Online Mtg displaying as Online {#in-person-and-online-mtg-displaying-as-online}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When users first land on our /meetings/ page, meetings that should display as ‘In-person and Online’ display as 'Online'. However, if the the filters are used, the information will display properly. 

Too Reproduce:
1) Go to: [https://www.aamonterey.org/meetings/]
2) Note which meetings show as Online
3) Use one of the filters such as selecting a day of week. 
4) Now you'll see meetings correctly listed as In-person and Online

We need to get this information to always display properly. 

Is there a known fix for this issue?

I'm seeing the issue on a Desktop with the following:
 - Windows 10
 - Chrome
 - Version 91.0.4472.124

![AAMonterey Screenshot](https://user-images.githubusercontent.com/87451879/125704123-8f4f758f-5d34-4f2d-bd1c-b2c284f20175.png)

**Answer** _by @tech2serve_

&gt; 
&gt; Is there a known fix for this issue?
&gt; 
I'm not sure yet. It looks like you've installed v3.11.2; can you confirm that please? Also what version of Wordpress? PHP?

I suspect the fix lies in removing or changing some modifications you've made, at least that is my guess. Your meeting list looks different than ours. Two examples:

Here is your display for the Types dropdown:

&lt;img width="205" alt="image" src="https://user-images.githubusercontent.com/31904316/125830511-5821ce17-8c43-492d-aa42-055a752a98ec.png"&gt;

However, in v3.11, you should have the options for online, in-person and active.

Also, the online and in-person flags were moved to display under the Location/Group data. Yours are still showing at the meeting name.

Please look at our [TSML demo](https://demo.code4recovery.org/meetings) to see how the display should look for the meeting list.

Have you added custom types for online meetings so as to not use the conference URL or Phone fields? The single meeting page seems to indicate this. If those fields are not sued, these meetings will likely not show as online in Meeting Guide (per their spec).

v3.11 strives to make significant improvements in how we handle the myriad attendance options. I know groups developed their own approaches (or tweaked our early efforts) to handle online meetings. Our goal is to make those modifications unnecessary and improve data accuracy for Meeting Guide.

My best suggestion is to roll your changes back and let the TSML approach work as designed. This will also help ensure your meetings reflect correctly in Meeting Guide.

<div class="c4r-source">Source: [Discussion #453](https://github.com/code4recovery/12-step-meeting-list/discussions/453)</div>

</details>


### Pull from Data Sources automatically - possible? {#pull-from-data-sources-automatically-possible}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello Ninjas!

We have configured a Data Source. We have successfully pulled in the feed. Everything works as expected. We can refresh the feed at intervals to download changes by manually initiating them. Again, all of that works perfectly! Excellent.

The only question is: Can this be set to refresh automatically? For instance 1X or 2X per day, or even 1X/Week without manual intervention.

Thank you for your attention and cheerful service!
-
Your Drunk District-14 DCM
David
(757) 652-1711

**Answer** _by @dcfnet_

Thank you so much for the reply! The plugin keeps improving and moving forward. I think the work you doing is excellent!

We will refresh the data feed manually at regular intervals. No worries. Thanks again!
-
Your Drunk District-14 DCM
David
(757) 652-1711

From: brianw-area24 ***@***.***&gt;
Sent: Tuesday, January 18, 2022 12:28 PM
To: code4recovery/12-step-meeting-list ***@***.***&gt;
Cc: David Francis ***@***.***&gt;; Author ***@***.***&gt;
Subject: Re: [code4recovery/12-step-meeting-list] Pull from Data Sources automatically - possible? (Discussion #645)


Unfortunately, this is not possible at this time. This is a feature that 2 or 3 of us have tried at different times, and each time, we run into major roadblocks that prevent us from doing this. When I first started working on the TSML plugin, having the feeds refresh automatically was at the top of my wish list, but it turned into a much bigger change then I expected, but it was a good way for me to learn more about how WordPress and the TSML plugin work.

One of our members is working on something we hope to integrate into the plugin that would notify the site admin when a feed changes, so they'd know when to go in an do a manual refresh of the feed. At this point I'm not sure when this will be released, but we're really excited about this as a step forward in handling feeds.

Brian W.

—
Reply to this email directly, view it on GitHub&lt;https://github.com/code4recovery/12-step-meeting-list/discussions/645#discussioncomment-1992073&gt;, or unsubscribe&lt;https://github.com/notifications/unsubscribe-auth/AXLAOUFYOG6I6MHTRLJ7UKDUWWPJFANCNFSM5MFMY56Q&gt;.
Triage notifications on the go with GitHub Mobile for iOS&lt;https://apps.apple.com/app/apple-store/id1477376905?ct=notification-email&mt=8&pt=524675&gt; or Android&lt;https://play.google.com/store/apps/details?id=com.github.android&referrer=utm_campaign%3Dnotification-email%26utm_medium%3Demail%26utm_source%3Dgithub&gt;.
You are receiving this because you authored the thread.Message ID: ***@***.******@***.***&gt;&gt;

<div class="c4r-source">Source: [Discussion #645](https://github.com/code4recovery/12-step-meeting-list/discussions/645)</div>

</details>


### Can User "Generate PDF" without being in wordpress dashboard? {#can-user-generate-pdf-without-being-in-wordpress-dashboard}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi all, always grateful for what the developers do and have done for our community.

My question is if there is a way for a user to create a PDF to print from what they have filtered through on the website. I see the Generate PDF button on the dashboard of wordpress, but what we're really trying to find is a way for the AA meber who logs onto our website, or even a treatment professional, to be able to print a meeting list from what they are searching and have filtered on the public meeting page.

For example. A newcomer goes to the library for internet and searches for meetings on Tuesday in District 1. Can he then print out that list of meetings from what he has searched?

Really hoping this is possible! Thank you again.

**Answer** _by @tech2serve_

Dang. Every now and again, we completely miss a posted question. I apologize profusely for this, and promise we'll continue to strive to respond to user questions in a timely manner.

The short answer is we don't directly support what you're requesting, and I don't believe we would consider it since the OS already provides a pretty simple solution.

The simplest solution is for the end user to make a screen cap of the filtered meeting list, and then print that to a PDF.  Make sense?

<div class="c4r-source">Source: [Discussion #650](https://github.com/code4recovery/12-step-meeting-list/discussions/650)</div>

</details>


### Add a new category {#add-a-new-category}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

District6wc@gmail.com

### Requested Feature/Enhancment

Can I get some clarification on how to handle the XYZ here?

if (function_exists('tsml_custom_types')) \{
		tsml_custom_types(array(
			'XYZ' =&gt; 'My Custom Type',
		));
	\}

1. Be careful with the codes ("XYZ" in the above example) as this gives you the ability to replace existing types.
Should I just create a random 3 letter sequence for each new category?

Thank you
Rose L

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

**Answer** _by @tech2serve_

"XYZ" should be whatever code (usually an abbreviation) you want to use for your custom type: "My Custom Type". While most users won't ever see this, you probably want it to be meaningful to you.

For example, let's say you want to add a custom type for meetings that serve special cake, you might set the key as "CAKE" and the description as "Special Cake Meeting".

Here are the [current accepted types](https://github.com/code4recovery/spec#meeting-types) for the spec used by Meeting Guide, but if I remember right you're Al-Anon so it shouldn't matter too much if you want to overwrite them. 

BTW, I'm glad you're coming here for help, but please don't open issues. As the directions say, please open a Discussion when you need something. If the maintainers decide a bug is present, or they validate a new feature, we'll open an issue for it.

Thanks.

<div class="c4r-source">Source: [Discussion #733](https://github.com/code4recovery/12-step-meeting-list/discussions/733)</div>

</details>


### REGION is different when viewed from different websites {#region-is-different-when-viewed-from-different-websites}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Dear friends,**

The REGION isn't the same when viewed from two different sites.

When filtering for the meeting Morton, the REGION is different on SEPIA website (1) than Area 59 website (2)

(1) https://aasepia.org/?search=morton

(2) https://area59aa.org/find-a-meeting/?search=morton

Area 59 uses the feed provided by SEPIA.

?? Is there a reason for this inconsistency ??

Thank you in advance.

**Scott Fritzinger**  |  Area 59 Web Servant  |  (610) 762-7792

![Morton-SEPIA](https://user-images.githubusercontent.com/95769327/219121834-30c5bf58-7586-4e0a-8369-33e2d6f78036.jpg)

![Morton-A59](https://user-images.githubusercontent.com/95769327/219121864-74fea18c-c64a-47d7-8201-deb6ec51747d.jpg)

**Answer** _by @kiyote33_

Hey @fritzisa, we'll have a fix for this issue in the upcoming 3.15 major release for TSML. In the meantime, you could drop the following code in your (child) theme functions.php file to resolve this problem until 3.15 is ready: 
```
if (!function_exists('tsml_import_reformat')) \{
	function tsml_import_reformat($imported_data) \{
		$meetings = array();

		foreach ($imported_data as $meeting) \{ 
			
			if (is_array($meeting['regions']) !== false) \{
				$meeting['region'] = $meeting['regions'][0];
				if (count($meeting['regions']) &gt; 1) \{$meeting['sub_region'] = $meeting['regions'][1];\}	    
			\}			
                        array_push($meetings, $meeting);
		\}
		return $meetings;
	\} 
\}
```

<div class="c4r-source">Source: [Discussion #1078](https://github.com/code4recovery/12-step-meeting-list/discussions/1078)</div>

</details>


### Google Calendar as a JSON data source {#google-calendar-as-a-json-data-source}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is it possible to use a Google calendar as a JSON data source to automatically pull in meetings to TSML?  A district I am supporting has been manually entering meetings into the plugin but would like to switch to using a Google Calendar for their data entry.  If this is still possible, does anyone have any instructions on obtaining the google link?

**Answer** _by @kiyote33_

Hi @lewiskerns, I don't believe we support pulling a Google calendar json file directly, but we do have support for Importing Google Sheets. You can see documentation on our website at [https://sheets.code4recovery.org/](https://sheets.code4recovery.org/). Let us know if this is what your looking for.

<div class="c4r-source">Source: [Discussion #1143](https://github.com/code4recovery/12-step-meeting-list/discussions/1143)</div>

</details>


### Types Filter as a checkbox instead of a single select {#types-filter-as-a-checkbox-instead-of-a-single-select}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I am currently using TSML to create a list of international meetings. I've been playing with making the Types filter a dropdown box with checkboxes so that I can search for different types of meetings at once. For example. Let's say I filtered for all the meetings in California, I'd like to be able to search by Open OR LGBTQ meetings and have the filter return all the open meetings in California OR all the LGBTQ in California. I've created the dropdown and the logic for how it works UX-wise. I am looking for some guidance about sending an Array of Types to query results. Thanks! Please let me know if I can provide any additional information.

**Answer** _by @joshreisner_

hi @steve970 are you using TSML UI or Legacy? since you're asking about sending an array i'm guessing you're using Legacy? one reason to consider TSML UI is that it has a timezone-agnostic option

it's a little-known fact that we do actually support multiple selections in the types menu on both of these, but it's hard to discover and limited to desktop only. we have a [backlog ticket to update the filters UI for this](https://github.com/code4recovery/tsml-ui/issues/171) on TSML UI but the limitation for us has been not finding a good design, so i'm interested to see what you come up with

the way you trigger this mode is to hold down the command key on mac, or the equivalent key on windows (maybe it's the windows key or the ctrl key?) while you make your second click. 

caveats: 
* this only works on the types menu in legacy, using AND logic (not OR logic)
* on TSML UI it applies OR logic on days, times, and regions, but AND logic on types

anyway, to answer your question, you can concat the `type` with a comma in your POST in legacy

&lt;img width="1728" alt="Screenshot 2024-10-09 at 3 08 06 PM" src="https://github.com/user-attachments/assets/c1e15b7d-b2a3-4222-9e81-e764f9c2e1f6"&gt;

<div class="c4r-source">Source: [Discussion #1537](https://github.com/code4recovery/12-step-meeting-list/discussions/1537)</div>

</details>


### Spanish language meetings not sortable/discoverable by type when browser language switched to Spanish (Marijuana Anonymous) {#spanish-language-meetings-not-sortable-discoverable-by-type-when-browser-languag}

<details>
<summary>Show question &amp; answer</summary>

**Question**

This issue seems to be specific just to the Spanish language, as all others work as expected. 

**Expected behavior:** 
'Spanish' appears as a sortable meeting type when browser language is set to English;  'Espanol' appears as a sortable meeting type when browser language is set to Spanish.

&lt;img width="1507" height="848" alt="image" src="https://github.com/user-attachments/assets/a73e527a-f80e-486f-9c5c-b50a901d6691" /&gt;

**Actual (Current) Behavior:** 
When a user browses our site with their browser set to Spanish language, they are not able see any facet taxonomy terms to sort languages by Spanish (Espanol). This looks to be a taxonomy/filtering issue inherent in our type variables.

&lt;img width="1430" height="686" alt="image" src="https://github.com/user-attachments/assets/68d2ddad-c8ed-4e1a-9964-c72b95243613" /&gt;

You can test this for yourself at [marijuana-anonymous.org/meetings](url).

Any idea how to fix?

**Answer** _by @mawsInternet_

OK, I fixed this using @pjaudiomv's suggestion, here's our code that worked (now all custom types show up in Spanish):

```
$tsml_ui_config = [
    'now_offset' =&gt; -20,
    'strings' =&gt; [
        'en' =&gt; [
            'types' =&gt; [
                'inactive' =&gt; 'See Meeting Notes',
                'CCAP' =&gt; 'Closed Captions',
                'LGBTQI+' =&gt; 'LGBTQI+',
                'Open' =&gt; 'Open',
            ],
            'in_progress_single' =&gt; 'CLICK HERE FOR 1 MEETING IN PROGRESS',
            'in_progress_multiple' =&gt; 'CLICK HERE FOR %count% MEETINGS IN PROGRESS',
        ],

        'es' =&gt; [
            'types' =&gt; [
                'inactive' =&gt; 'Ver notas de la reunión',
                'CCAP' =&gt; 'Subtítulos',
                'LGBTQI+' =&gt; 'LGBTQI+',
                'Open' =&gt; 'Abierta',
				'ES' =&gt; 'Español',
            ],
            'in_progress_single' =&gt; 'HAZ CLIC AQUÍ PARA 1 REUNIÓN EN PROGRESO',
            'in_progress_multiple' =&gt; 'HAZ CLIC AQUÍ PARA %count% REUNIONES EN PROGRESO',
        ]
    ]
];
```

<div class="c4r-source">Source: [Discussion #1922](https://github.com/code4recovery/12-step-meeting-list/discussions/1922)</div>

</details>


### Type filter button missing {#type-filter-button-missing}

<details>
<summary>Show question &amp; answer</summary>

**Question**

How do I make my Type filter search button reappear and include type in meeting details?

http://melodytea.042c700.netsolhost.com/meetings/?tsml-day=4

**Answer** _by @brianw-area24_

Do your meetings have types selected? The only way I was able to recreate this on my test site was to take away all the types on all the meetings on the site. As soon as I edited a meeting and made sure it had a type, the Type filter search button came back for me.

Brian W.

<div class="c4r-source">Source: [Discussion #583](https://github.com/code4recovery/12-step-meeting-list/discussions/583)</div>

</details>


### Filters Don't Work Until Refresh of Page {#filters-don-t-work-until-refresh-of-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I've been having a problem for some time now that when I change a filter it won't show the new results until I refresh the page with F5.

**Answer** _by @tech2serve_

Please [read this](https://github.com/code4recovery/12-step-meeting-list/discussions/412#discussion-3447102) and edit your question in order for us to help you better.

I will say the issue you’ve described occurs most often for users when there is a conflict being caused by something else on your site. If you search the discussions (or issues) here, you’ll see a number of other similar topics (i.e.,, unexpected filtering behaviors) and by looking in the dev/debugging console of your web browser, or disabling other plugins, you’ll likely isolate the cause and be able to fix things.

If you’re still stuck, please edit your question and we’ll take a closer look.

Yis, Tim

<div class="c4r-source">Source: [Discussion #590](https://github.com/code4recovery/12-step-meeting-list/discussions/590)</div>

</details>


### Multiple Filter Request {#multiple-filter-request}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello, might it be possible to select multiple filters? For example, online + spanish, or,  in person + lgbt + literature

**Answer** _by @joshreisner_

you can technically do this now, although it's currently only possible with a desktop keyboard. on mac you hold down the `command` key when selecting the second/third type (on windows i think it's either the windows key or the ctrl key)

here is in person + lgbt + literature: https://www.nyintergroup.org/meetings/?tsml-day=any&tsml-type=LGBTQ%2CLIT&tsml-attendance_option=in_person

<div class="c4r-source">Source: [Discussion #808](https://github.com/code4recovery/12-step-meeting-list/discussions/808)</div>

</details>


### Sharing data with other districts, areas {#sharing-data-with-other-districts-areas}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi all - 

I know there's a way to do this; however, I am having trouble finding the answer here.  Can someone direct me please?  Thank you!
Jodie S., TC, MI

**Answer** _by @kiyote33_

Hi Jodie @jackieoh1, You can view a couple of videos on our [website ](https://code4recovery.org/)"How To" pages. Two that might be of interest to you are: 

1. [Use the 12 Step Meeting List on your Website](https://code4recovery.org/how-to-use-the-12-step-meeting-list), and
2. [List Meetings from Multiple Autonomous Organizations](https://code4recovery.org/how-to-list-meetings-from-multiple-organizations)
Let us know if you need more help...

<div class="c4r-source">Source: [Discussion #934](https://github.com/code4recovery/12-step-meeting-list/discussions/934)</div>

</details>


### "No meetings were found matching the selected criteria." {#no-meetings-were-found-matching-the-selected-criteria}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi, 

Whenever I access our meetings page I get an error stating "No meetings were found matching the selected criteria". I don't have any filters specified and there are plenty of active meetings. Has anyone experienced this before?

URL: https://area82aa.org/meetings/

&lt;img width="1294" alt="Screen Shot 2021-09-27 at 6 51 58 PM" src="https://user-images.githubusercontent.com/86302482/134990593-48a7f1b2-fba5-4cb9-8b59-d90499e0ace2.png"&gt;

**Answer** _by @97eighty_

@Area82 

I just looked at your page and the meetings are listing correctly.

<div class="c4r-source">Source: [Discussion #539](https://github.com/code4recovery/12-step-meeting-list/discussions/539)</div>

</details>


### Switch to districts {#switch-to-districts}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi

We currently only have the option on our website to filter meetings by region - https://meetings.cawales.org.uk/meetings

Another area has the option to switch to districts in their filter option - https://meetings.cocaineanonymous.org.uk. How can we enable this function please? Each group has been assigned a district, we just don't currently have the option to filter through this option. 

If coding is required, please give clear cut directions on where this needs to go as we're novices :)

Many thanks in advance for your help and for creating this amazing, user friendly plug in :)

**Answer** _by @CAWales_

Hi, I have entered district information for every meeting. Unsure why it’s not showing?

<div class="c4r-source">Source: [Discussion #612](https://github.com/code4recovery/12-step-meeting-list/discussions/612)</div>

</details>


### Generate PDF in Region,Day order {#generate-pdf-in-region-day-order}

<details>
<summary>Show question &amp; answer</summary>

**Question**

The original half page PDF layout created a booklet in Region, Day order. However, we need a booklet with a page size of 5.5 x 8.5 and when we use the new Generate PDF, the only two sorting options are Day, Region or Day. It would be perfect for us if it had the Region, Day option as well. Is there any way to do this or could it be added to the Generate PDF page as an option?

I tried using Chris Toews' plugin, but it didn't give me the layout I need unfortunately.

**Answer** _by @joshreisner_

I should be able to handle that! I moved [your issue](https://github.com/code4recovery/pdf/issues/24) to the PDF project repo

<div class="c4r-source">Source: [Discussion #716](https://github.com/code4recovery/12-step-meeting-list/discussions/716)</div>

</details>


### New Update - no longer showing our meetings - Time Zone {#new-update-no-longer-showing-our-meetings-time-zone}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Thank you for your service & creating this magnificent plug in that has been helpful to so many.
our website:  https://daccaa.org/meetings/

Since the last update our website is no longer showing all of the meetings for that day as the default. It is adjusting to what it thinks is the next meeting for the day, only we may be in a different time zone that what it is posting.  

From what I can tell the updated version of the plugin, it defaults to anyday, anytime, any type, anywhere but only posts what it believes to be the next meeting of the day:

![image](https://user-images.githubusercontent.com/90991939/184016614-40a3ae36-cbae-46c5-8afb-ddb3be999a06.png)

It is currently 2:45pm Mountain time. There is a 2pm meeting going on & several 3pm meeting - none are showing. 
It is saying our next meeting is at 5pm Mountain time. Also, has the search by district feature been completely removed? Our fellowship uses this often.  Please assist. 

I pasted a screen shot.

Thank you for your time.

Abby Hoke, Office Manager, DACCAA

**Answer** _by @joshreisner_

hi @aeb-denver-CO ! sounds like it thinks it's on new york time. is the timezone on your site set correctly? check in Wordpress Dashboard &gt; Settings

<div class="c4r-source">Source: [Discussion #897](https://github.com/code4recovery/12-step-meeting-list/discussions/897)</div>

</details>


### Day Filters:  Only display meetings up to 12:00pm {#day-filters-only-display-meetings-up-to-12-00pm}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Team.

Harbor Area Central Office - www.hacoaa.org

When searching for meetings, filtering by day (not the default of Any Day), the database only returns meetings up through the noon hour (12pm).  The default of Any Time is on.  This is causing rumbles amongst the volunteer staff.

Is this a bug?  Or a setting that needs adjusting?

Please advise.

Faith Barnese
faith@barnesegroup.com

**Answer** _by @joshreisner_

@fbarnese ugh sorry i am confident this will work if you change it to 

```
html \{ height: auto !important; \}
```

<div class="c4r-source">Source: [Discussion #1177](https://github.com/code4recovery/12-step-meeting-list/discussions/1177)</div>

</details>


### Meeting title color contrast {#meeting-title-color-contrast}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I want to be sure our the Meeting page on our district website is clear and there is enough contrast between the text and the background so that it is accessible to all (ie. colorblind, low vision). I am concerned the Meeting names, which are a blue link, are not dark enough.
url: https://aa-nia-dist43.org/meetings/
Divi theme 
wordpress version 6.5.5
12 step meeting list version 3.14.35
I tried applying #tsml \{ color: black; \} in 'Customizing' &gt; Additional CSS, but it did not appear to change anything. This was from a search for a similar discussion. The answer that worked in that discussion did not work for me.
I appreciate any help you can offer. I am new to web admin and I don't code, so simple explanations are appreciated. Thank you, we really love your product. It's brilliant!

**Answer** _by @joshreisner_

yah, where you set the black color also `background: white;` - this should really bring out the contrast. or you could try the TSML UI appearance, that might also fix it, but i'm not 100% sure

<div class="c4r-source">Source: [Discussion #1458](https://github.com/code4recovery/12-step-meeting-list/discussions/1458)</div>

</details>


### Excluding certain meetings from the Main listing {#excluding-certain-meetings-from-the-main-listing}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there a way I can exclude all meetings classified as Online or Inactive from our main meetings list?  I want the main list just to be in-person meetings.    I created a list of Meetings we classified as Virtual using:  https://sca-recovery.org/WP/meetings/?tsml-region=virtual. 

But I am not sure what parameters I would use to exclude Online and Inactive meetings.  Any help greatly appreciated!  Greg

**Answer** _by @tim-rohrer_

Try https://sca-recovery.org/WP/meetings/?tsml-attendance_option=in_person to see if that works for you.

<div class="c4r-source">Source: [Discussion #1621](https://github.com/code4recovery/12-step-meeting-list/discussions/1621)</div>

</details>


### "See Meeting Notes" disappearing when day is selected {#see-meeting-notes-disappearing-when-day-is-selected}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey C4R - I'm a member of the Marijuana Anonymous team. A bug was reported to us around any meeting with the classification "See Meeting Notes" falling off of search results when any other filter criteria is also selected. 

For example, we have a meeting called Radical Acceptance. When you search for the meeting name within the search bar it shows up. See this link: https://marijuana-anonymous.org/meetings/?search=radical 

As soon as the day filter is selected, it's no longer visible. See this link: https://marijuana-anonymous.org/meetings/?weekday=friday&search=radical

**Answer** _by @joshreisner_

ok should be fixed now thanks to some quick work by @pjaudiomv 🙏 🏅

<div class="c4r-source">Source: [Discussion #1837](https://github.com/code4recovery/12-step-meeting-list/discussions/1837)</div>

</details>


### New 12 step fellowship request, CMA = Crystal Meth Anonymous {#new-12-step-fellowship-request-cma-crystal-meth-anonymous}

<details>
<summary>Show question &amp; answer</summary>

**Question**

New 12 step fellowship request, CMA = Crystal Meth Anonymous

We love your plug-in and several of our local groups have begun using it.
At your convenience, could we be added to the available groups.

Meeting Type:
- ASL Interpreted
- Beginner
- Children Welcome
- Closed (Addicts Only)
- Open (Guests Welcome)
- Online (only)
- Handicapped Accessible
- HIV+/AIDS
- Hybrid (Online and In-Person)
- LGBTQ+
- Leather/Kink
- Literature Study
- Men Only
- Outdoor Meeting
- People Of Color
- Smoking Area
- Smoking Permitted
- Smoking Area
- Spanish Speaking
- Speaker Meeting
- Step Study
- Transgender
- Women Only
- Young People


Thank you in advance,
Pete S.
Los Angeles

**Answer** _by @97eighty_

Proposed.

		'cma' =&gt; [
			'abbr' =&gt; __('CMA', '12-step-meeting-list'),
			'flags' =&gt; ['M', 'W', 'TC', 'ONL'], //for /men and /women at end of meeting name (used in tsml_format_name())
			'name' =&gt; __('Crystal Meth Anonymous', '12-step-meeting-list'),
			'type_descriptions' =&gt; [
				'C' =&gt; __('Closed meetings are for C.M.A members only, or for those who have a using problem and “have a desire to stop using.”', '12-step-meeting-list'),
				'O' =&gt; __('Open meetings are available to anyone interested in Crystal Meth Anonymous’ program of recovery from using. Non users may attend open meetings as observers.', '12-step-meeting-list'),
			],
			'types' =&gt; [

				'ASL' =&gt; __('Sign Language', '12-step-meeting-list'),
				'C' =&gt; __('Closed', '12-step-meeting-list'),
				'LGBTQ' =&gt; __('LGBTQ', '12-step-meeting-list'),
				'LIT' =&gt; __('Literature', '12-step-meeting-list'),
				'M' =&gt; __('Men', '12-step-meeting-list'),
				'BE' =&gt; __('Newcomer', '12-step-meeting-list'),
				'ONL' =&gt; __('Online (only)', '12-step-meeting-list'),
				'O' =&gt; __('Open', '12-step-meeting-list'),
				'OUT' =&gt; __('Outdoor Meeting', '12-step-meeting-list'),
				'POC' =&gt; __('People of Color', '12-step-meeting-list'),
				'SM' =&gt; __('Smoking Permitted', '12-step-meeting-list'),
				'S' =&gt; __('Spanish', '12-step-meeting-list'),
				'SP' =&gt; __('Speaker', '12-step-meeting-list'),
				'ST' =&gt; __('Step Meeting', '12-step-meeting-list'),
				'T' =&gt; __('Transgender', '12-step-meeting-list'),
				'TC' =&gt; __('Location Temporarily Closed', '12-step-meeting-list'),
				'W' =&gt; __('Women', '12-step-meeting-list'),
				'Y' =&gt; __('Young People', '12-step-meeting-list'),
				'X' =&gt; __('Wheelchair Access', '12-step-meeting-list'),
				'XB' =&gt; __('Wheelchair-Accessible Bathroom', '12-step-meeting-list'),
			],
		],

<div class="c4r-source">Source: [Issue #169](https://github.com/code4recovery/12-step-meeting-list/issues/169)</div>

</details>


### Error: JSON: Syntax error, malformed JSON. {#error-json-syntax-error-malformed-json}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Dear Code4Recovery friends,**

I have (2) feeds that pass the validator but give me an error message when Refreshing or Adding Data Source.

District 42 (VALID)
https://padistrict42.org/wp-admin/admin-ajax.php?action=meetings&key=854aec833cc75bb085e64a72b899a2bb

District 35 (VALID)
https://www.d35pa-aa.org/wp-admin/admin-ajax.php?action=meetings&key=c092a973561757a0f800a6bc5822dd2

Any assistance would be greatly appreciated.

Thank you,

**@scott_f**
Area 59 Web Servant
https://area59.aa.org

&lt;img width="1254" alt="Screen Shot 2022-04-22 at 4 05 25 PM" src="https://user-images.githubusercontent.com/95769327/164786892-45d02550-894a-4d6e-9d70-a23eba512bd2.png"&gt;
a

**Answer** _by @joshreisner_

ok here's how i would do it - there are likely to be several ways to do this though:

1. create a new "page" in wordpress called "test" -- it doesn't need any content, make sure the the permalink is `test` (or if that's already taken, remember what the permalink was)
2. navigate to this page, you should see a more-or-less empty page, except navigation and site branding
3. create a new text file in your active theme folder (via FTP or File Manager). call it `page-test.php` (or whatever your page slug was)
4. hit refresh in your browser, now the page should be purely blank white
5. now you should be able to drop some code in the page and have it running inside wordpress
6. try adding following code, and then hit refresh:

```
&lt;pre&gt;
&lt;?php
print_r(wp_remote_get('https://www.d35pa-aa.org/wp-admin/admin-ajax.php?action=meetings&key=c092a973561757a0f800a6bc5822dd2a'));
```

<div class="c4r-source">Source: [Discussion #782](https://github.com/code4recovery/12-step-meeting-list/discussions/782)</div>

</details>


### Were Districts removed from region drop down? {#were-districts-removed-from-region-drop-down}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

os.website.a86@gmail.com

### Website With Issue

www.osatest.al-anon.alateen.on.ca

### What happened?

I think I have mentioned this before but I perceive this as a bug: where did the district option go in the region drop down?
I know districts are an administrative element of how meetings are spread over the area. But existing members use them to double check all meetings in their district region. Is this coming back? Who agrees with me that this is a useful feature to hold on to?

I have not installed the latest version yet but I am running on Wordpress 6 on my staging site. The site is under construction but I am sure you don't need to access it to identify this lost feature.

### TSML Version

Other (Identify version in text above)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

_No response_

### Relevant log output/errors

_No response_

**Answer** _by @joshreisner_

no, it's a conscious decision not to include "switch to districts" functionality in TSML UI. please see https://github.com/code4recovery/tsml-ui/issues/125 and https://github.com/code4recovery/12-step-meeting-list/discussions/762#discussioncomment-2568747

you can still search for districts using keyword search

<div class="c4r-source">Source: [Discussion #856](https://github.com/code4recovery/12-step-meeting-list/discussions/856)</div>

</details>


### Al-ateen Zoom showing as inactive {#al-ateen-zoom-showing-as-inactive}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We have a meeting, https://alanonalateen6nc.org/meetings/alateen-wake-forest/?tsml-day=any&tsml-region=wake-forest-nc, that has gone back to Zoom only for now. Since it is Al-ateen they do not publish the zoom link. When I make this change the meeting is showing up as inactive. I saw a similar discussion listing this as a bug but couldn't find a resolution. IS there a way to list this meeting as active without a zoom link?

Thank you
Rose L

**Answer** _by @joshreisner_

Hi Rose, by default a meeting won't be considered online if there is no online info present.

Is there a password on the meeting? Although we don't recommend it, one simple workaround might be to publish the meeting link without the password, eg `https://zoom.us/j/0192830123` without the `?pwd=o8saruyiw37hfls83qhk`

Another, more technical workaround might be to publish a new 'support' page on your website that instructs users to contact district6altc@gmail.com to request an invitation to an alateen meeting, and then add that page's full URL as the conference URL. To make this work, you will need to add the following to your theme's functions.php:

```
$tsml_conference_providers = array_merge($tsml_conference_providers, [
    'alanonalateen6nc.org' =&gt; 'Invitation Only'
]);
```

Then the button will say "Join with Invitation Only" and link to the page you just created.

<div class="c4r-source">Source: [Discussion #1037](https://github.com/code4recovery/12-step-meeting-list/discussions/1037)</div>

</details>


### Breakout into Districts {#breakout-into-districts}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi, I've been using the plugin for years. Beyond awesome. I love the new UI. I was just wondering if there is a way to separate meetings out into Districts without having to put it on a "custom link" [search]. Is there a search term I could use to turn the Districts into distinct pages? It's for an al-anon intergroup [service center] that serves 9 districts. Sorry if I am not explaining very well. I know enough code to be dangerous and don't want to screw anything up!
Thanks in advance,

Wendy

**Answer** _by @joshreisner_

Hi Wendy, sounds like you're asking about TSML UI not supporting the "switch to districts" option in the Anywhere dropdown, and how you have to create your own menu of districts to link people to district-level lists? 

If so, we don't currently have a plan to implement that feature in TSML UI, but believe that it should be able to work around this limitation pretty easily in your own site navigation - if you could share a link to your website we can better advise

<div class="c4r-source">Source: [Discussion #1158](https://github.com/code4recovery/12-step-meeting-list/discussions/1158)</div>

</details>


### Attendance Options {#attendance-options}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Greetings,
Thank you, Code4Recovery for all you do, especially for the newcomer!
I'd like to get some clarity regarding the three attendance options. 'In-person', 'Online', and 'In-person and Online'.
I recently contacted a neighboring district's website devs/editors to sync up our meeting schedules posted online. To me the options are self-explanatory and simple. I've seen some varied interpretations of the "In-person and Online" option, so, would anyone out there like to set the record straight on this?
Thank you---

**Answer** _by @joshreisner_

hi, i'm a TSML dev and we've written about this here: 

&gt; Why no "Hybrid" type?
&gt;
&gt; This app exists to help people find AA meetings, and after much discussion we decided that Hybrid was not a useful filter type for that purpose. We believe that people on the whole do not set out looking for a hybrid meeting, they simply want to know whether their online or in-person meeting happens to be hybrid. They will know this by its appearance in the list.
&gt;
&gt; Second, while we can infer that a meeting is "online" if there is a Zoom URL (for example) in the listing, the app should not assume that, when there are online and in-person options, that means it is an actual "hybrid" meeting with a video screen and speakers in the room.
&gt;
&gt; Web servants may [add their own meeting types](https://github.com/code4recovery/tsml-ui#add-custom-types) of course.

as an individual looking for a meeting, i think you and i are aligned. i would expect that meetings listed with both in person and online options like this one have an a/v system in the room:

![both](https://github.com/code4recovery/12-step-meeting-list/assets/1551689/46b6028b-52fb-4b15-88a8-4710c267ec8d)

many groups in san jose choose to conduct parallel meetings and list them separately, this sounds like it's your preference too, and, i think, the norm.

![parallel](https://github.com/code4recovery/12-step-meeting-list/assets/1551689/dc32a873-c14c-4651-8739-ab5657330745)

not sure how we could engineer a solution for your neighboring district. if we started displaying their concurrent / parallel meetings as "hybrid" i'm sure we'd get a stern message from them demanding to know why we suddenly changed it ;) 

also while "hybrid" is the prevailing term for this type of meeting among members, i'm not sure that it actually does make much sense to someone looking at a meeting list for the first time. not like "Online & In-Person" would.

at any rate, i'll flag this for the other developers, perhaps they have more to say on the matter!

<div class="c4r-source">Source: [Discussion #1171](https://github.com/code4recovery/12-step-meeting-list/discussions/1171)</div>

</details>


### Problems with plugin translation {#problems-with-plugin-translation}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We are in Canada and so some of our users speak French as their first language. Our whole site is not bilingual, but because of this plugin it seems our meetings page is!  So first, yay! I didn't expect this.

However, there were a couple of problems.

First, one of the meeting types seems to be substituted with another in French. This is a Debtors Anonymous site but, in French, the Business Owner meetings are showing as Big Book meetings — but only in French. Is this a bug? Or do I just need to configure something else to make it work correctly in French. We have International members as well, should I configure multiple languages?

Also, there is trouble with the meeting type descriptions. I had substituted new descriptions for Closed meeting to reflect our program, but Closed meetings for example seem to have a French version of the original AA description. I am guessing there is more for me to configure here. Once again, how many languages should I configure — and how?

Thank you so much for what you do and all your patience!

**Answer** _by @SIA-WEBSUP_

I'm still figuring out how WP handles translations, but what I can tell you is that the plugin doesn't house its own set of translation strings. It relies on WP to do the translation and the process to add a new string to the 'translation library' for a given plugin is not as straightforward as one might imagine.

I was thinking a workaround that would be rather straightforward would be to add a custom type for 'Business Owner' that has the type in English and French. Unfortunately this wouldn't be a great solution for the description unless you were willing to have the description in English and French which I imagine would be a little long. 

Here is the code that I was imagining:
```
if (function_exists('tsml_custom_types')) \{
	tsml_custom_types(array(
		'BOA' =&gt; "Business Owner / Propriétaire d'entreprise",
	));
\}
```

<div class="c4r-source">Source: [Discussion #1394](https://github.com/code4recovery/12-step-meeting-list/discussions/1394)</div>

</details>


### Sort by district on VAC Meeting List {#sort-by-district-on-vac-meeting-list}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi all! 

So, a fellow GSR pointed out that the VAC meeting list - https://aavirginia.org/meetings/ - used to let you sort by district but doesn't anymore. Did that feature move? Am I looking in the wrong place? If it was removed, is that a feature we can consider re-adding? I know GSRs have mentioned its usefulness for tracking meetings in their district and putting a little order to the chaos. Many thanks for pointing me in the right direction! 

Best, 
E

**Answer** _by @joshreisner_

hi, yes, the "Switch to Districts" mode came out of the UI because only a small subset of overall users know what districts are, however the functionality is still there if you use the search. for example:

https://aavirginia.org/meetings/?search=%22District+39%22

one approach the web servant could take to add back this feature without searching would be to add links to this existing page which has information about the districts: https://aavirginia.org/member-services/virginia-area-districts/, for example:

```
&lt;a href="/meetings/?search=%22District 12 - Newport News%22"&gt;View Meetings in District 12&lt;/a&gt;
```

&lt;img width="439" alt="Screenshot 2024-08-03 at 12 34 09 PM" src="https://github.com/user-attachments/assets/90918220-5809-42e0-b5d7-8366e9ecb17c"&gt;

<div class="c4r-source">Source: [Discussion #1479](https://github.com/code4recovery/12-step-meeting-list/discussions/1479)</div>

</details>


### Meeting Reporting {#meeting-reporting}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi Team, 

Is there a way to create a 1 line auto fill when you email an Area District or Central Office through the app that said _" Please describe the issue with this meeting?"_

For whatever reason the people in the Cincy Metro area love tapping the button to report with no content about the meeting. We've waivered back and forth on creating more work by reaching out to ask what the issue is to deleting the email and moving on to the next thing. This is of course assuming that the prompt will encourage them to type something. We could just end up with emails with the statement too. LOL Just a thought.

**Answer** _by @SIA-WEBSUP_

That’s a great idea! In my experience, people often send emails containing only the boilerplate text—just the meeting details from the "Email" button in the Meeting Guide app—without any additional information.

This makes it nearly impossible to tell whether the email was sent accidentally or if they have a specific question.

In Suffolk County, we typically respond with a standard reply, which looks like this:
 - [Email Reply to Meeting Guide App Meeting Inquiry Emails](https://docs.google.com/document/d/1oA6EvIvusY0BjhZceX6wwDYwi_T_Xx3OW3R9qhvpauA/)

But I like your idea of adding a little line guiding folks to add info on what they are looking for.

If you are suggesting this for the app, you might email GSO App support with the idea at [appsupport@aa.org](mailto:appsupport.org) directly.

If you are suggesting this related to the emails generated by the 'Meeting Feedback' buttons in the plugin or TSML-UI, let us know and  we can certainly open up an issue in the appropriate repo.

<div class="c4r-source">Source: [Discussion #1647](https://github.com/code4recovery/12-step-meeting-list/discussions/1647)</div>

</details>


### French language translation issues {#french-language-translation-issues}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Right now, the french translation depends on the wp french translation team. Collaboration with them is difficult and they do not understand 12 steps groups that much. I`m currently webmaster for our provincial website regrouping regions 87-88-89-90. I did a change to the po-mo files to correct some issues, but the individual websites of our 4 regions can`t really benefit from this translation. The idea there would be that tsml github would contain the translation. The translation file would be updated via pull request. Another change would be needed so wp favor the plugin translation instead of the wp translation. Would you be open to that ? Thanks.

**Answer** _by @SIA-WEBSUP_

Unfortunately, TSML-UI does not yet support every language natively. To support additional languages, as well as custom programs the TSML plugin still needs to rely on WordPress translations and pass those strings to TSML-UI.

We’ll discuss this further within the development team.

In the meantime, here are two possible workarounds.

## Option 1: Override the type label in your child theme

The simplest approach is to override the type label in your child theme’s `functions.php`:

```
if (function_exists('tsml_custom_types')) \{
    tsml_custom_types(array(
        'C' =&gt; "'Fermé' better than 'A huis clos'",
    ));
\}
```
## Option 2: Create a customized translation file
The other way would be a bit more involved, but you could regenerate the needed `.mo` file with the strings your prefer:

1.  Download the correct `.po` from [wordpress](https://translate.wordpress.org/projects/wp-plugins/12-step-meeting-list/stable/fr-ca/default/)
2. Update the strings you want to change:
```
msgid "Closed"
msgstr "Fermé (better than 'A huis clos')"
```
3. generate a new `.mo` file from the updated '.po' file. On Linux :
```
msgfmt 12-step-meeting-list-fr_CA.po -o 12-step-meeting-list-fr_CA.mo
```
4. Place the new .mo file in the appropriate location:
```
cp 12-step-meeting-list-fr_CA.mo  \{WP root\}/wp-content/languages/plugins/12-step-meeting-list-fr_CA.mo
```

<div class="c4r-source">Source: [Discussion #1899](https://github.com/code4recovery/12-step-meeting-list/discussions/1899)</div>

</details>


### Feature Request: Filter counter {#feature-request-filter-counter}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I have a feature request:
Alongside the filters atop the meeting list, having a count of how many meetings match the filter criteria would be helpful. Our telephone hotline volunteers use the Meeting List to find meetings for people who call the hotline, this request came from their workflow.

**Answer** _by @joshreisner_

Looks great! Here's some CSS I would add to improve the appearance of the meetings page:
```css
body.tsml .col-full \{ margin: 0; \}
body.tsml .storefront-breadcrumb \{ display: none; \}
body.tsml #tsml td \{ background-color: transparent; \}
```

<div class="c4r-source">Source: [Issue #27](https://github.com/code4recovery/12-step-meeting-list/issues/27)</div>

</details>


### Remove the word District from District Dropdown {#remove-the-word-district-from-district-dropdown}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I can select "District" from the District dropdown when adding/editing a meeting and that should not be the case. It should be removed and certainly should not be the default choice. 

In our case, we have four districts entered as possible options and only these four should show up on the list.

![District](https://user-images.githubusercontent.com/62247421/145046562-9e4b94be-a1cd-40b1-98d0-2bc0582e3847.png)

**Answer** _by @tech2serve_

We agree with this, and I have created an issue to get it worked on. We’ll figure out how to leave it blank if one of the admin entered districts isn’t selected.

Hard to believe this has gone for so long without being caught! :-)

<div class="c4r-source">Source: [Discussion #586](https://github.com/code4recovery/12-step-meeting-list/discussions/586)</div>

</details>


### Showing Districts {#showing-districts}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Can you point me to the document to show how to use Districts? I have a client who wants to see their meetings with districts and filter by them.

**Answer** _by @joshreisner_

hi @dougie-wougie there's more info here - https://github.com/code4recovery/12-step-meeting-list/discussions/1479#discussioncomment-10232122 - essentially the "Switch to Districts" is not a feature in TSML UI, but you can build link to districts using search, and potentially build your own nav. 

for example, if this is an area site, you could have district pages that link to the meeting finder with the search term for that district applied. let us know if you have trouble implementing that, we're happy to help! but we feel certain that the "Switch to Districts" option does not belong in the menu with the regions, and that's not a feature that we're currently planning to add to TSML UI.

<div class="c4r-source">Source: [Discussion #1835](https://github.com/code4recovery/12-step-meeting-list/discussions/1835)</div>

</details>


### Feature request: Multi-select on 'Type' {#feature-request-multi-select-on-type}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Multiple selections (either via multiselect or checkboxes) for the Type would be very helpful. The Usecase for this is being able to select Literature (or Speaker, or Step Meeting, etc) AND apply the men/women/gay filter too.

Out hotline coordinator asked for this specifically. Right now the workaround is for the hotline volunteer to filter by 'Literature' and then observe in the list which meetings are marked 'men' or 'women'. The hotline coordinator would like to be able to filter more specifically.

I thought it was a useful feature so figured I'd bring it here.

**Answer** _by @joshreisner_

This was actually a feature in 1.0, but users complained that it wasn't intuitive because it didn't match the behavior of the other dropdowns. I will see if I can implement it with a modifier key though, the command key is standard on macs for multiple selection.

<div class="c4r-source">Source: [Issue #28](https://github.com/code4recovery/12-step-meeting-list/issues/28)</div>

</details>


### Browsing meetings in details view {#browsing-meetings-in-details-view}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I use this tool for an Area with 300+ meetings. Very frequently I have to double-check information that is only in the Details screen. I would love to have an option to browse to the next or previous meeting from that Details screen.

So, in the worst case, I have to work from the full list and browse.
Sometimes it is a District list and I need to do a check on something in details view.
It is time consuming to either try the back button and choose the next one on the list, or, worse, accidentally click 'Meetings' and get back to the full list and then have to redo my selection.

It would really be fantastic if this would be added. Let me know if you need more info.

I am basically thinking of the same kind of navigation that is often seen for posts. In the bottom of the page is shows the next items and previous items. It would be fantastic to have this in the order of the list.

So, go to meetings and have all in list.
Perform a search then sort it by whatever.
Go into details.
Browse to the next one in line without having to first go back to the list, then into detail.

Possible?

Thanks,

Nicky

**Answer** _by @joshreisner_

Hey Nicky,

Technically yeah this should be possible. There's enough "state" information in the URL to infer what the previous and next meetings in the list would have been and to create links.

I'm not sure most users want / need to see this, but I agree that if you wanted to review, say, all the Wednesday Women's  meetings in your area one by one, then it would be useful for that purpose.

In the past what I've done is held down the command key (on mac, different on windows) and clicked all the links, which opens them all in separate tabs.

Not exactly sure where the prev / next links would go. Theoretically in the bottom left / bottom right corners of the screen I'm guessing?

<div class="c4r-source">Source: [Issue #53](https://github.com/code4recovery/12-step-meeting-list/issues/53)</div>

</details>


### Filtering by district and sub-districts {#filtering-by-district-and-sub-districts}

<details>
<summary>Show question &amp; answer</summary>

**Question**

# Current behavior

Currently, when I select a district on an archive page only the meetings of the groups directly attached to this district are searched.
Is there any way to change this behavior so that all the meetings from sub-districts are displayed as well?

As an example – this list displays no meeting:

https://spis.aa.org.pl/index.php/meetings/?tsml-day=any&tsml-district=region-galicja

# Changed behavior

What I would like to achieve is that is will display all the meetings from intergrupa-kresy AND intergrupa-malopolska AND … AND intergrupa-sadecka which are the sub-districts of the region-galicja district. In other words – select them recursively by the district.

# Proposed solution

WDYT about adding all taxonomy terms - from the top to the bottom of the hierarchy - to the meeting post type?
With this approach, it should be pretty easy to query all the meetings that contain any of the district/sub-district.
The downside is the need for migrating the existing meetings data.

**Answer** _by @joshreisner_

I could be wrong, but at first glance this seems like a simple bug. 

In the same way that https://spis.aa.org.pl/index.php/meetings/?tsml-day=any&tsml-region=polska includes all the sub-regions, filtering by a district *should* be including its sub-districts, although I see that it is not.

What I'm saying is, I think we need to dig into the filtering to see what's going on, but probably not change the data structure.

<div class="c4r-source">Source: [Issue #64](https://github.com/code4recovery/12-step-meeting-list/issues/64)</div>

</details>


### Filtered meetings dissapeared {#filtered-meetings-dissapeared}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**

After the recent update, when I try to filter the meetings list by district/sub-district/areas, in some cases the list blinks and disappears immediately. When I hit refresh (`CTRL`+`R`/`CMD`+`R`) all the filtered meetings were displayed correctly.

The bug is obviously related to the user filter action.

**To Reproduce**

Steps to reproduce the behavior:
1. Go to https://spis.aa.org.pl/index.php/meetings/?tsml-day=any&tsml-district=intergrupa-chelmska
2. In "Districts" filter, expand "Region Lublin" and click "Intergrupa Lubelska"
3. The lists blinks and an **empty list is displayed**
4. Hit the browser refresh button (or `CTRL`+`R`/`CMD`+`R`)
5. The list is displayed correctly

The same happens on other sub-districts and areas filters as well.

In some cases, only a part of the list is displayed on changing the filter (and the whole when refreshed).

**Expected behavior**

The list should be displayed with all the meetings assigned to specific sub-district.

**Screenshots**

After changing the sub-district filer:

![image](https://user-images.githubusercontent.com/51343011/77117223-dce29500-6a31-11ea-84e4-e933704737a1.png)

After refreshing the page:

![image](https://user-images.githubusercontent.com/51343011/77117334-19ae8c00-6a32-11ea-8539-90280c9cfa6d.png)

**Desktop (please complete the following information):**

 - OS: Windows 10
 - Browser - observed on Chrome and Edge
 - Version - both were the latest versions

**Smartphone (please complete the following information):**

Was not testes on smartphone

**Additional context**

The network console shows a successful AXAJ call for filtered resources.

After changing the filter, the following JS error is displayed on the browser console:

```
Uncaught TypeError: Cannot read property 'split' of undefined
    at formatAddress (public.min.js?ver=3.5.3:1)
    at Object.&lt;anonymous&gt; (public.min.js?ver=3.5.3:1)
    at Function.each (jquery.js?ver=1.12.4-wp:2)
    at Object.success (public.min.js?ver=3.5.3:1)
    at i (jquery.js?ver=1.12.4-wp:2)
    at Object.fireWith [as resolveWith] (jquery.js?ver=1.12.4-wp:2)
    at x (jquery.js?ver=1.12.4-wp:4)
    at XMLHttpRequest.c (jquery.js?ver=1.12.4-wp:4)
```

Looks like an unhandled null pointer exception.

**Answer** _by @joshreisner_

Looks like you might have a meeting that has an undefined address. The code should be more resilient here, we should check if address is defined:

https://github.com/code4recovery/12-step-meeting-list/blob/90d5d6c879571b8e4dddd004413aa39bd4db3052/assets/src/maps.js#L80

For now though you should check to see if you have any meetings with no address and see if you can give them one.

<div class="c4r-source">Source: [Issue #73](https://github.com/code4recovery/12-step-meeting-list/issues/73)</div>

</details>


### Meeting Type "Women" bug {#meeting-type-women-bug}

<details>
<summary>Show question &amp; answer</summary>

**Question**

One of my meetings in version 3.6.4 has "Women" as the type. In the regular meeting list this appears in the groupname: "groupname / Women" and in bold. In the meeting details green it show bold and green. I think this might be a leftover that was missed when we were moving to this latest version. It is not super serious, but it would be better if this feature was removed.

You can see it in action here:
http://al-anon.alateen.on.ca/meetings/?tsml-day=any&tsml-type=W

Thanks for all the hard work - I know changing functionality in a live solution is not easy and there are bound to be bugs. But all in all I feel you are all doing a great job!


Nicky

**Answer** 

@OSAwebsite--

Things are not as clear as I thought. Investigating your site I see the issue you're describing. However, I am not seeing that behavior on my site.

What custom styling do you have loading?

<div class="c4r-source">Source: [Issue #101](https://github.com/code4recovery/12-step-meeting-list/issues/101)</div>

</details>


### Don't show addresses for TC meetings in list {#don-t-show-addresses-for-tc-meetings-in-list}

<details>
<summary>Show question &amp; answer</summary>

**Question**

My intergroup would prefer if meetings that are temporarily closed had their addresses and regions struck through (In addition to being grayed out), to be consistent with the visual treatment of the addresses on the inside page.

**Answer** _by @joshreisner_

Hey @FlipperPA the app puts a gray background on meetings that are both TC and with no meeting option, but that's not what this request is, this is simply to strike through and mute the color on the TC addresses themselves.

<div class="c4r-source">Source: [Issue #109](https://github.com/code4recovery/12-step-meeting-list/issues/109)</div>

</details>


### Meeting Search: javascript error if meeting contains only "11th Step Meditation" type {#meeting-search-javascript-error-if-meeting-contains-only-11th-step-meditation-ty}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
On the meeting list screen, if selecting a search term that returns a meeting that contains **only** the "11th Step meditation" meeting type, the search fails and the list of meetings is empty.

In a JavaScript console, the error "Uncaught TypeError: t.replace is not a function" appears.

I am almost certain that the error occurs in the first string replace of `sanitizeTitle` in https://github.com/code4recovery/12-step-meeting-list/blob/master/assets/src/public.js#L790

The problem appears to be that if one of the meetings has **only** the 11th Step Meditation meeting type, then `11` is an int and not a string, and thus `replace` doesn't work. For meetings that have multiple types, such as "Open", then the array is an array of strings and works fine.

**To Reproduce**
Steps to reproduce the behavior:
1. Create a meeting with **just** the 11th step meeting type. Save it
2. Go to the meeting list screen and search for that meeting. Observe error

**Expected behavior**
The meeting list would be populated with the search results

**Screenshots**

This screenshot shows the array with a single int for a meeting with just 11th step meeting type selected

![11th_step_meeting_error](https://user-images.githubusercontent.com/70951029/92470348-443cfe80-f1a4-11ea-8a86-e3b0ff0198ce.png)



This screenshot shows an array of strings for a different meeting that has more than just the 11th Step meeting type selected

![11th_step_meeting_no_error](https://user-images.githubusercontent.com/70951029/92470376-4c953980-f1a4-11ea-9c54-1ba9f8af8fd6.png)


I realize this is easy to fix on my end by adding another meeting type to the problematic meeting, and I'll do that. But I thought you should know about this unexpected behavior.

**Answer** 

@marcinyorkpa,

Nineteen days ago when I added the label of "need more information", I also made a comment on this issue. I just noticed today that something prevented it from saving (I had poor Internet). :-(

I am not able to reproduce your issue with this version of TSML or the last one, so we need to look at some other things. I followed your steps to reproduce the error, but when I typed in the name of the meeting in the search field, it displayed as it should have. I've tested in both Safari and Chrome.

Are you still having the issue?
Please confirm your versions of TSML and Wordpress.

<div class="c4r-source">Source: [Issue #165](https://github.com/code4recovery/12-step-meeting-list/issues/165)</div>

</details>


### Feed from data source not working {#feed-from-data-source-not-working}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Received new URL from District 2 (Santa Fe). The feed does not work. Neither the webmaster fro District 2 nor I know what to do next. This feed goes into https://nm-aa.org website.

https://santafeaa.org/wp-admin/admin-ajax.php?action=meetings&key=53e1d342a225a98f7ddaa2f52d7d18dd

This link worked at one point but is no longer working.  I have deleted and re-added the feed and that did not work either. Is the issue on the Santa Fe website side?

Any help would be appreciated. We are looking for some direction. Thank you

Kerri K, Area 46 Webchair
webchair@nm-aa.org

![image](https://user-images.githubusercontent.com/72042564/94473674-ba23fc80-0189-11eb-90fc-747940c0b5af.png)

**Answer** 

It looks like it will help, but you'll still need to modify your 'wp-config.php' file according to their plugin page:

```
define( 'WP_DEBUG', true );
define( 'SAVEQUERIES', true );
```
Does you hosting provider allow you to create a second staging/test site?

<div class="c4r-source">Source: [Issue #170](https://github.com/code4recovery/12-step-meeting-list/issues/170)</div>

</details>


### Filter by District {#filter-by-district}

<details>
<summary>Show question &amp; answer</summary>

**Question**

One of our districts went through the process of comparing the current TSML Meeting list to the Districts Website, The Area Website and the Meeting App. The idea being to assure all elements were the same and the Zoom links functioned at all levels.

In TSML, if a by District filter could be added to the online meeting list, it would ease searching for District specific meetings.

**Answer** 

I just looked on your site. Do you have your meetings assigned to their respective group? And is that group assigned to a district?

-----------------------
What do you have here?

&lt;img width="181" alt="image" src="https://user-images.githubusercontent.com/31904316/96377081-929cd000-1148-11eb-8fdb-b2d285b0065d.png"&gt;

<div class="c4r-source">Source: [Issue #189](https://github.com/code4recovery/12-step-meeting-list/issues/189)</div>

</details>


### Undefined Function Causing Error on Search Functionality {#undefined-function-causing-error-on-search-functionality}

<details>
<summary>Show question &amp; answer</summary>

**Question**

@tech2serve a recent update (I think version 3.9.2 or 3.9.3) introduced a regression on the meeting search / filter functionality.

I received this recent error with the plugin on our aatoronto.org site. I had to revert back to v.3.9.0. See below:

[Sat Oct 31 13:52:07.683654 2020] [php7:error] [pid 21989] [client 99.230.120.3:32092] PHP Fatal error: Uncaught Error: Call to undefined function db_update_addresses_cache_approximate_location() in /nas/content/live/aatorontoprod/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php:33\nStack trace:\n#0 /nas/content/live/aatorontoprod/wp-includes/class-wp-hook.php(287): tsml_admin_init('')\n#1 /nas/content/live/aatorontoprod/wp-includes/class-wp-hook.php(311): WP_Hook-&gt;apply_filters(false, Array)\n#2 /nas/content/live/aatorontoprod/wp-includes/plugin.php(478): WP_Hook-&gt;do_action(Array)\n#3 /nas/content/live/aatorontoprod/wp-admin/admin-ajax.php(45): do_action('admin_init')\n#4 \{main\}\n thrown in /nas/content/live/aatorontoprod/wp-content/plugins/12-step-meeting-list/includes/admin_meeting.php on line 33, referer: https://www.aatoronto.org/meetings/?tsml-type=ONL
--

Please let me know if this was resolved in v 3.9.3 or if it's still an oustanding bug.

**Answer** 

&gt; 
&gt; @tech2serve sorry...I'm a developer, and I didn't even fill out the proper clear details on the ticket earlier (facepalm)

What languages? PHP and Wordpress, by chance?

-Tim
_Mediocre Developer, Expert Coffee Drinker_

<div class="c4r-source">Source: [Issue #206](https://github.com/code4recovery/12-step-meeting-list/issues/206)</div>

</details>


### Front End Submission Form {#front-end-submission-form}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Our Fellowship (S.L.A.A.) does not have a complete structure of Intergroups and Regions like AA does.  We have individual meetings in many places where there is no Intergroup at all.  We also have Intergroups with no website who would need to use a front end form to list their meetings with us.  

**Describe the solution you'd like**
We need a front end meeting submission form that defaults to Pending Review in Wordpress.  

**Describe alternatives you've considered**
We have looked at several event calendars for Wordpress, but they all require too much customization to make them work for our needs.

**Answer** 

That is an interesting suggestion, but neither Wordpress nor TSML are set up for this.

My suggestion is to consider setting up a couple of trusted agents to access the backend, or use the email feature to report meetings. 

Code for Recovery will be releasing a [new product](https://github.com/code4recovery/react) (it may be available now with limited support) that is based on ReactJS vice Wordpress. This tool will make use of spreadsheets (i.e., Google Docs today) to manage and provide meetings to the front end. This may provide another option for you.

<div class="c4r-source">Source: [Issue #227](https://github.com/code4recovery/12-step-meeting-list/issues/227)</div>

</details>


### Updating a single meeting takes almost a minute {#updating-a-single-meeting-takes-almost-a-minute}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Describe the bug**
When updating any meeting, it takes nearly a minute. We often get the message "Connection lost. Saving has been disabled until you’re reconnected. We’re backing up this post in your browser, just in case."

**To Reproduce**
Modify and update any meeting.

**Expected behavior**
This makes modifying meetings a tedious task. It also slows down the user experience. Needs to be quicker. 

**Desktop (please complete the following information):**
 - OS: Windows 10
 - Browser Firefox or anything else

**Additional context**
Have tracked down the problem in the code - in the tsml_delete_orphans() function this SQL query takes over 50 seconds.

&gt; 'SELECT g.ID FROM wp_posts g WHERE g.post_type = "tsml_group" AND (SELECT COUNT(*) FROM wp_postmeta m WHERE m.meta_key="group_id" AND m.meta_value = g.id) = 0'

Most of the time, this query returns empty. It is only relevant when a meeting is deleted or changes group.

We have 
*    2,127 meetings
*    1,401 locations
*    1,843 groups
*    29 regions

**Answer** _by @AATimes_

cPanel from a local ISP on a dedicate server
PHP 7.1
MySQL Version 5.7.32

Could the MySQL version could be the problem?
I'm contacting our ISP to see if we can get that looked at.

We only recently went live using 12 Step Meetings List. We cover all meetings nation wide in Australia. We migrated our data from a 15 year old, custom built system that was becoming unmaintainable. 

Hope this is helpful.
What other information would be useful to you?

Thanks for your assistance.

<div class="c4r-source">Source: [Issue #229](https://github.com/code4recovery/12-step-meeting-list/issues/229)</div>

</details>


### Question for WordPress plugin {#question-for-wordpress-plugin}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey all,

I'm a new WordPress user/builder for my intergroup. I just read over the Readme on github and it gave me some better insight. 

My questions remain are I set my own districts and regions for our folks?  If so could I then make one district for online, and another for live meetings?   I've received requests when we put up the new schedule that folks can see those on two separate pages. Is this possible with your plug-in?

Many thanks!
Scott

aacolumbia.org webmaster

**Answer** _by @brianw-area24_

Thank you for your interest in the TSML plugin.

Yes, you can set your own districts and regions on your site with this plugin. However, most sites simply use city names as the regions, and the AA service structure district for the district. This is especially true if you ever plan on using your site to feed information up the chain, to a District or Area site, or to the Meeting Guide App.

As for seeing in-person and online meetings on two separate pages, that's something that's in the works. Currently, it's easy to show all the online meetings on one page, however, we don't have a good way built in to show in-person meetings. That's the piece we're working on.

You could show in-person meetings by adding a type to the list of types (it says how to do this in the FAQ of the plugin), then giving your in-person meetings this type. However, because this type is defined locally, it won't be used by other sites or by Meeting Guide App.

Brian W.

<div class="c4r-source">Source: [Issue #340](https://github.com/code4recovery/12-step-meeting-list/issues/340)</div>

</details>


### Adding meeting type codes to 1st page of printed meeting list {#adding-meeting-type-codes-to-1st-page-of-printed-meeting-list}

<details>
<summary>Show question &amp; answer</summary>

**Question**

My district is using the printed meeting list option. But there is no explanation on the printed list of what the meeting codes (eg. C = Closed XB = wheelchair accessible restroom D = discussion mean. 

So we put them all in the notes for the first meeting that appears on the list, They appear with the bus information, entrance information.

Instead, if the codes could be printed on the top of the first page before the meetings themselves are printed, that would be more helpful for newcomers not familiar with AA meeting formats.*Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

This app has been so wonderful for our district during COVID,!  Thanks for all your work!

**Answer** _by @joshreisner_

ok yeah, this thread is about listing the meeting types in the PDF.

the global list of meeting types (for AA meetings) come from the authoritative list here: https://github.com/code4recovery/spec#meeting-types

in all likelihood, what you want to do is add a custom meeting type to your local website, please see this FAQ item: https://wordpress.org/plugins/12-step-meeting-list/#my%20meeting%20type%20isn%27t%20listed%21

the code for that goes in your theme's functions.php code

<div class="c4r-source">Source: [Issue #342](https://github.com/code4recovery/12-step-meeting-list/issues/342)</div>

</details>


### Ability to sort meeting type by Virtual Meeting {#ability-to-sort-meeting-type-by-virtual-meeting}

<details>
<summary>Show question &amp; answer</summary>

**Question**

**Is your feature request related to a problem? Please describe.**
No

**Describe the solution you'd like**
Ability to sort meeting list by Virtual Meetings

**Describe alternatives you've considered**
We currently have a separate list for virtual meetings.

**Additional context**
https://csoaamaine.org/meetings/

Having the ability to sort the displayed meeting list by virtual meetings would be a great asset to us. Also a way to have the AA Meeting App have the ability to sort this way as well would be a big help to those looking for virtual only meetings. I think virtual meetings are here to stay. Thank you and I look forward to your reply!

**Answer** _by @Grateful-Viv_

It may not be the most ideal answer, but I created a menu item for online meetings that simply uses this link: 
/meetings/?tsml-day=any&tsml-type=ONL

You should add your online meetings with your other meetings.  As long as the URL or Phone number is filled out in the expected format, it is considered an online meeting.

Then you can filter just the online meetings to display.

<div class="c4r-source">Source: [Issue #353](https://github.com/code4recovery/12-step-meeting-list/issues/353)</div>

</details>


### [Feature Request]:  Allow user to print filtered results from public page {#feature-request-allow-user-to-print-filtered-results-from-public-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

webmaster@aahmbny.org

### Requested Feature/Enhancment

Hi all, always grateful for what the developers do and have done for our community.

My question is if there is a way for a user to create a PDF to print from what they have filtered through on the website. I see the Generate PDF button on the dashboard of wordpress, but what we're really trying to find is a way for the AA meber who logs onto our website, or even a treatment professional, to be able to print a meeting list from what they are searching and have filtered on the public meeting page.

For example. A newcomer goes to the library for internet and searches for meetings on Tuesday in District 1. Can he then print out that list of meetings from what he has searched?

Really hoping this is possible! Thank you again.

### TSML Version

Other (Identify version in text above)

### Wordpress Version

Latest (default)

**Answer** 

We've tried to make it clear that we want to reserve Issues for the developers only. Unfortunately, GitHub doesn't let us lock those down :-)

Yeah, we're trying to keep user questions, suggestions, etc, in Discussions until the team decides to make the request an actual thing for the code, then one of us will migrate it to the Issues.

Imperfect, yes. But it is the best we have.

Thanks for your understanding and cooperation.

<div class="c4r-source">Source: [Issue #651](https://github.com/code4recovery/12-step-meeting-list/issues/651)</div>

</details>


### Menu gets cut short {#menu-gets-cut-short}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello y'all, when we're looking at the new list, if there is a selection that produces a short list, then the drop down menu for region or type, if selected, does not scroll all the way down. I hope I explained that well. Secondarily, the regional list is not organized by Borough anymore, rather all by neighborhood in alphabetical (which is not the preference). We haven't gone live yet with the new list, and it's on hold until these things can be sorted out. the usual is www.nyintergroup.org if you'd like to see the region menu as it is.

**Answer** _by @kiyote33_

Hello @NYIGCommunications,
Excuse me, I'm a little confused with your question! When you say "new list", are you referring to the **TSML UI** User Interface Display which is set on our Settings page? If you are, I will need to transfer this issue to the "TSML UI" issue page so it get's visibility to our team members who ### handle issues that come up with the TSML UI interface. This is the Issue listings for things that come up with our "12 Step Meeting List Feedback Enhancement" plugin.

<div class="c4r-source">Source: [Issue #845](https://github.com/code4recovery/12-step-meeting-list/issues/845)</div>

</details>


### [Bug]: regions in search typeahead in legacy ui not working {#bug-regions-in-search-typeahead-in-legacy-ui-not-working}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

_No response_

### Website With Issue

_No response_

### What happened?

as reported here: https://github.com/code4recovery/12-step-meeting-list/discussions/1655#discussioncomment-13702615

can reproduce on https://demo.code4recovery.org/meetings - search for a region using keyword search and click the region that is suggested - you will not navigate to that filter when you should.

regular region dropdowns appear to be working fine

### What browsers are you seeing the problem on?

_No response_

### Relevant log output/errors

```shell

```

**Answer** _by @joshreisner_

the link you provided links to a "near location" search which seems to be working for me

&lt;img width="1431" height="1010" alt="Image" src="https://github.com/user-attachments/assets/5405f956-a069-452f-9a3d-f4f3c718f45c" /&gt;

meanwhile this issue was about the search typeahead dropdown not linking to regions, but that works for me as well. you just need to be in regular search mode, not "near location" mode

&lt;img width="390" height="437" alt="Image" src="https://github.com/user-attachments/assets/26ffbfdf-fc2c-465c-a99a-00042bcf8f0b" /&gt;

if you're experience an issue now, please [start a new discussion](https://github.com/code4recovery/12-step-meeting-list/discussions/new?category=q-a) and be specific about what's not working, thanks

<div class="c4r-source">Source: [Issue #1706](https://github.com/code4recovery/12-step-meeting-list/issues/1706)</div>

</details>


### ReactDOM version {#reactdom-version}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Since I don't currently use Wordpress I would like to create a React implementation of this plugin. You only really need to hook the compiled version to an ephemeral JSON string and it should work. And then in theory you could still hook it in WP on the fly usage anyhow.

Our datasources are going to be read from GraphQL here in District 28 so when it spews it JSON the new React impl will handle it. I personally stopped using jQuery as well.

So more than likely I will just share the repo and you can choose to fork it since it will be using just Webpack 4 and ES6 w/React

**Answer** _by @tech2serve_

Please check out and contribute to our [https://github.com/code4recovery/tsml-ui](TSMLui) project. This is a React-based meeting finder. :-)

I have thought about a React-based backend/meeting management tool, but our current focus is on making TSMLui work with spreadsheets for tracking and managing meeting information.

<div class="c4r-source">Source: [Discussion #514](https://github.com/code4recovery/12-step-meeting-list/discussions/514)</div>

</details>


### [Feature Request]: Allow configuring post type registration with_front to false {#feature-request-allow-configuring-post-type-registration-with-front-to-false}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

no response

### Requested Feature/Enhancment

Currently the plugin registers all post types with the with_front configuration parameter set to true. It would be nice if there was a way to change this to false via a filter or some other configuration. Otherwise if the blogs url is not configured to default then the url will not be at root of the website which is preferred.

See documentation here: https://developer.wordpress.org/reference/functions/register_post_type/#:~:text=to%20%24post_type%20key.-,with_front,-bool

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

**Answer** _by @97eighty_

A filter would be a good solution. Like Tim said, most would not use but adding a filter around the rewrite array would allow you to override - https://developer.wordpress.org/reference/functions/register_taxonomy

<div class="c4r-source">Source: [Discussion #964](https://github.com/code4recovery/12-step-meeting-list/discussions/964)</div>

</details>


### Regions and Districts taxonomies are registered as public {#regions-and-districts-taxonomies-are-registered-as-public}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

no response

### Website With Issue

https://staging.orlandorecovery.com/recovery-blog/tsml_region/altamonte-springs/

### What happened?

Currently the region and disctrict custom taxonomies are public so if view one of the taxonomies you get a broken archive page for them. I don’t believe this is intended and it should probably be disabled to prevent indexing accidentally via search engines.

https://developer.wordpress.org/reference/functions/register_taxonomy/#:~:text=taxonomy%20is%20for.-,public,-bool

### TSML Version

Latest (default)

### Wordpress Version

Latest (default)

### What browsers are you seeing the problem on?

Chrome

### Relevant log output/errors

_No response_

**Answer** _by @97eighty_

We can hide them from the front end as @mdavoli pointed out. The flip side is we support them and rewrite the URL to open TSML-UI with the appropriate filters pre-selected i.e. ?region=altamonte-springs

<div class="c4r-source">Source: [Discussion #963](https://github.com/code4recovery/12-step-meeting-list/discussions/963)</div>

</details>


### Disable Groups by Region {#disable-groups-by-region}

<details>
<summary>Show question &amp; answer</summary>

**Question**

It would be a nice feature to disable/deactivate a list of meetings by Region. We have a need to do that on our website - need to disable until we get more accurate (post-Covid) information from one Region. 
Currently, the only option is to delete the Region.

**Answer** _by @joshreisner_

i _think_ you should be able to do that? we typically deactivate meeting by setting them to draft. i believe this should be possible by filtering the admin view of meetings by region, then selecting all, then edit, then setting them to status &gt; draft

&lt;img width="1743" alt="Screenshot 2023-04-05 at 10 56 44 AM" src="https://user-images.githubusercontent.com/1551689/230164334-4133d968-e04c-45f3-88b8-b50cb1afcebb.png"&gt;

<div class="c4r-source">Source: [Discussion #1112](https://github.com/code4recovery/12-step-meeting-list/discussions/1112)</div>

</details>


### Sub-regions {#sub-regions}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Is there a way of showing regions and sub-regions? 

View the website to see regions and sub-regions within the "Anywhere" tab.
[https://al-anon.org.au/meetings/](https://al-anon.org.au/meetings/ )

We want area members to know what their local region/area is and the office they can contact if they need support and I think this would be great to be visible on the meeting feature so new members get familiar with their region/area.

**Answer** _by @SIA-WEBSUP_

I'm unsure what the request is.

Currently, you can select Region or a sub-region.
For instance, you can select NNSW to see everything in that entire region: https://al-anon.org.au/meetings/?region=nnsw
OR you can select a sub-region within that region to filter on that particular sub-region: https://al-anon.org.au/meetings/?region=nnsw-armadale

Could you be more specific on what else you would like to see?

BTW, I think the Z-order is off on your footer, since the dropdown is drawn 'under' the footer and difficult to use. It's easy enough to select 'Anywhere' to get access to the entire dropdown again. You might see if you can set the z-order of the footer to be higher.

<div class="c4r-source">Source: [Discussion #1256](https://github.com/code4recovery/12-step-meeting-list/discussions/1256)</div>

</details>


### Theme and navigation not present on meeting pages {#theme-and-navigation-not-present-on-meeting-pages}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,
I'm rebuilding our district website and when using the meeting plugin, it's created pages that are not including our theme format or navigation. My first thought was this was due to me installing the plugin and creating the pages before I installed the theme, but deleting and reinstalling the plugin didn't change anything. Check out www.aasonora.org/meetings to see the very empty page I can't figure out how to change.

Thanks

**Answer** _by @SIA-WEBSUP_

This isn't the ultimate solution, but just to help troubleshoot at bit, would you consider:
    1. create a new blank page and confirm the theme styling and navbar appear correctly
    2. add the following HTML to this new page and report back what happens
```
        &lt;div id="tsml-ui"
					data-src="/wp-content/tsml-cache-eaa3dc0437.json?1699641317"
					data-timezone="America/Los_Angeles"
					data-mapbox="pk.REDACTED_MAPBOX_TOKEN"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;script src="https://tsml-ui.code4recovery.org/app.js" async&gt;&lt;/script&gt;
```

<div class="c4r-source">Source: [Discussion #1258](https://github.com/code4recovery/12-step-meeting-list/discussions/1258)</div>

</details>


### After wordpress database update I see this error on my site {#after-wordpress-database-update-i-see-this-error-on-my-site}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I had to update the wordpress database on my site and after that completed I now have this error on all pages

Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the 12-step-meeting-list domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the init action or later. Please see [Debugging in WordPress](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/) for more information. (This message was added in version 6.7.0.) in /var/www/wp-includes/functions.php on line 6114.

I have tried hard refreshes and all my plugins have been updated but the message persists. Is there a fix for this issue?

Thanks
Rose 
District 6
NC Bermuda

**Answer** _by @joshreisner_

hi @district6wc - it sounds like your site is in debug mode for some reason. this should be disabled in production. go to `wp-config.php` and make sure WP_DEBUG is set to `false`:

```php
define( 'WP_DEBUG', false );
```

we'll be releasing a fix soon for this issue as well so you'll be able to have debug mode enabled and not see this message

<div class="c4r-source">Source: [Discussion #1581](https://github.com/code4recovery/12-step-meeting-list/discussions/1581)</div>

</details>


### Ability to filter by fellowship {#ability-to-filter-by-fellowship}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I saw that we can create custom meeting types, but are we able to add additional columns for fellowships so that we can allow users to filter by AA, NA, Al-Anon, etc.?

**Answer** _by @tim-rohrer_

I can't really think of any way to do that other creating a custom type for each one. That should let you have some filtering capability.

I guess I'm a little surprised that we've not been asked this before, but it is the first time I've seen the question :-)

Are you feeding (or planning to feed) AA meetings into Meeting Guide. That may pose a problem if you're using a single website for multiple programs.

<div class="c4r-source">Source: [Discussion #960](https://github.com/code4recovery/12-step-meeting-list/discussions/960)</div>

</details>

