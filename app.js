//Grab the main container
let myNews = document.getElementById("myNews");

const xhr = new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/top-headlines?country=in&apiKey=590c31707cd54f388dfb98ed5af8c350",true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let innerhtml = "";
    articles.forEach(function (element, index) {
      let news = ` <div class="card">
                      <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title}
                          </button>
                        </h2>
                      </div>
                  
                      <div id="collapse${index}" class="collapse" aria-labelledby="headingOne" data-parent="#myNews">
                        <div class="card-body">
                        ${element.description}.<a href="${element.url}" target="_blank">Read More</a>
                        </div>

                      </div>
                    </div>`;
      innerhtml += news;
    });
    myNews.innerHTML = innerhtml;
  }
};
xhr.send();
