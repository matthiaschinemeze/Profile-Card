# Testable Profile Card (HTML / CSS / JavaScript)

A small, accessible, and responsive **Profile Card** component built using **semantic HTML, modern CSS, and vanilla JavaScript**.

This project was built as part of a frontend coding task requiring testable elements (`data-testid` attributes), accessibility, responsiveness, and clean UI behavior.

## Features

✅ **Semantic HTML structure** (`<article>`, `<header>`, `<figure>`, `<section>`, `<nav>`)  
✅ **All required data-testid attributes** for automated testing  
✅ **Dynamic current time (ms)** — updates every second  
✅ **Avatar upload** (URL or file)  
✅ **Uploaded avatar persists using `localStorage`**  
✅ **Accessible social links** (open in new tab with `rel="noopener noreferrer"`)  
✅ **Dark, modern responsive design**  
✅ **Mobile-first layout using Flexbox**

## Project Structure

profile-card/
index.html # Main page
style.css # Styling (Dark theme + Responsive)
script.js # JavaScript logic (time + avatar upload)

## Technical Overview

### HTML
- Uses **semantic tags** to improve accessibility.
- All visible elements include `data-testid` attributes (required for tests).
- Avatar section supports both **default URL** and **user-uploaded images**.

### CSS
- **Dark mode** styling with contrast and readability.
- Responsive layout that adapts to **mobile, tablet, and desktop**.
- Uses **Flexbox** for clean alignment and spacing.

### JavaScript
- Displays live **current time in milliseconds** using `Date.now()`.
- Supports **avatar upload** via file input.
- Stores uploaded avatar in `localStorage` (persists after reload).

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/matthiaschinemeze/Profile-Card.git
   cd Profile-Card
