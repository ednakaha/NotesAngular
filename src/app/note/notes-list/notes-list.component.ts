import { Component, OnInit } from '@angular/core';
import { NoteModule } from '../../models/note.model';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
 
  allNotes: NoteModule[];

  constructor() { }

  ngOnInit() {
  }

}
