import { initPlasmicLoader } from '@plasmicapp/loader-nextjs/react-server-conditional'

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'eS1CyonBnQCAZs3tyNsNJy',
      token: 'yXGhSujaYE4nM0kDQoKTw7FkubbmrhHeWirgzoFMXl4C05ECO7VkFNUS1ySoTbNxEky8BpNjBhxrHBf1Dw'
    }
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true
})
