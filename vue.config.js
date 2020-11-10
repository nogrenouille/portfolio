module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "nogrenouille : Illustrations, musique & diableries.";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
