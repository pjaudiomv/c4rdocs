---
id: styling
title: Styling & Customization
description: CSS, theming, layout overrides, visual tweaks.
sidebar_position: 9
tags: ["styling"]
---
# Styling & Customization

CSS, theming, layout overrides, visual tweaks.

_10 questions — sourced from GitHub discussions & issues._


### TSML  v3.11.3 and 12 Step Meeting PDF Generator v0.3.0 {#tsml-v3-11-3-and-12-step-meeting-pdf-generator-v0-3-0}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I see there is both an update to both these plugins; TSML (Version 3.11.3) and the Chris Toews  12 Step Meeting PDF Generator (Version: 0.3.0). 

I also see there is a fix in the plugin which generated an error using the external PDF plugin. See #548 Egads! Looking at the View Version Details for 0.3.0, all it references is "fixed bug, thanks to Josh Reisner".

I will test this all out on the staging site, but before I do, can someone please walk me through what was changed? I finally got the TSML plugin to work for our needs (lots of CSS customization) and kinda forced the PDF generator plugin to function okay for us which we use to publish our in-person meetings.

Thank you.

**Answer** _by @Grateful-Viv_

I did install the updates to the plug-ins on my staging site and all I can see different was pdf which doesn’t currently work because it doesn’t recognize JSON feed. Was anything else done with the update?

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/549">Discussion #549</a></div>

</details>


### Tag for "In Person" Meeting {#tag-for-in-person-meeting}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi there!

We're wondering if anyone knows if/when/how to find the plug-in (and App) pre-created permanent tag for "in person" (for type of meeting.... for filtering in person meetings only)... is there something in the works?   As a work around, we're thinking that we need to create a custom "in person" tag in our plugin , but are worried with software updates that we will loose our tag customization......

Please share any & all info you know.

Thanks!

** and my apologies if this has been addressed -- I scoured the forum and couldn't find anything! **

**Answer** _by @joshreisner_

Hi @aajcounty, our systems automatically tag meetings with `Online`, `In-Person`, `Active`, `Inactive` -- more info on how it decides is here: https://github.com/code4recovery/tsml-ui#how-are-metatypes-like-active-and-online-calculated

We don't have a way to manually type these. This is an intentional choice for a good user experience; we don't want the information supplied about a meeting not to match up with its designation.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/551">Discussion #551</a></div>

</details>


### Upcoming Meetings Legacy Widget - Title font size {#upcoming-meetings-legacy-widget-title-font-size}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I've enabled 2 widgets side-by-side in column blocks using 2023 Theme WP 6.2 ("Upcoming Meetings" and "The Events Calendar")

Using Chrome Inspect I believe "Upcoming Meetings" uses h3 for widget title and I would like to use h6 - so it better matches the "Events Calendar" title.  Obviously, I'm not a php coder or I would have changed this.

How can I have my Upcoming Meetings title match the Events title?
Development site: https://help.aaalbanyny.org   (It's on the home page)

Thanks,
Ed Mac
AA Central Office - Albany, NY

**Answer** _by @joshreisner_

Hi @conrac01 they are both `h2` tags, so you shouldn't need to change the code - the difference is that the events calendar is applying CSS to set the size of their `h2` to `16px` while ours is getting set by your theme. perhaps add some custom CSS to set ours to `16px` as well?

