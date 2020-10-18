import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { Details } from '../detail';
import { FetchService } from '../fetch.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  samplename: string;
  returndata: Details;
  data = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      feedback : new FormControl(''),
      comment : new FormControl('')
      
  });
  
  constructor(private fetchService: FetchService) { }
  getdetails(): void {
    this.fetchService.getdetails().
    subscribe(initialdata => {this.data.setValue({name: initialdata.name, email: initialdata.email, feedback: initialdata.feedback, comment: initialdata.comment});
    this.returndata=initialdata;} );
  }

  ngOnInit(): void {
    this.getdetails();
  
  }
  submit(){ 
    
    this.returndata.name=this.data.get('name').value;
    this.returndata.email=this.data.get('email').value;
    this.returndata.feedback=this.data.get('feedback').value;
    this.returndata.comment=this.data.get('comment').value;
  
    this.fetchService.postdetails(this.returndata).subscribe(rdata =>{(console.log(rdata)); alert("success");});
    
  } 

}
