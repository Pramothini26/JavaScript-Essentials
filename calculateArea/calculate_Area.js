let length;
let width;

const calculateArea = function() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length*width;

    document.getElementById('result').innerText = `The calculated Area is: ${area}`;
}