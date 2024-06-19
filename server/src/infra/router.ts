import { URL } from 'node:url';
import { IncomingMessage, ServerResponse } from 'node:http';

import handleFileUpload from '../controllers/fileController';
import handleSearch from '../controllers/searchController';
import sendResponse from './helper/response';

import SearchController from '../app/search/search.controller';

export default async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const { pathname, searchParams } = new URL(req.url!, `http://${req.headers.host!}`);

  //if (pathname === '/api/files' && req.method === 'POST') return handleFileUpload(req, res);

  if (pathname === '/api/users' && req.method === 'GET') {
    const { status, data, message } = new SearchController().search(searchParams.get('q') || '');

    if (data) return sendResponse(res, status, { data: data });

    return sendResponse(res, status, { message: message });
  }

  sendResponse(res, 501, { message: 'Not implemented!' });
}