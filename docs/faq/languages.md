---
id: languages
title: Languages & Translation
description: i18n, translation strings, localization.
sidebar_position: 10
tags: ["languages"]
---
# Languages & Translation

i18n, translation strings, localization.

_11 questions — sourced from GitHub discussions & issues._


### Changing the Title displayed on the meetings page {#changing-the-title-displayed-on-the-meetings-page}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We are an English speaking intergroup in a Portuguese speaking country.  Despite our website being in English we still get questions from people "Is such and such meeting in English?".  I would like to change "Meetings" to "English Language Meetings".

Is the possible?

Thanks, Derek
&lt;img width="757" alt="Screenshot 2023-04-21 at 11 18 58" src="https://user-images.githubusercontent.com/112857352/233612470-6a916bee-967d-42cd-bcec-36b5ab5a0dfa.png"&gt;

**Answer** _by @joshreisner_

Another option is you might link to this page instead as your "Meeting Guide Online" page: https://aaunityportugal.org/aa-meetings/?type=english

If you wanted it to read "English Language Meetings" exactly, you could customize the type by adding this code to your theme's functions.php:

```
if (function_exists('tsml_custom_types')) \{
    tsml_custom_types(array(
        'EN' =&gt; 'English Language',
    ));
\}
```

If you do that, your Meeting Guide Online URL would become `https://aaunityportugal.org/aa-meetings/?type=english-language`

