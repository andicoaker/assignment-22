import Backbone from 'backbone'
import $ from 'jquery'

export const ListingModel = Backbone.Model.extend({
	urlRoot: '/api/item',
	idAttribute: '_id'
})

export const MegsListCollection = Backbone.Collection.extend({
	model: ListingModel,
	url: '/api/item'
})
