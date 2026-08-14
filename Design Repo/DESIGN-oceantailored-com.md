---
name: OceanTailored
url: https://www.oceantailored.com/
colors:
  primary: '#cc603c'
  primary-hover: '#efb26b'
  background: '#ffffff'
  background-light: '#f2f2f2'
  background-alt: '#f0eceb'
  background-dark: '#000000'
  background-dark-alt: '#333333'
  text-primary: '#484848'
  text-secondary: '#000000'
  text-inverse: '#ffffff'
  text-muted-dark: 'rgba(255, 255, 255, 0.5)'
  link: '#85c1b2'
  border: '#d8d8d8'
  border-dark: '#d9d9d9'
  highlight-background: '#cc603c'
  highlight-text: '#ffffff'
  error-background: 'rgba(255, 0, 0, 0.08)'
  error-text: '#db3131'
  focus-ring: 'rgb(89, 89, 89)'
  dark-background: '#000000'
  dark-text: '#ffffff'
  dark-link: '#85c1b2'
  dark-button-background: '#ffffff'
  dark-button-text: '#000000'
typography:
  display:
    family: 'Archivo'
    size: 70px
    weight: 400
    line-height: 1.2
  heading-1:
    family: 'Archivo'
    size: 45px
    weight: 600
    line-height: 1.2
  heading-2:
    family: 'Archivo'
    size: 35px
    weight: 600
    line-height: 1.2
  heading-3:
    family: 'Archivo'
    size: 30px
    weight: 600
    line-height: 1.2
  heading-4:
    family: 'Archivo'
    size: 25px
    weight: 600
    line-height: 1.2
  body:
    family: 'Quicksand'
    size: 15px
    weight: 400
    line-height: 1.5
  small:
    family: 'Quicksand'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Quicksand'
    size: 12px
    weight: 400
    line-height: 1.5
  button:
    family: 'Quicksand'
    size: 14px
    weight: 600
    line-height: 1.2
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]
radius:
  sm: 2px
  md: 3px
  lg: 10px
  xl: 20px
  full: 100px
elevation:
  card: 'rgba(63, 63, 68, 0.4) 0px 4px 10px 0px'
  card-hover: 'rgba(0, 0, 0, 0) 3px 5px 24px 0px'
  header: 3
  megamenu: 6
  mobile-menu: 99
  cookie-banner: 2000000
motion:
  duration-base: '0.4s'
  duration-fast: '0.2s'
  easing-standard: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  easing-ease-in-out: 'ease-in-out'
components:
  button-primary:
    bg: '{colors.background}'
    text: '{colors.text-secondary}'
    radius: '{radius.lg}'
    padding: '10px 15px'
    weight: 600
  button-secondary:
    bg: '{colors.background-dark-alt}'
    text: '{colors.text-inverse}'
    radius: '{radius.sm}'
    padding: '8px 25px'
    weight: 400
  card:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    radius: '{radius.xl}'
    shadow: '{elevation.card}'
---

# Design System Inspired by OceanTailored

## 1. Visual Theme & Atmosphere
OceanTailored presents a premium, adventurous aesthetic, deeply rooted in high-quality photography and dynamic video content. The brand leverages a striking accent palette of `#cc603c` (burnt orange) and `#85c1b2` (teal), which contrast against a clean `#ffffff` background and bold `#000000` dark sections, creating a sophisticated yet rugged feel. Typography is a blend of the strong, uppercase `Archivo` for headings (e.g., 70px 400 for display text) and the approachable, lighter `Quicksand` for body content (15px 400), ensuring clarity and brand distinctiveness. The site extensively uses video (6 autoplay instances detected) and CSS keyframe animations (13 detected) to bring product imagery to life, enhancing engagement and conveying motion relevant to wetsuit use.

The overall atmosphere is one of high performance and custom craftsmanship, underscored by generous whitespace and subtle elevation effects. Key interactive elements, such as buttons, feature a soft `#efb26b` hover state, providing a gentle visual feedback. The extensive use of large, full-width image and video sections, often overlaid with crisp white or accent-colored typography, serves as the brand's signature visual element, drawing the user into an immersive experience of ocean sports.

