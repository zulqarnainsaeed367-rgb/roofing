# Testimonial sources

Source: https://www.absoluteroofingcompany.net/about-us/

Retrieved on 2026-10-07. The component displays the first ten written Google
reviews in the source widget's order, skipping its initial rating-only entry.
The widget contains 25 entries, including lower ratings later in its list.
The ten displayed entries each have a source rating of 5. The aggregate rating
shown by that website is 4.9 from 647 reviews; these values are a static snapshot.

`src/data/testimonials.js` records each original profile-image URL, reviewer
profile link, rating, and concise paraphrase. The cards explicitly label the text
as a review summary and link to the reviewer's Google reviews. They identify
Absolute Construction as the reviewed business.

Downloaded source images live in `public/images/testimonials`. Eight are Google
initials avatars; Julie Perkins and Anne MacDonald have profile photos. Their
actual WebP/PNG formats are preserved. A failed local image falls back to the
reviewer's initials. No Pinterest portraits are used.

The four repeated church testimonials in the page's HTML are hidden on all
viewports and are not used by this component.
