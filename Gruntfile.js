'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compileScripts: {
        expand: true,
        flatten: false,
        cwd: 'scripts',
        src: '**/*.coffee',
        dest: '.tmp/scripts/',
        ext: '.js'
      },
      compileSpecs: {
        expand: true,
        flatten: false,
        cwd: 'spec',
        src: '**/*.coffee',
        dest: '.tmp/spec/',
        ext: '.js'
      }
    },
    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: ['namespace.js', '.tmp/scripts/form.js', '.tmp/scripts/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });

  grunt.registerTask('default', ['coffee', 'concat', 'uglify']);

}
