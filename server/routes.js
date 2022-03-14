import config from './config.js';
import { Controller } from './controller.js';
import { logger } from './util.js';
const {
  location,
  pages: { homeHTML },
} = config;

const controller = Controller();

async function routes(request, response) {
  const { method, url } = request;

  console.log(config.pages);

  if (method === 'GET' && url === '/') {
    response.writeHead(302, {
      location: location.home,
    });

    response.end();
  }

  if (method === 'GET' && url === '/home') {
    const { stream } = await controller.getFileStream(homeHTML);

    // padrão do response é text/html
    return stream.pipe(response);
  }

  return response.end('working');
}

export function handler(request, response) {
  return routes(request, response).catch(err =>
    logger.error(`Deu ruimmm ${err.stack}`)
  );
}
