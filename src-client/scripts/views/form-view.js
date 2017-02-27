import Backbone from 'backbone'
import {ListingModel} from '../models/megs-list-model.js'
import {MultiListingView} from './multi-listing-view.js'

export const FormView = Backbone.View.extend({
	el: '.page-content',

	handleFormSubmit: function(){
		evt.preventDefault();

		let formEl = event.target

	  let dataToBeSaved = {
	    item: formEl.item.value,
	    price: parseInt(formEl.cost.value),
	    forSale: formEl.forsale.checked,
	    description: formEl.desc.value,
	    imgLink: formEl.img.value,
	    category: formEl.category.value ('optional'),
	  }

		let newListingModel = new ListingModel()
		newListingModel.set(dataToBeSaved)

		let viewInstance = this
		newListingModel.save().then(function(){
			window.location.hash = ''
		})
	},

	buildHtmlTemplate: function(){

		return `
			<h2 class="bg-info">New Listing</h2>
			<form class="" id="new-listing-form">
				<div class="item-field">
					<label>Item</label>
					<input type="text" name="item" placeholder="Item Name"/>
				</div>
				<hr/>
				<div class="price-field">
					<label>Price</label>
					<input type="text" name="cost" placeholder="Enter dollar amount"/>
				</div>
				<hr/>
				<div class="for-sale-checkbox">
					<label>For Sale</label>
					<input type="checkbox" name="forsale" placeholder=""/>
				</div>
				<hr/>
				<div class="description-field">
					<label>Description</label>
					<input type="text" name="desc" placeholder="Enter item description"/>
				</div>
				<hr/>
				<div class="img-field">
					<label>Item Image</label>
					<input type="text" name="img" placeholder="Image Link"/>
				</div>
				<div class="category-field">
					<label>Category</label>
					<input type="text" name="category" placeholder="Optional"/>
				</div>
				<hr/>
				<div>
					<button class="submit-btn" type="submit">Submit</button>
				</div>
			</form>
			`
	},
		render: function(){
		this.el.innerHTML = this._buildHtmlTemplate()
	}
})
