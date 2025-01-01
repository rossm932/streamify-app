import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Include FormsModule here
})
export class BrowseComponent {
  movies: any[] = []; 
  filteredMovies: any[] = []; 
  searchText: string = ''; 
  filterGenre: string = '';
  filterRating: number | null = null; 

  constructor() {}

  ngOnInit(): void {
    // Initialize movies (replace with actual service call if needed)
    this.movies = [
      { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, director: 'Christopher Nolan' },
      { title: 'The Dark Knight', genre: 'Action', rating: 9.0, director: 'Christopher Nolan' },
      { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, director: 'Christopher Nolan' },
      { title: 'The Godfather', genre: 'Drama', rating: 9.2, director: 'Francis Ford Coppola' },
    ];
    this.filteredMovies = [...this.movies]; // Initially display all movies
  }

  
  onSearch(): void {
    this.filteredMovies = this.movies.filter((movie) => {
      return (
        (this.searchText ? movie.title.toLowerCase().includes(this.searchText.toLowerCase()) : true) &&
        (this.filterGenre ? movie.genre.toLowerCase() === this.filterGenre.toLowerCase() : true) &&
        (this.filterRating ? movie.rating >= this.filterRating : true)
      );
    });
  }


  clearFilters(): void {
    this.searchText = '';
    this.filterGenre = '';
    this.filterRating = null;
    this.filteredMovies = [...this.movies]; 
  }
}