**Key Characteristics**
-   **Vibrant Accents**: `#cc603c` and `#85c1b2` highlight key content.
-   **Dual Typography**: `Archivo` for impact, `Quicksand` for readability.
-   **Immersive Media**: High-quality photography and autoplay videos.
-   **Soft Interaction**: Gentle `#efb26b` hover states on buttons.
-   **Generous Spacing**: Ample 24px and 40px vertical padding.
-   **Subtle Depth**: Card shadows `rgba(63, 63, 68, 0.4) 0px 4px 10px 0px`.
-   **Dynamic Motion**: CSS keyframe animations and smooth transitions.

## 2. Color Palette & Roles
The OceanTailored color palette is built around a balance of natural tones and vibrant accents, providing clear visual hierarchy and an engaging user experience.

-   **Primary**
    -   `primary`: `#cc603c` — The main brand accent, used for highlights, active states, and important calls to action.
    -   `primary-hover`: `#efb26b` — A lighter, warmer accent used for button and link hover states, providing a gentle interactive feedback.
-   **Accent Colors**
    -   `link`: `#85c1b2` — A distinctive teal used for standard links, creating a cool contrast to the primary orange.
    -   `highlight-background`: `#cc603c` — Used for background elements that need to stand out, such as promotional banners.
    -   `highlight-text`: `#ffffff` — Text color used on `highlight-background` for optimal contrast.
-   **Interactive**
    -   `focus-ring`: `rgb(89, 89, 89)` — Standard focus ring color for accessibility and input states.
-   **Neutral Scale**
    -   `background`: `#ffffff` — The dominant background color for most content sections, providing a clean canvas.
    -   `background-light`: `#f2f2f2` — A very light grey used for subtle section separation or background elements.
    -   `background-alt`: `#f0eceb` — A slightly warmer off-white, used for alternative background sections.
    -   `background-dark`: `#000000` — Primary dark background for footer, navigation, and specific content blocks.
    -   `background-dark-alt`: `#333333` — A softer dark background, used for secondary dark elements like cookie consent buttons.
    -   `text-primary`: `#484848` — The main body text color, offering excellent readability on light backgrounds.
    -   `text-secondary`: `#000000` — Used for headings, strong text, and text on white buttons, providing high contrast.
    -   `text-inverse`: `#ffffff` — Text color for use on dark backgrounds or primary accent colors.
    -   `text-muted-dark`: `rgba(255, 255, 255, 0.5)` — Muted text for secondary information on dark backgrounds.
-   **Surface & Borders**
    -   `border`: `#d8d8d8` — A light grey used for form field borders, product separations, and subtle dividers.
    -   `border-dark`: `#d9d9d9` — Used for submenu borders, providing a subtle separation.
-   **Semantic / System**
    -   `error-background`: `rgba(255, 0, 0, 0.08)` — Light red background for error messages or alerts.
    -   `error-text`: `#db3131` — Strong red for error text or "sold out" badges.
-   **Dark Mode Pairing**
    -   `dark-background`: `#000000` — The primary background for the dark theme.
    -   `dark-text`: `#ffffff` — Main text color when on dark backgrounds.
    -   `dark-link`: `#85c1b2` — Link color in dark mode.
    -   `dark-button-background`: `#ffffff` — Button background in dark mode.
    -   `dark-button-text`: `#000000` — Button text color in dark mode.

## 3. Typography Rules
OceanTailored employs a dual-font strategy to establish a clear visual hierarchy and convey its brand personality.

-   **Font Family**:
    -   Primary Headings: `Archivo`, `sans-serif`
    -   Body Text: `Quicksand`, `sans-serif`
    -   Monospace: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `Courier New`, `monospace`
-   **Hierarchy**:
    -   **Display**: `Archivo` `70px` `400` · line-height `1.2` · tracking `0.0em` · Used for prominent hero sections and large marketing statements.
    -   **Heading 1**: `Archivo` `45px` `600` · line-height `1.2` · tracking `0.0em` · Main section titles and primary content headings.
    -   **Heading 2**: `Archivo` `35px` `600` · line-height `1.2` · tracking `0.0em` · Sub-section titles and important informational headings.
    -   **Heading 3**: `Archivo` `30px` `600` · line-height `1.2` · tracking `0.0em` · Card titles and secondary content headings.
    -   **Heading 4**: `Archivo` `25px` `600` · line-height `1.2` · tracking `0.0em` · Smaller feature titles or prominent labels.
    -   **Body**: `Quicksand` `15px` `400` · line-height `1.5` · tracking `0.0em` · Standard paragraph text and most informational content.
    -   **Small**: `Quicksand` `14px` `400` · line-height `1.5` · tracking `0.0em` · Used for product details, meta information, and form labels.
    -   **Caption**: `Quicksand` `12px` `400` · line-height `1.5` · tracking `0.0em` · Legal text, footnotes, and very fine print.
    -   **Button**: `Quicksand` `14px` `600` · line-height `1.2` · tracking `0.0em` · All button text, typically uppercase.
