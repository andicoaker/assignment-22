import Backbone from 'backbone'
import $ from 'jquery'

export const ListingModel = Backbone.Model.extend({
	urlRoot: '/api/item',
	idAttribute: '_id'
  //  localhost:3000/api/item/892349npawfe89ju230

})

export const MegsListCollection = Backbone.Collection.extend({
	model: ListingModel,
	url: '/api/item'
})
