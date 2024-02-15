<!-- ! GENERAL NOTES -->
->We can create index.js in assets and export all assets from this file for better file structuring.

-> We can create constant folder where we can keep all out constant data like text.

<!-- !HOW TO INSTALL TAILWIND? -->
go to tailwind css install in vite with react you will get this command. 

npm install -D tailwindcss postcss autoprefixer

after this run following code 

npx tailwindcss init -p

it will create two files tailwind.config.js and postcss.config.js file now go to the tailwind.config.js file and make following changes.

make following changes in this file.

export default {
  content: ["./src/**/*.jsx","./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

in style.css add utility classes.

<!-- ?GROUP -->

with this we can group elements with it's parent element. It helps to apply different styles when we are using pseudo classes or hover.

