(function (global) {
	function toEmoji(text) {
	  return text
	  .split('')
	  .map(x => x.charCodeAt(0).toString(2))
	  .join(' ')
	  .replace(/[01]/g, d => ['🅾','🅱'][d]);
	}
	function fromEmoji(text) {
		return text
		.replace(/🅾/g,'0').replace(/🅱/g,'1')
		.split(' ')
		.map(b => String.fromCharCode(parseInt(b, 2)))
		.join('');
	}
	global.EmojiBinary = {
		toEmoji: toEmoji,
		fromEmoji: fromEmoji
	};
})(module ? module.exports : window);
