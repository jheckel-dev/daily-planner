// save button to save input items locally
$('.saveBtn').click(function(){
    event.preventDefault();
    var formValue = $(this).siblings('.form-control').val();
    console.log('It Works.');
    var listItem = $(this).parent().data('hour');
    localStorage.setItem(listItem, formValue);
});
// MMMM do YYYY, h:mm a
// declaring day and time for moment
moment('#currentDay').format('MMMM Do YYYY, h:mm:ss a');
// $('#currentDay').text(moment().format('dddd MMMM do'));
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
// 11am
var time3 = beforeTime.add(1, 'h');
time3 = time3.format('hh:mm A');
$('.block3').text(time3);
// 12pm
var time4 = beforeTime.add(1, 'h');
time4 = time4.format('hh:mm A');
$('.block4').text(time4);
// 1pm
var time5 = beforeTime.add(1, 'h');
time5 = time5.format('hh:mm A');
$('.block5').text(time5);
// 2pm
var time6 = beforeTime.add(1, 'h');
time6 = time6.format('hh:mm A');
$('.block6').text(time6);
// 3pm
var time7 = beforeTime.add(1, 'h');
time7 = time7.format('hh:mm A');
$('.block7').text(time7);
// 4pm
var time8 = beforeTime.add(1, 'h');
time8 = time8.format('hh:mm A');
$('.block8').text(time8);
// 5pm
var time9 = beforeTime.add(1, 'h');
time9 = time9.format('hh:mm A');
$('.block9').text(time9);
