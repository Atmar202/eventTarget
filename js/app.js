const mainBox = document.querySelector('.main-box');
const redBox = document.querySelector('.red');
const greenBox = document.querySelector('.green');
const blueBox = document.querySelector('.blue');
const yellowBox = document.querySelector('.yellow');
const mainBoxText =document.querySelector('.main-box_text');

redBox.addEventListener('click', (event) => {

    const redBoxcolor = getComputedStyle(event.target).backgroundColor;
    const redBoxText = event.target.innerText;
    console.log(redBoxcolor);
    console.log(redBoxText);

    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = redBoxText;
});

greenBox.addEventListener('click', (event) => {
    const greenBoxcolor = getComputedStyle(event.target).backgroundColor;
    const greenBoxText = event.target.innerText;
    console.log(greenBoxcolor);
    console.log(greenBoxText);

    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = greenBoxText;

});

blueBox.addEventListener('click', (event) => {
    const blueBoxcolor = getComputedStyle(event.target).backgroundColor;
    const blueBoxText = event.target.innerText;
    console.log(blueBoxcolor);
    console.log(blueBoxText);
    
    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = blueBoxText;
});

yellowBox.addEventListener('click', (event) => {
    const yellowBoxcolor = getComputedStyle(event.target).backgroundColor;
    const yellowBoxText = event.target.innerText;
    console.log(yellowBoxcolor);
    console.log(yellowBoxText);

    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = yellowBoxText;
});