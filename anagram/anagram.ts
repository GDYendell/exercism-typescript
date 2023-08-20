/**
 * Check if two arrays have equal elements
 *
 * @param {number} a First array
 * @param {number} b Second array
 * @param {boolean} any_order Whether arrays can be in any order and still be considered equal
 *
 */
function arrays_equal(a: string[], b: string[], any_order: boolean): boolean {
  if (a.length !== b.length) {
    return false;
  }

  console.log(a, b);

  if (!any_order) {
    a = a.slice().sort();
    b = b.slice().sort();
  }

  console.log(a);
  console.log(b);

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

/**
 * A class to store a word and verify if other words are anagrams
 */
export class Anagram {
  letters: string[];

  constructor(input: string) {
    this.letters = Array.from(input.toLowerCase());
  }

  public matches(...potentials: string[]): string[] {
    let matches: string[] = [];
    for (let potential of potentials) {
      let potentialLetters = Array.from(potential.toLowerCase());
      if (
        arrays_equal(potentialLetters, this.letters, false) &&
        !arrays_equal(potentialLetters, this.letters, true)
      ) {
        matches.push(potential);
      }
    }

    return matches;
  }

}
