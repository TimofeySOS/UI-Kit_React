module.exports = {
	webpack: {
	  configure: (webpackConfig, { env, paths }) => {
		const svgRuleIndex = webpackConfig.module.rules.findIndex(rule =>
		  rule.test && rule.test.toString().includes('svg')
		);
  
		if (svgRuleIndex >= 0) {
		  webpackConfig.module.rules[svgRuleIndex] = {
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		  };
		} else {
		  webpackConfig.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		  });
		}
  
		return webpackConfig;
	  },
	},
  };
  