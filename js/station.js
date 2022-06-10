function selectStation(station) {
    // Change Station Button
    let stationList = document.querySelectorAll('.station-button');
    stationList.forEach(station => {
        if (station.classList.contains('selected-station')) {
            station.classList.remove('selected-station');
        }
    });
    document.querySelector('#' + station).classList.add('selected-station');
    // Change Station Showcase
    document.querySelector('.selected-showcase').classList.remove('selected-showcase');
    document.querySelector('#' + station + '-showcase').classList.add('selected-showcase');
    let stationImages = document.querySelectorAll('.' + station + '-image');
    clearInterval(myIntervals[2])
    myIntervals[2] = setInterval(() => {
        slideImage(stationImages, true);
        console.log('station changed');
    }, 3000);
    // Change Station Infor
    document.querySelector('.selected-infor').classList.remove('selected-infor');
    document.querySelector('#' + station + '-infor').classList.add('selected-infor');
}