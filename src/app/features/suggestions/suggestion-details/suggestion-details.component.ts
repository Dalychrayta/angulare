import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion!: Suggestion;

  private suggestions: Suggestion[] = [
    // Colle ici exactement les 5 suggestions du Workshop 2
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée...', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee' },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Proposition pour améliorer...', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee' },
    { id: 3, title: 'Créer un système de récompenses', description: 'Mise en place d\'un programme...', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee' },
    { id: 4, title: 'Moderniser l\'interface utilisateur', description: 'Refonte complète...', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente' },
    { id: 5, title: 'Formation à la sécurité informatique', description: 'Organisation d\'une formation...', category: 'Formation', date: new Date('2025-02-05'), status: 'acceptee' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestions.find(s => s.id === id)!;
  }

  back() {
    this.router.navigate(['/suggestions']);
  }
}