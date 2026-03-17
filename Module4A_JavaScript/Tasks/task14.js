const objects = {
    name: 'Books',
    description: 'A collection of the acts of God in the Old Testament',
    numberOfPages: 103,
    Authour: 'Chinyere Nwamaka Newton-Ihoeghian',
    reading: true,
    togglereading: function() {
        if (objects.reading === true) {
            objects.reading = false;
        } else {
            objects.reading = true;
        }
}}
objects.togglereading();
console.log(objects.reading);
