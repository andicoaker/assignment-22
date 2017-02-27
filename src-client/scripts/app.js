import Backbone from 'backbone';
import $ from 'jquery';

import MultiListingView from "./views/multi-listing-view.js";
// import SingleListingView from "./views/single-listing-view.js";
import formView from "./views/form-view.js";

import {MegsListCollection, ListingModel} from './models/megs-list-model.js';


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'' : 'showMulitListings',
		'new' : 'showNewListingForm',
    'item/:id' : 'showSingleListing'
	},

	showNewListingForm: function(){
		let formViewInstance = new FormView()
		formViewInstance.render()
	},

  showMulitListings: function(){
    let listCollInstance = new MegsListCollection()
    listCollInstance.fetch().then(function(){
      console.log(listCollInstance)

    })
  },

  // showSingleListing: function(){
  //
  //
  // },

})

let app = new AppRouter()
