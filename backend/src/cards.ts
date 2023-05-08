import { arrayUnique, customSort, shuffleArrayInplace } from "./utils"

export const blackSets: any = {
  "Base Game (US)": {
    "mark": "US",
    "cards": [
     
    ]
  },
  "The Worst Pack (Canada)": {
    "mark": "CA",
    "cards": [
      {
        "text": "My fellow Americans: Before this decade is out, we <i>will</i> have [[BLANK]] on the moon!",
        "blanks": 1
      },
      {
        "text": "Introducing X-treme Baseball! It's like baseball, but with [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "IF you like [[BLANK]], YOU MIGHT BE A REDNECK.",
        "blanks": 1
      },
      {
        "text": "Today on <i>Maury</i> : \"Help! My son is [[BLANK]]!\"",
        "blanks": 1
      },
      {
        "text": "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "As the mom of five rambunctious boys, I'm no stranger to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "CBC presents \"[[BLANK]]: the Story of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Just once I'd like to hear you say \"Thanks, Mom. Thanks for [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "Bravo's new reality show feature eight washed-up celebrities living with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Air Canada guidelines now prohibit [[BLANK]] on airplanes.",
        "blanks": 1
      },
      {
        "text": "When I am Prime Minister of Canada, I will create the Ministry of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Coming to Broadway this season, [[BLANK]]; The Musical.",
        "blanks": 1
      },
      {
        "text": "This season at the Princess of Wales Theatre, Samuel Beckett's classic existential play: <i>Waiting for [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "Penalty! [[BLANK]]: that's 5 minutes in the box!",
        "blanks": 1
      },
      {
        "text": "Hey guys, welcome to Boston Pizza! Would you like to start the night off right with [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "I know when that hotline bling, that can only mean one thing: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dude, <i>do not</i> go in that washroom. There's [[BLANK]] in there.",
        "blanks": 1
      },
      {
        "text": "Brought to you by Molson Canadian, the Official Beer of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Next on TSN: The World Series of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "O Canada, we stand on guard for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dear Abby, I'm having some trouble [[BLANK]] and would like your advice.",
        "blanks": 1
      },
      {
        "text": "Skidamarink a dink a dink, skidamarink a doo, I love [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The new Chevy Tahoe. With the power and space to take [[BLANK]] everywhere you go.",
        "blanks": 1
      }
    ]
  },
  "Base Game (UK)": {
    "mark": "UK",
    "cards": [
 
    ]
 
    
  },
  

  "Holiday Pack 2013": {
    "mark": "❄2013",
    "cards": [
      "Eating an entire snowman."
    ]

  }
}

export function getShuffledStack(allSets: any, setsToUse: string[]) {
  let cards = []
  for (let set of setsToUse) {
    if (allSets[set])
      for (let card of allSets[set].cards)
        if (typeof card != 'string') {
          cards.push({ ...card, mark: allSets[set].mark });
        }
        else
          cards.push({ text: card, mark: allSets[set].mark });
  }
  shuffleArrayInplace(cards)
  return cards
}

const defaultSets = [
  "Blue Box Expansion",
  "Base Game (International)",
  "Box Expansion Pack",
  "Green Box Expansion",
  "Red Box Expansion"
]

let sortedLabels = customSort(arrayUnique(Object.keys(blackSets).concat(Object.keys(whiteSets))))
let clientDataPrep: any = {}
for (let set of sortedLabels) {
  clientDataPrep[set] = { white: whiteSets[set] ? whiteSets[set].cards.length : 0, black: blackSets[set] ? blackSets[set].cards.length : 0, checked: defaultSets.includes(set) }
}

export const clientStartGameData = clientDataPrep
