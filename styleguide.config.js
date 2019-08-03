// styleguide.config.js

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          // description: 'The description for the installation section'
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com'
        }
      ]
    },
    {
      name: 'Token Editor',
      content: 'docs/introduction.md',
      components: 'src/components/TokenEditor/*.js',
      ignore: 'src/components/TokenEditor/*.style.js'
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/*.js',
      ignore: [ 'src/components/TokenEditor/*.js', 'src/components/index.js', 'src/components/**/*.style.js' ],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
}