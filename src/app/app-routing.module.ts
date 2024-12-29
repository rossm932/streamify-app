import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesRatedComponent } from './pages/movies-rated/movies-rated.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'browse', component: BrowseComponent }, // Movies browse page
  { path: 'movies-rated', component: MoviesRatedComponent }, // Rated movies page
  { path: 'logout', component: LogoutComponent }, // Logout page
  { path: 'movie-details/:id', component: MovieDetailsComponent }, // Movie details with dynamic ID
  { path: '**', redirectTo: '/home' }, // Redirect any unknown paths to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
