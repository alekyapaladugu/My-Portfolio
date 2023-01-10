import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit, AfterViewChecked {
  FormData!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }
  submitForm(formdata: any) {
    console.log(formdata);
    this.contact.postMessage(formdata).subscribe(
      (res) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(res);
      },
      (error) => {
        console.log({ error });
      }
    );
  }
}
