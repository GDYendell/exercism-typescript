export function clean(phoneNumber: string) {
  // Groups: country code, area code, exchange code, subscriber number
  let pattern = /\+?(\d)? ?\(?([2-9]\d{2})\)?[\s.-]*([2-9]\d{2})[\s.-]*(\d{4})\D*$/gm
  let match = Array.from(phoneNumber.matchAll(pattern))[0]

  if (
    match == undefined  // No match
    || (match[1] != undefined && match[1] != '1')  // Country code not 1
  ) {
    throw Error(detectError(phoneNumber))
  }

  return `${match[2]}${match[3]}${match[4]}`
}

function detectError(invalidPhoneNumber: string) {
  // Test pattern without restriction to digits
  let pattern = /\+?(\w)? ?\(?([^\s.-]{3})\)?[\s.-]*([^\s.-]{3})[\s.-]*([^\s.-]*)/gm
  let match = Array.from(invalidPhoneNumber.matchAll(pattern))[0]
  let invalid = `${match[2]}${match[3]}${match[4]}`

  // Check for non-digits
  if (/[a-zA-Z]/.test(invalid)) {
    return 'Letters not permitted'
  } else if (/\D/.test(invalid)) {
    return 'Punctuations not permitted'
  }

  // Test pattern without restriction to total number of digits
  pattern = /\+?(\w)? ?\(?(\w{1,3})\)?[\s.-]*(\w{1,3})[\s.-]*(\w+)/gm
  match = Array.from(invalidPhoneNumber.matchAll(pattern))[0]
  invalid = `${match[2]}${match[3]}${match[4]}`

  // Check lengths
  if (invalid.length < 9) {
    return 'Incorrect number of digits'
  } else if (invalid.length > 10 && match[1] != undefined) {
    return 'More than 11 digits'
  } else if (invalid.length > 9 && match[1] != undefined && match[1] != '1') {
    return '11 digits must start with 1'
  }

  // Check digit restrictions
  if (match[2][0] == "0") {
    return 'Area code cannot start with zero'
  } else if (match[2][0] == "1") {
    return 'Area code cannot start with one'
  } else if (match[3][0] == "0") {
    return 'Exchange code cannot start with zero'
  } else if (match[3][0] == "1") {
    return 'Exchange code cannot start with one'
  }

  return 'Unknown error'
}
