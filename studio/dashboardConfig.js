export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf40796b7c15ef0a199b862',
                  title: 'Sanity Studio',
                  name: 'sailing-hello-world-studio',
                  apiId: 'efa6c8ac-25af-420e-8b05-44353d52737c'
                },
                {
                  buildHookId: '5cf407966a1e0dca026be2e6',
                  title: 'Blog Website',
                  name: 'sailing-hello-world',
                  apiId: '87262fd9-190a-4074-9c96-a036b5208df3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hawkaa/sailing-hello-world',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sailing-hello-world.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
