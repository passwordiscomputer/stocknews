//import { tbd } from './sample-project';
import './styles.css';
import $ from 'jquery';
// import 'boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    $('.heading, .quote').empty();
    $('.news .row').empty();
    let stock = $('#stock').val();
    $('#stock').val("");
    $.ajax(`https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote`).then(function(response) {

      $('.heading').text(`Here is some info on ${response.quote.companyName}`);
      $('.quote').text(`The current price of ${response.quote.companyName} stock is ${response.quote.latestPrice} `);
      $.ajax(`https://newsapi.org/v2/everything?q=${response.quote.companyName}&sources=bloomberg,msnbc,the-wall-street-journal,business-insider,financial-post&language=en&apiKey=2ed22f667ed4478ea5b9c52d36e92e4a&sortBy=publishedAt&pageSize=9`).then(function(response) {
        response.articles.forEach(function(article){
          $('.news .row').append(`<div class="col-md-4">
                              <div class="card">
                                <img src="${article.urlToImage}" alt="">
                                  <a target="_blank" href="${article.url}">${article.title}</a>
                                  <h5> Source: ${article.source.name} </h5>
                                  <h5> Author: ${article.author} </h5>
                              </div>
                            </div>`);
        });

      }).fail(function(error) {
        $('.quote').text(`There was an error processing your request: ${error.responseText}. Please make sure you entered a valid ticker symbol.`);
      });

    }).fail(function(error) {
      $('.quote').text(`There was an error processing your request: ${error.responseText}. Please make sure you entered a valid ticker symbol.`);
    });
  });
});
