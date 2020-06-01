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
var door = db.ref('sala/set_porta');
var ac = db.ref('sala/set_ar');
var luminosity = db.ref('sala/luminosidade');
var multi_media = db.ref('sala/set_multimidia');
var door_sensor = db.ref('sala/porta');


$(document).ready(function() {
    temperature.on('value', function(snapshot) {
        $("#temperature").html(+snapshot.val());
    });

    luminosity.on('value', function(snapshot) {
        $("#luminosity").html(+snapshot.val());
    });

    humidity.on('value', function(snapshot) {
        $("#humidity").html(+snapshot.val());
    });

    distance.on('value', function(snapshot) {
        $("#distance").html(+snapshot.val());
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

    $('#light-click').click(function(e) {
        e.preventDefault();
        if ($('#light').prop('checked')) {
            light.set(0).then().catch();
        } else {
            light.set(1).then().catch();
        }
    })

    $('#ac-click').click(function(e) {
        e.preventDefault();
        if ($('#ac').prop('checked')) {
            ac.set(0).then().catch();
        } else {
            ac.set(1).then().catch();
        }
    })

    $('#multi-media-click').click(function(e) {
        e.preventDefault();
        if ($('#multi-media').prop('checked')) {
            multi_media.set(0).then().catch();
        } else {
            multi_media.set(1).then().catch();
        }
    })

    $('#door-click').click(function(e) {
        e.preventDefault();
        if ($('#door').prop('checked')) {
            door.set(0).then().catch();
        } else {
            door.set(1).then().catch();
        }
    })
});