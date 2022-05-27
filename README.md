# API LK21 

IP = https://149.56.198.206/

## GET

### /latest
get latest uploaded movies 
```
https://lk21-api.herokuapp.com/api/v1/latest
```

### /genre/:genreName
get movies by genre
```
https://lk21-api.herokuapp.com/api/v1/genre/action
```

### /year/:yearValue
get movies by year
```
https://lk21-api.herokuapp.com/api/v1/year/2022
```

### /trending
get trending movies
```
https://lk21-api.herokuapp.com/api/v1/trending
```

### /search?q=value
search movies
```
https://lk21-api.herokuapp.com/api/v1/search?q=avenger
```

### /resolution/:resolutionValue
get movies by resolution (720 or 1080)
```
https://lk21-api.herokuapp.com/api/v1/resolution/720
```

### /release
```
https://lk21-api.herokuapp.com/api/v1/release
```

### /popular
get popular movies
```
https://lk21-api.herokuapp.com/api/v1/popular
```

### /imdb-rating
get movies by hight rating from imdb
```
https://lk21-api.herokuapp.com/api/v1/imdb-rating
```

### /hd-quality
get movies with hd quality
```
https://lk21-api.herokuapp.com/api/v1/hd-quality
```

### /country/:countryName
get movies by alphabet
```
https://lk21-api.herokuapp.com/api/v1/country/usa
```

### /alphabet/:value
get movies by alphabet
```
https://lk21-api.herokuapp.com/api/v1/alphabet/a
```

### /lists
get a few list categories (year, country, genre)
```
https://lk21-api.herokuapp.com/api/v1/lists/genre
```

```
https://lk21-api.herokuapp.com/api/v1/lists/year
```

```
https://lk21-api.herokuapp.com/api/v1/lists/country
```

## Notes

to next page you can add query ```?page=numPage``` for all endpoints
Example

```
https://lk21-api.herokuapp.com/api/v1/latest?page=2
```

> dibuat oleh **fiandev**