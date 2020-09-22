import { Component } from '@angular/core';
import { HelpService } from './help.service';

@Component({
  selector: 'app-simple-mde',
  templateUrl: './simple-mde.component.html',
  styleUrls: ['./simple-mde.component.scss']
})
export class SimpleMdeComponent {

  public subsectionToEdit = null;

  constructor(private helpService: HelpService) {}

  onChanges($event) {
    this.subsectionToEdit = $event;
    console.log($event, "HELLO")
  }

  updateSubsectionText() {
    this.helpService.updateHelpSubsection(this.subsectionToEdit.id, this.subsectionToEdit).subscribe((response) => {
    });
  }

}
