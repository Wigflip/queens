module.exports = function(grunt){

	//1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			//2. Configuration for concatinating files goes here.
			dist:{
				src: [
				'js/custom.js',
				'js/jquery.fancybox.pack.js'
				],
				dest: 'js/global.js'
			}
		},

		uglify: {
   			 build: {
        		src: 'js/global.js',
        		dest: 'js/global.min.js'
    		}
		},

		sass: {
		    dev: {
		        options: {
		            style: 'nested'
		        },
		        files: {
		            'css/style.css': 'css/style.scss'
		        }
		    },
		    prod:{
		    	options:{
		    		style: 'compressed'
		    	},
		    	files: {
		    		'css/style.min.css': 'css/style.scss'
		    	}
		    } 
    	},

    	watch: {
    		options: {
        		livereload: true,
    		},
		    css: {
		        files: ['css/*.scss'],
		        tasks: ['sass'],
		        options: {
		            spawn: false
		        },
		    },
		        
		    js:{
		    	files: ['js/*.js'],
		    	tasks: ['uglify'],
		    	options:{
		    		spawn: false
		    	}
		    }     
		} 
	});

	//3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass','watch']);
	grunt.registerTask('final', ['concat', 'uglify','sass']);

}