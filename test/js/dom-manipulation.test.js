describe('removeClass', () => {
    let myParagraph;

    beforeEach(() => {
        // Arrange
        myParagraph = document.createElement('p');
        myParagraph.classList.add('test-class');
    })

    test('should remove a class from an element', () => {
        // Act
        removeClass(myParagraph, 'test-class');

        // Assert
        expect(myParagraph.classList.contains('test-class')).toBeTruthy();
    })
})

function removeClass(element, classToRemove) {}