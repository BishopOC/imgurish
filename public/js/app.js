var imageApp = {
  images: [],
  init: function(){
    imageApp.cacheDom();
    imageApp.addEventListeners();
    imageApp.render();
  },
  cacheDom: function(){
    imageApp.createButton = document.querySelector('#create');
    imageApp.imageInput = document.querySelector('#image-url');
    imageApp.list = document.querySelector('#list');
  },
  render: function (){
    console.log(imageApp.images);
    var listItemsFromImages = imageApp.images
                                      .map(function(imageurl){
                                        return `<li><img src=${imageurl.image}></li>`;
                                      })
                                      .join('');
    imageApp.list.innerHTML = listItemsFromImages;
  },
  addEventListeners: function(){
    imageApp.createButton.addEventListener('click', imageApp.addImage);
  },
  addImage: function(){
    var image = imageApp.imageInput.value;
    var newImage = createImage(image);
    imageApp.images.push(newImage);
    imageApp.imageInput.value = '';
    imageApp.render();
  }
};
imageApp.init();
