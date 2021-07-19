$('.saveBtn').click(function(){
    event.preventDefault();
    var formValue = $(this).siblings('.form-control').val();
    console.log('is this working');
    var listItem = $(this).parent().data('hour');
    localStorage.setItem(listItem, formValue);
});