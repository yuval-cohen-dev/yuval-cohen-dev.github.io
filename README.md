# Welcome to Yuval Cohen ☀️

Welcome to **[www.yuval-cohen.com](https://www.yuval-cohen.com)** - 
a static HTML site that serves as my personal digital website, business card and portfolio, showcasing some of my work and skills.

This site is more than just a showcase - It’s built with the latest technologies, best practices, and a plenty of ***over-engineering*** for what might seem like a simple web presence. 🚀

It’s a personal website, but why not turn it into a tech showcase while I’m at it? 😎

#### 🔀 Branches:
- **`main` branch**: Used for development; does not contain the live site. This branch automatically builds and pushes changes to production branch.
- **`prod` branch**: Production branch - holds the live website and is deployed via GitHub Pages.


## ☁️ Hosting Domain & DNS Management:
- Domain purchased from **GoDaddy**
- Domain managed through **Cloudflare**
- Hosted on **GitHub Pages** though Cloudflare
  
## ⚡ CI/CD Workflow:
- **Git & GitHub** for version control
- **GitHub Actions** automates deployment using **github workflows**, pushing changes from `main` to `prod`
- **GitHub Pages** serves the final live version of the site from the `prod` branch


## 💻 Tech Stack

### 🌐 Web Technologies:
- 🦖 **TypeScript/Javascript**
- 🦧 **HTML**
- 🦎 **CSS**
- 🦏**React**
- 🦅 **Next.js** 
  - Utilizes Next.js **App Router**
  - Follows best practices and conventions
- 💅🏼 **Styling**:
    - 🦄 **TailwindCSS**: For styling
    - 🐞 **Framer Motion**: For animations
    - 🐝 **PostCSS & Autoprefixer**: To enhance CSS processing
    - 🪼**NProgress**: Provides a smooth page-loading experience

### 🏗️ Development Environment and Tools 🛠️
- 🐳 **Docker & Docker Compose**: Containerization
- 🦈 **Dev Containers**: Fully featured reproducible ubuntu development environment
- 🦣 **Node.js**: Javascript runtime
- 🐘 **Npm**: Package manager for Javascript, featuring many custom script
- 🦍 **VScode**: IDE used with devcontainers, scripting, debugging,extensions, snippets, ...
- 🐶 **Husky**: Git hooks, utilized for pre-commit actions.
- 🐰 **Lint-Staged**: Ensures only proper staged files is committed
- 🙊**ESLint**: Code analysis tool
- 🦚**Prettier**: Formatting code by conventions 
- 🦆**CodeSpell**: Fixes typos and minor errors automatically
- 🐎**EditorConfig**: helps maintain consistent coding styles

### 🧪 Testing
- 🐄 **Jest**: Rendering tests with snapshots and coverage

## 💫 Features:
🚧 🥸 Don't skip the note  🚧

Aside from the content, which is custom-built specifically for me, this website was designed as a modular, scalable project. This means that cloning this repository can be useful for others as a template for their own static websites. You just need to adjust a few simple settings, and it can serve as a starting point for your project.

🚨 ⚠️ Please note: This project can be used as a template for static builds serving websites only! ⚠️ 🚨


### 🛡️ Web Optimization & SEO:
- SEO & Metadata
- Progressive Web App (**PWA**) with service worker and offline cache
- Dynamic metadata assets discovery
- Dynamic metadata generation
- `manifest.json`
- `robots.txt`, 
- `sitemap.xml`s  
- Favicon, Apple Touch icon, ...
- OpenGraph & Twitter, ...
- JSON-LD
- Javascript obfuscation - ironically this is open source 💆‍♂️ 😀

### 📊 Analytics & Monitoring
- **Google Analytics**: Tracks user interactions and engagement.
- **Cloudflare Analytics**: Monitors traffic and security insights.
- **OpenTelemetry**: Provides frontend observability and performance tracking (though currently redundant, as there’s no backend). 👀

### 🌏 Services:
- 🧔‍♂️ **GoDaddy**: Purchasing and managing the selected domain.
- 🔥 **Cloudflare**:  
    - Provides SSL certificates
    - Global CDN for fast content delivery
    - Global distribution
    - DNS management
    - Provides security though various methods
    - Monitoring security
    - Monitoring performance
    - Monitoring traffic
- 💥 **Github**: 
    - Codebase
    - Hosting platform, 
- 🌳  **Google Analytics**
- 👍 **Formspree**: A simple, free solution for handling contact form submissions:
  - I really don't want to set up a backend just for a contact form.
  - Supports up to 30 free emails per month, which is great, i don't need more then that.
  - Has extra nice features, such as spam detection 



---

### 🌈 About This Project 🌻
It might seem like a bit much for a static website, but the goal was to create something that’s not only functional but also scalable, maintainable, and easy to extend.

While a simple HTML page would do the job, I opted to integrate a full suite of modern tools to future-proof the project, streamline development, and ensure smooth deployments. 

🎯 this project is a personal website designed to evolve easily based on the information i want to display. Due to this nature of this project , it’s bound to changes overtime, 
therefor, I’ve taken an uncommon approach by using `latest` tags instead of fixed versions, ensuring everything stays up to date and ready for future update. 

It’s built for flexibility, making it easy to add new features or share the setup with others.  

It’s also a reflection of my passion for creating clean, efficient, and well-crafted code, while showing how the right tech stack can simplify development and create a polished result.



## 👨‍💻 About Me
I'm **Yuval Cohen**, a top software engineer  🧐 - the guy behind the website named after him.  You can explore my work on [the website](https://www.yuval-cohen.com) or check out my [GitHub repository](https://github.com/cohenyuval315) for more information.



## 💡 Want to Use This Project?
Feel free to explore the code and adapt it for your own needs
### 📋 Quick Setup:
- Purchase domain (Optional)
- Setup cloudflare (Optional)
- Setup Github Pages
- Clone this repository
- Modify the constants in `/src/app/lib/constants` 
- update content in `/app` to customize it, following Next.js best practices.
- Commit and push changes.



---

### ☕️ Enjoy exploring the site, and feel free to reach out! 😊 📱

