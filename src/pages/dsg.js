import React from 'react';
import { graphql } from 'gatsby';

const DSGPage = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default DSGPage;

export const query = graphql`
  query DSGPageQuery {
    countries {
      name
    }
  }
`;

export async function config() {
  return ({ params }) => {
    return {
      defer: true,
    }
  }
}
