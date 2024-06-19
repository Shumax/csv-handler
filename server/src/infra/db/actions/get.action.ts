import path, { join } from 'node:path';
import { readFileSync } from 'node:fs';

export default function getData() {
  const __dirname = path.resolve();
  
  return JSON.parse(readFileSync(join(__dirname, '/public/dataUploads.json'), 'utf8'))
};

