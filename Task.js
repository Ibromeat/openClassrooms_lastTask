class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ======================

const generateComponent = (show) => {
  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + ' seasons';
  const episodesText = show.episodesPerSeason + ' episodes per season';
  return {
    titleText,
    seasonsText,
    episodesText
  };
}

const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);


const showComponents = [tauComponent, meldrumComponent, claraComponent];

// ======================
// Modify the code above

