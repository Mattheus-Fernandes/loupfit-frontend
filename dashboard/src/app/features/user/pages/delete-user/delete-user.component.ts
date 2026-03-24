import { Component, inject, OnInit } from '@angular/core';
import { DeleteColumns } from './config/delete-columns.config';
import { UserService } from 'src/app/core/services/user.service';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { TableColumn } from 'src/app/core/models/types/table-column.type';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  protected columns: TableColumn[] = []
  protected usersList: UsersResponse = []
  protected usersListFiltered: UsersResponse = []

  private readonly _userService = inject(UserService)

  public openModal: boolean = false
  public user: IUser = {} as IUser
  public userDelete: IUser = {} as IUser
  public confirmed: boolean = false
  public errorMsg: string = ""
  public screenWidth$: Observable<any> = fromEvent(window, "resize")



  ngOnInit() {
    this.getAllUsers()


    this.screenWidth$
      .pipe(
        startWith(window.innerWidth),
        map(() => {
          const width = window.innerWidth
          const IS_MOBILE = width < 768
          const IS_TABLET = width >= 768 && width < 1024

          if(IS_MOBILE) {
            this.columns = DeleteColumns.mobileColumns()
          } else if(IS_TABLET) {
            this.columns = DeleteColumns.tabletColumns()
          } else {
            this.columns = DeleteColumns.desktopColumns()
          }
        })
      )
      .subscribe()

  
  }

  private getAllUsers() {
    this._userService.getAllUsers().subscribe(
      (res: UsersResponse) => {
        this.usersList = res
        this.usersListFiltered = this.usersList
      }
    )
  }

  onSearch(value: string) {
    this.usersListFiltered = this.usersList.filter((users: IUser) => users.name.toLowerCase().includes(value.toLowerCase()))

  }

  getUserSelected(user: IUser) {
    this.user = user
    this.openModal = true
    this.confirmed = false
    this.errorMsg = ""
  }

  btnCancel() {
    this.openModal = false
  }

  btnConfirm(id: number) {
    this._userService.deleteUser(id).subscribe({
      next: (res: IUser) => {
        this.userDelete = res
        this.getAllUsers()
        this.confirmed = true

      },
      error: (err: HttpErrorResponse) => {
        this.confirmed = false
        this.errorMsg = err.error.msg as string
      }
    })
  }

  btnCloseModal() {
    this.openModal = false
  }
}
