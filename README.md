# 🐿️ Squirrel Schedule

A simple, animated web app featuring a pixel art squirrel that follows a daily schedule based on the time of day.

## 🌟 Features

- **Enhanced Pixel Art Squirrel**: Detailed retro pixel art character with 8x15 grid, multiple color shades, and distinct features (fluffy tail, ears, eyes, snout, paws)
- **Rich Animations**:
  - **Tail Wagging**: Dynamic tail movement independent of body
  - **Eye Blinking**: Realistic blinking animation
  - **Cheek Puffing**: Eating motion with cheek expansion
  - **Jumping Around**: Squirrel moves to different positions across the scene
  - **Running Motion**: Subtle in-place running animation
- **Time-Based Behavior**: 
  - **Daytime (6 AM - 8 PM)**: Squirrel plays and gathers acorns with multiple simultaneous animations
  - **Nighttime (8 PM - 6 AM)**: Squirrel sleeps peacefully with gentle breathing animation and floating "Z" letters
- **Dynamic Scene**: Sky and lighting changes automatically based on time of day
- **Live Clock**: Real-time display of current day and time
- **Responsive Design**: Works on desktop and mobile devices
- **Pure HTML/CSS/JS**: No dependencies, runs entirely in the browser

## 🎮 Live Demo

Visit the live app: [https://nubianlachlan.github.io/animal-schedule/](https://nubianlachlan.github.io/animal-schedule/)

## 📸 Screenshots

### Daytime Mode
![Daytime](https://github.com/user-attachments/assets/f4a64071-0612-44c0-a0b2-6951207952c0)

### Nighttime Mode
![Nighttime](https://github.com/user-attachments/assets/fc5617f8-8615-46d3-ab43-b63f8ff92b98)

## 🚀 Usage

Simply open `index.html` in any modern web browser, or serve it using a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

Then navigate to `http://localhost:8080` in your browser.

## 🛠️ Technical Details

- **HTML5**: Semantic structure with enhanced 8x15 pixel art grid layout
- **CSS3**: Multiple layered animations using keyframes:
  - Position-based: jump-around, run-in-place
  - Component-based: tail-wag, blink, cheek-puff
  - Scene: breathe, float-up
- **Vanilla JavaScript**: Time detection and DOM manipulation
- **No build process**: Ready to deploy to GitHub Pages or any static host

## 📅 Schedule

The squirrel follows this daily schedule:

| Time | Activity | Animation |
|------|----------|-----------|
| 6:00 AM - 8:00 PM | Playing & gathering acorns | Jumping around, tail wagging, eye blinking, cheek puffing, running motion |
| 8:00 PM - 6:00 AM | Sleeping | Gentle breathing with floating Z's |

## 🎨 Customization

You can easily customize the squirrel's schedule by editing `script.js`:

```javascript
// Change the day/night threshold (currently 6 AM - 8 PM)
const isDay = hours >= 6 && hours < 20;
```

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests to add more activities or improve the animations!