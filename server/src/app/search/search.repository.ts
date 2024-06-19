import { getData } from '../../infra/db';
import { DataCSV } from '../../shared/types';

export class SearchRepository {
  getDataCsv(): DataCSV  {    
    return getData()
  }
}
