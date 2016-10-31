import $ from 'jquery';
import API_keys from './apikeys.js'

let flickrAPI = {

  key: API_keys,

  getAllPhotosAsync: function (searchText, callback) {

   let context = this;

   let searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${searchText}&per_page=10&page=1&format=json&nojsoncallback=1`;

   console.log(searchUrl);

    $.ajax({
      type: "GET",
      url: searchUrl,
    }).done(function(data){
      var photos = data.photos.photo
      callback(context.getPhotoAttributes(photos));
      console.log('successful get from flickrAPI');
    }).fail(function(){
      console.log('failed to get photos from flickrAPI');
    });

  },


  getPhotoAttributes: function (photos) {

    var urls = [];

    var photoAttributes = {
      farm: 6,
      server: 5336,
      id: 30547929822,
      secret: "494d8ed8f4"
    };


    photos.forEach(photo => {
      photoAttributes.farm = photo.farm;
      photoAttributes.server = photo.server;
      photoAttributes.id = photo.id;
      photoAttributes.secret = photo.secret;
          
      let photoUrl = `https://farm${photoAttributes.farm}.staticflickr.com/${photoAttributes.server}/${photoAttributes.id}_${photoAttributes.secret}.jpg`;

      urls.push(photoUrl);

    })

    return urls;
    
  }, 


};

export default flickrAPI;


