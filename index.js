(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyBIwZgqJcCFlbRNVlsepejl-xqXfax3BJg",
        authDomain: "room-automation-180ce.firebaseapp.com",
        databaseURL: "https://room-automation-180ce.firebaseio.com",
        projectId: "room-automation-180ce",
        storageBucket: "room-automation-180ce.appspot.com",
        messagingSenderId: "261964129529",
        appId: "1:261964129529:web:12f0671e002c6fbd856e28"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
})()
var db = firebase.database();

//global variables
var presence = db.ref('sala/presenca');
var temperature = db.ref('sala/temperatura');
var light = db.ref('sala/set_luminosidade');
var humidity = db.ref('sala/umidade');
var distance = db.ref('sala/distancia');
var door = db.ref('sala/porta-status');
var ac = db.ref('sala/ar-condicionado');
var luminosity = db.ref('sala/luminosidade');
var multi_media = db.ref('sala/set_multimidia');
var door_sensor = db.ref('sala/porta');


$(document).ready(function() {
    temperature.on('value', function(snapshot) {
        $("#temperature").val(+snapshot.val());
    });

    luminosity.on('value', function(snapshot) {
        $("#luminosity").val(+snapshot.val());
    });

    humidity.on('value', function(snapshot) {
        $("#humidity").val(+snapshot.val());
    });

    distance.on('value', function(snapshot) {
        $("#distance").val(+snapshot.val());
    });

    door.on('value', function(snapshot) {
        if (+snapshot.val() == 1) {
            $("#door").prop("checked", true);
        } else {
            $("#door").prop("checked", false);
        }
    });

    multi_media.on('value', function(snapshot) {
        if (+snapshot.val() == 1) {
            $("#multi-media").prop("checked", true);
        } else {
            $("#multi-media").prop("checked", false);
        }
    });

    light.on('value', function(snapshot) {
        if (+snapshot.val() == 1) {
            $("#light").prop("checked", true);
        } else {
            $("#light").prop("checked", false);
        }
    });

    ac.on('value', function(snapshot) {
        if (+snapshot.val() == 1) {
            $("#ac").prop("checked", true);
        } else {
            $("#ac").prop("checked", false);
        }
    });

    presence.on('value', function(snapshot) {
        if (+snapshot.val() >= 1) {
            $("#presence-sensor").prop("checked", true);
        } else {
            $("#presence-sensor").prop("checked", false);
        }
    });

    door_sensor.on('value', function(snapshot) {
        if (+snapshot.val() >= 1) {
            $("#door-sensor").prop("checked", true);
        } else {
            $("#door-sensor").prop("checked", false);
        }
    });

    $('#door-sensor').click(function(e) {
        e.preventDefault();
    });

    $('#presence-sensor').click(function(e) {
        e.preventDefault();
    });

    $('#light').click(function(e) {
        if ($('#light').prop('checked')) {
            light.set(0).then().catch();
        } else {
            light.set(1).then().catch();
        }
    })
});