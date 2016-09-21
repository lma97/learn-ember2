import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((rentalList) => this.set('rentalList', rentalList));
  },

  actions: {
    doFilter() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter'); 
      filterAction(filterInputValue).then((filterResults) => this.set('rentalList', filterResults));
    }
  }
});
