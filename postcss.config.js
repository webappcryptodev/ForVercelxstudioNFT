
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),require('@tailwindcss/custom-forms')
  ],
};