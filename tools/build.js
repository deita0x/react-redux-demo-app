import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import consola from 'consola';

process.env.NODE_ENV = 'production';

consola.info('Generating minified bundle for production via Webpack. This will take a moment.');

webpack(webpackConfig).run((error, stats) => {
  if (error) {
    consola.error(error);
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(
      error => consola.error(error)
    );
  }

  if (jsonStats.hasWarnings) {
    consola.warn('Webpack generated the following warnings: ');
    jsonStats.warnings.map(
      warning => consola.warn(warning)
    );
  }

  consola.info(`Webpack stats: ${stats}`);
  consola.success('Your has been compiled in production mode. It\'s ready');
  return 0;
});