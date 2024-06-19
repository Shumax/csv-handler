import path, { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { IncomingMessage, ServerResponse } from 'node:http';
import sendResponse from '../utils/response';

const __dirname = path.resolve();

const data: { [key: string]: string }[] = JSON.parse(readFileSync(join(__dirname, '/public/dataUploads.json'), 'utf8')) || [];

export default function handleSearch( res: ServerResponse, query: string ) {
  try {
    if (!query) throw { message: 'Empty query!' };

    const results: { [key: string]: string }[] = [];

    if(query == 'all') return sendResponse(res, 200, { data: data.filter(row => 'name' in row) });

    data.filter((row) => {
      for(const value of Object.values(row)) {
        if(value.toLowerCase().includes(query.toLowerCase())) return results.push(row);
      }
    });

    if(!results.length) throw { message: 'User not found!' }; 

    return sendResponse(res, 200, { data: results });

  } catch (err) {
    return sendResponse(res, 500, err);
  }
}