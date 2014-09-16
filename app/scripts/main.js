function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};


$( "#article_form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});







var url = 'http://tiny-pizza-server.herokuapp.com/collections/jay';

var test = $.ajax(url, {
  type: 'POST',
  dataType: 'json', 
  data: {
    title: ['This is a test title.'],
    content: ['This is fake body content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsa maiores dolorum totam cumque ea, illum adipisci iure autem, laboriosam.']
  }
});

console.log(test);