$(document).ready(function(){
    init();

    function init() {
        var str = '';
        var img = ['vlisco', 'airport', 'tvplay', 'audcity', 'ariafoods', 'xylem']
        var title = ['Vlisco', 'Copenhagen Airports', 'TV4 Play', 'Audi City', 'Arla Foods', 'Xylem'];
        var para = ['E-commerce with a colorful story', 'Knowing your customer in the Digital Age',
                    'From TV channel to leading content provider',
                    'How to purchase a real car in a virtual store', 'Dairy production in Big Data', 
                    'Helping the world\'s largest water technology provider solve the global water crisis through Business Transformation'];

        for (var i = 0; i < img.length; i++) {
            str += '<div class="col-sm-4">';
            str += '<div class="podcontainer">';
            str += '    <div style="background-image:url(img/' + img[i] + '.jpg)" class="threeColumnImgMask leftImage">';
            str += '    <img alt="' + title[i] + '" src="img/' + img[i] + '.jpg"></div>';
            str += '    <h3>' + title[i] + '</h3>';
            str += '    <p>' + para[i] + '</p>';
            str += '</div>';
            str += '</div>';
        }
    
        $('.container-fluid .row').append(str);
    }
    
    $(".clicksidebar").click(function(){
        var display = $('#sidebar').css('display');
        if (display === 'block') {
            $('#sidebar').css('display', 'none');
            $('#content').css('margin-right', '0');
            $(this).children('span').attr('class', 'glyphicon glyphicon-minus');
        } else {
            $('#sidebar').css('display', 'block');
            $('#content').css('margin-right', '30%');
            $(this).children('span').attr('class', 'glyphicon glyphicon-plus');
        }

        $('#bs-example-navbar-collapse-1').css('display', 'none');
        $('#bs-example-navbar-collapse-1').removeClass('in');
    });

    // Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4
    $(".navbar-toggle").click(function(){
        $('#bs-example-navbar-collapse-1').css('display', 'block');
    });

    $(".about").click(function(){
        $('#bs-example-navbar-collapse-1').css('display', 'none');
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('.container-fluid > .row').hide();
        $('.divabout').show();
        $('.divblog').hide();
    });

    $(".blog").click(function(){
        $('#bs-example-navbar-collapse-1').css('display', 'none');
        $('#bs-example-navbar-collapse-1').removeClass('in');
        $('.container-fluid > .row').hide();
        $('.divabout').hide();
        $('.divblog').show();
    });
});
