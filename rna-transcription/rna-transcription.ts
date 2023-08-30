export function toRna(sequence: string) {
  let transcribed_sequence: string[] = []
  const codons = sequence.split('')

  for (let i = 0; i < codons.length; i++) {
    if (codons[i] == 'G') {
      transcribed_sequence.push('C');
    } else if (codons[i] == 'C') {
      transcribed_sequence.push('G')
    } else if (codons[i] == 'T') {
      transcribed_sequence.push('A')
    } else if (codons[i] == 'A') {
      transcribed_sequence.push('U')
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  return transcribed_sequence.join('')
}
