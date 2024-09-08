/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vital_signs/templates/vital_signs/*.html', // Adjust path based on your templates location
    './vital_signs/static/*.js', // Adjust path based on where your JavaScript files are located
  ],
  theme: {
    extend: {
      // Add your custom extensions here
      animation: {
        // Example: custom animation classes
        beat: 'beat 1s ease-out infinite',
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' }, // Fixed 'tranform' to 'transform'
        },
      },
    },
  },
  plugins: [],
}
