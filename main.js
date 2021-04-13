document.getElementById('execBtn').onclick = function(){

	const fizzNum = document.getElementById('fizzNum');	
	const buzzNum = document.getElementById('buzzNum');	
	const pattern = new RegExp(/^[1-9]\d?$/);
	const parseFizz = parseInt(fizzNum.value);
	const parseBuzz = parseInt(buzzNum.value);
	
	items.innerHTML = '';
	
	for (let i = 1; i < 100; i++) {
	
		const item = document.createElement('li');
	
		//FizzNumとBuzzNumに入力された値が半角整数値かチェック
		if (pattern.test(fizzNum.value) && pattern.test(buzzNum.value)) {
			if (i%parseFizz === 0 && i%parseBuzz === 0) {
				item.textContent = `FizzBuzz${i}`;
				items.appendChild(item);
			} else if (i%parseFizz === 0) {
				item.textContent = `Fizz${i}`;
				items.appendChild(item);
			} else if (i%parseBuzz === 0) {
				item.textContent = `Buzz${i}`;
				items.appendChild(item);
			}
		} else {
			item.textContent = `整数値を入力してください`;
			items.appendChild(item);	
			break;
		}
	}
}