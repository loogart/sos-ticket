$(document).ready(function() {



  let skip = 1;
  let pageSize=4;
  let populateLatestArticleHTML = function(data)
  {
    moment.locale('fr');
    data['isNew']=true;
    data['publishDateFormatted']= moment(data.publishDate).format('LL')
    let tmpl = $.templates("#tmpl-article-card"); // Get compiled template
    let html = tmpl.render(data);      // Render template using data - as HTML string
    $("#latest-article").html(html);
  }

  let populateBlogHistoryHTML = function(data)
  {
    moment.locale('fr');




    for(let article of data)
    {
      article['isNew']=false;
      article['publishDateFormatted']= moment(article.publishDate).format('LL')


    }
    let tmpl = $.templates("#tmpl-article-list-item"); // Get compiled template
    let html = tmpl.render(data);      // Render template using data - as HTML string
  //  console.log('articleHtml: ',articleHtml);
  //  html=articleHtml;



    $("#article-list").html(html);

  }

  let populatePagination = function(res)
  {

    let totalPagination = Math.ceil((res.total-1)/pageSize);
    $('#page-selection').bootpag({
          total: totalPagination,
          wrapClass:'pagination justify-content-center',
          nextClass: 'next page-item  page-link',
          prevClass: 'prev page-item  page-link',
      }).on("page", function(event, /* page number here */ num){
        console.log('num: ',num);
        skip = (num-1)*pageSize+1;
        loadBlogHistory();
          // $("#content").html("Insert content"); // some ajax content loading...
      });

  }


  let loadBlogHistory = function()
  {


    let  query={
      $limit:pageSize,
      $skip:skip,
      $sort:{createdAt:-1},
      isPublic:true,
      isArchived:false,
      isFirstPage:true
    }

    let url = config.apiURL+'/blog-article';
    $.ajax({
      url: url,
      data:query
      //context: document.body
    }).done(function(res) {
      // $( this ).addClass( "done" );
      populateBlogHistoryHTML(res.data);
      populatePagination(res);
    })
    .fail(function() {
      alert( "error" );
    });
  }

  let loadLatestArticle = function()
  {


    let url = config.apiURL+'/blog-article';
    let  query={
      $limit:1,
      $sort:{createdAt:-1},
      isPublic:true,
      isArchived:false,
      isFirstPage:true
    }
    $.ajax({
      url: url,
      data:query
      //context: document.body
    }).done(function(res) {
      // $( this ).addClass( "done" );
      populateLatestArticleHTML(res.data[0]);
    })
    .fail(function() {
      alert( "error" );
    });
  }


  loadLatestArticle();
  loadBlogHistory();
});
