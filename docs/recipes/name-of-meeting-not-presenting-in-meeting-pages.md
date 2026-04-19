---
id: name-of-meeting-not-presenting-in-meeting-pages
title: "Name of meeting not presenting in \"meeting\" pages"
description: "### Add a description"
sidebar_position: 13
tags: ["recipe", "meetings"]
---

# Name of meeting not presenting in "meeting" pages

> Managing Meetings • [Issue #1763](https://github.com/code4recovery/12-step-meeting-list/issues/1763) • _answer by @gkovats_

## The question

### Add a description

Hi,

It doesn't look like anyone is having this problem but.... (probably something Im doing) I cant work out what though? Could I borrow thoughts please?

**Symptom:** When we visit any "meeting" listing page we don't see the meeting "name" but we continue to see the block we add to the "meetings home page"

Example of what I'm calling **a meeting listing**:
https://codauk.org/meetings/?meeting=online-tuesday-lgbtqi

Example of what I'm calling the the **meetings home page**
https://codauk.org/meetings/ 

The text block on the meetings home page is placed as a wordpress widget - in the "meetings top" location 

I cant recall adding any CSS - that could cause the meeting "name" to not present.


Kate F

## The answer

Hey @k8fish3r , I see the meeting title here:

&lt;img width="1228" height="598" alt="Image" src="https://github.com/user-attachments/assets/646d4b80-bd5a-444f-b7dc-cf61bb6a5bf8" /&gt;

But the font is smaller because of a custom CSS on your site:
https://codauk.org/?custom-css=19ff7d92d5

Without those styles, the title looks like:
&lt;img width="1157" height="204" alt="Image" src="https://github.com/user-attachments/assets/ec195bb6-6cfd-4952-885b-dd0808acc463" /&gt;

This style here is specifically affecting it:
```css
/* MEETINGS - make the meeting name present on the listing page - TEST */
#tsml-ui > div h1{
font-size: 2rem !important;
    margin-bottom: 1rem !important;
    font-weight: bold !important;
    }

/* MEETINGS started repeating welcome block */
```

As for the widget "Meeting Top", seems you should be able to update that as you'd like, don't see a problem there apart from maybe it's a little large, and steals focus from the meeting title. 

Hope this helps.

## Code


```css
/* MEETINGS - make the meeting name present on the listing page - TEST */
#tsml-ui > div h1{
font-size: 2rem !important;
    margin-bottom: 1rem !important;
    font-weight: bold !important;
    }

/* MEETINGS started repeating welcome block */
```


---

_Original source: [issue #1763](https://github.com/code4recovery/12-step-meeting-list/issues/1763)._
