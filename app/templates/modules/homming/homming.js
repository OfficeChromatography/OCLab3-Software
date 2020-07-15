$('#hommingModal').on('shown.bs.modal', function (e) {
    gcode = 'G28\nG91'
    sendToMachine(gcode)
    zero_position = [0,0];
})
$('#hommingModal').on('hidden.bs.modal', function (e) {
    gcode = 'G90'
    sendToMachine(gcode)
    zero_position = [0,0];
})

$('#setHome').on('click',function(e){
  data={'setzero':zero_position.toString()}
  console.log(data);
  $.ajax({
    method: 'POST',
    url:    window.location.origin+'/send/',
    data:   data,
    success: setHommingEndpointSucess,
    error: setHommingEndpointError,
  })
  function setHommingEndpointSucess(data, textStatus, jqXHR){}
  function setHommingEndpointError(jqXHR, textStatus, errorThrown){}
})

$('#getHome').on('click',function(e){
  data={'getzero':''}
  $.ajax({
    method: 'GET',
    url:    window.location.origin + '/setuphomming/',
    data:   data,
  })
})
