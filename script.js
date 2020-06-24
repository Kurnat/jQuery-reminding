$(document).ready(function () {

    /*
    // $(selector).action()
    // $('*')
    // $(this)
    // $('p')
    // $('.text')
    // $('#box')

    // методи get
    let boxHtml = $('#box').html()
    let boxContent = $('#box').text()
    let inputValue = $('input[type="text"]').val();

    // методи set
    $('#box').html('<h1>new box</h1>')
    $('#box').text('new text')
    $('input[type="text"]').val('new input value')


    // Додавання -----------

    // методи додавання 
    $('#box').append('<p>append new element</p>')
    $('#box').prepend('<p>prepend</p>')
    $('#box').before('<p>before</p>')
    $('#box').after('<p>after</p>')
    // добдавання до всіх елементів
    $('.text').prepend('<p>prepend new element</p>')
    $('#box>h1').prepend('<p>prepend new element</p>')


    // Видалення ------------

    // видалення елементу 
    $('p.text, #text').remove()
    // видалення наповнення
    $('p.text, #text').empty()


    // Event (click)------------------

    // події без приставки on
    $('#get').click(function () {
        // задавання стилів
        $('#box').css('color', 'red')
        $('#box').css({
            color: 'red',
            backgroundColor: 'bisque',
            'background-color': 'bisque'
        })
    })


    // Класи -------------

    $('#add').click(() => {
        // додавання класу
        $('.block').addClass('red border') // додавання 2 класів зразу
    })

    $('#remove').click(() => {
        // видалення класу
        $('.block').removeClass('red border') // видалення 2 класів зразу
    })

    $('#toogle').click(() => {
        // додавання і видалення класу
        $('.block').toggleClass('red border') // додавання і видалення 2 класів зразу
    })


    // Атрибути ----------------

    $('#btn').click(function () {
        // задати атрибут
        $('.block').attr('title', 'set Arrt title')
        // дістати атрибут
        let title = $('.block').attr('title')
        // видалити атрибут
        $('block').removeAttr('title')
    })



    // Анімація JQuery ----------------

    $('#add').click(() => {
        // показати елемент
        $('.block').show() // додавання display block
        // анімація
        $('.block').fadeIn() // додавання display block з анімацією
        $('.block').fadeIn(700, function () {
            $(this).addClass('border') // <-- this на кого повішаний клік
        }) // додавання display block з анімацією opasiti - (duration, collback)
        $('.block').slideDown() // додавання display block з вертикальною анімацією

        $('.block').show().animate({
            width: '+=400'
        }, 500).animate({
            width: '-=100',
            backgroundColor: '#00f'
        }, 500, function () {
            $(this).html('<h2>Hello animation</h2>')
        })
    })

    $('#remove').click(() => {
        // приховати елемент
        $('.block').hide() // приховати display none
        $('.block').fadeOut(700) // видалення display block з анімацією opasiti
        $('.block').slideUp() // видалення display block з вертикальною анімацією

    })

    $('#toogle').click(() => {
        // Відображення і приховати елемент
        $('.block').toggle()
        $('.block').fadeToggle(700) // видалення display block з анімацією opasiti
        $('.block').slideToggle(700) // видалення display block з анімацією по вертикалі
    })


    // Box model - (розміри, padding, margin, border) ------------------
    let w = $('.block').width() // ширина
    let h = $('.block').height() // висота
    let innerWidth = $('.block').innerWidth() // ширина + padding
    let innerHeight = $('.block').innerHeight() // висота + padding
    let outerWidth = $('.block').outerWidth() // ширина + padding + border
    let outerHeight = $('.block').outerHeight() // висота + padding + border
    let outerWidthM = $('.block').outerWidth(true) // ширина + padding + border + margin
    let outerHeightM = $('.block').outerHeight(true) // висота + padding + border + margin

    // ДОСТУП ДО ЕЛЕМЕНТУ
    //  ==================================================================

    $('li:first').css({ // перший елемент
        color: 'red'
    })

    $('li:last').css({ // останній елемент
        color: 'blue'
    })

    $('li:odd').css({ // парні елементи
        color: 'red'
    })

    $('li:even').css({ // не парні елементи
        color: 'blue'
    })

    $('li:gt(2)').css({ // стилізує більше за другий індекс (gtate then)
        color: 'green'
    })

    $('li:lt(2)').css({ // стилізує менше за другий індекс (lase then)
        color: 'green'
    })

    $('li:eq(2)').css({ // стилізує елемент за індексом (equal)
        color: 'green'
    })
    // або
    $('li').eq(2).css({
        color: 'green'
    })

    $('li:contains("item 4")').css({ // доступ по тексту
        backgroundColor: '#000'
    })

    $('li:empty').css({ // застилізує якшо пустий
        backgroundColor: '#000'
    })

    $(':header').css({ //  доступ до всіх заголовків h2,h5....
        backgroundColor: 'yellow'
    })

    $('li:has(h3)').css({ //  який має в собі елемент h3.... (не на першому рівні)
        backgroundColor: 'yellow'
    })

    $('li').slice(2, 5).css({ // дістає елементи з і по
        border: '1px solid red'
    })

    $('p').wrap('<div class="border"></div>') // обгортає даний елемент в те шо ми йому даємо (обгортка)
    $('p').wrapInner('<b></b>') // обгортає внутрішній контент елементe в тег b

    $('p').wrapAll('<b></b>').remove() // обгортає всі елементи в dom (збирає)

    $('p').replaceWith('<h2>new</h2>') // замінити всі р на h2 з текстом new

*/
/*$('input').each((idx, elem)=>{
    
    $(elem).change(()=>{
        let value = $(elem).val()
        console.log(idx,value);
        $('div').eq(idx).animate({
            with: value * 8 + 'px'
        },2000)
        $('div+span').val(val)
    })
    
})*/

// $(window).trigger() // запуск функції по замовчуванню

$(window).on('resize scroll', function(){
    $('.resize').text(
        `Width:${window.innerWidth}, Height: ${window.innerHeight}`
    )
    $('.scroll').text(
        `ScrollY: ${window.scrollY},
        ScrollTop: ${$(window).scrollTop()}`
    )
})

// $(window).one({  --- спрацьовує один раз
//     resize: function(){
//         $('.resize').text(
//             `Width:${window.innerWidth}, Height: ${window.innerHeight}`
//         )
//     },
//     scroll: function(){
//         $('.scroll').text(
//             `ScrollY: ${window.scrollY},
//             ScrollTop: ${$(window).scrollTop()}`
//         )
//     }
// })

// $(window).off() --відключить подію

$(window).on({
    resize: function(){
        $('.resize').text(
            `Width:${window.innerWidth}, Height: ${window.innerHeight}`
        )
    },
    scroll: function(){
        $('.scroll').text(
            `ScrollY: ${window.scrollY},
            ScrollTop: ${$(window).scrollTop()}
            pageY: ${$('.arrow').pageY}`
        )
    }
})

$(window).scroll(function(){
    if (window.scrollY>400){
        $('.arrow').fadeIn()
    } else {
        $('.arrow').fadeOut()
    }
})
$('.arrow').click(()=>{
    $('html').animate({
        scrollTop: 0
    },1500)
})

})




// ###########################################################

jQuery(function(){

    // tag, class, id
    $('h1').data('id') // <-- date-id="some-id"

    $('form').show(1000).delay(5000).hide(1000); // <-- reducing the size
    $('form').fideIn(1000).delay(5000).fideOut(1000); // <-- opasity

    $('h1').hover(function(){
        $(this).remove()
    })

    $('ul li:nth-child(2)').after('<li>hrllo</li>') // <-- додати після 2-ї li

    $('form').wrap('<div class="red"></div>') // <-- додає обгортку
    $('form').unwrap() // <-- видаляє обгортку


    // $(window).scrollTop()   << позиція вікна
    // $('section[class="features"]').offset().top  << позиція елемента

})