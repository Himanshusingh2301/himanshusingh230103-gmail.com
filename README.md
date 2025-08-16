# JTG - Frontend Home Assignment

A simple and responsive **portfolio-style web template** built using **HTML, CSS, and JavaScript**.  
It is lightweight, mobile-friendly, and includes interactive elements like a **carousel slider** and a **responsive navigation bar**.  

Designed with a clean layout and **Google Font – Open Sans** for better readability.

---


## Github Repository
 Repo Link: [https://github.com/Himanshusingh2301/himanshusingh230103-gmail.com](https://github.com/Himanshusingh2301/himanshusingh230103-gmail.com)  


---

## Features
- Responsive layout using CSS Flexbox + Media Queries  
- Navigation bar with collapsible menu on smaller screens  
- Hero section with a clean intro heading  
- Projects section with styled cards  
- Recommendations carousel:
  - Auto-slide every 4s
  - Pauses on interaction and resumes after 5s
  - Dot indicators for active slide
  - Dot navigation, on clicking on the corresponding dot
  - Left/Right arrow controls
  - Keyboard navigation (`←` / `→`)
- Contact form and contact info section  
- Footer with links & social icons  
- Typography with **Open Sans**  

---

## Tech Stack
- **HTML5** – Structure  
- **CSS3** – Styling (`style.css`, `responsive.css`)  
- **JavaScript (ES6)** – Carousel & interactive navbar (`script.js`)  
- **Google Fonts** – Open Sans  

---

## Styling and Responsiveness
The visual appearance and adaptability across devices are managed by two CSS files:

### Base Styling (`style.css`)
- Defines layout, color scheme, typography, and spacing.  
- Provides consistent design for all sections (header, hero, projects, contact, footer).  

### Responsive Styling (`responsive.css`)
Handles different screen sizes using media queries:  
- `@media (max-width: 1083px)` → collapsible navbar, stacked contact section, wrapped footer  
- `@media (max-width: 830px)` → footer images wrap  
- `@media (max-width: 685px)` → hero section margins adjust  
- `@media (max-width: 522px)` → smaller hero title, compact navbar padding  

This separation ensures the design remains clean on desktops, tablets, and mobiles.

---

## Carousel Functionality
- Auto-slide with a 4-second delay  
- Pauses auto-slide on user interaction  
- Resumes auto-slide after 5 seconds of inactivity  
- Multiple navigation options:
  - Left and right arrows  
  - Keyboard navigation (`←` / `→`)  
  - Clickable dot indicators  
- The active slide is highlighted with the `.active-card` class  
- Smooth transitions handled with CSS `transform: translateX`  

---

## Responsive Navbar
- Hamburger menu (`.bar`) toggles `.navlinks.show`  
- Collapsible menu for tablets and mobile screens  
- Full horizontal navigation on larger screens  

---
