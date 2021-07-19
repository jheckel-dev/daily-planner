$('.saveBtn').click(function(){
    event.preventDefault();
    var formValue = $(this).siblings('.form-control').val();
    console.log('is this working');
    var listItem = $(this).parent().data('hour');
    localStorage.setItem(listItem, formValue);
});
// declaring day and time for moment
moment(Date);
$('#currentDay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// grabs current time from moment
var currentTime = moment();
// converts current time to nearest hour
currentTime = currentTime.startOf('hour');
// adds 9hrs to start of day to set start time of calendar to 9am
var beforeTime = moment().startOf('day').add(9, 'hours');
// setting time blocks
// 9am
var time1 = beforeTime.add(0, 'h');
time1 = time1.format('hh:mm A');
$('.block1').text(time1)
// 10am
var time2 = beforeTime.add(1, 'h');
time2 = time2.format('hh:mm A');
$('.block2').text(time2);