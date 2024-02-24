// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

let input = [3, 2, 1, 13, 8, 5, 0, 1];

function merge(left, right) {
	let result = [];
	while (left.length != 0 && right.length != 0) {
		// by using the .shift() method on the array i always compare
		// just the first element of both sides without the need of a
		// variable index
		if (left[0] <= right[0]) result.push(left.shift());
		else result.push(right.shift());
	}
	return [...result, ...left, ...right];
}

function mergeSort(data) {
	if (data.length === 1) return data;
	let midValue = Math.floor(data.length / 2);
	let leftSide = data.slice(0, midValue);
	let rightSide = data.slice(midValue);

	return merge(mergeSort(leftSide), mergeSort(rightSide));
}
