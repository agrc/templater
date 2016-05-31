module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var bumpFiles = ['src/app/App.js', 'package.json'];

    grunt.initConfig({
        bump: {
            options: {
                files: bumpFiles,
                commitFiles: bumpFiles.concat('src/ChangeLog.html'),
                push: false
            }
        },
        clean: {
            main: { src: 'dist/' }
        },
        connect: {
            uses_defaults: {}
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
        jasmine: {
            main: {
                options: {
                    specs: ['src/app/**/Spec*.js'],
                    vendor: [
                        'src/jasmine-favicon-reporter/vendor/favico.js',
                        'src/jasmine-favicon-reporter/jasmine-favicon-reporter.js',
                        'src/jasmine-jsreporter/jasmine-jsreporter.js',
                        'src/app/tests/jasmineTestBootstrap.js',
                        'src/dojo/dojo.js',
                        'src/app/packages.js',
                        'src/app/tests/jsReporterSanitizer.js',
                        'src/app/tests/jasmineAMDErrorChecking.js'
                    ],
                    host: 'http://localhost:8000'
                }
            }
        },
        processhtml: {
            options: {},
            main: {
                files: {
                    'dist/index.html': ['src/index.html'],
                    'dist/ChangeLog.html': ['src/ChangeLog.html']
                }
            }
        },
        watch: {
            main: {
                files: ['src/app/**/*.*'],
                options: { livereload: true },
                tasks: ['jasmine:main:build']
            }
        }
    });

    grunt.registerTask('default', ['connect', 'jasmine:main:build', 'watch']);
    grunt.registerTask('build', ['clean', 'dojo', 'processhtml']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
};
