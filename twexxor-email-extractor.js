const _12_0 = require('twexxor-email-validator');

const twexxorEmailExtractor = function(_12_1) {
	const _12_2 = _12_1.length;
	let _12_3 = '';
	let _12_4 = '';
	let _12_5 = {};
	let _12_6 = [];
	let _12_7 = 0;
	let _12_8 = 0;
	let _12_9 = 0;

	while (_12_7 !== _12_2) {
		_12_3 = _12_1[_12_7];

		if (_12_3 === ' ') {
			_12_7++;
			continue;
		}

		_12_4 = '';
		_12_5 = {};
		_12_9 = 0;

		while (_12_8 === 0) {
			if (_12_3 === ' ' && _12_9 === 0 || _12_2 === _12_7) {
				_12_8 = 1;
				continue;
			}

			if (_12_3 === '"' && _12_1[_12_7 - 1] !== '\\') {
				_12_9 = (_12_9 === 0) - 0;
			}

			_12_4 += _12_3;
			_12_5[_12_3] = 1;
			_12_3 = _12_1[_12_7++ + 1];
		}

		if (typeof _12_5['@'] === 'number' && _12_0(_12_4) === true) {
			_12_6[_12_6.length] = _12_4;
		}

		_12_8 = 0;
	}

	return _12_6;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorEmailExtractor;
}
