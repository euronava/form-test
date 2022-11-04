import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import Form from "../component/form";

//Evaluar los valores introducidos
//Evaluar si el comportamiento de los inputs al usar los botones

describe('Input behavior', () => {
    it('Name input works', () => {
        render(<Form />)
        const nameInput = screen.getByTestId('test-name')
        fireEvent.change(nameInput, {target: {value: 'Euro'}})

        expect(nameInput.value).toBe("Euro")
    })
})

describe('Value types', () => {
    it('Input values', () => {
        render(<Form />)
        const nameInput = screen.getByTestId('test-name')
        const edadInput = screen.getByTestId('test-edad')
        const checkInput = screen.getByTestId('test-check')
        fireEvent.change(nameInput, {target: {value: 'Euro'}})
        fireEvent.change(edadInput, {target: {value: '123'}})
        fireEvent.click(checkInput)

        expect(typeof nameInput.value).toBe('string')
        expect(typeof +edadInput.value).toBe('number')
        expect(typeof checkInput.checked).toBe('boolean')
    })
})

describe('Reset button', () => {
    it('Reset button works', () => {
        render(<Form />)
        const nameInput = screen.getByTestId('test-name')
        const edadInput = screen.getByTestId('test-edad')
        const checkInput = screen.getByTestId('test-check')
        const resetInput = screen.getByTestId('test-reset')
        fireEvent.change(nameInput, {target: {value: 'Euro'}})
        fireEvent.change(edadInput, {target: {value: '123'}})
        fireEvent.click(checkInput)

        expect(nameInput.value).toBe("Euro")
        expect(edadInput.value).toBe("123")
        expect(checkInput.checked).toBe(true)

        fireEvent.click(resetInput)

        expect(nameInput.value).not.toBe("Euro")
        expect(edadInput.value).not.toBe("123")
        expect(checkInput.checked).toBe(false)
    })
})

describe('Submit button', () => {
    it('Submit button works', () => {
        const onSubmit = jest.fn()

        render(<Form onSubmit={onSubmit}/>)

        const nameInput = screen.getByTestId('test-name')
        const edadInput = screen.getByTestId('test-edad')
        const checkInput = screen.getByTestId('test-check')
        const submitInput = screen.getByTestId('test-submit')
        fireEvent.change(nameInput, {target: {value: 'Euro Nava'}})
        fireEvent.change(edadInput, {target: {value: 123}})
        fireEvent.click(checkInput)

        fireEvent.click(submitInput);

        expect(onSubmit).toHaveBeenCalledWith({
            "nombre": "Euro Nava",
            "edad": 123,
            "check": true
        })
        
    }) 
})