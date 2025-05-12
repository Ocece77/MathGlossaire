import {exercices} from "@/app/data/exercices"
import {formules} from "@/app/data/formules"
const coursSixieme = [
  {
    id: "addition",
    title: "Addition",
    level: "sixieme",
    formula: formules.AdditionFormule(),
    explanation: "Ceci est une addition",
    video: '',
    exercices: exercices.Addition()
  },
  {
    id: "soustraction",
    title: "Soustraction",
    level: "sixieme",
    formula: formules.AdditionFormule(),
    explanation: "Ceci est une soustraction",
    video: '',
    exercices: exercices.Addition()
  }
];

const coursSeconde = [
  {
    id: "developpement",
    title: "Développement d'expressions",
    level: "seconde",
    formula: formules.AdditionFormule(),
    explanation: "Ceci est la distributivité simple...",
    video: '',
    exercices: exercices.Addition()
  },
  {
    id: "factorisation",
    title: "Factorisation",
    level: "seconde",
    formula: formules.AdditionFormule(),
    explanation: "La factorisation consiste à transformer une somme ou une différence en un produit, ce qui permet de simplifier les expressions et de résoudre des équations.",
    video: "",
    exercices: exercices.Addition()
  },  
  {
    id: "regle-de-parentheses",
    title: "Règle des parenthèses",
    level: "seconde",
    formula: formules.AdditionFormule(),
    explanation: "Les parenthèses modifient l’ordre des opérations. Lorsque l’on supprime des parenthèses précédées d’un signe moins, on change les signes à l’intérieur.",
    video: "",
    exercices: exercices.Addition()
  },
  {
    id: "pythagore",
    title: "Théorème de Pythagore",
    level: "seconde",
    formula: formules.AdditionFormule(),
    explanation: "Dans un triangle rectangle...",
    video: '',
    exercices: exercices.Addition()
  }
];


export const data = {
  coursSixieme,
  coursSeconde
}