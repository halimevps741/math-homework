function getRandomInteger(min, max) {
    min = Math.ceil(Math.random() * (max - Math.floor(Math.random()) * (max - 0)));
    return min;
}
