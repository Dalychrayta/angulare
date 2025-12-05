// src/app/features/suggestions/list-suggestion/list-suggestion.component.ts
import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {

  suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée...', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee' },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Proposition pour améliorer...', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee' },
    { id: 3, title: 'Créer un système de récompenses', description: 'Mise en place d\'un programme...', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee' },
    { id: 4, title: 'Moderniser l\'interface utilisateur', description: 'Refonte complète...', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente' },
    { id: 5, title: 'Formation à la sécurité informatique', description: 'Organisation d\'une formation...', category: 'Formation', date: new Date('2025-02-05'), status: 'acceptee' }
  ];

  // Pour la recherche
  searchTitle: string = '';
  searchCategory: string = '';

  // Pour les likes et favoris (comme dans le workshop 2)
  likes: { [key: number]: number } = {};
  favorites: Suggestion[] = [];

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
      s.category.toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  }

  like(suggestion: Suggestion) {
    this.likes[suggestion.id] = (this.likes[suggestion.id] || 0) + 1;
  }

  addToFavorites(suggestion: Suggestion) {
    if (!this.favorites.includes(suggestion)) {
      this.favorites.push(suggestion);
    }
  }
}