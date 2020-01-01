/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-basic-scroll/,
            use: loaders.null(),
          },
          {
            test: /basicscroll/,
            use: loaders.null(),
          },
          {
            test: /DrawSVGPlugin/,
            use: loaders.null(),
          },
          {
            test: /vendor\/gsap/,
            use: loaders.null(),
          },
          {
            test: /gsap/,
            use: loaders.null(),
          },
          {
            test: /anime/,
            use: loaders.null(),
          },
          {
            test: /scripts\/ooh-icon-system/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}