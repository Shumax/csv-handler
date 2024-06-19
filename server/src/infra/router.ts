import { URL } from 'node:url';
import { IncomingMessage, ServerResponse } from 'node:http';

import sendResponse from './helper/response';

import SearchController from '../app/search/search.controller';
import FileController from '../app/file/file.controller';

export default async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  const { pathname, searchParams } = new URL(req.url!, `http://${req.headers.host!}`);

  if (pathname === '/api/files' && req.method === 'POST') {

    const result = new FileController().save(req, res, sendResponse);
    
    return result
  }

  if (pathname === '/api/users' && req.method === 'GET') {
    const { status, data, message } = new SearchController().search(searchParams.get('q') || '');

    if (data) return sendResponse(res, status, { data });

    return sendResponse(res, status, { message });
  }

  sendResponse(res, 501, { message: 'Not implemented!' });
}