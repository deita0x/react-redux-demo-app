import fs from 'fs';
import cheerio from 'cheerio';
import consola from 'consola';

fs.readFile('src/index.html', 'utf8', (error, file) => {
  if (error) {
    consola.error(error);
    return;
  }

  const $ = cheerio.load(file);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');
  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
      if (error) {
        consola.error(error);
        return;
      }
      consola.success('index.html written to /dist folder');
  });
});