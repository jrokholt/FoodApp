$(document).ready(function() {
    var curr_lat, curr_lng
    navigator.geolocation.getCurrentPosition(function(data) {
        curr_pos = data.coords
        curr_lat = curr_pos.latitude
        curr_lng = curr_pos.longitude
    })
    var buildings
    mapyst_campus(function(data) {
        buildings = data['buildings']
        $('pre').html(syntaxHighlight(data))
        var closest = ''
        var minDist = 1.0
        $.each(buildings, function(index, value) {
            var name = value.names[0] ,
                lat = value.location.lat / 1000000.0,
                lng = value.location.lng / 1000000.0
            var dist = distance([curr_lat, curr_lng], [lat, lng])
            if(dist < minDist) {
                minDist = dist
                closest = name
            }
        })
        $('#closest').append(closest + ': ' + minDist)
    })
})