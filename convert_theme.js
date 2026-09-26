const fs = require('fs');

const config = {
  "colors": {
    "background": "#fff9ef",
    "on-secondary-fixed-variant": "#703705",
    "on-secondary-container": "#783d0c",
    "on-error": "#ffffff",
    "surface-card": "#FFFFFF",
    "tertiary": "#1c140f",
    "secondary-container": "#ffab71",
    "soft-beige": "#E8DDCF",
    "error": "#ba1a1a",
    "inverse-primary": "#e5bfab",
    "on-primary-container": "#ac8978",
    "primary-fixed": "#ffdbca",
    "inverse-surface": "#32302a",
    "inverse-on-surface": "#f6f0e7",
    "on-surface-variant": "#50443f",
    "surface-container-highest": "#e7e2d9",
    "primary-fixed-dim": "#e5bfab",
    "surface-variant": "#e7e2d9",
    "on-secondary-fixed": "#311300",
    "on-background": "#1d1b16",
    "surface-container-high": "#ede7de",
    "on-tertiary-fixed-variant": "#50453e",
    "on-primary-fixed": "#2b160a",
    "surface-container-low": "#f9f3ea",
    "on-tertiary": "#ffffff",
    "outline": "#82746e",
    "surface-dim": "#dfd9d1",
    "surface-tint": "#765848",
    "on-secondary": "#ffffff",
    "primary": "#231005",
    "primary-container": "#3b2417",
    "on-error-container": "#93000a",
    "on-surface": "#1d1b16",
    "surface-bright": "#fff9ef",
    "secondary-fixed-dim": "#ffb786",
    "surface": "#fff9ef",
    "tertiary-container": "#312822",
    "tertiary-fixed-dim": "#d4c3bb",
    "on-tertiary-container": "#9c8e86",
    "secondary": "#8e4e1d",
    "outline-variant": "#d3c3bc",
    "surface-container": "#f3ede4",
    "tertiary-fixed": "#f0dfd6",
    "surface-container-lowest": "#ffffff",
    "on-primary-fixed-variant": "#5c4132",
    "on-primary": "#ffffff",
    "gray-text": "#6B625B",
    "secondary-fixed": "#ffdcc6",
    "error-container": "#ffdad6",
    "on-tertiary-fixed": "#221a15"
  },
  "borderRadius": {
    "DEFAULT": "1rem",
    "lg": "2rem",
    "xl": "3rem",
    "full": "9999px"
  },
  "spacing": {
    "space-lg": "1.5rem",
    "space-3xl": "7.5rem",
    "space-md": "1rem",
    "space-sm": "0.5rem",
    "gutter-mobile": "1rem",
    "space-2xl": "4rem",
    "space-xs": "0.25rem",
    "margin-mobile": "1.5rem",
    "space-xl": "2.5rem",
    "margin": "3rem",
    "gutter": "1.5rem"
  },
  "fontFamily": {
    "body-xl": ["Inter"],
    "display-mobile": ["Playfair Display"],
    "label-md": ["Inter"],
    "body-md": ["Inter"],
    "body-lg": ["Inter"],
    "headline-lg-mobile": ["Playfair Display"],
    "label-sm": ["Inter"],
    "headline-xl-mobile": ["Playfair Display"],
    "headline-xl": ["Playfair Display"],
    "display": ["Playfair Display"],
    "headline-md": ["Playfair Display"],
    "headline-sm": ["Playfair Display"],
    "headline-lg": ["Playfair Display"],
    "body-sm": ["Inter"]
  },
  "fontSize": {
    "body-xl": ["20px", { "lineHeight": "32px", "fontWeight": "300" }],
    "display-mobile": ["44px", { "lineHeight": "52px", "letterSpacing": "-0.01em", "fontWeight": "400" }],
    "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.08em", "fontWeight": "500" }],
    "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }],
    "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
    "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "400" }],
    "label-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0.12em", "fontWeight": "600" }],
    "headline-xl-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "400" }],
    "headline-xl": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.015em", "fontWeight": "400" }],
    "display": ["72px", { "lineHeight": "80px", "letterSpacing": "-0.02em", "fontWeight": "400" }],
    "headline-md": ["28px", { "lineHeight": "36px", "fontWeight": "500" }],
    "headline-sm": ["22px", { "lineHeight": "30px", "fontWeight": "500" }],
    "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "400" }],
    "body-sm": ["14px", { "lineHeight": "22px", "fontWeight": "400" }]
  }
};

let output = '@import "tailwindcss";\n\n@theme {\n';

for (const [key, value] of Object.entries(config.colors)) {
  output += `  --color-${key}: ${value};\n`;
}

output += '\n';
for (const [key, value] of Object.entries(config.spacing)) {
  output += `  --spacing-${key}: ${value};\n`;
}

output += '\n';
for (const [key, value] of Object.entries(config.borderRadius)) {
  output += `  --radius-${key === 'DEFAULT' ? 'DEFAULT' : key}: ${value};\n`;
}

output += '\n  --font-inter: "Inter", sans-serif;\n  --font-playfair: "Playfair Display", serif;\n\n';

for (const [key, value] of Object.entries(config.fontFamily)) {
  let fontVar = value[0] === 'Inter' ? 'var(--font-inter)' : 'var(--font-playfair)';
  output += `  --font-${key}: ${fontVar};\n`;
}

output += '\n';
for (const [key, value] of Object.entries(config.fontSize)) {
  output += `  --text-${key}: ${value[0]};\n`;
  if (value[1].lineHeight) output += `  --text-${key}--line-height: ${value[1].lineHeight};\n`;
  if (value[1].letterSpacing) output += `  --text-${key}--letter-spacing: ${value[1].letterSpacing};\n`;
  if (value[1].fontWeight) output += `  --text-${key}--font-weight: ${value[1].fontWeight};\n`;
}

output += '}\n\n@layer base {\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n    font-family: var(--font-body-md);\n  }\n}\n';

fs.writeFileSync('src/app/globals.css', output);
console.log('Done writing globals.css');
