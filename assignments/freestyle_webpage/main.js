function displayRandomImages()   
{   
   var imageArray = [  
   {    
     src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/0.jpg",  
     width: "250",  
     height: "450"  
   },   
   {  
     src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/1.jpg",  
     width: "250",  
     height: "450"  
   },   
   {  
     src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/2.jpg",  
     width: "250",  
     height: "450"  
   },  
   {  
     src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/3.jpg",  
     width: "250",  
     height: "450"
   },
    {    
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/4.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/5.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/6.jpg",  
    width: "250",  
    height: "450"  
    },  
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/7.jpg",  
    width: "250",  
    height: "450"
    },
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/8.jpg",  
    width: "250",  
    height: "450"
    },
    {    
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/9.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/10.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/11.jpg",  
    width: "250",  
    height: "450"  
    },  
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/12.jpg",  
    width: "250",  
    height: "450"
    },
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/13.jpg",  
    width: "250",  
    height: "450"
    },
    {    
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/14.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/15.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/16.jpg",  
    width: "250",  
    height: "450"  
    },  
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/17.jpg",  
    width: "250",  
    height: "450"
    },
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/18.jpg",  
    width: "250",  
    height: "450"
    },
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/19.jpg",  
    width: "250",  
    height: "450"
    },
    {    
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/20.jpg",  
    width: "250",  
    height: "450"  
    },   
    {  
    src: "https://gfx.tarot.com/images/site/decks/universal-waite/full_size/21.jpg",  
    width: "250",  
    height: "450"  
   }];
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
      
  function getRandomNum(min, max)   
  {   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  var newImage = getRandomNum(0, newArray.length - 1);  
    
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }    
  document.body.appendChild(newImage);  
}  