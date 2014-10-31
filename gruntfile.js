
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
        imagesDir:"_/img/build",
        javascriptsDir:"_/js",
        fontsDir:"_/fonts",
        outputStyle:"expanded",
        noLineComments:false,
        relativeAssets:true,
        raw: "preferred_syntax = :sass\n"
      }
    }, 
    prod: {
      options: {
        httpPath:"/",
        sassDir:"_/scss",
        cssDir:"_/css",
        outputStyle:"compressed",
        noLineComments:true,
        relativeAssets:true,
        raw: "preferred_syntax = :sass\n"
      }
    }    
  },
  imagemin: {
      png: {
          options: {
              optimizationLevel: 7
          },
          files: [
              {
                  expand: true,
                  cwd: '_/img/src/',
                  src: ['**/*.png'],
                  dest: '_/img/dist/',
                  ext: '.png'
              }
          ]
      },
      jpg: {
          options: {
              progressive: true
          },
          files: [
              {
                  expand: true,
                  cwd: '_/img/src/',
                  src: ['**/*.jpg'],
                  dest: '_/img/dist/',
                  ext: '.jpg'
              }
          ]
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
      images: {
        files: ['_/img/src/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },
  }
});
 
// Load plugins here
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');

 
// Default task(s).
grunt.registerTask('default', ['compass:dev', 'imagemin', 'watch']);
grunt.registerTask('prod', ['compass:prod']);
 
};