import {Controller} from "@hotwired/stimulus";


export default class extends Controller{
    static targets = ['count'];

    connect() {
        this.count = 0;
    }
    increment(){
        this.count++;
        this.countTarget.innerHTML = this.count;
    }

}