-   **Principles**
    -   Headings (`Archivo`) consistently use a `600` font weight for emphasis, except for the `Display` size which uses `400`.
    -   Body text (`Quicksand`) maintains a `400` weight and `1.5` line-height for optimal readability across various content densities.
    -   Interactive elements like buttons and navigation links use `Quicksand` `600` `14px` with `uppercase` transform for clear call-to-action.
    -   Text color `#484848` on `#ffffff` backgrounds is preferred for body content to ensure AAA accessibility.
    -   Font sizes scale down gracefully on smaller viewports, with `Archivo` headings maintaining their strong visual presence.

## 4. Component Stylings

### Buttons

#### Primary Button
The primary button features a clean, high-contrast appearance with a distinct rounded rectangle shape. On hover, it transitions to the brand's primary accent color, and on click, it provides a subtle visual feedback with a `translateY(1px)` transform.

```css
.button-primary {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--button-font-size, 14px); /* inferred from screenshot */
  font-weight: var(--button-font-weight, 600);
  text-transform: var(--button-text-transform, uppercase);
  padding: 10px 15px;
  border: 1px solid var(--button-border, #ffffff);
  border-radius: var(--button-radius, 10px);
  background-color: var(--button-background, #ffffff);
  color: var(--button-text-color, #000000);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out),
              color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out),
              border-color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-primary:hover {
  background-color: var(--button-background-hover, #efb26b);
  border-color: var(--button-border-hover, #efb26b); /* inferred from screenshot */
  color: var(--button-text-color-hover, #ffffff);
}

.button-primary:active {
  transform: translateY(1px);
}

.button-primary:disabled {
  opacity: 0.5;
  cursor: default;
}
```

#### Secondary Button
Secondary buttons are used for less prominent actions, often appearing with a dark background and inverse text. They share the same subtle active state and disabled opacity as primary buttons.

```css
.button-secondary {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: 14.7px; /* from extracted tokens */
  font-weight: 400;
  padding: 8px 25px;
  border: 1px solid var(--secondary-button-border, #ffffff);
  border-radius: var(--radius-sm, 2px);
  background-color: var(--background-dark-alt, #333333);
  color: var(--text-inverse, #ffffff);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out),
              color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out),
              border-color var(--motion-duration-base, 0.4s) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-secondary:hover {
  background-color: var(--secondary-button-background-hover, #1e1e1e);
  color: var(--text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--secondary-button-background-hover, #1e1e1e); /* inferred from screenshot */
}

.button-secondary:active {
  transform: translateY(1px);
}

.button-secondary:disabled {
  opacity: 0.5;
  cursor: default;
}
```

#### Ghost Button
Ghost buttons are text-only or text with a minimal border, typically used for less emphasized actions or navigation within a content block.

```css
.button-ghost {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: 14px; /* inferred from screenshot */
  font-weight: 600; /* inferred from screenshot */
  text-transform: uppercase; /* inferred from screenshot */
  padding: 10px 20px; /* inferred from screenshot */
  border: 1px solid var(--text-secondary, #000000); /* inferred from screenshot */
  border-radius: var(--radius-lg, 10px);
  background-color: transparent;
  color: var(--text-secondary, #000000);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-ease-in-out, ease-in-out),
              border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-ghost:hover {
  color: var(--primary, #cc603c); /* inferred from screenshot */
  border-color: var(--primary, #cc603c); /* inferred from screenshot */
}

.button-ghost:active {
  transform: translateY(1px);
}

.button-ghost:disabled {
  opacity: 0.5;
  cursor: default;
}
```

### Cards & Containers

#### Standard Card
Cards are used to display product listings or featured content, characterized by a clean white background and a subtle shadow for elevation. On hover, the shadow subtly expands, drawing attention to the interactive element.

```css
.card {
  background-color: var(--card-background, #ffffff);
  color: var(--text-primary, #484848);
  border-radius: var(--card-radius, 20px);
  box-shadow: var(--elevation-card, rgba(63, 63, 68, 0.4) 0px 4px 10px 0px);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 0.4s) var(--motion-easing-standard, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.card:hover {
  box-shadow: var(--elevation-card-hover, rgba(0, 0, 0, 0) 3px 5px 24px 0px);
}
```

