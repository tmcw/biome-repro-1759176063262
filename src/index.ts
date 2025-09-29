/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */

export const x = function () {
	const a = arguments[0];
	return a;
};

console.log(x(1));
