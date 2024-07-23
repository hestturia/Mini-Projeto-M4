import { Movie } from "../models/movie.model.js";

const movieDatabase = [
      new Movie(1, "O Lorax: Em Busca da Trúfula Perdida", 2012, "Um jovem descobre a história de um ser que lutou para proteger seu mundo.", "Chris Renaud", ["Conservação ambiental", "Preservação da natureza", "Impacto do desmatamento"],
      ),
      new Movie(2, "Princesa Mononoke", 1997, "Um príncipe envolvido em uma guerra entre a natureza e a indústria humana conhece uma princesa da floresta.", "Hayao Miyazaki", ["Equilíbrio ecológico", "Conflito entre humanos e natureza", "Espíritos da floresta"],
      ),
      new Movie(3, "O Mundo dos Pequeninos", 2010, "Pequenas criaturas vivem escondidas no mundo dos seres humanos, onde buscam recursos para sobreviver.", "Hiromasa Yonebayashi", ["Convivência com humanos", "Aventura", "Solidariedade"],
      )
];

export default movieDatabase;