```
.tsml-widget-upcoming h2 \{
  font-size: 16px;
\}
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1120">Discussion #1120</a></div>

</details>


### Meeting  alignment and font questions {#meeting-alignment-and-font-questions}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Good morning everyone ~

I just installed this plug-in and the table of meetings on the main meeting page (as well as information on individual meeting pages) is aligned left, as if I have a right sidebar, which I don't think I do (all the pages I have created don't have a right sidebar, I have removed all the default widgets I could find, and and checked the customizer settings for Blog and Post and removed any sidebar defaults I could find.  Here is a [link](http://rvaacadf.org/meetings/) to the main meeting page.  We don't have SSL installed yet, so you might get a warning about that.

I  built the site using the Astra theme and it has no page editors installed. I have used the plug-in before with other themes and sites using Elementor and Beaver builder and haven't had this issue.  Does anyone have any thoughts?

Also, the title for the individual meetings is using the H2 font, which is a unique one on our site and not what we would want the title to use.  Any ideas on how to change which Heading is used?  Or do I need to just do this in CSS?

Thanks!

**Answer** _by @joshreisner_

hi @ACAwebbuilder - looks like your theme is applying the left-aligned layout, TSML UI will just fill the container it's put inside. 

at any rate, CSS is the way to go! to center it you should be able to do:

```css
body.tsml-ui .wp-site-blocks \{
  margin: 0 auto;
\}
```

TSML UI uses h2 for semantic reasons, and that can't be overridden, but i can probably reset that font on my end to use the default font. (in the meantime you could also override that with CSS)

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1227">Discussion #1227</a></div>

</details>


### change column header colors on hover {#change-column-header-colors-on-hover}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Howdy!  I work on a few 12-step sites that use this plug-in and have noticed that the column titles changing to white on hover, with the white background, causes them to disappear.  Any suggestions for changing the on hover color?  I am thinking CSS, but I am having difficulty finding what the element is for these.

Thanks!

**Answer** _by @SIA-WEBSUP_

Incidentally, I don't believe the plugin's is setting the hover color. So some other plugin's CSS or some other CSS would be causing this. So you'd have to be sure the CSS you're setting is not 'overridden' somehow by some other CSS.

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1268">Discussion #1268</a></div>

</details>


### Possible to change the background on only the main meeting list page {#possible-to-change-the-background-on-only-the-main-meeting-list-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi, 

My usual method of changing the background for a single page is via CSS and the page id, eg:

body.page.page-id-XX \{
background-color: YYY;
\}

But I can't see a page id for the main listing page, only the individual meeting detail pages.

Any help would be greatly appreciated -- thanks!

**Answer** _by @joshreisner_

hi @toddjsaunders try 
```
body.tsml-meetings \{
  background-color: tomato;
\}
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/653">Discussion #653</a></div>

</details>


### meeting layout changed {#meeting-layout-changed}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi! I noticed today that the meeting layout has changed so that the info is justified left and squished (for lack of better words). I am not the only one that administers this site, so am not sure what was changed.

Do you have any ideas what could have caused this and how to fix it?

The page I need help with:  [https://rvaacadf.org/meetings/?meeting=freedom-from-the-past](url)

Thank you in advance for any thoughts/suggestions!

**Answer** _by @joshreisner_

ok! the [fix is out](https://github.com/code4recovery/tsml-ui/pull/363), if you refresh your browser window once or twice it should look correct

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1367">Discussion #1367</a></div>

</details>


### Applying color to footer of meeting details page {#applying-color-to-footer-of-meeting-details-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Can anybody tell me how to apply color to a text I have in the footer of the meeting pages?
I have no experience with CSS, so if anyone can help, please do so in the simplest of ways so I can understand.

Much appreciated!
Nicky

**Answer** _by @anchovie91471_

To change the text to red, add this to your stylesheet:

```
.meetings-widgets-bottom .widget p \{
    color: red;
\}
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1183">Discussion #1183</a></div>

</details>


### Blank area at the top of the meeting list on all tested devices and browsers {#blank-area-at-the-top-of-the-meeting-list-on-all-tested-devices-and-browsers}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Blank area at the top of the meeting list on all tested devices and browsers
div#meetings.container 1260X550 appears when inspecting the element.  this element is &lt;div id="meetings" their is no height key in the div tag nor inline css .  This tag is within the &lt;div id="tsml"&gt; &lt;/div&gt;
![Capture](https://github.com/code4recovery/12-step-meeting-list/assets/148838193/cd738802-92a3-4485-852b-f04ea38793e0)

**Answer** _by @thessnake03_

Looks like it's padding all around.  The sites I checked had 16 px on the sides, top and bottom.  I was able to remove it with css, but it looks a bit odd without the side margins.

```
div#meetings.container\{
	padding: 0px!important;
\}
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1411">Discussion #1411</a></div>

</details>


### TSML Colors {#tsml-colors}

<details>
<summary>Show question &amp; answer</summary>

**Question**

When I originally installed TSML,  I got some CSS code to match the colors with those of our site.  I looked at the page recently and realized that the text color on the gray stripe is unreadable.  I was wondering if there is some code I can add to make the lettering white so it is more legible.

The current CSS is:
#tsml .table-striped&gt;tbody&gt;tr:nth-of-type(odd) \{ background-color: #415e75; \}
#tsml a \{ color: white \}

The URL for the page is:
https://www.puebloaa.org/meetings/

Thank you in advance for your assistance and for all the work you do for the recovery community.

Kevin

**Answer** _by @joshreisner_

☝️ that works, or if you just want to set the color of the gray rows white, change your existing code to 
```
#tsml .table-striped&gt;tbody&gt;tr:nth-of-type(odd) \{ background-color: #415e75; color: white; \}
#tsml a \{ color: white \}
```

<div class="c4r-source">Source: <a href="https://github.com/code4recovery/12-step-meeting-list/discussions/1536">Discussion #1536</a></div>

</details>

