var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

const ondataloaded = () => {
    console.log("loaded")
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');

        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.onload = ondataloaded;


xhr.send();

var xhr2 = new XMLHttpRequest();

var url2 = './health.json';

xhr2.open('GET', url2, true);
xhr2.responseType = 'json';


const onnewsloaded = () => {
    var news = xhr2.response.news;
    var newsDiv = document.getElementById('news');

    news.forEach(function(n) {
        var nDiv = document.createElement('div');
        nDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = n.title;

        var description = document.createElement('p');
        description.textContent = n.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');

        n.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        n.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });

        nDiv.appendChild(title);
        nDiv.appendChild(description);
        nDiv.appendChild(waysHeader);
        nDiv.appendChild(waysList);
        nDiv.appendChild(benefitsHeader);
        nDiv.appendChild(benefitsList);
        
        newsDiv.appendChild(nDiv);
      });
}

xhr2.onload = onnewsloaded;


xhr2.send();
