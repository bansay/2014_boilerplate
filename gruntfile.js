
module.exports = function(grunt) {
 
// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 
    compass: {
        dev: {
            options: {
               /* Either use your config.rb for settings, or state them here */
               //config: 'config.rb'
               httpPath:"/",
               sassDir:"_/scss",
               cssDir:"_/css",
               imagesDir:"_/images",
               javascriptsDir:"_/js",
               fontsDir:"_/fonts",
               outputStyle:"expanded",
               noLineComments:false,
               relativeAssets:true,
               raw: "preferred_syntax = :sass\n"
            }
        }
     },
    watch: {
        styles: {
            files: ['_/scss/*.scss', 'gruntfile.js'],
            tasks: ['compass'],
            options: {
                spawn: false,
                livereload: true,
            },
        },
    }
});
 
// Load plugins here
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
 
// Default task(s).
grunt.registerTask('default', ['compass', 'watch']);
 
};