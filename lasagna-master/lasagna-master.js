/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Check if cooking complete.
 *
 * @param {number} timer
 *
 * @returns {string} Cooking status
 */
export function cookingStatus(timer) {
    if (timer == undefined) {
        return 'You forgot to set the timer.';
    } else if (timer > 0) {
        return 'Not done, please wait.';
    } else {
        return 'Lasagna is done.';
    }
}

/**
 * Calculate preparation time for layers.
 *
 * @param {Array<number>} layers
 *
 * @returns {number} Preparation time
 */
export function preparationTime(layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

/**
 * Calculate the amount of sauce and 'noodles' needed.
 *
 * @param {Array<string>} layers
 *
 * @returns {object} Object containing sauce and noodles
 */
export function quantities(layers) {
    let sauce = 0.0;
    let noodles = 0;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] == 'sauce') {
            sauce += 0.2
        } else if (layers[i] == 'noodles') {
            noodles += 50;
        }
    }

    return {
        sauce: sauce,
        noodles: noodles
    }
}

/**
 * Add last layer of `friendList` to `myList`
 *
 * @param {Array<string>} friendList List with secret ingredient at the end
 * @param {Array<string>} myList List to add secret ingredient to
 */
export function addSecretIngredient(friendList, myList) {
    myList.push(friendList[friendList.length - 1]);
}

/**
 * Add last layer of `friendList` to `myList`
 *
 * @param {object} recipe Original 2 portion recipe to scale
 * @param {number} portions NUmber of portions to scale the original recipe to
 *
 * @returns {object} Scaled recipe
 */
export function scaleRecipe(recipe, portions) {
    let scaledRecipe = {};
    for (let key in recipe) {
        scaledRecipe[key] = recipe[key] * portions / 2;
    }
    return scaledRecipe;
}
