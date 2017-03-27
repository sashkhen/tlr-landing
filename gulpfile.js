const fs = require('fs');

const jsPattern = /\.js$/;

function walk(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = `${dir}/${file}`;

    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (jsPattern.test(filePath)) {
      require(filePath);
    }
  });
}

walk('./gulp/tasks');
