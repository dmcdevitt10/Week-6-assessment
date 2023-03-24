const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array with the same length as the original array passed in', () => {
        expect((shuffleArray([1,2,3,4])).length).toBe(4)
    })
    test('shuffleArray should return an array containing the same items as the origianl array passed in', () => {
        expect(shuffleArray(['hey', 'hi', 'hello'])).toContain('hey' && 'hi' && 'hello')
    })
    
})