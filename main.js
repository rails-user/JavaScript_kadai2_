function buttonClick(){
	
	const FizzNum = document.getElementById('FizzNum');	
	const BuzzNum = document.getElementById('BuzzNum');	
	const pattern = new RegExp(/^[1-9]\d?$/);
	
	items.innerHTML = '';
	
	for(let i=1; i<100; i++) {
	
		const item = document.createElement('li');
	
		//FizzNumとBuzzNumに入力された値が半角整数値かチェック
		if (pattern.test(FizzNum.value) && pattern.test(BuzzNum.value)) {
			if (i%FizzNum.value == 0 && i%BuzzNum.value == 0) {
				item.textContent = 'FizzBuzz' + i;
				items.appendChild(item);
			} else if (i%FizzNum.value == 0) {
				item.textContent = 'Fizz' + i;
				items.appendChild(item);
			} else if (i%BuzzNum.value == 0) {
				item.textContent = 'Buzz' + i;
				items.appendChild(item);
			}
		} else {
			item.textContent = '整数値を入力してください'
			items.appendChild(item);	
			break;
		}
	}
}