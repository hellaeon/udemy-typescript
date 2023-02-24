// method -> object
// function -> window, global

// method -> object
// function -> window, global

const book = {
	title: "The Title",
	authors: ["John", "Mark", "Rob"],
	read () {
		console.log(this)
	},

  // we have to pass in this when using function, otherwise the this.title will look in the global scope.
  // printAuthors() {
	// 	this.authors.forEach(function ( author ){
	// 		console.log(this.title, ' - ', author)
	// 	}, this)
	// }

  // We get around this with arrow functions.
  // Arrow functions take the scope of the parent object and do not bind themselves to the 
  // global scope.
	printAuthors() {
		this.authors.forEach( ( author )=>{
			console.log(this.title, ' - ', author)
		})
	}


}

book.printAuthors();

// `this` still belongs to the object
book.stopreading = function () {
	console.log(this)
}

book.stopreading();

// `this` is the global object, the window!
function watchmovie() {
	console.log(this)
}

watchmovie();