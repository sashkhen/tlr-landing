const config = {
  nunjucks: {
    src: 'src/pages/*.html',
    dest: 'dest',
    path: ['src'],
  },
  style: {
    src: 'src/style/main.less',
    dest: 'dest/css',
  },
  image: {
    src: 'src/img/**/*.*',
    dest: 'dest/img',
  },
  javascript: {
    src: ['src/js/vendors/*.js', 'src/js/**/*.js'],
    dest: 'dest/js',
    file: 'bundle.js',
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dest: 'dest/fonts',
  },
  watch: {
    html: 'src/**/*.html',
    style: 'src/style/**/*.less',
    img: 'src/img/**/*.*',
    javascript: 'src/js/**/*.js',
    fonts: 'src/fonts/**/*.*',
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
