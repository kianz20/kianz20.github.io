---
name: Kian Jazayeri
description: Kian's projects as a 16-bit two-panel file manager on an Auckland dusk.
colors:
  blue: "#141e8c"
  blue-mid: "#2c5ce0"
  blue-light: "#58a8f0"
  night: "#141852"
  ramp-cream: "#fff7b0"
  ramp-yellow: "#ffe35a"
  ramp-amber: "#ffb52e"
  ramp-orange: "#ff7a2e"
  ramp-red: "#d2422e"
  dusk-night: "#0a103a"
  dusk-navy: "#101850"
  dusk-indigo: "#1c2268"
  dusk-violet: "#543ca0"
  dusk-rose: "#b05496"
  dusk-coral: "#f08068"
  dusk-amber: "#fcc468"
  skyline: "#18184a"
  rangitoto: "#2c225c"
  ink: "#10123c"
  muted: "#4f536c"
  panel-white: "#ffffff"
  grey: "#e2e3eb"
  dir-band: "#ecedf2"
  row-hover: "#e7e9f5"
  key: "#c8cad6"
  key-hover: "#d8dae6"
  bevel-dark: "#7c8098"
  bevel-ink: "#4a4e6c"
  code-text: "#e8ecff"
  ok: "#14703a"
  focus: "#b83a00"
  amber-hot: "#ff5050"
typography:
  display:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "7.2rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.15
  tagline:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1
  list:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.7rem"
    fontWeight: 400
  window-title:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: "3.9rem"
  body:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.6rem"
    fontWeight: 400
    lineHeight: 1
  command:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.5rem"
    fontWeight: 400
  label:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.3rem"
    fontWeight: 400
    lineHeight: 1
  caption:
    fontFamily: "'Jersey 15', 'Courier New', monospace"
    fontSize: "3.2rem"
    fontWeight: 400
    lineHeight: 1
  code:
    fontFamily: "'VT323', 'Courier New', monospace"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.12
rounded:
  none: "0px"
spacing:
  step-1: "0.3rem"
  step-2: "0.6rem"
  step-3: "0.9rem"
  step-4: "1.2rem"
  step-5: "1.5rem"
  step-6: "1.8rem"
  step-8: "2.4rem"
  step-10: "3rem"
components:
  window-files:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.step-1}"
  window-preview:
    backgroundColor: "{colors.grey}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.step-1}"
  title-bar:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.panel-white}"
    typography: "{typography.window-title}"
    padding: "0 1.2rem"
    height: "3.9rem"
  column-header:
    backgroundColor: "{colors.grey}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 0.9rem"
    height: "3.6rem"
  folder-band:
    backgroundColor: "{colors.dir-band}"
    textColor: "{colors.blue}"
    typography: "{typography.list}"
    padding: "0 0.9rem"
    height: "3.3rem"
  file-row:
    textColor: "{colors.ink}"
    typography: "{typography.list}"
    padding: "0 0.9rem"
    height: "3.6rem"
  file-row-hover:
    backgroundColor: "{colors.row-hover}"
  file-row-selected:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.panel-white}"
  file-row-resting:
    backgroundColor: "{colors.key}"
  button:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  button-hover:
    backgroundColor: "{colors.key-hover}"
  button-go:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    height: "4.8rem"
  function-key:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "3.6rem"
  function-key-current:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.panel-white}"
  command-line:
    backgroundColor: "{colors.panel-white}"
    textColor: "{colors.ink}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    padding: "0 0.9rem"
    height: "3.3rem"
  code-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.code-text}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.8rem"
---

# Design System: Kian Jazayeri

## Overview

**Creative North Star: "The Dusk Commander"**

The system is a 16-bit two-panel file manager running on a console screen, set against Auckland at dusk. Work is treated as data: every project is a file with a name, a commit count and a date, so the interface can show all of it at once at a high, deliberate density. Type is enormous by web standards because the screen is drawn at a low virtual resolution and scaled up, the way a game fills a TV.

Depth is carved from pixels, colour stays in flat fields, and the warm light belongs to the sky. Panes stay cool and legible so real project screenshots can sit inside them unaltered. Everything that moves steps from one state to the next with no interpolation.

The interface behaves as well as it looks. The list, the command line and the numbered keys all work, and on small screens the same parts stack into a scrolling page with the same materials.

**The Stepped Motion Rule.** Motion has discrete frames and no easing. Every keyframe animation uses `steps()`: the screenshot wipes in over eight steps (240ms), the Sky Tower beacon blinks hard (2.4s), the prompt cursor blinks hard (1.1s), and the mouse moves the scene in five positions at the 3px art grid. All of it is off under `prefers-reduced-motion`, including the parallax.

One shipped exception is recorded here and is not part of the system: in the stacked layout, selecting a file or key scrolls to the preview with the browser's smooth scroll, which is eased. It already falls back to an instant jump under reduced motion.

