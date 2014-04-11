module.exports = (grunt) ->
    grunt.task.loadNpmTasks 'grunt-contrib-connect',
    grunt.task.loadNpmTasks 'grunt-contrib-watch',
    grunt.task.loadNpmTasks 'grunt-open',

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        connect:
            build:
                options:
                    hostname:''
                    port: 8002
                    base: ''
        watch:
            css: 
                files: 'css/**/*.css'
                tasks: []
                options: 
                    livereload: true
            js: 
                files: 'js/**/*.js'
                tasks: []
                options: 
                    livereload: true
            once: 
                files: 'index.html'
                tasks: []
                options: 
                    livereload: true
        open:
            build:
                path: 'http://localhost:8002'

    ### primary task ###

    grunt.registerTask 'default', ['connect:build', 'open:build', 'watch']

