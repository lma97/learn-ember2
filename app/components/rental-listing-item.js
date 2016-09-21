import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImgSize: function() {
        this.toggleProperty('isWide');
    }
  }
});
