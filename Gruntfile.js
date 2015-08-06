module.exports = function(grunt) {
    grunt.initConfig({
    	jshint: {
    		src: 'src/fDatepicker-Json.js'
    	},

    	copy: {
    		main: {
    			src: 'src/fDatepicker-Json.js',
    			dest: 'dist/fDatepicker-Json.js'
    		}
    	},

    	uglify: {
    		file: {
    			src: 'src/fDatepicker-Json.js',
    			dest: 'dist/fDatepicker-Json.min.js'
    		}
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('js', ['copy', 'uglify']);
    grunt.registerTask('default', ['js']);
}
