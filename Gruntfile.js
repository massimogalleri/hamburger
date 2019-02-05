module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            hamburger: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'hamburger.css': 'scss/hamburger.scss',
                }
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:hamburger'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','watch']);

};