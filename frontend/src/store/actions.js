import axios from 'axios';
import {
  FIRST
} from './mutations-types';

export function first (context, payload) {
console.log(payload);
      // commit(FIRST, payload);
	 context.commit(FIRST,payload);
 
}
export default {
  first
};
