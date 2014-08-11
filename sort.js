(function(){
	'use strict';

	function getRandArr(count)
	{
		var array = [];
		for (var i = 0; i < count; i++)
		{
			array[i] = Math.floor(Math.random()*count) + 1;
		}
		return array;
	}

	function sortSelection(array)
	{
		var length = array.length;
		for (var i = 0; i < length; ++i) {
			var index = i;
			for (var j = i; j < length; ++j) {
				if (array[j] < array[index]) {
					index = j;
				}
			}
			array[i] = [array[index], array[index] = array[i]][0]; // swap
		}
		return array;
	}

	function sortBubble(array)
	{
		for (var i = 0, length = array.length; i < length - 1; ++i) {
			for (var j = length - 1; j > i; --j) {
				if (array[i] > array[j]) {
					array[i] = [array[j], array[j] = array[i]][0]; // swap
				}
			}
		}
		return array;
	}

	function sortInsertion(array)
	{
		var length = array.length;
		for (var i = length - 1; i > 0; --i) {
			if (array[i] > array[i - 1]) {
				array[i - 1] = [array[i], array[i] = array[i - 1]][0]; // swap
			}
		}
		for (var i = 1; i < length; ++i) {
			var j = i;
			var current = array[i];
			while (current < array[j - 1]) {
				array[j] = array[j - 1];
				--j;
			}
			array[j] = current;
		}
		return array;
	}

	function sortQuick(array)
	{
		var sortCore = function(array, first, last)
		{
			var i = first,
				j = last,
				x = array[Math.floor((first + last) / 2)];

			do {
				while (array[i] < x) ++i;
				while (array[j] > x) --j;

				if (i <= j) {
					if (array[i] > array[j]) {
						array[j] = [array[i], array[i] = array[j]][0]; // swap
					}

					++i; --j;
				}
			} while (i <= j);
			
			if (i < last) sortCore(array, i, last);
			if (first < j) sortCore(array, first, j);

			return array;
		};

		return sortCore(array, 0, array.length-1);
	}


	// usage:

	//var input = getRandArr(10);
	//console.log(input);

	//console.log(sortSelection(input));
	//console.log(sortBubble(input));
	//console.log(sortInsertion(input));
	//console.log(sortQuick(input));


})();