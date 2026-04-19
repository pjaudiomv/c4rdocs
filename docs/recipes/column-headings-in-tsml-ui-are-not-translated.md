---
id: column-headings-in-tsml-ui-are-not-translated
title: Column headings in TSML UI are not translated
description: "discussed in https://github.com/code4recovery/12-step-meeting-list/discussions/840#discussioncomment-9306126\r"
sidebar_position: 17
tags: ["recipe", "tsml-ui"]
---

# Column headings in TSML UI are not translated

> TSML UI & Data Feed • [Issue #1414](https://github.com/code4recovery/12-step-meeting-list/issues/1414) • _answer by @pjaudiomv_

## The question

discussed in https://github.com/code4recovery/12-step-meeting-list/discussions/840#discussioncomment-9306126

TSML UI is getting English string overrides from TSML which is why these are showing in English on https://m.aa87.org/meetings

## The answer

TSML UI sets the language/translation based off `navigator.language` ignoring any language parameter. You can test this by using google chrome dev tools and changing your locale

I think one solution would be to do something like this, where if language setting is passed in then don't auto-detect

```diff
--- a/src/hooks/settings.tsx
+++ b/src/hooks/settings.tsx
@@ -155,10 +155,13 @@ export const SettingsProvider = ({
-    const preferredLanguage = navigator.language.substring(0, 2);
+    // Only auto-detect language from browser if not explicitly set by user
+    if (!userSettings?.language) {
+      const preferredLanguage = navigator.language.substring(0, 2);

-    if (preferredLanguage in settings.strings) {
-      settings.language = preferredLanguage as Lang;
+      if (preferredLanguage in settings.strings) {
+        settings.language = preferredLanguage as Lang;
+      }
```

then explicitly pass that in from 12 step wp plugin

```diff
--- a/includes/shortcodes.php
+++ b/includes/shortcodes.php
@@ -177,6 +177,7 @@ function tsml_ui($arguments = [])
                 'feedback_emails' => array_values($tsml_feedback_addresses),
                 'flags' => $tsml_programs[$tsml_program]['flags'],
+                'language' => $tsml_language,
```

## Code


### Snippet 1

```diff
--- a/src/hooks/settings.tsx
+++ b/src/hooks/settings.tsx
@@ -155,10 +155,13 @@ export const SettingsProvider = ({
-    const preferredLanguage = navigator.language.substring(0, 2);
+    // Only auto-detect language from browser if not explicitly set by user
+    if (!userSettings?.language) {
+      const preferredLanguage = navigator.language.substring(0, 2);

-    if (preferredLanguage in settings.strings) {
-      settings.language = preferredLanguage as Lang;
+      if (preferredLanguage in settings.strings) {
+        settings.language = preferredLanguage as Lang;
+      }
```


### Snippet 2

```diff
--- a/includes/shortcodes.php
+++ b/includes/shortcodes.php
@@ -177,6 +177,7 @@ function tsml_ui($arguments = [])
                 'feedback_emails' => array_values($tsml_feedback_addresses),
                 'flags' => $tsml_programs[$tsml_program]['flags'],
+                'language' => $tsml_language,
```


---

_Original source: [issue #1414](https://github.com/code4recovery/12-step-meeting-list/issues/1414)._
