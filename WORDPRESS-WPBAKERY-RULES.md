# WPBakery Landing Page Rules — Sogolytics

> **Always read this file before building or editing any WordPress landing page.**

---

## Why standalone HTML doesn't work in WPBakery

When a self-contained HTML file is pasted into a **Raw HTML** block:

1. WPBakery's own column CSS (`span_6`, `wpb_column`, `vc_row-fluid`) overrides any `display:grid` or `display:flex` rules from a `<style>` block.
2. `<style>` blocks are sometimes stripped by WordPress content filters.
3. The WordPress theme (`Sogosurvey`) already loads **Epilogue** and **CrimsonPro** font families and a full set of CSS variables — duplicate declarations cause conflicts.

**Rule: Never use a `<style>` block or a custom CSS class for layout. Use WPBakery rows/columns for structure and inline `style=""` attributes for all visual properties.**

---

## Core WPBakery wrapper structure

Every section of a landing page is one WPBakery row. Add sections as separate Raw HTML blocks, OR paste the entire page as one Raw HTML block with multiple rows.

### Single-column full-width section
```html
<div class="wpb_row vc_row-fluid full-width-section section section-no-parallax cust-html-section stretch" data-speed="1" style="BACKGROUND-STYLE">
  <div class="col span_12 color-dark left">
    <div class="vc_col-sm-12 wpb_column column_container col no-padding color-dark" style="" data-animation="" data-delay="">
      <div class="wpb_wrapper" style="max-width:1120px;margin:0 auto;padding:80px 24px;">
        <!-- CONTENT HERE -->
      </div>
    </div>
  </div>
</div>
```

### Two-column section (50/50)
```html
<div class="wpb_row vc_row-fluid full-width-section section section-no-parallax cust-html-section stretch" data-speed="1" style="BACKGROUND-STYLE">
  <div class="col span_12 color-dark left" style="display:flex;align-items:center;max-width:1120px;margin:0 auto;padding:80px 24px;gap:64px;">

    <!-- Left column -->
    <div style="flex:1;min-width:0;">
      <!-- LEFT CONTENT -->
    </div>

    <!-- Right column -->
    <div style="flex:1;min-width:0;">
      <!-- RIGHT CONTENT -->
    </div>

  </div>
</div>
```

> For mobile responsiveness on 2-col sections, add a `<style>` block at the very top of the page's raw HTML (before any rows) with only layout-responsive overrides — not visual ones.

---

## Available WordPress theme CSS classes

These classes are defined in `sogo_rem_template_2024.css` and always available on betaprod/prod:

### Typography
| Class | Use |
|---|---|
| `.fs-epilogue-h1` | H1 — 8rem, Bold, tight letter-spacing |
| `.fs-epilogue-h2` | H2 — 6.5rem |
| `.fs-epilogue-h3` | H3 — 6rem |
| `.fs-epilogue-h4` | H4 — 5rem |
| `.fs-epilogue-h5` | H5 — 4rem |
| `.fs-epilogue-h6` | H6 — 3rem |
| `.fs-pm` | Body large — 2.5rem, Regular |
| `.fs-pl` | Body XL — 3rem, Regular |
| `.fs-italic` | Italic teal accent (CrimsonPro, color: --color-secondary-v2) |
| `.font-Epilogue-Bold` | Font family only — Epilogue Bold |
| `.font-Epilogue-SemiBold` | Font family only — Epilogue SemiBold |
| `.font-Epilogue-Regular` | Font family only |
| `.white-text` | `color: #ffffff` |
| `.align-c` | `text-align: center` |
| `.lh-12` / `.lh-14` etc | Line-height helpers |

### Buttons
Use the **slide button** system — it has built-in hover animation:
```html
<!-- Yellow filled button (primary CTA) -->
<a href="https://www.sogolytics.com/request-a-demo/" class="slide-btn-wrapper slide-button fill-bg" style="text-decoration:none">
  <i class="fa fa-arrow-right"></i>
  <span>Request a Demo</span>
</a>

<!-- Yellow outline button (secondary) -->
<a href="#" class="slide-btn-wrapper slide-button transparent-bg" style="text-decoration:none">
  <i class="fa fa-arrow-right"></i>
  <span>Learn More</span>
</a>
```

### CSS Variables (use in inline style="" attributes)
```
--color-deepOcean:    #092224   ← hero / dark section backgrounds
--color-ocean:        #093033   ← slightly lighter dark
--color-neonYellow:   #fff000   ← CTA buttons, accents
--color-secondary-v2: #02becc   ← teal / highlights
--color-primary-v2:   #006159   ← dark green accents
--color-lonavala:     #006159   ← same green
--color-white:        #ffffff
--color-almostWhite:  #f6f6f6
--color-linen:        #f8f4ed
--font-Epilogue-Bold: Epilogue-Bold
--font-Epilogue-Regular: Epilogue-Regular
```

---

## Page-level responsive CSS block

Add this ONE `<style>` block at the very top of the raw HTML content. It contains ONLY responsive layout overrides (not visual styles). This is allowed by WPBakery and does not conflict.

```html
<style>
@media (max-width: 768px) {
  .lp-two-col { flex-direction: column !important; }
  .lp-hero-visual { display: none !important; }
  .lp-grid-3 { flex-direction: column !important; }
  .lp-grid-2 { flex-direction: column !important; }
}
</style>
```

Then use `class="lp-two-col"` on 2-column flex wrappers, `class="lp-grid-3"` on 3-up card rows, etc.

---

## DO NOT include

- `<html>`, `<head>`, `<body>`, `<nav>`, `<footer>` tags — WordPress provides these
- `@font-face` declarations — fonts are already loaded by the theme
- `:root { --color-... }` blocks — variables are already defined globally
- External font `<link>` tags for Epilogue / CrimsonPro — already loaded
- Duplicate CSS variable definitions

---

## Logo bar placeholder pattern

```html
<!-- LOGO 1: Replace div with <img src="URL" alt="Company" style="height:36px;width:auto;filter:grayscale(1);opacity:0.6"> -->
<div style="height:36px;min-width:100px;background:#f0f4f3;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#b0b8c1;padding:0 16px;">LOGO 1</div>
```

---

## FAQ accordion JS

Include this script once at the bottom of the raw HTML block. It works without jQuery.

```html
<script>
(function(){
  document.querySelectorAll('.lp-faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.lp-faq-item');
      var answer = item.querySelector('.lp-faq-answer');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.lp-faq-item.open').forEach(function(el){
        el.classList.remove('open');
        el.querySelector('.lp-faq-answer').style.maxHeight='0';
      });
      if(!isOpen){ item.classList.add('open'); answer.style.maxHeight=answer.scrollHeight+'px'; }
    });
  });
})();
</script>
```

---

## GTM dataLayer push

```html
<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ event: 'lp_view', page_variant: 'cx-platform', page_type: 'conquesting' });
</script>
```

---

## File naming conventions

| Type | File | Notes |
|---|---|---|
| Standalone (Vercel preview) | `public/pages/lp-cx-platform.html` | Full HTML, self-contained, for Vercel preview + direct download |
| WordPress snippet | `public/pages/lp-cx-platform-wp.html` | No header/footer/nav, WPBakery structure, inline styles only |

Always build BOTH versions. The standalone version is for preview and download; the WP version is what gets pasted into WPBakery Raw HTML.
