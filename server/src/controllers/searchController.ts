import path, { join } from 'path';
import { readFileSync } from 'fs';
import { IncomingMessage, ServerResponse } from 'http';
import sendResponse from '../utils/response';

const __dirname = path.resolve();

const data: { [key: string]: string }[] = JSON.parse(readFileSync(join(__dirname, '/public/dataUploads.json'), 'utf8')) || [];

export default function handleSearch(req: IncomingMessage, res: ServerResponse, query: string | null) {
  try {
    if (!query) throw 'Error: Empty query!';

    const results: { [key: string]: string }[] = [];

    data.filter((row) => {
      for (const value of Object.values(row)) {
        if (value.toLowerCase().includes(query.toLowerCase())) results.push(row);
      }
    });

    return sendResponse(res, 202, results);
  } catch (err) {
    return sendResponse(res, 400, err);
  }
}