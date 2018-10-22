import React, { Component } from 'react';
import Router from 'next/router';

import { CREATE_ITEM_MUTATION } from '../../gql/mutations/items.mutations';

import { CLOUDINARY_ENDPOINT } from '../../lib/config';

import withMutation from '../../utils/graphql-util/withMutation';

import Form from '../../styles/form.styles';

class CreateItem extends Component {
  state = {
    title: 'some title 1337',
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
    Router.push({
      pathname: '/item',
      query: {
        id: res.data.createItem.id
      }
    });
  };

  handleImageUpload = async e => {
    const {
      target: { files }
    } = e;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sick-fits');

    const res = await fetch(CLOUDINARY_ENDPOINT.upload(), {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    console.log('file', file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    const { loading } = this.props.payload || {};
    const { title, price, description } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="file">
            Image
            <input
              type="file"
              id="file"
              name="file"
              placeholder="file"
              onChange={this.handleImageUpload}
            />
          </label>

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
