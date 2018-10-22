import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { CREATE_ITEM_MUTATION } from '../../gql/mutations/items.mutations';

import Form from '../../styles/form.styles';

class CreateItem extends Component {
  state = {
    title: 'some title',
    description: 'some description',
    image: 'dog1.jpg',
    largeImage: 'dogLarge1.jpg',
    price: 100
  };

  handleChange = e => {
    const {
      target: { value, name, type }
    } = e;

    this.setState({
      [name]: type === 'number' ? parseFloat(value, 10) : value
    });
  };

  handleSubmit = async e => {
    const { mutate } = this.props;
    e.preventDefault();
    const res = await mutate({
      variables: this.state
    });
    console.log('res', res);
  };

  render() {
    const { loading } = this.props.mutation || {};
    const { title, price, description } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={title}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="0.00"
              required
              value={price}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default graphql(CREATE_ITEM_MUTATION)(CreateItem);
