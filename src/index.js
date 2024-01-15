console.log("recursive")
function factorial(n) {
  if (n < 0) {
    return "Erreur : n doit être un entier positif.";
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log("iterative")
const computeFactorialIt = (n) => {
  if (n < 0) {
    return "Erreur : n doit être un entier positif.";
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(computeFactorialIt(4));
console.log(computeFactorialIt(5));
console.log(computeFactorialIt(6)); 
console.log(computeFactorialIt(7));
console.log("IterativePower")
/**
 * Cette fonction calcule la puissance d'un nombre de manière itérative.
 * @param {number} n - La base.
 * @param {number} p - L'exposant.
 * @returns {number} - Le résultat de n à la puissance p.
 */
const computePowerIt = (n, p) => {
  // Si n ou p n'est pas un nombre, retourne 0.
  if (typeof n !== 'number' || typeof p !== 'number') { // typeof permet de vérifier le type d'une variable. Ici, on vérifie que n et p sont bien des nombres. Avec l'opérateur !==, on vérifie que les deux variables ne sont pas des nombres.
    return 0;
  }

  // Si p est inférieur à 0, retourne 0.
  if (p < 0) {
    return 0;
  }

  // Si p est égal à 0, retourne 1.
  if (p === 0) {
    return 1;
  }

  // Initialise le résultat à 1.
  let result = 1;

  // Multiplie le résultat par n, p fois.
  for (let i = 0; i < p; i++) {
    result *= n; // Équivaut à result = result * n.
  }

  // Retourne le résultat.
  return result;
}

console.log(computePowerIt(2, 3)); // Affiche le résultat de 2 à la puissance 3.
console.log(computePowerIt(5, 4)); // Affiche le résultat de 5 à la puissance 4.
console.log(computePowerIt(7, 2)); // Affiche le résultat de 7 à la puissance 2.
console.log("recursivePower")
/**
 * Cette fonction calcule la puissance d'un nombre de manière récursive.
 * @param {number} n - La base.
 * @param {number} p - L'exposant.
 * @returns {number} - Le résultat de n à la puissance p.
 */
const computePowerRec = (n, p) => {
  // Si n ou p n'est pas un nombre, retourne 0.
  if (typeof n !== 'number' || typeof p !== 'number') {
    return 0;
  }

  // Si p est inférieur à 0, retourne 0.
  if (p < 0) {
    return 0;
  }

  // Si p est égal à 0, retourne 1.
  if (p === 0) {
    return 1;
  }

  // Appelle la fonction elle-même avec n et p - 1.
  return n * computePowerRec(n, p - 1);
}

console.log(computePowerRec(2, 3)); // Affiche le résultat de 2 à la puissance 3.
console.log(computePowerRec(5, 4)); // Affiche le résultat de 5 à la puissance 4.
console.log(computePowerRec(7, 2)); // Affiche le résultat de 7 à la puissance 2.
console.log("computeSquare")
const computeSquareRoot = (n, p = 0.0001) => {
  // On commence par une estimation initiale de la racine carrée (ici, on prend n).
  let x = n;

  // Tant que l'écart entre le carré de notre estimation et n est supérieur à la précision souhaitée...
  while (Math.abs(x * x - n) > p) {
    // ...on améliore notre estimation en utilisant la formule de Newton.
    x = 0.5 * (x + n / x);
  }

  // Une fois que notre estimation est suffisamment précise, on la retourne.
  return x;
}

// Exemple d'utilisation :
// computeSquareRoot(9) retourne environ 3, car la racine carrée de 9 est 3.
console.log(computeSquareRoot(9));
console.log(computeSquareRoot(2)); 

console.log("Isprime")

// Cette fonction vérifie si un nombre est premier.
// Elle prend un argument : n (le nombre à vérifier).
const isPrimeNumber = (n) => {
  // Si n est inférieur à 2, il n'est pas premier.
  if (n < 2) {
    return false;
  }

  // On vérifie si n a des diviseurs autres que 1 et lui-même.
  for (let i = 2; i * i <= n; i++) {
    // Si n est divisible par i, alors il n'est pas premier.
    if (n % i === 0) {
      return false;
    }
  }

  // Si on n'a pas trouvé de diviseurs, alors n est premier.
  return true;
}
console.log(isPrimeNumber(2)); // Affiche true.
console.log(isPrimeNumber(3)); // Affiche true.
console.log(isPrimeNumber(4)); // Affiche false.
console.log("mostShortPrimeSupperiorOfn")
// Cette fonction trouve le plus petit nombre premier supérieur ou égal à n.
// Elle prend un argument : n (le nombre à partir duquel commencer la recherche).
const findSupPrime = (n) => {
  // On commence à n et on vérifie chaque nombre consécutif.
  for (let i = n; ; i++) {
    // Si i est un nombre premier, on le retourne.
    if (isPrimeNumber(i)) {
      return i;
    }
  }
}
console.log(findSupPrime(2)); // Affiche 2.
console.log(findSupPrime(1)); // Affiche 2.
console.log(findSupPrime(3)); // Affiche 3.
console.log(findSupPrime(4)); // Affiche 5.
console.log("isValidQueenMove")
// Cette fonction compte le nombre de solutions valides pour le problème des n reines.
// Elle prend un argument : n (la taille de l'échiquier et le nombre de reines à placer).
const countValidQueens = (n) => {
  // On initialise l'échiquier. Chaque case est initialement marquée comme non occupée (false).
  const board = Array(n).fill().map(() => Array(n).fill(false)); // Array(n).fill() crée un tableau de n éléments, et Array(n).fill(false) remplit ce tableau avec n valeurs false.

  // Cette fonction vérifie si une reine peut être placée en toute sécurité à une position donnée.
  const isSafe = (board, row, col) => {
    // On vérifie la ligne, la diagonale supérieure gauche et la diagonale inférieure gauche.
    for (let i = 0; i < col; i++) {
      if (board[row][i]) return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j]) return false;
    }

    for (let i = row, j = col; j >= 0 && i < n; i++, j--) {
      if (board[i][j]) return false;
    }

    return true;
  };

  // Cette fonction résout le problème en utilisant le backtracking.
  const solve = (board, col) => {
    // Si toutes les reines sont placées, on a trouvé une solution.
    if (col >= n) return 1;
    let count = 0;

    // On essaie de placer une reine dans chaque ligne de la colonne courante.
    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col)) {
        // On place la reine.
        board[i][col] = true;
        // On passe à la colonne suivante.
        count += solve(board, col + 1);
        // On retire la reine (backtracking).
        board[i][col] = false;
      }
    }

    return count;
  };

  // On commence à résoudre le problème à partir de la première colonne.
  return solve(board, 0);
};

// Exemples d'utilisation :
console.log(countValidQueens(1)); // Affiche 1.
console.log(countValidQueens(2)); // Affiche 0.
console.log(countValidQueens(3)); // Affiche 0.
console.log(countValidQueens(4)); // Affiche 2.
console.log(countValidQueens(5)); // Affiche 10.


