$(function(){
    $('#bannerImg .images').click(function(){
        var index =$(this).text();
        $('.img-box').animate({'margin-left':-670*(index-1)},200)
    })
    $('#rankTitle li').mouseenter(function(){
        var index = $(this).index();
        $('.rank-content').animate({'margin-left':-300*index},0);
    })
    $('#rankTitle li').mouseenter(function () {
        var index = $(this).index();
        $('.rank-title').removeClass('active');
        $('.rank-title').eq(index).addClass('active');
        //$('.rank-title').eq(index-1).css('background-color','#ffffff');
        //$('.rank-title a').eq(index-1 ).css('color','#666666');
        //$('.rank-title').eq( index-2).css('background-color','#ffffff');
        //$('.rank-title a').eq(index-2).css('color','#666666');
    })
})

