module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/test2-shop/' : '/',
  devServer: {
    proxy: 'http://localhost:3000',
  },
};
