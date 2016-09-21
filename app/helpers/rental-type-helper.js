import Ember from 'ember';

const propertyTypes = [
  'Condo', 'Townhouse', 'Apartment'
];

export function rentalTypeHelper([type_param]/*, hash*/) {
  if (propertyTypes.includes(type_param)) {
    return 'Community';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(rentalTypeHelper);
