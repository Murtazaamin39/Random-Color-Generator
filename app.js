const getColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNum.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.querySelector('h2').innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
}
document.getElementById('btn').addEventListener(
    'click',
    getColor
)
getColor();