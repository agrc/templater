module.exports = function (grunt) {
    grunt.initConfig({
        'gh-pages': {
            options: {
                base: 'src'
            },
            src: ['**', '.nojekyll']
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');
};
