import { Component } from '@angular/core';
import { TestnomialService } from '../../shared/services/APITestnomial/testnomial.service';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-testnomial',
  standalone: true,
  imports: [ FormsModule, DialogModule,PaginatorModule, ConfirmDialogModule ],
  providers: [ConfirmationService],
  templateUrl: './testnomial.component.html',
  styleUrl: './testnomial.component.css'
})
export class TestnomialComponent {

  constructor(private TestnomialService : TestnomialService,private confirmationService: ConfirmationService, private toast: HotToastService){}
  
  page: number = 1;
  rows: number = 8;
  testnomialData : any = {};
  visible : boolean = false;
  formaData : any = {};
  form : any={}
  id : any;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
];

  ngOnInit():void{
    this.getData();
  }

  async getData(){
    var res = await this.TestnomialService.getData(this.page,this.rows);
    console.log(this.page);
    this.testnomialData = res;
  }

  onPageChange(event: any) {
    this.page = (event.page+1);
    this.rows = event.rows;
    console.log(event)
    this.getData();
  }

  edit(data : any){
    this.visible = true;
    this.formaData = data;
    this.id = data.id;
    this.form = {Header : "Update", button : 'Update'};
  }

  add(){
    this.id = undefined;
    this.visible = true;
    this.formaData = {}
    this.form = {Header : "Add New", button : 'Add'};
  }

  async saveData(data : any){
    console.log(data.value);
    if(this.id){
      var res = await this.TestnomialService.updateData({data: data.value, id : this.id});
      console.log(res);
      this.visible = false;
      this.toast.success('Data Updated!!');
    }
    else {
      var res = await this.TestnomialService.saveData(data.value);
      console.log(res);
      this.testnomialData['datas'].push(res);
      this.visible = false;
      this.toast.success('Data Added!!');
    }
  }

  deleteData(data : any){
    this.confirmationService.confirm({
      target: event!.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa-solid fa-circle-info',
      acceptButtonStyleClass:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
      rejectButtonStyleClass:"me-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: async () => {
        //this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        var res = await this.TestnomialService.deleteData({id:data.id});
        console.log(res);
        this.testnomialData['datas'] = this.testnomialData['datas'].filter((resp : any) => resp.id != data.id);
      },
      reject: () => {
        //this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });

  }
}
