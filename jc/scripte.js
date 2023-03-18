
var clipboard = new ClipboardJS('.js-copy-btn'); 

$('.js-copy-text').each(function(i, item) {
   var btn = $('<button class="js-copy-btn" data-clipboard-target=".cb-target-'+ i +'">Копировать</button>');
   $(item).addClass('cb-target-' + i);
   $(item).after(btn);
});
//$('.js-copy-btn').each(function(i, item) {
	//$(item).attr('data-clipboard-target','.cb-target-' + i);
//});- это когда под текстом прописывается кнопка


clipboard.on('success', function(e) {
   $('.js-copy-btn.is-copy').removeClass('is-copy').text('Копировать');
   
   $(e.trigger).text('Скопировано');
   $(e.trigger).addClass('is-copy');
});



