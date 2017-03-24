"use strict";

// const http = require('http');
const fs = require('fs')
  , scrapeIt = require('scrape-it')
  , json2csv = require('json2csv');

//Create named directory if no such directory exists
const dir = './data';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//MAKE A FUNCTION THAT TAKES IN THE BASE URL AND THE URL ARGUMENT THAT SCRAPES THE FIRST URL
  //AND THEN THE URL WITH A NEW ARGUMENT PASSED

// //BEGIN JSON2CSV
// var fields = ['field1', 'field2', 'field3'];
//
// try {
//   var result = json2csv({ data: myData, fields: fields });
//   console.log(result);
// } catch (err) {
//   // Errors are thrown for bad options, or if the data is empty and no fields are provided.
//   // Be sure to provide fields if it is possible that your data array will be empty.
//   console.error(err);
// }
// //END JSON2CSV


//How do we access the next list item's URL

// function scrapeSite(request, response){
  //
  // if (response.url === ''){
  //   //scrape home URL and then change URL to the product's URL to find price
  // }

const siteURL = 'http://shirts4mike.com/';
let urlExtension = 'shirts.php'; //THE URL EXTENSION COMES FROM THE URL WITHIN A SCRAPEIT CALL

const scrapedJSON =  scrapeIt(siteURL+urlExtension, {

    products: {
          listItem: ".products li"
        , data: {

              title: {
                    selector: "img"
                  , attr: "alt"
              }
            , imageURL: {
                      selector: "img"
                    , attr: "src"
                }
            , url: {
                    selector: "a"
                  , attr: "href"
                  // , convert siteURL => siteURL + url
              }

            , getPrice: scrapeIt('http://shirts4mike.com/shirts.php',{
                      priceURL:  {
                              listItem: ".products li"
                            , data: {
                                  url: {
                                      selector:"a"
                                   ,  attr: "href"
                                  }
                              }
                          }
                      }, (err, page) => {
                            console.log(err || page);
                      })

                      // ,  getPrice: {
                      //       scrapeIt('http://www.shirts4mike.com/shirt.php?id=101', {
                      //
                      //           selector: ".price"
                      //       })
                      //       , (err, page) => {
                      //               console.log(err || page);
                      //       });
                      //   }
          }
      }
  }

  , (err, page) => {
        console.log(err || page);
  }); //end of scrapeIt function call


function getPrice(){
  scrapeIt('http://shirts4mike.com/shirts.php',{
          // shirtPrice: ".price"
        priceURL:  {
            listItem: ".products li"
          , data: {
                url: {
                    selector:"a"
                 ,  attr: "href"
                }
            }
        }
    }, (err, page) => {
          console.log(err || page);
    })
}

// , priceURL: {
//         priceURL: convert scrapeIt(siteURL + urlExtension) => scrapeIt(siteURL + ) //Use 'convert' convert x => x * x;
// }

// convert (Function): An optional function to change the value.

// // ES5
// var selected = allJobs.filter(function (job) {
//   return job.isSelected();
// });
//
// // ES6
// var selected = allJobs.filter(job => job.isSelected());



// // DOES WORK TO FIND PRICE OF PRODUCT GIVEN URL
// let productURL = '/shirt.php?id=101';
//
// scrapeIt(`http://www.shirts4mike.com${productURL}`, {
//
//         shirtPrice: ".price"
//
// }, (err, page) => {
//         console.log(err || page);
// });



//if urlExtension != 'shirts.php' scrape the site for all that shit
  //replace URL with the scraped URL
  //else replace the URL with the


              // , price: { convert x => x * x
              //            scrapeIt(x + y, {
              //               //find price URL
              //            })

// // urlExtension = request.url.replace("/", "");
// function scrapeSite(siteURL, scrapedJSON){
//   srapeIt(siteURL + scapedJSON.products.url);
// }
//         shirtPrice: ".price"
//
//       }, (err, page) => {
//           console.log(err || page);
//       });}))


//Outside of loop as only one Date need be instantiated
const today = new Date();
const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
// const month = today.getMonth();
// const date = today.getDate();

// console.log(year, month +1, date);
console.log(currentDate);

//How do we scrape price? We would have to emulate a click through and read the price from the URL of the product list item
  //Use the scraped product URL and concatonate it with scrapeIt() to scrape the product price
  //May have to apply blocking in order to control the order of what is returned by the application




// - 1. Create a scraper.js file that will contain your command line application.
  //Your project should also include a package.json file that includes your project’s
  //dependencies. The npm install command should install your dependencies.

// - 2. Program your scraper to check for a folder called ‘data’. If the folder doesn’t exist,
  //the scraper should create one. If the folder does exist, the scraper should do nothing.

// - 3. Choose and use two third-party npm packages. One package should be used to scrape
  //content from the site. The other package should create the CSV file. Be sure to
  //research the best package to use (see the project resources for a link to the video
  //about how to choose a good npm package) Both packages should meet the following
  //requirements:
    //At least 1,000 downloads
    //Has been updated in the last six months

//4. Program your scraper so that it visits the website http://shirts4mike.com and
  //uses http://shirts4mike.com/shirts.php as single entry point

//4.1. scrape information for 8 tee-shirts from the site, without using any hard-coded
  //urls like http://www.shirts4mike.com/shirt.php?id=101. If you’re unsure of how to
  //get started, try googling ‘node scraper’ to get a feel for what a scraper is and
  //what it does.

//5. Scraping and Saving Data:
  //The scraper should get the price, title, url and image url from the product page
    //and save this information into a CSV file.
      //fs.appendFile(file, data[, options], callback)
        //Asynchronously append data to a file, creating the file if it does not yet.
        //exist. data can be a string or a buffer.
  //The information should be stored in an CSV file that is named for the date it was
    //created, e.g. 2016-11-21.csv.
  //Assume that the the column headers in the CSV need to be in a certain order to be
    //correctly entered into a database. They should be in this order: Title, Price,
    //ImageURL, URL, and Time
  //The CSV file should be saved inside the ‘data’ folder.

//6. If your program is run twice, it should overwrite the data in the CSV file with
  //the updated information.

//7. If http://shirts4mike.com is down, an error message describing the issue should
  //appear in the console.

//8. use the ignoreGit file to manage the size of the nodeModules folder when uploaded
  //to GitHub

//*Edit your package.json file so that your program runs when the 'npm start'
  //command is run

//*When an error occurs, log it to a file named scraper-error.log . It should append
  //to the bottom of the file with a time stamp and error
  //e.g. [Tue Feb 16 2016 10:02:12 GMT-0800 (PST)] <error message>
