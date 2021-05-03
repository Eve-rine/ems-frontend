/* options */

const mode = 'spa'; // universal/spa
const serveFromSubFolder = false;

/* options end */

const pkg = require('./package');
const path = require('path');

let dist = '';
if(mode === 'universal') {
	dist = 'scutum-universal'
} else {
	dist = 'scutum-spa'
}

module.exports = {
	ssr: mode === 'universal',
	target: 'static',

	layoutTransition: {
		name: 'default',
		mode: 'in-out'
	  },
	/*
	** Headers of the page
	*/
	head: {
		htmlAttrs: { lang: 'en'	},
		title: 'DukaPal',
		meta: [	{ charset: 'utf-8' },
			{name: 'viewport',	content: 'width=device-width, initial-scale=1'	},
			{hid: 'description', name: 'description', content: pkg.description	}
		],
		script: [
			{ src: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist ) + '/vendor/uikit.min.js'}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' :  '/' + dist ) + '/favicon.ico'},
			{ rel: 'preload', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/vendor/uikit.min.js', as: 'script' },
			{ rel: 'preload', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/roboto_base64.css', as: 'style' },
			{ rel: 'preload', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/sourceCodePro_base64.css', as: 'style' },
			{ rel: 'preload', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/mdi/css/materialdesignicons.css', as: 'style' },
			/// fonts
			{ rel: 'stylesheet', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/roboto_base64.css' },
			{ rel: 'stylesheet', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/sourceCodePro_base64.css' },
			{ rel: 'stylesheet', href: (process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '' : '/' + dist) + '/fonts/mdi/css/materialdesignicons.css' }
		]
	},
	/*
	** Customize the progress-bar
	*/
	loading: { color: 'rgba(0,0,0,.8)' },
	/*
	** Customize the loading-indicator
	** only in spa mode
	*/
	loadingIndicator: { color: '#00838f', background: 'white' },
	/*
	** Global CSS
	*/
	css: [ 'uikit/dist/css/uikit.css' ,
	'~assets/main.css'
],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~/plugins/mixins/validation.js' },
		//{ src: '~/plugins/mixins/user.js'},
		{ src: '~/plugins/axios.js' },
		{ src: '~/plugins/components.global.js' },
		{ src: '~/plugins/mixins/userInterface.js' },
		{src: '~/plugins/mixins/toast.js'}
	],
	  auth: {
		cookie: {
			prefix: 'CIamAuth'
		},
		//localStorage: false //activate this to disable local storage
		localStorage: {
			prefix: 'LIamAuth.'
		  },
		strategies: {
		   	local: {
				token: {
					property: 'data.token',
					required: true,
					type: 'Bearer'
				},
				user: {
					property: 'data',
					required: true,
				},
				endpoints: {
			  		login: { url: '/login', method: 'post'},
					user: { url: '/me', method: 'get', propertyName: false  },
					logout: false,
				},
				autoFetchUser: false,
		  },
		},
		redirect: {
			login: '/auth/login',
			home: '/',
			callback: '/auth/login',
			logout: '/auth/login'
		  },
		preserveState: true,
    	watchLoggedIn: true,
		fullPathRedirect: true
	  },
	router: {
		middleware: [
			'redirect',
			'auth',
			'clearValidationErrors',
			// 'clearToastMessages'
		],
		base: process.env.NODE_ENV !== 'production' || !serveFromSubFolder ? '/' : '/' + dist
	},
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'@nuxtjs/pwa',
		'@nuxtjs/proxy',
	],
	axios: {
		proxy: true,
		prefix: "/api/v1/",
		credentials: true,
	},
	proxy: {
		'/api/v1': {
			target: "http://leave.co.ke",
			pathRewrite: {
				'^/api/v1' : "/api/v1"
			},
			changeOrigin: true,
		},
	},
	server: {     
		port: 3000, // default: 3000     
		host: '0.0.0.0', // default: localhost   
	  }, 
	/*
	** Build configuration
	*/
	build: {
		// analyze: true,
		progress: true,
		babel: {
			plugins: [
				"@babel/plugin-syntax-dynamic-import",
				"@babel/plugin-transform-spread"
			],
			ignore: [
				"node_modules",
				"assets/js/vendor"
			]
		},
		extend (config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push(
					// Run ESLint on save
					{
						enforce: 'pre',
						test: /\.(js|vue)$/,
						loader: 'eslint-loader',
						exclude: /(node_modules)/,
						options:{
							fix: true
						}
					}
				);
			}
			// aliases
			config.resolve.alias['scss'] = path.resolve(__dirname, './assets/scss');
			// adjust path when serving app from sub-folder
			if (!ctx.isDev && serveFromSubFolder) {
				config.output.publicPath = '/' + dist + '/_nuxt/';
			}
			return config;
		}
	}
};
