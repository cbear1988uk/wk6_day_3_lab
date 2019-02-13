const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map((film) => {
    return film.title
  })
  return titles
};

Cinema.prototype.findFilm = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title
  })
  return result[0]
};

Cinema.prototype.filmByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre
  })
  return result;
};

Cinema.prototype.filmByYear = function (year) {
  const result = this.films.some((film) => {
    return film.year === year
  })
  return result;
};

Cinema.prototype.overLength = function (length) {
  const result = this.films.every((film) => {
    return film.length > length
  })
  return result;
};

Cinema.prototype.totalTime = function () {
  const totalTime = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return totalTime;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;
