---
id: region-hierarchy-lost-on-csv-export-import-meetings-only-retain-two-level-region
title: Region Hierarchy Lost on CSV Export/Import; Meetings Only Retain Two-Level Region Arrays
description: "### Add a description"
sidebar_position: 16
tags: ["recipe", "getting-started"]
---

# Region Hierarchy Lost on CSV Export/Import; Meetings Only Retain Two-Level Region Arrays

> Getting Started • [Issue #1864](https://github.com/code4recovery/12-step-meeting-list/issues/1864) • _answer by @joshreisner_

## The question

### Add a description

### Summary

When creating regions nested more than two levels deep, exporting meetings to CSV and re-importing them does not restore the original nested region hierarchy. Additionally, even after manually fixing region parent/child relationships post-import, meetings never re-establish their full ancestor region chain.

This results in permanently flattened region relationships in JSON Feed.

---

### Steps to Reproduce

1. **Fresh install of TSML**

2. **Create 4 nested regions**

   ```
   USA → California → San Francisco → Castro
   ```

3. **Create one meeting per region**

   * **USA**

     * Library of Congress
       `101 Independence Ave SE, Washington, DC 20540`
   * **California**

     * California State Capitol
       `1315 10th St, Sacramento, CA 95814`
   * **San Francisco**

     * San Francisco City Hall
       `1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102`
   * **Castro**

     * Castro Camera
       `573–575 Castro St, San Francisco, CA 94114`

4. **Confirm pre-export JSON**

   * The Castro Camera meeting JSON correctly contains **four nested regions** in its `regions` array:

     ```
     USA → California → San Francisco → Castro
     ```

5. **Export meetings to CSV**

6. **Re-import the CSV** deleting everything first

---

### Imported CSV Structure (Relevant Columns)

| Name                     | Region        | Sub Region    |
| ------------------------ | ------------- | ------------- |
| Library of Congress      | USA           |               |
| California State Capitol | USA           | California    |
| San Francisco City Hall  | California    | San Francisco |
| Castro Camera            | San Francisco | Castro        |

*(Expected limitation: CSV supports only `Region` + `Sub Region`)*

---

### Observed Behavior After Import

1. Regions are **flattened**, producing duplicate “middle” regions:

   ```
   USA → California-1
   California-2 → San Francisco-1
   San Francisco-2 → Castro
   ```

2. This flattening is expected given the CSV format.

3. **Manually fixing the region hierarchy**:

   * Regions are re-nested to match the original structure:

     ```
     USA → California → San Francisco → Castro
     ```
   * Some extra unused intermediate regions may remain.

4. **Final issue**:

   * Inspecting the JSON feed shows that **all meetings only ever contain two regions** in their `regions` array.
   * This remains true **even after the region hierarchy is manually corrected**.

---

### Expected Behavior

* After re-import **and/or** after manually fixing region parent-child relationships:

  * Meetings should re-establish their full region ancestry.
  * Example:

    ```
    Castro Camera → USA → California → San Francisco → Castro
    ```

---

### Actual Behavior

* Meetings remain permanently limited to **two region levels** in their `regions` array.
* Changes to region parents do **not** propagate to existing meetings.

---

### Possible Issues (Likely Related)

1. **Export / Import Limitation**

   * Nested regions deeper than two levels cannot be restored to their original hierarchy through CSV export/import.

2. **Region Parent Update Bug**

   * Changing a region’s parent does not trigger a recalculation of the `regions` array for associated meetings (missing antecedent parents).

These may be separate bugs, but they compound to make it impossible to recover correct region nesting after import.

## The answer

thanks @SIA-WEBSUP for raising this issue. this reflects my understanding as well. we use the `Region` and `Sub Region` columns in the CSV import, and don't import (or even export, i think) the `Regions` as a column.

if i recall correctly, we added `regions` as a key in JSON to support TSML UI, but without a plan how, or if, to support it with CSVs

## Code


### Snippet 1

```text
USA → California → San Francisco → Castro
```


### Snippet 2

```text
USA → California → San Francisco → Castro
```


### Snippet 3

```text
USA → California-1
   California-2 → San Francisco-1
   San Francisco-2 → Castro
```


### Snippet 4

```text
USA → California → San Francisco → Castro
```


### Snippet 5

```text
Castro Camera → USA → California → San Francisco → Castro
```


---

_Original source: [issue #1864](https://github.com/code4recovery/12-step-meeting-list/issues/1864)._
