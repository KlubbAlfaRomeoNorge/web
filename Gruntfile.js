// Module docs:
//  https://www.npmjs.com/package/grunt-markdown
//  https://www.npmjs.com/package/grunt-jinja
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		markdown: {
			all: {
				files: [
					{
						expand: true,
						src: 'docs/markdown/*.md',
						dest: 'docs/html/',
						ext: '.html'						
					}
				]/*,
				options: {
					template: 'karn-template.jst'					
				}*/
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-jinja');
	grunt.registerTask('default', ['markdown']);
	
};
