import fs from 'node:fs';
import path, { join } from 'node:path';

import { IncomingMessage } from "node:http";
import { DataCSV } from "../../shared/types";
import { persistData } from "../../infra/db";
import { ServerResponse } from "http";

class FileController {
  save(req: IncomingMessage, res: ServerResponse<IncomingMessage>, sendResponse: any) {
    let data: Buffer[] = [];

    req.on('data', (chunk) => {
      data.push(chunk);
    });

    req.on('end', async () => {
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

      const persisResult: any = await persistData(result);

      sendResponse(res, persisResult.status, { message: persisResult.message })

    });

    req.on('error', (error) => {
      sendResponse(res, 500, { message: 'Error in request' });
    });

    return sendResponse
  }

}

export default FileController;
