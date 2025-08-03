# Justin Lee - Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features smooth scrolling, dynamic animations, and a professional design perfect for showcasing your projects and skills to recruiters and companies.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: One-page layout with smooth scroll navigation
- **Dynamic Animations**: Intersection Observer-based animations that trigger on scroll
- **Interactive Elements**: Hover effects, form validation, and interactive components
- **Mobile-Friendly**: Hamburger menu for mobile navigation
- **Performance Optimized**: Throttled scroll events and lazy loading

## 📁 File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Customization Guide

### Personal Information

1. **Update Personal Details** (in `index.html`):
   - Change the name "Justin Lee" to your name
   - Update the title and description in the hero section
   - Modify the about section content
   - Update contact information

2. **Update Statistics** (in `index.html`):
   ```html
   <div class="stat">
       <span class="stat-number" data-target="5">0</span>
       <span class="stat-label">Years Experience</span>
   </div>
   ```

3. **Update Contact Information** (in `index.html`):
   ```html
   <div class="contact-method">
       <i class="fas fa-envelope"></i>
       <span>your.email@example.com</span>
   </div>
   ```

### Projects Section

1. **Add Your Projects** (in `index.html`):
   - Replace the existing project cards with your own projects
   - Update project descriptions, technologies, and links
   - Add or remove project cards as needed

2. **Project Card Structure**:
   ```html
   <div class="project-card" data-project="your-project">
       <div class="project-image">
           <i class="fas fa-icon-name"></i>
       </div>
       <div class="project-content">
           <h3>Your Project Name</h3>
           <p>Project description here...</p>
           <div class="project-tech">
               <span class="tech-tag">Technology</span>
           </div>
           <div class="project-links">
               <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
               <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>
           </div>
       </div>
   </div>
   ```

### Skills Section

1. **Update Skills** (in `index.html`):
   - Modify the skills categories and items
   - Add or remove skill items as needed
   - Update icons using Font Awesome classes

2. **Skill Item Structure**:
   ```html
   <div class="skill-item" data-skill="Skill Name">
       <i class="fab fa-icon-name"></i>
       <span>Skill Name</span>
   </div>
   ```

### Styling Customization

1. **Color Scheme** (in `styles.css`):
   - Primary color: `#2563eb` (blue)
   - Secondary color: `#3b82f6` (light blue)
   - Update gradient backgrounds in hero section

2. **Fonts**:
   - Currently using Inter font from Google Fonts
   - Change the font import in `index.html` to use different fonts

3. **Animations**:
   - Modify animation speeds and effects in `styles.css`
   - Adjust timing in `script.js` for scroll animations

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload your website files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up for Netlify
2. Drag and drop your website folder
3. Your site will be deployed instantly
4. Get a custom domain or use the provided Netlify URL

### Option 3: Vercel (Free)

1. Sign up for Vercel
2. Connect your GitHub repository
3. Deploy automatically on every push
4. Get a custom domain or use the provided Vercel URL

### Option 4: Traditional Web Hosting

1. Upload files to your web hosting provider
2. Ensure all files are in the root directory
3. Access via your domain name

## 🔧 Technical Features

### JavaScript Functionality

- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Intersection Observer**: Animations trigger when elements come into view
- **Form Validation**: Contact form with email validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Parallax Effects**: Floating elements move on scroll
- **Number Animations**: Statistics animate when scrolled into view
- **Notification System**: Success/error messages for form submission

### CSS Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and keyframe animations
- **Responsive Design**: Mobile-first approach
- **CSS Variables**: Easy color scheme customization
- **Backdrop Filter**: Glass-morphism effects

### Performance Optimizations

- **Throttled Scroll Events**: Prevents performance issues
- **Lazy Loading**: Images load when needed
- **Optimized Animations**: Hardware-accelerated transforms
- **Minimal Dependencies**: Only Font Awesome for icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images (when added)
- Fast loading times

## 🔄 Updates and Maintenance

### Adding New Sections

1. Add new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link if needed
4. Add animations in `script.js` if desired

### Adding Images

1. Place images in an `images/` folder
2. Use lazy loading: `<img data-src="images/your-image.jpg" class="lazy">`
3. Images will load when scrolled into view

### Adding More Projects

1. Copy existing project card structure
2. Update content and links
3. Add appropriate Font Awesome icons
4. Update project technologies

## 📞 Support

If you need help customizing or deploying your website:

1. Check the browser console for any JavaScript errors
2. Ensure all files are in the same directory
3. Test on different browsers and devices
4. Validate HTML and CSS using online validators

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for showcasing your professional portfolio to recruiters and companies.** 