export const DEV_ENDPOINT = `http://localhost:4000`;
export const PROD_ENDPOINT = `https://sickfits-yoga-prod.herokuapp.com/`;
export const CLOUDINARY_ENDPOINT = {
  base: 'https://api.cloudinary.com/v1_1',
  account: 'samrithshankar',
  url() {
    return `${this.base}/${this.account}`;
  },
  upload() {
    const url = this.url();
    return `${url}/image/upload`;
  }
};
