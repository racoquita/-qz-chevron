/*
 * plus template for qz ad development
 * https://bitbucket.org/quartz/plus-ad-template
 *
 * Copyright (c) 2014 Richard Stovall
 * Not licensed for public use
 */

'use strict';

module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('qzready');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
          hostname: 'localhost',
          port: 8002,
          base: '',
          open: true
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
    qzready: {
      deploy: {
        options: {
          base: 'http://ads.qz.com/sponsors',
          client: 'chevron',
          campaign: 'small-business',
          date: '2014-09-30',
          unit: 'desktop_b',
          version: '1',
          internal_scripts: [
            
          ],
          external_scripts: [
            'http://app.qz.com/js/vendor/jQuery-min.js',
            'http://app.qz.com/js/frameMessager/min/frameMessager.min.3.0.2.js',
            'http://app.qz.com/js/frameMessager/QZIX.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['compass:build', 'connect:build', 'watch']);
  grunt.registerTask('ready', ['qzready']);
};