### Inputs & Forms

#### Text Input
Standard text inputs have a white background, a light grey border, and a generous border-radius. On focus, a distinct dark grey outline appears for accessibility, and disabled inputs are muted.

```css
.input-text {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--body-font-size, 15px); /* inferred from screenshot */
  font-weight: var(--body-font-weight, 400);
  background-color: var(--form-background, #ffffff);
  color: var(--form-text-color, #000000);
  padding: var(--spacing-12, 12px) var(--spacing-16, 16px); /* inferred from screenshot */
  border: 1px solid var(--form-border, #d8d8d8);
  border-radius: var(--form-radius, 10px);
  transition: border-color var(--motion-duration-fast, 0.2s) ease-in-out; /* inferred from screenshot */
}

.input-text:focus {
  outline: 2px solid var(--focus-ring, rgb(89, 89, 89));
  outline-offset: 1px;
  border-color: var(--focus-ring, rgb(89, 89, 89)); /* inferred from screenshot */
}

.input-text:disabled {
  color: rgb(160, 160, 160);
  background-color: var(--background-light, #f2f2f2); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Form Label
Form labels are typically set in the standard body font, with a slightly smaller size for clarity and to maintain a clean form layout.

```css
.form-label {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--small-font-size, 14px);
  font-weight: var(--body-font-weight, 400);
  color: var(--text-primary, #484848);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
Custom styled checkboxes and radio buttons maintain the brand's aesthetic, with a distinct background color when checked.

```css
.checkbox-input,
.radio-input {
  /* Hide native input */
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom,
.radio-custom {
  display: inline-block;
  width: var(--spacing-20, 20px); /* inferred from screenshot */
  height: var(--spacing-20, 20px); /* inferred from screenshot */
  border: 1px solid var(--border, #d8d8d8);
  border-radius: var(--radius-sm, 2px); /* Square for checkbox */
  vertical-align: middle;
  margin-right: var(--spacing-8, 8px); /* inferred from screenshot */
  background-color: var(--background, #ffffff);
  transition: background-color var(--motion-duration-fast, 0.2s) ease-in-out,
              box-shadow var(--motion-duration-fast, 0.2s) ease-in-out;
}

.radio-custom {
  border-radius: var(--radius-full, 100px); /* Circle for radio */
}

.checkbox-input:checked ~ .checkbox-custom {
  background-color: var(--text-secondary, #000000);
  border-color: var(--text-secondary, #000000);
}

.radio-input:checked ~ .radio-custom {
  background-color: transparent; /* Radio button inner circle is often transparent or a dot */
  box-shadow: inset 0 0 0 6px var(--text-secondary, #000000); /* inferred from screenshot */
}

.checkbox-input:focus-visible ~ .checkbox-custom,
.radio-input:focus-visible ~ .radio-custom {
  outline: 2px solid var(--focus-ring, rgb(89, 89, 89));
  outline-offset: 2px;
}

.checkbox-input:disabled ~ .checkbox-custom,
.radio-input:disabled ~ .radio-custom {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Navigation

#### Top Navigation Bar
The top navigation bar is a prominent element, often transparent over hero images and becoming solid white on scroll. It features a subtle transition for its background and text color changes.

```css
.nav-bar {
  background-color: var(--background, #ffffff);
  color: var(--text-primary, #484848);
  padding: var(--spacing-20, 20px) var(--spacing-40, 40px); /* inferred from screenshot */
  border-bottom: 1px solid transparent; /* inferred from screenshot */
  transition: background-color var(--motion-duration-base, 0.4s) ease-in-out,
              color var(--motion-duration-base, 0.4s) ease-in-out,
              border-color var(--motion-duration-base, 0.4s) ease-in-out;
  z-index: var(--elevation-header, 3);
}

/* Example for transparent header state */
.nav-bar.transparent {
  background-color: transparent;
  color: var(--text-inverse, #ffffff);
  border-bottom-color: transparent;
}
```

#### Navigation Link
Navigation links are clear and concise, using the primary text color. On hover, they adopt the `primary-hover` accent color, and an active state is indicated by the `primary` accent.

```css
.nav-link {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--body-font-size, 15px); /* inferred from screenshot */
  font-weight: var(--body-font-weight, 400);
  color: var(--text-primary, #484848);
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.2s) ease-in-out;
}

.nav-link:hover {
  color: var(--header-hover-color, #efb26b);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--primary, #cc603c); /* inferred from screenshot */
  font-weight: var(--heading-font-weight, 600); /* inferred from screenshot */
}
```

#### Dropdown Menu
Dropdown menus provide supplementary navigation, appearing as clean white panels with a subtle border. They transition smoothly into view.

```css
.dropdown-menu {
  background-color: var(--background, #ffffff);
  border: 1px solid var(--submenu-border-color, #d9d9d9);
  border-radius: var(--radius-md, 3px); /* inferred from screenshot */
  padding: var(--spacing-16, 16px) 0; /* inferred from screenshot */
  box-shadow: var(--elevation-card, rgba(63, 63, 68, 0.4) 0px 4px 10px 0px); /* inferred from screenshot */
  z-index: var(--elevation-megamenu, 6);
  opacity: 0;
  visibility: hidden;
  transform: translateY(var(--spacing-8, 8px)); /* inferred from screenshot */
  transition: opacity var(--motion-duration-fast, 0.2s) ease-out,
              transform var(--motion-duration-fast, 0.2s) ease-out,
              visibility var(--motion-duration-fast, 0.2s) ease-out;
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--body-font-size, 15px); /* inferred from screenshot */
  font-weight: var(--body-font-weight, 400);
  color: var(--text-primary, #484848);
  padding: var(--spacing-8, 8px) var(--spacing-24, 24px); /* inferred from screenshot */
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 0.2s) ease-in-out,
              color var(--motion-duration-fast, 0.2s) ease-in-out;
}

.dropdown-menu-item:hover {
  background-color: var(--background-light, #f2f2f2); /* inferred from screenshot */
  color: var(--text-primary, #484848);
}
```

### Links

#### Standard Link
Standard text links are underlined and use the `link` teal color, transitioning to the `primary` accent color on hover.

```css
.link-standard {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--body-font-size, 15px);
  font-weight: var(--body-font-weight, 400);
  color: var(--link-color, #85c1b2);
  text-decoration: underline;
  transition: color var(--motion-duration-fast, 0.2s) ease-in-out;
}

.link-standard:hover {
  color: var(--primary, #cc603c); /* inferred from screenshot */
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--link-color, #85c1b2); /* inferred from screenshot */
}
```

#### Secondary Link
Secondary links, often found in the footer or less prominent sections, use inverse text on dark backgrounds and highlight with the `primary-hover` color.

```css
.link-secondary {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--small-font-size, 14px); /* inferred from screenshot */
  font-weight: var(--body-font-weight, 400);
  color: var(--text-inverse, #ffffff);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.2s) ease-in-out;
}

.link-secondary:hover {
  color: var(--primary-hover, #efb26b); /* inferred from screenshot */
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--text-inverse, #ffffff); /* inferred from screenshot */
}
```

### Badges

#### Status Badge - Custom
Custom badges are used for various product statuses, featuring a black background and white text by default.

```css
.badge-custom {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--caption-font-size, 12px); /* inferred from screenshot */
  font-weight: var(--button-font-weight, 600); /* inferred from screenshot */
  text-transform: uppercase;
  padding: var(--spacing-4, 4px) var(--spacing-8, 8px); /* inferred from screenshot */
  border-radius: var(--radius-sm, 2px); /* inferred from screenshot */
  background-color: var(--custom-badge-bg, #000000);
  color: var(--custom-badge-color, #FFFFFF);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

#### Status Badge - Sold Out
The "Sold Out" badge uses a strong red background to clearly indicate product unavailability.

```css
.badge-soldout {
  font-family: var(--body-font-family, 'Quicksand, sans-serif');
  font-size: var(--caption-font-size, 12px); /* inferred from screenshot */
  font-weight: var(--button-font-weight, 600); /* inferred from screenshot */
  text-transform: uppercase;
  padding: var(--spacing-4, 4px) var(--spacing-8, 8px); /* inferred from screenshot */
  border-radius: var(--radius-sm, 2px); /* inferred from screenshot */
  background-color: var(--soldout-badge-bg, #db3131);
  color: var(--soldout-badge-color, #FFFFFF);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## 5. Layout Principles

-   **Spacing System**: The OceanTailored spacing system is built on a `4px` base unit, providing a flexible yet consistent rhythm across the design.
    -   Base `4px` → `0`, `4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `64`, `80`
    -   **Usage Context**:
        -   `0px`: No spacing, for tight alignments or overrides.
        -   `4px`: Smallest increment, for icon-text separation or very subtle internal padding.
        -   `8px`: Standard small spacing, for list item gaps or minor form element separation.
        -   `12px`: Medium-small spacing, for input field vertical padding or button text to edge.
        -   `16px`: Base padding for smaller components, or horizontal spacing between elements.
        -   `20px`: Moderate spacing for internal component padding or small content blocks.
        -   `24px`: Standard vertical spacing for card content, section sub-elements, or button padding.
        -   `32px`: Larger spacing for separating distinct content blocks or horizontal grid gaps.
        -   `40px`: Generous spacing for major content sections, or large component padding.
        -   `48px`: Significant vertical separation between main sections.
        -   `64px`: Large section padding, particularly for hero areas or prominent content blocks.
        -   `80px`: Extra large spacing for dramatic visual separation or full-width hero content.

-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1200px` (inferred from screenshot)
    -   Columns: `12` (inferred from common web design practices)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `0 40px` on desktop, `0 20px` on mobile (inferred from screenshot)

-   **Whitespace Philosophy**: OceanTailored embraces a generous whitespace philosophy, particularly in vertical spacing, to create a sense of openness and premium quality. Large `48px` to `64px` vertical gaps between major content sections allow elements to breathe and prevent visual clutter. Horizontal padding of `40px` on desktop ensures content never feels cramped, while ample internal component padding (e.g., `24px` within cards) contributes to a clean, uncluttered aesthetic. This deliberate use of space directs user focus and highlights key product imagery and calls to action.

-   **Border Radius Scale**:
    -   `sm`: `2px` — Minimal rounding for subtle softening, often seen on secondary buttons.
    -   `md`: `3px` — Slightly more noticeable rounding for dropdowns or small interactive elements.
    -   `lg`: `10px` — Standard rounding for primary buttons, input fields, and some image containers.
    -   `xl`: `20px` — More pronounced rounding for cards and larger content blocks, contributing to a modern, friendly feel.
    -   `full`: `100px` — Used for fully rounded elements like pills, avatars, or radio buttons.

## 6. Depth & Elevation
OceanTailored uses subtle shadows and a clear z-index hierarchy to create depth and manage stacking contexts, with a focus on functional layering rather than heavy visual effects.

-   **Flat (z-0)**: `none` — Default state for most background elements and static content.
-   **Card (z-1)**: `rgba(63, 63, 68, 0.4) 0px 4px 10px 0px` — Used for product cards and content containers to give them a slight lift off the background.
-   **Header (z-3)**: `none` — Applied to the main site header, ensuring it floats above page content when sticky.
-   **Megamenu (z-6)**: `none` — Used for navigation dropdowns and submenus, appearing above the main header.
-   **Mobile Menu (z-99)**: `none` — The highest z-index for the full-screen mobile navigation drawer, ensuring it covers all other content.
-   **Cookie Banner (z-2000000)**: `none` — The absolute highest z-index for critical system-level overlays like cookie consent banners.

**Shadow Philosophy**: The brand's shadow philosophy is restrained, employing a single, soft `rgba(63, 63, 68, 0.4) 0px 4px 10px 0px` shadow for cards to provide a gentle sense of depth. A more diffused shadow `rgba(0, 0, 0, 0) 3px 5px 24px 0px` is used on card hover states to create a subtle interactive lift. Beyond this, elevation is primarily managed through `z-index` values to control stacking order for interactive elements like navigation and modals, without relying on additional visual shadows.

## 7. Do's and Don'ts

### Do's
-   **Do** use `Archivo` `70px` `400` for `Display` headings on `#ffffff` backgrounds to create a strong visual impact.
-   **Do** pair `Quicksand` `15px` `400` body text with `#484848` color on `#ffffff` backgrounds for AAA readability (ratio 9.15).
-   **Do** highlight interactive elements like the `Primary Button` with `background-color: #efb26b` on hover.
-   **Do** apply `border-radius: 20px` to `Cards` and prominent content blocks for a modern, softened aesthetic.
-   **Do** use `padding: 10px 15px` for `Primary Buttons` to ensure comfortable touch targets and visual balance.
-   **Do** maintain `24px` of horizontal gutter spacing between grid columns for a clean and open layout.
-   **Do** use the `link` color `#85c1b2` for standard text links, providing a refreshing contrast to the `text-primary` `#484848`.
-   **Do** ensure all form inputs have a `2px` `rgb(89, 89, 89)` outline on `:focus` for clear accessibility.
-   **Do** use `transition: background-color 0.4s ease-in-out` for the `Top Navigation Bar` when it changes from transparent to solid.

### Don'ts
-   **Don't** use `#85c1b2` text on `#f2f2f2` backgrounds; the measured ratio of 1.83 fails AA accessibility.
-   **Don't** place `#efb26b` text on `#ffffff` backgrounds; the measured ratio of 1.87 fails AA accessibility.
-   **Don't** use `Quicksand` `400` for `Heading 1` titles; instead, use `Archivo` `45px` `600` for appropriate visual weight.
-   **Don't** introduce custom spacing values outside the `4px` base scale (e.g., `10px` or `22px`) to maintain consistency.
-   **Don't** use heavy, opaque shadows; stick to the subtle `rgba(63, 63, 68, 0.4) 0px 4px 10px 0px` for `Cards`.
-   **Don't** apply `border-radius: 2px` to large `Cards`; reserve `20px` for these components.
-   **Don't** use the `error-text` color `#db3131` for general body copy; it is reserved for error states and `Sold Out` badges.
-   **Don't** omit the `text-transform: uppercase` for `Button` text, as it's a key brand characteristic for calls to action.

## 8. Responsive Behavior *(Suggested — not measured)*
_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~575px): Typography scales down; single-column layouts for product grids.
    -   **Mobile Large** (~767px): Navigation collapses to a hamburger menu; card layouts may shift.
    -   **Tablet** (~991px): Two-column layouts become common; larger typography for headings.
    -   **Desktop** (~1025px): Standard desktop layout with full navigation; generous spacing.
    -   **Desktop Large** (~1441px): Wider content containers; potentially larger hero images.
-   **Touch Targets**:
    -   Interactive elements like `Buttons` and `Navigation Links` should have a minimum tap area of `44px` by `44px`.
    -   Maintain at least `8px` of clear space between adjacent touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: The primary navigation bar collapses into a full-screen mobile menu drawer (z-index `99`) below `767px`.
    -   **Cards**: Product `Cards` transition from multi-column grids to single-column stacks on mobile viewports.
    -   **Typography**: `Display` and `Heading 1` font sizes scale down proportionally on smaller screens to fit content.
    -   **Padding**: Horizontal section padding reduces from `40px` to `20px` on mobile to maximize content width.
    -   **Forms**: Form inputs and labels stack vertically on mobile, ensuring full readability and ease of interaction.
    -   **Spacing**: Vertical spacing between major sections may be slightly reduced on mobile, but `24px` remains a minimum.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#cc603c`
    -   `primary-hover`: `#efb26b`
    -   `background`: `#ffffff`
    -   `background-dark`: `#000000`
    -   `text-primary`: `#484848`
    -   `text-secondary`: `#000000`
    -   `text-inverse`: `#ffffff`
    -   `link`: `#85c1b2`
    -   `border`: `#d8d8d8`
    -   `focus-ring`: `rgb(89, 89, 89)`

-   **Iteration Guide**
    1.  Always use `Archivo` `600` for `Heading 1` through `Heading 4` on all pages.
    2.  Ensure `Primary Buttons` always have `border-radius: 10px` and `padding: 10px 15px`.
    3.  Apply `background-color: #efb26b` and `color: #ffffff` to `Primary Buttons` on `:hover`.
    4.  Utilize the `4px` spacing scale for all internal and external component spacing.
    5.  Set `Cards` with `border-radius: 20px` and `box-shadow: rgba(63, 63, 68, 0.4) 0px 4px 10px 0px`.
    6.  All `Text Inputs` must have `border: 1px solid #d8d8d8` and `border-radius: 10px`.
    7.  Implement `outline: 2px solid rgb(89, 89, 89)` for `Text Inputs` on `:focus` state.
    8.  `Standard Links` must use `color: #85c1b2` and `text-decoration: underline`.
    9.  The `Top Navigation Bar` has a `z-index: 3` and transitions `0.4s` for background changes.
    10. Ensure `text-primary` `#484848` on `background` `#ffffff` maintains AAA contrast (ratio 9.15).
    11. Implement mobile-first design, collapsing navigation to a drawer below `767px`.
    12. Use `background-dark: #000000` with `text-inverse: #ffffff` for footer and dark sections.