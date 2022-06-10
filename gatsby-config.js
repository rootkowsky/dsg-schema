const { NamespaceUnderFieldTransform } = require('gatsby-source-graphql/transforms');
const { wrapSchema }  = require('@graphql-tools/wrap');
const { linkToExecutor }  = require('@graphql-tools/links');


module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'DSGCountries',
        fieldName: 'dsgcountries',
        url: 'https://countries.trevorblades.com/',
        transformSchema: (args) => {
          const {
            schema,
            link,
            resolver,
            defaultTransforms,
            options
          } = args;

          /**
           * Filter out `NamespaceUnderFieldTransform` which wraps schema to the custom field
           */
          const customTransforms = defaultTransforms.filter((transform) => {
            return transform.constructor !== NamespaceUnderFieldTransform
          });

          return wrapSchema({
            schema: schema,
            executor: linkToExecutor(link),
            transforms: customTransforms,
          });
        }
      }
    },
  ],
}
