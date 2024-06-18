import { URL } from 'node:url';
import { IncomingMessage, ServerResponse } from 'node:http';

import handleFileUpload from './controllers/fileController';
import handleSearch from './controllers/searchController';
import sendResponse from './utils/response';

export default async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const { pathname, searchParams } = new URL(req.url!, `http://${req.headers.host!}`);

  if (pathname === '/api/files' && req.method === 'POST') {
    handleFileUpload(req, res);
  } else if (pathname === '/api/users' && req.method === 'GET') {
    const query = searchParams.get('q');
    handleSearch(res, query);
  } else {
    sendResponse(res, 501, { message: 'Not implemented!'});
  }
}