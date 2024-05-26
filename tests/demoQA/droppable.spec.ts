import {test} from '@playwright/test';
import { DragAndDrop } from '../../page_object/demoQA/interactions/Droppable';

test.describe('DROPPABLE', () => {
    test('droppable', async({page})=>{
        let dragAndDrop = new DragAndDrop(page)
        await dragAndDrop.open()
        await dragAndDrop.dragAndDropToTheElement()
    })
    test('test', async({page}) =>{
        await page.goto('https://demoqa.com/date-picker')
        await page.locator('#datePickerMonthYearInput').click()
        const arrayElement = await page.locator('.react-datepicker__day').allTextContents()
         arrayElement.forEach(text=>{
          console.log(text)
        })
    })
    
})