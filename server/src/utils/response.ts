import { ServerResponse } from 'node:http';

export default function sendResponse(res: ServerResponse, statusCode: number, data: any) {
  res.writeHead(statusCode, { 
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-max-age': '2592000',
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(data));
}