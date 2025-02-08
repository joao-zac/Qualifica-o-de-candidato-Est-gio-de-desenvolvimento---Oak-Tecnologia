import { Product } from '../interfaces/productInterface'; // Adjust the import path as necessary

export const useList = (data: Product[]) => {
   
    const sortedData = data.sort((a, b) => a.valor - b.valor);
    
    return sortedData;
};