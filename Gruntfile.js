'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
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
  });
}
