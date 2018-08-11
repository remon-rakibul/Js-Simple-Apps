var movies = [
				{
					title: 'gone girl',
					rating: 7.9,
					hasWatched: true
				},
				{
					title: 'the accountant',
					rating: 7.8,
					hasWatched: true
				},
				{
					title: 'thor ragnarok',
					rating: 8.1,
					hasWatched: false
				},
				{
					title: 'iron man',
					rating: 7.5,
					hasWatched: true
				}
			];

for (var i = 0; i < movies.length; i++) {
	if (movies[i].hasWatched) {
		console.log('you have watched \'' + movies[i].title + '\' - ' + movies[i].rating + ' stars');
	} else {
		console.log('you have not seen \'' + movies[i].title + '\' - ' + movies[i].rating + ' stars');
	}
}