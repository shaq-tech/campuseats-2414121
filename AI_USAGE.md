# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): None
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 2

- Tool(s): ChatGPT
- What I asked for: help in understanding why my website was balnk
- What I kept, changed or rejected, and why: 2 mistakes: 1 spelling of MenuList, 2 header cartCount was in the wrong place in App.jsx
- One thing the AI got wrong and how I fixed it: it assumed I didn't fix the issues, so i let it know I already fixed it.

## Week 3

- Tool(s): Claude
- What I asked for: help with the Week 3 lab: fetching vendors, cart handlers, cart page, checkout form, merging a classmate's vendors.json, and the category buttons/filter.
- What I kept, changed or rejected, and why: rejected its first App.jsx because it hid the header while loading (not in the labsheet). Kept the cart and form code after reading it. Removed the wrapper from my friend's json so it's a plain array. Left out "My Orders" since the Week 3 header doesn't have it.
- One thing the AI got wrong and how I fixed it: it said the borderradius typo in my css breaks the input corners. It doesn't, the browser just ignores it.

## Week 4

- Tool(s): Claude
- What I asked for: walked through the Week 4 lab step by step: useLocalStorage and useVendors hooks, cart context and useCart, the pages and routes, and my feature (category filter in the URL with ?cat=).
- What I kept, changed or rejected, and why: kept the code from the walkthrough and read through it. Kept my own CategoryFilter component and moved the filter logic into VendorPage.
- One thing the AI got wrong and how I fixed it: its commit steps split VendorPage.jsx into its own commit, which would leave the first commit importing a file that isn't in it. Fix: put everything in one commit, or check that each commit runs.