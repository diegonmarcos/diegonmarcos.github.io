# Operations Specification - SlabTwin 3D Warehouse

## Build Process
The project uses a simple copy-based build with vanilla JavaScript and embedded Tailwind CSS.

### Development
```bash
npm run serve
```
Starts HTTP server on port 8020, serving from `src/` directory.

### Build Steps
1. Copy all HTML, CSS, JS files from `src/` to `dist/`
2. Maintain directory structure
3. No minification or bundling required

## Deployment
Files are served as static HTML with CDN-loaded libraries:
- Tailwind CSS via CDN
- Babylon.js via CDN

## Environment Variables
None required for basic operation.

## Browser Requirements
- Modern ES6+ support
- WebGL 2.0 for 3D rendering
- CSS Grid and Flexbox support
- LocalStorage for browser persistence

## Performance Targets
- Initial load: <3 seconds
- FPS: 60 on desktop, 30+ on mobile
- Memory: <150MB for full scene

## CI/CD Integration
- No build compilation needed
- Direct file serving to static host
- Deploy entire `dist/` folder to production

## Troubleshooting

### Low FPS
- Check WebGL status in browser console
- Disable shadow mapping if needed
- Reduce viewport resolution

### 3D Not Rendering
- Verify WebGL is enabled
- Check browser console for Babylon.js errors
- Confirm CDN links are accessible

### Data Loading Issues
- Clear browser cache
- Check network tab for failed requests
- Verify JSON database generation completes
