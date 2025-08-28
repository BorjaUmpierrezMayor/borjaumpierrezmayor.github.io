# D&D 5.5 Mob Calculator

A simple web-based tool to calculate expected hits for groups of creatures in D&D 5.5 (DnD One). Designed for Game Masters to quickly estimate outcomes in combat encounters with multiple identical creatures.

## Features

- Set group size (minimum 4 creatures).
- Enter the creature's bonus (attack or check bonus).
- Enter the target's DC (Armor Class or Difficulty Class).
- Choose roll mode: normal, advantage, or disadvantage.
- Calculates the expected number of successful hits.

## Demo

You can host this using [GitHub Pages](https://pages.github.com/) or any static web server.  
Or you can see it live on my page: [https://borjaumpierrezmayor.github.io](https://borjaumpierrezmayor.github.io)

## Usage

1. Open `index.html` in a browser or visit the live demo.
2. Enter the desired group quantity (minimum 4).
3. Enter the creatures' bonus and the target's DC.
4. Select the roll mode.
5. Click **Calculate Hits** to see the expected number of hits.

## Files

- `index.html` – main HTML page.
- `css/style.css` – styles for the calculator.
- `js/script.js` – JavaScript logic for calculations and validation.

## Notes

- Inputs are validated to prevent values below the minimum (4 for group quantity, 0 for bonuses and DC).
- Uses Bootstrap 5 for styling and responsive layout.
- Form validation is built-in; negative numbers cannot be submitted.

## License

MIT License
