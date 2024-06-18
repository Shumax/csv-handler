import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { join } from 'path';
import { IncomingMessage, ServerResponse } from 'http';
import sendResponse from '../utils/response';

export default function handleFileUpload(req: IncomingMessage, res: ServerResponse) {
  let data: Buffer[] = [];

  const __dirname = path.resolve();

  req.on('data', (chunk) => {
    data.push(chunk);
  });

  req.on('end', () => {
    const file = Buffer.concat(data).toString();

    if (!file) return sendResponse(res, 400, 'Error: Empty request!');

    if (!file.includes('Content-Type: text/csv')) return sendResponse(res, 400, 'Error: Type file!');

    const startDelimiter = 'Content-Type: text/csv';
    const endDelimiter = '----------------------------';

    const startIndex = file.indexOf(startDelimiter) + startDelimiter.length;
    const endIndex = file.lastIndexOf(endDelimiter);

    const csvData = file.slice(startIndex, endIndex).trim();

    const rows = csvData.split('\n');
    const keys = rows[0].split(',');
    rows.shift();

    const result: { [key: string]: string }[] = [];

    rows.forEach((el) => {
      const columns = el.split(',');

      let obj: { [key: string]: string } = {};

      columns.forEach((value, index) => {
        obj[keys[index].trim()] = value.trim();
      });

      result.push(obj);
    });

    const filename = join(__dirname, '/public/dataUploads.json');

    fs.writeFile(filename, JSON.stringify(result), (err) => {
      if (err) {
        console.error('Error saving file:', err);
        sendResponse(res, 500, 'Error saving file!');
      } else {
        sendResponse(res, 201, { msg: 'Success: uploaded!', filename });
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request error:', error);
    sendResponse(res, 500, 'Error in request');
  });
}