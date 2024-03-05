import { Component } from '@angular/core';
import { NoteabletransactionService } from '../../shared/services/APINotabletransaction/noteabletransaction.service';
import { ApiService } from '../../shared/services/APIEndpoint/api.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-notable-transaction',
  standalone: true,
  imports: [ FormsModule, DialogModule,PaginatorModule, ConfirmDialogModule ],
  providers: [ConfirmationService],
  templateUrl: './notable-transaction.component.html',
  styleUrl: './notable-transaction.component.css'
})
export class NotableTransactionComponent {

  NTData : any = {}
  page: number = 1;
  rows: number = 8;
  visible : boolean = false;
  formData : any = {};
  form : any={}
  id : any;
  tempfile : any;

  constructor(private NoteabletransactionService : NoteabletransactionService, public api : ApiService){}
  API_URL : String = this.api.api();

  ngOnInit():void{
    this.getData();
  }

  async getData(){
    var res = await this.NoteabletransactionService.getData(this.page,this.rows);
    console.log(res);
    this.NTData = res;
  }

  
  edit(data : any){
    this.visible = true;
    this.formData = data;
    this.id = data.id;
    this.form = {Header : "Update", button : 'Update'};
  }

  add(){
    this.tempfile = [];
    this.imageurl = []
    this.id = undefined;
    this.visible = true;
    this.formData = {}
    this.form = {Header : "Add New", button : 'Add'};
  }

  imageurl : any[] = [];
  onFileSelected(event: any) {
    this.tempfile = event.target.files;
    console.log(this.tempfile);

    for (let i = 0; i < event.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageurl.push(event.target.result);
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }

  async saveData(data : any){
    console.log(data.value)
    var res = await this.NoteabletransactionService.saveData(data.value,this.tempfile);
    console.log(res);
    this.NTData['datas'].push(res);
    this.visible = false;
  }

  remove_image(files:any,i: any){
    this.imageurl.splice(i,1);
    console.log(this.tempfile)
    this.tempfile.splice(i, 1);

    console.log(this.imageurl,this.tempfile)
  }

  
}
