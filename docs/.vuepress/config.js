module.exports = {
    title: 'Manuals TFG - Eduard Torrents',
    description: 'Entorn de seguretat per la gestió de ciutats intel·ligents',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Manual CIS', link: '/cis/'},
            {text: 'Manual SonicWall', link: '/sonicwall/'},
            {text: 'Plataforma CIS', link: 'https://softwarecis.controlcat.cat/'}
        ],
        sidebar: [
            {
                title: 'Manual CIS',   // required
                path: '/cis/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
              },
              {
                title: 'Manual SonicWall',
                path: '/sonicwall/',
                collapsable: false,
                sidebarDepth: 2,
                initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup      
                
              }
        ]
    },
};