// IMPORT MODULES under test here:
import { renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('renderBunny(bunny) takes in a bunny object and returns a dom element - a p tag with class bunny and a name as text content', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const bunny = {
        name: 'Hopper',
        family_id: 1,
    };

    const expected = '<p class="bunny">Hopper</p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny(bunny);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderBunny(bunny) takes in a bunny object and returns a p tag with name Hopper');
});
