import movieDatabase from '../database/movie.database.js';


    // função para buscar todos os filmes:  
    export const getAllMovies = (req, res) => {
    res.json(movieDatabase);
  };

    // função para buscar filme por ID
    export const getMovieById = (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movieDatabase.find(movie => movie.id === id);
    
    
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  };


    // função para buscar filme por Diretor
    export const getMoviesByDirector = (req, res) => {
    console.log (req.params); const director = req.params.director.toLowerCase().replace("-", " ");
    const filteredMovies = movieDatabase.filter(movie => movie.director.toLowerCase().includes(director));
    
    if (filteredMovies.length > 0) {
      res.json(filteredMovies);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  };
