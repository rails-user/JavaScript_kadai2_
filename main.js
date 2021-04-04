function buttonClick(){
	
	const FizzNum = document.getElementById('FizzNum');	
	const BuzzNum = document.getElementById('BuzzNum');	
	const pattern = new RegExp(/^[1-9]\d?$/);
	
	items.innerHTML = '';
	
	for(let i=1; i<100; i++) {
	
		const item = document.createElement('li');
	
		//FizzNum��BuzzNum�ɓ��͂��ꂽ�l�����p�����l���`�F�b�N
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
			item.textContent = '�����l����͂��Ă�������'
			items.appendChild(item);	
			break;
		}
	}
}