<div class="c4r-source">Source: [Discussion #1119](https://github.com/code4recovery/12-step-meeting-list/discussions/1119)</div>

</details>


### Remove Men and Women tag after the Meeting Name {#remove-men-and-women-tag-after-the-meeting-name}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We have some meetings in our area that are LGBTQ/Trans/Non-binary...they want to keep Women tagged (so it appears whenever search is run for women's meeting) but its not really accurate to have it show up next to the meeting name. Is there a way to remove this only for a single meeting?
![Friday Ev](https://github.com/code4recovery/12-step-meeting-list/assets/139186482/f6f3b3b5-7fc5-4c29-87f2-549172324b7b)

Longer term, it would be great if groups can pick which (if any) of the tags show up next to their group name...especially as we move to adopt more inclusive "fellowship of people" language. Right now they are getting around this with more description in the group name itself.

**Answer** _by @joshreisner_

hi @cassandradc that's an interesting request that we haven't had before. we have gotten requests in the past to customize or remove the meeting type "flags" for _all_ meetings, which is [something you can do](https://wordpress.org/plugins/12-step-meeting-list/#can%20i%20see%20types%20in%20the%20meeting%20list%3F%20and%20can%20i%20adjust%20the%20%2Fmen%20and%20%2Fwomen%20after%20the%20meeting%20name%3F), but not for a specific meeting only.

this is sort of janky but you should be able to achieve the desired result by adding this custom CSS to your site. i say it's janky because if the meeting time or name changes you may need to update it. 

```css
/* remove "women" type flag from specific meeting in list */
td[data-sort="gay-gay-queer-women-non-binary-and-transgender-5-19:15"] &gt; small \{
  display: none !important;
\}

/* remove "women" type flag from specific meeting in detail page title */
body.postid-37508 .page-header small \{
  display: none;
\}
```

as for the longer term feature request, we usually tend to prioritize the experience of the person looking for a meeting (a consistent user interface), ahead of other concerns, but further discussion is certainly needed, especially with people with diverse perspectives. 

we'll also want to discuss it with the General Service Office about the Meeting Guide app so that the user interfaces can have some parity.

<div class="c4r-source">Source: [Discussion #1168](https://github.com/code4recovery/12-step-meeting-list/discussions/1168)</div>

</details>


### French category not showing up {#french-category-not-showing-up}

<details>
<summary>Show question &amp; answer</summary>

**Question**

We discovered the plugin seems to support multiple languages tonight.  Awesome! We are in Canada so this is great!

We noticed one odd thing, however. When a French visitor goes to look for a French meeting there is no option to search for French meetings. It turns out there is not option to search for French meetings for an English speaker too, I just hadn't noticed it.

So I went into the Meetings dashboard to see if the meetings were marked as French. They are not, although I could swear there were previously options for a handful of languages. In fact, all of the English meetings are successfully categorized as English even though we are not presented with the option to do so — so it must have been there at one point.

Have I done something to reduce the options available?

https://staging.debtorsanonymous.ca/

Thank you so much for your service!

**Answer** _by @willinrecovery_

Okay, this worked. But I decided it was problematic because it could be confusing for future web admins.

So I tried to create my own French and English meeting types specific to Debtors Anonymous, but I discovered this was not necessary. 

When I added the following code to my functions.php in my child theme, it made the English and French settings appear even when set to Debtors Anonymous (sorry I can't figure out how to paragraph this code properly).

`if (function_exists('tsml_custom_types')) \{
    tsml_custom_types(array(
        'EN' =&gt; 'English',
        'FR' =&gt; 'French',
    ));
\}`

<div class="c4r-source">Source: [Discussion #1395](https://github.com/code4recovery/12-step-meeting-list/discussions/1395)</div>

</details>


### Plugin Translation | Strings pending on Translate Wordpress {#plugin-translation-strings-pending-on-translate-wordpress}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey there,

I recently wanted to use your plugin on a website for a local group that would definitely benefit from having it, I'm helping them remake the website. The first thing I noticed was that I needed to translate it, so I did on the [Translate Wordpress page](https://translate.wordpress.org/projects/wp-plugins/12-step-meeting-list/), actually went over all of the strings in the **Slovak** language and translated it. But they don't seem to move along to the next step of being accepted.

I would love to ask you if there are other steps I could take to get them approved and live as obviously this is a requirement for a website that's local. Of course I would be open to take other steps first if there's a need to do that, but I did my best to get as close as possible.

Please let me know! 🙂

**Answer** _by @gkovats_

Looking more into this, the Slovak page shows:
https://translate.wordpress.org/locale/sk/default/wp-plugins/12-step-meeting-list/
&gt; The initial language pack for the plugin will be generated when 90% of the Stable (latest release) sub-project strings have been translated (currently 6%).

It appears basically this translation process is managed by a volunteer team outside of us. Basically, think these are the folks that can help with next steps:
https://make.wordpress.org/polyglots/teams/?locale=sk_SK

That said, an alternate approach is just download a PO and MO file from them here:
https://translate.wordpress.org/projects/wp-plugins/12-step-meeting-list/dev/sk/default/
![image](https://github.com/code4recovery/12-step-meeting-list/assets/1187583/53e82e94-7a5d-415e-b129-592ad4e1f422)

Then just copy the .po and .mo files over the
```
/wp-content/plugins/12-step-meeting-list/languages/12-step-meeting-list-sk_SK.mo
/wp-content/plugins/12-step-meeting-list/languages/12-step-meeting-list-sk_SK.po
```
That's _if_ you have access to your system files. I just tried it, and a good part of the plugin gets translated, but I can tell there's some areas we missed.

Let me know if this helps. I can't help with your submissions on translate.wordpress, but this middle step may get you going.

<div class="c4r-source">Source: [Discussion #1401](https://github.com/code4recovery/12-step-meeting-list/discussions/1401)</div>

</details>


### Open Meeting Help Pop-In Language Update Needed {#open-meeting-help-pop-in-language-update-needed}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I notice that when a meeting is selected as "Open", a question mark icon appears in the list. When you click on the link, this message appears:
Open meetings are available to anyone interested in **Alcoholics Anonymous**’ program of recovery from **alcoholism**. Nonalcoholics may attend open meetings as observers.

To make this suitable for all programs could we change it to:
"Open meetings allow observers/guests to attend, regardless of whether or not they identify as an addict in this 12-step program."

Thanks, JDPA

**Answer** _by @kiyote33_

Hi drdawesome,

I believe something like the following code placed in a child theme will do the trick for you:

```php
if (function_exists('tsml_custom_descriptions')) \{
    tsml_custom_descriptions([
        'C' =&gt; 'Closed meetings only allow those to attend the meeting who identify as an addict in this 12-step program.', 
        'O' =&gt; 'Open meetings allow observers/guests to attend, regardless of whether or not they identify as an addict in this 12-step program.', 
    ]);
\}
```

Let us know if this works for you...

<div class="c4r-source">Source: [Discussion #1834](https://github.com/code4recovery/12-step-meeting-list/discussions/1834)</div>

</details>


### Adding Days in Spanish to drop down menu {#adding-days-in-spanish-to-drop-down-menu}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hi,
When I post new meetings we can only choose days in English. 
For Spanish meetings, I’d like to put the days in Spanish. Is there a way to do this?

**Answer** _by @joshreisner_

Hi @WebTri2022 , doesn't look like TSML UI is enabled on [your website](https://trivalleyaa.org/meetings/) yet. TSML UI is a setting at Meetings -&gt; Import & Settings -&gt; Settings -&gt; User Interface Display. (It's not a plugin, if you installed something new you can unstall it.)

Just to note, the "legacy UI" TSML also supports Spanish. You would enable that by installing a translation plugin like [Polylang](https://wordpress.org/plugins/polylang/). This might be a job for a web servant, if you have one, who could test it out on a demo site before enabling it on your main website. Once enabled, it would allow Spanish-language visitors to experience a fully-translated website experience.

<div class="c4r-source">Source: [Discussion #878](https://github.com/code4recovery/12-step-meeting-list/discussions/878)</div>

</details>


### [Bug]: Error code: "Translation loading for the 12-step-meeting-list domain was triggered too early." {#bug-error-code-translation-loading-for-the-12-step-meeting-list-domain-was-trigg}

<details>
<summary>Show question &amp; answer</summary>

**Question**

### Contact Details

bekkarut2@gmail.com

### Website With Issue

nai.is

### What happened?

When I updated to the newest WordPress version this error popped up and it won't go away. 
![image](https://github.com/user-attachments/assets/df1eb1aa-8dd5-4c43-87e9-5d36604fcb4a)


### What browsers are you seeing the problem on?

Firefox

### Relevant log output/errors

```shell
Notice: Function _load_textdomain_just_in_time was called incorrectly. Translation loading for the 12-step-meeting-list domain was triggered too early. This is usually an indicator for some code in the plugin or theme running too early. Translations should be loaded at the init action or later. Please see Debugging in WordPress for more information. (This message was added in version 6.7.0.) in /var/www/html/nai.is/wp-includes/functions.php on line 6114
```

**Answer** _by @joshreisner_

typically people access `wp-config.php` through their hosting control panel or SFTP, so you might need to speak to someone. this setting should be off for sites in production, because it's a security hazard, so definitely try to get that resolved!

i haven't heard of any issues between woocommerce and our plugin. could you be more specific about what the issue is that you're seeing?

<div class="c4r-source">Source: [Issue #1582](https://github.com/code4recovery/12-step-meeting-list/issues/1582)</div>

</details>


### Volunteer to add Thai translation {#volunteer-to-add-thai-translation}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hey TSML team,

I’m working with a group here in Thailand (https://aathailand.org/) and we’re really keen to get the TSML plugin translated into Thai. I’m happy to volunteer to help out with the translation through the WordPress.org translation system, so it can become an official language pack.

Before I get started, could you please confirm that once the Thai translation is complete and approved on WordPress.org, it will automatically be available and applied on our website?

**Answer** _by @koen-dieren_

And here is the translation for the types.json file: 

```json
\{
  "11": \{
    "en": "11th Step Meditation",
    "es": "Meditación del Paso 11",
    "fr": "Méditation sur la 11e Étape",
    "ja": "ステップ11 黙想",
    "nl": "Stap 11 meditatie",
    "pt": "Meditação do 11º Passo",
    "sk": "Meditácia 11. kroku",
    "sv": "11th Stegs Meditation",
    "th": "สมาธิขั้นที่ 11"
  \},
  "12x12": \{
    "en": "12 Steps & 12 Traditions",
    "es": "12 Pasos y 12 Tradiciones",
    "fr": "12 Étapes et 12 Traditions",
    "ja": "12のステップと12の伝統",
    "nl": "12 Stappen en 12 Tradities",
    "pt": "12 Passos e 12 Tradições",
    "sk": "12 Krokov & 12 Tradícií",
    "sv": "12 Steg & 12 Traditioner",
    "th": "12 ขั้นตอนและ 12 ธรรมเนียม"
  \},
  "A": \{
    "en": "Secular",
    "es": "Secular",
    "fr": "Séculier",
    "ja": "無宗教",
    "nl": "Seculier",
    "pt": "Secular",
    "sk": "Svetské",
    "sv": "Sekulärt",
    "th": "ไม่เกี่ยวกับศาสนา"
  \},
  "ABSI": \{
    "en": "As Bill Sees It",
    "es": "Como lo ve Bill",
    "fr": "Réflexions de Bill",
    "ja": "ビルはこう思う",
    "nl": "Zoals Bill het ziet",
    "pt": "Na opinião de Bill",
    "sk": "Ako to vidí Bill",
    "sv": "Som Bill Ser Det",
    "th": "ตามที่บิลมอง"
  \},
  "AF": \{
    "en": "Afrikaans",
    "es": "Afrikáans",
    "fr": "Afrikaans",
    "ja": "アフリカーンス語",
    "nl": "Afrikaans",
    "pt": "Afrikaans",
    "sk": "Afrikánčina",
    "sv": "Afrikaans",
    "th": "แอฟริกานส์"
  \},
  "AL": \{
    "en": "Concurrent with Alateen",
    "es": "Concurrente con Alateen",
    "fr": "En même temps qu’Alateen",
    "ja": "アラティーンと同時進行",
    "nl": "Gelijktijdig met Alateen",
    "pt": "Em simultâneo com Alateen",
    "sk": "Súbežne s Alateen",
    "sv": "Tillsammans med Alateen",
    "th": "พร้อมกันกับ Alateen"
  \},
  "AL-AN": \{
    "en": "Concurrent with Al-Anon",
    "es": "Concurrente con Al-Anon",
    "fr": "En même temps qu’Al-Anon",
    "ja": "アラノンと同時進行",
    "nl": "Gelijktijdig met Al-Anon",
    "pt": "Em simultâneo com Al-Anon",
    "sk": "Súbežne s Al-Anon",
    "sv": "Tillsammans med Al-Anon",
    "th": "พร้อมกันกับ Al-Anon"
  \},
  "AM": \{
    "en": "Amharic",
    "es": "Amárico",
    "fr": "Amharique",
    "ja": "アムハラ語",
    "nl": "Amhaars",
    "pt": "Amárico",
    "sk": "Amharčina",
    "sv": "Amhariska",
    "th": "อัมฮาริก"
  \},
  "AR": \{
    "en": "Arabic",
    "es": "Árabe",
    "fr": "Arabe",
    "ja": "アラビア語",
    "nl": "Arabisch",
    "pt": "Árabe",
    "sk": "Arabské",
    "sv": "Arabiska",
    "th": "อาหรับ"
  \},
  "ASL": \{
    "en": "American Sign Language",
    "es": "Lenguaje por señas",
    "fr": "Langage des Signes",
    "ja": "アメリカ手話",
    "nl": "Amerikaanse gebaren taal",
    "pt": "Língua Gestual Americana",
    "sk": "Americký posunkový jazyk",
    "sv": "Amerikanskt teckenspråk",
    "th": "ภาษามืออเมริกัน"
  \},
  "B": \{
    "en": "Big Book",
    "es": "Libro Grande",
    "fr": "Gros Livre",
    "ja": "ビッグブック",
    "nl": "Big Book",
    "pt": "Livro Azul",
    "sk": "Veľká Kniha",
    "sv": "Stora Boken",
    "th": "หนังสือใหญ่"
  \},
  "BA": \{
    "en": "Babysitting Available",
    "es": "Guardería disponible",
    "fr": "Garderie d’enfants disponible",
    "ja": "ベビーシッターあり",
    "nl": "Kinderopvang aanwezig",
    "pt": "Babysitting disponível",
    "sk": "Dostupné opatrovanie detí",
    "sv": "Barnvakt Finns",
    "th": "มีบริการดูแลเด็ก"
  \},
  "BE": \{
    "en": "Newcomer",
    "es": "Principiantes",
    "fr": "Nouveau/nouvelle",
    "ja": "ビギナーズ",
    "nl": "Nieuwkomer",
    "pt": "Recém-chegados",
    "sk": "Nováčikovia",
    "sv": "Nykomling",
    "th": "สมาชิกใหม่"
  \},
  "BG": \{
    "en": "Bulgarian",
    "es": "Búlgaro",
    "fr": "Bulgare",
    "ja": "ブルガリア語",
    "nl": "Bulgaars",
    "pt": "Búlgaro",
    "sk": "Bulharské",
    "sv": "Bulgariska",
    "th": "บัลแกเรีย"
  \},
  "BI": \{
    "en": "Bisexual"

…

<div class="c4r-source">Source: [Discussion #1846](https://github.com/code4recovery/12-step-meeting-list/discussions/1846)</div>

</details>


### French translation completed, need editor access on Wp to validate it {#french-translation-completed-need-editor-access-on-wp-to-validate-it}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I’ve finished a french translation of 12SML and I would like to autorize it and modify it. Here is a link to the completed translation :https://translate.wordpress.org/projects/wp-plugins/12-step-meeting-list/stable/fr/default/ Could you please send this already prepared request to :
https://make.wordpress.org/polyglots/
as an editor request.
Here is the request, Thanks a lot ! :
(Post Title) PTE Request for [12 steps meeting list]

Hello Polyglots, I am the plugin author for 12 steps meeting list https://fr.wordpress.org/plugins/12-step-meeting-list/. We have a number of great translation editors that we’d like to be able to approve translation for our plugin(s). Please add the following WordPress.org users as translation editors for their respective locales:

o #fr – @carlsansfa
o #fr_ca – @carlsansfa

If you have any questions, just comment here. Thank you!

#editor-requests

**Answer** _by @Carlsans_

Please consider this demand. I've spent several hours trying to deal with the Wp french translation team. They are really uptight. I've spent several hours trying to set this up and I'm not happy about it. Now we are using the po file copyed into the 12sml langage folder but we would like to make it easier. Anyway, I'm kind of upset right now. And by the way, I've created a pull request. Could you please consider it and either merge it or delete it. Anyway, thank you.

<div class="c4r-source">Source: [Issue #292](https://github.com/code4recovery/12-step-meeting-list/issues/292)</div>

</details>


### Default URL change since update from 3.9.? to 3.11.2 {#default-url-change-since-update-from-3-9-to-3-11-2}

<details>
<summary>Show question &amp; answer</summary>

**Question**

Hello, 

I did an update and the default url meetings.aa87.org/meetings is not working. 

I can go to /wp-admin. If I replace the meetings by reunions, it is working. 
https://meetings.aa87.org/reunions/

I understand that the new version in french change the default url for reunion. I supposed I should reinstall the extension but is there a way to change that default URL?

thank you

Submit by Benoit L’Heureux
admin@aa87.org


[2021-07-15 aa87 meetings list error.pdf](https://github.com/code4recovery/12-step-meeting-list/files/6822778/2021-07-15.aa87.meetings.list.error.pdf)

**Answer** _by @joshreisner_

Hey @lheureuxbenoit ,

Do you have access to your theme?

Try adding `$tsml_slug = 'meetings';` somewhere in your theme's functions.php file. This should return the URL to `/meetings`

<div class="c4r-source">Source: [Discussion #455](https://github.com/code4recovery/12-step-meeting-list/discussions/455)</div>

</details>


### Meeting Types addition request {#meeting-types-addition-request}

<details>
<summary>Show question &amp; answer</summary>

**Question**

I'm building my Al-Anon website and including TSML Version 3.14.23 for an Al-Anon Area in Canada. Wordpress Version 6.3.2.
In the "Types" checkboxes, English and Spanish are there. Could **French** be added in a future update?
We have some Bilingual English and French groups, as well as French speaking only groups in the area.
Never hurts to ask, right? Thank you for considering. Mickie

**Answer** _by @tim-rohrer_

Hi Mickie,

Yeah, we surely can discuss this. For the AA program, the type `FR` is included for French.

The good news is that you don't have to wait for us! :-) Check out this [faq entry](https://wordpress.org/plugins/12-step-meeting-list/#my%20meeting%20type%20isn%27t%20listed%21) to see how to add your own custom type. You can do this with your site, and add other languages if appropriate.

Hopefully that helps!

Tim

<div class="c4r-source">Source: [Discussion #1243](https://github.com/code4recovery/12-step-meeting-list/discussions/1243)</div>

</details>

