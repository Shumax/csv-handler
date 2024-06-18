import { URL } from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import handleFileUpload from './controllers/fileController';
import handleSearch from './controllers/searchController';
import sendResponse from './utils/response';

export default async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const { pathname, searchParams } = new URL(req.url!, `http://${req.headers.host!}`);

  if (pathname === '/api/files' && req.method === 'POST') {
    handleFileUpload(req, res);
  } else if (pathname === '/api/users' && req.method === 'GET') {
    const query = searchParams.get('q');
    handleSearch(req, res, query);
  } else {
    sendResponse(res, 404, 'Error: Not found!');
  }
}