# cmd2025

## Overview

This is a Jekyll-based portfolio and blog website for Chad Matthew Danford, showcasing work in web development, design, photography, and related creative projects. The site features a collection of blog posts, project showcases, and personal updates spanning from 2019 to 2025.

### Key Features
- **Blog Posts**: A series of articles and project write-ups stored in `_posts/`, covering topics like web development, branding, video production, and travel photography.
- **Portfolio Sections**: Organized by categories including web, design, CSS, HTML, JavaScript, and photography.
- **Custom Layouts**: Tailored page layouts in `_layouts/` for different content types (posts, galleries, contact, etc.).
- **Includes**: Reusable components in `_includes/` for headers, footers, skills, and more.
- **Assets**: Images, stylesheets, and JavaScript files organized in `assets/`.
- **Tags and Categories**: Automatic generation of tag and category pages.
- **Contact and About Pages**: Static pages for personal information and contact details.

### Site Structure
- `_config.yml`: Jekyll configuration with site metadata, theme settings, and build options.
- `_posts/`: Markdown files for blog posts, named with date prefixes.
- `_layouts/`: HTML templates for different page types.
- `_includes/`: Partial templates for reusable elements.
- `_data/`: Data files like menu configuration.
- `assets/`: Static files (images, CSS, JS).
- `downloads/`: Additional downloadable resources.
- `tags/`: Generated tag pages.
- `_site/`: Built site output (auto-generated, should be ignored in version control).

The site uses the Minima theme with custom modifications and the Jekyll Feed plugin for RSS generation.

## Setup Instructions

To run this site locally on a new Jekyll installation:

### Prerequisites
- Ruby (version 2.5.0 or higher recommended)
- Bundler gem (`gem install bundler`)
- Jekyll (will be installed via Gemfile)

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cmd2025
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```
   This will install Jekyll 4.4.1, the Minima theme, and the Jekyll Feed plugin as specified in the Gemfile.

3. **Serve the site locally**:
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000`.

4. **Build for production** (optional):
   ```bash
   bundle exec jekyll build
   ```
   This generates the static site in the `_site/` directory.

### Additional Notes
- The `_site/` directory contains the built site and should not be committed to version control (it's already in `.gitignore`).
- If you make changes to `_config.yml`, restart the Jekyll server for them to take effect.
- For deployment, the site can be hosted on GitHub Pages or any static hosting service by uploading the contents of `_site/`.

### Customization
- Edit site settings in `_config.yml`.
- Add new posts in `_posts/` following the naming convention `YYYY-MM-DD-title.md`.
- Modify layouts and includes in their respective directories.
- Update assets in `assets/` for images, styles, and scripts.
