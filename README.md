Yorkshire Wildlife Park — Replica Site

Plain HTML/CSS/JS replica of **yorkshirewildlifepark.com** built as a sandbox for experimenting with UX improvements identified in the March 2026 WebUsability report.

## Pages
| `index.html` | Homepage 
| `tickets.html` | Ticket prices page with peak/off-peak/winter/summer tabs 
| `booking.html` | Booking flow  
| `experiences.html` | Animal experiences 
| `explore.html` | Explore section 
| `plan.html` | Plan your visit (parking, directions, access) 
| `short-breaks.html` | Hex hotel 

## File structure

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


## Brand tokens (top of `css/styles.css`)

css
--ywp-green-900: #0d3b1f;   /* deepest forest green */
--ywp-green-800: #124a28;   /* header background */
--ywp-orange:    #f07a1a;   /* primary CTA */
--ywp-yellow:    #f7c948;   /* accent */
--ywp-cream:     #f5f1e8;   /* alt section background */
--font-display:  'Fraunces', serif;
--font-body:     'Nunito Sans', sans-serif;

