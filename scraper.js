// const http = require('http');
const fs = require('fs');
const scrapeIt = require('scrape-it');
const json2csv = require('json2csv');

//Create a named directory if no such directory exists
const dir = './data';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//run the scrape function 8 times to scrape data from 8 shirts
  //use CSS pseudo selector nth-type-of with the loop variable value as n
  //Use try and catch to wrap the scrapeIt function in case there are only
    //7 or fewer items to scrape

//How do we access the next list item's URL

const siteURL = 'http://shirts4mike.com/shirts.php';

for(let i=0; i<8;i++){

  scrapeIt(siteURL, {
      // Fetch the articles
      // products: {
    //       unorderedListItem: ".products"
    //     , data: {
    //
    //           // Get the article date and convert it into a Date object
    //           createdAt: {
    //               selector: ".date"
    //             , convert: x => new Date(x)
    //           }
    //
    //           // Get the title
    //         , title: "a.article-title"
    //
    //           // Nested list
    //         , tags: {
    //               listItem: ".tags > span"
    //           }
    //
    //           // Get the content
    //         , content: {
    //               selector: ".article-content"
    //             , how: "html"
    //           }
    //       }
    //   }
    //
    //   // Fetch the blog pages
    // , pages: {
    //       listItem: "li.page"
    //     , name: "pages"
    //     , data: {
    //           title: "a"
    //         , url: {
    //               selector: "a"
    //             , attr: "href"
    //           }
    //       }
    //   },
    //
    //   // Fetch some other data from the page

    //:nth-type-of(i)
    //selector: ".products:nth-child(i) a",
    URL: {
          selector: ".products a",
          attr: "href"
    },
    title: {
          selector: ".products img",
          attr: "alt"
    },
    imageURL: {
          selector: ".products img",
          attr: "src"
    },
    price: scrapeIt('http://www.shirts4mike.com/shirt.php?id=101', {
              selector: "span.price"
    })
  }, (err, page) => {
      console.log(err || page);
  }); //end of scrapeIt function call
} //end of for loop

//Outside of loop as only one Date need be instantiated
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

console.log(year, month +1, date);

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

//*Edit your package.json file so that your program runs when the 'npm start'
  //command is run

//*When an error occurs, log it to a file named scraper-error.log . It should append
  //to the bottom of the file with a time stamp and error
  //e.g. [Tue Feb 16 2016 10:02:12 GMT-0800 (PST)] <error message>
