import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:Category[]=[]

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res=>this.categories=res)
  }

}