**Key Characteristics:**
- A fixed virtual screen of 144 by 90rem, scaled to fit
- Two bevelled windows, a command line and three numbered keys, all visible at once
- Bitmap faces at weight 400 with font smoothing off
- Square corners and zero-blur edges throughout
- Warm dusk outside the windows, cool panels inside them

## Colors

Cool blues and greys hold the interface, while a hot, banded sunset stays behind and above it.

### Primary
- **Commander Blue** (#141e8c): the selected row, the current key, folder names, project names, links and text selection. Also the browser theme colour.
- **Bar Blue** (#2c5ce0) and **Bar Glint** (#58a8f0): the middle and end of the title bar gradient, which runs left to right from Commander Blue, with Bar Blue at 70%.

### Secondary
- **Title Ramp** (#fff7b0, #ffe35a, #ffb52e, #ff7a2e, #d2422e): five hard-edged bands filling the name, split at 18%, 42%, 62% and 82%.
- **Outline Night** (#141852): the pixel outline around the name and the job line, which keeps both readable over any part of the sky.

### Tertiary
- **Dusk Scene** (#0a103a, #101850, #1c2268, #543ca0, #b05496, #f08068, #fcc468): the dithered sky, from indigo at the top through violet and rose to a coral and amber horizon, then falling to deep navy behind the windows. The darkest value is also the page background, so the screen's edges and the stacked page's lower reaches read as the same night. The sky raster holds eleven flat colours.
- **Skyline** (#18184a) and **Rangitoto** (#2c225c): flat silhouettes of the city and the island cone, with Dusk Amber lit windows on the city.

### Neutral
- **Navy Ink** (#10123c): all body text, window frames, button rings and the code block ground.
- **Muted Slate** (#4f536c): descriptions, the `<DIR>` marker, fact labels, the stack line and the command reply.
- **Panel White** (#ffffff): the file list window, the command line and every bevel highlight.
- **Preview Grey** (#e2e3eb): the preview window, column header and scrollbar track.
- **Folder Band** (#ecedf2): the band behind each folder name.
- **Row Hover** (#e7e9f5): the pointer's position in the list.
- **Keycap Grey** (#c8cad6) and **Keycap Hover** (#d8dae6): buttons, keys, scrollbar parts and the list's resting cursor.
- **Bevel Slate** (#7c8098): the shaded edge of every bevel and the dividers in the preview.
- **Bevel Ink** (#4a4e6c): the column header rule, keycap number blocks, the command line frame and image frames.
- **Code Text** (#e8ecff): text on the code block.

### Signal
- **Status Green** (#14703a): a good project status only, such as live, merged or available to download.
- **Focus Rust** (#b83a00): the keyboard focus ring on light surfaces.
- **Ramp Yellow** (#ffe35a), reused: the focus ring on the selected blue row.
- **Beacon Red** (#ff5050): the single lit pixel block on the Sky Tower. The source calls it `--amber-hot`.

### Named Rules

**The Sky Stays Outside Rule.** Warm colours belong to the scene and the name. Inside a window, the interface uses warmth only as a keyboard focus ring. Project screenshots keep their own colours.

**The Solid Blue Rule.** A solid Commander Blue fill means "this is the current one". It marks the selected row, the current key and selected text, so title bars carry a gradient and never the flat fill.

**The Two Panes Rule.** Lists sit on white and reading sits on grey. A new window takes the ground that matches its job.

## Typography

**Display Font:** Press Start 2P (with monospace)
**Body Font:** Jersey 15 (with Courier New, monospace)
**Label/Mono Font:** VT323 (with Courier New, monospace), for code only

**Character:** Press Start 2P is wide and loud, like a game's title card. Jersey 15 is condensed enough to run a whole interface at large sizes, and VT323 reads as terminal output beside it.

### Hierarchy
- **Display** (400, 7.2rem, line height 1): the name only, filled with the Title Ramp and outlined. Stacked: clamp(1.9rem, 6.6vw, 4.8rem).
- **Title** (400, 3rem, line height 1.15): the project or panel name in the preview, in Commander Blue. Stacked: 2.2rem.
- **Tagline** (400, 4.5rem, line height 1): the job line under the name, white with a Night outline. Stacked: clamp(2.2rem, 6vw, 3rem).
- **List** (400, 3.7rem): file rows and folder names. Stacked: 2.8rem.
- **Window title** (400, 3.6rem on a 3.9rem line): title bars. Stacked: 2.8rem on 3.6rem.
- **Body** (400, 3.6rem, line height 1, max 62ch): preview text and action buttons. Stacked: 2.8rem at line height 1.05.
- **Command** (400, 3.5rem): the command line.
- **Label** (400, 3.3rem, line height 1): column headers, keys and facts. Stacked: 2.6 to 2.8rem.
- **Caption** (400, 3.2rem, line height 1): the stack line and status strip. A pull request list runs at 3rem. Stacked: 2.6rem.
- **Code** (400, 3rem, line height 1.12): code blocks only. Stacked: 2rem.

### Named Rules

**The Bitmap Rule.** Each face ships in one weight and renders at 400 with font smoothing off. Headings reset to the inherited font, so nothing is ever synthetically bolded or slanted.

**The Three Faces Rule.** Press Start 2P is for the name and preview titles, Jersey 15 is for all interface and reading text, and VT323 appears only inside code blocks.

**The 8.3 Rule.** File names, folder names, paths and panel titles are written as capitals in DOS form (CARSPY.COM, C:\KIAN\SITES>). Sentence text and button labels stay in sentence case.

## Layout

The page is one fixed screen. At a 1440 by 900 display, 1rem is 10px, and the root size is the smaller of 100vw/144 and 100dvh/90, rounded down to a whole pixel where `round()` exists. Every length is in rem, so the composition scales as one object, like a console game. Windows wider than 16:10 stretch the desk and repeat the sky, with the city pinned left and Rangitoto pinned right.

Desktop spacing follows the art grid, with one art pixel equal to 0.3rem: most gaps are 0.3, 0.6, 0.9, 1.2 or 2.4rem. Screen margins are 3rem. The name sits top left over the scene, the desk fills the middle in two columns at 1.52 to 1 with a 2.4rem gap, and the command line and key row span the bottom. File rows use a four-column grid (26.2rem, flexible, 12.4rem, 14rem) for name, description, commits and date. Rows are 3.6rem tall and folder bands 3.3rem, with no gaps, which is what keeps eleven projects and three folders on one screen.

Below 900 wide or 560 tall, the root size locks to 10px and the page scrolls. The order becomes masthead, file list, keys in a two-column grid with About across the top, then preview. Column headers, commit and date columns, the command line and the beacon all drop away, the scene draws at two times its art size (96 by 60rem) behind the top of the page, rows grow to 4.8rem for touch, and a "Back to files" control closes the preview window.

**The Whole-Pixel Rule.** Rem steps through whole pixels so bevels and pixel art stay crisp. New measurements stay in rem, and new desktop gaps land on multiples of 0.3rem.

**The One Screen Rule.** The desktop page never scrolls. Long content scrolls inside its pane, and the first block of a preview fills the pane so that the rest starts cleanly below the fold.

## Elevation & Depth

Depth is entirely bevels. A raised surface has a white inset on its top and left and a Bevel Slate inset on its bottom and right, all with zero blur, and a pressed surface swaps the two. Nothing floats, nothing casts light, and tone separates panes from each other.

### Shadow Vocabulary
- **Raised bevel** (`box-shadow: inset 0.3rem 0.3rem 0 #fff, inset -0.3rem -0.3rem 0 var(--bevel-dark)`): windows, keys and the scrollbar thumb. Windows stacked on small screens use 2px.
- **Small raised bevel** (`box-shadow: inset 0.2rem 0.2rem 0 #fff, inset -0.2rem -0.2rem 0 var(--bevel-dark)`): the pager button and scrollbar arrows.
- **Ringed button** (raised bevel plus `0 0 0 0.3rem var(--ink)`): action buttons, so the primary route out reads heavier than a key.
- **Pressed bevel** (`box-shadow: inset 0.3rem 0.3rem 0 var(--bevel-dark), inset -0.3rem -0.3rem 0 #fff, 0 0 0 0.3rem var(--ink)`): the active state of a button.
- **Frame ring** (`box-shadow: 0 0 0 0.3rem var(--bevel-ink)`): the command line, which turns to Commander Blue on focus.

The viewer dims the screen with a flat backdrop of the page night at 72% (`rgba(10, 16, 58, 0.72)`).

### Named Rules

**The Bevel Rule.** Lift is a pair of hard inset edges. Every box shadow has zero blur, and any outside the element is a zero-offset ring, so no surface appears to hover above another.

**The Sprite Outline Rule.** Text over the scene gets a symmetric pixel outline in Outline Night, made from four 0.3rem drop shadow filters (2px when stacked). It belongs to the masthead, the only type that sits on the sky.

One shipped exception is recorded here and is not part of the system: at desktop size the name adds a fifth filter, a 0.6rem hard step downward in #0a0e3a beneath its outline. The stacked layout omits it, and new type should not inherit it.

## Shapes

Every corner is square and no element in the build has a radius. Frames are 0.3rem solid lines, and images take an inset 0.3rem Bevel Ink outline so that they read as held in the window. Scrollbar arrows are small crisp-edged SVG stairs, the only drawn glyphs. The scene is the one place with organic silhouettes, and it builds them from stair-stepped pixels.

## Components

### Windows
Sturdy panes that hold everything.
- **Corner Style:** square (0px).
- **Background:** Panel White for the file list, Preview Grey for the preview.
- **Shadow Strategy:** raised bevel inside a 0.3rem Navy Ink frame, with 0.3rem of padding.
- **Title bar:** a 3.9rem gradient bar holding white text at the left, over the dark end of the gradient. Controls sit at the right.

### File List
The signature component and the site's main navigation.
- **Column header:** grey band with a 0.3rem Bevel Ink rule beneath, desktop only.
- **Folder band:** Folder Band ground, name in Commander Blue, `<DIR>` in Muted Slate aligned with the commits column.
- **Rows:** names indent 2.7rem under their folder, descriptions are Muted Slate, numbers align right, and dates are DD-MM-YY.
- **Hover / Selected:** hover tints to Row Hover. Selected fills Commander Blue with all text white. While About is open, the row holds a Keycap Grey resting cursor.
- **Keys:** arrows, Home and End move the selection, wrapping at the ends. A keyboard press on the selected row opens the file, as does a double click.

### Preview
- **First block:** a screenshot or code block, the title, the lead sentence and the stack line, filling the pane. The image yields height so that no line of text is cut.
- **Screenshots:** real captures, left smooth, shown at up to a 44.4cqw crop. They load in the stepped wipe and open full size on click.
- **Pager:** a "-- More --" button in the title bar, present only while content remains below the fold.
- **Facts:** a two-column list under a 0.3rem Bevel Slate rule, with Muted Slate labels.
- **Status strip:** status at the left, in Status Green when good, and source at the right. Shared-project credit sits on a second line in Muted Slate.

### Buttons
- **Shape:** square (0px), filled Keycap Grey, with the ringed button bevel.
- **Primary:** the action button is 4.8rem tall and flexes to fill the pane's width.
- **Hover / Focus:** hover lightens to Keycap Hover with no transition. Active swaps to the pressed bevel. Focus is a 0.3rem Focus Rust ring drawn inside the edge.

### Navigation
- **Style:** three function keys in a row, each a raised bevel with a white numeral on a Bevel Ink block at the left, then a Label text. Keys 1 to 3 on the keyboard press them.
- **Current:** Commander Blue fill, white text, bevel removed.
- **Mobile:** a two-by-two grid at 4.8rem tall between the file list and preview.

### Inputs / Fields
- **Style:** the command line is a white 3.3rem strip with a Bevel Ink frame ring, a DOS path as its label, and a blinking underscore as its placeholder. Replies appear at the right in Muted Slate.
- **Focus:** the frame turns Commander Blue, the placeholder clears and the caret is Commander Blue. Any typed letter moves focus here.

### Code Block
- **Style:** Navy Ink ground, Code Text in VT323, 1.5rem by 1.8rem padding, with an inset 0.3rem Bevel Ink frame. It takes the screenshot's place when a project has no image.

### Viewer
- **Style:** a modal window at min(92vw, 120rem) with a Navy Ink frame, a sticky 5rem gradient title bar and a Close button, over the flat night backdrop.

### Scrollbars
- **Style:** drawn to match the world at 1.5rem wide, with a grey track, a raised Keycap Grey thumb and pixel-stair arrow buttons. Firefox falls back to `scrollbar-color` in Bevel Ink on grey.

## Do's and Don'ts

### Do:
- **Do** size everything in rem so that it scales with the screen, and keep desktop gaps on multiples of 0.3rem.
- **Do** build lift from the paired white and Bevel Slate inset edges, with a 0.3rem Navy Ink frame around windows.
- **Do** present new work as a file: a capitalised 8.3 name, a folder, a short description, a real commit count and a real date.
- **Do** show real screenshots unfiltered inside a 0.3rem Bevel Ink outline, and keep pixel treatment to the scene.
- **Do** show focus with a 0.3rem Focus Rust ring inset from the edge, or Ramp Yellow on Commander Blue.
- **Do** use `steps()` for any animation, and switch it off under `prefers-reduced-motion`.
- **Do** keep touch targets at 4.8rem in the stacked layout.

### Don't:
- **Don't** round a corner anywhere.
- **Don't** use a blurred shadow or an outer shadow offset from its element, since depth comes from bevels.
- **Don't** add transitions or eased animation to state changes. Hover and selection are instant.
- **Don't** put amber, coral or the Title Ramp inside a window, apart from a focus ring.
- **Don't** use smooth gradients outside the title bar. The name's ramp and the sky are hard bands and dither.
- **Don't** set anything in VT323 except code, or in Press Start 2P except the name and preview titles.
- **Don't** apply bold, italic or font smoothing to the bitmap faces.
- **Don't** let the desktop page scroll, or cut a line of text at a pane's edge.
