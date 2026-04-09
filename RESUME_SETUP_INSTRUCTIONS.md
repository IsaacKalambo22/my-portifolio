# Resume Download Setup Instructions

## File Placement Completed
Your resume file structure is now correctly set up:

```
public/
  Isaac_Kalambo_CV.pdf  # <-- Your resume file should be placed here
```

## Next Steps

### 1. Replace the Placeholder
- Delete the current `Isaac_Kalambo_CV.pdf` file (it's just a placeholder)
- Copy your actual resume PDF to `/public/Isaac_Kalambo_CV.pdf`
- Make sure the filename matches exactly: `Isaac_Kalambo_CV.pdf`

### 2. Verify the Download Functionality
After placing your actual PDF file:
1. Run your development server: `pnpm dev`
2. Navigate to the About section
3. Click the "Download Resume" button
4. Verify it downloads as "Isaac_Kalambo_Resume.pdf"

## Technical Implementation

### What We Implemented:
1. **File Location**: `/public/Isaac_Kalambo_CV.pdf` (accessible at `/Isaac_Kalambo_CV.pdf`)
2. **Download Filename**: "Isaac_Kalambo_Resume.pdf" (user-friendly name)
3. **Fallback Mechanism**: Opens in new tab if download fails
4. **Accessibility**: Added aria-label for screen readers
5. **Production Ready**: Works on Vercel deployment

### Component Used:
- `ResumeDownload.tsx` - Robust download component with fallback
- Updated `About.tsx` to use the new component

### Features:
- Primary download functionality
- Fallback to open in new tab (1-second delay)
- Proper accessibility attributes
- Vercel-compatible file paths
- Clean, maintainable code

## Testing Checklist
- [ ] Replace placeholder PDF with actual resume
- [ ] Test download in development
- [ ] Test download in production (after Vercel deploy)
- [ ] Verify filename is "Isaac_Kalambo_Resume.pdf"
- [ ] Test fallback behavior (open in new tab)
- [ ] Test accessibility with screen reader

## Troubleshooting
If download doesn't work:
1. Ensure the PDF file exists in `/public/Isaac_Kalambo_CV.pdf`
2. Check file permissions (should be readable)
3. Verify file size (placeholder is only 268 bytes)
4. Test the direct URL: `http://localhost:3000/Isaac_Kalambo_CV.pdf`

## Deployment Notes
- The `/public` folder contents are served statically by Next.js
- Vercel will automatically serve the PDF file
- No additional configuration needed
- File will be accessible at the root URL in production
