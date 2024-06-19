import { DataCSV } from "../../shared/types";

export class SearchEntity {
  
  findAll(data: DataCSV) {
    return data.filter(row => 'name' in row)
  }

  findEqual(data: DataCSV, query: string) {
    const results: DataCSV = [];

    data.filter((row) => {
      for (const value of Object.values(row)) {
        if (value.toLowerCase().includes(query.toLowerCase())) return results.push(row);
      }
    });

    return results
  }

}
