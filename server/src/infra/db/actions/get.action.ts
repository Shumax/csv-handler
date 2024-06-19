import path, { join } from 'node:path';
import { readFileSync } from 'node:fs';

const __dirname = path.resolve();

export default function getData() {
  return JSON.parse(readFileSync(join(__dirname, '/public/dataUploads.json'), 'utf8'))
};

