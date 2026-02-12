# Media Assets Guide for SSKV College Website

This guide explains how the website uses images and videos, and how to replace the stock photos with actual SSKV College media.

## Current Setup

The website currently uses:
- **Stock photos from Unsplash** - Professional college-related images as placeholders
- **Sample YouTube videos** - Educational/college tour videos as examples

## Directory Structure

```
public/
├── images/
│   ├── home/          # Homepage images
│   ├── about/         # About page images
│   ├── academics/     # Academics page images
│   ├── gallery/       # Gallery page images
│   ├── general/       # Shared/general images
│   └── contact/       # Contact page images
└── videos/            # Optional: Local video files
```

## Media Configuration

All media assets are centrally managed in `/src/data/media.js`. This file contains:

### 1. YouTube Videos

Replace these video IDs with actual SSKV College YouTube videos:

```javascript
export const videos = {
  campusLife: {
    id: 'YOUR_VIDEO_ID',  // Homepage video
    title: 'SSKV College Campus Life'
  },
  campusTour: {
    id: 'YOUR_VIDEO_ID',  // Gallery page video
    title: 'Campus Tour'
  }
};
```

**How to get YouTube video ID:**
- From URL: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
- Or: `https://youtu.be/VIDEO_ID_HERE`

### 2. Images

Images are organized by page. You can:

#### Option A: Use Local Images (Recommended)
1. Add your photos to `/public/images/` directories
2. Update `/src/data/media.js`:
   ```javascript
   home: {
     hero: '/images/home/hero.jpg',
     welcomeSection: '/images/home/welcome.jpg',
   }
   ```

#### Option B: Continue Using Unsplash
- Current setup uses Unsplash URLs
- Good for testing and development
- Replace with actual photos for production

## Image Recommendations by Page

### Home Page
- **Hero Image** (1920x1080px): Main college building exterior
- **Welcome Section** (1200x800px): Students studying or in classroom
- **Campus View** (1200x800px): Campus overview/aerial view

### About Page
- **Banner** (1920x1080px): College building facade
- **Building Interior** (1200x800px): Corridors, classrooms
- **Graduation** (1200x800px): Convocation ceremony

### Academics Page
- **Banner** (1920x1080px): Library or study area
- **Library** (1200x800px): Library interior
- **Computer Lab** (1200x800px): Students in computer lab
- **Classroom** (1200x800px): Modern classroom
- **Laboratory** (1200x800px): Science lab

### Gallery Page
**Campus Category** (4-5 images, 800x600px each):
- Main building
- College entrance
- Library
- Computer lab
- College garden

**Events Category** (4-5 images):
- Annual day celebration
- Graduation ceremony
- Cultural programs
- Seminars/workshops
- Republic/Independence day

**Students Category** (4-5 images):
- Classroom sessions
- NSS/NCC activities
- Group study
- Student activities

**Sports Category** (4-5 images):
- Sports day
- Athletic meets
- Basketball/volleyball
- Track and field

**Achievements Category** (3-4 images):
- Award ceremonies
- Competition winners
- Academic excellence awards

### Contact Page
- **Banner** (1920x1080px): College exterior or entrance

## How to Replace Images

### Method 1: Replace URLs in media.js

1. Open `/src/data/media.js`
2. Find the image you want to replace
3. Update the URL:
   ```javascript
   // Before
   hero: 'https://images.unsplash.com/photo-...',

   // After (using local file)
   hero: '/images/home/college-building.jpg',
   ```

### Method 2: Add Local Images

1. **Prepare your images:**
   - Optimize file sizes (compress for web)
   - Recommended formats: JPG for photos, PNG for graphics
   - Use descriptive filenames: `main-building.jpg`, `library-interior.jpg`

2. **Upload to public directory:**
   ```
   public/images/home/hero.jpg
   public/images/about/banner.jpg
   public/images/gallery/campus-1.jpg
   etc.
   ```

3. **Update media.js:**
   ```javascript
   export const images = {
     home: {
       hero: '/images/home/hero.jpg',
       welcomeSection: '/images/home/welcome.jpg',
     },
     // ... etc
   };
   ```

## Gallery Images

The gallery uses a special array structure. Update `/src/data/gallery.js`:

```javascript
export const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/main-building.jpg', // Your image path
    alt: 'College Main Building',              // Description
    category: 'campus'                         // Category for filtering
  },
  // Add more images...
];
```

**Categories available:**
- `campus` - Campus facilities and buildings
- `events` - Events and celebrations
- `students` - Student activities
- `sports` - Sports events
- `achievements` - Awards and achievements

## Video Guidelines

### YouTube Videos (Recommended)
1. Upload videos to SSKV College YouTube channel
2. Get the video ID from the URL
3. Update in `/src/data/media.js`

### Local Videos (Alternative)
1. Place video files in `/public/videos/`
2. Use standard formats: MP4 (H.264 codec)
3. Optimize for web (compress, reduce file size)
4. Update VideoEmbed component to use local video

## Image Optimization Tips

1. **Resolution:**
   - Hero/Banner images: 1920x1080px (Full HD)
   - Section images: 1200x800px
   - Gallery thumbnails: 800x600px

2. **File Size:**
   - Aim for under 500KB per image
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Balance quality vs. load time

3. **Format:**
   - JPG: For photographs
   - PNG: For images with transparency
   - WebP: For better compression (with JPG fallback)

4. **Accessibility:**
   - Always provide descriptive `alt` text
   - Use meaningful filenames

## Testing Changes

After updating images:

1. Start development server:
   ```bash
   npm run dev
   ```

2. Check each page:
   - Home (/)
   - About (/about)
   - Academics (/academics)
   - Gallery (/gallery)
   - Contact (/contact)

3. Verify:
   - Images load correctly
   - No broken links
   - Proper aspect ratios
   - Fast loading times

## Deployment

After replacing all placeholder images:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder will contain optimized files
3. Deploy to your web server

## Need Help?

- All media configuration: `/src/data/media.js`
- Gallery specific: `/src/data/gallery.js`
- Hero/Banner component: `/src/components/shared/Hero.jsx`
- Video component: `/src/components/sections/VideoEmbed.jsx`

## Quick Checklist

- [ ] Replace hero images on all pages
- [ ] Add SSKV College YouTube video IDs
- [ ] Upload at least 15-20 gallery images
- [ ] Add images for each category (campus, events, students, sports, achievements)
- [ ] Optimize all images for web
- [ ] Test on all pages
- [ ] Verify mobile responsiveness
- [ ] Check page load speeds
