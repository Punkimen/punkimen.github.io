Webcam.set({
    width: 320,
    height: 240,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90,
    force_flash: false,
    flip_horiz: true,
    fps: 45
});
Webcam.attach('#my_camera');
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('my_camera').innerHTML = '<img src="' + data_uri + '"/>';
    });
}

