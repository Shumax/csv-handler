import { SearchEntity } from './search.entity';
import { SearchRepository } from './search.repository';
import { DataCSV } from '../../shared/types';

class SearchController extends SearchEntity {
  
  search(query: string) {
    try {
      if (!query) throw { message: 'Empty query!' };

      const data: DataCSV = new SearchRepository().getDataCsv();

      if (query == 'all') return { status: 200, data: this.findAll(data) };

      const results: DataCSV = this.findEqual(data, query);

      if (!results.length) throw { message: 'User not found!' };

      return { status: 200, data: results };
    } catch (err: any) {
      return { status: 500, message: err.message };
    }
  }

}

export default SearchController;
