import React, { Component } from 'react';

import { CREATE_ITEM_MUTATION } from '../../gql/mutations/items.mutations';

import withMutation from '../../utils/graphql-util/withMutation';

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
  };

  render() {
    const { loading } = this.props.payload || {};
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

export default withMutation(CREATE_ITEM_MUTATION)(CreateItem);
