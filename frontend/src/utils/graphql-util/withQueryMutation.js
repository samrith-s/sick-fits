/*
  Author: Samrith Shankar

  TODO: Add description
*/

import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

export default (query, mutation) => InputComponent =>
  class extends Component {
    static displayName = `withQueryMutation(${InputComponent.name})`;

    render() {
      return (
        <Mutation mutation={mutation}>
          {(mutate, mutationPayload) => (
            <Query query={query}>
              {queryPayload => (
                <InputComponent
                  payload={{
                    query: queryPayload,
                    mutation: mutationPayload
                  }}
                  mutate={mutate}
                />
              )}
            </Query>
          )}
        </Mutation>
      );
    }
  };
