module.exports = function(grunt) {
	var timestamp = grunt.template.today("yyyymmdd'T'HHMMss'Z'L");
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cacheBust: {
			taskName: {
				options: {
					baseDir: './src',
					assets: ['**'],
					hash: timestamp,
					jsonOutput:true ,
					queryString: true,
					createCopies: false,									
					outputDir: 'target'   
				},
				files: [{   
					expand: true,
					cwd: 'src/',
					src: ['**/*.html','**/*.js','**/*.css']
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-cache-bust');
	grunt.registerTask('default', ['cacheBust']);

};