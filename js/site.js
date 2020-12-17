var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytwwLIFwiJTtntZ'}).base('app611tk7BYrA0HTQ');

base('Case Study Table').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    //page milinery design2020

    var myElement1a = document.getElementById('title1');
    var myElement1b = document.getElementById('year1');
    var myElement1c = document.getElementById('medium1');
    var myElement1d = document.getElementById('role1');
    var myElement1e = document.getElementById('credits1');
    var myElement1f = document.getElementById('description1');
    var myElement1g = document.getElementById('oneImg1');
    var myElement1h = document.getElementById('twoImg1');
    var myElement1i = document.getElementById('threeImg1');
    var myElement1j = document.getElementById('fourImg1');
    var myElement1k = document.getElementById('fiveImg1');
    var myElement1l = document.getElementById('processImg1');
    
    if(myElement1a){
        myElement1a.innerHTML = records[0].fields.WorkTitle;
    }if(myElement1b){
        myElement1b.innerHTML = records[0].fields.WorkYear;
    }if(myElement1c){
        myElement1c.innerHTML = records[0].fields.WorkMedium;
    }if(myElement1d){
        myElement1d.innerHTML = records[0].fields.WorkRole;
    }if(myElement1e){
        myElement1e.innerHTML = records[0].fields.WorkCredits;
    }if(myElement1f){
        myElement1f.innerHTML = records[0].fields.WorkDescription;
    }if(myElement1g){
        myElement1g.src = records[0].fields.Description_Image[0].url;
    }if(myElement1h){
    myElement1h.src = records[0].fields.Displaying_Image1[0].url;
    }if(myElement1i){
    myElement1i.src = records[0].fields.Displaying_Image2[0].url;
    }if(myElement1j){
    myElement1j.src = records[0].fields.Displaying_Image3[0].url;
    }if(myElement1k){
        myElement1k.src = records[0].fields.Displaying_Image4[0].url;
    }if(myElement1l){
        myElement1l.src = records[0].fields.Process[0].url;
    }

   //page milinery design2019

   var myElement1a = document.getElementById('title2');
    var myElement1b = document.getElementById('year2');
    var myElement1c = document.getElementById('medium2');
    var myElement1d = document.getElementById('role2');
    var myElement1e = document.getElementById('credits2');
    var myElement1f = document.getElementById('description2');
    var myElement1g = document.getElementById('oneImg2');
    var myElement1h = document.getElementById('twoImg2');
    var myElement1i = document.getElementById('threeImg2');
    var myElement1j = document.getElementById('fourImg2');
    var myElement1k = document.getElementById('fiveImg2');
    var myElement1l = document.getElementById('processImg2');
    
    if(myElement1a){
        myElement1a.innerHTML = records[1].fields.WorkTitle;
    }if(myElement1b){
        myElement1b.innerHTML = records[1].fields.WorkYear;
    }if(myElement1c){
        myElement1c.innerHTML = records[1].fields.WorkMedium;
    }if(myElement1d){
        myElement1d.innerHTML = records[1].fields.WorkRole;
    }if(myElement1e){
        myElement1e.innerHTML = records[1].fields.WorkCredits;
    }if(myElement1f){
        myElement1f.innerHTML = records[1].fields.WorkDescription;
    }if(myElement1g){
        myElement1g.src = records[1].fields.Description_Image[0].url;
    }if(myElement1h){
    myElement1h.src = records[1].fields.Displaying_Image1[0].url;
    }if(myElement1i){
    myElement1i.src = records[1].fields.Displaying_Image2[0].url;
    }if(myElement1j){
    myElement1j.src = records[1].fields.Displaying_Image3[0].url;
    }if(myElement1k){
        myElement1k.src = records[1].fields.Displaying_Image4[0].url;
    }if(myElement1l){
        myElement1l.src = records[1].fields.Process[0].url;
    }

    //page milinery design2018

   var myElement1a = document.getElementById('title3');
   var myElement1b = document.getElementById('year3');
   var myElement1c = document.getElementById('medium3');
   var myElement1d = document.getElementById('role3');
   var myElement1e = document.getElementById('credits3');
   var myElement1f = document.getElementById('description3');
   var myElement1g = document.getElementById('oneImg3');
   var myElement1h = document.getElementById('twoImg3');
   var myElement1i = document.getElementById('threeImg3');
   var myElement1j = document.getElementById('fourImg3');
   var myElement1k = document.getElementById('fiveImg3');
   var myElement1l = document.getElementById('processImg3');
   
   if(myElement1a){
       myElement1a.innerHTML = records[2].fields.WorkTitle;
   }if(myElement1b){
       myElement1b.innerHTML = records[2].fields.WorkYear;
   }if(myElement1c){
       myElement1c.innerHTML = records[2].fields.WorkMedium;
   }if(myElement1d){
       myElement1d.innerHTML = records[2].fields.WorkRole;
   }if(myElement1e){
       myElement1e.innerHTML = records[2].fields.WorkCredits;
   }if(myElement1f){
       myElement1f.innerHTML = records[2].fields.WorkDescription;
   }if(myElement1g){
       myElement1g.src = records[2].fields.Description_Image[0].url;
   }if(myElement1h){
   myElement1h.src = records[2].fields.Displaying_Image1[0].url;
   }if(myElement1i){
   myElement1i.src = records[2].fields.Displaying_Image2[0].url;
   }if(myElement1j){
   myElement1j.src = records[2].fields.Displaying_Image3[0].url;
   }if(myElement1k){
       myElement1k.src = records[2].fields.Displaying_Image4[0].url;
   }if(myElement1l){
       myElement1l.src = records[2].fields.Process[0].url;
   }

       //page milinery design2017

       var myElement1a = document.getElementById('title4');
       var myElement1b = document.getElementById('year4');
       var myElement1c = document.getElementById('medium4');
       var myElement1d = document.getElementById('role4');
       var myElement1e = document.getElementById('credits4');
       var myElement1f = document.getElementById('description4');
       var myElement1g = document.getElementById('oneImg4');
       var myElement1h = document.getElementById('twoImg4');
       var myElement1i = document.getElementById('threeImg4');
       var myElement1j = document.getElementById('fourImg4');
       var myElement1k = document.getElementById('fiveImg4');
       var myElement1l = document.getElementById('processImg4');
       
       if(myElement1a){
           myElement1a.innerHTML = records[3].fields.WorkTitle;
       }if(myElement1b){
           myElement1b.innerHTML = records[3].fields.WorkYear;
       }if(myElement1c){
           myElement1c.innerHTML = records[3].fields.WorkMedium;
       }if(myElement1d){
           myElement1d.innerHTML = records[3].fields.WorkRole;
       }if(myElement1e){
           myElement1e.innerHTML = records[3].fields.WorkCredits;
       }if(myElement1f){
           myElement1f.innerHTML = records[3].fields.WorkDescription;
       }if(myElement1g){
           myElement1g.src = records[3].fields.Description_Image[0].url;
       }if(myElement1h){
       myElement1h.src = records[3].fields.Displaying_Image1[0].url;
       }if(myElement1i){
       myElement1i.src = records[3].fields.Displaying_Image2[0].url;
       }if(myElement1j){
       myElement1j.src = records[3].fields.Displaying_Image3[0].url;
       }if(myElement1k){
           myElement1k.src = records[3].fields.Displaying_Image4[0].url;
       }if(myElement1l){
           myElement1l.src = records[3].fields.Process[0].url;
       }

              //page milinery design2016

              var myElement1a = document.getElementById('title5');
              var myElement1b = document.getElementById('year5');
              var myElement1c = document.getElementById('medium5');
              var myElement1d = document.getElementById('role5');
              var myElement1e = document.getElementById('credits5');
              var myElement1f = document.getElementById('description5');
              var myElement1g = document.getElementById('oneImg5');
              var myElement1h = document.getElementById('twoImg5');
              var myElement1i = document.getElementById('threeImg5');
              var myElement1j = document.getElementById('fourImg5');
              var myElement1k = document.getElementById('fiveImg5');
              var myElement1l = document.getElementById('processImg5');
              
              if(myElement1a){
                  myElement1a.innerHTML = records[4].fields.WorkTitle;
              }if(myElement1b){
                  myElement1b.innerHTML = records[4].fields.WorkYear;
              }if(myElement1c){
                  myElement1c.innerHTML = records[4].fields.WorkMedium;
              }if(myElement1d){
                  myElement1d.innerHTML = records[4].fields.WorkRole;
              }if(myElement1e){
                  myElement1e.innerHTML = records[4].fields.WorkCredits;
              }if(myElement1f){
                  myElement1f.innerHTML = records[4].fields.WorkDescription;
              }if(myElement1g){
                  myElement1g.src = records[4].fields.Description_Image[0].url;
              }if(myElement1h){
              myElement1h.src = records[4].fields.Displaying_Image1[0].url;
              }if(myElement1i){
              myElement1i.src = records[4].fields.Displaying_Image2[0].url;
              }if(myElement1j){
              myElement1j.src = records[4].fields.Displaying_Image3[0].url;
              }if(myElement1k){
                  myElement1k.src = records[4].fields.Displaying_Image4[0].url;
              }if(myElement1l){
                  myElement1l.src = records[4].fields.Process[0].url;
              }

    // This function (`page`) will get called for each page of records.

/*
    records.forEach(function(record) {
        console.log('Retrieved', record.get('WorkTitle'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    
*/
   fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 7){
        counter = 1;
    }
}, 5000);


