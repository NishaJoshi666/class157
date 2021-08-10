AFRAME.registerComponent('tour', {
    init: function(){
        this.placesContainer = this.el;
        this.createCards()
    },
    createCards: function(){
        console.log('hello');
        const thumbnailsref = [
            {
                id: 'Taj-Mahal',
                title: 'Taj-Mahal',
                url: './assets/thumbnails/taj_mahal.png',
            },
            {
                id: 'Budapest',
                title: 'Budapest',
                url: './assets/thumbnails/budapest.jpg',
            },
            {
                id: 'Eiffel-Tower',
                title: 'Eiffel-Tower',
                url: './assets/thumbnails/eiffel_tower.jpg',
            },
            {
                id: 'New-york-city',
                title: 'New-York-City',
                url: './assets/thumbnails/new_york_city.png',
            }
        ]
        let previousXposition = -60
        for(var item of thumbnailsref){
            const posX = previousXposition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {x: posX, y: posY, z: posZ}
            previousXposition = posX
        }
    }
})