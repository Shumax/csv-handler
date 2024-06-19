import { getData } from '../../infra/db';
import { DataCSV } from './search.types';

export class SearchRepository {
  getDataCsv(): DataCSV  {    
    return getData()
  }
}
