$(function() {
  $('.open').click(function() {
    $('.form').css('display', 'block');
  });
  
  $('.form__btn').click(function(event) {
    event.preventDefault();
    const name = $('.form__name').val();
    const email = $('.form__email').val();
    const phone = $('.form__phone').val();

    if (name.length > 2 && email.length > 2 && phone.length > 2) {
      $('.form').css('display', 'none');
      $('body').append('<h1>Form submitted successfully</h1>')
    } else {
      $('.form__error').css('visibility', 'visible');
    }
  });
});