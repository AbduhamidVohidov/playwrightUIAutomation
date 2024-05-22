import {Page, expect} from "@playwright/test";
export class DragAndDrop {
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
//*
    get dragEl(){
        return '[draggable="true"]'
    }
    get drophereEl(){
        return '#mydropzone'
    }
    get dropList(){
        return '#droppedlist'
    }
    get dragEl3(){
        return '#draggable'
    }
    get drophereEl3(){
        return '#droppable'
    }
    public async dragAndDropElement(text: string){
        const dragTo = this.page.locator(this.drophereEl)
        await this.page.locator(this.dragEl, {hasText: text}).dragTo(dragTo)
        expect(await this.page.locator(this.dropList).textContent()).toContain(
            text,
        );
    }
    public async dragAndDropElementOption2(text: string){
        await this.page.locator(this.dragEl, {hasText: text}).hover()
        await this.page.mouse.down()
        await this.page.locator(this.drophereEl).hover()
        await this.page.mouse.up()
        expect(await this.page.locator(this.dropList).textContent()).toContain(
            text,
        );
    }
    public async dragAndDropElementOption3(text: string){
        const dragTo = this.page.locator(this.drophereEl3)
        await this.page.locator(this.dragEl3, {hasText: text}).dragTo(dragTo)
    //*

    // get dragEl3(){
    //     return '#draggable'
    // }
    // get drophereEl3(){
    //     return '#droppable'
    // }
    // public async dragAndDropElementOption3(text: string){
    //     const dragTo = this.page.locator(this.drophereEl)
    //     await this.page.locator(this.dragEl3, {hasText: text}).dragTo(dragTo)
        // expect(await this.page.locator(this.dropList).textContent()).toContain(
        //     text,
        // );
    }

}
