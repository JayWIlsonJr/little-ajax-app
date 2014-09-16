var $articles = $('#article_list');
var $title = $('#title');
var $article = $('#article');
var url = 'http://tiny-pizza-server.herokuapp.com/collections/funny_reads';

function addArticle(article) {
  $articles.append('<li><a href="#">'+ article.title +'</a> '+ article.article + '<button data-id="'+ article._id + '">X</button></li>');
}

$.ajax({
  type: 'GET',
  url: url,
  success: function(data) {
    $.each(data, function(i, item) {
     addArticle(item);
    });
  },
  error: function() {
    alert('Error loading content, please contact admin');
  }
});



$('#add_article').on('click', function() {

  var content = {
    title: $title.val(),
    article: $article.val(),
  };

  $.ajax({
    type: 'POST', 
    url: url,
    data: content,
    success: function(newArticle) {
     addArticle(newArticle);
     $('#title').val('');
     $('#article').val('');
    },
    error: function() {
      alert('Error saving article, please contact Super Admin.');
    }
  });
});




































//  var url = 'http://tiny-pizza-server.herokuapp.com/collections/jay';


// function renderTemplate(templateId, model, container) {
//     var templateString = $(templateId).text();
//     var templateFunction = _.template(templateString);
//     var renderTemplate = templateFunction(model);
//     $(container).append(renderTemplate);
// };


// $("#article_form").submit(function(event) {
//     var data = $(this).serializeArray();
//     event.preventDefault();

//     // var result = _.reduce(data, function(acum, item) {
//     //     acum[item.name] = item.value;
//     //     return acum;
//     // }, {});

//     console.log("Before AJAX: ",data);
//     var test = $.ajax(url, {
//         type: 'POST',
//         dataType: 'json',
//         data: data
//     });

// });









// // title: ['This is a test title.'],
// // content: ['This is fake body content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsa maiores dolorum totam cumque ea, illum adipisci iure autem, laboriosam.']
// // }
// // });

// // console.log(test);