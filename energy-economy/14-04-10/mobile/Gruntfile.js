module.exports = function(grunt) {
  grunt.task.loadNpmTasks('grunt-contrib-concat');
  grunt.task.loadNpmTasks('grunt-contrib-cssmin');
  grunt.task.loadNpmTasks('grunt-contrib-uglify');
  grunt.task.loadNpmTasks('grunt-contrib-compass');
  grunt.task.loadNpmTasks('grunt-contrib-connect');
  grunt.task.loadNpmTasks('grunt-contrib-watch');
  grunt.task.loadNpmTasks('grunt-open');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      combine: {
        src: ['css/qzintelslideshow.css', 'css/style.css'],
        dest: 'css/manifest.css'
      }
    },
    cssmin: {
      minify: {
        src: 'css/manifest.css',
        dest: 'css/manifest.min.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/manifest.min.js': ['js/app.js']
        }
      }
    },
    compass: {
      build: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          outputStyle: 'compact',
          force: true,
          noLineComments: true
        }
      }
    },
    connect: {
      build: {
        options: {
          hostname: '',
          port: 8002,
          base: ''
        }
      }
    },
    watch: {
      scss: {
        files: 'scss/**/*.scss',
        tasks: ['compass:build'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/**/*.js',
        tasks: [],
        options: {
          livereload: true
        }
      },
      once: {
        files: 'index.html',
        tasks: [],
        options: {
          livereload: true
        }
      }
    },
    open: {
      build: {
        path: 'http://localhost:8002'
      }
    }
  });

  grunt.registerTask('default', ['concat:combine', 'cssmin:minify', 'uglify']);
  return grunt.registerTask('dev', ['compass:build', 'connect:build', 'open:build', 'watch']);
};
