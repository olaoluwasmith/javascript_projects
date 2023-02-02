const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum rem aperiam ut cumque suscipit quidem quaerat magnam! Earum eligendi ipsum officia doloremque porro architecto repellat aspernatur non maxime. Sunt.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maiores vero, quidem ab eligendi dolor suscipit totam, delectus ad facere, excepturi ipsum quis cumque cupiditate consequatur nobis optio perferendis quod.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, harum! Consectetur aperiam debitis possimus mollitia earum expedita a, magnam esse sapiente dignissimos libero modi fugiat. Dolorem hic id qui corporis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse vitae animi unde incidunt sequi corporis, tempore, quasi eligendi, dolore neque veniam quae explicabo debitis asperiores aspernatur iure quo sint.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure labore praesentium distinctio voluptas similique velit, ab autem adipisci, minus eveniet ea modi inventore deleniti quasi. A obcaecati nemo amet?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum rem aperiam ut cumque suscipit quidem quaerat magnam! Earum eligendi ipsum officia doloremque porro architecto repellat aspernatur non maxime. Sunt.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maiores vero, quidem ab eligendi dolor suscipit totam, delectus ad facere, excepturi ipsum quis cumque cupiditate consequatur nobis optio perferendis quod.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, harum! Consectetur aperiam debitis possimus mollitia earum expedita a, magnam esse sapiente dignissimos libero modi fugiat. Dolorem hic id qui corporis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse vitae animi unde incidunt sequi corporis, tempore, quasi eligendi, dolore neque veniam quae explicabo debitis asperiores aspernatur iure quo sint.',
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});