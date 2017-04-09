const config = {
  nunjucks: {
    src: 'src/partials/*.html',
    dest: 'dest',
    path: ['src'],
  },
  style: {
    src: [
      'src/vendor/css/*.css',
      'src/assets/style/index.styl'
    ],
    dest: 'dest/css',
  },
  image: {
    src: 'src/assets/images/**/*.*',
    dest: 'dest/images',
  },
  javascript: {
    src: [
      'src/vendor/js/*.js',
      'src/assets/js/**/*.js'
    ],
    dest: 'dest/js',
    file: 'bundle.js',
  },
  fonts: {
    src: 'src/assets/fonts/**/*.*',
    dest: 'dest/fonts',
  },
  watch: {
    html: 'src/**/*.html',
    style: 'src/assets/style/**/*.styl',
    img: 'src/assets/images/**/*.*',
    javascript: 'src/assets/js/**/*.js',
    fonts: 'src/assets/fonts/**/*.*',
  },
  clean: {
    path: './dest',
  },
  webserver: {
    server: 'dest',
    port: 9000,
    open: false,
  },
};

module.exports = config;
