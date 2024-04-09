import { CommonModule, NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-home-sub-header",
    standalone: true,
    imports: [
        NgFor,
        CommonModule
    ],
    templateUrl: './home-sub-header.component.html',
})

export class HomeSubHeaderComponent{

    items = [[
        {
            "contentNumber": "6+",
            "contentType": "Câu lạc bộ"
        },
        {
            "contentNumber": "2000+",
            "contentType": "Hội viên"
        },
        
    ],[
        {
            "contentNumber": "40+",
            "contentType": "Bộ môn"
        },
        {
            "contentNumber": "20",
            "contentType": "Huấn luyện viên"
        },
    ]]

}