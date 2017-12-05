ignore({ path: 'node_modules' })

group('test', () => {
  guard('mocha', { cwd: __dirname }, () => {
    watch('./**/*.spec.js')
  })
})
