export function score(word: string | undefined): number {
  let score = 0
  for (let letter of (word ?? "").toLowerCase()) {
    score += letter_score(letter)
  }

  return score
}

function letter_score(letter: string): number {
  if ('aeioulnrst'.includes(letter)) {
    return 1
  } else if ('dg'.includes(letter)) {
    return 2
  } else if ('bcmp'.includes(letter)) {
    return 3
  } else if ('fhvwy'.includes(letter)) {
    return 4
  } else if ('k'.includes(letter)) {
    return 5
  } else if ('jx'.includes(letter)) {
    return 8
  } else if ('qz'.includes(letter)) {
    return 10
  } else {
    throw new Error(`Unknown letter: ${letter}`)
  }
}
