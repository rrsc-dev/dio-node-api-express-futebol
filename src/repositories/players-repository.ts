import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "RW",
    "statistics": {
      "overall": 91,
      "pace": 85,
      "shooting": 92,
      "passing": 91,
      "dribbling": 95,
      "defending": 38,
      "physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portugal",
    "position": "ST",
    "statistics": {
      "overall": 90,
      "pace": 82,
      "shooting": 93,
      "passing": 82,
      "dribbling": 88,
      "defending": 35,
      "physical": 77
    }
  },
  {
    "id": 3,
    "name": "Kylian Mbappé",
    "club": "PSG",
    "nationality": "France",
    "position": "ST",
    "statistics": {
      "overall": 91,
      "pace": 97,
      "shooting": 90,
      "passing": 80,
      "dribbling": 92,
      "defending": 36,
      "physical": 78
    }
  },
  {
    "id": 4,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "CM",
    "statistics": {
      "overall": 91,
      "pace": 76,
      "shooting": 88,
      "passing": 94,
      "dribbling": 87,
      "defending": 64,
      "physical": 74
    }
  },
  {
    "id": 5,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "ST",
    "statistics": {
      "overall": 91,
      "pace": 89,
      "shooting": 94,
      "passing": 70,
      "dribbling": 80,
      "defending": 45,
      "physical": 88
    }
  },
  {
    "id": 6,
    "name": "Neymar Jr",
    "club": "Al Hilal",
    "nationality": "Brazil",
    "position": "LW",
    "statistics": {
      "overall": 89,
      "pace": 87,
      "shooting": 85,
      "passing": 86,
      "dribbling": 93,
      "defending": 34,
      "physical": 60
    }
  },
  {
    "id": 7,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "LW",
    "statistics": {
      "overall": 89,
      "pace": 95,
      "shooting": 84,
      "passing": 81,
      "dribbling": 90,
      "defending": 29,
      "physical": 68
    }
  },
  {
    "id": 8,
    "name": "Luka Modrić",
    "club": "Real Madrid",
    "nationality": "Croatia",
    "position": "CM",
    "statistics": {
      "overall": 88,
      "pace": 74,
      "shooting": 78,
      "passing": 90,
      "dribbling": 89,
      "defending": 72,
      "physical": 65
    }
  },
  {
    "id": 9,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egypt",
    "position": "RW",
    "statistics": {
      "overall": 89,
      "pace": 93,
      "shooting": 87,
      "passing": 81,
      "dribbling": 90,
      "defending": 45,
      "physical": 75
    }
  },
  {
    "id": 10,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "England",
    "position": "ST",
    "statistics": {
      "overall": 90,
      "pace": 75,
      "shooting": 93,
      "passing": 86,
      "dribbling": 82,
      "defending": 49,
      "physical": 82
    }
  },

  {
    "id": 11,
    "name": "Bruno Fernandes",
    "club": "Manchester United",
    "nationality": "Portugal",
    "position": "CAM",
    "statistics": {
      "overall": 88,
      "pace": 77,
      "shooting": 85,
      "passing": 90,
      "dribbling": 85,
      "defending": 68,
      "physical": 74
    }
  },
  {
    "id": 12,
    "name": "Pedri",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 86,
      "pace": 79,
      "shooting": 74,
      "passing": 88,
      "dribbling": 89,
      "defending": 68,
      "physical": 70
    }
  },
  {
    "id": 13,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "CM",
    "statistics": {
      "overall": 88,
      "pace": 82,
      "shooting": 84,
      "passing": 83,
      "dribbling": 87,
      "defending": 78,
      "physical": 85
    }
  },
  {
    "id": 14,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "ST",
    "statistics": {
      "overall": 89,
      "pace": 78,
      "shooting": 92,
      "passing": 79,
      "dribbling": 85,
      "defending": 44,
      "physical": 82
    }
  },
  {
    "id": 15,
    "name": "Bernardo Silva",
    "club": "Manchester City",
    "nationality": "Portugal",
    "position": "CAM",
    "statistics": {
      "overall": 88,
      "pace": 80,
      "shooting": 81,
      "passing": 88,
      "dribbling": 92,
      "defending": 65,
      "physical": 70
    }
  },

  {
    "id": 16,
    "name": "Rodri",
    "club": "Manchester City",
    "nationality": "Spain",
    "position": "CDM",
    "statistics": {
      "overall": 89,
      "pace": 70,
      "shooting": 80,
      "passing": 86,
      "dribbling": 82,
      "defending": 86,
      "physical": 84
    }
  },
  {
    "id": 17,
    "name": "Casemiro",
    "club": "Manchester United",
    "nationality": "Brazil",
    "position": "CDM",
    "statistics": {
      "overall": 87,
      "pace": 63,
      "shooting": 74,
      "passing": 78,
      "dribbling": 72,
      "defending": 88,
      "physical": 86
    }
  },
  {
    "id": 18,
    "name": "Son Heung-min",
    "club": "Tottenham",
    "nationality": "South Korea",
    "position": "LW",
    "statistics": {
      "overall": 88,
      "pace": 90,
      "shooting": 89,
      "passing": 82,
      "dribbling": 86,
      "defending": 42,
      "physical": 73
    }
  },
  {
    "id": 19,
    "name": "Bukayo Saka",
    "club": "Arsenal",
    "nationality": "England",
    "position": "RW",
    "statistics": {
      "overall": 87,
      "pace": 88,
      "shooting": 82,
      "passing": 83,
      "dribbling": 87,
      "defending": 58,
      "physical": 72
    }
  },
  {
    "id": 20,
    "name": "Rafael Leão",
    "club": "AC Milan",
    "nationality": "Portugal",
    "position": "LW",
    "statistics": {
      "overall": 86,
      "pace": 91,
      "shooting": 81,
      "passing": 78,
      "dribbling": 88,
      "defending": 30,
      "physical": 75
    }
  },

  {
    "id": 21,
    "name": "Antoine Griezmann",
    "club": "Atlético Madrid",
    "nationality": "France",
    "position": "CF",
    "statistics": {
      "overall": 88,
      "pace": 80,
      "shooting": 86,
      "passing": 86,
      "dribbling": 85,
      "defending": 60,
      "physical": 72
    }
  },
  {
    "id": 22,
    "name": "Joshua Kimmich",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "CDM",
    "statistics": {
      "overall": 88,
      "pace": 70,
      "shooting": 75,
      "passing": 89,
      "dribbling": 84,
      "defending": 82,
      "physical": 78
    }
  },
  {
    "id": 23,
    "name": "Achraf Hakimi",
    "club": "PSG",
    "nationality": "Morocco",
    "position": "RB",
    "statistics": {
      "overall": 85,
      "pace": 93,
      "shooting": 72,
      "passing": 80,
      "dribbling": 83,
      "defending": 78,
      "physical": 80
    }
  },
  {
    "id": 24,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "CB",
    "statistics": {
      "overall": 89,
      "pace": 78,
      "shooting": 60,
      "passing": 75,
      "dribbling": 70,
      "defending": 91,
      "physical": 90
    }
  },
  {
    "id": 25,
    "name": "Rúben Dias",
    "club": "Manchester City",
    "nationality": "Portugal",
    "position": "CB",
    "statistics": {
      "overall": 88,
      "pace": 72,
      "shooting": 55,
      "passing": 74,
      "dribbling": 68,
      "defending": 90,
      "physical": 88
    }
  },

  {
    "id": 26,
    "name": "Marquinhos",
    "club": "PSG",
    "nationality": "Brazil",
    "position": "CB",
    "statistics": {
      "overall": 87,
      "pace": 77,
      "shooting": 58,
      "passing": 76,
      "dribbling": 70,
      "defending": 88,
      "physical": 82
    }
  },
  {
    "id": 27,
    "name": "Frenkie de Jong",
    "club": "Barcelona",
    "nationality": "Netherlands",
    "position": "CM",
    "statistics": {
      "overall": 87,
      "pace": 81,
      "shooting": 73,
      "passing": 87,
      "dribbling": 88,
      "defending": 76,
      "physical": 77
    }
  },
  {
    "id": 28,
    "name": "Lautaro Martínez",
    "club": "Inter",
    "nationality": "Argentina",
    "position": "ST",
    "statistics": {
      "overall": 86,
      "pace": 83,
      "shooting": 86,
      "passing": 75,
      "dribbling": 84,
      "defending": 48,
      "physical": 80
    }
  },
  {
    "id": 29,
    "name": "Victor Osimhen",
    "club": "Napoli",
    "nationality": "Nigeria",
    "position": "ST",
    "statistics": {
      "overall": 87,
      "pace": 89,
      "shooting": 87,
      "passing": 70,
      "dribbling": 78,
      "defending": 45,
      "physical": 86
    }
  },
  {
    "id": 30,
    "name": "Martin Ødegaard",
    "club": "Arsenal",
    "nationality": "Norway",
    "position": "CAM",
    "statistics": {
      "overall": 88,
      "pace": 78,
      "shooting": 84,
      "passing": 89,
      "dribbling": 88,
      "defending": 60,
      "physical": 70
    }
  },

  {
    "id": 31,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazil",
    "position": "GK",
    "statistics": {
      "overall": 89,
      "pace": 60,
      "shooting": 30,
      "passing": 78,
      "dribbling": 50,
      "defending": 90,
      "physical": 85
    }
  },
  {
    "id": 32,
    "name": "Ederson",
    "club": "Manchester City",
    "nationality": "Brazil",
    "position": "GK",
    "statistics": {
      "overall": 88,
      "pace": 62,
      "shooting": 28,
      "passing": 85,
      "dribbling": 55,
      "defending": 88,
      "physical": 82
    }
  },
  {
    "id": 33,
    "name": "Ter Stegen",
    "club": "Barcelona",
    "nationality": "Germany",
    "position": "GK",
    "statistics": {
      "overall": 88,
      "pace": 58,
      "shooting": 25,
      "passing": 82,
      "dribbling": 52,
      "defending": 87,
      "physical": 80
    }
  },
  {
    "id": 34,
    "name": "Theo Hernández",
    "club": "AC Milan",
    "nationality": "France",
    "position": "LB",
    "statistics": {
      "overall": 85,
      "pace": 92,
      "shooting": 75,
      "passing": 78,
      "dribbling": 84,
      "defending": 76,
      "physical": 82
    }
  },
  {
    "id": 35,
    "name": "João Cancelo",
    "club": "Barcelona",
    "nationality": "Portugal",
    "position": "RB",
    "statistics": {
      "overall": 86,
      "pace": 85,
      "shooting": 74,
      "passing": 86,
      "dribbling": 87,
      "defending": 78,
      "physical": 72
    }
  },

  {
    "id": 36,
    "name": "Declan Rice",
    "club": "Arsenal",
    "nationality": "England",
    "position": "CDM",
    "statistics": {
      "overall": 87,
      "pace": 75,
      "shooting": 72,
      "passing": 83,
      "dribbling": 80,
      "defending": 85,
      "physical": 86
    }
  },
  {
    "id": 37,
    "name": "Nicolo Barella",
    "club": "Inter",
    "nationality": "Italy",
    "position": "CM",
    "statistics": {
      "overall": 86,
      "pace": 80,
      "shooting": 78,
      "passing": 84,
      "dribbling": 85,
      "defending": 77,
      "physical": 78
    }
  },
  {
    "id": 38,
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "nationality": "Uruguay",
    "position": "CM",
    "statistics": {
      "overall": 88,
      "pace": 88,
      "shooting": 82,
      "passing": 84,
      "dribbling": 85,
      "defending": 80,
      "physical": 86
    }
  },
  {
    "id": 39,
    "name": "Paulo Dybala",
    "club": "Roma",
    "nationality": "Argentina",
    "position": "CAM",
    "statistics": {
      "overall": 86,
      "pace": 80,
      "shooting": 86,
      "passing": 84,
      "dribbling": 90,
      "defending": 40,
      "physical": 65
    }
  },
  {
    "id": 40,
    "name": "Alexis Mac Allister",
    "club": "Liverpool",
    "nationality": "Argentina",
    "position": "CM",
    "statistics": {
      "overall": 85,
      "pace": 76,
      "shooting": 80,
      "passing": 85,
      "dribbling": 84,
      "defending": 75,
      "physical": 74
    }
  },

  {
    "id": 41,
    "name": "Ilkay Gündogan",
    "club": "Barcelona",
    "nationality": "Germany",
    "position": "CM",
    "statistics": {
      "overall": 86,
      "pace": 72,
      "shooting": 83,
      "passing": 88,
      "dribbling": 85,
      "defending": 70,
      "physical": 73
    }
  },
  {
    "id": 42,
    "name": "Christian Pulisic",
    "club": "AC Milan",
    "nationality": "USA",
    "position": "RW",
    "statistics": {
      "overall": 84,
      "pace": 88,
      "shooting": 80,
      "passing": 78,
      "dribbling": 85,
      "defending": 45,
      "physical": 68
    }
  },
  {
    "id": 43,
    "name": "Sergej Milinković-Savić",
    "club": "Al Hilal",
    "nationality": "Serbia",
    "position": "CM",
    "statistics": {
      "overall": 86,
      "pace": 75,
      "shooting": 84,
      "passing": 83,
      "dribbling": 82,
      "defending": 78,
      "physical": 88
    }
  },
  {
    "id": 44,
    "name": "Hakim Ziyech",
    "club": "Galatasaray",
    "nationality": "Morocco",
    "position": "RW",
    "statistics": {
      "overall": 83,
      "pace": 80,
      "shooting": 82,
      "passing": 86,
      "dribbling": 88,
      "defending": 50,
      "physical": 65
    }
  },
  {
    "id": 45,
    "name": "Wilfried Zaha",
    "club": "Galatasaray",
    "nationality": "Ivory Coast",
    "position": "LW",
    "statistics": {
      "overall": 84,
      "pace": 89,
      "shooting": 82,
      "passing": 76,
      "dribbling": 87,
      "defending": 42,
      "physical": 76
    }
  },

  {
    "id": 46,
    "name": "James Maddison",
    "club": "Tottenham",
    "nationality": "England",
    "position": "CAM",
    "statistics": {
      "overall": 85,
      "pace": 78,
      "shooting": 83,
      "passing": 88,
      "dribbling": 86,
      "defending": 55,
      "physical": 68
    }
  },
  {
    "id": 47,
    "name": "Kingsley Coman",
    "club": "Bayern Munich",
    "nationality": "France",
    "position": "LW",
    "statistics": {
      "overall": 84,
      "pace": 92,
      "shooting": 78,
      "passing": 80,
      "dribbling": 88,
      "defending": 40,
      "physical": 70
    }
  },
  {
    "id": 48,
    "name": "Matthijs de Ligt",
    "club": "Bayern Munich",
    "nationality": "Netherlands",
    "position": "CB",
    "statistics": {
      "overall": 86,
      "pace": 75,
      "shooting": 60,
      "passing": 74,
      "dribbling": 68,
      "defending": 88,
      "physical": 87
    }
  },
  {
    "id": 49,
    "name": "Gerard Moreno",
    "club": "Villarreal",
    "nationality": "Spain",
    "position": "ST",
    "statistics": {
      "overall": 84,
      "pace": 78,
      "shooting": 85,
      "passing": 80,
      "dribbling": 82,
      "defending": 50,
      "physical": 75
    }
  },
  {
    "id": 50,
    "name": "Ángel Di María",
    "club": "Benfica",
    "nationality": "Argentina",
    "position": "RW",
    "statistics": {
      "overall": 85,
      "pace": 83,
      "shooting": 84,
      "passing": 87,
      "dribbling": 88,
      "defending": 45,
      "physical": 68
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id )
}