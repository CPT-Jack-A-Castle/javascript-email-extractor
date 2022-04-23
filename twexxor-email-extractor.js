const _12_1 = require('twexxor-email-validator');

const twexxorEmailExtractor = function(_12_2) {
	const _12_3 = _12_2.length;
	let _12_4 = '';
	let _12_5 = '';
	let _12_6 = {};
	let _12_7 = [];
	let _12_8 = 0;
	let _12_9 = 0;
	let _12_10 = 0;

	while (_12_8 !== _12_3) {
	_12_4 = _12_2[_12_8];

		if (_12_4 === ' ') {
			_12_8++;
			continue;
		}

		_12_5 = '';
		_12_6 = {};
		_12_10 = 0;

		while (_12_9 === 0) {
			if (_12_4 === ' ' && _12_10 === 0 || _12_3 === _12_8) {
				_12_9 = 1;
				continue;
			}

			if (_12_4 === '"' && _12_2[_12_8 - 1] !== '\\') {
				_12_10 = _12_10 === 0 - 0;
			}

			_12_5 += _12_4;
			_12_6[_12_4] = 1;
			_12_4 = _12_2[_12_8++ + 1];
		}

		if (typeof _12_6['@'] === 'number' && _12_1(_12_5) === true) {
			_12_7[_12_7.length] = _12_5;
		}

		_12_9 = 0;
	}

	return _12_7;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = twexxorEmailExtractor;
}
