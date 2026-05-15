Yorkshire Wildlife Park — Replica Site

Plain HTML/CSS/JS replica of **yorkshirewildlifepark.com** built as a sandbox for experimenting with UX improvements identified in the March 2026 WebUsability report.

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
# from this folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages

| File | Purpose | UX report area |
|---|---|---|
| `index.html` | Homepage — hero, info tiles, card grid 
| `tickets.html` | Ticket prices page with peak/off-peak/winter/summer tabs 
| `booking.html` | Booking flow — ticket selection + basket 
| `experiences.html` | Animal experiences grouped by Platinum → Bronze tier 
| `explore.html` | Explore section landing 
| `plan.html` | Plan your visit (parking, directions, access) 
| `short-breaks.html` | Hex hotel packages 

## File structure

```
ywp-replica/
├── index.html
├── tickets.html
├── booking.html
├── experiences.html
├── explore.html
├── plan.html
├── short-breaks.html
├── css/
│   └── styles.css     ← all styling, CSS variables at top
├── js/
│   └── main.js        ← mobile nav, price tabs, basket logic
└── README.md
```

## Brand tokens (top of `css/styles.css`)

```css
--ywp-green-900: #0d3b1f;   /* deepest forest green */
--ywp-green-800: #124a28;   /* header background */
--ywp-orange:    #f07a1a;   /* primary CTA */
--ywp-yellow:    #f7c948;   /* accent */
--ywp-cream:     #f5f1e8;   /* alt section background */
--font-display:  'Fraunces', serif;
--font-body:     'Nunito Sans', sans-serif;
```

Change these in one place and everything updates.

## What this replica deliberately keeps "broken" (for experimenting)

From the UX report — these issues are reproduced so you can fix and test against them:

1. **Complex ticket-price table** (`tickets.html`) — peak/off-peak × online/on-the-day × weekday/weekend × summer/winter. Testers found this overwhelming.
2. **Multiple booking CTAs** in the header and info tiles — competing entry points.
3. **Animal experiences grouped by tier** (Platinum → Bronze), with Platinum shown first — creates "it's expensive" first impression.
4. **Unusual terminology** like "Concession" (on booking page) vs "Senior/Student" (on pricing page) — inconsistent.
5. **Quantity +/− controls only**, no type-a-number input — painful for families/groups.
6. **Animal Experiences sitting under Tickets & Passes** — testers expected them under Explore or What's On.

# Suggested experiments

- **Booking model v2**: Restructure `booking.html` into packaged paths (Tickets only / Tickets + Stay / Tickets + Stay + Experience).
- **Simplified pricing**: Replace the `tickets.html` table with 1 price × member/non-member toggle.
- **Experiences by animal**: Re-sort `experiences.html` by animal or price instead of tier.
- **Integrated upsells**: Add an experience/upsell step inside `booking.html` after ticket selection.
- **Single book CTA**: Reduce the 6 booking entry points in the Book Now dropdown to 1 primary path.

## Notes

- No real images — everything uses CSS gradients or coloured blocks to keep the file size small and avoid IP issues. Drop real photos into `img/` if you want.
- The top banner ("REPLICA SITE") is there on purpose so it's never mistaken for the live site.
- Not tied to any CMS or backend. Pure static files — safe to fork, clone, experiment.
