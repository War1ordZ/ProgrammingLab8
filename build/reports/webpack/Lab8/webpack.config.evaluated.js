{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/armemius/Programming/Kotlin/Lab8/build/js/packages/Lab8/kotlin/Lab8.js'
    ]
  },
  output: {
    path: '/home/armemius/Programming/Kotlin/Lab8/build/distributions',
    filename: [Function: filename],
    library: 'Lab8',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    open: true,
    contentBase: [
      '/home/armemius/Programming/Kotlin/Lab8/build/processedResources/js/main'
    ]
  }
}