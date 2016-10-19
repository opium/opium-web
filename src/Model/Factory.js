import { fromJS } from 'immutable';
import Directory from './Directory';


export function entityFactory(input, listOrItem, clientName = null) {
  switch (clientName) {
    case 'Directory':
      return new Directory(input);
    default:
      return fromJS(input);
  }
}
