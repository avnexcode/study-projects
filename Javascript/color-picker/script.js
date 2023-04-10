const container = document.querySelector('.container')
const redBox = container.querySelector('.red');
const greenBox = container.querySelector('.green');
const blueBox = container.querySelector('.blue');;
const redSlide = document.querySelectorAll('input')[0];
const greenSlide = container.querySelectorAll('input')[1];
const blueSlide = container.querySelectorAll('input')[2];
const alphaSlide = container.querySelectorAll('input')[3];
const rgbBox = container.getElementsByClassName('rgbBox')[0];
const rgbTextBox = rgbBox.getElementsByTagName('p')[0];



const minAttOne = document.createAttribute('min');
const maxAttOne = document.createAttribute('max');
minAttOne.value = '0';
maxAttOne.value = '255';
const minAttTwo = document.createAttribute('min');
const maxAttTwo = document.createAttribute('max');
minAttTwo.value = '0';
maxAttTwo.value = '255';
const minAttThree = document.createAttribute('min');
const maxAttThree = document.createAttribute('max');
minAttThree.value = '0';
maxAttThree.value = '255';
const minAttFour = document.createAttribute('min');
const maxAttFour = document.createAttribute('max');
minAttFour.value = '0';
maxAttFour.value = '1';
const stepAtt = document.createAttribute('step');
stepAtt.value = '0.01';

redSlide.setAttributeNode(minAttOne);
redSlide.setAttributeNode(maxAttOne);
greenSlide.setAttributeNode(minAttTwo);
greenSlide.setAttributeNode(maxAttTwo);
blueSlide.setAttributeNode(minAttThree);
blueSlide.setAttributeNode(maxAttThree);
greenSlide.setAttributeNode(maxAttTwo);
alphaSlide.setAttributeNode(minAttFour);
alphaSlide.setAttributeNode(maxAttFour);
alphaSlide.setAttributeNode(stepAtt);


rgbTextBox.style.fontSize = '1.2rem';




redSlide.addEventListener('input',  function() {
    const redRadius = redSlide.value;
    const greenRadius = greenSlide.value;
    const blueRadius = blueSlide.value;
    const alphaRadius = alphaSlide.value;
    container.style.backgroundColor = 'rgba('+ redRadius +','+ greenRadius +','+ blueRadius +','+ alphaRadius +')';
    rgbTextBox.innerHTML = 'rgba('+ redSlide.value +','+ greenSlide.value +','+ blueSlide.value +','+ alphaRadius +')';
})
greenSlide.addEventListener('input', function() {
    const redRadius = redSlide.value;
    const greenRadius = greenSlide.value;
    const blueRadius = blueSlide.value;
    const alphaRadius = alphaSlide.value;
    container.style.backgroundColor = 'rgba('+ redRadius +','+ greenRadius +','+ blueRadius +','+ alphaRadius +')';
    rgbTextBox.innerHTML = 'rgba('+ redSlide.value +','+ greenSlide.value +','+ blueSlide.value +','+ alphaRadius +')';
})
blueSlide.addEventListener('input', function() {
    const redRadius = redSlide.value;
    const greenRadius = greenSlide.value;
    const blueRadius = blueSlide.value;
    const alphaRadius = alphaSlide.value;
    container.style.backgroundColor = 'rgba('+ redRadius +','+ greenRadius +','+ blueRadius +','+ alphaRadius +')';
    rgbTextBox.innerHTML = 'rgba('+ redSlide.value +','+ greenSlide.value +','+ blueSlide.value +','+ alphaRadius +')';
})
alphaSlide.addEventListener('input', function() {
    const redRadius = redSlide.value;
    const greenRadius = greenSlide.value;
    const blueRadius = blueSlide.value;
    const alphaRadius = alphaSlide.value;
    container.style.backgroundColor = 'rgba('+ redRadius +','+ greenRadius +','+ blueRadius +','+ alphaRadius +')';
    rgbTextBox.innerHTML = 'rgba('+ redSlide.value +','+ greenSlide.value +','+ blueSlide.value +','+ alphaRadius +')';
})

// Todo -- Test Console

// console.log(container,redBox,greenBox,blueBox);
// console.log(redSlide,greenSlide,blueSlide);
// console.log(rgbBox);
// console.log(rgbTextBox);