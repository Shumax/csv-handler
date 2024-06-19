import fs from 'node:fs';
import path, { join } from 'node:path';
import { IncomingMessage, ServerResponse } from 'node:http';
import sendResponse from '../infra/helper/response';

export default function handleFileUpload(req: IncomingMessage, res: ServerResponse) {
  let data: Buffer[] = [];

  const __dirname = path.resolve();

  req.on('data', (chunk) => {
    data.push(chunk);
  });

  req.on('end', () => {
    const file = Buffer.concat(data).toString();
    
    if (!file) return sendResponse(res, 500, { message: 'Error: Empty request!' } );

    if (!file.includes('Content-Type: text/csv')) return sendResponse(res, 500, { message: 'Error: Type file!' } );

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
        sendResponse(res, 500, { message: 'Error saving file!' });
      } else {
        sendResponse(res, 200, { message: 'The file was uploaded successfully!' });
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request error:', error);
    sendResponse(res, 500, { message: 'Error in request' });
  });
}