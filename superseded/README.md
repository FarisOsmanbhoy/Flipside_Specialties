# Superseded: Door Animation Entry Screen

This folder contains the original door animation entry screen component that was used as the initial landing experience for the Flipside Specialties website.

## What This Code Does

The EntryScreen component creates an interactive entrance animation featuring:

- **Animated Sliding Doors**: Two door panels that open with a 3D rotation effect when clicked
- **Sound Effects**: A sliding door sound that plays when the doors open
- **Visual Elements**:
  - Realistic door handles on each panel
  - A decorative deadbolt with keyhole on the right door
  - Construction site background image from Pexels
  - Company name displayed in the center
- **User Interaction**: Click anywhere on the screen to trigger the door opening animation

## Technical Details

- Built with React, Framer Motion for animations, and the use-sound library
- Uses AnimatePresence for smooth entrance/exit transitions
- 3D perspective transforms for realistic door swing effect
- Background image: `https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg`
- Audio file: `sliding-door.mp3`

## Why It Was Removed

This feature was removed from the active application per user request to streamline the initial user experience and eliminate the entry animation delay.

## Files Included

- `EntryScreen.tsx` - The React component
- `sliding-door.mp3` - The audio file for door sound effects

## How to Restore

To restore this feature:

1. Copy `EntryScreen.tsx` back to `src/components/`
2. Copy `sliding-door.mp3` back to `public/`
3. In `src/App.tsx`:
   - Import the component: `import EntryScreen from './components/EntryScreen';`
   - Add state: `const [showEntryScreen, setShowEntryScreen] = useState(true);`
   - Add conditional rendering before Navbar: `{showEntryScreen && <EntryScreen onComplete={() => setShowEntryScreen(false)} />}`

## Dependencies Required

- `framer-motion` - For animation effects
- `use-sound` - For audio playback

These dependencies are still in the project's package.json and may be used by other components.

---

*Archived: October 19, 2025*
