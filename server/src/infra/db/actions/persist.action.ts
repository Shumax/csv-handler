import fs from 'node:fs';
import path, { join } from 'node:path';

import { DataCSV } from '../../../shared/types';


export default async function persistData(content: DataCSV) {
  const __dirname = path.resolve();
  const filename = join(__dirname, '/public/dataUploads.json');
  
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(content), (err) => {
      if (err) {
        reject({ status: 500, message: 'Error saving file!' });
      } else {
        resolve({ status: 200, message: 'The file was uploaded successfully!' });
      }
    });
  });
};

