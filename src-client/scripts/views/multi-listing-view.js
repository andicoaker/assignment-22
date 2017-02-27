import Backbone from 'backbone';

const MultiListingView = Backbone.View.extend({
  el: '.page-content',

  // events: {
  //   'click .thumbnail': 'handleSingleListingClick'
  // },
  //
  // handleSingleListingClick: function(evt){
  //   let detailsId = evt.currentTarget.dataset.id
  //   // use currentTarget to tareget the entire container
  //   console.log(detailsId)
  //   window.location.hash = `details/${detailsId}`
  //   // this changes the route to the single view page
  // },

  listingHtmlTemplate: function(listingDetails){

    return `
      <div class="row">
        <div class="col-xs-6 col-s-5 col-md-4 listing-thumbnail" >
        <div class="clearfix visible-md-block"></div>
          <div class="thumbnail "data-id="${listingDetails.get('_id')}">
            <img src="${listingDetails.get('imgLink')}">
            <div class="caption">
              <h6>${listingDetails.get('item')}</h6>
              <p>$ ${listingDetails.get('price')}</p>
            </div>
          </div>
        </div>
      </div>`
  },

  currentListingHtmlTemplate: function(coll){
    let itemsList = coll.models
    return `
      <div class="container">
        <h2>Current Listings</h2>
        <hr/>
        <div class="row">
          ${itemsList.map(this.listingHtmlTemplate).join('')}
        </div>
      </div>`
  },

  render: function(data){
		this.el.innerHTML = this.currentListingHtmlTemplate(data)
  }
})

export default MultiListingView
