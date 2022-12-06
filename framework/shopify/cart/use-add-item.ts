import { useAddItem } from '@common/cart';
import { MutationHook } from '@common/types/hook';

export default useAddItem;

export const handler: MutationHook = {
  fetcher: ({fetch, input123}) => {
    const response = fetch(input123);
    return response;
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input)
      console.log('response', response)
      return {  
        output: response
      }
    }
  }
}