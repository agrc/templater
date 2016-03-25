module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            main: { src: 'dist/' }
        },
        dojo: {
            main: {
                options: {
                    profiles: ['profiles/build.profile.js'],
                    dojo: 'src/dojo/dojo.js',
                    load: 'build',
                    releaseDir: '../dist',
                    requires: ['src/app/packages.js', 'src/app/run.js'],
                    basePath: './src'
                }
            }
        },
        'gh-pages': {
            options: {
                base: 'dist'
            },
            src: ['**', '.nojekyll']
        },
        processhtml: {
            options: {},
            main: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        }
    });

    grunt.registerTask('build', ['clean', 'dojo', 'processhtml']);
    grunt.registerTask('default', ['build', 'gh-pages']);
};
